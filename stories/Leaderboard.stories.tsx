import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { LeaderboardPage } from '../app/components/LeaderboardPage'

const meta = {
  title: 'Componentes/Leaderboard',
  component: LeaderboardPage,
  parameters: { layout: 'fullscreen', docs: { description: { component: 'Ranking completo com dados públicos de demonstração. A busca, a navegação e a troca entre temas podem ser exploradas diretamente nesta história.' } } },
} satisfies Meta<typeof LeaderboardPage>
export default meta
type Story = StoryObj<typeof meta>

export const Ranking: Story = {}
