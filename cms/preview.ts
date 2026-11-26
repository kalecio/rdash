const pagePaths: Record<string, string> = {
  site: '/',
  home: '/',
  community: '/comunidade',
  'events-page': '/eventos',
  'gallery-page': '/galeria',
  'leaderboard-page': '/leaderboard',
}

export function previewURL(path: string): string | null {
  const secret = process.env.CMS_PREVIEW_SECRET
  const serverURL = process.env.NEXT_PUBLIC_SERVER_URL || 'http://localhost:3000'
  if (!secret) return null
  const url = new URL('/api/draft', serverURL)
  url.searchParams.set('secret', secret)
  url.searchParams.set('slug', path)
  return url.toString()
}

export function globalPreviewURL(slug: string): string | null {
  const path = pagePaths[slug]
  return path ? previewURL(path) : null
}
