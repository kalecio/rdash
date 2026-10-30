import 'server-only'
import { cache } from 'react'
import { getPayload } from 'payload'
import config from '@payload-config'
import * as defaults from '@/cms/defaults'
import type { SiteContent } from './content-types'

// Upload relationships are resolved only on the server. No auth/user documents enter the public context.
export function resolveUploads(value: unknown): unknown {
  if (Array.isArray(value)) return value.map(resolveUploads)
  if (!value || typeof value !== 'object') return value
  const result: Record<string, unknown> = {}
  for (const [key, item] of Object.entries(value)) {
    if (!key.endsWith('Upload')) result[key] = resolveUploads(item)
  }
  for (const [key, item] of Object.entries(value)) {
    if (key.endsWith('Upload') && item && typeof item === 'object' && 'url' in item && typeof item.url === 'string') result[key.slice(0, -6)] = item.url
  }
  return result
}

export const getSiteContent = cache(async (): Promise<SiteContent> => {
  const payload = await getPayload({ config })
  const global = async (slug: 'site' | 'home' | 'community' | 'events-page' | 'gallery-page' | 'leaderboard-page', initial: object) => {
    const doc = await payload.findGlobal({ slug, depth: 1, overrideAccess: false })
    return { ...initial, ...resolveUploads(doc) as object }
  }
  const list = async (collection: 'events' | 'albums' | 'news' | 'games' | 'players', sort = 'order') => {
    const result = await payload.find({ collection, sort, pagination: false, depth: 1, overrideAccess: false })
    return resolveUploads(result.docs)
  }
  const [site, home, community, eventsPage, galleryPage, leaderboardPage, events, albums, news, games, players, visual] = await Promise.all([
    global('site', defaults.defaultSite), global('home', defaults.defaultHome), global('community', defaults.defaultCommunity), global('events-page', defaults.defaultEventsPage), global('gallery-page', defaults.defaultGalleryPage), global('leaderboard-page', defaults.defaultLeaderboardPage),
    list('events'), list('albums'), list('news'), list('games'), list('players', '-score'),
    payload.findGlobal({ slug: 'visual-assets', depth: 1, overrideAccess: false }),
  ])
  const assets: Record<string, string> = {}
  for (const asset of visual.assets ?? []) {
    const upload = asset.upload
    assets[asset.key] = upload && typeof upload === 'object' && upload.url ? upload.url : asset.url
  }
  return { site, home, community, eventsPage, galleryPage, leaderboardPage, events, albums, news, games, players: (players as typeof defaults.defaultPlayers).map((player, index) => ({ ...player, rank: index + 1 })), assets } as SiteContent
})
