# R-DASH — site e CMS

Site Next.js com Payload CMS integrado. O conteúdo inicial preserva as páginas aprovadas no Figma.

## Iniciar com Docker

Requisitos: Docker Desktop ou Docker Engine com Compose.

1. Copie `.env.example` para `.env`.
2. Gere valores aleatórios diferentes para `PAYLOAD_SECRET` e `POSTGRES_PASSWORD`. Ajuste também a senha na `DATABASE_URL` se usar os comandos locais.
3. Execute:

```sh
docker compose up -d --build
docker compose exec app node --import tsx scripts/seed.ts
```

O primeiro comando cria o PostgreSQL, aplica as migrações e inicia o site. O segundo importa eventos, álbuns, notícias, jogos e ranking. A importação pode ser repetida: depois de concluída, preserva as edições e exclusões feitas no painel.

- Site: http://localhost:3000
- Painel: http://localhost:3000/admin
- Estado do serviço: http://localhost:3000/api/health

Abra `/admin` para criar o primeiro administrador. Nenhuma conta ou senha padrão é criada. Faça essa configuração antes de expor o serviço publicamente.

```sh
docker compose logs -f app
docker compose stop
docker compose start
```

Os volumes `rdash_postgres_data` e `rdash_media_data` preservam banco e uploads entre reinicializações e atualizações. `docker compose down` preserva os volumes; não utilize `down -v` se quiser manter os dados.

## Publicar no Portainer

Crie uma Stack a partir do repositório e use `compose.portainer.yaml` como caminho do arquivo Compose. Cadastre as variáveis de `portainer.env.example` em **Environment variables** da Stack, substituindo todos os valores de exemplo. `DATABASE_URL` deve apontar para o serviço `db` e usar a mesma senha de `POSTGRES_PASSWORD`; codifique para URL caracteres especiais da senha.

A Stack cria o PostgreSQL sem publicar a porta do banco, o site em `127.0.0.1:APP_PORT` (padrão `3000`) e o Storybook estático em `127.0.0.1:STORYBOOK_PORT` (padrão `6006`). O Storybook é compilado dentro da imagem durante o deploy e servido por um container próprio. Configure o Cloudflare Tunnel no host para encaminhar o domínio do site a `http://localhost:3000`; para publicar o Storybook, use `http://localhost:6006` e proteja esse hostname com Cloudflare Access. Se o `cloudflared` estiver em outro container, conecte-o à mesma rede Docker da Stack e use `http://app:3000` e `http://storybook:6006` como destinos. Informe o domínio público do site em `NEXT_PUBLIC_SERVER_URL`. Os volumes nomeados `rdash_postgres_data` e `rdash_media_data` mantêm o banco e os uploads entre atualizações.

## O que editar

- **Configurações do site:** nome, SEO geral, idioma, navegação (texto, destino, ordem e visibilidade), rodapé, links e cores.
- **Home:** visibilidade das seções, nomes dos carrosséis, informações e links do próximo evento. O grupo avançado permite ajustar posições verticais e alturas no desktop/mobile.
- **Comunidade:** títulos, textos, descrições de imagens e links do convite.
- **Páginas de eventos, galeria e ranking:** títulos, subtítulos, SEO, rótulos, botões e mensagens.
- **Eventos:** cadastro, ordem, publicação, período (próximo/anterior), descrições, imagens desktop/mobile/detalhe, data, local, valor e inscrição.
- **Álbuns:** título, descrição, capa desktop/mobile, publicação, ordem e fotos com texto alternativo. Cada álbum usa `/galeria/seu-slug`.
- **Novidades e jogos:** conteúdo dos carrosséis, links, imagens, publicação e ordem.
- **Jogadores:** nomes, fotos, publicação e pontuação. O ranking é ordenado pela pontuação.
- **Imagens, logotipos e texturas:** substituição das artes, fundos, títulos desenhados e GIFs. É possível enviar PNG/JPEG/WebP/GIF/AVIF ou informar caminhos e URLs. Para SVG, use um caminho/URL de arquivo confiável.
- **Temas e música:** tema inicial, exibição do seletor e do botão musical, volume inicial, cores e artes das variantes azul/roxa e trilha de cada tema. A variante vermelha usa as cores de Configurações do site e as artes de Imagens, logotipos e texturas. A coleção Áudios aceita arquivos MP3, M4A, OGG, WAV e WebM.

