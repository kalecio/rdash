import { describe, expect, it, vi } from 'vitest'
import { fireEvent, render, screen } from '@testing-library/react'
import { NewsCarousel } from '../../components/carousels/NewsCarousel'
import { GameCarousel } from '../../components/carousels/GameCarousel'

const items = [1, 2, 3].map(id => ({ title: `Item ${id}`, image: `/image-${id}.png`, href: `/item-${id}`, copy: `Descrição ${id}` }))

describe('reusable carousels', () => {
  it('renders every game from props with its full artwork and destination', () => {
    render(<GameCarousel items={items} />)
    for (const item of items) {
      expect(screen.getByRole('img', { name: item.title })).toHaveAttribute('src', item.image)
      expect(screen.getByRole('link', { name: item.title })).toHaveAttribute('href', item.href)
    }
  })
  it('keeps the closest news card enlarged as the carousel moves to either end', () => {
    // Real layout is verified in the browser; this fixes deterministic slot geometry for the scaling rule.
    let position = 0
    vi.spyOn(HTMLElement.prototype, 'clientWidth', 'get').mockReturnValue(1440)
    vi.spyOn(HTMLElement.prototype, 'getBoundingClientRect').mockImplementation(function (this: HTMLElement) {
      const index = this.classList.contains('news-slot') ? Array.from(this.parentElement!.children).indexOf(this) : -1
      const width = index < 0 ? 1440 : 566
      const left = index < 0 ? 0 : 437 + index * 566 - position
      return { x: left, y: 0, left, right: left + width, top: 0, bottom: 506, width, height: 506, toJSON() {} }
    })
    const { container } = render(<NewsCarousel items={items} />)
    const viewport = screen.getByLabelText('Carrossel de novidades. Role horizontalmente para navegar.')
    const cards = Array.from(container.querySelectorAll<HTMLElement>('.news-card'))
    for (const index of [0, 2, 1]) {
      position = index * 566
      fireEvent.scroll(viewport)
      expect(cards[index]).not.toHaveClass('is-side')
      expect(cards[index].style.getPropertyValue('--scale')).toBe('1.000')
      cards.filter((_, i) => i !== index).forEach(card => expect(card).toHaveClass('is-side'))
    }
  })
})
