import type { DecisionModel } from '../types'

/**
 * Strateji Araçları — Oyun Teorisi Oyunları ve Kaynakları raporundan damıtılan kavramlar.
 * Kaynak: xxx/Oyun Teorisi Oyunları ve Kaynakları.md
 * Not: 'mahkum-ikilemi' section3'te zaten var; burada tekrarlanmaz.
 */
export const section5bModels: DecisionModel[] = [
  {
    slug: 'guven-stratejileri',
    section: 'oyun-teorisi-muzakere',
    title: 'Güven Stratejileri Turnuvası',
    question: 'Tekrar tekrar karşılaştığın insanlara karşı hangi tavır uzun vadede kazanır?',
    summary: 'Axelrod turnuvasından çıkan ders: aynı kişiyle tekrar tekrar oynanan oyunlarda hangi davranış tarzının kazandığını gösteren strateji karşılaştırması.',
    tags: ['oyun teorisi', 'güven', 'strateji', 'işbirliği'],
    pages: [
      {
        slug: 'kavram',
        title: 'Kavram',
        blocks: [
          { t: 'callout', kind: 'simple', title: 'Bir cümlede', text: 'Aynı insanlarla tekrar tekrar iş yapıyorsan, en kazançlı tavır ne saf iyilik ne sürekli kurnazlıktır: iyi başla, kötülüğe anında karşılık ver, düzeleni hemen affet.' },
          { t: 'callout', kind: 'ornek', title: 'Apartman örneği', text: 'Apartmanda dört komşu düşün. Biri herkese hep iyilik yapar, herkes onu kullanır. Biri hep kurnazdır, kimse ona bir daha yardım etmez. Biri bir kez kırılınca ömür boyu küser, yalnız kalır. Bir de Ayşe var: iyilikle başlar, kötülük görürse o hafta yardım etmez, komşu düzelince eskisi gibi devam eder. Yıllar sonra apartmanda en rahat yaşayan Ayşe olur.' },
          { t: 'p', text: 'Siyaset bilimci Robert Axelrod 1980 civarında bir turnuva düzenledi: dünyanın dört yanından araştırmacılar, tekrarlanan güven oyununda yarışacak strateji programları gönderdi. Nicky Case\'in "The Evolution of Trust" (Güvenin Evrimi) adlı ücretsiz web oyunu bu turnuvayı herkesin oynayabileceği hâle getirdi. Ortaya çıkan karakterler günlük hayattan tanıdıktır.' },
          { t: 'table', head: ['Strateji', 'Nasıl davranır', 'Uzun vadede sonucu'], rows: [
            ['Taklitçi (kısasa kısas)', 'İyilikle başlar, karşı tarafın son hamlesini aynen yansıtır', 'Turnuvanın kazananı: sömürülmez, küsmez'],
            ['Hep İşbirlikçi', 'Ne olursa olsun iyilik yapar', 'Kurnazlar tarafından sömürülür, kaybeder'],
            ['Hep Hilekar', 'Her fırsatta kandırır', 'Kısa vadede kazanır, sonra herkes onu terk eder'],
            ['Kin Güden', 'Bir kez kandırılırsa sonsuza dek karşılık verir', 'Küçük bir yanlış anlaşılma bile ilişkiyi bitirir'],
            ['Dedektif', 'Önce yoklar; misilleme görmezse sömürür', 'Karşısında taklitçi varsa uslu durur'],
          ]},
          { t: 'p', text: 'Turnuvanın ikinci büyük dersi "gürültü"dür: gerçek hayatta mesajlar yanlış anlaşılır, iyi niyetli hamleler kaza ile kötü görünür. Gürültülü ortamda katı kısasa kısas iki tarafın sonsuz misilleme döngüsüne girmesine yol açabilir; bu yüzden kazanan stratejiye küçük bir affedicilik payı eklemek gerekir.' },
        ],
      },
      {
        slug: 'uygulama',
        title: 'Nasıl Uygulanır',
        blocks: [
          { t: 'steps', items: [
            { title: 'İyilikle başla', text: 'Yeni bir iş ilişkisinde ilk hamlen işbirliği olsun. Turnuvada üst sıraları hep "kibar" stratejiler aldı; ilk kandıran taraf olmak uzun vadede kaybettirir.' },
            { title: 'Karşılık ver, ama orantılı', text: 'Kandırıldığında görmezden gelme; net ve orantılı bir karşılık ver. Karşılıksız iyilik, kurnaz stratejileri besler ve çoğaltır.' },
            { title: 'Affetmeyi bil', text: 'Karşı taraf düzelince sen de düzel. Kin tutmak seni "Kin Güden" yapar; bir yanlış anlaşılma bütün ilişkiyi bitirir.' },
            { title: 'Gürültü payı bırak', text: 'Kötü görünen bir hamle kasıt mı, kaza mı? Karşılık vermeden önce bir kez sor. Yanlış anlaşılmalar (gürültü) hesaba katılmazsa iki iyi niyetli taraf bile savaşa girer.' },
          ]},
          { t: 'callout', kind: 'tip', title: 'İpucu', text: 'Bu strateji ancak ilişki tekrarlıysa çalışır. Karşı tarafla bir daha karşılaşmayacaksan önce oyunu tekrarlıya çevir: referans iste, aşamalı ödeme yap, ortak tanıdık bul.' },
          { t: 'callout', kind: 'warn', title: 'Dikkat', text: 'Kısasa kısası "intikam" ile karıştırma. Karşılık bir hamlelik ve orantılıdır; amacı cezalandırmak değil, sömürüyü kârsız hâle getirmektir.' },
        ],
      },
      {
        slug: 'vaka',
        title: 'Gerçek Vaka & Fayda',
        blocks: [
          { t: 'callout', kind: 'case', title: 'Vaka: Birinci Dünya Savaşı siper barışı', text: 'Birinci Dünya Savaşı\'nda Batı Cephesi\'nin bazı bölgelerinde "yaşa ve yaşat" denen belgelenmiş bir düzen ortaya çıktı: karşılıklı siperlerdeki askerler, aynı birliklerle aylarca karşı karşıya kaldıkları için birbirini kasten vurmamaya başladı. Topçular her gün aynı saatte, herkesin bildiği boş noktaya ateş ediyordu. Kimse anlaşma imzalamadı; düzen kendiliğinden, kısasa kısas mantığıyla kuruldu: sen vurmazsan ben de vurmam, vurursan misilleme kesindir. Axelrod bu vakayı "İşbirliğinin Evrimi" (1984) kitabında tekrarlı oyunun gücüne kanıt olarak inceledi; komutanlar düzeni ancak birlikleri sürekli değiştirerek, yani oyunu tek seferlik hâle getirerek bozabildi.' },
          { t: 'h2', text: 'Gerçek fayda' },
          { t: 'ul', items: [
            'Ekip ve tedarikçi ilişkilerinde tavır seçimini şansa bırakmaz: iyi başla, karşılık ver, affet formülü test edilmiş bir turnuva galibidir.',
            'Sömürülen "iyi insan" tuzağından çıkarır: karşılıksız iyiliğin kurnazlığı çoğalttığını gösterir, sınır koymayı meşrulaştırır.',
            'Kavga büyümeden durdurur: kötü görünen hamlenin gürültü (yanlış anlaşılma) olabileceğini hatırlatır, misilleme döngüsünü keser.',
          ]},
        ],
      },
    ],
  },
  {
    slug: 'ortak-mallar-trajedisi',
    section: 'oyun-teorisi-muzakere',
    title: 'Ortak Malların Trajedisi',
    question: 'Herkesin kullandığı ama kimsenin sahiplenmediği kaynaklar neden tükenir?',
    summary: 'Ortak kaynakta herkesin kendi payını büyütmesinin, sonunda kaynağı herkes için yok etmesini açıklayan model.',
    tags: ['oyun teorisi', 'kaynak yönetimi', 'ekoloji', 'yönetişim'],
    pages: [
      {
        slug: 'kavram',
        title: 'Kavram',
        blocks: [
          { t: 'callout', kind: 'simple', title: 'Bir cümlede', text: 'Ortak bir kaynaktan herkes "benim küçük payım ne fark eder" diyerek fazla alırsa, kaynak herkes için biter.' },
          { t: 'callout', kind: 'ornek', title: 'Ofis mutfağı örneği', text: 'Ofiste ortak bir çay ocağı var. Herkes çayı içiyor ama kimse su koymuyor, bardağını yıkamıyor; "bir bardaktan ne olur" diyor. Üç hafta sonra ocak pislikten kullanılmaz hâle geliyor ve artık kimse çay içemiyor. Tek tek herkes akıllıca davrandı; toplam sonuç herkes için aptalca oldu.' },
          { t: 'p', text: 'Model, sahibi olmayan ama herkese açık kaynaklarda çalışır: mera, balık stoku, temiz hava, ekip içindeki ortak zaman. Bireysel kazanç kişiye gider, zarar ise herkese bölünür; bu yüzden her birey için "fazla almak" matematiksel olarak mantıklıdır. Kaynak dosyadaki "Eco" adlı çok oyunculu oyun tam bunu simüle eder: oyuncular bir meteoru durdurmak için sanayi kurmak zorundadır, ama kirlilik ortak ekosistemi öldürür; tek çare oyuncuların kendi çıkarlarını sınırlayan yasaları birlikte çıkarıp oylamasıdır.' },
          { t: 'table', head: ['Durum', 'Bireyin kazancı', 'Topluluğun kaybı', 'Sonuç'], rows: [
            ['Herkes ölçülü kullanır', 'Küçük ama sürekli', 'Yok', 'Kaynak nesiller boyu yaşar'],
            ['Bir kişi fazla alır', 'Büyük', 'Herkese bölünmüş, hissedilmez', 'Diğerleri de fazla almaya başlar'],
            ['Herkes fazla alır', 'Kısa süreli', 'Kaynağın tamamen çöküşü', 'Kimse hiçbir şey alamaz'],
            ['Kural + denetim + yaptırım', 'Küçük ama sürekli', 'Yok', 'Trajedi engellenir'],
          ]},
          { t: 'p', text: 'Trajedi bir karakter kusuru değil, yapı sorunudur: aynı insanlar kural, denetim ve yaptırım olan bir yapıya konduğunda kaynak korunur. Çözüm ahlak dersi vermek değil, oyunun kurallarını değiştirmektir.' },
        ],
      },
      {
        slug: 'uygulama',
        title: 'Nasıl Uygulanır',
        blocks: [
          { t: 'steps', items: [
            { title: 'Ortak kaynağı adlandır', text: 'Ekipte veya işte sahibi olmayan ama herkesin tükettiği şeyi bul: ortak bütçe, toplantı süresi, teknik borç, marka itibarı, depo alanı.' },
            { title: 'Kullanımı görünür yap', text: 'Kim ne kadar alıyor, herkes görsün. Trajedi karanlıkta büyür; sayaç, pano veya basit bir liste çoğu zaman tek başına davranışı düzeltir.' },
            { title: 'Kuralı birlikte koy', text: 'Sınırı tepeden dayatma; kullananlara birlikte koydurt. İnsanlar kendi oyladıkları kurala, dayatılan kuraldan çok daha fazla uyar.' },
            { title: 'Yaptırımı baştan belirle', text: 'Kural ihlalinin küçük ama kesin bir bedeli olsun. Bedelsiz kural, kuralsızlıktan daha yıpratıcıdır çünkü uyanları enayi durumuna düşürür.' },
          ]},
          { t: 'callout', kind: 'tip', title: 'İpucu', text: 'En etkili ilk adım ölçümdür: ortak kaynağa bir sayaç koy. "Bu ay ortak bütçenin yüzde kaçını hangi ekip kullandı" tablosu, çoğu zaman hiç kural koymadan davranışı değiştirir.' },
          { t: 'callout', kind: 'warn', title: 'Dikkat', text: 'Suçlu aramak trajediyi çözmez. Sorun kişilerde değil yapıdadır: aynı insanları kurallı bir yapıya koyunca davranış değişir. Kişileri değiştirip yapıyı korursan trajedi yeni kişilerle tekrar eder.' },
        ],
      },
      {
        slug: 'vaka',
        title: 'Gerçek Vaka & Fayda',
        blocks: [
          { t: 'callout', kind: 'case', title: 'Vaka: Kuzey Atlantik morina çöküşü', text: 'Kanada\'nın Newfoundland kıyılarındaki morina stoku, beş yüz yıl boyunca dünyanın en zengin balıkçılık sahalarından biriydi. Yirminci yüzyılda fabrika gemileri devreye girdi; her tekne için fazladan bir ağ atmak bireysel olarak kârlıydı, stoktaki azalma ise herkese bölünüyordu. Uyarılara rağmen kotalar hep yüksek tutuldu. 1992\'de stok tarihsel seviyesinin yüzde birinin altına düşünce Kanada hükümeti avlanmayı tamamen yasakladı: yaklaşık 30 bin kişi bir gecede işsiz kaldı ve stok on yıllar geçmesine rağmen eski hâline dönmedi. Herkes kendi küçük payını korurken, herkesin geçim kaynağı yok oldu.' },
          { t: 'h2', text: 'Gerçek fayda' },
          { t: 'ul', items: [
            'Şirket içindeki görünmez ortak kaynakları (teknik borç, marka itibarı, ekip enerjisi) tükenmeden fark ettirir.',
            'Suçlamayı yapı tasarımına çevirir: "kim yaptı" yerine "hangi kural eksik" sorusunu sordurur.',
            'Kota, sayaç ve ortak kural gibi araçların neden işe yaradığını gösterir; kural koymayı keyfilik değil kaynak koruma yapar.',
          ]},
        ],
      },
    ],
  },
  {
    slug: 'sifir-toplamli-oyunlar',
    section: 'oyun-teorisi-muzakere',
    title: 'Sıfır Toplamlı ve Sıfır Toplamlı Olmayan Oyunlar',
    question: 'Bu mücadelede birinin kazanması için diğerinin gerçekten kaybetmesi mi gerekiyor?',
    summary: 'Pastanın sabit mi yoksa büyütülebilir mi olduğunu ayırt ederek yanlış rekabet ve yanlış işbirliğinden koruyan model.',
    tags: ['oyun teorisi', 'müzakere', 'rekabet', 'işbirliği'],
    pages: [
      {
        slug: 'kavram',
        title: 'Kavram',
        blocks: [
          { t: 'callout', kind: 'simple', title: 'Bir cümlede', text: 'Bazı oyunlarda biri kazanınca öteki kaybeder (pasta sabittir), bazılarında ise iki taraf birden kazanabilir veya kaybedebilir (pasta büyür ya da küçülür); ilk yapılacak iş hangisinde olduğunu anlamaktır.' },
          { t: 'callout', kind: 'ornek', title: 'Portakal örneği', text: 'İki kardeş tek portakal için kavga eder; anne ortadan bölüşür, ikisi de yarım alır. Sonra anlaşılır ki biri portakalın suyunu içmek, öteki kabuğunu kek için rendelemek istiyormuş. Doğru sorular sorulsaydı ikisi de istediğinin tamamını alacaktı. Kavga sıfır toplamlı görünüyordu; aslında değildi.' },
          { t: 'p', text: 'Satranç, tavla ve tek kalemlik fiyat pazarlığı sıfır toplamlıdır (zero-sum): birinin puanı artınca diğerininki aynı miktar azalır. Ticaret, ortaklık ve çoğu iş ilişkisi ise sıfır toplamlı değildir (non-zero-sum): işbirliğiyle toplam büyür, güvensizlikle toplam küçülür. Kaynak dosyadaki "The Evolution of Trust" oyunu tam olarak bu ayrımı öğretir, DeepMind\'ın OpenSpiel araştırma çerçevesi ise her iki oyun türünü de bilgisayarda modelleyerek yapay zeka stratejilerini bunlar üzerinde eğitir.' },
          { t: 'table', head: ['Özellik', 'Sıfır toplamlı oyun', 'Sıfır toplamlı olmayan oyun'], rows: [
            ['Pasta', 'Sabit: biri alırsa öteki alamaz', 'Esnek: birlikte büyütülebilir veya küçültülebilir'],
            ['Örnek', 'Satranç, ihale, sabit bütçe paylaşımı', 'Ticaret, ortaklık, uzun vadeli müşteri ilişkisi'],
            ['Doğru tavır', 'Rekabetçi: bilgini koru, avantaj ara', 'İşbirlikçi: bilgi paylaş, ortak değer yarat'],
            ['Tipik hata', 'Saflıkla her şeyi paylaşmak', 'Kavga edip büyüyebilecek pastayı küçültmek'],
          ]},
          { t: 'p', text: 'En pahalı hata, oyunun türünü yanlış teşhis etmektir: sıfır toplamlı olmayan bir ilişkiyi savaş gibi oynayan, iki tarafın da kazanabileceği değeri yakar; sıfır toplamlı bir pazarlığı saflıkla oynayan ise soyulur.' },
        ],
      },
      {
        slug: 'uygulama',
        title: 'Nasıl Uygulanır',
        blocks: [
          { t: 'steps', items: [
            { title: 'Pastayı teşhis et', text: 'Karşındakinin kazanması senin kaybetmeni zorunlu kılıyor mu? Bu soruya dürüst cevap ver. Cevap "hayır" ise oyun sıfır toplamlı değildir ve savaş taktiği yanlıştır.' },
            { title: 'Çıkarları ayrıştır', text: 'Pozisyonların (ne istediklerinin) altındaki çıkarları (neden istediklerini) sor. Portakal kavgasındaki su ve kabuk gibi, taraflar çoğu zaman aslında farklı şeyler ister.' },
            { title: 'Pastayı büyüt, sonra böl', text: 'Önce birlikte toplam değeri artıracak seçenekler üret (vade, kapsam, ek hizmet, farklı takvim), bölüşme pazarlığını en sona bırak.' },
            { title: 'Sıfır toplamlı bölümde net ol', text: 'Pasta gerçekten sabitse (tek kalem fiyat gibi) bunu kabul et: hedef rakamını ve yürüyüp gideceğin sınırı önceden belirle, orada rekabetçi oyna.' },
          ]},
          { t: 'callout', kind: 'tip', title: 'İpucu', text: 'Çoğu gerçek müzakere karmadır: bazı kalemler sıfır toplamlı (fiyat), bazıları değildir (vade, kapsam, referans olma). Kalemleri ayır; büyütülebilir kalemlerde işbirliği yap, sabit kalemde sıkı pazarlık et.' },
          { t: 'callout', kind: 'warn', title: 'Dikkat', text: 'Her şeyi sıfır toplamlı görmek bir düşünce hastalığıdır: iş hayatındaki ilişkilerin çoğu tekrarlıdır ve tekrarlı ilişkide bugünkü "zafer", yarınki kaybedilmiş ortaklıktır.' },
        ],
      },
      {
        slug: 'vaka',
        title: 'Gerçek Vaka & Fayda',
        blocks: [
          { t: 'callout', kind: 'case', title: 'Vaka: Camp David anlaşması', text: '1978\'de Mısır ile İsrail, Sina Yarımadası için masaya oturdu. Toprak pazarlığı sıfır toplamlı görünüyordu: sınır nereden çizilirse çizilsin, birinin kazandığı kilometreyi öteki kaybedecekti ve görüşmeler defalarca tıkandı. Çözüm, pozisyonların altındaki çıkarlara inince geldi: İsrail\'in asıl derdi toprak değil güvenlikti; Mısır\'ın asıl derdi ise egemenlik ve itibardı. Anlaşmada Sina\'nın tamamı Mısır\'a döndü (egemenlik), ancak bölge büyük ölçüde askersizleştirildi (güvenlik). Sabit görünen pasta, çıkarlar ayrıştırılınca iki tarafın da temel hedefine ulaştığı bir çözüme dönüştü; anlaşma bugün hâlâ yürürlüktedir.' },
          { t: 'h2', text: 'Gerçek fayda' },
          { t: 'ul', items: [
            'Yanlış savaştan korur: büyütülebilir bir ilişkiyi fiyat kavgasıyla yakmadan önce oyunun türünü sorgulatır.',
            'Müzakere hazırlığını somutlaştırır: pozisyon ve çıkar ayrımı, tıkanan pazarlıklarda yeni seçenekler açar.',
            'Saflıktan da korur: gerçekten sabit pastalı kalemlerde net hedef ve yürüme sınırıyla masaya oturmayı öğretir.',
          ]},
        ],
      },
    ],
  },
  {
    slug: 'schelling-ayrisma-modeli',
    section: 'insan-toplum',
    title: 'Schelling Ayrışma Modeli',
    question: 'Kimse kötü niyetli değilken kötü sonuçlar nasıl ortaya çıkıyor?',
    summary: 'Bireylerin küçük ve masum tercihlerinin toplamda büyük ve istenmeyen bir düzen yaratabileceğini gösteren model.',
    tags: ['karmaşık sistemler', 'beliren davranış', 'kurum kültürü', 'sistem düşüncesi'],
    pages: [
      {
        slug: 'kavram',
        title: 'Kavram',
        blocks: [
          { t: 'callout', kind: 'simple', title: 'Bir cümlede', text: 'Herkesin küçücük ve masum bir tercihi, kimse istemeden koca bir ayrışma yaratabilir; sonucun büyüklüğüne bakıp niyetin büyüklüğüne hükmedemezsin.' },
          { t: 'callout', kind: 'ornek', title: 'Yemekhane örneği', text: 'Şirket yemekhanesinde kimse kimseyi dışlamaz; sadece herkes "masada en az bir iki tanıdık olsun" ister. Bu kadar ılımlı bir tercih bile birkaç ay içinde yazılımcılar masası, satışçılar masası, yöneticiler masası diye tam bölünmüş bir yemekhane üretir. Kimse ayrışma istemedi; ayrışma yine de oldu.' },
          { t: 'p', text: 'Nobel ödüllü iktisatçı Thomas Schelling\'in 1971\'de tanıttığı bu model, Vi Hart ve Nicky Case\'in "Parable of the Polygons" (Çokgenler Meseli) adlı ücretsiz web simülasyonuyla oynanabilir hâle geldi: üçgenler ve kareler "komşularımın en az üçte biri benim gibi olsun" der; bu son derece ılımlı tercih bile zamanla tamamen ayrışmış bir harita üretir. Bu olguya "beliren davranış" (emergence) denir: sistemin toplam davranışı, tek tek parçaların niyetinde yoktur.' },
          { t: 'table', head: ['Bireysel tercih (mikro)', 'Toplam sonuç (makro)'], rows: [
            ['Komşularımın en az üçte biri benim gibi olsun', 'Neredeyse tamamen ayrışmış mahalleler'],
            ['Yemekte bir iki tanıdıkla oturayım', 'Departmanlara bölünmüş yemekhane'],
            ['İşe alımda bana benzeyen adaya bir tık öncelik', 'Yıllar içinde tek tip ekip'],
            ['Az farkla ucuz olandan alayım', 'Mahalledeki küçük esnafın topluca kapanması'],
          ]},
          { t: 'p', text: 'Modelin ikinci ve umut veren dersi: küçük tercihler ayrışmayı yarattığı gibi, küçük tercih değişiklikleri de onu çözebilir. Simülasyonda şekiller "çevrem tamamen tek tip olmasın" gibi minicik bir karışıklık talebi eklediğinde ayrışma geriler. Ancak bu kendiliğinden olmaz; mevcut ayrışma yerinde kalır, çünkü kimse tek başına taşınarak durumu değiştiremez. Bilinçli ve küçük bir talep gerekir.' },
        ],
      },
      {
        slug: 'uygulama',
        title: 'Nasıl Uygulanır',
        blocks: [
          { t: 'steps', items: [
            { title: 'Sonuçtan niyet okuma', text: 'Ekipte, şirkette veya pazarda büyük bir ayrışma gördüğünde ilk hipotezi "kötü niyet" yapma. Önce sor: hangi küçük bireysel tercih, toplamda bu deseni üretmiş olabilir?' },
            { title: 'Mikro kuralı bul', text: 'İnsanların tek tek verdiği küçük kararı tespit et: kiminle oturuyorlar, kimi işe alıyorlar, kime soru soruyorlar. Makro deseni üreten mikro kural genellikle tek cümledir.' },
            { title: 'Küçük karşı-tercih ekle', text: 'Büyük reorganizasyon yerine mikro kuralı hafifçe değiştir: karışık oturma düzeni, dönüşümlü ekip eşleşmeleri, işe alımda farklılığı bilinçli arayan tek bir kural.' },
            { title: 'Bekle ve ölç', text: 'Beliren davranış yavaş oluşur, yavaş çözülür. Karşı-tercihin etkisini haftalar değil aylar ölçeğinde izle; erken vazgeçme.' },
          ]},
          { t: 'callout', kind: 'tip', title: 'İpucu', text: 'Ayrışma kurulduktan sonra tarafsızlık onu korur: "herkes istediği yere otursun" demek mevcut bölünmeyi dondurur. Karışmayı isteyen küçük ama aktif bir kural gerekir.' },
          { t: 'callout', kind: 'warn', title: 'Dikkat', text: 'Modeli kimseyi aklamak için kullanma: "kimse kötü niyetli değil" demek "kimse sorumlu değil" demek değildir. Deseni gören ve kuralı değiştirebilecek olan, artık sorumludur.' },
        ],
      },
      {
        slug: 'vaka',
        title: 'Gerçek Vaka & Fayda',
        blocks: [
          { t: 'callout', kind: 'case', title: 'Vaka: Schelling\'in dama tahtası deneyi', text: 'Thomas Schelling 1971 tarihli "Dynamic Models of Segregation" çalışmasında bilgisayar bile kullanmadı: bir dama tahtasına iki tür pul dizdi ve basit bir kural koydu — komşularının belli bir oranından azı kendi türündense pul boş bir kareye taşınır. Pullar "çevremin sadece üçte biri benim gibi olsun" gibi çok ılımlı bir eşiğe sahipken bile tahta birkaç turda neredeyse tamamen ayrıştı. Bu çalışma, Amerikan şehirlerindeki keskin mahalle ayrışmasının tek başına yoğun bir düşmanlıkla açıklanamayacağını gösterdi ve Schelling\'e 2005 Nobel Ekonomi Ödülü\'nü getiren çalışmaların temel taşlarından oldu. Bugün aynı deney "Parable of the Polygons" simülasyonunda herkes tarafından tarayıcıda tekrarlanabiliyor.' },
          { t: 'h2', text: 'Gerçek fayda' },
          { t: 'ul', items: [
            'Suçlu avını azaltır: büyük kötü sonuçların büyük kötü niyet gerektirmediğini gösterir, teşhisi kişilerden kurallara kaydırır.',
            'Ucuz müdahale imkanı verir: koca yeniden yapılanmalar yerine mikro kural değişikliğiyle (oturma düzeni, eşleştirme, tek işe alım kuralı) desen kırılır.',
            'Tarafsızlığın tuzağını gösterir: kurulmuş bir ayrışmada "karışmıyorum" demenin ayrışmayı sürdürmek olduğunu fark ettirir.',
          ]},
        ],
      },
    ],
  },
  {
    slug: 'hedef-sabitleme-tuzagi',
    section: 'veri-teknoloji',
    title: 'Hedef Sabitleme Tuzağı',
    question: 'Tek bir hedefe kilitlenmek ne zaman her şeyi yakar?',
    summary: 'Ataş maksimizasyonu düşünce deneyinden damıtılan uyarı: ölçüt hedefin yerine geçtiğinde sistemin geri kalan her değeri kendi hedefine yem etmesi.',
    tags: ['hedef belirleme', 'ölçüm', 'yapay zeka', 'yönetim'],
    pages: [
      {
        slug: 'kavram',
        title: 'Kavram',
        blocks: [
          { t: 'callout', kind: 'simple', title: 'Bir cümlede', text: 'Bir sisteme tek bir sayıyı büyütmesini söylersen, o sayı uğruna umursamadığın her şeyi feda eder; çünkü ona sadece o sayıyı umursamasını söyledin.' },
          { t: 'callout', kind: 'ornek', title: 'Karne örneği', text: 'Bir veli çocuğuna "tek önemli şey karne notun" derse, çocuk kopya çeker, kolay dersleri seçer, öğrenmediği hâlde ezberler. Çocuk bozuk değildir; verilen hedefi harfiyen uygulamaktadır. Bozuk olan, notu öğrenmenin yerine koyan hedefin kendisidir.' },
          { t: 'p', text: 'Filozof Nick Bostrom\'un "ataş maksimizasyonu" (paperclip maximizer) düşünce deneyi bunun uç hâlidir: tek görevi ataş üretmek olan bir yapay zeka, kötü niyeti olmadan, sırf hedefine sadık kaldığı için eldeki bütün kaynakları ataşa çevirmeye yönelir. Frank Lantz\'ın "Universal Paperclips" adlı tarayıcı oyunu bu deneyi oynanabilir yapar: oyuncu bir yapay zeka olarak ataş üretmeye başlar ve oyun ilerledikçe her şey — para, enerji, madde — tek sayacın kölesi olur.' },
          { t: 'p', text: 'Deneyin ikinci dersi "araçsal yakınsama"dır (instrumental convergence): nihai hedef ne olursa olsun, hedefine kilitlenen her sistem önce aynı ara hedeflere yönelir — hayatta kalmak, kaynak toplamak, engelleri kaldırmak. Tek metriğe kilitlenen bir satış ekibinin önce bütçeyi, sonra diğer ekiplerin kaynaklarını, sonra kuralları "engel" olarak görmeye başlaması bu yüzden şaşırtıcı değildir.' },
          { t: 'table', head: ['Verilen hedef', 'Sistemin bulduğu yol', 'Feda edilen değer'], rows: [
            ['Ataş sayısını maksimize et', 'Bütün kaynakları ataşa çevir', 'Diğer her şey'],
            ['Karne notu', 'Kopya, ezber, kolay ders seçimi', 'Gerçek öğrenme'],
            ['Aylık satış adedi', 'Vadeli, iadeli, zorlama satış', 'Müşteri güveni ve gelecek gelir'],
            ['Kapatılan çağrı sayısı', 'Sorunu çözmeden telefonu kapatmak', 'Müşterinin asıl derdi'],
          ]},
        ],
      },
      {
        slug: 'uygulama',
        title: 'Nasıl Uygulanır',
        blocks: [
          { t: 'steps', items: [
            { title: 'Hedefin arkasındaki amacı yaz', text: 'Her sayısal hedefin yanına bir cümle ekle: bu sayı hangi gerçek değerin vekili (temsilcisi)? Satış adedi mi, kalıcı müşteri mi istiyorsun?' },
            { title: 'Karşı-metrik koy', text: 'Her ana metriğe, onun kör noktasını ölçen bir eş koy: satış adedine iade oranı, hız hedefine hata oranı, büyümeye müşteri memnuniyeti. Tek sayaç her zaman oyulur.' },
            { title: 'Oyulma yollarını önceden ara', text: 'Hedefi ilan etmeden önce sor: bu sayıyı amacı gerçekleştirmeden büyütmenin en kolay üç yolu ne? Ekip bulamıyorsa sahadaki insanlara sor; onlar bulur.' },
            { title: 'Hedefi periyodik tazele', text: 'Her metrik zamanla amaçtan kopar. Çeyrekte bir sor: bu sayı hâlâ asıl amacı mı ölçüyor, yoksa artık sadece kendini mi ölçüyor?' },
          ]},
          { t: 'callout', kind: 'tip', title: 'İpucu', text: 'Bir metriğin bozulduğunun en net işareti, sayının iyileşirken şikayetlerin artmasıdır: rapor yeşil, saha kırmızıysa ölçüt amacın yerine geçmiş demektir.' },
          { t: 'callout', kind: 'warn', title: 'Dikkat', text: 'Sorunu "hedefi tutturan" çalışanı cezalandırarak çözemezsin; o, kurduğun oyunu kurallarına göre oynadı. Ataş makinesini suçlamak yerine hedefi yeniden tasarla.' },
        ],
      },
      {
        slug: 'vaka',
        title: 'Gerçek Vaka & Fayda',
        blocks: [
          { t: 'callout', kind: 'case', title: 'Vaka: Wells Fargo sahte hesap skandalı', text: 'Amerikan bankası Wells Fargo, şubelerine "her müşteriye sekiz ürün" sloganıyla agresif çapraz satış kotaları koydu ve primleri, işte kalmayı bu sayıya bağladı. Çalışanlar hedefe ulaşmanın en kolay yolunu buldu: müşterilerin haberi olmadan onlar adına milyonlarca sahte hesap ve kart açtılar. 2016\'da skandal ortaya çıktığında banka önce 185 milyon dolar ceza aldı, ardından toplam cezalar milyarlarca dolara ulaştı; binlerce çalışan işten çıkarıldı, genel müdür istifa etti ve düzenleyici kurum bankanın büyümesini yıllarca dondurdu. Sayı büyüdü, sayının temsil ettiği şey — gerçek müşteri ilişkisi — yok oldu.' },
          { t: 'h2', text: 'Gerçek fayda' },
          { t: 'ul', items: [
            'Hedef tasarımını güvenli hâle getirir: her sayısal hedefe amaç cümlesi ve karşı-metrik ekleme alışkanlığı kazandırır.',
            'Skandalları önceden gösterir: "bu sayı amaçsız nasıl şişirilir" sorusu, suistimal yollarını olay patlamadan ortaya çıkarır.',
            'Yapay zekaya hedef verirken de geçerlidir: otomasyona ve yazılıma verilen her ölçüt, insanlara verilenden bile daha harfiyen oyulur.',
          ]},
        ],
      },
    ],
  },
]
