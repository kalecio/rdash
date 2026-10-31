// Initial content imported from the approved site. The CMS owns subsequent edits.
export const defaultSite = {
  name: "R-DASH", title: "Comunidade de jogos de luta em Recife", titleSuffix: "R-DASH Recife",
  description: "Faça parte da R-DASH, comunidade de jogos de luta e anime fighters em Recife, Pernambuco. Encontre a FGC local em torneios, jogatinas e encontros.",
  language: "pt-BR",
  navigation: [
    { label: "Home", href: "/", enabled: true, image: "/assets/community-nav-home.svg", activeImage: "/assets/community-nav-home.svg", imageLabel: "Home", imageWidth: 98 },
    { label: "Comunidade", href: "/comunidade", enabled: true, image: "/assets/design-nav-community.svg", activeImage: "/assets/community-nav-community.svg", imageLabel: "Comunidade", imageWidth: 193 },
    { label: "Eventos", href: "/eventos", enabled: true, image: "/assets/community-nav-events.svg", activeImage: "/assets/design-nav-events-active.svg", imageLabel: "Eventos", imageWidth: 136 },
    { label: "Galeria", href: "/galeria", enabled: true, image: "/assets/community-nav-gallery.svg", activeImage: "/assets/design-nav-gallery-active.svg", imageLabel: "Galeria", imageWidth: 114 },
  ],
  footer: {
    title: "Sobre nós", mobileTitle: "Sobre", sitemapTitle: "Sitemap", socialTitle: "Social",
    about: "A R-DASH é uma comunidade dedicada ao universo de Anime Fighters em Recife, Pernambuco — conectando jogadores, fortalecendo a cena local e criando experiências para quem vive a cultura competitiva dentro e fora do game.",
    links: [{ label: "Home", href: "/" }, { label: "Comunidade", href: "/comunidade" }, { label: "Eventos", href: "/eventos" }, { label: "Galeria", href: "/galeria" }],
    social: [{ label: "Instagram", href: "https://www.instagram.com/r_dash_/" }, { label: "Facebook", href: "https://www.facebook.com/rdashrecife" }, { label: "Youtube", href: "https://www.youtube.com/@rdashrecife" }],
  },
  theme: { background: "#881411", accent: "#e53935", dark: "#5f0808", card: "#c21d19", table: "#8f0c0c", tableHeader: "#e51313", text: "#ffffff", mutedText: "#ededed" },
};

