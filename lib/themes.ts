export const themeIds = ['blue', 'red', 'purple'] as const
export type ThemeId = typeof themeIds[number]
export const themeLabels: Record<ThemeId, string> = { blue: 'Azul', red: 'Vermelho', purple: 'Roxo' }
export const themeCookie = 'rdash-theme'
export function isThemeId(value: unknown): value is ThemeId {
  return themeIds.some(theme => theme === value)
}

export type ThemeColors = {
  background: string; accent: string; dark: string; card: string; table: string; tableHeader: string; text: string; mutedText: string
  homeBackground: string; join: string; heroEdge: string
}
export type ThemeMusic = { title: string; source: string }
export type ThemeAsset = { key: string; label: string; url: string }
export type ThemeProfile = { colors: ThemeColors; assets: ThemeAsset[]; music: ThemeMusic }
export type ThemeSettings = {
  defaultTheme: ThemeId; controlsEnabled: boolean; musicEnabled: boolean; volume: number
  redMusic: ThemeMusic; blue: ThemeProfile; purple: ThemeProfile
}

const assetsFor = (theme: 'blue' | 'purple'): ThemeAsset[] => {
  const files: Record<string, string> = {
    '/assets/home-hero-background.png': theme === 'blue' ? 'hero.gif' : 'hero.png', '/assets/red-rip.png': 'rip.png',
    '/assets/red-nav.svg': 'nav.svg', '/assets/community-header.svg': 'header.svg',
    '/assets/community-footer.svg': 'footer.svg', '/assets/community-join-panel.svg': 'join.svg',
    '/assets/events-banner.png': 'events-banner.png',
    ...Object.fromEntries(Array.from({ length: 6 }, (_, i) => [`/assets/home-game-${i + 1}.png`, `game-${i + 1}.${theme === 'purple' && i === 5 ? 'svg' : 'png'}`])),
    ...Object.fromEntries(Array.from({ length: 3 }, (_, i) => [`/assets/home-news-${i + 1}.png`, `news-${i + 1}.png`])),
  }
  if (theme === 'purple') {
    files['/assets/red-sol.png'] = 'hero-left.gif'
    files['/assets/red-ky.png'] = 'hero-right.gif'
  }
  return Object.entries(files).map(([key, file]) => ({ key, label: key.split('/').pop()!, url: `/assets/themes/${theme}/${file}` }))
}

// Palette and art references come from the three final variants in the Figma file.
export const defaultThemeSettings: ThemeSettings = {
  defaultTheme: 'red', controlsEnabled: true, musicEnabled: true, volume: 0.35,
  redMusic: { title: 'Trilha de Guilty Gear do Figma', source: '/assets/music/guilty-gear.m4a' },
  blue: {
    colors: { background: '#001647', accent: '#003cc0', dark: '#001647', card: '#002d8f', table: '#002370', tableHeader: '#0033a3', text: '#ffffff', mutedText: '#ededed', homeBackground: '#001647', join: '#004cf5', heroEdge: '#003cc0' },
    assets: assetsFor('blue'), music: { title: 'Abertura de Street Fighter do Figma', source: '/assets/music/street-fighter.m4a' },
  },
  purple: {
    colors: { background: '#310b2e', accent: '#9b3a90', dark: '#310b2e', card: '#64175e', table: '#4a1146', tableHeader: '#7b1d74', text: '#ffffff', mutedText: '#ededed', homeBackground: '#3b0e38', join: '#b95cae', heroEdge: '#9b3a90' },
    assets: assetsFor('purple'), music: { title: 'Trilha de Under Night In-Birth do Figma', source: '/assets/music/under-night.m4a' },
  },
}

export function themeColors(theme: ThemeId, red: Omit<ThemeColors, 'homeBackground' | 'join' | 'heroEdge'>, settings: ThemeSettings): ThemeColors {
  return theme === 'red' ? { ...red, homeBackground: red.background, join: '#e84e4a', heroEdge: red.accent } : settings[theme].colors
}

export function themeAssets(theme: ThemeId, settings: ThemeSettings): Record<string, string> {
  return theme === 'red' ? {} : Object.fromEntries(settings[theme].assets.map(asset => [asset.key, asset.url]))
}

export function themeMusic(theme: ThemeId, settings: ThemeSettings): ThemeMusic {
  return theme === 'red' ? settings.redMusic : settings[theme].music
}
