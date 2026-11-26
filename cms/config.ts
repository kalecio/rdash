import type { Access, CollectionConfig, GlobalConfig } from 'payload'
import { contentFields, linkIsSafe } from './fields'
import path from 'node:path'
import { themeSettings } from './theme-settings'
import { defaultSite, defaultHome, defaultCommunity, defaultEventsPage, defaultGalleryPage, defaultLeaderboardPage, defaultEvents, defaultAlbums, defaultNews, defaultGames, defaultPlayers, defaultAssets } from './defaults'
import { globalPreviewURL, previewURL } from './preview'

export const authenticated: Access = ({ req }) => Boolean(req.user)
export const published: Access = ({ req }) => req.user ? true : { published: { equals: true } }
const writes = { create: authenticated, update: authenticated, delete: authenticated }

const collection = (slug: CollectionConfig['slug'], label: string, sample: Record<string, unknown>): CollectionConfig => ({
  slug, labels: { singular: label, plural: label },
  admin: { useAsTitle: 'title' in sample ? 'title' : 'name', group: 'Conteúdo', defaultColumns: ['title' in sample ? 'title' : 'name', 'published', 'updatedAt'], ...(slug === 'events' ? { preview: () => previewURL('/eventos') } : {}) },
  access: { ...writes, read: published, ...(slug === 'events' ? { readVersions: authenticated } : {}) },
  ...(slug === 'events' ? { versions: { drafts: true, maxPerDoc: 50 } } : {}),
  fields: contentFields(sample, false),
})

export const collections: CollectionConfig[] = [
  { slug: 'users', auth: true, labels: { singular: 'Administrador', plural: 'Administradores' }, admin: { useAsTitle: 'email', group: 'Administração' }, access: { ...writes, read: authenticated }, fields: [{ name: 'name', label: 'Nome', type: 'text', required: true }] },
  { slug: 'media', labels: { singular: 'Arquivo', plural: 'Arquivos' }, admin: { useAsTitle: 'alt', group: 'Conteúdo' }, access: { ...writes, read: () => true }, upload: { staticDir: process.env.MEDIA_DIR || 'media', mimeTypes: ['image/png', 'image/jpeg', 'image/webp', 'image/gif', 'image/avif'] }, fields: [{ name: 'alt', label: 'Descrição da imagem (acessibilidade)', type: 'text', required: true }] },
  { slug: 'audio', labels: { singular: 'Áudio', plural: 'Áudios' }, admin: { useAsTitle: 'title', group: 'Conteúdo' }, access: { ...writes, read: () => true }, upload: { staticDir: path.join(process.env.MEDIA_DIR || 'media', 'audio'), mimeTypes: ['audio/mpeg', 'audio/mp4', 'audio/x-m4a', 'audio/ogg', 'audio/wav', 'audio/x-wav', 'audio/webm'], filesRequiredOnCreate: true }, fields: [{ name: 'title', label: 'Nome da trilha', type: 'text', required: true }] },
  collection('events', 'Eventos', defaultEvents[0]),
  collection('albums', 'Álbuns', { ...defaultAlbums[0], photos: defaultAlbums[1].photos }),
  collection('news', 'Novidades', defaultNews[0]),
  collection('games', 'Jogos', defaultGames[0]),
  collection('players', 'Jogadores', defaultPlayers[0]),
]

const global = (slug: GlobalConfig['slug'], label: string, data: Record<string, unknown>): GlobalConfig => ({
  slug, label, admin: { group: 'Páginas e aparência', preview: () => globalPreviewURL(slug) }, access: { read: () => true, readVersions: authenticated, update: authenticated }, versions: { drafts: true, max: 50 }, fields: contentFields(data),
})
export const globals: GlobalConfig[] = [
  themeSettings,
  { slug: 'installation', label: 'Instalação', admin: { hidden: true }, access: { read: authenticated, update: authenticated }, fields: [{ name: 'importedAt', type: 'date' }] },
  global('site', 'Configurações do site', defaultSite),
  global('home', 'Home', defaultHome),
  global('community', 'Comunidade', defaultCommunity),
  global('events-page', 'Página de eventos', defaultEventsPage),
  global('gallery-page', 'Página da galeria', defaultGalleryPage),
  global('leaderboard-page', 'Página do ranking', defaultLeaderboardPage),
  { slug: 'visual-assets', label: 'Imagens, logotipos e texturas', admin: { group: 'Páginas e aparência', description: 'Substitua as artes do Figma, logotipos, fundos, títulos desenhados e GIFs. SVGs podem ser referenciados por caminho ou URL; uploads aceitam imagens raster.' }, access: { read: () => true, update: authenticated }, fields: [{ name: 'assets', label: 'Elementos visuais', type: 'array', defaultValue: defaultAssets, fields: [
    { name: 'key', label: 'Identificador original', type: 'text', required: true, admin: { readOnly: true } },
    { name: 'label', label: 'Nome do elemento', type: 'text', required: true },
    { name: 'url', label: 'Caminho ou URL', type: 'text', required: true, validate: linkIsSafe },
    { name: 'upload', label: 'Arquivo substituto', type: 'upload', relationTo: 'media' },
  ] }] },
]
