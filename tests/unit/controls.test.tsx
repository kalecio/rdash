import { useState } from 'react'
import { describe, expect, it, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { ThemeMusicControls, type ThemeMusicControlsProps } from '../../components/controls/ThemeMusicControls'

const options = [{ id: 'blue', label: 'Azul', color: '#003cc0' }, { id: 'red', label: 'Vermelho', color: '#e53935' }, { id: 'purple', label: 'Roxo', color: '#9b3a90' }]
const base: ThemeMusicControlsProps = { theme: 'red', options, onThemeChange: () => {}, onToggleMusic: () => {} }

describe('theme and playback controls', () => {
  it('changes theme using the native keyboard radio interaction', async () => {
    const user = userEvent.setup()
    function Controlled() { const [theme, setTheme] = useState('red'); return <ThemeMusicControls {...base} theme={theme} onThemeChange={setTheme} /> }
    render(<Controlled />)
    const red = screen.getByRole('radio', { name: 'Tema vermelho' })
    red.focus()
    await user.keyboard('{ArrowRight}')
    expect(screen.getByRole('radio', { name: 'Tema roxo' })).toBeChecked()
    expect(red).not.toBeChecked()
  })
  it('reports play/pause and delegates playback to the caller', async () => {
    const onToggleMusic = vi.fn()
    const { rerender } = render(<ThemeMusicControls {...base} onToggleMusic={onToggleMusic} />)
    await userEvent.click(screen.getByRole('button', { name: 'Reproduzir música' }))
    expect(onToggleMusic).toHaveBeenCalledOnce()
    rerender(<ThemeMusicControls {...base} playing musicTitle="Under Night" />)
    expect(screen.getByRole('button', { name: 'Pausar música' })).toHaveAttribute('aria-pressed', 'true')
    expect(screen.getByRole('status')).toHaveTextContent('Tocando: Under Night')
  })
  it('announces playback failures and respects disabled controls', () => {
    const { rerender } = render(<ThemeMusicControls {...base} error="Falha ao tocar" musicEnabled={false} />)
    expect(screen.getByRole('status')).toHaveTextContent('Falha ao tocar')
    expect(screen.queryByRole('button')).not.toBeInTheDocument()
    expect(screen.getAllByRole('radio')).toHaveLength(3)
    rerender(<ThemeMusicControls {...base} musicEnabled={false} themesEnabled={false} />)
    expect(screen.queryByRole('complementary')).not.toBeInTheDocument()
  })
})
