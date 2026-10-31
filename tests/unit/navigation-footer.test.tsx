import { describe, expect, it, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { normalizeSiteContent } from '../../lib/site-content-normalization'
import { Header } from '../../app/components/Header'
import { DesignFooter } from '../../app/components/DesignFooter'
import { Footer } from '../../app/components/Footer'

vi.mock('../../app/components/SiteContent', async () => {
  const { normalizeSiteContent } = await import('../../lib/site-content-normalization')
  const content = structuredClone(normalizeSiteContent({}))
  content.site.navigation.push({ ...content.site.navigation[0], label: 'Loja', href: '/loja' })
  content.site.footer.links.push({ label: 'Loja', href: '/loja/' })
  return { useSiteContent: () => content, useAsset: () => (path: string) => path }
})

describe('public navigation and footer', () => {
  it('hides legacy CMS store links from desktop and mobile navigation', async () => {
    render(<Header blurUntilHero={false} />)
    expect(screen.queryByRole('link', { name: 'Loja' })).not.toBeInTheDocument()
    await userEvent.click(screen.getByRole('button', { name: 'Abrir menu de navegação' }))
    expect(screen.queryByRole('link', { name: 'Loja' })).not.toBeInTheDocument()
    expect(screen.getAllByRole('link', { name: 'Eventos' })).toHaveLength(2)
  })

  for (const Component of [Footer, DesignFooter]) it(`removes Loja and displays the credit in ${Component.name}`, () => {
    render(<Component />)
    expect(screen.queryByRole('link', { name: 'Loja' })).not.toBeInTheDocument()
    expect(screen.getByText(/Feito com carinho por/)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'kalec.io' })).toHaveAttribute('href', 'https://kalec.io')
  })

  it('has no store links in the default CMS content', () => {
    const { site } = normalizeSiteContent({})
    expect([...site.navigation, ...site.footer.links].some(link => link.href === '/loja')).toBe(false)
  })
})
