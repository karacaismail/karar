import type { DecisionModel } from '../types'

export const section4Models: DecisionModel[] = [
  {
    slug: 'takim-modeli',
    section: 'baskalarini-gelistir',
    title: 'Takım Modeli',
    question: 'Ekibin bu işe uygun mu?',
    summary: 'Ekip üyelerini iş için kritik becerilere göre puanlayıp kritik sınırla karşılaştıran değerlendirme modeli.',
    tags: ['ekip', 'yetkinlik'],
    pages: [
      {
        slug: 'kavram',
        title: 'Kavram',
        blocks: [
          { t: 'callout', kind: 'simple', title: 'Bir cümlede', text: 'İşe başlamadan önce "bu iş için hangi beceriler lazım, ekibimde bunlar ne kadar var?" diye tek tek puan ver; eksik yeri iş bitmeden gör.' },
          { t: 'callout', kind: 'ornek', title: 'Şantiyeden örnek', text: 'Müteahhit Salih yeni bir villa işi alıyor. Kâğıda beş beceri yazıyor: kalıp, demir, elektrik, seramik, sıva. Her usta için 10 üzerinden puan veriyor ve "en az 6 olmalı" diye çizgi çekiyor. Tablo bitince görüyor ki ekipte elektrikte 6\'yı geçen kimse yok. İş başlamadan taşeron elektrikçi anlaşması yapıyor; şantiye ortasında panik yaşamıyor.' },
          { t: 'p', text: 'İster bir anaokulunun ister bir millî takımın başında ol, ister şirket ister yardım komitesi kuruyor ol — soru aynıdır: Bu proje için doğru insanlar bende var mı? Becerilerimiz hedeflerimizle örtüşüyor mu?' },
          { t: 'h2', text: 'Modelin mantığı' },
          { t: 'ul', items: [
            'Önce işi tanımla: proje için gerçekten kritik olan beceri, uzmanlık ve kaynakları listele.',
            'Yumuşak becerileri (sadakat, motivasyon, güvenilirlik) ve sert becerileri (teknik bilgi, dil, alan uzmanlığı) ayrı yaz.',
            'Her beceri için 0–10 ölçeğinde bir kritik sınır belirle: "bu işte Fransızca için 5 yeterli" gibi.',
            'Sonra "oyuncularını" bu ölçütlere göre puanla ve noktaları çizgiyle birleştir: ekibin güçlü ve zayıf profili ortaya çıkar.',
          ]},
          { t: 'p', text: 'Modelin kendisinden daha aydınlatıcı olan şey, ardından gelen öz değerlendirmedir: iyi bir ekip, kendi kapasitesini doğru tartabilen ekiptir.' },
          { t: 'quote', text: 'En iyi yönetici, istediği işi yaptıracak doğru insanları seçecek kadar sağduyulu ve onlar işi yaparken karışmayacak kadar özdisiplinli olandır. — Theodore Roosevelt' },
          { t: 'callout', kind: 'warn', title: 'Dikkat', text: 'Gerçek güç benzerliklerde değil, farklılıklardadır. Herkesin aynı beceride zirve yaptığı ekip, diğer becerilerde kolektif kördür.' },
        ],
      },
      {
        slug: 'uygulama',
        title: 'Nasıl Uygulanır',
        blocks: [
          { t: 'steps', items: [
            { title: 'İşten başla, insandan değil', text: 'Önce projenin gerektirdiği 4-6 kritik beceriyi yaz; ancak sonra ekibe bak. Ters sıra, mevcut kadroyu meşrulaştırma egzersizine dönüşür.' },
            { title: 'Kritik sınırı çiz', text: 'Her beceri için "bu işin altına inilemez" eşiğini belirle. Her beceride 10 aramıyorsun; eşiğin üstünde kalmak yeterli.' },
            { title: 'Puanla ve çizgile', text: 'Her üyeyi her beceride puanla, profilleri üst üste çiz. Eşiğin altında kalan bölgeler ekibin gerçek riskidir.' },
            { title: 'Öz değerlendirmeyle karşılaştır', text: 'Aynı puanlamayı üyelerin kendilerine de yaptır. Senin puanınla öz puan arasındaki fark, konuşulması gereken asıl konudur.' },
          ]},
          { t: 'callout', kind: 'tip', title: 'İpucu', text: 'Boşluk bulunca ilk refleks işe alım olmasın: eğitim, dışarıdan danışmanlık ya da kapsam daraltma çoğu zaman daha hızlı kapatır.' },
          { t: 'h3', text: 'Örnek puan tablosu: villa şantiyesi' },
          { t: 'table', head: ['Usta', 'Kalıp', 'Demir', 'Elektrik', 'Seramik', 'Sınır: 6'], rows: [
            ['Veli', '9', '7', '3', '5', 'Elektrikte eksik'],
            ['Cemal', '6', '8', '4', '8', 'Elektrikte eksik'],
            ['Hasan', '7', '6', '5', '7', 'Elektrikte eksik'],
            ['EKİP EN İYİSİ', '9', '8', '5', '8', 'Elektrik 6 altı: taşeron gerek'],
          ]},
        ],
      },
      {
        slug: 'vaka',
        title: 'Gerçek Vaka & Fayda',
        blocks: [
          { t: 'callout', kind: 'case', title: 'Vaka: Futbolda oyuncu profilleme', text: 'Kitabın kendi örneği 2016/17 Premier League verisinden gelir: Kane, Alli, Vardy, Sterling ve Rooney gibi oyuncular gol, pas, hız, oyun zekâsı ve top sürme ölçütlerinde puanlanıp kritik sınırla karşılaştırılır. Bu, modern futbolun gerçek işleyişidir: kulüplerin scout birimleri her transfer adayını takımın ihtiyaç profiline göre çok boyutlu puanlar. Liverpool\'un veri bilimi ekibiyle yaptığı transferler (ör. 2017 sonrası dönem) bu profil-eşleştirme yaklaşımının en bilinen başarı örneklerindendir.' },
          { t: 'h2', text: 'Gerçek fayda' },
          { t: 'ul', items: [
            'İşe alım ve görevlendirme tartışmasını sezgiden ölçüte taşır: "iyi eleman" yerine "bu eşiğin üstünde mi?" konuşulur.',
            'Ekibin kör noktası görünür olur: herkesin zayıf olduğu tek beceri, projenin en olası başarısızlık nedenidir.',
            'Öz değerlendirme farkı, ekip içi güven ve farkındalık sohbetini başlatır.',
          ]},
        ],
      },
    ],
  },
  {
    slug: 'durumsal-liderlik',
    section: 'baskalarini-gelistir',
    title: 'Hersey–Blanchard Modeli',
    question: 'Çalışanlarımı nasıl başarıyla yönetirim?',
    summary: 'Liderlik tarzını çalışanın olgunluk düzeyine göre değiştiren durumsal liderlik modeli.',
    tags: ['liderlik', 'ekip yönetimi'],
    pages: [
      {
        slug: 'kavram',
        title: 'Kavram',
        blocks: [
          { t: 'callout', kind: 'simple', title: 'Bir cümlede', text: 'Yeni çırağa adım adım tarif edersin, ustalaşana sadece hedefi söyleyip çekilirsin; herkese aynı davranmak ikisine de haksızlıktır.' },
          { t: 'callout', kind: 'ornek', title: 'Atölyeden örnek', text: 'Torna atölyesinde ustabaşı Nuri, ilk haftasındaki çırağa her parçayı başında durup tarif ediyor (talimat). Altı aylık kalfaya "sen yap, takıldığında sor" diyor (koçluk). On yıllık usta Veli\'ye ise sadece siparişi uzatıyor: "Cuma\'ya yetişsin" (devir). Nuri aynı tavrı herkese uygulasaydı çırak parçayı yakar, Veli de "bana güvenmiyor" diye küserdi.' },
          { t: 'p', text: 'Paul Hersey ve Ken Blanchard\'ın modeli tek bir "doğru liderlik tarzı" olmadığını söyler: doğru tarz, çalışanın o işteki yetkinlik ve isteklilik düzeyine bağlıdır.' },
          { t: 'ul', items: [
            'Talimat ver (yetkinlik düşük, motivasyon yüksek): ne yapılacağını net söyle, sık kontrol et.',
            'Koçluk yap (yetkinlik gelişiyor, motivasyon dalgalı): yönlendir ama nedenlerini açıkla, soru sordur.',
            'Destekle (yetkinlik yüksek, özgüven dalgalı): kararları birlikte al, dinle, cesaretlendir.',
            'Devret (yetkinlik ve motivasyon yüksek): hedefi ver, yoldan çekil.',
          ]},
          { t: 'p', text: 'Kritik içgörü: aynı kişi farklı görevlerde farklı düzeydedir. Kıdemli bir mühendis yeni bir alanda "talimat" düzeyine döner; modeli kişiye değil, kişi-görev çiftine uygularsın.' },
        ],
      },
      {
        slug: 'uygulama',
        title: 'Nasıl Uygulanır',
        blocks: [
          { t: 'steps', items: [
            { title: 'Görev bazında haritala', text: 'Her ekip üyesi için ana görevlerini listele ve her görevde yetkinlik/isteklilik düzeyini işaretle.' },
            { title: 'Tarzını eşleştir', text: 'Her kişi-görev çifti için dört tarzdan birini seç. Varsayılan tarzın (herkese aynı davranmak) çoğu çift için yanlıştır.' },
            { title: 'Geçişi konuş', text: 'Tarz değişimini gizli yapma: "Bu konuda artık detaya girmeyeceğim, sahiplik sende" cümlesi devri resmîleştirir.' },
            { title: 'Düzenli güncelle', text: 'Düzeyler değişir. Mikro yönetim, çoğu zaman güncellenmemiş bir haritanın belirtisidir.' },
          ]},
          { t: 'callout', kind: 'warn', title: 'Sık yapılan hata', text: 'Yetkin kişiye talimat vermek (mikro yönetim) motivasyonu; yetkin olmayana devretmek (yanlış özerklik) kaliteyi öldürür. İki hata da "tek tarz" alışkanlığından doğar.' },
          { t: 'h3', text: 'Hangi çalışana hangi tarz?' },
          { t: 'table', head: ['Çalışan durumu', 'Bilgisi', 'İsteği', 'Doğru tarz'], rows: [
            ['İlk haftasındaki çırak', 'Az', 'Çok', '1. Talimat ver'],
            ['Altı aylık kalfa', 'Orta', 'İnişli çıkışlı', '2. Koçluk yap'],
            ['Usta ama özgüveni düşük', 'Çok', 'Dalgalı', '3. Destekle'],
            ['On yıllık usta', 'Çok', 'Çok', '4. Devret'],
          ]},
        ],
      },
      {
        slug: 'vaka',
        title: 'Gerçek Vaka & Fayda',
        blocks: [
          { t: 'callout', kind: 'case', title: 'Vaka: Kurumsal liderlik eğitiminin standardı', text: 'Durumsal Liderlik, dünyada en yaygın kullanılan liderlik geliştirme çerçevelerinden biridir: Blanchard şirketinin SLII programı Fortune 500 şirketlerinin büyük bölümünde ve orduda dahil kamu kurumlarında yöneticilere öğretilir. Yaygınlığının nedeni pratikliğidir: yeni terfi etmiş bir yöneticinin en sık iki hatası (herkese mikro yönetim ya da herkese tam serbestlik) model sayesinde teşhis edilebilir bir çerçeveye oturur.' },
          { t: 'h2', text: 'Gerçek fayda' },
          { t: 'ul', items: [
            'Mikro yönetim şikâyetini çözülebilir yapar: sorun kişilik değil, kişi-görev çiftine yanlış tarz eşleşmesidir.',
            'Yeni yöneticinin adaptasyonunu hızlandırır: dört tarz, sezgiyle yıllarca öğrenilecek dersi çerçeveye döker.',
            'Delegasyonu güvenli hâle getirir: devretme, bir anda değil koçluk ve destek basamaklarından geçerek yapılır.',
          ]},
        ],
      },
    ],
  },
  {
    slug: 'rol-oyunu-modeli',
    section: 'baskalarini-gelistir',
    title: 'Rol Oyunu Modeli (Belbin & de Bono)',
    question: 'Kendi bakış açımı nasıl değiştiririm?',
    summary: 'De Bono\'nun altı şapkası ve Belbin\'in dokuz takım rolüyle bakış açısını bilinçli değiştirme teknikleri.',
    tags: ['toplantı', 'yaratıcılık', 'takım rolleri'],
    pages: [
      {
        slug: 'kavram',
        title: 'Kavram',
        blocks: [
          { t: 'callout', kind: 'simple', title: 'Bir cümlede', text: 'Bir konuyu tartışırken herkes aynı anda aynı gözlükle bakar: önce herkes iyimser, sonra herkes eleştirmen; böylece kavga çıkmadan her açı konuşulur.' },
          { t: 'callout', kind: 'ornek', title: 'Kahvehaneden örnek', text: 'Mahalle esnafı ortak bir otopark yaptırmayı konuşuyor. Muhtar kural koyuyor: önce beş dakika herkes sadece iyi yanlarını söyleyecek, sonra beş dakika herkes sadece risklerini. Ne oluyor? İyimser bakkalın da riskleri sayması gerekiyor, kötümser kasabın da fırsatları. Kimse "sen hep karşısın" diyemiyor, çünkü sıra herkese aynı şapkayı taktırıyor.' },
          { t: 'p', text: 'Yaratıcı düşünce gurusu Edward de Bono 1986\'da "altı düşünme şapkası"nı sunduğunda eleştirmenler bunu bir eğlence sayıp geçti. Bugün teknik, toplantılarda iletişimi canlandıran ciddi bir yöntem olarak dünya çapında kullanılıyor: grup üyeleri tartışma sırasında hep birlikte aynı renkteki şapkayı takar — yani aynı anda aynı tek boyutlu bakış açısını benimser.' },
          { t: 'ul', items: [
            'Beyaz şapka: analitik, nesnel düşünme; vurgu gerçekler ve yapılabilirlikte.',
            'Kırmızı şapka: duygusal düşünme; öznel hisler, algılar, kanaatler.',
            'Siyah şapka: eleştirel düşünme; risk değerlendirme, sorun bulma, şüphecilik.',
            'Sarı şapka: iyimser düşünme; spekülatif en iyi senaryo.',
            'Yeşil şapka: yaratıcı, çağrışımsal düşünme; yeni fikirler, beyin fırtınası.',
            'Mavi şapka: yapılandırılmış düşünme; süreç görünümü, büyük resim.',
          ]},
          { t: 'h2', text: 'Belbin\'in takım rolleri' },
          { t: 'p', text: 'Aynı ailenin ikinci modeli Meredith Belbin\'den gelir: 1970\'lerde farklı kişilik tiplerinin takım performansına etkisini inceledi ve dokuz takım oyuncusu profili tanımladı. Üç kümede toplanır: eylem odaklılar (yapan, uygulayan, mükemmeliyetçi), iletişim odaklılar (koordinatör, takım oyuncusu, öncü) ve bilgi odaklılar (yenilikçi, gözlemci, uzman). Homojen takımlar — herkesin benzer düşündüğü takımlar — iyi çalışmaz.' },
          { t: 'quote', text: 'Hiçbir şeyi tek başıma yapmadım. Başarılan her şey kolektif olarak başarıldı. — Golda Meir' },
        ],
      },
      {
        slug: 'uygulama',
        title: 'Nasıl Uygulanır',
        blocks: [
          { t: 'steps', items: [
            { title: 'Şapka sırasını planla', text: 'Toplantıdan önce bir şapka sırası belirle (örn. beyaz→yeşil→sarı→siyah→kırmızı→mavi). Herkes aynı anda aynı şapkayı takar; sıra konuya göre değişir.' },
            { title: 'Moderatör ata', text: 'Toplantı mutlaka yönetilmeli: üyelerin rollerinden çıkmaması moderatörün işidir. Siyah şapka turunda iyimserlik, sarı turda eleştiri kaçaktır.' },
            { title: 'Belbin envanterini çıkar', text: 'Ekibindeki doğal rolleri işaretle: hangi roller çift, hangileri boş? Boş rol, o bakış açısının toplantılarda hiç konuşulmaması demektir.' },
            { title: 'Fikri sahiplendir', text: 'Kitabın taktiği: iyi bir fikrin dirençle karşılaşacağından korkuyorsan, tartışmayı diğerleri fikri kendileri bulmuş gibi hissedecek şekilde yönet. İnsanlar kendi ürettiklerini sandıkları fikir için savaşır.' },
          ]},
          { t: 'callout', kind: 'tip', title: 'İpucu', text: 'Altı şapkayı yalnız başına da kullanabilirsin: zor bir karara altı şapkayı sırayla takarak bakmak, tek perspektifin körlüğünü kırar.' },
          { t: 'h3', text: 'Örnek toplantı planı: yeni makine alınsın mı?' },
          { t: 'table', head: ['Sıra', 'Şapka', 'Süre', 'Konuşulan'], rows: [
            ['1', 'Beyaz', '5 dk', 'Fiyat, kapasite, mevcut makinenin arıza kaydı'],
            ['2', 'Sarı', '5 dk', 'Alırsak neler kazanırız?'],
            ['3', 'Siyah', '5 dk', 'Nerede batarız? Borç, eğitim, yedek parça'],
            ['4', 'Yeşil', '5 dk', 'Kiralama? İkinci el? Ortak alım?'],
            ['5', 'Kırmızı + Mavi', '5 dk', 'İçimize siniyor mu? Karar ve ilk adım'],
          ]},
        ],
      },
      {
        slug: 'vaka',
        title: 'Gerçek Vaka & Fayda',
        blocks: [
          { t: 'callout', kind: 'case', title: 'Vaka: Altı şapkanın kurumsal kullanımı', text: 'De Bono\'nun yöntemi ölü bir teori değil, belgeli kurumsal pratiktir: de Bono\'nun kendi yayınlarında ve vaka anlatımlarında IBM, Siemens ve ABB gibi şirketlerin altı şapka eğitimlerini toplantı süresini kısaltmak ve karar kalitesini artırmak için kullandığı aktarılır; Speedo\'nun tam vücut yüzücü mayosu geliştirme sürecinde de yöntemin kullanıldığı bilinir. Belbin rolleri ise bugün hâlâ Belbin Associates\'in resmî envanteriyle binlerce organizasyonda ekip kurulumunda uygulanmaktadır.' },
          { t: 'h2', text: 'Gerçek fayda' },
          { t: 'ul', items: [
            'Toplantı çatışmasını kişisellikten çıkarır: eleştiri "senin fikrine karşıyım" değil, "şu an siyah şapkadayız" olur.',
            'Sessiz perspektifleri zorunlu kılar: iyimserler eleştirmek, şüpheciler hayal kurmak zorunda kalır.',
            'Ekip kurulumunda boş rolleri gösterir: dokuz rolün haritası, işe alımda "bize hangi bakış eksik?" sorusunu cevaplar.',
          ]},
        ],
      },
    ],
  },
  {
    slug: 'sonuc-optimizasyonu',
    section: 'baskalarini-gelistir',
    title: 'Sonuç Optimizasyonu Modeli',
    question: 'Yazıcı neden hep teslim tarihinden hemen önce bozulur?',
    summary: 'Mevcut süreyi eşit üç döngüye bölüp projeyi "üç kez bitirerek" kaliteyi katlayan planlama modeli.',
    tags: ['proje yönetimi', 'planlama'],
    pages: [
      {
        slug: 'kavram',
        title: 'Kavram',
        blocks: [
          { t: 'callout', kind: 'simple', title: 'Bir cümlede', text: 'Süreni üçe böl ve işi üç kez bitir: önce kaba taslak, sonra düzeltme, en son cila; tek seferde mükemmel yapmaya çalışan, son gece yetiştiremez.' },
          { t: 'callout', kind: 'ornek', title: 'Marangozhaneden örnek', text: 'Marangoz İsmet\'e üç haftada mutfak dolabı sipariş edildi. İlk hafta dolabın tamamını kabaca kuruyor: gövde, kapaklar, raflar yerinde ama ham. İkinci hafta menteşeleri ayarlıyor, kusurlu kapağı değiştiriyor. Üçüncü hafta zımpara ve vernik. Komşu atölye ise üç haftayı "kusursuz tek kurulum" için harcadı; son gün cila kururken müşteri kapıdaydı.' },
          { t: 'p', text: 'Çoğu proje yönetimi yöntemi, sabit bir süre içinde fikirlerin toplandığı (T), bir konseptte birleştirildiği (B) ve uygulandığı (U) varsayımına dayanır. Gerçek hayatta ise süre hiçbir zaman yetmez — ve elimizdeki az zaman, tam yazıcıyı kullanacakken bozulması gibi öngörülemeyen olaylarla daha da kısalır.' },
          { t: 'p', text: 'Sonuç optimizasyonu modeli, mevcut süreyi eşit uzunlukta üç döngüye böler ve proje yöneticisini projeyi üç kez tamamlamaya zorlar: birinci döngüde taslak plan, ikincide rafine etme, üçüncüde optimizasyon. Her döngü kendi içinde topla-birleştir-uygula adımlarını içerir.' },
          { t: 'ul', items: [
            'Döngü 1 — Taslak: iş ilk kez uçtan uca "biter". Kaba ama bütündür.',
            'Döngü 2 — Rafine etme: aynı iş ikinci kez, öğrenilenlerle yeniden yapılır.',
            'Döngü 3 — Optimizasyon: son döngü cilalamaya ayrılır.',
          ]},
          { t: 'p', text: 'Yöntem yalnızca çıktı kalitesini değil, ekibin başarı duygusunu da katlar: proje sonunda "nihayet bitti" yorgunluğu yerine üç kez tamamlamanın birikmiş tatmini vardır.' },
          { t: 'quote', text: 'Güzel bir şey asla mükemmel değildir. — Anonim' },
        ],
      },
      {
        slug: 'uygulama',
        title: 'Nasıl Uygulanır',
        blocks: [
          { t: 'steps', items: [
            { title: 'Süreyi üçe böl', text: 'Toplam süreyi eşit üç döngüye ayır ve her döngünün sonuna bir "bitti" tarihi koy. Üçte birlik nokta, projenin ilk bitiş tarihidir.' },
            { title: 'İlk döngüde bütünü kur', text: 'Mükemmel parça değil, kaba bütün hedefle: sunumun tüm sayfaları, yazılımın tüm ana akışı, raporun tüm bölümleri kabaca var olmalı.' },
            { title: 'Döngüyü gerçekten kapat', text: 'Kitabın uyarısı: her döngü düzgün tamamlanmadan diğerine geçme; aksi hâlde model dinamiğini yitirir. Yarım döngü, döngü değildir.' },
            { title: 'Üç aşamayı ayrı tut', text: 'Geliştirme süreçlerinde toplama, birleştirme ve uygulama aşamalarını net ayır; aynı anda hem fikir toplayıp hem uygulamak iki işi de bozar.' },
          ]},
          { t: 'callout', kind: 'warn', title: 'Dikkat', text: 'Model, mükemmeliyetçiliğin ilacıdır ama disiplin ister: birinci döngüde "daha bitmedi ki göstereyim" direnci kırılmazsa üç döngü tek uzun döngüye geri döner.' },
          { t: 'h3', text: 'Üç haftalık iş için döngü planı' },
          { t: 'table', head: ['Döngü', 'Süre', 'Hedef', 'Sonunda elde ne var?'], rows: [
            ['1. Taslak', '1. hafta', 'Kaba ama BÜTÜN', 'Çalışan/duran ama tam bir ilk sürüm'],
            ['2. Rafine', '2. hafta', 'Hataları düzelt', 'Gösterilebilir ikinci sürüm'],
            ['3. Cila', '3. hafta', 'İnce ayar', 'Teslim edilen iş + yedek zaman'],
          ]},
        ],
      },
      {
        slug: 'vaka',
        title: 'Gerçek Vaka & Fayda',
        blocks: [
          { t: 'callout', kind: 'case', title: 'Vaka: Yazılımda iteratif geliştirmenin zaferi', text: 'Aynı ilke, yazılım endüstrisinin son yirmi yılına damga vuran gerçek bir dönüşümün özüdür: tek seferde "büyük patlama" ile teslim eden şelale projelerinin yüksek başarısızlık oranına karşı, işi kısa döngülerde defalarca "bitiren" iteratif/çevik yaklaşım standart hâline geldi. Standish Group\'un CHAOS raporları, küçük ve iteratif teslim edilen projelerin büyük tek-teslimli projelerden belirgin biçimde daha yüksek başarı oranına sahip olduğunu yıllardır raporlar. Spotify, Amazon gibi şirketlerin "önce çalışan bütün, sonra rafine et" pratiği, sonuç optimizasyonu modelinin endüstrileşmiş hâlidir.' },
          { t: 'h2', text: 'Gerçek fayda' },
          { t: 'ul', items: [
            'Son dakika felaketini eritir: yazıcı yine bozulur ama üçüncü döngüde bozulduğu için elde iki kez bitmiş iş vardır.',
            'Geri bildirimi erkene çeker: birinci döngünün çıktısı, paydaşlardan yön düzeltmesi almak için somut bir zemindir.',
            'Mükemmeliyetçiliği zamanlar: cilalama yasak değildir; sadece kendi döngüsüne (üçüncüye) hapsedilir.',
          ]},
        ],
      },
    ],
  },
  {
    slug: 'proje-yonetim-ucgeni',
    section: 'baskalarini-gelistir',
    title: 'Proje Yönetimi Üçgeni',
    question: 'Mükemmellik neden imkânsız?',
    summary: 'Hızlı, ucuz ve kaliteli arasında aynı anda yalnızca ikisinin seçilebileceğini söyleyen model.',
    tags: ['proje yönetimi', 'kısıtlar'],
    pages: [
      {
        slug: 'kavram',
        title: 'Kavram',
        blocks: [
          { t: 'callout', kind: 'simple', title: 'Bir cümlede', text: 'Hızlı, ucuz ve kaliteli: bu üçünden aynı anda en fazla ikisini seçebilirsin; üçünü birden isteyen, ortada birini gizlice kaybeder.' },
          { t: 'callout', kind: 'ornek', title: 'Şantiyeden örnek', text: 'Ev sahibi boyacı Ramazan\'a "bu hafta bitsin, kaliteli olsun, ucuz olsun" diyor. Ramazan gülüyor: "Abi üçü olmaz. Hızlı ve kaliteli istersen yanıma iki işçi daha alırım, pahalıya gelir. Hızlı ve ucuz istersen tek kat geçerim, seneye döküler. Kaliteli ve ucuz istersen boş günlerimde gelirim, üç haftaya biter. Hangisini istiyorsun?"' },
          { t: 'p', text: 'Üçgenin üç köşesi vardır: zaman (hızlı), maliyet (ucuz), kalite/kapsam (iyi). Model acımasız bir aritmetik sunar: aynı anda en fazla ikisini seçebilirsin.' },
          { t: 'ul', items: [
            'Hızlı + iyi → ucuz olmaz: kaliteli işi hızlandırmanın yolu daha çok kaynaktır.',
            'Hızlı + ucuz → iyi olmaz: kapsam ya da kalite kırpılır.',
            'İyi + ucuz → hızlı olmaz: az kaynakla kalite ancak zamanla üretilir.',
          ]},
          { t: 'p', text: 'Üçgen bir karamsarlık modeli değil, bir dürüstlük modelidir: üç köşeyi birden vaat eden plan, henüz hangi köşeden feragat edeceğine karar vermemiş plandır — ve o karar, proje ortasında kendiliğinden ve en pahalı şekilde verilir.' },
        ],
      },
      {
        slug: 'uygulama',
        title: 'Nasıl Uygulanır',
        blocks: [
          { t: 'steps', items: [
            { title: 'Köşeleri açıkça sırala', text: 'Proje başında paydaşlarla üç köşeyi öncelik sırasına diz: hangisi sabit, hangisi esnek, hangisi feda edilebilir?' },
            { title: 'Sabit köşeyi koru', text: 'Sabit köşe (örneğin yasal bir tarih) değişmezse, her yeni istek diğer iki köşeden ödenir. Bunu görünür bir kural yap.' },
            { title: 'Değişim taleplerini üçgenden geçir', text: 'Her kapsam ekleme talebine tek soruyla cevap ver: "Bunu hangi köşeden ödüyoruz — tarih mi, bütçe mi, başka bir kapsam mı?"' },
            { title: 'Feragati erken ilan et', text: 'Kırpılacak şeyi proje sonunda itiraf etmek yerine başında seç: bilinçli feragat ucuz, mecburi feragat pahalıdır.' },
          ]},
          { t: 'h3', text: 'Üç senaryo, üç bedel' },
          { t: 'table', head: ['İstenen ikili', 'Feda edilen', 'Boya işi örneği'], rows: [
            ['Hızlı + İyi', 'Ucuzluk', 'İki işçi daha: 3 günde biter, maliyet artar'],
            ['Hızlı + Ucuz', 'Kalite', 'Tek kat boya: seneye döküler'],
            ['İyi + Ucuz', 'Hız', 'Boş günlerde çalışılır: üç hafta sürer'],
          ]},
        ],
      },
      {
        slug: 'vaka',
        title: 'Gerçek Vaka & Fayda',
        blocks: [
          { t: 'callout', kind: 'case', title: 'Vaka: Denver Havalimanı bagaj sistemi', text: 'Denver Uluslararası Havalimanı 1990\'larda dünyanın en iddialı otomatik bagaj sistemini üç köşeyi birden vaat ederek sipariş etti: devasa kapsam, sıkışık takvim, sabit bütçe. Üçgen çalıştı: sistemin yetişmemesi havalimanının açılışını 16 ay geciktirdi, gecikmenin maliyeti yüzlerce milyon doları buldu; sistem kapsamı kırpılarak (tek terminal, tek yönlü) açılabildi ve 2005\'te tamamen söküldü. Proje, dünyada proje yönetimi derslerinin standart başarısızlık vakası olarak okutulur.' },
          { t: 'h2', text: 'Gerçek fayda' },
          { t: 'ul', items: [
            'Müzakereyi dürüstleştirir: "hepsi olsun" talebi, üçgen masadayken teknik değil politik bir talep olarak görünür.',
            'Kapsam kaymasını fiyatlandırır: her yeni istek bedava değildir; üçgen bedelin hangi köşeden ödendiğini gösterir.',
            'Ekibi korur: feda edilecek köşe başta seçilince, sonda gelen "hafta sonu mesaisi" kaçınılmaz olmaktan çıkar.',
          ]},
        ],
      },
    ],
  },
  {
    slug: 'drexler-sibbet-modeli',
    section: 'baskalarini-gelistir',
    title: 'Drexler/Sibbet Takım Performans Modeli',
    question: 'Bir grup nasıl takıma dönüşür?',
    summary: 'Her takımın geçtiği yedi aşamayı ve her aşamanın çözülüp çözülmediğini gösteren işaretleri tanımlayan model.',
    tags: ['ekip', 'takım kurma'],
    pages: [
      {
        slug: 'kavram',
        title: 'Kavram',
        blocks: [
          { t: 'callout', kind: 'simple', title: 'Bir cümlede', text: 'Bir grup insan takım olana kadar yedi duraktan geçer: neden buradayım, sana güvenir miyim, ne yapıyoruz, nasıl yapacağız, kim yapacak, işler tıkırında, devam mı; durak atlayan geri döner.' },
          { t: 'callout', kind: 'ornek', title: 'Şantiyeden örnek', text: 'Yeni kurulan kalıp ekibi ilk gün birbirini tanımıyor (durak 1-2). Formen doğrudan iş dağıtırsa (durak 5\'e atlarsa) bir hafta sonra kavga çıkıyor: kimse kimin sözüne güveneceğini bilmiyor. Tecrübeli formen önce çayda herkesi tanıştırıyor, işin hedefini anlatıyor, sonra rolleri dağıtıyor; ekip iki günde oturuyor.' },
          { t: 'p', text: 'Yüzlerce takım performans modeli vardır; en iyilerinden biri, danışman Allan Drexler ile The Grove\'un kurucusu David Sibbet tarafından geliştirildi. Model, bir projedeki katılımcıların tipik olarak geçtiği yedi aşamayı gösterir.' },
          { t: 'ul', items: [
            '1. Oryantasyon — "Neden buradayım?" Çözüldüğünde: amaç, takım kimliği, aidiyet.',
            '2. Güven inşası — "Sen kimsin?" Çözüldüğünde: karşılıklı saygı, açık sözlülük, güvenilirlik.',
            '3. Hedef netleştirme — "Ne yapıyoruz?" Çözüldüğünde: açık varsayımlar, bütünleşik hedefler, ortak vizyon.',
            '4. Taahhüt — "Nasıl yapacağız?" Çözüldüğünde: atanmış roller, tahsis edilmiş kaynaklar, alınmış kararlar.',
            '5. Uygulama — "Kim, neyi, ne zaman, nerede?" Çözüldüğünde: net süreçler, hizalanma, disiplinli yürütme.',
            '6. Yüksek performans — "Vay!" Çözüldüğünde: kendiliğinden etkileşim, sinerji, beklentileri aşan sonuçlar.',
            '7. Yenilenme — "Neden devam edelim?" Çözüldüğünde: takdir ve kutlama, değişim ustalığı, kalıcılık.',
          ]},
          { t: 'p', text: 'Her aşamanın "anahtarları" — o aşamada bocalarken ve aşama çözüldüğünde hissedilenler — takımın nerede olduğunu gösterir. Aşamalar bariz görünebilir; ama deneyim, her takımın her aşamadan geçtiğini gösterir. Atlanan aşamaya sonra geri dönülür.' },
          { t: 'quote', text: 'Gruplar ancak katılımcılardan biri ilk adımı atmaya cesaret ettiğinde ilerler. Lider olarak ilk hatayı yapmaya hazır olan sen olmalısın.' },
        ],
      },
      {
        slug: 'uygulama',
        title: 'Nasıl Uygulanır',
        blocks: [
          { t: 'steps', items: [
            { title: 'Modeli baştan tanıt', text: 'Takım liderisen modeli projenin başında ekibe sun; ortak dil kurulmuş olur.' },
            { title: 'Düzenli yokla', text: 'Proje boyunca aralıklarla sor: "Hangi aşamadayız? Bir sonraki aşamaya geçmek için ne gerekiyor?"' },
            { title: 'Anahtarlarla teşhis et', text: 'Aşamadan emin değilsen her aşamanın anahtarlarını yaz ve sor: hangileri sana, hangileri takıma uyuyor? Kayıtsızlık ve şüphecilik görüyorsan hedef netleştirme çözülmemiştir — geri dön.' },
            { title: 'Çatışmadan korkma', text: 'Olumsuz duyguları açığa çıkarmaktan çekinme: açık çatışma, birkaç aşama boyunca için için kaynayıp en sonda patlayan çatışmadan iyidir.' },
          ]},
          { t: 'callout', kind: 'warn', title: 'Dikkat', text: 'Takımı modele katı biçimde hizalamaya çalışma. Model bir yön bulma aracıdır: pusuladır, kalp pili değil.' },
          { t: 'h3', text: 'Durak teşhis tablosu' },
          { t: 'table', head: ['Görülen belirti', 'Takılınan durak', 'Yapılacak'], rows: [
            ['"Ben niye buradayım ki?" sesleri', '1. Oryantasyon', 'Amacı yeniden anlat'],
            ['Herkes temkinli, kimse açık konuşmuyor', '2. Güven', 'Birebir tanışma, ortak mola'],
            ['Aynı işi iki kişi yapıyor, bir iş sahipsiz', '4. Taahhüt', 'Rolleri yazılı dağıt'],
            ['İş yürüyor ama herkes tükenmiş', '7. Yenilenme', 'Kutla, dinlendir, yeni hedef koy'],
          ]},
        ],
      },
      {
        slug: 'vaka',
        title: 'Gerçek Vaka & Fayda',
        blocks: [
          { t: 'callout', kind: 'case', title: 'Vaka: The Grove ve görsel takım süreçleri', text: 'Model, David Sibbet\'in şirketi The Grove Consultants International tarafından on yıllardır gerçek kurumsal takım kuruluşlarında uygulanmaktadır: şirket, modeli büyük ölçekli organizasyonel değişim programlarında (aralarında Silikon Vadisi teknoloji şirketleri, sağlık kuruluşları ve kamu kurumlarının bulunduğu müşterilerle) görsel kolaylaştırma araçlarının çekirdeği olarak kullanır. Modelin yedi aşamalı duvar haritaları, takımların "hangi aşamada takıldık?" teşhisini birlikte yapmasını sağlayan somut bir çalıştay aracıdır.' },
          { t: 'h2', text: 'Gerçek fayda' },
          { t: 'ul', items: [
            'Takım sancısını normalleştirir: güven ya da taahhüt aşamasında bocalamak arıza değil, atlanamayan bir duraktır.',
            'Sorunun katmanını bulur: uygulama aksıyorsa kök çoğu zaman iki aşama geride, çözülmemiş hedef netliğindedir.',
            'Projenin sonunu yönetir: yenilenme aşaması, kutlama ve "devam mı?" sorusunu resmî gündeme alır.',
          ]},
        ],
      },
    ],
  },
  {
    slug: 'beklentiler-modeli',
    section: 'baskalarini-gelistir',
    title: 'Beklentiler Modeli',
    question: 'Partner seçerken neye dikkat etmeli?',
    summary: 'Beklenti yükseldikçe mutluluğun önce arttığını, devrilme noktasından sonra kaçınılmaz hayal kırıklığına döndüğünü anlatan model.',
    tags: ['beklenti yönetimi', 'ilişkiler'],
    pages: [
      {
        slug: 'kavram',
        title: 'Kavram',
        blocks: [
          { t: 'callout', kind: 'simple', title: 'Bir cümlede', text: 'Hiç beklentin yoksa hiçbir şey sevindirmez, beklentin ölçüsüz olursa hiçbir şey yetmez; mutluluk, beklentiyi doğru ayarlamaktır.' },
          { t: 'callout', kind: 'ornek', title: 'Pazardan örnek', text: 'Manav Şükrü çırağına ayda beş bin lira söz verip altı bin verirse çırak bayram eder. Yedi bin söz verip altı bin verirse aynı para küslük çıkarır. Para aynı: altı bin. Değişen tek şey beklentiydi. Şükrü bunu bildiği için müşteriye de "domates biraz ekşice" der; tatlı çıkınca müşteri bir daha hep ondan alır.' },
          { t: 'p', text: 'Model, yüksek beklenti sorununu partner seçimi örneğiyle anlatır: gelecekteki partnerinden hiçbir beklentin yoksa kayıtsızsındır — ve kayıtsız kararlar nadiren tatmin eder. Beklentin yükseldikçe, ona uyan birini bulduğundaki mutluluk da artar.' },
          { t: 'p', text: 'Ama bir devrilme noktası vardır: beklentiler kritik eşiği aşarsa hayal kırıklığı kaçınılmazdır, çünkü hayalini kurduğun şey ulaşılamaz hâle gelir. Deneyim, mükemmelliğin Loch Ness canavarına benzediğini öğretir: hayatı boyunca onu arayanlar vardır — ama kimse görmemiştir.' },
          { t: 'p', text: 'Elbette yüksek beklentiye sahip olmakta ilkesel bir yanlışlık yok. Ama standartlarının asla karşılanamayacağı hissi taşıyorsan kendine sor: beklentilerini düşürsen ne kaybederdin?' },
          { t: 'quote', text: 'Kusurlu bir elmas, kusursuz bir çakıl taşından iyidir. — Konfüçyüs' },
        ],
      },
      {
        slug: 'uygulama',
        title: 'Nasıl Uygulanır',
        blocks: [
          { t: 'steps', items: [
            { title: 'Beklentiyi yaz', text: 'Karardan (iş teklifi, ortaklık, ev, ilişki) beklediklerini maddeler hâlinde yaz; yazılmamış beklenti ölçülemez.' },
            { title: 'Eşiği ayır', text: 'Listeyi ikiye böl: vazgeçilmezler (karşılanmazsa hayır) ve tercihler (güzel olur ama şart değil). Hayal kırıklığının çoğu, tercihleri vazgeçilmez sanmaktan doğar.' },
            { title: 'Devrilme noktanı ara', text: 'Kendine sor: bu beklenti seti gerçek dünyada kaç adayda birden bulunur? Cevap "hiçbirinde" ise eşiği sen aşmışsındır.' },
            { title: 'Karşı tarafla eşitle', text: 'İki taraflı ilişkilerde beklentileri karşılıklı açıkla: söylenmemiş beklenti, karşı taraf için görünmez bir sınavdır ve çoğu insan girmediği sınavdan kalır.' },
          ]},
          { t: 'callout', kind: 'tip', title: 'İpucu', text: 'Model tersinden de çalışır: sıfır beklentiyle girilen iş ya da ilişki kayıtsızlık üretir. Hedef beklentisizlik değil, bilinçli kalibrasyondur.' },
          { t: 'h3', text: 'Aynı sonuç, farklı beklenti' },
          { t: 'table', head: ['Söz verilen', 'Gerçekleşen', 'Hissedilen'], rows: [
            ['5.000 TL', '6.000 TL', 'Bayram: beklentinin üstü'],
            ['6.000 TL', '6.000 TL', 'Memnuniyet: tam karşılandı'],
            ['7.000 TL', '6.000 TL', 'Küslük: aynı para, kırık söz'],
          ]},
        ],
      },
      {
        slug: 'vaka',
        title: 'Gerçek Vaka & Fayda',
        blocks: [
          { t: 'callout', kind: 'case', title: 'Vaka: Beklenti yönetimi bir ürün stratejisi olarak', text: 'Beklenti–memnuniyet ilişkisi, müşteri memnuniyeti literatürünün en sağlam bulgularından biridir (beklenti onaylamama kuramı): memnuniyet, deneyimin kendisinden çok deneyim ile beklenti arasındaki farktan doğar. Bunun en bilinen kurumsal uygulaması "az vaat et, çok teslim et" ilkesidir — örneğin Amazon\'un kargo tesliminde tahminî tarihi bilinçli olarak geç verip erken teslim etmesi, aynı operasyonel performansı daha yüksek algılanan memnuniyete çevirir. Apple\'ın ürün lansmanlarında özellik sızıntılarını sıkı kontrol etmesi de aynı mantıktır: beklenti, sahnede aşılabilir bir seviyede tutulur.' },
          { t: 'h2', text: 'Gerçek fayda' },
          { t: 'ul', items: [
            'Hayal kırıklığını tasarım sorunu yapar: duygu değil, yanlış kalibre edilmiş bir eşik düzeltilir.',
            'Müzakerede güç verir: vazgeçilmez–tercih ayrımı yapılmış beklenti listesi, tavizin nereden verileceğini önceden bilir.',
            'İlişki ve işbirliklerini korur: açıklanmış beklenti, sessiz sınavların ve birikmiş kırgınlıkların ilacıdır.',
          ]},
        ],
      },
    ],
  },
  {
    slug: 'gelecekte-nasil-karar-verecegiz',
    section: 'baskalarini-gelistir',
    title: 'Gelecekte Nasıl Karar Vereceğiz?',
    question: 'Karin Frick\'in denemesi: makineler karar verirken modellere ne olacak?',
    summary: 'Veri ve yapay zekâ çağında karar vermenin nasıl değiştiğine dair Gottlieb Duttweiler Enstitüsü\'nden bir bakış.',
    tags: ['yapay zekâ', 'gelecek', 'karar verme'],
    pages: [
      {
        slug: 'kavram',
        title: 'Kavram',
        blocks: [
          { t: 'callout', kind: 'simple', title: 'Bir cümlede', text: 'Artık birçok kararı bilgisayarlar veriye bakarak öneriyor; bu iyi bir yardımcıdır ama direksiyon hâlâ sende olmalı, çünkü makinenin neye göre karar verdiğini çoğu zaman kimse bilmiyor.' },
          { t: 'callout', kind: 'ornek', title: 'Nakliyeden örnek', text: 'Kamyoncu Askar navigasyonun "40 dakika kısa" dediği yola giriyor; yol kısa ama alçak köprü var, kamyon geçemiyor. Navigasyon veriye baktı ama yükün yüksekliğini bilmiyordu. Ertesi gün Askar yine navigasyon kullanıyor — ama önce kendisi haritaya bakıp "bu güzergâhta köprü var mı?" diye kontrol ediyor. Alet öneriyor, kararı şoför veriyor.' },
          { t: 'p', text: 'Gottlieb Duttweiler Enstitüsü araştırma direktörü Karin Frick, kitabın ilk baskısı için yazdığı denemede "bağlantılılık yeni nedenselliktir" demişti: akıllı makineler modellerle değil veriyle çıkarım yapar; yaptığımız, aldığımız ve karar verdiğimiz neredeyse her şey dijital iz bırakır.' },
          { t: 'p', text: 'Frick\'e göre önümüzdeki yılların en güçlü yönetim araçları akıllı analizler değil, akıllı asistanlar olacak. Yapay zekâ iki şeyi mümkün kılar: gerçekliğe birçok farklı perspektiften ve dolayısıyla daha nesnel bakmak; ve insanların aksine, geçmişin öznel deneyimiyle değil gerçek zamanlı bilgiyle analiz yapmak.' },
          { t: 'h2', text: 'HiPPO\'nun sonu' },
          { t: 'p', text: 'BT uzmanı Andrew McAfee\'nin modeli: veri azken kararı odadaki en önemli — genellikle en yüksek maaşlı — kişinin görüşü belirler. McAfee buna HiPPO der: Highest Paid Person\'s Opinion (en yüksek maaşlı kişinin görüşü). Karar sürecine ne kadar çok veri akarsa kararlar potansiyel olarak o kadar iyileşir ve HiPPO\'lar o kadar önemsizleşir. Veri, hiyerarşileri kırma aracıdır.' },
          { t: 'h2', text: 'Ama bir sorun var' },
          { t: 'p', text: 'Gelecekte karar vericiler modellerle değil, yapay zekâ destekli öngörü araçlarıyla çalışacak. Fırsat: bu araçlar insanlardaki bilişsel önyargılardan azade. Sorun: bu makinelerin neyi hesapladığını ve kararlarının hangi değerlere dayandığını anlamıyoruz. Dünyayı yöneten algoritmalar, yalnızca birkaç uzmanın anladığı kara kutular. Bol veri paradoksu da cabası: muazzam hassasiyet, ama aynı anda büyük kafa karışıklığı — örüntü bulmak anlam kurmak değildir.' },
          { t: 'quote', text: 'Frick\'in vardığı sonuç: bu kitaptaki modeller eski ve analog olsalar bile, giderek karmaşıklaşan bir dünyada neyin önemli olduğuna odaklanmamıza, değerleri düşünmemize ve eylemlerimizin sorumluluğunu makinelere devretmemeye yardım ediyor. Düşünen makineler çağında buna her zamankinden çok inanıyorum.' },
        ],
      },
      {
        slug: 'uygulama',
        title: 'Nasıl Uygulanır',
        blocks: [
          { t: 'steps', items: [
            { title: 'Veriyi masaya çağır', text: 'Önemli kararlarda "en kıdemli ne diyor?" sorusundan önce "veri ne diyor?" sorusunu kur; HiPPO etkisini bilinçli olarak dengele.' },
            { title: 'Kara kutuyu sorgula', text: 'Bir algoritmanın önerisini kullanırken iki soruyu sor: hangi veriyle beslendi ve hangi değer varsayımlarıyla optimize ediyor? Cevabı bilinmeyen öneri, tavsiye değil risktir.' },
            { title: 'Anlamı kendin kur', text: 'Örüntü bulmayı makineye, anlam kurmayı kendine bırak: modeldeki korelasyonun işine ne anlattığını bir cümleyle yazamıyorsan karar verme.' },
            { title: 'Sorumluluğu devretme', text: 'Yapay zekâ önerir, insan karar verir: kararın gerekçesini "algoritma öyle dedi" olmaktan çıkar; imza hâlâ senin.' },
          ]},
          { t: 'callout', kind: 'warn', title: 'Dikkat', text: 'Chaplin\'in Büyük Diktatör\'deki sözünün özü hâlâ geçerli: ilerlemeyi kucakla, ama nasıl kullanıldığına karşı tetikte ol. Makineden çok insanlığa, zekâdan çok nezakete ihtiyacımız var.' },
          { t: 'h3', text: 'Karar masasında iş bölümü' },
          { t: 'table', head: ['İş', 'Makine mi, insan mı?', 'Neden'], rows: [
            ['Binlerce kaydı tarayıp örüntü bulmak', 'Makine', 'Hız ve hafıza insanı aşar'],
            ['Örüntünün anlamını yorumlamak', 'İnsan', 'Bağlamı ve istisnayı insan bilir'],
            ['Değer yargısı gerektiren seçim', 'İnsan', 'Neyin "iyi" olduğunu makine tanımlayamaz'],
            ['Sonucun sorumluluğunu taşımak', 'Her zaman insan', 'İmza devredilemez'],
          ]},
        ],
      },
      {
        slug: 'vaka',
        title: 'Gerçek Vaka & Fayda',
        blocks: [
          { t: 'callout', kind: 'case', title: 'Vaka: Amazon\'un veriye dayalı karar kültürü', text: 'HiPPO kavramının panzehiri olarak veri kültürünün en bilinen örneği Amazon\'dur: şirket, ürün ve arayüz kararlarının büyük bölümünü A/B testleriyle verir; Jeff Bezos\'un hissedar mektuplarında anlattığı karar çerçevesi, güçlü veri sinyali olan kararlarda hiyerarşiyi değil deneyi yetkili kılar. Aynı madalyonun uyarı yüzü de gerçek bir vakadır: Amazon\'un 2014-2017 arasında geliştirdiği yapay zekâ destekli işe alım aracı, geçmiş verideki cinsiyet yanlılığını öğrenip kadın adayları sistematik olarak aleyhe puanladığı fark edilince kapatıldı — Frick\'in "kara kutuların değerlerini bilmiyoruz" uyarısının belgelenmiş kanıtı.' },
          { t: 'h2', text: 'Gerçek fayda' },
          { t: 'ul', items: [
            'Karar kalitesini kıdemden ayırır: veri masadayken en iyi argüman, en yüksek maaş yerine kazanır.',
            'Algoritma kullanımına fren ve gaz birlikte verir: öneriyi al, değer varsayımını sorgula, sorumluluğu tut.',
            'Analog modellerin değerini netleştirir: model, veri bolluğunda neyin önemli olduğunu seçme disiplinidir.',
          ]},
        ],
      },
    ],
  },
]
