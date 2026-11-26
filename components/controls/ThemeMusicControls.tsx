"use client";

import Image from 'next/image';
import { useId } from 'react';

export type ThemeOption = { id: string; label: string; color: string };
export type ThemeMusicControlsProps = {
  theme: string;
  options: ThemeOption[];
  onThemeChange: (id: string) => void;
  onToggleMusic: () => void;
  playing?: boolean;
  musicTitle?: string;
  error?: string;
  themesEnabled?: boolean;
  musicEnabled?: boolean;
};

/** Controlled presentation. Audio, persistence and CMS access belong to the caller. */
export function ThemeMusicControls({ theme, options, onThemeChange, onToggleMusic, playing = false, musicTitle = '', error = '', themesEnabled = true, musicEnabled = true }: ThemeMusicControlsProps) {
  const groupId = useId();
  if (!themesEnabled && !musicEnabled) return null
  return (
    <aside className="site-controls" aria-label="Tema e música do site">
      {musicEnabled && <>
        <button type="button" className="site-music-button" onClick={onToggleMusic} aria-label={playing ? 'Pausar música' : 'Reproduzir música'} aria-pressed={playing} title={`${playing ? 'Pausar' : 'Reproduzir'}: ${musicTitle}`}>
          {playing ? <svg viewBox="0 0 42 42" aria-hidden="true"><path d="M14 8v26M28 8v26" fill="none" stroke="currentColor" strokeWidth="5" strokeLinecap="round" /></svg> : <Image src="/assets/music-note.svg" alt="" width={42} height={42} unoptimized />}
        </button>
      </>}
      {themesEnabled && <fieldset className={`site-theme-options${musicEnabled ? '' : ' site-theme-options-only'}`}>
        <legend className="sr-only">Tema do site</legend>
        <Image className="site-theme-panel" src="/assets/theme-controls-panel.svg" alt="" width={134} height={75} unoptimized />
        <div className="site-theme-swatches">
          {options.map(({ id, label, color }) => <label key={id} className="site-theme-option" title={`Tema ${label.toLocaleLowerCase('pt-BR')}`}>
            <input type="radio" name={groupId} value={id} checked={theme === id} onChange={() => onThemeChange(id)} aria-label={`Tema ${label.toLocaleLowerCase('pt-BR')}`} />
            <span style={{ backgroundColor: color }} />
          </label>)}
        </div>
      </fieldset>}
      <p role="status" className={error ? 'site-music-error' : 'sr-only'}>{error || (playing ? `Tocando: ${musicTitle}` : '')}</p>
    </aside>
  )
}
