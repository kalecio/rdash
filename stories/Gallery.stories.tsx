import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { GalleryPage } from '../app/components/GalleryPage'
import { GalleryAlbumCard } from '../app/components/GalleryAlbumCard'
import { AlbumPage } from '../app/components/AlbumPage'
import { storyContent } from '../.storybook/fixtures'

const meta = {
  title: 'Componentes/Galeria',
  component: GalleryPage,
  parameters: { docs: { description: { component: 'Página da galeria, cards de álbuns e página do álbum. O card recebe os dados e o destino como props e obtém apenas os caminhos de imagens do provedor de conteúdo.' } } },
} satisfies Meta<typeof GalleryPage>
export default meta
type Story = StoryObj<typeof meta>

export const Albuns: Story = { render: () => <GalleryPage />, parameters: { layout: 'fullscreen' } }

export const CardDeAlbum: StoryObj<typeof GalleryAlbumCard> = {
  render: () => <div className="relative mx-auto h-[1300px] w-[1440px] bg-[var(--cms-background)]"><GalleryAlbumCard album={storyContent.albums[0]} href={`/galeria/${storyContent.albums[0].slug}`} moreLabel={storyContent.galleryPage.moreLabel} style={{ '--album-left': '100px', '--album-top': '80px', '--album-height': '881px' } as React.CSSProperties} /></div>,
  parameters: { layout: 'fullscreen' },
}

export const FotosDoAlbum: StoryObj<typeof AlbumPage> = {
  render: () => <AlbumPage album={storyContent.albums.find(album => album.photos.length > 0) ?? storyContent.albums[0]} />,
  parameters: { layout: 'fullscreen', docs: { description: { story: 'Página de detalhe usando o álbum de demonstração que inclui fotos.' } } },
}
