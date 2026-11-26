import { describe, expect, it, vi } from 'vitest'
import { render } from '@testing-library/react'
import { DesignPage } from '../../app/components/DesignPage'
import { defaultSite } from '../../cms/defaults'
import { defaultThemeSettings, themeColors, themeIds } from '../../lib/themes'

const fixture = vi.hoisted(() => ({ palette: {} as Record<string, string> }))
vi.mock('../../app/components/SiteContent', () => ({ useSiteContent: () => ({ site: { theme: fixture.palette } }), useAsset: () => (path: string) => path }))
vi.mock('../../app/components/Header', () => ({ Header: () => <header /> }))
vi.mock('../../app/components/DesignFooter', () => ({ DesignFooter: () => <footer /> }))

describe('Figma page backgrounds', () => {
  for (const theme of themeIds) for (const [page, tone, expected] of [
    ['Eventos', 'dark', theme === 'red' ? '#5f0808' : theme === 'blue' ? '#001647' : '#310b2e'],
    ['Galeria', 'background', theme === 'red' ? '#881411' : theme === 'blue' ? '#001647' : '#310b2e'],
    ['Leaderboard', 'dark', theme === 'red' ? '#5f0808' : theme === 'blue' ? '#001647' : '#310b2e'],
  ] as const) it(`${page}: ${theme} keeps the correct color and visible texture on desktop and mobile`, () => {
    fixture.palette = themeColors(theme, defaultSite.theme, defaultThemeSettings)
    const { container } = render(<DesignPage activePage={page} desktopHeight={2874} mobileHeight={1696} background={tone}><h1>{page}</h1></DesignPage>)
    expect(container.firstElementChild).toHaveStyle({ backgroundColor: expected })
    const texture = container.querySelector('[style*="background-image"]')
    expect(texture).toHaveStyle({ opacity: '0.34' })
    expect((texture as HTMLElement).style.backgroundImage).toBe('url("/assets/brickwall.png")')
    expect((texture as HTMLElement).style.backgroundSize).toBe('cover')
    expect((texture as HTMLElement).style.backgroundPosition).toMatch(/^center(?: center)?$/)
    expect(texture).not.toHaveClass('mobile:hidden')
  })
})
