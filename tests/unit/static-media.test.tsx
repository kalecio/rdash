import { afterEach, describe, expect, it, vi } from 'vitest'
import { mkdtemp, readFile, rm } from 'node:fs/promises'
import os from 'node:os'
import path from 'node:path'
import { collectPayloadUploads, rewritePayloadUploadURLs, stagePayloadUploads } from '../../scripts/static-media'

describe('static CMS media', () => {
  let tempDir: string | undefined

  afterEach(async () => {
    vi.unstubAllGlobals()
    if (tempDir) await rm(tempDir, { recursive: true, force: true })
    tempDir = undefined
  })

  it('copies referenced media and audio into the static public directory and rewrites their URLs', async () => {
    tempDir = await mkdtemp(path.join(os.tmpdir(), 'rdash-static-media-'))
    const source = {
      event: { imageUpload: { id: 'image-1', filename: 'poster image.webp', url: '/api/media/file/poster%20image.webp' } },
      theme: { music: { sourceUpload: { id: 'audio-1', filename: 'theme.mp3', url: 'http://localhost:3000/api/audio/file/theme.mp3' } } },
    }
    const uploads = collectPayloadUploads(source)
    vi.stubGlobal('fetch', vi.fn(async () => new Response(new Uint8Array([1, 2, 3]))))

    const rewritten = await stagePayloadUploads(uploads, 'http://127.0.0.1:3000', tempDir)
    const content = rewritePayloadUploadURLs(source, rewritten)

    expect(content.event.imageUpload.url).toBe('/cms-media/media/poster%20image.webp')
    expect(content.theme.music.sourceUpload.url).toBe('/cms-media/audio/theme.mp3')
    expect(await readFile(path.join(tempDir, 'cms-media/media/poster image.webp'))).toEqual(Buffer.from([1, 2, 3]))
    expect(await readFile(path.join(tempDir, 'cms-media/audio/theme.mp3'))).toEqual(Buffer.from([1, 2, 3]))
    expect(fetch).toHaveBeenCalledTimes(2)
  })

  it('ignores ordinary external URLs and clears old staged files when no uploads are referenced', async () => {
    tempDir = await mkdtemp(path.join(os.tmpdir(), 'rdash-static-media-'))
    const uploads = collectPayloadUploads({ image: { filename: 'external.png', url: 'https://images.example/external.png' } })
    expect(uploads).toHaveLength(0)
    expect(await stagePayloadUploads(uploads, 'http://127.0.0.1:3000', tempDir)).toEqual(new Map())
  })
})
