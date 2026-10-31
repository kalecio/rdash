import type { Metadata, MetadataRoute } from 'next'
import type { Album, SiteContent } from './content-types'

// The public frontend has its own origin; the local CMS URL is never canonical.
export const siteOrigin = new URL(process.env.SITE_URL || 'https://rdash.kalec.io').origin
export const pagePaths = {
  home: '/', community: '/comunidade/', eventsPage: '/eventos/',
  galleryPage: '/galeria/', leaderboardPage: '/leaderboard/',
} as const
export type SEOPage = keyof typeof pagePaths

export function absoluteURL(path: string): string {
  return new URL(path, `${siteOrigin}/`).toString()
}

function visualURL(content: SiteContent, path: string): string {
  return absoluteURL(content.assets[path] || path)
}

function metadata(content: SiteContent, title: string, description: string, pathname: string, image = '/assets/community-hero.png'): Metadata {
  const fullTitle = `${title} | ${content.site.titleSuffix}`
  const url = absoluteURL(pathname)
  const images = [{ url: visualURL(content, image), alt: title }]
  return {
    title: { absolute: fullTitle }, description,
    alternates: { canonical: url },
    openGraph: {
      type: 'website', title: fullTitle, description, url,
      siteName: content.site.name, locale: content.site.language.replace('-', '_'), images,
    },
    twitter: { card: 'summary_large_image', title: fullTitle, description, images },
  }
}

export function rootMetadata(content: SiteContent): Metadata {
  return {
    ...metadata(content, content.site.title, content.site.description, '/'),
    metadataBase: new URL(siteOrigin),
    applicationName: content.site.name,
    robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large' } },
    icons: { icon: visualURL(content, '/assets/community-footer-logo.png') },
  }
}

export function buildPageMetadata(content: SiteContent, page: SEOPage): Metadata {
  const data = content[page]
  return metadata(content, data.seoTitle || content.site.title, data.seoDescription || content.site.description, pagePaths[page])
}

export function albumPath(slug: string): string {
  return `/galeria/${encodeURIComponent(slug)}/`
}

export function buildAlbumMetadata(content: SiteContent, album: Album): Metadata {
  return metadata(content, album.title, album.description || content.galleryPage.seoDescription, albumPath(album.slug), album.image)
}

export function buildSitemap(content: SiteContent): MetadataRoute.Sitemap {
  return [
    ...Object.values(pagePaths).map(path => ({ url: absoluteURL(path) })),
    ...content.albums.filter(album => album.published !== false).map(album => ({
      url: absoluteURL(albumPath(album.slug)),
      images: [visualURL(content, album.image)],
    })),
  ]
}

export function buildRobots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: '*', allow: '/', disallow: ['/admin', '/api/'] },
    sitemap: absoluteURL('/sitemap.xml'),
  }
}

export function communityStructuredData(content: SiteContent) {
  const url = absoluteURL('/')
  const organizationId = `${url}#organization`
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization', '@id': organizationId,
        name: content.site.name, url, description: content.site.description,
        logo: visualURL(content, '/assets/community-footer-logo.png'),
        sameAs: content.site.footer.social.map(link => link.href).filter(href => /^https?:\/\//.test(href)),
        knowsAbout: ['Jogos de luta', 'Fighting Game Community (FGC)', 'Anime fighters'],
      },
      {
        '@type': 'WebSite', '@id': `${url}#website`, name: content.site.name,
        url, description: content.site.description, inLanguage: content.site.language,
        publisher: { '@id': organizationId },
      },
    ],
  }
}

export function serializeStructuredData(value: unknown): string {
  return JSON.stringify(value).replace(/</g, '\\u003c')
}
