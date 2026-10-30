import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { DesignFooter } from '../app/components/DesignFooter'

const meta = {
  title: 'Componentes/Rodapé',
  component: DesignFooter,
  render: () => <div className="relative mx-auto min-h-[520px] w-[1440px] bg-[var(--cms-background)]"><DesignFooter /></div>,
  parameters: { layout: 'fullscreen', docs: { description: { component: 'Rodapé utilizado pelas páginas públicas. Experimente os três temas e o viewport móvel; textos e links vêm da configuração do site.' } } },
} satisfies Meta<typeof DesignFooter>
export default meta
type Story = StoryObj<typeof meta>
export const Padrao: Story = {}
