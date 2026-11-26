import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { GameCarousel } from '../components/carousels/GameCarousel'
import { NewsCarousel } from '../components/carousels/NewsCarousel'
import { useAsset, useSiteContent } from '../app/components/SiteContent'

function CarouselPreview({ kind }: { kind: 'games' | 'news' }) {
  const content = useSiteContent()
  const asset = useAsset()
  return <div className="relative mx-auto w-[1440px] mobile:w-[402px]" style={{ height: kind === 'games' ? 1110 : 860, '--home-gamesTop': '0px', '--home-mobileGamesTop': '0px', '--home-newsTop': '0px', '--home-mobileNewsTop': '0px' } as React.CSSProperties}>
    {kind === 'games' ? <GameCarousel items={content.games.map(item => ({ ...item, image: asset(item.image) }))} /> : <NewsCarousel items={content.news.map(item => ({ ...item, image: asset(item.image) }))} />}
  </div>
}
const meta = { title: 'Componentes/Carrosséis', component: CarouselPreview, parameters: { docs: { description: { component: 'Componentes recebem itens por props e não acessam o CMS. Use o seletor de tema da barra e role até os extremos para conferir as bordas. LinkComponent permite integrar o roteador do projeto.' } } } } satisfies Meta<typeof CarouselPreview>
export default meta
type Story = StoryObj<typeof meta>
export const Jogos: Story = { args: { kind: 'games' } }
export const Novidades: Story = { args: { kind: 'news' } }
