import { getSiteContent } from '@/lib/content'
import { buildSitemap } from '@/lib/seo'

export const dynamic = 'force-dynamic'
export default async function sitemap() {
  return buildSitemap(await getSiteContent())
}
