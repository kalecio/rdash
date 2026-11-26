import type { Preview } from '@storybook/nextjs-vite'
import { SiteContentProvider } from '../app/components/SiteContent'
import { isThemeId } from '../lib/themes'
import { storyContent } from './fixtures'
import { PencilBorderSvg } from '../app/components/PencilBorder'
import '../app/globals.css'
import './fonts.css'

const preview: Preview = {
  tags: ['autodocs'],
  globalTypes: {
    theme: { description: 'Tema visual do Figma', toolbar: { title: 'Tema', icon: 'paintbrush', items: [{ value: 'red', title: 'Guilty Gear (vermelho)' }, { value: 'blue', title: 'Street Fighter (azul)' }, { value: 'purple', title: 'Under Night (roxo)' }], dynamicTitle: true } },
  },
  initialGlobals: { theme: 'red' },
  parameters: { layout: 'fullscreen', nextjs: { appDirectory: true }, a11y: { test: 'todo' } },
  decorators: [(Story, context) => {
    const theme = isThemeId(context.globals.theme) ? context.globals.theme : 'red'
    return <div className="storybook-fonts"><PencilBorderSvg /><SiteContentProvider key={theme} initialTheme={theme} content={storyContent}><Story /></SiteContentProvider></div>
  }],
}
export default preview