export const defaultHome = {
  seoTitle: "Jogos de luta e anime fighters em Recife", seoDescription: defaultSite.description,
  heroEnabled: true, eventEnabled: true, newsEnabled: true, gamesEnabled: true, tvEnabled: true, mascotEnabled: true,
  newsTitle: "Novidades", gamesTitle: "Nossos jogos",
  layout: {
    height: 5146, mobileHeight: 1947, footerTop: 4653, mobileFooterTop: 1452,
    eventTop: 716, mobileEventTop: 218.9, newsTop: 1608, mobileNewsTop: 581.91,
    tvTop: 2572, mobileTvTop: 854.03, gamesTop: 3544, mobileGamesTop: 1128.41,
    mascotTop: 4536, mobileMascotTop: 1402,
  },
  featuredEvent: {
    infoLabel: ">> INFO", infoHref: "/eventos", typeLabel: "Tipo do evento", type: "Jogatina mensal", locationLabel: "Local:",
    address: "Galeria Hora Center\nRua da Hora, 345 - Espinheiro", price: "Valor: R$10 (pago no local)", buttonLabel: "Inscreva-se", buttonHref: "/eventos",
  },
};
export const defaultCommunity = {
  seoTitle: "Comunidade de Anime Fighters em Recife", seoDescription: "Conheça a R-DASH e a FGC de Recife: uma comunidade de anime fighters com encontros, jogatinas e torneios para quem está começando ou já compete.",
  title: "COMUNIDADE", subtitle: "Saiba mais sobre a nossa comunidade!",
  heroAlt: "Jogadores participando de um encontro da comunidade R-DASH", locationAlt: "Partida de jogo de luta em uma TV durante um encontro R-DASH",
  whoTitle: "QUEM SOMOS?", whoText: "Somos uma comunidade Recifense focada em Anime Fighters. Temos encontros mensais com torneios e premiações.",
  whereTitle: "ONDE ESTAMOS?", whereText: "Nossos encontros variam de local, você pode saber mais acompanhando nossas redes sociais ou se juntando aos nossos grupos.",
  joinEnabled: true, joinTitle: "JUNTE-SE A NÓS", joinText: "Faça parte da nossa comunidade!",
  links: [{ label: "Nosso Discord", href: "https://discord.com/" }, { label: "Nosso Grupo no WPP", href: "https://chat.whatsapp.com/" }],
};
export const defaultEventsPage = {
  seoTitle: "Eventos e torneios de jogos de luta em Recife", seoDescription: "Confira os eventos, torneios e jogatinas da R-DASH em Recife. Participe dos encontros da FGC local e conheça outros jogadores de anime fighters.",
  title: "PRÓXIMOS EVENTOS", pastTitle: "EVENTOS ANTERIORES", mobileTitle: "EVENTOS", subtitle: "Confira e se inscreva em nossos próximos eventos.", listTitle: "EM BREVE...",
  upcomingLabel: "Próximos", pastLabel: "Anteriores", leaderboardLabel: "Leaderboard", searchLabel: "Buscar eventos", emptyLabel: "Nenhum evento encontrado.",
  moreLabel: "Ver mais", subscribeLabel: "Inscreva-se", recordsLabel: "Ver registros", backLabel: "Voltar aos eventos", pastMessage: "Esse evento já passou!", detailsMessage: "Consulte os detalhes e a inscrição nas nossas redes.",
  dateLabel: "Data:", locationLabel: "Local:", priceLabel: "Valor da Inscrição:", bannerAlt: "Prepare-se: novidades de Street Fighter, dia 10 de junho",
};
export const defaultGalleryPage = {
  seoTitle: "Fotos de torneios e encontros da FGC em Recife", seoDescription: "Reviva os torneios, encontros e noites de jogos da comunidade R-DASH em Recife na galeria de fotos.",
  title: "GALERIA", subtitle: "Fotos dos campeonatos, encontros e eventos da comunidade", moreLabel: "Veja os registros", searchLabel: "Buscar álbuns", inputLabel: "Nome do álbum", submitLabel: "Buscar", emptyLabel: "Nenhum álbum encontrado.", allLabel: "Ver todos", backLabel: "Voltar à galeria",
};
export const defaultLeaderboardPage = {
  seoTitle: "Ranking de jogadores da R-DASH", seoDescription: "Acompanhe o ranking e conheça os jogadores em destaque na R-DASH, comunidade de jogos de luta e anime fighters em Recife, Pernambuco.",
  title: "LEADERBOARD", subtitle: "Confira os jogadores que estão no\nnosso TOP 3.", rankLabel: "#", playerLabel: "Jogador", scoreLabel: "Score", searchLabel: "Buscar jogadores", emptyLabel: "Nenhum jogador encontrado.",
};

