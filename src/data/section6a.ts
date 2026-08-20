import type { DecisionModel } from '../types'

export const section6aModels: DecisionModel[] = [
  {
    slug: 'pdca-dongusu',
    section: 'surec-kalite',
    title: 'PDCA Döngüsü (Deming Döngüsü)',
    question: 'Bir işi her seferinde biraz daha iyi nasıl yaparım?',
    summary: 'Planla-Uygula-Kontrol Et-Önlem Al: her iyileştirmeyi dört adımlık bir döngüye bağlayan, Deming\'in dünyaya öğrettiği temel kalite yöntemi.',
    tags: ['sürekli iyileştirme', 'kalite', 'döngü'],
    pages: [
      {
        slug: 'kavram',
        title: 'Kavram',
        blocks: [
          { t: 'callout', kind: 'simple', title: 'Bir cümlede', text: 'Bir işi düzeltmek istiyorsan dört adımı sırayla dön: önce küçük bir plan yap, sonra dene, sonra sonucu ölç, sonra işe yarayanı kalıcı kural yap; ve döngüyü hiç durdurma.' },
          { t: 'callout', kind: 'ornek', title: 'Atölyeden örnek', text: 'Kaynak ustası Hasan\'ın parçalarında ayda 12 hatalı kaynak çıkıyor. Ustabaşıyla oturup plan yapıyorlar: "Hata çoğu zaman elektrot nemliyken çıkıyor, elektrotları fırınlı dolapta saklayalım" (Planla). Bir ay boyunca sadece bir tezgahta böyle çalışıyorlar (Uygula). Ay sonunda sayıyorlar: o tezgahta hata 12\'den 4\'e inmiş, diğerlerinde aynı (Kontrol Et). Fırınlı dolap bütün tezgahlara alınıyor ve "elektrot fırından çıkmadan kaynak yapılmaz" atölye kuralı oluyor (Önlem Al). Sonra Hasan yeni döngüye başlıyor: kalan 4 hata nereden geliyor?' },
          { t: 'p', text: 'PDCA, dört İngilizce kelimenin baş harfidir: Plan (planla), Do (uygula), Check (kontrol et), Act (önlem al). Fikri 1920\'lerde istatistikçi Walter Shewhart attı, dünyaya ise öğrencisi W. Edwards Deming yaydı; bu yüzden Deming döngüsü de denir. Temel iddiası şudur: iyileştirme bir defalık kahramanlık değil, hiç bitmeyen bir çember dönüşüdür.' },
          { t: 'h2', text: 'Dört adım ne yapar?' },
          { t: 'table', head: ['Adım', 'Soru', 'Atölyede karşılığı'], rows: [
            ['Planla (Plan)', 'Sorun ne, sebebi ne olabilir, ne deneyeceğiz?', 'Hatayı say, sebep tahmin et, küçük bir deney tasarla'],
            ['Uygula (Do)', 'Planı küçük ölçekte denedik mi?', 'Tek tezgahta, tek vardiyada dene; her yeri birden değiştirme'],
            ['Kontrol Et (Check)', 'Sonuç sayıyla ne diyor?', 'Öncesi ve sonrası hatayı say, karşılaştır'],
            ['Önlem Al (Act)', 'İşe yaradıysa nasıl kalıcılaştırırız?', 'Yeni yöntemi yazılı kural yap, herkese öğret; yaramadıysa yeni plana dön'],
          ]},
          { t: 'p', text: 'En sık atlanan adımlar son ikisidir. Çoğu işletme planlar ve uygular, ama sonucu sayıyla kontrol etmez ve işe yarayan değişikliği kural haline getirmez. Kontrol edilmeyen deneme bir fikirdir; kurala bağlanmayan iyileşme ise ilk yoğun günde eski alışkanlığa geri döner.' },
          { t: 'p', text: 'Döngünün gücü tekrarındadır: her tur bittikten sonra çember bir üst seviyeden yeniden başlar. Bu yüzden PDCA çizimlerinde çember çoğu zaman bir yokuşu tırmanırken gösterilir; her dönüş işi biraz daha yukarı taşır.' },
        ],
      },
      {
        slug: 'uygulama',
        title: 'Nasıl Uygulanır',
        blocks: [
          { t: 'steps', items: [
            { title: 'Tek ve ölçülebilir bir sorun seç', text: '"Kalite kötü" değil; "geçen ay 12 hatalı kaynak çıktı" gibi sayılabilir bir sorun seç. Sayamadığın sorunu bu döngüyle iyileştiremezsin.' },
            { title: 'Küçük planla, küçük dene', text: 'Değişikliği önce tek tezgahta, tek üründe veya tek haftada dene. Küçük deneme ucuz ders demektir; büyük deneme pahalı kumar.' },
            { title: 'Sonucu sayıyla kontrol et', text: 'Denemeden önce ve sonra aynı şeyi say. His yetmez: "sanki azaldı" bir kontrol değildir, "12\'den 4\'e indi" bir kontroldür.' },
            { title: 'Kazanımı kurala bağla ve yeni tura başla', text: 'İşe yarayan yöntemi yazılı standart yap ve herkese öğret. Sonra kalan en büyük soruna yeni bir PDCA turu aç.' },
          ]},
          { t: 'callout', kind: 'tip', title: 'İpucu', text: 'Her turu bir sayfaya sığdır: sorun, plan, deneme, öncesi-sonrası sayı, yeni kural. Bir sayfaya sığmayan PDCA turu genelde fazla büyük seçilmiş demektir; ikiye böl.' },
          { t: 'callout', kind: 'warn', title: 'Dikkat', text: 'PDCA\'nın en yaygın ölüm şekli P-D-P-D döngüsüdür: sürekli planlayıp deneyen ama hiç ölçmeyen ve hiç kalıcılaştırmayan ekipler çok çalışır, hiç ilerlemez. Bir turu bitirmeden yenisine başlama.' },
        ],
      },
      {
        slug: 'vaka',
        title: 'Gerçek Vaka & Fayda',
        blocks: [
          { t: 'callout', kind: 'case', title: 'Vaka: Deming ve Japonya\'nın kalite devrimi', text: 'İkinci Dünya Savaşı sonrası "Japon malı" damgası ucuz ve kalitesiz demekti. 1950\'de W. Edwards Deming, Japon Bilim İnsanları ve Mühendisleri Birliği\'nin (JUSE) davetiyle Japonya\'da mühendislere ve üst yöneticilere kalite dersleri verdi; öğrettiği çekirdek yöntem Shewhart\'tan devraldığı bu döngüydü. Japon sanayisi döngüyü fabrika sahasına taşıdı ve on yıllar boyunca ürünlerini adım adım iyileştirdi; 1970-80\'lere gelindiğinde Japon otomobilleri ve elektroniği dünyada kalite ölçütü haline gelmişti. JUSE, 1951\'den beri ülkenin en saygın kalite ödülünü Deming\'in adıyla veriyor. Bir istatistikçinin ders notlarından çıkan dört adımlık çember, bir ülkenin sanayi itibarını değiştiren araçlardan biri oldu.' },
          { t: 'h2', text: 'Gerçek fayda' },
          { t: 'ul', items: [
            'İyileştirmeyi şansa bırakmaz: "bir ara düzeltiriz" niyetini, adı ve adımları belli bir çalışma biçimine çevirir.',
            'Pahalı hataları önler: her fikir önce küçük ölçekte denendiği için yanlış fikirler ucuzken yakalanır.',
            'Kazanımları kalıcı yapar: iyileşme kişiye değil yazılı kurala bağlandığı için usta izne çıkınca kalite düşmez.',
          ]},
        ],
      },
    ],
  },
  {
    slug: 'kaizen',
    section: 'surec-kalite',
    title: 'Kaizen',
    question: 'Büyük yatırım yapmadan işleri nasıl iyileştiririm?',
    summary: 'Her gün, herkesin katıldığı küçük iyileştirmelerin birikerek büyük fark yarattığını söyleyen Japon sürekli iyileştirme felsefesi.',
    tags: ['sürekli iyileştirme', 'küçük adımlar', 'çalışan katılımı'],
    pages: [
      {
        slug: 'kavram',
        title: 'Kavram',
        blocks: [
          { t: 'callout', kind: 'simple', title: 'Bir cümlede', text: 'Bir günde yüzde bir iyileşen iş, bir yılda tanınmayacak kadar iyileşir; kaizen, büyük devrim beklemek yerine her gün küçük bir şeyi düzeltme alışkanlığıdır ve bunu en iyi işi yapan işçi yapar.' },
          { t: 'callout', kind: 'ornek', title: 'Atölyeden örnek', text: 'Tornacı Ayşe her parça için tezgahtan kalkıp beş metre ötedeki dolaptan kumpas (ölçü aleti) alıp geri koyuyor. Günde seksen parça, her seferinde yarım dakika: günde kırk dakika yürüyüş. Ayşe ustabaşına söylüyor, tezgahın yanına küçük bir askı yapılıyor; kumpas artık kolunun altında. Maliyet: bir parça sac ve on dakikalık kaynak. Kazanç: her gün kırk dakika. Kaizen tam olarak budur: sorunu en iyi bilen kişinin önerdiği, küçük, ucuz, hemen yapılabilen iyileştirme. Büyük makine yatırımı değil, bin tane küçük askı.' },
          { t: 'p', text: 'Kaizen, Japonca "kai" (değişim) ve "zen" (iyi) kelimelerinden oluşur: iyiye doğru değişim. Toyota\'nın üretim sisteminde olgunlaşan bu yaklaşımı Batı\'ya 1986\'da Masaaki Imai\'nin "Kaizen" kitabı tanıttı. Temel iddiası şudur: rekabet gücü, ara sıra yapılan büyük hamlelerden çok, her gün yapılan küçük iyileştirmelerin birikiminden gelir.' },
          { t: 'h2', text: 'Kaizen ile klasik iyileştirmenin farkı' },
          { t: 'table', head: ['Özellik', 'Klasik büyük proje', 'Kaizen'], rows: [
            ['Adım büyüklüğü', 'Büyük sıçrama', 'Küçük, sürekli adımlar'],
            ['Maliyet', 'Yüksek (yeni makine, danışman)', 'Düşük veya sıfır (akıl, düzen, alışkanlık)'],
            ['Kim yapar?', 'Yöneticiler ve uzmanlar', 'Herkes, özellikle işi bizzat yapan işçi'],
            ['Sıklık', 'Yılda bir-iki kez', 'Her gün'],
            ['Risk', 'Yüksek: tutmazsa büyük kayıp', 'Düşük: tutmazsa küçük ders'],
          ]},
          { t: 'p', text: 'Kaizen\'in görünmeyen yarısı saygıdır: yöntem, "işi en iyi, o işi her gün yapan bilir" der. Öneri kutusu süs olsun diye değil, ustanın aklını sisteme katmak için vardır. Önerisi ciddiye alınan işçi, işine sahip çıkar; alınmayan işçi sadece mesai doldurur.' },
          { t: 'p', text: 'Kaizen tek başına bir teknik değil, bir alışkanlıktır: her küçük iyileştirme genelde bir PDCA turu olarak yürütülür. Kaizen "ne kadar sık ve kim" sorusunun cevabıdır, PDCA ise "nasıl" sorusunun.' },
        ],
      },
      {
        slug: 'uygulama',
        title: 'Nasıl Uygulanır',
        blocks: [
          { t: 'steps', items: [
            { title: 'Günlük rahatsızlıkları toplat', text: 'Çalışanlara büyük fikir sorma; "seni her gün uğraştıran küçük şey ne?" diye sor. Aranan malzeme, gereksiz yürüyüş, okunmayan etiket: kaizen bu listeden beslenir.' },
            { title: 'Küçük ve ucuz olanı hemen yap', text: 'Bir haftadan kısa sürede ve küçük bir maliyetle yapılabilecek önerileri bekletme. Kaizen\'in yakıtı hızdır: önerisi bir hafta içinde hayata geçen işçi, ikinci öneriyi kendiliğinden getirir.' },
            { title: 'Sonucu görünür yap', text: 'İyileştirmenin öncesini ve sonrasını basitçe göster: fotoğraf, sayı veya kısa not. Panoda "bu ay 9 iyileştirme yaptık" yazısı, her seminerden daha çok öneri toplar.' },
            { title: 'Alışkanlığa çevir', text: 'Haftada bir kısa iyileştirme toplantısı yap: on beş dakika, ayakta, sahada. Kaizen etkinlik değil rutindir; takvimden düşen kaizen ölür.' },
          ]},
          { t: 'callout', kind: 'tip', title: 'İpucu', text: 'İlk hedef olarak fazla yürümeyi ve aramayı seç: aletin yerini sabitlemek, en sık kullanılanı en yakına koymak gibi düzen iyileştirmeleri hem kolaydır hem sonucu herkes gözüyle görür. Erken görünür kazanç, herkesi inandırır.' },
          { t: 'callout', kind: 'warn', title: 'Dikkat', text: 'Kaizen\'i asla eleman çıkarma aracına çevirme. İyileştirme sayesinde boşalan zaman işten çıkarmaya dönerse, bir daha kimse hiçbir öneri vermez; herkes kendi işini yavaşlatarak korur. Kazanılan zaman yeni işe ve eğitime gitmeli.' },
        ],
      },
      {
        slug: 'vaka',
        title: 'Gerçek Vaka & Fayda',
        blocks: [
          { t: 'callout', kind: 'case', title: 'Vaka: Toyota\'da herkesin katıldığı iyileştirme', text: 'Kaizen\'in anavatanı Toyota Üretim Sistemi\'dir. Toyota\'da iyileştirme, mühendislerin tekelinde değildir: hat işçileri "yaratıcı fikir öneri sistemi" üzerinden yıllardır düzenli olarak öneri verir ve bu önerilerin ezici çoğunluğu uygulanır; şirket bu kültürü resmi tarihçesinde 1951\'de başlattığını anlatır. Toyota\'nın sahadaki simgelerinden biri de andon ipidir: hattaki herhangi bir işçi bir sorun gördüğünde hattı durdurma yetkisine sahiptir, sorun yerinde incelenir ve kalıcı çözüm aranır. "Sıradan işçinin aklı ve yetkisi" üzerine kurulan bu sistem, Toyota\'yı yirminci yüzyılın ikinci yarısında dünyanın en verimli ve en çok incelenen otomobil üreticilerinden biri yaptı; kaizen kelimesini de dünyanın yönetim sözlüğüne soktu.' },
          { t: 'h2', text: 'Gerçek fayda' },
          { t: 'ul', items: [
            'Parasız iyileştirme sağlar: büyük yatırım gerektirmeden düzen, yerleşim ve alışkanlık değişiklikleriyle verim artar.',
            'Çalışanı ortak yapar: fikri uygulanan usta işin sahibi gibi davranır; işe bağlılık ve dikkat artar.',
            'Riski küçük tutar: her adım küçük olduğu için yanlış adımın bedeli de küçüktür; deneme cesareti artar.',
          ]},
        ],
      },
    ],
  },
  {
    slug: 'yalin-yonetim',
    section: 'surec-kalite',
    title: 'Yalın Yönetim (Lean)',
    question: 'Müşterinin para ödemediği hangi işleri yapıyorum?',
    summary: 'Her işi "müşteri buna para öder mi?" sorusuyla süzen, ödemediklerini israf sayıp yedi başlıkta avlayan yönetim yaklaşımı.',
    tags: ['israf', 'verimlilik', 'değer akışı'],
    pages: [
      {
        slug: 'kavram',
        title: 'Kavram',
        blocks: [
          { t: 'callout', kind: 'simple', title: 'Bir cümlede', text: 'Yaptığın her işi ikiye ayır: müşterinin para ödediği iş (değer) ve ödemediği iş (israf); yalın yönetim, israfı yedi bilinen kılıkta arayıp tek tek yok etme sanatıdır.' },
          { t: 'callout', kind: 'ornek', title: 'Atölyeden örnek', text: 'Mobilya atölyesinde bir dolabın kapısı 10 dakikada zımparalanıyor; ama kapı zımparaya gelene kadar iki gün istifte bekliyor, atölyenin bir ucundan öbürüne üç kez taşınıyor, ayda birkaç kapı çizik çıkıp yeniden yapılıyor. Müşteri sadece zımparalanmış kapıya para ödüyor; beklemeye, taşımaya ve yeniden yapmaya değil. Usta Cemil oturup kapının yolculuğunu çiziyor: değer katan süre 10 dakika, toplam yolculuk iki buçuk gün. Yalın bakış tam bu şaşkınlık anıdır: işin kendisi değil, işin etrafındaki bekleme, taşıma ve hata zamanı yiyor.' },
          { t: 'p', text: 'Yalın yönetim (İngilizcesi Lean), Toyota Üretim Sistemi\'nin Batı\'da incelenmesiyle doğdu; adı, 1990\'da yayımlanan "Dünyayı Değiştiren Makine" araştırmasıyla yaygınlaştı. Sistemin mimarlarından Taiichi Ohno, israfı (Japonca muda) yedi başlıkta toplamıştı; bu liste bugün de israf avının haritasıdır.' },
          { t: 'h2', text: 'Yedi israf' },
          { t: 'table', head: ['İsraf', 'Ne demek?', 'Atölyeden örnek'], rows: [
            ['Fazla üretim', 'Sipariş yokken, ihtiyaçtan çok üretmek', 'Satılmadan rafta bekleyen elli dolap kapağı'],
            ['Bekleme', 'İşin, işçinin veya makinenin boş durması', 'Boyanın kurumasını seyreden usta, malzeme bekleyen tezgah'],
            ['Taşıma', 'Malzemeyi gereksiz yere oradan oraya götürmek', 'Kapının atölye içinde üç kez yer değiştirmesi'],
            ['Fazla işlem', 'Müşterinin istemediği inceliği eklemek', 'Görünmeyen arka yüzü de üç kat cilalamak'],
            ['Stok', 'Gereğinden fazla ham madde ve yarı mamul yığmak', 'Bir yıl yetecek sunta almak; para rafta uyur'],
            ['Gereksiz hareket', 'İşçinin eğilme, uzanma, arama hareketleri', 'Her vidada eğilip yerdeki kutuyu karıştırmak'],
            ['Hata ve yeniden işleme', 'Yanlış üretip düzeltmek veya çöpe atmak', 'Çizik çıkan kapıyı baştan zımparalamak'],
          ]},
          { t: 'p', text: 'Kritik incelik: israf tembellikten değil, çoğunlukla kötü kurgudan doğar. Bekleyen usta tembel değildir; iş akışı onu bekletmektedir. Bu yüzden yalın yönetim kişiyi değil süreci suçlar ve süreci düzeltir.' },
          { t: 'p', text: 'Yalın düşüncenin bel kemiği değer akışıdır: bir ürünün ham maddeden müşteriye kadar yaptığı bütün yolculuğu çizmek. Bu çizim yapılınca çoğu işletme aynı şeyi görür: toplam sürenin çok küçük bir bölümü değer katar, gerisi bekleme ve taşımadır. İyileştirme, işi hızlandırmakla değil, aradaki boşlukları kapatmakla başlar.' },
        ],
      },
      {
        slug: 'uygulama',
        title: 'Nasıl Uygulanır',
        blocks: [
          { t: 'steps', items: [
            { title: 'Bir ürünün yolculuğunu çiz', text: 'En çok sattığın ürünü seç ve ham maddeden teslimata bütün adımlarını, bekleme ve taşımalar dahil, bir kağıda çiz. Her adımın süresini yaz.' },
            { title: 'Her adıma değer sorusunu sor', text: '"Müşteri bu adım için para öder mi?" Ödemiyorsa yanına israf türünü yaz: bekleme mi, taşıma mı, stok mu? Yedi başlık sana hazır bir kontrol listesi verir.' },
            { title: 'En büyük israftan başla', text: 'Genelde bir-iki israf türü toplam kaybın çoğunu oluşturur. Önce onu hedefle: yerleşimi değiştir, parti büyüklüğünü küçült, malzemeyi kullanım noktasına yaklaştır.' },
            { title: 'Ölç ve tekrarla', text: 'Aynı yolculuğu üç ay sonra yeniden çiz ve toplam süreyi karşılaştır. Yalın bir proje değil bakış biçimidir: israf bitmez, azalır.' },
          ]},
          { t: 'callout', kind: 'tip', title: 'İpucu', text: 'İsraf avına masadan değil sahadan başla: Toyota\'nın "gemba" dediği yerden, yani işin bizzat yapıldığı noktadan. Yarım gün hattın yanında durup sadece izlemek, çoğu rapordan fazlasını gösterir.' },
          { t: 'callout', kind: 'warn', title: 'Dikkat', text: 'Yalını "daha az adamla daha çok iş" diye okumak en tehlikeli yanlıştır. Amaç insanları sıkıştırmak değil, işin etrafındaki boş zamanı ve gereksiz işi temizlemektir. Çalışanı ezerek yapılan yalın, önce güveni sonra kaliteyi bitirir.' },
        ],
      },
      {
        slug: 'vaka',
        title: 'Gerçek Vaka & Fayda',
        blocks: [
          { t: 'callout', kind: 'case', title: 'Vaka: Toyota ve "Dünyayı Değiştiren Makine"', text: 'Yalın kavramını dünyaya tanıtan olay, MIT\'nin 1980\'lerde yürüttüğü uluslararası otomobil sanayi araştırmasıdır. Womack, Jones ve Roos\'un 1990\'da yayımladığı "The Machine That Changed the World" (Dünyayı Değiştiren Makine) kitabı, dünya genelindeki montaj fabrikalarını karşılaştırdı ve Toyota tarzı çalışan fabrikaların, klasik kitle üretimi yapanlara göre daha az insan saatiyle, daha az stokla ve daha az hatayla otomobil ürettiğini belgeledi. Araştırmacılar bu sisteme "yalın üretim" adını taktı; çünkü her şeyin daha azıyla daha çok değer üretiyordu. Kitaptan sonra yalın düşünce otomotivin dışına taştı: bugün hastaneler, bankalar ve yazılım ekipleri de değer akışı çizip israf avlıyor.' },
          { t: 'h2', text: 'Gerçek fayda' },
          { t: 'ul', items: [
            'Parayı görünür yapar: stokta uyuyan malzeme, bekleyen iş ve yeniden yapılan ürün, sayıya dökülünce herkesin görebildiği kayba dönüşür.',
            'Teslim süresini kısaltır: değer katmayan bekleme ve taşımalar azalınca müşteri siparişine çok daha hızlı kavuşur.',
            'Suçlamayı bitirir: sorunun kaynağı kişi değil süreç olarak görülünce, tartışma "kim yaptı"dan "nasıl düzeltiriz"e döner.',
          ]},
        ],
      },
    ],
  },
  {
    slug: 'alti-sigma',
    section: 'surec-kalite',
    title: 'Altı Sigma (Six Sigma)',
    question: 'Hatalarımı hisle değil sayıyla nasıl azaltırım?',
    summary: 'Hataları istatistikle avlayan, DMAIC adlı beş adımlı proje yöntemiyle süreçteki oynaklığı azaltan, Motorola\'da doğan kalite disiplini.',
    tags: ['hata azaltma', 'istatistik', 'DMAIC'],
    pages: [
      {
        slug: 'kavram',
        title: 'Kavram',
        blocks: [
          { t: 'callout', kind: 'simple', title: 'Bir cümlede', text: 'Altı Sigma, "hata neden oluyor?" sorusuna fikirle değil ölçümle cevap verir: süreci say, oynaklığın sebebini veriyle bul, sebebi düzelt ve düzeni koru; hedef, hatayı milyonda birkaç seviyesine indirmektir.' },
          { t: 'callout', kind: 'ornek', title: 'Atölyeden örnek', text: 'Dökümhanede parçaların bir kısmı ölçü tutmadığı için hurdaya gidiyor. Herkesin bir teorisi var: "kum nemli", "kalıp eski", "gece vardiyası dikkatsiz". Kalite sorumlusu Fatma tartışmayı kesiyor: "İki hafta boyunca her hurda parçanın saatini, tezgahını, kalıbını, kum partisini yazacağız." İki hafta sonra sayılar konuşuyor: hurdaların büyük kısmı iki eski kalıptan çıkıyor; vardiyanın etkisi yok. İki kalıp yenileniyor, hurda belirgin düşüyor. Altı Sigma\'nın özü bu sahnedir: en yüksek sesli teoriye değil, en güçlü kanıta göre karar vermek.' },
          { t: 'p', text: 'Altı Sigma 1980\'lerde Motorola\'da doğdu. Adındaki sigma, istatistikte oynaklığı (sonuçların ortalamadan ne kadar saptığını) gösteren harftir. "Altı sigma seviyesi", bir sürecin o kadar tutarlı çalışması demektir ki milyonda yalnızca 3,4 hata çıkar. Sayının kendisinden çok fikri önemlidir: kalite "elimizden geleni yapıyoruz" cümlesiyle değil, hedeflenen ve ölçülen bir hata oranıyla yönetilir.' },
          { t: 'h2', text: 'DMAIC: Altı Sigma projesinin beş adımı' },
          { t: 'table', head: ['Adım', 'Türkçesi', 'Soru', 'Atölyede karşılığı'], rows: [
            ['Define', 'Tanımla', 'Hangi sorunu, hangi ölçüyle çözüyoruz?', '"Hurda oranı yüzde 6, hedef yüzde 2, süre üç ay"'],
            ['Measure', 'Ölç', 'Şu anki durumu doğru sayıyor muyuz?', 'Her hurdayı saatiyle, tezgahıyla, kalıbıyla kaydet'],
            ['Analyze', 'Analiz et', 'Hatanın asıl sebebi veriye göre ne?', 'Sayılara bak: hurda iki eski kalıpta toplanıyor'],
            ['Improve', 'İyileştir', 'Sebebi ortadan kaldıran değişiklik ne?', 'İki kalıbı yenile, sonucu ölçerek doğrula'],
            ['Control', 'Kontrol et', 'Düzelme kalıcı mı, geri kayma var mı?', 'Hurda oranını panoya as, kalıp bakım takvimi koy'],
          ]},
          { t: 'p', text: 'Altı Sigma\'nın asıl düşmanı ortalama değil oynaklıktır. Ortalama teslim süresi beş gün olan iki atölye düşün: birinde her sipariş dört-altı günde çıkar, diğerinde kimi iki günde kimi on iki günde. Ortalamaları aynı, ama müşteri ikincisine güvenemez. Sigma küçüldükçe süreç sözünü tutar hale gelir; kalite de büyük ölçüde budur: söz tutmak.' },
          { t: 'p', text: 'Yalın ile Altı Sigma kardeştir ve sahada çoğu zaman birlikte kullanılır (Lean Six Sigma): yalın, değer katmayan işi atar; Altı Sigma, kalan işin hatasını ve oynaklığını azaltır.' },
        ],
      },
      {
        slug: 'uygulama',
        title: 'Nasıl Uygulanır',
        blocks: [
          { t: 'steps', items: [
            { title: 'Sorunu sayıyla tanımla', text: 'Bir DMAIC projesi tek cümleyle açılır: hangi ölçü, şu an kaç, hedef kaç, ne zamana kadar. Bu cümleyi yazamıyorsan proje başlamaya hazır değildir.' },
            { title: 'Karar vermeden önce veri topla', text: 'Her hatayı birkaç bilgisiyle kaydet: ne zaman, hangi makinede, hangi malzemeyle, kim varken. İki-dört haftalık dürüst kayıt, yılların tahmininden değerlidir.' },
            { title: 'Sebebi kanıtla, sonra düzelt', text: 'Verinin işaret ettiği sebebi küçük bir denemeyle doğrula: şüpheli kalıbı değiştir, sadece o hattın sonucunu izle. Kanıtlanan sebebe yapılan yatırım boşa gitmez.' },
            { title: 'Kontrol düzeni kur', text: 'İyileşen ölçüyü izlemeye devam et: haftalık sayım, panoda basit bir çizelge, eşik aşılınca kimin ne yapacağı yazılı olsun. Kontrolsüz kalan süreç, sessizce eski haline döner.' },
          ]},
          { t: 'callout', kind: 'tip', title: 'İpucu', text: 'Küçük işletmede kuşak ve sertifika bürokrasisine takılma: DMAIC\'in mantığı kağıt, kalem ve çetele ile de işler. "Say, sebebi veriyle bul, düzelt, izlemeye devam et" diyebilen herkes Altı Sigma\'nın özünü uyguluyordur.' },
          { t: 'callout', kind: 'warn', title: 'Dikkat', text: 'Altı Sigma\'yı her işe uygulamaya kalkma. Yöntem, tekrarlanan ve sayılabilen süreçlerde parlar; yenilik, tasarım ve deneme gerektiren işlerde aşırı ölçüm yaratıcılığı boğabilir. Doğru soru: "bu süreç tekrar ediyor ve hatası sayılabiliyor mu?"' },
        ],
      },
      {
        slug: 'vaka',
        title: 'Gerçek Vaka & Fayda',
        blocks: [
          { t: 'callout', kind: 'case', title: 'Vaka: Motorola\'da doğdu, GE ile dünyaya yayıldı', text: 'Altı Sigma, 1980\'lerde Motorola mühendisi Bill Smith\'in hata analizleri üzerine şekillendi; şirket 1987\'de yöntemi resmi programı yaptı ve 1988\'de ABD\'nin ilk Malcolm Baldrige Ulusal Kalite Ödülü\'nü kazanan şirketlerden biri oldu. Motorola, sonraki yıllarda programın kendisine milyarlarca dolarlık tasarruf sağladığını raporladı. Yöntemi dünya gündemine taşıyan ikinci dalga General Electric oldu: 1995\'te CEO Jack Welch, Altı Sigma\'yı şirketin merkez stratejisi ilan etti; binlerce çalışan proje liderliği için eğitildi ve GE, yıllık raporlarında programın kazancını açıkça yayımladı. İki dev şirketin belgelenmiş sonuçları, "kaliteyi istatistikle yönetme" fikrini bir mühendislik merakından küresel bir yönetim standardına çevirdi.' },
          { t: 'h2', text: 'Gerçek fayda' },
          { t: 'ul', items: [
            'Tartışmayı kanıta bağlar: "bence kumdan" ile "veriye göre kalıptan" aynı masada eşit değildir; para kanıtlanmış sebebe harcanır.',
            'Hata maliyetini düşürür: hurda, yeniden işleme ve iade azaldıkça aynı ciro daha çok kazanç bırakır.',
            'Müşteri güveni kurar: oynaklığı azalan süreç sözünü tutar; sözünü tutan işletme pazarlıkta güçlenir.',
          ]},
        ],
      },
    ],
  },
  {
    slug: 'tam-zamaninda-uretim',
    section: 'surec-kalite',
    title: 'Tam Zamanında Üretim (JIT)',
    question: 'Param neden rafta ve depoda uyuyor?',
    summary: 'Gerekeni, gerektiği anda, gerektiği kadar üretme ilkesi: stok yığmak yerine işi müşterinin çekişine bağlayan Toyota kökenli sistem.',
    tags: ['stok', 'çekme sistemi', 'akış'],
    pages: [
      {
        slug: 'kavram',
        title: 'Kavram',
        blocks: [
          { t: 'callout', kind: 'simple', title: 'Bir cümlede', text: 'Tam zamanında üretim, "belki lazım olur" diye yığmak yerine, gerekeni gerektiği anda gerektiği kadar üretmek ve satın almaktır; iş, tahmine göre itilmez, gerçek ihtiyaca göre çekilir.' },
          { t: 'callout', kind: 'ornek', title: 'Atölyeden örnek', text: 'İki simitçi düşün. Birincisi sabah beşte günün bütün simidini pişiriyor: öğleden sonra simitler bayat, akşam kalanlar çöpe. İkincisi tezgahta az simit tutuyor; tepsi azalınca fırına "bir tepsi daha" haberi gidiyor, simit gün boyu sıcak çıkıyor. İkincisi tam zamanında üretim yapıyor: üretimi sabahki tahmini değil, tezgahtaki gerçek satış tetikliyor. Aynı mantık torna atölyesinde de geçerli: sonraki tezgah parçayı çektikçe önceki tezgah yenisini işler; kimse "nasılsa lazım olur" diye dağ gibi yarı mamul biriktirmez.' },
          { t: 'p', text: 'Tam zamanında üretim (İngilizce Just-in-Time, kısaca JIT), Toyota Üretim Sistemi\'nin iki ana direğinden biridir; sistemin mimarı Taiichi Ohno, ilhamlardan birinin Amerikan süpermarketleri olduğunu anlatır: raf boşaldıkça dolar, müşteri ne aldıysa o kadar yenilenir. Fabrikada bu haberleşmeyi kanban denen basit kartlar sağlar: kart, "şu parçadan şu kadar üret veya getir" diyen bir sipariş fişidir.' },
          { t: 'h2', text: 'İtme sistemi ile çekme sistemi' },
          { t: 'table', head: ['Özellik', 'İtme (klasik)', 'Çekme (JIT)'], rows: [
            ['Üretimi ne başlatır?', 'Satış tahmini ve plan', 'Gerçek sipariş veya sonraki adımın çekişi'],
            ['Stok', 'Büyük: "ne olur ne olmaz" depoları', 'Küçük: sadece akışı koruyacak kadar'],
            ['Nakit', 'Rafta ve depoda bağlı', 'Kasada ve işte serbest'],
            ['Hata görünürlüğü', 'Hatalı parti stokta günlerce gizlenir', 'Hata hemen sonraki adımda ortaya çıkar'],
            ['Zayıf noktası', 'Tahmin tutmayınca dağ gibi satılmayan mal', 'Tedarik kesintisine karşı hassastır'],
          ]},
          { t: 'p', text: 'JIT\'in derin tarafı şudur: stok, sorunları örten bir sudur. Su yüksekken dipteki kayalar (arızalı makine, geç kalan tedarikçi, hatalı üretim) görünmez; her aksaklığı stok kapatır. Stok bilinçli olarak azaltılınca kayalar su yüzüne çıkar ve tek tek çözülmek zorunda kalır. Bu yüzden JIT sadece bir stok politikası değil, sorunları saklanamaz hale getiren bir disiplindir.' },
          { t: 'p', text: 'Bu disiplinin bedeli de vardır: stok azaldıkça sistem tedarik aksamalarına karşı hassaslaşır. Bu yüzden JIT, güvenilir tedarikçi ilişkisi ve düzgün bakım-kalite alışkanlıkları kurulmadan tek başına uygulanmaz; kritik ve bulunması zor malzemede bilinçli bir emniyet payı tutmak da JIT\'e aykırı değildir.' },
        ],
      },
      {
        slug: 'uygulama',
        title: 'Nasıl Uygulanır',
        blocks: [
          { t: 'steps', items: [
            { title: 'Stokun fotoğrafını çek', text: 'Depodaki ve tezgah aralarındaki her şeyi say ve para değerini yaz. Çoğu işletme, rafta uyuyan paranın büyüklüğünü ilk kez bu sayımda görür.' },
            { title: 'Bir ürün ailesinde çekmeye geç', text: 'Her şeyi birden değiştirme. En düzenli satılan ürünü seç: "raf şu seviyeye düşünce şu kadar üret veya sipariş ver" kuralı koy. Basit bir kart, kasa veya boş göz, kanban görevi görür.' },
            { title: 'Parti büyüklüğünü adım adım küçült', text: 'Yüzlük parti yerine ellilik, sonra yirmi beşlik dene. Küçük parti, hatanın erken görünmesi ve paranın erken dönmesi demektir. Makine ayar süreleri engel çıkarırsa önce ayar süresini kısalt.' },
            { title: 'Tedarikçiyi sisteme ortak et', text: 'Sık ve küçük teslimat için ana tedarikçilerinle konuş; onlara düzenli ve tahmin edilebilir sipariş sözü ver. JIT tek başına oynanmaz; zincirin en yavaş halkası kadar hızlısındır.' },
          ]},
          { t: 'callout', kind: 'tip', title: 'İpucu', text: 'İki kutu yöntemiyle başla: her malzeme için iki kutu; biri biterken diğeri açılır ve boş kutu sipariş işareti olur. Kağıtsız, yazılımsız, unutmaya kapalı bir çekme sistemidir ve küçük atölyede çoğu işi görür.' },
          { t: 'callout', kind: 'warn', title: 'Dikkat', text: 'JIT\'i "stok sıfır olsun" diye okuma. Tedarik süresi uzun, bulunması zor veya hayati malzemede bilinçli emniyet stoku tutulur. Amaç stoku düşman bellemek değil, her stok kaleminin "neden ve ne kadar" sorusuna cevabının olmasıdır.' },
        ],
      },
      {
        slug: 'vaka',
        title: 'Gerçek Vaka & Fayda',
        blocks: [
          { t: 'callout', kind: 'case', title: 'Vaka: Kıt Japonya\'nın icadı, Toyota\'nın direği', text: 'JIT, savaş sonrası Japonya\'sının kıtlığından doğdu: Toyota\'nın ne Amerikan devleri gibi sermayesi ne de dev depolar kuracak alanı vardı. Taiichi Ohno ve ekibi, çözümü stokla değil akışla buldu: her sürecin yalnızca sonraki sürecin çektiği kadar üretmesi, haberleşmenin de kanban kartlarıyla yapılması. Ohno, süpermarket rafının dolum mantığını fabrikaya uyarladığını kendi kitabında anlatır. Sistem on yıllar içinde Toyota\'yı düşük stokla, kısa teslim süresiyle ve yüksek kaliteyle çalışan bir dev yaptı ve dünyada ders kitabı konusu oldu. Madalyonun öbür yüzü de belgelidir: 2011 Japonya depremi ve 2020 sonrası çip krizi gibi büyük tedarik kesintileri, düşük stoklu zincirlerin kırılganlığını gösterdi; bugünkü ders JIT\'i çöpe atmak değil, kritik malzemede bilinçli yedekle dengelemektir.' },
          { t: 'h2', text: 'Gerçek fayda' },
          { t: 'ul', items: [
            'Nakdi serbest bırakır: depoda uyuyan para kasaya döner; küçük işletmenin en kıt kaynağı olan nakit nefes alır.',
            'Hatayı erken yakalatır: küçük parti ve az stokla çalışınca hatalı üretim yüzlerce parçaya yayılmadan görünür.',
            'İşletmeyi çevik yapar: model ve talep değiştiğinde elde eritilecek stok dağı olmadığı için dönüş hızlanır.',
          ]},
        ],
      },
    ],
  },
  {
    slug: 'toplam-kalite-yonetimi',
    section: 'surec-kalite',
    title: 'Toplam Kalite Yönetimi (TQM)',
    question: 'Kalite sadece kalite bölümünün işi mi?',
    summary: 'Kaliteyi son kontrolde ayıklamak yerine, müşteri odağıyla ve herkesin katılımıyla işin her adımında üretmeyi hedefleyen yönetim anlayışı.',
    tags: ['kalite kültürü', 'müşteri odağı', 'katılım'],
    pages: [
      {
        slug: 'kavram',
        title: 'Kavram',
        blocks: [
          { t: 'callout', kind: 'simple', title: 'Bir cümlede', text: 'Toplam kalite yönetimi, kaliteyi kapıdaki son kontrolcünün eleğinden çıkarıp herkesin her adımdaki işi haline getirir: hata sonda ayıklanmaz, baştan üretilmemesi sağlanır ve kalitenin ölçüsü müşterinin memnuniyetidir.' },
          { t: 'callout', kind: 'ornek', title: 'Atölyeden örnek', text: 'Konfeksiyon atölyesinde kalite, en sondaki kontrol masasının işi: hatalı gömlekler orada ayıklanıyor, kumaş ve emek çöpe gidiyor, kontrolcü Nuray herkesle kavgalı. Patron düzeni değiştiriyor: her makineci kendi dikişini bir sonraki arkadaşına "müşterisiymiş gibi" teslim edecek, hatalı yaka gördüğünde bandı ilerletmeyip hemen haber verecek; haftada bir de on beş dakikalık hata toplantısı yapılacak. Üç ay sonra son kontrole gelen hata belirgin azalıyor. Değişen makine değil anlayış: kalite bir masanın değil, otuz kişinin işi oldu.' },
          { t: 'p', text: 'Toplam Kalite Yönetimi (İngilizce Total Quality Management, TQM), Deming, Juran ve Japon kalite hareketinin öğretilerinin birleşiminden doğdu ve 1980\'lerde Batı\'da yaygın bir yönetim akımı haline geldi. "Toplam" kelimesi iki şeyi birden anlatır: bütün bölümler (muhasebeden sevkiyata) ve bütün çalışanlar (genel müdürden çırağa) kaliteden sorumludur.' },
          { t: 'h2', text: 'Klasik kalite anlayışı ile TQM' },
          { t: 'table', head: ['Soru', 'Klasik anlayış', 'TQM'], rows: [
            ['Kalite kimin işi?', 'Kalite kontrol bölümünün', 'Herkesin, her adımda'],
            ['Hata ne zaman yakalanır?', 'En sonda, kontrol masasında', 'Oluştuğu anda, oluştuğu yerde'],
            ['Kaliteyi kim tanımlar?', 'Şirket içi standartlar', 'Müşteri: iç ve dış müşteri memnuniyeti'],
            ['Hataya bakış', 'Suçlu aranır, ceza verilir', 'Sebep aranır, süreç düzeltilir'],
            ['İyileştirme', 'Sorun büyüyünce kampanya', 'Sürekli, küçük adımlarla (PDCA, kaizen)'],
          ]},
          { t: 'p', text: 'TQM\'in en kullanışlı kavramlarından biri iç müşteridir: senin işinin çıktısını alan bir sonraki arkadaş, senin müşterindir. Kesimci makinecinin, makineci ütücünün, ütücü paketçinin müşterisidir. Herkes bir sonrakine kusursuz iş teslim etmeye çalışınca, dış müşteriye giden ürün kendiliğinden düzelir.' },
          { t: 'p', text: 'TQM tek bir teknik değil, bir şemsiyedir: altında PDCA döngüsü, kaizen alışkanlığı, veriyle konuşma ve müşteri odağı birlikte yaşar. Bu yüzden bir haftada kurulmaz; yönetimin sabırla ve tutarlılıkla taşıması gereken bir kültürdür.' },
        ],
      },
      {
        slug: 'uygulama',
        title: 'Nasıl Uygulanır',
        blocks: [
          { t: 'steps', items: [
            { title: 'Kaliteyi müşterinin gözünden tanımla', text: 'Müşterilerin en çok neden şikayet ettiğini ve en çok neye değer verdiğini yaz: sağlamlık mı, zamanında teslim mi, temizlik mi? Kalite hedefleri bu listeden çıkar, içeriden değil.' },
            { title: 'İç müşteri zincirini kur', text: 'Her çalışana iki soruyu sordur: "Benim müşterim kim ve benden nasıl bir iş bekliyor?" Her adım bir sonrakine kusurlu iş devretmemeyi görev bilsin; hatayı gören, bandı utanmadan durdurabilsin.' },
            { title: 'Hata toplantısını suçsuz yap', text: 'Haftada bir, kısa ve düzenli: bu hafta hangi hatalar çıktı, sebebi ne, ne değiştireceğiz? Kural net: kişi değil süreç konuşulur. Suçlanan insan hatayı saklar; saklanan hata büyür.' },
            { title: 'Yönetim olarak önde yürü', text: 'TQM afişle değil örnekle kurulur: patron kaliteyi teslim tarihine feda ederse herkes eder. Kalite için hattı durduran işçiye teşekkür edilen gün, kültür değişmeye başlamıştır.' },
          ]},
          { t: 'callout', kind: 'tip', title: 'İpucu', text: 'Az sayıda ve herkesin anladığı ölçüyle başla: şikayet sayısı, iade oranı, zamanında teslim yüzdesi. Bunları panoda herkese göster. Görünen sayı, konuşulan sayıdır; konuşulan sayı düzelir.' },
          { t: 'callout', kind: 'warn', title: 'Dikkat', text: 'TQM\'in en bilinen batma sebebi lafta kalmasıdır: duvarda kalite politikası, sahada eski düzen. Belge ve slogan kalite üretmez. İkinci tuzak sabırsızlıktır: kültür aylar değil yıllar içinde oturur; ilk zorlukta vazgeçen yönetim, bir dahaki denemede kimseyi inandıramaz.' },
        ],
      },
      {
        slug: 'vaka',
        title: 'Gerçek Vaka & Fayda',
        blocks: [
          { t: 'callout', kind: 'case', title: 'Vaka: Deming\'in 14 ilkesi ve kalitenin yönetim işi olması', text: 'TQM\'in fikri temelini atan belgelerden biri, Deming\'in 1982 tarihli "Out of the Crisis" kitabında yayımladığı yönetim için 14 ilkedir. Deming, kalitesizliğin asıl sorumlusunun işçiler değil sistem, yani yönetim olduğunu savundu; korkuyu işyerinden kaldırmayı, bölümler arası duvarları yıkmayı ve amacın sürekliliğini ilkelerinin merkezine koydu. Japonya bu öğretileri 1950\'lerden itibaren uygulamış ve kalite çemberleriyle (işçilerin gönüllü sorun çözme grupları) kurumsallaştırmıştı. Batı\'nın uyanışı ise gecikmeli oldu: 1980\'de NBC televizyonunun yayımladığı "If Japan Can... Why Can\'t We?" (Japonya yapabiliyorsa biz neden yapamıyoruz?) belgeseli Deming\'i kendi ülkesinde üne kavuşturdu; Ford başta olmak üzere büyük Amerikan şirketleri ondan danışmanlık aldı ve 1987\'de ABD, kalite yolculuğunu teşvik için Malcolm Baldrige Ulusal Kalite Ödülü\'nü kurdu.' },
          { t: 'h2', text: 'Gerçek fayda' },
          { t: 'ul', items: [
            'Ayıklama maliyetini üretmeme kazancına çevirir: hata baştan önlenince hurda, tamir ve iade masrafı birlikte düşer.',
            'Müşteriyi elde tutar: kalitenin ölçüsü müşteri memnuniyeti olunca işletme, kaybettiğini fark etmediği müşterileri görmeye başlar.',
            'Korku yerine katılım getirir: suçlu avı biten işyerinde hatalar saklanmaz, konuşulur ve bir daha olmaması için düzeltilir.',
          ]},
        ],
      },
    ],
  },
  {
    slug: 'surec-yeniden-tasarimi',
    section: 'surec-kalite',
    title: 'Süreç Yeniden Tasarımı (BPR)',
    question: 'Bu işi hiç yapmasaydık, bugün sıfırdan nasıl kurardık?',
    summary: 'Mevcut süreci düzeltmek yerine "bu iş bugün sıfırdan nasıl kurulurdu?" diye sorup köklü biçimde yeniden tasarlayan yaklaşım (Business Process Reengineering).',
    tags: ['köklü değişim', 'süreç tasarımı', 'yeniden yapılanma'],
    pages: [
      {
        slug: 'kavram',
        title: 'Kavram',
        blocks: [
          { t: 'callout', kind: 'simple', title: 'Bir cümlede', text: 'Kaizen eski yolu her gün biraz düzeltir; süreç yeniden tasarımı ise arada bir sorulması gereken daha sert soruyu sorar: bu yol hiç olmasaydı, bugünkü imkanlarla işi sıfırdan nasıl kurardık?' },
          { t: 'callout', kind: 'ornek', title: 'Atölyeden örnek', text: 'Makine atölyesinde bir yedek parça siparişi şu yoldan geçiyor: müşteri arar, sekreter forma yazar, form ustabaşına gider, ustabaşı fiyatı hesaplar, form muhasebeye döner, onay patrona çıkar, teklif müşteriye faksla gider. Yedi durak, üç gün; işin kendisi yarım saat. Patron Selim yolu inceltmek yerine soruyu değiştiriyor: "Bugün sıfırdan kursam bu yol olur muydu?" Olmazdı. Yeni tasarım: standart parçaların fiyatı hazır listede, telefonu açan usta fiyatı anında verir, sadece özel işler patrona gider. Üç günlük yol on dakikaya iner. Duraklar iyileştirilmedi; yolun kendisi değişti.' },
          { t: 'p', text: 'Süreç yeniden tasarımı (İngilizce Business Process Reengineering, kısaca BPR), 1990\'da Michael Hammer\'ın Harvard Business Review\'daki ünlü makalesiyle gündeme geldi; başlığı yaklaşımın özetidir: "Reengineering Work: Don\'t Automate, Obliterate" (Otomatikleştirme, yok et). Hammer\'ın uyarısı şuydu: kötü tasarlanmış bir süreci bilgisayara taşırsan, aynı saçmalığı daha hızlı yapmış olursun. Önce süreci sorgula, gerekiyorsa sil baştan kur; teknolojiyi eski yolu hızlandırmak için değil, yeni yolu mümkün kılmak için kullan.' },
          { t: 'h2', text: 'Kaizen ile BPR: iki farklı alet' },
          { t: 'table', head: ['Özellik', 'Kaizen (sürekli iyileştirme)', 'BPR (yeniden tasarım)'], rows: [
            ['Soru', 'Bu adımı nasıl daha iyi yaparız?', 'Bu adım hiç olmalı mı? Süreç baştan nasıl kurulur?'],
            ['Değişim boyu', 'Küçük, birikimli', 'Köklü, sıçramalı'],
            ['Sıklık', 'Her gün', 'Yılda bir gözden geçirilir, nadiren uygulanır'],
            ['Risk', 'Düşük', 'Yüksek: büyük değişim, büyük direnç'],
            ['Ne zaman doğru?', 'Süreç temelde sağlıklıyken', 'Süreç temelden çağ dışı kalmışken'],
          ]},
          { t: 'p', text: 'İkisi rakip değil tamamlayıcıdır: sağlıklı işletme yüz kere kaizen, bir kere BPR yapar. Sürekli iyileştirmeyle inceltilen ama artık ihtiyaca uymayan bir süreç geldiğinde, cila değil yeniden çizim gerekir.' },
          { t: 'p', text: 'BPR\'ın kalbindeki teknik, süreci uçtan uca müşterinin gözüyle çizmektir: müşteri ne istedi, eline ne zaman geçti, arada kaç el değdi? Her el değişimi bir bekleme, bir hata riski ve bir maliyet noktasıdır. Yeniden tasarımın klasik hamleleri de buradan çıkar: adımları birleştir, kararları işi yapana ver, bilgiyi bir kere gir, kontrolleri sadece gerektiği yerde tut.' },
        ],
      },
      {
        slug: 'uygulama',
        title: 'Nasıl Uygulanır',
        blocks: [
          { t: 'steps', items: [
            { title: 'Süreci müşteriden başlayarak çiz', text: 'Seçtiğin sürecin bugünkü halini dürüstçe çiz: her durak, her bekleme, her imza. Toplam süreyi ve gerçek iş süresini yan yana yaz; aradaki uçurum, tasarım ihtiyacının kanıtıdır.' },
            { title: 'Beyaz sayfa sorusunu sor', text: '"Bu işi bugün, bugünkü araçlarla sıfırdan kursam nasıl kurardım?" Mevcut düzeni savunmak yasak; her adım "müşteriye ne katıyor?" sorusuna cevap veremiyorsa yeni çizimde yer alamaz.' },
            { title: 'Yeni yolu küçük alanda dene', text: 'Yeni tasarımı tek ürün grubunda veya tek müşteri tipinde pilot olarak çalıştır. Köklü değişimin riski büyüktür; pilot, ucuz ders alma yeridir.' },
            { title: 'İnsanları geçişte yalnız bırakma', text: 'Yeni süreçte rolü değişen herkese yeni görevini, eğitimini ve geçiş takvimini açıkça söyle. Belirsizlik direnci büyütür; dürüst ve erken anlatım küçültür.' },
          ]},
          { t: 'callout', kind: 'warn', title: 'Dikkat', text: 'BPR\'ın kötü şöhreti, 1990\'larda birçok şirketin onu toplu işten çıkarmanın süslü adı olarak kullanmasından gelir; bu uygulamaların önemli kısmı başarısız oldu çünkü korkuya düşen çalışanlar değişimi taşımadı. Amaç insan azaltmak değil, değersiz işi azaltmaktır.' },
          { t: 'callout', kind: 'tip', title: 'İpucu', text: 'Sıfırdan tasarlarken en verimli soru şudur: "Bu adımı hiç yapmasak müşteri fark eder mi?" Fark etmiyorsa o adım gelenektir, gereklilik değil. Çoğu eski süreçte böyle adımlar, bir zamanlar yaşanmış tek bir olayın kalıcı bekçileridir.' },
        ],
      },
      {
        slug: 'vaka',
        title: 'Gerçek Vaka & Fayda',
        blocks: [
          { t: 'callout', kind: 'case', title: 'Vaka: Ford\'un muhasebesi ve Mazda\'nın beş kişisi', text: 'Hammer\'ın 1990 makalesindeki en ünlü örnek Ford\'un fatura ödeme birimidir. Ford, Kuzey Amerika\'da satıcı faturalarını ödeyen yüzlerce kişilik biriminde bilgisayarlaşmayla kayda değer bir küçülme planlıyordu; ta ki ortağı Mazda\'nın aynı işi yalnızca beş kişiyle yürüttüğünü görene kadar. Fark teknoloji değil süreçti. Ford\'da sipariş, irsaliye ve fatura ayrı ayrı dolaşıyor, memurlar zamanlarının çoğunu tutmayan belgeleri eşleştirmeye harcıyordu. Yeniden tasarımda fatura, sürecin merkezinden çıkarıldı: sipariş veri tabanına girildi, gelen mal siparişle kapıda eşleşti, eşleşen mal için ödeme kendiliğinden yapıldı. Hammer, Ford\'un bu bölümde çalışan sayısını yüzde 75 azalttığını yazar. Ders nettir: eski süreci otomatikleştirmek değil, sorgulamak kazandırır.' },
          { t: 'h2', text: 'Gerçek fayda' },
          { t: 'ul', items: [
            'Sıçramalı kazanç sağlar: yüzde beşlik cilaların ulaşamayacağı, kat kat hızlanma ve maliyet düşüşü ancak yol değişince gelir.',
            'Fosil adımları temizler: yıllardır kimsenin "neden" diye sormadığı imzalar, formlar ve duraklar görünür olur ve elenir.',
            'Teknoloji yatırımını akıllandırır: önce süreç sorgulanınca, bilgisayar eski karmaşayı hızlandırmak yerine yeni sadeliği mümkün kılar.',
          ]},
        ],
      },
    ],
  },
  {
    slug: 'scor-modeli',
    section: 'surec-kalite',
    title: 'SCOR Modeli',
    question: 'Tedarik zincirimin neresi aksıyor, neyle kıyaslayayım?',
    summary: 'Tedarik zincirini Planla-Tedarik Et-Üret-Teslim Et-İade Al adlı ortak sürece ve ortak ölçülere bölen, kıyaslamayı mümkün kılan referans modeli.',
    tags: ['tedarik zinciri', 'kıyaslama', 'ölçüm'],
    pages: [
      {
        slug: 'kavram',
        title: 'Kavram',
        blocks: [
          { t: 'callout', kind: 'simple', title: 'Bir cümlede', text: 'SCOR, malın ham maddeden müşteriye (ve iadeyle geri) yaptığı bütün yolculuğu beş ortak sürece böler ve her birine ortak ölçüler koyar; ortak dil sayesinde zincirin aksayan halkasını bulur ve kendini başkalarıyla kıyaslarsın.' },
          { t: 'callout', kind: 'ornek', title: 'Atölyeden örnek', text: 'Mobilya imalatçısı Veli müşteri kaçırıyor ama sebebini bilmiyor: "Bizde her şey normal, herkes çalışıyor." SCOR gözlüğüyle işi beşe bölüyor. Planla: gelecek ay kaç dolap satılır, kimse hesaplamıyor. Tedarik et: sunta siparişi hep son dakika, tedarikçi iki günde bir geç getiriyor. Üret: atölye aslında hızlı, iki günde dolap çıkıyor. Teslim et: nakliyeci haftada bir gün müsait, biten dolap beş gün bekliyor. İade al: montajda hasar çıkarsa süreç belirsiz, herkes birbirini arıyor. Tek tek bakınca "normal" görünen iş, beş parçaya bölününce konuşuyor: darboğaz üretim değil, plansızlık ve teslimat.' },
          { t: 'p', text: 'SCOR (Supply Chain Operations Reference, tedarik zinciri işlemleri referans modeli), 1996\'da Tedarik Zinciri Konseyi (Supply Chain Council) tarafından yayımlandı; bugün ASCM (Association for Supply Chain Management) tarafından yaşatılıyor. Amacı, her şirketin kendi diliyle anlattığı tedarik zincirini herkes için aynı çatıya oturtmaktır: süreçler aynı adla anılırsa, ölçüler aynı tanımla ölçülürse, şirketler hem kendi içlerini görebilir hem birbirleriyle kıyaslanabilir.' },
          { t: 'h2', text: 'Beş temel süreç' },
          { t: 'table', head: ['Süreç', 'Soru', 'Atölyede karşılığı'], rows: [
            ['Planla (Plan)', 'Talep ne olacak, kaynağı nasıl dağıtırız?', 'Gelecek ay kaç dolap satılır, malzeme ve usta yeter mi?'],
            ['Tedarik Et (Source)', 'Girdileri kimden, nasıl, ne zaman alırız?', 'Sunta, menteşe, boya siparişi ve tedarikçi ilişkisi'],
            ['Üret (Make)', 'Ürünü nasıl üretir, kaliteyi nasıl sağlarız?', 'Kesim, montaj, boya: atölyenin içindeki iş'],
            ['Teslim Et (Deliver)', 'Sipariş, sevkiyat ve faturalama nasıl işler?', 'Dolabın müşteriye ulaşması ve parasının alınması'],
            ['İade Al (Return)', 'Hatalı veya fazla ürün nasıl geri döner?', 'Hasarlı dolabın alınması, tamiri, müşterinin telafisi'],
          ]},
          { t: 'p', text: 'Modelin ikinci gücü ortak ölçülerdir. SCOR her sürece tanımı belli ölçüler bağlar: zamanında ve eksiksiz teslim edilen sipariş oranı, siparişten teslimata geçen toplam süre, zincirin toplam maliyeti, paranın malzemeye yatırılışından müşteriden dönüşüne kadar geçen gün gibi. Tanım ortak olunca "bizde teslimat iyi" cümlesi yerini "siparişlerin yüzde 82\'si söz verilen günde ve eksiksiz gitti" cümlesine bırakır.' },
          { t: 'p', text: 'SCOR bir iyileştirme tekniği değil, haritadır: sorunun zincirin hangi halkasında olduğunu gösterir. Halka bulunduktan sonra oraya bu bölümdeki diğer aletler girer: plansızlığa planlama disiplini, üretim hatasına Altı Sigma, stok şişkinliğine JIT, hantal sürece yeniden tasarım.' },
        ],
      },
      {
        slug: 'uygulama',
        title: 'Nasıl Uygulanır',
        blocks: [
          { t: 'steps', items: [
            { title: 'Zincirini beş sürece böl', text: 'Kendi işini SCOR başlıklarıyla yaz: bizde Planla ne demek, Tedarik Et kim, Teslim Et nasıl işliyor, İade Al diye bir sürecimiz var mı? Adı ve sahibi olmayan süreç, genelde aksayan süreçtir.' },
            { title: 'Her sürece bir-iki ölçü bağla', text: 'Başlangıç için dört ölçü yeter: zamanında ve eksiksiz teslim oranı, siparişten teslimata geçen gün, iade ve şikayet oranı, stokta bağlı para. Üç ay boyunca sadece say; düzeltmeye kalkma.' },
            { title: 'En zayıf halkayı seç ve kıyasla', text: 'Sayılar hangi süreçte en kötüyse iyileştirme oraya gider. Mümkünse kıyas al: sektör raporları, tedarikçilerin ve müşterilerin deneyimi, benzer işletmeler. Kıyas, "iyi"nin ölçüsünü içeriden dışarıya taşır.' },
            { title: 'İyileştirmeyi doğru alete devret', text: 'SCOR teşhis koyar, tedaviyi diğer yöntemler yapar: seçtiğin halkada PDCA turu aç, israfı yalın gözle tara, gerekirse süreci yeniden tasarla. Sonucu yine aynı SCOR ölçüsüyle doğrula.' },
          ]},
          { t: 'callout', kind: 'tip', title: 'İpucu', text: 'İade Al sürecini atlama: küçük işletmelerin çoğunda en tanımsız süreç budur ve müşteri kaybının sessiz sebebidir. Hasarlı ürünü kolay ve hızlı telafi edilen müşteri, çoğu zaman hiç sorun yaşamayandan bile sadık çıkar.' },
          { t: 'callout', kind: 'warn', title: 'Dikkat', text: 'SCOR kurumsal bir çerçevedir; küçük işletme onu belge yığınına çevirirse boğulur. Beş süreç adı, dört ölçü ve bir sayfa: bu kadarı özün tamamını taşır. Model sana hizmet etmeli, sen modele değil.' },
        ],
      },
      {
        slug: 'vaka',
        title: 'Gerçek Vaka & Fayda',
        blocks: [
          { t: 'callout', kind: 'case', title: 'Vaka: Ortak dil arayışından sektör standardına', text: 'SCOR, 1996\'da danışmanlık şirketleri PRTM ve AMR\'nin öncülüğünde, aralarında büyük sanayi ve teknoloji şirketlerinin bulunduğu 69 gönüllü şirketin kurduğu Tedarik Zinciri Konseyi\'nin ortak çalışmasıyla yayımlandı. Dert gerçekti: her şirket zincirini kendi diliyle anlatıyor, "teslim performansı" gibi kavramlar firmadan firmaya başka şey ifade ediyor, bu yüzden ne sağlıklı kıyas ne de ortak iyileştirme yapılabiliyordu. Model, süreç adlarını ve ölçü tanımlarını standartlaştırarak bu duvarı kaldırdı. Konsey 2014\'te APICS ile birleşti; model bugün ASCM çatısında yaşıyor ve dijital zincirlere uyarlanan güncel sürümüyle (SCOR DS) dünyada tedarik zinciri eğitiminin ve kıyaslama çalışmalarının ortak referansı olmayı sürdürüyor.' },
          { t: 'h2', text: 'Gerçek fayda' },
          { t: 'ul', items: [
            'Suçu doğru yere koyar: "işler yavaş" şikayeti, beş süreçten hangisinin kaç gün yediğini gösteren bir teşhise dönüşür.',
            'Kıyas imkanı verir: ortak tanımlı ölçüler sayesinde işletme kendini geçen yılıyla ve benzerleriyle dürüstçe karşılaştırır.',
            'Tedarikçi ve müşteriyle ortak dil kurar: zincirin iki ucuyla aynı kavramlarla konuşmak, pazarlığı da iş birliğini de kolaylaştırır.',
          ]},
        ],
      },
    ],
  },
]
