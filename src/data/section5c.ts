import type { DecisionModel } from '../types'

export const section5cModels: DecisionModel[] = [
  {
    slug: 'porter-bes-guc',
    section: 'strateji-rekabet',
    title: 'Porter\'ın Beş Güç Analizi',
    question: 'Bu sektörde para kazanmak neden bu kadar zor?',
    summary: 'Bir sektörün kâr potansiyelini beş rekabet gücüne bakarak ölçen Michael Porter\'ın sektör analizi modeli.',
    tags: ['rekabet', 'sektör analizi', 'strateji'],
    pages: [
      {
        slug: 'kavram',
        title: 'Kavram',
        blocks: [
          { t: 'callout', kind: 'simple', title: 'Bir cümlede', text: 'Bir işte ne kadar para kalacağını sadece rakiplerin değil, beş ayrı gücün belirler: rakipler, yeni girecekler, ikame ürünler, tedarikçiler ve müşteriler; beşine birden bakmadan sektöre girme.' },
          { t: 'callout', kind: 'ornek', title: 'Esnaftan örnek', text: 'Bakkal Rıza\'nın oğlu mahalleye bir kahve dükkanı açmak istiyor. Rıza beş soru soruyor: Sokakta kaç kahveci var? (rakipler çok). Yarın bir zincir kahveci gelir mi? (giriş kolay). İnsanlar evde makineyle kahve yapmaya geçer mi? (ikame ucuz). Kahve çekirdeğini kaç toptancıdan alabiliyorsun? (tedarikçi az, fiyatı o belirler). Müşteri iki lira pahalı bulunca karşıya geçer mi? (geçer). Beş cevabın beşi de kötü: bu sokakta kahvecilik zor iş, kâr ince.' },
          { t: 'p', text: 'Harvard profesörü Michael Porter 1979\'da şunu gösterdi: bir sektördeki kârlılık şanstan değil, yapıdan gelir. Aynı çabayı gösteren iki girişimci, biri yapısı rahat bir sektörde, diğeri beş gücün sıkıştırdığı bir sektörde çalışıyorsa, sonuçları çok farklı olur. Model, "nereye emek vereceğim?" kararını duygudan yapıya taşır.' },
          { t: 'h2', text: 'Beş güç tek tek' },
          { t: 'table', head: ['Güç', 'Soru', 'Güç yüksekse ne olur?'], rows: [
            ['Mevcut rakipler', 'Kaç rakip var, ne kadar sert savaşıyorlar?', 'Fiyat savaşı çıkar, kâr erir'],
            ['Yeni girenler tehdidi', 'Bu işe girmek ne kadar kolay?', 'Kâr görünür görünmez yeni oyuncu gelir'],
            ['İkame ürünler', 'Müşteri aynı ihtiyacı başka yolla giderebilir mi?', 'Fiyat tavanın düşer (dolmuş yerine yürümek gibi)'],
            ['Tedarikçilerin pazarlık gücü', 'Malı aldığın kişi az ve güçlü mü?', 'Maliyetini o belirler, sen değil'],
            ['Müşterilerin pazarlık gücü', 'Alıcı kolayca başkasına geçebilir mi?', 'Fiyatını müşteri belirler, sen değil'],
          ]},
          { t: 'p', text: 'Kritik nokta: model "bu sektör kötü, girme" demek için değil, "bu sektörde hangi güce karşı kendimi koruyacağım?" sorusunu sormak içindir. Güçlü konum, beş gücün baskısını azaltan konumdur: sadık müşteri, alternatif tedarikçi, taklit edilmesi zor ürün.' },
        ],
      },
      {
        slug: 'uygulama',
        title: 'Nasıl Uygulanır',
        blocks: [
          { t: 'steps', items: [
            { title: 'Sektörü dar tanımla', text: '"Gıda sektörü" değil, "mahalle ölçeğinde paket servis pide" gibi. Analiz ne kadar dar, cevaplar o kadar isabetli olur.' },
            { title: 'Beş gücü tek tek puanla', text: 'Her güce zayıf / orta / güçlü de. Kanıtla puanla: rakip sayısı, giriş maliyeti, tedarikçi sayısı gibi sayılabilir şeylere dayan.' },
            { title: 'En tehlikeli gücü bul', text: 'Genelde bir veya iki güç kârı asıl yiyendir. Enerjini oraya ver: tedarikçi güçlüyse ikinci tedarikçi bul, müşteri güçlüyse sadakat kur.' },
            { title: 'Kararı yaz', text: 'Sonuç üç yoldan biridir: bu sektöre gir/kal, konumunu güçlendirerek gir, ya da girme. Analizi yapıp kararı yazmamak, analizi boşa yapmaktır.' },
          ]},
          { t: 'callout', kind: 'tip', title: 'İpucu', text: 'Beş gücü yılda bir güncelle. Sektör yapısı değişir: bir zincir mağazanın mahalleye gelmesi, tek başına iki gücü (rakip ve müşteri gücü) birden değiştirir.' },
          { t: 'callout', kind: 'warn', title: 'Dikkat', text: 'Model sektörün ortalamasını anlatır, senin kaderini değil. Zor sektörde de iyi konumlanan kazanır; kolay sektörde de kötü konumlanan batar. Analiz pusula verir, yürümek sana kalır.' },
        ],
      },
      {
        slug: 'vaka',
        title: 'Gerçek Vaka & Fayda',
        blocks: [
          { t: 'callout', kind: 'case', title: 'Vaka: Havayolu sektörünün bitmeyen kâr sorunu', text: 'Porter\'ın kendi yazılarında en sık kullandığı örnek havayoluculuktur: onlarca yıl boyunca sektör, dünyada en düşük kârlılığa sahip sektörlerden biri oldu. Nedeni beş gücün beşinin de sert olmasıdır: rakip çok ve uçaklar boş uçmasın diye fiyat kırar; uçak kiralamayla sektöre giriş görece kolaydır; ikame boldur (tren, otobüs, video konferans); tedarikçi azdır (uçak üreticisi iki, havaalanı ve sendikalar güçlü); müşteri fiyat karşılaştırma siteleriyle en ucuzu bir tıkla bulur. Aynı ekosistemde uçak üreticileri ve rezervasyon sistemleri gibi beş gücü rahat halkalar ise yıllarca çok daha yüksek kâr marjıyla çalıştı.' },
          { t: 'h2', text: 'Gerçek fayda' },
          { t: 'ul', items: [
            '"Neden çok çalışıp az kazanıyorum?" sorusuna yapısal cevap verir: sorun bazen sende değil, seçtiğin oyun sahasındadır.',
            'Yatırım ve iş kurma kararında duyguyu frenler: parlak görünen sektörün beş gücü sayılınca gerçek çekiciliği ortaya çıkar.',
            'Savunma planı çıkarır: en güçlü baskıyı bilen esnaf, enerjisini doğru siperi kazmaya harcar.',
          ]},
        ],
      },
    ],
  },
  {
    slug: 'pestle-analizi',
    section: 'strateji-rekabet',
    title: 'PESTLE Analizi',
    question: 'İşimi benim dışımdaki hangi rüzgarlar etkileyecek?',
    summary: 'İşletmeyi çevreleyen politik, ekonomik, sosyal, teknolojik, hukuki ve çevresel dış etkenleri sistemli tarayan analiz.',
    tags: ['dış çevre', 'makro analiz', 'planlama'],
    pages: [
      {
        slug: 'kavram',
        title: 'Kavram',
        blocks: [
          { t: 'callout', kind: 'simple', title: 'Bir cümlede', text: 'Kendi dükkanının içine bakmadan önce başını kaldırıp altı yönden gelen rüzgara bak: siyaset, ekonomi, toplum, teknoloji, hukuk ve çevre; fırtına dışarıdan gelir.' },
          { t: 'callout', kind: 'ornek', title: 'Şantiyeden örnek', text: 'Müteahhit Kemal yeni bir apartman projesine başlamadan altı soruyu masaya koyuyor: İmar affı ya da yeni yönetmelik geliyor mu? (politik/hukuki). Faizler kredi çekmeyi öldürür mü? (ekonomik). Mahallede genç aileler mi yaşlılar mı artıyor, kaç odalı daire ister? (sosyal). Prefabrik ve yeni yalıtım teknolojileri maliyeti değiştirir mi? (teknolojik). Deprem yönetmeliği ve zemin raporu ne diyor? (çevresel). Komşu müteahhit bu soruları sormadan başladı; yönetmelik değişince projeyi tadil etmek ona bir kat parasına mal oldu.' },
          { t: 'p', text: 'PESTLE, İngilizce altı kelimenin baş harfidir: Political (politik), Economic (ekonomik), Social (sosyal), Technological (teknolojik), Legal (hukuki), Environmental (çevresel). Fikir basittir: bir işletmeyi batıran şeylerin önemli bölümü işletmenin içinden değil, dışındaki büyük değişimlerden gelir ve bu değişimler genellikle önceden sinyal verir.' },
          { t: 'h2', text: 'Altı başlık ve tipik sorular' },
          { t: 'table', head: ['Harf', 'Alan', 'Küçük işletme için örnek soru'], rows: [
            ['P', 'Politik', 'Teşvik, vergi politikası, ithalat kuralları değişiyor mu?'],
            ['E', 'Ekonomik', 'Faiz, kur, enflasyon müşterimin cebini nasıl etkiler?'],
            ['S', 'Sosyal', 'Müşterimin yaşı, alışkanlığı, beklentisi nereye gidiyor?'],
            ['T', 'Teknolojik', 'Hangi yeni araç benim işimi ucuzlatır ya da beni gereksizleştirir?'],
            ['L', 'Hukuki', 'Hangi yeni yasa, yönetmelik, standart yolda?'],
            ['E', 'Çevresel', 'İklim, enerji maliyeti, atık kuralları işimi nasıl etkiler?'],
          ]},
          { t: 'p', text: 'Analizin altın kuralı "peki ne olmuş?" testidir: her bulgunun yanına iki cümle eklenir — bu benim işim için ne anlama geliyor ve buna karşı ne yapacağım? Eylem cümlesi olmayan bulgu, analize değil genel kültüre yazılır.' },
        ],
      },
      {
        slug: 'uygulama',
        title: 'Nasıl Uygulanır',
        blocks: [
          { t: 'steps', items: [
            { title: 'Kritik 2-3 başlığı seç', text: 'Küçük işletme altı başlığı eşit derinlikte tarayamaz, gerek de yok. İşine göre seç: gıda işiysen hukuki ve ekonomik, teknoloji işiysen teknolojik ve sosyal öne çıkar.' },
            { title: 'Her başlıkta tek soru sor', text: '"Bu alanda önümüzdeki 12-24 ayda beni doğrudan etkileyecek ne değişiyor?" Cevabı bir sayfayı geçmesin.' },
            { title: 'Her bulguya eylem bağla', text: 'Bulgu, anlamı ve yapılacak iş: üç sütunlu küçük bir tabloya yaz. Eylemi olmayan satırı sil.' },
            { title: 'Takvime bağla', text: 'Analizi yılda bir, sektörün hızlıysa altı ayda bir tekrarla. Beklenmedik bir düzenleme veya kriz çıktığında da hemen güncelle.' },
          ]},
          { t: 'callout', kind: 'warn', title: 'Dikkat', text: 'PESTLE\'nin en büyük tuzağı ansiklopedi yazmaktır: yirmi sayfalık genel dünya analizi hiçbir karar üretmez. Üç sayfayı geçen PESTLE, analiz değil erteleme belgesidir.' },
          { t: 'callout', kind: 'tip', title: 'İpucu', text: 'PESTLE dışarıyı, SWOT içeriyi ve dışarıyı birlikte tarar: en iyi kullanım, PESTLE bulgularını SWOT\'un fırsat ve tehdit kutularına ham madde yapmaktır.' },
        ],
      },
      {
        slug: 'vaka',
        title: 'Gerçek Vaka & Fayda',
        blocks: [
          { t: 'callout', kind: 'case', title: 'Vaka: Otomotivde dış çevrenin gücü', text: 'Otomotiv sektörü PESTLE\'nin ders kitabı örneğidir çünkü son yıllarda altı başlığın altısı da aynı anda oynadı: hükümetlerin elektrikli araç teşvikleri ve emisyon hedefleri (politik), batarya ve çip tedarik dalgalanmaları (ekonomik), gençlerin sahiplikten paylaşıma kayan tercihleri (sosyal), elektrikli ve yazılım tanımlı araç teknolojisi (teknolojik), Avrupa Birliği\'nin içten yanmalı motorlara koyduğu takvimler (hukuki) ve iklim baskısı (çevresel). Bu tabloyu erken okuyan üreticiler elektrikli yatırımlarını erken planladı; geç okuyanlar dönüşümü çok daha pahalıya yaşadı. Dizel emisyon skandalının şirketlere milyarlarca dolara mal olması, hukuki başlığı hafife almanın belgelenmiş bedelidir.' },
          { t: 'h2', text: 'Gerçek fayda' },
          { t: 'ul', items: [
            'Sürprizleri azaltır: yasa, kur ve teknoloji değişimleri geldiğinde hazırlıklı olan, panik yerine plan uygular.',
            'Yatırım zamanlamasını iyileştirir: dış rüzgarın yönünü bilen, yelkeni ona göre açar.',
            'Bahaneleri erken yok eder: "yönetmelik değişti, ne yapayım" cümlesi, çoğu zaman bir yıl önce görülebilecek bir sinyalin görülmemesidir.',
          ]},
        ],
      },
    ],
  },
  {
    slug: 'smart-hedefler',
    section: 'hedef-performans',
    title: 'SMART Hedefler',
    question: 'Hedefim gerçekten hedef mi, yoksa dilek mi?',
    summary: 'Hedefi belirli, ölçülebilir, ulaşılabilir, ilgili ve zamana bağlı beş süzgeçten geçirerek dilekten plana çeviren yöntem.',
    tags: ['hedef belirleme', 'planlama'],
    pages: [
      {
        slug: 'kavram',
        title: 'Kavram',
        blocks: [
          { t: 'callout', kind: 'simple', title: 'Bir cümlede', text: '"Daha çok satacağım" bir dilektir; "31 Aralık\'a kadar aylık satışı 80 adetten 100 adede çıkaracağım" bir hedeftir; aradaki fark beş harflik bir süzgeçtir.' },
          { t: 'callout', kind: 'ornek', title: 'Esnaftan örnek', text: 'Lokantacı Suna yılbaşında "bu yıl işleri büyüteceğim" diyor. Kızı beş soru soruyor: Neyi büyüteceksin? (paket servisi). Nereden nereye? (günde 20 siparişten 35\'e). Mümkün mü? (mutfak kapasitesi 40\'a yeter, evet). İşine uyuyor mu? (salon zaten dolu, büyüme ancak paketten gelir, evet). Ne zamana kadar? (Haziran sonuna). Artık ortada bir dilek değil, her ay ölçülebilen bir hedef var: Mart\'ta 25 siparişe gelmediyse Suna rotayı sorgulayacağını da biliyor.' },
          { t: 'p', text: 'SMART, 1981\'de George Doran\'ın yönetim literatürüne kazandırdığı bir akıl sayacıdır. Beş harf, bir hedefin taşıması gereken beş özelliği hatırlatır. Amaç bürokrasi değildir: belirsiz hedef, ilerlemeyi ölçmeyi ve başarısızlığı fark etmeyi imkansız kılar; SMART bu belirsizliği baştan yasaklar.' },
          { t: 'h2', text: 'Beş süzgeç' },
          { t: 'table', head: ['Harf', 'Anlamı', 'Kontrol sorusu', 'Kötü örnek', 'İyi örnek'], rows: [
            ['S (Specific)', 'Belirli', 'Tam olarak ne?', 'Daha iyi hizmet', 'Telefonla sipariş süresini kısaltmak'],
            ['M (Measurable)', 'Ölçülebilir', 'Nasıl sayarım?', 'Müşteri memnun olsun', 'Şikayet sayısı ayda 10\'dan 3\'e insin'],
            ['A (Achievable)', 'Ulaşılabilir', 'Kaynaklarımla mümkün mü?', 'Bir yılda 10 kat büyüme', 'Bir yılda yüzde 25 büyüme'],
            ['R (Relevant)', 'İlgili', 'Asıl amacıma hizmet ediyor mu?', 'Sosyal medyada ünlü olmak', 'Paket siparişi artırmak'],
            ['T (Time-bound)', 'Zamana bağlı', 'Son tarih ne?', 'Bir ara yaparız', '30 Haziran\'a kadar'],
          ]},
          { t: 'p', text: 'Beş süzgecin en çok atlananı R\'dir: ölçülebilir ama işin asıl amacına hizmet etmeyen hedefler (takipçi sayısı gibi) insanı meşgul eder ama ilerletmez.' },
        ],
      },
      {
        slug: 'uygulama',
        title: 'Nasıl Uygulanır',
        blocks: [
          { t: 'steps', items: [
            { title: 'Dileği yaz, sonra sorgula', text: 'Önce aklındaki hali dürüstçe yaz: "satışları artırmak". Sonra beş soruyu sırayla uygula ve her cevapla cümleyi yeniden yaz.' },
            { title: 'Tek cümleye sığdır', text: 'Bitmiş hedef tek cümledir: "[tarih]e kadar [ölçüt]ü [şu andaki değer]den [hedef değer]e çıkaracağım." Sığmıyorsa hedef hala bulanıktır.' },
            { title: 'Ara kontrol noktası koy', text: 'Son tarihi bekleme: yolun üçte birinde ve üçte ikisinde olman gereken değeri baştan yaz. Sapma erken görülür.' },
            { title: 'Görünür yere as', text: 'Hedef, deftere gömülürse ölür. Duvara, panoya, ekrana: her gün gözüne çarpsın.' },
          ]},
          { t: 'callout', kind: 'warn', title: 'Dikkat', text: 'SMART, hedefin kalitesini garanti etmez; sadece netliğini garanti eder. Yanlış hedefi de mükemmel netlikte yazabilirsin. Önce "doğru hedef bu mu?" diye düşün, sonra SMART\'la keskinleştir.' },
          { t: 'callout', kind: 'tip', title: 'İpucu', text: 'Aynı anda en fazla 2-3 SMART hedef tut. On tane net hedef, bir tane bulanık hedef kadar işe yaramaz: dikkat bölününce hepsi dilekleşir.' },
        ],
      },
      {
        slug: 'vaka',
        title: 'Gerçek Vaka & Fayda',
        blocks: [
          { t: 'callout', kind: 'case', title: 'Vaka: Doran\'ın makalesinden kurumsal standarda', text: 'SMART, George Doran\'ın 1981\'de Management Review dergisinde yayımlanan "There\'s a S.M.A.R.T. way to write management\'s goals and objectives" başlıklı makalesiyle doğdu. Doran, danışmanlık yaptığı şirketlerde yöneticilerin hedeflerinin çoğunun ölçülemez ve tarihsiz olduğunu gözlemlemişti. Kısaltma o kadar tuttu ki bugün kurumsal performans sistemlerinin, kamu kurumlarının proje şablonlarının ve hatta Dünya Sağlık Örgütü gibi kuruluşların program hedefi yazım kılavuzlarının standart parçasıdır. Kırk yıldır hayatta kalmasının nedeni basitliğidir: beş soru, ezberlenebilir ve her ölçekte işler.' },
          { t: 'h2', text: 'Gerçek fayda' },
          { t: 'ul', items: [
            'İlerlemeyi ölçülebilir yapar: "iyi gidiyor muyuz?" sorusunun cevabı fikir değil, sayı olur.',
            'Ekip içi yanlış anlamayı keser: "büyüyelim" cümlesini herkes farklı anlar; SMART cümleyi herkes aynı anlar.',
            'Bitiş çizgisi çizer: tarihi olmayan hedef sonsuza kadar "üzerinde çalışılan" hedef olarak kalır; tarih, hesap sorulabilirlik getirir.',
          ]},
        ],
      },
    ],
  },
  {
    slug: 'okr',
    section: 'hedef-performans',
    title: 'OKR (Hedefler ve Anahtar Sonuçlar)',
    question: 'Herkes çok çalışıyor ama aynı yöne mi koşuyoruz?',
    summary: 'İlham veren bir hedefi 3-5 ölçülebilir anahtar sonuca bağlayan, Intel\'de doğup Google\'da yaygınlaşan hizalanma sistemi.',
    tags: ['hedef belirleme', 'hizalanma', 'performans'],
    pages: [
      {
        slug: 'kavram',
        title: 'Kavram',
        blocks: [
          { t: 'callout', kind: 'simple', title: 'Bir cümlede', text: 'Bir cümlelik iddialı hedef (nereye?) artı üç-beş sayı (vardığımızı nereden anlayacağız?): OKR budur; hedefi herkes görür, sayılar yalan söylemez.' },
          { t: 'callout', kind: 'ornek', title: 'Esnaftan örnek', text: 'Fırıncı Necati\'nin hedefi (O): "Mahallenin kahvaltı sofrasının vazgeçilmezi olmak." Kulağa güzel ama ölçülmez. Yanına üç anahtar sonuç (KR) yazıyor: bu çeyrek sonunda (1) sabah 07:00-09:00 arası satış günde 200 liradan 350 liraya çıksın, (2) haftada en az üç kez gelen düzenli müşteri sayısı 30\'dan 60\'a çıksın, (3) kahvaltılık yeni üç ürün rafta olsun. Üç ay sonra ne hissettiğine değil, üç sayıya bakacak: ikisi tuttuysa yol doğru demektir.' },
          { t: 'p', text: 'OKR iki parçadan oluşur. Objective (hedef): kısa, ilham veren, yön gösteren bir cümle. Key Results (anahtar sonuçlar): o hedefe ulaşıldığını kanıtlayacak 3-5 ölçülebilir sonuç. Kural nettir: hedef sayı içermez, anahtar sonuçlar sayıdan başka bir şey içermez.' },
          { t: 'h2', text: 'OKR\'ı klasik hedeften ayıran özellikler' },
          { t: 'table', head: ['Özellik', 'Klasik hedef sistemi', 'OKR'], rows: [
            ['Kim görür?', 'Genelde kişi ve amiri', 'Herkes herkesinkini görür (şeffaf)'],
            ['Ne kadar iddialı?', 'Yüzde 100 tutması beklenir', 'Yüzde 70 bile başarıdır (iddialı yazılır)'],
            ['Sıklık', 'Yıllık', 'Çeyreklik (3 ay), sık gözden geçirilir'],
            ['Prime bağlı mı?', 'Çoğu zaman evet', 'Hayır: prim bağlanırsa herkes garantiyi yazar'],
            ['Sayı adedi', 'Uzun listeler', 'En fazla 3-5 anahtar sonuç'],
          ]},
          { t: 'p', text: 'En sık karışan konu SMART ile farkıdır: SMART tek bir hedefin nasıl yazılacağını, OKR ise bir ekibin veya şirketin hedeflerini birbirine nasıl bağlayıp herkesi aynı yöne nasıl koşturacağını anlatır. Anahtar sonuçların her biri zaten SMART yazılır.' },
        ],
      },
      {
        slug: 'uygulama',
        title: 'Nasıl Uygulanır',
        blocks: [
          { t: 'steps', items: [
            { title: 'Tek hedefle başla', text: 'İlk çeyrek için tek Objective ve 3 Key Result yeter. Sistemi öğrenmeden beş hedefe çıkan ekip, çeyrek ortasında listeyi unutmuş olur.' },
            { title: 'Anahtar sonuçları çıktı değil sonuç yap', text: '"Broşür bastırmak" bir faaliyettir; "yeni müşteri sayısını 20\'ye çıkarmak" bir sonuçtur. KR\'lar müşteride veya kasada görünen değişimi ölçmeli.' },
            { title: 'Haftalık nabız tut', text: 'Haftada bir 15 dakika: her KR\'a kırmızı/sarı/yeşil ver. OKR\'ın gücü yazıldığı gün değil, her hafta bakıldığı için ortaya çıkar.' },
            { title: 'Çeyrek sonunda puanla ve öğren', text: 'Her KR\'a 0 ile 1 arası puan ver. Ortalama 0.6-0.7 idealdir: hep 1 alıyorsan hedeflerin çok kolay, hep 0.3 alıyorsan gerçekçi değil demektir.' },
          ]},
          { t: 'callout', kind: 'warn', title: 'Dikkat', text: 'OKR\'ı prim ve terfiye bağlama. Bağlandığı anda herkes tutacağından emin olduğu hedefleri yazar ve sistemin iddialı hedef koyma ruhu ölür. OKR öğrenme aracıdır, sopa değil.' },
          { t: 'callout', kind: 'tip', title: 'İpucu', text: 'Küçük işletmede katman kurma: bir şirket OKR\'ı ve kişi başına en fazla bir OKR yeter. Sistemin kendisi iş olmaya başladıysa sadeleştir.' },
        ],
      },
      {
        slug: 'vaka',
        title: 'Gerçek Vaka & Fayda',
        blocks: [
          { t: 'callout', kind: 'case', title: 'Vaka: Andy Grove\'dan Google\'a belgeli yolculuk', text: 'OKR\'ın kökeni Intel\'in efsanevi yöneticisi Andy Grove\'dur: 1970\'lerde Peter Drucker\'ın hedeflerle yönetim (MBO) fikrini alıp "iMBO" adıyla ölçülebilir sonuç disiplinine çevirdi ve High Output Management kitabında anlattı. Grove\'un öğrencisi yatırımcı John Doerr, 1999\'da henüz bir yaşındaki Google\'a sistemi tanıttı. Kurucular Larry Page ve Sergey Brin sistemi benimsedi; Google bugün de çeyreklik OKR\'larla çalışır ve Doerr bu hikayeyi Measure What Matters kitabında belgeledi. Aynı sistem LinkedIn, Spotify ve Gates Vakfı gibi çok farklı ölçekteki kurumlara yayıldı.' },
          { t: 'h2', text: 'Gerçek fayda' },
          { t: 'ul', items: [
            'Hizalanma sağlar: herkesin hedefi görünür olunca "senin işin benim işimi engelliyor" sürprizleri azalır.',
            'Meşguliyet ile ilerlemeyi ayırır: faaliyet çok olabilir ama KR sayıları kıpırdamıyorsa ilerleme yoktur, bu acı gerçek erken görülür.',
            'İddiayı güvenli kılar: yüzde 70 kültürü, ekibin "tutamayız" korkusuyla küçük hedef yazmasını engeller.',
          ]},
        ],
      },
    ],
  },
  {
    slug: 'dengeli-karne',
    section: 'hedef-performans',
    title: 'Dengeli Karne (Balanced Scorecard)',
    question: 'Kasadaki para iyi görünüyor; işim gerçekten iyi mi?',
    summary: 'Şirket performansını sadece parayla değil dört pencereden (finans, müşteri, süreç, öğrenme) birlikte ölçen Kaplan-Norton modeli.',
    tags: ['performans ölçümü', 'strateji uygulama'],
    pages: [
      {
        slug: 'kavram',
        title: 'Kavram',
        blocks: [
          { t: 'callout', kind: 'simple', title: 'Bir cümlede', text: 'Sadece kasaya bakmak, arabayı sadece hız göstergesine bakıp sürmek gibidir: yakıt, motor hararet ve yol da var; dengeli karne işletmene dört göstergeli bir gösterge paneli kurar.' },
          { t: 'callout', kind: 'ornek', title: 'Esnaftan örnek', text: 'Oto tamircisi Fikret\'in kasası bu yıl gayet iyi. Ama dört pencereden bakınca tablo değişiyor: müşteri penceresi — eski müşterilerin yarısı yeni açılan servise kaymış, kasayı kurtaran tek bir filo anlaşması; süreç penceresi — araç başına tamir süresi uzamış, randevular sarkıyor; öğrenme penceresi — elektrikli araçlar çoğalıyor ama dükkanda kimse elektrikli araç eğitimi almamış. Kasa bugünü, diğer üç pencere yarını gösteriyor; Fikret yarını kaybetmek üzereyken bugüne bakıp seviniyordu.' },
          { t: 'p', text: 'Robert Kaplan ve David Norton 1992\'de Harvard Business Review\'da yayımladıkları modelle şunu söyledi: finansal rakamlar "gecikmeli göstergedir" — geçmiş kararların sonucunu gösterir. Yarının finansal sonucunu ise bugünün müşteri memnuniyeti, süreç kalitesi ve ekip yetkinliği belirler. Dört pencere birbirine neden-sonuç zinciriyle bağlıdır: öğrenen ekip süreci iyileştirir, iyi süreç müşteriyi memnun eder, memnun müşteri kasayı doldurur.' },
          { t: 'h2', text: 'Dört pencere' },
          { t: 'table', head: ['Pencere', 'Soru', 'Örnek ölçütler'], rows: [
            ['Finansal', 'Ortaklara/kendime nasıl görünüyorum?', 'Ciro, kâr marjı, nakit akışı'],
            ['Müşteri', 'Müşterime nasıl görünüyorum?', 'Tekrar gelen müşteri oranı, şikayet, tavsiye'],
            ['İç süreçler', 'Neyi kusursuz yapmalıyım?', 'Teslim süresi, hata/fire oranı, verimlilik'],
            ['Öğrenme ve gelişim', 'Yarın için ne öğreniyorum?', 'Eğitim, yeni beceri, çalışan bağlılığı, yeni ürün denemesi'],
          ]},
        ],
      },
      {
        slug: 'uygulama',
        title: 'Nasıl Uygulanır',
        blocks: [
          { t: 'steps', items: [
            { title: 'Stratejini bir cümleye indir', text: 'Karne stratejiyi ölçer; strateji yoksa ölçecek şey de yoktur. "Mahallenin en hızlı ve en güvenilir tamircisi olmak" gibi net bir cümleyle başla.' },
            { title: 'Her pencereye 2-3 ölçüt seç', text: 'Toplam 8-12 ölçütü geçme. Her ölçüt stratejik cümleye hizmet etmeli: hız iddiandaysa teslim süresi ölçülür, ölçülmüyorsa iddia laftır.' },
            { title: 'Neden-sonuç zincirini çiz', text: 'Ölçütleri okla bağla: "elektrikli araç eğitimi → yeni tür tamir yapabilme → yeni müşteri → ciro". Zincire oturmayan ölçüt karneden çıkar.' },
            { title: 'Ayda bir dört pencereyi birlikte oku', text: 'Karne, ay sonunda dört pencereye aynı masada bakıldığında çalışır. Sadece finans satırı okunuyorsa karne değil, eski usul kasa defteri var demektir.' },
          ]},
          { t: 'callout', kind: 'warn', title: 'Dikkat', text: 'En yaygın ölüm biçimi ölçüt enflasyonudur: her departmanın "bizim de ölçütümüz girsin" isteğiyle 40 kalemlik karne doğar ve kimse okumaz. Az ölçüt, çok disiplin.' },
          { t: 'callout', kind: 'tip', title: 'İpucu', text: 'Tek kişilik işletmede bile çalışır: dört pencereye birer ölçüt yaz — aylık kâr, tekrar gelen müşteri sayısı, ortalama teslim süresi, o ay öğrendiğin bir yeni şey.' },
        ],
      },
      {
        slug: 'vaka',
        title: 'Gerçek Vaka & Fayda',
        blocks: [
          { t: 'callout', kind: 'case', title: 'Vaka: Kaplan-Norton araştırmasından küresel standarda', text: 'Model, Kaplan ve Norton\'un 12 şirketle yürüttüğü bir performans ölçümü araştırmasından doğdu ve 1992\'deki "The Balanced Scorecard: Measures That Drive Performance" makalesiyle yayımlandı. En bilinen belgeli uygulamalardan biri Mobil\'in ABD pazarlama biriminin (NAM&R) 1990\'larda karneyi kullanarak sektör kârlılık sıralamasında son sıralardan birinciliğe yükselmesidir; Kaplan bu vakayı Harvard vaka çalışması olarak yazdı. Harvard Business Review, dengeli karneyi son 75 yılın en etkili yönetim fikirlerinden biri olarak listeledi; model bugün şirketler kadar hastaneler, belediyeler ve ordular tarafından da uyarlanmış durumdadır.' },
          { t: 'h2', text: 'Gerçek fayda' },
          { t: 'ul', items: [
            'Bugün-yarın dengesini kurar: kasa iyiyken çürüyen müşteri ilişkisi ve eskiyen beceri görünür hale gelir.',
            'Stratejiyi laftan ölçüte çevirir: "kaliteli hizmet" iddiası, teslim süresi ve şikayet sayısı olarak duvara asılır.',
            'Departman körlüğünü kırar: satış, üretim ve eğitim aynı neden-sonuç zincirinin halkaları olarak aynı tabloda buluşur.',
          ]},
        ],
      },
    ],
  },
  {
    slug: 'vrio',
    section: 'strateji-rekabet',
    title: 'VRIO Analizi',
    question: 'Elimdeki hangi güç gerçekten rakiplerin kopyalayamayacağı bir güç?',
    summary: 'Bir kaynağın kalıcı rekabet avantajı olup olmadığını dört soruyla (değerli, nadir, taklidi zor, örgütlenmiş) test eden model.',
    tags: ['rekabet avantajı', 'iç analiz', 'strateji'],
    pages: [
      {
        slug: 'kavram',
        title: 'Kavram',
        blocks: [
          { t: 'callout', kind: 'simple', title: 'Bir cümlede', text: 'Sahip olduğun her şeyi dört süzgeçten geçir: işe yarıyor mu, herkeste var mı, kopyalanabilir mi, kullanabiliyor musun? Dördünü de geçen şey senin gerçek kalen, gerisi herkeste olan standart donanımdır.' },
          { t: 'callout', kind: 'ornek', title: 'Esnaftan örnek', text: 'Baklavacı Mustafa "bizim avantajımız ne?" diye sayıyor: yeni fırın (değerli ama parası olan herkes alır — avantaj değil), köşe başı dükkan (değerli ve nadir — geçici avantaj), dedesinden kalan şerbet kıvamı ve 40 yıllık usta ekibi (değerli, nadir, taklit etmesi yıllar alır — kalıcı avantaj adayı). Son soru: bu ustalığı örgütleyebiliyor mu? Usta emekli olunca tarif onunla gidiyorsa hayır. Mustafa tarifi standartlaştırıp çırak yetiştirme düzeni kurunca dördüncü harf de tamamlanıyor: işte kale bu.' },
          { t: 'p', text: 'VRIO, strateji profesörü Jay Barney\'nin "kaynak temelli görüş" kuramından gelir (1991). Porter dışarıya (sektöre) bakarken Barney içeriye bakar: aynı sektördeki şirketlerin farklı kazanmasının nedeni, sahip oldukları kaynakların farklı olmasıdır. Dört harf dört sorudur ve sırayla sorulur; bir soru "hayır" aldığında kaynak o seviyede kalır.' },
          { t: 'h2', text: 'Dört süzgeç ve sonuçları' },
          { t: 'table', head: ['Soru', 'Cevap hayırsa durum', 'Cevap evetse geç'], rows: [
            ['V — Değerli mi? (Fırsat yakalatıyor veya tehdit savuşturuyor mu?)', 'Rekabet dezavantajı', 'Sonraki soruya'],
            ['R — Nadir mi? (Rakiplerin çoğunda yok mu?)', 'Rekabet eşitliği: gerekli ama fark yaratmaz', 'Sonraki soruya'],
            ['I — Taklidi zor mu? (Kopyalamak pahalı veya çok zaman mı alır?)', 'Geçici avantaj: rakip er geç kopyalar', 'Sonraki soruya'],
            ['O — Örgütlenmiş mi? (Şirket bunu kullanacak düzene sahip mi?)', 'Kullanılmayan avantaj: potansiyel boşa gider', 'Kalıcı rekabet avantajı'],
          ]},
          { t: 'p', text: 'Taklit zorluğunun tipik kaynakları: tarih (40 yıllık itibar satın alınamaz), belirsizlik (başarının tam nedeni dışarıdan çözülemez) ve sosyal karmaşıklık (ekip kültürü, müşteri ilişkileri kopyalanamaz).' },
        ],
      },
      {
        slug: 'uygulama',
        title: 'Nasıl Uygulanır',
        blocks: [
          { t: 'steps', items: [
            { title: 'Kaynak envanteri çıkar', text: 'Elle tutulanlar (makine, dükkan, para) ve tutulmayanlar (marka, ustalık, ilişkiler, tarifler) dahil 10-15 kaynak listele. En değerli kaynaklar genelde elle tutulmayanlardır.' },
            { title: 'Her kaynağı dört sorudan geçir', text: 'Sırayla ve acımasızca: V-R-I-O. Her kaynağın yanına ulaştığı seviyeyi yaz: dezavantaj / eşitlik / geçici avantaj / kalıcı avantaj.' },
            { title: 'Kaleni büyüt, gerisini yeterli tut', text: 'Yatırımın aslan payı VRIO\'dan tam geçen 1-2 kaynağa gitsin. Eşitlik seviyesindeki kaynaklarda amaç mükemmellik değil, geride kalmamaktır.' },
            { title: 'O harfini ihmal etme', text: 'En sık kaybedilen harf O\'dur: eşsiz ustalık, tek kişinin kafasındaysa şirketin değil o kişinin avantajıdır. Standartlaştır, belgele, yedekle.' },
          ]},
          { t: 'callout', kind: 'warn', title: 'Dikkat', text: 'Kendi kaynağına aşık olma: sana eşsiz görünen şey (güler yüz, kalite, tecrübe) çoğu zaman rakiplerin de kendinde gördüğü şeydir. Nadir olup olmadığını müşteriye ve pazara sor, aynaya değil.' },
          { t: 'callout', kind: 'tip', title: 'İpucu', text: 'VRIO, SWOT\'un "güçlü yönler" kutusunun kalite kontrolüdür: SWOT\'a yazdığın her güçlü yönü VRIO\'dan geçir; çoğu "eşitlik" çıkacak ve listen gerçekçileşecektir.' },
        ],
      },
      {
        slug: 'vaka',
        title: 'Gerçek Vaka & Fayda',
        blocks: [
          { t: 'callout', kind: 'case', title: 'Vaka: Southwest Havayolları ve taklit edilemeyen kültür', text: 'Barney ve strateji literatürünün klasik örneği Southwest Havayolları\'dır: düşük maliyetli modelin görünen parçaları (tek uçak tipi, ikincil havaalanları, hızlı uçak dönüşü) rakiplerce defalarca kopyalandı — Continental Lite ve United\'ın Shuttle girişimi bunu birebir denedi ve başarısız oldu. Kopyalanamayan şey görünmeyen parçaydı: onlarca yılda kurulmuş çalışan kültürü, sendika ilişkileri ve ekiplerin uçağı dakikalar içinde çevirmesini sağlayan işbirliği düzeni. Değerli, nadir, sosyal karmaşıklığı nedeniyle taklidi zor ve şirketçe örgütlenmiş bu kaynak, Southwest\'in ABD havacılık tarihinde onlarca yıl kesintisiz kârlılık gibi ender bir sonuç üretmesinin belgeli açıklamasıdır.' },
          { t: 'h2', text: 'Gerçek fayda' },
          { t: 'ul', items: [
            'Yatırım önceliğini netleştirir: para ve emek, herkesin alabildiği makineye değil, kimsenin kopyalayamadığı kaleye gider.',
            'Sahte özgüveni söndürür: "bizim kalitemiz farklı" iddiası dört soruluk teste girer ve çoğu zaman küçülür — bu acı ama ucuz bir derstir.',
            'Kritik bağımlılığı gösterir: O sorusu, avantajın tek bir ustanın veya tek bir müşteri ilişkisinin üzerinde durduğunu erken haber verir.',
          ]},
        ],
      },
    ],
  },
  {
    slug: 'mavi-okyanus',
    section: 'strateji-rekabet',
    title: 'Blue Ocean Stratejisi (Mavi Okyanus)',
    question: 'Rakiplerle boğuşmak yerine rakipsiz bir alan açabilir miyim?',
    summary: 'Red Ocean\'daki (kanlı rekabet okyanusu) boğuşmayı terk edip dört eylem çerçevesiyle (yok et, azalt, artır, yarat) rakipsiz pazar alanı açma stratejisi.',
    tags: ['farklılaşma', 'inovasyon', 'pazar yaratma'],
    pages: [
      {
        slug: 'kavram',
        title: 'Kavram',
        blocks: [
          { t: 'callout', kind: 'simple', title: 'Bir cümlede', text: 'Herkesin aynı müşteri için birbirini yediği kızıl okyanusta bir balık daha olmak yerine, sektörün ezberini bozup kimsenin avlanmadığı mavi bir okyanus aç: rekabeti yenmenin en iyi yolu rekabeti anlamsız kılmaktır.' },
          { t: 'callout', kind: 'ornek', title: 'Esnaftan örnek', text: 'Mahallede yedi berber var ve hepsi aynı oyunu oynuyor: daha çok ayna, daha çok koltuk, biraz daha ucuz fiyat. Berber Şevket ezberi bozuyor: televizyonu ve çay faslını kaldırıyor (yok et), bekleme süresini azaltıyor (azalt), randevu dakikliğini artırıyor (artır) ve öğle arasında işyerlerine gidip 15 dakikada yerinde tıraş hizmeti yaratıyor (yarat). Artık rakibi diğer altı berber değil; çünkü oynadığı oyun başka: vakti olmayan çalışanın berberi. Aynı sokakta, ama başka bir okyanusta.' },
          { t: 'p', text: 'W. Chan Kim ve Renee Mauborgne, 2005 tarihli Blue Ocean Strategy (Mavi Okyanus Stratejisi) kitabında yüz yılı aşkın dönemden 150 stratejik hamleyi inceledi. Bulguları: kalıcı büyük başarılar, mevcut pazarda rakibi yenerek değil, yeni talep yaratarak geldi. Modelin kalbi "değer inovasyonu"dur: geleneksel stratejinin "ya düşük maliyet ya farklılaşma, ikisi birden olmaz" ezberine karşı, sektörün gereksiz maliyetlerini atıp alıcıya yeni değer ekleyerek ikisini aynı anda yapmak.' },
          { t: 'h2', text: 'Red Ocean nedir? İki okyanusun farkı' },
          { t: 'p', text: 'Kitabın çıkış noktası Red Ocean\'dır (kırmızı okyanus): sınırları belli, kuralları oturmuş mevcut pazarlar. Burada herkes aynı müşteri için boğuşur; rekabet kızıştıkça kâr erir ve sular kana bulanır — adı buradan gelir. Blue Ocean ise henüz var olmayan pazar alanıdır: rekabet yoktur, çünkü oyunun kuralları henüz yazılmamıştır.' },
          { t: 'table', head: ['', 'Red Ocean (kırmızı okyanus)', 'Blue Ocean (mavi okyanus)'], rows: [
            ['Pazar', 'Mevcut pazarda yarış', 'Rakipsiz yeni pazar alanı yarat'],
            ['Rekabet', 'Rakibi yenmeye çalış', 'Rekabeti anlamsızlaştır'],
            ['Talep', 'Mevcut talebi paylaş', 'Yeni talep yarat ve yakala'],
            ['Değer-maliyet', 'Ya değer ya düşük maliyet: birini seç', 'Değer inovasyonu: ikisini birden kur'],
            ['Strateji', 'Farklılaşma VEYA maliyet liderliği', 'Farklılaşma VE düşük maliyet'],
          ]},
          { t: 'h2', text: 'Dört eylem çerçevesi' },
          { t: 'table', head: ['Eylem', 'Soru', 'Berber Şevket örneği'], rows: [
            ['Yok et', 'Sektörün kanıksadığı hangi unsur tamamen atılabilir?', 'Televizyon, uzun sohbet-çay faslı'],
            ['Azalt', 'Hangi unsur sektör standardının çok altına çekilebilir?', 'Bekleme süresi, dükkan masrafı'],
            ['Artır', 'Hangi unsur sektör standardının çok üstüne çıkarılabilir?', 'Dakiklik, hız, randevu güvenilirliği'],
            ['Yarat', 'Sektörün hiç sunmadığı ne sunulabilir?', 'İşyerinde yerinde tıraş hizmeti'],
          ]},
          { t: 'p', text: 'İlk iki eylem maliyeti düşürür, son iki eylem alıcı değerini yükseltir. Dördü birlikte uygulanınca "hem ucuz hem farklı" mümkün olur — mavi okyanusun formülü budur.' },
        ],
      },
      {
        slug: 'uygulama',
        title: 'Nasıl Uygulanır',
        blocks: [
          { t: 'steps', items: [
            { title: 'Sektörün rekabet unsurlarını listele', text: 'Senin sektöründe herkes hangi 6-10 unsurda yarışıyor? (fiyat, çeşit, hız, dekor, hizmet...) Bu liste sektörün ezberidir.' },
            { title: 'Strateji tuvalini çiz', text: 'Her unsurda kendini ve tipik rakibi puanla, çizgiyle birleştir. Çizgin rakiplerinkiyle aynı şekildeyse mavi okyanusta değil, kızıl okyanustasın.' },
            { title: 'Dört eylemi uygula', text: 'Yok et / azalt / artır / yarat sorularını sırayla sor. Kural: sadece artırıp yaratırsan maliyetin patlar; yok etme ve azaltma cesareti modelin yarısıdır.' },
            { title: 'Müşteri olmayanlara bak', text: 'Mavi okyanusun müşterisi genelde bugünkü müşterin değildir: sektörü hiç kullanmayanlara "neden kullanmıyorsun?" diye sor. Cevaplar, yaratılacak unsurun adresidir.' },
          ]},
          { t: 'callout', kind: 'warn', title: 'Dikkat', text: 'Mavi okyanus sonsuza kadar mavi kalmaz: başarı taklitçileri çeker ve okyanus zamanla kızıllaşır. Model tek seferlik sihir değil, ezber bozmayı periyodik tekrarlama disiplinidir.' },
          { t: 'callout', kind: 'tip', title: 'İpucu', text: '"Yok et" sorusuna hiç cevap bulamıyorsan henüz yeterince cesur düşünmüyorsun demektir: sektörün en tartışılmaz görünen unsuru, çoğu zaman en verimli yok etme adayıdır.' },
        ],
      },
      {
        slug: 'vaka',
        title: 'Gerçek Vaka & Fayda',
        blocks: [
          { t: 'callout', kind: 'case', title: 'Vaka: Cirque du Soleil — sirki yeniden icat etmek', text: 'Kitabın açılış vakası Cirque du Soleil\'dir. 1984\'te Kanadalı sokak sanatçısı Guy Laliberte\'nin kurduğu topluluk, gerileyen sirk sektörünün en pahalı unsurlarını yok etti: hayvan gösterileri, yıldız akrobatlar, üç pistli kargaşa. Buna karşılık tiyatronun unsurlarını yarattı: özgün hikaye, canlı müzik, artistik dans ve her gösteri için ayrı sanatsal tema. Sonuç ne sirkti ne tiyatro: yetişkinlerin ve kurumsal müşterilerin tiyatro bileti fiyatı ödediği yeni bir eğlence türü. Ringling Bros. gibi devlerin küçüldüğü dönemde Cirque du Soleil dünya çapında 300\'den fazla şehirde on milyonlarca seyirciye ulaştı — rakiplerinden pazar payı çalarak değil, sirke hiç gitmeyen bir kitleyi müşteri yaparak.' },
          { t: 'h2', text: 'Gerçek fayda' },
          { t: 'ul', items: [
            'Fiyat savaşından çıkış kapısı açar: oyunun kurallarını değiştiren, kimseyle fiyat kıyaslanmaz.',
            '"Hem ucuz hem iyi olmaz" ezberini kırar: yok et ve azalt eylemleri, farklılaşmanın parasını sektörün gereksiz maliyetlerinden çıkarır.',
            'Yeni müşteri getirir: mevcut pastayı bölüşmek yerine pastayı büyütür — sektörü hiç kullanmayanlar en büyük büyüme kaynağıdır.',
          ]},
        ],
      },
    ],
  },
  {
    slug: 'mvp-ve-gate-dongusu',
    section: 'proje-urun',
    title: 'MVP ve Kapı (Gate) Döngüsü',
    question: 'Bu fikre devam mı, yön değişikliği mi, fren mi?',
    summary: 'Fikri en küçük çalışan ürünle (MVP) test edip her aşama kapısında dört karardan birini (ilerle, öğren, pivot, öldür) veren girişim disiplini.',
    tags: ['girişimcilik', 'doğrulama', 'karar kapısı'],
    pages: [
      {
        slug: 'kavram',
        title: 'Kavram',
        blocks: [
          { t: 'callout', kind: 'simple', title: 'Bir cümlede', text: 'Hayalindeki ürünün en küçük çalışan halini yap, gerçek müşteriye göster ve her aşamanın sonunda önceden yazdığın eşiklere bakıp dört karardan birini ver: ilerle, aynı yerde kalıp öğren, yön değiştir (pivot) ya da projeyi öldür.' },
          { t: 'callout', kind: 'ornek', title: 'Esnaftan örnek', text: 'Pastacı Leyla mahalleye glutensiz pasta dükkanı açmayı düşünüyor. Dükkan kiralamak yerine küçük bir test yapıyor: hafta sonu için 20 glutensiz pasta hazırlayıp sosyal medyadan ön sipariş topluyor. Kapı kuralını da önceden yazıyor: "15 ve üzeri sipariş gelirse ilerlerim; 5-14 gelirse bir şey değiştirip tekrar denerim; 5\'ten az gelirse bu mahallede bu iş olmaz, vazgeçerim." 8 sipariş geliyor. Leyla ne körü körüne dükkan kiralıyor ne de hemen vazgeçiyor: fiyatı ve tarifi değiştirip bir tur daha test ediyor. Dükkan parası hala cebinde.' },
          { t: 'p', text: 'Bu model iki fikri birleştirir. Birincisi MVP (Minimum Viable Product — yaşayabilir en küçük ürün): fikri kanıtlamak için gereken en küçük, ama gerçekten çalışan ve utandırmayan sürüm. İkincisi kapı (gate) sistemi: her fazın sonunda, duyguyla değil önceden yazılmış ölçütlerle verilen bir geçiş kararı. MVP veriyi üretir, kapı o veriyle karar verdirir; biri olmadan diğeri işlemez.' },
          { t: 'h2', text: 'Her kapıdaki dört karar' },
          { t: 'table', head: ['Karar', 'Ne zaman verilir?', 'Sonraki adım'], rows: [
            ['İlerle', 'Ölçütlerin tamamı eşiği geçti', 'Sonraki faza geç, kapsamı büyüt'],
            ['Öğren', 'Sinyal olumlu ama eşik tutmadı', 'Aynı fazda kal, eksik kanıtı güçlendir'],
            ['Pivot', 'Bu haliyle olmuyor ama öğrenilenler başka bir yol gösteriyor', 'Önceki faza dön: problemi, müşteriyi veya çözümü değiştir'],
            ['Öldür', 'Fikirler de tükendi, kaynak (para/zaman) da bitiyor', 'Projeyi onurluca kapat, kalan kaynağı kurtar'],
          ]},
          { t: 'p', text: 'Kritik kural: eşikler test yapılmadan ÖNCE yazılır. Sonuç geldikten sonra eşik belirleyen insan, kendini haklı çıkaracak eşiği seçer — kapı sisteminin bütün gücü bu kendini kandırmayı yasaklamasındadır.' },
        ],
      },
      {
        slug: 'uygulama',
        title: 'Nasıl Uygulanır',
        blocks: [
          { t: 'steps', items: [
            { title: 'Hipotezini tek cümle yaz', text: '"[Müşteri X], [problem Y]\'yi yaşıyor ve [çözüm Z]\'ye para öder." Test edilecek şey ürün değil, bu cümledir.' },
            { title: 'En küçük testi tasarla', text: 'Ürünü yapmadan önce ilgiyi ölç: ön sipariş, bekleme listesi, elle sunulan hizmet. Ödeme veya somut taahhüt en güçlü sinyaldir; "güzel fikir" iltifatı veri değildir.' },
            { title: 'Kapı eşiklerini önceden yaz', text: 'Test başlamadan karar kurallarını belirle: hangi sayı ilerleten, hangi aralık öğreten, hangi sonuç öldüren? Yazılı olmayan eşik, esneyen eşiktir.' },
            { title: 'Kararı günlüğe kaydet', text: 'Her kapıda karar günlüğü tut: tarih, hipotez, veri, karar, gerekçe. Aylar sonra "neden bu yoldayız?" sorusunun cevabı hafızada değil, kayıtta olmalı.' },
          ]},
          { t: 'callout', kind: 'warn', title: 'Dikkat', text: 'İki ölümcül hata vardır: kapısız MVP (test yapılır ama sonuç ne olursa olsun devam edilir — test tiyatroya dönüşür) ve MVP\'siz kapı (veri olmadan toplantı masasında fikir yarıştırılır). Batmış emeğe acıyıp "bu kadar uğraştık, devam edelim" demek, kapı sisteminin tam olarak engellemek için var olduğu hatadır.' },
          { t: 'callout', kind: 'tip', title: 'İpucu', text: 'Basit bir umut formülü kullan: Umut = yeni fikirler x kalan kaynak. Denenecek fikir kalmadıysa veya kaynak bittiyse çarpım sıfırdır; öldür kararı acı değil, kalan kaynağı bir sonraki fikre taşıyan akıllıca bir tasarruftur.' },
        ],
      },
      {
        slug: 'vaka',
        title: 'Gerçek Vaka & Fayda',
        blocks: [
          { t: 'callout', kind: 'case', title: 'Vaka: Zappos — ayakkabı stoklamadan ayakkabıcılık testi', text: 'MVP literatürünün en belgeli örneği Zappos\'un kuruluşudur: 1999\'da Nick Swinmurn "insanlar internetten ayakkabı alır mı?" hipotezini test etmek için ne depo kurdu ne stok aldı. Mahalledeki ayakkabı mağazalarına gidip ürünlerin fotoğrafını çekti, basit bir siteye koydu; sipariş gelince mağazadan kendisi satın alıp kargoladı. Bu elle yürütülen düzen para kazandırmıyordu ama asıl soruyu ucuza cevapladı: talep gerçekti. Kapı kararı "ilerle" oldu, iş kuruldu ve Zappos 2009\'da Amazon tarafından yaklaşık 1,2 milyar dolarlık hisse anlaşmasıyla satın alındı. Eric Ries\'in Yalın Girişim (The Lean Startup, 2011) kitabı bu tür doğrulama pratiklerini sistemleştirerek dünyaya yaydı; aynı kapı mantığı ilaç geliştirmeden ürün yönetimine kadar faz-kapı (stage-gate) adıyla kurumsal standarttır.' },
          { t: 'h2', text: 'Gerçek fayda' },
          { t: 'ul', items: [
            'Büyük batışı küçük derse çevirir: yanlış fikir dükkan kirasıyla değil, bir hafta sonluk testle ortaya çıkar.',
            'Duyguyu karardan ayırır: önceden yazılmış eşikler, "emek verdik, devam" tuzağını ve kurucu inadını frenler.',
            'Vazgeçmeyi meşrulaştırır: öldür kararı başarısızlık değil, sistemin dört normal çıkışından biridir; kaynak bir sonraki denemeye sağlam devredilir.',
          ]},
        ],
      },
    ],
  },
]
