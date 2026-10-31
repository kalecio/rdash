import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { AlbumPage } from '@/app/components/AlbumPage'
import { getSiteContent } from '@/frontend-static/lib/content'

export const dynamicParams = false

export async function generateStaticParams() {
  const { albums } = await getSiteContent()
  return albums.map(album => ({ slug: album.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const album = (await getSiteContent()).albums.find(item => item.slug === slug)
  return album ? { title: album.title, description: album.description } : {}
}

export default async function GalleryAlbum({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const album = (await getSiteContent()).albums.find(item => item.slug === slug)
  if (!album) notFound()
  return <AlbumPage album={album} />
}