export const defaultEvents = [
  {
    "slug": "street-fighter-iv-ft10",
    "title": "STREET FIGHTER IV FT10",
    "description": "Uma noite de FT10s para colocar os matchups à prova, conhecer a galera da comunidade e trocar aquela resenha entre partidas. Sets abertos, desafios entre jogadores e muito Street Fighter durante toda a noite..",
    "image": "/assets/events-street-fighter.png",
    "mobileImage": "/assets/events-street-fighter-mobile.png",
    "detailImage": "/assets/events-detail.png",
    "status": "upcoming",
    "date": "17/06/2026 às 19h",
    "location": "Centro de Convenções",
    "price": "Gratuito",
    "href": "https://www.instagram.com/r_dash_/",
    "order": 1,
    "published": true
  },
  {
    "slug": "sailor-moon",
    "title": "Noite Mágica de Sailor Moon",
    "description": "Uma noite de Sailor Moon S para reunir a comunidade, colocar os golpes especiais à prova e aproveitar toda a energia caótica e divertida dos anime fighters dos anos 90. Partidas livres, rivalidades improvisadas e muita nostalgia arcade durante toda a noite.",
    "image": "/assets/events-sailor-moon.png",
    "mobileImage": "/assets/events-sailor-moon-mobile.png",
    "detailImage": "/assets/events-sailor-moon.png",
    "status": "upcoming",
    "date": "",
    "location": "",
    "price": "",
    "href": "https://www.instagram.com/r_dash_/",
    "order": 2,
    "published": true
  },
  {
    "slug": "long-sets",
    "title": "Noite de Long Sets Street Fighter",
    "description": "Uma noite de Street Fighter 6 para colocar a adaptação e a leitura de jogo à prova, reunir a comunidade e trocar aquela resenha entre uma partida e outra. Do Drive Rush à punição perfeita, a ideia é simples: jogar muito, aprender nos sets e aproveitar uma noite inteira de luta.",
    "image": "/assets/events-long-sets.png",
    "mobileImage": "/assets/events-long-sets-mobile.png",
    "detailImage": "/assets/events-long-sets.png",
    "status": "upcoming",
    "date": "",
    "location": "",
    "price": "",
    "href": "https://www.instagram.com/r_dash_/",
    "order": 3,
    "published": true
  },
  {
    "slug": "fight-night",
    "title": "Momentos da Fight Night",
    "description": "Mais uma noite especial na @coffee_gank marcada por partidas disputadas, conversas entre sets e aquela atmosfera que só a comunidade de jogos de luta consegue criar. Entre controles passando de mão em mão e jogadores reunidos ao redor das telas, ficam os registros de mais um encontro inesquecível.",
    "image": "/assets/gallery-fight-night.png",
    "mobileImage": "/assets/gallery-fight-night-mobile.png",
    "detailImage": "/assets/gallery-fight-night.png",
    "status": "past",
    "date": "",
    "location": "",
    "price": "",
    "href": "/galeria/momentos-da-fight-night",
    "order": 4,
    "published": true
  }
];

