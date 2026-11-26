import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { Header } from '../app/components/Header'

function HeaderPreview({ variant }: { variant: 'community' | 'home' | 'red' }) {
  return <div className="relative mx-auto h-[260px] w-[1440px] bg-[var(--cms-background)]">
    {variant === 'community' && <Header communityDesign activePage="Comunidade" />}
    {variant === 'home' && <Header figmaNav activePage="Home" blurUntilHero={false} />}
    {variant === 'red' && <Header background="var(--cms-accent)" blurUntilHero={false} />}
  </div>
}

const headerMeta = {
  title: 'Componentes/Cabeçalho',
  component: HeaderPreview,
  args: { variant: 'community' },
  argTypes: { variant: { control: 'inline-radio', options: ['community', 'home', 'red'] } },
  parameters: { docs: { description: { component: 'Cabeçalho do site nos estilos usados pelas páginas de comunidade e home, além da variação vermelha. O menu móvel pode ser conferido reduzindo a largura pelo viewport do Storybook.' } } },
} satisfies Meta<typeof HeaderPreview>
export default headerMeta
type HeaderStory = StoryObj<typeof headerMeta>
export const Comunidade: HeaderStory = { args: { variant: 'community' } }
export const Home: HeaderStory = { args: { variant: 'home' } }
export const Vermelho: HeaderStory = { args: { variant: 'red' } }