O seletor salva a escolha do visitante em um cookie e a mantém entre páginas e visitas. O áudio começa somente após clicar na nota musical; o mesmo botão pausa e retoma a reprodução. Cada variante usa a trilha incorporada ao respectivo componente do Figma (Street Fighter no azul, Guilty Gear no vermelho e Under Night In-Birth no roxo). Ao trocar o tema durante a reprodução, a trilha correspondente começa; quando pausada, a troca mantém o áudio parado. O player permanece montado durante a navegação interna.

O arquivo enviado tem prioridade sobre o caminho textual. Remova a seleção do upload para voltar a usar o caminho. As artes que contêm letras são imagens; podem ser substituídas neste grupo. Na navegação e nos títulos da Home, alterar o texto também permite usar uma versão textual sem recriar a arte.

Recarregue o site após salvar para ver as alterações. A leitura pública vem do banco a cada requisição e não exige novo build. Campos de publicação controlam quais registros aparecem na API pública e no site. Todas as alterações exigem login.

A estrutura visual continua baseada nos componentes existentes. O painel permite editar conteúdo, cores, artes, visibilidade e posições avançadas da Home; criar novos tipos de seção ou alterar regras de responsividade exige desenvolvimento.

## Desenvolvimento

Node **24.22.1** e pnpm **10.34.5** (também definidos em `.nvmrc`, `.tool-versions` e `package.json`).

```sh
corepack enable
pnpm install
docker compose up -d db
pnpm cms:migrate
pnpm cms:seed
pnpm dev
```

O banco do Docker é exposto apenas em `127.0.0.1:5434`; ajuste a `DATABASE_URL` local. Pare o container `app` se for iniciar o servidor de desenvolvimento na mesma porta.

O PostgreSQL usa migrações versionadas também no desenvolvimento; o envio automático de esquema está desativado para evitar conflitos ao alternar entre o servidor local e o Docker. Após alterar os campos do CMS, gere e aplique uma migração antes de iniciar o site.

```sh
pnpm cms:types
pnpm cms:importmap
pnpm cms:migrate:create nome-da-alteracao
pnpm cms:migrate
pnpm test:cms
pnpm lint
pnpm build
```

O adaptador SQLite também está disponível para testes isolados (`DATABASE_URL=file:./data/rdash.db`). As migrações de produção deste projeto são para PostgreSQL.

## Hospedagem própria

A imagem Docker executa como usuário sem privilégios. As migrações são aplicadas antes de iniciar o site. O Compose publica apenas na interface local; para publicação, encaminhe o tráfego pelo Cloudflare Tunnel e configure `NEXT_PUBLIC_SERVER_URL` para o domínio real.

O build precisa de acesso à internet para instalar dependências e obter as fontes do Google. O segredo usado durante o build é descartável; o segredo real é injetado em tempo de execução pelo Compose.

Configure as variáveis `SMTP_*` para enviar e-mails de recuperação de senha. Sem SMTP, o Payload registra os e-mails no log, apenas para desenvolvimento.

Faça backups regulares do PostgreSQL e do volume de uploads e valide a restauração. Uma cópia apenas do repositório não inclui os conteúdos editados. Guarde `.env` fora do Git e mantenha o `PAYLOAD_SECRET` estável nas atualizações.

## Storybook e componentes

O catálogo fica em http://localhost:6006. Para iniciá-lo com Docker, execute `docker compose --profile tools up -d --build storybook`. Esse serviço é opcional, fica acessível apenas na máquina local e não precisa do PostgreSQL. Para desenvolvimento sem Docker, use `pnpm storybook`; `pnpm build-storybook` gera o catálogo estático em `storybook-static/`.

O Storybook inclui exemplos de cabeçalho e rodapé, convite da comunidade, destaque e página de eventos, cards e páginas da galeria, leaderboard, carrosséis, artes com bordas, controles de tema/música e páginas completas. A barra superior alterna Guilty Gear, Street Fighter e Under Night; o viewport permite conferir os estados móveis. Os exemplos utilizam dados públicos de demonstração e não consultam o CMS. A apresentação reutilizável fica em `components/`; a integração com o site permanece em `app/components/`. Veja `components/README.md` para os contratos e limites de reutilização.

`pnpm test:unit` executa os testes de componentes com Vitest e Testing Library; `pnpm test:cms` executa os testes do CMS e dos assets. `pnpm test` executa as duas suítes. A cobertura inclui as cores e a textura das três páginas nos três temas, seleção de tema por teclado, estados de reprodução, escala do carrossel e integridade das artes exportadas.
