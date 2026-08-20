import type { Viz } from '../types'
import { viz2aBySlug } from './viz2a'
import { viz2bBySlug } from './viz2b'

/** Secondary charts: models whose primary viz is a table/process also get a real graphic. */
export const viz2BySlug: Record<string, Viz> = { ...viz2aBySlug, ...viz2bBySlug }
