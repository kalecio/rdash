import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { ThemeMusicControls } from '../components/controls/ThemeMusicControls'

const meta = {
  title: 'Componentes/Tema e música', component: ThemeMusicControls,
  args: { theme: 'red', playing: false, musicTitle: 'Trilha de exemplo', onThemeChange: () => {}, onToggleMusic: () => {}, options: [{ id: 'blue', label: 'Azul', color: '#003cc0' }, { id: 'red', label: 'Vermelho', color: '#e53935' }, { id: 'purple', label: 'Roxo', color: '#9b3a90' }] },
  render: function Interactive(args) { const [theme, setTheme] = useState(args.theme); const [playing, setPlaying] = useState(args.playing); return <div style={{ minHeight: 720 }}><ThemeMusicControls {...args} theme={theme} playing={playing} onThemeChange={setTheme} onToggleMusic={() => setPlaying(!playing)} /></div> },
  parameters: { docs: { description: { component: 'Apresentação controlada por props. Não toca áudio nem grava preferências isoladamente; SiteControls conecta esses comportamentos no site.' } } },
} satisfies Meta<typeof ThemeMusicControls>
export default meta
type Story = StoryObj<typeof meta>
export const Pausado: Story = {}
export const Tocando: Story = { args: { playing: true } }
export const Erro: Story = { args: { error: 'Não foi possível tocar a música. Tente novamente.' } }
export const ApenasTemas: Story = { args: { musicEnabled: false } }
