# Componentes reutilizáveis

A camada `components/` recebe dados e callbacks por props. Ela não consulta o Payload, não usa cookies e não importa os valores de exemplo do site. A integração com conteúdo e persistência fica nos adaptadores em `app/components/`.

- `ArtworkFrame`: exibe uma arte completa com sua borda. Funciona em React, sem Next.js.
- `PageBackground`: imagem de fundo com escala, posição e opacidade explícitas, sem depender de interpretação de classes pelo Tailwind. Funciona em React.
- `GameCarousel`: lista de jogos por props; recebe `LinkComponent` para integrar o roteador. O padrão é um link HTML.
- `NewsCarousel`: lista de notícias, escala em função da posição e tratamento de resize. Recebe `LinkComponent` e itens por props.
- `ThemeMusicControls`: componente controlado. Recebe opções de tema, estado de reprodução, mensagens e callbacks. Não inicia áudio nem salva preferências.

## Catálogo de páginas e blocos do site

O Storybook também documenta os componentes visuais integrados ao conteúdo do Payload: cabeçalho e rodapé, convite à comunidade, destaque de evento, listagem de eventos, cards e páginas de álbuns e leaderboard. `CommunityJoinSection` e `GalleryAlbumCard` são usados tanto nas páginas reais quanto nas histórias, para que os exemplos continuem refletindo a implementação publicada. O leaderboard e os blocos de eventos recebem exemplos de páginas completas, incluindo interações como busca e navegação.

Os carrosséis e controles usam o CSS compartilhado e `next/image` nas artes de título/ícones. Para reutilizá-los em outro projeto Next.js, leve os componentes, seus assets e os estilos; para outro framework, adapte essas imagens. `ArtworkFrame` e `PageBackground` podem ser usados diretamente em qualquer aplicação React.

## Contratos

Use IDs estáveis e títulos únicos nos itens dos carrosséis. As imagens incluem a borda no arquivo; não adicione uma segunda borda em CSS. Exporte a arte inteira, inclusive a parte fora da janela do Figma. As proporções são verificadas por testes para os assets afetados pelo problema de recorte.

Mantenha decisões do CMS e do roteador nos adaptadores. `GamesCarousel` e `News` resolvem URLs do CMS e injetam `next/link`; `SiteControls` controla o áudio; `SiteContentProvider` mantém o tema. As páginas compõem esses adaptadores.

Os componentes atuais preservam as dimensões de 1440px e 402px do Figma. Reutilizar a estrutura não significa que ela seja um grid fluido genérico: novos layouts devem configurar ou adaptar as dimensões conscientemente.

## Desenvolvimento e verificação

Use o Storybook para conferir componentes isolados, trocar temas e simular larguras de tela. Os exemplos usam conteúdo público em `.storybook/fixtures.ts`, sem autenticação ou banco de dados. Não importe o carregador de conteúdo do servidor nos stories.

Execute `pnpm test:unit` para comportamentos de componentes e `pnpm test:cms` para permissões, conteúdo e integridade dos assets. Testes unitários cobrem contratos e comportamento; a fidelidade visual de bordas e recortes também exige comparação no navegador com o Figma.
