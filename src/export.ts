import type { Block, DecisionModel, Section, Viz } from './types'
import { vizBySlug } from './data/viz'
import { areasBySlug } from './data/areas'

/**
 * Page data export: every route can be downloaded as complete JSON or Markdown.
 * JSON carries the full typed data (model + pages + viz + areas); Markdown is a
 * readable rendering of the same content, nothing omitted.
 */

export interface ExportPayload {
  /** What the current route shows. */
  scope: 'model' | 'bolum' | 'tum-kitap'
  title: string
  /** File-safe base name, no extension. */
  file: string
  models: DecisionModel[]
  sections: Section[]
}

function fullModel(m: DecisionModel): DecisionModel & { viz?: Viz; kullanimAlanlari?: string[] } {
  return { ...m, viz: vizBySlug[m.slug], kullanimAlanlari: areasBySlug[m.slug] }
}

export function toJson(p: ExportPayload): string {
  return JSON.stringify(
    {
      kaynak: 'Karar Kitabı — 50 Stratejik Düşünme Modeli (Krogerus & Tschäppeler) özet dokümantasyonu',
      kapsam: p.scope,
      baslik: p.title,
      bolumler: p.sections,
      modeller: p.models.map(fullModel),
    },
    null,
    2,
  )
}

function blockToMd(b: Block): string {
  switch (b.t) {
    case 'p': return b.text
    case 'h2': return `## ${b.text}`
    case 'h3': return `### ${b.text}`
    case 'ul': return b.items.map((i) => `- ${i}`).join('\n')
    case 'ol': return b.items.map((i, n) => `${n + 1}. ${i}`).join('\n')
    case 'quote': return `> ${b.text}`
    case 'callout': {
      const label: Record<string, string> = { tip: 'İpucu', warn: 'Dikkat', case: 'Gerçek Vaka', benefit: 'Fayda', simple: 'Kısaca', ornek: 'Günlük Hayattan' }
      return `> **${label[b.kind]} — ${b.title}:** ${b.text}`
    }
    case 'steps': return b.items.map((s, n) => `${n + 1}. **${s.title}** — ${s.text}`).join('\n')
    case 'table': {
      const head = `| ${b.head.join(' | ')} |`
      const sep = `| ${b.head.map(() => '---').join(' | ')} |`
      const rows = b.rows.map((r) => `| ${r.join(' | ')} |`).join('\n')
      return `${head}\n${sep}\n${rows}`
    }
  }
}

function vizToMd(v: Viz | undefined): string {
  if (!v) return ''
  return `**Görselleştirme (${v.kind}):**\n\n\`\`\`json\n${JSON.stringify(v, null, 2)}\n\`\`\`\n`
}

function modelToMd(m: DecisionModel): string {
  const areas = areasBySlug[m.slug]
  const parts: string[] = [
    `## ${m.title}`,
    `*${m.question}*`,
    `**Özet:** ${m.summary}`,
    areas?.length ? `**Nerede kullanılır:** ${areas.join(', ')}` : '',
    m.tags.length ? `**Etiketler:** ${m.tags.join(', ')}` : '',
    vizToMd(vizBySlug[m.slug]),
  ]
  for (const page of m.pages) {
    parts.push(`### ${page.title}`)
    for (const b of page.blocks) parts.push(blockToMd(b))
  }
  return parts.filter(Boolean).join('\n\n')
}

export function toMd(p: ExportPayload): string {
  const head = [
    `# ${p.title}`,
    `> Kaynak: *The Decision Book — 50 Models for Strategic Thinking*, Krogerus & Tschäppeler. Kişisel çalışma amaçlı özet dokümantasyon.`,
  ]
  const body = p.models.map(modelToMd)
  return [...head, ...body].join('\n\n') + '\n'
}

/** Trigger a direct browser download of the given text. */
export function download(filename: string, text: string, mime: string): void {
  const blob = new Blob([text], { type: `${mime};charset=utf-8` })
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = filename
  document.body.appendChild(a)
  a.click()
  a.remove()
  URL.revokeObjectURL(url)
}

export function runExport(p: ExportPayload, format: 'json' | 'md'): void {
  if (format === 'json') download(`${p.file}.json`, toJson(p), 'application/json')
  else download(`${p.file}.md`, toMd(p), 'text/markdown')
}
