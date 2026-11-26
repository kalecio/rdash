import { draftMode } from 'next/headers'
import { redirect } from 'next/navigation'

const previewPaths = new Set(['/', '/comunidade', '/eventos', '/galeria', '/leaderboard'])

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const secret = process.env.CMS_PREVIEW_SECRET
  const slug = searchParams.get('slug')

  if (!secret || searchParams.get('secret') !== secret || !slug || !previewPaths.has(slug)) {
    return new Response('Invalid preview URL', { status: 401 })
  }

  const draft = await draftMode()
  draft.enable()
  redirect(slug)
}
