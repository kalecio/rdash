// Keep the store hidden even when an older CMS snapshot still contains it.
export function isVisibleNavigationLink(link: { label: string; href: string }): boolean {
  const pathname = new URL(link.href, 'https://rdash.kalec.io').pathname.toLowerCase()
  return link.label.trim().toLowerCase() !== 'loja' && !/^\/loja(?:\/|$)/.test(pathname)
}
