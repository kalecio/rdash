import { getSiteContent } from './content'
import { buildPageMetadata, type SEOPage } from '@/lib/seo'

export async function pageMetadata(page: SEOPage) {
  return buildPageMetadata(await getSiteContent(), page)
}
