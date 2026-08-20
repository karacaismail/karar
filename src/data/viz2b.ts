import type { Viz } from '../types'

/**
 * Second-visual map (part 2): models whose PRIMARY viz is a table or process flow
 * get a real chart here, so every model page ends with an actual graphic.
 */
export const viz2bBySlug: Record<string, Viz> = {
  'freud-belirti-okuma': {
    kind: 'pyramid',
    levels: [
      { name: 'Belirti (görünen sorun)', value: 100 },
      { name: 'Yüzey açıklaması', value: 75 },
      { name: 'Derin yapı (asıl ihtiyaç)', value: 50 },
      { name: 'İkincil kazanç', value: 25 },
    ],
    note: 'Kazı piramidi: yüzeyde herkesin gördüğü belirti geniştir; aşağı indikçe alan daralır ama açıklama gücü artar. Çözülmeyen sorunların motoru en dipte, ikincil kazançta saklıdır.',
  },
  'olumlu-niyet-cercevesi': {
    kind: 'bars',
    categories: ['1. hafta', '1. ay', '6. ay'],
    series: [
      { name: 'Davranışı bastırma', values: [70, 40, 15] },
      { name: 'Niyete yeni yol bulma', values: [55, 70, 85] },
    ],
    yLabel: 'Değişimin kalıcılığı (şematik)',
    note: 'Bastırma kısa vadede işe yarar gibi görünür ama niyet karşılanmadığı için davranış geri döner. Aynı niyete yeni bir yol bulmak yavaş başlar, kalıcı olur. Değerler temsilîdir.',
  },
  'leonardo-gormeyi-bilmek': {
    kind: 'curve',
    xLabel: 'Bak-çiz-karşılaştır tekrar sayısı',
    yLabel: 'Gözlem doğruluğu',
    series: [{ name: 'Gözlem doğruluğu', data: [[0, 20], [1, 34], [2, 46], [3, 56], [4, 65], [5, 72], [6, 78], [7, 83], [8, 87], [9, 90], [10, 92]] }],
    marks: [{ x: 3, label: 'Farklar görünmeye başlar' }],
    note: 'Görmek çizerek eğitilen bir beceridir: her bak-çiz-karşılaştır turunda gözle gerçeğin arasındaki fark küçülür. Eğri şematiktir; ilerleme hızlı başlar, ustalık sabır ister.',
  },
  'tesla-zihinsel-prototipleme': {
    kind: 'bars',
    categories: ['Maliyet', 'Süre', 'Düzeltme bedeli'],
    series: [
      { name: 'Zihinsel prototip', values: [5, 15, 3] },
      { name: 'Fiziksel prototip', values: [80, 70, 60] },
    ],
    yLabel: 'Göreli bedel (şematik)',
    note: 'Zihinde kurulan prototip malzeme ve para harcamaz; kusuru zihinde düzeltmek neredeyse bedavadır. Atölyede yakalanan aynı kusur kat kat pahalıdır. Değerler temsilîdir.',
  },
  'smart-hedefler': {
    kind: 'funnel',
    levels: [
      { name: 'Hedef cümlesi (100)', value: 100 },
      { name: 'Belirli mi? (S)', value: 60 },
      { name: 'Ölçülebilir mi? (M)', value: 38 },
      { name: 'Ulaşılabilir mi? (A)', value: 24 },
      { name: 'İlgili mi? (R)', value: 15 },
      { name: 'Süreli mi? (T)', value: 8 },
    ],
    note: 'Beş süzgeçli eleme hunisi: 100 hedef cümlesinden çoğu daha ilk soruda elenir. Beş süzgeçten geçen az sayıda cümle gerçek hedeftir; kalanlar temennidir. Sayılar şematiktir.',
  },
  'okr': {
    kind: 'bars',
    categories: ['KR 1', 'KR 2', 'KR 3', 'KR 4'],
    series: [{ name: 'Çeyrek sonu puanı', values: [0.3, 0.7, 0.7, 1.0] }],
    yLabel: 'OKR puanı (0-1)',
    note: 'OKR puanlamasında 0.7 civarı idealdir: hedef iddialıydı ve büyük kısmı başarıldı. 1.0 hep tutuyorsa hedefler fazla kolay, 0.3 kalıyorsa fazla iddialı ya da yanlış kurgulanmıştır.',
  },
  'mvp-ve-gate-dongusu': {
    kind: 'curve',
    xLabel: 'Harcanan para',
    yLabel: 'Doğrulanmış öğrenme',
    series: [
      { name: 'Klasik büyük plan', data: [[0, 0], [2, 2], [4, 4], [6, 6], [8, 10], [10, 45]] },
      { name: 'MVP döngüsü', data: [[0, 0], [1, 20], [2, 35], [4, 55], [6, 70], [8, 82], [10, 90]] },
    ],
    note: 'Klasik planda öğrenme ancak büyük lansmanda, tüm para harcandıktan sonra gelir. MVP döngüsünde her küçük harcama bir hipotezi test eder: öğrenme erken ve ucuz başlar. Eğriler şematiktir.',
  },
  'pivot': {
    kind: 'curve',
    xLabel: 'Zaman',
    yLabel: 'Aktif kullanıcı (şematik)',
    series: [
      { name: 'Burbn (eski yön)', data: [[0, 10], [1, 22], [2, 28], [3, 25], [4, 18], [5, 12]] },
      { name: 'Instagram (pivot sonrası)', data: [[4, 18], [5, 30], [6, 50], [7, 68], [8, 82], [9, 92], [10, 98]] },
    ],
    marks: [{ x: 4, label: 'Pivot' }],
    note: 'Burbn\'ün eğrisi düşerken kurucular veride çalışan tek parçayı (fotoğraf + filtre) gördü ve yön değiştirdi: yakınlaştırma pivotu. Eğriler temsilîdir; ders, düşen eğriye inat etmemektir.',
  },
  'pdca-dongusu': {
    kind: 'curve',
    xLabel: 'PDCA turları',
    yLabel: 'Süreç kalitesi',
    series: [{ name: 'Kalite düzeyi', data: [[0, 20], [1, 20], [1, 32], [2, 32], [2.5, 32], [3, 44], [4, 44], [4.5, 55], [6, 55], [6.5, 64], [8, 64], [8.5, 72], [10, 72]] }],
    marks: [{ x: 2.5, label: 'Standartlaştır (Act)' }],
    note: 'İyileşme merdiveni: her PDCA turu kaliteyi bir basamak yükseltir, Act adımı kazanımı standartlaştırıp geri kaymayı önler. Basamaklar şematiktir; düz çizgiler standardın koruduğu düzeydir.',
  },
  'alti-sigma': {
    kind: 'curve',
    xLabel: 'Süreç çıktısı (hedeften sapma)',
    yLabel: 'Sıklık',
    series: [{ name: 'Normal dağılım', data: [[-6, 0.2], [-5, 1], [-4, 3], [-3, 9], [-2, 30], [-1, 70], [0, 100], [1, 70], [2, 30], [3, 9], [4, 3], [5, 1], [6, 0.2]] }],
    marks: [{ x: -3, label: '3σ sınırı' }, { x: 3, label: '3σ sınırı' }, { x: 6, label: '6σ' }],
    note: 'Çan eğrisi ve sigma sınırları: 3σ kalitede eğrinin kuyrukları tolerans sınırına yakındır ve hatalar sık görülür; 6σ kalitede sınırlar o kadar uzaktadır ki milyonda yalnızca 3.4 hata kalır.',
  },
  'surec-yeniden-tasarimi': {
    kind: 'bars',
    categories: ['Kademeli iyileştirme', 'Yeniden tasarım (Ford vakası)'],
    series: [{ name: 'Maliyet/personel azalması (%)', values: [10, 75] }],
    yLabel: 'İyileşme (%)',
    note: 'Hammer\'ın Ford örneği: eski süreci otomatikleştirmek yüzde onluk kazanımlar getirirken, faturayı sürecin merkezinden çıkaran yeniden tasarım çalışan sayısını yüzde 75 azalttı.',
  },
  'scor-modeli': {
    kind: 'radar',
    axes: ['Planla (Plan)', 'Tedarik et (Source)', 'Üret (Make)', 'Teslim et (Deliver)', 'İade al (Return)'],
    max: 10,
    series: [
      { name: 'Mevcut olgunluk', values: [6, 7, 8, 4, 3] },
      { name: 'Sektör en iyisi', values: [8, 8, 9, 9, 7] },
    ],
    note: 'SCOR\'un beş süreci aynı radarda puanlanır ve sektör kıyasıyla üst üste bindirilir: örnekte teslimat ve iade süreçleri en geniş açığı veriyor, iyileştirme oradan başlar. Puanlar temsilîdir.',
  },
  'scrum': {
    kind: 'curve',
    xLabel: 'Sprint günü',
    yLabel: 'Kalan iş (puan)',
    series: [
      { name: 'İdeal çizgi', data: [[0, 100], [10, 0]] },
      { name: 'Gerçekleşen', data: [[0, 100], [1, 96], [2, 88], [3, 86], [4, 74], [5, 70], [6, 58], [7, 44], [8, 30], [9, 14], [10, 2]] },
    ],
    note: 'Klasik sprint burndown grafiği: kalan iş her gün ideale karşı izlenir. Gerçek eğri idealin üstünde seyrediyorsa sprint tehlikededir ve bunu daha ilk günlerde herkes görür.',
  },
  'kanban': {
    kind: 'bars',
    categories: ['WIP limiti yok', 'WIP limiti var'],
    series: [
      { name: 'Aynı anda açık iş', values: [12, 3] },
      { name: 'Ortalama tamamlanma süresi (gün)', values: [18, 6] },
    ],
    note: 'Little yasasının pratik sonucu: aynı anda açık iş azalınca her işin bitme süresi kısalır. WIP limiti yavaşlatmaz, bitirtir. Değerler şematiktir.',
  },
  'ceviklik-ve-selale': {
    kind: 'curve',
    xLabel: 'Proje zamanı',
    yLabel: 'Müşteriye teslim edilen değer',
    series: [
      { name: 'Şelale', data: [[0, 0], [2, 0], [4, 0], [6, 0], [8, 0], [9, 0], [10, 80]] },
      { name: 'Çevik', data: [[0, 0], [1, 10], [2, 22], [3, 32], [4, 44], [5, 54], [6, 63], [7, 72], [8, 80], [9, 88], [10, 95]] },
    ],
    note: 'Şelalede müşteri değeri tek bir sıçramayla en sonda gelir: o güne kadar risk birikir. Çeviklikte değer basamak basamak erken teslim edilir; yanlış yön daha ilk basamakta görünür.',
  },
  'gantt-semasi': {
    kind: 'svg',
    svg: `<svg viewBox="0 0 640 300" role="img" aria-label="Mini Gantt şeması: beş görevin zaman çubukları ve bir bağımlılık oku" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <marker id="gnt-ok" markerWidth="9" markerHeight="9" refX="7" refY="3" orient="auto"><path d="M0,0 L8,3 L0,6 Z" fill="#e03e14"/></marker>
      </defs>
      <g font-family="Roboto, sans-serif">
        <g font-size="12" fill="#8a97a2" text-anchor="middle">
          <text x="200" y="24">Hafta 1</text><text x="300" y="24">Hafta 2</text><text x="400" y="24">Hafta 3</text><text x="500" y="24">Hafta 4</text><text x="590" y="24">Hafta 5</text>
        </g>
        <g stroke="#e4e9ed" stroke-width="1">
          <line x1="150" y1="34" x2="150" y2="278"/><line x1="250" y1="34" x2="250" y2="278"/><line x1="350" y1="34" x2="350" y2="278"/><line x1="450" y1="34" x2="450" y2="278"/><line x1="550" y1="34" x2="550" y2="278"/>
        </g>
        <g font-size="13" fill="#414d57">
          <text x="16" y="62">Analiz</text>
          <text x="16" y="110">Tasarım</text>
          <text x="16" y="158">Üretim</text>
          <text x="16" y="206">Test</text>
          <text x="16" y="254">Teslim</text>
        </g>
        <rect x="150" y="46" width="90" height="24" rx="6" fill="#5b8bd9"/>
        <rect x="220" y="94" width="120" height="24" rx="6" fill="#5b8bd9"/>
        <rect x="340" y="142" width="150" height="24" rx="6" fill="#5b8bd9"/>
        <rect x="470" y="190" width="80" height="24" rx="6" fill="#f5a623"/>
        <rect x="550" y="238" width="60" height="24" rx="6" fill="#2f9e63"/>
        <path d="M340 118 L340 132 L336 132" fill="none" stroke="#e03e14" stroke-width="2" marker-end="url(#gnt-ok)"/>
        <text x="352" y="132" font-size="11" fill="#e03e14">Tasarım bitmeden üretim başlayamaz</text>
      </g>
    </svg>`,
    note: 'Gantt şemasının özü budur: her satır bir görev, her çubuğun uzunluğu süresi, yatay konumu takvimi gösterir. Kırmızı ok bağımlılıktır: önceki görev gecikirse sonrakiler sağa kayar.',
  },
  'kritik-yol-yontemi': {
    kind: 'svg',
    svg: `<svg viewBox="0 0 640 260" role="img" aria-label="Kritik yol ağı: düğümler ve oklar, en uzun yol kırmızı ile işaretli" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <marker id="cpm-kr" markerWidth="9" markerHeight="9" refX="7" refY="3" orient="auto"><path d="M0,0 L8,3 L0,6 Z" fill="#e03e14"/></marker>
        <marker id="cpm-gr" markerWidth="9" markerHeight="9" refX="7" refY="3" orient="auto"><path d="M0,0 L8,3 L0,6 Z" fill="#9aa7b1"/></marker>
      </defs>
      <g font-family="Roboto, sans-serif">
        <line x1="98" y1="122" x2="180" y2="66" stroke="#e03e14" stroke-width="3" marker-end="url(#cpm-kr)"/>
        <line x1="98" y1="138" x2="180" y2="196" stroke="#9aa7b1" stroke-width="2" marker-end="url(#cpm-gr)"/>
        <line x1="252" y1="60" x2="368" y2="60" stroke="#e03e14" stroke-width="3" marker-end="url(#cpm-kr)"/>
        <line x1="252" y1="200" x2="368" y2="200" stroke="#9aa7b1" stroke-width="2" marker-end="url(#cpm-gr)"/>
        <line x1="440" y1="72" x2="522" y2="118" stroke="#e03e14" stroke-width="3" marker-end="url(#cpm-kr)"/>
        <line x1="440" y1="192" x2="522" y2="146" stroke="#9aa7b1" stroke-width="2" marker-end="url(#cpm-gr)"/>
        <g>
          <ellipse cx="62" cy="130" rx="40" ry="24" fill="#f0f4f7" stroke="#414d57" stroke-width="2"/>
          <ellipse cx="216" cy="60" rx="40" ry="24" fill="#fdece7" stroke="#e03e14" stroke-width="2.5"/>
          <ellipse cx="216" cy="200" rx="40" ry="24" fill="#f0f4f7" stroke="#9aa7b1" stroke-width="2"/>
          <ellipse cx="404" cy="60" rx="40" ry="24" fill="#fdece7" stroke="#e03e14" stroke-width="2.5"/>
          <ellipse cx="404" cy="200" rx="40" ry="24" fill="#f0f4f7" stroke="#9aa7b1" stroke-width="2"/>
          <ellipse cx="562" cy="130" rx="40" ry="24" fill="#f0f4f7" stroke="#414d57" stroke-width="2"/>
        </g>
        <g font-size="12" fill="#414d57" text-anchor="middle" font-weight="700">
          <text x="62" y="127">Başla</text><text x="62" y="141" font-weight="400" font-size="10">0 gün</text>
          <text x="216" y="57">Tasarım</text><text x="216" y="71" font-weight="400" font-size="10">6 gün</text>
          <text x="216" y="197">İzinler</text><text x="216" y="211" font-weight="400" font-size="10">3 gün</text>
          <text x="404" y="57">Üretim</text><text x="404" y="71" font-weight="400" font-size="10">8 gün</text>
          <text x="404" y="197">Tedarik</text><text x="404" y="211" font-weight="400" font-size="10">4 gün</text>
          <text x="562" y="127">Bitir</text><text x="562" y="141" font-weight="400" font-size="10">Test: 3 gün</text>
        </g>
        <text x="320" y="246" font-size="12" fill="#e03e14" text-anchor="middle" font-weight="700">Kritik yol: Başla → Tasarım → Üretim → Bitir = 17 gün</text>
      </g>
    </svg>`,
    note: 'Kritik yol yönteminin orijinal biçimi düğüm-ok ağıdır: kırmızı yol en uzun (esnekliği sıfır) zincirdir ve projenin toplam süresini o belirler. Gri yoldaki gecikme bir yere kadar tolere edilir; kırmızıdaki her gün projeyi geciktirir.',
  },
  'raci-matrisi': {
    kind: 'bars',
    categories: ['R — Yapan', 'A — Hesap veren', 'C — Danışılan', 'I — Bilgilendirilen'],
    series: [{ name: 'Bir görevdeki kişi sayısı', values: [2, 1, 3, 5] }],
    yLabel: 'Kişi sayısı',
    note: 'Sağlıklı bir RACI dağılımı: yapan az, hesap veren HER ZAMAN tek kişidir. A sütununda iki kişi görünüyorsa sorumluluk aslında kimsede değildir; C ve I kalabalıklaşabilir ama karar veremez.',
  },
  'balik-kilcigi': {
    kind: 'svg',
    svg: `<svg viewBox="0 0 640 300" role="img" aria-label="Balık kılçığı diyagramı: omurga, altı ana neden dalı ve baştaki sorun kutusu" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <marker id="fsh-ok" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto"><path d="M0,0 L9,3 L0,6 Z" fill="#414d57"/></marker>
      </defs>
      <g font-family="Roboto, sans-serif">
        <line x1="40" y1="150" x2="520" y2="150" stroke="#414d57" stroke-width="4" marker-end="url(#fsh-ok)"/>
        <rect x="536" y="122" width="92" height="56" rx="10" fill="#fdece7" stroke="#e03e14" stroke-width="2.5"/>
        <text x="582" y="146" font-size="13" font-weight="700" fill="#e03e14" text-anchor="middle">SORUN</text>
        <text x="582" y="163" font-size="11" fill="#e03e14" text-anchor="middle">(etki)</text>
        <g stroke="#5b8bd9" stroke-width="2.5">
          <line x1="150" y1="150" x2="95" y2="50"/>
          <line x1="290" y1="150" x2="235" y2="50"/>
          <line x1="430" y1="150" x2="375" y2="50"/>
          <line x1="150" y1="150" x2="95" y2="250"/>
          <line x1="290" y1="150" x2="235" y2="250"/>
          <line x1="430" y1="150" x2="375" y2="250"/>
        </g>
        <g stroke="#b8c4cd" stroke-width="1.5">
          <line x1="122" y1="100" x2="92" y2="94"/><line x1="132" y1="118" x2="102" y2="112"/>
          <line x1="262" y1="100" x2="232" y2="94"/><line x1="272" y1="118" x2="242" y2="112"/>
          <line x1="402" y1="100" x2="372" y2="94"/><line x1="412" y1="118" x2="382" y2="112"/>
          <line x1="122" y1="200" x2="92" y2="206"/><line x1="132" y1="182" x2="102" y2="188"/>
          <line x1="262" y1="200" x2="232" y2="206"/><line x1="272" y1="182" x2="242" y2="188"/>
          <line x1="402" y1="200" x2="372" y2="206"/><line x1="412" y1="182" x2="382" y2="188"/>
        </g>
        <g font-size="13" font-weight="700" fill="#2f4a6b" text-anchor="middle">
          <text x="93" y="38">İnsan</text>
          <text x="233" y="38">Makine</text>
          <text x="373" y="38">Malzeme</text>
          <text x="93" y="272">Yöntem</text>
          <text x="233" y="272">Ölçüm</text>
          <text x="373" y="272">Çevre</text>
        </g>
      </g>
    </svg>`,
    note: 'Ishikawa\'nın orijinal iskeleti: omurga sorunu gösterir, altı ana kılçık (6M: insan, makine, malzeme, yöntem, ölçüm, çevre) olası neden ailelerini taşır. Küçük kılçıklar her ailenin altındaki somut nedenlerdir; "neden?" sorusu kılçık kılçık derinleşir.',
  },
  'kpi-tasarimi': {
    kind: 'curve',
    xLabel: 'Zaman (hafta)',
    yLabel: 'Düzey (şematik)',
    series: [
      { name: 'Öncü gösterge (aktivite)', data: [[0, 30], [1, 45], [2, 62], [3, 74], [4, 70], [5, 55], [6, 45], [7, 55], [8, 68], [9, 78], [10, 84]] },
      { name: 'Artçı gösterge (sonuç)', data: [[0, 25], [1, 27], [2, 34], [3, 48], [4, 62], [5, 70], [6, 62], [7, 50], [8, 46], [9, 55], [10, 68]] },
    ],
    note: 'Öncü gösterge (görüşme sayısı, deneme kaydı) önden gider; artçı gösterge (ciro, kâr) onu gecikmeyle izler. Yalnız artçıya bakan yönetici dikiz aynasıyla araba sürer: düşüş göründüğünde iş çoktan olmuştur.',
  },
  'is-modeli-kanvasi': {
    kind: 'svg',
    svg: `<svg viewBox="0 0 640 340" role="img" aria-label="İş modeli kanvası: dokuz kutulu şema, ortada değer önerisi" xmlns="http://www.w3.org/2000/svg">
      <g font-family="Roboto, sans-serif">
        <g fill="#f0f4f7" stroke="#9aa7b1" stroke-width="1.5">
          <rect x="10" y="10" width="120" height="200" rx="8"/>
          <rect x="136" y="10" width="120" height="97" rx="8"/>
          <rect x="136" y="113" width="120" height="97" rx="8"/>
          <rect x="388" y="10" width="120" height="97" rx="8"/>
          <rect x="388" y="113" width="120" height="97" rx="8"/>
          <rect x="514" y="10" width="116" height="200" rx="8"/>
          <rect x="10" y="216" width="308" height="110" rx="8"/>
          <rect x="324" y="216" width="306" height="110" rx="8"/>
        </g>
        <rect x="262" y="10" width="120" height="200" rx="8" fill="#fdece7" stroke="#e03e14" stroke-width="2.5"/>
        <g font-size="12" font-weight="700" fill="#414d57">
          <text x="20" y="32">Kilit Ortaklar</text>
          <text x="146" y="32">Kilit Faaliyetler</text>
          <text x="146" y="135">Kilit Kaynaklar</text>
          <text x="398" y="32">Müşteri İlişkileri</text>
          <text x="398" y="135">Kanallar</text>
          <text x="524" y="32">Müşteri</text>
          <text x="524" y="48">Segmentleri</text>
          <text x="20" y="240">Maliyet Yapısı</text>
          <text x="334" y="240">Gelir Akışları</text>
        </g>
        <g font-size="13" font-weight="700" fill="#e03e14" text-anchor="middle">
          <text x="322" y="102">DEĞER</text>
          <text x="322" y="120">ÖNERİSİ</text>
        </g>
        <text x="322" y="142" font-size="11" fill="#b8503a" text-anchor="middle">Hangi sorunu,</text>
        <text x="322" y="157" font-size="11" fill="#b8503a" text-anchor="middle">kim için çözüyoruz?</text>
        <g font-size="10" fill="#8a97a2">
          <text x="20" y="50">Kimsiz yapamayız?</text>
          <text x="146" y="50">Ne yapmalıyız?</text>
          <text x="146" y="153">Neye sahibiz?</text>
          <text x="398" y="50">Nasıl bağ kurarız?</text>
          <text x="398" y="153">Nasıl ulaşırız?</text>
          <text x="524" y="66">Kim için?</text>
          <text x="20" y="258">Para nereye gidiyor?</text>
          <text x="334" y="258">Para nereden geliyor?</text>
        </g>
      </g>
    </svg>`,
    note: 'Osterwalder\'ın orijinal dokuz kutusu: sol yarı işin nasıl üretildiğini (verimlilik), sağ yarı nasıl satıldığını (değer) anlatır; ortadaki değer önerisi ikisinin menteşesidir. Alttaki iki kutu her şeyi paraya bağlar: maliyet solda, gelir sağdadır.',
  },
  'deger-onerisi-kanvasi': {
    kind: 'venn3',
    labels: ['Müşterinin işleri', 'Acıları', 'Kazanç beklentileri'],
    pairs: ['Engel', 'Motivasyon', 'Öncelik'],
    center: 'Değer önerisi',
    note: 'Müşteri profili üç kümedir: yapmaya çalıştığı işler, bu işlerdeki acılar ve umduğu kazançlar. Ürünün değer önerisi üçünün kesişimini hedeflemelidir: acı dindirici + kazanç yaratıcı, gerçek bir işe bağlı.',
  },
  'crm-yonetimi': {
    kind: 'funnel',
    levels: [
      { name: 'Ziyaretçi', value: 100 },
      { name: 'Potansiyel müşteri', value: 45 },
      { name: 'İlk alışveriş', value: 18 },
      { name: 'Tekrar eden müşteri', value: 9 },
      { name: 'Sadık müşteri (elçi)', value: 4 },
    ],
    note: 'CRM hunisi satın almayla bitmez: asıl değer, huninin dibindeki tekrar eden ve sadık müşteride birikir. Yeni müşteri kazanmak mevcut olanı tutmaktan kat kat pahalıdır; CRM alt basamakları büyütme disiplinidir.',
  },
}
