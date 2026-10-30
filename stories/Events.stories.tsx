import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { Events } from '../app/components/Events'
import { EventsPage } from '../app/components/EventsPage'

const meta = {
  title: 'Componentes/Eventos',
  component: Events,
  parameters: { docs: { description: { component: 'Destaque do próximo evento na home e listagem de eventos. As histórias usam apenas o conteúdo local de exemplo e permitem trocar de tema pela barra superior.' } } },
} satisfies Meta<typeof Events>
export default meta
type Story = StoryObj<typeof meta>

export const DestaqueNaHome: Story = {
  render: () => <div className="relative mx-auto h-[1100px] w-[1440px] overflow-hidden bg-[var(--cms-homeBackground)]" style={{ '--home-eventTop': '138px', '--home-mobileEventTop': '0px' } as React.CSSProperties}><Events /></div>,
  parameters: { layout: 'fullscreen' },
}

export const PaginaDeEventos: StoryObj<typeof EventsPage> = {
  render: () => <EventsPage />,
  parameters: { layout: 'fullscreen' },
}
