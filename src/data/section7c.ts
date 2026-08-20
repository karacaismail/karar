import type { DecisionModel } from '../types'

export const section7cModels: DecisionModel[] = [
  {
    slug: 'is-modeli-kanvasi',
    section: 'strateji-rekabet',
    title: 'İş Modeli Kanvası',
    question: 'İşimin para kazanma düzeneğini tek sayfada nasıl görürüm?',
    summary: 'Alexander Osterwalder\'ın dokuz kutulu kanvası: bir işletmenin kime, ne sunduğunu, nasıl ulaştığını, nereden kazandığını ve neye harcadığını tek sayfada gösterir.',
    tags: ['iş modeli', 'strateji', 'planlama'],
    areas: ['Yeni iş kurma', 'Mevcut işi gözden geçirme', 'Ortaklara işi anlatma', 'Büyüme kararı'],
    viz: {
      kind: 'table',
      head: ['Kutu', 'Sorusu'],
      rows: [
        ['Müşteri kesimleri', 'Kime hizmet ediyorum?'],
        ['Değer önerisi', 'Müşteri neden beni seçiyor?'],
        ['Kanallar', 'Müşteriye nereden ulaşıyorum?'],
        ['Müşteri ilişkileri', 'Müşteriyle bağı nasıl tutuyorum?'],
        ['Gelir kaynakları', 'Para nereden geliyor?'],
        ['Kilit kaynaklar', 'Bu iş için elimde ne olmalı?'],
        ['Kilit faaliyetler', 'Her gün ne yapmam şart?'],
        ['Kilit ortaklar', 'Kimsiz bu iş yürümez?'],
        ['Maliyet yapısı', 'Para nereye gidiyor?'],
      ],
      accentCol: 0,
      note: 'Dokuz kutu tek sayfaya çizilir; sağ taraf müşteriyi ve geliri, sol taraf üretimi ve maliyeti anlatır.',
    },
    pages: [
      {
        slug: 'kavram',
        title: 'Kavram',
        blocks: [
          { t: 'callout', kind: 'simple', title: 'Bir cümlede', text: 'Bir işletmenin bütün para kazanma düzeneği dokuz kutuluk tek bir sayfaya sığar: kime ne sunuyorsun, ona nasıl ulaşıyorsun, parayı nereden kazanıyorsun, elinde ne var, her gün ne yapıyorsun, kiminle çalışıyorsun ve paran nereye gidiyor; sayfayı dolduramıyorsan işini henüz tam anlamamışsın demektir.' },
          { t: 'callout', kind: 'ornek', title: 'Esnaftan örnek', text: 'Mahalle kafecisi Zeynep işini büyütmek için krediye başvuracak; bankacı "iş modelinizi anlatın" deyince duraksıyor. Bir kağıda dokuz kutu çiziyor. Müşterim kim? Sabah kahveci memurlar ve öğleden sonra ders çalışan öğrenciler. Onlara ne sunuyorum? Sessiz köşe, hızlı kahve, ucuz menü. Nasıl ulaşıyorum? Vitrin, mahalle ağzı, bir de telefon grubu. Bağı nasıl tutuyorum? İsimle karşılama, onuncu kahve bedava kartı. Gelirim? Kahve ve tost satışı. Elimde ne var? Köşe dükkan, iyi makine, güler yüzlü Ayşe. Her gün ne yapıyorum? Taze kavurma, temizlik, sosyal medya. Kimsiz olmaz? Kahve tedarikçisi ve fırıncı. Param nereye gidiyor? Kira, maaş, kahve çekirdeği. Sayfa dolunca Zeynep bir şeyi fark ediyor: öğrenciler saatlerce oturuyor ama az harcıyor; gelir kutusuyla müşteri kutusu tam örtüşmüyor. Kanvas, sorunu kredi almadan önce gösterdi.' },
          { t: 'p', text: 'Kanvası İsviçreli araştırmacı Alexander Osterwalder, hocası Yves Pigneur ile geliştirdi ve 2010\'da yayımlanan İş Modeli Üretimi (Business Model Generation) kitabıyla dünyaya yaydı. Amaç şuydu: iş planları onlarca sayfa tutuyor, kimse okumuyor ve parçalar arasındaki bağ görünmüyordu. Kanvas bütün işi tek sayfaya indirir; böylece kutular arasındaki uyumsuzluk ilk bakışta göze çarpar.' },
          { t: 'h2', text: 'Dokuz kutu' },
          { t: 'table', head: ['Kutu', 'Sorusu', 'Zeynep\'in kafesi'], rows: [
            ['Müşteri kesimleri', 'Kime hizmet ediyorum?', 'Memurlar ve öğrenciler'],
            ['Değer önerisi', 'Müşteri neden beni seçiyor?', 'Sessiz köşe, hızlı ve ucuz kahve'],
            ['Kanallar', 'Müşteriye nereden ulaşıyorum?', 'Vitrin, mahalle ağzı, telefon grubu'],
            ['Müşteri ilişkileri', 'Bağı nasıl tutuyorum?', 'İsimle karşılama, kahve kartı'],
            ['Gelir kaynakları', 'Para nereden geliyor?', 'Kahve ve tost satışı'],
            ['Kilit kaynaklar', 'Elimde ne olmalı?', 'Köşe dükkan, makine, Ayşe'],
            ['Kilit faaliyetler', 'Her gün ne yapmam şart?', 'Taze kavurma, temizlik, paylaşım'],
            ['Kilit ortaklar', 'Kimsiz yürümez?', 'Kahve tedarikçisi, fırıncı'],
            ['Maliyet yapısı', 'Para nereye gidiyor?', 'Kira, maaş, çekirdek'],
          ]},
          { t: 'p', text: 'Kanvasın sağ yarısı müşteriye ve gelire bakar, sol yarısı üretime ve maliyete. İyi bir iş modelinde iki yarı birbirini besler: sunduğun değer, elindeki kaynaklarla üretilebilir olmalı; kazandığın para, harcadığından fazla olmalı. Kutular tek tek doğru olabilir ama birbiriyle uyumsuzsa model aksar; kanvasın asıl işi bu uyumsuzluğu göstermektir.' },
        ],
      },
      {
        slug: 'uygulama',
        title: 'Nasıl Uygulanır',
        blocks: [
          { t: 'steps', items: [
            { title: 'Büyük bir kağıda dokuz kutuyu çiz', text: 'Bilgisayara değil, duvara asılacak büyük bir kağıda çiz. Yapışkan notlar kullan: fikirler değişir, notlar sökülüp taşınır. Amaç güzel bir belge değil, canlı bir tartışma sayfasıdır.' },
            { title: 'Müşteri ve değerden başla', text: 'İlk iki kutu her şeyin temelidir: kime hizmet ediyorum ve neden beni seçiyor? Bu ikisi netleşmeden diğer kutuları doldurmak, temelsiz duvar örmektir.' },
            { title: 'Kalan yedi kutuyu doldur ve bağları kontrol et', text: 'Her kutuyu doldururken komşusuna bak: gelir kutusu müşteri kutusuyla örtüşüyor mu? Kilit faaliyetler değer önerisini gerçekten üretiyor mu? Uyumsuz çiftleri kırmızıyla işaretle.' },
            { title: 'En zayıf kutuyu seç ve dene', text: 'Kanvas bitince en şüpheli kutuyu seç ve küçük bir deneyle sına: yeni fiyat, yeni kanal, yeni müşteri kesimi. Sonuca göre notu değiştir; kanvas ayda bir güncellenen canlı bir sayfadır.' },
          ]},
          { t: 'callout', kind: 'tip', title: 'İpucu', text: 'Aynı kanvası bir de en güçlü rakibin için doldur. Onun kutularıyla seninkiler yan yana gelince, farkının nerede olduğunu ve nerede zayıf kaldığını tek bakışta görürsün.' },
          { t: 'callout', kind: 'warn', title: 'Dikkat', text: 'Kanvası bir kere doldurup çerçeveletmek en yaygın hatadır. Kutular varsayımdır, gerçek değil: "müşterim öğrenciler" yazmak onu doğru yapmaz. Her kutu, müşteriyle konuşarak ve küçük denemelerle doğrulanana kadar bir tahmindir.' },
        ],
      },
      {
        slug: 'vaka',
        title: 'Gerçek Vaka & Fayda',
        blocks: [
          { t: 'callout', kind: 'case', title: 'Vaka: Nespresso\'nun kanvası', text: 'Osterwalder ve Pigneur\'un kitabındaki en bilinen örnek Nespresso\'dur. Nestle, kahveyi market rafında paket olarak satan bir şirketken Nespresso ile modeli baştan kurdu ve kanvasın neredeyse her kutusunu değiştirdi. Müşteri kesimi: market alışverişçisi değil, evinde kaliteli espresso isteyen varlıklı hane. Değer önerisi: tek tuşla, her seferinde aynı kalitede kahve. Gelir modeli en zekice kısımdır: makine ucuza, neredeyse kârsız satılır; asıl para, sadece o makineye uyan kapsüllerin tekrar tekrar satışından gelir. Kanal da değişti: kapsüller markette değil, şirketin kendi kulübü ve mağazaları üzerinden satıldı; böylece müşteri ilişkisi araya bakkal girmeden doğrudan kuruldu. Tek tek bakınca sıradan görünen bu kararlar, kanvas üzerinde birbirine kenetlenmiş bir düzenek oluşturur: makine müşteriyi kapsüle bağlar, kulüp ilişkiyi tutar, tekrar satış geliri büyütür. Nespresso bu modelle milyarlarca dolarlık bir işe dönüştü ve kitapta "aynı ürün, bambaşka iş modeli" dersinin merkez örneği oldu.' },
          { t: 'h2', text: 'Gerçek fayda' },
          { t: 'ul', items: [
            'Dağınık aklı tek sayfada toplar: iş plana değil sayfaya sığınca, ortağa, bankacıya ya da aileye on dakikada anlatılabilir hale gelir.',
            'Uyumsuzluğu erken gösterir: en çok yer kaplayan müşterinin en az para bırakması gibi sorunlar, zarar büyümeden kağıt üstünde yakalanır.',
            'Yeni model denemeyi ucuzlatır: "kapsül gibi tekrar geliri ben nasıl kurarım?" sorusu, dokuz kutudan birini değiştirerek kağıt üstünde risksizce denenir.',
          ]},
        ],
      },
    ],
  },
  {
    slug: 'deger-onerisi-kanvasi',
    section: 'pazarlama-musteri',
    title: 'Değer Önerisi Kanvası',
    question: 'Ürünüm müşterinin gerçek derdine deva mı, yoksa sadece bana mı güzel görünüyor?',
    summary: 'Osterwalder\'ın ikinci kanvası: müşterinin işlerini, acılarını ve kazanç beklentilerini ürünün özellikleriyle tek tek eşleştirir; eşleşme yoksa satış da yoktur.',
    tags: ['değer önerisi', 'müşteri', 'ürün'],
    areas: ['Yeni ürün tasarımı', 'Satmayan ürünü düzeltme', 'Reklam mesajı yazma', 'Müşteri görüşmesi'],
    viz: {
      kind: 'table',
      head: ['Müşteri tarafı', 'Sorusu', 'Ürün tarafındaki karşılığı'],
      rows: [
        ['İşler', 'Müşteri neyi halletmeye çalışıyor?', 'Ürün ve hizmetler: o işi gören şey'],
        ['Acılar', 'Bu işi yaparken canını ne sıkıyor?', 'Acı dindiriciler: o sıkıntıyı azaltan özellik'],
        ['Kazançlar', 'Ne olsa sevinir, ne bekliyor?', 'Kazanç yaratıcılar: o sevinci üreten özellik'],
      ],
      accentCol: 0,
      note: 'Sağdaki her özellik soldaki bir maddeyle eşleşmeli; eşleşmeyen özellik masraftır, eşleşmeyen acı fırsattır.',
    },
    pages: [
      {
        slug: 'kavram',
        title: 'Kavram',
        blocks: [
          { t: 'callout', kind: 'simple', title: 'Bir cümlede', text: 'Önce müşterinin halletmeye çalıştığı işleri, o sırada çektiği acıları ve umduğu kazançları yaz; sonra ürününün her özelliğini bu listeyle eşleştir: bir acıyı dindirmeyen ya da bir kazancı üretmeyen özellik müşteri için yoktur, sadece senin masrafındır.' },
          { t: 'callout', kind: 'ornek', title: 'Esnaftan örnek', text: 'Terzi Ayhan gömlek dikiyor ama satış durgun. Reklamında hep kendi gururunu anlatıyor: "İtalyan kumaş, elli yıllık tezgah." Bir gün müşterilerini dinlemeye karar veriyor. Müşterinin işi ne? Sabah işe giderken düzgün görünmek. Acısı ne? Hazır gömleğin kolu uzun, karnı sıkıyor; ütüsü de her sabah dert. Kazanç beklentisi ne? "Tam oturdu" dedirten kalıp ve dolaptan alıp giyme rahatlığı. Ayhan listeye bakınca şaşırıyor: müşterinin derdi kumaşın İtalyanlığı değil, bedenine uymayan kalıp ve ütü. Reklamı değiştiriyor: "Bedenine göre dikilir, ütü istemez kumaş seçeneğiyle." Bir de acıyı tam ortasından vuran bir hizmet ekliyor: ilk yıkamadan sonra ücretsiz kalıp ayarı. Satış canlanıyor. Gömlek aynı gömlek; değişen, özelliklerin müşterinin derdiyle eşleşmesi.' },
          { t: 'p', text: 'Bu kanvas, İş Modeli Kanvası\'nın büyüteci gibidir: Osterwalder ve ekibi, dokuz kutunun en önemli ikisini (müşteri kesimi ve değer önerisi) yakınlaştırıp 2014\'te yayımlanan Değer Önerisi Tasarımı (Value Proposition Design) kitabında ayrı bir araca dönüştürdü. Sağda müşteri profili durur: işler, acılar, kazançlar. Solda değer haritası durur: ürünler, acı dindiriciler, kazanç yaratıcılar. Amaç iki tarafın örtüşmesidir; buna uyum (fit) denir.' },
          { t: 'h2', text: 'İki taraf, altı kutu' },
          { t: 'table', head: ['Taraf', 'Kutu', 'Sorusu', 'Ayhan örneği'], rows: [
            ['Müşteri', 'İşler', 'Müşteri neyi halletmeye çalışıyor?', 'İşe düzgün görünerek gitmek'],
            ['Müşteri', 'Acılar', 'Canını ne sıkıyor?', 'Uymayan kalıp, sabah ütüsü'],
            ['Müşteri', 'Kazançlar', 'Ne olsa sevinir?', '"Tam oturdu" hissi, ütüsüz rahatlık'],
            ['Ürün', 'Ürün ve hizmetler', 'Ne sunuyorum?', 'Ismarlama gömlek'],
            ['Ürün', 'Acı dindiriciler', 'Hangi sıkıntıyı azaltıyorum?', 'Bedene dikim, ütü istemez kumaş, ücretsiz kalıp ayarı'],
            ['Ürün', 'Kazanç yaratıcılar', 'Hangi sevinci üretiyorum?', 'Tam oturan kalıp, dolaptan al giy'],
          ]},
          { t: 'p', text: 'Modelin en önemli dersi sıralamadır: önce sağ taraf, sonra sol taraf. Çoğu esnaf tersini yapar; önce ürünü yapar, sonra ona dert arar. Kanvas seni önce müşteriyi dinlemeye, ürünü onun listesine göre biçmeye zorlar. Ve acımasız bir ölçüsü vardır: soldaki hiçbir maddeyle eşleşmeyen özellik, ne kadar gurur verici olursa olsun, müşterinin gözünde görünmezdir.' },
        ],
      },
      {
        slug: 'uygulama',
        title: 'Nasıl Uygulanır',
        blocks: [
          { t: 'steps', items: [
            { title: 'Müşteri profilini müşteriyle doldur', text: 'İşleri, acıları ve kazançları masa başında tahmin etme; beş on müşteriyle konuş. "Bu işi yaparken en çok neye sinirleniyorsunuz?" sorusu, en pahalı pazar araştırmasından çok şey öğretir.' },
            { title: 'Acıları ve kazançları önem sırasına diz', text: 'Her acı eşit değildir. Müşterinin uykusunu kaçıran acıyla ufak rahatsızlığı ayır; en tepedeki bir iki acıya nişan al. Herkesin her derdine deva olmaya çalışan ürün, hiçbir derde tam deva olamaz.' },
            { title: 'Özelliklerini tek tek eşleştir', text: 'Ürününün her özelliğinin karşısına, dindirdiği acıyı ya da yarattığı kazancı yaz. Karşısı boş kalan özellik ya atılır ya ucuzlatılır. Karşılıksız kalan büyük bir acı ise yeni özelliğin ya da yeni ürününün adresidir.' },
            { title: 'Reklamını eşleşmeden yaz', text: 'Vitrindeki yazı, broşür ve sosyal medya mesajın kendi hünerini değil, müşterinin acısını ve kazancını söylesin: "Elli yıllık tezgah" değil, "Sabah ütü derdine son."' },
          ]},
          { t: 'callout', kind: 'tip', title: 'İpucu', text: 'Acıları bulmanın kestirme yolu şikayetlerdir: iade sebepleri, kasada söylenen sitem cümleleri, rakibe gidenlerin gerekçeleri. Şikayet defteri, değer önerisi kanvasının ham maddesidir.' },
          { t: 'callout', kind: 'warn', title: 'Dikkat', text: 'Müşteriye "böyle bir ürün olsa alır mısın?" diye sorma; herkes nezaketen evet der. Onun yerine geçmişi sor: "Bu derdi en son ne zaman yaşadın, ne yaptın, kaç para harcadın?" Gerçek davranış, niyet beyanından bin kat doğru konuşur.' },
        ],
      },
      {
        slug: 'vaka',
        title: 'Gerçek Vaka & Fayda',
        blocks: [
          { t: 'callout', kind: 'case', title: 'Vaka: iPod\'un cümlesi ve elektrikli süpürgenin acısı', text: 'Değer önerisinin gücünü anlatan en ünlü örneklerden biri Apple\'ın 2001\'de iPod\'u tanıtma biçimidir. Rakip cihazlar "5 GB sabit disk, dahili pil" gibi teknik özellik sayarken Apple tek cümle söyledi: "Cebinizde bin şarkı." Bu cümle özellik değil kazançtır: müşterinin işi müzik taşımaktır, kazancı bütün arşivinin cebine sığmasıdır; aynı donanımı satan rakipler dururken iPod pazarı silip süpürdü. Acı tarafının örneği ise James Dyson\'dır: torbalı süpürgelerin torba doldukça çekişinin düşmesi, herkesin bildiği ama kimsenin ürüne çevirmediği bir acıydı. Dyson binlerce prototipten sonra torbasız süpürgeyi bu tek acının üzerine kurdu ve reklamını da aynı acıyla yaptı: çekiş gücü düşmez. İki örnekte de kazanan taraf, en iyi teknik özelliği değil, müşteri listesindeki en yakıcı maddeyle en net eşleşmeyi sunandır.' },
          { t: 'h2', text: 'Gerçek fayda' },
          { t: 'ul', items: [
            'Boşa giden özellik masrafını keser: müşterinin fark etmediği özelliğe harcanan para ve emek, listede karşılığı olmadığı anda görünür olur.',
            'Reklam dilini düzeltir: "ben ne yaptım" dilinden "senin derdin ne" diline geçen esnafın mesajı, aynı bütçeyle kat kat çok müşteriye dokunur.',
            'Yeni ürün fikrini garantiye yaklaştırır: karşılıksız kalmış büyük bir acıdan doğan ürün, masa başında icat edilen üründen çok daha az batar.',
          ]},
        ],
      },
    ],
  },
  {
    slug: 'crm-yonetimi',
    section: 'pazarlama-musteri',
    title: 'Müşteri İlişkileri Yönetimi (CRM)',
    question: 'Müşterilerimi nasıl kaybetmem, bir kere geleni nasıl hep gelene çeviririm?',
    summary: 'Müşteriyi tanıma, bilgisini kaydetme, düzenli takip etme ve sadakat kurma disiplini: yeni müşteri kovalamak yerine eldekini büyütme sanatı.',
    tags: ['müşteri', 'sadakat', 'satış'],
    areas: ['Müşteri kaybını azaltma', 'Sadakat programı kurma', 'Satış takibi', 'Müşteri kayıt düzeni'],
    viz: {
      kind: 'process',
      steps: [
        { title: 'Tanı', text: 'Müşteriyi ve alışkanlığını öğren' },
        { title: 'Kaydet', text: 'Ad, iletişim, alışveriş geçmişi tek yerde' },
        { title: 'Takip et', text: 'Doğru zamanda hatırla ve ulaş' },
        { title: 'Sadakat kur', text: 'Gelmeyi ödüllendir, ilişkiyi büyüt' },
      ],
      loop: true,
      note: 'Döngü biter bitmez yeniden başlar: sadık müşteri hakkında her alışverişte yeni bir şey öğrenirsin.',
    },
    pages: [
      {
        slug: 'kavram',
        title: 'Kavram',
        blocks: [
          { t: 'callout', kind: 'simple', title: 'Bir cümlede', text: 'Müşteri ilişkileri yönetimi, müşteriyi tanımak, öğrendiğini kaydetmek, doğru zamanda hatırlamak ve gelmeyi ödüllendirmekten oluşan bir döngüdür; amacı yeni müşteri kovalamak değil, bir kere geleni ömür boyu gelene çevirmektir, çünkü eldeki müşteriyi tutmak yenisini bulmaktan kat kat ucuzdur.' },
          { t: 'callout', kind: 'ornek', title: 'Esnaftan örnek', text: 'Eski mahalle bakkalı Rıza aslında dünyanın ilk CRM ustasıydı: kimin çocuğu hangi çikolatayı sever bilirdi, veresiye defterinde herkesin hesabı dururdu, teyzenin gazı bitmeden "gaz lazım mı?" diye seslenirdi. Kırtasiyeci Meral aynı işi bugünün araçlarıyla yapıyor. Tanıma: okul sezonunda hangi velinin hangi sınıfa liste aldığını soruyor. Kayıt: telefonuna basit bir tabloya adı, numarası, çocuğun sınıfı, aldıkları yazılıyor. Takip: ağustos sonunda "3. sınıf listeniz hazır, ayırdım" mesajı gidiyor. Sadakat: on defter alana bir defter bedava kartı var. Yan sokakta daha büyük bir kırtasiye açılıyor; ama velinin listesi Meral\'de hazır beklerken kimse sıraya girip liste okutmak istemiyor. Müşteri fiyata değil, tanınmaya sadık kalıyor.' },
          { t: 'p', text: 'CRM (Customer Relationship Management), 1990\'larda büyük şirketlerin yazılımlarla sistemleştirdiği bir kavramdır ama özü yazılım değil disiplindir: müşteri bilgisini kişilerin hafızasından çıkarıp işletmenin hafızasına taşımak. Yazısız bilgi, o çalışan işten ayrılınca ya da patron unutunca kaybolur; kayıtlı bilgi ise işletmenin malı olur ve her yeni alışverişle değerlenir.' },
          { t: 'h2', text: 'Döngünün dört adımı' },
          { t: 'table', head: ['Adım', 'Ne yapılır', 'Meral örneği'], rows: [
            ['Tanı', 'Müşterinin kim olduğunu, ne aldığını, ne zaman geldiğini öğren', 'Hangi veli, hangi sınıf, hangi liste'],
            ['Kaydet', 'Öğrendiğini tek bir yere yaz: defter, tablo ya da program', 'Telefondaki basit tablo'],
            ['Takip et', 'Kaydı kullanarak doğru zamanda ulaş', 'Ağustos sonunda hazır liste mesajı'],
            ['Sadakat kur', 'Gelmeyi görünür biçimde ödüllendir', 'On defter alana bir bedava'],
          ]},
          { t: 'p', text: 'Döngünün altında yatan hesap basittir ve yönetim araştırmalarında sıkça belgelenmiştir: yeni bir müşteri kazanmak, eldekini tutmaktan birkaç kat pahalıdır; üstelik sadık müşteri zamanla daha çok harcar ve çevresine anlatarak bedava reklam olur. Bu yüzden CRM\'in ölçüsü "bu ay kaç yeni müşteri geldi?" değil, "geçen ayki müşterilerin kaçı bu ay da geldi?" sorusudur.' },
        ],
      },
      {
        slug: 'uygulama',
        title: 'Nasıl Uygulanır',
        blocks: [
          { t: 'steps', items: [
            { title: 'Tek bir kayıt yeri seç ve basit başla', text: 'Bir defter, telefonda bir tablo ya da ücretsiz basit bir uygulama: hangisiyse tek olsun. Her müşteri için dört bilgi yeter: ad, telefon, ne aldı, ne zaman aldı. Karmaşık başlayan sistem üç haftada terk edilir.' },
            { title: 'Her temasta bir satır ekle', text: 'Kayıt anlık iş olsun: müşteri kasadayken ya da çıkar çıkmaz bir satır. Biriktirip akşam yazarım diyen unutur. Bir ayda elinde işletmenin en değerli varlığı birikir: kim, neyi, ne sıklıkla alıyor.' },
            { title: 'Kayıttan takvim çıkar', text: 'Kayıtlara bakıp zamanı gelenleri ara ya da yaz: gözlük camının yenilenme vakti gelen, kışlık lastik mevsimi yaklaşan, iki aydır uğramayan. Mesajın satış dili değil hatırlama dili olsun: "Vakti geldi, aklımdaydınız."' },
            { title: 'Sadakati görünür ödüle bağla', text: 'Basit ve şeffaf bir kural koy: on kahvede bir bedava, yıl sonunda alışveriş tutarına göre küçük hediye. Ödülün büyüklüğünden çok, sözünün şaşmaz biçimde tutulması sadakat yaratır.' },
          ]},
          { t: 'callout', kind: 'tip', title: 'İpucu', text: 'Kaybettiğin müşteri en değerli öğretmenindir: iki üç aydır gelmeyeni ara ve kırmadan sor: "Bir eksiğimiz mi oldu?" Çoğu geri döner; dönmeyenin söylediği eksik ise on müşteriyi birden kurtarır.' },
          { t: 'callout', kind: 'warn', title: 'Dikkat', text: 'Müşteri bilgisi emanettir: numarayı sadakat mesajı için alıp her gün reklam yağdırırsan, tanınma hissi taciz hissine döner ve müşteri hem numarasını hem kendisini geri çeker. Az, zamanlı ve kişiye uygun mesaj; asla toplu bombardıman değil.' },
        ],
      },
      {
        slug: 'vaka',
        title: 'Gerçek Vaka & Fayda',
        blocks: [
          { t: 'callout', kind: 'case', title: 'Vaka: Havayolu mil programları ve Amazon\'un müşteri takıntısı', text: 'Sadakat programının modern tarihi 1981\'de American Airlines\'ın AAdvantage programıyla başlar: uçtukça mil biriktiren ve mille bedava bilet alan yolcu, fiyatlar yakınken hep aynı şirketi seçmeye başladı. Program o kadar tuttu ki bütün büyük havayolları kopyaladı ve mil programları zamanla şirketlerin en değerli varlıklarından biri haline geldi; bugün milyonlarca üyesi olan bu programlar, hangi yolcunun nereye, ne sıklıkla uçtuğunu bilen dev birer müşteri kaydıdır. Aynı disiplinin perakendedeki zirvesi Amazon\'dur: kurucusu Jeff Bezos şirketin ilkesini "dünyanın en müşteri odaklı şirketi olmak" diye tanımladı ve hissedar mektuplarında bunu yıllarca tekrarladı. Amazon her müşterinin geçmişini kaydeder ve bunu müşterinin yararına çevirir: "bunu alanlar şunu da aldı" önerileri, tek tıkla sipariş, soru sormadan iade. Prime üyeliği ise sadakat programının en ileri biçimidir: yıllık ücret ödeyen üye, üyeliğinin karşılığını çıkarmak için alışverişini doğal olarak Amazon\'da toplar. İki örneğin ortak dersi: müşteriyi kaydeden ve kaydı müşterinin işine yarayacak biçimde kullanan şirket, fiyat savaşına girmeden sadakat kazanır.' },
          { t: 'h2', text: 'Gerçek fayda' },
          { t: 'ul', items: [
            'Reklam masrafını düşürür: eldeki müşteriyi tutmak yenisini bulmaktan kat kat ucuz olduğu için, aynı ciro daha az reklam parasıyla döner.',
            'İşletmeye hafıza kazandırır: müşteri bilgisi çalışanın kafasından işletmenin kaydına geçince, usta ayrılsa da ilişki kalır.',
            'Fiyat savaşından korur: tanındığını ve değer gördüğünü hisseden müşteri, yan sokakta beş lira ucuzu var diye kolay kolay gitmez.',
          ]},
        ],
      },
    ],
  },
]
