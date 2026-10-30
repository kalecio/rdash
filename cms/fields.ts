import type { Field, TextField, TextareaField } from 'payload'

const labels: Record<string, string> = {
  layout: 'Posições e espaçamento (avançado)', height: 'Altura total no desktop', mobileHeight: 'Altura total no mobile', footerTop: 'Posição do rodapé no desktop', mobileFooterTop: 'Posição do rodapé no mobile', title: 'Título', subtitle: 'Subtítulo', description: 'Descrição', name: 'Nome', label: 'Texto', href: 'Destino do link',
  image: 'Imagem desktop', mobileImage: 'Imagem mobile', detailImage: 'Imagem do detalhe', enabled: 'Exibir', published: 'Publicado',
  order: 'Ordem de exibição', score: 'Pontuação', slug: 'Endereço (slug)', status: 'Período', date: 'Data e horário',
  location: 'Local', price: 'Valor', photos: 'Fotos', copy: 'Texto', seoTitle: 'Título para buscadores', seoDescription: 'Descrição para buscadores',
  navigation: 'Navegação', footer: 'Rodapé', links: 'Links', social: 'Redes sociais', about: 'Sobre a comunidade',
  theme: 'Cores', background: 'Fundo', accent: 'Destaque', dark: 'Fundo escuro', card: 'Cartões', table: 'Tabela', tableHeader: 'Cabeçalho da tabela', text: 'Texto', mutedText: 'Texto secundário',
  whoTitle: 'Título de quem somos', whoText: 'Texto de quem somos', whereTitle: 'Título da localização', whereText: 'Texto da localização',
  joinTitle: 'Título do convite', joinText: 'Texto do convite', joinEnabled: 'Exibir convite',
  heroEnabled: 'Exibir abertura', eventEnabled: 'Exibir próximo evento', newsEnabled: 'Exibir novidades', gamesEnabled: 'Exibir jogos', tvEnabled: 'Exibir televisão', mascotEnabled: 'Exibir mascote animada',
  featuredEvent: 'Próximo evento na Home', newsTitle: 'Título de novidades', gamesTitle: 'Título de jogos',
}

export const linkIsSafe = (value: unknown) => typeof value !== 'string' || !value || /^(\/(?!\/)|https?:\/\/|mailto:|tel:|#)/i.test(value) || 'Use um caminho começando por / ou um link https:// válido.'

/** Build the editorial forms from the imported content, keeping names consistent. */
export function contentFields(data: Record<string, unknown>, defaults = true): Field[] {
  return Object.entries(data).flatMap(([name, value]): Field[] => {
    const label = labels[name] ?? name.replace(/([A-Z])/g, ' $1').replace(/^./, c => c.toUpperCase())
    if (Array.isArray(value)) return [{ name, label, type: 'array', fields: contentFields(value[0] ?? {}, false), ...(defaults ? { defaultValue: value } : {}) }]
    if (value && typeof value === 'object') return [{ name, label, type: 'group', fields: contentFields(value as Record<string, unknown>, defaults) }]
    if (typeof value === 'boolean') return [{ name, label, type: 'checkbox', defaultValue: value }]
    if (typeof value === 'number') return [{ name, label, type: 'number', min: 0, ...(defaults ? { defaultValue: value } : {}) }]
    const text = String(value ?? '')
    const isImage = text.startsWith('/assets/')
    const field = { name, label, required: text.length > 0 && !['date', 'location', 'price'].includes(name), type: text.length > 120 || text.includes('\n') ? 'textarea' : 'text', ...(defaults ? { defaultValue: text } : {}) } as TextField | TextareaField
    if (name.toLowerCase().includes('href') || isImage) field.validate = linkIsSafe
    if (text.startsWith('#') && /^#[\da-f]{6}$/i.test(text)) field.validate = (value: unknown) => !value || /^#[\da-f]{6}$/i.test(String(value)) || 'Use uma cor hexadecimal, como #e53935.'
    if (name === 'slug') { field.required = true; field.unique = true; field.validate = (value: unknown) => /^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(String(value)) || 'Use letras minúsculas, números e hífens.' }
    if (name === 'status') return [{ name, label, type: 'select', required: true, defaultValue: 'upcoming', options: [{ label: 'Próximo evento', value: 'upcoming' }, { label: 'Evento anterior', value: 'past' }] }]
    return isImage ? [field, { name: `${name}Upload`, label: `${label}: enviar arquivo`, type: 'upload', relationTo: 'media', admin: { description: 'O arquivo enviado substitui o caminho acima. Remova a seleção para usar o caminho novamente.' } }] : [field]
  })
}
