'use client'

import { useSearchParams } from 'next/navigation'
import { GalleryPage } from '@/app/components/GalleryPage'

export function GallerySearch() {
  const raw = useSearchParams().get('q') ?? ''
  return <GalleryPage query={raw.trim()} />
}
