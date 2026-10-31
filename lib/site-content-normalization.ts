import * as defaults from '@/cms/defaults'
import type { SiteContent } from './content-types'
import { defaultThemeSettings, type ThemeSettings } from './themes'
import { upgradeSeedSEO } from './seed-seo-upgrade'

type ContentSources = {
  site?: Record<string, unknown>
  home?: Record<string, unknown>
  community?: Record<string, unknown>
  eventsPage?: Record<string, unknown>
  galleryPage?: Record<string, unknown>
  leaderboardPage?: Record<string, unknown>
  events?: unknown[]
  albums?: unknown[]
  news?: unknown[]
  games?: unknown[]
  players?: unknown[]
  visual?: { assets?: Array<Record<string, unknown>> }
  themeSettings?: Record<string, unknown>
}

function record(value: unknown): Record<string, unknown> {
  return value && typeof value === 'object' ? value as Record<string, unknown> : {}
}

function uploadedURL(value: unknown): string | undefined {
  if (!value || typeof value !== 'object' || !('url' in value) || typeof value.url !== 'string') return undefined
  return value.url
}

function withMediaBase(url: string, mediaBase: string): string {
  return mediaBase && url.startsWith('/api/') ? new URL(url, mediaBase).toString() : url
}

export function resolveUploads(value: unknown, mediaBase = ''): unknown {
  if (Array.isArray(value)) return value.map(item => resolveUploads(item, mediaBase))
  if (!value || typeof value !== 'object') return value
  const result: Record<string, unknown> = {}
  for (const [key, item] of Object.entries(value)) {
    if (!key.endsWith('Upload')) result[key] = resolveUploads(item, mediaBase)
  }
  for (const [key, item] of Object.entries(value)) {
    if (key.endsWith('Upload') && item && typeof item === 'object' && 'url' in item && typeof item.url === 'string') {
      result[key.slice(0, -6)] = withMediaBase(item.url, mediaBase)
    }
  }
  return result
}

export function normalizeSiteContent(source: ContentSources, mediaBase = ''): SiteContent {
  const global = (key: 'site' | 'home' | 'community' | 'eventsPage' | 'galleryPage' | 'leaderboardPage', initial: object) =>
    upgradeSeedSEO(key, initial, resolveUploads(source[key] ?? {}, mediaBase) as object)

  const assets: Record<string, string> = {}
  for (const asset of source.visual?.assets ?? []) {
    assets[String(asset.key)] = withMediaBase(uploadedURL(asset.upload) ?? String(asset.url ?? ''), mediaBase)
  }

  const themeDocument = source.themeSettings ?? {}
  const resolved = resolveUploads(themeDocument, mediaBase) as Partial<ThemeSettings>
  const themeSettings: ThemeSettings = {
    ...defaultThemeSettings,
    ...resolved,
    redMusic: { ...defaultThemeSettings.redMusic, ...resolved.redMusic },
    blue: { ...defaultThemeSettings.blue, ...resolved.blue },
    purple: { ...defaultThemeSettings.purple, ...resolved.purple },
  }

  for (const theme of ['blue', 'purple'] as const) {
    const profile = resolved[theme]
    const rawProfile = record(themeDocument[theme])
    const configuredAssets = Array.isArray(rawProfile.assets) ? rawProfile.assets : defaultThemeSettings[theme].assets
    themeSettings[theme] = {
      colors: { ...defaultThemeSettings[theme].colors, ...profile?.colors },
      music: { ...defaultThemeSettings[theme].music, ...profile?.music },
      assets: configuredAssets.map(value => {
        const asset = record(value)
        return { key: String(asset.key), label: String(asset.label), url: withMediaBase(uploadedURL(asset.upload) ?? String(asset.url ?? ''), mediaBase) }
      }),
    }
  }

  const players = (source.players ?? defaults.defaultPlayers) as typeof defaults.defaultPlayers
  return {
    site: global('site', defaults.defaultSite),
    home: global('home', defaults.defaultHome),
    community: global('community', defaults.defaultCommunity),
    eventsPage: global('eventsPage', defaults.defaultEventsPage),
    galleryPage: global('galleryPage', defaults.defaultGalleryPage),
    leaderboardPage: global('leaderboardPage', defaults.defaultLeaderboardPage),
    events: (source.events ?? defaults.defaultEvents) as typeof defaults.defaultEvents,
    albums: (source.albums ?? defaults.defaultAlbums) as typeof defaults.defaultAlbums,
    news: (source.news ?? defaults.defaultNews) as typeof defaults.defaultNews,
    games: (source.games ?? defaults.defaultGames) as typeof defaults.defaultGames,
    players: players.map((player, index) => ({ ...player, rank: index + 1 })),
    assets,
    themeSettings,
  } as SiteContent
}
