import { draftMode } from 'next/headers'

export async function DraftPreviewBanner() {
  if (!(await draftMode()).isEnabled) return null

  return <aside role="status" className="fixed inset-x-0 top-0 z-[100] flex items-center justify-center gap-4 bg-black px-4 py-2 text-sm text-white">
    Pré-visualização privada de rascunho
    <form action="/api/exit-draft" method="post"><button className="underline" type="submit">Sair da pré-visualização</button></form>
  </aside>
}
