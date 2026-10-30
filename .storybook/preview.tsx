import type { Preview } from '@storybook/nextjs-vite'
import { SiteContentProvider } from '../app/components/SiteContent'
import { isThemeId } from '../lib/themes'
import { storyContent } from './fixtures'
import { DM_Sans, Rubik_Dirt } from 'next/font/google'
import { PencilBorderSvg } from '../app/components/PencilBorder'
import '../app/globals.css'

const dmSans = DM_Sans({ variable: '--font-dm-sans', subsets: ['latin'] })
const rubikDirt = Rubik_Dirt({ variable: '--font-rubik-dirt', weight: '400', subsets: ['latin'] })

const preview: Preview = {
  tags: ['autodocs'],
  globalTypes: {
    theme: { description: 'Tema visual do Figma', toolbar: { title: 'Tema', icon: 'paintbrush', items: [{ value: 'red', title: 'Guilty Gear (vermelho)' }, { value: 'blue', title: 'Street Fighter (azul)' }, { value: 'purple', title: 'Under Night (roxo)' }], dynamicTitle: true } },
  },
  initialGlobals: { theme: 'red' },
  parameters: { layout: 'fullscreen', nextjs: { appDirectory: true }, a11y: { test: 'todo' } },
  decorators: [(Story, context) => {
    const theme = isThemeId(context.globals.theme) ? context.globals.theme : 'red'
    return <div className={`${dmSans.variable} ${rubikDirt.variable}`}><PencilBorderSvg /><SiteContentProvider key={theme} initialTheme={theme} content={storyContent}><Story /></SiteContentProvider></div>
  }],
}
export default preview
