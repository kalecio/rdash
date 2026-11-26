import type * as defaults from '@/cms/defaults'
import type { ThemeSettings } from './themes'

export type SiteContent = {
  themeSettings: ThemeSettings
  site: typeof defaults.defaultSite
  home: typeof defaults.defaultHome
  community: typeof defaults.defaultCommunity
  eventsPage: typeof defaults.defaultEventsPage
  galleryPage: typeof defaults.defaultGalleryPage
  leaderboardPage: typeof defaults.defaultLeaderboardPage
  events: typeof defaults.defaultEvents
  albums: typeof defaults.defaultAlbums
  news: typeof defaults.defaultNews
  games: typeof defaults.defaultGames
  players: (typeof defaults.defaultPlayers[number] & { rank: number })[]
  assets: Record<string, string>
}
export type Album = SiteContent['albums'][number]
