export async function requestStaticSiteDeployment(): Promise<void> {
  const deployHook = process.env.CLOUDFLARE_PAGES_DEPLOY_HOOK
  if (!deployHook) return

  try {
    const response = await fetch(deployHook, { method: 'POST', signal: AbortSignal.timeout(10_000) })
    if (!response.ok) {
      console.error(`Cloudflare Pages deploy hook returned HTTP ${response.status}.`)
      return
    }
    console.info('Requested a Cloudflare Pages build after a CMS content change.')
  } catch (error) {
    console.error('Could not request a Cloudflare Pages build.', error instanceof Error ? error.message : 'Unknown error')
  }
}
