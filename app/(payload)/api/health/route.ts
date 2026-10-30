import { getPayload } from 'payload'
import config from '@payload-config'
export const dynamic = 'force-dynamic'
export async function GET() {
  try {
    const payload = await getPayload({ config })
    await payload.count({ collection: 'users', overrideAccess: true })
    return Response.json({ status: 'ok' })
  } catch { return Response.json({ status: 'unavailable' }, { status: 503 }) }
}
