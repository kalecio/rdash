import 'server-only'
import { cache } from 'react'
import { getPayload } from 'payload'
import config from '@payload-config'
import { draftMode } from 'next/headers'
import * as defaults from '@/cms/defaults'
import { normalizeSiteContent } from './site-content-normalization'
import type { SiteContent } from './content-types'

export const getSiteContent = cache(async (): Promise<SiteContent> => {
  const payload = await getPayload({ config })
  const preview = (await draftMode()).isEnabled
  const readOptions = { overrideAccess: preview, draft: preview }
  const global = async (slug: 'site' | 'home' | 'community' | 'events-page' | 'gallery-page' | 'leaderboard-page', initial: object) => {
    const doc = await payload.findGlobal({ slug, depth: 1, ...readOptions })
    return { ...initial, ...doc } as Record<string, unknown>
  }
  const list = async (collection: 'events' | 'albums' | 'news' | 'games' | 'players', sort = 'order') => {
    const result = await payload.find({ collection, sort, pagination: false, depth: 1, ...readOptions })
    return result.docs as unknown[]
  }
  const [site, home, community, eventsPage, galleryPage, leaderboardPage, events, albums, news, games, players, visual, themeSettings] = await Promise.all([
    global('site', defaults.defaultSite), global('home', defaults.defaultHome), global('community', defaults.defaultCommunity), global('events-page', defaults.defaultEventsPage), global('gallery-page', defaults.defaultGalleryPage), global('leaderboard-page', defaults.defaultLeaderboardPage),
    list('events'), list('albums'), list('news'), list('games'), list('players', '-score'),
    payload.findGlobal({ slug: 'visual-assets', depth: 1, overrideAccess: false }) as Promise<{ assets?: Array<Record<string, unknown>> }>,
    payload.findGlobal({ slug: 'theme-settings', depth: 1, overrideAccess: false }) as unknown as Promise<Record<string, unknown>>,
  ])
  return normalizeSiteContent({ site, home, community, eventsPage, galleryPage, leaderboardPage, events, albums, news, games, players, visual, themeSettings })
})
