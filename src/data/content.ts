import type { DecisionModel, Section } from '../types'
import { section1Models } from './section1'
import { section2Models } from './section2'
import { section3Models } from './section3'
import { section4Models } from './section4'
import { section5aModels } from './section5a'
import { section5bModels } from './section5b'
import { section5cModels } from './section5c'

export const sections: Section[] = [
  { id: 'kendini-gelistir', title: 'Kendini Geliştir', subtitle: 'Daha verimli çalışmak ve doğru çözümü bulmak için modeller', icon: 'ph-rocket-launch' },
  { id: 'kendini-anla', title: 'Kendini Daha İyi Anla', subtitle: 'Ne istediğini ve seni neyin mutlu ettiğini keşfet', icon: 'ph-user-focus' },
  { id: 'baskalarini-anla', title: 'Başkalarını Daha İyi Anla', subtitle: 'Riskleri, hataları ve insan davranışını çözümle', icon: 'ph-magnifying-glass' },
  { id: 'baskalarini-gelistir', title: 'Başkalarını Geliştir', subtitle: 'Ekipleri yönetmek ve büyütmek için modeller', icon: 'ph-users-three' },
  { id: 'strateji-araclari', title: 'Strateji Araç Kutusu', subtitle: 'Dahi stratejileri, oyun teorisi ve işletme yönetimi kavramları', icon: 'ph-toolbox' },
]

export const models: DecisionModel[] = [
  ...section1Models,
  ...section2Models,
  ...section3Models,
  ...section4Models,
  ...section5aModels,
  ...section5bModels,
  ...section5cModels,
]

export function modelsBySection(id: string): DecisionModel[] {
  return models.filter((m) => m.section === id)
}

export function findModel(slug: string): DecisionModel | undefined {
  return models.find((m) => m.slug === slug)
}
