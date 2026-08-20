/** Content model for the documentation site. TypeScript-first: pages render from typed data only. */

export type SectionId =
  | 'kendini-gelistir'
  | 'kendini-anla'
  | 'baskalarini-anla'
  | 'baskalarini-gelistir'
  | 'strateji-araclari'

export interface Section {
  id: SectionId
  title: string
  subtitle: string
  /** Phosphor icon class, e.g. 'ph-rocket-launch'. Emojis are banned across the site. */
  icon: string
}

/**
 * Declarative visualization spec per model. Each model gets the form its ORIGINAL
 * diagram uses: a payoff matrix is a table, Maslow is a pyramid, GROW is a process
 * flow — never a generic 2x2 unless the source model actually is one.
 * ECharts kinds: quadrant, pareto, curve, radar, scatter, pyramid, funnel, bars.
 * HTML/SVG kinds (no ECharts): table, process, venn3.
 */
export type Viz =
  | { kind: 'quadrant'; x: [string, string]; y: [string, string]; quads: [string, string, string, string]; highlight?: 0 | 1 | 2 | 3 | null; note?: string }
  | { kind: 'pareto'; categories: string[]; values: number[]; note?: string }
  | { kind: 'curve'; xLabel: string; yLabel: string; series: { name: string; data: [number, number][] }[]; marks?: { x: number; label: string }[]; note?: string }
  | { kind: 'radar'; axes: string[]; max: number; series: { name: string; values: number[] }[]; note?: string }
  | { kind: 'scatter'; xLabel: string; yLabel: string; points: { name: string; x: number; y: number; size?: number; accent?: boolean }[]; note?: string }
  | { kind: 'pyramid'; levels: { name: string; value: number }[]; note?: string }
  | { kind: 'funnel'; levels: { name: string; value: number }[]; note?: string }
  | { kind: 'bars'; categories: string[]; series: { name: string; values: number[] }[]; yLabel?: string; note?: string }
  | { kind: 'table'; head: string[]; rows: string[][]; accentCol?: number; note?: string }
  | { kind: 'process'; steps: { title: string; text?: string }[]; loop?: boolean; note?: string }
  | { kind: 'venn3'; labels: [string, string, string]; pairs: [string, string, string]; center: string; note?: string }

/** One sub-page of a model (concept, application, real-world case…). */
export interface ModelPage {
  slug: string
  title: string
  /** Simple block-based content, rendered safely (no raw HTML from data). */
  blocks: Block[]
}

export type Block =
  | { t: 'p'; text: string }
  | { t: 'h2'; text: string }
  | { t: 'h3'; text: string }
  | { t: 'ul'; items: string[] }
  | { t: 'ol'; items: string[] }
  | { t: 'quote'; text: string }
  | { t: 'callout'; kind: 'tip' | 'warn' | 'case' | 'benefit' | 'simple' | 'ornek'; title: string; text: string }
  | { t: 'steps'; items: { title: string; text: string }[] }
  | { t: 'table'; head: string[]; rows: string[][] }

export interface DecisionModel {
  slug: string
  section: SectionId
  title: string
  question: string
  summary: string
  tags: string[]
  pages: ModelPage[]
}
