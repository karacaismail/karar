import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'
import '@phosphor-icons/web/regular/style.css'
import '@phosphor-icons/web/bold/style.css'
import './style.css'
import { initFlowbite } from 'flowbite'
import { sections, models, modelsBySection, findModel, newSlugs } from './data/content'
import { vizBySlug } from './data/viz'
import { viz2BySlug } from './data/viz2'
import { areasBySlug } from './data/areas'

/** Central specs + per-model inline specs merged; inline wins. */
const allViz = { ...vizBySlug, ...Object.fromEntries(models.filter((m) => m.viz).map((m) => [m.slug, m.viz!])) }
const allViz2: Record<string, import('./types').Viz> = { ...viz2BySlug, ...Object.fromEntries(models.filter((m) => m.viz2).map((m) => [m.slug, m.viz2!])) }
const areasOf = (slug: string): string[] | undefined => findModel(slug)?.areas ?? areasBySlug[slug]
import { mountCharts } from './chart'
import { renderBlocks, staticVizHtml, esc } from './render'
import { runExport, type ExportPayload } from './export'
import type { DecisionModel } from './types'

const app = document.querySelector<HTMLDivElement>('#app')!

// ── Routing ──────────────────────────────────────────────────────────────────
// #/                       → home
// #/bolum/<sectionId>      → section index
// #/model/<slug>/<page>    → model page

