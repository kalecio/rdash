/* eslint-disable @next/next/no-img-element -- Portable presentation component; images are already optimized Figma exports. */
import type { CSSProperties } from 'react'

export type ArtworkFrameProps = { src: string; alt: string; className?: string; style?: CSSProperties; priority?: boolean }

/** Preserve the complete exported border. The parent controls its dimensions. */
export function ArtworkFrame({ src, alt, className = '', style, priority = false }: ArtworkFrameProps) {
  return <span className={`relative block ${className}`} style={style}><img src={src} alt={alt} loading={priority ? 'eager' : 'lazy'} className="absolute inset-0 h-full w-full object-fill" /></span>
}
