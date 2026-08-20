import type { Block, Viz } from './types'

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
  simple: { box: 'border-violet-200 bg-violet-50', badge: 'bg-violet-100 text-violet-800', label: 'Kısaca' },
  ornek: { box: 'border-teal-200 bg-teal-50', badge: 'bg-teal-100 text-teal-800', label: 'Günlük Hayattan' },
}

/** HTML renderers for the non-chart viz kinds: table, process flow, 3-set Venn. */
export function staticVizHtml(v: Viz): string | null {
  if (v.kind === 'table') {
    return `
      <div class="overflow-x-auto rounded-xl border border-ink-100">
        <table class="w-full min-w-[28rem] border-collapse text-left">
          <thead>
            <tr class="bg-ink-50">
              ${v.head.map((h, i) => `<th class="border-b border-ink-200 px-4 py-3 text-base font-semibold ${i === v.accentCol ? 'text-brand-600' : 'text-ink-800'}">${esc(h)}</th>`).join('')}
            </tr>
          </thead>
          <tbody>
            ${v.rows
              .map(
                (r, ri) => `
              <tr class="${ri % 2 ? 'bg-ink-50/50' : 'bg-white'}">
                ${r.map((c, ci) => `<td class="border-b border-ink-100 px-4 py-3 align-top text-base leading-7 ${ci === 0 ? 'font-semibold text-ink-900' : 'text-ink-700'} ${ci === v.accentCol ? '!text-brand-700' : ''}">${esc(c)}</td>`).join('')}
              </tr>`,
              )
              .join('')}
          </tbody>
        </table>
      </div>`
  }
  if (v.kind === 'process') {
    return `
      <ol class="flex flex-col gap-0">
        ${v.steps
          .map(
            (s, i) => `
          <li class="relative flex gap-4 pb-5 last:pb-0">
            ${i < v.steps.length - 1 ? '<span class="absolute left-[15px] top-9 h-[calc(100%-2rem)] w-0.5 bg-ink-200" aria-hidden="true"></span>' : ''}
            <span class="z-10 mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full ${i === v.steps.length - 1 && !v.loop ? 'bg-brand-500' : 'bg-ink-700'} text-base font-bold text-white">${i + 1}</span>
            <div class="min-w-0">
              <p class="text-base font-semibold text-ink-900">${esc(s.title)}</p>
              ${s.text ? `<p class="mt-0.5 text-base leading-7 text-ink-600">${esc(s.text)}</p>` : ''}
            </div>
          </li>`,
          )
          .join('')}
        ${
          v.loop
            ? `<li class="flex items-center gap-2 pt-1 text-base font-semibold text-brand-600">
                <i class="ph ph-arrow-counter-clockwise" aria-hidden="true"></i> Döngü başa döner
              </li>`
            : ''
        }
      </ol>`
  }
  if (v.kind === 'svg') {
    return `<div class="overflow-x-auto">${v.svg}</div>`
  }
  if (v.kind === 'venn3') {
    const [a, b, c] = v.labels
    const [ab, ac, bc] = v.pairs
    return `
      <svg viewBox="0 0 340 300" role="img" class="mx-auto w-full max-w-md" aria-label="${esc(a)}, ${esc(b)}, ${esc(c)} kesişim diyagramı">
        <g fill-opacity="0.16" stroke-width="2">
          <circle cx="170" cy="105" r="82" fill="#f95428" stroke="#f95428"/>
          <circle cx="120" cy="185" r="82" fill="#4f6d8c" stroke="#4f6d8c"/>
          <circle cx="220" cy="185" r="82" fill="#2f9e77" stroke="#2f9e77"/>
        </g>
        <g font-family="Roboto, sans-serif" font-size="16" font-weight="700" fill="#333a40" text-anchor="middle">
          <text x="170" y="52">${esc(a)}</text>
          <text x="76" y="232">${esc(b)}</text>
          <text x="264" y="232">${esc(c)}</text>
        </g>
        <g font-family="Roboto, sans-serif" font-size="13" fill="#4f5e6a" text-anchor="middle">
          <text x="126" y="140">${esc(ab)}</text>
          <text x="214" y="140">${esc(ac)}</text>
          <text x="170" y="222">${esc(bc)}</text>
          <text x="170" y="168" font-weight="700" fill="#b52f0f">${esc(v.center)}</text>
        </g>
      </svg>`
  }
  return null
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
        case 'table':
          return `
            <div class="overflow-x-auto rounded-xl border border-ink-100">
              <table class="w-full min-w-[24rem] border-collapse text-left">
                <thead>
                  <tr class="bg-ink-50">
                    ${b.head.map((h) => `<th class="border-b border-ink-200 px-4 py-3 text-base font-semibold text-ink-800">${esc(h)}</th>`).join('')}
                  </tr>
                </thead>
                <tbody>
                  ${b.rows
                    .map(
                      (r, ri) => `
                    <tr class="${ri % 2 ? 'bg-ink-50/50' : 'bg-white'}">
                      ${r.map((c, ci) => `<td class="border-b border-ink-100 px-4 py-3 align-top text-base leading-7 ${ci === 0 ? 'font-semibold text-ink-900' : 'text-ink-700'}">${esc(c)}</td>`).join('')}
                    </tr>`,
                    )
                    .join('')}
                </tbody>
              </table>
            </div>`
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
