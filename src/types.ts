/** Content model for the documentation site. TypeScript-first: pages render from typed data only. */

export type SectionId =
  | 'kendini-gelistir'
  | 'kendini-anla'
  | 'baskalarini-anla'
  | 'baskalarini-gelistir'

export interface Section {
  id: SectionId
  title: string
  subtitle: string
  /** Phosphor icon class, e.g. 'ph-rocket-launch'. Emojis are banned across the site. */
  icon: string
}

/** Declarative chart spec per model, rendered with ECharts on the concept page. */
export type Viz =
  | { kind: 'quadrant'; x: [string, string]; y: [string, string]; quads: [string, string, string, string]; note?: string }
  | { kind: 'pareto'; categories: string[]; values: number[]; note?: string }
  | { kind: 'curve'; xLabel: string; yLabel: string; series: { name: string; data: [number, number][] }[]; note?: string }
  | { kind: 'radar'; axes: string[]; max: number; series: { name: string; values: number[] }[]; note?: string }

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
  | { t: 'callout'; kind: 'tip' | 'warn' | 'case' | 'benefit'; title: string; text: string }
  | { t: 'steps'; items: { title: string; text: string }[] }

export interface DecisionModel {
  slug: string
  section: SectionId
  title: string
  question: string
  summary: string
  tags: string[]
  pages: ModelPage[]
}
