import type { Viz } from '../types'

/**
 * İkincil görsel haritası (parça A): birincil görseli tablo ya da süreç akışı
 * olan modellere gerçek birer grafik. Değerler aksi belirtilmedikçe şematiktir.
 */
export const viz2aBySlug: Record<string, Viz> = {
  'swot-analizi': {
    kind: 'radar',
    axes: ['Güçlü yönler', 'Zayıf yönler', 'Fırsatlar', 'Tehditler'],
    max: 10,
    series: [
      { name: 'Örnek işletme', values: [8, 4, 7, 5] },
      { name: 'Sektör ortalaması', values: [6, 6, 6, 6] },
    ],
    note: 'Örnek bir işletmenin dört SWOT boyutundaki puanı sektör ortalamasıyla karşılaştırılır: güç ve fırsat kabarık, zayıflık düşükse S-O stratejisi öne çıkar. Değerler şematiktir.',
  },
  'geri-bildirim-analizi': {
    kind: 'curve',
    xLabel: 'Zaman (ay)',
    yLabel: 'Sonuç düzeyi',
    series: [
      { name: 'Beklenti (karar anında)', data: [[0, 20], [3, 45], [6, 65], [9, 80], [12, 90]] },
      { name: 'Gerçekleşen', data: [[0, 20], [3, 30], [6, 42], [9, 55], [12, 60]] },
    ],
    marks: [{ x: 9, label: 'Karşılaştırma anı' }],
    note: 'Drucker yönteminin özü iki eğrinin makasıdır: karar anında yazılan beklenti ile 9-12 ay sonra gerçekleşen üst üste konur; fark, senin sistematik hatanı gösterir. Değerler şematiktir.',
  },
  'john-whitmore-modeli': {
    kind: 'funnel',
    levels: [
      { name: 'Goal — Hedef: tüm istekler', value: 100 },
      { name: 'Reality — Gerçeklik süzgeci', value: 70 },
      { name: 'Options — Elenen seçenekler', value: 40 },
      { name: 'Will — Tek somut ilk adım', value: 15 },
    ],
    note: 'GROW aynı zamanda bir daralma hunisidir: geniş hedef alanı gerçeklik testinden geçer, seçeneklere iner ve tek bir iradeli ilk adıma sıkışır. Değerler şematiktir.',
  },
  'lastik-bant-modeli': {
    kind: 'bars',
    categories: ['Alışkanlık / Merak', 'Güvence / Büyüme', 'Ekip / Yeni çevre', 'İtibar / Koşullar'],
    series: [
      { name: 'Tutan kuvvet (mevcut)', values: [8, 9, 7, 6] },
      { name: 'Çeken kuvvet (yeni)', values: [5, 6, 7, 9] },
    ],
    yLabel: 'Gerilim (1-10)',
    note: 'İki lastik bandın gerilimi yan yana ölçülür: her satırda tutan ve çeken kuvvet karşılaştırılır. Toplam skor değil, hangi kuvvetin korku hangisinin değer olduğu okunur. Değerler şematik bir örnektir.',
  },
  'geri-bildirim-kutusu': {
    kind: 'quadrant',
    x: ['İşe yaramaz', 'İşe yarar'],
    y: ['Olumsuz', 'Olumlu'],
    quads: ['Boş övgü', 'Samimi övgü', 'Yıkıcı eleştiri', 'Yapıcı eleştiri'],
    highlight: 3,
    note: 'Gelen her yorum iki eksende sınıflanır: içerik (olumlu-olumsuz) ve fayda (işe yarar-yaramaz). Davranış değiştiren tek kutu yapıcı eleştiridir; boş övgü ve yıkıcı eleştiri çöpe gider.',
  },
  'evet-hayir-kurali': {
    kind: 'funnel',
    levels: [
      { name: 'Gelen istek ve davetler', value: 100 },
      { name: '"Kesinlikle evet!" süzgeci', value: 20 },
      { name: 'Takvime giren taahhütler', value: 12 },
    ],
    note: 'Kuralın etkisi hunide görünür: gelen isteklerin büyük kısmı "kesin evet değilse hayırdır" süzgecinde elenir; takvime yalnızca net evetler girer. Oranlar şematiktir.',
  },
  'morfolojik-kutu-scamper': {
    kind: 'bars',
    categories: ['2 özellik × 3 seçenek', '3 × 3', '4 × 3', '5 × 3'],
    series: [{ name: 'Olası kombinasyon sayısı', values: [9, 27, 81, 243] }],
    yLabel: 'Kombinasyon',
    note: 'Morfolojik kutunun gücü katlanarak büyür: her yeni özellik satırı kombinasyon sayısını seçenek sayısıyla çarpar (3^n). Beş satırlık mütevazı bir kutu bile 243 fikir adayı üretir.',
  },
  'sonuclar-modeli': {
    kind: 'curve',
    xLabel: 'Zaman (yıl)',
    yLabel: 'Kararın birikmiş etkisi',
    series: [
      { name: 'İyi karar (bileşik kazanç)', data: [[0, 0], [1, 3], [2, 7], [3, 13], [4, 22], [5, 35], [6, 54], [7, 80]] },
      { name: 'Ertelenen karar (bileşik bedel)', data: [[0, 0], [1, -2], [2, -5], [3, -10], [4, -17], [5, -28], [6, -44], [7, -66]] },
    ],
    note: 'Kararın anlık etkisi küçüktür; asıl fark zamanla bileşik büyür. Erteleme de bir karardır ve bedeli aynı eğriyle, ters yönde birikir. Değerler şematiktir.',
  },
  'johari-penceresi': {
    kind: 'quadrant',
    x: ['Ben biliyorum', 'Ben bilmiyorum'],
    y: ['Başkaları bilmiyor', 'Başkaları biliyor'],
    quads: ['Açık alan', 'Kör nokta', 'Gizli alan', 'Bilinmeyen'],
    highlight: 0,
    note: 'Orijinal pencere 2×2\'dir: hedef, geri bildirim isteyerek ve kendini açarak açık alanı büyütmektir; kör nokta ve gizli alan ona doğru küçülür.',
  },
  'bilissel-celiski': {
    kind: 'curve',
    xLabel: 'Zaman',
    yLabel: 'İç gerilim düzeyi',
    series: [{ name: 'Çelişki gerilimi', data: [[0, 10], [1, 75], [2, 25], [3, 78], [4, 28], [5, 82], [6, 30], [7, 85]] }],
    marks: [{ x: 1, label: 'Çelişki doğar' }, { x: 2, label: 'Gerekçe susturur' }],
    note: 'Testere dişi deseni: çelişen davranış gerilimi yükseltir, üretilen gerekçe onu düşürür — ama çözmediği için bir sonraki karşılaşmada gerilim yeniden ve biraz daha yüksek doğar. Değerler şematiktir.',
  },
  'hayal-edilemez-modeli': {
    kind: 'pyramid',
    levels: [
      { name: 'Bildiklerim (kanıtlı)', value: 100 },
      { name: 'İnandıklarım (kanıtsız)', value: 75 },
      { name: 'Hayal edebildiklerim', value: 45 },
      { name: 'Hayal edemediklerim', value: 18 },
    ],
    note: 'Katmanlar yukarı çıktıkça daralır ama etkileri büyür: en dar katman olan "hayal edemediklerim", asıl sürprizlerin geldiği yerdir. Genişlikler şematiktir.',
  },
  'zor-secim-modeli': {
    kind: 'scatter',
    xLabel: 'Kıyaslanabilirlik (ölçülemez → aynı ölçek)',
    yLabel: 'Kararın önemi',
    points: [
      { name: 'Menüden yemek seçmek', x: 8, y: 1.5, size: 10 },
      { name: 'İki iş teklifi (aynı maaş)', x: 7.5, y: 5, size: 12 },
      { name: 'Ev mi araba mı?', x: 5, y: 4, size: 12 },
      { name: 'Kariyer mi aile şehri mi?', x: 2, y: 8.5, size: 18, accent: true },
      { name: 'Sanat mı hukuk mu?', x: 1.5, y: 9, size: 18, accent: true },
      { name: 'Hangi telefon?', x: 9, y: 2.5, size: 10 },
    ],
    note: 'Ruth Chang\'in ayrımı haritada görünür: sol üstteki seçimler hem önemli hem kıyaslanamazdır — orada hesap değil taahhüt karar verir. Konumlar şematik örneklerdir.',
  },
  'bilissel-onyargi': {
    kind: 'bars',
    categories: ['Doğrulama önyargısı', 'Çapa etkisi', 'Batık maliyet', 'Hayatta kalan yanlılığı'],
    series: [{ name: 'Karar hatalarında görülme sıklığı', values: [85, 65, 60, 45] }],
    yLabel: 'Sıklık (şematik)',
    note: 'Dört temel önyargının günlük kararlardaki görülme sıklığı: doğrulama önyargısı en yaygın olanıdır, çünkü diğerlerini de besler. Değerler şematiktir, ölçülmüş oran değildir.',
  },
  'yol-ayrimi-modeli': {
    kind: 'scatter',
    xLabel: 'Tanıdıklık (bilinmez → bilindik)',
    yLabel: 'Gerektirdiği cesaret',
    points: [
      { name: 'Geldiğim yol', x: 9, y: 1.5, size: 14 },
      { name: 'Geri dönüş yolu', x: 8.5, y: 2.5, size: 12 },
      { name: 'Bana en çok önerilen yol', x: 6.5, y: 3.5, size: 14 },
      { name: 'Hayalimdeki yol', x: 3, y: 7.5, size: 16, accent: true },
      { name: 'Hiç düşünmediğim yol', x: 1.5, y: 6.5, size: 12 },
      { name: 'Denenmemiş yol', x: 2, y: 9, size: 16, accent: true },
    ],
    note: 'Altı yol cesaret × tanıdıklık haritasına konur: sağ alttakiler güvenli ama bilindiktir; sol üsttekiler korkutan ama çağıran yollardır. Konumlar şematiktir.',
  },
  'rumsfeld-matrisi': {
    kind: 'quadrant',
    x: ['Farkındayız', 'Farkında değiliz'],
    y: ['Bilgi yok', 'Bilgi var'],
    quads: ['Bilinen bilinenler', 'Bilinmeyen bilinenler', 'Bilinen bilinmeyenler', 'Bilinmeyen bilinmeyenler'],
    highlight: 1,
    note: 'Matrisin 2×2 hâli: en tehlikeli hücre sağ üstteki bilinmeyen bilinenlerdir — bilgi örgütte vardır ama bastırıldığı için karara ulaşmaz.',
  },
  'cift-dongulu-ogrenme': {
    kind: 'svg',
    svg: `<svg viewBox="0 0 640 300" role="img" aria-label="Çift döngülü öğrenme: eylem-sonuç arasındaki küçük döngü ve varsayımlara dönen büyük dış döngü" class="mx-auto w-full max-w-xl min-w-[480px]">
      <defs>
        <marker id="cdo-ok1" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto"><path d="M0,0 L9,3 L0,6 Z" fill="#4f5e6a"/></marker>
        <marker id="cdo-ok2" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto"><path d="M0,0 L9,3 L0,6 Z" fill="#e03e14"/></marker>
      </defs>
      <g font-family="Roboto, sans-serif">
        <rect x="30" y="110" width="150" height="56" rx="10" fill="#fdf1ec" stroke="#e03e14" stroke-width="2"/>
        <text x="105" y="134" font-size="14" font-weight="700" fill="#e03e14" text-anchor="middle">Varsayımlar</text>
        <text x="105" y="152" font-size="12" fill="#4f5e6a" text-anchor="middle">ve hedefler</text>
        <rect x="250" y="110" width="130" height="56" rx="10" fill="#f4f6f8" stroke="#4f5e6a" stroke-width="2"/>
        <text x="315" y="142" font-size="14" font-weight="700" fill="#414d57" text-anchor="middle">Eylem</text>
        <rect x="460" y="110" width="130" height="56" rx="10" fill="#f4f6f8" stroke="#4f5e6a" stroke-width="2"/>
        <text x="525" y="142" font-size="14" font-weight="700" fill="#414d57" text-anchor="middle">Sonuç</text>
        <line x1="180" y1="138" x2="243" y2="138" stroke="#4f5e6a" stroke-width="2.5" marker-end="url(#cdo-ok1)"/>
        <line x1="380" y1="138" x2="453" y2="138" stroke="#4f5e6a" stroke-width="2.5" marker-end="url(#cdo-ok1)"/>
        <path d="M 525 110 C 525 60, 315 60, 315 103" fill="none" stroke="#4f5e6a" stroke-width="2.5" marker-end="url(#cdo-ok1)"/>
        <text x="420" y="62" font-size="12" fill="#4f5e6a" text-anchor="middle">Tek döngü: tekniği ayarla</text>
        <path d="M 525 166 C 525 250, 105 250, 105 173" fill="none" stroke="#e03e14" stroke-width="3" marker-end="url(#cdo-ok2)"/>
        <text x="315" y="256" font-size="13" font-weight="700" fill="#e03e14" text-anchor="middle">Çift döngü: doğru işi mi yapıyoruz?</text>
      </g>
    </svg>`,
    note: 'Argyris\'in diyagramı: küçük üst döngü sonuçtan eyleme döner ve aynı hedefle tekniği düzeltir; büyük alt döngü ise varsayımların kendisine geri döner. Çoğu kurum yalnızca üst döngüyü çalıştırır.',
  },
  'ai-modeli': {
    kind: 'curve',
    xLabel: 'Toplantı süresi',
    yLabel: 'Ekip enerjisi',
    series: [
      { name: 'Sorun odaklı yaklaşım', data: [[0, 60], [2, 50], [4, 38], [6, 28], [8, 20], [10, 15]] },
      { name: 'Güç odaklı yaklaşım (AI)', data: [[0, 60], [2, 66], [4, 74], [6, 80], [8, 86], [10, 90]] },
    ],
    note: 'Appreciative Inquiry\'nin iddiası: eksik ve suçlu aramak enerjiyi tüketir, zirve anlardan tasarlamak enerjiyi büyütür. İki eğri aynı toplantının iki olası seyridir; değerler şematiktir.',
  },
  'kara-kutu-modeli': {
    kind: 'svg',
    svg: `<svg viewBox="0 0 640 240" role="img" aria-label="Kara kutu modeli: girdi okunun siyah kutuya girip çıktı olarak çıkması" class="mx-auto w-full max-w-xl min-w-[480px]">
      <defs>
        <marker id="kkm-ok" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto"><path d="M0,0 L9,3 L0,6 Z" fill="#4f5e6a"/></marker>
      </defs>
      <g font-family="Roboto, sans-serif">
        <rect x="20" y="85" width="130" height="70" rx="10" fill="#f4f6f8" stroke="#4f5e6a" stroke-width="2"/>
        <text x="85" y="115" font-size="14" font-weight="700" fill="#414d57" text-anchor="middle">GİRDİ</text>
        <text x="85" y="135" font-size="11" fill="#4f5e6a" text-anchor="middle">veri, para, talimat</text>
        <line x1="150" y1="120" x2="228" y2="120" stroke="#4f5e6a" stroke-width="2.5" marker-end="url(#kkm-ok)"/>
        <rect x="238" y="55" width="164" height="130" rx="12" fill="#16181b" stroke="#000000" stroke-width="2"/>
        <text x="320" y="112" font-size="15" font-weight="700" fill="#ffffff" text-anchor="middle">KARA KUTU</text>
        <text x="320" y="134" font-size="20" font-weight="700" fill="#e03e14" text-anchor="middle">?</text>
        <line x1="402" y1="120" x2="480" y2="120" stroke="#4f5e6a" stroke-width="2.5" marker-end="url(#kkm-ok)"/>
        <rect x="490" y="85" width="130" height="70" rx="10" fill="#f4f6f8" stroke="#4f5e6a" stroke-width="2"/>
        <text x="555" y="115" font-size="14" font-weight="700" fill="#414d57" text-anchor="middle">ÇIKTI</text>
        <text x="555" y="135" font-size="11" fill="#4f5e6a" text-anchor="middle">sonuç, karar</text>
        <text x="320" y="215" font-size="13" fill="#4f5e6a" text-anchor="middle">İçerideki mekanizma görünmez: bilgi yerini güvene bırakır.</text>
      </g>
    </svg>`,
    note: 'Girdiyi ve çıktıyı görürsün; aradaki mekanizma karanlıktır. Soru "nasıl çalışıyor?" olmaktan çıkar, "bu kutuya güvenmeyi kime ya da neye dayandırıyorum?" olur.',
  },
  'mahkum-ikilemi': {
    kind: 'bars',
    categories: ['İkisi de susar', 'A itiraf, B susar', 'A susar, B itiraf', 'İkisi de itiraf'],
    series: [
      { name: 'A\'nın cezası', values: [2, 0, 10, 5] },
      { name: 'B\'nin cezası', values: [2, 10, 0, 5] },
    ],
    yLabel: 'Ceza (yıl)',
    note: 'Klasik kurgunun gerçek ceza değerleri: toplam ceza en düşük (4 yıl) ikisi de susunca, en yüksek (10 yıl) ikisi de itiraf edince oluşur — bireysel akıl yine de herkesi itirafa sürükler.',
  },
  'rol-oyunu-modeli': {
    kind: 'radar',
    axes: ['Beyaz (veri)', 'Kırmızı (duygu)', 'Siyah (risk)', 'Sarı (fırsat)', 'Yeşil (yaratıcılık)', 'Mavi (süreç)'],
    max: 10,
    series: [
      { name: 'Tipik toplantı', values: [5, 3, 9, 4, 2, 2] },
      { name: 'Dengeli toplantı', values: [7, 6, 6, 6, 7, 7] },
    ],
    note: 'Bir toplantıda altı şapkanın kullanım dengesi: tipik toplantılar siyah şapkada (eleştiri) yığılır, yeşil ve mavi neredeyse hiç takılmaz. Değerler şematiktir.',
  },
  'sonuc-optimizasyonu': {
    kind: 'curve',
    xLabel: 'Zaman (proje süresi)',
    yLabel: 'Bitmiş iş kalitesi',
    series: [
      { name: 'Üç döngü (her turda biten iş)', data: [[0, 0], [3, 55], [3.3, 55], [6.6, 78], [7, 78], [10, 92]] },
      { name: 'Tek sefer (sona sıkışan)', data: [[0, 0], [3, 5], [6, 12], [8, 25], [9, 45], [10, 70]] },
    ],
    marks: [{ x: 3.3, label: '1. sürüm hazır' }, { x: 7, label: '2. sürüm hazır' }],
    note: 'Üç döngüde kalite basamaklı yükselir ve her basamakta elde bitmiş bir sürüm vardır; tek seferlik planda ise kalite sona sıkışır ve yazıcı tam o gün bozulur. Değerler şematiktir.',
  },
  'drexler-sibbet-modeli': {
    kind: 'curve',
    xLabel: 'Yedi durak (1 Oryantasyon → 7 Yenilenme)',
    yLabel: 'Takım enerjisi',
    series: [{ name: 'Takım enerjisi', data: [[1, 70], [2, 55], [3, 40], [4, 30], [5, 50], [6, 85], [7, 75]] }],
    marks: [{ x: 4, label: 'Taahhüt: dip nokta' }],
    note: 'Orijinal diyagram bir V eğrisidir: yaratma evresinde (1-4) enerji belirsizlikle iner, taahhüt dipte verilir; sürdürme evresinde (5-7) uygulama ve sinerjiyle yükselir. Değerler şematiktir.',
  },
}
