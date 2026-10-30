import assert from 'node:assert/strict'
import { test } from 'node:test'
import { existsSync } from 'node:fs'
import path from 'node:path'
import sharp from 'sharp'
import { defaultSite } from '../cms/defaults'
import { defaultThemeSettings, isThemeId, themeAssets, themeColors, themeIds, themeMusic } from '../lib/themes'

test('theme preferences accept only supported variants', () => {
  for (const theme of themeIds) assert.equal(isThemeId(theme), true)
  for (const value of [null, undefined, '', 'dark', '<script>', '__proto__']) assert.equal(isThemeId(value), false)
})

test('each Figma variant has its own palette and existing art and audio files', () => {
  const music = new Set<string>()
  for (const theme of themeIds) {
    const colors = themeColors(theme, defaultSite.theme, defaultThemeSettings)
    assert.match(colors.accent, /^#[a-f\d]{6}$/i)
    music.add(themeMusic(theme, defaultThemeSettings).source)
    const sources = [...Object.values(themeAssets(theme, defaultThemeSettings)), themeMusic(theme, defaultThemeSettings).source]
    for (const source of sources) assert.ok(existsSync(path.join(process.cwd(), 'public', source)), `${theme}: ${source}`)
  }
  assert.equal(music.size, 3)
  assert.deepEqual(themeAssets('red', defaultThemeSettings), {})
})

test('custom red CMS colors and alternate theme overrides are preserved', () => {
  const customRed = { ...defaultSite.theme, background: '#123456', accent: '#abcdef' }
  assert.equal(themeColors('red', customRed, defaultThemeSettings).background, '#123456')
  assert.equal(themeColors('red', customRed, defaultThemeSettings).heroEdge, '#abcdef')
  const settings = structuredClone(defaultThemeSettings)
  settings.blue.colors.background = '#112233'
  settings.blue.assets[0].url = '/custom/hero.png'
  assert.equal(themeColors('blue', customRed, settings).background, '#112233')
  assert.equal(themeAssets('blue', settings)['/assets/home-hero-background.png'], '/custom/hero.png')
})

test('Street Fighter and Under Night hero assets contain multiple animation frames', async () => {
  const blue = themeAssets('blue', defaultThemeSettings)
  const purple = themeAssets('purple', defaultThemeSettings)
  const paths = [blue['/assets/home-hero-background.png'], purple['/assets/red-sol.png'], purple['/assets/red-ky.png']]
  for (const source of paths) {
    const metadata = await sharp(path.join(process.cwd(), 'public', source), { animated: true }).metadata()
    assert.equal(metadata.format, 'gif')
    assert.ok((metadata.pages ?? 1) > 1, `Static hero asset: ${source}`)
    assert.equal(metadata.loop, 0)
  }
})
