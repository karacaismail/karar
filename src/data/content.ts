import type { DecisionModel, Section } from '../types'
import { section1Models } from './section1'
import { section2Models } from './section2'
import { section3Models } from './section3'
import { section4Models } from './section4'
import { section5aModels } from './section5a'
import { section5bModels } from './section5b'
import { section5cModels } from './section5c'
import { section6aModels } from './section6a'
import { section6bModels } from './section6b'

export const sections: Section[] = [
  { id: 'zaman-onceliklendirme', title: 'Zaman ve Önceliklendirme', subtitle: 'Hangi iş önce? Bireysel verimlilik ve kaldıraç modelleri', icon: 'ph-clock' },
  { id: 'karar-verme', title: 'Karar Verme ve Düşünme Hataları', subtitle: 'Seçim yapmak, ikilemleri çözmek ve zihnin tuzaklarından korunmak', icon: 'ph-signpost' },
  { id: 'kendini-tanima', title: 'Kendini Tanıma', subtitle: 'Motivasyonunu, enerjini ve potansiyelini keşfet', icon: 'ph-user-focus' },
  { id: 'insan-toplum', title: 'İnsan ve Toplum Davranışı', subtitle: 'İhtiyaçlar, beklentiler ve toplumsal desenler nasıl işler?', icon: 'ph-users' },
  { id: 'oyun-teorisi-muzakere', title: 'Oyun Teorisi ve Müzakere', subtitle: 'Güven, rekabet ve pazarlıkta stratejik davranış', icon: 'ph-strategy' },
  { id: 'ogrenme-geri-bildirim', title: 'Öğrenme ve Geri Bildirim', subtitle: 'Hatadan öğrenme, koçluk ve geri bildirim döngüleri', icon: 'ph-arrows-clockwise' },
  { id: 'ekip-liderlik', title: 'Ekip ve Liderlik', subtitle: 'Ekip kurmak, yönetmek ve geliştirmek', icon: 'ph-users-three' },
  { id: 'strateji-rekabet', title: 'Strateji ve Rekabet Analizi', subtitle: 'Pazarı, rakibi ve kendi gücünü analiz eden işletme çerçeveleri', icon: 'ph-chess-knight' },
  { id: 'pazarlama-musteri', title: 'Pazarlama ve Müşteri', subtitle: 'Müşteri nasıl karar verir, ürün pazara nasıl yayılır?', icon: 'ph-storefront' },
  { id: 'hedef-performans', title: 'Hedef ve Performans', subtitle: 'Hedef koyma ve ölçme sistemleri', icon: 'ph-target' },
  { id: 'proje-urun', title: 'Proje ve Ürün Geliştirme', subtitle: 'Planlama, kısıtlar ve doğrulama döngüleri', icon: 'ph-package' },
  { id: 'surec-kalite', title: 'Süreç ve Kalite', subtitle: 'Üretimi ve süreçleri sürekli iyileştirme yöntemleri', icon: 'ph-gear' },
  { id: 'risk-guvenlik', title: 'Risk ve Belirsizlik', subtitle: 'Bilinmeyenleri yönetmek ve felaketlere hazırlanmak', icon: 'ph-shield-warning' },
  { id: 'yaraticilik-dahi', title: 'Yaratıcılık ve Dahi Stratejileri', subtitle: 'Yeni fikir üretme ve büyük ustaların düşünme yöntemleri', icon: 'ph-lightbulb' },
  { id: 'veri-teknoloji', title: 'Veri ve Teknoloji Çağı', subtitle: 'Algoritmalar, kara kutular ve makine destekli kararlar', icon: 'ph-cpu' },
]

export const models: DecisionModel[] = [
  ...section1Models,
  ...section2Models,
  ...section3Models,
  ...section4Models,
  ...section5aModels,
  ...section5bModels,
  ...section5cModels,
  ...section6aModels,
  ...section6bModels,
]

/** v1 anlık görüntüsünden SONRA eklenen modeller: arayüzde "Yeni" etiketi alır. */
export const newSlugs: Set<string> = new Set(
  [...section5aModels, ...section5bModels, ...section5cModels, ...section6aModels, ...section6bModels].map((m) => m.slug),
)

export function modelsBySection(id: string): DecisionModel[] {
  return models.filter((m) => m.section === id)
}

export function findModel(slug: string): DecisionModel | undefined {
  return models.find((m) => m.slug === slug)
}
