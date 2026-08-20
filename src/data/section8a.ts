import type { DecisionModel } from '../types'

export const section8aModels: DecisionModel[] = [
  {
    slug: 'karar-matrisi',
    section: 'karar-verme',
    title: 'Karar Matrisi (Ağırlıklı Puanlama)',
    question: 'Birden çok seçenek ve birden çok kriter varken hangisini seçmeliyim?',
    summary: 'Seçenekleri satırlara, kriterleri sütunlara yazıp her kritere önem ağırlığı vererek puanlayan; duyguyla değil toplam puanla seçtiren sade karar aracı.',
    tags: ['ağırlıklı puanlama', 'kriter', 'seçim'],
    areas: ['Satın alma kararları', 'Personel seçimi', 'Proje önceliklendirme', 'Tedarikçi seçimi'],
    viz: {
      kind: 'table',
      head: ['Kriter (ağırlık)', 'Kamyonet A', 'Kamyonet B', 'Kamyonet C'],
      rows: [
        ['Fiyat (x3)', '4 → 12', '2 → 6', '3 → 9'],
        ['Yakıt tüketimi (x2)', '3 → 6', '5 → 10', '3 → 6'],
        ['Yedek parça kolaylığı (x2)', '5 → 10', '2 → 4', '4 → 8'],
        ['Kasa hacmi (x1)', '3 → 3', '5 → 5', '4 → 4'],
        ['TOPLAM', '31', '25', '27'],
      ],
      accentCol: 1,
      note: 'Her kutu: puan (1-5) çarpı ağırlık. En yüksek toplam kazanır: Kamyonet A.',
    },
    pages: [
      {
        slug: 'kavram',
        title: 'Kavram',
        blocks: [
          { t: 'callout', kind: 'simple', title: 'Bir cümlede', text: 'Seçenekleri alt alta, kriterleri yan yana yaz; her kritere "benim için ne kadar önemli?" diye bir ağırlık ver, her seçeneğe her kriterden puan ver, çarp ve topla: en yüksek toplam senin kararındır.' },
          { t: 'callout', kind: 'ornek', title: 'Esnaftan örnek', text: 'Nakliyeci Usta Selim yeni bir kamyonet alacak; elinde üç aday var. Galerici A\'yı övüyor, komşusu B\'yi övüyor, oğlu C\'nin kasasını beğeniyor. Kafası karışınca kağıda dört kriter yazıyor: fiyat, yakıt, yedek parça kolaylığı, kasa hacmi. Sonra kendine soruyor: "Hangisi benim için daha önemli?" Fiyata 3, yakıta 2, yedek parçaya 2, kasaya 1 ağırlık veriyor. Her kamyonete her kriterden 1 ile 5 arası puan verip ağırlıkla çarpıyor. Toplamda A 31, B 25, C 27 çıkıyor. Karar netleşiyor: en gösterişli olan değil, Selim\'in kendi önceliklerine en çok uyan kamyonet kazanıyor.' },
          { t: 'p', text: 'Karar matrisi, karmaşık bir seçimi küçük ve yönetilebilir parçalara böler. Zor olan "hangi kamyonet?" sorusu değildir; zor olan, dört farklı özelliği aynı anda kafada tartmaktır. İnsan zihni aynı anda en fazla iki üç şeyi karşılaştırabilir; matris, bu tartma işini kağıda taşıyarak zihnin yükünü alır.' },
          { t: 'h2', text: 'Matrisin üç yapı taşı' },
          { t: 'table', head: ['Parça', 'Ne demek?', 'Kural'], rows: [
            ['Seçenekler', 'Aralarında seçim yapacağın adaylar', 'Gerçekçi olmayan adayı en baştan çıkar'],
            ['Kriterler', 'Seçimde önem verdiğin özellikler', '3 ile 6 arasında tut; fazlası bulanıklaştırır'],
            ['Ağırlıklar', 'Her kriterin senin için önemi', 'Puanlamadan ÖNCE belirle, sonra değiştirme'],
          ]},
          { t: 'p', text: 'Asıl güç ağırlıklardadır. Ağırlıksız bir puan tablosunda "kasa rengi" ile "fiyat" aynı derecede sayılır; bu da yanlış kazanan çıkarır. Ağırlık, "bu kriter benim hayatımda gerçekte ne kadar yer tutuyor?" sorusunun dürüst cevabıdır.' },
          { t: 'p', text: 'Bir uyarı: matris kararı senin yerine vermez, kararını sana gösterir. Toplam puanlar çıktığında içinden "ama ben B\'yi istiyordum" diye bir ses geliyorsa, bu da değerli bir bilgidir: ya ağırlıkları yanlış verdin ya da yazmadığın gizli bir kriterin var. İkisini de matrise ekleyip yeniden bakabilirsin.' },
        ],
      },
      {
        slug: 'uygulama',
        title: 'Nasıl Uygulanır',
        blocks: [
          { t: 'steps', items: [
            { title: 'Seçenekleri ve kriterleri yaz', text: 'Ciddi adayları satırlara (veya sütunlara) yaz. Sonra "bu seçimde neye bakıyorum?" diye sorup 3-6 kriter listele: fiyat, kalite, hız, güven gibi. Herkesin aklındaki gizli kriteri de masaya çıkar.' },
            { title: 'Her kritere ağırlık ver', text: 'Puanlamaya başlamadan önce her kritere 1-3 veya 1-5 arası önem ağırlığı ver. Kendine sor: "İki kriter çatışırsa hangisinden vazgeçerim?" Vazgeçemediğin kriter en yüksek ağırlığı alır.' },
            { title: 'Her seçeneği her kriterde puanla', text: 'Kutu kutu ilerle: her seçeneğe her kriterden 1-5 arası puan ver. Mümkünse tahmin değil bilgi kullan: fiyatı sor, yakıt tüketimini katalogdan bak, yedek parçayı sanayiden sor.' },
            { title: 'Çarp, topla, sonuca bak ve sağlamasını yap', text: 'Her kutuda puanı ağırlıkla çarp, seçenek başına topla. En yüksek toplam önde demektir. Son adım sağlama: sonuç içine sinmiyorsa hangi ağırlığın veya puanın seni rahatsız ettiğini bul, dürüstçe düzelt ve tekrar topla.' },
          ]},
          { t: 'callout', kind: 'tip', title: 'İpucu', text: 'Bir kriterde "olmazsa olmaz" bir alt sınırın varsa (mesela bütçe tavanı), o kriteri puanlamaya sokma; baraj yap. Barajı geçemeyen aday matrise hiç girmesin. Puanlama, barajı geçenler arasındaki inceliği ölçmek içindir.' },
          { t: 'callout', kind: 'warn', title: 'Dikkat', text: 'En sık hile, gönlündeki adayı kazandırmak için ağırlıkları sonradan oynamaktır. Ağırlıklar puanlardan önce ve gerekçesiyle yazılır; sonra dokunulmaz. Bir de sahte kesinliğe kanma: 31 ile 30 arasındaki fark karar farkı değildir, iki aday başa baş demektir; o zaman yeni bilgi topla.' },
        ],
      },
      {
        slug: 'vaka',
        title: 'Gerçek Vaka & Fayda',
        blocks: [
          { t: 'callout', kind: 'case', title: 'Vaka: Franklin\'in terazisinden bugünün şirketlerine', text: 'Ağırlıklı karşılaştırma fikrinin en ünlü erken örneği Benjamin Franklin\'dir: 1772\'de arkadaşı Joseph Priestley\'e yazdığı mektupta, zor kararlarda kağıdı ikiye bölüp lehte ve aleyhte sebepleri yazdığını, sonra eşit ağırlıktaki sebepleri karşılıklı silerek terazinin hangi yana kaldığına baktığını anlatır; bu yönteme "ahlaki cebir" adını vermişti. Modern karar matrisi bu fikrin tablolaşmış halidir ve bugün kurumsal hayatın standart araçlarından biridir: mühendislikte tasarım alternatifleri Pugh matrisi denen bir karar matrisiyle elenır, kamu ihalelerinde teklifler fiyat ve kalite kriterlerinin ağırlıklı puanıyla sıralanır, insan kaynakları bölümleri adayları önceden ilan edilmiş kriter ağırlıklarıyla puanlar. Yöntemin bu kadar yayılmasının sebebi, karara itiraz edildiğinde ortada savunulabilir bir hesap bırakmasıdır: "içime öyle doğdu" yerine "kriterler, ağırlıklar ve puanlar burada" denebilir.' },
          { t: 'h2', text: 'Gerçek fayda' },
          { t: 'ul', items: [
            'Duyguyu terbiye eder: en gösterişli veya en son görülen seçenek değil, önceliklerine gerçekten uyan seçenek kazanır.',
            'Kararı savunulabilir yapar: ortağa, ekibe veya kendine "neden bu?" sorusunun hesaplı bir cevabı olur.',
            'Gizli kriterleri açığa çıkarır: sonuç içine sinmediğinde, yazmadığın asıl önceliğin ne olduğunu sana gösterir.',
          ]},
        ],
      },
    ],
  },
  {
    slug: 'pazara-giris-stratejileri',
    section: 'strateji-rekabet',
    title: 'Pazara Giriş Stratejileri',
    question: 'Yeni bir pazara hangi kapıdan ve ne kadar riskle girmeliyim?',
    summary: 'Yeni bir pazara girmenin dört ana yolunu (ihracat, ortaklık, franchise, doğrudan yatırım) risk ve kontrol dengesine göre sıralayan strateji merdiveni.',
    tags: ['pazara giriş', 'büyüme', 'franchise', 'ihracat'],
    areas: ['İşletme büyütme', 'İhracata başlama', 'Yeni şehir veya bölgeye açılma', 'Bayilik ve franchise kararları'],
    viz: {
      kind: 'process',
      steps: [
        { title: 'İhracat', text: 'Malı gönder, orada olma: en az risk, en az kontrol' },
        { title: 'Ortaklık / Lisans', text: 'Yerel bir ortakla güç birleştir: riski ve karı paylaş' },
        { title: 'Franchise', text: 'Markanı ve sistemini kirala: hızlı büyü, denetimi elde tut' },
        { title: 'Doğrudan yatırım', text: 'Kendi tesisini kur: en çok risk, en çok kontrol ve kar' },
      ],
      note: 'Merdivende yukarı çıktıkça risk de kontrol de artar; basamak, gücüne ve pazar bilgine göre seçilir.',
    },
    pages: [
      {
        slug: 'kavram',
        title: 'Kavram',
        blocks: [
          { t: 'callout', kind: 'simple', title: 'Bir cümlede', text: 'Yeni bir pazara girmenin tek yolu yoktur; malını uzaktan göndermekten kendi tesisini kurmaya uzanan bir merdiven vardır ve doğru basamak, ne kadar risk taşıyabildiğine ve pazarı ne kadar tanıdığına göre seçilir.' },
          { t: 'callout', kind: 'ornek', title: 'Esnaftan örnek', text: 'Baklavacı Cemil Usta\'nın tatlıları şehirde meşhur; komşu ilden sürekli sipariş geliyor. Aklına hemen "orada şube açayım" geliyor ama bu, merdivenin en üst basamağı: dükkan kirası, usta, personel, hepsi kendi cebinden ve kendi riski. Oysa merdivenin alt basamakları da var. Önce kargoyla satış yapabilir (ihracat gibi: az risk, az kontrol). İşler tutarsa oradaki bir pastaneyle anlaşıp tezgah açabilir (ortaklık: riski paylaşır). Talep iyice büyürse ismini ve tarifini bir işletmeciye kiralayabilir (franchise: para ve emek çoğu işletmecinin, denetim Cemil Usta\'nın). En son, pazarı iyice tanıyınca kendi şubesini açar (doğrudan yatırım). Cemil Usta merdiveni basamak basamak çıkıyor; her basamakta pazarı öğreniyor, riski küçük tutuyor.' },
          { t: 'p', text: 'Pazara giriş stratejileri, yeni bir pazarda yer edinmek için kullanılan yolların tümüdür. Yeni pazar illa yabancı bir ülke olmak zorunda değildir; komşu il, yeni bir müşteri kitlesi veya internet satışı da yeni bir pazardır. Her giriş yolunun bir bedeli ve bir getirisi vardır; strateji, bu ikisini kendi gücünle dengelemektir.' },
          { t: 'h2', text: 'Dört basamağın karşılaştırması' },
          { t: 'table', head: ['Basamak', 'Nasıl çalışır?', 'Risk', 'Kontrol'], rows: [
            ['İhracat', 'Malı gönderirsin, satışı aracı yapar', 'Düşük', 'Düşük'],
            ['Ortaklık / Lisans', 'Yerel ortakla iş kurar veya hak devredersin', 'Orta', 'Orta'],
            ['Franchise', 'Marka ve sistemi işletmeciye kiralarsın', 'Orta', 'Orta-yüksek'],
            ['Doğrudan yatırım', 'Kendi tesisini kurar, kendin işletirsin', 'Yüksek', 'Yüksek'],
          ]},
          { t: 'p', text: 'Merdivenin temel kuralı şudur: risk ile kontrol birlikte artar. İhracatta paran az bağlanır ama malın rafta nasıl durduğunu göremezsin; doğrudan yatırımda her şey senin elindedir ama batarsa kaybın da tamamen senindir. Bu yüzden pazarı az tanıyan işletme alt basamaktan başlar, öğrendikçe yukarı çıkar.' },
          { t: 'p', text: 'Basamak seçimini üç soru belirler: Bu pazarı ne kadar tanıyorum? Kaybetmeyi göze alabileceğim para ne kadar? İşin kalitesini uzaktan koruyabilir miyim? Cevaplar zayıfsa alt basamak, güçlüyse üst basamak mantıklıdır.' },
        ],
      },
      {
        slug: 'uygulama',
        title: 'Nasıl Uygulanır',
        blocks: [
          { t: 'steps', items: [
            { title: 'Pazarı tanı', text: 'Girmek istediğin pazarda kim var, ne kadar alım gücü var, müşteri neye alışkın, kurallar neler? Bunları bilmeden basamak seçilmez. Küçük bir deneme satışı, yüz sayfalık rapordan çok şey öğretir.' },
            { title: 'Kendi gücünü dürüstçe ölç', text: 'Kaybetmeyi göze alabileceğin parayı, ayırabileceğin zamanı ve insanı yaz. Merdivenin üst basamakları para kadar yönetim gücü de ister; şubeyi açmak kolay, uzaktan iyi yönetmek zordur.' },
            { title: 'Basamağı seç ve küçük başla', text: 'Pazar bilgin ve gücün hangi basamağı kaldırıyorsa oradan gir. Emin değilsen bir alt basamaktan başla: önce kargoyla sat, sonra tezgah aç, sonra şube düşün. Her basamak bir sonrakinin okuludur.' },
            { title: 'Ölç, öğren, basamak atla veya geri in', text: 'Satış, maliyet ve müşteri memnuniyetini düzenli ölç. İşler büyüyorsa bir üst basamağa çıkmayı planla; beklediğin gibi gitmiyorsa geri inmek ayıp değil, stratejidir.' },
          ]},
          { t: 'callout', kind: 'tip', title: 'İpucu', text: 'Yerel ortağın veya işletmecinin en değerli katkısı parası değil, pazar bilgisidir: müşterinin damak tadını, mahallenin adetlerini, oranın kurallarını o bilir. Ortak seçerken "ne kadar para koyuyor?" kadar "bu pazarı ne kadar tanıyor?" diye sor.' },
          { t: 'callout', kind: 'warn', title: 'Dikkat', text: 'İki klasik hata vardır. Birincisi, kendi şehrinde işleyen düzenin her yerde aynen işleyeceğini sanmak: her pazarın kendi damak tadı, kendi alışkanlığı vardır. İkincisi, franchise ve ortaklıkta denetimi bırakmaktır: adını taşıyan dükkandaki kötü bir tecrübe, senin markanın hanesine yazılır. Sistemi kiralarsın, itibarı kiralamazsın.' },
        ],
      },
      {
        slug: 'vaka',
        title: 'Gerçek Vaka & Fayda',
        blocks: [
          { t: 'callout', kind: 'case', title: 'Vaka: McDonald\'s franchise merdiveni ve Amazon\'un çok kanallı girişi', text: 'McDonald\'s, uluslararası büyümesini büyük ölçüde franchise basamağıyla kurdu: yurt dışındaki restoranların çoğunu kendisi işletmek yerine, markasını ve işletme sistemini yerel girişimcilere lisansladı. Böylece her ülkeye milyarlarca dolarlık yatırım yapmadan hızla yayıldı; ama sistemi sıkı tuttu ve yerel damak tadına uyum sağladı: Hindistan\'da sığır eti yerine sebzeli ve tavuklu menüler, farklı ülkelerde yerel lezzetler sundu. Sonuç, dünyanın her yerinde aynı standartta ama yerel zevke uyarlanmış bir zincirdir. Amazon ise çok kanallı bir giriş örneğidir: çevrimiçi satışla başladı, sonra Prime aboneliği ve hızlı teslimatla müşteriyi bağladı, zamanla fiziksel mağazalar da ekleyerek müşteriye birden çok kapı açtı. İki örnek aynı dersi verir: pazara giriş tek hamle değil, risk ve kontrolü dengeleyerek basamak basamak ilerleyen bir süreçtir.' },
          { t: 'h2', text: 'Gerçek fayda' },
          { t: 'ul', items: [
            'Riski kademeler: bütün parayı tek hamleye yatırmak yerine, pazarı öğrene öğrene büyümeni sağlar.',
            'Kör cesareti ve kör korkuyu dengeler: "hemen şube açalım" acelesine de "hiç girmeyelim" çekingenliğine de ölçülü bir orta yol sunar.',
            'Geri dönüş yolunu açık tutar: alt basamaktan giren işletme, işler ters gittiğinde küçük kayıpla çekilebilir.',
          ]},
        ],
      },
    ],
  },
  {
    slug: 'stratejik-ittifaklar',
    section: 'strateji-rekabet',
    title: 'Stratejik İttifaklar ve İşbirlikleri',
    question: 'Tek başıma ulaşamayacağım hedefe kiminle güç birleştirerek ulaşabilirim?',
    summary: 'İki veya daha fazla işletmenin bağımsızlıklarını koruyarak kaynak, bilgi ve pazar erişimini birleştirmesi; doğru ortak seçimi ve açık kurallarla yürüyen güç birliği.',
    tags: ['ortaklık', 'işbirliği', 'güç birliği'],
    areas: ['İşletmeler arası ortaklık', 'Tedarikçi ilişkileri', 'Esnaf dayanışması', 'Yeni pazar ve teknolojiye erişim'],
    viz: {
      kind: 'table',
      head: ['İttifak türü', 'Bilinen örnek', 'Ana risk'],
      rows: [
        ['Ortak alım / satın alma gücü', 'Esnaf kooperatifleri', 'Ortak disiplini bozulursa güç dağılır'],
        ['Ağ ittifakı (hizmet paylaşımı)', 'Star Alliance (havayolları)', 'Bir üyenin kötü hizmeti hepsini yorar'],
        ['Sermaye ortaklığı', 'Renault-Nissan', 'Güç dengesi bozulursa ittifak sarsılır'],
        ['Ürün işbirliği', 'Starbucks-Nespresso kapsülleri', 'Marka uyumsuzluğu iki tarafı da yıpratır'],
      ],
      accentCol: 0,
      note: 'Her ittifak türü farklı bir gücü birleştirir; her birinin bedeli, bağımsızlığın bir kısmıdır.',
    },
    pages: [
      {
        slug: 'kavram',
        title: 'Kavram',
        blocks: [
          { t: 'callout', kind: 'simple', title: 'Bir cümlede', text: 'Stratejik ittifak, iki işletmenin evlenmeden el sıkışmasıdır: herkes kendi dükkanının sahibi kalır ama alım gücünü, bilgisini veya müşterisini birleştirerek tek başına ulaşamayacağı bir hedefe birlikte ulaşır.' },
          { t: 'callout', kind: 'ornek', title: 'Esnaftan örnek', text: 'Sanayi sitesindeki üç mobilyacı ayrı ayrı sunta alıyor; azar azar aldıkları için fiyat yüksek, nakliye pahalı. Bir gün çay ocağında oturup hesap yapıyorlar: üçü birlikte sipariş verse toptan fiyatına iner, tek kamyonla taşınır. El sıkışıyorlar ama akıllıca: kim ne kadar alacak, para ne zaman ödenecek, biri sözünden dönerse ne olacak, hepsini bir kağıda yazıyorlar. İlk yıl malzeme maliyeti hepsinde düşüyor. Sonra bir adım daha atıyorlar: birinin büyük fuara katılacak parası yok ama üçü ortak stant açınca oluyor. Üç dükkan da bağımsız; ama alımda ve tanıtımda tek yumruk. İttifak budur: evlilik değil, kurallı el sıkışma.' },
          { t: 'p', text: 'Stratejik ittifak, işletmelerin belirli bir hedef için kaynaklarını birleştirmesidir: ortak alım, ortak satış, bilgi paylaşımı, ortak ürün veya ortak yatırım. Birleşmeden ve satın almadan farkı şudur: taraflar bağımsız kalır. Bu esneklik ittifakın hem gücü hem zayıf noktasıdır; kurmak kolaydır ama tutmak emek ister.' },
          { t: 'h2', text: 'İttifak neyi birleştirir?' },
          { t: 'table', head: ['Birleşen güç', 'Ne kazandırır?', 'Küçük işletme karşılığı'], rows: [
            ['Alım gücü', 'Toptan fiyat, iyi vade', 'Ortak malzeme siparişi'],
            ['Pazar erişimi', 'Birbirinin müşterisine ulaşma', 'Birbirine iş yönlendirme'],
            ['Bilgi ve beceri', 'Bilmediğini ortaktan öğrenme', 'Usta-imalatçı işbirliği'],
            ['Sermaye ve kapasite', 'Tek başına kalkmayacak yükü kaldırma', 'Ortak makine, ortak fuar standı'],
          ]},
          { t: 'p', text: 'İttifakın en kritik kararı ortak seçimidir. İyi ortak, senin zayıf olduğun yerde güçlü olandır; ama sadece güç yetmez, hedeflerin uyuşması ve güven gerekir. Güçlü ama hedefi farklı bir ortak, ittifakı kendi yönüne çeker; güvenilmez bir ortak ise en iyi anlaşmayı bile kağıt yığınına çevirir.' },
          { t: 'p', text: 'İkinci kritik nokta kurallardır. "Aramızda hallederiz" diye başlayan ittifaklar çoğu zaman küslükle biter; çünkü işler iyi giderken sorun çıkmaz, kar veya zarar paylaşılırken çıkar. Kim ne koyuyor, kim ne alıyor, anlaşmazlıkta ne olacak, ayrılık nasıl olacak: bunlar el sıkışırken yazılır, kavga ederken değil.' },
        ],
      },
      {
        slug: 'uygulama',
        title: 'Nasıl Uygulanır',
        blocks: [
          { t: 'steps', items: [
            { title: 'Hedefi ve eksiğini netleştir', text: 'Önce "tek başıma neye ulaşamıyorum?" sorusuna cevap ver: ucuz malzeme mi, yeni müşteri mi, bilgi mi, sermaye mi? Eksiğini bilmeyen, yanlış ortakla el sıkışır.' },
            { title: 'Ortağı üç süzgeçten geçir', text: 'Aday ortağı üç soruyla süz: Benim eksiğimi tamamlıyor mu (güç uyumu)? Aynı şeyi mi istiyoruz (hedef uyumu)? Sözünün arkasında duruyor mu (güven)? Üçünden biri zayıfsa küçük bir işle sına, büyük işe girme.' },
            { title: 'Kuralları baştan yaz', text: 'Katkıları, paylaşımı, karar biçimini, anlaşmazlık çözümünü ve ayrılık şartlarını yazılı hale getir. Yazı, güvensizlik işareti değildir; tam tersine dostluğu para kavgasından korur.' },
            { title: 'Küçük başla, işlet ve düzenli gözden geçir', text: 'İlk işi küçük tut: bir ortak sipariş, bir ortak stant. İşledikçe büyüt. Belirli aralıklarla oturup sor: iki taraf da kazanıyor mu? Tek taraf kazanan ittifak, ölmüş ama gömülmemiş ittifaktır.' },
          ]},
          { t: 'callout', kind: 'tip', title: 'İpucu', text: 'İyi ittifakın ölçüsü şudur: iki taraf da "bu işten ben karlı çıkıyorum" diye düşünmeli. Bu bir çelişki değil, ittifakın ta kendisidir; çünkü taraflar farklı şeylere değer verir. Sen ucuz malzemeye, ortağın garanti müşteriye değer veriyorsa ikiniz de aynı anda kazanabilirsiniz.' },
          { t: 'callout', kind: 'warn', title: 'Dikkat', text: 'İttifak, rakibe her şeyini açmak değildir. Neyi paylaşacağını ve neyi paylaşmayacağını (özel tarifin, müşteri listen, fiyat hesabın) baştan belirle. Bir de bağımlılığa dikkat: bütün işini tek ortağa bağlarsan ittifak biterse işin de biter; ittifak güç katmalı, seni kimseye mahkum etmemeli.' },
        ],
      },
      {
        slug: 'vaka',
        title: 'Gerçek Vaka & Fayda',
        blocks: [
          { t: 'callout', kind: 'case', title: 'Vaka: Renault-Nissan ve Star Alliance', text: 'İki belgeli örnek, ittifakın iki farklı yüzünü gösterir. 1999\'da zor durumdaki Japon üreticisi Nissan ile Fransız Renault, birleşmek yerine karşılıklı hisse alarak bir ittifak kurdu: iki şirket de kendi markasını ve yönetimini korudu ama satın almayı, ortak parça platformlarını ve teknolojiyi birleştirdi. Bu güç birliği Nissan\'ı toparladı ve ittifakı yıllar boyunca dünyanın en büyük otomobil gruplarından biri haline getirdi; sonraki yıllarda yaşanan yönetim krizleri ise güç dengesi bozulan ittifakın nasıl sarsılabileceğinin dersi oldu. İkinci örnek 1997\'de beş havayolunun kurduğu Star Alliance\'tır: üye havayolları ayrı şirketler olarak kalır ama uçuş ağlarını, biletlemeyi ve yolcu programlarını birbirine bağlar; böylece hiçbir üyenin tek başına sunamayacağı dünya çapında bir ağ, hepsinin müşterisine sunulur. İki vaka da aynı ilkeyi doğrular: ittifak, bağımsız kalarak birlikte büyümenin yoludur; ayakta kalması ise denge ve güvene bağlıdır.' },
          { t: 'h2', text: 'Gerçek fayda' },
          { t: 'ul', items: [
            'Büyüklerin gücünü küçüklere açar: ortak alım ve ortak tanıtımla, küçük işletme tek başına ulaşamayacağı fiyata ve pazara ulaşır.',
            'Riski ve maliyeti paylaştırır: tek başına kaldırılamayacak yatırım, birkaç omuz arasında taşınabilir hale gelir.',
            'Bilgiyi hızlandırır: ortağın yıllarını verdiği tecrübe, sıfırdan öğrenmek yerine işbirliğiyle kazanılır.',
          ]},
        ],
      },
    ],
  },
  {
    slug: 'kriz-yonetimi',
    section: 'risk-guvenlik',
    title: 'Kriz Yönetimi',
    question: 'Beklenmedik bir felaket kapıyı çaldığında ne yapacağımı biliyor muyum?',
    summary: 'Krizi üç evrede ele alan döngü: kriz gelmeden hazırlan, kriz anında hızlı ve dürüst müdahale et, kriz sonrası toparlan ve ders çıkarıp hazırlığı güncelle.',
    tags: ['kriz', 'hazırlık', 'itibar', 'iletişim'],
    areas: ['İşletme yönetimi', 'İtibar koruma', 'Acil durum planlama', 'Müşteri iletişimi'],
    viz: {
      kind: 'process',
      loop: true,
      steps: [
        { title: 'Hazırlık', text: 'Riskleri listele, plan yaz, sorumluları belirle, tatbikat yap' },
        { title: 'Müdahale', text: 'Hızlı davran, önce insanı koru, dürüst ve tek ağızdan konuş' },
        { title: 'Toparlanma', text: 'Zararı ölç, güveni yeniden kur, işi normale döndür' },
        { title: 'Ders çıkarma', text: 'Ne işledi, ne aksadı? Planı güncelle, döngüyü kapat' },
      ],
      note: 'Kriz yönetimi tek seferlik değil döngüdür: her krizden çıkan ders, bir sonrakinin hazırlığıdır.',
    },
    pages: [
      {
        slug: 'kavram',
        title: 'Kavram',
        blocks: [
          { t: 'callout', kind: 'simple', title: 'Bir cümlede', text: 'Kriz yönetimi, yangın çıktığında koşuşturmak değil, yangın çıkmadan merdiveni koymaktır: riskleri önceden listele, kriz anında hızlı ve dürüst davran, sonrasında toparlan ve dersi bir sonraki hazırlığa ekle.' },
          { t: 'callout', kind: 'ornek', title: 'Şantiyeden örnek', text: 'Müteahhit Harun Bey\'in şantiyesinde bir sabah su borusu patlıyor; alt katları su basıyor, komşu bina şikayetçi, işçiler ne yapacağını bilmiyor, telefonlar susmuyor. Harun Bey o gün üç şeyin eksikliğini acı acı görüyor: kimin vanayı kapatacağı belli değil, komşularla kimin konuşacağı belli değil, sigorta evrakları nerede kimse bilmiyor. Kriz atlatıldıktan sonra oturup bir sayfalık plan yazıyor: en olası beş kriz (su, yangın, iş kazası, hırsızlık, malzeme gecikmesi), her biri için ilk üç adım, her adımın bir sorumlusu, önemli telefonlar ve evrakların yeri. Altı ay sonra elektrik panosunda yangın başlangıcı oluyor: bu kez usta iki dakikada elektriği kesiyor, önceden belirlenen kişi itfaiyeyi arıyor, Harun Bey komşuları bilgilendiriyor. Aynı şantiye, aynı insanlar; farkı yaratan, krizden önce yazılmış o bir sayfa.' },
          { t: 'p', text: 'Kriz, işletmenin olağan düzenini bozan ve hızla karar gerektiren beklenmedik olaydır: kaza, yangın, bozuk ürün, büyük müşterinin kaybı, asılsız bir söylenti. Kriz yönetimi bu olayların hiç yaşanmayacağını vadetmez; yaşandığında zararın küçük, tepkinin hızlı ve güvenin korunmuş olmasını sağlar.' },
          { t: 'h2', text: 'Döngünün üç evresi' },
          { t: 'table', head: ['Evre', 'Ne zaman?', 'Ana iş'], rows: [
            ['Hazırlık', 'Kriz yokken', 'Riskleri listele, plan ve sorumlu belirle, prova yap'],
            ['Müdahale', 'Kriz anında', 'İnsanı koru, zararı durdur, dürüst ve tek ağızdan konuş'],
            ['Toparlanma', 'Kriz sonrası', 'Zararı gider, güveni yeniden kur, dersi plana işle'],
          ]},
          { t: 'p', text: 'Üç evrenin en çok ihmal edileni hazırlıktır; çünkü kriz yokken plan yazmak gereksiz bir masraf gibi görünür. Oysa kriz anında düşünmeye vakit yoktur: o anda ancak önceden düşünülmüş olan uygulanır. Plansız işletme kriz anında iki düşmanla birden savaşır: krizin kendisi ve kendi paniği.' },
          { t: 'p', text: 'Kriz anının altın kuralı iletişimdir. Sessiz kalan veya olayı küçümseyen işletmenin yerine söylentiler konuşur ve söylenti her zaman gerçekten kötüdür. Dürüst, hızlı ve tek ağızdan yapılan açıklama, kısa vadede acı verse bile itibarı korur; çünkü müşteri hatasız işletme aramaz, hatasına sahip çıkan işletme arar.' },
        ],
      },
      {
        slug: 'uygulama',
        title: 'Nasıl Uygulanır',
        blocks: [
          { t: 'steps', items: [
            { title: 'En olası krizleri listele ve plan yaz', text: 'Kriz yokken otur ve sor: "Bu işte başımıza gelebilecek en kötü beş şey ne?" Her biri için bir sayfalık plan yaz: ilk adımlar, sorumlular, aranacak telefonlar, önemli evrakların yeri. Mükemmel plan değil, var olan plan hayat kurtarır.' },
            { title: 'Sorumluları belirle ve prova yap', text: 'Kriz anında "kim ne yapacak?" tartışılmaz, uygulanır. Kimin müdahale edeceğini, kimin dışarıya konuşacağını, kimin yedeğe geçeceğini önceden belirle. Yılda bir kez kısa bir tatbikatla planın gerçekten işleyip işlemediğini dene.' },
            { title: 'Kriz anında: koru, durdur, konuş', text: 'Sıra hep aynıdır: önce insanların güvenliği, sonra zararın büyümesini durdurmak, sonra iletişim. Bildiğini dürüstçe söyle, bilmediğine "araştırıyoruz, şu saatte tekrar bilgi vereceğiz" de. Suskunluk ve yalan, krizin kendisinden daha kalıcı hasar bırakır.' },
            { title: 'Toparlan ve dersi plana işle', text: 'Kriz geçince zararı ölç, mağdurun gönlünü al, işi normale döndür. Sonra ekiple otur: ne iyi işledi, ne aksadı, plan neyi öngörememişti? Cevapları plana ekle. Ders çıkarılmayan kriz, tekrar gelmek üzere gitmiştir.' },
          ]},
          { t: 'callout', kind: 'tip', title: 'İpucu', text: 'Kriz planının tamamını herkesin ezberlemesi gerekmez; bir sayfalık "ilk yarım saat" kartı yeter: kim aranacak, ne kapatılacak, kim konuşacak. Bu kartı herkesin görebileceği yere as. Krizde okunabilen kısa plan, çekmecede duran kalın dosyadan bin kat değerlidir.' },
          { t: 'callout', kind: 'warn', title: 'Dikkat', text: 'En pahalı iki hata küçümsemek ve saklamaktır. "Bir şey olmaz, duyulmaz" diyen işletme, krizi büyütür ve duyulduğunda bir de güvensizlik faturası öder. Ayrıca krizi tek kişinin kahramanlığına emanet etme: patron o gün şehir dışındaysa plan yine işlemeli. Plan kişiye değil, göreve yazılır.' },
        ],
      },
      {
        slug: 'vaka',
        title: 'Gerçek Vaka & Fayda',
        blocks: [
          { t: 'callout', kind: 'case', title: 'Vaka: Johnson & Johnson Tylenol krizi (1982)', text: 'Kriz yönetiminin ders kitabı vakası 1982\'de yaşandı. ABD\'de Chicago bölgesinde, Johnson & Johnson\'ın en çok satan ağrı kesicisi Tylenol\'un kapsüllerine, raflardayken bir saldırgan tarafından siyanür karıştırıldı ve yedi kişi hayatını kaybetti. Suç şirketin değildi; ama şirket "biz yapmadık" deyip kenara çekilmedi. Yönetim, kısa vadeli karı değil "önce insan" ilkesini seçti: ülke çapında yaklaşık 31 milyon şişe Tylenol, yüz milyon doları aşan bir maliyetle raflardan toplatıldı; halk açıkça uyarıldı, basınla şeffaf iletişim kuruldu, evlerdeki ürünler için değişim imkanı sunuldu. Ardından ilaç ambalajlarına açılma-belli-olur (tamper-evident) koruma getirildi; bu koruma sonra bütün sektörde standart oldu. Krizden önce pazar lideri olan Tylenol, kriz sonrası kısa sürede güvenini ve pazarını geri kazandı. Vaka, o günden beri işletme okullarında aynı dersle okutulur: krizde itibarı kurtaran şey hatasızlık değil, hızlı, dürüst ve insanı öne koyan müdahaledir.' },
          { t: 'h2', text: 'Gerçek fayda' },
          { t: 'ul', items: [
            'Paniği plana çevirir: kriz anında herkes ne yapacağını bildiği için kaybedilen ilk saatler kazanılan saatlere döner.',
            'İtibarı korur: hızlı ve dürüst iletişim, müşterinin ve çevrenin güvenini kriz sonrasına taşır.',
            'İşletmeyi her krizde güçlendirir: ders çıkarma adımı sayesinde her atlatılan kriz, bir sonrakinin hazırlığı olur.',
          ]},
        ],
      },
    ],
  },
  {
    slug: 'stok-yonetimi',
    section: 'surec-kalite',
    title: 'Stok Yönetimi',
    question: 'Ne kadar mal bulundurmalıyım ki ne raf boş kalsın ne para rafta uyusun?',
    summary: 'Emniyet stoğu, sipariş noktası ve ABC analiziyle stok dengesini kuran yaklaşım: az kalemin çok değer taşıdığını görüp parayı ve dikkati doğru mala yönlendirmek.',
    tags: ['stok', 'ABC analizi', 'sipariş noktası', 'emniyet stoğu'],
    areas: ['Perakende ve market', 'Depo ve atölye', 'Malzeme planlama', 'Nakit yönetimi'],
    viz: {
      kind: 'pareto',
      categories: ['A grubu (az kalem)', 'B grubu (orta)', 'C grubu (çok kalem)'],
      values: [70, 20, 10],
      note: 'ABC analizi: kalemlerin küçük bir kısmı (A) stok değerinin büyük kısmını taşır; dikkat oraya.',
    },
    pages: [
      {
        slug: 'kavram',
        title: 'Kavram',
        blocks: [
          { t: 'callout', kind: 'simple', title: 'Bir cümlede', text: 'Stok yönetimi bir terazi işidir: çok mal tutarsan paran rafta uyur ve bozulur, az tutarsan müşteri eli boş döner; denge ise üç basit araçla kurulur: emniyet stoğu, sipariş noktası ve ABC analizi.' },
          { t: 'callout', kind: 'ornek', title: 'Esnaftan örnek', text: 'Hırdavatçı Nedim Usta\'nın dükkanı ağzına kadar dolu ama kasada para yok; üstelik en çok sorulan matkap ucu yine bitmiş. Bir hafta sonu oğluyla sayım yapıyorlar ve şaşırtıcı bir tablo çıkıyor: dükkandaki üç yüz çeşit malın otuz kadarı (vida, matkap ucu, silikon, bant) cironun dörtte üçünü yapıyor; buna karşılık yıllardır satılmayan menteşeler ve modası geçmiş musluklar rafları ve parayı işgal ediyor. Nedim Usta üç şey yapıyor. Çok satan otuz kalemi "A grubu" ilan edip her hafta sayıyor; her biri için "şu adede düşünce sipariş ver" diye bir sipariş noktası belirliyor ve tedarikçi gecikirse diye küçük bir emniyet stoğu tutuyor. Satılmayan malları ise indirimle eritip bağladığı parayı kurtarıyor. Üç ay sonra raflar daha boş ama kasa daha dolu; ve en önemlisi, müşterinin aradığı mal hep yerinde.' },
          { t: 'p', text: 'Stok, iki masrafın kavga ettiği yerdir. Fazla stok para bağlar, yer kaplar, bozulma ve modası geçme riski taşır; eksik stok ise satış kaçırır ve müşteriyi rakibe gönderir. Stok yönetimi, bu iki masrafın toplamını en aza indirme sanatıdır ve bunun için üç temel araç kullanır.' },
          { t: 'h2', text: 'Üç temel araç' },
          { t: 'table', head: ['Araç', 'Sorusu', 'Basit kuralı'], rows: [
            ['ABC analizi', 'Hangi mal ne kadar önemli?', 'Az kalem çok değer taşır: A grubunu sıkı, C grubunu gevşek izle'],
            ['Sipariş noktası', 'Ne zaman sipariş vermeli?', 'Stok, "tedarik süresince satılan miktar + emniyet stoğu" seviyesine düşünce'],
            ['Emniyet stoğu', 'Ne kadar yedek tutmalı?', 'Tedarikçi gecikmesi ve talep dalgası kadar; ne fazlası ne eksiği'],
          ]},
          { t: 'p', text: 'ABC analizi, Pareto ilkesinin (80/20 kuralı) stok haline uygulanmasıdır: çoğu işletmede kalemlerin küçük bir bölümü, stok değerinin ve cironun büyük bölümünü taşır. A grubu az sayıdadır ama en değerlidir; sık sayılır, dikkatle sipariş edilir. C grubu kalabalıktır ama değeri azdır; kaba kurallarla yönetilir. Böylece sınırlı dikkat, en çok işe yarayacağı yere gider.' },
          { t: 'p', text: 'Sipariş noktası ise "bitince sipariş veririm" hatasını düzeltir. Mal bitince verilen sipariş, tedarik süresi boyunca boş raf demektir. Doğrusu, stok belirli bir seviyeye düşünce sipariş vermektir: bu seviye, siparişin yoldayken satılacak miktar artı emniyet stoğudur. Emniyet stoğu da körlemesine "bol olsun" değil, gecikme ve talep dalgalanması kadar tutulan hesaplı bir yedektir.' },
        ],
      },
      {
        slug: 'uygulama',
        title: 'Nasıl Uygulanır',
        blocks: [
          { t: 'steps', items: [
            { title: 'Sayım yap ve ABC gruplarını çıkar', text: 'Her kalemin yıllık satış değerini (adet x fiyat) hesapla ve büyükten küçüğe sırala. Değerin büyük kısmını taşıyan az sayıdaki kalem A grubun, ortadakiler B, kalabalık ama düşük değerli kuyruk C grubundur.' },
            { title: 'A grubuna sipariş noktası ve emniyet stoğu belirle', text: 'Her A kalemi için iki sayıyı öğren: günde ortalama kaç satılıyor ve sipariş kaç günde geliyor. Sipariş noktası kabaca ikisinin çarpımı artı emniyet stoğudur. Örnek: günde 5 adet satılan, 4 günde gelen mal için 20 artı 10 emniyet = stok 30\'a düşünce sipariş.' },
            { title: 'Düzeni kur: say, sipariş ver, teslim al', text: 'A grubunu sık (haftalık), B\'yi aylık, C\'yi seyrek say. Sipariş noktasına düşen kalemi bekletmeden sipariş et. Ölü stoğu (uzun süredir satılmayan malı) ayrı listele ve indirim, iade veya takasla erit; raf işgal eden mal, kira ödeyen misafirdir.' },
            { title: 'Sayıları mevsime göre güncelle', text: 'Satış hızı sabit değildir: mevsim, bayram, piyasa değişir. Sipariş noktalarını ve emniyet stoklarını birkaç ayda bir gözden geçir. Geçen yılın sayılarıyla bu yılın stoğunu yönetmek, dikiz aynasıyla araba sürmektir.' },
          ]},
          { t: 'callout', kind: 'tip', title: 'İpucu', text: 'İki basit sinyali izle: raf boşluğu (kaç kez müşteri eli boş döndü) ve stok yaşı (mal rafta kaç gündür duruyor). İlki emniyet stoğunun az, ikincisi fazla olduğunu söyler. Bu iki sinyal, karmaşık yazılım olmadan da stok terazini ayarlamana yeter.' },
          { t: 'callout', kind: 'warn', title: 'Dikkat', text: 'İki tuzak vardır. Birincisi "bol mal bereket" yanılgısı: satılmayan mal bereket değil, rafta uyuyan ve eriyen paradır. İkincisi kampanya cazibesi: toptancının "çok al ucuz olsun" teklifi, ancak o malı gerçekten satabileceksen kardır; satamayacaksan iskonto değil, peşin ödenmiş zarardır.' },
        ],
      },
      {
        slug: 'vaka',
        title: 'Gerçek Vaka & Fayda',
        blocks: [
          { t: 'callout', kind: 'case', title: 'Vaka: Amazon\'un deposu ve Zara\'nın hızı', text: 'İki dev, stok terazisinin iki ustasıdır. Amazon, milyonlarca çeşit ürünü müşteriye hızla ulaştırmak zorundadır; bunu depo süreçlerini sürekli ölçüp iyileştirerek, talebi geçmiş verilerle tahmin ederek ve stok miktarını mümkün olan en düşük seviyede tutarak yapar. Depolarında yalın (Lean) prensipler ve veri analizi birlikte çalışır: hangi ürünün hangi bölgede ne kadar satılacağı öngörülür, mal müşteriye yakın depoda ve doğru miktarda bekletilir. Böylece hem hızlı teslimat hem düşük stok maliyeti aynı anda sağlanır. İspanyol giyim zinciri Zara ise ters görünen bir yolla aynı dengeyi kurar: az üretir, sık yeniler. Mağazalara küçük partiler gönderir, satış verisine bakar ve tutan modeli haftalar içinde yeniden üretip raflara koyar; tutmayan model büyük stok yığını oluşturmadan biter. Sonuç, sezon sonunda dağ gibi indirim stoğu kalmaması ve rafların hep taze olmasıdır. Dev ölçekleri farklı ama ders aynıdır: stokta ustalık çok mal tutmak değil, doğru malı doğru miktarda ve doğru zamanda tutmaktır.' },
          { t: 'h2', text: 'Gerçek fayda' },
          { t: 'ul', items: [
            'Rafta uyuyan parayı uyandırır: ölü stoğa bağlanan nakit çözülür ve işin dönmesine, kazandıran mala akar.',
            'Satış kaçırmayı azaltır: sipariş noktası ve emniyet stoğu sayesinde en çok aranan mal, en az biten mal olur.',
            'Dikkati doğru yere odaklar: ABC analizi, sınırlı zamanın kalabalık ama önemsiz kalemlere değil, cironun taşıyıcısı A grubuna harcanmasını sağlar.',
          ]},
        ],
      },
    ],
  },
]
