import { Suspense } from 'react'
import { GalleryPage } from '@/app/components/GalleryPage'
import { pageMetadata } from '@/frontend-static/lib/metadata'
import { GallerySearch } from './search'

export const generateMetadata = () => pageMetadata('galleryPage')
export default function GaleriaPage() {
  return <Suspense fallback={<GalleryPage query="" />}><GallerySearch /></Suspense>
}
