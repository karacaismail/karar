import type { DecisionModel } from '../types'

export const section1Models: DecisionModel[] = [
  {
    slug: 'eisenhower-matrisi',
    section: 'zaman-onceliklendirme',
    title: 'Eisenhower Matrisi',
    question: 'Daha verimli nasıl çalışırım?',
    summary: 'Acil ile önemli olanı ayırt etmeyi öğreten 2×2 önceliklendirme matrisi.',
    tags: ['zaman yönetimi', 'önceliklendirme'],
    pages: [
      {
        slug: 'kavram',
        title: 'Kavram',
        blocks: [
          { t: 'callout', kind: 'simple', title: 'Bir cümlede', text: 'Önce hangi işin gerçekten önemli, hangisinin sadece acele olduğunu ayır; önemli olanı kendin yap, acele ama önemsiz olanı başkasına ver.' },
          { t: 'callout', kind: 'ornek', title: 'Şantiyeden örnek', text: 'Usta Mehmet\'in önünde dört iş var: patlayan su borusu (acil+önemli: hemen kendisi müdahale eder), gelecek ayın malzeme siparişi (önemli ama acil değil: perşembe gününe not eder), kapıya gelen kargoyu teslim almak (acil ama önemsiz: çırağa söyler), eski faturaları dosyalamak (ne acil ne önemli: kışın yağmurlu bir gününe kalır).' },
          { t: 'p', text: 'ABD Başkanı Dwight D. Eisenhower\'a atfedilen söz şudur: "En acil kararlar nadiren en önemli olanlardır." Eisenhower Matrisi, önüne gelen her işi iki eksende değerlendirir: önem ve aciliyet.' },
          { t: 'h2', text: 'Dört kadran' },
          { t: 'ul', items: [
            'Önemli + Acil → Hemen yap.',
            'Önemli + Acil değil → Ne zaman yapacağına şimdi karar ver, takvime koy.',
            'Önemsiz + Acil → Devret (delege et).',
            'Önemsiz + Acil değil → Sonraya bırak ya da hiç yapma.',
          ]},
          { t: 'quote', text: 'Geç olması hiç olmamasından iyidir. Ama hiç geç kalmamak daha da iyidir.' },
          { t: 'p', text: 'Matrisin asıl gücü sağ üst kadranda değil, sol üst kadrandadır: önemli ama henüz acil olmayan işler, stratejik ve uzun vadeli kararların yaşadığı alandır. Çoğu insan sürekli "acil ve önemli" yangınlarını söndürdüğü için bu alana hiç zaman ayıramaz.' },
        ],
      },
      {
        slug: 'uygulama',
        title: 'Nasıl Uygulanır',
        blocks: [
          { t: 'steps', items: [
            { title: 'Her şeyi dök', text: 'Bugün ve bu hafta yapman gereken her işi tek listeye yaz — büyüklüğüne bakma.' },
            { title: 'İki soru sor', text: 'Her madde için: "Bu benim hedeflerime doğrudan katkı sağlıyor mu?" (önem) ve "Bu hafta yapılmazsa somut bir zarar doğar mı?" (aciliyet).' },
            { title: 'Kadrana yerleştir', text: 'Her işi dört kadrandan birine koy. Kararsız kaldığın iş büyük olasılıkla önemsizdir.' },
            { title: 'Kurallara uy', text: 'Hemen yap / takvime koy / devret / sil. "Devret" kadranı boşsa delegasyon becerini sorgula.' },
          ]},
          { t: 'callout', kind: 'tip', title: 'Buffett tekniği ile birleştir', text: 'Warren Buffett\'a atfedilen yöntem: bugün yapmak istediğin her şeyi listele, en üsttekiyle başla ve o bitmeden diğerine geçme. Eisenhower Matrisi neyin üste yazılacağını, Buffett listesi ise sıranın nasıl korunacağını söyler.' },
          { t: 'callout', kind: 'warn', title: 'Sık yapılan hata', text: 'Gelen kutusu aciliyet üretir, strateji üretmez. E-postayla gelen her iş "acil" hissettirir; matrise koymadan hiçbirine evet deme.' },
          { t: 'table', head: ['Görev', 'Kadran', 'Ne yapılır'], rows: [
            ['Patlayan su borusu', 'Acil + Önemli', 'Hemen kendin yap'],
            ['Gelecek ayın malzeme siparişi', 'Önemli, acil değil', 'Takvime yaz'],
            ['Kapıya gelen kargo', 'Acil, önemsiz', 'Çırağa devret'],
            ['Eski faturaları dosyalamak', 'Ne acil ne önemli', 'Sonraya bırak veya hiç yapma'],
          ]},
        ],
      },
      {
        slug: 'vaka',
        title: 'Gerçek Vaka & Fayda',
        blocks: [
          { t: 'callout', kind: 'case', title: 'Vaka: LinkedIn CEO\'sunun tampon blokları', text: 'LinkedIn\'in eski CEO\'su Jeff Weiner, takviminde her gün 90–120 dakikayı bilinçli olarak boş ("buffer") bloklara ayırdığını kamuoyuyla paylaştı. Bu bloklar tam olarak Eisenhower\'ın "önemli ama acil değil" kadranıdır: strateji, düşünme ve öngörülemeyen önemli işler için korunan alan. Weiner bunu "işimin en önemli üretkenlik aracı" olarak tanımladı.' },
          { t: 'callout', kind: 'case', title: 'Vaka: Eisenhower\'ın kendi süreci', text: 'Eisenhower, II. Dünya Savaşı\'nda Müttefik Kuvvetler Başkomutanı iken günde yüzlerce karar talebiyle karşılaşıyordu. Kurmay ekibine gelen evrakı önem/aciliyet süzgecinden geçirtip yalnızca gerçekten başkomutanlık düzeyinde olanları önüne getirtti; gerisini yetki devriyle çözdü. Aynı disiplini başkanlık döneminde de sürdürdü.' },
          { t: 'h2', text: 'Gerçek fayda' },
          { t: 'ul', items: [
            'Yangın söndürme süresi azalır: acil-önemsiz işler devredildiği için gün stratejik işe açılır.',
            'Karar yorgunluğu düşer: her yeni iş için sıfırdan düşünmek yerine dört kuraldan biri uygulanır.',
            'Delegasyon görünür hâle gelir: "devret" kadranı, ekibe güvenmeyi öğreten somut bir listedir.',
          ]},
        ],
      },
    ],
  },
  {
    slug: 'swot-analizi',
    section: 'strateji-rekabet',
    title: 'SWOT Analizi',
    question: 'Doğru çözümü nasıl bulurum?',
    summary: 'Güçlü ve zayıf yönler ile fırsat ve tehditleri tek tabloda birleştiren durum analizi.',
    tags: ['strateji', 'analiz'],
    pages: [
      {
        slug: 'kavram',
        title: 'Kavram',
        blocks: [
          { t: 'callout', kind: 'simple', title: 'Bir cümlede', text: 'Bir işe girişmeden önce dört soruya dürüstçe cevap ver: Neyde iyiyim, neyde zayıfım, dışarıda hangi fırsat var, hangi tehlike var?' },
          { t: 'callout', kind: 'ornek', title: 'Bakkaldan örnek', text: 'Bakkal Hasan mahalleye zincir market açılacağını duyunca kağıt kaleme sarılır. İyi yanı: herkesi tanır, veresiye defteri tutar. Zayıf yanı: fiyatları markete göre pahalı. Fırsat: yaşlı komşular kapıya servis istiyor. Tehlike: gençler alışverişi markete kaydırabilir. Karar netleşir: fiyat yarışına girmez, kapıya servise ve tanışıklığa yüklenir.' },
          { t: 'p', text: 'SWOT; Strengths (güçlü yönler), Weaknesses (zayıf yönler), Opportunities (fırsatlar) ve Threats (tehditler) kelimelerinin baş harfleridir. İç faktörleri (güçlü/zayıf) dış faktörlerle (fırsat/tehdit) aynı tabloda buluşturur.' },
          { t: 'h2', text: 'Tablonun mantığı' },
          { t: 'ul', items: [
            'Güçlü yönler + Fırsatlar → saldırı stratejisi: elindeki gücü hangi fırsata sürersin?',
            'Zayıf yönler + Tehditler → savunma stratejisi: en kırılgan olduğun yerde seni ne vurabilir?',
            'Güçlü yönler + Tehditler → kalkan: gücünü hangi riski göğüslemek için kullanırsın?',
            'Zayıf yönler + Fırsatlar → gelişim: hangi eksiği kapatırsan yeni kapı açılır?',
          ]},
          { t: 'p', text: 'SWOT\'un değeri kutuları doldurmakta değil, kutular arasındaki çapraz sorulardadır. Doldurulan ama okunmayan bir SWOT, sadece bir envanterdir.' },
        ],
      },
      {
        slug: 'uygulama',
        title: 'Nasıl Uygulanır',
        blocks: [
          { t: 'steps', items: [
            { title: 'Kapsamı daralt', text: '"Şirketimizin SWOT\'u" çok geniştir. "Bu ürünün bu pazardaki SWOT\'u" gibi tek karar etrafında çalış.' },
            { title: 'Kanıt iste', text: 'Her madde için "bunu hangi veriyle söylüyoruz?" sorusunu sor. Kanıtsız güçlü yön, çoğunlukla kurum içi efsanedir.' },
            { title: 'Çaprazla', text: 'Dört kutuyu doldurduktan sonra asıl işi yap: S-O, W-T, S-T, W-O eşleşmelerinden en az birer eylem çıkar.' },
            { title: 'Tek karara bağla', text: 'Analizin çıktısı bir sunum değil, bir karar olmalı: neyi yapacağız, neyi bırakacağız?' },
          ]},
          { t: 'callout', kind: 'warn', title: 'Sık yapılan hata', text: 'Zayıf yönleri yumuşatmak. "Gelişime açık alanlarımız" diye yazılan her madde, analizi kör eder. Zayıflık net yazılmazsa tehditle eşleşemez.' },
          { t: 'table', head: ['Kutu', 'Bakkal Hasan için örnek', 'Çıkan eylem'], rows: [
            ['Güçlü yön', 'Herkesi tanır, güven var', 'Tanışıklığı öne çıkar'],
            ['Zayıf yön', 'Fiyatlar markete göre yüksek', 'Fiyat yarışına girme'],
            ['Fırsat', 'Yaşlı komşular kapıya servis istiyor', 'Telefonla sipariş + servis başlat'],
            ['Tehdit', 'Zincir market açılıyor', 'Müdavim müşteriyi elde tutacak jestler yap'],
          ]},
        ],
      },
      {
        slug: 'vaka',
        title: 'Gerçek Vaka & Fayda',
        blocks: [
          { t: 'callout', kind: 'case', title: 'Vaka: Starbucks 2008 dönüşü', text: 'Howard Schultz 2008\'de CEO koltuğuna geri döndüğünde şirket hızlı büyümenin bedelini ödüyordu: ABD\'de 600\'den fazla mağaza kapatıldı. Dönüşüm planı klasik bir SWOT okumasıydı — güçlü yön (marka ve mağaza deneyimi) sulandırılmış, zayıf yön (aşırı hızlı açılan verimsiz mağazalar) tehditle (2008 krizi, McDonald\'s\'ın kahve atağı) çakışmıştı. Schultz zayıf-tehdit kesişimini kapatıp (mağaza kapatma, barista eğitimi için bir gün tüm mağazaları kapatma) güçlü yönü fırsata sürdü: deneyim odaklı yeniden konumlanma. Şirket 2009\'dan itibaren yeniden kârlı büyümeye döndü.' },
          { t: 'h2', text: 'Gerçek fayda' },
          { t: 'ul', items: [
            'İç körlüğü kırar: dışarıdaki tehdit, içerideki zayıflıkla yan yana konunca bahane üretmek zorlaşır.',
            'Kaynak tartışmasını netleştirir: yatırım, güçlü yön–fırsat kesişimine; tasarruf, zayıf yön–tehdit kesişimine gider.',
            'Kriz anında hız kazandırır: dört kutu, panik yerine yapılandırılmış bir tartışma zemini kurar.',
          ]},
        ],
      },
    ],
  },
  {
    slug: 'bcg-kutusu',
    section: 'strateji-rekabet',
    title: 'BCG Kutusu',
    question: 'Maliyet ve faydayı nasıl değerlendiririm?',
    summary: 'Ürün ve yatırımları pazar büyümesi ile pazar payına göre dört gruba ayıran portföy matrisi.',
    tags: ['portföy', 'yatırım'],
    pages: [
      {
        slug: 'kavram',
        title: 'Kavram',
        blocks: [
          { t: 'callout', kind: 'simple', title: 'Bir cümlede', text: 'Elindeki işleri dört gruba ayır: para kazandıran, parlayan, belirsiz ve ölü. Ölüyü bırak, kazandıranın parasıyla parlayanı büyüt.' },
          { t: 'callout', kind: 'ornek', title: 'Lokantadan örnek', text: 'Lokantacı Ayşe menüsüne bakar: kuru fasulye her gün satılır, masrafı azdır — bu onun nakit ineğidir. Yeni koyduğu ızgara tabağı çok tutuldu ve talep büyüyor — bu yıldızdır. Denemeye koyduğu tatlı reyonu belli belirsiz gidiyor — soru işareti. Kimsenin sipariş etmediği balık çorbası ise köpektir: menüden çıkar. Fasulyenin kazancıyla ızgara ocağını büyütür.' },
          { t: 'p', text: 'Boston Consulting Group\'un 1970\'lerde geliştirdiği matris, bir portföydeki her ürünü iki eksende konumlandırır: pazarın büyüme hızı ve ürünün göreli pazar payı.' },
          { t: 'ul', items: [
            'Yıldızlar (yüksek büyüme, yüksek pay): yatırım yapmaya devam et.',
            'Nakit inekleri (düşük büyüme, yüksek pay): sağ, kârı başka alanlara aktar.',
            'Soru işaretleri (yüksek büyüme, düşük pay): ya besle ya bırak — en zor karar buradadır.',
            'Köpekler (düşük büyüme, düşük pay): elden çıkar.',
          ]},
          { t: 'p', text: 'Modelin özü kaynak akışıdır: nakit ineklerinin ürettiği para, yıldızları ve seçilmiş soru işaretlerini besler. Portföyün dengesi tek tek ürünlerden daha önemlidir.' },
        ],
      },
      {
        slug: 'uygulama',
        title: 'Nasıl Uygulanır',
        blocks: [
          { t: 'steps', items: [
            { title: 'Envanter çıkar', text: 'Ürünlerini, projelerini ya da müşteri segmentlerini listele; her biri için büyüme ve pay verisini topla.' },
            { title: 'Yerleştir', text: 'Her kalemi matrise koy. Veri yoksa tahmin yaz ama tahmin olduğunu işaretle.' },
            { title: 'Nakit akışını çiz', text: 'Hangi kalem para üretiyor, hangisi tüketiyor? Okları çiz: para nereden nereye akmalı?' },
            { title: 'Soru işaretlerini karara bağla', text: 'Her soru işareti için tarih koy: "Şu tarihe kadar şu eşiği geçmezse çıkıyoruz."' },
          ]},
          { t: 'callout', kind: 'tip', title: 'Kişisel kullanım', text: 'Aynı matris kişisel projelere de uygulanır: hangi becerin nakit ineği (bugünkü ekmeğin), hangisi yıldız (geleceğin)? Köpek projelerini bırakmak, en ucuz verimlilik artışıdır.' },
          { t: 'table', head: ['Menü kalemi', 'Satış gidişatı', 'Kutu', 'Karar'], rows: [
            ['Kuru fasulye', 'Her gün düzenli satılıyor', 'Nakit ineği', 'Sağ, kârını başka yere aktar'],
            ['Izgara tabağı', 'Talep hızla büyüyor', 'Yıldız', 'Yatırım yap, ocağı büyüt'],
            ['Tatlı reyonu', 'Belli belirsiz gidiyor', 'Soru işareti', 'Tarih koy: tutmazsa çık'],
            ['Balık çorbası', 'Neredeyse hiç satılmıyor', 'Köpek', 'Menüden çıkar'],
          ]},
        ],
      },
      {
        slug: 'vaka',
        title: 'Gerçek Vaka & Fayda',
        blocks: [
          { t: 'callout', kind: 'case', title: 'Vaka: Unilever "Path to Growth"', text: 'Unilever 2000 yılında portföyünde 1.600\'den fazla marka taşıyordu; satışların büyük kısmı ise küçük bir marka grubundan geliyordu. "Path to Growth" programıyla şirket klasik bir portföy analizi uyguladı: yaklaşık 400 güçlü markaya (yıldızlar ve nakit inekleri) odaklandı, geri kalan yüzlerce markayı sattı, birleştirdi ya da emekliye ayırdı. Serbest kalan pazarlama bütçesi çekirdek markalara aktı; Dove ve Knorr gibi markalar bu dönemde küresel ölçeğe taşındı.' },
          { t: 'h2', text: 'Gerçek fayda' },
          { t: 'ul', items: [
            'Kaynak dağıtımını duygudan arındırır: "bu ürünü seviyoruz" yerine "bu ürün portföyde hangi rolü oynuyor" sorusu konuşulur.',
            'Çıkış kararını meşrulaştırır: köpek kadranı, bir ürünü kapatmanın başarısızlık değil portföy hijyeni olduğunu gösterir.',
            'Büyümeyi fonlar: nakit ineği–yıldız akışı kurulmadan büyüme ya borçla ya şansla olur.',
          ]},
        ],
      },
    ],
  },
  {
    slug: 'proje-portfoy-matrisi',
    section: 'proje-urun',
    title: 'Proje Portföy Matrisi',
    question: 'Genel bakışı nasıl korurum?',
    summary: 'Aynı anda yürüyen projeleri maliyet ve zaman gibi iki eksende haritalayarak dengede tutmayı sağlayan model.',
    tags: ['portföy', 'projeler', 'odak'],
    pages: [
      {
        slug: 'kavram',
        title: 'Kavram',
        blocks: [
          { t: 'callout', kind: 'simple', title: 'Bir cümlede', text: 'Aynı anda yürüttüğün bütün işleri tek bir kağıda dök ve her birine sor: Bana ne kazandırıyor, bana kaça mal oluyor? Böylece hangisini sürdürüp hangisini bırakacağını görürsün.' },
          { t: 'callout', kind: 'ornek', title: 'Atölyeden örnek', text: 'Kaynakçı Osman\'ın elinde dört iş var: fabrikanın bakım sözleşmesi (az kazandırır ama düzenli), komşu siteye ferforje kapı (iyi para, çok mesai), kardeşine bedava tamir sözü (para yok, vakit yiyor) ve akşamları öğrendiği alüminyum kaynağı kursu (para yok ama yeni müşteri kapısı). Hepsini kağıda dizer: kardeşin tamirini hafta sonuna sıkıştırır, kursu sürdürür, çünkü gelecek oradadır.' },
          { t: 'p', text: 'Aynı anda birden çok projeyle mi uğraşıyorsun? O zaman bir "slasher"sın (/). Terimi New Yorklu yazar Marci Alboher ortaya attı: "Geçiminizi nasıl sağlıyorsunuz?" sorusuna tek cevap veremeyen insanları anlatır — öğretmen/müzisyen/web tasarımcısı gibi. Çeşitlilik çekicidir; ama bütün bu projeler nasıl dengelenir, düzenli gelir nasıl güvenceye alınır?' },
          { t: 'p', text: 'Genel bakış kazanmak için işle ilgili ve özel bütün güncel projelerini proje portföy matrisine yerleştir: klasik eksenler maliyet ve zamandır. Maliyeti yalnızca para olarak değil; dahil olan arkadaşlar, enerji ve psikolojik yük gibi kaynaklar olarak da düşün.' },
          { t: 'h2', text: 'Eksenler sana kalmış' },
          { t: 'p', text: 'Maliyet ve zaman yalnızca iki örnektir. Durumuna uyan her parametreyi kullanabilirsin: örneğin x ekseni "bu proje ana hedefime ne kadar hizmet ediyor", y ekseni "bu projeden ne kadar öğreniyorum" olabilir. Projelerini "hedefe katkı" ve "öğrenme miktarı" eksenlerinde konumlandır.' },
          { t: 'ul', items: [
            'Ne öğreniyorsan ne de vizyonuna hizmet ediyorsa → projeyi reddet.',
            'Öğreniyorsun ama vizyona hizmet etmiyorsa → ilginçtir ama hedefe götürmez; projeyi vizyonuna hizmet edecek şekilde değiştirmeyi dene.',
            'Vizyona uygun ama yeni bir şey öğretmiyorsa → senin yerine yapacak birini bul.',
            'Hem öğreniyor hem vizyonunu gerçekleştiriyorsan → büyük ikramiyeyi buldun!',
          ]},
          { t: 'quote', text: 'Projelerini düzgün biçimde tamamla. Başarılı olmayanları bile.' },
        ],
      },
      {
        slug: 'uygulama',
        title: 'Nasıl Uygulanır',
        blocks: [
          { t: 'steps', items: [
            { title: 'Bütün projeleri listele', text: 'İş ve özel yaşamdaki tüm aktif projelerini tek listeye dök: yan işler, kurslar, organizasyonlar, hobiler dahil.' },
            { title: 'Eksenlerini seç', text: 'Klasik ikili: bütçe durumu (aşıldı / bütçede / altında) ve zaman durumu (gecikmiş / planlanacak / erken). Alternatif: vizyona katkı × öğrenme.' },
            { title: 'Baloncukları yerleştir', text: 'Her projeyi matrise bir baloncuk olarak koy; baloncuğun büyüklüğü projenin harcadığı enerjiyi göstersin.' },
            { title: 'Portföy kararı ver', text: 'Her proje için dört sonuçtan birini seç: devam et, dönüştür, devret ya da bırak. Kararsız proje, kaynak sızıntısıdır.' },
          ]},
          { t: 'callout', kind: 'tip', title: 'Maliyeti geniş tanımla', text: 'Kitabın uyarısı: maliyet sadece para değildir. Bir projenin gerçek bedeli; harcadığın enerji, yıprattığın ilişkiler ve taşıdığın psikolojik strestir. Bu kalemleri de matrise dahil et.' },
          { t: 'callout', kind: 'warn', title: 'Yarım bırakma tuzağı', text: 'Modelin son uyarısı nettir: projelerini düzgün tamamla — başarısız olanları bile. Sessizce sönümlenen projeler hem öğrenmeyi hem itibarı zedeler.' },
          { t: 'table', head: ['Proje', 'Ne kazandırıyor', 'Ne tüketiyor', 'Karar'], rows: [
            ['Fabrika bakım sözleşmesi', 'Düzenli gelir', 'Az zaman', 'Devam et'],
            ['Ferforje kapı işi', 'İyi para', 'Çok mesai', 'Devam et ama yenisini alma'],
            ['Kardeşe bedava tamir', 'Aile gönlü', 'Hafta içi vakit', 'Hafta sonuna kaydır'],
            ['Alüminyum kaynak kursu', 'Yeni müşteri kapısı', 'Akşamlar', 'Sürdür: gelecek burada'],
          ]},
        ],
      },
      {
        slug: 'vaka',
        title: 'Gerçek Vaka & Fayda',
        blocks: [
          { t: 'callout', kind: 'case', title: 'Vaka: Google\'ın proje portföyü temizlikleri', text: 'Google, ürünlerini periyodik olarak portföy gözünden değerlendirir ve vizyona hizmet etmeyen projeleri açıkça kapatır: 2011\'de Larry Page\'in başlattığı "more wood behind fewer arrows" (daha az oka daha çok güç) dönemi tek başına Google Labs, Buzz ve Health dahil onlarca ürünün kapanmasıyla sonuçlandı. Kapanan projelerden serbest kalan mühendisler, şirketin çekirdek önceliklerine kaydırıldı. Bu, portföy matrisinin kurumsal ölçekte uygulanmasıdır: her proje "vizyona katkı" testinden geçer, geçemeyen düzgün biçimde sonlandırılır.' },
          { t: 'h2', text: 'Gerçek fayda' },
          { t: 'ul', items: [
            'Dağınık enerjiyi görünür kılar: hangi projenin bütçeyi ve takvimi sessizce aştığı tek bakışta anlaşılır.',
            'Bırakma kararını kolaylaştırır: "ne öğretiyor, vizyona ne katıyor" soruları, duygusal bağlılığı ölçülebilir iki eksene indirger.',
            'Düzenli geliri korur: çok projeli çalışan kişi, para üreten projelerle öğrenme projelerinin dengesini bilinçli kurar.',
          ]},
        ],
      },
    ],
  },
  {
    slug: 'geri-bildirim-analizi',
    section: 'ogrenme-geri-bildirim',
    title: 'Geri Bildirim Analizi',
    question: 'Kendi çalışmamı değerlendirmeyi nasıl öğrenirim?',
    summary: 'Peter Drucker\'ın beklenti ile gerçek sonucu karşılaştırarak güçlü yönleri keşfetme tekniği.',
    tags: ['özdeğerlendirme', 'güçlü yönler'],
    pages: [
      {
        slug: 'kavram',
        title: 'Kavram',
        blocks: [
          { t: 'callout', kind: 'simple', title: 'Bir cümlede', text: 'Önemli bir karar verirken ne olacağını tahmin edip bir kağıda yaz; aylar sonra kağıda dön ve tahminin tutup tutmadığına bak. Böylece neyde gerçekten iyi olduğunu öğrenirsin.' },
          { t: 'callout', kind: 'ornek', title: 'Atölyeden örnek', text: 'Tornacı Kemal yeni bir çırak alırken deftere yazar: "Bu çocuk altı ayda tezgahı tek başına kullanır." Altı ay sonra deftere bakar: çırak tezgahı üç ayda söktü ama Kemal\'in "bu müşteri düzenli iş verir" diye yazdığı firma iki ayda kayboldu. Birkaç yıl böyle yazınca deseni görür: insan seçmede eli güçlü, müşteri tahmininde zayıf. Artık müşteri sözüne değil, sözleşmeye güvenir.' },
          { t: 'p', text: 'En büyük güçlü yönün ne? Çoğu insan neyde iyi olduğunu bildiğini sanır — ve genellikle yanılır. Bunu söyleyen, geçen yüzyılın en önemli yönetim düşünürlerinden Peter F. Drucker\'dır. Drucker, kendini daha iyi tanımak için basit ama zekice bir teknik önerdi.' },
          { t: 'p', text: 'Yöntem şudur: ne zaman önemli bir karar alsan, ne olmasını beklediğini yaz. Bir yıl sonra beklentini gerçek sonuçla karşılaştır.' },
          { t: 'p', text: 'Drucker hayatı boyunca kendi beklentilerini gerçek sonuçlarla karşılaştırdı. Kendine geri bildirim vermeyi öğrendi ve zamanla nerede, ne tür bir gelişime ihtiyacı olduğunu görmeye başladı. Başka bir deyişle: güçlü yönlerinin nerede olduğunu — ve nerede olmadığını — keşfetti.' },
          { t: 'p', text: 'Kulağa kolay mı geliyor? Kalvinist vaizler ve Cizvit rahipleri bu yöntemi 17. yüzyılın ortalarından itibaren kullanıyordu — bazı tarihçilere göre her iki tarikatın küresel etkisi, kısmen geri bildirim analizini kendilerini yönetmek için kullanmalarına dayanır.' },
          { t: 'quote', text: 'Bir insanın kendisi hakkında bilebileceği en önemli şey, güçlü yönlerinin ne olduğudur. — Peter F. Drucker' },
        ],
      },
      {
        slug: 'uygulama',
        title: 'Nasıl Uygulanır',
        blocks: [
          { t: 'steps', items: [
            { title: 'Beklentiyi yaz', text: 'Önemli bir karar aldığında (işe alım, proje, yatırım, kariyer hamlesi) sonucun ne olacağını somut olarak kaydet: ne olacak, ne zaman, hangi ölçüde?' },
            { title: 'Süre koy ve bekle', text: 'Kaydı kapat, kararı uygula. 9-12 ay sonrası için takvimine bir karşılaştırma randevusu koy.' },
            { title: 'Beklenti ile sonucu karşılaştır', text: 'Kayıt ile gerçekleşeni yan yana koy. Örtüşme ne kadar büyükse, o alandaki öngörün — yani güçlü yönün — o kadar sağlamdır.' },
            { title: 'Deseni çıkar', text: 'Birkaç döngü sonra tekrarlayan deseni ara: hangi tür kararlarda isabetlisin, hangilerinde sistematik olarak yanılıyorsun? Enerjini isabetli olduğun alana kaydır.' },
          ]},
          { t: 'callout', kind: 'tip', title: 'Kayıt hafızayı yener', text: 'Beklentiyi yazmadan yapılan değerlendirme işe yaramaz: hafıza, sonucu öğrendikten sonra beklentiyi sessizce günceller ("zaten biliyordum"). Yazılı kayıt bu geriye dönük düzeltmeyi engeller.' },
          { t: 'table', head: ['Karar', 'Yazılan beklenti', 'Gerçekleşen', 'Çıkan ders'], rows: [
            ['Yeni çırak alımı', 'Altı ayda tezgahı öğrenir', 'Üç ayda öğrendi', 'İnsan seçmede gözün keskin'],
            ['Yeni müşteri', 'Düzenli iş verir', 'İki ayda kayboldu', 'Söze değil sözleşmeye güven'],
            ['İkinci el tezgah alımı', 'Beş yıl sorunsuz çalışır', 'İlk yıl iki büyük arıza', 'Makine alırken uzmana danış'],
          ]},
        ],
      },
      {
        slug: 'vaka',
        title: 'Gerçek Vaka & Fayda',
        blocks: [
          { t: 'callout', kind: 'case', title: 'Vaka: Cizvitler ve Kalvinistlerin özyönetimi', text: 'Drucker\'ın kendi verdiği tarihsel örnek: Cizvit tarikatı ve Kalvinist vaizler, 17. yüzyıl ortalarından itibaren önemli kararlarında beklenen sonucu kaydedip daha sonra gerçekleşenle karşılaştırma pratiğini uyguladı. Drucker\'a ve bazı tarihçilere göre bu iki hareketin — birbirinden bağımsız olarak — Avrupa\'da ve dünyada kazandığı olağanüstü etki, kısmen üyelerinin bu sistematik özdeğerlendirme disipliniyle kendilerini yönetmesine dayanır. Drucker aynı yöntemi kendi hayatında on yıllarca uyguladığını yazdı.' },
          { t: 'h2', text: 'Gerçek fayda' },
          { t: 'ul', items: [
            'Güçlü yön tartışmasını kanıta bağlar: "kendimi iyi hissediyorum" yerine beklenti-sonuç kaydı konuşur.',
            'Yatırım getirisi yüksek gelişim sağlar: Drucker\'ın tezi gereği insan, zayıf yönünü orta seviyeye çekmekten çok güçlü yönünü uçlaştırarak kazanır.',
            'Karar kalitesini ölçülebilir yapar: yıllar içinde biriken kayıtlar, hangi karar türlerinde kime güvenileceğini de gösterir.',
          ]},
        ],
      },
    ],
  },
  {
    slug: 'john-whitmore-modeli',
    section: 'ogrenme-geri-bildirim',
    title: 'John Whitmore Modeli',
    question: 'Doğru hedefin peşinde miyim?',
    summary: 'Bir hedefi on dört ölçüte karşı sınayarak nihai hedef ile performans hedefini ayıran model.',
    tags: ['hedef belirleme', 'koçluk'],
    pages: [
      {
        slug: 'kavram',
        title: 'Kavram',
        blocks: [
          { t: 'callout', kind: 'simple', title: 'Bir cümlede', text: 'Büyük hayalin ile ona götüren günlük adımı ayır: hayal sana yön verir, günlük adım ise senin elindedir ve seni oraya taşır.' },
          { t: 'callout', kind: 'ornek', title: 'Şantiyeden örnek', text: 'Kalfa İbrahim ustalık belgesi almak istiyor — bu onun nihai hedefi. Ama sınav tarihi de sonucu da tam onun elinde değil. Elinde olan şudur: her akşam yarım saat soru çözmek ve hafta sonu ustasının yanında kalıp iki saat pratik yapmak. Bu iki adım onun performans hedefidir. Adımlara sadık kalırsa belge kendiliğinden yaklaşır.' },
          { t: 'p', text: 'Kendine hedefler koyuyorsan, nihai hedefler ile performans hedeflerini ayırmalısın. Nihai hedef "maraton koşmak istiyorum" olabilir; performans hedefi ise bu amaca ulaşmanı sağlayan adımdır: "her sabah otuz dakika koşacağım."' },
          { t: 'p', text: 'Hedefini yaz ve adım adım, modeldeki on dört gereklilikle örtüşüp örtüşmediğini kontrol et. Model iki klasik akronimi genişletir: SMART (Specific–Özgül, Measurable–Ölçülebilir, Attainable–Ulaşılabilir, Realistic–Gerçekçi, Time-phased–Zamana bağlı), PURE (Positively stated–Olumlu ifade edilmiş, Understood–Anlaşılmış, Relevant–İlgili, Ethical–Etik) ve CLEAR (Challenging–Zorlayıcı, Legal–Yasal, Environmentally sound–Çevreye duyarlı, Agreed–Üzerinde anlaşılmış, Recorded–Kayıtlı).' },
          { t: 'p', text: 'Dikkat edilecek nokta: ulaşılamaz bir hedef umut bırakmaz; zorlamayan bir hedef ise motive etmez. On dört adım sana fazla karmaşık geliyorsa, hedef koyarken şu temel kuralı unutma:' },
          { t: 'quote', text: 'KISS — Keep It Simple, Stupid! (Basit tut, şapşal!)' },
          { t: 'quote', text: 'Çoğumuz için en büyük tehlike hedefimizin çok yüksek olup ıskalamamız değil; çok alçak olup ona ulaşmamızdır. — Michelangelo' },
        ],
      },
      {
        slug: 'uygulama',
        title: 'Nasıl Uygulanır',
        blocks: [
          { t: 'steps', items: [
            { title: 'İki hedef katmanını ayır', text: 'Önce nihai hedefini yaz (sonuç), sonra ona götüren performans hedeflerini yaz (senin kontrolündeki davranışlar). Kontrolünde olmayan sonuca değil, davranışa söz ver.' },
            { title: 'On dört ölçütten geçir', text: 'Hedefini SMART + PURE + CLEAR listesine karşı tek tek işaretle: özgül mü, ölçülebilir mi, olumlu ifade edilmiş mi, üzerinde anlaşılmış mı, kayıtlı mı…' },
            { title: 'Zorluk ayarını yap', text: 'Hedef ulaşılamazsa umudu, zorlamıyorsa motivasyonu öldürür. Çıtayı "gerginlik hissettiren ama inandırıcı" seviyeye kur.' },
            { title: 'Kaydet ve paylaş', text: 'Hedefi yaz (Recorded) ve ilgili kişilerle mutabık kal (Agreed). Yazılmamış hedef, dilek; paylaşılmamış hedef, kaçış kapısıdır.' },
          ]},
          { t: 'callout', kind: 'tip', title: 'Basitlik testi', text: 'On dört ölçüt bunaltıyorsa Whitmore\'un kendi kısayolunu kullan: KISS. Hedefini bir cümlede, bir yabancıya açıklayamıyorsan hedef henüz hazır değildir.' },
          { t: 'table', head: ['Nihai hedef', 'Performans hedefi', 'Kontrol kimde'], rows: [
            ['Ustalık belgesi almak', 'Her akşam 30 dakika soru çözmek', 'Tamamen sende'],
            ['Maraton koşmak', 'Her sabah 30 dakika koşmak', 'Tamamen sende'],
            ['Kendi dükkanını açmak', 'Her ay belirli bir tutar biriktirmek', 'Büyük ölçüde sende'],
            ['Terfi almak', 'Her hafta bir yeni beceri çalışmak', 'Sonuç değil, adım sende'],
          ]},
        ],
      },
      {
        slug: 'vaka',
        title: 'Gerçek Vaka & Fayda',
        blocks: [
          { t: 'callout', kind: 'case', title: 'Vaka: GROW modeli ve kurumsal koçluğun doğuşu', text: 'Sir John Whitmore, motor yarışçılığını bırakıp performans psikolojisine yöneldikten sonra 1980\'lerde iş dünyasına koçluğu taşıyan öncülerden oldu: geliştirilmesine öncülük ettiği GROW modeli (Goal–Reality–Options–Will) bugün dünyada en yaygın kullanılan koçluk çerçevelerinden biridir ve "Coaching for Performance" kitabı milyonlarca satarak kurumsal koçluk mesleğinin temel metni hâline geldi. Hedef ölçütleri listesi de bu pratiğin parçasıdır: koçluk görüşmesi, üzerinde çalışılacak hedefin bu tür ölçütlerden geçmesiyle başlar.' },
          { t: 'h2', text: 'Gerçek fayda' },
          { t: 'ul', items: [
            'Hedef ile dilek ayrışır: ölçütlerden geçemeyen "hedef", henüz bir niyettir ve plana değil netleştirmeye ihtiyaç duyar.',
            'Motivasyon sürdürülebilir olur: performans hedefleri her gün kazanılabilir; yalnızca nihai hedefe bakan kişi yolda tükenmeye açıktır.',
            'Ekip hedeflerinde sürtüşme azalır: "Agreed" ve "Understood" ölçütleri, hedefin tepeden inme değil mutabakatla konmasını zorunlu kılar.',
          ]},
        ],
      },
    ],
  },
  {
    slug: 'lastik-bant-modeli',
    section: 'karar-verme',
    title: 'Lastik Bant Modeli',
    question: 'Bir ikilemle nasıl başa çıkarım?',
    summary: 'İki çekici seçenek arasında kalındığında "beni ne tutuyor, beni ne çekiyor" sorularını soran model.',
    tags: ['ikilem', 'karar verme'],
    pages: [
      {
        slug: 'kavram',
        title: 'Kavram',
        blocks: [
          { t: 'callout', kind: 'simple', title: 'Bir cümlede', text: 'İki iyi seçenek arasında sıkıştığında artı-eksi listesi yapma; kendine iki soru sor: Beni burada ne tutuyor, beni oraya ne çekiyor?' },
          { t: 'callout', kind: 'ornek', title: 'Atölyeden örnek', text: 'Usta Salih\'e başka şehirden iyi maaşlı bir fabrika işi teklif edilir. Kararsızdır. İki liste yapar. Onu tutan: yirmi yıllık müşterileri, kendi tezgahının patronu olmak, çocukların okulu. Onu çeken: düzenli maaş, sigorta, yeni makineleri öğrenmek. İki liste de güzeldir — sorun kötü seçenek değil, iki iyi seçenektir. Listeye bakınca görür: onu tutanlar kalbine, çekenler cüzdanına sesleniyor. Kararı artık bilerek verir.' },
          { t: 'p', text: 'Tanıdık bir durum mu? Bir arkadaşın, meslektaşın ya da müşterin geleceğini geri dönülmez biçimde değiştirebilecek bir karar vermek zorunda: kariyer değiştirmek, başka bir şehre taşınmak ya da erken emekli olmak. Lehte ve aleyhteki argümanlar dengede. Onu bu ikilemden nasıl çıkarabilirsin?' },
          { t: 'p', text: 'Lastik bant modelini çiz ve kişiden kendisine şu iki soruyu sormasını iste: Beni ne tutuyor? Beni ne çekiyor?' },
          { t: 'p', text: 'İlk bakışta yöntem, klasik "artılar ve eksiler neler?" sorusunun basit bir çeşitlemesi gibi görünür. Fark şudur: "Beni ne tutuyor?" ve "Beni ne çekiyor?" olumlu sorulardır ve iki çekici seçeneğin bulunduğu bir durumu yansıtır. İnsan iki kötü seçenek arasında değil, iki lastik bandın çektiği iki iyi seçenek arasında gerilmektedir.' },
          { t: 'quote', text: 'Her kararın ardından bir huzur gelir — yanlış kararın bile. — Rita Mae Brown' },
        ],
      },
      {
        slug: 'uygulama',
        title: 'Nasıl Uygulanır',
        blocks: [
          { t: 'steps', items: [
            { title: 'İkilemi çiz', text: 'Ortaya kişiyi, iki yana iki seçeneği koy; kişiyi iki yönde geren iki lastik bant hayal et.' },
            { title: '"Beni ne tutuyor?" diye sor', text: 'Mevcut durumun çekim güçlerini listele: ilişkiler, güvence, aidiyet, yarım kalan işler. Bunlar korku değil, değerdir.' },
            { title: '"Beni ne çekiyor?" diye sor', text: 'Yeni seçeneğin çekim güçlerini listele: merak, büyüme, yeni çevre, yeni anlam. Kaçış motiflerini ("buradan bıktım") bu listeye yazma.' },
            { title: 'İki listeyi karşılaştır', text: 'Hangi liste daha derin değerlerine dokunuyor? Karar, maddelerin sayısıyla değil ağırlığıyla verilir.' },
          ]},
          { t: 'callout', kind: 'tip', title: 'Neden artı/eksi listesinden iyi?', text: 'Artı/eksi listesi zihni tehditlere odaklar ve savunmaya geçirir. "Tutan/çeken" çerçevesi ise iki seçeneği de olumlu kabul ettiği için suçluluk ve korku yerine değerleri konuşturur.' },
          { t: 'callout', kind: 'warn', title: 'Başkası için kullanırken', text: 'Model bir tavsiye aracı değil, soru aracıdır. Karşındakinin listelerini sen doldurursan ikilem çözülmez, sadece sana devredilir.' },
          { t: 'table', head: ['Beni ne tutuyor?', 'Beni ne çekiyor?'], rows: [
            ['Yirmi yıllık sadık müşteriler', 'Düzenli maaş ve sigorta'],
            ['Kendi tezgahımın patronuyum', 'Yeni makineleri öğrenme fırsatı'],
            ['Çocukların okulu ve mahalle', 'Daha büyük bir şehirde imkanlar'],
            ['Yarım kalan büyük sipariş', 'Sıfırdan temiz bir başlangıç'],
          ]},
        ],
      },
      {
        slug: 'vaka',
        title: 'Gerçek Vaka & Fayda',
        blocks: [
          { t: 'callout', kind: 'case', title: 'Vaka: Koçluk ve kariyer danışmanlığında standart soru çifti', text: 'Bu modelin soru çifti, profesyonel koçluk ve outplacement (yeniden yerleştirme) pratiğinde yaygın kullanılan bir tekniktir: büyük şirketlerin işten çıkarma dönemlerinde çalışanlarına sağladığı kariyer geçiş danışmanlıklarında, danışmanlar "sizi burada ne tutuyordu, sizi şimdi ne çekiyor?" çerçevesiyle çalışır. Krogerus ve Tschäppeler de modeli, danışanları iki iyi seçenek arasında kalan koçların pratiğinden kitaplaştırdı. Yaklaşımın gücü, kayıp odaklı konuşmayı değer odaklı konuşmaya çevirmesinde belgelenmiştir: pozitif psikoloji literatürü, yaklaşma (approach) motivasyonuyla verilen kararların kaçınma (avoidance) motivasyonuyla verilenlerden daha yüksek memnuniyet ürettiğini tutarlı biçimde gösterir.' },
          { t: 'h2', text: 'Gerçek fayda' },
          { t: 'ul', items: [
            'Felç eden ikilemi harekete çevirir: iki seçenek de meşru kabul edilince kişi kaybetme korkusundan seçme özgürlüğüne geçer.',
            'Kararın kalitesini artırır: kaçış motifleri ("sadece uzaklaşmak istiyorum") ile gerçek çekim güçleri birbirinden ayrışır.',
            'Karar sonrası pişmanlığı azaltır: tutan güçler bilinçli olarak tartıldığı için geride bırakılan şey sonradan sürpriz olmaz.',
          ]},
        ],
      },
    ],
  },
  {
    slug: 'geri-bildirim-kutusu',
    section: 'ogrenme-geri-bildirim',
    title: 'Geri Bildirim Kutusu',
    question: 'Başkalarının övgü ve eleştirileriyle nasıl başa çıkarım?',
    summary: 'Gelen geri bildirimi tavsiye, övgü, eleştiri ve öneri olarak dört kutuya ayırıp eyleme dönüştüren model.',
    tags: ['geri bildirim', 'iletişim'],
    pages: [
      {
        slug: 'kavram',
        title: 'Kavram',
        blocks: [
          { t: 'callout', kind: 'simple', title: 'Bir cümlede', text: 'Sana söylenen her övgüyü ve eleştiriyi aynı kefeye koyma; her yorumu bir kutuya ayır ve yalnızca gerçekten değişmesi gerekenlerle uğraş.' },
          { t: 'callout', kind: 'ornek', title: 'Şantiyeden örnek', text: 'Kalfa Yusuf\'un ördüğü duvara dört yorum gelir. Mimar: "Örgü düzgün ama derz kalınlığı standart dışı, düzelt" (tavsiye). Usta: "Terazin şaşmıyor, aynen devam" (övgü). Kontrol mühendisi: "Köşe bağlantısı yanlış, sökülecek" (eleştiri). Komşu usta: "Ben olsam başka harç kullanırdım ama bu da olur" (öneri). Yusuf paniklemez: söküp yapacağı tek şey köşedir, derzi ayarlar, terazisine güvenmeye devam eder, harç lafını not edip geçer.' },
          { t: 'p', text: 'Geri bildirim, gruplardaki en zor ve hassas süreçlerden biridir. Eleştiriyle insanları kırmak kolaydır; ama sahte övgüler de yararsızdır. Övgü çoğu zaman bizi rehavete sürükler, eleştiri ise özsaygımızı zedeleyip akılsız seçimlere itebilir.' },
          { t: 'p', text: 'Tek boyutlu "neyi iyi, neyi kötü buldun?" sorusu bu yüzden pek yardımcı olmaz. Geri bildirimden öğrenilecekler açısından asıl soru şudur: "Bu eleştiriyle ne yapabilirim?" Yani neyin olduğu gibi kalabileceğini, neyin değişmesi gerektiğini (bugüne kadar iyi olsa bile) ayırt etmek.' },
          { t: 'h2', text: 'Dört kutu' },
          { t: 'ul', items: [
            'Tavsiye: "İyi buldum ama yine de değişmeli!"',
            'Övgü: "İyi buldum, gelecekte de böyle kalabilir!"',
            'Eleştiri: "Kötü buldum ve değişmek zorunda!"',
            'Öneri: "Kötü buldum ama onunla yaşayabilirim!"',
          ]},
          { t: 'p', text: 'Mesele yalnızca neyin başarısız olduğunu bulmak değil; tepki verip vermeyeceğine ve nasıl vereceğine karar vermektir. Bir de kendine dürüstçe sor: "Hangi başarı ya da başarısızlık aslında şans eseriydi?" Maçı topun tesadüfen ağlara gitmesiyle mi kazandın? Bu övgüyü gerçekten hak ediyor musun?' },
          { t: 'quote', text: 'Düşüncelerine dikkat et, sözlerin olur. Sözlerine dikkat et, eylemlerin olur. Eylemlerine dikkat et, alışkanlıkların olur. Alışkanlıklarına dikkat et, karakterin olur. Karakterine dikkat et, kaderin olur. — Talmud\'dan' },
        ],
      },
      {
        slug: 'uygulama',
        title: 'Nasıl Uygulanır',
        blocks: [
          { t: 'steps', items: [
            { title: 'Geri bildirimi topla', text: 'Bir sunum, proje ya da dönem sonunda aldığın bütün yorumları — olumlu, olumsuz, geçerken söylenmiş — tek listeye yaz.' },
            { title: 'Dört kutuya dağıt', text: 'Her yorumu iki eksende sınıflandır: veren iyi mi kötü mü buldu, değişmesi gerekiyor mu gerekmiyor mu? Sonuç: tavsiye, övgü, eleştiri ya da öneri.' },
            { title: 'Eylem planı çıkar', text: 'Hangi tavsiyeyi izleyeceksin? Hangi eleştiri seni harekete geçiriyor? Hangi öneriyi görmezden gelebilirsin? Her kutu için karar ver.' },
            { title: 'Şans payını sorgula', text: 'Övgü kutusundaki her madde için sor: bu gerçekten benim eserim mi, yoksa top şans eseri mi ağlara gitti?' },
          ]},
          { t: 'callout', kind: 'warn', title: 'İki uçlu tuzak', text: 'Her övgüye inanmak rehavete, her eleştiriyi içselleştirmek çaresizliğe götürür. Kutunun amacı geri bildirimi hissetmek değil, işlenebilir hâle getirmektir: değiştirilecekler kısa bir liste olmalı.' },
          { t: 'table', head: ['Gelen yorum', 'Kutu', 'Yusuf ne yapar'], rows: [
            ['Örgü düzgün ama derz standart dışı', 'Tavsiye', 'Derz kalınlığını ayarlar'],
            ['Terazin şaşmıyor, devam', 'Övgü', 'Aynı titizliği sürdürür'],
            ['Köşe bağlantısı yanlış, sökülecek', 'Eleştiri', 'Köşeyi söküp yeniden örer'],
            ['Ben olsam başka harç kullanırdım', 'Öneri', 'Not eder, değiştirmek zorunda değil'],
          ]},
        ],
      },
      {
        slug: 'vaka',
        title: 'Gerçek Vaka & Fayda',
        blocks: [
          { t: 'callout', kind: 'case', title: 'Vaka: Pixar\'ın Braintrust toplantıları', text: 'Pixar\'ın kurucularından Ed Catmull\'un "Creativity, Inc." kitabında anlattığı Braintrust mekanizması, geri bildirimi işlenebilir kılmanın belgelenmiş bir kurumsal örneğidir: yapım aşamasındaki her film, deneyimli yönetmenlerden oluşan gruba gösterilir ve geri bildirim iki katı kuralla verilir — yorumlar filme yöneliktir, kişiye değil; ve grup sorun gösterir ama çözümü dayatmaz (yani "eleştiri" ile "öneri" ayrılır, karar yönetmende kalır). Catmull, Toy Story 2 dahil birçok filmin bu süzgeçten geçerek baştan şekillendiğini yazar. Mekanizmanın özü geri bildirim kutusuyla aynıdır: gelen her yorum sınıflandırılır ve alıcı neyi dinleyeceğine bilinçli karar verir.' },
          { t: 'h2', text: 'Gerçek fayda' },
          { t: 'ul', items: [
            'Duygusal yükü azaltır: yorumlar kişiliğe saldırı olmaktan çıkıp dört nesnel kutuya dağıtılmış veri hâline gelir.',
            'Seçici eylem sağlar: her geri bildirime tepki vermek yerine yalnızca tavsiye ve eleştiri kutuları eylem üretir.',
            'Özdeğerlendirmeyi dürüstleştirir: şans sorusu, hak edilmemiş övgülerin özgüven balonuna dönüşmesini engeller.',
          ]},
        ],
      },
    ],
  },
  {
    slug: 'evet-hayir-kurali',
    section: 'zaman-onceliklendirme',
    title: 'Evet/Hayır Kuralı',
    question: 'Hızlı bir karar nasıl verilir?',
    summary: 'Net parametrelere dayalı evet/hayır sorularıyla eleme yaparak hızlı karar vermeyi sağlayan kural.',
    tags: ['hızlı karar', 'kriterler'],
    pages: [
      {
        slug: 'kavram',
        title: 'Kavram',
        blocks: [
          { t: 'callout', kind: 'simple', title: 'Bir cümlede', text: 'Sık verdiğin kararlar için önceden birkaç kesin soru yaz; gelen her işi bu sorulardan geçir, biri bile "hayır" çıkarsa işi alma.' },
          { t: 'callout', kind: 'ornek', title: 'Atölyeden örnek', text: 'Mobilyacı Recep her gelen siparişte saatlerce düşünmekten yorulmuştu. Üç soru yazdı ve duvara astı: Müşteri kaporayı peşin veriyor mu? Teslim süresi en az üç hafta mı? İş benim tezgahımda yapılabiliyor mu? Artık telefon geldiğinde üç soruyu soruyor; üçü de "evet" değilse kibarca reddediyor. Ne pazarlık uzuyor ne gece yarısı yetiştirme derdi kalıyor.' },
          { t: 'p', text: 'Hızla karara varmanın iyi bir yolu Evet/Hayır kuralını kullanmaktır. Kural, riskleri tartman gerektiği ama zamanın az olduğu durumlarda değer kazanır. Hasta hissedip doktora giden birini düşün: doktor, teşhisini bir eleme süreciyle koyar — Ateşi var mı? Tansiyonu düşük mü?' },
          { t: 'p', text: 'Evet/Hayır kuralı net parametrelere dayanır; bu yalnızca tıpta değil, yönetimde, özel hayatta ve siyasette de işe yarar. 2013\'te ABD Başkanı Barack Obama, insansız hava aracı saldırıları hakkında karar vermek için üç Evet/Hayır kuralı belirledi: Hedefteki kişi Amerikan halkı için kalıcı ve acil bir tehdit mi? Bu tehditle başa çıkabilecek tek ülke ABD mi? Sivillerin zarar görmeyeceği neredeyse kesin mi? Ancak üç soru da "Evet" ile yanıtlanabiliyorsa saldırı onaylanıyordu.' },
          { t: 'quote', text: 'En eski ve en kısa kelimeler — "evet" ve "hayır" — en çok düşünmeyi gerektirenlerdir.' },
        ],
      },
      {
        slug: 'uygulama',
        title: 'Nasıl Uygulanır',
        blocks: [
          { t: 'steps', items: [
            { title: 'Karar türünü seç', text: 'Tekrarlanan ve zaman baskılı kararları belirle: hangi işleri kabul edeceğim, hangi toplantıya gireceğim, hangi adayı görüşmeye çağıracağım?' },
            { title: '2-4 eleme sorusu yaz', text: 'Her soru net, ikili ve kanıtla yanıtlanabilir olmalı. "İyi bir fırsat mı?" kötü sorudur; "Bu iş temel ücret eşiğimin üstünde mi?" iyi sorudur.' },
            { title: 'Sırayla ele', text: 'Soruları eleme mantığıyla sırala: ilk "Hayır"da dur ve reddet. Yalnızca bütün sorular "Evet" ise devam et.' },
            { title: 'Kuralı sabit tut', text: 'Kuralın değeri istisnasız uygulanmasındadır. Kural her vakada yeniden pazarlık edilirse hız avantajı kaybolur.' },
          ]},
          { t: 'callout', kind: 'warn', title: 'Kural, düşünmenin yerine geçmez', text: 'Evet/Hayır kuralı düşünceyi karar anından kural yazma anına taşır. Kötü yazılmış kural, kötü kararları hızlandırır: soruları belirlerken en yavaş ve dikkatli hâlinle çalış.' },
          { t: 'table', head: ['Eleme sorusu', 'Cevap "Evet" ise', 'Cevap "Hayır" ise'], rows: [
            ['Kapora peşin veriliyor mu?', 'Sonraki soruya geç', 'İşi alma'],
            ['Teslim süresi en az üç hafta mı?', 'Sonraki soruya geç', 'İşi alma'],
            ['İş kendi tezgahımda yapılabilir mi?', 'İşi kabul et', 'İşi alma'],
          ]},
        ],
      },
      {
        slug: 'vaka',
        title: 'Gerçek Vaka & Fayda',
        blocks: [
          { t: 'callout', kind: 'case', title: 'Vaka: Obama\'nın drone kriterleri', text: 'Kitabın da aktardığı belgelenmiş örnek: Obama yönetimi 2013\'te insansız hava aracı operasyonları için açık karar kriterleri ilan etti — hedefin ABD halkına kalıcı ve yakın tehdit oluşturması, tehdidi giderebilecek başka bir hükümetin bulunmaması ve sivillerin zarar görmeyeceğine dair neredeyse kesinlik. Obama bu çerçeveyi Mayıs 2013\'teki Ulusal Savunma Üniversitesi konuşmasında kamuoyuna açıkladı; kriterler yayımlanan başkanlık politika direktifine (PPG) bağlandı. Hayati ve tartışmalı bir alanda bile kararın keyfiyetten çıkarılıp açık Evet/Hayır eşiklerine bağlanması, kuralın en üst düzeyde uygulanmış hâlidir.' },
          { t: 'h2', text: 'Gerçek fayda' },
          { t: 'ul', items: [
            'Karar hızını artırır: tartma süreci her seferinde değil, bir kez — kural yazılırken — yaşanır.',
            'Tutarlılık sağlar: aynı kriterler herkese ve her vakaya uygulandığı için kararlar savunulabilir olur.',
            'Baskı altında hata payını düşürür: stres ve aciliyet anında hazır eleme soruları, sezgisel yanılgılara karşı korkuluk görevi görür.',
          ]},
        ],
      },
    ],
  },
  {
    slug: 'secim-fazlaligi',
    section: 'karar-verme',
    title: 'Seçim Fazlalığı',
    question: 'Seçeneklerini neden sınırlamalısın?',
    summary: 'Çok fazla seçeneğin memnuniyeti artırmak yerine kafa karışıklığı ve karar felci ürettiğini gösteren model.',
    tags: ['seçim paradoksu', 'karar verme'],
    pages: [
      {
        slug: 'kavram',
        title: 'Kavram',
        blocks: [
          { t: 'callout', kind: 'simple', title: 'Bir cümlede', text: 'Önündeki seçenek sayısı arttıkça karar vermek kolaylaşmaz, zorlaşır; bu yüzden seçeneklerini bilerek azalt.' },
          { t: 'callout', kind: 'ornek', title: 'Nalburdan örnek', text: 'Boyacı Veli, müşterisine renk seçtirmek için koca kataloğu açardı: iki yüz renk, bir saat kararsızlık, çoğu zaman "biz size döneriz". Sonra usulü değiştirdi: eve bakıp "size şu üç renk yakışır" diyerek üç kartela uzatmaya başladı. Müşteri beş dakikada seçiyor, iş o hafta bağlanıyor. Az seçenek, hem müşteriyi hem Veli\'yi rahatlattı.' },
          { t: 'p', text: 'Sezgisel olarak "daha çok, daha iyidir" diye düşünürüz: ne kadar çok seçenek değerlendirirsek nihai karar o kadar iyi, ne kadar çok seçeneğimiz varsa o kadar mutlu oluruz. Ama bazen tersi doğrudur: seçenek büyüdükçe beklentiler yükselir — ve yanlış karar verme endişemiz büyür. Bu, "seçim paradoksu"dur.' },
          { t: 'h2', text: 'Reçel deneyi' },
          { t: 'p', text: 'Profesör Sheena Iyengar bunu efsaneleşmiş bir deneyle gösterdi. Bir süpermarkette müşterilere tadımlık reçel sundu: bir gün altı çeşit, başka bir gün yirmi dört çeşit. Küçük seçkide müşterilerin yüzde 40\'ı tadım yaptı ve yüzde 30\'u bir kavanoz satın aldı. Büyük seçki müşterilerin yüzde 60\'ını çekti — ama yalnızca yüzde 2\'si reçel aldı. Sonuç: seçenek bolluğu cezbedicidir ama kafa karıştırır.' },
          { t: 'p', text: 'Bu paradoksu günlük hayatta nasıl çözeriz? Psikoloji profesörü Barry Schwartz\'ın basit önerisi: seçeneklerini azalt. Örneğin restoranda menüde hoşuna giden ilk yemeği seç ve menüyü hemen kapat. Çünkü zihninde ne kadar çok seçenek evirip çevirirsen o kadar tatminsiz olursun.' },
          { t: 'quote', text: 'Daha fazlası zordur.' },
        ],
      },
      {
        slug: 'uygulama',
        title: 'Nasıl Uygulanır',
        blocks: [
          { t: 'steps', items: [
            { title: 'Seçenek tavanı koy', text: 'Karar başına en fazla 3-5 aday değerlendireceğine baştan karar ver: iş başvurusu, tedarikçi, tatil yeri, yazılım aracı…' },
            { title: 'Kriterleri seçimden önce yaz', text: 'Neyin "yeterince iyi" olduğunu seçeneklere bakmadan tanımla; sonra ilk yeterli adayı seç (maksimize eden değil, tatmin eden strateji).' },
            { title: 'Menüyü kapat', text: 'Karar verdikten sonra alternatifleri incelemeyi bırak: karşılaştırmaya devam etmek karar kalitesini değil, sadece pişmanlığı artırır.' },
            { title: 'Başkalarına az seçenek sun', text: 'Müşteriye, ekibe ya da yöneticiye seçenek sunarken 2-3 net alternatif ver; 10 seçenekli sunum karar değil erteleme üretir.' },
          ]},
          { t: 'callout', kind: 'warn', title: 'Az seçenek de bir uçtur', text: 'Modelin eğrisi iki uçludur: hiç seçenek olmaması da mutsuz eder. Amaç sıfır seçenek değil, kafa karışıklığını en aza indiren orta bölgeyi bulmaktır.' },
          { t: 'table', head: ['Durum', 'Az seçenek (6 reçel)', 'Çok seçenek (24 reçel)'], rows: [
            ['Tezgaha uğrayan müşteri', 'Yüzde 40', 'Yüzde 60'],
            ['Satın alan müşteri', 'Yüzde 30', 'Yalnızca yüzde 2'],
            ['Sonuç', 'Az ilgi, çok satış', 'Çok ilgi, neredeyse hiç satış'],
          ]},
        ],
      },
      {
        slug: 'vaka',
        title: 'Gerçek Vaka & Fayda',
        blocks: [
          { t: 'callout', kind: 'case', title: 'Vaka: Iyengar\'ın reçel deneyi ve P&G\'nin raf sadeleştirmesi', text: 'Sheena Iyengar ile Mark Lepper\'ın 2000\'de yayımlanan süpermarket deneyi, alanın en çok atıf alan çalışmalarından biridir: 24 çeşit reçel daha çok ilgi ama dramatik biçimde daha az satın alma üretti. Aynı ilke perakendede belgelenmiş biçimde uygulandı: Procter & Gamble, Head & Shoulders şampuan hattındaki çeşit sayısını azalttığında satışların arttığını raporladı — daha az seçenek, rafta daha kolay karar demekti. Bugün Aldi ve Lidl gibi sınırlı çeşitli marketlerin iş modeli de kısmen bu içgörüye dayanır.' },
          { t: 'h2', text: 'Gerçek fayda' },
          { t: 'ul', items: [
            'Karar felcini kırar: seçenek tavanı, "araştırmaya devam" bahanesini yapısal olarak kapatır.',
            'Karar sonrası memnuniyeti artırır: az seçenekle verilen kararlar daha az "acaba" üretir.',
            'Ürün ve teklif tasarımını iyileştirir: müşteriye sunulan sade seçki, ilgiyi satışa dönüştürür.',
          ]},
        ],
      },
    ],
  },
  {
    slug: 'pazar-boslugu-modeli',
    section: 'strateji-rekabet',
    title: 'Pazar Boşluğu Modeli',
    question: 'Kazançlı bir fikri nasıl tanırım?',
    summary: 'Rakipleri üç eksenli bir haritaya yerleştirerek pazardaki doldurulmamış boşlukları görünür kılan model.',
    tags: ['strateji', 'konumlandırma', 'girişimcilik'],
    pages: [
      {
        slug: 'kavram',
        title: 'Kavram',
        blocks: [
          { t: 'callout', kind: 'simple', title: 'Bir cümlede', text: 'Yeni bir işe girmeden önce rakiplerinin nerede durduğunu haritaya çiz; kimsenin olmadığı ama müşterinin istediği boş yeri bul, oraya yerleş.' },
          { t: 'callout', kind: 'ornek', title: 'Mahalleden örnek', text: 'Fırıncı Nuri yeni dükkan açacak. Mahalledeki üç fırına bakar: biri ucuz ama kalitesiz, biri pahalı ve merkezde, biri sadece ekmek satıyor. Kimse sabah erken saatte sıcak poğaça ve simiti fabrika servis güzergahında satmıyor. Nuri dükkanı servis duraklarının yanına açar, sabah beşte fırını yakar. Boşluk doğru: işçiler daha ilk hafta kuyruk olur.' },
          { t: 'p', text: 'Her yeni işin amacı, pazarda bir boşluk keşfetmek ve o boşluğu doldurmaktır. Peki en iyi yol nedir? Pazar boşluğu modeli, pazarı üç boyutlu ve net bir biçimde resmeder: pazarını, müşterilerini ve gelecekteki ürünlerini ölçen üç eksen çiz.' },
          { t: 'h2', text: 'Kafe örneği' },
          { t: 'p', text: 'Diyelim ki yeni bir kafe açmak istiyorsun. Rakiplerini şu ölçütlere göre grafiğe yerleştir:' },
          { t: 'ul', items: [
            'X ekseni: Konum (bu sokaktan ne kadar yaya geçiyor?)',
            'Y ekseni: Fiyat (kahve ne kadar pahalı?)',
            'Z ekseni: Havalılık faktörü (kafe ne kadar popüler?)',
          ]},
          { t: 'p', text: 'Rakiplerin yoğun olduğu bölgelere yalnızca iş modelin bir "kategori katili" olma potansiyeli taşıyorsa gir. (Örneğin Starbucks, kahve içmeyi sıradan bir günlük alışkanlıktan premium bir deneyime yükselterek kategori katili oldu ve bütün pazar oyuncuları için ölçüt hâline geldi.) Gözden kaçmış, henüz işgal edilmemiş bir niş ara.' },
          { t: 'callout', kind: 'warn', title: 'Dikkat!', text: 'O bölgede başka hiç kimse yoksa, önce orada gerçekten bir talep olup olmadığını kontrol etmelisin.' },
          { t: 'quote', text: 'Konumlandırma petrol sondajı gibidir. Yakın olmak yeterince iyi değildir.' },
        ],
      },
      {
        slug: 'uygulama',
        title: 'Nasıl Uygulanır',
        blocks: [
          { t: 'steps', items: [
            { title: 'Eksenlerini seç', text: 'Pazarın için ayırt edici üç ölçüt belirle: fiyat, erişilebilirlik, popülerlik, kalite, hız… Müşterinin gerçekten umursadığı eksenleri seç.' },
            { title: 'Rakipleri haritala', text: 'Bütün önemli rakipleri üç eksende puanlayıp grafiğe yerleştir. Harita ne kadar dürüstse boşluklar o kadar gerçektir.' },
            { title: 'Boşlukları değerlendir', text: 'Boş bölgeleri tek tek incele: burada niye kimse yok? Fark edilmemiş bir niş mi, yoksa talep olmadığı için terk edilmiş bir çöl mü?' },
            { title: 'Konum kararını ver', text: 'Ya boş ve talepli bir nişe yerleş ya da dolu bölgeye ancak kategori katili olabilecek bir modelle gir. İkisinin arası — "biraz farklıyız" — en zayıf konumdur.' },
          ]},
          { t: 'callout', kind: 'tip', title: 'Talep testini ucuza yap', text: 'Boş bölgede talep olup olmadığını büyük yatırım yapmadan sına: ön satış, bekleme listesi, tek günlük pop-up. Boşluğun sesi, ancak müşteri parasıyla oylayınca duyulur.' },
          { t: 'table', head: ['Rakip', 'Fiyat', 'Konum', 'Öne çıkan yanı'], rows: [
            ['Fırın A', 'Ucuz', 'Ara sokak', 'Sadece ekmek, kalite düşük'],
            ['Fırın B', 'Pahalı', 'Merkez cadde', 'Pasta ve tatlı ağırlıklı'],
            ['Fırın C', 'Orta', 'Çarşı içi', 'Öğlen yoğun, sabah kapalı'],
            ['Boşluk (Nuri)', 'Orta', 'Servis durakları', 'Sabah 5\'te sıcak poğaça ve simit'],
          ]},
        ],
      },
      {
        slug: 'vaka',
        title: 'Gerçek Vaka & Fayda',
        blocks: [
          { t: 'callout', kind: 'case', title: 'Vaka: Starbucks\'ın kategori katilliği', text: 'Kitabın kendi örneği belgeli bir dönüşümdür: Howard Schultz, 1983\'te Milano\'daki espresso barlarını gördükten sonra kahveyi ABD\'de sıradan bir emtia olmaktan çıkarıp "üçüncü mekân" deneyimine dönüştürme fikrini Starbucks\'a taşıdı. Şirket, ucuz filtre kahve ile ev arasındaki dolu görünen pazarda aslında boş olan ekseni buldu: premium deneyim + sosyal mekân. Bu konumlandırma Starbucks\'ı kategori katili yaptı; zincir on yıllar içinde dünya çapında on binlerce mağazaya ulaştı ve bütün kahve pazarının kıyaslandığı ölçüt hâline geldi.' },
          { t: 'h2', text: 'Gerçek fayda' },
          { t: 'ul', items: [
            'Rekabet tartışmasını görselleştirir: "pazar dolu mu?" sorusu, üç eksenli haritada nesnel bir cevaba kavuşur.',
            'Sahte boşluk tuzağından korur: modelin uyarısı sayesinde "kimsenin olmadığı yer" önce talep testinden geçirilir.',
            'Konumlandırmayı keskinleştirir: girişim, neyi herkesten farklı yaptığını tek cümleyle söyleyebilir hâle gelir.',
          ]},
        ],
      },
    ],
  },
  {
    slug: 'morfolojik-kutu-scamper',
    section: 'yaraticilik-dahi',
    title: 'Morfolojik Kutu ve SCAMPER',
    question: 'Yaratıcı olmak için neden yapıya ihtiyacın var?',
    summary: 'Var olan özellikleri sistematik biçimde birleştirerek ve SCAMPER sorularıyla dönüştürerek yenilik üreten iki teknik.',
    tags: ['yaratıcılık', 'inovasyon'],
    pages: [
      {
        slug: 'kavram',
        title: 'Kavram',
        blocks: [
          { t: 'callout', kind: 'simple', title: 'Bir cümlede', text: 'Yeni bir fikir bulmak için boş sayfaya bakma; elindeki parçaların özelliklerini bir tabloya dök ve onları daha önce denenmemiş şekillerde birleştir.' },
          { t: 'callout', kind: 'ornek', title: 'Atölyeden örnek', text: 'Mobilyacı Cemil satışları artırmak istiyor. Bir tablo çizer: malzeme satırına ahşap, metal, cam; kullanım satırına oturma, saklama, çalışma; müşteri satırına öğrenci, ofis, kafe yazar. Parmağıyla kombinasyonları gezerken durur: metal + saklama + öğrenci — yurt odaları için kilitli, yatak altına giren ince metal sandık. Kimse yapmıyor. İlk partiyi yurt işletmecisine satar. Fikir ilhamdan değil, tablodan çıktı.' },
          { t: 'p', text: 'İnovasyon tamamen yeni bir şey yapmak olabileceği gibi, hâlihazırda var olan şeylerin yeni bir kombinasyonunu yapmak da olabilir. Peki bu nasıl başarılır?' },
          { t: 'p', text: 'Morfoloji kavramı, biyolojik yapı ve biçimlerin incelenmesinden gelir. 1930\'larda İsviçreli fizikçi Fritz Zwicky, Kaliforniya Teknoloji Enstitüsü\'nde "morfolojik kutu" adını verdiği bir problem çözme yöntemi geliştirdi: yeni bir varlık, çeşitli mevcut varlıkların özelliklerinin birleştirilmesiyle oluşturulur. Zwicky\'nin başlangıçta jet motoru teknolojisine uyguladığı yöntem, sonradan pazarlama stratejilerinde ve yeni fikirlerin geliştirilmesinde de kullanılmaya başlandı.' },
          { t: 'h2', text: 'Nasıl çalışır' },
          { t: 'p', text: 'Örneğin yeni bir araba geliştirmek için bütün ilgili parametreler (araç tipi, hedef kitle vb.) not edilir ve her parametreye olabildiğince çok özellik atanır. Sonuç bir tablodur. Sonraki aşama beyin fırtınasıdır: araba bir SUV olacaksa ama aynı zamanda enerji verimli ve ucuz üretilmeli — hangi özellikler bu gereksinimlere uyar? Seçtiğin özellikleri bir çizgiyle birleştir; bu sana önceliklerinin genel görünümünü verir.' },
          { t: 'h2', text: 'SCAMPER kontrol listesi' },
          { t: 'ul', items: [
            'Substitute (İkame et): insanları, bileşenleri, malzemeleri değiştir.',
            'Combine (Birleştir): başka işlev ya da nesnelerle birleştir.',
            'Adapt (Uyarla): işlevleri ya da görünümü uyarla.',
            'Modify (Değiştir): boyutu, biçimi, dokuyu ya da sesi değiştir.',
            'Put to other use (Başka amaçla kullan): yeni, farklı, birleşik kullanımlar bul.',
            'Eliminate (Ele): azalt, sadeleştir, gereksiz olanı çıkar.',
            'Reverse (Tersine çevir): tersinden kullan, evir, ters yüz et.',
          ]},
          { t: 'quote', text: 'Asıl mesele kimsenin henüz görmediğini görmek değil; herkesin gördüğü şey hakkında kimsenin henüz düşünmediğini düşünmektir. — Arthur Schopenhauer' },
        ],
      },
      {
        slug: 'uygulama',
        title: 'Nasıl Uygulanır',
        blocks: [
          { t: 'steps', items: [
            { title: 'Parametreleri listele', text: 'Ürünü ya da problemi bileşenlerine ayır: tasarım, motor, hedef kitle, malzeme, kanal… Her satır bir parametre olsun.' },
            { title: 'Özellik havuzunu doldur', text: 'Her parametre için olabildiğince çok alternatif özellik yaz. Bu aşama uzmanlık ve hayal gücü ister; sansürleme, doldur.' },
            { title: 'Kombinasyon çiz', text: 'Kısıtlarını belirle (ör. verimli + ucuz) ve tabloda her parametreden bir özellik seçip çizgiyle bağla. Her çizgi bir aday tasarımdır.' },
            { title: 'SCAMPER ile zorla', text: 'Ortaya çıkan adayı yedi SCAMPER sorusundan geçir: neyi ikame edebilir, neyi birleştirebilir, neyi eleyebilir, neyi tersine çevirebilirsin?' },
          ]},
          { t: 'callout', kind: 'tip', title: 'Yapı, yaratıcılığın düşmanı değil', text: 'Modelin ana iddiası budur: boş sayfa değil, dolu tablo yaratıcılık üretir. Kombinasyon sayısı (ör. 7 parametre × 6 özellik) insan sezgisinin tek başına tarayamayacağı kadar büyüktür; kutu bu uzayı sistematik gezilebilir yapar.' },
          { t: 'table', head: ['SCAMPER harfi', 'Soru', 'Cemil\'in sandığı için örnek'], rows: [
            ['S - İkame et', 'Malzemeyi değiştirsem?', 'Ahşap yerine ince metal gövde'],
            ['C - Birleştir', 'İki işlevi birleştirsem?', 'Sandık + oturma minderi: puf sandık'],
            ['M - Değiştir', 'Boyutu değiştirsem?', 'Yatak altına girecek kadar alçalt'],
            ['E - Ele', 'Neyi çıkarsam?', 'Süslü kulpları at, maliyeti düşür'],
            ['R - Tersine çevir', 'Tersinden kullansam?', 'Kapak üstten değil önden açılsın'],
          ]},
        ],
      },
      {
        slug: 'vaka',
        title: 'Gerçek Vaka & Fayda',
        blocks: [
          { t: 'callout', kind: 'case', title: 'Vaka: Zwicky\'nin jet tahrik çalışmaları', text: 'Fritz Zwicky yöntemini kendisi belgeledi: Caltech\'te ve Aerojet şirketinin araştırma yöneticisi olarak morfolojik analizi jet ve roket tahrik sistemlerine uyguladı; olası tahrik türlerini parametrelere ayırıp sistematik kombinasyonlarla o güne dek düşünülmemiş konfigürasyonları ortaya çıkardı. Yöntemin kökeni de ilginçtir: Zwicky aynı sistematik tarama zihniyetiyle astrofizikte karanlık maddeyi ve süpernova kavramını öngören öncü çalışmalara imza attı. SCAMPER tarafında ise sorular, reklam ajansı BBDO\'nun kurucusu ve beyin fırtınasının babası Alex Osborn\'un soru listelerinden Bob Eberle tarafından derlendi ve bugün ürün geliştirme eğitimlerinin standart araçlarındandır.' },
          { t: 'h2', text: 'Gerçek fayda' },
          { t: 'ul', items: [
            'İlham beklemeyi ortadan kaldırır: yenilik, dâhi kıvılcımından sistematik kombinasyon taramasına dönüşür.',
            'Görünmez seçenekleri açığa çıkarır: tablo, sezginin atladığı sıra dışı eşleşmeleri (ör. elektrikli + pickup + premium) zorla önüne koyar.',
            'Ekip yaratıcılığını demokratikleştirir: herkes aynı tabloya katkı verir; fikir üretimi en yüksek sesliye değil yönteme bağlanır.',
          ]},
        ],
      },
    ],
  },
  {
    slug: 'hediye-modeli',
    section: 'insan-toplum',
    title: 'Hediye Modeli',
    question: 'Hediyelere ne kadar harcamalı?',
    summary: 'Hediyeleri fiyat ve değer eksenlerinde konumlandırıp cömertliği ve deneyimi öne çıkaran model.',
    tags: ['ilişkiler', 'değer'],
    pages: [
      {
        slug: 'kavram',
        title: 'Kavram',
        blocks: [
          { t: 'callout', kind: 'simple', title: 'Bir cümlede', text: 'İyi hediye pahalı olan değil, alan kişiye kıymetli gelendir; paran azsa bile isabetli ve gönülden bir hediye her zaman kazanır.' },
          { t: 'callout', kind: 'ornek', title: 'Atölyeden örnek', text: 'Usta Şükrü, emekli olan kalfası için hediye düşünür. Mağazadan pahalı bir saat alabilir — ama kalfanın koluna takmayacağını bilir. Bunun yerine otuz yıl birlikte kullandıkları ilk el planyasını temizletir, üzerine küçük bir pirinç plaka çaktırır: "Otuz yılın hatırasına." Kalfa saati unuturdu; planyayı vitrinine koyar, her misafire anlatır. Az para, çok değer.' },
          { t: 'p', text: 'Hediye vermek bir tür mayın tarlasıdır. Ucuz ya da kişiliksiz bir hediye, alan kişiye değersiz hissettirebilir ve hem veren hem alan için tuhaf bir durum yaratır. Kitabın kendi deyişiyle "son derece bilim dışı" olan bu küçük modelin iki ekseni vardır:' },
          { t: 'ul', items: [
            'Hediye ne kadar pahalı?',
            'Hediye ne kadar değerli (kıymet veriliyor)?',
          ]},
          { t: 'p', text: 'Modelin çizdiği harita nettir: lüks bir saat pahalıdır ama illa değerli hissettirmez; dedenin köstekli saati hem pahalı hem değerlidir; ilgi ve zaman ise ucuz ama son derece değerlidir. Fiyat ile değer ayrı eksenlerdir — ve asıl hedef, sağ taraftır: değer ekseni.' },
          { t: 'h2', text: 'İki temel kural' },
          { t: 'ul', items: [
            'Cömert olmak cimri olmaktan iyidir ("Gerçekten gerek yoktu" cümlesine aldanma).',
            'Deneyim hediyesi, maddi hediyeyi yener.',
          ]},
          { t: 'quote', text: 'En basit zevklere sahibim. Her zaman en iyisiyle tatmin olurum. — Oscar Wilde' },
        ],
      },
      {
        slug: 'uygulama',
        title: 'Nasıl Uygulanır',
        blocks: [
          { t: 'steps', items: [
            { title: 'İki soruyu sor', text: 'Aklındaki hediye için: fiyatı ne, alıcı için değeri ne olur? İkisini ayrı ayrı puanla — pahalı olması değerli olacağı anlamına gelmez.' },
            { title: 'Değer eksenine kay', text: 'Bütçe ne olursa olsun hediyeyi kişiselleştir: ortak anıya, alıcının tutkusuna ya da ihtiyacına bağla. Değer, fiyat etiketi yerine isabetten gelir.' },
            { title: 'Deneyimi düşün', text: 'Eşdeğer bütçeyle bir nesne yerine bir deneyim (konser, yemek, gezi, birlikte geçirilecek zaman) hediye etmeyi değerlendir.' },
          ]},
          { t: 'callout', kind: 'tip', title: 'En ucuz ve en değerli hediye', text: 'Modelin haritasında en sağdaki nokta "ilgi"dir: dikkat ve zaman, neredeyse hiçbir maliyeti olmayan ama en yüksek değerde hissedilen hediyedir.' },
          { t: 'callout', kind: 'warn', title: '"Gerek yoktu" cümlesine kanma', text: 'Kitabın uyarısı: cimriliği "alçakgönüllülük" sinyalleriyle meşrulaştırma. Cömertlik, ilişki sermayesine yatırımdır.' },
          { t: 'table', head: ['Hediye', 'Fiyatı', 'Alan için değeri'], rows: [
            ['Vitrin işi lüks saat', 'Yüksek', 'Düşük: kişisel değil'],
            ['Dedenin köstekli saati', 'Yüksek', 'Yüksek: hatıra taşıyor'],
            ['Plakalı eski el planyası', 'Düşük', 'Yüksek: ortak anıyı taşıyor'],
            ['Birlikte balık avına gitmek', 'Düşük', 'Yüksek: deneyim ve zaman'],
          ]},
        ],
      },
      {
        slug: 'vaka',
        title: 'Gerçek Vaka & Fayda',
        blocks: [
          { t: 'callout', kind: 'case', title: 'Vaka: Deneyim ekonomisinin yükselişi', text: 'Modelin "deneyim maddi hediyeyi yener" kuralı, belgelenmiş bir tüketim dönüşümüyle örtüşür: Cornell Üniversitesi\'nden psikolog Thomas Gilovich\'in yirmi yılı aşan araştırma programı, deneyim satın almalarının maddi satın almalardan daha kalıcı mutluluk ürettiğini tekrarlanan çalışmalarla gösterdi — deneyimler kimliğimizin parçası olur, kıyaslanmaz ve anlatıldıkça değerlenir. Perakende sektörü de bu kaymayı ölçtü: hediye pazarında deneyim hediyeleri (etkinlik biletleri, atölyeler, geziler) kategorisi istikrarlı biçimde büyüyor ve Airbnb ile Tinggly gibi şirketler doğrudan "deneyim hediye etme" ürünleri kurdu.' },
          { t: 'h2', text: 'Gerçek fayda' },
          { t: 'ul', items: [
            'Hediye stresini azaltır: iki eksenli basit soru, "ne alsam?" panik alışverişini isabetli seçime çevirir.',
            'Bütçeyi doğru yere harcatır: para fiyat eksenine değil değer eksenine yatırılır.',
            'İlişkiyi güçlendirir: kişiselleştirilmiş ya da deneyim temelli hediye, nesneden uzun yaşayan ortak bir anı bırakır.',
          ]},
        ],
      },
    ],
  },
  {
    slug: 'kutunun-disinda-dusunmek',
    section: 'yaraticilik-dahi',
    title: 'Kutunun Dışında Düşünmek',
    question: 'Parlak fikirler nasıl bulunur?',
    summary: 'Dokuz nokta bulmacasıyla varsayılan sınırları aşmayı anlatan — ve kutu içinde düşünmenin şaşırtıcı gücünü de gösteren — model.',
    tags: ['yaratıcılık', 'problem çözme'],
    pages: [
      {
        slug: 'kavram',
        title: 'Kavram',
        blocks: [
          { t: 'callout', kind: 'simple', title: 'Bir cümlede', text: 'Çözemediğin sorunların çoğunda seni durduran, kimsenin koymadığı ama senin var sandığın kurallardır; önce o kuralları bul, sonra bilerek çiğne.' },
          { t: 'callout', kind: 'ornek', title: 'Şantiyeden örnek', text: 'Şantiyede ağır bir kazan bodruma indirilecek; kapıdan sığmıyor, vinç içeri giremiyor. Herkes "kapıyı büyütelim mi, duvarı mı kıralım" diye tartışıyor. Genç bir usta sorar: "Kazanı tek parça indirmek zorunda mıyız?" Kimse o kuralı koymamıştır. Kazan sökülür, parçalar merdivenden iner, bodrumda kaynatılır. Çözüm, görünmez kuralı fark etmekle geldi.' },
          { t: 'p', text: 'Gerçekten yenilikçi bir fikir — eski bir fikrin yeni bir bağlama uygulanması ya da mevcut bir fikrin çeşitlemesi değil — nadirdir. Yenilikçi fikirler genellikle konfor alanımızdan çıktığımızda ya da kuralları çiğnediğimizde ortaya çıkar. Buradaki örnek, 20. yüzyılın başında bulmaca dergilerinde görülen "dokuz nokta problemi"dir.' },
          { t: 'p', text: 'Görev: dokuz noktayı, kalemi kâğıttan kaldırmadan en fazla dört düz çizgiyle birleştir. Çözümün püf noktası: çizgileri kutunun dışına uzatmak. Zihnimiz noktaların oluşturduğu kareyi görünmez bir sınır sayar; oysa böyle bir kural hiç konmamıştır.' },
          { t: 'h2', text: 'Ama acele etme: kutunun içi de işe yarar' },
          { t: 'p', text: 'Bu bulmaca yaratıcı düşünmenin klasik örneğidir; ama aceleci sonuçlara varma. British Columbia Üniversitesi\'nden psikoloji profesörü Dr. Peter Suedfeld ilginç bir gözlem yaptı. Geliştirdiği Kısıtlı Çevresel Uyarım Tekniği\'nde (REST) kişi, görsel ve işitsel uyarımın olmadığı karanlık bir odada zaman geçirir. Suedfeld denekleri çıldırmadı; tam tersine tansiyonları düştü, ruh hâlleri iyileşti ve daha yaratıcı oldular.' },
          { t: 'quote', text: 'Kutunun dışında düşünmek isteyen kişi, bunu bir kutunun içinde düşünerek daha iyi yapar.' },
        ],
      },
      {
        slug: 'uygulama',
        title: 'Nasıl Uygulanır',
        blocks: [
          { t: 'steps', items: [
            { title: 'Görünmez kuralları listele', text: 'Takıldığın problemde hangi kısıtlara uyduğunu yaz; sonra her biri için sor: bu kuralı gerçekten kim koydu? Çoğu "kural", dokuz noktanın karesi gibi zihnin uydurmasıdır.' },
            { title: 'Sınırı bilinçli ihlal et', text: 'En az bir varsayımı kasıtlı olarak çiğneyen çözümler üret: bütçe sınırsız olsaydı? Bu adım zorunlu olmasaydı? Müşteri rakibimiz olsaydı?' },
            { title: 'Uyarımı kıs', text: 'Suedfeld\'in bulgusunu uygula: bildirimsiz, ekransız, sessiz bir blokta problemi düşün. Yaratıcılık gürültüde değil, uyarım azaldığında yükselir.' },
            { title: 'İki modu dönüşümlü kullan', text: 'Önce serbest ihlal modu (kutu dışı), sonra sessiz derinleşme modu (kutu içi). Parlak fikir çoğu zaman ikisinin ardışıklığından çıkar.' },
          ]},
          { t: 'callout', kind: 'warn', title: 'Slogan tuzağı', text: '"Kutunun dışında düşün" bir emir olarak işe yaramaz; kimse istemle yaratıcı olmaz. İşe yarayan, somut varsayımları tek tek bulup sınamak ve zihne sakin alan açmaktır.' },
          { t: 'table', head: ['Görünmez kural', 'Sorgulayan soru', 'Açılan çözüm'], rows: [
            ['Kazan tek parça inmeli', 'Kim söyledi tek parça diye?', 'Söküp bodrumda birleştir'],
            ['Çizgiler karenin içinde kalmalı', 'Kare diye bir sınır var mı?', 'Çizgiyi noktaların dışına taşır'],
            ['Dükkan gündüz açık olmalı', 'Müşterim ne zaman boş?', 'Akşam vardiyası çıkışına göre aç'],
            ['İyi fikir masa başında bulunur', 'Zihin ne zaman rahatlıyor?', 'Sessiz bir yürüyüşte düşün'],
          ]},
        ],
      },
      {
        slug: 'vaka',
        title: 'Gerçek Vaka & Fayda',
        blocks: [
          { t: 'callout', kind: 'case', title: 'Vaka: Suedfeld\'in REST deneyleri ve flotasyon araştırmaları', text: 'Peter Suedfeld\'in 1970\'lerden itibaren yürüttüğü ve akademik literatürde yayımlanan REST çalışmaları, duyusal kısıtlamanın beklenenin aksine zihinsel işlevleri iyileştirdiğini belgeledi: deneklerde kan basıncı düştü, ruh hâli iyileşti, bazı görevlerde yaratıcılık arttı. Bu araştırma çizgisi bugün flotasyon-REST (yüzdürme tankı) terapisi olarak devam ediyor; sporcular ve sanatçılar tarafından zihinsel toparlanma ve odak için kullanılıyor, kaygı azaltıcı etkileri klinik çalışmalarda inceleniyor. Dokuz nokta problemi ise psikolojide zihinsel set (kendi kendine konan kısıt) araştırmalarının standart deney malzemesi olmuştur.' },
          { t: 'h2', text: 'Gerçek fayda' },
          { t: 'ul', items: [
            'Sahte kısıtları görünür kılar: takılınan problemlerin çoğu, hiç konmamış kurallara uyulduğu için çözülmez.',
            'Yaratıcılık pratiğini iki yönlü zenginleştirir: hem sınır ihlali hem sessiz derinleşme meşru araç olarak kullanılır.',
            'Toplantı verimini artırır: "hangi varsayımı çiğneyebiliriz?" sorusu, beyin fırtınasına somut bir kaldıraç verir.',
          ]},
        ],
      },
    ],
  },
  {
    slug: 'sonuclar-modeli',
    section: 'karar-verme',
    title: 'Sonuçlar Modeli',
    question: 'Kararları neden zamanında vermek önemli?',
    summary: 'Bilgi zamanla artarken kararların etkisinin azaldığını gösteren, erken ve cesur karar vermeye çağıran model.',
    tags: ['zamanlama', 'belirsizlik', 'cesaret'],
    pages: [
      {
        slug: 'kavram',
        title: 'Kavram',
        blocks: [
          { t: 'callout', kind: 'simple', title: 'Bir cümlede', text: 'İşin başında az şey bilirsin ama kararların çok şey değiştirir; sonunda çok şey bilirsin ama iş işten geçmiştir. Bu yüzden önemli kararları erken ve cesurca ver.' },
          { t: 'callout', kind: 'ornek', title: 'Şantiyeden örnek', text: 'Bir ev yapılırken temelin yeri ve genişliği en başta, daha zemin raporu bile tam değilken kararlaştırılır — ve bu karar her şeyi belirler. Boya rengi ise en sonda seçilir; her şeyi bilirsin ama artık değiştirebileceğin tek şey renktir. Usta Halil bunu bilir: temel ve kolon kararlarını ertelemez, en çok kafayı onlara yorar. Boya tartışmasına ise beş dakika ayırır.' },
          { t: 'p', text: 'Çoğu zaman sınırlı ya da belirsiz bilgiye dayanarak karar vermek zorunda kalırız. Örneğin bir projenin başında, ince ayrıntılar henüz netleşmemişken karar vermede cesur olmamız gerekir — özellikle de bu erken kararlar en geniş kapsamlı sonuçları doğurduğu için. Projenin sonuna doğru daha çok şey biliriz ve daha az şüphemiz olur; ama o noktada artık karar verilecek temel bir şey kalmamıştır.' },
          { t: 'p', text: 'O hâlde en önemli soru şudur: şüphe ile karar arasındaki uçurumu nasıl aşarız?' },
          { t: 'callout', kind: 'warn', title: 'Dikkat!', text: 'Şüphelerimiz olduğu için kararları sık sık erteleriz. Ama karar vermemek de başlı başına bir karardır. Bir çözümü ertelediğinde bu çoğu zaman bilinçsiz — ve iletilmeyen — bir karardır; ekipte belirsizlik yaratır. Kararı sonra vermek istiyorsan, bunu açıkça ilet.' },
          { t: 'p', text: 'Danimarkalı organizasyon kuramcıları Kristian Kreiner ve Søren Christensen bu modelle bizi cesur olmaya, asgari bilgiyle karar vermeye teşvik eder.' },
          { t: 'quote', text: 'Yapmadıklarımdan pişman olmaktansa yaptıklarımdan pişman olmayı yeğlerim. — Lucille Ball' },
        ],
      },
      {
        slug: 'uygulama',
        title: 'Nasıl Uygulanır',
        blocks: [
          { t: 'steps', items: [
            { title: 'Eğriyi çiz', text: 'Projendeki iki eğriyi hatırla: bilgi zamanla artar, kararların etkisi zamanla azalır. Bugünkü konumunu işaretle.' },
            { title: 'Erken kararları belirle', text: 'En geniş sonuç doğuracak kararlar hangileri? Bunları listele ve bilinçli olarak öne çek; mükemmel bilgiyi bekleme.' },
            { title: 'Asgari bilgi eşiği koy', text: '"Karar için hangi bilgi gerçekten şart?" diye sor. Eşik aşıldıysa karar ver; kalan belirsizliği yönetilecek risk olarak kaydet.' },
            { title: 'Ertelemeyi açıkça ilan et', text: 'Bir kararı bilinçli erteliyorsan tarih koy ve ekibe duyur: "Bu kararı şu bilgi geldiğinde, en geç şu tarihte vereceğiz."' },
          ]},
          { t: 'callout', kind: 'tip', title: 'Sessiz erteleme en pahalı ertelemedir', text: 'Modelin en pratik dersi: ertelenen ama iletilmeyen karar, ekipte herkesin farklı varsayımla ilerlemesine yol açar. Ertelemek meşrudur; sessiz ertelemek değildir.' },
          { t: 'table', head: ['İnşaat aşaması', 'Elindeki bilgi', 'Kararın etkisi'], rows: [
            ['Temel ve kolonlar', 'Az: zemin raporu bile taze', 'Çok büyük: her şeyi belirler'],
            ['Duvarlar ve tesisat', 'Orta: proje netleşti', 'Orta: değişiklik pahalı ama mümkün'],
            ['Boya ve kaplama', 'Çok: her şey ortada', 'Küçük: sadece görünüşü değiştirir'],
          ]},
        ],
      },
      {
        slug: 'vaka',
        title: 'Gerçek Vaka & Fayda',
        blocks: [
          { t: 'callout', kind: 'case', title: 'Vaka: Amazon\'un "Day 1" karar felsefesi', text: 'Jeff Bezos, hissedarlara yazdığı 2016 mektubunda büyük şirketlerin karar yavaşlığına karşı belgelenmiş bir ilke ortaya koydu: kararların çoğu geri döndürülebilir "çift yönlü kapılardır" ve bunlar için mükemmel bilgi beklemek ölümcüldür. Bezos\'un kuralı, sonuçlar modelinin kurumsal uygulamasıdır: "Kararların çoğu, sahip olmak isteyeceğin bilginin yaklaşık yüzde 70\'iyle verilmelidir; yüzde 90\'ı beklersen çoğu durumda yavaş kalıyorsun demektir." Mektup ayrıca yanlış kararın hızla düzeltilebileceğini, yavaşlığın ise düzeltilemeyeceğini vurgular — bilgi eğrisini beklemenin maliyeti, hatanın maliyetinden büyüktür.' },
          { t: 'h2', text: 'Gerçek fayda' },
          { t: 'ul', items: [
            'Analiz felcini kırar: asgari bilgi eşiği, "biraz daha araştıralım" döngüsünü sonlandırır.',
            'Erken kaldıraç yakalar: en etkili kararlar, etkilerinin en yüksek olduğu proje başında verilir.',
            'Ekip belirsizliğini azaltır: ertelenen kararların açıkça iletilmesi, herkesin aynı varsayımlarla çalışmasını sağlar.',
          ]},
        ],
      },
    ],
  },
  {
    slug: 'bilincsiz-dusunme-teorisi',
    section: 'karar-verme',
    title: 'Bilinçsiz Düşünme Teorisi',
    question: 'Sezgisel kararlar nasıl verilir?',
    summary: 'Karmaşık kararlarda zihnin görünmeyen tarafının, hesap yapan akıldan daha iyi eleme yaptığını söyleyen teori.',
    tags: ['sezgi', 'bilinçdışı', 'karar verme'],
    pages: [
      {
        slug: 'kavram',
        title: 'Kavram',
        blocks: [
          { t: 'callout', kind: 'simple', title: 'Bir cümlede', text: 'Karmaşık bir kararda her şeyi hesaplamaya çalışma; önce bilgileri topla, sonra kararı bir süre kafandan çıkar — için zaten ne istediğini biliyor.' },
          { t: 'callout', kind: 'ornek', title: 'Atölyeden örnek', text: 'Usta Fikret iki dükkan arasında kalmıştır: biri çarşıda pahalı, biri sanayide ucuz. Haftalarca hesap yapar, içinden çıkamaz. Kahvede arkadaşı bozuk para uzatır: "Yazı çarşı, tura sanayi." Para havadayken Fikret\'in içi "yazı gel" diye geçirir. Para yere düşmeden karar bellidir: çarşı. Yazı tura karar vermedi; Fikret\'in zaten verdiği kararı yüzeye çıkardı.' },
          { t: 'p', text: 'İyi kararın, her şeyi tek tek düşünüp tartmanın sonucu olduğuna inanmak cazip gelir — ve karar basitse bu doğrudur da: artıları ve eksileri yaz, tart, seç. Ama karar karmaşıksa ve bariz bir cevap yoksa, düşünmeye ara vermek daha iyidir. Bütün bilgiyi kafanda hesaplayarak tartmaya çalışmak yerine iç sesine güven. Kulağa ters gelebilir; ama zihnin farkında olmadan çalışan tarafı, büyük bilgi yığınlarını elemekte hesap yapan tarafından daha iyidir.' },
          { t: 'h2', text: 'Yazı tura numarası' },
          { t: 'p', text: 'Peki beynin hesap yapan tarafı nasıl susturulur? Psikolog Gerd Gigerenzer\'in numarası çok basit: iki seçenek arasında karar veremiyorsan yazı tura at. Para havada dönerken hangi yüzün gelmesini istediğini içinde hissedeceksin. Paranın hangi yüze düştüğüne bakmana bile gerek kalmaz — cevabı zaten öğrendin.' },
          { t: 'p', text: 'Amaç, hesap yapan tarafı bir süre meşgul edip asıl isteklerinle ve birikmiş deneyiminle doğrudan temas kurmaktır. Ap Dijksterhuis ve Zeger van Olden\'in yöntemi de aynı ilkeye dayanır: soruyu kafana koy, sonra dikkatini dağıtan kısa bir işle uğraş (bulmaca çözmek gibi), sonra kararını hemen yaz. Bilinçli düşünce bulmacayla meşgulken, zihnin görünmeyen tarafı kararı arka planda pişirir.' },
          { t: 'quote', text: 'Sezgi, hissettiğimiz ama açıklayamadığımız bilgidir.' },
        ],
      },
      {
        slug: 'uygulama',
        title: 'Nasıl Uygulanır',
        blocks: [
          { t: 'steps', items: [
            { title: 'Karar türünü ayır', text: 'Basit ve ölçülebilir kararlarda (fiyat karşılaştırması, teknik seçim) rasyonel analizde kal. Sezgiyi karmaşık, çok değişkenli ve net cevabı olmayan kararlara sakla.' },
            { title: 'Önce veriyi yükle', text: 'Sezgi boşlukta çalışmaz: seçenekleri, kısıtları ve bilgileri önce bilinçli olarak incele. Bilinçdışı ancak beslendiği veriyi eler.' },
            { title: 'Dikkati dağıt', text: 'Kararı bir süre bilinçli düşünmeyi bırak: yürüyüş, anagram, başka bir iş, bir gece uyku. Karar arka planda olgunlaşsın.' },
            { title: 'Yazı turayla hissini yokla', text: 'Hâlâ kararsızsan Gigerenzer\'in numarasını uygula: parayı at ve havadayken hangi sonucu dilediğini yakala. O dilek, kararındır.' },
          ]},
          { t: 'callout', kind: 'warn', title: 'Sezgi, deneyimin kısaltmasıdır', text: 'Sezgi ancak deneyim olan alanlarda güvenilirdir: bin görüşme yapmış işe alımcının hissi veridir, ilk kez ev alan kişinin hissi çoğu zaman kaygıdır. Deneyimsiz alanda sezgiye değil yapılandırılmış analize dön.' },
          { t: 'table', head: ['Karar türü', 'Örnek', 'Önerilen yol'], rows: [
            ['Basit ve ölçülebilir', 'İki matkaptan ucuz ve sağlamını seçmek', 'Listele, karşılaştır, hesapla'],
            ['Karmaşık, çok değişkenli', 'Dükkan yeri, ortaklık, meslek değişimi', 'Bilgiyi topla, ara ver, sezgiye kulak ver'],
            ['İkisi başa baş', 'Birbirine denk iki teklif', 'Yazı tura at, havadayken dileğini yakala'],
            ['Deneyimsiz alan', 'İlk kez ev almak', 'Sezgiye değil, uzmana ve analize güven'],
          ]},
        ],
      },
      {
        slug: 'vaka',
        title: 'Gerçek Vaka & Fayda',
        blocks: [
          { t: 'callout', kind: 'case', title: 'Vaka: Dijksterhuis\'in araba deneyleri', text: 'Ap Dijksterhuis ve ekibinin Science dergisinde 2006\'da yayımlanan "deliberation without attention" çalışması, teorinin temel belgesidir: deneklerden, çok sayıda özellikle tanımlanmış arabalar arasında seçim yapmaları istendi. Basit kararlarda (az özellik) bilinçli düşünenler iyi seçim yaptı; ama karmaşık kararlarda (çok özellik) dikkati anagramlarla dağıtılan denekler, nesnel olarak en iyi arabayı bilinçli düşünenlerden daha sık seçti. Sonraki yıllarda bazı tekrar çalışmaları etkinin sınırlarını tartışmaya açtı; bu yüzden teori bugün "karmaşık kararlarda kuluçka süresi işe yarayabilir" biçiminde temkinli okunur — ki kitabın önerdiği pratik de tam budur.' },
          { t: 'h2', text: 'Gerçek fayda' },
          { t: 'ul', items: [
            'Aşırı analiz yorgunluğunu keser: karmaşık kararda tablo büyütmek yerine kuluçka süresi tanınır.',
            'Gerçek tercihi açığa çıkarır: yazı tura numarası, rasyonalizasyon katmanının altındaki isteği saniyede gösterir.',
            'Karar sonrası iç huzuru artırır: derin değerlerle uyumlu karar, salt hesapla verilen karardan daha az pişmanlık bırakır.',
          ]},
        ],
      },
    ],
  },
  {
    slug: 'durma-kurali',
    section: 'zaman-onceliklendirme',
    title: 'Durma Kuralı',
    question: 'Bir kararı ne zaman gözden geçirmelisin?',
    summary: 'Önceden konmuş, koşulsuz bir eşikle ne zaman durulacağını baştan belirleyen basit kural.',
    tags: ['basit kurallar', 'risk', 'disiplin'],
    pages: [
      {
        slug: 'kavram',
        title: 'Kavram',
        blocks: [
          { t: 'callout', kind: 'simple', title: 'Bir cümlede', text: 'İşin en heyecanlı yerinde doğru düşünemezsin; bu yüzden "şu olursa dururum" sınırını daha başlamadan, sakin kafayla koy ve sorgusuz uygula.' },
          { t: 'callout', kind: 'ornek', title: 'Şantiyeden örnek', text: 'Usta Ramazan beton dökümüne başlamadan ekibe kuralı söyler: "Hava sıcaklığı beşin altına düşerse döküm durur, tartışma yok." Akşamüstü hava soğur; kalfa "az kaldı, bitirelim" der. Ramazan termometreye bakar: dört derece. Döküm durur. Ertesi gün komşu şantiyenin gece döktüğü beton çatlamıştır. Kural, en çok itiraz edilen anda hayat kurtardı.' },
          { t: 'p', text: 'Kathleen Eisenhardt ve Donald Sull, "Simple Rules" adlı kitaplarında bazı durumlarda basit kuralların karmaşık kurallardan daha etkili olduğunu savunur; çünkü basit kurallar, en zaman alıcı süreçlerden biri olan bilgi işleme süresini kısaltır.' },
          { t: 'p', text: 'Bir örnek: Bir kararı ne zaman gözden geçirmem gerektiğini nasıl bilirim? Kendine bir Durma Kuralı koy. Durma Kuralı, çoğu zaman işkenceye dönüşen durum tartma sürecinin katı ve neredeyse evrensel uygulanabilir alternatifidir. 1935\'te efsanevi yatırımcı Gerald Loeb, bütün yatırımcıların sorduğu ezelî soru için basit ama güçlü bir Durma Kuralı formüle etti: Ne zaman satmalıyım? Loeb\'in kuralı: bir yatırım değerinin yüzde 10\'unu kaybederse sat! Soru sorulmaz.' },
          { t: 'p', text: 'Bu tür Durma Kurallarının güzelliği koşulsuz olmalarıdır. Baş ağrısını önlerler — hatta hayat kurtarabilirler. Dağcılar güvenli dönüşlerini durma kurallarıyla garanti eder: örneğin "saat 14.00\'e kadar zirveye ulaşamazsak geri döneriz." 1996\'da Everest\'te böyle bir kural çiğnendiğinde sekiz kişi öldü.' },
          { t: 'h2', text: 'İki çeşit sınır' },
          { t: 'ul', items: [
            'Pazarlıksız sınır: "14.00\'te zirvede değilsek dönüyoruz." İstisnasız uygulanır.',
            'Esnek sınır: "14.00\'te nabzım hâlâ 150\'nin altındaysa 15.00\'e kadar tırmanmaya devam ederim." Koşula bağlı uzatma içerir.',
          ]},
          { t: 'quote', text: 'Korkaklık ile delilik arasındaki sınırları tanımak bir sanattır. — Reinhold Messner' },
        ],
      },
      {
        slug: 'uygulama',
        title: 'Nasıl Uygulanır',
        blocks: [
          { t: 'steps', items: [
            { title: 'Riskli süreci seç', text: 'Devam/dur kararının duyguyla verildiği alanları bul: yatırım, proje, müzakere, işe alım süreci, hatta tartışma.' },
            { title: 'Eşiği önceden yaz', text: 'Sakin kafayla, sürece girmeden önce eşiği belirle: yüzde kaç kayıp, hangi tarih, kaç deneme? Eşik ölçülebilir ve tartışmasız olmalı.' },
            { title: 'Sınır türünü seç', text: 'Pazarlıksız mı, esnek mi? Esnek sınır kullanacaksan uzatma koşulunu da baştan yaz; anlık pazarlığa alan bırakma.' },
            { title: 'Tetiklenince uygula', text: 'Eşik aşıldığında kural işler: soru sorulmaz. Kuralı sonradan tartışmak, kuralın koruduğu şeyi — seni kendi anlık duygularından — ortadan kaldırır.' },
          ]},
          { t: 'callout', kind: 'warn', title: 'Batık maliyet anında devreye girer', text: 'Durma Kuralı tam da en çok direneceğin anda değerlidir: "bu kadar yatırdık, biraz daha devam edelim" cümlesi, kuralın panzehiri olduğu hastalıktır.' },
          { t: 'table', head: ['Alan', 'Durma kuralı örneği', 'Neyi önler'], rows: [
            ['Yatırım', 'Değerin yüzde 10\'u giderse sat', 'Küçük kaybın batışa dönmesini'],
            ['Dağcılık', 'Saat 14.00\'te zirvede değilsek döneriz', 'Karanlıkta ve fırtınada kalmayı'],
            ['Beton dökümü', 'Sıcaklık 5 derecenin altına inerse dur', 'Çatlak ve zayıf betonu'],
            ['Pazarlık', 'Şu fiyatın altına inersem masadan kalkarım', 'Zararına iş almayı'],
          ]},
        ],
      },
      {
        slug: 'vaka',
        title: 'Gerçek Vaka & Fayda',
        blocks: [
          { t: 'callout', kind: 'case', title: 'Vaka: 1996 Everest felaketi', text: 'Kitabın da andığı, Jon Krakauer\'ın "Into Thin Air" kitabıyla ayrıntılı belgelenen vaka: 10-11 Mayıs 1996\'da Everest\'te ticari seferler yürüten ekiplerin liderleri, güvenli dönüş için saat 14.00 civarında bir dönüş saati ilkesine sahipti. Zirve günü bu durma kuralı çiğnendi — dağcılar öğleden sonra geç saatlere kadar tırmanmaya devam etti. Bastıran fırtınada, aralarında deneyimli rehberler Rob Hall ve Scott Fischer\'ın da bulunduğu sekiz kişi hayatını kaybetti. Facia, koşulsuz durma kuralının neden koşulsuz olması gerektiğinin en acı belgesi olarak dağcılık ve yönetim literatüründe okutulur.' },
          { t: 'h2', text: 'Gerçek fayda' },
          { t: 'ul', items: [
            'Kayıpları sınırlar: eşik, küçük kaybın büyük felakete büyümesini yapısal olarak engeller.',
            'Karar yükünü kaldırır: en stresli anda düşünmek gerekmez; kural, sakin anda verilmiş kararı uygular.',
            'Batık maliyet yanılgısını etkisizleştirir: "bu kadar geldik" duygusu, önceden konmuş koşulsuz sınıra çarpar.',
          ]},
        ],
      },
    ],
  },
  {
    slug: 'alici-karar-modeli',
    section: 'pazarlama-musteri',
    title: 'Alıcı Karar Modeli',
    question: 'Bir araba nasıl satın alınır?',
    summary: 'Büyük bir satın almada araştırmayı sınırlamak, beklentiyi düşürmek ve karar kaygısını yönetmek için dört buçuk pratik ipucu.',
    tags: ['satın alma', 'karar verme', 'beklenti yönetimi'],
    pages: [
      {
        slug: 'kavram',
        title: 'Kavram',
        blocks: [
          { t: 'callout', kind: 'simple', title: 'Bir cümlede', text: 'Büyük bir alışverişte sonsuza kadar araştırma: araştırmaya sınır koy, mükemmeli değil sana yeteni ara, kararın sandığın kadar hayati olmadığını hatırla.' },
          { t: 'callout', kind: 'ornek', title: 'Atölyeden örnek', text: 'Usta Nazım işleri büyüyünce kamyonet alacak. İki hafta ilan sitelerinde kayboldu, kafası iyice karıştı. Sonra kendine kural koydu: üç akşam araştırma, iki galeri, sanayiden iki ustaya danışma — bu kadar. Kriterlerini yazdı: kasa boyu, yakıt, servis kolaylığı; "rengi ve model yılı" maddelerini sildi. Üç kriteri tutan ilk temiz aracı aldı. Bir yıl sonra tek pişmanlığı, iki haftayı ilanlarda harcamış olmak.' },
          { t: 'p', text: 'Diyelim ki bir araba almak istiyorsun ama bir türlü karar veremiyorsun. Kitap dört buçuk yararlı ipucu verir.' },
          { t: 'h2', text: '1. Bir araştırma stratejisi belirle' },
          { t: 'p', text: 'Araştırmanın sorunu şudur: asla yeterince bilemeyiz ama hızla çok fazla bilebiliriz. Bugün biraz internet araştırmasıyla bir araba satıcısı kadar bilgi edinmek mümkün. Ne kadar çok bilirsen o kadar güvende hissedersin; ama sonunda bir devrilme noktasına ulaşırsın — bir noktada çok fazla bilirsin. Teoride ömrünün kalanını araba yorumları okuyarak geçirebilirsin. Yapılacak şey: kendine sınırlar koy — örneğin üç saat Google, üç arkadaşa danış, iki galeri ziyareti.' },
          { t: 'h2', text: '2. Beklentilerini düşür' },
          { t: 'p', text: 'Mükemmel arabayı arama: temel gereksinimlerini karşılayan arabayı ara. Bunu söyleyen, psikoloji profesörü Barry Schwartz\'dır. En iyi seçim olmasa bile bu, seni hiç araba almamaktan ya da sonsuza dek aramaktan daha mutlu eder. Yapılacak şey: araban için en önemli beş kriterini öncelik sırasına koy; son ikisini sil.' },
          { t: 'h2', text: '3. Endişelenme' },
          { t: 'p', text: 'Psikolog Daniel Gilbert\'a göre çoğu karar, verdiğimiz anda sandığımız kadar kalıcı değildir. Yapılacak şey: Suzy Welch\'in 10-10-10 tekniğini kullan — bu kararın 10 gün sonra, 10 ay sonra ve 10 yıl sonra ne gibi sonuçları olacak?' },
          { t: 'h2', text: '4. Bırak başkası karar versin' },
          { t: 'p', text: 'Çoğu insan kararı kendisinin vermesinin daha iyi olduğunu düşünür. Oysa London Business School\'dan Simona Botti bir deneyle şunu kanıtladı: kendi verdiğimiz kararlarda "acaba en iyisini mi seçtim?" kuşkusu bizi kemirir; kararı başkası verdiğinde bu kuşku kaybolur. Yapılacak şey: birbirine yakın iki araba arasında kaldıysan bırak satıcı senin yerine seçsin. Ya da Cizvit tarikatının kurucularından Loyolalı Ignatius\'un yöntemini izle: üç gün birinci seçeneğe karar vermiş gibi yaşa, sonra üç gün ikinci seçeneğe karar vermiş gibi — ve ancak ondan sonra kararını ver.' },
        ],
      },
      {
        slug: 'uygulama',
        title: 'Nasıl Uygulanır',
        blocks: [
          { t: 'steps', items: [
            { title: 'Araştırma bütçesi koy', text: 'Zamanı, kaynağı ve görüşme sayısını baştan sınırla (ör. üç saat araştırma, üç kişiye danışma, iki yerinde inceleme). Bütçe dolunca araştırma biter.' },
            { title: 'Kriter listeni buda', text: 'En önemli beş kriterini öncelik sırasına yaz ve son ikisini sil. Kalan üç kriteri karşılayan ilk aday "yeterince iyi"dir.' },
            { title: '10-10-10 uygula', text: 'Karar kaygısı yükseldiğinde sor: bu seçimin 10 gün, 10 ay, 10 yıl sonra sonucu ne olur? Çoğu fark, 10 yıl ölçeğinde buharlaşır.' },
            { title: 'Eşitlikte devret ya da prova et', text: 'İki aday gerçekten başa başsa kararı güvendiğin birine bırak — ya da Ignatius yöntemiyle her seçeneği üçer gün "yaşayarak" dene, sonra seç.' },
          ]},
          { t: 'callout', kind: 'tip', title: 'Model arabayla sınırlı değil', text: 'Aynı dört buçuk ipucu her büyük satın almada ve seçimde çalışır: ev, iş teklifi, okul, yazılım. Ortak düşman aynıdır: sonsuz araştırma ve mükemmellik beklentisi.' },
          { t: 'callout', kind: 'warn', title: 'Devir, sorumluluk kaçışı değildir', text: '"Bırak başkası seçsin" ipucu yalnızca gerçekten eşdeğer seçenekler için geçerlidir. Kriter listen henüz yokken kararı devretmek, kararsızlığı değil sorumluluğu devretmektir.' },
          { t: 'table', head: ['İpucu', 'Ne yapılır', 'Nazım\'ın kamyoneti için'], rows: [
            ['Araştırmayı sınırla', 'Zaman ve kaynak bütçesi koy', 'Üç akşam ilan, iki galeri, iki ustaya danışma'],
            ['Beklentiyi düşür', 'Beş kriter yaz, son ikisini sil', 'Kasa boyu, yakıt, servis kaldı; renk ve yıl silindi'],
            ['Endişelenme', '10 gün / 10 ay / 10 yıl diye sor', '10 yıl sonra hangi marka olduğu fark etmeyecek'],
            ['Gerekirse devret', 'Başa baş iki seçenekte kararı bırak', 'İki denk araçta güvendiği ustaya sordu'],
          ]},
        ],
      },
      {
        slug: 'vaka',
        title: 'Gerçek Vaka & Fayda',
        blocks: [
          { t: 'callout', kind: 'case', title: 'Vaka: Botti\'nin deneyleri ve Welch\'in 10-10-10\'u', text: 'Modelin dayandığı iki kaynak belgelidir. London Business School\'da pazarlama profesörü olan Simona Botti\'nin yayımlanmış deney serileri, seçimi kendisi yapan kişilerin — özellikle seçenekler çekici olmadığında ya da birbirine çok yakınken — kararı devredenlere göre daha fazla kuşku ve daha düşük memnuniyet yaşayabildiğini gösterdi. Suzy Welch ise 10-10-10 tekniğini önce köşe yazılarında, sonra 2009\'da yayımlanan "10-10-10" kitabında sistemleştirdi; teknik, yöneticilerin ve okurların karar kaygısını zaman perspektifiyle kırmak için yaygın biçimde kullanılıyor. Barry Schwartz\'ın "tatmin eden seçici" (satisficer) araştırmaları da mükemmeliyetçi arayışın memnuniyeti düşürdüğünü tutarlı biçimde belgeledi.' },
          { t: 'h2', text: 'Gerçek fayda' },
          { t: 'ul', items: [
            'Araştırma tükenmişliğini önler: bilgi bütçesi, sonsuz karşılaştırma sarmalını baştan kapatır.',
            'Satın alma memnuniyetini artırır: "yeterince iyi" hedefi, mükemmel arayışının garantili hayal kırıklığından korur.',
            'Kararın gerçek ağırlığını gösterir: 10-10-10 perspektifi, çoğu seçimin sanıldığından küçük ve düzeltilebilir olduğunu ortaya koyar.',
          ]},
        ],
      },
    ],
  },
]