function parseRoute(): { view: 'home' } | { view: 'section'; id: string } | { view: 'model'; slug: string; page: string } {
  const hash = location.hash.replace(/^#\/?/, '')
  const parts = hash.split('/').filter(Boolean)
  if (parts[0] === 'bolum' && parts[1]) return { view: 'section', id: parts[1] }
  if (parts[0] === 'model' && parts[1]) return { view: 'model', slug: parts[1], page: parts[2] ?? 'kavram' }
  return { view: 'home' }
}

// ── Sidebar (accordion per section) ──────────────────────────────────────────

const pad2 = (n: number): string => String(n).padStart(2, '0')

function sidebarHtml(active: { slug?: string; page?: string; sectionId?: string }): string {
  return sections
    .map((sec, si) => {
      // Accordions are closed by default; only the active section starts open.
      const isOpen = active.sectionId === sec.id
      const items = modelsBySection(sec.id)
        .map((m, mi) => {
          const isActive = active.slug === m.slug
          return `
            <li>
              <a href="#/model/${m.slug}/kavram"
                 class="flex items-center gap-2 rounded-lg px-3 py-2 text-base ${isActive ? 'bg-brand-50 font-semibold text-brand-700' : 'text-ink-600 hover:bg-ink-50 hover:text-ink-900'}">
                <span class="w-7 shrink-0 tabular-nums text-ink-400">${pad2(mi + 1)}</span>
                <span class="min-w-0 flex-1">${esc(m.title)}</span>${newBadge(m.slug)}
              </a>
              ${
                isActive
                  ? `<ul class="ml-3 mt-1 space-y-0.5 border-l border-ink-200 pl-3">
                      ${m.pages
                        .map(
                          (p) => `
                        <li>
                          <a href="#/model/${m.slug}/${p.slug}"
                             class="block rounded px-2 py-1.5 text-base ${active.page === p.slug ? 'font-semibold text-brand-600' : 'text-ink-500 hover:text-ink-900'}">
                            ${esc(p.title)}
                          </a>
                        </li>`,
                        )
                        .join('')}
                    </ul>`
                  : ''
              }
            </li>`
        })
        .join('')
      return `
        <details class="group mb-2 rounded-xl border border-ink-100" ${isOpen ? 'open' : ''}>
          <summary class="flex min-h-[44px] cursor-pointer list-none items-center gap-2.5 rounded-xl px-3 py-2.5 font-semibold ${active.sectionId === sec.id ? 'text-brand-600' : 'text-ink-800'} hover:bg-ink-50 [&::-webkit-details-marker]:hidden">
            <i class="ph ${sec.icon} text-xl shrink-0" aria-hidden="true"></i>
            <span class="shrink-0 tabular-nums text-ink-400">${pad2(si + 1)}</span>
            <span class="flex-1 text-base leading-snug">${esc(sec.title)}</span>
            <i class="ph ph-caret-down text-base text-ink-400 transition-transform group-open:rotate-180" aria-hidden="true"></i>
          </summary>
          <div class="px-2 pb-2">
            <a href="#/bolum/${sec.id}" class="mb-1 block rounded-lg px-3 py-1.5 text-base text-ink-400 hover:text-brand-600">Bölüm özeti</a>
            <ul class="space-y-0.5">${items}</ul>
          </div>
        </details>`
    })
    .join('')
}

/** "Yeni" pill for models added after the frozen v1 snapshot. */
function newBadge(slug: string): string {
  return newSlugs.has(slug)
    ? '<span class="inline-flex shrink-0 items-center rounded-full bg-brand-500 px-2.5 py-0.5 text-base font-semibold leading-6 text-white">Yeni</span>'
    : ''
}

// ── Views ────────────────────────────────────────────────────────────────────

function homeHtml(): string {
  return `
    <div class="doc-prose">
      <p class="text-base font-bold uppercase tracking-widest text-brand-600">Dokümantasyon</p>
      <h1>Karar Kitabı</h1>
      <p class="!mt-3 text-lg text-ink-500">Mikael Krogerus &amp; Roman Tschäppeler'in <em>The Decision Book</em> kitabındaki stratejik düşünme modelleri — her model için kavram, uygulama adımları ve gerçek yaşanmış iş vakaları.</p>
      <blockquote>Her model, onu kullanan kişi kadar iyidir.</blockquote>
    </div>
    <div class="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
      ${sections
        .map(
          (sec) => `
        <a href="#/bolum/${sec.id}" class="group rounded-2xl border border-ink-200 bg-white p-5 transition hover:border-brand-300 hover:shadow-md">
          <span class="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
            <i class="ph ${sec.icon} text-2xl" aria-hidden="true"></i>
          </span>
          <h2 class="mt-3 text-lg font-bold text-ink-900 group-hover:text-brand-600">${esc(sec.title)}</h2>
          <p class="mt-1.5 text-base leading-7 text-ink-500">${esc(sec.subtitle)}</p>
          <p class="mt-3 inline-flex items-center gap-1 text-base font-semibold text-brand-600">${modelsBySection(sec.id).length} model <i class="ph ph-arrow-right" aria-hidden="true"></i></p>
        </a>`,
        )
        .join('')}
    </div>`
}

function sectionHtml(id: string): string {
  const sec = sections.find((s) => s.id === id)
  if (!sec) return notFoundHtml()
  return `
    <div class="doc-prose">
      <p class="text-base font-bold uppercase tracking-widest text-brand-600">Bölüm</p>
      <h1 class="flex items-center gap-3"><i class="ph ${sec.icon} text-brand-500" aria-hidden="true"></i>${esc(sec.title)}</h1>
      <p class="!mt-3 text-ink-500">${esc(sec.subtitle)}</p>
    </div>
    <div class="mt-8 space-y-4">
      ${modelsBySection(id)
        .map(
          (m) => `
        <a href="#/model/${m.slug}/kavram" class="block rounded-2xl border border-ink-200 bg-white p-5 transition hover:border-brand-300 hover:shadow-md">
          <h2 class="flex flex-wrap items-center gap-2 text-lg font-bold text-ink-900">${esc(m.title)}${newBadge(m.slug)}</h2>
          <p class="mt-1 text-base italic text-brand-600">${esc(m.question)}</p>
          <p class="mt-2 text-base leading-7 text-ink-600">${esc(m.summary)}</p>
          <div class="mt-3 flex flex-wrap gap-1.5">
            ${m.tags.map((t) => `<span class="rounded-full bg-ink-100 px-3 py-1 text-base text-ink-600">${esc(t)}</span>`).join('')}
          </div>
        </a>`,
        )
        .join('')}
    </div>`
}

function modelHtml(m: DecisionModel, pageSlug: string): string {
  const page = m.pages.find((p) => p.slug === pageSlug) ?? m.pages[0]
  const sec = sections.find((s) => s.id === m.section)!
  const idx = m.pages.indexOf(page)
  const prev = m.pages[idx - 1]
  const next = m.pages[idx + 1]
  const viz = allViz[m.slug]
  const showViz = viz && page.slug === 'kavram'
  // Metodoloji sırası: hüküm (simple) → hikâye (ornek) → resim (figürler) → kalan anlatım.
  let leadCount = 0
  while (
    leadCount < page.blocks.length &&
    page.blocks[leadCount].t === 'callout' &&
    ['simple', 'ornek'].includes((page.blocks[leadCount] as { kind: string }).kind)
  ) leadCount++
  const leadBlocks = showViz ? page.blocks.slice(0, leadCount) : []
  const restBlocks = showViz ? page.blocks.slice(leadCount) : page.blocks
  return `
    <nav class="mb-5 flex flex-wrap items-center gap-1.5 text-base text-ink-400" aria-label="Breadcrumb">
      <a href="#/" class="hover:text-brand-600">Ana Sayfa</a><i class="ph ph-caret-right text-base" aria-hidden="true"></i>
      <a href="#/bolum/${sec.id}" class="hover:text-brand-600">${esc(sec.title)}</a><i class="ph ph-caret-right text-base" aria-hidden="true"></i>
      <span class="text-ink-600">${esc(m.title)}</span>
    </nav>

    <!-- Page tabs: horizontal scroll on 320px, no wrap breakage -->
    <div class="-mx-4 mb-6 overflow-x-auto px-4 sm:mx-0 sm:px-0">
      <div class="flex w-max gap-1 rounded-xl bg-ink-100 p-1">
        ${m.pages
          .map(
            (p) => `
          <a href="#/model/${m.slug}/${p.slug}"
             class="whitespace-nowrap rounded-lg px-4 py-2.5 text-base font-medium ${p.slug === page.slug ? 'bg-white text-ink-900 shadow-sm' : 'text-ink-500 hover:text-ink-900'}">
            ${esc(p.title)}
          </a>`,
          )
          .join('')}
      </div>
    </div>

    <div class="doc-prose">
      <h1 class="flex flex-wrap items-center gap-3">${esc(m.title)}${newBadge(m.slug)}</h1>
      <p class="!mt-2 italic text-brand-600">${esc(m.question)}</p>
      ${
        areasOf(m.slug)?.length
          ? `<div class="!mt-4 flex flex-wrap items-center gap-2">
              <span class="inline-flex items-center gap-1 text-base font-semibold text-ink-500"><i class="ph ph-briefcase" aria-hidden="true"></i> Nerede kullanılır:</span>
              ${areasOf(m.slug)!
                .map(
                  (a) => `<span class="inline-flex items-center rounded-full border border-brand-200 bg-brand-50 px-3 py-1 text-base font-medium text-brand-700">${esc(a)}</span>`,
                )
                .join('')}
            </div>`
          : ''
      }
      ${renderBlocks(leadBlocks)}
      ${
        showViz
          ? `<figure class="!mt-6 rounded-2xl border border-ink-100 bg-white p-2 xs:p-3">
              ${
                staticVizHtml(viz) ??
                `<div data-viz="${m.slug}" class="h-72 w-full xs:h-80" role="img" aria-label="${esc(m.title)} diyagramı"></div>`
              }
              ${viz.note ? `<figcaption class="px-2 pb-1 pt-2 text-base leading-7 text-ink-500">${esc(viz.note)}</figcaption>` : ''}
            </figure>`
          : ''
      }
      ${
        showViz && allViz2[m.slug]
          ? `<figure class="!mt-4 rounded-2xl border border-ink-100 bg-white p-2 xs:p-3">
              ${
                staticVizHtml(allViz2[m.slug]) ??
                `<div data-viz="${m.slug}::2" class="h-72 w-full xs:h-80" role="img" aria-label="${esc(m.title)} grafiği"></div>`
              }
              ${'note' in allViz2[m.slug] && allViz2[m.slug].note ? `<figcaption class="px-2 pb-1 pt-2 text-base leading-7 text-ink-500">${esc(allViz2[m.slug].note!)}</figcaption>` : ''}
            </figure>`
          : ''
      }
      ${renderBlocks(restBlocks)}
    </div>

    <div class="mt-10 flex flex-col gap-3 border-t border-ink-100 pt-6 sm:flex-row sm:justify-between">
      ${
        prev
          ? `<a href="#/model/${m.slug}/${prev.slug}" class="rounded-xl border border-ink-200 px-4 py-3 text-base hover:border-brand-300">
              <span class="flex items-center gap-1 text-base text-ink-400"><i class="ph ph-arrow-left" aria-hidden="true"></i> Önceki</span>
              <span class="font-semibold text-ink-800">${esc(prev.title)}</span>
            </a>`
          : '<span></span>'
      }
      ${
        next
          ? `<a href="#/model/${m.slug}/${next.slug}" class="rounded-xl border border-ink-200 px-4 py-3 text-base text-right hover:border-brand-300 sm:ml-auto">
              <span class="flex items-center justify-end gap-1 text-base text-ink-400">Sonraki <i class="ph ph-arrow-right" aria-hidden="true"></i></span>
              <span class="font-semibold text-ink-800">${esc(next.title)}</span>
            </a>`
          : ''
      }
    </div>`
}

function notFoundHtml(): string {
  return `<div class="doc-prose"><h1>Sayfa bulunamadı</h1><p><a class="text-brand-600 underline" href="#/">Ana sayfaya dön</a></p></div>`
}

// ── Shell ────────────────────────────────────────────────────────────────────

function exportPayload(route: ReturnType<typeof parseRoute>): ExportPayload {
  if (route.view === 'section') {
    const sec = sections.find((s) => s.id === route.id)
    if (sec) return { scope: 'bolum', title: sec.title, file: `karar-kitabi-${sec.id}`, models: modelsBySection(sec.id), sections: [sec] }
  }
  if (route.view === 'model') {
    const m = findModel(route.slug)
    if (m) return { scope: 'model', title: m.title, file: `karar-kitabi-${m.slug}`, models: [m], sections: sections.filter((s) => s.id === m.section) }
  }
  return { scope: 'tum-kitap', title: 'Karar Kitabı — Tüm Modeller', file: 'karar-kitabi-tum-modeller', models: sections.flatMap((s) => modelsBySection(s.id)), sections }
}

/** Header dropdown: download the current page's complete data as JSON or Markdown. */
function exportMenuHtml(): string {
  return `
    <details id="export-menu" class="relative ml-2">
      <summary class="flex h-11 min-w-[44px] cursor-pointer list-none items-center justify-center gap-1.5 rounded-lg px-2.5 text-ink-500 hover:bg-ink-50 [&::-webkit-details-marker]:hidden">
        <i class="ph ph-download-simple text-2xl" aria-hidden="true"></i>
        <span class="hidden text-base font-medium sm:inline">İndir</span>
        <span class="sr-only">Sayfa verisini indir</span>
      </summary>
      <div class="absolute right-0 top-12 z-50 w-44 rounded-xl border border-ink-200 bg-white p-1 shadow-lg">
        <button data-export="json" type="button" class="flex h-11 w-full items-center gap-2 rounded-lg px-3 text-left text-base text-ink-700 hover:bg-ink-50">
          <i class="ph ph-brackets-curly text-xl text-brand-600" aria-hidden="true"></i> JSON indir
        </button>
        <button data-export="md" type="button" class="flex h-11 w-full items-center gap-2 rounded-lg px-3 text-left text-base text-ink-700 hover:bg-ink-50">
          <i class="ph ph-file-text text-xl text-brand-600" aria-hidden="true"></i> Markdown indir
        </button>
      </div>
    </details>`
}

function render(): void {
  const route = parseRoute()
  let content = ''
  let active: { slug?: string; page?: string; sectionId?: string } = {}

  if (route.view === 'home') {
    content = homeHtml()
  } else if (route.view === 'section') {
    content = sectionHtml(route.id)
    active = { sectionId: route.id }
  } else {
    const m = findModel(route.slug)
    if (m) {
      content = modelHtml(m, route.page)
      active = { slug: m.slug, page: route.page, sectionId: m.section }
    } else {
      content = notFoundHtml()
    }
  }

  app.innerHTML = `
    <!-- Top bar: 320px-first, single row, 44px+ touch targets -->
    <header class="sticky top-0 z-40 border-b border-ink-100 bg-white/90 backdrop-blur">
      <div class="mx-auto flex h-14 max-w-6xl items-center gap-2 px-3 xs:px-4">
        <button id="drawer-open" aria-controls="doc-sidebar" aria-expanded="false" type="button"
                class="flex h-11 w-11 items-center justify-center rounded-lg text-ink-500 hover:bg-ink-50 lg:hidden">
          <span class="sr-only">Menüyü aç</span>
          <i class="ph ph-list text-2xl" aria-hidden="true"></i>
        </button>
        <a href="#/" class="flex min-w-0 items-center gap-2">
          <span class="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand-500 text-white">
            <i class="ph-bold ph-compass text-xl" aria-hidden="true"></i>
          </span>
          <span class="truncate text-base font-bold text-ink-900">Karar Kitabı</span>
        </a>
        <span tabindex="0" class="group relative ml-auto inline-flex h-8 shrink-0 cursor-help items-center gap-1 rounded-full bg-ink-100 px-3 text-base font-semibold tabular-nums text-ink-600 focus:outline-none" title="küme/item" aria-label="küme/item sayısı">
          ${sections.length}<span class="text-ink-400">/</span>${sections.reduce((a, s) => a + modelsBySection(s.id).length, 0)}
          <span class="pointer-events-none absolute -bottom-9 left-1/2 z-50 hidden -translate-x-1/2 whitespace-nowrap rounded-lg bg-ink-900 px-3 py-1.5 text-base font-medium text-white group-hover:block group-focus:block">küme/item</span>
        </span>
        ${exportMenuHtml()}
      </div>
    </header>

    <!-- Sidebar: drawer on mobile, static on lg+ -->
    <aside id="doc-sidebar"
           class="fixed left-0 top-0 z-50 h-screen w-80 -translate-x-full overflow-y-auto border-r border-ink-100 bg-white p-4 pt-5 transition-transform lg:sticky lg:top-14 lg:z-30 lg:h-[calc(100vh-3.5rem)] lg:translate-x-0"
           tabindex="-1" aria-label="Doküman menüsü">
      <div class="mb-4 flex items-center justify-between lg:hidden">
        <span class="text-base font-bold text-ink-900">İçindekiler</span>
        <button id="drawer-close" aria-controls="doc-sidebar" type="button"
                class="flex h-11 w-11 items-center justify-center rounded-lg text-ink-400 hover:bg-ink-50">
          <span class="sr-only">Menüyü kapat</span>
          <i class="ph ph-x text-xl" aria-hidden="true"></i>
        </button>
      </div>
      ${sidebarHtml(active)}
    </aside>

    <!-- Content: clearspace-first — generous padding even at 320px -->
    <main class="mx-auto min-h-[60vh] max-w-6xl px-4 py-8 xs:px-5 sm:px-8 md:py-12 lg:-mt-[calc(100vh-3.5rem)] lg:ml-80 lg:pl-12">
      ${content}
    </main>

    <footer class="border-t border-ink-100 py-8 lg:ml-80">
      <p class="px-4 text-center text-base leading-7 text-ink-400">
        Kaynak: <em>The Decision Book — 50 Models for Strategic Thinking</em>, Krogerus &amp; Tschäppeler.<br/>
        Bu site kişisel çalışma amaçlı bir özet dokümantasyondur.<br/>
        Sürüm: ${typeof __BUILD_STAMP__ !== 'undefined' ? __BUILD_STAMP__ : 'gelistirme'}
      </p>
    </footer>`

  initFlowbite()
  bindDrawer()
  bindAccordion()
  bindExport(exportPayload(route))
  mountCharts({ ...allViz, ...Object.fromEntries(Object.entries(allViz2).map(([k, v]) => [k + '::2', v])) })
  window.scrollTo({ top: 0 })
}


function bindExport(payload: ExportPayload): void {
  const menu = document.getElementById('export-menu') as HTMLDetailsElement | null
  if (!menu) return
  menu.querySelectorAll<HTMLButtonElement>('[data-export]').forEach((btn) => {
    btn.addEventListener('click', () => {
      runExport(payload, btn.dataset.export as 'json' | 'md')
      menu.open = false
    })
  })
  // Tap outside closes the menu (mobile friendliness).
  document.addEventListener('click', (e) => {
    if (menu.open && !menu.contains(e.target as Node)) menu.open = false
  })
}

/** Exclusive accordion: opening one sidebar section closes the others. */
function bindAccordion(): void {
  const items = Array.from(document.querySelectorAll<HTMLDetailsElement>('#doc-sidebar details'))
  items.forEach((d) => {
    d.addEventListener('toggle', () => {
      if (d.open) items.forEach((other) => { if (other !== d) other.open = false })
    })
  })
}

// Minimal, dependency-free drawer for the mobile sidebar (320px-first).
function bindDrawer(): void {
  const sidebar = document.getElementById('doc-sidebar')!
  const openBtn = document.getElementById('drawer-open')!
  const closeBtn = document.getElementById('drawer-close')!

  // Single shared backdrop: re-renders must not stack new ones.
  let backdrop = document.getElementById('drawer-backdrop')
  if (!backdrop) {
    backdrop = document.createElement('div')
    backdrop.id = 'drawer-backdrop'
    document.body.appendChild(backdrop)
  }
  backdrop.className = 'fixed inset-0 z-40 hidden bg-ink-900/50 lg:hidden'

  const setOpen = (open: boolean): void => {
    sidebar.classList.toggle('-translate-x-full', !open)
    backdrop.classList.toggle('hidden', !open)
    openBtn.setAttribute('aria-expanded', String(open))
    document.body.classList.toggle('overflow-hidden', open)
  }

  openBtn.addEventListener('click', () => setOpen(true))
  closeBtn.addEventListener('click', () => setOpen(false))
  // onclick (not addEventListener): the shared backdrop must hold exactly one handler across renders.
  ;(backdrop as HTMLElement).onclick = () => setOpen(false)
  // Navigating from the sidebar closes the drawer.
  sidebar.addEventListener('click', (e) => {
    if ((e.target as HTMLElement).closest('a')) setOpen(false)
  })
}

window.addEventListener('hashchange', render)
render()
