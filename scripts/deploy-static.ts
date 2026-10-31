import nextEnv from '@next/env'
import { spawnSync } from 'node:child_process'

nextEnv.loadEnvConfig(process.cwd())

const projectName = process.env.CLOUDFLARE_PAGES_PROJECT || 'rdash'
const branch = process.env.CLOUDFLARE_PAGES_BRANCH || 'main'

function run(command: string, args: string[]) {
  const result = spawnSync(command, args, { stdio: 'inherit', env: process.env })
  if (result.error) throw result.error
  if (result.status !== 0) process.exit(result.status ?? 1)
}

run('pnpm', ['build:static'])
run('pnpm', ['exec', 'wrangler', 'pages', 'deploy', 'frontend-static/out', '--project-name', projectName, '--branch', branch])
