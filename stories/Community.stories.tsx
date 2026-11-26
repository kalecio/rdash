import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { CommunityJoinSection } from '../app/components/CommunityJoinSection'
import { CommunityPage } from '../app/components/CommunityPage'

const meta = {
  title: 'Componentes/Comunidade',
  component: CommunityJoinSection,
  parameters: { docs: { description: { component: 'Seção de convite à comunidade e página de referência completa. Os textos e links vêm do conteúdo público de exemplo usado pelo Storybook.' } } },
} satisfies Meta<typeof CommunityJoinSection>
export default meta
type Story = StoryObj<typeof meta>

export const JunteSeANos: Story = {
  render: () => <div className="relative mx-auto h-[2300px] w-[1440px] overflow-hidden bg-[var(--cms-background)]"><CommunityJoinSection /></div>,
  parameters: { layout: 'fullscreen' },
}

export const PaginaDaComunidade: StoryObj<typeof CommunityPage> = {
  render: () => <CommunityPage />,
  parameters: { layout: 'fullscreen' },
}