export const defaultAlbums = [
  {
    "slug": "mais-uma-noite-para-a-historia",
    "title": "MAIS UMA NOITE PARA A HISTÓRIA",
    "description": "Mais um evento de sucesso! Agradecemos demais aos nossos parceiros Super Smash Bros e HELLKOF PERNAMBUCO, assim como nosso novo local de colaboração QB Geek. Até o próximo encontro, R-Dashers!",
    "image": "/assets/gallery-night.png",
    "mobileImage": "/assets/gallery-night-mobile.png",
    "order": 1,
    "published": true,
    "photos": []
  },
  {
    "slug": "momentos-da-fight-night",
    "title": "MOMENTOS DA FIGHT NIGHT",
    "description": "Mais uma noite especial na @coffee_gank marcada por partidas disputadas, conversas entre sets e aquela atmosfera que só a comunidade de jogos de luta consegue criar. Entre controles passando de mão em mão e jogadores reunidos ao redor das telas, ficam os registros de mais um encontro inesquecível.",
    "image": "/assets/gallery-fight-night.png",
    "mobileImage": "/assets/gallery-fight-night-mobile.png",
    "order": 2,
    "published": true,
    "photos": [
      {
        "image": "/assets/gallery-photo-1.png",
        "mobileImage": "/assets/gallery-photo-1-mobile.png",
        "alt": "Registro 1 do encontro da comunidade R-DASH"
      },
      {
        "image": "/assets/gallery-photo-2.png",
        "mobileImage": "/assets/gallery-photo-2-mobile.png",
        "alt": "Registro 2 do encontro da comunidade R-DASH"
      },
      {
        "image": "/assets/gallery-photo-3.png",
        "mobileImage": "/assets/gallery-photo-3-mobile.png",
        "alt": "Registro 3 do encontro da comunidade R-DASH"
      },
      {
        "image": "/assets/gallery-photo-4.png",
        "mobileImage": "/assets/gallery-photo-4-mobile.png",
        "alt": "Registro 4 do encontro da comunidade R-DASH"
      },
      {
        "image": "/assets/gallery-photo-5.png",
        "mobileImage": "/assets/gallery-photo-5-mobile.png",
        "alt": "Registro 5 do encontro da comunidade R-DASH"
      },
      {
        "image": "/assets/gallery-photo-6.png",
        "mobileImage": "/assets/gallery-photo-6-mobile.png",
        "alt": "Registro 6 do encontro da comunidade R-DASH"
      },
      {
        "image": "/assets/gallery-photo-7.png",
        "mobileImage": "/assets/gallery-photo-7-mobile.png",
        "alt": "Registro 7 do encontro da comunidade R-DASH"
      },
      {
        "image": "/assets/gallery-photo-8.png",
        "mobileImage": "/assets/gallery-photo-8-mobile.png",
        "alt": "Registro 8 do encontro da comunidade R-DASH"
      },
      {
        "image": "/assets/gallery-photo-9.png",
        "mobileImage": "/assets/gallery-photo-9-mobile.png",
        "alt": "Registro 9 do encontro da comunidade R-DASH"
      }
    ]
  },
  {
    "slug": "boteco-do-abelardo",
    "title": "NOITE NO BOTECO DO ABELARDO",
    "description": "Fotos de mais um encontro que reuniu jogadores e amigos no Boteco do Abelardo para uma noite marcada por partidas intensas, muita resenha e momentos compartilhados pela comunidade. Obrigado a todos que compareceram e ajudaram a tornar a noite especial.",
    "image": "/assets/gallery-boteco.png",
    "mobileImage": "/assets/gallery-boteco-mobile.png",
    "order": 3,
    "published": true,
    "photos": []
  },
  {
    "slug": "street-fighter-ft10",
    "title": "STREET FIGHTER FT10",
    "description": "Uma noite inesquecível em que a comunidade se reuniu para explorar o universo mágico de Sailor Moon. Entre risadas, nostalgia e momentos épicos, cada partida transformou o encontro em uma lembrança especial para todos que participaram.",
    "image": "/assets/gallery-ft10.png",
    "mobileImage": "/assets/gallery-ft10-mobile.png",
    "order": 4,
    "published": true,
    "photos": []
  }
];

export const defaultNews = [
  {
    "title": "Resultados do Último Torneio",
    "copy": "Confira como foi o TOP 8 do nosso último torneio realizado no Festival do Orgulho Nerd.",
    "image": "/assets/home-news-3.png",
    "href": "/comunidade",
    "order": 1,
    "published": true
  },
  {
    "title": "Lançamento da Nossa Mascote",
    "copy": "Isso mesmo! O RecifeDash agora tem uma mascote! Quem nos visitou no Orgulho Nerd já conhece ela, mas hoje revelamos mais detalhes sobre a nossa adorável menina-caranguejo.",
    "image": "/assets/home-news-2.png",
    "href": "/comunidade",
    "order": 2,
    "published": true
  },
  {
    "title": "Jogatina Mensal",
    "copy": "Esse Domingo estaremos de volta na QB GEEK. Dessa vez nossa atração principal do dia será o bom e velho torneio de Under Night In-Birth II.",
    "image": "/assets/home-news-1.png",
    "href": "/comunidade",
    "order": 3,
    "published": true
  }
];

export const defaultGames = [
  {
    "title": "Under Night In-Birth II",
    "image": "/assets/home-game-1.png",
    "href": "/galeria",
    "order": 1,
    "published": true
  },
  {
    "title": "Blazblue",
    "image": "/assets/home-game-2.png",
    "href": "/galeria",
    "order": 2,
    "published": true
  },
  {
    "title": "Guilty Gear Strive",
    "image": "/assets/home-game-3.png",
    "href": "/galeria",
    "order": 3,
    "published": true
  },
  {
    "title": "Asuka 120% Limit Over",
    "image": "/assets/home-game-4.png",
    "href": "/galeria",
    "order": 4,
    "published": true
  },
  {
    "title": "Vampire Savior",
    "image": "/assets/home-game-5.png",
    "href": "/galeria",
    "order": 5,
    "published": true
  },
  {
    "title": "Dragon Ball FighterZ",
    "image": "/assets/home-game-6.png",
    "href": "/galeria",
    "order": 6,
    "published": true
  }
];

