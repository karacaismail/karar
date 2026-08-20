import type { DecisionModel } from '../types'

export const section8bModels: DecisionModel[] = [
  {
    slug: 'bt-yonetisimi-itil-cobit',
    section: 'veri-teknoloji',
    title: 'BT Yönetişimi (ITIL ve COBIT)',
    question: 'Bilgisayar sistemlerimiz işe hizmet ediyor mu, yoksa başına buyruk mu çalışıyor?',
    summary: 'BT hizmetlerini düzene sokan iki klasik çerçeve: ITIL, BT\'nin günlük hizmetini (arıza, talep, değişiklik) nasıl yöneteceğini; COBIT ise BT\'nin işin hedeflerine hizmet edip etmediğini nasıl denetleyeceğini anlatır.',
    tags: ['BT hizmet yönetimi', 'yönetişim', 'ITIL', 'COBIT'],
    areas: ['BT ve bilgi işlem ekipleri', 'Kurumsal yönetim', 'Hizmet masası', 'Denetim ve uyum'],
    viz: {
      kind: 'table',
      head: ['ITIL yaşam döngüsü aşaması', 'Sorduğu soru', 'Günlük hayattaki karşılığı'],
      rows: [
        ['Hizmet stratejisi', 'BT hangi hizmetleri, neden sunmalı?', 'Muhasebe programı mı önce, web sitesi mi?'],
        ['Hizmet tasarımı', 'Bu hizmet nasıl kurulmalı?', 'Yedekleme kaç saatte bir, kim erişebilecek?'],
        ['Hizmet geçişi', 'Yenilik bozmadan nasıl devreye girer?', 'Yeni program önce küçük grupta denenir'],
        ['Hizmet işletimi', 'Günlük hizmet nasıl aksamadan yürür?', 'Arıza kaydı, hizmet masası, olay yönetimi'],
        ['Sürekli iyileştirme', 'Neyi daha iyi yapabiliriz?', 'Aylık arıza sayısı düşüyor mu, bakılır'],
      ],
      accentCol: 0,
      note: 'ITIL bu döngüyle "hizmeti yönetir"; COBIT ise tepeden bakıp "bu hizmet işe yarıyor mu?" diye denetler.',
    },
    pages: [
      {
        slug: 'kavram',
        title: 'Kavram',
        blocks: [
          { t: 'callout', kind: 'simple', title: 'Bir cümlede', text: 'ITIL, bilgisayar hizmetlerini bir lokantanın mutfak düzeni gibi işletmenin kurallarıdır; COBIT ise patronun mutfağa sorduğu sorudur: bu mutfak gerçekten müşteriyi doyuruyor mu, parası buna değiyor mu?' },
          { t: 'callout', kind: 'ornek', title: 'Esnaftan örnek', text: 'Üç şubeli bir market zincirinin kasaları, terazileri ve stok programı var. Sistem çöktüğünde herkes bilgisayardan anlayan yeğen Serkan\'ı arıyor; Serkan o gün yoksa satış duruyor. Ne arızalar kaydediliyor ne de aynı arızanın kaç kez tekrarladığı biliniyor. Basit bir ITIL mantığı kuruluyor: her arıza bir deftere (sonra basit bir programa) yazılıyor, kim ne zaman çözdü not ediliyor, her değişiklik (yeni program, güncelleme) önce tek şubede deneniyor. Üç ay sonra defter konuşuyor: arızaların yarısı aynı eski kasadan geliyor. Kasa değişiyor, çağrılar yarıya iniyor. COBIT tarafı ise patronun sorusudur: "Bu stok programına verdiğim para, raftaki eksiği gerçekten azaltıyor mu?" Bu soru sorulmazsa BT masrafı büyür ama işe katkısı ölçülmez.' },
          { t: 'p', text: 'ITIL (IT Infrastructure Library), 1980\'lerin sonunda İngiliz devletinin BT hizmetlerini düzene sokmak için derlediği "en iyi uygulamalar" kitaplığıdır. Zamanla dünyada BT hizmet yönetiminin ortak dili oldu: arıza kaydına "olay", köklü sebebe "problem", her yeniliğe "değişiklik" der ve her biri için basit bir yol tarif eder. COBIT ise ISACA adlı denetim kuruluşunun geliştirdiği bir yönetişim çerçevesidir: BT\'nin işin hedeflerine bağlı çalışmasını, risklerin yönetilmesini ve kuralların (yasa, güvenlik, uyum) karşılanmasını denetlemek için kontrol noktaları tanımlar.' },
          { t: 'h2', text: 'İki çerçeve, iki ayrı soru' },
          { t: 'table', head: ['Çerçeve', 'Kimin gözlüğü?', 'Ana sorusu', 'Örnek çıktısı'], rows: [
            ['ITIL', 'BT ekibinin ve hizmet masasının', 'Hizmeti nasıl düzgün sunarım?', 'Arıza kaydı, değişiklik onayı, hizmet kataloğu'],
            ['COBIT', 'Patronun, yönetimin ve denetçinin', 'BT işe hizmet ediyor mu, riskler kontrolde mi?', 'Kontrol noktaları, sorumluluk tablosu, uyum raporu'],
          ]},
          { t: 'p', text: 'İkisi rakip değil, tamamlayıcıdır: ITIL mutfağın iç düzenidir, COBIT işletmenin mutfak üzerindeki gözüdür. Küçük bir işletmede bunların adını bilmeye bile gerek yoktur; önemli olan iki alışkanlıktır. Birincisi, BT ile ilgili her arızayı ve her değişikliği kaydetmek (ITIL\'in özü). İkincisi, BT harcamasını düzenli olarak iş sonucuyla yan yana koymak (COBIT\'in özü).' },
          { t: 'p', text: 'Bu çerçevelerin asıl değeri, BT\'yi kişilere bağımlılıktan kurtarmasıdır. "Bilen tek kişi" gittiğinde işin durduğu her yerde, aslında eksik olan yetenek değil, yazılı süreçtir.' },
        ],
      },
      {
        slug: 'uygulama',
        title: 'Nasıl Uygulanır',
        blocks: [
          { t: 'steps', items: [
            { title: 'Hizmet listeni çıkar', text: 'BT\'nin işletmene sunduğu hizmetleri tek tek yaz: kasa sistemi, stok programı, e-posta, web sitesi, yedekleme. Her hizmetin karşısına "bu dursa ne olur?" sorusunun cevabını ekle. En kritik hizmet, listenin en üstüne çıkar.' },
            { title: 'Her arızayı kayda al', text: 'Sözle çözülen arıza yok sayılır ve tekrar eder. Basit bir kayıt tut: ne bozuldu, ne zaman, kim çözdü, kaç sürdü. Bir süre sonra kayıtlar konuşmaya başlar: en çok neyin, nerede bozulduğu görünür ve kalıcı çözüm oraya yapılır.' },
            { title: 'Değişikliği kural altına al', text: 'Hiçbir güncelleme, yeni program veya ayar değişikliği "hadi yapıverelim" ile yapılmasın. Küçük kural yeter: değişiklik önce yazılır, yoğun saat dışında yapılır, mümkünse önce küçük bir bölümde denenir ve geri dönüş yolu (eski hale nasıl dönülür?) baştan bellidir.' },
            { title: 'BT harcamasını iş sonucuyla yan yana koy', text: 'COBIT adımı budur: yılda en az bir kez otur ve sor: bu programa, bu sunucuya, bu aboneliğe verdiğim para hangi iş sonucunu iyileştiriyor? Cevabı olmayan harcama ya gereksizdir ya da ölçülmüyordur; ikisi de düzeltilmelidir.' },
          ]},
          { t: 'callout', kind: 'tip', title: 'İpucu', text: 'Küçük işletmede ITIL kitaplarını okumana gerek yok; özü üç defterdir: arıza defteri, değişiklik defteri ve hizmet listesi. Bu üçünü tutan bir işletme, adını hiç anmadan ITIL\'in en değerli kısmını uygulamış olur.' },
          { t: 'callout', kind: 'warn', title: 'Dikkat', text: 'En büyük tuzak, çerçeveyi bürokrasiye çevirmektir. Amaç form doldurmak değil, tekrarlayan arızayı yakalamak ve tehlikeli değişikliği frenlemektir. Kayıt işi beş dakikadan uzun sürüyorsa sistem yanlış kurulmuştur; insanlar kaydı bırakır ve eski karmaşaya dönülür.' },
        ],
      },
      {
        slug: 'vaka',
        title: 'Gerçek Vaka & Fayda',
        blocks: [
          { t: 'callout', kind: 'case', title: 'Vaka: Devlet projesinden dünya standardına', text: 'ITIL, 1980\'lerin sonunda İngiliz devletinin merkezi bilgisayar kurumu (CCTA) tarafından derlendi: devlet daireleri BT hizmetlerini birbirinden çok farklı ve verimsiz yönetiyordu, ortak bir uygulama kitaplığı gerekiyordu. Kitaplık zamanla özel sektöre yayıldı ve bankalardan havayollarına, telekom şirketlerinden hastanelere kadar dünyanın büyük kurumlarında BT hizmet yönetiminin fiili standardı haline geldi; bugün hizmet masası, olay ve değişiklik yönetimi kavramları büyük ölçüde ITIL\'den gelir. COBIT ise 1996\'da denetim kökenli ISACA tarafından yayımlandı ve özellikle 2000\'lerin başındaki büyük şirket skandalları sonrasında, yönetim kurullarının BT üzerindeki denetim sorumluluğu arttıkça yaygınlaştı; bankacılık ve finans gibi sıkı denetlenen sektörlerde BT denetimlerinin ortak çerçevesi oldu. İki çerçevenin onlarca yıldır birlikte yaşaması, iki sorunun da kalıcı olduğunu gösterir: hizmet nasıl düzgün sunulur ve bu hizmet işe gerçekten yarıyor mu?' },
          { t: 'h2', text: 'Gerçek fayda' },
          { t: 'ul', items: [
            'Kişiye bağımlılığı kırar: "bilen tek kişi" gittiğinde iş durmaz, çünkü arıza ve değişiklik bilgisi kişinin kafasında değil kayıttadır.',
            'Tekrarlayan arızayı yakalar: kayıt tutulunca aynı sorunun kaçıncı kez geldiği görünür ve emek geçici yamaya değil kalıcı çözüme gider.',
            'BT harcamasını hesap verir hale getirir: her sistemin hangi iş sonucuna hizmet ettiği sorulunca, gereksiz masraf ve ölçülmeyen yatırım ortaya çıkar.',
          ]},
        ],
      },
    ],
  },
  {
    slug: 'dongusel-ekonomi',
    section: 'strateji-rekabet',
    title: 'Döngüsel Ekonomi',
    question: 'Sattığım ürün çöpe gittiğinde benim için bitiyor mu, yoksa yeni bir işin başlangıcı mı?',
    summary: '"Al, yap, at" düz çizgisi yerine "onar, yeniden kullan, geri dönüştür" döngüsünü kuran iş modeli; atığı masraf olmaktan çıkarıp hammaddeye ve yeni gelire çevirir.',
    tags: ['döngüsel ekonomi', 'sürdürülebilirlik', 'iş modeli'],
    areas: ['Üretim ve imalat', 'Perakende', 'Tamir ve ikinci el', 'Ürün tasarımı'],
    viz: {
      kind: 'process',
      steps: [
        { title: 'Tasarla', text: 'Ürün baştan uzun ömür, tamir ve söküm için tasarlanır' },
        { title: 'Üret ve kullan', text: 'Ürün satılır ya da hizmet olarak kiralanır' },
        { title: 'Onar', text: 'Bozulan atılmaz; tamir edilip kullanıma döner' },
        { title: 'Yeniden kullan', text: 'İhtiyaç bitince ürün ikinci ele, başka kullanıcıya geçer' },
        { title: 'Geri dönüştür', text: 'Ömrü bitince malzeme ayrıştırılır, hammadde olur' },
      ],
      loop: true,
      note: 'Düz çizgi çöplükte biter; döngü, malzemeyi tekrar başa taşır.',
    },
    pages: [
      {
        slug: 'kavram',
        title: 'Kavram',
        blocks: [
          { t: 'callout', kind: 'simple', title: 'Bir cümlede', text: 'Klasik ekonomi düz bir çizgidir: hammaddeyi al, ürünü yap, kullan, çöpe at; döngüsel ekonomi bu çizgiyi halkaya çevirir: onar, yeniden kullan, geri dönüştür, böylece çöp masraf olmaktan çıkıp hammaddeye ve yeni gelire dönüşür.' },
          { t: 'callout', kind: 'ornek', title: 'Şantiyeden örnek', text: 'Müteahhit Cevdet Bey her yıkımda konteyner konteyner moloz için para ödüyor. Bir gün yıkımdan çıkan demir kapıları, sağlam tuğlaları ve eski ahşap kirişleri ayrıca istifletmeye başlıyor. Demir hurdacıya satılıyor, tuğlalar bahçe duvarı işlerinde tekrar kullanılıyor, eski kirişler mobilyacıya gidiyor. Bir bakıyor ki hem moloz atım masrafı yarıya inmiş hem de "atık" dediği şey ayda hatırı sayılır para getiriyor. Aynı mantık esnaf için de geçerlidir: telefoncu Ayhan bozuk telefonları hurda diye almaz, tamir edip garantili ikinci el olarak satar; müşterinin çöpü onun ana gelir kalemlerinden biridir.' },
          { t: 'p', text: 'Döngüsel ekonomi, kaynakların sınırlı, atığın ise pahalı olduğu gerçeğinden doğdu. Klasik "lineer" (düz çizgi) modelde şirket, hammadde fiyatına ve atık maliyetine mahkumdur. Döngüsel modelde ise ürünün ömrü uzadıkça ve malzeme sistem içinde döndükçe hem hammadde ihtiyacı hem atık masrafı düşer; üstelik tamir, ikinci el ve geri dönüşüm başlı başına gelir kapısı olur.' },
          { t: 'h2', text: 'Döngünün halkaları' },
          { t: 'table', head: ['Halka', 'Ne demek?', 'İşletmeye getirisi'], rows: [
            ['Uzun ömür için tasarım', 'Ürün kolay bozulmasın, kolay tamir edilsin diye baştan tasarlanır', 'Marka güveni, iade ve şikayet azalır'],
            ['Onarım', 'Bozulan ürün atılmaz, tamir edilir', 'Tamir hizmeti geliri, müşteri bağlılığı'],
            ['Yeniden kullanım', 'Ürün ikinci ele, başka kullanıcıya geçer', 'İkinci el pazarından pay, yeni müşteri'],
            ['Geri dönüşüm', 'Ömrü biten ürün malzemesine ayrıştırılır', 'Ucuz hammadde, atık masrafından kurtuluş'],
            ['Üründen hizmete', 'Ürün satılmaz, kullanımı kiralanır', 'Düzenli gelir; ürün firmada kaldığı için uzun ömür firmaya kazandırır'],
          ]},
          { t: 'p', text: 'En ilginç halka sonuncusudur: ürünü satmak yerine hizmetini satmak. Ürün müşteriye satıldığında, dayanıksız ürün üreticiye yarar (yenisi satılır). Ürün üreticinin malı olarak kalıp hizmeti kiralandığında ise hesap tersine döner: ürün ne kadar uzun dayanırsa üretici o kadar kazanır. Yani iş modeli değişince, israf üretmek firmanın kendi cebine zarar vermeye başlar; çevreye iyi olanla firmaya karlı olan aynı yöne döner.' },
        ],
      },
      {
        slug: 'uygulama',
        title: 'Nasıl Uygulanır',
        blocks: [
          { t: 'steps', items: [
            { title: 'Atığını dök ve fiyatla', text: 'Bir ay boyunca işletmenden çıkan her atığı listele: fire, iade, ambalaj, eski ürün, moloz. Her kalemin yanına iki rakam yaz: atmak sana kaça mal oluyor ve bu malzeme birine kaça satılabilir? Çoğu işletme bu listeyi ilk kez yaptığında şaşırır.' },
            { title: 'En kolay halkadan başla', text: 'Bir anda bütün döngüyü kurmaya çalışma. En kolay para eden halkayı seç: hurdayı satmak, ambalajı iade almak, bozuk ürünü tamir edip ikinci el satmak. Küçük ve karlı bir başlangıç, döngünün gerisine kapı açar.' },
            { title: 'Ürünü döngüye göre gözden geçir', text: 'Kendi ürettiğin ya da sattığın ürüne sor: kolay tamir edilebiliyor mu, parçaları ayrılabiliyor mu, malzemesi geri dönüşebiliyor mu? Vidalı olan yapıştırılmış olandan, tek malzeme karışık malzemeden daha döngüseldir. Küçük tasarım kararları, yıllar sonra atık faturasını belirler.' },
            { title: 'Müşteriyi döngüye ortak et', text: 'Eskisini getirene indirim, ambalaj iadesine depozito, tamir garantisi gibi araçlarla müşterinin elindeki eski ürünü geri çağır. Geri gelen ürün senin hammadden, tamir tezgahının işi ve ikinci el rafının malıdır.' },
          ]},
          { t: 'callout', kind: 'tip', title: 'İpucu', text: 'Döngüsel düşünmenin en basit sorusu şudur: "Bu, çöp mü yoksa yanlış yerde duran hammadde mi?" Senin atığın çoğu zaman başka bir işletmenin girdisidir; kendi döngünü kuramadığın malzeme için, onu girdi olarak kullanan birini bul ve anlaş.' },
          { t: 'callout', kind: 'warn', title: 'Dikkat', text: 'Döngüsellik vitrin süsü yapılırsa geri teper: ürününü "geri dönüşümlü" diye pazarlayıp gerçekte döngüyü kurmayan firmalar, bugün "yeşil aldatma" (greenwashing) suçlamasıyla itibar kaybediyor. Döngüyü önce gerçekten kur, sonra anlat; tersini yapma. Ayrıca toplama ve ayrıştırma maliyetini baştan hesapla: geri kazanım bedava değildir, hesabı tutmayan döngü kendini döndüremez.' },
        ],
      },
      {
        slug: 'vaka',
        title: 'Gerçek Vaka & Fayda',
        blocks: [
          { t: 'callout', kind: 'case', title: 'Vaka: Patagonia Worn Wear ve Philips ışık hizmeti', text: 'Outdoor giyim markası Patagonia, "Worn Wear" programıyla döngüyü satış modelinin ortasına koydu: müşterilerin eskiyen Patagonia ürünleri tamir ediliyor, geri alınıp yenilenerek ikinci el olarak satılıyor ve marka müşterilerine açıkça "yenisini almadan önce eskisini onar" diyor; şirket 2011\'de ünlü "Bu ceketi satın almayın" ilanıyla bu duruşunu ilan etti ve tamir atölyeleri ile ikinci el mağazacılığı markanın hem gelir kalemi hem sadakat motoru oldu. İkinci örnek üründen hizmete geçiştir: Philips, Amsterdam Schiphol Havalimanı ile "aydınlatma satmak" yerine "ışık hizmeti satmak" üzerine anlaştı; armatürler Philips\'in malı olarak kaldı, havalimanı kullandığı ışığın bedelini ödedi, bakım ve yenileme Philips\'te kaldı. Ürün şirkete ait olunca uzun ömürlü ve tamir edilebilir armatür üretmek Philips\'in kendi çıkarı haline geldi. İki vaka da aynı dersi verir: döngü, iyi niyet kampanyası değil, para kazandıran bir iş modeli olarak kurulduğunda kalıcı olur.' },
          { t: 'h2', text: 'Gerçek fayda' },
          { t: 'ul', items: [
            'Atık masrafını gelire çevirir: atmak için para ödenen malzeme, satılan hurdaya, tamir gelirine ve ikinci el kazancına dönüşür.',
            'Hammadde bağımlılığını azaltır: geri dönen malzeme, fiyatı sürekli oynayan yeni hammaddenin yerini kısmen alır ve maliyeti dengeler.',
            'Müşteriyi tekrar kapıdan sokar: tamir, geri alım ve depozito, müşteriyle teması tek seferlik satıştan ömür boyu ilişkiye çevirir.',
          ]},
        ],
      },
    ],
  },
  {
    slug: 'surdurulebilirlik-stratejisi',
    section: 'strateji-rekabet',
    title: 'Sürdürülebilirlik Stratejisi',
    question: 'Bu iş on yıl sonra da yapılabilir olacak mı; çevreye, topluma ve kasaya aynı anda bakıyor muyum?',
    summary: 'Çevre, toplum ve kar üçlüsünü aynı masaya oturtan strateji: yeşil adımları vicdan işi olmaktan çıkarıp maliyet düşüren, risk azaltan ve müşteri kazandıran iş kararlarına bağlar.',
    tags: ['sürdürülebilirlik', 'yeşil strateji', 'uzun vade'],
    areas: ['İşletme stratejisi', 'Üretim ve tedarik zinciri', 'Marka ve itibar', 'Aile şirketi devri'],
    viz: {
      kind: 'venn3',
      labels: ['Çevre', 'Toplum', 'Kar'],
      pairs: ['Yaşanabilir ama parasız', 'Adil ama kaynağı tüketen', 'Karlı ama toplumu yoran'],
      center: 'Sürdürülebilir iş',
      note: 'Üç halkanın kesişimi hedeftir: tek halkaya yaslanan iş, uzun vadede diğer ikisine takılır.',
    },
    pages: [
      {
        slug: 'kavram',
        title: 'Kavram',
        blocks: [
          { t: 'callout', kind: 'simple', title: 'Bir cümlede', text: 'Sürdürülebilirlik, "bu işi torunum da yapabilecek mi?" sorusudur: kaynağı tüketen, çalışanı yıpratan veya çevreyi kirleten bir iş bugün kar etse bile kendi dalını kesmektedir; strateji, çevreye ve topluma iyi olanı kasaya da iyi olacak şekilde kurmaktır.' },
          { t: 'callout', kind: 'ornek', title: 'Esnaftan örnek', text: 'Balıkçı Rıza ile oğlunun hikayesi bunun en eski halidir: Rıza küçük balığı da ağdan ayırmadan satarsa bu sezon daha çok kazanır ama üç yıl sonra o koyda balık kalmaz. Küçüğü denize bırakmak kısa vadede fedakarlık, uzun vadede işin ta kendisidir. Aynı hesap atölyede de geçerli: mobilyacı Selim boyahaneden çıkan tineri lavaboya döküyordu; hem komşu şikayetçi hem ceza riski var. Kapalı devre solvent geri kazanım kabı alıyor; tiner tekrar kullanıldığı için yıllık tiner masrafı düşüyor, koku bitiyor, şikayet kalkıyor. Selim bunu "çevrecilik" diye değil "hesap" diye yaptı; sürdürülebilirlik stratejisinin özü tam olarak budur: doğru kurulduğunda vicdan ile kasa aynı yöne bakar.' },
          { t: 'p', text: 'Sürdürülebilirlik kelimesi çoğu işletmede afiş süsü sanılır; oysa strateji olarak sürdürülebilirlik gayet somuttur: işin dayandığı kaynakların (hammadde, enerji, su, insan, itibar) gelecekte de var olmasını güvence altına almak. Yaygın çerçevesi "üçlü bilanço"dur (triple bottom line): işletme yalnız kar hanesine değil, çevre hanesine ve toplum hanesine de bakar. Üçü birbirinin alternatifi değildir; uzun vadede birbirinin şartıdır.' },
          { t: 'h2', text: 'Üç halka, üç soru' },
          { t: 'table', head: ['Halka', 'Soru', 'İşletmedeki karşılığı'], rows: [
            ['Çevre', 'Kaynağı tüketmeden ve kirletmeden çalışıyor muyum?', 'Enerji, su, atık, malzeme verimliliği'],
            ['Toplum', 'Çalışanıma, müşterime ve mahalleme adil miyim?', 'İş güvenliği, adil ücret, dürüst ürün'],
            ['Kar', 'Bu iş kendini finanse edebiliyor mu?', 'Karlılık, nakit, yatırım gücü'],
          ]},
          { t: 'p', text: 'Stratejinin püf noktası, yeşil adımı iş değerine bağlamaktır. "Çevreye iyilik yapalım" diye başlayan projeler ilk kriz döneminde kesilir; "elektrik faturasını yüzde otuz düşürelim, atık cezası riskini sıfırlayalım, çevreye duyarlı müşteri kitlesini kazanalım" diye kurulan projeler ise bütçede kalıcı olur. İyi sürdürülebilirlik stratejisi, her yeşil adımın karşısına bir iş gerekçesi yazar: maliyet düşer, risk azalır, marka güçlenir veya yeni pazar açılır.' },
          { t: 'p', text: 'Bir de zorlayıcı taraf var: kurallar ve müşteri beklentisi tek yönde sertleşiyor. Büyük alıcılar tedarikçilerinden çevre ve çalışma standardı istiyor, bankalar kredi verirken sormaya başlıyor, gençler çalışacakları şirketi buna göre seçiyor. Yani sürdürülebilirlik giderek "isteyene bonus" olmaktan çıkıp "girişin bilet parası" haline geliyor.' },
        ],
      },
      {
        slug: 'uygulama',
        title: 'Nasıl Uygulanır',
        blocks: [
          { t: 'steps', items: [
            { title: 'İşinin dayandığı kaynakları listele', text: 'Bu iş neyle ayakta duruyor? Hammadde, enerji, su, ustalar, müşteri güveni, mahalleyle ilişki. Her kaynağın karşısına yaz: on yıl sonra bu kaynak bugünkü kadar bol ve ucuz olacak mı? "Hayır" cevabı çıkan her satır, stratejinin ilk maddesidir.' },
            { title: 'En büyük israfından başla', text: 'Sürdürülebilirlik çoğu zaman israf avıyla başlar: en yüksek fatura hangisi (elektrik, su, yakıt, fire)? Oraya odaklan; verimlilik yatırımı hem çevre hanesine hem kar hanesine aynı anda yazar. İlk kazanç, sonraki adımların bütçesini yaratır.' },
            { title: 'Her yeşil adıma iş gerekçesi yaz', text: 'Yapacağın her adımın karşısına dört şıktan en az birini koy: maliyeti düşürür / riski azaltır / markayı güçlendirir / yeni müşteri açar. Hiçbirine bağlanamayan adımı erteleyebilirsin; bağlananları normal yatırım kararı gibi hesapla ve sırala.' },
            { title: 'Ölç, hedef koy, dürüstçe anlat', text: 'Enerji, su, atık ve fire için bugünkü rakamı yaz, yıllık hedef koy, her yıl karşılaştır. Müşteriye ve çalışana yalnız yaptığını anlat, yapmadığını yapmış gibi gösterme; abartılmış yeşil söylem, hiç konuşmamaktan daha çok zarar verir.' },
          ]},
          { t: 'callout', kind: 'tip', title: 'İpucu', text: 'Kendine şu iki soruyu düzenli sor: "Bugün bedava sandığım neyin yarın parasını öderim?" (atık, karbon, su, itibar) ve "Rakiplerim yapamazken ben neyi temiz yapabilirim?" İlk soru riskini, ikinci soru fırsatını gösterir; strateji ikisinin toplamıdır.' },
          { t: 'callout', kind: 'warn', title: 'Dikkat', text: 'İki uçta da tuzak var. Birinci uç, sürdürülebilirliği tamamen yok saymaktır: kural sertleşince veya büyük müşteri şart koşunca hazırlıksız yakalanırsın. İkinci uç, işi vitrine çevirmektir: broşürde yeşil, sahada eski usul çalışan firma yakalandığında güveni tek seferde kaybeder. En sağlam yol, az ama gerçek adım atıp ölçerek büyütmektir.' },
        ],
      },
      {
        slug: 'vaka',
        title: 'Gerçek Vaka & Fayda',
        blocks: [
          { t: 'callout', kind: 'case', title: 'Vaka: Unilever Sürdürülebilir Yaşam Planı', text: 'Gıda ve temizlik devi Unilever, 2010 yılında CEO Paul Polman önderliğinde "Sustainable Living Plan" (Sürdürülebilir Yaşam Planı) ilan etti: şirket işini büyütürken çevresel ayak izini küçültmeyi ve toplumsal etkisini artırmayı, üstelik bunu bağış programı olarak değil ana iş stratejisi olarak yapmayı taahhüt etti. Plan somut hedeflere bağlandı: üretimde su, atık ve enerji verimliliği, hammaddelerin sürdürülebilir kaynaklardan alınması, milyonlarca insana hijyen ve sağlık alışkanlıkları kazandıran marka programları. On yılın sonunda şirket, fabrikalarındaki verimlilik çalışmalarının yüz milyonlarca avroluk maliyet tasarrufu sağladığını ve "sürdürülebilir yaşam" konumlandırmasıyla büyüyen markalarının şirketin büyümesinde önemli pay taşıdığını raporladı. Plan eleştirilerden de payını aldı (bazı hedeflere ulaşılamadı) ama asıl mirası şudur: dev bir şirket, sürdürülebilirliğin halkla ilişkiler değil strateji olarak yönetilebileceğini ve kasayla vicdanın aynı planda buluşabileceğini herkesin gözü önünde denedi.' },
          { t: 'h2', text: 'Gerçek fayda' },
          { t: 'ul', items: [
            'Faturayı düşürür: enerji, su ve fire avı, çevre hanesine yazarken kar hanesine de yazar; ilk kazançlar genelde en hızlı görünen kazançlardır.',
            'Riski erken gösterir: sertleşen kurallara, seçici büyük alıcılara ve kaynak darlığına hazırlıksız yakalanmayı önler.',
            'Güven biriktirir: müşteri, çalışan ve mahalle nezdinde biriken itibar, kriz gününde paranın satın alamayacağı bir tampon olur.',
          ]},
        ],
      },
    ],
  },
  {
    slug: 'musteri-memnuniyeti-olcumu',
    section: 'pazarlama-musteri',
    title: 'Müşteri Memnuniyeti Ölçümü',
    question: 'Müşterim memnun mu, yoksa sessizce rakibe mi gidiyor?',
    summary: 'Memnuniyeti tahminle değil sinyalle izleme disiplini: şikayetler, kısa anketler, tekrar alışveriş ve tavsiye niyeti (NPS mantığı) birlikte okunur; sessiz müşteri memnun sanılmaz.',
    tags: ['müşteri memnuniyeti', 'NPS', 'geri bildirim', 'sadakat'],
    areas: ['Perakende ve esnaf', 'Hizmet sektörü', 'E-ticaret', 'Satış sonrası servis'],
    viz: {
      kind: 'bars',
      categories: ['Memnun (tavsiye eder)', 'Nötr (kararsız)', 'Memnuniyetsiz (vazgeçirir)'],
      series: [
        { name: 'Müşteri dağılımı (100 müşteride)', values: [55, 30, 15] },
      ],
      yLabel: 'Müşteri sayısı',
      note: 'NPS mantığı: memnun yüzdesinden memnuniyetsiz yüzdesi çıkarılır (örnekte 55-15=40). Nötrler sayılmaz ama rakibe en kolay onlar gider.',
    },
    pages: [
      {
        slug: 'kavram',
        title: 'Kavram',
        blocks: [
          { t: 'callout', kind: 'simple', title: 'Bir cümlede', text: 'Müşterinin memnun olup olmadığını yüzünden tahmin etme; şikayetini kaydet, arada tek soruluk anket sor, tekrar gelip gelmediğini say ve unutma: giden müşterilerin çoğu şikayet etmez, sadece sessizce bir daha gelmez.' },
          { t: 'callout', kind: 'ornek', title: 'Esnaftan örnek', text: 'Lokantacı Hamdi "benim müşterim memnun, kimse şikayet etmiyor" diyor. Kasadaki çırak basit bir sayım yapıyor: bir ay boyunca öğlen gelen müşterilerin kaçının tanıdık yüz olduğunu işaretliyor. Sonuç şaşırtıcı: müşterilerin çoğu bir kez gelip bir daha görünmeyenler. Kimse şikayet etmiyor çünkü kimse zahmet etmiyor; memnun kalmayan sessizce karşı sokaktaki lokantaya geçiyor. Hamdi iki küçük şey yapıyor: hesap fişinin yanına "bizi bir arkadaşına tavsiye eder miydin?" yazan minik bir kart koyuyor ve her şikayeti (soğuk çorba, geç servis) bir deftere yazdırıyor. İki ay sonra defter konuşuyor: şikayetlerin çoğu tek konuda, öğlen yoğunluğunda geciken serviste toplanıyor. Öğlene bir garson ekleniyor; tanıdık yüz oranı gözle görülür artıyor.' },
          { t: 'p', text: 'Müşteri memnuniyeti ölçümünün temel gerçeği şudur: memnuniyetsiz müşterilerin yalnızca küçük bir kısmı şikayet eder; büyük kısmı hiçbir şey söylemeden gider ve çevresine anlatır. Bu yüzden "şikayet yok, demek ki herkes memnun" çıkarımı, ölçüm disiplinlerinin en çok uyardığı yanılgıdır. Şikayet aslında bir hediyedir: şikayet eden müşteri, sana düzelme şansı veren müşteridir.' },
          { t: 'h2', text: 'Dört sinyal birlikte okunur' },
          { t: 'table', head: ['Sinyal', 'Ne söyler?', 'Nasıl toplanır?'], rows: [
            ['Şikayetler', 'Neyin bozuk olduğunu adresli söyler', 'Şikayet defteri veya kaydı; her şikayet yazılır'],
            ['Kısa anket', 'Genel havayı sayıya döker', 'Tek-iki soru: memnuniyet puanı, tavsiye niyeti'],
            ['Tekrar alışveriş', 'Sözü değil davranışı ölçer', 'Tanıdık müşteri oranı, tekrar sipariş sayısı'],
            ['Tavsiye ve yorum', 'Müşterinin çevresine ne anlattığını gösterir', 'İnternet yorumları, "bizi nereden duydunuz?" sorusu'],
          ]},
          { t: 'p', text: 'Tavsiye niyeti sorusu, dünyada NPS (Net Promoter Score, Net Tavsiye Skoru) adıyla standartlaşmıştır. Mantığı çok sadedir: müşteriye tek soru sorulur, "bizi bir yakınına tavsiye eder misin?" (0-10 puan). Yüksek puan verenler "tavsiyeci", orta puanlılar "nötr", düşük puanlılar "vazgeçirici" sayılır; skor, tavsiyeci yüzdesinden vazgeçirici yüzdesi çıkarılarak bulunur. Sorunun gücü, geçmişi değil geleceği yoklamasındadır: tavsiye etmek, müşterinin kendi itibarını senin işine ortak etmesidir ve bunu ancak gerçekten memnun olan yapar.' },
          { t: 'p', text: 'Son ilke: sayı tek başına yetmez, yanına sebep gerekir. Puanın yanına tek bir açık soru eklenir: "neden bu puanı verdiniz?" Skor sana durumu, sebep cümleleri ise ne yapman gerektiğini söyler.' },
        ],
      },
      {
        slug: 'uygulama',
        title: 'Nasıl Uygulanır',
        blocks: [
          { t: 'steps', items: [
            { title: 'Her şikayeti kayda geçir ve teşekkür et', text: 'Sözlü, yazılı, internetten gelen her şikayeti tek bir yerde topla: konu, tarih, ne yapıldı. Şikayet edene teşekkür et ve sonucu bildir; çünkü şikayetçi, sessizce gidenin aksine sana ikinci bir şans vermektedir.' },
            { title: 'Tek soruluk kısa anket kur', text: 'Uzun anket doldurulmaz. Satış veya hizmet sonrasında tek soru sor: "bizi tavsiye eder misin?" (0-10) ve altına "neden?" için bir satır bırak. Fiş yanında kart, mesaj veya kasada tek soru; yöntem basit, soru hep aynı kalsın ki aylar karşılaştırılabilsin.' },
            { title: 'Tekrar gelen müşteriyi say', text: 'Söz yanıltır, davranış yanıltmaz. Tanıdık müşteri oranını, tekrar sipariş sayısını veya aynı müşterinin yıl içindeki alışveriş sayısını izle. Bu sayı düşüyorsa, anketler ne derse desin bir sorun var demektir.' },
            { title: 'Ayda bir oku, tek düzeltme seç', text: 'Ay sonunda şikayet defterini, anket puanlarını ve tekrar oranını yan yana koy. En çok tekrarlanan tek sorunu seç ve o ay sadece onu düzelt. Ertesi ay sayılara yeniden bak: düzelme görünüyorsa sıradaki soruna geç. Ölçümün amacı rapor değil, her ay bir düzeltmedir.' },
          ]},
          { t: 'callout', kind: 'tip', title: 'İpucu', text: 'En değerli görüşme, kaybettiğin müşteriyle yapılandır. Uzun süredir görünmeyen birkaç müşteriyi ara ve tek soru sor: "sizi kaçıran ne oldu?" Bu görüşmeler can sıkar ama hiçbir anketin göstermediği gerçeği gösterir; kaybedilen müşteri, işletmenin en dürüst danışmanıdır.' },
          { t: 'callout', kind: 'warn', title: 'Dikkat', text: 'Ölçümü nota çevirip çalışanı puanla cezalandırırsan, ölçüm bozulur: garson müşteriye "bana 10 ver" diye yalvarmaya, şubeler kötü anketi saklamaya başlar. Puan yükselir, gerçek memnuniyet düşer. Ölçümün amacı suçlu bulmak değil, düzeltilecek işi bulmaktır; bunu ekibe açıkça söyle ve puanı asla tek başına prim-ceza aracı yapma.' },
        ],
      },
      {
        slug: 'vaka',
        title: 'Gerçek Vaka & Fayda',
        blocks: [
          { t: 'callout', kind: 'case', title: 'Vaka: Tek sorunun keşfi ve sadakat araştırmaları', text: 'Danışman Frederick Reichheld ve Bain ekibi, 2000\'lerin başında binlerce müşteri anketini gerçek satın alma davranışlarıyla karşılaştırdı ve sonucu 2003\'te Harvard Business Review\'da "The One Number You Need to Grow" (Büyümek İçin İhtiyacın Olan Tek Sayı) başlığıyla yayımladı: çoğu sektörde, gelecekteki tekrar alışverişi ve büyümeyi en iyi yordayan soru "bu şirketi bir arkadaşına tavsiye eder misin?" sorusuydu. Böylece NPS doğdu ve dünyanın en yaygın memnuniyet ölçüsü haline geldi. Reichheld\'in daha önceki sadakat araştırmaları da alanın temel bulgularını koymuştu: yeni müşteri kazanmak, eldekini tutmaktan kat kat pahalıdır ve müşteri tutma oranındaki küçük artışlar bile karlılıkta büyük sıçramalar yaratır; çünkü sadık müşteri zamanla daha çok alır, daha az maliyet çıkarır ve çevresine tavsiye eder. Aynı dönemin şikayet araştırmaları ise madalyonun öbür yüzünü gösterdi: memnuniyetsiz müşterilerin büyük çoğunluğu firmaya hiç şikayet etmeden ayrılır. Bu iki bulgu birlikte, bugünkü ölçüm disiplininin temelidir: sessizliği memnuniyet sanma, sadakati say.' },
          { t: 'h2', text: 'Gerçek fayda' },
          { t: 'ul', items: [
            'Sessiz kaybı görünür yapar: şikayet etmeden giden müşteri, tekrar alışveriş sayımında ve tavsiye skorunda iş işten geçmeden yakalanır.',
            'Emeği doğru soruna yöneltir: dağınık dedikodu yerine sayılmış şikayet ve sebep cümleleri, her ay tek ve doğru düzeltmeyi seçtirir.',
            'En ucuz reklamı çalıştırır: memnuniyeti ölçüp düzelten işletmenin tavsiyecileri çoğalır; ağızdan ağıza tavsiye, parayla alınamayan müşteriyi getirir.',
          ]},
        ],
      },
    ],
  },
  {
    slug: 'inovasyon-stratejileri',
    section: 'yaraticilik-dahi',
    title: 'İnovasyon Stratejileri',
    question: 'Yenilik çabamı bugünkü işi iyileştirmeye mi, yarının işini kurmaya mı harcıyorum?',
    summary: 'Kademeli (adım adım iyileştiren) ve çığır açan (oyunu değiştiren) inovasyonu ayırt edip yenilik emeğini üç katmana dağıtan strateji: çekirdek, komşu ve dönüşümsel.',
    tags: ['inovasyon', 'ar-ge', 'yenilik portföyü'],
    areas: ['Ürün geliştirme', 'İşletme stratejisi', 'Ar-Ge yönetimi', 'Girişimcilik'],
    viz: {
      kind: 'pyramid',
      levels: [
        { name: 'Dönüşümsel: yeni iş, yeni pazar (yaklaşık %10)', value: 10 },
        { name: 'Komşu: mevcut gücü yeni alana taşı (yaklaşık %20)', value: 20 },
        { name: 'Çekirdek: bugünkü işi iyileştir (yaklaşık %70)', value: 70 },
      ],
      note: 'Yaygın 70-20-10 dağılımı bir kanun değil başlangıç noktasıdır; önemli olan üç katmanın da bilerek beslenmesidir.',
    },
    pages: [
      {
        slug: 'kavram',
        title: 'Kavram',
        blocks: [
          { t: 'callout', kind: 'simple', title: 'Bir cümlede', text: 'Yenilik iki türlüdür: kademeli inovasyon bugünkü işi her gün biraz daha iyi yapmaktır, çığır açan inovasyon ise oyunun kendisini değiştirmektir; akıllı strateji, yumurtaların çoğunu bugünkü işe, bir kısmını komşu fırsatlara, küçük ama korunan bir kısmını da çılgın fikirlere koyar.' },
          { t: 'callout', kind: 'ornek', title: 'Esnaftan örnek', text: 'Fırıncı Necmi\'nin üç türlü yenilik yaptığını düşün. Çekirdek: hamur dinlendirme süresiyle oynayıp ekmeği daha kabarık yapıyor, fırın taşını değiştirip yanık oranını düşürüyor; bunlar bugünkü işi iyileştiren kademeli adımlar. Komşu: aynı fırın, aynı ustalar ve aynı müşteri güveniyle yandaki dükkanı açıp poğaça ve simide giriyor; mevcut gücünü bitişik bir alana taşıyor. Dönüşümsel: mahalledeki lokantalara sabah servisiyle taze ekmek dağıtmayı deniyor; bu artık fırıncılık değil, dağıtım işi kurmaktır ve tutmayabilir. Necmi ayda bir gününü ve küçük bir bütçeyi bu üçüncü tür denemelere ayırıyor ama dükkanın asıl mesaisi hep çekirdekte. Batıran fırıncı iki uçtan birine kayandır: ya hiç denemeyen ya da dükkanı ihmal edip her ay yeni bir maceraya atlayan.' },
          { t: 'p', text: 'İnovasyon yazınının temel ayrımı kademeli (incremental) ile çığır açan (radikal / yıkıcı) yenilik arasındadır. Kademeli inovasyon mevcut ürünü, süreci veya hizmeti adım adım iyileştirir: daha ucuz, daha hızlı, daha kaliteli. Çığır açan inovasyon ise yeni bir pazar veya yeni bir iş biçimi yaratır: buzdolabının buzhaneyi, dijital fotoğrafın filmi yerinden ettiği gibi. İkisi farklı yönetim ister: kademeli yenilik disiplin ve ölçümle, çığır açan yenilik ise tolerans ve sabırla beslenir; birine iyi gelen yönetim tarzı ötekini öldürür.' },
          { t: 'h2', text: 'Üç katmanlı yenilik portföyü' },
          { t: 'table', head: ['Katman', 'Soru', 'Riski ve getirisi', 'Fırıncı örneği'], rows: [
            ['Çekirdek', 'Bugünkü işi bugünkü müşteri için nasıl iyileştiririm?', 'Düşük risk, hızlı ve küçük getiri', 'Daha kabarık ekmek, daha az yanık'],
            ['Komşu', 'Mevcut gücümü hangi bitişik ürüne veya müşteriye taşırım?', 'Orta risk, orta vadeli getiri', 'Poğaça ve simide girmek'],
            ['Dönüşümsel', 'Henüz var olmayan hangi işi kurabilirim?', 'Yüksek risk, geç ama büyük getiri ihtimali', 'Lokantalara ekmek dağıtım hattı'],
          ]},
          { t: 'p', text: 'Bu üç katman fikrini strateji yazınında Bansi Nagji ve Geoff Tuff\'un "inovasyon emeli matrisi" (innovation ambition matrix) meşhur etti; araştırmaları, dengeli şirketlerde yaygın bir dağılım gözledi: kaynağın yaklaşık yüzde 70\'i çekirdeğe, yüzde 20\'si komşuya, yüzde 10\'u dönüşümsele. İlginç bulgu şuydu: uzun vadeli getirinin dağılımı bunun neredeyse tersidir; küçük dönüşümsel pay, yıllar içinde getirinin büyük kısmını üretebilir. Ders şu değildir: "her şeyi çılgın fikre yatır." Ders şudur: küçük dönüşümsel payı hiç ihmal etme, çünkü bugünkü çekirdek işin, bir zamanlar birinin dönüşümsel bahsiydi.' },
        ],
      },
      {
        slug: 'uygulama',
        title: 'Nasıl Uygulanır',
        blocks: [
          { t: 'steps', items: [
            { title: 'Mevcut yenilik çabanı üç katmana ayır', text: 'Son bir yılda yaptığın ve yapmakta olduğun bütün yenilik işlerini listele ve her birini işaretle: çekirdek mi, komşu mu, dönüşümsel mi? Çoğu işletme bu envanteri çıkarınca aynı şeyi görür: her şey çekirdekte, gelecek katmanları bomboş.' },
            { title: 'Her katmana bilinçli pay ayır', text: '70-20-10 dağılımını başlangıç noktası al ve kendi işine göre ayarla: hızlı değişen sektörde dönüşümsel pay büyür, istikrarlı sektörde küçülür. Önemli olan oran değil, kararın bilinçli olmasıdır: dönüşümsel katman, "vakit kalırsa" diye değil, ayrılmış zaman ve küçük ama korunan bir bütçeyle beslenir.' },
            { title: 'Katmanları farklı ölçüyle yönet', text: 'Çekirdek yeniliği normal iş gibi ölç: maliyet düştü mü, kalite arttı mı? Dönüşümsel denemeyi aynı cetvelle ölçme; ondan ilk yıl kar değil, öğrenme beklenir. Doğru soruları sor: ne öğrendik, hangi varsayım doğru veya yanlış çıktı, devam mı, dönüş mü? Aynı cetvel iki katmana birden uygulanırsa dönüşümsel her zaman kaybeder ve ölür.' },
            { title: 'Öldürmeyi ve büyütmeyi tarihe bağla', text: 'Her deneme için baştan karar noktası koy: "üç ay sonra şu işaret görünmezse kapatırız, görünürse bütçeyi artırırız." Kapatılan deneme başarısızlık değil, ucuz alınmış bilgidir; utanç sayılırsa kimse denemez, sonsuza dek sürdürülürse kaynak dolabı çürür.' },
          ]},
          { t: 'callout', kind: 'tip', title: 'İpucu', text: 'Dönüşümsel fikirlerin en verimli kaynağı, sahadaki insanların "keşke" cümleleridir: müşterinin "keşke şu da olsa" dediği, ustanın "biz bunu şöyle de yapabiliriz aslında" dediği anlar. Bu cümleleri toplayacağın basit bir yer aç (defter, kutu, mesaj grubu) ve ayda bir hepsini birlikte oku; çığır açan fikir çoğu zaman toplantı odasında değil, tezgahın başında doğar.' },
          { t: 'callout', kind: 'warn', title: 'Dikkat', text: 'İki ölümcül uç vardır. Birincisi "hep çekirdek" tuzağı: bugünkü işi kusursuzlaştırırken pazarın kendisi değişir ve en verimli olduğun gün, modası geçmiş işin en iyisi olursun. İkincisi "hep macera" tuzağı: çekirdek iş ihmal edilir, kasa boşalır ve gelecek projeleri finanse edecek bugün kalmaz. Portföyün varlık sebebi tam olarak bu iki ucu engellemektir.' },
        ],
      },
      {
        slug: 'vaka',
        title: 'Gerçek Vaka & Fayda',
        blocks: [
          { t: 'callout', kind: 'case', title: 'Vaka: 3M, yüzde 15 kuralı ve Post-it', text: 'ABD\'li sanayi şirketi 3M, inovasyonu şansa bırakmayan kültürün klasik örneğidir: şirket on yıllardır teknik çalışanlarına mesailerinin yaklaşık yüzde 15\'ini kendi seçtikleri projelere harcama serbestliği tanır. Bu kuralın en ünlü meyvesi Post-it\'tir ve hikayesi ders kitabı gibidir: 1968\'de 3M araştırmacısı Spencer Silver güçlü bir yapıştırıcı geliştirmeye çalışırken tam tersini buldu; zayıf yapışan, iz bırakmadan sökülen bir yapıştırıcı. Klasik bir yönetim bunu başarısızlık sayıp dosyayı kapatırdı; Silver yıllarca şirket içinde buluşunu anlatmaya devam etti. 1974\'te meslektaşı Art Fry, kilise korosunda ilahi kitabından sürekli düşen kağıt ayraçlarına çare ararken Silver\'ın "başarısız" yapıştırıcısını hatırladı: yapışan ama zarar vermeden sökülen not kağıdı fikri doğdu. Ürün 1980\'de piyasaya çıktı ve dünyanın en tanınmış kırtasiye ürünlerinden biri oldu. Vakanın dersi üç katlıdır: kuruma serbest deneme payı koy (yüzde 15), başarısız sonucu çöpe atmadan sakla ve farklı insanların birikimlerinin çarpışmasına izin ver; Post-it, bir kimyagerin "hatası" ile bir koristin derdinin kesişiminde doğdu.' },
          { t: 'h2', text: 'Gerçek fayda' },
          { t: 'ul', items: [
            'Geleceği bugünden finanse eder: küçük ama korunan dönüşümsel pay, bugünkü iş modası geçtiğinde yerine geçecek işi zamanında kurar.',
            'Yenilik çabasını israftan kurtarır: katman ayrımı sayesinde çılgın fikir kar cetveliyle erken öldürülmez, günlük iyileştirme de maceraya kurban gitmez.',
            'Deneme kültürünü kurumsallaştırır: ayrılmış zaman, küçük bütçe ve tarihli karar noktaları, yeniliği kahraman bireylerin şansından çıkarıp sisteme bağlar.',
          ]},
        ],
      },
    ],
  },
]
