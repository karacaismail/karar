import type { DecisionModel } from '../types'

export const section6bModels: DecisionModel[] = [
  {
    slug: 'porter-jenerik-stratejiler',
    section: 'strateji-rekabet',
    title: 'Porter\'ın Jenerik Stratejileri',
    question: 'Rekabette hangi silahla savaşacağım: ucuzluk mu, farklılık mı?',
    summary: 'Michael Porter\'a göre kalıcı rekabet üstünlüğünün üç ana yolu: maliyet liderliği, farklılaşma ve odaklanma; ortada kalan kaybeder.',
    tags: ['rekabet', 'strateji', 'konumlanma'],
    pages: [
      {
        slug: 'kavram',
        title: 'Kavram',
        blocks: [
          { t: 'callout', kind: 'simple', title: 'Bir cümlede', text: 'Rekabette kazanmanın üç yolu vardır: ya herkesten ucuza üret, ya kimsede olmayan bir şey sun, ya da küçük bir müşteri grubuna herkesten iyi hizmet et; üçünü aynı anda yapmaya çalışan ortada sıkışır ve kaybeder.' },
          { t: 'callout', kind: 'ornek', title: 'Pazardan örnek', text: 'Aynı semt pazarında üç domates satıcısı var. Ali toptancıdan kamyonla en ucuza alıyor, en düşük fiyata satıyor; herkes bilir, ucuz domates Ali\'de. Veli sadece köyünden gelen kokulu, dalından koparılmış domates satıyor; iki katı fiyata ama kuyruk onun tezgahında. Selim ise sadece lokantacılara çalışıyor: sabah beşte kasayla teslim, veresiye defteri açık; lokantacı başka tezgaha bakmıyor bile. Üçü de para kazanıyor. Bir de Hasan var: ne en ucuz, ne en iyi, ne de kimsenin özel adamı. Tezgahı hep sakin, kârı hep ince. İşte "ortada sıkışmak" budur.' },
          { t: 'p', text: 'Michael Porter 1980\'de yayımlanan Rekabet Stratejisi kitabında şunu söyledi: bir işletme rakiplerinden kalıcı olarak daha çok kazanacaksa, bunun bilinçli bir sebebi olmalıdır. Bu sebep üç ana biçimden birini alır ve her biri farklı bir kas ister.' },
          { t: 'h2', text: 'Üç strateji' },
          { t: 'table', head: ['Strateji', 'Ana fikir', 'Gereken kas', 'Örnek soru'], rows: [
            ['Maliyet liderliği', 'Aynı işi herkesten ucuza yapmak', 'Verimlilik, ölçek, israfsız süreç', 'Bir kuruş daha nereden kısarım?'],
            ['Farklılaşma', 'Müşterinin fazladan para ödediği bir fark sunmak', 'Kalite, tasarım, marka, hizmet', 'Müşteri neden bana iki katını ödesin?'],
            ['Odaklanma', 'Dar bir gruba, o grubun diliyle hizmet etmek', 'Müşteriyi derinden tanımak', 'Kimin özel tedarikçisi olacağım?'],
          ]},
          { t: 'p', text: 'Odaklanma stratejisi kendi içinde ikiye ayrılır: dar grupta maliyet odaklı olmak ya da dar grupta farklılaşmak. Küçük işletmelerin doğal silahı çoğu zaman odaklanmadır, çünkü büyüklerle ne ucuzlukta ne reklamda yarışabilirler; ama dar bir grubu herkesten iyi tanıyabilirler.' },
          { t: 'callout', kind: 'warn', title: 'Ortada sıkışma uyarısı', text: 'Porter\'ın en ünlü uyarısı: hem ucuz hem kaliteli hem herkese hitap etmeye çalışan işletme "stuck in the middle", yani ortada sıkışmış olur. Ucuz arayan daha ucuzunu, kalite arayan daha iyisini bulur; sana kimse gelmek zorunda kalmaz. Strateji seçmek, bir şeylerden vazgeçmeyi göze almaktır.' },
        ],
      },
      {
        slug: 'uygulama',
        title: 'Nasıl Uygulanır',
        blocks: [
          { t: 'steps', items: [
            { title: 'Dürüst bir ayna tut', text: 'Bugün müşteri sana neden geliyor? En ucuz olduğun için mi, farklı olduğun için mi, yoksa sadece yakın olduğun için mi? "Yakınlık" bir strateji değildir; yeni bir rakip açılınca biter.' },
            { title: 'Kasını ölç, stratejini seç', text: 'Maliyet liderliği ölçek ve disiplin ister; farklılaşma ustalık ve marka ister; odaklanma müşteri bilgisi ister. Hangi kasın gerçekten güçlü? Stratejiyi hayaline göre değil, kasına göre seç.' },
            { title: 'Vazgeçeceklerini yaz', text: 'Seçtiğin stratejinin bedelini açıkça yaz: farklılaşma seçtiysen fiyat kırmayı bırakacaksın; maliyet seçtiysen her müşteri kaprisine evet demeyeceksin. Vazgeçme listesi yoksa strateji de yoktur.' },
            { title: 'Her kararı stratejiyle test et', text: 'Yeni ürün, yeni makine, yeni personel: her kararda tek soru sor: bu harcama beni seçtiğim stratejide güçlendiriyor mu? Cevap hayırsa, ne kadar cazip olursa olsun vazgeç.' },
          ]},
          { t: 'callout', kind: 'tip', title: 'İpucu', text: 'Stratejini bir cümleyle çalışanına anlatabilmelisin: "Biz bu mahallenin en ucuzuyuz" ya da "Biz düğün pastasında bu şehrin en iyisiyiz." Çalışan bu cümleyi bilmiyorsa, kasada verdiği kararlar stratejini her gün deler.' },
          { t: 'callout', kind: 'warn', title: 'Dikkat', text: 'Maliyet liderliği "ucuza satmak" demek değildir; "ucuza üretmek" demektir. Maliyetin rakibinle aynıyken fiyat kırarsan strateji değil, kan kaybı yaşarsın.' },
        ],
      },
      {
        slug: 'vaka',
        title: 'Gerçek Vaka & Fayda',
        blocks: [
          { t: 'callout', kind: 'case', title: 'Vaka: IKEA ve Ryanair ucuzlukta, Apple farklılıkta', text: 'Maliyet liderliğinin ders kitabı örnekleri IKEA ve Ryanair\'dir. IKEA mobilyayı düz paketleyip taşımayı ve montajı müşteriye devrederek, mağazasını şehir dışına kurarak maliyeti sistemli biçimde düşürdü; ucuzluğu indirimle değil, tasarımla üretti. Ryanair ikincil havaalanlarına uçarak, tek tip uçak kullanarak ve ücretsiz ikramı kaldırarak Avrupa\'nın en düşük maliyetli havayolu oldu. Karşı kutupta Apple, farklılaşmanın örneğidir: telefonu rakiplerinden belirgin biçimde pahalıya satar ama tasarım, kullanım kolaylığı ve marka deneyimiyle müşterisi bu farkı gönüllü öder; sektör kârının büyük bölümünü küçük pazar payıyla toplaması yıllarca belgelenmiştir. Üç şirketin ortak yanı, stratejisinin belli olmasıdır: kimse IKEA\'dan el yapımı ustalık, Apple\'dan ucuzluk beklemez.' },
          { t: 'h2', text: 'Gerçek fayda' },
          { t: 'ul', items: [
            '"Her müşteriye her şeyi satayım" dağınıklığını bitirir: tek bir kazanma sebebine odaklanan işletme, parasını ve enerjisini tek hedefe yığar.',
            'Fiyat savaşından korur: farkını bilen esnaf, rakip fiyat kırınca panikle peşinden gitmez.',
            'Yatırım kararlarını kolaylaştırır: strateji belliyse hangi makineye, hangi ustaya, hangi reklama para verileceği kendiliğinden netleşir.',
          ]},
        ],
      },
    ],
  },
  {
    slug: 'mckinsey-7s',
    section: 'strateji-rekabet',
    title: 'McKinsey 7S Modeli',
    question: 'Planım güzel ama şirketim neden onu uygulayamıyor?',
    summary: 'Bir organizasyonun yedi iç ögesinin (strateji, yapı, sistemler, paylaşılan değerler, beceriler, kadro, stil) birbiriyle uyumlu olup olmadığını kontrol eden model.',
    tags: ['organizasyon', 'uyum', 'değişim yönetimi'],
    pages: [
      {
        slug: 'kavram',
        title: 'Kavram',
        blocks: [
          { t: 'callout', kind: 'simple', title: 'Bir cümlede', text: 'Bir işletme yedi telli bir saz gibidir: strateji, yapı, sistemler, değerler, beceriler, kadro ve yönetim tarzı; tek bir tel akortsuzsa bütün ezgi bozulur, bu yüzden yeni bir plan yaparken yedi teli birden akort etmen gerekir.' },
          { t: 'callout', kind: 'ornek', title: 'Esnaftan örnek', text: 'Lokantacı Cemal paket servise girmeye karar veriyor: strateji hazır. Ama mutfakta paket bölümü yok (yapı), sipariş telefonla deftere yazılıyor (sistem), ustalar "bizim işimiz salon müşterisi" diyor (değerler), kimse motorsiklet kullanmıyor (beceri), eleman zaten eksik (kadro) ve Cemal her kararı kendisi verdiği için telefona da kendisi bakıyor (stil). Plan kâğıt üstünde parlak, ama yedi telin altısı akortsuz. İlk ay siparişler karışıyor, müşteri küsüyor. Sorun stratejide değil, uyumda.' },
          { t: 'p', text: 'Model, 1970\'lerin sonunda McKinsey danışmanları Tom Peters ve Robert Waterman ile Richard Pascale ve Anthony Athos\'un çalışmalarından doğdu. Ana fikri şudur: organizasyonlar sadece plan ve şemadan ibaret değildir; yazılı olmayan ögeler (değerler, tarz, beceriler) en az yazılı olanlar kadar belirleyicidir ve değişim ancak yedi öge birlikte hizalanınca tutar.' },
          { t: 'h2', text: 'Yedi öge' },
          { t: 'table', head: ['Öge', 'Anlamı', 'Kontrol sorusu'], rows: [
            ['Strateji (Strategy)', 'Nasıl kazanacağımızın planı', 'Nereye, hangi yolla gidiyoruz?'],
            ['Yapı (Structure)', 'Kim kime bağlı, işler nasıl bölünmüş', 'Örgüt şeması stratejiyi taşıyor mu?'],
            ['Sistemler (Systems)', 'Günlük işleyiş: sipariş, kasa, izin, ödeme', 'Süreçler planı destekliyor mu, köstekliyor mu?'],
            ['Paylaşılan değerler (Shared values)', 'Herkesin inandığı ortak doğrular', 'Bu iş yerinde asıl neye önem verilir?'],
            ['Beceriler (Skills)', 'Şirketin gerçekten iyi yaptığı şeyler', 'Yeni plan için gereken beceri bizde var mı?'],
            ['Kadro (Staff)', 'İnsanlar: sayısı, seçimi, gelişimi', 'Doğru sayıda doğru insan var mı?'],
            ['Stil (Style)', 'Yöneticilerin davranış biçimi', 'Patronun günlük tavrı planla uyumlu mu?'],
          ]},
          { t: 'p', text: 'İlk üçü (strateji, yapı, sistemler) "sert" ögelerdir: yazılır, çizilir, kolay değiştirilir. Son dördü "yumuşak" ögelerdir: görünmez ama daha kalıcıdır. Modelin şemasında paylaşılan değerler ortada durur, çünkü diğer altısını birbirine bağlayan tutkaldır.' },
        ],
      },
      {
        slug: 'uygulama',
        title: 'Nasıl Uygulanır',
        blocks: [
          { t: 'steps', items: [
            { title: 'Yedi ögenin bugünkü halini yaz', text: 'Her öge için birer dürüst cümle: "Sistemimiz defter, stilimiz her şey patrondan sorulur." Süslemeden, olduğu gibi.' },
            { title: 'Hedef durumu yaz', text: 'Yeni strateji için her ögenin nasıl olması gerektiğini yaz. İki liste yan yana gelince uyumsuzluk kendini gösterir.' },
            { title: 'En akortsuz iki teli seç', text: 'Yedi ögeyi aynı anda değiştiremezsin. Planı en çok baltalayan iki uyumsuzluğu seç ve önce onları düzelt.' },
            { title: 'Yumuşak ögeleri unutma', text: 'Şema çizmek kolay, alışkanlık değiştirmek zordur. Değerler ve stil değişmiyorsa, yeni yapı kâğıtta kalır: buna zaman ve tekrar ayır.' },
          ]},
          { t: 'callout', kind: 'tip', title: 'İpucu', text: 'Modeli sadece büyük değişimde değil, işe alımda da kullan: yeni usta becerisiyle uyar ama değerlerle uymazsa, altı ay sonra maliyeti becerisinden büyük olur.' },
          { t: 'callout', kind: 'warn', title: 'Dikkat', text: 'En sık yapılan hata, yedi ögeden sadece sert üçünü düzeltip bitti sanmaktır. Yapıyı değiştirip stilini değiştirmeyen patron, eski şirketi yeni şemayla yönetmeye devam eder.' },
        ],
      },
      {
        slug: 'vaka',
        title: 'Gerçek Vaka & Fayda',
        blocks: [
          { t: 'callout', kind: 'case', title: 'Vaka: Mükemmeli Arayış araştırması', text: 'Model, McKinsey danışmanları Tom Peters ve Robert Waterman\'ın Amerika\'nın en başarılı şirketlerini incelediği ve 1982\'de yayımlanan Mükemmeli Arayış (In Search of Excellence) kitabıyla ünlendi. Araştırmanın çıkış noktası bir gözlemdi: 1970\'lerde Amerikan şirketleri strateji ve yapıya odaklanırken, Japon şirketleri değerler, insan ve tarz gibi yumuşak ögelerde güçlüydü ve pazarları birer birer alıyordu. Peters ve Waterman, incelenen başarılı şirketlerin ortak özelliğinin parlak bir plan değil, yedi ögenin uyumu olduğunu belgeledi: müşteriye yakınlık, insana değer, sade yapı gibi yumuşak nitelikler kalıcı başarının asıl taşıyıcısıydı. Kitap yönetim tarihinin en çok satan eserlerinden biri oldu ve "yumuşak olan serttir" cümlesini yönetim diline soktu.' },
          { t: 'h2', text: 'Gerçek fayda' },
          { t: 'ul', items: [
            '"Planım neden tutmadı?" sorusuna sistemli cevap verir: çoğu zaman plan değil, planla uyumsuz kalan altı öge suçludur.',
            'Görünmeyeni görünür kılar: değerler ve yönetim tarzı gibi konuşulmayan konuları masaya getirir.',
            'Değişimi parça parça değil bütün olarak planlatır: yeni makine alırken ustanın eğitimini ve iş akışını da hesaba kattırır.',
          ]},
        ],
      },
    ],
  },
  {
    slug: 'temel-yetkinlik',
    section: 'strateji-rekabet',
    title: 'Temel Yetkinlik',
    question: 'Bizim asıl iyi olduğumuz şey ne ve onu nereye taşıyabiliriz?',
    summary: 'Prahalad ve Hamel\'in modeli: kalıcı üstünlük ürünlerden değil, ürünlerin altındaki taklit edilmesi zor ortak beceriden gelir.',
    tags: ['yetkinlik', 'strateji', 'büyüme'],
    pages: [
      {
        slug: 'kavram',
        title: 'Kavram',
        blocks: [
          { t: 'callout', kind: 'simple', title: 'Bir cümlede', text: 'Şirketin asıl serveti sattığı ürünler değil, o ürünlerin hepsinin altında yatan ve rakiplerin kolay kolay taklit edemediği ortak beceridir; o beceriyi bulan, onu yeni ürünlere ve yeni pazarlara taşıyabilir.' },
          { t: 'callout', kind: 'ornek', title: 'Esnaftan örnek', text: 'Pastacı Nazan\'ın vitrini kalabalık: pasta, börek, kurabiye, poğaça. Bir gün oturup düşünüyor: "Benim asıl iyi olduğum şey ne?" Cevap ürün değil, beceri: hamuru dinlendirmeyi ve fırın ısısını herkesten iyi biliyor; mahallede "Nazan\'ın hamur işi başka" deniyor. Bu beceri taklit edilmesi zor, müşterinin fark ettiği ve birçok ürüne taşınabilen bir şey. Nazan bunu anlayınca kararları kolaylaşıyor: hamur işini büyütüyor, hazır alıp sattığı çikolatayı bırakıyor, bir lokantaya günlük börek vermeye başlıyor. Ağaç büyüyor, çünkü kök belli.' },
          { t: 'p', text: 'C.K. Prahalad ve Gary Hamel 1990\'da Harvard Business Review\'da yayımlanan ünlü makalelerinde şirketi bir ağaca benzetti: meyveler ürünlerdir, gövde ana ürün gruplarıdır, ama ağacı besleyen kökler temel yetkinliklerdir. Rakip meyveyi görür ve taklit etmeye çalışır; kökü göremez. Bu yüzden sadece ürüne bakarak rakibi anlamak, ağacı meyvesinden tanımaya benzer.' },
          { t: 'h2', text: 'Bir beceri ne zaman temel yetkinliktir?' },
          { t: 'table', head: ['Ölçüt', 'Soru', 'Nazan örneği'], rows: [
            ['Müşteriye değer katar', 'Müşteri bu beceri sayesinde bir fark hissediyor mu?', '"Hamur işi başka" diyorlar: evet'],
            ['Taklit edilmesi zordur', 'Rakip parayla ya da kopyayla hemen edinebilir mi?', 'Yıllarla gelen el ustalığı: zor'],
            ['Birçok pazara açılır', 'Bu beceri birden çok ürüne veya müşteriye taşınır mı?', 'Börek, pasta, lokanta tedariki: evet'],
          ]},
          { t: 'p', text: 'Üç ölçütün üçünü de geçemeyen beceri önemli olabilir ama temel değildir. Örneğin "güler yüzlü olmak" değerlidir ama kolay taklit edilir; "ucuz kira" avantajdır ama kontrat bitince biter. Temel yetkinlik, yıllarla biriken ve kolay sökülemeyen bilgi ve ustalıktır.' },
        ],
      },
      {
        slug: 'uygulama',
        title: 'Nasıl Uygulanır',
        blocks: [
          { t: 'steps', items: [
            { title: 'Aday becerileri listele', text: 'Müşterilerin seni överken hangi cümleleri kurduğunu topla: "sizin şu işiniz başka" cümleleri aday listendir. Ürün adı değil, beceri adı yaz.' },
            { title: 'Üç ölçütten geçir', text: 'Her adaya sor: müşteri fark ediyor mu, taklit zor mu, başka ürünlere taşınır mı? Üçünü geçen bir ya da iki beceri kalır: temel yetkinliğin budur.' },
            { title: 'Yetkinliği besle', text: 'Zamanını ve paranı önce bu beceriye yatır: bu beceriyi taşıyan ustayı kaybetme, bu becerinin eğitimini ve aletini esirgeme.' },
            { title: 'Yeni pazar ara', text: 'Sor: bu becerimle bugün hizmet etmediğim kime hizmet edebilirim? Büyümenin en sağlam yolu, sıfırdan yeni beceri kurmak değil, mevcut kökten yeni dal vermektir.' },
          ]},
          { t: 'callout', kind: 'tip', title: 'İpucu', text: 'Ters testi de yap: temel yetkinliğinle ilgisi olmayan işleri listele. Bunlar dışarıdan alınabilir ya da bırakılabilir; enerjini köke döndürürler.' },
          { t: 'callout', kind: 'warn', title: 'Dikkat', text: '"Biz her işte iyiyiz" cevabı, hiçbir işte temel yetkinlik olmadığının işaretidir. Temel yetkinlik seçicidir: bir işletmenin genelde bir, en fazla iki üç tane olur.' },
        ],
      },
      {
        slug: 'vaka',
        title: 'Gerçek Vaka & Fayda',
        blocks: [
          { t: 'callout', kind: 'case', title: 'Vaka: Honda\'nın motor ustalığı', text: 'Prahalad ve Hamel\'in 1990 tarihli makalesindeki merkez örnek Honda\'dır. Dışarıdan bakınca Honda bir motosiklet ve otomobil şirketidir; ama kök tektir: küçük, verimli, güvenilir motor üretme yetkinliği. Honda bu tek kökten şaşırtıcı sayıda meyve verdi: motosiklet, otomobil, jeneratör, çim biçme makinesi, deniz motoru. Rakipleri tek tek ürünlerde onunla yarışırken, Honda her yeni pazara aynı motor ustalığıyla girdiği için hızlı ve güçlü ilerledi. Makale aynı dönemde NEC ve Canon gibi Japon şirketlerinin de benzer biçimde az sayıda yetkinliği birçok ürüne taşıyarak, kaynakları kendilerinden kat kat büyük Amerikan rakiplerini geçtiğini belgeledi. Ders açıktır: ürün portföyü değil, yetkinlik portföyü yönetin.' },
          { t: 'h2', text: 'Gerçek fayda' },
          { t: 'ul', items: [
            'Büyüme kararını sağlamlaştırır: yeni işe girerken "bu iş benim kökümden mi besleniyor?" sorusu, hevesle girilen yabancı işlerin batırma riskini azaltır.',
            'Kaynak dağıtımını netleştirir: para ve zamanın önce köke, sonra dallara gideceğini söyler.',
            'Taklide karşı korur: fiyat ve ürün kopyalanır ama yıllarla biriken beceri kolay kopyalanmaz; işletme savunmasını en sağlam duvarın arkasına kurar.',
          ]},
        ],
      },
    ],
  },
  {
    slug: 'ansoff-matrisi',
    section: 'strateji-rekabet',
    title: 'Ansoff Matrisi',
    question: 'Büyümek istiyorum ama hangi yoldan: yeni ürün mü, yeni pazar mı?',
    summary: 'Igor Ansoff\'un büyüme matrisi: mevcut/yeni ürün ile mevcut/yeni pazarı çaprazlayarak dört büyüme yolunu ve risklerini gösterir.',
    tags: ['büyüme', 'pazar', 'risk'],
    pages: [
      {
        slug: 'kavram',
        title: 'Kavram',
        blocks: [
          { t: 'callout', kind: 'simple', title: 'Bir cümlede', text: 'Büyümenin dört yolu vardır: aynı ürünü aynı müşteriye daha çok sat, aynı ürünü yeni müşteriye götür, aynı müşteriye yeni ürün sun ya da hem yeni ürün hem yeni müşteriye açıl; sıralama aynı zamanda risk sıralamasıdır.' },
          { t: 'callout', kind: 'ornek', title: 'Esnaftan örnek', text: 'Simitçi Ferhat büyümek istiyor ve dört yolu var. Birinci yol: aynı sokakta daha çok simit satmak; sabah mesaisine öğleden sonrayı eklemek (en az riskli, ürünü de müşteriyi de tanıyor). İkinci yol: aynı simidi sanayi sitesine de götürmek (ürün aynı, müşteri yeni). Üçüncü yol: sokağındaki müşteriye simidin yanında poğaça ve ayran sunmak (müşteri aynı, ürün yeni). Dördüncü yol: şehrin öbür ucunda tatlıcı dükkanı açmak (ürün de müşteri de yeni: en riskli yol, çünkü bildiği hiçbir şey yanında değil). Ferhat dördüncüden başlamayı düşünüyordu; matris ona önce birinci ve ikinci yolda ne kadar yer olduğunu sordurttu.' },
          { t: 'p', text: 'Rus asıllı Amerikalı yönetim düşünürü Igor Ansoff bu matrisi 1957\'de Harvard Business Review\'daki "Çeşitlendirme Stratejileri" makalesinde önerdi. Matris gerçek bir 2x2\'dir: bir ekseni ürün (mevcut/yeni), diğer ekseni pazar (mevcut/yeni) böler ve dört hücre dört büyüme stratejisi verir.' },
          { t: 'h2', text: 'Dört hücre' },
          { t: 'table', head: ['Strateji', 'Ürün', 'Pazar', 'Risk', 'Ferhat örneği'], rows: [
            ['Pazara nüfuz etme', 'Mevcut', 'Mevcut', 'En düşük', 'Aynı sokakta daha çok simit satmak'],
            ['Pazar geliştirme', 'Mevcut', 'Yeni', 'Orta', 'Simidi sanayi sitesine götürmek'],
            ['Ürün geliştirme', 'Yeni', 'Mevcut', 'Orta', 'Müşterisine poğaça ve ayran eklemek'],
            ['Çeşitlendirme', 'Yeni', 'Yeni', 'En yüksek', 'Başka semtte tatlıcı açmak'],
          ]},
          { t: 'p', text: 'Matrisin ana dersi risk merdiveni olmasıdır: bildiğin ürün ve bildiğin müşteriden her uzaklaşma, bilinmeyeni ve riski artırır. Çeşitlendirme yasak değildir; ama iki bilinmeyenle aynı anda savaşmayı gerektirdiği için en son ve en hazırlıklı çıkılacak basamaktır.' },
        ],
      },
      {
        slug: 'uygulama',
        title: 'Nasıl Uygulanır',
        blocks: [
          { t: 'steps', items: [
            { title: 'Önce birinci hücreyi tüket', text: 'Yeni maceradan önce sor: mevcut müşteriye mevcut ürünü daha çok satmanın yolu kaldı mı? Çalışma saatini, tanıtımı, sadakati gözden geçir. En ucuz büyüme genelde buradadır.' },
            { title: 'İkinci adımı tek bilinmeyenle at', text: 'Büyüme gerekiyorsa ya yeni pazar ya yeni ürün seç: ikisini birden değil. Tek bilinmeyenli denklem çözülür; iki bilinmeyenli denklem kumar olur.' },
            { title: 'Küçük dene, sonra büyüt', text: 'Yeni hücreye küçük bir deneyle gir: sanayi sitesine önce bir hafta git, poğaçayı önce elli tane yap. Deney tutarsa yatırımı büyüt.' },
            { title: 'Çeşitlendirmeye gerekçe iste', text: 'Dördüncü hücreye ancak güçlü bir sebeple çık: mevcut pazarın gerçekten doymuş olması ya da taşınabilir güçlü bir yetkinliğin olması gibi. "Canım istedi" bir gerekçe değildir.' },
          ]},
          { t: 'callout', kind: 'tip', title: 'İpucu', text: 'Matrisi yılda bir doldur ve her hücreye bir fikir yaz. Dört hücresi de boş olan işletme büyümüyordur; sadece dördüncü hücresi dolu olan işletme ise büyümüyor, kumar oynuyordur.' },
          { t: 'callout', kind: 'warn', title: 'Dikkat', text: 'Yeni pazar sadece yeni semt demek değildir: yeni müşteri tipi (öğrenci yerine işyeri), yeni kanal (tezgah yerine telefonla sipariş) da pazar geliştirmedir. Hücreyi dar düşünme.' },
        ],
      },
      {
        slug: 'vaka',
        title: 'Gerçek Vaka & Fayda',
        blocks: [
          { t: 'callout', kind: 'case', title: 'Vaka: Dört hücrenin bilinen örnekleri', text: 'Matrisin dört hücresi de belgelenmiş büyük örneklerle doludur. Pazara nüfuz etme: Coca-Cola on yıllardır aynı içeceği aynı pazarlara daha fazla satmak için dağıtım ve reklama yatırım yapar; büyümesinin ana gövdesi hep bu hücre olmuştur. Pazar geliştirme: McDonald\'s aynı restoran modelini ülke ülke taşıyarak büyüdü; ürün büyük ölçüde aynı, pazar her seferinde yeniydi. Ürün geliştirme: Apple, iPhone kullanıcılarına AirPods ve Watch gibi yeni ürünler sunarak mevcut müşterisinden yeni gelir üretti. Çeşitlendirme: Virgin Group plaktan havayoluna, oradan finansal hizmetlere atladı; kimi denemesi tuttu, kimi (Virgin Cola gibi) başarısız oldu; bu da dördüncü hücrenin hem büyük fırsatını hem yüksek riskini aynı şirkette gösterir.' },
          { t: 'h2', text: 'Gerçek fayda' },
          { t: 'ul', items: [
            'Büyüme hevesini disipline eder: dört yolu risk sırasına dizer ve en ucuz büyümenin çoğu zaman burnunun dibinde olduğunu hatırlatır.',
            'Kumarla yatırımı ayırır: iki bilinmeyenli hamleyi görünür kılar ve ondan önce tek bilinmeyenli seçenekleri sordurur.',
            'Aile ve ortak tartışmalarını sadeleştirir: "büyüyelim mi?" kavgası yerine "hangi hücreden büyüyelim?" konuşması yapılır.',
          ]},
        ],
      },
    ],
  },
  {
    slug: 'pazarlama-4p',
    section: 'pazarlama-musteri',
    title: 'Pazarlamanın 4P\'si',
    question: 'Ürünüm iyi ama satılmıyor; neyi gözden kaçırıyorum?',
    summary: 'Pazarlamanın dört ayağı: ürün, fiyat, dağıtım ve tutundurma. Dördü birden doğruysa satış olur; biri aksarsa üçü de boşa gider.',
    tags: ['pazarlama', 'satış', 'müşteri'],
    pages: [
      {
        slug: 'kavram',
        title: 'Kavram',
        blocks: [
          { t: 'callout', kind: 'simple', title: 'Bir cümlede', text: 'Satış dört sorunun aynı anda doğru cevaplanmasıdır: doğru ürün mü, doğru fiyat mı, müşterinin ulaşabileceği yerde mi ve müşteri ondan haberdar mı; dördünden biri yanlışsa en iyi ürün bile rafta bekler.' },
          { t: 'callout', kind: 'ornek', title: 'Esnaftan örnek', text: 'Bakkal Musa\'nın komşusu köyden enfes bir bal getiriyor ve "sat bunu" diyor. Musa dört soruyu soruyor. Ürün: bal iyi ama kavanoz etiketsiz, kimin yaptığı belli değil; etiket ve küçük boy kavanoz lazım. Fiyat: mahalle emekli mahallesi, market balının üç katı fiyat burada yürümez; küçük kavanozla erişilebilir fiyat kurulmalı. Dağıtım: bal en üst rafta duruyor, kimse görmüyor; kasanın yanına inmeli. Tutundurma: kimsenin haberi yok; tadımlık tabak ve cama bir yazı gerek. Dört düzeltmeden sonra bal satmaya başlıyor. Bal hep aynı baldı; değişen, dört P\'nin hizalanmasıydı.' },
          { t: 'p', text: '4P\'yi 1960\'ta pazarlama profesörü E. Jerome McCarthy önerdi; Philip Kotler\'in ders kitaplarıyla dünyaya yayıldı. Modelin gücü sadeliğindedir: pazarlamayı reklamdan ibaret sanma yanılgısını kırar ve satışın dört ayaklı bir masa olduğunu gösterir.' },
          { t: 'h2', text: 'Dört P bakkal örneğiyle' },
          { t: 'table', head: ['P', 'Anlamı', 'Ana soru', 'Musa\'nın balı'], rows: [
            ['Ürün (Product)', 'Ne satıyorsun, hangi ihtiyaca?', 'Müşterinin derdine deva mı?', 'Etiketli, küçük kavanoz köy balı'],
            ['Fiyat (Price)', 'Karşılığında ne istiyorsun?', 'Müşterinin gözünde değerine denk mi?', 'Emekli bütçesine uygun küçük boy'],
            ['Dağıtım (Place)', 'Müşteri ona nereden ulaşıyor?', 'Doğru yerde, görünür ve ulaşılabilir mi?', 'Üst raf değil, kasa yanı'],
            ['Tutundurma (Promotion)', 'Varlığını nasıl duyuruyorsun?', 'Müşteri haberdar mı, ikna oluyor mu?', 'Tadımlık ve camda yazı'],
          ]},
          { t: 'p', text: 'Dört P birbirine bağlıdır: lüks bir ürünü ucuza satmak müşteriyi şüphelendirir; ucuz bir ürünü pahalı vitrinde satmak müşteriyi kaçırır. Tutarlılık, tek tek doğruluktan daha önemlidir.' },
        ],
      },
      {
        slug: 'uygulama',
        title: 'Nasıl Uygulanır',
        blocks: [
          { t: 'steps', items: [
            { title: 'Satmayan ürünü dört soruya vur', text: 'Bir ürün satmıyorsa sırayla sor: ürün mü yanlış, fiyat mı, yer mi, duyuru mu? Genelde suçlu sanılan (fiyat) ile gerçek suçlu (görünürlük) farklı çıkar.' },
            { title: 'Müşterinin gözüyle yaz', text: 'Dört P\'yi kendi gözünden değil, hedef müşterinin gözünden doldur: onun derdi ne, ona ne pahalı, o nereden alışveriş eder, o neye inanır?' },
            { title: 'Tek P\'yi değiştir, ölç', text: 'Dördünü aynı anda değiştirme; neyin işe yaradığını anlayamazsın. Önce en şüpheli P\'yi değiştir, bir iki hafta satışı say, sonra sıradakine geç.' },
            { title: 'Tutarlılık turu at', text: 'Son kontrol: dört cevap aynı hikayeyi mi anlatıyor? "Kaliteli ürün, en ucuz fiyat, pazar tezgahı, lüks reklam" gibi karışık bir dörtlü, müşterinin kafasını karıştırır.' },
          ]},
          { t: 'callout', kind: 'tip', title: 'İpucu', text: 'Küçük işletmenin en ucuz tutundurma aracı memnun müşteridir: tadımlık, deneme, garanti gibi ağızdan ağıza yayılmayı besleyen araçlar, çoğu zaman reklamdan ucuz ve etkilidir.' },
          { t: 'callout', kind: 'warn', title: 'Dikkat', text: 'En yaygın hata pazarlamayı sadece tutundurma sanmaktır: yanlış yerde duran, yanlış fiyatlı bir ürüne reklam yapmak, delik kovaya su taşımaktır.' },
        ],
      },
      {
        slug: 'vaka',
        title: 'Gerçek Vaka & Fayda',
        blocks: [
          { t: 'callout', kind: 'case', title: 'Vaka: Coca-Cola\'nın dört ayaklı masası', text: 'Pazarlama derslerinin klasik 4P vakası Coca-Cola\'dır, çünkü yüzyıllık başarısı dört ayağın da bilinçli yönetilmesine dayanır. Ürün: tadı on yıllardır korunan, şişesinin biçimi bile marka olan bir içecek; 1985\'te tadı değiştirilen New Coke denemesine müşterilerin gösterdiği büyük tepki ve şirketin eski formüle dönmek zorunda kalması, ürün ayağıyla oynamanın belgelenmiş dersidir. Fiyat: her bütçeye uyacak boy ve fiyat kademeleri. Dağıtım: şirketin klasik hedefiyle "kolun uzandığı her yerde" olmak; dünyanın en ücra bakkalına kadar ulaşan dağıtım ağı, rakiplerinin en zor taklit ettiği ayaktır. Tutundurma: kuşaklar boyu süren, mutluluk ve paylaşma temalı tutarlı reklam dili. Ders: bu başarı tek parlak reklamın değil, dört ayağın on yıllarca tutarlı yönetilmesinin sonucudur.' },
          { t: 'h2', text: 'Gerçek fayda' },
          { t: 'ul', items: [
            '"Malım iyi ama satmıyor" şikayetini teşhise çevirir: sorunun ürün mü, fiyat mı, yer mi, duyuru mu olduğunu ayrıştırır.',
            'Parayı doğru yere harcatır: reklama koşmadan önce raf düzeni ve fiyat gibi bedava düzeltmeleri sorgulatır.',
            'Yeni ürün lansmanını disipline eder: dört soruya cevap yazılmadan ürün piyasaya çıkmaz, çıkarsa da neden battığı bilinir.',
          ]},
        ],
      },
    ],
  },
  {
    slug: 'pivot',
    section: 'proje-urun',
    title: 'Pivot',
    question: 'Bu iş böyle yürümüyor; vazgeçmek mi, yön değiştirmek mi?',
    summary: 'Lean Startup yaklaşımında pivot: işin özünden vazgeçmeden, öğrenilenlere dayanarak stratejik yön değiştirme sanatı.',
    tags: ['girişim', 'yön değişimi', 'öğrenme'],
    pages: [
      {
        slug: 'kavram',
        title: 'Kavram',
        blocks: [
          { t: 'callout', kind: 'simple', title: 'Bir cümlede', text: 'Pivot, batmakta olan bir işi kapatmak da inatla sürdürmek de değildir: o işte öğrendiklerini ve iyi çalışan parçayı alıp yönü bilinçli olarak değiştirmektir; basketçinin bir ayağını sabit tutup dönmesi gibi.' },
          { t: 'callout', kind: 'ornek', title: 'Esnaftan örnek', text: 'Terzi Havva gelinlik dikmek için dükkan açtı ama semtte gelinlik alan az; aylar geçiyor, iş yok. Yalnız bir şey dikkatini çekiyor: gelinlik için gelen az sayıda müşteri bile hep aynı şeyi söylüyor: "Hazır aldığımız elbiseler üstümüze olmuyor, siz daraltır mısınız?" Havva iki yol arasında değil, üç yol arasında olduğunu fark ediyor: inatla gelinliğe devam etmek, dükkanı kapatmak ya da pivot yapmak. Sabit ayağı belli: dikiş ustalığı ve dükkanın yeri. Dönen ayak: ürün. Dükkanı "gelinlikçi"den "tadilat ve ısmarlama atölyesi"ne çeviriyor. Üç ay sonra randevuyla çalışıyor. İşi bırakmadı, işin yönünü değiştirdi.' },
          { t: 'p', text: 'Pivot kavramını Eric Ries, 2011\'de yayımlanan Yalın Girişim (The Lean Startup) kitabında tanımladı: pivot, "vizyonu değiştirmeden stratejiyi değiştiren, yapılandırılmış bir rota düzeltmesi"dir. Anahtar fikir şudur: ilk plan çoğu zaman yanlıştır ve bu bir kusur değil, işin doğasıdır; önemli olan yanlışı erken fark edip öğrenileni yeni yöne taşımaktır.' },
          { t: 'h2', text: 'Başlıca pivot türleri' },
          { t: 'table', head: ['Pivot türü', 'Ne değişir?', 'Basit örnek'], rows: [
            ['Yakınlaştırma (zoom-in)', 'Ürünün bir özelliği ürünün kendisi olur', 'Lokantanın en çok satan tatlısı, tatlı dükkanına dönüşür'],
            ['Uzaklaştırma (zoom-out)', 'Ürün, daha büyük bir bütünün parçası olur', 'Sadece tamirat yapan usta, komple tadilat işine geçer'],
            ['Müşteri ihtiyacı', 'Aynı müşterinin başka derdi hedeflenir', 'Havva\'nın gelinlikten tadilata geçişi'],
            ['Müşteri kesimi', 'Aynı ürün başka müşteriye satılır', 'Ev hanımına satılan temizlik hizmeti, ofislere satılır'],
            ['Kanal', 'Müşteriye ulaşma yolu değişir', 'Tezgah satışı bırakılıp telefonla siparişe geçilir'],
            ['Gelir modeli', 'Para kazanma biçimi değişir', 'Tek seferlik satış yerine aylık abonelik'],
          ]},
          { t: 'p', text: 'Pivotun tersi iki hastalıktır: yanlış yolda inatla ilerlemek (batık maliyet tuzağı) ve her zorlukta savrulup yön değiştirmek. Pivot bir kaçış değil, kanıta dayalı bir karardır: eldeki veriler bu yolun yürümediğini, ama başka bir yolun işaretini verdiğini gösterdiğinde yapılır.' },
        ],
      },
      {
        slug: 'uygulama',
        title: 'Nasıl Uygulanır',
        blocks: [
          { t: 'steps', items: [
            { title: 'Yürümediğini sayıyla kabul et', text: 'Duyguyla değil ölçüyle karar ver: kaç müşteri geldi, kaçı geri geldi, kasa ne diyor? Sayılar aylardır düz ya da düşüşteyse, "az kaldı, tutacak" cümlesini sorgula.' },
            { title: 'Çalışan parçayı bul', text: 'Batmakta olan işin içinde bile bir şey çalışıyordur: en çok sorulan hizmet, en sadık müşteri tipi, en çok övülen özellik. Sabit ayağın budur; pivot onun üstünde döner.' },
            { title: 'Tek pivot seç ve süre koy', text: 'Türler tablosundan tek bir pivot seç, hepsini birden deneme. Yeni yöne bir deneme süresi (örneğin üç ay) ve başarı ölçüsü koy: "Ayda 30 tadilat işi gelirse yol budur."' },
            { title: 'Süre sonunda dürüst karar ver', text: 'Ölçü tuttuysa yeni yola yerleş; tutmadıysa ya bir sonraki pivotu dene ya da onurluca kapat. Pivot, sonsuz erteleme aracı değildir.' },
          ]},
          { t: 'callout', kind: 'warn', title: 'Dikkat', text: 'En tehlikeli cümle "bu kadar para ve emek verdik, şimdi bırakılır mı?" cümlesidir. Harcanan para geri gelmeyecek; karar, geçmişe harcanana değil, önündeki yolun getirisine bakarak verilir.' },
          { t: 'callout', kind: 'tip', title: 'İpucu', text: 'Pivot toplantısını takvime bağla: iki üç ayda bir "devam mı, pivot mu?" sorusunu masaya koy. Soru rutinleşirse, yön değiştirmek yenilgi değil bakım haline gelir.' },
        ],
      },
      {
        slug: 'vaka',
        title: 'Gerçek Vaka & Fayda',
        blocks: [
          { t: 'callout', kind: 'case', title: 'Vaka: Instagram, Slack ve YouTube', text: 'Teknoloji tarihinin en büyük şirketlerinden bazıları pivot çocuğudur. Instagram, Burbn adında konum bildirme, plan yapma ve fotoğraf paylaşma gibi birçok özelliği olan karmaşık bir uygulama olarak başladı; kurucular verilere bakınca kullanıcıların neredeyse sadece fotoğraf paylaşıp filtre uyguladığını gördü ve her şeyi atıp yalnızca fotoğrafa odaklandı: ders kitabı bir yakınlaştırma pivotu. Slack, Tiny Speck şirketinin Glitch adlı çevrimiçi oyununun küllerinden doğdu: oyun tutmadı ama ekibin kendi içinde geliştirdiği yazışma aracı o kadar iyiydi ki şirket oyunu kapatıp bu aracı ürünleştirdi. YouTube ise görüntülü tanışma sitesi olarak açıldı; tanışan olmadı ama insanlar siteye her türlü videoyu yüklüyordu, kurucular da siteyi genel video paylaşımına çevirdi. Üç örnekte de ortak nokta aynıdır: kullanıcı davranışı verisi dinlendi, çalışan parça bulundu ve yön ona döndürüldü.' },
          { t: 'h2', text: 'Gerçek fayda' },
          { t: 'ul', items: [
            'Batık maliyet inadını kırar: yürümeyen yolda kaybedilen her ayın da bir maliyet olduğunu hatırlatır.',
            '"Bırakmak" ile "yön değiştirmek" arasındaki üçüncü yolu gösterir: emeğin ve öğrenilenin çöpe gitmediği bir çıkış sunar.',
            'Kararı duygudan veriye taşır: pivot tartışması "bence" ile değil, müşteri sayısı ve kasa rakamıyla yapılır.',
          ]},
        ],
      },
    ],
  },
]
