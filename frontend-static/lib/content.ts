import 'server-only'
import { cache } from 'react'
import { readFile } from 'node:fs/promises'
import path from 'node:path'
import type { SiteContent } from '@/lib/content-types'

export const getSiteContent = cache(async (): Promise<SiteContent> => {
  const filePath = path.join(process.cwd(), 'content.generated.json')
  const json = await readFile(filePath, 'utf8')
  return JSON.parse(json) as SiteContent
})
