'use client'

import { createContext, useContext, type CSSProperties, type ReactNode } from 'react'
import type { SiteContent } from '@/lib/content-types'

const Context = createContext<SiteContent | null>(null)
export function SiteContentProvider({ content, children }: { content: SiteContent; children: ReactNode }) {
  const variables: Record<string, string> = {}
  for (const [name, value] of Object.entries(content.home.layout)) variables[`--home-${name}`] = `${value}px`
  for (const [name, value] of Object.entries(content.site.theme)) variables[`--cms-${name}`] = value
  for (const [key, value] of Object.entries(content.assets)) variables[`--asset-${key.split('/').pop()?.replace(/\.[^.]+$/, '')}`] = `url(${JSON.stringify(value)})`
  return <Context.Provider value={content}><div style={variables as CSSProperties} className="contents">{children}</div></Context.Provider>
}
export function useSiteContent() {
  const value = useContext(Context)
  if (!value) throw new Error('O conteúdo do site não foi carregado.')
  return value
}
export function useAsset() {
  const { assets } = useSiteContent()
  return (path: string) => assets[path] || path
}
