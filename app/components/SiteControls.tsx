'use client'

import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import { themeIds, themeLabels, themeMusic } from '@/lib/themes'
import { useSiteContent, useSiteTheme } from './SiteContent'

export function SiteControls() {
  const { themeSettings } = useSiteContent()
  const { theme, selectTheme } = useSiteTheme()
  const music = themeMusic(theme, themeSettings)
  const audioRef = useRef<HTMLAudioElement>(null)
  const wantsPlayback = useRef(false)
  const requestId = useRef(0)
  const [playing, setPlaying] = useState(false)
  const [error, setError] = useState('')

  const playbackError = (request: number) => {
    if (request !== requestId.current) return
    wantsPlayback.current = false
    setPlaying(false)
    setError('Não foi possível tocar a música. Tente novamente.')
  }

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return
    audio.volume = Math.max(0, Math.min(1, themeSettings.volume))
    const request = ++requestId.current
    // Changing theme changes the track, but never starts audio without a prior click.
    if (wantsPlayback.current && themeSettings.musicEnabled) void audio.play().catch(() => playbackError(request))
    else audio.pause()
  }, [music.source, themeSettings.musicEnabled, themeSettings.volume])

  function toggleMusic() {
    const audio = audioRef.current
    if (!audio) return
    setError('')
    const request = ++requestId.current
    wantsPlayback.current = !wantsPlayback.current
    if (wantsPlayback.current) void audio.play().catch(() => playbackError(request))
    else audio.pause()
  }

  if (!themeSettings.controlsEnabled && !themeSettings.musicEnabled) return null
  return (
    <aside className="site-controls" aria-label="Tema e música do site">
      {themeSettings.musicEnabled && <>
        <audio ref={audioRef} src={music.source} preload="none" loop onPlay={() => { setPlaying(true); setError('') }} onPause={() => setPlaying(false)} onError={() => playbackError(requestId.current)} />
        <button type="button" className="site-music-button" onClick={toggleMusic} aria-label={playing ? 'Pausar música' : 'Reproduzir música'} aria-pressed={playing} title={`${playing ? 'Pausar' : 'Reproduzir'}: ${music.title}`}>
          {playing ? <svg viewBox="0 0 42 42" aria-hidden="true"><path d="M14 8v26M28 8v26" fill="none" stroke="currentColor" strokeWidth="5" strokeLinecap="round" /></svg> : <Image src="/assets/music-note.svg" alt="" width={42} height={42} unoptimized />}
        </button>
      </>}
      {themeSettings.controlsEnabled && <fieldset className={`site-theme-options${themeSettings.musicEnabled ? '' : ' site-theme-options-only'}`}>
        <legend className="sr-only">Tema do site</legend>
        <Image className="site-theme-panel" src="/assets/theme-controls-panel.svg" alt="" width={134} height={75} unoptimized />
        <div className="site-theme-swatches">
          {themeIds.map(id => <label key={id} className="site-theme-option" title={`Tema ${themeLabels[id].toLocaleLowerCase('pt-BR')}`}>
            <input type="radio" name="site-theme" value={id} checked={theme === id} onChange={() => selectTheme(id)} aria-label={`Tema ${themeLabels[id].toLocaleLowerCase('pt-BR')}`} />
            <span style={{ backgroundColor: id === 'red' ? '#e53935' : themeSettings[id].colors.accent }} />
          </label>)}
        </div>
      </fieldset>}
      <p role="status" className={error ? 'site-music-error' : 'sr-only'}>{error || (playing ? `Tocando: ${music.title}` : '')}</p>
    </aside>
  )
}
