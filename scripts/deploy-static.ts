import nextEnv from '@next/env'
import { spawnSync } from 'node:child_process'
import path from 'node:path'

nextEnv.loadEnvConfig(process.cwd())

const rootDir = process.cwd()
const projectName = process.env.CLOUDFLARE_PAGES_PROJECT || 'rdash'
const branch = process.env.CLOUDFLARE_PAGES_BRANCH || 'main'

function runNode(script: string, args: string[], cwd = rootDir) {
  const result = spawnSync(process.execPath, [script, ...args], { cwd, stdio: 'inherit', env: process.env })
  if (result.error) throw result.error
  if (result.status !== 0) process.exit(result.status ?? 1)
}

runNode(path.join(rootDir, 'node_modules/tsx/dist/cli.mjs'), ['scripts/build-static-content.ts'])
runNode(path.join(rootDir, 'node_modules/next/dist/bin/next'), ['build', '--webpack'], path.join(rootDir, 'frontend-static'))
runNode(path.join(rootDir, 'node_modules/wrangler/bin/wrangler.js'), ['pages', 'deploy', 'frontend-static/out', '--project-name', projectName, '--branch', branch])
