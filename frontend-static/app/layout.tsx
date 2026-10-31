import type { Metadata } from 'next'
import type { CSSProperties, ReactNode } from 'react'
import { DM_Sans, Geist, Geist_Mono, Rubik_Dirt } from 'next/font/google'
import { defaultThemeSettings, themeColors } from '@/lib/themes'
import { getSiteContent } from '@/frontend-static/lib/content'
import { SiteContentProvider } from '@/app/components/SiteContent'
import { PencilBorderSvg } from '@/app/components/PencilBorder'
import '../../app/globals.css'

const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] })
const geistMono = Geist_Mono({ variable: '--font-geist-mono', subsets: ['latin'] })
const dmSans = DM_Sans({ variable: '--font-dm-sans', subsets: ['latin'] })
const rubikDirt = Rubik_Dirt({ variable: '--font-rubik-dirt', weight: '400', subsets: ['latin'] })

export async function generateMetadata(): Promise<Metadata> {
  const { site } = await getSiteContent()
  return { title: { default: `${site.title} | ${site.titleSuffix}`, template: `%s | ${site.titleSuffix}` }, description: site.description }
}

export default async function RootLayout({ children }: { children: ReactNode }) {
  const content = await getSiteContent()
  const initialTheme = content.themeSettings.defaultTheme ?? defaultThemeSettings.defaultTheme
  const palette = themeColors(initialTheme, content.site.theme, content.themeSettings)
  const variables = Object.fromEntries(Object.entries(palette).map(([key, value]) => [`--cms-${key}`, value])) as CSSProperties
  return (
    <html lang={content.site.language} data-theme={initialTheme} style={variables} className={`${geistSans.variable} ${geistMono.variable} ${dmSans.variable} ${rubikDirt.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <SiteContentProvider content={content} initialTheme={initialTheme}><PencilBorderSvg />{children}</SiteContentProvider>
      </body>
    </html>
  )
}
