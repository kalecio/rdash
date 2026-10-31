import { mkdir, writeFile } from 'node:fs/promises'
import path from 'node:path'
import nextEnv from '@next/env'
import { normalizeSiteContent } from '../lib/site-content-normalization'

nextEnv.loadEnvConfig(process.cwd())

type PayloadList<T> = { docs: T[]; hasNextPage?: boolean; nextPage?: number | null }

const cmsURL = (process.env.STATIC_CMS_URL || 'http://127.0.0.1:3000').replace(/\/+$/, '')
const mediaURL = (process.env.STATIC_CMS_MEDIA_URL || cmsURL).replace(/\/+$/, '')

async function getJSON<T>(endpoint: string): Promise<T> {
  const url = new URL(endpoint, `${cmsURL}/`)
  const response = await fetch(url, { headers: { accept: 'application/json' }, signal: AbortSignal.timeout(30_000) })
  if (!response.ok) throw new Error(`A API do CMS respondeu ${response.status} em ${url.pathname}.`)
  return await response.json() as T
}

async function getCollection<T>(slug: string, sort = 'order'): Promise<T[]> {
  const docs: T[] = []
  let page = 1
  while (true) {
    const query = new URLSearchParams({ depth: '2', limit: '100', page: String(page), sort, 'where[published][equals]': 'true' })
    const result = await getJSON<PayloadList<T>>(`/api/${slug}?${query}`)
    docs.push(...result.docs)
    if (!result.hasNextPage) return docs
    page = result.nextPage ?? page + 1
  }
}

const global = <T>(slug: string) => getJSON<T>(`/api/globals/${slug}?depth=2`)

const [site, home, community, eventsPage, galleryPage, leaderboardPage, events, albums, news, games, players, visual, themeSettings] = await Promise.all([
  global<Record<string, unknown>>('site'),
  global<Record<string, unknown>>('home'),
  global<Record<string, unknown>>('community'),
  global<Record<string, unknown>>('events-page'),
  global<Record<string, unknown>>('gallery-page'),
  global<Record<string, unknown>>('leaderboard-page'),
  getCollection('events'),
  getCollection('albums'),
  getCollection('news'),
  getCollection('games'),
  getCollection('players', '-score'),
  global<{ assets?: Array<Record<string, unknown>> }>('visual-assets'),
  global<Record<string, unknown>>('theme-settings'),
])

const content = normalizeSiteContent({ site, home, community, eventsPage, galleryPage, leaderboardPage, events, albums, news, games, players, visual, themeSettings }, mediaURL)
const outputPath = path.resolve(process.cwd(), 'frontend-static/content.generated.json')
await mkdir(path.dirname(outputPath), { recursive: true })
await writeFile(outputPath, `${JSON.stringify(content)}\n`, 'utf8')
console.info(`Baked CMS content for ${content.events.length} events, ${content.albums.length} albums, ${content.news.length} news items, and ${content.games.length} games.`)
