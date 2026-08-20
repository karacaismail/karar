import type { DecisionModel } from '../types'

export const section5aModels: DecisionModel[] = [
  {
    slug: 'freud-belirti-okuma',
    section: 'yaraticilik-dahi',
    title: 'Freud\'un Derin Yapı Stratejisi',
    question: 'Bu davranışın altında ne yatıyor?',
    summary: 'Tekrarlayan bir davranışın ya da sorunun görünmeyen nedenini ve bugün hâlâ işe yarayan amacını bulup dile dökerek çözen analiz stratejisi.',
    tags: ['analiz', 'gözlem', 'problem çözme'],
    pages: [
      {
        slug: 'kavram',
        title: 'Kavram',
        blocks: [
          { t: 'callout', kind: 'simple', title: 'Bir cümlede', text: 'Rahatsız eden bir davranış rastgele değildir; onu bir bilmece gibi ele al, "nereden çıktı ve bugün ne işe yarıyor?" sorularına cevap bulup bunu açıkça kelimelere dök — çoğu düğüm o zaman çözülür.' },
          { t: 'callout', kind: 'ornek', title: 'Atölyeden örnek', text: 'Kaynak ustası Ramazan\'ın kalfası her önemli siparişte hastalanıyor. Ramazan kızmak yerine iki soru soruyor: "Bu ne zaman başladı?" ve "Bugün sana ne kazandırıyor?" Konuşunca ortaya çıkıyor: kalfa iki yıl önce büyük bir siparişi yakmış, ustası herkesin önünde azarlamış. O günden beri "hasta olursam hata da yapamam" diye vücut kendini koruyor. Sorun konuşulup ismi konunca, kalfa büyük işlerde önce kontrol listesiyle çalışmaya başlıyor ve hastalanmalar bitiyor.' },
          { t: 'p', text: 'Sigmund Freud\'a göre zihnimizin işleyişinin büyük bölümü farkında olmadığımız katmanda gerçekleşir. Tekrarlayan bir sorun (sürekli erteleme, hep aynı tartışma, açıklanamayan bir korku) ona göre bozukluk değil, bir işarettir: sistem kendini onarmaya çalışırken bir yerde takılmıştır.' },
          { t: 'h2', text: 'Stratejinin mantığı' },
          { t: 'ul', items: [
            'Belirti anlamsız değildir: daha büyük bir sistemin (kişinin geçmişi ve bugünkü ortamı) içinde bir yere oturur.',
            'İki neden aranır: davranışın doğduğu geçmiş olay ("hangi izlenimlerden çıktı?") ve bugün hizmet ettiği amaç ("şimdi ne işe yarıyor?").',
            'Freud\'un ustalığı gözlemdeydi: sadece olana değil, olmayana da bakardı. "Burada olması gereken ama olmayan şey ne?" sorusu en güçlü ipucunu verir.',
            'Kalıba uymayan küçük ayrıntılar (tuhaf bir söz, önemsiz görünen bir alışkanlık) çoğu zaman en değerli izlerdir.',
            'Çözüm dille gelir: görünmeyen neden bulunup açıkça kelimelere dökülünce, zihnin doğal onarım süreci yeniden çalışmaya başlar. Freud buna "konuşma tedavisi" derdi.',
          ]},
          { t: 'p', text: 'Bu strateji sadece terapi için değildir. Bir ekipte tekrarlayan gecikmeyi, bir müşteriyle hep aynı yerde kopan pazarlığı ya da kendi ertelemeni de aynı gözle okuyabilirsin: davranış bir bilmece, sen de dedektifsin.' },
          { t: 'table', head: ['Soru', 'Neyi arar', 'Örnek cevap'], rows: [
            ['Bu ne zaman ve nasıl başladı?', 'Geçmiş neden (kaynak olay)', 'Büyük siparişte azarlanma'],
            ['Bugün kişiye ne kazandırıyor?', 'Bugünkü amaç (gizli fayda)', 'Hata yapma riskinden korunma'],
            ['Olması gereken ama olmayan ne?', 'Eksik parça', 'Hata sonrası konuşma hiç yapılmamış'],
            ['Kalıba uymayan ayrıntı ne?', 'Anlamlı istisna', 'Sadece büyük işlerde hastalanma'],
          ]},
        ],
      },
      {
        slug: 'uygulama',
        title: 'Nasıl Uygulanır',
        blocks: [
          { t: 'steps', items: [
            { title: 'Belirtiyi suçlamadan tarif et', text: 'Tekrarlayan davranışı yargılamadan yaz: ne oluyor, ne sıklıkla, hangi ortamlarda? "Tembel" gibi etiketler değil, gözlenebilir olgular.' },
            { title: 'İki neden sorusunu sor', text: 'Geçmiş: "Bu ilk ne zaman ortaya çıktı, o sırada ne yaşanıyordu?" Bugün: "Bu davranış şu anda kişiyi neyden koruyor ya da ona ne kazandırıyor?"' },
            { title: 'Olmayana ve istisnalara bak', text: 'Beklenen ama görülmeyen davranışları ve kalıba uymayan küçük ayrıntıları not et. En sağlam ipuçları genelde buradadır.' },
            { title: 'Bulduğunu kelimelere dök', text: 'Vardığın anlamı açıkça konuş ya da yazdır: "Bu davranış aslında şunu yapıyor." Ancak adı konan şey değiştirilebilir; sonra aynı ihtiyacı karşılayan daha iyi bir yol seçilir.' },
          ]},
          { t: 'callout', kind: 'tip', title: 'İpucu', text: 'Kendine uygularken yaz: erteleme gibi bir alışkanlığı üç gün boyunca "ne zaman, hangi işte, öncesinde ne hissettim" diye not et. Kalıp genelde üçüncü günde kendini gösterir.' },
          { t: 'callout', kind: 'warn', title: 'Dikkat', text: 'Bu strateji teşhis koymak için değil, anlamak içindir. Başkasının davranışına "senin asıl derdin şu" diye kesin hüküm vermek analizi bozar; yorumunu her zaman soru olarak sun ve karşındakinin doğrulamasını bekle.' },
        ],
      },
      {
        slug: 'vaka',
        title: 'Gerçek Vaka & Fayda',
        blocks: [
          { t: 'callout', kind: 'case', title: 'Vaka: Konuşma tedavisinin doğuşu', text: 'Freud ve meslektaşı Josef Breuer, 1895\'te yayımlanan "Histeri Üzerine Çalışmalar" kitabında belgelenen vakalarda şunu gözlemledi: fiziksel açıklaması bulunamayan belirtiler (felç benzeri tutulmalar, konuşma bozuklukları), hastanın belirtiyle bağlantılı geçmiş olayı hatırlayıp kelimelere dökmesiyle hafifliyordu. Bu gözlem "konuşma tedavisi" adıyla tarihe geçti ve modern psikoterapinin temelini attı. Freud aynı analiz stratejisini 1910\'da Leonardo da Vinci üzerine yazdığı incelemede bir dahinin yaşam örüntülerini okumak için de kullandı: da Vinci\'nin işlerini yarım bırakma alışkanlığı gibi tekrarlayan kalıpları geçmiş nedenleriyle açıklamaya çalıştı. Yorumlarının bir kısmı bugün tartışmalıdır; ama yöntemi — kalıbı bul, kaynağını ve amacını ara, dile dök — psikolojiden koçluğa kadar her alanda yaşamaya devam ediyor.' },
          { t: 'h2', text: 'Gerçek fayda' },
          { t: 'ul', items: [
            'Tekrarlayan sorunları "karakter kusuru" olmaktan çıkarıp çözülebilir bilmecelere dönüştürür: neden ve amaç bulununca müdahale noktası görünür.',
            'Gözlem kaliteni yükseltir: olmayana ve istisnaya bakma alışkanlığı, ekip yönetiminden müşteri görüşmesine kadar her yerde işe yarar.',
            'Konuşmanın gücünü kullanır: adı konmamış bir sorun yönetilemez; kelimelere dökülen sorun küçülür.',
          ]},
        ],
      },
    ],
  },
  {
    slug: 'olumlu-niyet-cercevesi',
    section: 'ekip-liderlik',
    title: 'Olumlu Niyet Çerçevesi',
    question: 'Bu kötü alışkanlık kime ne kazandırıyor?',
    summary: 'Her sorunlu davranışın arkasında bir zamanlar işe yaramış bir olumlu amaç arayan ve davranışı değil, amacı karşılamanın yolunu değiştiren çerçeveleme stratejisi.',
    tags: ['davranış değişimi', 'iletişim'],
    pages: [
      {
        slug: 'kavram',
        title: 'Kavram',
        blocks: [
          { t: 'callout', kind: 'simple', title: 'Bir cümlede', text: 'Kötü görünen her davranışın arkasında iyi bir amaç saklıdır (korku güvenlik ister, öfke sınır çizer); davranışı söküp atmaya değil, aynı amaca hizmet eden daha iyi bir yol bulmaya çalış.' },
          { t: 'callout', kind: 'ornek', title: 'Atölyeden örnek', text: 'Mobilyacı Kadir\'in ortağı hiçbir işi devretmiyor, her vidayı kendi sıkıyor, bu yüzden siparişler gecikiyor. Kadir "kontrol delisisin" diye çıkışmak yerine soruyor: "Sen her şeyi kendin yapınca ne garantilenmiş oluyor?" Cevap: "Müşteriye kusurlu iş gitmesin, adımız lekelenmesin." Amaç aslında çok değerli: kalite. Kadir amacı davranıştan ayırınca çözüm kendiliğinden geliyor: her işin sonunda ortağın yaptığı 10 dakikalık kalite kontrolü. Ortak elini işten çekiyor ama amacından vazgeçmiyor; teslimatlar hızlanıyor.' },
          { t: 'p', text: 'Freud, belirtilerin kişiye "ikincil kazançlar" sağladığını fark etmişti: sorunlu davranış, kişinin bugünkü hayatında hâlâ bir işe yarar. Bu işlev görülüp yeni bir yolla karşılanmadan davranış bastırılırsa, ya sorun geri gelir ya da yerine yeni bir sorun geçer. Freud buna "belirti ikamesi" diyordu.' },
          { t: 'h2', text: 'Çerçevenin mantığı' },
          { t: 'ul', items: [
            'Hiçbir davranış bağlamından bağımsız anlam taşımaz: aynı davranış bir düzeyde zarar verirken başka bir düzeyde koruyucudur.',
            'Her davranış, kurulduğu anda kişinin dünyasında mevcut en iyi seçenekti. Kişi kötü değildir; haritası dardır.',
            'Korkunun amacı çoğu zaman güvenlik, öfkeninki sınır koymak, inatçılığınki tutarlılık, aşırı kontrolünki kalitedir.',
            'Sorun, amacın kendisi değil, o amaca giden tek yolun bu davranış sanılmasıdır. Çözüm: amaca hizmet eden yeni seçenekler eklemek.',
            'Amaç karşılanmadan davranış söndürülürse boşluk doğar: saldırganlığı bırakan ama kendini korumanın başka yolunu bilmeyen kişi, bir sorunu başka sorunla takas eder.',
          ]},
          { t: 'table', head: ['Görünen davranış', 'Olası olumlu amaç', 'Amacı karşılayan yeni yol'], rows: [
            ['Aşırı kontrol, devretmeme', 'Kalite ve itibar korunsun', 'İş sonu kalite kontrol adımı'],
            ['Sürekli erteleme', 'Başarısız olma riskinden korunma', 'Küçük ve güvenli ilk adım tanımlama'],
            ['Toplantıda susma', 'Yanlış konuşup küçük düşmeme', 'Görüşleri önceden yazılı isteme'],
            ['Öfkeli çıkışlar', 'Sınırların çiğnenmesini önleme', 'Sınırı sakinken açıkça söyleme'],
          ]},
        ],
      },
      {
        slug: 'uygulama',
        title: 'Nasıl Uygulanır',
        blocks: [
          { t: 'steps', items: [
            { title: 'Davranışı ve amacı ayır', text: 'Sorunlu davranışı yaz, sonra sor: "Bu davranış kişiye (ya da bana) ne kazandırıyor, neyi garantiliyor, neyden koruyor?" İlk cevapla yetinme; "peki o ne sağlıyor?" diye bir kat daha in.' },
            { title: 'Amacı açıkça onayla', text: 'Bulduğun amacın değerli olduğunu dile getir: "Kaliteyi korumak istemen çok doğru." Amaç onaylanmadan kimse davranışını masaya yatırmaz.' },
            { title: 'Aynı amaca yeni yollar üret', text: 'Amacı en az davranış kadar iyi karşılayan iki üç seçenek bul. Seçenekler kişinin kendi ağzından çıkarsa kalıcılık artar.' },
            { title: 'Eski yolun geri dönüşünü izle', text: 'Davranış geri gelirse bu başarısızlık değil, sinyaldir: yeni yol amacı tam karşılamıyor demektir. Amacı yeniden sor, yolu güncelle.' },
          ]},
          { t: 'callout', kind: 'tip', title: 'İpucu', text: 'Kendi kötü alışkanlığına uygula: bırakmak istediğin davranışın sana ne verdiğini dürüstçe yazmadan bırakmayı deneme. Sigara molası aslında tek başına kalma molasıysa, önce kendine başka bir mola icat et.' },
          { t: 'callout', kind: 'warn', title: 'Dikkat', text: 'Olumlu niyet, davranışı mazur göstermek değildir. Zarar veren davranış yine durdurulur; çerçeve sadece durdurmanın kalıcı olması için amacın başka yoldan karşılanmasını şart koşar.' },
        ],
      },
      {
        slug: 'vaka',
        title: 'Gerçek Vaka & Fayda',
        blocks: [
          { t: 'callout', kind: 'case', title: 'Vaka: Freud\'un kalıcılık gözlemi', text: 'Freud, klinik yazılarında tedavi sonuçlarındaki "kalıcılık eksikliğini" açıkça belgelemiştir: belirtinin kişinin hayatındaki işlevi (ikincil kazanç) ele alınmadan yapılan iyileştirmelerden sonra hastalar ya eski belirtiye geri dönüyor ya da yerine yenisini geliştiriyordu. Bu gözlem bugün modern davranış bilimlerinin ortak mirasıdır: bağımlılık tedavisinde kişinin maddeden aldığı işlevin (rahatlama, sosyal ait olma) yerine sağlıklı karşılıklar konması, iş güvenliği eğitimlerinde kural çiğnemenin arkasındaki zaman baskısının ayrıca çözülmesi hep aynı ilkeye dayanır. Robert Dilts, "Dahilerin Stratejileri" kitabında bu ilkeyi Freud\'un mirasının en pratik parçalarından biri olarak damıtır: davranış yüzey yapıdır, amaç derin yapıdır; kalıcı değişim derin yapıda olur.' },
          { t: 'h2', text: 'Gerçek fayda' },
          { t: 'ul', items: [
            'İnsan tartışmalarını çözüm konuşmasına çevirir: "sen kötüsün" kavgası yerine "amacın iyi, yolu konuşalım" masası kurulur.',
            'Değişimi kalıcı yapar: amacı karşılanan davranış geri dönmez; bastırılan davranış kılık değiştirip döner.',
            'Kendine şefkatli ama etkili bir gelişim dili verir: alışkanlıklarınla savaşmak yerine onların taşıdığı ihtiyacı ciddiye alırsın.',
          ]},
        ],
      },
    ],
  },
  {
    slug: 'leonardo-gormeyi-bilmek',
    section: 'ogrenme-geri-bildirim',
    title: 'Leonardo\'nun Görmeyi Bilme Stratejisi',
    question: 'Bir şeyi gerçekten öğrendiğimi nasıl anlarım?',
    summary: 'Leonardo da Vinci\'nin gözlem, çizerek dışa vurma ve farkı ölçüp düzeltme döngüsüyle bir konuyu ezbere değil derinden öğrenme stratejisi.',
    tags: ['öğrenme', 'gözlem', 'yaratıcılık'],
    pages: [
      {
        slug: 'kavram',
        title: 'Kavram',
        blocks: [
          { t: 'callout', kind: 'simple', title: 'Bir cümlede', text: 'Bir şeyi anlamak istiyorsan onu bakarak değil, kendi elinle yeniden üreterek (çizerek, anlatarak, kurarak) öğren; sonra ürettiğini aslıyla karşılaştır ve sadece farklı çıkan yerleri tekrar çalış.' },
          { t: 'callout', kind: 'ornek', title: 'Atölyeden örnek', text: 'Elektrikçi çırağı Emre pano bağlantısını "izleyerek öğrendim" sanıyor. Ustası Şevket ona boş kâğıt uzatıyor: "Bakma, ezberden çiz." Emre çiziyor; sonra ustası gerçek şemayı yanına koyuyor. Üç yer yanlış: topraklama, sigorta sırası, bir klemens. Şevket "tamamını tekrar etme, sadece bu üç yeri çalış" diyor. Emre bir hafta boyunca yalnız hatalı çıkan kısımları çizip karşılaştırıyor. Ay sonunda panoyu şemasız, ezbere ve doğru bağlıyor — çünkü şema artık kâğıtta değil, kafasının içinde.' },
          { t: 'p', text: 'Leonardo da Vinci öğrenmenin sırrını "saper vedere" — görmeyi bilmek — diye adlandırıyordu. Ona göre bilgi üç parçanın döngüsünden doğar: duyularla gözlem, kafanın içindeki harita ve o haritanın dışa vurulmuş hâli (çizim). Leonardo çizimi süs değil, bilgi üretme aleti olarak kullandı; onun "dimostrazione" dediği açıklayıcı çizimler modern bilimsel çizimin temelini attı.' },
          { t: 'h2', text: 'Ezbere öğrenme döngüsü' },
          { t: 'p', text: 'Leonardo resim üzerine notlarında bir konuyu "ezbere iyice öğrenmenin" yolunu adım adım tarif eder: modele bakarak defalarca çiz; sonra modelsiz çiz; modelin kopyasını ince bir cama çıkar ve kendi modelsiz çiziminin üstüne koy; tutmayan yerleri işaretle; ve yalnızca o hatalı bölgeleri model üzerinden tekrar çalış. Bu, dünyanın en eski belgelenmiş "test et - düzelt - tekrar test et" öğrenme döngülerinden biridir.' },
          { t: 'ul', items: [
            'Amaç güzel çizim değildir; çizim sadece kanıttır. Asıl hedef, konunun kafanın içinde modelsiz de çalışan zengin bir kopyasının oluşmasıdır.',
            'Fark ölçümü öğrenmeyi hızlandırır: her şeyi tekrar etmek yerine yalnız sapma olan yerlere odaklanılır.',
            'Yeterince örnek içselleşince "kritik kütle" oluşur: artık konuyla zihinde deney yapabilir, sonuçları önceden kestirebilir, yeni birleşimler üretebilirsin.',
            'Leonardo derin yapılar arasında benzerlik kurarak alan atlardı: suyun akışıyla saçın kıvrımı, insan bedeniyle yeryüzü arasında analogiler kurdu; bir alanda öğrendiğini başka alana taşıdı.',
            'Hayal gücünü de bilinçli çalıştırdı: duvardaki lekelere bakıp manzaralar, yüzler, savaş sahneleri görme egzersizini "zihni buluşlara kışkırtmanın" yolu olarak salık verdi.',
          ]},
          { t: 'table', head: ['Adım', 'Leonardo\'nun yaptığı', 'Bugünkü karşılığı'], rows: [
            ['Gözle', 'Modele bakarak defalarca çizmek', 'Kaynağı aktif not alarak çalışmak'],
            ['Kapat ve üret', 'Modelsiz çizmek', 'Kitabı kapatıp ezberden anlatmak veya çözmek'],
            ['Karşılaştır', 'Cam kopyayı çizimin üstüne koymak', 'Cevap anahtarıyla kendi cevabını kıyaslamak'],
            ['Farkı çalış', 'Sadece tutmayan bölgeleri tekrar etmek', 'Yalnız hata yapılan konuya geri dönmek'],
          ]},
        ],
      },
      {
        slug: 'uygulama',
        title: 'Nasıl Uygulanır',
        blocks: [
          { t: 'steps', items: [
            { title: 'Konuyu elinle yeniden üret', text: 'Öğrenmek istediğin şeyi kaynağa bakmadan çiz, yaz ya da anlat: bir sürecin şeması, bir makinenin parçaları, bir konunun özeti. Bakarak okumak öğrenme hissi verir; üretmek öğrenmenin kendisidir.' },
            { title: 'Aslıyla üst üste koy', text: 'Ürettiğini kaynakla madde madde karşılaştır ve farkları işaretle. Fark listesi, senin gerçek eksik listendir.' },
            { title: 'Yalnız farkları tekrar çalış', text: 'Tüm konuyu baştan alma; sadece sapma olan bölümlere dön. Döngüyü fark sıfıra yaklaşana kadar tekrarla.' },
            { title: 'Benzetme kur ve hayal et', text: 'Öğrendiğin yapıyı bildiğin başka bir şeye benzet ("elektrik akımı su tesisatı gibi") ve uyumadan önce zihninde ana hatlarıyla tekrar canlandır. Leonardo bu iki egzersizi bilgiyi kalıcılaştırmanın anahtarı sayardı.' },
          ]},
          { t: 'callout', kind: 'tip', title: 'İpucu', text: 'Leonardo yatakta, karanlıkta, uykuyla uyanıklık arasında gün içinde çalıştığı biçimleri zihninde tekrar gezmeyi öğütler ve bunu hafızaya yerleştirmede "hiç de küçük olmayan bir fayda" olarak tarif eder. Uyumadan önceki beş dakikalık zihinsel tekrar, bedava bir çalışma seansıdır.' },
          { t: 'callout', kind: 'warn', title: 'Dikkat', text: 'Karşılaştırma adımını atlarsan döngü çöker: yanlışını görmeden yapılan tekrar, hatayı da ezberletir. Üretim her zaman bir doğruluk kaynağıyla yüzleştirilmelidir.' },
        ],
      },
      {
        slug: 'vaka',
        title: 'Gerçek Vaka & Fayda',
        blocks: [
          { t: 'callout', kind: 'case', title: 'Vaka: Defterlerdeki kanıt', text: 'Leonardo\'nun binlerce sayfalık defterleri bu stratejinin belgelenmiş ürünüdür. Anatomi çalışmalarında kadavraları katman katman inceleyip her yapıyı defalarca farklı açılardan çizdi; bu çizimler yüzyıllar sonra bile tıp eğitiminde referans gösterildi. Ses üzerine ünlü gözlemi de yönteminin meyvesidir: bir kuyuya düşen taşın suda halkalar yaydığını gördüğü anda yakındaki çan kulesinden çan sesi duydu ve defterine sesin de havada halkalar hâlinde yayıldığını yazdı — ses dalgası fikrinin en erken kayıtlarından biri. Çağdaşı Vasari\'nin aktardığı kalkan hikâyesi ise birleştirme yönünü belgeler: genç Leonardo, korkunç bir yaratık resmetmek için odasına kertenkeleler, yılanlar ve böcekler toplayıp parçalarını zihninde tek bir canavarda birleştirdi. Gözle, içselleştir, birleştir: dehanın üç adımı defterlerde durur.' },
          { t: 'h2', text: 'Gerçek fayda' },
          { t: 'ul', items: [
            'Öğrenme hissini gerçek öğrenmeden ayırır: modelsiz üretemediğin şeyi henüz bilmiyorsundur.',
            'Zamanı en verimli yere harcatır: tekrar bütüne değil, ölçülmüş farka yapılır.',
            'Yaratıcılığı besler: derinden içselleşen parçalar, hayal gücünde yeni birleşimlere hazır malzeme olur.',
          ]},
        ],
      },
    ],
  },
  {
    slug: 'tesla-zihinsel-prototipleme',
    section: 'yaraticilik-dahi',
    title: 'Tesla\'nın Zihinsel Prototipleme Stratejisi',
    question: 'Fikrimi para ve malzeme harcamadan nasıl test ederim?',
    summary: 'Nikola Tesla\'nın bir buluşu elle yapmadan önce zihninde kurup çalıştırma, kusurlarını hayalinde giderme ve ancak tamamlanınca gerçeğe dökme stratejisi.',
    tags: ['hayal gücü', 'tasarım', 'problem çözme'],
    pages: [
      {
        slug: 'kavram',
        title: 'Kavram',
        blocks: [
          { t: 'callout', kind: 'simple', title: 'Bir cümlede', text: 'Bir fikri hemen malzemeye dökme; önce kafanda kur, kafanda çalıştır, kusurlarını kafanda düzelt — gerçek parayı ve emeği ancak zihinde kusursuzlaşan tasarıma harca.' },
          { t: 'callout', kind: 'ornek', title: 'Atölyeden örnek', text: 'Demirci Osman, müşterinin istediği katlanır merdiveni hemen kesip kaynatmaya başlamıyor. Çayını alıp gözünü kapatıyor: merdiveni zihninde kuruyor, açıp kapatıyor, üstüne hayalinde çıkıyor. Üçüncü zihinsel denemede fark ediyor: menteşe yük binince duvara sürtecek. Daha tek profil kesilmeden menteşeyi tasarımda içeri alıyor. Malzeme bir kez kesiliyor, merdiven ilk denemede çalışıyor. Komşu atölye aynı işte iki kez malzeme çöpe atmıştı.' },
          { t: 'p', text: 'Alternatif akımın babası Nikola Tesla, 1919\'da yayımlanan kendi anlatımında yöntemini açıkça tarif eder: "Bir fikir geldiğinde onu hemen hayal gücümde kurmaya başlarım. Yapıyı değiştirir, iyileştirmeler yapar ve cihazı zihnimde çalıştırırım. Türbinimi düşüncede mi çalıştırdığım, atölyede mi test ettiğim benim için hiç fark etmez." Tesla aklına gelebilecek her iyileştirmeyi hayalde bitirip hiçbir kusur göremeyince tasarımı gerçeğe dökerdi ve cihazlarının tasarladığı gibi çalıştığını söylerdi.' },
          { t: 'h2', text: 'Stratejinin parçaları' },
          { t: 'ul', items: [
            'Erken üretimin bedeli vardır: Tesla, ham bir fikri hemen cihaza dökenin ayrıntılara ve kusurlara gömülüp "büyük temel ilkeyi gözden kaçırdığını" söyler.',
            'Zihinsel görüntü kas gibi gelişir: Tesla\'nın hayalleri de başta "bulanık ve kaçıcıydı"; bilinçli alıştırmayla netleşti ve gerçek nesne kıvamına geldi.',
            'Hayal gerçeğe bağlanmalıdır: Tesla her zihinsel görüntüsünün hangi dış izlenimden tetiklendiğini takip etmeyi alışkanlık edindi; bu bağ, hayal gücünü kaçış olmaktan çıkarıp buluş makinesine çevirdi.',
            'Karşı strateji de vardır: Çağdaşı Edison, fikirleri hemen maddeye döküp binlerce deneme yapardı. Tesla buna "samanlıkta iğne aramak" derdi. İkisi de işe yarar; ama zihinsel prototipleme, elle tutulamayan şeylerde (manyetik alan, akış, süreç, yazılım, organizasyon) tek seçenektir.',
          ]},
          { t: 'table', head: ['Yaklaşım', 'Nasıl çalışır', 'Güçlü olduğu yer', 'Bedeli'], rows: [
            ['Tesla: önce zihinde', 'Kur, çalıştır, düzelt, sonra üret', 'Pahalı, soyut, geri dönüşü zor işler', 'Güçlü hayal disiplini ister'],
            ['Edison: önce elde', 'Yap, dene, boz, tekrar yap', 'Ucuz ve hızlı denenebilen işler', 'Malzeme, para ve zaman yakar'],
          ]},
          { t: 'p', text: 'Günümüzde mühendislerin bilgisayarda simülasyon kurması, mimarın maketten önce yapıyı zihninde ve modelde gezmesi, sporcunun hareketi yarıştan önce kafasında koşması hep aynı stratejinin torunlarıdır: ucuz ortamda çok hata yap ki pahalı ortamda az hata yapasın.' },
        ],
      },
      {
        slug: 'uygulama',
        title: 'Nasıl Uygulanır',
        blocks: [
          { t: 'steps', items: [
            { title: 'Fikri zihninde kur', text: 'Gözlerini kapat ve tasarımı (ürün, plan, konuşma, süreç) bütün parçalarıyla zihninde inşa et. Bulanıksa panik yapma; Tesla\'nınki de başta bulanıktı. Her tekrar netlik kazandırır.' },
            { title: 'Çalıştır ve zorla', text: 'Kurduğunu zihninde işlet: merdivene yük bindir, plana aksilik ekle, konuşmada zor soruyu sordur. Amaç hayali seyretmek değil, hayalde kusur avlamaktır.' },
            { title: 'Kusuru tasarımda düzelt', text: 'Bulduğun her kusuru zihinsel modelde onar ve döngüye baştan gir. Aklına gelen her iyileştirme bitmeden üretime geçme.' },
            { title: 'Ancak şimdi gerçeğe dök', text: 'Zihinde kusursuzlaşan tasarımı üret ve gerçek sonucu zihinsel öngörünle karşılaştır. Sapmalar, bir sonraki zihinsel prototipini besleyen derslerdir.' },
          ]},
          { t: 'callout', kind: 'tip', title: 'İpucu', text: 'Küçük başla: yarınki zor telefon görüşmesini bu akşam zihninde iki kez "çalıştır". Karşı tarafın itirazlarını hayalinde sordur ve cevabını orada düzelt. Bu, stratejinin en ucuz antrenman sahasıdır.' },
          { t: 'callout', kind: 'warn', title: 'Dikkat', text: 'Zihinsel prototip, gerçeklikle bağını koparırsa hayalperestliğe dönüşür. Tesla\'nın dengesi ikiliydi: sınırsız hayal, ama her hayalin gerçek gözlemlere ve hesaba bağlanması. Zihinde doğrulayamadığın kritik varsayımı gerçekte küçük bir deneyle test et.' },
        ],
      },
      {
        slug: 'vaka',
        title: 'Gerçek Vaka & Fayda',
        blocks: [
          { t: 'callout', kind: 'case', title: 'Vaka: Zihindeki türbin', text: 'Tesla\'nın kendi anlatımı ("My Inventions", 1919) yöntemin birinci elden belgesidir: cihazlarını model, çizim ve deney olmadan zihninde kurup çalıştırdığını, dengesiz çalışan parçayı bile hayalinde fark ettiğini yazar. Kitapta aktarılan ünlü anlatıya göre Tesla, iddiasına meydan okunduğunda bir türbini hem zihninde hem atölyede aynı anda "çalıştırmış"; bir ay sonra zihnindeki makineyi söküp parçalardaki aşınmayı tarif etmiş ve gerçek türbin söküldüğünde tarifin tuttuğu görülmüştür. Anlatının kendisi bir aktarımdır; ama belgeli olan sonuç ortadadır: Tesla\'nın alternatif akım motoru ve çok fazlı sistem patentleri, bu zihinsel yöntemle geliştirilip dünyanın elektrik altyapısının temeli oldu. Bugün mühendislikte fiziksel prototipten önce simülasyon kurulması, aynı ilkenin bilgisayara taşınmış hâlidir.' },
          { t: 'h2', text: 'Gerçek fayda' },
          { t: 'ul', items: [
            'Hata maliyetini en ucuz ortama taşır: zihinde yakalanan kusur bedava, üretimde yakalanan kusur pahalıdır.',
            'Büyük ilkeyi korur: erken elle uğraşmanın detay tuzağına düşmeden tasarımın bütününü görmeyi sağlar.',
            'Elle tutulamayan işlerde tek laboratuvardır: süreçler, planlar, konuşmalar ve soyut sistemler ancak zihinde prototiplenebilir.',
          ]},
        ],
      },
    ],
  },
]
