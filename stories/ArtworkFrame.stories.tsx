import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { ArtworkFrame } from '../components/artwork/ArtworkFrame'
const meta = { title: 'Componentes/Arte com borda', component: ArtworkFrame, args: { src: '/assets/themes/blue/game-5.png', alt: 'Vampire Savior', style: { width: 244, height: 432 } }, parameters: { layout: 'centered', docs: { description: { component: 'Preserva a arte e sua borda exportada. Sem dependência do CMS, do roteador ou do Next.js.' } } } } satisfies Meta<typeof ArtworkFrame>
export default meta
type Story = StoryObj<typeof meta>
export const Jogo: Story = {}
export const Novidade: Story = { args: { src: '/assets/themes/purple/news-1.png', alt: 'Resultados do torneio', style: { width: 668, height: 312 } } }
