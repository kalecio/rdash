import nextEnv from '@next/env'
nextEnv.loadEnvConfig(process.cwd())
const { getPayload } = await import('payload')
const { default: config } = await import('../payload.config')
const payload = await getPayload({ config })
let exitCode = 0
try {
  const { seedContent } = await import('../cms/seed')
  await seedContent(payload)
} catch (error) {
  console.error(error)
  exitCode = 1
} finally {
  // This one-shot CLI owns its process, so exit to close the adapter's PG pool.
  process.exit(exitCode)
}