export const defaultPlayers = [
  {
    "name": "ZNHELV",
    "score": 234,
    "image": "/assets/leaderboard-znhelv.png",
    "published": true
  },
  {
    "name": "Wendell",
    "score": 163,
    "image": "/assets/leaderboard-wendell.png",
    "published": true
  },
  {
    "name": "Onorius",
    "score": 124,
    "image": "/assets/leaderboard-onorius.png",
    "published": true
  }
];

export const defaultAssets = [
  { key: "/assets/red-nav.svg", label: "Header transparente da Home", url: "/assets/red-nav.svg" },
  {
    "key": "/assets/brickwall.png",
    "label": "brickwall",
    "url": "/assets/brickwall.png"
  },
  {
    "key": "/assets/community-footer-logo.png",
    "label": "community footer logo",
    "url": "/assets/community-footer-logo.png"
  },
  {
    "key": "/assets/community-footer.svg",
    "label": "community footer",
    "url": "/assets/community-footer.svg"
  },
  {
    "key": "/assets/community-header.svg",
    "label": "community header",
    "url": "/assets/community-header.svg"
  },
  {
    "key": "/assets/community-hero-mobile.png",
    "label": "community hero mobile",
    "url": "/assets/community-hero-mobile.png"
  },
  {
    "key": "/assets/community-hero.png",
    "label": "community hero",
    "url": "/assets/community-hero.png"
  },
  {
    "key": "/assets/community-join-panel.svg",
    "label": "community join panel",
    "url": "/assets/community-join-panel.svg"
  },
  {
    "key": "/assets/community-location-mobile.png",
    "label": "community location mobile",
    "url": "/assets/community-location-mobile.png"
  },
  {
    "key": "/assets/community-location.png",
    "label": "community location",
    "url": "/assets/community-location.png"
  },
  {
    "key": "/assets/community-mascot-mobile.png",
    "label": "community mascot mobile",
    "url": "/assets/community-mascot-mobile.png"
  },
  {
    "key": "/assets/community-mascot.png",
    "label": "community mascot",
    "url": "/assets/community-mascot.png"
  },
  {
    "key": "/assets/design-nav-community.svg",
    "label": "design nav community",
    "url": "/assets/design-nav-community.svg"
  },
  {
    "key": "/assets/design-nav-events-active.svg",
    "label": "design nav events active",
    "url": "/assets/design-nav-events-active.svg"
  },
  {
    "key": "/assets/design-nav-gallery-active.svg",
    "label": "design nav gallery active",
    "url": "/assets/design-nav-gallery-active.svg"
  },
  {
    "key": "/assets/events-banner.png",
    "label": "events banner",
    "url": "/assets/events-banner.png"
  },
  {
    "key": "/assets/events-detail.png",
    "label": "events detail",
    "url": "/assets/events-detail.png"
  },
  {
    "key": "/assets/gallery-fight-night-mobile.png",
    "label": "gallery fight night mobile",
    "url": "/assets/gallery-fight-night-mobile.png"
  },
  {
    "key": "/assets/gallery-fight-night.png",
    "label": "gallery fight night",
    "url": "/assets/gallery-fight-night.png"
  },
  {
    "key": "/assets/home-event-label.svg",
    "label": "home event label",
    "url": "/assets/home-event-label.svg"
  },
  {
    "key": "/assets/home-event-ribbon.png",
    "label": "home event ribbon",
    "url": "/assets/home-event-ribbon.png"
  },
  {
    "key": "/assets/home-footer-mascot.gif",
    "label": "home footer mascot",
    "url": "/assets/home-footer-mascot.gif"
  },
  {
    "key": "/assets/home-game-1.png",
    "label": "home game 1",
    "url": "/assets/home-game-1.png"
  },
  {
    "key": "/assets/home-game-2.png",
    "label": "home game 2",
    "url": "/assets/home-game-2.png"
  },
  {
    "key": "/assets/home-game-3.png",
    "label": "home game 3",
    "url": "/assets/home-game-3.png"
  },
  {
    "key": "/assets/home-game-4.png",
    "label": "home game 4",
    "url": "/assets/home-game-4.png"
  },
  {
    "key": "/assets/home-game-5.png",
    "label": "home game 5",
    "url": "/assets/home-game-5.png"
  },
  {
    "key": "/assets/home-game-6.png",
    "label": "home game 6",
    "url": "/assets/home-game-6.png"
  },
  {
    "key": "/assets/home-hero-background.png",
    "label": "home hero background",
    "url": "/assets/home-hero-background.png"
  },
  {
    "key": "/assets/home-info-arrow.png",
    "label": "home info arrow",
    "url": "/assets/home-info-arrow.png"
  },
  {
    "key": "/assets/home-join-button.png",
    "label": "home join button",
    "url": "/assets/home-join-button.png"
  },
  {
    "key": "/assets/home-location-label.svg",
    "label": "home location label",
    "url": "/assets/home-location-label.svg"
  },
  {
    "key": "/assets/home-news-1.png",
    "label": "home news 1",
    "url": "/assets/home-news-1.png"
  },
  {
    "key": "/assets/home-news-2.png",
    "label": "home news 2",
    "url": "/assets/home-news-2.png"
  },
  {
    "key": "/assets/home-news-3.png",
    "label": "home news 3",
    "url": "/assets/home-news-3.png"
  },
  {
    "key": "/assets/raissa_dash.gif",
    "label": "raissa_dash",
    "url": "/assets/raissa_dash.gif"
  },
  {
    "key": "/assets/rdash_mini_logo_vazado.png",
    "label": "rdash_mini_logo_vazado",
    "url": "/assets/rdash_mini_logo_vazado.png"
  },
  {
    "key": "/assets/red-crt-art.png",
    "label": "red crt art",
    "url": "/assets/red-crt-art.png"
  },
  {
    "key": "/assets/red-event-art.png",
    "label": "red event art",
    "url": "/assets/red-event-art.png"
  },
  {
    "key": "/assets/red-event-map.png",
    "label": "red event map",
    "url": "/assets/red-event-map.png"
  },
  {
    "key": "/assets/red-event-poster.png",
    "label": "red event poster",
    "url": "/assets/red-event-poster.png"
  },
  {
    "key": "/assets/red-footer.svg",
    "label": "red footer",
    "url": "/assets/red-footer.svg"
  },
  {
    "key": "/assets/red-games-title.png",
    "label": "red games title",
    "url": "/assets/red-games-title.png"
  },
  {
    "key": "/assets/red-ky.png",
    "label": "red ky",
    "url": "/assets/red-ky.png"
  },
  {
    "key": "/assets/red-logo.png",
    "label": "red logo",
    "url": "/assets/red-logo.png"
  },
  {
    "key": "/assets/red-metro.png",
    "label": "red metro",
    "url": "/assets/red-metro.png"
  },
  {
    "key": "/assets/red-news-title.png",
    "label": "red news title",
    "url": "/assets/red-news-title.png"
  },
  {
    "key": "/assets/red-rip.png",
    "label": "red rip",
    "url": "/assets/red-rip.png"
  },
  {
    "key": "/assets/red-scan.png",
    "label": "red scan",
    "url": "/assets/red-scan.png"
  },
  {
    "key": "/assets/red-sol.png",
    "label": "red sol",
    "url": "/assets/red-sol.png"
  },
  {
    "key": "/assets/red-tape.png",
    "label": "red tape",
    "url": "/assets/red-tape.png"
  },
  {
    "key": "/assets/red-texture.png",
    "label": "red texture",
    "url": "/assets/red-texture.png"
  }
];
