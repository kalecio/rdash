import assert from 'node:assert/strict'
import { after, before, test } from 'node:test'
import { mkdtemp, rm, writeFile } from 'node:fs/promises'
import { tmpdir } from 'node:os'
import path from 'node:path'
import type { Payload } from 'payload'

let payload: Payload
let directory: string
before(async () => {
  directory = await mkdtemp(path.join(tmpdir(), 'rdash-cms-'))
  process.env.DATABASE_URL = `file:${directory}/test.db`
  process.env.MEDIA_DIR = `${directory}/media`
  process.env.PAYLOAD_SECRET = 'isolated-test-secret-not-used-outside-tests'
  Object.assign(process.env, { NODE_ENV: 'development' })
  const { getPayload } = await import('payload')
  const { default: config } = await import('../payload.config')
  payload = await getPayload({ config })
})
after(async () => { if (payload) await payload.destroy(); if (directory) await rm(directory, { recursive: true, force: true }) })

test('anonymous users can only read published content and cannot mutate it', async () => {
  const data = { title: 'Evento de teste', description: 'Teste', image: '/assets/events-detail.png', mobileImage: '/assets/events-detail.png', detailImage: '/assets/events-detail.png', status: 'upcoming' as const, href: '/eventos', order: 1 }
  await payload.create({ collection: 'events', data: { ...data, slug: 'published-test', published: true } })
  await payload.create({ collection: 'events', data: { ...data, slug: 'private-test', published: false } })
  const visible = await payload.find({ collection: 'events', overrideAccess: false })
  assert.deepEqual(visible.docs.map(doc => doc.slug), ['published-test'])
  await assert.rejects(payload.create({ collection: 'events', data: { ...data, slug: 'forbidden-test' }, overrideAccess: false }))
  await assert.rejects(payload.updateGlobal({ slug: 'community', data: { title: 'Forbidden' }, overrideAccess: false }))
  await assert.rejects(payload.find({ collection: 'users', overrideAccess: false }))
})

test('authenticated editors can update page copy and upload media', async () => {
  const user = await payload.create({ collection: 'users', data: { name: 'Test editor', email: 'editor@example.test', password: 'only-a-temporary-test-password' } })
  const updated = await payload.updateGlobal({ slug: 'community', data: { title: 'Comunidade editada' }, user, overrideAccess: false })
  assert.equal(updated.title, 'Comunidade editada')
  const imagePath = path.join(directory, 'image.png')
  await writeFile(imagePath, Buffer.from('iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/x8AAwMCAO+aK1cAAAAASUVORK5CYII=', 'base64'))
  await assert.rejects(payload.create({ collection: 'media', data: { alt: 'Forbidden' }, filePath: imagePath, overrideAccess: false }))
  const media = await payload.create({ collection: 'media', data: { alt: 'Imagem de teste' }, filePath: imagePath, user, overrideAccess: false })
  assert.ok(media.url?.includes('/api/media/file/'))
  const album = await payload.create({ collection: 'albums', data: { slug: 'test-album', title: 'Álbum', description: 'Teste', image: '/assets/gallery-night.png', mobileImage: '/assets/gallery-night.png', imageUpload: media.id, published: true }, user, overrideAccess: false })
  const read = await payload.findByID({ collection: 'albums', id: album.id, depth: 1, overrideAccess: false })
  assert.equal(typeof read.imageUpload, 'object')
  await payload.delete({ collection: 'users', id: user.id })
})

test('seed imports existing content once and preserves later edits and deletions', async () => {
  const { seedContent } = await import('../cms/seed')
  await seedContent(payload)
  const first = await payload.find({ collection: 'games', sort: 'order', pagination: false })
  assert.equal(first.totalDocs, 6)
  await payload.update({ collection: 'games', id: first.docs[0].id, data: { title: 'Custom title' } })
  for (const doc of first.docs) await payload.delete({ collection: 'games', id: doc.id })
  await seedContent(payload)
  assert.equal((await payload.count({ collection: 'games' })).totalDocs, 0)
})
