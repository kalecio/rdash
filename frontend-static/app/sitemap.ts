import { getSiteContent } from '@/frontend-static/lib/content'
import { buildSitemap } from '@/lib/seo'

export const dynamic = 'force-static'
export default async function sitemap() {
  return buildSitemap(await getSiteContent())
}
