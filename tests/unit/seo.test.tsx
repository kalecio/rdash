import { describe, expect, it } from 'vitest'
import { normalizeSiteContent } from '../../lib/site-content-normalization'
import { absoluteURL, buildAlbumMetadata, buildPageMetadata, buildRobots, buildSitemap, communityStructuredData, pagePaths, serializeStructuredData } from '../../lib/seo'

const content = normalizeSiteContent({})

describe('public site SEO', () => {
  it('uses a unique production canonical on every page and album, including social previews', () => {
    for (const [page, path] of Object.entries(pagePaths)) {
      const metadata = buildPageMetadata(content, page as keyof typeof pagePaths)
      expect(metadata.alternates?.canonical).toBe(absoluteURL(path))
      expect(metadata.openGraph).toMatchObject({ url: absoluteURL(path), locale: 'pt_BR' })
      expect(metadata.twitter).toMatchObject({ card: 'summary_large_image' })
    }
    const album = { ...content.albums[0], slug: 'noite de luta', image: '/cms-media/foto.png' }
    const metadata = buildAlbumMetadata(content, album)
    expect(metadata.alternates?.canonical).toBe(absoluteURL('/galeria/noite%20de%20luta/'))
    expect(metadata.openGraph).toMatchObject({ images: [{ url: absoluteURL(album.image) }] })
  })

  it('lists only published albums and public routes in the sitemap', () => {
    const sitemap = buildSitemap({ ...content, albums: [...content.albums, { ...content.albums[0], slug: 'rascunho', published: false }] })
    expect(sitemap).toHaveLength(Object.keys(pagePaths).length + content.albums.length)
    expect(sitemap.every(entry => entry.url.startsWith('https://rdash.kalec.io/'))).toBe(true)
    expect(sitemap.some(entry => /rascunho|loja|admin|localhost|pages\.dev/.test(entry.url))).toBe(false)
    expect(buildRobots().sitemap).toBe(absoluteURL('/sitemap.xml'))
  })

  it('upgrades original SEO copy without replacing editorial CMS values', () => {
    const upgraded = normalizeSiteContent({ eventsPage: { seoTitle: 'Eventos e torneios' } })
    expect(upgraded.eventsPage.seoTitle).toContain('jogos de luta em Recife')
    const custom = normalizeSiteContent({ home: { seoTitle: 'Minha comunidade', seoDescription: 'Meu texto.' } })
    expect(buildPageMetadata(custom, 'home')).toMatchObject({ title: { absolute: 'Minha comunidade | R-DASH Recife' }, description: 'Meu texto.' })
  })

  it('identifies the community and safely embeds CMS text in structured data', () => {
    const modified = { ...content, site: { ...content.site, name: '</script><script>alert(1)</script>' } }
    const serialized = serializeStructuredData(communityStructuredData(modified))
    expect(serialized).not.toContain('<')
    expect(JSON.parse(serialized)['@graph'][0]).toMatchObject({ '@type': 'Organization', name: modified.site.name })
    expect(JSON.parse(serialized)['@graph'][1]).toMatchObject({ '@type': 'WebSite', url: absoluteURL('/') })
  })
})
