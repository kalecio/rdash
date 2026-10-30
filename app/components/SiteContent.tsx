'use client'

import { createContext, useContext, useEffect, useMemo, useState, type CSSProperties, type ReactNode } from 'react'
import type { SiteContent } from '@/lib/content-types'
import { themeAssets, themeColors, themeCookie, type ThemeId } from '@/lib/themes'
import { SiteControls } from './SiteControls'

const Context = createContext<SiteContent | null>(null)
const ThemeContext = createContext<{ theme: ThemeId; selectTheme: (theme: ThemeId) => void } | null>(null)
export function SiteContentProvider({ content, children, initialTheme }: { content: SiteContent; children: ReactNode; initialTheme: ThemeId }) {
  const [theme, setTheme] = useState(initialTheme)
  const themedContent = useMemo(() => ({
    ...content,
    site: { ...content.site, theme: themeColors(theme, content.site.theme, content.themeSettings) },
    assets: { ...content.assets, ...themeAssets(theme, content.themeSettings) },
  }), [content, theme])
  const selectTheme = (next: ThemeId) => {
    setTheme(next)
    document.cookie = `${themeCookie}=${next}; Path=/; Max-Age=31536000; SameSite=Lax`
  }
  useEffect(() => {
    document.documentElement.dataset.theme = theme
    for (const [name, value] of Object.entries(themedContent.site.theme)) document.documentElement.style.setProperty(`--cms-${name}`, value)
  }, [theme, themedContent.site.theme])
  const variables: Record<string, string> = {}
  for (const [name, value] of Object.entries(content.home.layout)) variables[`--home-${name}`] = `${value}px`
  for (const [name, value] of Object.entries(themedContent.site.theme)) variables[`--cms-${name}`] = value
  for (const [key, value] of Object.entries(themedContent.assets)) variables[`--asset-${key.split('/').pop()?.replace(/\.[^.]+$/, '')}`] = `url(${JSON.stringify(value)})`
  return <ThemeContext.Provider value={{ theme, selectTheme }}><Context.Provider value={themedContent}><div style={variables as CSSProperties} className="contents">{children}<SiteControls /></div></Context.Provider></ThemeContext.Provider>
}
export function useSiteTheme() {
  const value = useContext(ThemeContext)
  if (!value) throw new Error('O tema do site não foi carregado.')
  return value
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
