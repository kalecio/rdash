import type { Metadata } from 'next'
import { getSiteContent } from './content'
export async function pageMetadata(page: 'home' | 'community' | 'eventsPage' | 'galleryPage' | 'leaderboardPage'): Promise<Metadata> {
  const data = (await getSiteContent())[page]
  return { title: data.seoTitle, description: data.seoDescription }
}
