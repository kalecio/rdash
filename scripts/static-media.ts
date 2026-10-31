import { mkdir, rm, writeFile } from 'node:fs/promises'
import path from 'node:path'

type PayloadUpload = { filename: string; pathname: string; collection: 'media' | 'audio' }

export function collectPayloadUploads(...sources: unknown[]): PayloadUpload[] {
  const uploads = new Map<string, PayloadUpload>()
  const visit = (value: unknown) => {
    if (Array.isArray(value)) {
      value.forEach(visit)
      return
    }
    if (!value || typeof value !== 'object') return

    const record = value as Record<string, unknown>
    if (typeof record.url === 'string' && typeof record.filename === 'string') {
      let url: URL
      try {
        url = new URL(record.url, 'https://payload.invalid')
      } catch {
        url = new URL('https://payload.invalid')
      }
      const match = url.pathname.match(/^\/api\/(media|audio)\/file\/([^/]+)$/)
      if (match) {
        const collection = match[1] as PayloadUpload['collection']
        const pathname = url.pathname
        uploads.set(pathname, { filename: decodeURIComponent(match[2]), pathname, collection })
      }
    }
    Object.values(record).forEach(visit)
  }
  sources.forEach(visit)
  return [...uploads.values()]
}

export function rewritePayloadUploadURLs<T>(value: T, uploads: Map<string, string>): T {
  if (Array.isArray(value)) return value.map(item => rewritePayloadUploadURLs(item, uploads)) as T
  if (typeof value === 'string') {
    try {
      const url = new URL(value, 'https://payload.invalid')
      return (uploads.get(url.pathname) ?? value) as T
    } catch {
      return value
    }
  }
  if (!value || typeof value !== 'object') return value
  return Object.fromEntries(Object.entries(value).map(([key, item]) => [key, rewritePayloadUploadURLs(item, uploads)])) as T
}

export async function stagePayloadUploads(files: PayloadUpload[], cmsURL: string, publicDir: string): Promise<Map<string, string>> {
  const outputDir = path.join(publicDir, 'cms-media')
  await rm(outputDir, { recursive: true, force: true })
  if (!files.length) return new Map()

  await mkdir(outputDir, { recursive: true })
  const rewritten = new Map<string, string>()
  for (const file of files) {
    const response = await fetch(new URL(file.pathname, `${cmsURL.replace(/\/+$/, '')}/`), { signal: AbortSignal.timeout(60_000) })
    if (!response.ok) throw new Error(`Não foi possível baixar o upload ${file.filename} do CMS (HTTP ${response.status}).`)

    const filename = path.basename(file.filename)
    if (!filename || filename === '.' || filename === path.sep) throw new Error(`Nome de arquivo inválido recebido do CMS: ${file.filename}`)
    const encodedFilename = encodeURIComponent(filename)
    const destination = path.join(outputDir, file.collection, filename)
    await mkdir(path.dirname(destination), { recursive: true })
    await writeFile(destination, new Uint8Array(await response.arrayBuffer()))
    rewritten.set(file.pathname, `/cms-media/${file.collection}/${encodedFilename}`)
  }
  return rewritten
}
