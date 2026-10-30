'use client'

import { ThemeMusicControls } from '@/components/controls/ThemeMusicControls'
import { useEffect, useRef, useState } from 'react'
import { isThemeId, themeIds, themeLabels, themeMusic } from '@/lib/themes'
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

  return <>
    {themeSettings.musicEnabled && <audio ref={audioRef} src={music.source} preload="none" loop onPlay={() => { setPlaying(true); setError('') }} onPause={() => setPlaying(false)} onError={() => playbackError(requestId.current)} />}
    <ThemeMusicControls theme={theme} options={themeIds.map(id => ({ id, label: themeLabels[id], color: id === 'red' ? '#e53935' : themeSettings[id].colors.accent }))} onThemeChange={id => { if (isThemeId(id)) selectTheme(id) }} onToggleMusic={toggleMusic} playing={playing} musicTitle={music.title} error={error} themesEnabled={themeSettings.controlsEnabled} musicEnabled={themeSettings.musicEnabled} />
  </>
}
