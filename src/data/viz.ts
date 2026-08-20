import type { Viz } from '../types'

/** Model slug → chart spec. Rendered on the model's concept page. */
export const vizBySlug: Record<string, Viz> = {
  'eisenhower-matrisi': {
    kind: 'quadrant',
    x: ['Acil değil', 'Acil'],
    y: ['Önemsiz', 'Önemli'],
    quads: ['Takvime koy', 'Hemen yap', 'Sonraya bırak / sil', 'Devret'],
    note: 'Önem ve aciliyete göre dört eylem kuralı.',
  },
  'swot-analizi': {
    kind: 'quadrant',
    x: ['İç faktör', 'Dış faktör'],
    y: ['Olumsuz', 'Olumlu'],
    quads: ['Güçlü yönler', 'Fırsatlar', 'Zayıf yönler', 'Tehditler'],
    note: 'İç ve dış faktörler, olumlu ve olumsuz eksenlerde.',
  },
  'bcg-kutusu': {
    kind: 'quadrant',
    x: ['Düşük pazar payı', 'Yüksek pazar payı'],
    y: ['Düşük büyüme', 'Yüksek büyüme'],
    quads: ['Soru işaretleri', 'Yıldızlar', 'Köpekler', 'Nakit inekleri'],
    note: 'Nakit ineklerinin ürettiği kaynak yıldızları ve seçilmiş soru işaretlerini besler.',
  },
  'proje-portfoy-matrisi': {
    kind: 'quadrant',
    x: ['Düşük risk', 'Yüksek risk'],
    y: ['Düşük getiri', 'Yüksek getiri'],
    quads: ['Güvenli ama sıradan', 'Büyük bahisler', 'Bırak', 'Dikkatle izle'],
    note: 'Projelerini maliyet/risk ve getiri eksenlerinde konumlandır.',
  },
  'akis-modeli': {
    kind: 'curve',
    xLabel: 'Beceri düzeyi',
    yLabel: 'Zorluk düzeyi',
    series: [
      { name: 'Kaygı sınırı', data: [[0, 2], [2, 4], [4, 6], [6, 8], [8, 10]] },
      { name: 'Sıkıntı sınırı', data: [[2, 0], [4, 2], [6, 4], [8, 6], [10, 8]] },
    ],
    note: 'İki çizginin arasındaki bant akış kanalıdır: üstü kaygı, altı sıkıntı üretir.',
  },
  'johari-penceresi': {
    kind: 'quadrant',
    x: ['Benim bildiğim', 'Benim bilmediğim'],
    y: ['Başkası bilmiyor', 'Başkası biliyor'],
    quads: ['Açık alan', 'Kör nokta', 'Gizli alan', 'Bilinmeyen'],
    note: 'Geri bildirim kör noktayı, kendini açmak gizli alanı küçültür.',
  },
  'siyasi-pusula': {
    kind: 'quadrant',
    x: ['Sol (ekonomi)', 'Sağ (ekonomi)'],
    y: ['Liberter', 'Otoriter'],
    quads: ['Otoriter sol', 'Otoriter sağ', 'Liberter sol', 'Liberter sağ'],
    note: 'Tek eksenli sağ-sol yerine iki eksenli konumlandırma.',
  },
  'rumsfeld-matrisi': {
    kind: 'quadrant',
    x: ['Farkındayız', 'Farkında değiliz'],
    y: ['Bilmiyoruz', 'Biliyoruz'],
    quads: ['Bilinen bilinenler', 'Bilinmeyen bilinenler', 'Bilinen bilinmeyenler', 'Bilinmeyen bilinmeyenler'],
    note: 'Dördüncü hücre — bastırılan bilgi — çoğu zaman en tehlikelisidir.',
  },
  'pareto-ilkesi': {
    kind: 'pareto',
    categories: ['Neden 1', 'Neden 2', 'Neden 3', 'Neden 4', 'Neden 5', 'Neden 6', 'Neden 7', 'Neden 8'],
    values: [42, 26, 12, 8, 5, 3, 2, 2],
    note: 'İlk iki neden sonucun yaklaşık %70\'ini üretir: kümülatif çizgi %80\'e ilk birkaç kalemde ulaşır.',
  },
  'uzun-kuyruk-modeli': {
    kind: 'curve',
    xLabel: 'Ürün sıralaması',
    yLabel: 'Satış',
    series: [
      { name: 'Satış dağılımı', data: [[0, 100], [1, 55], [2, 32], [3, 20], [4, 13], [5, 9], [6, 7], [7, 5.5], [8, 4.5], [9, 4], [10, 3.5], [12, 3], [14, 2.6], [16, 2.3], [18, 2.1], [20, 2]] },
    ],
    note: 'Baştaki az sayıda hit ile sonsuza uzayan niş kuyruk: dijital rafta kuyruğun toplamı gövdeyle yarışır.',
  },
  'ucurum-difuzyon-modeli': {
    kind: 'curve',
    xLabel: 'Zaman',
    yLabel: 'Benimseyen sayısı',
    series: [
      { name: 'Benimseme eğrisi', data: [[0, 2], [1, 8], [2, 18], [2.5, 20], [3, 14], [3.5, 30], [4, 55], [5, 80], [6, 90], [7, 60], [8, 30], [9, 12], [10, 4]] },
    ],
    note: 'Yenilikçiler ve öncüler ile erken çoğunluk arasındaki çukur "uçurum"dur: çoğu ürün orada ölür.',
  },
  'mahkum-ikilemi': {
    kind: 'quadrant',
    x: ['A sussun', 'A ele versin'],
    y: ['B ele versin', 'B sussun'],
    quads: ['A: 10 yıl, B: 0', 'İkisi de 5 yıl', 'İkisi de 2 yıl', 'A: 0, B: 10 yıl'],
    note: 'Bireysel akıl "ele ver" der; iki taraf da uyarsa sonuç ikisinin de susmasından kötüdür.',
  },
  'durumsal-liderlik': {
    kind: 'quadrant',
    x: ['Az yönlendirme', 'Çok yönlendirme'],
    y: ['Az destek', 'Çok destek'],
    quads: ['Destekle', 'Koçluk yap', 'Devret', 'Talimat ver'],
    note: 'Sağ alttan (talimat) başlayıp saat yönünün tersine devretmeye ilerlenir.',
  },
  'takim-modeli': {
    kind: 'radar',
    axes: ['Gol', 'Pas', 'Hız', 'Oyun zekâsı', 'Top sürme'],
    max: 10,
    series: [
      { name: 'Oyuncu A', values: [8, 8, 9, 8, 8] },
      { name: 'Oyuncu B', values: [5, 5, 9, 4, 5] },
      { name: 'Kritik sınır', values: [6, 6, 6, 6, 6] },
    ],
    note: 'Kitaptaki 2016/17 Premier League örneğinin şeması: profiller kritik sınırla karşılaştırılır.',
  },
  'proje-yonetim-ucgeni': {
    kind: 'radar',
    axes: ['Hızlı', 'Ucuz', 'İyi'],
    max: 10,
    series: [
      { name: 'Hızlı + iyi (pahalı)', values: [9, 2, 9] },
      { name: 'Hızlı + ucuz (kötü)', values: [9, 9, 2] },
      { name: 'İyi + ucuz (yavaş)', values: [2, 9, 9] },
    ],
    note: 'Üç köşeden aynı anda yalnızca ikisi seçilebilir.',
  },
  'beklentiler-modeli': {
    kind: 'curve',
    xLabel: 'Beklenti düzeyi',
    yLabel: 'Mutluluk',
    series: [
      { name: 'Mutluluk eğrisi', data: [[0, 5], [1, 20], [2, 45], [3, 70], [4, 88], [5, 95], [6, 88], [7, 70], [8, 45], [9, 20], [10, 5]] },
    ],
    note: 'Devrilme noktasına kadar beklenti mutluluğu artırır; sonrasında hayal kırıklığı kaçınılmazdır.',
  },
  'hediye-modeli': {
    kind: 'quadrant',
    x: ['Ucuz', 'Pahalı'],
    y: ['Sıradan', 'Kişisel'],
    quads: ['Küçük ama düşünceli', 'Büyük jest', 'Zahmetsiz', 'Gösterişli ama soğuk'],
    note: 'Hediyenin değeri fiyat ekseninden çok kişisellik ekseninde kurulur.',
  },
  'kisisel-performans-modeli': {
    kind: 'radar',
    axes: ['Zorunda olmak', 'Yapabilmek', 'İstemek'],
    max: 10,
    series: [
      { name: 'Bu hafta', values: [8, 6, 3] },
      { name: 'İdeal', values: [5, 8, 9] },
    ],
    note: 'Üç eksen dengede değilse iş değil, eksenler konuşulmalıdır.',
  },
}
