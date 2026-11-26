import * as defaults from '../cms/defaults'
import type { SiteContent } from '../lib/content-types'
import { defaultThemeSettings } from '../lib/themes'

// Public sample content only. Storybook never connects to Payload or PostgreSQL.
export const storyContent: SiteContent = {
  site: defaults.defaultSite,
  home: defaults.defaultHome,
  community: defaults.defaultCommunity,
  eventsPage: defaults.defaultEventsPage,
  galleryPage: defaults.defaultGalleryPage,
  leaderboardPage: defaults.defaultLeaderboardPage,
  events: defaults.defaultEvents,
  albums: defaults.defaultAlbums,
  news: defaults.defaultNews,
  games: defaults.defaultGames,
  players: defaults.defaultPlayers.map((player, index) => ({ ...player, rank: index + 1 })),
  assets: Object.fromEntries(defaults.defaultAssets.map(asset => [asset.key, asset.url])),
  themeSettings: { ...defaultThemeSettings, controlsEnabled: false, musicEnabled: false },
}
