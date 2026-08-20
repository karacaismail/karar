import { marked } from 'marked'
import { v2Docs } from './data/v2docs/index'

export { v2Docs }

/** Lazy raw-text loaders: each doc becomes its own chunk, loaded on first visit. */
const loaders = import.meta.glob('./data/v2docs/*.md', { query: '?raw', import: 'default' }) as Record<
  string,
  () => Promise<string>
>

export function findV2Doc(slug: string) {
  return v2Docs.find((d) => d.slug === slug)
}

export async function loadV2Html(slug: string): Promise<string | null> {
  const load = loaders[`./data/v2docs/${slug}.md`]
  if (!load) return null
  const raw = await load()
  return await marked.parse(raw, { async: true })
}

export async function loadV2Raw(slug: string): Promise<string | null> {
  const load = loaders[`./data/v2docs/${slug}.md`]
  return load ? await load() : null
}
