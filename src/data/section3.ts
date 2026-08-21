import type { DecisionModel } from '../types'

export const section3Models: DecisionModel[] = [
  {
    slug: 'rumsfeld-matrisi',
    section: 'risk-guvenlik',
    title: 'Rumsfeld Matrisi',
    question: 'Riskleri nasıl daha etkili analiz ederim?',
    summary: 'Bilinen ve bilinmeyenleri dört hücrede ayrıştıran risk analizi çerçevesi.',
    tags: ['risk', 'belirsizlik'],
    pages: [
      {
        slug: 'kavram',
        title: 'Kavram',
        blocks: [
          { t: 'callout', kind: 'simple', title: 'Bir cümlede', text: 'Bir işe başlamadan önce kendine sor: neyi biliyorum, neyi bilmediğimi biliyorum, neyi hiç göremiyorum ve neyi bildiğim hâlde görmezden geliyorum?' },
          { t: 'callout', kind: 'ornek', title: 'Şantiyeden örnek', text: 'Usta Recep temel kazısına başlamadan düşünür: zemin raporu elinde, bu bilinen. Yeraltı suyunun seviyesi belirsiz, ölçtürmesi lazım — bilinen bilinmeyen. Haritada olmayan eski bir kanalizasyon çıkabilir — bilinmeyen bilinmeyen, onun için kepçenin yanında bir gün yedek süre tutar. Bir de kalfanın "bu bölgede hep su çıkar usta" sözünü kimse ciddiye almamıştı — işte asıl tehlike o.' },
          { t: 'p', text: 'ABD Savunma Bakanı Donald Rumsfeld\'in 2002\'deki basın toplantısıyla ünlenen ayrım, bilgiyi dört hücreye böler:' },
          { t: 'ul', items: [
            'Bilinen bilinenler: bildiğimiz gerçekler. Planlama burada yapılır.',
            'Bilinen bilinmeyenler: bildiğimiz boşluklar. Araştırma burada yapılır.',
            'Bilinmeyen bilinmeyenler: varlığından bile habersiz olduğumuz riskler. Esneklik ve tampon burada gerekir.',
            'Bilinmeyen bilinenler: aslında bildiğimiz ama bastırdığımız, görmezden geldiğimiz gerçekler.',
          ]},
          { t: 'p', text: 'Felsefeci Slavoj Žižek\'in eklediği dördüncü hücre çoğu zaman en tehlikelisidir: organizasyonun içinde birileri riski biliyordur — ama bilgi ya yukarı çıkamaz ya da çıktığında duyulmak istenmez.' },
          { t: 'table', head: ['Hücre', 'Şantiyedeki hâli', 'Ne yapmalı?'], rows: [
            ['Bilinen bilinen', 'Zemin raporu elimizde', 'Plana yaz, işe başla'],
            ['Bilinen bilinmeyen', 'Yeraltı suyu seviyesi belirsiz', 'Ölçtür, araştır'],
            ['Bilinmeyen bilinmeyen', 'Haritada olmayan eski boru', 'Yedek süre ve para ayır'],
            ['Bilinmeyen bilinen', 'Kalfanın söylediği ama dinlenmeyen uyarı', 'Ekibe sor, susanı konuştur'],
          ]},
        ],
      },
      {
        slug: 'uygulama',
        title: 'Nasıl Uygulanır',
        blocks: [
          { t: 'steps', items: [
            { title: 'Dört listeyi ayrı yap', text: 'Projeye başlarken dört hücreyi ayrı ayrı doldur. "Bilinen bilinmeyenler" listesi araştırma planına dönüşür.' },
            { title: 'Bilinmeyen bilinenleri avla', text: 'Ekibe anonim sor: "Herkesin bildiği ama kimsenin söylemediği risk ne?" Cevaplar dördüncü hücredir.' },
            { title: 'Bilinmeyen bilinmeyenlere bütçe ayır', text: 'Öngöremediklerin için plan yapamazsın ama tampon koyabilirsin: zaman, para ve geri dönüş yolu.' },
            { title: 'Sinyalleri düzenli tara', text: 'Proje boyunca hücreler arası geçişi izle: dünkü bilinmeyen bugün bilinen olmalı; olmuyorsa öğrenme durmuş demektir.' },
          ]},
        ],
      },
      {
        slug: 'vaka',
        title: 'Gerçek Vaka & Fayda',
        blocks: [
          { t: 'callout', kind: 'case', title: 'Vaka: Columbia mekiği ve bastırılan bilgi', text: '2003\'te Columbia uzay mekiği dönüşte parçalandı; yedi astronot öldü. Kalkışta kopan köpük parçasının kanada çarptığı biliniyordu — mühendisler görüntü istemiş, ek analiz talep etmişti. Ancak kurum içinde köpük çarpmaları "her uçuşta olan, bilinen bir durum" diye normalleştirilmişti. Kaza soruşturması (CAIB raporu), felaketi bilinmeyen bir bilinmeyene değil, örgütün bastırdığı "bilinmeyen bilinen"e bağladı: bilgi vardı, dinlenmedi.' },
          { t: 'h2', text: 'Gerçek fayda' },
          { t: 'ul', items: [
            'Risk toplantısını yapılandırır: "riskler neler?" yerine dört ayrı soru sorulur ve her biri farklı aksiyon üretir.',
            'Sessizlik riskini görünür kılar: dördüncü hücre, psikolojik güvenliğin neden bir risk yönetimi aracı olduğunu gösterir.',
            'Aşırı özgüveni frenler: plan yalnızca birinci hücreyi kapsar; matris kalan üç hücrenin de bütçe istediğini hatırlatır.',
          ]},
        ],
      },
    ],
  },
  {
    slug: 'isvicre-peyniri',
    section: 'risk-guvenlik',
    title: 'İsviçre Peyniri Modeli',
    question: 'Hatalar nasıl olur?',
    summary: 'Kazaların tek bir hatadan değil, üst üste gelen savunma deliklerinden doğduğunu anlatan model.',
    tags: ['risk', 'güvenlik'],
    pages: [
      {
        slug: 'kavram',
        title: 'Kavram',
        blocks: [
          { t: 'callout', kind: 'simple', title: 'Bir cümlede', text: 'Kaza tek bir hatadan olmaz; arka arkaya dizilmiş korumaların hepsindeki delikler aynı anda üst üste gelince olur.' },
          { t: 'callout', kind: 'ornek', title: 'Atölyeden örnek', text: 'Pres makinesinde kaza oldu, herkes "işçi dikkatsizdi" dedi. Ama bakın: koruyucu kapağın sensörü üç aydır arızalıydı, bakım formu doldurulmuyordu, gece vardiyasında tek kişi çalışıyordu ve eldiven sıkışınca durduracak buton uzaktaydı. Dört koruma da delikti; delikler aynı gün aynı hizaya geldi. İşçiyi suçlamak delikleri kapatmaz.' },
          { t: 'p', text: 'James Reason\'ın modeli, bir organizasyonun savunma katmanlarını dilim dilim İsviçre peyniri gibi düşünür: her katmanda delikler (zayıflıklar) vardır. Kaza, deliklerin aynı hizaya geldiği nadir anda olur — tehlike bütün katmanlardan geçip gider.' },
          { t: 'ul', items: [
            'Aktif hatalar: son halkadaki kişinin yaptığı görünür hata (yanlış düğme, yanlış ilaç).',
            'Gizli koşullar: yıllardır sistemde bekleyen delikler (yorucu vardiya düzeni, belirsiz prosedür, bakımsız ekipman).',
          ]},
          { t: 'p', text: 'Modelin devrimci tarafı suçu yeniden konumlandırmasıdır: son halkadaki insan nadiren kök nedendir. Sorulacak soru "kim hata yaptı?" değil, "delikler neden aynı hizaya geldi?" sorusudur.' },
          { t: 'table', head: ['Katman', 'Delik (zayıflık)', 'Önlem'], rows: [
            ['Makine koruması', 'Sensör arızalı', 'Haftalık kontrol listesi'],
            ['Bakım düzeni', 'Form doldurulmuyor', 'Bakım yapılmadan makine açılmaz kuralı'],
            ['Vardiya düzeni', 'Gece tek kişi', 'Riskli işte en az iki kişi'],
            ['Acil durdurma', 'Buton uzakta', 'Butonu el mesafesine taşı'],
          ]},
        ],
      },
      {
        slug: 'uygulama',
        title: 'Nasıl Uygulanır',
        blocks: [
          { t: 'steps', items: [
            { title: 'Katmanları çiz', text: 'Kritik sürecin savunma katmanlarını listele: eğitim, prosedür, kontrol listesi, otomasyon, denetim.' },
            { title: 'Delikleri avla', text: 'Her katman için sor: bu savunma hangi koşulda çalışmaz? Yorgunlukta mı, aciliyette mi, yeni personelde mi?' },
            { title: 'Ramak kala kayıtları tut', text: 'Kazaya dönüşmeyen hizalanmaları (near miss) kaydet ve ödüllendir. Bunlar bedava uyarıdır.' },
            { title: 'Bağımsız katman ekle', text: 'Yeni savunmayı mevcut katmanlarla aynı koşulda delinmeyecek şekilde tasarla; aynı anda delinen iki katman tek katmandır.' },
          ]},
        ],
      },
      {
        slug: 'vaka',
        title: 'Gerçek Vaka & Fayda',
        blocks: [
          { t: 'callout', kind: 'case', title: 'Vaka: DSÖ cerrahi kontrol listesi', text: 'Dünya Sağlık Örgütü, ameliyathane kazalarının tek tek "dikkatsiz cerrah" vakaları değil, hizalanan sistem delikleri olduğunu kabul ederek 2008\'de 19 maddelik Cerrahi Güvenlik Kontrol Listesi\'ni yayımladı: yanlış hasta, yanlış taraf, unutulan malzeme gibi delikleri kapatan bağımsız bir katman. Sekiz ülkedeki pilot hastanelerde yayımlanan sonuçlar, komplikasyonların ve ölümlerin üçte birden fazla azaldığını gösterdi. Aynı yaklaşım havacılıktan (kokpit kontrol listeleri, CRM eğitimi) sağlığa taşınmıştı.' },
          { t: 'h2', text: 'Gerçek fayda' },
          { t: 'ul', items: [
            'Suçlama kültürünü söndürür: hata raporlamak tehlikeli olmaktan çıkınca gizli delikler görünür olur.',
            'Yatırımı doğru katmana yönlendirir: "insanları daha dikkatli olmaya çağırmak" yerine sistemik delik kapatılır.',
            'Nadir ama ölümcül riskleri yönetilebilir kılar: her katman tek başına kusurlu olsa da doğru dizilmiş katmanlar toplamda güvenlidir.',
          ]},
        ],
      },
    ],
  },
  {
    slug: 'maslow-piramitleri',
    section: 'insan-toplum',
    title: 'Maslow Piramitleri',
    question: 'Gerçekte neye ihtiyacın var, gerçekte ne istiyorsun?',
    summary: 'İnsan ihtiyaçlarını beş basamakta sıralayan ve ihtiyaçlar ile arzuları karşı karşıya koyan model.',
    tags: ['motivasyon', 'ihtiyaçlar', 'psikoloji'],
    pages: [
      {
        slug: 'kavram',
        title: 'Kavram',
        blocks: [
          { t: 'callout', kind: 'simple', title: 'Bir cümlede', text: 'İnsanın ihtiyaçları basamak basamaktır: önce karın doyar, sonra güvence aranır, sonra sevgi, saygı ve en sonda kendi hayalini yaşamak gelir.' },
          { t: 'callout', kind: 'ornek', title: 'Şantiyeden örnek', text: 'Kalfa Hasan\'ın maaşı iki aydır gecikiyor; aklı sürekli kirada ve taksitte. Patron ona "sana ustalık eğitimi verelim, kendini geliştir" diyor ama Hasan\'ın umurunda değil — çünkü ikinci basamak (güvence) boşken beşinci basamak (kendini geliştirme) kimseyi heyecanlandırmaz. Önce maaş düzenli yatmalı; eğitim ancak ondan sonra anlam kazanır.' },
          { t: 'p', text: 'Psikolog Abraham Maslow 1943\'te "ihtiyaçlar hiyerarşisi" modelini yayımladı. İnsan ihtiyaçlarını beş basamakta sınıflandırır:' },
          { t: 'ul', items: [
            'Fizyolojik ihtiyaçlar: yemek, uyku, sıcaklık.',
            'Güvenlik: barınacak yer, iş güvencesi, sağlık, tehlikelere karşı korunma.',
            'Sosyal ilişkiler: arkadaşlar, eş, sevgi.',
            'Tanınma: statü, güç, para.',
            'Kendini gerçekleştirme: bireysellik, kişisel potansiyeli hayata geçirme, inanç ve aşkınlık.',
          ]},
          { t: 'p', text: 'İlk üç basamak temel ihtiyaçtır: karşılandığında insan artık onları düşünmez. Son iki basamak ise arzular, yani kişisel gelişim ihtiyaçlarıdır — hiçbir zaman tam olarak doyurulamazlar.' },
          { t: 'h2', text: 'İki piramit' },
          { t: 'p', text: 'Model asıl ilginç hâlini, arzularımızı ihtiyaçlarımızla karşı karşıya koyduğumuzda alır: "sahip olduklarımız" piramidi ile "istediklerimiz" ters piramidi yan yana çizilir. Batı dünyası için kitabın acı kuralı şudur: en çok arzuladığımız şeyler, en az ihtiyaç duyduklarımızdır.' },
          { t: 'quote', text: 'En çok arzuladığımız şeyler, en az ihtiyaç duyduğumuz şeylerdir.' },
          { t: 'table', head: ['Basamak', 'Günlük hayattaki hâli', 'Karşılanmazsa ne olur?'], rows: [
            ['1. Fizyolojik', 'Yemek, uyku, sıcak bir ev', 'Başka hiçbir şey düşünülemez'],
            ['2. Güvenlik', 'Düzenli maaş, sigorta, sağlam çatı', 'Sürekli kaygı, kısa vadeli kararlar'],
            ['3. Sosyal', 'Aile, arkadaş, ekipte kabul görmek', 'Yalnızlık, işe isteksizlik'],
            ['4. Tanınma', 'Takdir, unvan, "eline sağlık" sözü', 'Küskünlük, motivasyon kaybı'],
            ['5. Kendini gerçekleştirme', 'Kendi işini kurmak, ustalaşmak', 'Doyumsuzluk, "bir eksik var" hissi'],
          ]},
        ],
      },
      {
        slug: 'uygulama',
        title: 'Nasıl Uygulanır',
        blocks: [
          { t: 'steps', items: [
            { title: 'Kendi piramidini çiz', text: 'Beş basamağı alt alta yaz ve her biri için dürüstçe işaretle: bu ihtiyacım bugün karşılanıyor mu?' },
            { title: 'Arzu piramidini ekle', text: 'Yanına ters piramidi çiz: enerjin, paran ve zamanın hangi basamaklara akıyor? İstediklerin listesi bu piramittir.' },
            { title: 'İkisini karşılaştır', text: 'Sahip olduklarınla istediklerin arasındaki fark, hem tatminsizliğinin hem de motivasyonunun haritasıdır.' },
            { title: 'Başkalarını da böyle oku', text: 'Bir çalışanın, müşterinin ya da yakınının davranışını anlamak için sor: şu anda hangi basamakta ve hangi basamağın peşinde?' },
          ]},
          { t: 'callout', kind: 'tip', title: 'Ekip ve ürün için kullan', text: 'Model bireyle sınırlı değildir: bir çalışan iş güvencesi kaygısı yaşarken (2. basamak) ondan kendini gerçekleştirme performansı (5. basamak) beklemek gerçekçi değildir. Ürün tasarımında da aynı soru işe yarar: ürünün hangi basamağa hitap ediyor?' },
          { t: 'callout', kind: 'warn', title: 'Sık yapılan hata', text: 'Hiyerarşiyi katı bir merdiven sanmak. Basamaklar mekanik sırayla ilerlemez; insanlar temel ihtiyaçları eksikken bile anlam ve tanınma peşinde koşabilir. Model bir teşhis aracıdır, kesin bir yasa değil.' },
        ],
      },
      {
        slug: 'vaka',
        title: 'Gerçek Vaka & Fayda',
        blocks: [
          { t: 'callout', kind: 'case', title: 'Vaka: Maslow\'dan iki faktör kuramına — Herzberg ve iş tatmini', text: 'Maslow\'un hiyerarşisi, modern insan kaynakları pratiğinin temelini attı. Frederick Herzberg 1959\'da yüzlerce çalışanla yaptığı görüşmelere dayanarak modeli iş dünyasına uyarladı: maaş ve iş güvencesi gibi alt basamak unsurları ("hijyen faktörleri") eksikken tatminsizlik yaratır ama varlıkları motive etmez; motivasyonu üreten şey üst basamaklardır — tanınma, sorumluluk, gelişim. Bu bulgu, bugün Google\'dan küçük girişimlere kadar yaygın olan yan hak + anlamlı iş + kariyer gelişimi üçlüsünün kuramsal kökenidir.' },
          { t: 'h2', text: 'Gerçek fayda' },
          { t: 'ul', items: [
            'Motivasyon tartışmasını somutlaştırır: "neden mutsuz?" yerine "hangi basamağı eksik?" diye sorulur.',
            'Yanlış teşvikleri önler: güvenlik kaygısı yaşayan birine plaket vermek, açlığa madalya vermek gibidir.',
            'Tüketim kararlarını sorgulatır: istediklerin piramidi, paranın gerçek ihtiyaca mı arzuya mı gittiğini gösterir.',
          ]},
        ],
      },
    ],
  },
  {
    slug: 'sinus-milieu-bourdieu',
    section: 'insan-toplum',
    title: 'Sinus Milieu ve Bourdieu Modelleri',
    question: 'Nereye aitsin?',
    summary: 'İnsanları sosyal statü ve değer yönelimine göre sosyokültürel gruplara ayıran hedef kitle modelleri.',
    tags: ['pazarlama', 'sosyoloji', 'segmentasyon'],
    pages: [
      {
        slug: 'kavram',
        title: 'Kavram',
        blocks: [
          { t: 'callout', kind: 'simple', title: 'Bir cümlede', text: 'İnsanlar sadece kazandıkları parayla değil, neye değer verdikleriyle de gruplara ayrılır; kime ne satacağını bilmek için önce onun hangi gruptan olduğunu anla.' },
          { t: 'callout', kind: 'ornek', title: 'Pazardan örnek', text: 'Manav Salih iki mahallede tezgâh açıyor. Birinde müşteri "en ucuzu hangisi?" diye soruyor, ötekinde "bunlar organik mi, nereden geliyor?" diye. İki mahallenin geliri aşağı yukarı aynı; farklı olan değer verdikleri şey. Salih birinci tezgâha kasa malı, ikinciye köy ürünü koyuyor ve ikisinde de satış artıyor. Aynı ürünü aynı sözle iki gruba da satamazsın.' },
          { t: 'p', text: 'Sinus Milieu, bir insanın ait olduğu farklı sosyokültürel grupları belirlemek için kullanılan psikografik bir yöntemdir; pazarlamada hedef kitle tanımlamak için sık kullanılır. Fikrin kökeni Fransız sosyolog Émile Durkheim\'a dayanır. Model, insanları iki eksende konumlandırır: sosyal statü (alt, orta, üst sınıf) ve temel yönelim (gelenek → modernleşme → yeniden yönelim).' },
          { t: 'p', text: 'Bu eksenlerin kesişiminde "yerleşikler", "liberal-entelektüeller", "yüksek başarılılar", "hedonistler", "gelenekseller" gibi milieu\'ler (yaşam ortamları) doğar. Pierre Bourdieu\'nün daha az bilinen eksen modeli ise kültürel sermaye ile ekonomik sermayeyi karşı karşıya koyar: hangi sporu yaptığın, hangi içkiyi içtiğin, hangi müziği dinlediğin, sınıfsal konumunun neredeyse haritasıdır. Bourdieu\'nün kültürel tüketim analizi, kökleşmiş kültürel tercihlerimizi ve alışkanlıklarımızı sorgulamaya zorlar.' },
          { t: 'h2', text: 'Modelin eleştirisi ve gücü' },
          { t: 'p', text: 'Sinus gruplarının darlığı sık eleştirilir: "Babam otobüs şoförü, annem hippi, ben moda tasarımcısıyım ve boş zamanımda golf kulübünden arkadaşlarımla takılıyorum — nereye aitim?" sorusuna model cevap veremez. Peki madem kusurlu, neden herkes kullanmaya devam ediyor? Çünkü pazar araştırması dünyası müşteriyi gruplara ayırma işini hep bu haritayla yapageldi; herkes aynı haritaya alışınca, daha iyisi çıksa bile yenisine geçmek zorlaşır. Tıpkı herkesin kullandığı klavye düzeni gibi: kusurlu ama yerleşik. Alışkanlık, iyileşme arzusundan güçlüdür.' },
          { t: 'quote', text: 'Kökenlerimiz geleceğimizdir. — Martin Heidegger' },
          { t: 'table', head: ['Müşteri grubu', 'Neye değer verir?', 'Manav Salih ne yapar?'], rows: [
            ['Gelenekseller', 'Tanıdık esnaf, pazarlık, alışkanlık', 'Selam verir, veresiye defteri tutar'],
            ['Fiyat odaklılar', 'En ucuz, bol miktar', 'Kasa sonu indirimi duyurur'],
            ['Statü arayanlar', 'Kaliteli görünen, özel ürün', 'Seçme malı öne, güzel kasaya dizer'],
            ['Bilinçli tüketiciler', 'Organik, yerel, hikâyesi olan ürün', 'Köyün adını yazar, üreticiyi anlatır'],
          ]},
        ],
      },
      {
        slug: 'uygulama',
        title: 'Nasıl Uygulanır',
        blocks: [
          { t: 'steps', items: [
            { title: 'Kendini konumlandır', text: 'İki ekseni çiz (statü × yönelim) ve kendini, ailenin geldiği yeri ve olmak istediğin yeri işaretle. Üç nokta arasındaki mesafe, kim olduğunun hikâyesidir.' },
            { title: 'Hedef kitleni milieu olarak tanımla', text: 'Müşterini yaş ve gelirle değil, yaşam ortamıyla tanımla: neye değer veriyor, neyle vakit geçiriyor, kime benzemek istiyor?' },
            { title: 'Bourdieu testi yap', text: 'Ürününün ya da mesajının kültürel sinyallerini kontrol et: kullandığın dil, görsel ve referanslar hangi sermaye profiline sesleniyor? Hedef milieu ile uyumlu mu?' },
            { title: 'Alışkanlığı hesaba kat', text: 'Yeni bir ürünle bir milieu\'nün yerleşik alışkanlığını değiştirmeye çalışıyorsan, "daha iyi" olmak yetmez; geçiş maliyetini düşürmen gerekir.' },
          ]},
          { t: 'callout', kind: 'warn', title: 'Sık yapılan hata', text: 'Milieu\'leri kalıp yargıya çevirmek. Model bir olasılık haritasıdır, kehanet değil: tek tek insanlar kutulara sığmaz. Segmenti planlama için kullan, bireyi yargılamak için değil.' },
        ],
      },
      {
        slug: 'vaka',
        title: 'Gerçek Vaka & Fayda',
        blocks: [
          { t: 'callout', kind: 'case', title: 'Vaka: Sinus Enstitüsü ve Alman pazarı', text: 'Sinus Milieu, Heidelberg merkezli SINUS Enstitüsü\'nün 1980\'lerden beri işlettiği ticari bir araştırma çerçevesidir ve Almanya\'da fiilen endüstri standardı hâline gelmiştir: kamu yayıncıları (ARD/ZDF medya araştırmaları), büyük otomobil üreticileri, bankalar, sigorta şirketleri ve siyasi partiler hedef kitle planlamasını milieu verisiyle yapar. Alman kiliseleri bile üye kaybını anlamak için milieu çalışmaları sipariş etti. Modelin uzun ömrü, kitaptaki kilitlenme tespitini doğrular: herkes aynı segmentasyon dilini konuşunca o dilden çıkmak zorlaşır.' },
          { t: 'h2', text: 'Gerçek fayda' },
          { t: 'ul', items: [
            'Hedef kitle tartışmasını derinleştirir: demografi kimin satın aldığını, milieu neden satın aldığını söyler.',
            'Konumlandırma hatalarını önler: yanlış kültürel sinyal taşıyan bir ürün, doğru fiyatta bile yanlış rafta durur.',
            'Öz-farkındalık üretir: kendi zevklerinin ne kadarının seçim, ne kadarının köken olduğunu görmek, başkalarının tercihlerine saygıyı kolaylaştırır.',
          ]},
        ],
      },
    ],
  },
  {
    slug: 'cift-dongulu-ogrenme',
    section: 'ogrenme-geri-bildirim',
    title: 'Çift Döngülü Öğrenme Modeli',
    question: 'Hatalarından nasıl ders çıkarırsın?',
    summary: 'Sadece davranışı değil, davranışın arkasındaki hedef ve değerleri sorgulayarak öğrenmeyi anlatan model.',
    tags: ['öğrenme', 'geri bildirim', 'değişim'],
    pages: [
      {
        slug: 'kavram',
        title: 'Kavram',
        blocks: [
          { t: 'callout', kind: 'simple', title: 'Bir cümlede', text: 'Hatayı düzeltmek birinci ders; o hatayı neden hep aynı şekilde yaptığını sorgulamak ikinci ve asıl derstir.' },
          { t: 'callout', kind: 'ornek', title: 'Atölyeden örnek', text: 'Kaynakçı Veli\'nin kaynakları arada çatlıyor. Her seferinde çatlağı taşlayıp yeniden kaynatıyor — bu birinci döngü: hatayı düzeltiyor ama hata geri geliyor. Bir gün duruyor ve soruyor: "Ben neden hep böyle çatlak veriyorum?" Cevap: işi yetiştirmek için parçayı ısıtmadan kaynağa giriyor. Acele etme alışkanlığını değiştirince çatlaklar kesiliyor. Davranışı değil, davranışı doğuran kuralı değiştirdi — bu ikinci döngü.' },
          { t: 'p', text: 'Çift döngülü öğrenme, eylemlerin üzerine düşünüp onlardan ders çıkarmaktır. Kulağa basit gelir ama neredeyse imkânsızdır. Kuram, sistem kuramcıları Heinz von Foerster ve Niklas Luhmann\'ın "ikinci dereceden gözlem" fikrine dayanır: birinci dereceden gözlemciler dünyayı olduğu gibi görür; ikinci dereceden gözlemciler ise görülen şeyi, görme biçimine bağlar — yani bir gözlemleme biçimini gözlemlerler. Birinci dereceden gözlemci, kendi görme biçiminin farkında değildir; bu onun kör noktasıdır.' },
          { t: 'p', text: 'Psikolog Chris Argyris ile felsefeci Donald Schön, çift döngülü öğrenmeyi bu fikirlerden geliştirdi. Tek döngü (birinci dereceden gözlem) en iyi ihtimalle "iyi pratik"tir: işe yarayan şey değiştirilmez, tekrarlanır. En kötü ihtimalle "kötü pratik"tir: aynı hata tekrarlanır ya da bir sorun, nasıl ortaya çıktığı hiç sorgulanmadan çözülür.' },
          { t: 'h2', text: 'İkinci döngü' },
          { t: 'p', text: 'Çift döngülü öğrenmede yaptığın şeyi düşünür ve sorgularsın; kendi kalıbını kırmaya çalışırsın — sadece bir şeyi farklı yaparak değil, onu neden o şekilde yaptığını düşünerek. Eylemlerinin arkasındaki hedefler ve değerler nedir? Bunların tam olarak farkına varırsan, onları değiştirebilirsin.' },
          { t: 'p', text: 'Çift döngünün içindeki asıl sorun, söylediğimiz ile yaptığımız arasındaki farktır: benimsenen kuram (ne yapacağımızı söylediğimiz) ile kullanılan kuram (gerçekte yaptığımız). Gerçekten bir şeyi değiştirmek istiyorsak talimat ve yönerge yetmez — bunlar bize yalnızca komut olarak ulaşır. Gerçek değişim, daha derindeki nedenleri, hedefleri ve değerleri yeniden değerlendirdiğimizde olur.' },
          { t: 'quote', text: 'Sahip olduklarımızı hak ediyoruz. Onları değiştirmediğimiz sürece.' },
          { t: 'table', head: ['Soru', 'Tek döngü', 'Çift döngü'], rows: [
            ['Kaynak çatladı, ne yaparım?', 'Taşlar, yeniden kaynatırım', 'Neden hep çatlıyor diye sorarım'],
            ['Sorunun kaynağı ne?', 'Elimin hatası', 'Acele ettiren iş düzeni'],
            ['Ne değişir?', 'O günkü parça', 'Çalışma alışkanlığının kendisi'],
            ['Hata geri gelir mi?', 'Evet, tekrar eder', 'Hayır, kökü kurudu'],
          ]},
        ],
      },
      {
        slug: 'uygulama',
        title: 'Nasıl Uygulanır',
        blocks: [
          { t: 'steps', items: [
            { title: 'Tek döngüyü tanı', text: 'Bir sorun tekrar ettiğinde önce mevcut refleksini yaz: "Hata olunca ne yapıyoruz?" Bu, birinci döngündür.' },
            { title: 'İkinci soruyu sor', text: 'Davranışı düzeltmeden önce sor: "Bu davranışı üreten hedef, varsayım ya da değer ne?" Sorun çoğu zaman eylemde değil, eylemi doğuran kuraldadır.' },
            { title: 'Söylenen ile yapılanı karşılaştır', text: 'Benimsenen kuramını (ne dediğin) ve kullanılan kuramını (ne yaptığın) yan yana koy. Aradaki fark, değişimin başlayacağı yerdir.' },
            { title: 'Kalıbı bilinçli kır', text: 'Değiştirmek istediğin bir kalıbı seç, arkasındaki değeri yeniden tanımla ve yeni davranışı küçük, gözlemlenebilir bir deneyle test et.' },
          ]},
          { t: 'callout', kind: 'warn', title: 'Sık yapılan hata', text: 'Değişimi talimatla başlatmaya çalışmak. Argyris\'in uyarısı nettir: yönergeler insanlara yalnızca komut olarak ulaşır ve benimsenen kuramda kalır. Değerler konuşulmadan davranış kalıcı değişmez.' },
        ],
      },
      {
        slug: 'vaka',
        title: 'Gerçek Vaka & Fayda',
        blocks: [
          { t: 'callout', kind: 'case', title: 'Vaka: Argyris\'in danışmanlık şirketi araştırmaları', text: 'Chris Argyris, Harvard Business Review\'da yayımlanan "Teaching Smart People How to Learn" (1991) çalışmasında büyük yönetim danışmanlığı şirketlerinin en parlak profesyonellerini inceledi. Bulgusu paradoksaldı: en zeki çalışanlar en kötü öğrenenlerdi. Nadiren başarısız oldukları için başarısızlıkla yüzleşme becerisi geliştirmemişlerdi; bir proje kötü gittiğinde suçu müşteriye ve koşullara atıyor (tek döngü), kendi varsayımlarını hiç sorgulamıyorlardı (eksik ikinci döngü). Argyris bu savunmacı akıl yürütmeyi kırmanın yolunun talimat değil, yöneticilerin kendi akıl yürütmelerini açıkça masaya koyması olduğunu gösterdi.' },
          { t: 'h2', text: 'Gerçek fayda' },
          { t: 'ul', items: [
            'Tekrarlayan sorunları kökten çözer: aynı hatanın üçüncü tekrarı, davranış değil kural sorunudur.',
            'Kurumsal ikiyüzlülüğü görünür kılar: "değerlerimiz" ile fiilî uygulama arasındaki fark ölçülebilir bir gündem olur.',
            'Retrospektifleri derinleştirir: "ne oldu?" sorusuna "neden böyle çalışıyoruz?" sorusu eklenince toplantı ritüel olmaktan çıkar.',
          ]},
        ],
      },
    ],
  },
  {
    slug: 'ai-modeli',
    section: 'ogrenme-geri-bildirim',
    title: 'AI Modeli (Takdir Eden Sorgulama)',
    question: 'Nasıl bir tartışma tipisin?',
    summary: 'Zayıflıklara değil güçlü yönlere ve potansiyele odaklanan tartışma ve gelişim yaklaşımı.',
    tags: ['iletişim', 'ekip kültürü'],
    pages: [
      {
        slug: 'kavram',
        title: 'Kavram',
        blocks: [
          { t: 'callout', kind: 'simple', title: 'Bir cümlede', text: 'Bir fikri büyütmek istiyorsan önce eksiğini değil, iyi olan tarafını bul ve oradan devam et.' },
          { t: 'callout', kind: 'ornek', title: 'Atölyeden örnek', text: 'Çırak Emre ustasına yeni bir raf düzeni öneriyor. Usta Cemil "Olmaz, karışır" dese Emre bir daha fikir getirmez. Bunun yerine "Alet arama süresini kısaltma fikrin iyi; şuraya bir de etiket eklersek herkes bulur" diyor. Fikir bir haftada oturuyor ve Emre ertesi ay iki öneri daha getiriyor. Aynı fikir, iki farklı cevap, iki farklı atölye.' },
          { t: 'p', text: 'AI kısaltması Appreciative Inquiry (Takdir Eden Sorgulama) anlamına gelir; Amerikalı yönetim uzmanı David Cooperrider\'a atfedilen bu yöntem, bir şirketin ya da kişinin zayıflıklarına değil güçlü yönlerine, olumlu özelliklerine ve potansiyeline odaklanır. Klasik "Sorun ne?" sorusunun yerini "Şu anda gerçekten iyi giden ne?" alır. Zayıflığa odaklanmak, daha en baştan olumsuz bir hava yaratır.' },
          { t: 'p', text: 'Her insanın, her sistemin, her ürünün, her fikrin kusurları vardır. En iyi ihtimalle bunun farkında olmak, mükemmellik arayışına dönüşür. Ama çoğu durumda bir fikrin kusurlarına fazla odaklanmak, iyi çalışma pratiği için şart olan açık ve olumlu yaklaşımı boğar. Temel ilke şudur: henüz tam olgunlaşmamış bir fikri erkenden terk etmek yerine geliştirmeye devam etmek.' },
          { t: 'h2', text: 'Dört tartışma tipi' },
          { t: 'p', text: 'İnsanlar karakterlerini tartışmalara yaklaşımlarında ele verir. Önerilere verdikleri tepkiye göre dört kategoriden birine düşerler:' },
          { t: 'ul', items: [
            'Kusur avcısı: "Fikir güzel ama…" (olumlu ama yıkıcı)',
            'Diktatör: "Hayır!" (olumsuz ve yıkıcı)',
            'Öğretmen: "Hayır, fikir iyi değil çünkü…" (olumsuz ama yapıcı)',
            'AI düşünürü: "Evet, üstelik şunu da yapabiliriz…" (olumlu ve yapıcı)',
          ]},
          { t: 'quote', text: 'Her aptal eleştirebilir. Ve çoğu aptal eleştirir. — Benjamin Franklin' },
          { t: 'table', head: ['Tartışma tipi', 'Tipik cümlesi', 'Fikre etkisi'], rows: [
            ['Kusur avcısı', '"Fikir güzel ama…"', 'Fikri yavaşça söndürür'],
            ['Diktatör', '"Hayır!"', 'Fikri anında öldürür'],
            ['Öğretmen', '"Hayır, çünkü…"', 'Öğretir ama cesaret kırar'],
            ['AI düşünürü', '"Evet, üstelik şunu da…"', 'Fikri büyütür, yenisini çağırır'],
          ]},
        ],
      },
      {
        slug: 'uygulama',
        title: 'Nasıl Uygulanır',
        blocks: [
          { t: 'steps', items: [
            { title: 'Tartışma tipini gözlemle', text: 'Bir sonraki grup tartışmasında herkesin (kendin dahil) argümanlarını nasıl sunduğunu not et: kim kusur avcısı, kim AI düşünürü?' },
            { title: 'Soruyu çevir', text: 'Toplantıyı "sorun ne?" ile değil "ne iyi gidiyor ve bunu nasıl büyütürüz?" ile aç. Sorunun çerçevesi, cevabın tonunu belirler.' },
            { title: '"Evet, ve" kuralını dene', text: 'Bir fikre ilk tepki olarak eksik aramak yerine fikri bir adım ileri taşıyan bir ekleme yap: "Evet, ve şunu da ekleyebiliriz…"' },
            { title: 'Eleştiriyi zamanla', text: 'Kusurları yok sayma; onları fikir yeterince geliştikten sonraki ayrı bir değerlendirme turuna ertele. Erken eleştiri fikri değil, cesareti öldürür.' },
          ]},
          { t: 'callout', kind: 'tip', title: 'Beyin fırtınasında altın kural', text: 'Fikir üretme aşaması ile fikir eleme aşamasını ayır. AI yaklaşımı birinci aşamanın, eleştirel analiz ikinci aşamanın aracıdır; ikisi aynı anda çalışmaz.' },
          { t: 'callout', kind: 'warn', title: 'Sık yapılan hata', text: 'AI\'yı "her şeye evet demek" sanmak. Yöntem kusurları inkâr etmez; sırayı değiştirir: önce potansiyeli büyüt, sonra riskleri yönet. Sonu gelmeyen iyimserlik de sonu gelmeyen eleştiri kadar verimsizdir.' },
        ],
      },
      {
        slug: 'vaka',
        title: 'Gerçek Vaka & Fayda',
        blocks: [
          { t: 'callout', kind: 'case', title: 'Vaka: British Airways ve AI zirveleri', text: 'Appreciative Inquiry, Cooperrider\'ın 1980\'lerde Cleveland Clinic\'te yürüttüğü doktora araştırmasından doğdu ve büyük kurumlarda "AI Summit" adı verilen geniş katılımlı çalıştaylarla uygulandı. Belgelenmiş örneklerden biri British Airways\'in 2000\'lerin başındaki müşteri hizmeti çalışmasıdır: şirket, bagaj kaybı gibi kronik şikâyet alanlarını "neyi yanlış yapıyoruz?" yerine "müşteri deneyimi en iyi olduğunda ne oluyor?" sorusuyla ele aldı ve iyileştirmeleri bu olumlu örneklerden türetti. ABD Donanması ve Birleşmiş Milletler Küresel İlkeler Sözleşmesi süreçlerinde de aynı yöntem kullanıldı.' },
          { t: 'h2', text: 'Gerçek fayda' },
          { t: 'ul', items: [
            'Toplantı kültürünü değiştirir: fikirler savunma pozisyonunda değil, gelişim hâlinde tartışılır.',
            'Psikolojik güvenliği besler: fikri erken eleştirilmeyen insanlar daha çok ve daha cesur fikir getirir.',
            'Değişim direncini azaltır: insanlar eksiklerinden değil, işe yarayan taraflarından yola çıkıldığında değişime daha kolay katılır.',
          ]},
        ],
      },
    ],
  },
  {
    slug: 'pareto-ilkesi',
    section: 'zaman-onceliklendirme',
    title: 'Pareto İlkesi',
    question: 'Çıktının %80\'i neden girdinin %20\'sinden gelir?',
    summary: 'Sonuçların büyük kısmının nedenlerin küçük kısmından doğduğunu söyleyen 80/20 kuralı.',
    tags: ['verimlilik', 'analiz'],
    pages: [
      {
        slug: 'kavram',
        title: 'Kavram',
        blocks: [
          { t: 'callout', kind: 'simple', title: 'Bir cümlede', text: 'Derdin çoğu, az sayıda sebepten çıkar; önce o az sayıdaki büyük sebebi bul ve düzelt.' },
          { t: 'callout', kind: 'ornek', title: 'Atölyeden örnek', text: 'Oto tamircisi Kemal bir ay boyunca gelen arızaları deftere yazdı: 40 aracın 28\'i ya akü ya balata. Onlarca farklı arıza tipi var ama işin sekseni iki kalemden geliyor. Kemal aküyü ve balatayı rafta hazır tutmaya başladı; bekleme süresi yarıya indi.' },
          { t: 'p', text: 'İtalyan iktisatçı Vilfredo Pareto, İtalya\'daki toprakların %80\'inin nüfusun %20\'sine ait olduğunu gözlemledi. Sonraki yüzyılda aynı asimetri sayısız alanda doğrulandı: müşterilerin %20\'si cironun %80\'ini, hataların %20\'si şikâyetlerin %80\'ini üretir.' },
          { t: 'p', text: '80/20 kesin bir oran değil, bir uyarıdır: girdiler eşit doğmaz. Kaynaklarını eşit dağıtıyorsan, büyük olasılıkla yanlış dağıtıyorsun.' },
          { t: 'quote', text: 'Her şey eşit derecede önemliyse, hiçbir şey önemli değildir.' },
          { t: 'table', head: ['Arıza tipi', 'Bir aydaki sayı', 'Toplam içindeki pay'], rows: [
            ['Akü', '16', '%40'],
            ['Balata', '12', '%30'],
            ['Far ve sinyal', '5', '%12'],
            ['Egzoz', '4', '%10'],
            ['Diğer (onlarca tip)', '3', '%8'],
          ]},
        ],
      },
      {
        slug: 'uygulama',
        title: 'Nasıl Uygulanır',
        blocks: [
          { t: 'steps', items: [
            { title: 'Ölç', text: 'Sonucu (ciro, hata, şikâyet, trafik) kalemlere ayır ve büyükten küçüğe sırala.' },
            { title: 'Kritik %20\'yi işaretle', text: 'Kümülatif %80\'e ulaştıran ilk kalemleri bul. Bunlar senin kaldıraç noktaların.' },
            { title: 'Kaynağı kaydır', text: 'Zamanını, bütçeni ve en iyi insanlarını kritik %20\'ye yığ; kalan %80\'i otomatikleştir, devret ya da bırak.' },
            { title: 'Tekrarla', text: 'Pareto iç içedir: kritik %20\'nin içinde de bir 80/20 vardır. Analizi periyodik yenile; kritik küme zamanla değişir.' },
          ]},
          { t: 'callout', kind: 'warn', title: 'Sık yapılan hata', text: 'Kalan %80\'i "önemsiz" sanmak. Bazı düşük hacimli işler yasal zorunluluk ya da stratejik tohumdur. Pareto önceliği söyler, ihmali meşrulaştırmaz.' },
        ],
      },
      {
        slug: 'vaka',
        title: 'Gerçek Vaka & Fayda',
        blocks: [
          { t: 'callout', kind: 'case', title: 'Vaka: Microsoft\'un hata verisi', text: 'Microsoft, 2002\'de Windows ve Office için topladığı otomatik çökme raporlarını analiz ettiğinde çarpıcı bir dağılım açıkladı: hataların yaklaşık %20\'si, kullanıcı çökmelerinin %80\'ini üretiyordu; en üstteki %1\'lik hata dilimi ise çökmelerin yarısına yakınından sorumluydu. Şirket düzeltme önceliğini bu sıralamaya göre kurdu: en çok çökme üreten küçük hata kümesi önce kapatıldı ve kullanıcıların yaşadığı kararlılık sorunları orantısız hızla düştü.' },
          { t: 'h2', text: 'Gerçek fayda' },
          { t: 'ul', items: [
            'Aynı bütçeyle daha çok etki: kaynak, sonucu gerçekten oynatan küçük kümeye gider.',
            'Tartışmayı veriye bağlar: "her şey önemli" diyen paydaşa kümülatif grafik gösterilir.',
            'Bakım ve destek yükünü düşürür: en çok sorun üreten az sayıda kök neden kapatılınca kuyruk kendiliğinden kısalır.',
          ]},
        ],
      },
    ],
  },
  {
    slug: 'uzun-kuyruk-modeli',
    section: 'pazarlama-musteri',
    title: 'Uzun Kuyruk Modeli',
    question: 'İnternet ekonomiyi nasıl dönüştürüyor?',
    summary: 'Niş ürünlerin toplamının çok satanlardan daha büyük bir pazar oluşturabileceğini söyleyen model.',
    tags: ['e-ticaret', 'strateji', 'pazar'],
    pages: [
      {
        slug: 'kavram',
        title: 'Kavram',
        blocks: [
          { t: 'callout', kind: 'simple', title: 'Bir cümlede', text: 'Az satan yüzlerce ürünün toplamı, çok satan birkaç üründen daha büyük olabilir; yeter ki bu ürünleri rafta tutmak sana pahalıya gelmesin.' },
          { t: 'callout', kind: 'ornek', title: 'Pazardan örnek', text: 'Hırdavatçı Nuri\'nin dükkânında en çok vida ve matkap ucu satılır. Ama Nuri internete de dükkân açtı ve az bulunan eski musluk contaları, nadir anahtar ağızları gibi yüzlerce garip parçayı listeledi. Her birinden ayda bir iki tane satılıyor; ama hepsinin toplamı, vidanın cirosunu geçti. Dükkânın rafına sığmayan bu ürünler internette depodan çıkıyor, kimseye yük olmuyor.' },
          { t: 'p', text: 'Pareto İlkesi hakkında okuduğun her şeyi unut — yani ürünlerin %20\'sinin cironun %80\'ini ürettiği fikrini. 2004\'te Wired dergisinin genel yayın yönetmeni Chris Anderson, internette satışa sunulan neredeyse her şeyin — ürün ne kadar tuhaf ya da gereksiz olursa olsun — gerçekten satıldığını öne sürdü. Sonuç olarak iş dünyası, tekdüzeliğin değil çeşitliliğin olduğu yere kayar.' },
          { t: 'p', text: 'Anderson iddiasını bir talep eğrisiyle gösterdi. En solda eğri dik biçimde yükselir: burada pazarın %20\'sini oluşturan çok satanlar ve gişe rekortmenleri vardır. Sonra eğri sağa doğru yumuşakça düzleşir: burada daha az popüler kitaplar ve filmler bulunur. Eğrinin bu kısmı zirveden çok daha geniştir ve çok daha fazla ürünü kapsar.' },
          { t: 'h2', text: 'Pareto\'nun tersine dönüşü' },
          { t: 'p', text: 'İçgüdüsel olarak Pareto ilkesinin haklı olduğu düşünülür: çok satanlar (%20) "az satanlardan" (%80) daha kârlıdır. Ama rakamlar başka bir şey söyler: uzun kuyruk, az sayıdaki çok satandan daha yüksek ciro üretir. 2004\'te bu cesur bir teoriydi; bugün pek çok sektörde standarttır. Kitlesel pazar çok satan ister, ama niş ürünlere de talep vardır: tek tek talep düşük olabilir, ama toplamda nişler çok satanlardan daha değerlidir.' },
          { t: 'quote', text: 'İnternet dünyanın en büyük kütüphanesidir. Sadece bütün kitaplar yerdedir. — John Allen Paulos' },
          { t: 'table', head: ['', 'Çok satanlar (baş)', 'Niş ürünler (kuyruk)'], rows: [
            ['Ürün sayısı', 'Az (birkaç kalem)', 'Çok (yüzlerce kalem)'],
            ['Tek ürünün satışı', 'Yüksek', 'Düşük (ayda bir iki adet)'],
            ['Toplam ciro', 'Büyük ama sınırlı', 'Toplandığında başı geçebilir'],
            ['Şartı', 'Raf ve reklam ister', 'Ucuz depolama ve iyi arama ister'],
          ]},
        ],
      },
      {
        slug: 'uygulama',
        title: 'Nasıl Uygulanır',
        blocks: [
          { t: 'steps', items: [
            { title: 'Kuyruğunu ölç', text: 'Ürün ya da içerik kataloğunu satış sırasına diz: cironun ne kadarı ilk %20\'den, ne kadarı geri kalandan geliyor?' },
            { title: 'Raf maliyetini sorgula', text: 'Uzun kuyruk ancak stoklama ve dağıtım maliyeti düşükse çalışır. Dijital ürün, talep üzerine üretim ya da merkezî depo, kuyruğu kârlı kılan koşullardır.' },
            { title: 'Keşfedilebilirliği kur', text: 'Kuyruk kendiliğinden satmaz: arama, öneri motoru ve "bunu alanlar şunu da aldı" mekanizmaları, niş ürünü doğru müşteriyle buluşturur.' },
            { title: 'İki stratejiyi ayır', text: 'Çok satan stratejisi (az ürün, büyük pazarlama) ile kuyruk stratejisi (çok ürün, otomatik eşleştirme) farklı kaslar ister; hangisini oynadığını bilinçli seç.' },
          ]},
          { t: 'callout', kind: 'warn', title: 'Sık yapılan hata', text: 'Uzun kuyruğu fiziksel raf ekonomisine taşımak. Depo, raf ve stok maliyeti olan bir işte binlerce az satan ürün taşımak kuyruk değil, ölü stok üretir. Model, marjinal maliyeti sıfıra yakın kanallar için tasarlanmıştır.' },
        ],
      },
      {
        slug: 'vaka',
        title: 'Gerçek Vaka & Fayda',
        blocks: [
          { t: 'callout', kind: 'case', title: 'Vaka: Amazon ve Netflix', text: 'Anderson\'ın teorisinin ilk kanıtları Amazon ve Netflix\'ten geldi. Amazon, hiçbir fiziksel kitapçının rafa koyamayacağı milyonlarca az satan kitabı listeleyerek büyüdü; araştırmacılar (MIT\'den Erik Brynjolfsson ve ekibi), Amazon\'un kitap satışlarının kayda değer bir bölümünün fiziksel mağazalarda hiç bulunmayan başlıklardan geldiğini gösterdi. DVD kiralama döneminde Netflix de aynı deseni raporladı: izlemelerin büyük kısmı yeni gişe filmlerinden değil, geniş arşiv kataloğundan geliyordu ve öneri motoru bu kuyruğu görünür kılıyordu. Bugün Spotify\'ın on milyonlarca şarkılık kataloğu aynı ekonominin standartlaşmış hâlidir.' },
          { t: 'h2', text: 'Gerçek fayda' },
          { t: 'ul', items: [
            'Yeni gelir alanı açar: çok satan yarışında kazanamayacak bir oyuncu, nişlerin toplamında sürdürülebilir pazar bulabilir.',
            'Ürün silme kararlarını inceltir: az satan bir ürün, kataloğun çekim gücünün parçası olabilir; tek başına değil kuyruk içindeki rolüyle değerlendirilir.',
            'Öneri sistemine yatırımı gerekçelendirir: kuyruğun cirosu, keşif mekanizmasının kalitesiyle doğru orantılıdır.',
          ]},
        ],
      },
    ],
  },
  {
    slug: 'catisma-cozumu-modeli',
    section: 'oyun-teorisi-muzakere',
    title: 'Çatışma Çözümü Modeli',
    question: 'Bir çatışma zarifçe nasıl çözülür?',
    summary: 'Bir çatışmaya verilebilecek altı tipik tepkiyi ve sonuçlarını haritalayan model.',
    tags: ['çatışma', 'müzakere', 'iletişim'],
    pages: [
      {
        slug: 'kavram',
        title: 'Kavram',
        blocks: [
          { t: 'callout', kind: 'simple', title: 'Bir cümlede', text: 'Bir kavgada altı yol vardır: kaçarsın, savaşırsın, boyun eğersin, büyüğe havale edersin, ortada buluşursun ya da oturup ikinizin de kazanacağı yeni bir yol bulursunuz.' },
          { t: 'callout', kind: 'ornek', title: 'Şantiyeden örnek', text: 'Sıvacı Osman ile elektrikçi Murat aynı duvarda çalışmak istiyor; ikisi de "önce ben" diyor. Kaçsalar iş durur. Kavga etseler biri küser, iş yine aksar. Şefe gitseler şef kafasına göre karar verir. Ortada buluşup duvarı yarı yarıya bölseler ikisi de sıkışır. Sonunda oturup konuşuyorlar: Murat sabah kanalları açıyor, Osman öğleden sonra sıvayı çekiyor. Kimse geri adım atmadı; ikisinin de işine yarayan üçüncü bir yol kurdular.' },
          { t: 'p', text: 'Psikologlar, kilitlenmeyi ve karşılıklı suçlamayı önlemek, istikrarı ve iletişimi yeniden kurmak için çatışmaların ele alınması gerektiğinde hemfikirdir. Soru şudur: nasıl? İlke olarak bir çatışma durumuyla başa çıkmanın altı farklı yolu vardır.' },
          { t: 'h2', text: 'Altı tepki' },
          { t: 'ul', items: [
            'Kaçış: çatışma ele alınmaz, durum aynen kalır; iki taraf da bir şey kazanmaz (kaybet–kaybet).',
            'Savaş: tek amaç kazanmaktır; ama birinin kazanması için birinin kaybetmesi gerekir. Rakibi alt etme ve dirence rağmen kendi pozisyonunu dayatma yaklaşımıdır (kazan–kaybet).',
            'Pes etme: kendi pozisyonundan vazgeçip geri çekilmek, yani kaybetmek (kaybet–kazan).',
            'Sorumluluğu devretme: çatışmadan bunalan taraf kararı — ve dolayısıyla yüzleşmeyi — genellikle daha üst bir otoriteye havale eder. Otorite çatışmayı çözer ama ne mutlaka akıllıca ne de mutlaka devredenin çıkarına (iki tarafın da kaybetme riski vardır).',
            'Uzlaşma: algıya bağlı olarak iki tarafın da kabul edebileceği bir çözüm; ideal değil ama koşullar içinde makul görülür (kazan–kaybet / kazan–kaybet).',
            'Konsensüs: iki tarafın birlikte geliştirdiği yeni bir çözüme dayanır. Uzlaşmanın aksine kimse geri adım atmak zorunda kalmaz; iki taraf birlikte bir "üçüncü yol" geliştirir (kazan–kazan).',
          ]},
          { t: 'p', text: 'İlk üç tepki duygusal, son üçü akılcı tepkilerdir. Model, hem kendi çatışma tipini hem karşı tarafınkini teşhis etmeye yarar.' },
          { t: 'quote', text: 'Başarısızlıklarımızın nedeni uğradığımız yenilgiler değil, katılmadığımız çatışmalardır. — Bern\'de bir gençlik merkezi duvar yazısı' },
          { t: 'table', head: ['Tepki', 'Şantiyedeki hâli', 'Sonuç'], rows: [
            ['Kaçış', 'İkisi de duvara yanaşmaz, iş durur', 'Kaybet–kaybet'],
            ['Savaş', 'Bağırışırlar, biri duvarı kapar', 'Kazan–kaybet'],
            ['Pes etme', 'Osman sesini çıkarmaz, içten içe biriktirir', 'Kaybet–kazan'],
            ['Havale etme', 'Şef karar verir, iki taraf da söylenir', 'Riskli'],
            ['Uzlaşma', 'Duvarı yarı yarıya bölerler, ikisi de sıkışır', 'Yarım kazanç'],
            ['Konsensüs', 'Sabah kanal, öğleden sonra sıva', 'Kazan–kazan'],
          ]},
        ],
      },
      {
        slug: 'uygulama',
        title: 'Nasıl Uygulanır',
        blocks: [
          { t: 'steps', items: [
            { title: 'Tepkini teşhis et', text: 'Devam eden bir çatışmada dürüstçe sor: şu anda altı tepkiden hangisini veriyorum? Kaçıyor muyum, savaşıyor muyum, havale mi ediyorum?' },
            { title: 'Karşı tarafı oku', text: 'Karşı tarafın tepki tipini de belirle. Savaşan birine pes etmek çatışmayı çözmez; sadece bir sonraki çatışmayı fiyatlandırır.' },
            { title: 'Duygusaldan akılcıya geç', text: 'Kaçış, savaş ve pes etme kalıcı çözüm üretmez. Konuşmayı uzlaşma ya da konsensüs zeminine taşı: "İkimizin de kabul edebileceği bir çözüm arıyoruz."' },
            { title: 'Üçüncü yolu ara', text: 'Uzlaşmayla yetinme: iki pozisyonun ortası yerine, iki tarafın ihtiyacını birden karşılayan yeni bir seçenek kurgulanabiliyor mu? Konsensüs, pazarlık değil ortak tasarımdır.' },
          ]},
          { t: 'callout', kind: 'tip', title: 'Otoriteye havale sinyali', text: 'Bir ekipte çatışmalar sürekli yöneticiye taşınıyorsa bu, dördüncü tepkinin (sorumluluğu devretme) kültürleştiğinin işaretidir. Yönetici her seferinde karar vererek kısa vadede hız kazanır, uzun vadede ekibin çatışma çözme kasını köreltir.' },
        ],
      },
      {
        slug: 'vaka',
        title: 'Gerçek Vaka & Fayda',
        blocks: [
          { t: 'callout', kind: 'case', title: 'Vaka: Camp David\'de üçüncü yol', text: 'Müzakere literatürünün klasik örneği, 1978 Camp David görüşmeleridir: Mısır ile İsrail, Sina Yarımadası üzerinde uzlaşamıyordu — toprağı bölmek (uzlaşma) iki taraf için de kabul edilemezdi. Çözüm, pozisyonların ortası değil, ihtiyaçların analiziydi: Mısır\'ın derdi egemenlik, İsrail\'inki güvenlikti. Sina\'nın Mısır egemenliğine dönmesi ama askerden arındırılması, iki ihtiyacı birden karşılayan bir "üçüncü yol"du — Fisher ve Ury\'nin "Getting to Yes" kitabında konsensüs yaklaşımının ders kitabı örneği olarak anlatılır. Antlaşma 1979\'da imzalandı ve bugün hâlâ yürürlüktedir.' },
          { t: 'h2', text: 'Gerçek fayda' },
          { t: 'ul', items: [
            'Çatışmayı konuşulabilir kılar: altı tepki, "kavga ediyoruz" belirsizliğini teşhis edilebilir davranışlara ayırır.',
            'Sahte çözümleri ayıklar: kaçış ve pes etme kısa vadede sessizlik, uzun vadede birikmiş fatura üretir; model bunu baştan gösterir.',
            'Müzakere kalitesini yükseltir: uzlaşma ile konsensüs arasındaki fark bilinince, masadan "kimsenin memnun olmadığı orta yol" yerine ortak tasarlanmış çözümle kalkılır.',
          ]},
        ],
      },
    ],
  },
  {
    slug: 'siyah-kugu-modeli',
    section: 'risk-guvenlik',
    title: 'Siyah Kuğu Modeli',
    question: 'Deneyimlerin seni neden daha bilge yapmaz?',
    summary: 'Geçmişe bakarak geleceği öngöremeyeceğimizi ve en büyük felaketlerin sürpriz geldiğini anlatan model.',
    tags: ['risk', 'belirsizlik', 'öngörü'],
    pages: [
      {
        slug: 'kavram',
        title: 'Kavram',
        blocks: [
          { t: 'callout', kind: 'simple', title: 'Bir cümlede', text: '"Bugüne kadar hep böyle oldu" demek geleceğin de böyle olacağını göstermez; en büyük felaketler tam da hiç beklenmedikleri için yıkıcıdır.' },
          { t: 'callout', kind: 'ornek', title: 'Atölyeden örnek', text: 'Torna ustası Şükrü yirmi yıldır tek bir fabrikaya parça yapıyor; "bu müşteri hiç gitmez" diyor, çünkü hiç gitmedi. Bir sabah fabrikanın taşındığı haberi geliyor ve atölyenin işi bir günde bitiyor. Yirmi yıllık düzen, gitmeyeceğinin kanıtı değilmiş. İkinci bir müşteri aramaya işler iyiyken başlamak gerekiyordu, kötüyken değil.' },
          { t: 'p', text: 'Düşünen bir insan için üç soru: Bildiğimizi nereden biliyoruz? Geçmiş, geleceği öngörmemize yardım eder mi? Beklenmedik olayları neden hiç beklemeyiz?' },
          { t: 'p', text: 'Bertrand Russell, 1912 tarihli "Felsefenin Problemleri" kitabında üç sorunun da cevabını tek örnekle özetledi: her gün yemlenen bir tavuk, her gün yemleneceğini varsaymaya başlar; insanların iyi kalpli olduğuna giderek daha çok inanır. Tavuğun hayatındaki hiçbir şey, bir gün kesileceğine işaret etmez. En büyük felaketlerin genellikle tam bir sürpriz olarak geldiğini kabul etmek zorundayız; bu yüzden Russell\'a göre kanıksadığımız şeyleri her zaman sorgulamalıyız.' },
          { t: 'h2', text: 'Taleb\'in siyah kuğusu' },
          { t: 'p', text: 'Lübnanlı yazar Nassim Nicholas Taleb, geçmişten geleceği öngörememe hâlimize "siyah kuğu" adını verdi. Batı dünyasında bütün kuğuların beyaz olduğu varsayılırdı — ta ki 17. yüzyılda doğa bilimciler siyah kuğu türünü keşfedene kadar. O güne dek hayal bile edilemeyen şey, birden doğal karşılanır oldu. 11 Eylül 2001 saldırısında da benzer bir şey yaşandı: felaket tamamen habersiz gelmiş gibiydi; oysa sonraki haftalarda neredeyse her şeyin bu saldırıya işaret ettiği görüldü.' },
          { t: 'p', text: 'Taleb\'in siyah kuğu tezi aslında bir model değil, neden-sonuç ilkesinin reddidir. Ve bize şunu hatırlatır: en sıkı sarıldığımız direkler, devrilmekte olduğunu gördüklerimizdir.' },
          { t: 'table', head: ['Varsayım', 'Sorulacak soru', 'Tampon'], rows: [
            ['Tek büyük müşterim hiç gitmez', 'Giderse kaç ay ayakta kalırım?', 'İkinci ve üçüncü müşteri şimdiden'],
            ['Tek tedarikçim hep teslim eder', 'Teslim edemezse ne olur?', 'Yedek tedarikçiyle küçük de olsa çalış'],
            ['Maaşım her ay yatar', 'Üç ay yatmazsa?', 'Kenarda nakit rezerv'],
            ['Bu makine hiç bozulmaz', 'En kritik günde bozulursa?', 'Bakım ve yedek parça'],
          ]},
        ],
      },
      {
        slug: 'uygulama',
        title: 'Nasıl Uygulanır',
        blocks: [
          { t: 'steps', items: [
            { title: 'Tavuğunu bul', text: 'Sırf uzun süredir hep böyle gittiği için "hep böyle gidecek" saydığın varsayımları listele: en büyük müşterin, tek tedarikçin, istikrarlı sandığın gelir kalemi.' },
            { title: 'Kırılganlığı ölç, olasılığı değil', text: '"Bu olayın olasılığı ne?" yerine "bu olay olursa bana ne olur?" diye sor. Siyah kuğunun olasılığı hesaplanamaz; senin kırılganlığın hesaplanabilir.' },
            { title: 'Tampon kur', text: 'Nakit rezervi, yedek tedarikçi, geri dönüş planı: verimsiz görünen fazlalıklar, sürpriz gününde hayatta kalma araçlarıdır.' },
            { title: 'Geçmişi kanıt sayma', text: '"Bugüne kadar hiç olmadı" cümlesini bir güvence olarak değil, bir alarm olarak oku — Russell\'ın tavuğu için de her şey kesim gününe kadar yolundaydı.' },
          ]},
          { t: 'callout', kind: 'warn', title: 'Sık yapılan hata', text: 'Siyah kuğuyu tahmin etmeye çalışmak. Modelin özü tam tersidir: tanımı gereği öngörülemeyeni öngöremezsin. Yapılabilecek tek şey, sürprize dayanıklı bir yapı kurmaktır.' },
        ],
      },
      {
        slug: 'vaka',
        title: 'Gerçek Vaka & Fayda',
        blocks: [
          { t: 'callout', kind: 'case', title: 'Vaka: 2008 küresel finans krizi', text: 'Taleb\'in "The Black Swan" kitabı 2007\'de, krizden aylar önce yayımlandı ve finans modellerinin nadir olayları sistematik biçimde küçümsediğini savundu. 2008\'de Lehman Brothers\'ın çöküşüyle tetiklenen kriz, tezin en çok anılan doğrulaması oldu: risk modelleri (ABD konut fiyatlarının ülke çapında aynı anda düşmeyeceği varsayımı gibi) geçmiş veriye dayanıyordu ve tam Russell\'ın tavuğu gibi, felaket gününe kadar her gün kendini doğruladı. Krizle birlikte "siyah kuğu" terimi finans dünyasının gündelik sözlüğüne girdi; bankacılık düzenlemeleri (stres testleri, daha yüksek sermaye tamponları) modelin "olasılığı değil kırılganlığı yönet" dersinin kurumsallaşmış hâlidir.' },
          { t: 'h2', text: 'Gerçek fayda' },
          { t: 'ul', items: [
            'Sahte güvenliği kırar: geçmiş veriye dayalı her "bize bir şey olmaz" cümlesi sorgulanır hâle gelir.',
            'Yedekliliği meşrulaştırır: verimlilik baskısına karşı tampon ve rezerv tutmanın stratejik gerekçesini verir.',
            'Kriz sonrası öğrenmeyi dürüstleştirir: "aslında işaretler vardı" tuzağı (geriye dönük açıklama yanılgısı) bilinince, gerçek ders sistem dayanıklılığından çıkarılır.',
          ]},
        ],
      },
    ],
  },
  {
    slug: 'ucurum-difuzyon-modeli',
    section: 'pazarlama-musteri',
    title: 'Uçurum – Difüzyon Modeli',
    question: 'Neden herkesin bir iPod\'u vardı?',
    summary: 'Yeniliklerin toplumda salgın eğrisiyle yayıldığını ve kritik eşiğin erken benimseyenlerden kitleye geçiş olduğunu anlatan model.',
    tags: ['inovasyon', 'pazarlama', 'yayılım'],
    pages: [
      {
        slug: 'kavram',
        title: 'Kavram',
        blocks: [
          { t: 'callout', kind: 'simple', title: 'Bir cümlede', text: 'Yeni bir şey önce birkaç meraklıya, sonra öncülere yayılır; asıl zor adım, öncülerden kuşkucu çoğunluğa geçiştir — orada bir uçurum vardır.' },
          { t: 'callout', kind: 'ornek', title: 'Pazardan örnek', text: 'Mahalleye kartla ödeme ilk geldiğinde sadece köşedeki genç kafeci taktı (yenilikçi). Sonra işleri iyi giden iki esnaf daha aldı (erken benimseyenler). Kasap Rıza aylarca direndi: "Benim müşterim nakitçidir." Ama müşteriler "kart geçiyor mu?" diye sorup yan dükkâna gidince o da aldı (kuşkucu kitle). En son, emekli tuhafiyeci Saim Amca taktı (ayak sürüyen). Cihaz aynı cihazdı; değişen, kimin kimden görüp güvendiğiydi.' },
          { t: 'p', text: 'Bazı fikirler — aptalca olanlar dahil — neden tutunup trende dönüşür de diğerleri kısa süre parlayıp gözden kaybolur? Sosyolog Everett Rogers, çekici bir fikrin ya da ürünün popülerleşme biçimini "difüzyon" (yayılım) olarak tanımladı. En ünlü difüzyon araştırmalarından biri, Bruce Ryan ile Neal Gross\'un 1930\'larda Iowa\'nın Greene County bölgesindeki hibrit mısır analizidir: yeni mısır türü eskisinden her bakımdan iyiydi, ama geniş kabul görmesi yirmi iki yıl aldı.' },
          { t: 'h2', text: 'Benimseyen grupları' },
          { t: 'ul', items: [
            'Yenilikçiler: yeni mısıra 1928 gibi erken bir tarihte geçen çiftçiler.',
            'Erken benimseyenler: yenilikçilerden "bulaşan", toplulukların kanaat önderleri; yenilikçilerin deneylerini izleyip onlara katılan saygın insanlar.',
            'Kuşkucu kitle: başarılı çiftçiler denemeden hiçbir şeyi değiştirmeyecek olanlar; ama bir noktada onlar da "hibrit mısır virüsüne" yakalandı.',
            'Ayak sürüyenler: en katı muhafazakârlar; yeniliği en son alan grup.',
          ]},
          { t: 'p', text: 'Grafiğe döküldüğünde bu gelişim, bir salgının ilerleyişine benzeyen tipik bir eğri alır: önce yavaş yükselir, sonra her yeni ürünün kritik noktasına ulaşır — birçok ürünün başarısız olduğu yer. Her yenilik için kritik nokta, erken benimseyenlerden kuşkucu kitleye geçiştir; çünkü tam burada bir "uçurum" vardır. ABD\'li sosyolog Morton Grodzins\'e göre erken benimseyenler yeniliği uçurumun karşısına, kuşkucu kitleye taşımayı başarırsa salgın döngüsü devrilme noktasına ulaşır: eğri, kitle ürünü kabul ettiğinde keskin biçimde yükselir, geriye yalnızca ayak sürüyenler kaldığında yeniden düşer.' },
          { t: 'quote', text: 'Önce seni görmezden gelirler, sonra sana gülerler, sonra seninle savaşırlar; sonra sen kazanırsın. — Mahatma Gandhi' },
          { t: 'table', head: ['Grup', 'Nüfus payı (Rogers\'ın araştırması)', 'Mahalledeki hâli', 'Onu ikna eden şey'], rows: [
            ['Yenilikçiler', 'Yüzde 2,5', 'Genç kafeci: ilk deneyen', 'Yeniliğin kendisi'],
            ['Erken benimseyenler', 'Yüzde 13,5', 'İşleri iyi giden iki esnaf', 'Öncünün deneyimi ve vizyon'],
            ['— UÇURUM —', 'Ürünlerin çoğu bu çizgide ölür', 'İlk yüzde 16 ile kalabalık arasındaki boşluk', 'Buradan sonrası kanıt ister, hayal değil'],
            ['Erken çoğunluk', 'Yüzde 34', 'Kasap Rıza: "benim müşterim nakitçidir"', 'Kanıt, güvence, kaybolan müşteri'],
            ['Geç çoğunluk', 'Yüzde 34', 'Komşu esnafın çoğu kullanınca gelenler', 'Mahallede standart hâline gelmesi'],
            ['Ayak sürüyenler', 'Yüzde 16', 'Saim Amca: en son gelen', 'Başka çare kalmaması'],
          ]},
        ],
      },
      {
        slug: 'uygulama',
        title: 'Nasıl Uygulanır',
        blocks: [
          { t: 'steps', items: [
            { title: 'Hedef grubunu konumlandır', text: 'Ürünün şu anda kime satıyor? Yenilikçilere mi, erken benimseyenlere mi, kitleye mi? Her grup farklı mesaj ve farklı kanıt ister.' },
            { title: 'Uçurumu kabul et', text: 'Erken benimseyenlerin coşkusu kitle için kanıt değildir. Kuşkucu kitle risk azaltma ister: referanslar, garantiler, "benim gibi biri kullanıyor" örnekleri.' },
            { title: 'Kanaat önderlerine yatır', text: 'Yayılım kişiden kişiye bulaşır. Reklam bütçesini herkese eşit dağıtmak yerine, kuşkucuların güvendiği görünür kullanıcıları kazan.' },
            { title: 'Eğrideki yerine göre planla', text: 'Devrilme noktası öncesi büyüme yavaştır; bunu başarısızlık sanıp erken pes etme. Devrilme sonrası ise kapasite ve destek yükü patlar; ona da hazırlıklı ol.' },
          ]},
          { t: 'callout', kind: 'warn', title: 'Sık yapılan hata', text: 'Daha iyi ürünün kendiliğinden yayılacağını sanmak. Hibrit mısır her bakımdan üstündü ve yine de yirmi iki yıl bekledi. Yayılım ürün kalitesinin değil, sosyal bulaşmanın fonksiyonudur.' },
        ],
      },
      {
        slug: 'vaka',
        title: 'Gerçek Vaka & Fayda',
        blocks: [
          { t: 'callout', kind: 'case', title: 'Vaka: iPod\'un salgın eğrisi', text: 'Kitabın kendi örneği iPod\'dur ve satış verisi difüzyon eğrisini neredeyse ders kitabı gibi çizer: 2001\'de piyasaya çıkan iPod ilk yıllarda yavaş yayıldı (yenilikçiler ve erken benimseyenler), 2005\'te yaklaşık 23 milyon, 2006\'da 39 milyon adede ulaşarak uçurumu aştı ve 2008\'de yılda yaklaşık 55 milyon adetle zirve yaptı (kitle). Sonra eğri indi: 2012\'de satışlar 35 milyona geriledi ve 2015\'te Apple, iPod satışlarını yıllık raporunda ayrıca açıklamayı bıraktı — ürün, ayak sürüyenler evresini de tamamlamıştı. Aynı eğri Tesla\'da da izlendi: Roadster ve Model S yenilikçilere, Model 3 uçurumun karşısındaki kitleye hitap eden bilinçli adımlardı.' },
          { t: 'h2', text: 'Gerçek fayda' },
          { t: 'ul', items: [
            'Pazarlama bütçesini evreye göre böler: erken evrede vizyon anlatılır, kitle evresinde risk azaltılır; ikisini karıştıran mesaj iki gruba da ulaşmaz.',
            'Yatırım kararlarına zemin verir: yavaş başlangıç ile başarısızlık ayırt edilir; uçurum öncesi metriklerle uçurum sonrası hedefler karıştırılmaz.',
            'Ürün yaşam döngüsünü öngörür: eğrinin inişi de modelin parçasıdır; zirvedeki ürünün yerine geçecek yeniliğe zirvedeyken yatırım yapılır.',
          ]},
        ],
      },
    ],
  },
  {
    slug: 'kara-kutu-modeli',
    section: 'veri-teknoloji',
    title: 'Kara Kutu Modeli',
    question: 'İnanç, bilginin yerini neden alıyor?',
    summary: 'Anlamadan kullanmak zorunda olduğumuz karmaşık sistemlerin karar verme biçimimizi nasıl değiştirdiğini anlatan model.',
    tags: ['karmaşıklık', 'güven', 'teknoloji'],
    pages: [
      {
        slug: 'kavram',
        title: 'Kavram',
        blocks: [
          { t: 'callout', kind: 'simple', title: 'Bir cümlede', text: 'Artık içini anlamadığımız pek çok şeyi kullanmak zorundayız; bu yüzden neye ve kime güveneceğimize bilerek karar vermeliyiz.' },
          { t: 'callout', kind: 'ornek', title: 'Atölyeden örnek', text: 'Usta Fikret eski arabaların motorunu sesinden tanırdı; açar, bakar, anlardı. Yeni araç geldiğinde kaputun altı bilgisayar dolu: arıza cihazı "şu parçayı değiştir" diyor, Fikret nedenini bilmeden değiştiriyor. Cihaz çoğu zaman haklı çıkıyor; Fikret de güvenini şuna bağlıyor: cihazın dediği tutuyor mu, tutmuyor mu? İçini göremediği kutuyu, geçmiş performansından izliyor.' },
          { t: 'p', text: 'Tartışmasız bir gerçek var: dünyamız her geçen gün daha karmaşık hâle geliyor. Siyah ve beyazın, iyi ve kötünün, doğru ve yanlışın yerini, çoğu insanı karanlıkta bırakan karmaşık yapılar aldı.' },
          { t: 'p', text: 'Çevremiz hızlandıkça ve karmaşıklaştıkça, gerçekten bildiğimiz — gerçekten kavrayıp anlayabildiğimiz — miktar sürekli azalıyor. Daha 1980\'lerde öğretmenler öğrencilerine bilgisayarın ikili kodla nasıl çalıştığını anlatmaya çalışırdı. Bugün, çevremizi saran ve kullandığımız pek çok şeyi (örneğin akıllı telefonları) anlamadığımız aşağı yukarı kabullenilmiş durumda. Biri bize DNA kodunu anlatmaya kalksa bile büyük olasılıkla derinliğinde boğuluruz.' },
          { t: 'h2', text: 'Kara kutularla yaşamak' },
          { t: 'p', text: 'Giderek daha çok "kara kutuyla" çevriliyiz: bize açıklansa bile anlamadığımız karmaşık yapılar. Kara kutunun iç süreçlerini kavrayamayız; ama yine de girdilerini ve çıktılarını karar verme süreçlerimize dahil ederiz. Anlamadan inanmak zorunda olduğumuz şeylerin miktarı sürekli artıyor. Bunun sonucu şudur: bir şeyi açıklayabilen kişilere, açıklamanın kendisinden daha fazla önem atfetmeye başlarız.' },
          { t: 'quote', text: 'Gelecekte insanları argümanlarla değil, imgeler ve duygularla ikna etmek norm hâline gelecek.' },
          { t: 'table', head: ['Kara kutu', 'Ne bilmiyoruz?', 'Neye bakarak güveniriz?'], rows: [
            ['Arıza tespit cihazı', 'Kararı nasıl verdiğini', 'Dediğinin tutup tutmadığına'],
            ['Telefon ve uygulamalar', 'İçeride ne döndüğünü', 'Geçmiş deneyime ve bilinirliğe'],
            ['Banka ve finans ürünleri', 'Paranın nasıl işletildiğini', 'Denetime ve hesap verebilirliğe'],
            ['Uzman raporu', 'Hesabın ayrıntısını', 'Uzmanın sicili ve bağımsızlığına'],
          ]},
        ],
      },
      {
        slug: 'uygulama',
        title: 'Nasıl Uygulanır',
        blocks: [
          { t: 'steps', items: [
            { title: 'Kara kutularını listele', text: 'Kararlarını etkileyen ama içini anlamadığın sistemleri yaz: algoritmalar, finansal ürünler, tedarik zincirleri, uzman raporları.' },
            { title: 'Girdi-çıktı disiplini kur', text: 'İçini anlayamadığın sistemin davranışını dışından izle: hangi girdiye hangi çıktıyı veriyor? Tutarlılık, kutunun içini görmeden kurulabilecek tek güvendir.' },
            { title: 'Açıklayanı ayrı değerlendir', text: 'Bir konuyu iyi anlatan kişinin haklı olduğu yanılsamasına karşı tetikte ol: sunumun kalitesi ile içeriğin doğruluğunu bilinçli olarak ayır.' },
            { title: 'Kritik kutuları seç', text: 'Her şeyi anlayamazsın; anlamadığında en çok zarar görebileceğin bir-iki kutuyu seç ve en azından temel mantığını öğrenmeye yatırım yap.' },
          ]},
          { t: 'callout', kind: 'warn', title: 'Sık yapılan hata', text: 'Kara kutuya iki uç tepkiden birini vermek: ya körü körüne güvenmek ya tamamen reddetmek. İkisi de karar kalitesini düşürür; olgun tutum, güveni kutunun geçmiş performansına ve hesap verebilirliğine bağlamaktır.' },
        ],
      },
      {
        slug: 'vaka',
        title: 'Gerçek Vaka & Fayda',
        blocks: [
          { t: 'callout', kind: 'case', title: 'Vaka: 2008 krizinde anlaşılmayan finansal ürünler', text: 'Kara kutu dinamiğinin en pahalı örneklerinden biri 2008 finans kriziydi: CDO gibi yapılandırılmış menkul kıymetler o kadar karmaşıktı ki onları satın alan kurumların çoğu — ve hatta derecelendiren kuruluşlar — iç yapısını gerçekten anlamıyordu. Piyasa, kutunun içeriği yerine çıktısına (AAA notu) ve açıklayıcıların özgüvenine güvendi. ABD Kongresi\'nin kriz soruşturma komisyonu (FCIC raporu, 2011), bu ürünlerin karmaşıklığının ve şeffaflık eksikliğinin krizin merkezî nedenlerinden olduğunu tespit etti. Aynı tartışma bugün yapay zekâ sistemleri için sürüyor: AB\'nin yapay zekâ düzenlemesi, yüksek riskli sistemlere açıklanabilirlik yükümlülüğü getirerek kara kutuya kurumsal cevap üretmeye çalışıyor.' },
          { t: 'h2', text: 'Gerçek fayda' },
          { t: 'ul', items: [
            'Güveni bilinçli bir karara çevirir: "anlamıyorum ama kullanıyorum" durumu görünür olunca, güvenin şartları da tanımlanabilir.',
            'Sunum büyüsüne karşı bağışıklık kazandırır: iyi anlatanın haklı sayıldığı toplantılarda içerik ile performans ayrışır.',
            'Kurumsal şeffaflık taleplerini gerekçelendirir: kritik kara kutulardan denetlenebilirlik istemek, teknoloji düşmanlığı değil risk yönetimidir.',
          ]},
        ],
      },
    ],
  },
  {
    slug: 'mahkum-ikilemi',
    section: 'oyun-teorisi-muzakere',
    title: 'Mahkûm İkilemi',
    question: 'Birine güvenmek ne zaman mantıklı?',
    summary: 'İşbirliği ile ihanet arasındaki gerilimi açıklayan oyun teorisi modeli.',
    tags: ['oyun teorisi', 'güven', 'müzakere'],
    pages: [
      {
        slug: 'kavram',
        title: 'Kavram',
        blocks: [
          { t: 'callout', kind: 'simple', title: 'Bir cümlede', text: 'Karşındakiyle bir daha karşılaşmayacaksan kandırmak cazip gelir; ama tekrar tekrar iş yapacaksanız dürüst olmak ikinize de kazandırır.' },
          { t: 'callout', kind: 'ornek', title: 'Pazardan örnek', text: 'Turistik çarşıda seyyar satıcı, bir daha hiç görmeyeceği müşteriye çürük malı üstten kapatıp satabilir; müşteri gider, dönmez. Mahalle manavı Salih bunu asla yapmaz: aynı müşteri yarın yine gelecek. Bir kez çürük çıkarsa müşteri komşuya anlatır, kaybı bir kasadan büyük olur. İkisi de aynı meyveyi satıyor; farkı yaratan, oyunun tek seferlik mi tekrarlı mı olduğu.' },
          { t: 'p', text: 'İki şüpheli ayrı hücrelerde sorgulanır. İkisi de susarsa az ceza alır; biri ötekini ele verirse eleveren serbest kalır, susan ağır ceza alır; ikisi de eleverirse ikisi de orta ceza alır. Bireysel akıl "ele ver" der; ama iki taraf da bunu yaptığında sonuç, ikisinin de susmasından kötüdür.' },
          { t: 'p', text: 'Modelin asıl dersi tek elli oyunda değil, tekrarlı oyundadır: taraflar tekrar karşılaşacaksa işbirliği rasyonel hâle gelir. Robert Axelrod\'un turnuvalarında en başarılı strateji en basiti çıktı: "kısasa kısas" — işbirliğiyle başla, karşındakinin son hamlesini aynen yansıt, affetmeyi bil.' },
          { t: 'table', head: ['', 'Tek seferlik oyun', 'Tekrarlı oyun'], rows: [
            ['Örnek', 'Turiste satış, tek pazarlık', 'Mahalle esnafı, uzun vadeli tedarikçi'],
            ['İhanetin bedeli', 'Düşük: müşteri dönmez zaten', 'Yüksek: itibar ve gelecek satışlar gider'],
            ['Akıllı strateji', 'Temkinli ol, güvence iste', 'İşbirliğiyle başla, kısasa kısas uygula'],
            ['Güvenin kaynağı', 'Sözleşme ve peşin ödeme', 'İtibar ve tekrar karşılaşma ihtimali'],
          ]},
        ],
      },
      {
        slug: 'uygulama',
        title: 'Nasıl Uygulanır',
        blocks: [
          { t: 'steps', items: [
            { title: 'Oyunu teşhis et', text: 'İlişki tek seferlik mi, tekrarlı mı? Tek seferlik pazarlıkta ihanet riski yüksektir; tekrarlı ilişkide itibar sermayedir.' },
            { title: 'Oyunu tekrarlıya çevir', text: 'Güven kurmak istiyorsan geleceği büyüt: uzun vadeli sözleşme, aşamalı teslimat, ortak yatırım. Yarın yoksa bugün ihanet ucuzdur.' },
            { title: 'Kısasa kısas uygula', text: 'İşbirliğiyle başla. İhanete net ve orantılı karşılık ver; ama karşı taraf düzelince sen de düzel. Kin tutan strateji turnuvayı kaybeder.' },
            { title: 'İletişimi aç', text: 'İkilemin gücü iletişimsizlikten gelir. Tarafların niyetlerini bağlayıcı şekilde açıklayabildiği her mekanizma (sözleşme, hakem, şeffaflık) ikilemi zayıflatır.' },
          ]},
        ],
      },
      {
        slug: 'vaka',
        title: 'Gerçek Vaka & Fayda',
        blocks: [
          { t: 'callout', kind: 'case', title: 'Vaka: OPEC kotaları', text: 'OPEC, üyelerinin toplam kazancını yükseltmek için üretim kotaları koyar: herkes kısarsa fiyat yüksek kalır (kolektif işbirliği). Ama her tek üye için kotayı gizlice aşmak bireysel olarak kârlıdır (ihanet). Tarih boyunca kota aşımı defalarca yaşandı ve fiyat çöküşleriyle sonuçlandı; 2020\'de Suudi Arabistan–Rusya anlaşmazlığı fiyat savaşına dönüşüp petrolü tarihî diplere indirdi. Kartelin görece disiplinli dönemleri ise tam Axelrod\'un öngördüğü mekanizmayla geldi: tekrarlı oyun, izleme ve ihlale karşılık verme tehdidi.' },
          { t: 'h2', text: 'Gerçek fayda' },
          { t: 'ul', items: [
            'Güven kararını duygudan çıkarır: "iyi insan mı?" yerine "oyunun yapısı işbirliğini ödüllendiriyor mu?" diye sorulur.',
            'Sözleşme tasarımını iyileştirir: aşamalı teslim ve karşılıklı bağımlılık, ihanetin bedelini yapısal olarak yükseltir.',
            'Fiyat savaşlarını öngörür: rakibin "irrasyonel" görünen hamlesi çoğu zaman tek elli oyunun rasyonel çıktısıdır.',
          ]},
        ],
      },
    ],
  },
]
