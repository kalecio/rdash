import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { EventsPage } from '../app/components/EventsPage'
import { GalleryPage } from '../app/components/GalleryPage'
import { LeaderboardPage } from '../app/components/LeaderboardPage'
import { HomePage } from '../app/components/HomePage'

const pages = { home: HomePage, events: EventsPage, gallery: GalleryPage, leaderboard: LeaderboardPage }
function PagePreview({ page }: { page: keyof typeof pages }) { const Page = pages[page]; return <Page /> }
const meta = { title: 'Páginas/Referências visuais', component: PagePreview, parameters: { docs: { description: { component: 'Páginas com conteúdo público de exemplo, sem banco de dados. Alterne os três temas pela barra do Storybook.' } } } } satisfies Meta<typeof PagePreview>
export default meta
type Story = StoryObj<typeof meta>
export const Home: Story = { args: { page: 'home' } }
export const Eventos: Story = { args: { page: 'events' } }
export const Galeria: Story = { args: { page: 'gallery' } }
export const Leaderboard: Story = { args: { page: 'leaderboard' } }
