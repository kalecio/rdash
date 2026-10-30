import type { Payload } from 'payload'
import * as defaults from './defaults'

export async function seedContent(payload: Payload) {
  const state = await payload.findGlobal({ slug: 'installation' })
  if (state.importedAt) { console.log('Conteúdo já importado; nenhuma alteração realizada.'); return }
  const collections = { events: defaults.defaultEvents, albums: defaults.defaultAlbums, news: defaults.defaultNews, games: defaults.defaultGames, players: defaults.defaultPlayers }
  for (const [slug, data] of Object.entries(collections)) {
    const existing = await payload.find({ collection: slug as keyof typeof collections, limit: 1 })
    if (existing.totalDocs === 0) for (const record of data) await payload.create({ collection: slug as keyof typeof collections, data: record as never })
  }
  await payload.updateGlobal({ slug: 'installation', data: { importedAt: new Date().toISOString() } })
  console.log('Conteúdo inicial importado. Crie o primeiro administrador em /admin.')
}
