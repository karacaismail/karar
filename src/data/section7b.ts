import type { DecisionModel } from '../types'

export const section7bModels: DecisionModel[] = [
  {
    slug: 'balik-kilcigi',
    section: 'surec-kalite',
    title: 'Balık Kılçığı Diyagramı (Ishikawa)',
    question: 'Bu sorunun asıl sebebi hangi koldan geliyor?',
    summary: 'Bir sorunun olası sebeplerini altı ana kol (makine, malzeme, metot, insan, ölçüm, ortam) altında toplayıp haritalayan, Kaoru Ishikawa\'nın neden-sonuç diyagramı.',
    tags: ['kök neden', 'neden-sonuç', 'kalite araçları'],
    areas: ['Üretim ve atölye', 'Hizmet ve servis', 'Kalite ekipleri', 'Sorun çözme toplantıları'],
    viz: {
      kind: 'table',
      head: ['Kol (6M)', 'Soru', 'Örnek olası sebep'],
      rows: [
        ['Makine', 'Ekipman düzgün çalışıyor mu?', 'Bakımı geciken tezgah titriyor'],
        ['Malzeme', 'Girdi doğru ve tutarlı mı?', 'Yeni tedarikçinin sacı daha yumuşak'],
        ['Metot', 'İş doğru yöntemle mi yapılıyor?', 'Yazılı iş sırası yok, herkes farklı yapıyor'],
        ['İnsan', 'Bilgi ve eğitim yeterli mi?', 'Yeni usta ayar eğitimi almadı'],
        ['Ölçüm', 'Ölçü aletleri doğru mu?', 'Kumpas ayarı kaymış, herkes yanlış ölçüyor'],
        ['Ortam', 'Sıcaklık, nem, düzen uygun mu?', 'Kış aylarında atölye soğuk, yapıştırıcı geç kuruyor'],
      ],
      accentCol: 0,
      note: 'Sorunu balığın başına yaz; altı kolu tek tek tara, kimseyi atlamadan.',
    },
    pages: [
      {
        slug: 'kavram',
        title: 'Kavram',
        blocks: [
          { t: 'callout', kind: 'simple', title: 'Bir cümlede', text: 'Bir sorunun sebebini tahminle değil haritayla ara: sorunu balığın başına yaz, olası sebepleri altı kılçık üzerine diz (makine, malzeme, metot, insan, ölçüm, ortam) ve en güçlü şüpheliyi veriyle doğrula.' },
          { t: 'callout', kind: 'ornek', title: 'Atölyeden örnek', text: 'Boyahanede kapıların bir kısmı pürüzlü çıkıyor. Usta Kemal "boya kötü" diyor, çırak "tabanca eski" diyor, patron "acele ediyorsunuz" diyor. Tartışma bitmiyor çünkü herkes kendi gördüğü kola bakıyor. Tahtaya bir balık çiziyorlar: baş kısmına "pürüzlü boya" yazılıyor, altı kılçığa tek tek soru soruluyor. Makine: tabanca memesi aşınmış mı? Malzeme: yeni parti tinerin oranı farklı mı? Metot: kat aralarında bekleme süresine uyuluyor mu? İnsan: hafta sonu gelen yardımcı eğitimli mi? Ölçüm: viskozite hiç ölçülüyor mu? Ortam: tozlu zımpara bölümünün kapısı boyahaneye mi açılıyor? Liste bitince en güçlü üç şüpheli çıkıyor ve sırayla deneniyor. Suçlu ortam çıkıyor: zımpara tozu boya kurumadan yüzeye konuyor. Kapıya perde takılıyor, sorun bitiyor.' },
          { t: 'p', text: 'Bu diyagramı 1943\'te Japon kalite öncüsü Kaoru Ishikawa geliştirdi; bu yüzden Ishikawa diyagramı da denir. Şekli balık iskeletine benzediği için balık kılçığı adı yerleşti: sorun balığın başıdır, ana sebep grupları omurgaya bağlanan kalın kılçıklardır, tek tek sebepler de bu kılçıkların dallarıdır.' },
          { t: 'h2', text: 'Altı kol: 6M' },
          { t: 'table', head: ['Kol', 'Neye bakar?', 'Atölyeden örnek soru'], rows: [
            ['Makine', 'Tezgah, alet, ekipman', 'Bakım zamanında yapıldı mı, ayar kaydı mı?'],
            ['Malzeme', 'Ham madde ve girdiler', 'Parti mi değişti, tedarikçi mi değişti?'],
            ['Metot', 'İşin yapılış biçimi', 'Yazılı bir iş sırası var mı, herkes aynı mı yapıyor?'],
            ['İnsan', 'Bilgi, eğitim, dikkat', 'Yeni gelen eğitildi mi, yorgunluk saati mi?'],
            ['Ölçüm', 'Ölçü aletleri ve sayım biçimi', 'Kumpas doğru mu, herkes aynı şekilde mi ölçüyor?'],
            ['Ortam', 'Sıcaklık, nem, ışık, düzen', 'Mevsim mi değişti, ortam tozlu mu, yer dar mı?'],
          ]},
          { t: 'p', text: 'Diyagramın asıl gücü tartışmayı düzene sokmasıdır. Sorun toplantılarında herkes ilk aklına gelen sebebi savunur ve en yüksek ses kazanır. Balık kılçığı ise "önce bütün şüphelileri listeleyelim, sonra seçelim" der. Böylece kimsenin aklına gelmeyen kol (çoğu zaman ölçüm ve ortam) da masaya gelir.' },
          { t: 'p', text: 'Önemli uyarı: diyagram sebebi kanıtlamaz, sadece şüphelileri toplar. Kılçığa yazılan her madde bir tahmindir; hangisinin gerçek suçlu olduğu ancak sayarak ve deneyerek anlaşılır. Bu yüzden balık kılçığı çoğu zaman PDCA veya Altı Sigma gibi yöntemlerin "sebep arama" adımında kullanılır.' },
        ],
      },
      {
        slug: 'uygulama',
        title: 'Nasıl Uygulanır',
        blocks: [
          { t: 'steps', items: [
            { title: 'Sorunu tek cümleyle balığın başına yaz', text: '"Kalite kötü" değil; "bu ay 30 kapıdan 6\'sı pürüzlü çıktı" gibi somut ve sayılabilir bir sorun yaz. Bulanık baş, bulanık kılçık üretir.' },
            { title: 'İşi bilenleri topla, altı kolu tek tek sor', text: 'Diyagramı tek başına çizme; işi bizzat yapan usta ve çırakla birlikte çiz. Her kol için "bu koldan kaynaklanıyor olabilir mi?" diye sor ve her tahmini yaz, eleme yapmadan.' },
            { title: 'Her sebebe "neden?" diye bir kat daha in', text: '"İnsan: dikkatsizlik" yazıp geçme; "neden dikkatsiz?" diye sor. Cevap "gece vardiyasında tek kişi çalışıyor" ise gerçek dal budur. Kişiyi suçlayan dal, genelde daha derindeki bir süreç dalını gizler.' },
            { title: 'En güçlü şüphelileri seç ve veriyle doğrula', text: 'Kılçıktaki bütün dallardan en olası iki-üç tanesini işaretle. Her birini küçük bir denemeyle veya sayımla sına: şüpheli malzemeyse eski partiyle bir gün çalış, fark var mı bak. Kanıtlanan sebebi düzelt, diyagramı sakla.' },
          ]},
          { t: 'callout', kind: 'tip', title: 'İpucu', text: 'Diyagramı büyük bir kağıda veya tahtaya çiz ve sorunun yaşandığı yerin yakınına as. Birkaç gün asılı kalan balık kılçığına ustalar geçerken yeni dal ekler; en değerli şüpheliler çoğu zaman toplantıda değil, iş başında akla gelir.' },
          { t: 'callout', kind: 'warn', title: 'Dikkat', text: 'En sık yapılan hata, diyagramı çizip en kalabalık kolu suçlu ilan etmektir. Dal sayısı kanıt değildir: insan koluna beş tahmin, ölçüm koluna bir tahmin yazılmış olabilir ama gerçek suçlu o tek ölçüm dalı olabilir. Seçimi tahmin sayısı değil, veri yapmalı.' },
        ],
      },
      {
        slug: 'vaka',
        title: 'Gerçek Vaka & Fayda',
        blocks: [
          { t: 'callout', kind: 'case', title: 'Vaka: Kawasaki tersanelerinden dünyaya', text: 'Kaoru Ishikawa, diyagramın ilk halini 1943\'te Tokyo Üniversitesi\'nde mühendislerle çalışırken çizdi ve yöntem, Kawasaki\'nin tersanelerinde kalite çalışmalarında kullanılarak olgunlaştı. Ishikawa\'nın asıl büyük katkısı diyagramı uzman aracı olmaktan çıkarmasıydı: 1960\'larda öncülük ettiği "kalite çemberleri" hareketinde, sıradan işçilerden oluşan küçük gruplar kendi bölümlerinin sorunlarını bu diyagramla tartışıp çözmeye başladı. Balık kılçığı, Japon kalite hareketinin "yedi temel kalite aracı"ndan biri sayıldı; bu yedi araç, ileri matematik bilmeyen herkesin kullanabileceği kadar basit seçilmişti. Bugün diyagram, otomotivden hastanelere kadar dünyanın her yerinde kök neden analizinin standart ilk adımıdır ve Ishikawa, Deming ile birlikte Japon kalite devriminin kurucu isimlerinden biri olarak anılır.' },
          { t: 'h2', text: 'Gerçek fayda' },
          { t: 'ul', items: [
            'Suçlamayı durdurur: tartışma "kim yaptı"dan çıkıp "hangi koldan geliyor"a döner; insanlar savunmayı bırakıp aramaya katılır.',
            'Kör noktayı gösterir: ölçüm ve ortam gibi kimsenin aklına gelmeyen kollar zorla masaya geldiği için gizli sebepler yakalanır.',
            'Herkesin katılabildiği bir dil kurar: çizmesi beş dakika süren bu şekli çırak da patron da anlar; sorun çözme uzman tekelinden çıkar.',
          ]},
        ],
      },
    ],
  },
  {
    slug: 'gap-analizi',
    section: 'strateji-rekabet',
    title: 'Gap Analizi (Boşluk Analizi)',
    question: 'Bulunduğum yer ile olmak istediğim yer arasında ne kadar fark var?',
    summary: 'Mevcut durumu ve hedef durumu aynı ölçüyle yazıp aradaki boşluğu görünür yapan, sonra bu boşluğu kapatacak adımları planlayan basit strateji aracı.',
    tags: ['mevcut durum', 'hedef', 'planlama'],
    areas: ['İşletme stratejisi', 'Kişisel gelişim', 'Ekip hedefleri', 'Yatırım planlama'],
    viz: {
      kind: 'curve',
      xLabel: 'Zaman (ay)',
      yLabel: 'Aylık üretim (adet)',
      series: [
        { name: 'Mevcut gidişat', data: [[0, 100], [3, 104], [6, 108], [9, 112], [12, 116]] },
        { name: 'Hedef', data: [[0, 100], [3, 120], [6, 145], [9, 170], [12, 200]] },
      ],
      marks: [{ x: 12, label: 'Boşluk: 84 adet' }],
      note: 'İki çizginin arası boşluktur; plan, bu arayı kapatan adımların listesidir.',
    },
    pages: [
      {
        slug: 'kavram',
        title: 'Kavram',
        blocks: [
          { t: 'callout', kind: 'simple', title: 'Bir cümlede', text: 'Önce dürüstçe "şu an neredeyim?" diye yaz, sonra "nerede olmak istiyorum?" diye yaz; ikisinin arasındaki fark senin boşluğundur ve plan dediğin şey, bu boşluğu kapatan adımların listesinden başka bir şey değildir.' },
          { t: 'callout', kind: 'ornek', title: 'Esnaftan örnek', text: 'Lokantacı Nurten Hanım büyümek istiyor ama "büyümek" havada bir laf. Oturup iki sütun yazıyor. Mevcut durum: günde 80 tabak satış, 2 usta, servis sadece salonda, kayıtlı müşteri listesi yok. Hedef durum (bir yıl sonra): günde 140 tabak, 3 usta, paket servis var, en az 500 kayıtlı müşteri. Şimdi boşluklar tek tek görünüyor: 60 tabaklık satış boşluğu, 1 ustalık insan boşluğu, sıfırdan kurulacak paket servis boşluğu, sıfırdan kurulacak müşteri listesi boşluğu. Her boşluğun karşısına bir adım yazılıyor: paket servis için anlaşma, usta ilanı, kasada telefon numarası toplama. "Büyüyeceğiz" lafı, dört boşluk ve dört adıma dönüştü.' },
          { t: 'p', text: 'Gap İngilizce\'de boşluk, aralık demektir. Gap analizi, yönetimin en eski ve en sade araçlarından biridir: mevcut durum ile istenen durum arasındaki farkı aynı ölçü birimiyle ortaya koyar. Gücü basitliğindedir; çünkü çoğu işletmenin asıl sorunu hedefsizlik değil, hedefin mevcut durumla hiç yan yana konmamasıdır.' },
          { t: 'h2', text: 'Analizin üç parçası' },
          { t: 'table', head: ['Parça', 'Soru', 'Kural'], rows: [
            ['Mevcut durum', 'Şu an gerçekte neredeyiz?', 'Sayıyla ve dürüstçe yaz; süsleme yapma'],
            ['Hedef durum', 'Belirli bir tarihte nerede olmak istiyoruz?', 'Aynı ölçüyle ve tarih vererek yaz'],
            ['Boşluk ve köprü', 'Aradaki fark ne, nasıl kapanır?', 'Her boşluğa en az bir somut adım yaz'],
          ]},
          { t: 'p', text: 'En kritik kural, iki durumu da aynı ölçüyle yazmaktır. "Şu an işler yavaş, hedefimiz büyümek" cümlesinde boşluk ölçülemez. "Şu an ayda 100 adet, hedef 200 adet" cümlesinde boşluk tam 100 adettir; artık kaç tezgah, kaç usta, kaç müşteri gerektiği hesaplanabilir.' },
          { t: 'p', text: 'Gap analizinin gizli faydası, kendiliğinden kapanmayacak boşlukları erken göstermesidir. Mevcut gidişatını ileriye doğru çizersen (bu hızla bir yılda nereye varırım?), hedef çizgisiyle arasındaki makas çoğu zaman büyür. Bu makası görmek, "aynı şeyleri yaparak farklı sonuç bekleme" hatasından kurtarır: boşluk ancak yeni bir adımla kapanır.' },
        ],
      },
      {
        slug: 'uygulama',
        title: 'Nasıl Uygulanır',
        blocks: [
          { t: 'steps', items: [
            { title: 'Mevcut durumu sayıyla yaz', text: 'Konuyu seç (satış, üretim, beceri, para) ve bugünkü durumu ölçülebilir biçimde yaz: kaç adet, kaç lira, kaç müşteri, kaç kişi. Kendine iltimas geçme; şişirilmiş mevcut durum bütün analizi çürütür.' },
            { title: 'Hedef durumu aynı ölçüyle ve tarihle yaz', text: 'Hedefi aynı birimle ve net bir tarihle yaz: "bir yıl sonra ayda 200 adet". Ölçüsü ve tarihi olmayan hedef bir dilektir, analiz edilemez.' },
            { title: 'Boşlukları tek tek listele', text: 'Aradaki farkı parçalara ayır: satış boşluğu, kapasite boşluğu, insan boşluğu, bilgi boşluğu, para boşluğu. Tek büyük boşluk korkutur; parçalanmış boşluk plana dönüşür.' },
            { title: 'Her boşluğa köprü adımı yaz ve tarih ver', text: 'Her boşluğun karşısına en az bir somut adım, bir sorumlu ve bir tarih yaz. Sonra düzenli aralıklarla iki çizgiye yeniden bak: boşluk daralıyor mu, açılıyor mu?' },
          ]},
          { t: 'callout', kind: 'tip', title: 'İpucu', text: 'Önce mevcut gidişatını ileri doğru uzat: "hiçbir şey değiştirmezsem bir yıl sonra neredeyim?" Bu çizgi ile hedef çizgisi arasındaki fark, gerçek boşluğundur. Çoğu kişi bugün ile hedefi karşılaştırır; oysa asıl karşılaştırma, hedef ile "böyle giderse varacağın yer" arasındadır.' },
          { t: 'callout', kind: 'warn', title: 'Dikkat', text: 'İki tuzak vardır: mevcut durumu güzelleyerek boşluğu küçük göstermek ve ulaşılmaz hedef koyup boşluğu umutsuzlaştırmak. İlki seni rehavete, ikincisi ekibi yılgınlığa götürür. Boşluk, dürüst ama kapatılabilir olmalı; çok büyükse hedefi kademelere böl.' },
        ],
      },
      {
        slug: 'vaka',
        title: 'Gerçek Vaka & Fayda',
        blocks: [
          { t: 'callout', kind: 'case', title: 'Vaka: Planlamanın temel taşı olarak boşluk', text: 'Gap analizi tek bir şirketin buluşu değil, modern planlamanın ortak temelidir; kökleri 1960\'larda kurumsal planlamayı sistemleştiren yazarlara, özellikle "strateji" kavramını şirket yönetimine taşıyan Igor Ansoff\'un çalışmalarına dayanır. Ansoff, şirketin mevcut gidişatıyla ulaşacağı nokta ile hedefleri arasındaki farkı planlamanın çıkış noktası sayıyordu: boşluk yoksa yeni strateji gerekmez, boşluk varsa strateji tam olarak bu boşluğu kapatma işidir. Aynı mantık bugün her alanda standarttır: işletmeler bütçe hedefleriyle gerçekleşen satışları, kalite ekipleri mevcut hata oranıyla hedef oranı, eğitimciler öğrencinin bulunduğu seviye ile beklenen seviyeyi aynı yöntemle karşılaştırır. Yöntemin altmış yılı aşkın süredir her sektörde kullanılıyor olması, gücünün karmaşıklığından değil, "önce farkı dürüstçe ölç" ilkesinin evrenselliğinden geldiğini gösterir.' },
          { t: 'h2', text: 'Gerçek fayda' },
          { t: 'ul', items: [
            'Hayali plana çevirir: "büyüyeceğiz" gibi havada duran niyetler, ölçülmüş boşluklara ve tarihli adımlara dönüşür.',
            'Rehaveti erken bozar: mevcut gidişatın hedefe yetmeyeceği, iş işten geçmeden çizgide görünür.',
            'Kaynağı doğru yere yollar: para ve emek, en büyük boşluğa gider; küçük boşluklara büyük yatırım israfı önlenir.',
          ]},
        ],
      },
    ],
  },
  {
    slug: 'benchmarking',
    section: 'strateji-rekabet',
    title: 'Benchmarking (Kıyaslama)',
    question: 'Bu işi dünyada en iyi kim yapıyor ve ondan ne öğrenebilirim?',
    summary: 'Kendi performansını en iyilerle aynı ölçüyle karşılaştırıp aradaki farkın nasıl kapanacağını onların yöntemlerinden öğrenme disiplini; Xerox\'un 1979\'da başlattığı klasik yaklaşım.',
    tags: ['kıyaslama', 'en iyi uygulama', 'rekabet'],
    areas: ['İşletme yönetimi', 'Üretim ve maliyet', 'Hizmet kalitesi', 'Kişisel ustalık'],
    viz: {
      kind: 'bars',
      categories: ['Teslim süresi (gün)', 'Hata oranı (%)', 'Birim maliyet (endeks)', 'Müşteri puanı (10 üzeri)'],
      series: [
        { name: 'Bizim işletme', values: [12, 6, 100, 6.5] },
        { name: 'Sektörün en iyisi', values: [4, 1.5, 70, 9] },
      ],
      note: 'Aynı ölçüyle yan yana koymadan fark görünmez; kıyaslama farkı sayıya döker.',
    },
    pages: [
      {
        slug: 'kavram',
        title: 'Kavram',
        blocks: [
          { t: 'callout', kind: 'simple', title: 'Bir cümlede', text: 'Kendini dünle değil, en iyiyle karşılaştır: işini en iyi yapanın sayılarını ve yöntemlerini incele, aradaki farkı ölç ve onun yöntemini kendi işine uyarlayarak farkı kapat; kopyalamak değil, öğrenmek.' },
          { t: 'callout', kind: 'ornek', title: 'Esnaftan örnek', text: 'Oto tamircisi Selim, müşterilerinin "araba üç gün sizde kalıyor" şikayetinden bıkmış. Şehrin öbür ucundaki bir servisin aynı işi bir günde teslim ettiğini duyuyor. Kızmak yerine gidip bakıyor: arkadaş ilişkisi kurup yarım gün servisi izliyor. Fark yöntemde: onlar arabayı almadan önce telefonda arızayı sorup parçayı sipariş ediyor; araba geldiğinde parça rafta hazır. Selim\'in dükkanında ise parça, araba söküldükten sonra aranıyor ve iki gün parça bekleniyor. Selim aynı usulü kendi dükkanına uyarlıyor: randevuda arıza sorgusu, önden parça siparişi. Teslim süresi üç günden bir güne iniyor. Selim rakibini kopyalamadı; işin en iyisinden bir yöntem öğrendi.' },
          { t: 'p', text: 'Benchmark, ölçüm işlerinde kullanılan sabit nirengi noktası demektir; benchmarking de kendini sabit bir referansla, yani en iyiyle ölçmek anlamına gelir. Yöntemin özü iki adımdır: önce farkı aynı ölçüyle sayıya dök (onlar kaç günde, biz kaç günde?), sonra farkın arkasındaki yöntemi anla (onlar neyi bizden farklı yapıyor?). Sayı olmadan kıyas dedikodudur; yöntem anlaşılmadan sayı sadece moral bozar.' },
          { t: 'h2', text: 'Kıyaslamanın türleri' },
          { t: 'table', head: ['Tür', 'Kiminle kıyaslarsın?', 'Örnek'], rows: [
            ['İç kıyaslama', 'Kendi işletmenin en iyi bölümü veya vardiyası', 'Gündüz vardiyası neden gece vardiyasından az hata yapıyor?'],
            ['Rakip kıyaslaması', 'Aynı işi yapan en iyi rakip', 'Karşı servis aynı tamiri neden bir günde teslim ediyor?'],
            ['Sektör dışı kıyaslama', 'Başka sektörde aynı süreci en iyi yapan', 'Sipariş hazırlamayı bir yemek paketçisinden öğrenmek'],
          ]},
          { t: 'p', text: 'En verimli tür çoğu zaman sektör dışı kıyaslamadır; çünkü rakip sana mutfağını göstermez ama başka sektördeki bir işletme gösterir. Üstelik büyük sıçramalar genelde oradan gelir: senin sektöründe kimsenin akıl etmediği yöntem, başka bir sektörde yıllardır sıradan bir alışkanlıktır.' },
          { t: 'p', text: 'Kıyaslamanın altın kuralı uyarlamaktır, kopyalamak değil. En iyinin yöntemi, onun ölçeğine ve şartlarına göre kurulmuştur; olduğu gibi taşınırsa çoğu zaman tutmaz. Öğrenilecek şey uygulamanın kendisi değil, arkasındaki ilkedir: "parçayı önceden hazırla" ilkesi, her boydaki tamirciye ayrı biçimde uyarlanır.' },
        ],
      },
      {
        slug: 'uygulama',
        title: 'Nasıl Uygulanır',
        blocks: [
          { t: 'steps', items: [
            { title: 'Kıyaslanacak süreci ve ölçüyü seç', text: 'Her şeyi birden kıyaslama; müşterinin en çok şikayet ettiği veya en çok para kaybettiren tek süreci seç: teslim süresi, hata oranı, maliyet. Ölçü birimini baştan sabitle.' },
            { title: 'Önce kendi sayını dürüstçe çıkar', text: 'Kendi mevcut performansını ölçmeden kıyasa çıkma. "Bizde teslim aşağı yukarı hızlıdır" olmaz; son otuz işin gerçek teslim sürelerini say.' },
            { title: 'En iyiyi bul ve yöntemini incele', text: 'Sektöründe veya dışında o süreci en iyi yapanı belirle. Ziyaret et, gözlemle, sor, sektör raporlarını oku. Amaç sayısını öğrenmek değil, o sayıya hangi yöntemle ulaştığını anlamaktır.' },
            { title: 'İlkeyi uyarla, dene, yeniden ölç', text: 'Öğrendiğin yöntemin ilkesini kendi ölçeğine uyarla ve küçük bir denemeyle başlat. Sonucu aynı ölçüyle yeniden say: fark kapanıyor mu? Kıyaslama tek seferlik gezi değil, düzenli bir alışkanlıktır.' },
          ]},
          { t: 'callout', kind: 'tip', title: 'İpucu', text: 'En kolay başlangıç iç kıyaslamadır: en iyi ustanla ortalama ustanın, en iyi şubeyle ortalama şubenin farkına bak. Kapı dışarı çıkmadan, kimseden izin almadan öğrenebileceğin bu fark çoğu zaman şaşırtıcı derecede büyüktür.' },
          { t: 'callout', kind: 'warn', title: 'Dikkat', text: 'İki tuzağa düşme: birincisi, en iyinin yöntemini anlamadan sadece sayısına bakıp moral bozmak; ikincisi, yöntemi ilkesini anlamadan aynen kopyalamak. Bir de sınır meselesi var: kıyaslama, açık kaynaklardan ve dürüst ilişkilerden öğrenmektir; rakibin gizli bilgisini ele geçirmek kıyaslama değil, hem ayıp hem risklidir.' },
        ],
      },
      {
        slug: 'vaka',
        title: 'Gerçek Vaka & Fayda',
        blocks: [
          { t: 'callout', kind: 'case', title: 'Vaka: Xerox 1979 - kıyaslamanın doğuşu', text: 'Modern benchmarking\'in doğum tarihi bellidir: 1979, Xerox. Fotokopi makinesini icat eden ve pazara uzun yıllar tek başına hükmeden Xerox, 1970\'lerin sonunda şok yaşadı: Canon başta olmak üzere Japon rakipler, makinelerini Xerox\'un üretim maliyetine yakın fiyatlarla satıyordu. Xerox yönetimi kolay açıklamaya (damping yapıyorlar) sığınmak yerine acı soruyu sordu: ya gerçekten bizden çok daha verimlilerse? Şirket, Japonya\'daki ortaklığı Fuji Xerox üzerinden rakiplerin üretim süreçlerini kendi süreçleriyle adım adım, aynı ölçülerle karşılaştırdı ve farkın gerçek olduğunu gördü: montaj süreleri, stok seviyeleri, hata oranları ve dolaylı işçilik açık arayla geriydi. Xerox kıyaslamayı kalıcı bir yönetim aracına çevirdi; hatta depo ve sevkiyat süreçlerini kendi sektöründen değil, sipariş toplamada usta olan katalog satıcısı L.L.Bean\'den öğrenmesiyle ünlendi. Süreci yöneten Robert Camp\'in 1989\'da yazdığı kitap, benchmarking\'i dünyaya ders olarak öğretti ve Xerox\'un toparlanışı yönetim tarihinin klasik vakalarından biri oldu.' },
          { t: 'h2', text: 'Gerçek fayda' },
          { t: 'ul', items: [
            'Kendini kandırmayı bitirir: "biz iyiyiz" hissi, en iyiyle aynı ölçüde yan yana gelince yerini gerçek bir haritaya bırakır.',
            'Denenmiş çözüm getirir: sıfırdan icat etmek yerine, başkasının yıllarca damıttığı yöntemin ilkesini alıp uyarlarsın; ders ucuza gelir.',
            'Hedefe inandırıcılık katar: "teslimi bir güne indireceğiz" hedefi, birinin bunu zaten yaptığı görülünce hayal olmaktan çıkar.',
          ]},
        ],
      },
    ],
  },
  {
    slug: 'monte-carlo-simulasyonu',
    section: 'risk-guvenlik',
    title: 'Monte Carlo Simülasyonu',
    question: 'Belirsiz bir işin sonuçları hangi aralıkta değişebilir?',
    summary: 'Belirsiz bir durumu tek tahminle değil, binlerce rastgele denemeyle hesaplayıp sonuçların olasılık dağılımını çıkaran yöntem; Manhattan Projesi\'nde doğdu, bugün finansın ve mühendisliğin temel aracı.',
    tags: ['belirsizlik', 'olasılık', 'senaryo'],
    areas: ['Risk analizi', 'Proje süresi tahmini', 'Finans ve yatırım', 'Mühendislik'],
    viz: {
      kind: 'curve',
      xLabel: 'Projenin toplam süresi (gün)',
      yLabel: 'Denemelerin yüzdesi',
      series: [
        { name: 'On bin denemenin dağılımı', data: [[30, 0], [35, 2], [40, 8], [45, 18], [50, 24], [55, 20], [60, 14], [65, 8], [70, 4], [75, 1.5], [80, 0.5]] },
      ],
      marks: [
        { x: 45, label: 'Tek tahmin: 45 gün' },
        { x: 62, label: 'Yüzde 90 güvenli söz: 62 gün' },
      ],
      note: 'Tek sayı yerine dağılım: iş çoğu denemede 45-60 gün sürüyor, ama 70 günü aşan denemeler de var.',
    },
    pages: [
      {
        slug: 'kavram',
        title: 'Kavram',
        blocks: [
          { t: 'callout', kind: 'simple', title: 'Bir cümlede', text: 'Geleceği tek sayıyla tahmin etmek yerine, belirsiz işin zarını binlerce kez at: her denemede belirsiz parçalara rastgele ama gerçekçi değerler ver, sonucu kaydet ve sonunda "sonuç şu aralıkta, şu ihtimalle" diyebileceğin bir dağılım elde et.' },
          { t: 'callout', kind: 'ornek', title: 'Şantiyeden örnek', text: 'Müteahhit Veli bir dükkan tadilatına gün veriyor. Yıkım 3-6 gün sürer, tesisat 4-10 gün (eski borular çürükse uzar), sıva-boya 5-8 gün. İyimser toplarsa 12 gün, kötümser toplarsa 24 gün: hangisini söylesin? Torbalı bir oyun kuruyor: her iş için süreleri kağıtlara yazıp geçmiş işlerdeki sıklığına göre torbaya atıyor (tesisatta 10 gün kağıdından az, 5 gün kağıdından çok var; çünkü çürük boru her işte çıkmıyor). Sonra torbalardan çekip topluyor, yüz kez tekrarlıyor. Sonuç: denemelerin çoğu 15-19 gün arasında, ama yüz denemenin yedisi 21 günü aşmış. Veli artık akıllı konuşuyor: müşteriye "18 günde teslim, yüzde doksan güvenle" diyor ve sözleşmeye çürük boru çıkarsa diye pay koyuyor. İşte Monte Carlo bu torba oyununun bilgisayarla binlerce kez yapılmışıdır.' },
          { t: 'p', text: 'Yöntemin mantığı şudur: birçok gerçek iş, her biri belirsiz olan parçaların toplamıdır ve bu toplamın matematiğini elle hesaplamak çoğu zaman imkansızdır. Monte Carlo, hesaplamak yerine dener: her belirsiz parçaya, gerçekçi aralığından rastgele bir değer verir, sonucu hesaplar, bunu binlerce kez tekrarlar. Binlerce sonuç yan yana dizilince ortaya bir dağılım çıkar: en olası aralık, iyimser uç, kötümser uç ve her birinin yüzdesi.' },
          { t: 'h2', text: 'Tek tahmin ile dağılım arasındaki fark' },
          { t: 'table', head: ['Soru', 'Tek tahmin', 'Monte Carlo'], rows: [
            ['İş ne kadar sürer?', '"45 gün"', '"Yüzde 60 ihtimalle 45-60 gün; yüzde 90 güvenle en geç 62 gün"'],
            ['Kötü senaryo görünür mü?', 'Hayır; tek sayı uçları gizler', 'Evet; 70 günü aşan denemeler ve yüzdeleri görünür'],
            ['Söz verirken', 'İyimser sayıyla söz verilir, gecikilir', 'Güven yüzdesi seçilerek söz verilir'],
            ['Tedbir planı', 'Sürpriz sanılır', 'Hangi ihtimale ne pay konacağı bellidir'],
          ]},
          { t: 'p', text: 'Yöntemin çıktısı kesinlik değil, dürüst belirsizliktir. "İş 45 günde biter" cümlesi net görünür ama çoğu zaman yalandır; "yüzde doksan ihtimalle 62 günü geçmez" cümlesi ise ölçülmüş bir sözdür. Karar verirken ikincisi çok daha değerlidir: kredinin taksiti, cezalı teslim tarihi veya stok planı, ortalamaya göre değil kötü uçların ihtimaline göre yapılır.' },
          { t: 'p', text: 'Bir uyarı: simülasyon, girdiği varsayımlar kadar iyidir. Tesisatın süre aralığını yanlış girersen, bilgisayar sana o yanlışın binlerce kez tekrarını verir; sonuç kalabalık ama çürük olur. Bu yüzden aralıklar mümkünse geçmiş işlerin gerçek kayıtlarından çıkarılmalıdır.' },
        ],
      },
      {
        slug: 'uygulama',
        title: 'Nasıl Uygulanır',
        blocks: [
          { t: 'steps', items: [
            { title: 'Sonucu ve belirsiz parçaları belirle', text: 'Neyi merak ediyorsun: toplam süre mi, toplam maliyet mi, yıl sonu karı mı? Sonra bu sonucu etkileyen belirsiz parçaları listele: her işin süresi, malzeme fiyatı, satış adedi.' },
            { title: 'Her parçaya gerçekçi bir aralık ver', text: 'Her belirsiz parça için üç sayı yeter: iyimser, en olası, kötümser. Bu sayıları hisle değil, geçmiş işlerin kayıtlarından ve ustaların tecrübesinden çıkar.' },
            { title: 'Binlerce deneme koştur', text: 'Elektronik tablo veya hazır bir araçla her denemede parçalara aralıklarından rastgele değer verdir, sonucu hesaplat ve bunu binlerce kez tekrarlat. Elle bile yüz denemelik torba oyunu, tek tahminden iyidir.' },
            { title: 'Dağılımı oku ve güven yüzdesiyle karar ver', text: 'Sonuçları küçükten büyüğe diz: ortadaki değer en olası civarı, yüzde doksanlık sınır güvenli sözünü gösterir. Teslim tarihi ve fiyat teklifini bu güven sınırından ver; kötü kuyruk için tedbir payı ayır.' },
          ]},
          { t: 'callout', kind: 'tip', title: 'İpucu', text: 'İlk simülasyonunu geçmişi bilinen bir işe uygula: son yıl bitirdiğin bir projenin girdileriyle koştur ve gerçek sonucun dağılımın neresine düştüğüne bak. Bu prova, hem araca güvenini hem de aralık tahmin etme becerini geliştirir.' },
          { t: 'callout', kind: 'warn', title: 'Dikkat', text: 'En büyük tehlike sahte kesinliktir: binlerce denemeden çıkan renkli grafik, çöp varsayımları bilimsel gösterebilir. İkinci tehlike bağımlılıkları unutmaktır: yağışlı hafta hem yıkımı hem sıvayı birlikte geciktirir; parçaları birbirinden tamamen bağımsız sayarsan kötü senaryoları olduğundan küçük görürsün.' },
        ],
      },
      {
        slug: 'vaka',
        title: 'Gerçek Vaka & Fayda',
        blocks: [
          { t: 'callout', kind: 'case', title: 'Vaka: Manhattan Projesi\'nden finans piyasalarına', text: 'Yöntem, 1940\'larda Los Alamos\'ta, atom çalışmalarının yürütüldüğü Manhattan Projesi çevresinde doğdu. Matematikçi Stanislaw Ulam, bir hastalık döneminde iskambil falının (solitaire) kazanma olasılığını hesaplamaya çalışırken denklemle çözemedi ve aklına basit bir fikir geldi: çözemiyorsan çok sayıda oyna ve say. Bu fikri John von Neumann ile birlikte asıl sorunlarına uyguladılar: nötronların madde içindeki davranışı gibi denklemi elle çözülemeyen süreçleri, ilk bilgisayarlardan ENIAC üzerinde binlerce rastgele deneme koşturarak hesapladılar. Gizli çalışmaya kod adı gerekiyordu; ekipten Nicholas Metropolis, Ulam\'ın kumar düşkünü dayısına atıfla Monako\'nun kumarhane şehri Monte Carlo adını önerdi. Yöntem savaştan sonra hızla sivil hayata yayıldı: bugün bankalar kredi ve piyasa riskini, sigortacılar hasar dağılımlarını, emeklilik planlamacıları birikimin yetip yetmeyeceğini, mühendisler köprü ve uçak tasarımlarının dayanımını, proje yöneticileri de teslim tarihlerini Monte Carlo ile hesaplıyor. Bir kağıt oyunu merakından çıkan fikir, belirsizlik ölçmenin dünya standardı oldu.' },
          { t: 'h2', text: 'Gerçek fayda' },
          { t: 'ul', items: [
            'Tek sayı yalanından kurtarır: "iş 45 günde biter" yerine ihtimalleriyle birlikte dürüst bir aralık konuşulur; verilen söz tutulabilir söz olur.',
            'Kötü senaryoyu önceden gösterir: felaket ihtimali sürpriz olmaktan çıkar; tedbir payı ve B planı, olay olmadan hesaplanır.',
            'Tartışmayı varsayımlara taşır: "bence yetişir, bence yetişmez" kavgası biter; kim hangi aralığa neden inanıyor, o konuşulur ve varsayım düzelince karar da düzelir.',
          ]},
        ],
      },
    ],
  },
  {
    slug: 'kpi-tasarimi',
    section: 'hedef-performans',
    title: 'KPI Tasarımı (Doğru Gösterge Seçimi)',
    question: 'İşimin iyi gidip gitmediğini hangi sayılardan anlarım?',
    summary: 'İşletmenin gidişatını gösteren az sayıda kritik göstergeyi seçme sanatı: sonucu bildiren artçı göstergelerle, sonucu önceden haber veren öncü göstergeleri dengelemek.',
    tags: ['gösterge', 'ölçüm', 'performans'],
    areas: ['İşletme yönetimi', 'Satış ve pazarlama', 'Üretim takibi', 'Ekip yönetimi'],
    viz: {
      kind: 'table',
      head: ['Alan', 'Öncü gösterge (erken haber)', 'Artçı gösterge (kesin sonuç)'],
      rows: [
        ['Satış', 'Haftalık verilen teklif sayısı', 'Aylık ciro'],
        ['Üretim', 'Bakımı zamanında yapılan tezgah oranı', 'Aylık hurda oranı'],
        ['Müşteri', 'Şikayete 24 saatte dönüş oranı', 'Yıl içinde kaybedilen müşteri sayısı'],
        ['Nakit', 'Vadesi yaklaşan alacak listesi', 'Ay sonu kasa bakiyesi'],
      ],
      accentCol: 1,
      note: 'Artçı gösterge karneyi, öncü gösterge direksiyonu verir; ikisi birlikte çalışır.',
    },
    pages: [
      {
        slug: 'kavram',
        title: 'Kavram',
        blocks: [
          { t: 'callout', kind: 'simple', title: 'Bir cümlede', text: 'Her şeyi ölçmeye kalkma; işinin kaderini belirleyen bir avuç sayıyı seç ve bunların en az yarısı, sonucu iş işten geçtikten sonra bildiren değil, önceden haber veren cinsten olsun.' },
          { t: 'callout', kind: 'ornek', title: 'Esnaftan örnek', text: 'Mobilyacı Orhan her ay sonu ciroya bakıyor; ciro düşünce üzülüyor ama iş işten geçmiş oluyor, çünkü bu ayın cirosu iki ay önce verilen tekliflerin sonucu. Muhasebecisinin tavsiyesiyle panosuna iki sayı daha ekliyor: bu hafta verilen teklif sayısı ve teklifi siparişe dönenlerin oranı. Bir ay sonra teklif sayısının düştüğünü görüyor; ciro daha düşmedi ama düşeceği belli. Hemen eski müşterileri aramaya ve ustalık fotoğraflarını paylaşmaya başlıyor; iki ay sonra ciro hiç düşmeden yoluna devam ediyor. Ciro artçı göstergeydi: olan biteni sonradan bildirdi. Teklif sayısı öncü göstergeydi: olacağı önceden haber verdi. Direksiyon öncü göstergede, karne artçı göstergededir.' },
          { t: 'p', text: 'KPI, İngilizce Key Performance Indicator\'ın kısaltmasıdır: kilit performans göstergesi. Buradaki en önemli kelime "kilit"tir. Her işletmede ölçülebilecek yüzlerce sayı vardır; KPI tasarımı bunların içinden, işin kaderini gerçekten belirleyen az sayıdakini seçme işidir. Yüz göstergeli pano, göstergesiz pano kadar kördür: hiçbirine bakılmaz.' },
          { t: 'h2', text: 'Öncü ve artçı gösterge' },
          { t: 'table', head: ['Özellik', 'Artçı gösterge', 'Öncü gösterge'], rows: [
            ['Ne söyler?', 'Sonuç ne oldu (ciro, kar, hurda)', 'Sonuç ne olacak (teklif, ziyaret, bakım)'],
            ['Ne zaman söyler?', 'İş bittikten sonra', 'Henüz vakit varken'],
            ['Müdahale şansı', 'Geçmiş için yok, ders çıkarılır', 'Var; rota düzeltilebilir'],
            ['Zayıf yanı', 'Geç kalır', 'Sonucun garantisi değildir, habercisidir'],
          ]},
          { t: 'p', text: 'İyi bir göstergenin üç şartı vardır: karara bağlı olmalı (sayı kötüleşince ne yapacağın belli), etkilenebilir olmalı (ekibin o sayıyı gerçekten değiştirebilmeli) ve ucuz ölçülmeli (toplaması işin kendisinden uzun sürmemeli). Bu üç şartı sağlamayan gösterge süstür.' },
          { t: 'p', text: 'Bir de görünmez tehlike vardır: insanlar neyle ölçülürse ona göre davranır. Sadece "günlük üretilen adet" ölçülürse ustalar hız için kaliteden kırpar; sadece hız ölçülen çağrı merkezinde telefonlar yarım dinlenip kapatılır. Bu yüzden her önemli gösterge, onun kötüye kullanımını yakalayacak bir denge göstergesiyle eşlenmelidir: adet ile birlikte hata oranı, hız ile birlikte müşteri memnuniyeti.' },
        ],
      },
      {
        slug: 'uygulama',
        title: 'Nasıl Uygulanır',
        blocks: [
          { t: 'steps', items: [
            { title: 'İşin kaderini belirleyen soruları yaz', text: 'Göstergeden önce soru gelir: "işim iyi gidiyor mu?" sorusunu parçala. Yeterince satıyor muyum? Kaliteli üretiyor muyum? Kasada para var mı? Müşteri geri geliyor mu? Her kritik soruya bir gösterge ailesi kurulur.' },
            { title: 'Her soruya bir artçı, bir öncü gösterge seç', text: 'Artçı gösterge sonucu ölçer (aylık ciro), öncü gösterge o sonucun ham maddesini ölçer (haftalık teklif sayısı). "Bu sonucu ne besliyor?" diye sorarsan öncüyü bulursun.' },
            { title: 'Sayıyı azalt, hedef ve eşik koy', text: 'Toplamda 5-10 göstergeyi geçme. Her göstergeye bir hedef (nereye varmak istiyoruz) ve bir alarm eşiği (hangi değerin altı harekete geçirir) yaz. Eşiği olmayan gösterge seyirliktir.' },
            { title: 'Panoya as, düzenli bak, davranışı izle', text: 'Göstergeleri herkesin gördüğü bir panoya yaz ve haftalık kısa bir bakış rutini kur. Birkaç ayda bir de göstergenin kendisini denetle: bu sayı hala doğru davranışı mı üretiyor, yoksa oyun mu oynanıyor?' },
          ]},
          { t: 'callout', kind: 'tip', title: 'İpucu', text: 'Kendine şu testi uygula: "bu gösterge yarın kötüleşse ne yapacağım?" Cevabın yoksa o gösterge kilit değildir, panodan kaldır. Az ama karar doğuran gösterge, çok ama seyirlik göstergeden her zaman değerlidir.' },
          { t: 'callout', kind: 'warn', title: 'Dikkat', text: 'Göstergeyi hedefe çevirdiğin an bozulmaya başlar: ölçülen sayı baskıyla kovalanırsa insanlar işi değil sayıyı düzeltir. Adet baskısı hurdayı saklatır, hız baskısı kaliteyi kırptırır. Her göstergeye bir denge eşi koy ve sayı aniden güzelleşince sevinmeden önce nasıl güzelleştiğini sor.' },
        ],
      },
      {
        slug: 'vaka',
        title: 'Gerçek Vaka & Fayda',
        blocks: [
          { t: 'callout', kind: 'case', title: 'Vaka: Tek sayının körlüğünden dengeli karneye', text: 'Gösterge tasarımının en belgeli dersi, tek sayıyla yönetmenin iflasından çıktı. Yirminci yüzyılın büyük bölümünde Batı şirketleri neredeyse yalnızca finansal sonuçlarla, yani artçı göstergelerle yönetildi; üç aylık kar rakamı güzel göründüğü sürece için için çürüyen kalite, küsen müşteri ve kaçan yetenek görünmüyordu. Buna en ünlü cevap 1992\'de geldi: Robert Kaplan ve David Norton, Harvard Business Review\'da yayımladıkları "Balanced Scorecard" (Dengeli Karne) çalışmasında, bir düzine şirketle yaptıkları araştırmaya dayanarak finansal sonuçların tek başına geleceği yönetemeyeceğini, karneye müşteri, iç süreç ve öğrenme göstergelerinin de eklenmesi gerektiğini gösterdi. Uçak kokpiti benzetmesi klasikleşti: tek göstergeyle uçak uçmaz. Dengeli karne dünyada en yaygın kullanılan yönetim araçlarından biri haline geldi; ölçüm bilimi de bir başka dersi belgeledi: Goodhart kuralı diye anılan ilke, hedefe dönüşen her ölçünün bozulmaya başladığını söyler. İyi KPI tasarımı bu iki dersin toplamıdır: az gösterge, öncü-artçı dengesi ve oyunu bozan denge eşleri.' },
          { t: 'h2', text: 'Gerçek fayda' },
          { t: 'ul', items: [
            'Erken uyarı verir: öncü göstergeler sayesinde kötü ay, gelmeden iki ay önce panoda görünür ve müdahale şansı doğar.',
            'Toplantıyı kısaltır: "işler nasıl?" sorusu his ve hikaye yerine beş-on sayının okunmasıyla cevaplanır; tartışma sayının nedenine odaklanır.',
            'Ekibi hizalar: herkes hangi sayının önemli olduğunu bilince, günlük küçük kararlar da kendiliğinden o sayıları iyileştirme yönüne döner.',
          ]},
        ],
      },
    ],
  },
  {
    slug: 'nakit-akisi-ve-basabas',
    section: 'hedef-performans',
    title: 'Nakit Akışı ve Başabaş Noktası',
    question: 'Kasama giren para çıkanı karşılıyor mu ve kaç satıştan sonra kara geçerim?',
    summary: 'İşletmenin iki hayati hesabı: kasaya fiilen giren-çıkan parayı takip etmek (nakit akışı) ve giderleri karşılamak için gereken satış miktarını bilmek (başabaş noktası).',
    tags: ['nakit', 'başabaş', 'finansal okuryazarlık'],
    areas: ['Küçük işletme', 'Yeni girişim', 'Fiyatlama kararları', 'Aile bütçesi'],
    viz: {
      kind: 'curve',
      xLabel: 'Aylık satış (adet)',
      yLabel: 'Para (bin TL)',
      series: [
        { name: 'Toplam gelir', data: [[0, 0], [100, 40], [200, 80], [300, 120], [400, 160], [500, 200]] },
        { name: 'Toplam gider', data: [[0, 60], [100, 78], [200, 96], [300, 114], [400, 132], [500, 150]] },
      ],
      marks: [{ x: 273, label: 'Başabaş noktası' }],
      note: 'Gider çizgisi sıfırdan değil sabit giderden başlar; iki çizginin kesiştiği satış adedi başabaştır: solunda zarar, sağında kar.',
    },
    pages: [
      {
        slug: 'kavram',
        title: 'Kavram',
        blocks: [
          { t: 'callout', kind: 'simple', title: 'Bir cümlede', text: 'İşletmeyi kağıt üzerindeki kar değil kasadaki para yaşatır: her ay kasaya fiilen giren ve çıkan parayı takip et (nakit akışı) ve giderlerini karşılamak için kaç satış gerektiğini ezbere bil (başabaş noktası).' },
          { t: 'callout', kind: 'ornek', title: 'Esnaftan örnek', text: 'Mermerci Cevdet güzel bir iş almış: 200 bin liralık mutfak tezgahı siparişi, teslimden üç ay sonra ödemeli. Kağıt üzerinde karlı bir iş. Ama mermeri peşin almak zorunda, işçi maaşı her ay peşin, kira peşin. İkinci ayın sonunda kasa boş: iş karlı ama para üç ay sonra gelecek, giderler bugün kapıda. Cevdet ya pahalı borca girecek ya işçi maaşını geciktirecek. Sorunu karsızlık değil, nakit zamanlaması. Bir de komşusu dönerci Ramazan\'a bak: günlük sabit gideri (kira, maaş, elektrik) 4 bin lira; bir dönerden, malzemesi düşülünce 50 lira kalıyor. Demek ki günde 80 döner "yok yere" satılıyor: ilk 80 döner sadece giderleri ödüyor, kar 81\'inci dönerle başlıyor. Ramazan bunu bildiği için her öğlen tezgahtaki sayacı izliyor: 80\'i geçtik mi, geçmedik mi?' },
          { t: 'p', text: 'Bu model iki hesabı birlikte öğretir, çünkü ikisi aynı sorunun iki yüzüdür: işletmem ayakta mı? Nakit akışı zamanlama sorusudur: para ne zaman giriyor, ne zaman çıkıyor? Başabaş noktası miktar sorusudur: giderleri karşılamak için ne kadar satmalıyım? Karlı ama nakitsiz işletme batabilir; nakitli ama başabaşını bilmeyen işletme farkında olmadan zararına satar.' },
          { t: 'h2', text: 'İki hesabın özü' },
          { t: 'table', head: ['Hesap', 'Soru', 'Nasıl hesaplanır?'], rows: [
            ['Nakit akışı', 'Bu ay kasaya fiilen ne girecek, ne çıkacak?', 'Ay ay: beklenen tahsilatlar eksi kesin ödemeler; sonuç eksiyse önceden önlem'],
            ['Kar (karşılaştırma için)', 'İş kağıt üzerinde kazandırıyor mu?', 'Gelir eksi gider; ama paranın ne zaman geleceğini söylemez'],
            ['Başabaş noktası', 'Kaç satıştan sonra kara geçerim?', 'Aylık sabit gider bölü (satış fiyatı eksi birim değişken maliyet)'],
          ]},
          { t: 'p', text: 'Başabaş hesabı için iki gider türünü ayırman gerekir. Sabit gider, hiç satış yapmasan da kapıda bekler: kira, maaşlar, sigorta, abonelikler. Değişken maliyet, her satışla birlikte doğar: malzeme, ambalaj, satış komisyonu. Sattığın her birimin fiyatından değişken maliyetini düşünce kalan paraya katkı payı denir; başabaş noktası, sabit giderlerin bu katkı payına bölümüdür. Ramazan\'ın hesabı tam buydu: 4.000 lira sabit gider bölü 50 lira katkı payı, eşittir günde 80 döner.' },
          { t: 'p', text: 'Nakit akışının altın kuralı ise ileriye bakmaktır: geçmiş ayın hesabı muhasebe, gelecek ayların hesabı yönetimdir. Önümüzdeki üç ayı ay ay yazarsan (kesin girecekler, kesin çıkacaklar), kasanın hangi ay dara gireceğini bugünden görürsün; dar ay görününce de vade istemek, tahsilatı öne çekmek veya harcamayı ertelemek için vaktin olur. Kriz, erken görünen dar aydır; batış, sürpriz olanıdır.' },
        ],
      },
      {
        slug: 'uygulama',
        title: 'Nasıl Uygulanır',
        blocks: [
          { t: 'steps', items: [
            { title: 'Giderlerini ikiye ayır', text: 'Bir kağıda iki sütun aç: satış olmasa da ödenenler (kira, maaş, sigorta) ve her satışla doğanlar (malzeme, ambalaj, komisyon). Bu ayrım hem başabaşın hem fiyatlamanın temelidir.' },
            { title: 'Başabaşını hesapla ve ezberle', text: 'Aylık sabit giderini, bir birimden kalan katkı payına böl (satış fiyatı eksi birim değişken maliyet). Çıkan sayı senin can suyun: ayda veya günde bu kadar satış, sıfır noktasıdır. Bu sayıyı ezbere bilmeyen işletmeci, karda mı zararda mı olduğunu ancak yıl sonunda öğrenir.' },
            { title: 'Üç aylık nakit tablosu kur', text: 'Önümüzdeki üç ayı ay ay yaz: kesinleşmiş tahsilatlar (vadesiyle birlikte) ve kesinleşmiş ödemeler. Her ayın sonunda kasada ne kalacağını hesapla. Eksi görünen ay varsa bugünden çözüm ara: tahsilatı öne çek, ödemeye vade iste, harcamayı ertele.' },
            { title: 'Her yeni işi iki soruyla sına', text: 'Yeni sipariş veya yatırım gelince iki soru sor: bu iş başabaşın üzerine katkı koyuyor mu (fiyatı değişken maliyetin üstünde mi ve sabit gidere pay bırakıyor mu) ve ödeme takvimi kasamı hangi aylarda zorlar? Karlı görünen iş, ödeme vadesi yüzünden kasanı batırabilir.' },
          ]},
          { t: 'callout', kind: 'tip', title: 'İpucu', text: 'Başabaşını gün diline çevir: "ayda 2.400 döner" soyut kalır, "günde 80 döner, yani öğlen ikiye kadar tezgahın yarısı" somuttur. Günlük başabaşını bilen esnaf, ayın kaçında kara geçtiğini takvimde işaretleyebilir; o günden önceki her gün gider ödenir, sonraki her gün kazanılır.' },
          { t: 'callout', kind: 'warn', title: 'Dikkat', text: 'İki ölümcül karıştırma vardır. Birincisi ciroyu kar sanmak: kasadan geçen her para senin değildir; malzemecinin ve verginin payı içindedir. İkincisi karı nakit sanmak: faturası kesilmiş ama tahsil edilmemiş alacak, kira gününde işe yaramaz. Vadeli satış yaparken kağıttaki karı değil, paranın kasaya gireceği tarihi konuş.' },
        ],
      },
      {
        slug: 'vaka',
        title: 'Gerçek Vaka & Fayda',
        blocks: [
          { t: 'callout', kind: 'case', title: 'Vaka: Karlı iken batan işletmeler', text: 'İşletme batışları üzerine yapılan araştırmalar onyıllardır aynı noktaya işaret eder: küçük işletmelerin en yaygın ölüm sebeplerinin başında nakit yönetimi gelir. ABD Küçük İşletme İdaresi (SBA) ve bankaların yayınları, yetersiz nakit ve zayıf finansal takibi başlıca batış nedenleri arasında sayar; girişim dünyasında sık alıntılanan CB Insights derlemesinde de "paranın bitmesi", başarısız girişimlerin kurucularının en çok bildirdiği nedenlerin en üst sıralarındadır. İşin en öğretici yanı şudur: batanların hepsi zarar eden işletmeler değildir. Muhasebe yazınında bu durumun bir adı bile vardır: aşırı büyüme batışı (overtrading). İşletme hızla büyür, siparişler karlıdır; ama büyüyen her sipariş bugün malzeme ve maaş ödemeyi gerektirirken, tahsilat aylar sonra gelir. Kağıt üzerinde zengin, kasada meteliksiz kalan işletme, tam da en parlak göründüğü dönemde ödeyemediği bir maaş veya vergiyle duvara toslar. Başabaş hesabı da aynı yazının eski ve yerleşik aracıdır: maliyet-hacim-kar analizi adıyla yüz yıla yakındır işletme derslerinin temel konusudur; çünkü fiyat verirken ve "bu işe girmeli miyim?" derken ondan basit ve güvenilir bir pusula henüz bulunamamıştır.' },
          { t: 'h2', text: 'Gerçek fayda' },
          { t: 'ul', items: [
            'Sürpriz batışı önler: üç aylık nakit tablosu, dar boğazı aylar önceden gösterir; önlem ucuzken alınır, panik pahalıyken değil.',
            'Fiyat pazarlığında zemin verir: katkı payını bilen esnaf, hangi indirimin hala kazandırdığını, hangisinin zararına satış olduğunu anında bilir.',
            'Büyümeyi güvenli yapar: her yeni siparişin kasaya etkisi önceden hesaplandığı için, karlı ama nakit yutan işler bilerek ve tedbir alınarak kabul edilir.',
          ]},
        ],
      },
    ],
  },
]
