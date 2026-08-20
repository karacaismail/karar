import type { Block } from './types'

/** Escape user-visible text; content is data, never raw HTML. */
export function esc(s: string): string {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}

const calloutStyles: Record<string, { box: string; badge: string; label: string }> = {
  tip: { box: 'border-emerald-200 bg-emerald-50', badge: 'bg-emerald-100 text-emerald-800', label: 'İpucu' },
  warn: { box: 'border-amber-200 bg-amber-50', badge: 'bg-amber-100 text-amber-800', label: 'Dikkat' },
  case: { box: 'border-sky-200 bg-sky-50', badge: 'bg-sky-100 text-sky-800', label: 'Gerçek Vaka' },
  benefit: { box: 'border-brand-200 bg-brand-50', badge: 'bg-brand-100 text-brand-800', label: 'Fayda' },
}

export function renderBlocks(blocks: Block[]): string {
  return blocks
    .map((b) => {
      switch (b.t) {
        case 'p':
          return `<p>${esc(b.text)}</p>`
        case 'h2':
          return `<h2>${esc(b.text)}</h2>`
        case 'h3':
          return `<h3>${esc(b.text)}</h3>`
        case 'ul':
          return `<ul>${b.items.map((i) => `<li>${esc(i)}</li>`).join('')}</ul>`
        case 'ol':
          return `<ol>${b.items.map((i) => `<li>${esc(i)}</li>`).join('')}</ol>`
        case 'quote':
          return `<blockquote>${esc(b.text)}</blockquote>`
        case 'callout': {
          const s = calloutStyles[b.kind]
          return `
            <div class="rounded-xl border ${s.box} p-4 xs:p-5">
              <div class="mb-2 flex flex-wrap items-center gap-2">
                <span class="rounded-full ${s.badge} px-3 py-0.5 text-base font-semibold">${s.label}</span>
                <span class="text-base font-semibold text-ink-900">${esc(b.title)}</span>
              </div>
              <p class="text-base leading-7 text-ink-700">${esc(b.text)}</p>
            </div>`
        }
        case 'steps':
          return `
            <ol class="!list-none !pl-0 space-y-4">
              ${b.items
                .map(
                  (s, i) => `
                <li class="flex gap-3">
                  <span class="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-500 text-base font-bold text-white">${i + 1}</span>
                  <div>
                    <p class="font-semibold text-ink-900">${esc(s.title)}</p>
                    <p class="mt-1">${esc(s.text)}</p>
                  </div>
                </li>`,
                )
                .join('')}
            </ol>`
      }
    })
    .join('\n')
}
