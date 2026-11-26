import { afterEach, describe, expect, it, vi } from 'vitest'
import { mkdtemp, readFile, rm } from 'node:fs/promises'
import os from 'node:os'
import path from 'node:path'
import * as defaults from '../../cms/defaults'
import { normalizeSiteContent } from '../../lib/site-content-normalization'
import { collectPayloadUploads, rewritePayloadUploadURLs, stagePayloadUploads } from '../../scripts/static-media'

const cmsURL = 'https://cms.example.test'

function mediaFields(name: string, fields: string[], populated: boolean) {
  return Object.fromEntries(fields.flatMap(field => [
    [field, `/assets/${name}-${field}.png`],
    [`${field}Upload`, populated ? {
      id: `${name}-${field}`,
      filename: `${name}-${field}.webp`,
      url: `/api/media/file/${name}-${field}.webp`,
    } : null],
  ]))
}

function sources(populated = true) {
  return {
    events: [{ ...defaults.defaultEvents[0], ...mediaFields('event', ['image', 'mobileImage', 'detailImage'], populated) }],
    albums: [{
      ...defaults.defaultAlbums[0],
      ...mediaFields('album', ['image', 'mobileImage'], populated),
      photos: [{ label: 'Nested photo', ...mediaFields('photo', ['image', 'mobileImage'], populated) }],
    }],
    news: [{ ...defaults.defaultNews[0], ...mediaFields('news', ['image'], populated) }],
    games: [{ ...defaults.defaultGames[0], ...mediaFields('game', ['image'], populated) }],
    players: [
      { ...defaults.defaultPlayers[0], ...mediaFields('player', ['image'], populated), rank: 99 },
      { ...defaults.defaultPlayers[1], ...mediaFields('runner-up', ['image'], populated), rank: 98 },
    ],
  }
}

function imagePaths(content: ReturnType<typeof normalizeSiteContent>) {
  return [
    content.events[0].image, content.events[0].mobileImage, content.events[0].detailImage,
    content.albums[0].image, content.albums[0].mobileImage,
    content.albums[0].photos[0].image, content.albums[0].photos[0].mobileImage,
    content.news[0].image, content.games[0].image,
    content.players[0].image, content.players[1].image,
  ]
}

describe.each(['live', 'baked'] as const)('%s collection media', pipeline => {
  let tempDir: string | undefined

  afterEach(async () => {
    vi.unstubAllGlobals()
    if (tempDir) await rm(tempDir, { recursive: true, force: true })
    tempDir = undefined
  })

  async function contentFrom(source: ReturnType<typeof sources>) {
    if (pipeline === 'live') return normalizeSiteContent(source)

    // Match the static builder: collect before normalization, stage, then rewrite.
    tempDir ??= await mkdtemp(path.join(os.tmpdir(), 'rdash-content-media-'))
    vi.stubGlobal('fetch', vi.fn(async () => new Response(new Uint8Array([1, 2, 3]))))
    const uploads = await stagePayloadUploads(collectPayloadUploads(source), cmsURL, tempDir)
    return JSON.parse(JSON.stringify(rewritePayloadUploadURLs(normalizeSiteContent(source, cmsURL), uploads))) as ReturnType<typeof normalizeSiteContent>
  }

  it('uses replacement uploads for every collection image, including nested photos', async () => {
    const source = sources()
    const original = structuredClone(source)
    const content = await contentFrom(source)
    const prefix = pipeline === 'live' ? '/api/media/file/' : '/cms-media/media/'

    expect(imagePaths(content)).toEqual([
      'event-image', 'event-mobileImage', 'event-detailImage',
      'album-image', 'album-mobileImage', 'photo-image', 'photo-mobileImage',
      'news-image', 'game-image', 'player-image', 'runner-up-image',
    ].map(name => `${prefix}${name}.webp`))
    expect(content.players.map(player => player.rank)).toEqual([1, 2])
    expect(source).toEqual(original)
    expect(JSON.stringify(content)).not.toContain('Upload')

    if (pipeline === 'baked') {
      expect(fetch).toHaveBeenCalledTimes(11)
      expect(vi.mocked(fetch).mock.calls.map(([url]) => String(url))).toContain(`${cmsURL}/api/media/file/photo-image.webp`)
      expect(await readFile(path.join(tempDir!, 'cms-media/media/photo-image.webp'))).toEqual(Buffer.from([1, 2, 3]))
    }
  })

  it('restores textual paths after replacement uploads are removed', async () => {
    const uploaded = await contentFrom(sources())
    const restored = await contentFrom(sources(false))

    expect(imagePaths(restored)).toEqual([
      'event-image', 'event-mobileImage', 'event-detailImage',
      'album-image', 'album-mobileImage', 'photo-image', 'photo-mobileImage',
      'news-image', 'game-image', 'player-image', 'runner-up-image',
    ].map(name => `/assets/${name}.png`))
    expect(imagePaths(restored)).not.toEqual(imagePaths(uploaded))
    if (pipeline === 'baked') {
      expect(fetch).not.toHaveBeenCalled()
      await expect(readFile(path.join(tempDir!, 'cms-media/media/photo-image.webp'))).rejects.toMatchObject({ code: 'ENOENT' })
    }
  })
})

it('uses the CMS media base for collection uploads without changing textual paths', () => {
  expect(imagePaths(normalizeSiteContent(sources(), cmsURL)).every(url => url.startsWith(`${cmsURL}/api/media/file/`))).toBe(true)
  expect(imagePaths(normalizeSiteContent(sources(false), cmsURL)).every(url => url.startsWith('/assets/'))).toBe(true)
})

it('preserves defaults and intentionally empty collections', () => {
  const content = normalizeSiteContent({})
  expect(content.events).toEqual(defaults.defaultEvents)
  expect(content.albums).toEqual(defaults.defaultAlbums)
  expect(normalizeSiteContent({ events: [], albums: [], news: [], games: [], players: [] })).toMatchObject({
    events: [], albums: [], news: [], games: [], players: [],
  })
})
