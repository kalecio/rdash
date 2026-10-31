import type { Field, GlobalConfig } from 'payload'
import { defaultThemeSettings, type ThemeMusic, type ThemeProfile } from '../lib/themes'
import { contentFields, linkIsSafe } from './fields'

const musicFields = (music: ThemeMusic): Field[] => [
  { name: 'title', label: 'Nome da trilha', type: 'text', required: true, defaultValue: music.title },
  { name: 'source', label: 'Caminho ou URL do áudio', type: 'text', required: true, defaultValue: music.source, validate: linkIsSafe },
  { name: 'sourceUpload', label: 'Áudio substituto', type: 'upload', relationTo: 'audio', admin: { description: 'O arquivo selecionado substitui o caminho acima. Remova a seleção para voltar à trilha original.' } },
]
const profileFields = (profile: ThemeProfile): Field[] => [
  { name: 'colors', label: 'Cores', type: 'group', fields: contentFields(profile.colors) },
  { name: 'music', label: 'Música', type: 'group', fields: musicFields(profile.music) },
  { name: 'assets', label: 'Artes da variante', type: 'array', defaultValue: profile.assets, fields: [
    { name: 'key', label: 'Identificador original', type: 'text', required: true, admin: { readOnly: true } },
    { name: 'label', label: 'Nome', type: 'text', required: true },
    { name: 'url', label: 'Caminho ou URL', type: 'text', required: true, validate: linkIsSafe },
    { name: 'upload', label: 'Imagem substituta', type: 'upload', relationTo: 'media' },
  ] },
]

export const themeSettings: GlobalConfig = {
  slug: 'theme-settings', label: 'Temas e música',
  admin: { group: 'Páginas e aparência', description: 'Configure o seletor, o tema inicial, as artes azul/roxa e a trilha de cada variante. As cores e artes vermelhas continuam em Configurações do site e Imagens, logotipos e texturas.' },
  access: { read: () => true, update: ({ req }) => Boolean(req.user) },
  fields: [
    { name: 'defaultTheme', label: 'Tema inicial', type: 'select', required: true, defaultValue: 'red', options: [{ label: 'Azul', value: 'blue' }, { label: 'Vermelho', value: 'red' }, { label: 'Roxo', value: 'purple' }] },
    { name: 'controlsEnabled', label: 'Exibir seletor de tema', type: 'checkbox', defaultValue: true },
    { name: 'musicEnabled', label: 'Exibir botão de música', type: 'checkbox', defaultValue: true },
    { name: 'volume', label: 'Volume inicial (0 a 1)', type: 'number', min: 0, max: 1, required: true, defaultValue: 0.35 },
    { name: 'redMusic', label: 'Música do tema vermelho', type: 'group', fields: musicFields(defaultThemeSettings.redMusic) },
    { name: 'blue', label: 'Tema azul', type: 'group', fields: profileFields(defaultThemeSettings.blue) },
    { name: 'purple', label: 'Tema roxo', type: 'group', fields: profileFields(defaultThemeSettings.purple) },
  ],
}
