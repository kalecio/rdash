// Refresh only unchanged seed copy. Text edited by a CMS author always wins.
const legacyCopy: Record<string, Record<string, string>> = {
  site: { description: 'Encontre a comunidade R-DASH em Recife: jogos de luta, Anime Fighters, torneios, encontros e novidades para jogadores.' },
  home: { seoTitle: 'Comunidade de jogos de luta em Recife', seoDescription: 'Encontre a comunidade R-DASH em Recife: jogos de luta, Anime Fighters, torneios, encontros e novidades para jogadores.' },
  community: { seoDescription: 'Conheça a R-DASH, a comunidade de jogos de luta em Recife.' },
  eventsPage: { seoTitle: 'Eventos e torneios', seoDescription: 'Confira os próximos encontros e torneios da R-DASH em Recife.' },
  galleryPage: { seoTitle: 'Galeria de eventos e encontros' },
  leaderboardPage: { seoTitle: 'Ranking de jogadores', seoDescription: 'Conheça os jogadores em destaque na comunidade R-DASH.' },
}

export function upgradeSeedSEO(key: string, initial: object, value: object): object {
  const result: Record<string, unknown> = { ...initial, ...value }
  for (const [field, legacy] of Object.entries(legacyCopy[key] ?? {})) {
    if (result[field] === legacy) result[field] = (initial as Record<string, unknown>)[field]
  }
  return result
}
