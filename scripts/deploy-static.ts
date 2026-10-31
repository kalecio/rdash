import nextEnv from '@next/env'
import { spawnSync } from 'node:child_process'

nextEnv.loadEnvConfig(process.cwd())

const mediaURL = process.env.STATIC_CMS_MEDIA_URL
if (!mediaURL) {
  throw new Error('Configure STATIC_CMS_MEDIA_URL no .env com o endereço HTTPS público do CMS para que imagens e áudios enviados também funcionem no site publicado.')
}

const parsedMediaURL = new URL(mediaURL)
if (parsedMediaURL.protocol !== 'https:') {
  throw new Error('STATIC_CMS_MEDIA_URL precisa usar HTTPS e estar acessível publicamente (por exemplo, o hostname do Tunnel do CMS).')
}

const projectName = process.env.CLOUDFLARE_PAGES_PROJECT || 'rdash'
const branch = process.env.CLOUDFLARE_PAGES_BRANCH || 'main'

function run(command: string, args: string[]) {
  const result = spawnSync(command, args, { stdio: 'inherit', env: process.env })
  if (result.error) throw result.error
  if (result.status !== 0) process.exit(result.status ?? 1)
}

run('pnpm', ['build:static'])
run('pnpm', ['exec', 'wrangler', 'pages', 'deploy', 'frontend-static/out', '--project-name', projectName, '--branch', branch])
