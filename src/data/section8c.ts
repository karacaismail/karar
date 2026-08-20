import type { DecisionModel } from '../types'

export const section8cModels: DecisionModel[] = [
  {
    slug: 'tows-matrisi',
    section: 'strateji-rekabet',
    title: 'TOWS Matrisi (SWOT\'un Eylem Hali)',
    question: 'SWOT listemi nasıl somut stratejilere çeviririm?',
    summary: 'Heinz Weihrich\'in geliştirdiği yöntem: SWOT\'ta listelenen güçlü-zayıf yönler ile fırsat-tehditleri çaprazlayarak dört tip strateji üretir; liste yapan SWOT\'u karar üreten bir makineye çevirir.',
    tags: ['strateji üretimi', 'swot', 'eylem planı'],
    areas: ['İşletme stratejisi', 'Yıllık planlama', 'Rekabet analizi', 'Kişisel kariyer'],
    viz: {
      kind: 'quadrant',
      x: ['Fırsatlar (O)', 'Tehditler (T)'],
      y: ['Zayıf yönler (W)', 'Güçlü yönler (S)'],
      quads: ['SO: Saldırı - gücünle fırsatı yakala', 'ST: Savunma - gücünle tehdidi karşıla', 'WO: Geliştirme - zayıflığı fırsatla kapat', 'WT: Küçülme - zayıf ve tehditli alandan çekil'],
      highlight: 0,
      note: 'SWOT listeler, TOWS çaprazlar: her hücre bir strateji sorusudur.',
    },
    pages: [
      {
        slug: 'kavram',
        title: 'Kavram',
        blocks: [
          { t: 'callout', kind: 'simple', title: 'Bir cümlede', text: 'SWOT listeni rafa kaldırma; güçlü yönlerini fırsat ve tehditlerle, zayıf yönlerini de fırsat ve tehditlerle tek tek çaprazla ve her kesişimden bir strateji çıkar: gücünle saldır, fırsatla geliştir, gücünle savun, zayıf ve tehditli yerden çekil.' },
          { t: 'callout', kind: 'ornek', title: 'Esnaftan örnek', text: 'Fırıncı Hamdi bir SWOT yapmış: güçlü yön, taş fırın ve eski müşteri sadakati; zayıf yön, tek başına çalışması ve internetten sipariş alamaması; fırsat, mahalleye yeni siteler taşınması; tehdit, köşeye zincir market fırını açılması. Liste güzel ama duvarda öylece duruyor. Muhasebecisi masaya bir çarpı çiziyor: dört hücre. Gücün ile fırsatı çaprazla (SO): taş fırın ekmeğini yeni sitelere tanıt, kapı kapı numune dağıt. Zayıflığın ile fırsatı çaprazla (WO): siteler telefonla sipariş vermek istiyor, o halde bir çırak al ve telefon siparişi başlat; zayıflık fırsat sayesinde kapanıyor. Gücün ile tehdidi çaprazla (ST): market fırını taş fırın taklidi yapamaz, camına kocaman "gerçek taş fırın, 1985\'ten beri" yaz. Zayıflık ile tehdit çakışan hücrede (WT): market poşet ekmekte fiyat kırar, oradan çekil, poşet ekmek yarışına hiç girme. Aynı liste, bir çarpı işaretiyle dört stratejiye dönüştü.' },
          { t: 'p', text: 'TOWS, SWOT harflerinin ters yazılışıdır ve bu terslik bilinçlidir: SWOT içeriden dışarıya bakar (önce ben, sonra dünya), TOWS dışarıdan içeriye bakar (önce dünya ne getiriyor, ben ona ne yapacağım). Yöntemi 1982\'de yönetim profesörü Heinz Weihrich yayımladı. Weihrich\'in derdi şuydu: SWOT analizi dünyanın en çok kullanılan araçlarından biriydi ama çoğu SWOT, dört başlıklı bir listeden öteye geçmiyordu. Liste durum tespitidir; strateji ise "peki şimdi ne yapacağız?" sorusunun cevabıdır. TOWS bu köprüyü kurar. Bu yüzden TOWS\'u sitedeki SWOT Analizi sayfasıyla birlikte kullan: SWOT ham maddeyi toplar, TOWS o ham maddeden strateji üretir.' },
          { t: 'h2', text: 'Dört strateji hücresi' },
          { t: 'table', head: ['Hücre', 'Çaprazlama', 'Strateji tipi', 'Örnek soru'], rows: [
            ['SO (Saldırı)', 'Güçlü yön + Fırsat', 'En iyi hamle: gücünle fırsatı yakala', 'Hangi gücüm hangi fırsatı paraya çevirir?'],
            ['WO (Geliştirme)', 'Zayıf yön + Fırsat', 'Zayıflığı kapat ki fırsat kaçmasın', 'Hangi zayıflığım hangi fırsatı kaçırtıyor?'],
            ['ST (Savunma)', 'Güçlü yön + Tehdit', 'Gücünü kalkan yap', 'Hangi gücüm hangi tehdidi savuşturur?'],
            ['WT (Küçülme)', 'Zayıf yön + Tehdit', 'Zararı sınırla, gerekirse çekil', 'Zayıf olduğum ve tehdit altındaki alan neresi?'],
          ]},
          { t: 'p', text: 'Dört hücrenin ağırlığı eşit değildir ve doğru davranış duruma göre değişir. Genç ve güçlü bir işletme SO hücresinde yaşar; sıkışmış bir işletme önce WT hücresine dürüstçe bakmalıdır, çünkü en pahalı hata, zayıf olduğun ve tehdit altındaki bir alanda inatla savaşmaya devam etmektir. TOWS\'un en az konuşulan ama en değerli hücresi budur: nereden çekileceğini bilmek de stratejidir.' },
          { t: 'p', text: 'Bir kural daha: her hücreye yazılan cümle bir eylem cümlesi olmalıdır, durum cümlesi değil. "Müşteri sadakatimiz var ve mahalleye siteler taşınıyor" bir tespittir; "sadık müşterilerimden yeni sitelere tavsiye kartı dağıtmalarını isteyeceğim" bir stratejidir. Hücrede özne ve fiil yoksa TOWS henüz bitmemiştir.' },
        ],
      },
      {
        slug: 'uygulama',
        title: 'Nasıl Uygulanır',
        blocks: [
          { t: 'steps', items: [
            { title: 'Önce dürüst bir SWOT çıkar', text: 'TOWS\'un ham maddesi SWOT\'tur; SWOT sayfasındaki yöntemle her başlığa en az üç somut madde yaz. Maddeler genel laf değil kanıtlı gözlem olsun: "kalitemiz iyi" değil, "iade oranımız binde beş, sektör ortalaması yüzde iki".' },
            { title: 'Dört hücreli çaprazlama tablosu kur', text: 'Bir kağıdı dörde böl: SO, WO, ST, WT. Her güçlü yönü tek tek fırsatların ve tehditlerin karşısına koy, her zayıf yönü de aynı şekilde. "Bu ikisi yan yana gelince ne yapmalıyım?" diye sor ve aklına gelen her hamleyi ilgili hücreye yaz.' },
            { title: 'Her hücreden en fazla iki strateji seç', text: 'Hücreler dolunca eleme yap: her hücreden en güçlü bir-iki stratejiyi seç. Seçim ölçüsü basittir: hangisi en az masrafla en büyük farkı yaratır ve hangisini gerçekten yapabilecek gücün var?' },
            { title: 'Stratejilere sahip, tarih ve ilk adım yaz', text: 'Seçilen her stratejinin karşısına bir sorumlu, bir başlangıç tarihi ve yirmi dört saat içinde atılabilecek bir ilk adım yaz. Üç ayda bir tabloya dön: dünya değiştiyse (yeni tehdit, yeni fırsat) çaprazlamayı tazele.' },
          ]},
          { t: 'callout', kind: 'tip', title: 'İpucu', text: 'En verimli hücre çoğu zaman WO hücresidir: fırsat kapıdayken görünen zayıflık, en kolay kapanan zayıflıktır çünkü kapatma masrafının karşılığı bellidir. "İnternetten sipariş alamıyorum" zayıflığı soyutken kimse uğraşmaz; "siteler sipariş vermek istiyor ama alamıyorum" haline gelince yatırımın gerekçesi kendiliğinden yazılır.' },
          { t: 'callout', kind: 'warn', title: 'Dikkat', text: 'İki tuzak vardır. Birincisi her hücreyi doldurma zorunluluğu hissetmek: bazı çaprazlamalardan anlamlı strateji çıkmaz, boş hücre suç değildir. İkincisi WT hücresini atlamak: kimse küçülmeyi ve çekilmeyi konuşmak istemez, bu yüzden en hayati hücre çoğu toplantıda hiç doldurulmaz. Zayıf ve tehditli alanını yazmayan TOWS, yarım TOWS\'tur.' },
        ],
      },
      {
        slug: 'vaka',
        title: 'Gerçek Vaka & Fayda',
        blocks: [
          { t: 'callout', kind: 'case', title: 'Vaka: Weihrich 1982 - listeyi makineye çevirmek', text: 'Yöntemin doğuşu belgelidir: San Francisco Üniversitesi\'nde yönetim profesörü olan Heinz Weihrich, 1982\'de Long Range Planning dergisinde "The TOWS Matrix - A Tool for Situational Analysis" başlıklı makaleyi yayımladı. Weihrich, o güne kadar durum tespiti olarak kullanılan SWOT değişkenlerinin sistematik biçimde çaprazlanmasıyla strateji üretilebileceğini gösterdi ve yöntemi somut bir şirket vakasıyla anlattı: makalede Volkswagen\'in 1970\'lerdeki durumu TOWS ile analiz edilir. Volkswagen\'in Kaplumbağa (Beetle) modeli eskimiş, Amerikan pazarında Japon rakipler yükselmiş, mark güçlenince ihracat pahalanmıştı; Weihrich, şirketin güçlü mühendisliğini yeni fırsatlarla çaprazlayarak ürettiği hamleleri (Golf gibi yeni modeller, ABD\'de yerli üretim) matris üzerinde gösterdi. Makale, strateji öğretiminin klasiklerinden biri oldu; bugün işletme okullarında SWOT anlatılan hemen her derste, listenin stratejiye dönüşme adımı Weihrich\'in matrisiyle öğretilir. Weihrich daha sonra aynı yöntemi ülkeler ve sektörler için de uyguladı ve TOWS, SWOT\'un eylem katmanı olarak yönetim yazınına yerleşti.' },
          { t: 'h2', text: 'Gerçek fayda' },
          { t: 'ul', items: [
            'Listeyi karara çevirir: duvarda süs olarak duran SWOT, dört hücrelik bir çaprazlamayla sahipli ve tarihli hamlelere dönüşür.',
            'Kör noktaları taratır: her güçlü yön her fırsat ve tehditle tek tek yan yana geldiği için, kimsenin aklına gelmeyen eşleşmeler (gücünü hiç düşünmediğin bir tehdide karşı kullanmak gibi) ortaya çıkar.',
            'Çekilme kararını meşrulaştırır: WT hücresi, "bu alandan çıkalım" demeyi kişisel yenilgi olmaktan çıkarıp yöntemin doğal bir sonucu yapar; işletme en pahalı savaşlardan erken kurtulur.',
          ]},
        ],
      },
    ],
  },
  {
    slug: 'deger-zinciri',
    section: 'strateji-rekabet',
    title: 'Değer Zinciri (Porter)',
    question: 'Müşterinin ödediği para, işletmemin hangi halkasında kazanılıyor veya kaybediliyor?',
    summary: 'Michael Porter\'ın 1985\'te tanıttığı model: işletmeyi, ham maddeden müşteriye uzanan birincil faaliyetler ile onları ayakta tutan destek faaliyetlerine ayırıp her halkanın maliyetini ve kattığı değeri tek tek inceler.',
    tags: ['rekabet avantajı', 'maliyet', 'süreç analizi'],
    areas: ['İşletme stratejisi', 'Maliyet yönetimi', 'Üretim ve lojistik', 'Fiyatlama kararları'],
    viz: {
      kind: 'table',
      head: ['Halka', 'Soru', 'Esnaf örneği'],
      rows: [
        ['İçe lojistik', 'Girdiler nasıl geliyor ve saklanıyor?', 'Kumaş toptancıdan haftada bir mi, günlük mü geliyor?'],
        ['Üretim', 'Girdi ürüne nasıl dönüşüyor?', 'Bir koltuk kaç saatte, kaç fire ile dikiliyor?'],
        ['Dışa lojistik', 'Ürün müşteriye nasıl ulaşıyor?', 'Teslimat kendi aracıyla mı, nakliyeciyle mi?'],
        ['Pazarlama ve satış', 'Müşteri bizi nasıl bulup neden seçiyor?', 'Sipariş vitrin gezen müşteriden mi, tavsiyeden mi?'],
        ['Satış sonrası servis', 'Satıştan sonra ne oluyor?', 'Şikayet kaç günde çözülüyor, müşteri geri geliyor mu?'],
        ['Destek: tedarik, insan, teknoloji, altyapı', 'Bu halkaları ne besliyor?', 'Ustayı kim eğitiyor, alım pazarlığını kim yapıyor?'],
      ],
      accentCol: 0,
      note: 'Kar, zincirin tamamının kattığı değer ile toplam maliyetin arasındaki farktır; halka halka bak.',
    },
    pages: [
      {
        slug: 'kavram',
        title: 'Kavram',
        blocks: [
          { t: 'callout', kind: 'simple', title: 'Bir cümlede', text: 'İşletmene tek bir bütün olarak değil, ham maddeden müşteriye uzanan bir halkalar zinciri olarak bak: her halkanın maliyetini ve müşteri gözündeki değerini ayrı ayrı ölç; kar da rekabet avantajı da toplamda değil, tek tek halkalarda kazanılır veya kaybedilir.' },
          { t: 'callout', kind: 'ornek', title: 'Esnaftan örnek', text: 'Mobilyacı Servet "işler karlı değil" diye yakınıyor ama nerede kaybettiğini bilmiyor; ona göre suçlu "piyasa". Bir hafta boyunca bir koltuk siparişinin bütün yolculuğunu halka halka yazıyor. İçe lojistik: kumaşı üç ayrı toptancıdan küçük küçük alıyor, her seferinde pahalı ve yol masraflı. Üretim: dikiş ustası hızlı ve fireleri az; burası güçlü halka. Dışa lojistik: teslimatı kendi kamyonetiyle tek tek yapıyor, yarım günü yolda geçiyor. Satış: müşterilerin çoğu eski müşteri tavsiyesi; vitrine harcadığı para boşa gidiyor. Servis: montaj sonrası ufak ayarlara ücretsiz gidiyor ve bu, müşterilerin onu tavsiye etmesinin asıl sebebi çıkıyor. Tablo netleşiyor: para üretimde kazanılıyor, alımda ve teslimatta kaybediliyor; müşteriyi getiren şey vitrin değil servis. Servet üç karar alıyor: kumaşta tek toptancıyla yıllık anlaşma, teslimatları haftada iki güne toplama, vitrin masrafını kısıp ücretsiz montaj ayarını fişin üstüne yazarak reklam yapma. Ciro aynı kaldı, kar arttı; çünkü zayıf halkalar tek tek görüldü.' },
          { t: 'p', text: 'Değer zincirini Harvard\'lı strateji profesörü Michael Porter, 1985\'te yayımladığı Competitive Advantage (Rekabet Avantajı) kitabında tanıttı. Porter\'ın temel itirazı şuydu: işletmeler rekabet gücünü bütün halinde konuşur ("biz kaliteliyiz", "onlar ucuzcu") ama rekabet avantajı bütünde değil, faaliyetlerde doğar. İki fırın da ekmek satar; birinin ucuz olmasının sebebi unu toptan alışında, diğerinin sadık müşterisinin sebebi sıcak servisinde olabilir. Avantajın nereden geldiğini bilmeyen işletme, onu ne büyütebilir ne koruyabilir.' },
          { t: 'h2', text: 'Birincil ve destek faaliyetler' },
          { t: 'table', head: ['Tür', 'Faaliyetler', 'Ortak özellik'], rows: [
            ['Birincil faaliyetler', 'İçe lojistik, üretim, dışa lojistik, pazarlama ve satış, satış sonrası servis', 'Ürünün fiziksel yolculuğu: ham madde girer, memnun müşteri çıkar'],
            ['Destek faaliyetleri', 'Tedarik (satın alma), insan kaynakları, teknoloji geliştirme, işletme altyapısı (muhasebe, yönetim)', 'Kendisi ürün üretmez ama her birincil halkayı besler'],
          ]},
          { t: 'p', text: 'Modelin ince noktası destek faaliyetlerin görünmez etkisidir. Satın almadaki beceriksizlik tek bir kalemde değil, bütün üretim maliyetinde gizlenir; kötü usta eğitimi, fire olarak üretim halkasında görünür ama kökü insan kaynakları halkasındadır. Bu yüzden bir halkada görülen sorunun ilacı çoğu zaman başka bir halkadadır.' },
          { t: 'p', text: 'Değer zinciri, sitedeki diğer strateji araçlarıyla iş bölümü yapar: Porter\'ın Beş Kuvvet modeli dışarıya bakar (sektör ne kadar karlı?), değer zinciri içeriye bakar (o karın ne kadarını hangi halkamla alabiliyorum?). SWOT sayfasındaki güçlü ve zayıf yönleri doldurmanın en sağlam yolu da budur: "neyde iyiyiz?" sorusuna hisle değil, halka halka bakarak cevap verilir.' },
        ],
      },
      {
        slug: 'uygulama',
        title: 'Nasıl Uygulanır',
        blocks: [
          { t: 'steps', items: [
            { title: 'Bir ürünün yolculuğunu halka halka yaz', text: 'En çok sattığın ürünü seç ve ham maddenin kapıdan girişinden müşterinin memnun ayrılışına kadar bütün adımları sırayla yaz. Beş birincil halkayı iskelet olarak kullan; sana uymayan halkayı kendi işine göre adlandır (lokantada "dışa lojistik" servistir).' },
            { title: 'Her halkaya maliyetini ve süresini yaz', text: 'Her halkanın aylık maliyetini kabaca dağıt: alım, işçilik, nakliye, reklam, servis. Kesin rakam şart değil; halkaların birbirine oranı bile çoğu işletmecinin hiç görmediği bir haritadır. Çoğu kişi paranın hangi halkada eridiğini ilk kez burada görür.' },
            { title: 'Her halkaya müşteri gözünden değer puanı ver', text: 'Şimdi aynı halkalara müşterinin gözüyle bak: müşteri hangi halkanın farkını hissediyor ve hangisi için para ödemeye razı? Servet\'in ücretsiz montaj ayarı gibi, en değerli halka çoğu zaman en az masraflı olandır; en masraflı halka da müşterinin hiç umursamadığı olabilir.' },
            { title: 'Uyumsuz halkalarda karar al', text: 'Maliyeti yüksek, müşteri değeri düşük halkalarda kıs, sadeleştir veya dışarıya devret. Maliyeti düşük, değeri yüksek halkalarda büyüt ve bunu pazarlamanın merkezine koy. Her karardan sonra zinciri yeniden çiz; halkalar birbirine bağlıdır, birindeki değişiklik komşusunu etkiler.' },
          ]},
          { t: 'callout', kind: 'tip', title: 'İpucu', text: 'Zinciri kapının dışına da uzat: senin içe lojistiğin, tedarikçinin dışa lojistiğidir. Toptancınla teslim gününü ve ambalajı konuşmak, kendi deponu büyütmekten çok daha ucuza aynı rahatlığı verebilir. En ucuz iyileştirmeler çoğu zaman iki zincirin birbirine değdiği yerdedir.' },
          { t: 'callout', kind: 'warn', title: 'Dikkat', text: 'En tehlikeli hata, maliyeti her halkada birden kısmaya çalışmaktır. Müşterinin seni seçme sebebi olan halkada yapılan kısıntı, tasarruf değil intihardır: ücretsiz montaj ayarını kaldıran Servet, en ucuz halkasını keserken en değerli reklamını da kesmiş olurdu. Önce hangi halkanın seni sattığını öğren, sonra makası diğerlerine vur.' },
        ],
      },
      {
        slug: 'vaka',
        title: 'Gerçek Vaka & Fayda',
        blocks: [
          { t: 'callout', kind: 'case', title: 'Vaka: Porter 1985 ve zincirle okunan şirketler', text: 'Model, Michael Porter\'ın 1985 tarihli Competitive Advantage kitabıyla yönetim dünyasına girdi ve kitap, strateji yazınının en çok atıf alan eserlerinden biri oldu. Porter\'ın gösterdiği şey, aynı sektördeki şirketlerin farklı halkalarda kazandığıydı ve klasik örnekler bunu belgeler: perakendeci Walmart\'ın üstünlüğü mağazalarında değil, kimsenin görmediği içe lojistik halkasındaydı; dağıtım merkezleri, kendi kamyon filosu ve tedarikçiyle veri paylaşımı sayesinde rafları rakiplerinden düşük maliyetle doldurdu. Zara\'yı ünlü yapan da dikiş değil zincir tasarımıdır: tasarımdan mağazaya haftalar içinde inen hızlı zinciri sayesinde modayı rakiplerinden önce rafa koyar. IKEA ise zincirin bir halkasını (montajı) müşteriye devrederek ve ürünü yassı paketleyerek dışa lojistik maliyetini kökten değiştirdi. Üç şirket de "her şeyde en iyi" değildir; her biri zincirinin belirli halkalarını rakiplerinden farklı kurmuştur. Porter\'ın dersi tam olarak buydu: rekabet avantajı şirketin bütününe dair bir slogan değil, tek tek faaliyetlerde verilmiş farklı kararların toplamıdır.' },
          { t: 'h2', text: 'Gerçek fayda' },
          { t: 'ul', items: [
            'Kayıp parayı adresli gösterir: "işler karlı değil" şikayeti, "para alım ve teslimat halkasında eriyor" gibi müdahale edilebilir bir teşhise dönüşür.',
            'Gerçek satış sebebini ortaya çıkarır: müşterinin seni neden seçtiği halka halka bakınca görünür ve pazarlama, tahmin edilen değil kanıtlanan güce yaslanır.',
            'Kısma ve büyütme kararlarını ayrıştırır: tasarruf makası müşterinin umursamadığı halkalara, yatırım da fark yaratan halkalara gider; körlemesine genel tasarruf yapılmaz.',
          ]},
        ],
      },
    ],
  },
  {
    slug: 'ge-mckinsey-matrisi',
    section: 'strateji-rekabet',
    title: 'GE-McKinsey Matrisi',
    question: 'Hangi işime yatırım yapmalı, hangisini idare etmeli, hangisinden çıkmalıyım?',
    summary: 'BCG matrisinin dokuz hücreli gelişmiş karşılığı: her iş kolunu sektör çekiciliği ve rekabet gücü eksenlerinde çok ölçütle puanlayıp yatırım yap, seçici davran veya çık kararlarından birine bağlar; 1970\'lerde GE için McKinsey geliştirdi.',
    tags: ['portföy analizi', 'yatırım kararı', 'iş kolları'],
    areas: ['Çok işli işletmeler', 'Yatırım önceliklendirme', 'Ürün portföyü', 'Bütçe dağıtımı'],
    viz: {
      kind: 'table',
      head: ['', 'Rekabet gücü: Yüksek', 'Rekabet gücü: Orta', 'Rekabet gücü: Düşük'],
      rows: [
        ['Sektör çekiciliği: Yüksek', 'Büyüt: öncelikli yatırım', 'Büyüt: güç kazanmaya yatır', 'Seçici: niş bul veya bekle'],
        ['Sektör çekiciliği: Orta', 'Büyüt: konumu koru ve geliştir', 'Seçici: kazananlara oyna', 'Hasat: yatırımsız kar topla'],
        ['Sektör çekiciliği: Düşük', 'Hasat: koru ama büyütme', 'Hasat: küçülterek kar al', 'Çık: sat veya kapat'],
      ],
      accentCol: 1,
      note: 'Sol üst köşeye yaklaştıkça yatır, sağ alt köşeye yaklaştıkça çık; köşegen boyunca seçici davran.',
    },
    pages: [
      {
        slug: 'kavram',
        title: 'Kavram',
        blocks: [
          { t: 'callout', kind: 'simple', title: 'Bir cümlede', text: 'Birden fazla işin veya ürünün varsa her birini iki soruyla puanla: bu işin oynadığı saha ne kadar cazip (sektör çekiciliği) ve ben o sahada ne kadar güçlüyüm (rekabet gücü); iki puanı dokuz hücreli tabloya koy ve para ile emeği sol üst köşedekilere yığ, sağ alt köşedekilerden çık.' },
          { t: 'callout', kind: 'ornek', title: 'Esnaftan örnek', text: 'Nalbur Faruk\'un dükkanında aslında dört ayrı iş var: hırdavat satışı, iş güvenliği malzemesi, anahtar çoğaltma ve son yıllarda eklediği züccaciye rafı. Hepsine aynı emeği veriyor ve para kazandıran ile kazandırmayan birbirine karışıyor. Her işi iki soruyla puanlıyor. İş güvenliği malzemesi: sektör cazip (yeni yönetmelikler, çevredeki şantiyeler, iyi kar payı) ve Faruk güçlü (belgeli tek satıcı o); sol üst köşe, yatırım buraya. Anahtar çoğaltma: sektör orta ama Faruk mahallede rakipsiz; koru ve idare et, yeni makine alma. Hırdavat: sektör orta, rekabet zor (internet fiyat kırıyor); seçici davran, sadece hızlı dönen kalemleri tut. Züccaciye: sektör cazip değil, Faruk da güçsüz (iki sokak ötede uzman züccaciyeci var); sağ alt köşe, rafı boşalt. Faruk züccaciye rafını iş güvenliği köşesine çeviriyor. Ciro cetveli değil, dokuz hücreli tablo karar verdi: her işe eşit emek değil, her işe hücresinin hak ettiği emek.' },
          { t: 'p', text: 'Matris 1970\'lerde doğdu: dünyanın en çeşitli işlere sahip şirketlerinden General Electric, onlarca iş kolunun hangisine yatırım yapacağına karar vermek için danışmanlık firması McKinsey ile birlikte bu dokuz hücreli tabloyu geliştirdi. Amaç, sınırlı parayı ve yönetim dikkatini hak eden işlere yığmak, hak etmeyenlerden düzenli biçimde çekilmekti. Model o günden beri çok işli her ölçekteki işletmenin portföy aracıdır; çünkü sorusu evrenseldir: hangi sepete yumurta koymalı?' },
          { t: 'h2', text: 'BCG matrisinden farkı' },
          { t: 'table', head: ['Özellik', 'BCG Matrisi', 'GE-McKinsey Matrisi'], rows: [
            ['Hücre sayısı', 'Dört (2x2)', 'Dokuz (3x3): orta kademe var'],
            ['Eksen ölçüsü', 'Tek ölçüt: pazar büyümesi ve pazar payı', 'Çok ölçüt: çekicilik ve güç, birden çok etkenin ağırlıklı puanı'],
            ['Gücü', 'Basit ve hızlı; akılda kalır', 'İnce ayar yapar; tek sayının yanıltmasını önler'],
            ['Zayıflığı', 'İki ölçüt her sektörü anlatmaz', 'Puanlama emek ister ve öznel kaçabilir'],
          ]},
          { t: 'p', text: 'Sitedeki BCG Matrisi sayfasıyla birlikte düşün: BCG dört hücresiyle hızlı bir ilk fotoğraf çeker ama iki kaba ölçüye yaslanır; pazar payı düşük diye "köpek" damgası yiyen bir iş, aslında az rakipli karlı bir nişte yaşıyor olabilir. GE-McKinsey bu kabalığı iki yolla düzeltir: eksenlere tek sayı yerine çok etkenli puan koyar (çekicilik = pazar büyüklüğü + büyüme + kar payı + rekabet yoğunluğu; güç = pazar payı + marka + maliyet üstünlüğü + dağıtım) ve iki kademe yerine üç kademe kullanır, böylece "ne parlak ne çöp" olan orta işler için seçici davranma bölgesi açılır.' },
          { t: 'p', text: 'Modelin çıktısı üç ana emirdir: büyüt (sol üst üç hücre: yatırım yap), seçici davran veya hasat et (köşegen: duruma göre az yatır ya da yatırımsız kar topla) ve çık (sağ alt üç hücre: sat, küçült, kapat). Hasat kavramı özellikle değerlidir: her iş büyütülmek zorunda değildir; bazı işlerin görevi, yeni yatırım almadan kasaya düzenli para taşımaktır.' },
        ],
      },
      {
        slug: 'uygulama',
        title: 'Nasıl Uygulanır',
        blocks: [
          { t: 'steps', items: [
            { title: 'İşlerini veya ürün gruplarını ayrıştır', text: 'Önce neyi puanlayacağını ayır: ayrı müşterisi, ayrı rakibi ve ayrı ekonomisi olan her faaliyet ayrı bir iştir. Faruk\'un dükkanı tek kapıdır ama dört iştir. Bu ayrımı yapmadan matris çizilemez.' },
            { title: 'Çekicilik ve güç ölçütlerini seç, ağırlık ver', text: 'Sektör çekiciliği için üç-beş etken seç (pazar büyüklüğü, büyüme hızı, kar payı, rekabet yoğunluğu, yasal rüzgar) ve önemine göre ağırlık ver. Rekabet gücü için de aynısını yap (pazar payı, marka, maliyet, ustalık, konum). Ölçütleri bir kez seç, bütün işlere aynısını uygula.' },
            { title: 'Her işi puanla ve dokuz hücreye yerleştir', text: 'Her işe her ölçütten 1-5 arası puan ver, ağırlıklı ortalamayı al ve düşük-orta-yüksek kademesine çevir. Puanı mümkünse sayıya dayandır (büyüme oranı, kar marjı, pay tahmini) ve birden fazla kişiyle ayrı ayrı puanlayıp farkları tartış; fark çıkan yer, en öğretici yerdir.' },
            { title: 'Hücrenin emrini uygula ve yılda bir tazele', text: 'Sol üst bölgeye yatırımı ve en iyi elemanları yığ; köşegende seçici davran ve hasat işlerinden gelen parayı büyüyenlere taşı; sağ alttan planlı biçimde çık. Yılda bir matrisi yeniden çiz: sektörler cazibesini, işler gücünü zamanla değiştirir.' },
          ]},
          { t: 'callout', kind: 'tip', title: 'İpucu', text: 'Matrise bir de balon boyutu ekle: her işi hücresine, cirosuyla orantılı bir daire olarak çiz. Cironun büyük kısmının sağ alt bölgede toplandığını görmek sarsıcı ama paha biçilmez bir uyarıdır: bugünün ekmek kapısı, yarının batağı olabilir ve geçiş planı bugünden ister.' },
          { t: 'callout', kind: 'warn', title: 'Dikkat', text: 'En büyük tehlike puanları hisle şişirmektir: herkes kendi kurduğu işi cazip ve güçlü görür, bu yüzden gözde işler hep sol üste tırmanır. Puanlara kanıt iste ve mümkünse puanlamayı işin sahibinden başkasına da yaptır. İkinci tehlike matrisin donmuş fotoğraf olmasıdır: bugün cazip olmayan sektör yarın yönetmelikle cazipleşebilir; matris karar verir ama takvimli takip ister.' },
        ],
      },
      {
        slug: 'vaka',
        title: 'Gerçek Vaka & Fayda',
        blocks: [
          { t: 'callout', kind: 'case', title: 'Vaka: 1970\'lerde GE - yüzlerce işi tek tabloya sığdırmak', text: 'Matrisin doğum hikayesi kurumsal tarihin belgeli vakalarındandır. 1970\'lerin başında General Electric, ampulden uçak motoruna, plastikten televizyona uzanan yüzlerce ürün hattına sahipti ve tepe yönetim şu soruyla boğuşuyordu: sınırlı sermaye bu kadar iş arasında nasıl dağıtılmalı? GE o yıllarda işlerini stratejik iş birimleri halinde yeniden örgütleyen öncü şirketti; ama birimleri karşılaştıracak bir cetvel gerekiyordu. Boston Consulting Group\'un büyüme-pay matrisi ortadaydı, fakat GE yönetimi iki ölçütlü bu tablonun kendi karmaşık portföyü için fazla kaba olduğu görüşündeydi: pazar payı ve büyüme, bir uçak motoru işinin kaderini anlatmaya yetmiyordu. GE, danışmanı McKinsey ile birlikte çok ölçütlü dokuz hücreli ekranı geliştirdi: sektör çekiciliği ve rekabet gücü, her biri birden çok etkenin ağırlıklı puanından oluşacaktı. Matris GE\'de iş birimlerinin yatırım önceliğini belirlemede kullanıldı ve kısa sürede McKinsey aracılığıyla dünyaya yayıldı; bugün strateji ders kitaplarında BCG matrisiyle yan yana, portföy planlamasının iki klasik aracından biri olarak okutulur. Hikayenin dersi araç kadar ihtiyaçtadır: portföy büyüyüp karmaşıklaştıkça, karar cetveli de kabadan inceye evrilmek zorunda kaldı.' },
          { t: 'h2', text: 'Gerçek fayda' },
          { t: 'ul', items: [
            'Eşit emek yanılgısını bitirir: her işe aynı ilgi yerine, her iş hücresinin hak ettiği ilgiyi alır; para ve dikkat kazanma ihtimalinin yüksek olduğu yere akar.',
            'Orta bölgeye dil kazandırır: ne yıldız ne çöp olan işler için "seçici davran" ve "hasat et" gibi ara kararlar tanımlanır; her şey büyüt-kapat ikilemine sıkışmaz.',
            'Duygusal işlerden çıkışı kolaylaştırır: kurucunun gözdesi olduğu için yaşatılan zarar eden iş, dokuz hücrede yerini görünce tartışma kişisellikten puana taşınır.',
          ]},
        ],
      },
    ],
  },
  {
    slug: 'herzberg-cift-faktor',
    section: 'insan-toplum',
    title: 'Herzberg Çift Faktör Kuramı',
    question: 'Çalışanı mutsuz eden şeyleri düzeltince neden hala isteksiz?',
    summary: 'Frederick Herzberg\'in 1959 araştırması: işte memnuniyetsizliği önleyen etkenler (hijyen: maaş, koşullar, ilişkiler) ile gerçek isteği doğuran etkenler (motivatörler: başarı, takdir, işin kendisi, sorumluluk, gelişme) iki ayrı listedir; biri diğerinin yerini tutmaz.',
    tags: ['motivasyon', 'iş tatmini', 'yönetim'],
    areas: ['Ekip yönetimi', 'İnsan kaynakları', 'Küçük işletme', 'Kendi işini tanıma'],
    viz: {
      kind: 'bars',
      categories: ['Maaş ve yan haklar', 'Çalışma koşulları', 'Yönetici ilişkisi', 'Başarı hissi', 'Takdir edilme', 'Sorumluluk ve gelişme'],
      series: [
        { name: 'Eksikse memnuniyetsizlik yaratma gücü', values: [9, 8, 8, 3, 4, 3] },
        { name: 'Varsa gerçek istek yaratma gücü', values: [2, 2, 3, 9, 8, 9] },
      ],
      yLabel: 'Etki gücü (kaba ölçek)',
      note: 'İlk üçü hijyen: yokluğu zehirler, varlığı coşturmaz. Son üçü motivatör: istek buradan doğar.',
    },
    pages: [
      {
        slug: 'kavram',
        title: 'Kavram',
        blocks: [
          { t: 'callout', kind: 'simple', title: 'Bir cümlede', text: 'İş yerinde iki ayrı liste vardır: hijyen faktörleri (maaş, koşullar, adalet, ilişkiler) eksikse insanı zehirler ama tam olsa bile coşturmaz; gerçek istek ancak motivatörlerden (başarma, takdir, işin kendisi, sorumluluk, ilerleme) doğar; bu yüzden mutsuzluğu gidermek ile istek yaratmak iki ayrı iştir.' },
          { t: 'callout', kind: 'ornek', title: 'Atölyeden örnek', text: 'Torna atölyesi sahibi Nuri, ustası Ferhat\'ın son aylarda sönükleştiğini görüyor. Zam yapıyor: iki hafta hava düzeliyor, sonra aynı sönüklük. Kışın üşümesin diye ısıtıcı alıyor, servis ayarlıyor: şikayet bitiyor ama isteksizlik bitmiyor. Nuri şaşkın: "her istediğini yaptım, hala keyifsiz." Bir gün çay molasında Ferhat baklayı çıkarıyor: "Nuri Usta, on beş yıldır aynı flanşı çekiyorum. Çırağa bir şey öğretmem yasak, yeni makineye dokunmam yasak, müşteriyle konuşmam yasak. Maaşa küsmedim, işe küstüm." Nuri o hafta iki şey yapıyor: yeni gelen CNC tezgahının sorumluluğunu Ferhat\'a veriyor ve çırakların eğitimini ona bağlıyor. Ne zam var ne ısıtıcı; ama Ferhat bir ay sonra mesaiye kalıp tezgahın kataloğunu söküyor. Zam ve ısıtıcı hijyendi: yokluğu küstürürdü, varlığı coşturmadı. Sorumluluk ve öğretme motivatördü: istek oradan geldi.' },
          { t: 'p', text: 'Kuramı Amerikalı psikolog Frederick Herzberg, 1959\'da yayımlanan araştırmasıyla ortaya koydu. Herzberg ve ekibi, Pittsburgh bölgesinde iki yüz civarında mühendis ve muhasebeciyle görüştü ve basit ama zekice bir soru sordu: işinizde olağanüstü iyi hissettiğiniz bir anı ve olağanüstü kötü hissettiğiniz bir anı anlatın. Beklenti, aynı etkenlerin iki listede ters yönlü görünmesiydi: maaş iyiyse mutlu, kötüyse mutsuz. Sonuç öyle çıkmadı: kötü anıların kaynağı ağırlıkla şirket politikası, yönetim, maaş ve koşullar gibi işin çevresiydi; iyi anıların kaynağı ise ağırlıkla başarı, takdir, işin kendisi, sorumluluk ve ilerleme gibi işin içeriğiydi. İki ayrı soru, iki ayrı liste getirmişti.' },
          { t: 'h2', text: 'İki liste' },
          { t: 'table', head: ['Özellik', 'Hijyen faktörleri', 'Motivatörler'], rows: [
            ['Nelerdir?', 'Maaş, çalışma koşulları, şirket kuralları, yönetici tavrı, iş güvencesi, arkadaş ilişkileri', 'Başarma hissi, takdir, işin kendisinin ilginçliği, sorumluluk, ilerleme ve gelişme'],
            ['Nereye aittir?', 'İşin çevresine (işin etrafındaki şartlar)', 'İşin içeriğine (işin bizzat kendisi)'],
            ['Eksikse ne olur?', 'Memnuniyetsizlik, şikayet, küskünlük', 'İsteksizlik, sönüklük, "idare ediyorum" hali'],
            ['Tamsa ne olur?', 'Şikayet biter; ama istek doğmaz', 'Gerçek istek, gönüllü çaba, işe bağlanma'],
          ]},
          { t: 'p', text: 'Herzberg\'in en çarpıcı iddiası şudur: memnuniyetsizliğin zıttı memnuniyet değildir; memnuniyetsizliğin zıttı, memnuniyetsizliğin yokluğudur. Hijyeni düzeltmek insanı sıfır noktasına getirir, artıya geçirmez. Adı da buradan gelir: temizlik hastalığı önler ama sağlık üretmez; sağlık için beslenme ve hareket gerekir. Bu model, sitedeki Maslow İhtiyaçlar Piramidi sayfasının iş hayatındaki karşılığı gibidir: Maslow\'un alt basamakları (barınma, güvenlik) kabaca hijyene, üst basamakları (saygınlık, kendini gerçekleştirme) kabaca motivatörlere denk düşer; Maslow piramidiyle birlikte okumak iki modeli de güçlendirir.' },
          { t: 'p', text: 'Dürüst bir not: kuram sonraki yıllarda eleştirildi; yöntemi (insanlar iyi anıları kendine, kötü anıları çevreye yakıştırma eğilimindedir) ve maaşın her zaman hijyen sayılıp sayılamayacağı tartışıldı. Ama temel içgörüsü onlarca yıldır sınavdan geçiyor: sadece zam ve koşul düzelterek istekli çalışan üretilemez; istek, işin kendisinin insana büyüme alanı vermesinden doğar.' },
        ],
      },
      {
        slug: 'uygulama',
        title: 'Nasıl Uygulanır',
        blocks: [
          { t: 'steps', items: [
            { title: 'Şikayet mi, isteksizlik mi: teşhisi ayır', text: 'Ekipteki sorunun türünü belirle. Şikayet ve söylenme varsa (maaş, adalet, koşullar) sorun hijyendedir. Şikayet yok ama sönüklük ve "idare ediyorum" hali varsa sorun motivatördedir. İki hastalığın ilacı farklıdır; yanlış ilaç para ve emek yakar.' },
            { title: 'Önce hijyeni sıfıra getir', text: 'Motivatöre geçmeden önce zehirleri temizle: piyasanın belirgin altında maaş, adaletsiz görev dağılımı, kaba yönetici, güvensiz ortam varken sorumluluk vermek alay gibi görünür. Hijyende hedef mükemmellik değil, şikayeti bitiren makul seviyedir.' },
            { title: 'Her kişi için bir motivatör tasarla', text: 'Kişi kişi sor: bu insanın işinde başarıyı hissedeceği, takdir göreceği, sorumluluk alacağı ve gelişeceği bir alan var mı? Yoksa üret: bir tezgahın tam sahipliği, bir çırağın eğitimi, bir müşterinin baştan sona sorumluluğu, yeni bir beceriyi öğrenme fırsatı. Herzberg buna işi zenginleştirme der: işi bölmek değil, büyütmek.' },
            { title: 'Takdiri somutlaştır, gelişmeyi görünür yap', text: 'Takdir, yılda bir "helal olsun"dan ibaret kalmasın: hangi işin neden iyi olduğunu, işi yapana ve mümkünse herkesin önünde söyle. Gelişmeyi de görünür kıl: kişinin geçen yıla göre neyi yapabilir hale geldiğini birlikte listele. İnsan, ilerlediğini gördüğü işten kolay soğumaz.' },
          ]},
          { t: 'callout', kind: 'tip', title: 'İpucu', text: 'Kendi işine de uygula: işinden soğuduğunu hissediyorsan iki liste yap. Sorun hijyen listesindeyse (gelir, koşullar, ilişkiler) pazarlık ve düzenleme ile çözülür; motivatör listesindeyse (öğrenmiyorum, büyümüyorum, işim anlamsız) hiçbir zam seni geri getirmez, işin içeriğini değiştirmen gerekir. Yanlış listeye bakan insan, zamla düzeleceğini sanıp hayal kırıklığını büyütür.' },
          { t: 'callout', kind: 'warn', title: 'Dikkat', text: 'İki tuzak vardır. Birincisi zammı motivatör sanmak: zam şikayeti susturur ve etkisi hızla alışkanlığa dönüşür; araştırmalar da günlük deneyim de aynı şeyi söyler, para küstürmeyi önler ama sevdirmeyi tek başına yapamaz. İkincisi hijyeni atlayıp motivatöre koşmak: maaşı gecikmiş ustaya sorumluluk hediye etmek, aç insana kitap vermek gibidir; sıra önemlidir, önce zehiri temizle, sonra istek inşa et.' },
        ],
      },
      {
        slug: 'vaka',
        title: 'Gerçek Vaka & Fayda',
        blocks: [
          { t: 'callout', kind: 'case', title: 'Vaka: 1959 araştırması ve rekor kıran 1968 makalesi', text: 'Kuramın iki belgeli kilometre taşı vardır. Birincisi kaynak araştırma: Herzberg, Mausner ve Snyderman\'ın 1959\'da yayımladığı The Motivation to Work kitabı, Pittsburgh\'da mühendis ve muhasebecilerle yapılan kritik olay görüşmelerine dayanır; iyi ve kötü iş anılarının kaynaklarının iki ayrı kümede toplandığını bu araştırma gösterdi. İkincisi, kuramı dünyaya yayan makale: Herzberg\'in 1968\'de Harvard Business Review\'da çıkan "One More Time: How Do You Motivate Employees?" yazısı, derginin tarihinin en çok basılıp dağıtılan makalelerinden biri oldu; HBR makaleyi sonraki onyıllarda defalarca yeniden yayımladı ve ayrı baskıları milyonu aşan sayıda satıldı. Makalenin ünlü girişi, yöneticilerin motivasyon sanılan şeyine sert bir ayna tutar: Herzberg, ödül ve ceza ile insanı hareket ettirmeye KITA adını verir (kibarca çevirisiyle "insanı tekmeyle itmek") ve bunun hareket ürettiğini ama motivasyon üretmediğini söyler; tekme yiyen yürür, isteyen koşar. Makalenin önerdiği çözüm olan iş zenginleştirme, 1970\'lerden itibaren AT&T gibi büyük şirketlerde uygulanan programlara ilham verdi ve bugünkü "anlamlı iş", "çalışan bağlılığı" tartışmalarının temelinde hala Herzberg\'in iki listesi durur.' },
          { t: 'h2', text: 'Gerçek fayda' },
          { t: 'ul', items: [
            'Yanlış ilacı önler: şikayete motivatör, isteksizliğe zam vermek gibi pahalı ve etkisiz hamleler biter; teşhis doğru listeye konur.',
            'Zam beklentisi sarmalını kırar: her sönüklüğe zamla cevap veren işletme, hem maliyeti büyütür hem sorunu çözemez; motivatör tasarımı daha ucuz ve daha kalıcıdır.',
            'İyi elemanı tutar: usta çoğu zaman beş yüz lira için değil, on beş yıl aynı flanşı çektiği için gider; sorumluluk ve gelişme alanı açan işletme, para savaşına girmeden insanını tutar.',
          ]},
        ],
      },
    ],
  },
  {
    slug: 'tuckman-modeli',
    section: 'ekip-liderlik',
    title: 'Tuckman Modeli (Ekip Gelişim Evreleri)',
    question: 'Ekibim neden önce iyi başlayıp sonra kavgaya tutuştu; bu düzelir mi?',
    summary: 'Bruce Tuckman\'ın 1965\'te elliye yakın grup araştırmasını tarayarak çıkardığı model: her ekip kurulma (forming), fırtına (storming), düzen (norming) ve performans (performing) evrelerinden geçer; kavga dönemi arıza değil, yolun doğal virajıdır.',
    tags: ['ekip gelişimi', 'çatışma', 'liderlik'],
    areas: ['Yeni kurulan ekipler', 'Proje ekipleri', 'Ortaklıklar', 'Spor ve gönüllü gruplar'],
    viz: {
      kind: 'curve',
      xLabel: 'Zaman (hafta)',
      yLabel: 'Ekip performansı',
      series: [
        { name: 'Ekibin performans yolculuğu', data: [[0, 35], [2, 40], [4, 30], [6, 20], [8, 25], [10, 45], [12, 60], [14, 75], [16, 85], [18, 90]] },
      ],
      marks: [
        { x: 1, label: 'Kurulma: nazik ve temkinli' },
        { x: 6, label: 'Fırtına: dip nokta' },
        { x: 11, label: 'Düzen: kurallar oturuyor' },
        { x: 16, label: 'Performans' },
      ],
      note: 'Dip noktası çöküş değil viraj: fırtınayı yönetilen ekip yükselir, bastıran ekip dipte sıkışır.',
    },
    pages: [
      {
        slug: 'kavram',
        title: 'Kavram',
        blocks: [
          { t: 'callout', kind: 'simple', title: 'Bir cümlede', text: 'Her yeni ekip aynı yoldan geçer: önce nazik bir tanışma (kurulma), sonra rollerin ve fikirlerin çarpıştığı bir kavga dönemi (fırtına), sonra kuralların oturduğu bir düzen ve en sonunda gerçek performans; fırtına arıza değil geçittir, bastırılırsa ekip dipte sıkışır, yönetilirse yol açılır.' },
          { t: 'callout', kind: 'ornek', title: 'Şantiyeden örnek', text: 'Müteahhit Suat, büyük bir site işi için üç ayrı ustadan ekip kuruyor: kalıpçı İlyas, demirci Baki, betoncu ekibiyle Şevket. İlk hafta bal gibi: herkes kibar, kimse kimsenin işine karışmıyor. Üçüncü hafta kıyamet kopuyor: İlyas "demir ekibi kalıbımı bekletiyor" diyor, Baki "projede hata var, ben düzeltiyorum, bir de azar işitiyorum" diyor, Şevket "iki taraf da gün veremiyor, mikserim kapıda bekliyor" diye köpürüyor. Suat\'ın eli tabancaya gidiyor: "dağıtayım mı bu ekibi?" Eski kalfası durduruyor: "Suat Bey, her şantiyede bu kavga çıkar; kavga çıkmayan şantiyede kimse birbirine gerçeği söylemiyordur. Dağıtma, masaya oturt." Masada üç kural doğuyor: her akşam beşte on dakikalık gün sonu sözü, kalıp-demir-beton sırası için ortak takvim, itirazlar iş başında değil masada. İki hafta sonra aynı üç usta saat gibi çalışıyor; üçüncü ayda blok, planın önünde bitiyor. Ekip değişmedi; ekip fırtınadan geçti.' },
          { t: 'p', text: 'Modeli 1965\'te psikolog Bruce Tuckman yayımladı. Tuckman, o güne kadar yapılmış elli civarında küçük grup araştırmasını (terapi grupları, laboratuvar grupları, iş grupları) taradı ve hepsinde tekrarlanan bir sıra gördü: gruplar önce çekingen bir yoklaşma, sonra çatışma, sonra kural koyma, en sonunda iş üretme evresinden geçiyordu. Bu dört evreye akılda kalan İngilizce adlarını verdi: forming, storming, norming, performing. 1977\'de Mary Ann Jensen ile modele beşinci evreyi ekledi: adjourning, yani dağılma; işi biten ekibin vedalaşması da yönetilmesi gereken bir evredir.' },
          { t: 'h2', text: 'Beş evre' },
          { t: 'table', head: ['Evre', 'Ne olur?', 'Liderin işi'], rows: [
            ['Kurulma (Forming)', 'Herkes nazik ve temkinli; roller belirsiz, gerçek fikirler saklı', 'Yön göster: amaç, roller ve ilk kurallar net olsun'],
            ['Fırtına (Storming)', 'Fikirler ve egolar çarpışır; verim düşer, ayrılmalar buradan çıkar', 'Kavgayı bastırma, masaya taşı; kişiyi değil işi tartıştır'],
            ['Düzen (Norming)', 'Ortak kurallar ve alışkanlıklar oturur; "biz" dili başlar', 'Kuralları yazılı hale getir, iyi örnekleri öv'],
            ['Performans (Performing)', 'Ekip az talimatla, kendi kendini yöneterek üretir', 'Yoldan çekil; engel temizle, işi delege et'],
            ['Dağılma (Adjourning)', 'İş biter, ekip çözülür; buruk bir belirsizlik olabilir', 'Kapanışı yap: değerlendir, teşekkür et, dersleri kaydet'],
          ]},
          { t: 'p', text: 'Modelin en değerli cümlesi fırtına hakkındadır: çatışma, ekibin bozulduğunun değil, gerçek fikirlerin nihayet ortaya çıktığının işaretidir. Kurulma evresindeki nezaket sahte bir uyumdur; kimse riskli bir söz söylemez. Fırtınası hiç kopmayan ekipten şüphelen: ya kimse gerçeği söylemiyordur ya da herkes çoktan vazgeçmiştir. Tehlike kavganın kendisi değil, kavganın kişiselleşmesi ve süresiz uzamasıdır.' },
          { t: 'p', text: 'Bu model, sitedeki Drexler/Sibbet Ekip Performans Modeli sayfasının klasik karşılığıdır ve ikisi birbirini tamamlar: Tuckman ekibin zaman içinde hangi evrelerden geçtiğini anlatır (takvim gibi okunur), Drexler/Sibbet ise her aşamada hangi sorunun cevaplanması gerektiğini anlatır (yol haritası gibi okunur). Fırtınada sıkışan bir ekip için Drexler/Sibbet\'in ilk basamak soruları (neden buradayım, kiminle çalışıyorum, ne yapacağız) çoğu zaman çıkış kapısıdır. İki sayfayı birlikte okumak ikisini de güçlendirir.' },
        ],
      },
      {
        slug: 'uygulama',
        title: 'Nasıl Uygulanır',
        blocks: [
          { t: 'steps', items: [
            { title: 'Ekibinin evresini teşhis et', text: 'Belirtilere bak: aşırı nezaket ve sessizlik kurulmadır; artan tartışma, gecikme ve şikayet fırtınadır; kendiliğinden oluşan alışkanlıklar düzendir; az talimatla akan iş performanstır. Yanlış evre teşhisi yanlış liderlik doğurur: performans evresindeki ekibe kurulma disiplini boğar, fırtınadaki ekibe serbestlik yangına benzin olur.' },
            { title: 'Kurulmada belirsizliği azalt', text: 'İlk günlerde en büyük düşman belirsizliktir. Amacı, rolleri, karar yetkisini ve ilk kuralları açıkça konuş; "zamanla oturur" deme. Kurulmada konuşulmayan her belirsizlik, fırtınada faiziyle kavga olarak geri döner.' },
            { title: 'Fırtınayı bastırma, yapılandır', text: 'Çatışma çıkınca iki hatadan kaçın: bastırmak ("kesin sesinizi, işinize bakın") ve panikle ekibi dağıtmak. Bunun yerine kavgaya kanal aç: düzenli ve kısa bir toplantıda itirazlar masaya gelsin, kişi değil iş tartışılsın, her tartışma bir kuralla veya kararla bitsin. Fırtınanın çıktısı, düzen evresinin kurallarıdır.' },
            { title: 'Düzeni yaz, performansta çekil, kapanışı yap', text: 'Oturan iyi alışkanlıkları yazılı kurala çevir ki yeni gelenle kaybolmasın. Performans evresinde liderliğini geri çek: engel temizle, işe karışma. İş bitince dağılmayı atlamadan kapanış yap: ne iyi gitti, ne öğrendik, kime teşekkür borcumuz var. Bir uyarı: ekibe yeni üye girince veya amaç değişince model başa sarar; kısa bir kurulma ve fırtına yeniden yaşanır, şaşırma.' },
          ]},
          { t: 'callout', kind: 'tip', title: 'İpucu', text: 'Modeli ekibinle paylaş: fırtına evresindeyken ekibe "şu an klasik fırtına evresindeyiz, her ekip buradan geçer, çıkışı da bellidir" demek, gerginliği kişisel olmaktan çıkarır ve herkese aynı haritayı verir. Adı konan fırtına, yarı yarıya küçülür.' },
          { t: 'callout', kind: 'warn', title: 'Dikkat', text: 'Modeli takvim sanma: evreler her ekipte aynı hızda ve aynı sırayla tıkır tıkır ilerlemez; bazı ekipler fırtınada yıllarca sıkışır, bazıları düzenden fırtınaya geri düşer. Model bir garanti değil pusuladır. İkinci uyarı: fırtınayı normalleştirmek, zorbalığı normalleştirmek değildir; fikir çatışması evrenin doğasıdır ama hakaret ve saygısızlık hiçbir evrenin doğası değildir, ilk gün kesilir.' },
        ],
      },
      {
        slug: 'vaka',
        title: 'Gerçek Vaka & Fayda',
        blocks: [
          { t: 'callout', kind: 'case', title: 'Vaka: 1965 taraması ve yarım asırlık kullanım', text: 'Modelin doğuşu belgelidir: Bruce Tuckman, ABD Deniz Kuvvetleri\'nin araştırma biriminde çalışırken küçük gruplar üzerine yayımlanmış elli civarında araştırmayı taradı ve 1965\'te Psychological Bulletin dergisinde "Developmental Sequence in Small Groups" makalesini yayımladı. Makalenin gücü, tek bir deneyden değil, birbirinden bağımsız onlarca çalışmada aynı sıranın tekrarlanmasından geliyordu; forming-storming-norming-performing kafiyesi de modelin akılda kalmasını sağladı. 1977\'de Tuckman ve Mary Ann Jensen, sonraki araştırmaları gözden geçirip beşinci evre olarak dağılmayı (adjourning) eklediler. Model o günden beri kurumsal dünyanın en yaygın ekip dilidir: proje yönetimi standartlarına giren ekip gelişim anlatıları, kurumların liderlik eğitimleri ve çevik yazılım ekiplerinin koçluk pratikleri yeni kurulan ve üyesi değişen her ekipte bu evreleri referans alır; NASA\'dan hastanelere kadar ekip eğitimi veren kurumların ders içeriklerinde model standart konudur. Tuckman\'ın kendisi de modelin bir özet çerçeve olduğunu, katı bir yasa olmadığını söylemiştir; sonraki araştırmalar evrelerin her grupta doğrusal ilerlemediğini gösterdi ama modelin asıl mirası yerinde duruyor: çatışma evresinin normal ve geçici olduğunu bilmek, sayısız ekibi erken dağılmaktan kurtardı.' },
          { t: 'h2', text: 'Gerçek fayda' },
          { t: 'ul', items: [
            'Erken pes etmeyi önler: kavga dönemini "bu ekip olmadı" diye okuyup dağıtmak yerine, "fırtına evresindeyiz, yönetelim" diye okuyan lider, iyi ekipleri virajda kaybetmez.',
            'Gerginliği kişisellikten çıkarır: evrenin adı konunca tartışmalar "sen-ben" kavgası olmaktan çıkıp yolun doğal parçası olarak görülür; ekip aynı haritaya bakar.',
            'Liderliğe vites kazandırır: her evrenin farklı liderlik istediğini bilen yönetici, kurulmada yön veren, fırtınada hakem, düzende yazıcı, performansta seyirci olur; tek tip liderlik her evrede kaza yapar.',
          ]},
        ],
      },
    ],
  },
  {
    slug: 'mcgregor-x-y',
    section: 'ekip-liderlik',
    title: 'McGregor X ve Y Kuramı',
    question: 'İnsanları denetimle mi, güvenle mi yönetmeliyim?',
    summary: 'Douglas McGregor\'un 1960 tarihli The Human Side of Enterprise kitabındaki ayrım: X kuramı insanın tembel olduğunu varsayıp denetimle yönetir, Y kuramı insanın gelişmek istediğini varsayıp alan açar; ve her iki varsayım da kendini doğrulayan kehanet gibi çalışır.',
    tags: ['liderlik', 'insan varsayımı', 'yönetim tarzı'],
    areas: ['Ekip yönetimi', 'İşletme kültürü', 'Usta-çırak ilişkisi', 'Kendi yönetim tarzını tanıma'],
    viz: {
      kind: 'table',
      head: ['Soru', 'X kuramı varsayımı', 'Y kuramı varsayımı'],
      rows: [
        ['İnsan çalışmayı sever mi?', 'Sevmez; kaytarmak doğasıdır', 'Şartlar uygunsa çalışmak oyun kadar doğaldır'],
        ['Nasıl çalıştırılır?', 'Denetim, talimat ve ceza korkusuyla', 'Anlamlı hedef, sorumluluk ve güvenle'],
        ['Sorumluluk ister mi?', 'Kaçar; yönetilmeyi tercih eder', 'Uygun ortamda arar ve üstlenir'],
        ['Yaratıcılık kimde?', 'Az kişide; çoğunluk uygulayıcıdır', 'Geniş kitlede vardır ama çoğu işte kullanılmaz'],
        ['Yönetimin sonucu', 'Denetlenen insan kaytarır, varsayım doğrulanır', 'Güvenilen insan sahiplenir, varsayım doğrulanır'],
      ],
      accentCol: 2,
      note: 'İki varsayım da kendi kanıtını üretir: insanlar çoğu zaman onlara nasıl davranıldıysa öyle davranır.',
    },
    pages: [
      {
        slug: 'kavram',
        title: 'Kavram',
        blocks: [
          { t: 'callout', kind: 'simple', title: 'Bir cümlede', text: 'Yönetim tarzın, insan hakkındaki gizli varsayımının aynasıdır: insanı tembel sayarsan (X) denetler, denetlediğin insan sadece denetlendiği kadar çalışır ve haklı çıkarsın; insanı gelişmek isteyen sayarsan (Y) alan açarsın, alan bulan insan sahiplenir ve yine haklı çıkarsın; hangi kehaneti kuracağını sen seçersin.' },
          { t: 'callout', kind: 'ornek', title: 'Esnaftan örnek', text: 'Yan yana iki oto tamircisi. Birinci dükkanda Rasim Usta X kuralıyla yaşıyor: "bu çıraklar göz açık, başında durmazsan yatar." Her işi tek tek tarif ediyor, her vidayı kontrol ediyor, molaları kronometreyle tutuyor. Çıraklar da tam beklediği gibi: Rasim kapıdan çıkınca telefona sarılıyor, sorulmayan hiçbir işi yapmıyorlar, akıllarına gelen fikri söylemiyorlar çünkü "sana mı kaldı" azarı hazır. Rasim herkese anlatıyor: "demedim mi, başında durmazsan çalışmazlar." İkinci dükkanda Cemile Usta Y ile yaşıyor: her çırağa bir aracın tam sorumluluğunu veriyor, "işi bitir, nasıl bitireceğin senin ustalığın" diyor, hatayı ceza değil ders sayıyor. Onun çırakları kapanıştan sonra kalıp yarının işini hazırlıyor, biri kendi kendine yağ değişim listesini duvara asmış. Cemile de herkese anlatıyor: "güvenirsen adam olurlar." İkisi de haklı çıktı; çünkü ikisi de kendi kehanetini kurdu. Çıraklar farklı doğmadı, farklı yönetildi.' },
          { t: 'p', text: 'Kuramı MIT\'de yönetim profesörü olan Douglas McGregor, 1960\'ta yayımladığı The Human Side of Enterprise (İşletmenin İnsan Yönü) kitabında ortaya koydu. McGregor\'un asıl vuruşu şudur: her yöneticinin, farkında olsun olmasın, insan doğası hakkında bir teorisi vardır ve bütün yönetim davranışları (kural, denetim, prim, mesai takibi) bu görünmez teoriden türer. X ve Y, iki yönetim tekniği değil, iki insan varsayımıdır; teknikler sonuçtur.' },
          { t: 'h2', text: 'İki kuramın özü' },
          { t: 'table', head: ['Boyut', 'X kuramı', 'Y kuramı'], rows: [
            ['Temel varsayım', 'İnsan işten kaçar; zorlanmalı ve denetlenmelidir', 'İnsan uygun şartlarda çalışmayı doğal bulur, gelişmek ister'],
            ['Tipik araçlar', 'Sıkı talimat, mesai takibi, ceza-ödül sopası, onay zinciri', 'Hedefle yönetim, sorumluluk devri, katılımlı karar, gelişim alanı'],
            ['İnsana etkisi', 'Pasifleşme, gizli direniş, "söyleneni yapar, fazlasını yapmaz"', 'Sahiplenme, gönüllü çaba, fikir üretme'],
            ['Kendini doğrulaması', 'Denetlenen insan pasifleşir; yönetici "haklıydım" der', 'Güvenilen insan büyür; yönetici yine "haklıydım" der'],
          ]},
          { t: 'p', text: 'Modelin en derin içgörüsü kendini doğrulayan kehanettir. X yöneticisi insanları tembel bulduğu için denetler; denetlenen insan inisiyatifi bırakır, sadece istenen kadarını yapar; yönetici bu pasifliği görüp varsayımını kanıtlanmış sayar ve denetimi artırır. Döngü kapanır. Y yöneticisinin döngüsü de aynı mekanizmayla ters yönde döner. Bu yüzden "insanlar aslında nasıldır?" sorusunun cevabını kendi iş yerinde arayan yönetici yanılır: gördüğü şey insan doğası değil, kendi yönetiminin yankısıdır.' },
          { t: 'p', text: 'McGregor, Y kuramını kurarken Maslow\'un ihtiyaçlar basamağına açıkça yaslanır; sitedeki Maslow İhtiyaçlar Piramidi sayfasıyla birlikte oku: karnı ve güvencesi doyan insanın saygınlık ve kendini gerçekleştirme araması, Y kuramının bilimsel zeminidir. Herzberg Çift Faktör sayfası da aynı ailedendir: X yönetimi hijyenle (ücret, denetim, ceza) sınırlı kalır; Y yönetimi motivatörlerin (sorumluluk, gelişme) kapısını açar. Bir uyarı: McGregor Y\'yi başıboşluk olarak tarif etmedi; Y, hedefsizlik değil, net hedef ve gerçek sorumluluk demektir. Y\'nin gevşeklik sanılması, kuramın en yaygın yanlış anlaşılmasıdır.' },
        ],
      },
      {
        slug: 'uygulama',
        title: 'Nasıl Uygulanır',
        blocks: [
          { t: 'steps', items: [
            { title: 'Kendi gizli varsayımını yakala', text: 'Kendine dürüst sorular sor: iznin olmadan ekibin karar alabilir mi? Dükkandan bir gün ayrılınca işlerin duracağını mı düşünüyorsun? Hata olunca ilk tepkin suçluyu bulmak mı, sebebi bulmak mı? Cevapların, ağzınla söylediğin değil elinle uyguladığın kuramı gösterir.' },
            { title: 'Bir kişiyle, bir alanda Y denemesi yap', text: 'Bütün yönetimini bir günde değiştirme. Bir kişiyi seç, ona sınırları net bir sorumluluk alanı ver: "bu müşteri baştan sona senin; sonucu konuşuruz, yöntemine karışmam." Beklentiyi, yetkiyi ve ne zaman sana danışacağını açıkça tarif et. Y, belirsizlik değil, net sınırlı güvendir.' },
            { title: 'Denetimi sonuç üzerinden kur, süreç üzerinden değil', text: 'Kontrolü bırakma, yerini değiştir: adım adım nasıl yaptığını denetleme, ne çıkardığını birlikte değerlendir. Haftalık kısa bir sonuç konuşması, gün boyu tepesinde durmaktan hem daha az yorucu hem daha çok öğreticidir. Hata çıktığında dersi konuş, kişiliği değil.' },
            { title: 'Kehanet döngüsünü izle ve genişlet', text: 'Birkaç ay sonra dürüstçe bak: sorumluluk verdiğin kişi sahiplendi mi, fikir üretmeye başladı mı? Çoğu insan güvene sahiplenmeyle cevap verir; verdiyse alanı genişlet ve ikinci kişiye geç. Cevap vermeyen az sayıda kişi için de kör güven gösterme: Y kuramı herkese aynı dozda güven değil, güveni hak edene alan açmaktır.' },
          ]},
          { t: 'callout', kind: 'tip', title: 'İpucu', text: 'Kendine şu testi uygula: bir haftalığına dükkandan ayrılsan ne olur? "Her şey durur" diyorsan bu, ekibinin değil yönetiminin karnesidir: yıllarca X ile yönetilen ekip, karar kasını hiç çalıştıramamıştır. Y\'ye geçişin ilk meyvesi, senin tatile çıkabilmendir.' },
          { t: 'callout', kind: 'warn', title: 'Dikkat', text: 'İki tuzak vardır. Birincisi Y\'yi başıboşluk sanmak: hedefsiz, sınırsız, hesapsız serbestlik Y değil ihmalkarlıktır; McGregor\'un Y\'si net hedef, gerçek sorumluluk ve dürüst değerlendirme ister. İkincisi bir gecede tam Y\'ye dönmek: yıllarca X ile yönetilmiş bir ekibe aniden "artık her şey serbest" demek, ekipte güven değil şaşkınlık ve tedirginlik yaratır; güven kası da her kas gibi kademeli yüklenmeyle büyür.' },
        ],
      },
      {
        slug: 'vaka',
        title: 'Gerçek Vaka & Fayda',
        blocks: [
          { t: 'callout', kind: 'case', title: 'Vaka: 1960 kitabı ve Y kuramının fabrika denemeleri', text: 'Kuramın kaynağı bellidir: McGregor\'un 1960\'ta yayımlanan The Human Side of Enterprise kitabı, yönetim düşüncesinin en etkili eserlerinden biri sayılır ve yönetim tarihçilerinin klasikler listesinde hep üst sıralardadır. Kitap, dönemin hakim yönetim anlayışına (zaman ölçümü, sıkı denetim, itaat zinciri) karşı, insanın Maslow\'un tarif ettiği üst ihtiyaçlarını işte de aradığını savundu. Y kuramının sahada denenmesi de belgelidir: McGregor bizzat Procter and Gamble\'a danışmanlık yaptı ve 1960\'larda Georgia\'nın Augusta şehrinde kurulan deterjan fabrikası, Y kuramı ilkeleriyle tasarlanan öncü tesislerden biri oldu; geleneksel ustabaşı hiyerarşisi yerine kendi kendini yöneten teknisyen ekipleri kuruldu ve tesis, şirketin en verimli fabrikaları arasına girdi; bu deneyim sonraki onyıllarda yayılan özyönetimli ekip akımının erken örneklerinden sayılır. McGregor\'un mirası bugün de görünür: hedeflerle yönetim, çalışan katılımı, yetkilendirme ve güven kültürü tartışmalarının hemen hepsi, kitabın açtığı yoldan yürür. McGregor 1964\'te erken yaşta öldü; ama sorduğu soru her yöneticinin masasında durmaya devam ediyor: kurallarını hangi insana göre yazdın?' },
          { t: 'h2', text: 'Gerçek fayda' },
          { t: 'ul', items: [
            'Aynayı yöneticiye çevirir: "elemanlar çalışmıyor" şikayeti, "yönetimim ne üretiyor?" sorusuna dönüşür; değiştirilebilir olan tek şey, yöneticinin kendi varsayımıdır.',
            'Denetim maliyetini düşürür: her işi kontrol eden yönetici en pahalı ve en yorgun elemandır; sonuç odaklı güven, hem yöneticinin vaktini hem ekibin aklını serbest bırakır.',
            'Fikir musluğunu açar: X ortamında akıl sadece yönetici kadardır; Y ortamında herkesin gözü ve fikri işe katılır; en iyi iyileştirmeler çoğu zaman işi bizzat yapandan gelir.',
          ]},
        ],
      },
    ],
  },
]
