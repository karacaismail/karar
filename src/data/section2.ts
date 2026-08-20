import type { DecisionModel } from '../types'

export const section2Models: DecisionModel[] = [
  {
    slug: 'akis-modeli',
    section: 'kendini-anla',
    title: 'Akış (Flow) Modeli',
    question: 'Beni ne mutlu eder?',
    summary: 'Beceri ile zorluk dengelendiğinde ortaya çıkan derin odak hâlini açıklayan model.',
    tags: ['motivasyon', 'odak'],
    pages: [
      {
        slug: 'kavram',
        title: 'Kavram',
        blocks: [
          { t: 'p', text: 'Psikolog Mihaly Csikszentmihalyi\'nin araştırmalarına dayanan model, "akış" hâlini tanımlar: zamanın kaybolduğu, işin kendisinin ödül olduğu derin odak durumu.' },
          { t: 'p', text: 'Akış, iki eksenin kesişiminde doğar: işin zorluğu ve senin beceri düzeyin. Zorluk beceriyi çok aşarsa kaygı, beceri zorluğu çok aşarsa sıkıntı ortaya çıkar. Akış kanalı bu ikisinin arasındaki dar bölgedir.' },
          { t: 'quote', text: 'Mutluluk, aranınca bulunan bir şey değil; zorlu bir işe gömülmüşken yan ürün olarak ortaya çıkan bir hâldir.' },
          { t: 'h2', text: 'Akışın koşulları' },
          { t: 'ul', items: [
            'Net hedef: ne yapacağını biliyorsun.',
            'Anında geri bildirim: doğru gidip gitmediğini görebiliyorsun.',
            'Zorluk–beceri dengesi: iş seni zorluyor ama ezmiyor.',
          ]},
        ],
      },
      {
        slug: 'uygulama',
        title: 'Nasıl Uygulanır',
        blocks: [
          { t: 'steps', items: [
            { title: 'Akış günlüğü tut', text: 'Bir hafta boyunca günde üç kez not al: ne yapıyordun, ne hissediyordun? Akış anlarını yakala.' },
            { title: 'Kaygı bölgesini küçült', text: 'Kaygı veren işleri parçala: zorluğu düşürmek yerine işi bölerek beceri–zorluk dengesini kur.' },
            { title: 'Sıkıntı bölgesini zorlaştır', text: 'Rutinleşen işlere kendi kısıtlarını ekle: süre sınırı, kalite çıtası, yeni yöntem.' },
            { title: 'Kesintiyi yönet', text: 'Akış ortalama 15–20 dakikada kurulur ve tek bildirimle yıkılır. Odak bloklarında bildirimleri kapat.' },
          ]},
          { t: 'callout', kind: 'warn', title: 'Sık yapılan hata', text: 'Akışı sadece "sevdiğim işi bulmak" sanmak. Csikszentmihalyi\'nin bulgusu tersidir: doğru yapılandırılmış herhangi bir iş akış üretebilir; yapılandırılmamış hiçbir iş üretemez.' },
        ],
      },
      {
        slug: 'vaka',
        title: 'Gerçek Vaka & Fayda',
        blocks: [
          { t: 'callout', kind: 'case', title: 'Vaka: Microsoft ve "odak zamanı"', text: 'Microsoft, kendi çalışanları üzerinde yürüttüğü Work Trend Index araştırmalarında toplantı ve bildirim yoğunluğunun derin odak süresini nasıl parçaladığını ölçtü; sonuçların ardından Outlook ve Viva ürünlerine "focus time" (odak zamanı) özelliğini ekledi: takvimde otomatik korunan, bildirimlerin susturulduğu bloklar. Bu, akış modelinin koşullarının (kesintisizlik, net hedef) doğrudan ürünleştirilmesidir.' },
          { t: 'callout', kind: 'case', title: 'Vaka: Oyun tasarımında akış kanalı', text: 'Oyun endüstrisi akış modelini açıkça tasarım aracı olarak kullanır: seviyeler, oyuncunun becerisi arttıkça zorluğu kademeli artıracak şekilde kurgulanır. Bu dengede kalan oyunlar oyuncuyu saatlerce tutar; denge bozulan oyunlar ya "çok kolay" ya "çok stresli" diye terk edilir.' },
          { t: 'h2', text: 'Gerçek fayda' },
          { t: 'ul', items: [
            'Verim tartışmasını doğru yere taşır: sorun çoğu zaman tembellik değil, bozuk zorluk–beceri dengesi ya da kesintidir.',
            'Kariyer kararlarına ölçüt verir: akış anlarının haritası, hangi işin sana uyduğunu duygudan daha güvenilir gösterir.',
            'Ekip planlamasına girdi olur: kişiye ne çok kolay ne çok zor iş vermek, hem performansı hem bağlılığı artırır.',
          ]},
        ],
      },
    ],
  },
  {
    slug: 'johari-penceresi',
    section: 'kendini-anla',
    title: 'Johari Penceresi',
    question: 'Başkaları hakkımda ne biliyor?',
    summary: 'Kendin ve başkalarının senin hakkında bildiklerini dört pencerede haritalayan model.',
    tags: ['geri bildirim', 'özfarkındalık'],
    pages: [
      {
        slug: 'kavram',
        title: 'Kavram',
        blocks: [
          { t: 'p', text: 'Joseph Luft ve Harry Ingham\'ın (Jo+Hari) geliştirdiği model, kişiliğini dört pencereye ayırır: senin bildiklerin/bilmediklerin ile başkalarının bildikleri/bilmedikleri.' },
          { t: 'ul', items: [
            'Açık alan: herkesin bildiği yönlerin.',
            'Kör nokta: başkalarının gördüğü ama senin görmediğin yönlerin.',
            'Gizli alan: senin bilip sakladıkların.',
            'Bilinmeyen: kimsenin henüz görmediği potansiyel.',
          ]},
          { t: 'p', text: 'Modelin iddiası basittir: açık alan büyüdükçe iletişim kolaylaşır ve güven artar. Açık alanı büyütmenin iki yolu vardır: geri bildirim istemek (kör noktayı küçültür) ve kendini açmak (gizli alanı küçültür).' },
        ],
      },
      {
        slug: 'uygulama',
        title: 'Nasıl Uygulanır',
        blocks: [
          { t: 'steps', items: [
            { title: 'Sıfat listesiyle başla', text: 'Klasik uygulama: 50-60 sıfatlık listeden kendini anlatan 5-6 sıfat seç; aynı listeyi seni tanıyan kişilere ver.' },
            { title: 'Pencereleri doldur', text: 'Ortak seçilenler açık alana, sadece başkalarının seçtikleri kör noktaya, sadece senin seçtiklerin gizli alana gider.' },
            { title: 'Kör noktayı konuş', text: 'Kör noktadaki sıfatlar için örnek iste: "Bunu hangi davranışımda gördün?" Savunma yapma, sadece dinle.' },
            { title: 'Bilinçli açıl', text: 'Gizli alandan bir şeyi paylaşmayı seç. Güven, karşılıklı açılmanın yan ürünüdür.' },
          ]},
          { t: 'callout', kind: 'tip', title: 'Ekip versiyonu', text: 'Aynı egzersiz ekip için de çalışır: ekibin kendini nasıl gördüğü ile diğer ekiplerin onu nasıl gördüğü arasındaki fark, işbirliği sorunlarının haritasıdır.' },
        ],
      },
      {
        slug: 'vaka',
        title: 'Gerçek Vaka & Fayda',
        blocks: [
          { t: 'callout', kind: 'case', title: 'Vaka: 360 derece geri bildirimin doğuşu', text: 'General Electric dahil büyük şirketlerin 1990\'lardan itibaren kurumsallaştırdığı 360 derece geri bildirim süreçleri, Johari penceresinin ölçeklenmiş hâlidir: yönetici, ast, akran ve kişinin öz değerlendirmesi yan yana konur; aradaki fark (kör nokta) gelişim planının ana maddesi olur. Bugün Fortune 500 şirketlerinin büyük çoğunluğu bir tür 360 süreci işletir.' },
          { t: 'h2', text: 'Gerçek fayda' },
          { t: 'ul', items: [
            'Kör noktayı ölçülebilir yapar: "kendini bilmek" soyut bir öğüt olmaktan çıkıp iki liste arasındaki farka dönüşür.',
            'Geri bildirimi kişisel saldırı olmaktan çıkarır: konuşulan şey kişi değil, penceredeki farktır.',
            'Terfi kararlarını sağlamlaştırır: özalgı ile dış algı arasındaki büyük fark, liderlik riskinin erken sinyalidir.',
          ]},
        ],
      },
    ],
  },
  {
    slug: 'bilissel-celiski',
    section: 'kendini-anla',
    title: 'Bilişsel Çelişki Modeli',
    question: 'İnsanlar zararlı olduğunu bile bile neden devam eder?',
    summary: 'İnanç ile davranış çeliştiğinde zihnin gerçeği değil, hikâyeyi değiştirdiğini anlatan model.',
    tags: ['psikoloji', 'karar hataları'],
    pages: [
      {
        slug: 'kavram',
        title: 'Kavram',
        blocks: [
          { t: 'p', text: 'Leon Festinger\'in kuramı: inançlarımız ile davranışlarımız çeliştiğinde rahatsızlık duyarız (bilişsel çelişki). Ancak çoğu zaman davranışı düzeltmek yerine inancı davranışa uyduracak bir gerekçe üretiriz.' },
          { t: 'p', text: 'Sigara içen kişi "sigara zararlıdır" bilgisini reddetmez; "dedem 90 yaşına kadar içti" hikâyesini üretir. Çelişki çözülmez, sadece susturulur.' },
          { t: 'h2', text: 'Kurumsal versiyonu' },
          { t: 'p', text: 'Şirketlerde bilişsel çelişki en pahalı hâline bürünür: bir stratejiye çok yatırım yapılmışsa, aleyhteki her veri "istisna" ilan edilir. Buna batık maliyet yanılgısıyla birleşince "başarısızlığa bağlılık" denir.' },
        ],
      },
      {
        slug: 'uygulama',
        title: 'Nasıl Uygulanır',
        blocks: [
          { t: 'steps', items: [
            { title: 'Çelişkiyi yakala', text: 'Kendinde "ama", "aslında", "istisna" kelimeleriyle başlayan savunmaları izle. Bunlar çelişki susturucularıdır.' },
            { title: 'İnanç mı davranış mı?', text: 'Çelişkiyi çözmenin iki dürüst yolu var: davranışı değiştir ya da inancı gerçekten güncelle. Üçüncü yol (gerekçe üretmek) çözüm değildir.' },
            { title: 'Karar öncesi kayıt al', text: 'Büyük kararlardan önce "hangi kanıt gelirse fikrimi değiştiririm?" sorusunun cevabını yaz. Çelişki geldiğinde bu kayıt seni hikâye üretmekten korur.' },
            { title: 'Şeytanın avukatını kurumsallaştır', text: 'Toplantıda birine resmî görev ver: kararın aleyhindeki en güçlü savunmayı yapmak.' },
          ]},
        ],
      },
      {
        slug: 'vaka',
        title: 'Gerçek Vaka & Fayda',
        blocks: [
          { t: 'callout', kind: 'case', title: 'Vaka: Kodak ve dijital fotoğraf', text: 'Dijital fotoğraf makinesini 1975\'te Kodak mühendisi Steve Sasson icat etti. Şirket teknolojiyi biliyordu, patentlerine sahipti; ama film işi kâr makinesiydi. "Dijital, film kalitesine asla ulaşamaz" ve "müşteri baskı ister" anlatıları, çelişkiyi yıllarca susturdu. Davranış (filme yatırım) inanca değil, inanç davranışa uyduruldu. Kodak 2012\'de iflas koruması istedi; dijital pazarı, çelişkiyi erken çözen rakipler paylaştı.' },
          { t: 'h2', text: 'Gerçek fayda' },
          { t: 'ul', items: [
            'Stratejik inkârı erken teşhis eder: "istisna" ilan edilen her veri, bir çelişki alarmıdır.',
            'Pivot kararlarını hızlandırır: çelişkiyi adlandıran ekip, batık maliyete bağlılıktan daha kolay çıkar.',
            'Kişisel değişimi kolaylaştırır: hedef, iradeyi büyütmek değil, gerekçe üretme mekanizmasını yakalamaktır.',
          ]},
        ],
      },
    ],
  },
  {
    slug: 'hayal-edilemez-modeli',
    section: 'kendini-anla',
    title: 'Hayal Edilemez Modeli',
    question: 'Kanıtlayamadığın hâlde neye inanıyorsun?',
    summary: 'İnançlarımızı kanıtlanabilirlik ve hayal edilebilirlik eksenlerinde sorgulatan model.',
    tags: ['inanç', 'eleştirel düşünme'],
    pages: [
      {
        slug: 'kavram',
        title: 'Kavram',
        blocks: [
          { t: 'p', text: 'Modeller her şeyin nasıl bağlantılı olduğunu, nasıl davranmamız gerektiğini anlatır. Peki bizi gerçeği olduğu gibi görmekten alıkoyuyorlar mı? Bu model, tam da diğer modellerin körlüğünü sorgular.' },
          { t: 'p', text: 'Daha 18. yüzyılda Adam Smith, soyut sistemlere duyulan aşka kapılmaya karşı uyarmıştı. İki yüzyıl sonra Einstein, modellerin ve "mantıklı" sistemlerin son tahlilde bir inanç meselesi olduğunu gördü. Bilim tarihçisi Thomas Kuhn ise bilimin çoğunlukla kendi modellerini doğrulamaya çalıştığını, modeller gerçeklikle örtüşmediğinde — ki bu sık olur — görmezden gelmeyle tepki verdiğini savundu.' },
          { t: 'p', text: 'Modellere çoğu zaman o kadar güçlü inanırız ki gerçeklik statüsü kazanırlar. Kant\'ın incelediği ontolojik Tanrı kanıtı buna örnektir: Tanrı kadar kusursuz bir varlığı hayal edebiliyorsak, o hâlde var olmalıdır. Gündelik hayatta da modelleri körü körüne "gerçek" kabul ederiz: insanlığın açgözlü ve bencil olduğu söylenirse, bu davranış modeli içselleştirilir ve farkında olmadan taklit edilir.' },
          { t: 'h2', text: 'İki eksen' },
          { t: 'ul', items: [
            'Kanıtlanabilir – kanıtlanamaz: yerçekimi kanıtlanabilir; ebedî aşk kanıtlanamaz.',
            'Hayal edilebilir – hayal edilemez: Tanrı hayal edilebilir; kara deliğin içi hayal gücümüzü aşar.',
          ]},
          { t: 'quote', text: 'Gerçeklikten nefret ediyorum ama iyi bir biftek yemek için hâlâ en iyi yer orası. — Woody Allen' },
        ],
      },
      {
        slug: 'uygulama',
        title: 'Nasıl Uygulanır',
        blocks: [
          { t: 'steps', items: [
            { title: 'İnanç envanteri çıkar', text: 'İş ve özel hayatındaki temel varsayımlarını listele: "müşteri her zaman fiyata bakar", "bu pazar büyüyecek", "ben sunumda kötüyüm".' },
            { title: 'İki soruyla sınıfla', text: 'Her varsayım için sor: bunu kanıtlayabilir miyim? Bunun tersini hayal edebiliyor muyum? Kanıtsız ama sarsılmaz inançlarını işaretle.' },
            { title: 'Modeli gerçeklikten ayır', text: 'İşaretlediğin inançlar için "bu bir gözlem mi, yoksa içselleştirdiğim bir model mi?" diye sor. Modeli adlandırmak, ondan özgürleşmenin ilk adımıdır.' },
          ]},
          { t: 'callout', kind: 'warn', title: 'Sık yapılan hata', text: 'Modelin dersini "hiçbir modele güvenme" diye okumak. Mesele modelleri atmak değil; modelin harita olduğunu, arazinin kendisi olmadığını hatırlamaktır.' },
          { t: 'callout', kind: 'tip', title: 'Karşı kanıt egzersizi', text: 'En güçlü inancın için bir hafta boyunca sadece aleyhte kanıt topla. Hiç bulamıyorsan, muhtemelen aramıyorsundur.' },
        ],
      },
      {
        slug: 'vaka',
        title: 'Gerçek Vaka & Fayda',
        blocks: [
          { t: 'callout', kind: 'case', title: 'Vaka: Semmelweis ve el yıkama', text: 'Macar doktor Ignaz Semmelweis, 1840\'larda Viyana\'da doğum hummasından ölümlerin, doktorların kadavradan doğumhaneye elini yıkamadan geçmesinden kaynaklandığını verilerle gösterdi; klor solüsyonuyla el yıkatınca ölümler çarpıcı biçimde düştü. Ama dönemin tıbbı hastalıkları "miazma" (kötü hava) modeliyle açıklıyordu ve görünmez parçacıkların hastalık taşıması hayal edilemezdi. Semmelweis\'in kanıtı, geçerli modele uymadığı için onyıllarca reddedildi; mikrop kuramı ancak Pasteur ve Koch\'la kabul gördü. Kuhn\'un anlattığı mekanizmanın ders kitabı örneğidir: model, kanıtı yendi.' },
          { t: 'h2', text: 'Gerçek fayda' },
          { t: 'ul', items: [
            'Kurumsal dogmaları görünür kılar: "bizde işler böyle yürür" cümlesi, kanıtlanmamış bir model olarak masaya konur.',
            'İnovasyonun önünü açar: hayal edilemez sayılan seçenekler, ancak modelin sınırı fark edilince tartışılabilir olur.',
            'Entelektüel alçakgönüllülük kazandırır: en sağlam görünen açıklamanın bile bir model olduğunu bilmek, yeni kanıta kapıyı açık tutar.',
          ]},
        ],
      },
    ],
  },
  {
    slug: 'uffe-elbaek-modeli',
    section: 'kendini-anla',
    title: 'Uffe Elbæk Modeli',
    question: 'Kendini nasıl tanırsın?',
    summary: 'Kendini dört eksende puanlayarak özalgı ile dış algıyı karşılaştıran kişisel barometre.',
    tags: ['özfarkındalık', 'kişilik'],
    pages: [
      {
        slug: 'kavram',
        title: 'Kavram',
        blocks: [
          { t: 'p', text: 'Kendin ve başkaları hakkında genel bir kavrayış edinmek istiyorsan, Danimarkalı Uffe Elbæk\'in kamuoyu barometresi iyi bir başlangıçtır. Model, davranış özelliklerini ve eğilimleri görünür kılar.' },
          { t: 'p', text: 'Modelin çıkış noktası şudur: her zaman dört farklı bakış açısına tabisin.' },
          { t: 'ul', items: [
            'Kendini nasıl gördüğün.',
            'Kendini nasıl görmek istediğin.',
            'Başkalarının seni nasıl gördüğü.',
            'Başkalarının seni nasıl görmek istediği.',
          ]},
          { t: 'p', text: 'Barometre dört karşıt eksen üzerine kuruludur: takım insanı mı bireyci mi, içeriğe mi biçime mi odaklısın, beden mi zihin mi, kendini küresel mi yerel mi hissediyorsun? Her eksenin toplamı ondur: on puan yerel ve aynı anda on puan küresel olamazsın.' },
          { t: 'quote', text: 'Dikkat: yalnızca bir anlık görüntü oluşturuyorsun. Yarın çizeceğin profil bugünkünden farklı olabilir.' },
        ],
      },
      {
        slug: 'uygulama',
        title: 'Nasıl Uygulanır',
        blocks: [
          { t: 'steps', items: [
            { title: 'Düşünmeden puanla', text: 'Üzerine düşünmeye vakit ayırmadan, her ekseni birden ona kadar puanla: takım/birey, içerik/biçim, beden/zihin, küresel/yerel. Noktaları kalemle birleştirip profilini çıkar.' },
            { title: 'İdealini çiz', text: 'Farklı renkte bir kalemle bu kez kendini nasıl görmek istediğini işaretle. İki profil arasındaki fark, gelişim gündemin ya da kendinle barışman gereken alandır.' },
            { title: 'Dışarıya sor', text: 'Aynı barometreyi eşine ya da yakın bir arkadaşına ver: seni puanlasın. Senin profilinle karşılaştır.' },
            { title: 'Kendi eksenlerini tanımla', text: 'Model esnektir: zengin–yoksul, mutlu–hüzünlü, dışadönük–içedönük gibi kendi karşıtlıklarını ekle.' },
          ]},
          { t: 'callout', kind: 'warn', title: 'Anlık görüntü uyarısı', text: 'Sonuç bir teşhis değil, o günkü fotoğraftır. Profili kimlik ilan etme; birkaç ay sonra tekrarla ve değişimi izle.' },
        ],
      },
      {
        slug: 'vaka',
        title: 'Gerçek Vaka & Fayda',
        blocks: [
          { t: 'callout', kind: 'case', title: 'Vaka: Kaospilot okulu', text: 'Uffe Elbæk, 1991\'de Danimarka\'nın Aarhus kentinde Kaospilot adlı yaratıcı liderlik ve girişimcilik okulunu kurdu; okul bugün de faaliyettedir ve uluslararası tanınırlığa sahiptir. Elbæk\'in bu tür özdeğerlendirme araçları, okulun "kendini tanımadan başkalarına liderlik edemezsin" yaklaşımının parçasıdır. Elbæk daha sonra Danimarka\'da kültür bakanlığı yaptı ve Alternativet partisini kurdu — kendisi de model gibi kategorilere sığmayan bir kariyer izledi.' },
          { t: 'h2', text: 'Gerçek fayda' },
          { t: 'ul', items: [
            'Özalgı ile dış algı farkını dakikalar içinde görünür kılar; uzun testlere gerek kalmaz.',
            'İdeal ben ile mevcut ben arasındaki mesafeyi somutlaştırır: gelişim hedefi "daha iyi ol" yerine eksen üstünde bir noktaya dönüşür.',
            'Ekip tanışmalarında hızlı ve derin bir sohbet zemini kurar: profiller yan yana konduğunda farklılıklar tartışılabilir olur.',
          ]},
        ],
      },
    ],
  },
  {
    slug: 'enerji-modeli',
    section: 'kendini-anla',
    title: 'Enerji Modeli',
    question: 'Şimdi ve burada mı yaşıyorsun?',
    summary: 'Zihinsel enerjini geçmiş, şimdi ve gelecek arasında nasıl böldüğünü gösteren model.',
    tags: ['farkındalık', 'zaman'],
    pages: [
      {
        slug: 'kavram',
        title: 'Kavram',
        blocks: [
          { t: 'p', text: 'Hep "anı yaşa" denir. Ama neden? İsviçreli yazar Pascal Mercier buna itiraz eder: özü yakalayacağı inancıyla yalnızca şimdiye odaklanmak ona göre bir hata, anlamsız bir zorlamadır. Önemli olan, geçmişi ve geleceğiyle birlikte kendi iç manzaramızda sakin ve emin adımlarla ilerlemektir.' },
          { t: 'p', text: 'Model yargılamayan bir soru sorar: zamanının ne kadarını geçmişi düşünerek, ne kadarını şimdiye odaklanarak, ne kadarını geleceği hayal ederek ya da gelecekten endişe ederek geçiriyorsun?' },
          { t: 'h2', text: 'Üç tip' },
          { t: 'ul', items: [
            'Anı odaklı (memory-driven): enerjinin büyük payı geçmişte — kitaba göre nostaljik Avrupa\'nın kültürel profili.',
            'Hayal odaklı (dream-driven): enerjinin büyük payı gelecekte — "fırsatlar ülkesi" ABD\'nin profili.',
            'Gerçeklik odaklı (reality-driven): enerjinin büyük payı şimdide — çalışkan Asya\'nın profili.',
          ]},
          { t: 'quote', text: 'Geçmişi değiştiremezsin. Ama gelecek için endişelenerek şimdiyi mahvedebilirsin.' },
        ],
      },
      {
        slug: 'uygulama',
        title: 'Nasıl Uygulanır',
        blocks: [
          { t: 'steps', items: [
            { title: 'Pastayı çiz', text: 'Bir daire çiz ve dürüstçe böl: zihinsel enerjinin yüzde kaçı geçmişte, kaçı şimdide, kaçı gelecekte?' },
            { title: 'İçeriğini etiketle', text: 'Her dilim için tonu yaz: geçmiş dilimi minnet mi pişmanlık mı, gelecek dilimi plan mı kaygı mı? Aynı dilim çok farklı yaşanabilir.' },
            { title: 'Bilinçli kaydır', text: 'Sorun dilimin büyüklüğü değil, istemeden orada olmandır. Kaygı dilimini plana, pişmanlık dilimini derse çevirecek tek bir küçük alışkanlık seç.' },
          ]},
          { t: 'callout', kind: 'tip', title: 'İkili egzersiz', text: 'Aynı pastayı eşine ya da bir arkadaşına da çizdir ve karşılaştırın. Zaman yönelimi farkı, birçok ilişki tartışmasının gizli kaynağıdır: biri plan yaparken diğeri anıda yaşıyordur.' },
          { t: 'callout', kind: 'warn', title: 'Sık yapılan hata', text: '"Şimdide yaşamak" dilimini büyütmeyi ahlaki hedef sanmak. Modelin amacı ideal bir oran dayatmak değil, mevcut dağılımının farkına varmandır.' },
        ],
      },
      {
        slug: 'vaka',
        title: 'Gerçek Vaka & Fayda',
        blocks: [
          { t: 'callout', kind: 'case', title: 'Vaka: Harvard\'ın gezinen zihin araştırması', text: 'Harvard araştırmacıları Matthew Killingsworth ve Daniel Gilbert, 2010\'da Science dergisinde yayımladıkları çalışmada bir iPhone uygulamasıyla binlerce kişiye gün içinde rastgele anlarda "şu an ne yapıyorsun, aklın nerede, ne kadar mutlusun?" diye sordu. Bulgu çarpıcıydı: katılımcıların zihni uyanık zamanın yaklaşık yarısında yaptıkları işten başka yerdeydi ve zihin gezindiğinde — gezilen konu hoş bile olsa — insanlar ortalamada daha az mutluydu. Makalenin başlığı modelin özeti gibidir: "A wandering mind is an unhappy mind."' },
          { t: 'h2', text: 'Gerçek fayda' },
          { t: 'ul', items: [
            'Mutsuzluğun görünmez kaynağını gösterir: sorun çoğu zaman yapılan iş değil, zihnin istemsizce başka zamanda olmasıdır.',
            'Kaygı yönetimine somut çerçeve verir: gelecek dilimi "endişe" yerine "plan" olarak yeniden doldurulabilir.',
            'Kültür ve ekip farklarını anlaşılır kılar: geçmiş, şimdi ve gelecek ağırlıkları farklı insanlar aynı olaya bambaşka tepki verir.',
          ]},
        ],
      },
    ],
  },
  {
    slug: 'siyasi-pusula',
    section: 'kendini-anla',
    title: 'Siyasi Pusula',
    question: 'Siyasi partiler neyi savunur?',
    summary: 'Siyasi görüşleri sol–sağ ve liberal–otoriter eksenlerinde konumlandıran model.',
    tags: ['siyaset', 'değerler'],
    pages: [
      {
        slug: 'kavram',
        title: 'Kavram',
        blocks: [
          { t: 'p', text: 'Siyaseti hâlâ "sol" ve "sağ" diye düşünme eğilimindeyiz; ama bu kutuplaşma, bugünün karmaşık siyasi manzarasını anlatmak için fazla basittir. Kitabın verdiği örnek Birleşik Krallık\'tır: geleneksel olarak karşı kutuplarda duran İşçi Partisi ile Muhafazakârlar 2000\'lerde ekonomik ve sosyal politikalarda birbirine yaklaştı; radikal sağ sayılan UKIP, bazı sosyal konularda Muhafazakârların solunda kaldı.' },
          { t: 'p', text: 'Geçmişin keskin siyasi ayrımları bulanıklaşmış olabilir; ama görüş ve tutumları ölçmek için modeller vardır. En ünlülerinden biri siyasi pusuladır: konumunu iki eksende işaretlersin.' },
          { t: 'h2', text: 'İki eksen' },
          { t: 'ul', items: [
            'Sol–sağ: geleneksel anlamda siyasi yönelim değil, ekonomi politikası — sol devletleştirmeyi, sağ özelleştirmeyi temsil eder.',
            'Liberal–otoriter: birey hakları — liberal uçta tüm haklar bireydedir, otoriter uçta devlet yurttaşları üzerinde yüksek denetime sahiptir.',
          ]},
          { t: 'p', text: 'Pusulanın gücü, "sağcı parti" ya da "solcu seçmen" gibi tek boyutlu etiketlerin sakladığı kombinasyonları göstermesidir: ekonomide solda ama otoriter, ekonomide sağda ama özgürlükçü konumlar mümkündür ve gerçektir.' },
        ],
      },
      {
        slug: 'uygulama',
        title: 'Nasıl Uygulanır',
        blocks: [
          { t: 'steps', items: [
            { title: 'Kendini işaretle', text: 'İki soruyu ayrı ayrı cevapla: ekonomide devlet mi piyasa mı; bireysel özgürlük mü toplumsal düzen mi? Kesişimde kendini işaretle.' },
            { title: 'Zamanda karşılaştır', text: 'On yıl önce nerede durduğunu da işaretle. Fark, hangi yaşantıların görüşünü değiştirdiğini konuşmak için iyi bir başlangıçtır.' },
            { title: 'Partileri yerleştir', text: 'Ülkendeki partileri söylemlerine değil, somut politika tercihlerine göre pusulaya koy. Etiketle konum arasındaki fark çoğu zaman şaşırtır.' },
          ]},
          { t: 'callout', kind: 'warn', title: 'Sık yapılan hata', text: 'Pusulayı kimlik testi gibi kullanmak. Model insanları kutulamak için değil, "sol/sağ" etiketinin sakladığı iki ayrı soruyu (ekonomi ve özgürlük) ayrıştırmak içindir.' },
          { t: 'callout', kind: 'tip', title: 'Tartışma aracı olarak', text: 'Siyasi tartışma kilitlendiğinde karşındakine etiket yerine iki ekseni sor. "Sen sağcısın" suçlaması biterken "devletin ekonomideki rolü ne olmalı?" sorusu konuşma açar.' },
        ],
      },
      {
        slug: 'vaka',
        title: 'Gerçek Vaka & Fayda',
        blocks: [
          { t: 'callout', kind: 'case', title: 'Vaka: politicalcompass.org ve 2017 Birleşik Krallık seçimi', text: 'politicalcompass.org sitesi 2001\'den beri seçmenlere iki eksenli bir anket uygulatır ve seçim dönemlerinde partileri pusulaya yerleştirir. Kitabın da aktardığı 2017 Birleşik Krallık genel seçimi analizinde site, Muhafazakârlar, UKIP ve DUP\'u sağ-otoriter çeyrekte; Yeşiller ve dönemin Corbyn liderliğindeki İşçi Partisi\'ni sol-özgürlükçü tarafta konumlandırdı. Analiz, "sol–sağ" tek çizgisinin aynı çeyrekte görünen partiler arasındaki özgürlük ekseni farklarını nasıl sakladığını geniş kitleye gösterdi.' },
          { t: 'h2', text: 'Gerçek fayda' },
          { t: 'ul', items: [
            'Kendi konumunu netleştirir: iki soruya verdiğin cevap, miras aldığın parti aidiyetinden bağımsız bir fotoğraf çeker.',
            'Medya etiketlerine karşı bağışıklık kazandırır: "aşırı sağ" ya da "radikal sol" denen aktörlerin gerçek politika konumu ayrıştırılabilir.',
            'Kutuplaşmış tartışmayı iki ayrı, cevaplanabilir soruya böler: ekonomi ekseni ve özgürlük ekseni ayrı ayrı konuşulur.',
          ]},
        ],
      },
    ],
  },
  {
    slug: 'kisisel-performans-modeli',
    section: 'kendini-anla',
    title: 'Kişisel Performans Modeli',
    question: 'İşini değiştirmen gerektiğini nasıl anlarsın?',
    summary: 'İş tatminini mecburiyet, yetenek ve istek eksenlerinde üç hafta boyunca ölçen model.',
    tags: ['kariyer', 'iş tatmini'],
    pages: [
      {
        slug: 'kavram',
        title: 'Kavram',
        blocks: [
          { t: 'p', text: 'Birçok insan işinde mutsuzdur. Ama iş tatminsizliği nasıl ölçülür? Bu model, iş durumunu duygudan sayıya çevirir: üç hafta boyunca her akşam kendine üç soru sorar ve cevaplarını birden ona kadar puanlarsın.' },
          { t: 'h2', text: 'Üç eksen' },
          { t: 'ul', items: [
            'Mecburum (have to): şu anki görevlerim bana ne ölçüde dayatılıyor, benden ne ölçüde talep ediliyor?',
            'Yapabilirim (able to): görevlerim yeteneklerimle ne ölçüde örtüşüyor?',
            'İstiyorum (want to): şu anki görevim gerçekten istediğim şeye ne ölçüde karşılık geliyor?',
          ]},
          { t: 'p', text: 'Üç hafta sonra oluşan "yelken" şekillerine bakarsın. Şekil günden güne değişiyorsa işin sana çeşitlilik sunuyor demektir. Yelken hep aynıysa dört soru sırayı alır: Ne istiyorsun? İstediğini yapabiliyor musun? Ne yapabiliyorsun? Yapabildiğini istiyor musun?' },
          { t: 'quote', text: 'Bir şeyi yapamıyorsan, üzerinde çalışman gerekir.' },
        ],
      },
      {
        slug: 'uygulama',
        title: 'Nasıl Uygulanır',
        blocks: [
          { t: 'steps', items: [
            { title: 'Üç haftalık günlük başlat', text: 'Her akşam üç ekseni puanla: mecburiyet, yetenek uyumu, istek. Bir dakikadan uzun sürmesin; ilk hisle puanla.' },
            { title: 'Yelkenleri çiz', text: 'Her günün üç puanını üç eksenli grafiğe işle. Haftalık olarak şekilleri yan yana koy.' },
            { title: 'Deseni oku', text: 'Şekil değişkense işin çeşitlilik sunuyor. Sürekli aynıysa ve "mecburum" ekseni baskınsa, tatminsizliğin kaynağı belirginleşmiş demektir.' },
            { title: 'Dört soruyu cevapla', text: 'Sabit yelken hâlinde büyük soruları yaz: ne istiyorsun, istediğini yapabiliyor musun, ne yapabiliyorsun, yapabildiğini istiyor musun?' },
          ]},
          { t: 'callout', kind: 'warn', title: 'Tek güne güvenme', text: 'Kötü tek gün veri değildir; model bilerek üç hafta ister. Karar, tek akşamın öfkesiyle değil, üç haftalık desenle verilir.' },
        ],
      },
      {
        slug: 'vaka',
        title: 'Gerçek Vaka & Fayda',
        blocks: [
          { t: 'callout', kind: 'case', title: 'Vaka: Gallup\'un işe bağlılık ölçümü', text: 'Araştırma şirketi Gallup, onyıllardır dünya genelinde çalışan bağlılığını düzenli anketlerle ölçer ve sonuçları State of the Global Workplace raporlarında yayımlar. Bulgular modelin varsayımını doğrular: dünyada işine gerçekten bağlı çalışanlar azınlıktadır ve düşük bağlılık, verimlilik kaybı olarak ölçülebilir ekonomik maliyet üretir. Gallup\'un yöntemi de bu modelle aynı ilkeye dayanır: iş tatmini "mutlu musun?" diye tek seferde değil, standart sorularla düzenli aralıklarla ölçüldüğünde yönetilebilir bir veriye dönüşür.' },
          { t: 'h2', text: 'Gerçek fayda' },
          { t: 'ul', items: [
            'İstifa kararını duygudan veriye taşır: "işimden bıktım" hissi, üç haftalık ölçülebilir bir desene dönüşür.',
            'Sorunun adresini gösterir: mutsuzluğun kaynağı mecburiyet fazlası mı, yetenek uyumsuzluğu mu, istek eksikliği mi — her biri farklı çözüm ister.',
            'Yöneticiyle konuşmaya somut zemin verir: "tatminsizim" yerine "şu görev tipinde üç eksenim de düşük" denilebilir.',
          ]},
        ],
      },
    ],
  },
  {
    slug: 'making-of-modeli',
    section: 'kendini-anla',
    title: 'Making-of Modeli',
    question: 'Geleceğini belirlemek için önce geçmişini anla',
    summary: 'Bir dönemin hedeflerini, derslerini, engellerini ve insanlarını zaman çizgisine dökerek geçmişle gelecek arasında köprü kuran model.',
    tags: ['geçmiş', 'planlama'],
    pages: [
      {
        slug: 'kavram',
        title: 'Kavram',
        blocks: [
          { t: 'p', text: 'Stratejik kararlarda genellikle geleceğe odaklanırız: hayallerimiz gelecekte sahnelenir, umutlarımız onların gerçekleşmesine bağlanır. Peki neden? Belki geleceğimizi belirleyebileceğimizi düşündüğümüz için. Oysa her geleceğin bir geçmişi olduğunu ve geleceğimizin geçmişimizin üzerine inşa edildiğini unutma eğilimindeyiz.' },
          { t: 'p', text: 'Bu yüzden asıl soru "geleceğimi nasıl hayal ediyorum?" değil, "geçmiş ile gelecek arasında nasıl bir köprü kurarım?" sorusudur. The Grove danışmanlık ajansının geliştirdiği görsel planlama sisteminden esinlenen bu model, geçmişinde neyin önemli olduğunu, neyi unutabileceğini ve neyi yanına alman gerektiğini ayıklamana yardım eder.' },
          { t: 'h2', text: 'Zaman çizgisine eklenenler' },
          { t: 'ul', items: [
            'O dönemki hedeflerin.',
            'Öğrendiklerin.',
            'Aştığın engeller.',
            'Başarıların.',
            'Sürece dahil olan insanlar.',
          ]},
          { t: 'quote', text: 'Hafıza, kovulamayacağımız tek cennettir. — Jean Paul' },
        ],
      },
      {
        slug: 'uygulama',
        title: 'Nasıl Uygulanır',
        blocks: [
          { t: 'steps', items: [
            { title: 'Zaman dilimini seç', text: 'Bir çerçeve belirle: geçen yıl, okul yılların, evliliğin ya da şirketin kuruluşundan bugüne. Tek başına ya da grupla çalışabilirsin.' },
            { title: 'Başa dön ve doldur', text: 'Dönemin başına zihnen geri git; zaman çizgisine beş şeridi işle: hedefler, öğrenilenler, aşılan engeller, başarılar, insanlar.' },
            { title: 'Deseni oku', text: 'Dolu model, geçmişine atfettiğin önemi gösterir: hangi şerit dolu, hangisi boş? Engeller şeridi taşarken başarılar şeridi boşsa bu da bir cevaptır.' },
            { title: 'Köprüyü kur', text: 'Son soruyu cevapla: bu dönemden geleceğe ne taşıyacaksın, neyi bilinçli olarak geride bırakacaksın?' },
          ]},
          { t: 'callout', kind: 'tip', title: 'Ekip versiyonu', text: 'Projeye başlarken ekibe önceki projenin making-of\'unu çizdir. Ortak hafıza, yeni planın en ucuz risk analizidir.' },
        ],
      },
      {
        slug: 'vaka',
        title: 'Gerçek Vaka & Fayda',
        blocks: [
          { t: 'callout', kind: 'case', title: 'Vaka: The Grove ve grafik kolaylaştırma', text: 'Modelin esin kaynağı olan The Grove Consultants International, David Sibbet\'in San Francisco\'da kurduğu ve "graphic facilitation" (görsel kolaylaştırma) alanını öncüleştiren danışmanlık şirketidir. Grove\'un "Graphic History" şablonu, tam bu modeldeki gibi bir kurumun geçmişini dev bir duvar zaman çizgisine — hedefler, dönüm noktaları, insanlar, krizler — birlikte çizdirir ve onyıllardır şirketlerin ve kâr amacı gütmeyen kurumların strateji ve vizyon çalışmalarında kullanılır. Yaklaşımın kurumsal gerekçesi modelinkiyle aynıdır: ortak geleceği, ancak ortak geçmişi aynı resimde görebilen bir ekip planlayabilir.' },
          { t: 'h2', text: 'Gerçek fayda' },
          { t: 'ul', items: [
            'Gelecek planını temelsizlikten kurtarır: hedefler, geçmişte kanıtlanmış güçlere ve alınmış derslere bağlanır.',
            'Tekrarlanan hataları görünür kılar: engeller şeridinde aynı tip engel üç kez görünüyorsa, sorun şans değil desendir.',
            'Ekipte ortak hafıza ve aidiyet kurar: herkesin katkısı ve zor dönemlerdeki rolü aynı resimde teslim edilir.',
          ]},
        ],
      },
    ],
  },
  {
    slug: 'kisisel-potansiyel-tuzagi',
    section: 'kendini-anla',
    title: 'Kişisel Potansiyel Tuzağı',
    question: 'Hiçbir şey beklememek neden daha iyi?',
    summary: 'Başkalarının beklentileri ile gerçek başarılar arasındaki makas açıldığında düşülen tuzağı anlatan model.',
    tags: ['beklenti', 'kariyer'],
    pages: [
      {
        slug: 'kavram',
        title: 'Kavram',
        blocks: [
          { t: 'p', text: '"Ne kadar umut vadeden bir çocuk" — bu cümleyi hakkında duyan herkes, kişisel potansiyel tuzağının arkasında ne yattığını tahmin edebilir: bu vaadi yerine getirmeye çalışmakla geçen bir ömür.' },
          { t: 'p', text: 'Bu, yetenekli insanların lanetidir. "Sadece gerçekten ne istediğini bulması gerek" denir; eksikleri görmezden gelinir, başarıları elde edilişlerindeki kolaylıkla hayranlık toplar. Başlangıçta bu çekici ama ölümcül yetenek-karizma karışımından kâr eder. Ta ki "aptal" denenler çalışkanlaşana kadar: o zaman, bir zamanlar ona imrenerek bakanlar tarafından geçilişini kenardan izlemek zorunda kalır.' },
          { t: 'h2', text: 'Üç eğri' },
          { t: 'ul', items: [
            'Kendimden beklentilerim.',
            'Başkalarının benden beklentileri.',
            'Gerçek başarılarım.',
          ]},
          { t: 'p', text: 'Tuzak, başkalarının senden beklentileri ile gerçek başarıların birbirinden fazla uzaklaştığı anda açılır. Yetenekli kişi normalde bir kriz noktasına kadar rahat seyreder. Çıkış yolu şudur: 80 vadet, 120 teslim et.' },
          { t: 'quote', text: 'Kendinden, başkalarının senden beklediğini sandığından daha azını beklemeye hazır mısın?' },
        ],
      },
      {
        slug: 'uygulama',
        title: 'Nasıl Uygulanır',
        blocks: [
          { t: 'steps', items: [
            { title: 'Üç eğriyi çiz', text: 'Kariyer çizgin üzerinde üç eğriyi işaretle: kendi beklentilerin, başkalarının beklentileri, gerçek başarıların. Makasın nerede açıldığına bak.' },
            { title: 'Vaadini küçült', text: 'Söz verirken bilinçli olarak yapabileceğinin altını söyle: 80 vadet. Beklenti eğrisini sen yönetmezsen başkaları şişirir.' },
            { title: 'Teslimatı büyüt', text: 'Verdiğin sözün üstüne çık: 120 teslim et. İtibar, vaat–teslimat farkının işaretinden doğar; büyüklüğünden değil.' },
            { title: 'Krizde yön değiştir', text: 'Makas kapanmıyorsa kriz bir sinyaldir: konsolidasyon ve yön değişikliği, tuzakta oyalanmaktan iyidir.' },
          ]},
          { t: 'callout', kind: 'warn', title: 'Yetenek yalanı', text: '"Çok yeteneklisin" iltifatı bir avans, faiziyle geri istenir. Yeteneği kimlik değil başlangıç sermayesi olarak gör; çalışkanlık eğrisi uzun vadede yetenek eğrisini keser.' },
        ],
      },
      {
        slug: 'vaka',
        title: 'Gerçek Vaka & Fayda',
        blocks: [
          { t: 'callout', kind: 'case', title: 'Vaka: Freddy Adu — "yeni Pelé"', text: 'ABD\'li futbolcu Freddy Adu, 2004\'te 14 yaşında Major League Soccer\'da profesyonel sözleşme imzalayan en genç oyuncu oldu; basın onu "yeni Pelé" ilan etti, büyük markalarla reklam anlaşmaları yaptı. Beklenti eğrisi daha ilk maçından önce zirveye çıkmıştı. Gerçek başarı eğrisi ise hiçbir zaman ona yetişemedi: Adu kariyeri boyunca çok sayıda ülkede çok sayıda kulüp dolaştı ve hiçbir zaman kendisine biçilen düzeye ulaşamadı. Kendisi de sonraki röportajlarında erken gelen ünün ve beklentinin yükünü açıkça anlattı. Vaka, spor dünyasında potansiyel tuzağının en çok anılan örneklerindendir.' },
          { t: 'h2', text: 'Gerçek fayda' },
          { t: 'ul', items: [
            'Beklenti yönetimini beceri olarak öğretir: az vadedip çok teslim etmek, güven inşa etmenin en ucuz yoludur.',
            'Yetenekli çalışanların sessiz krizini erken gösterir: parlak ama teslim etmeyen kişi tembel değil, çoğu zaman tuzaktadır.',
            'Ebeveyn ve yöneticilere ayna tutar: "çok umut vadediyor" övgüsünün kendisi, tuzağın ilk mekanizmasıdır.',
          ]},
        ],
      },
    ],
  },
  {
    slug: 'zor-secim-modeli',
    section: 'kendini-anla',
    title: 'Zor Seçim Modeli',
    question: 'Karar vermenin dört yaklaşımı nedir?',
    summary: 'Kararları kıyaslanabilirlik ve sonuç büyüklüğüne göre dörde ayıran, zor seçimlerde öznel gerekçeyi öne çıkaran model.',
    tags: ['karar verme', 'felsefe'],
    pages: [
      {
        slug: 'kavram',
        title: 'Kavram',
        blocks: [
          { t: 'p', text: 'Teknik olarak her kararın iki parametresi vardır: seçenekler ne kadar kıyaslanabilir ve kararın sonucu ne kadar büyük? Bunlar bir matrise dizildiğinde dört farklı karar tipi ortaya çıkar.' },
          { t: 'ul', items: [
            'Kolay kıyas, küçük sonuç ("no-brainer"): bir seçenek diğerinden iyidir ve yanlış seçsen de önemi yoktur.',
            'Zor kıyas, küçük sonuç (elma/armut kararı): partiye mi gitsek erken mi yatsak? Seçenekler farklı açılardan iyidir, gerçekte kıyaslanamaz — karar önemli olmadığı hâlde zorlaşır.',
            'Kolay kıyas, büyük sonuç (büyük seçim): hayatını kurtarabilecek tek bir ameliyat olduğunu öğrendiğinde karar büyüktür ama kolaydır; gerçek bir alternatif yoktur.',
            'Zor kıyas, büyük sonuç (zor seçim): aile kurmak, iş değiştirmek — bariz doğru karar yoktur.',
          ]},
          { t: 'p', text: 'Filozof Ruth Chang\'e göre zor seçimlerde sonunda hangi kararı verirsen ver, önemli olan onu öznel gerekçelerle desteklemektir. Rasyonel tartıp biçmek bu durumda sana yardım etmez.' },
          { t: 'quote', text: 'En iyi alternatif diye bir şey yok. Gerekçeleri dışarıda aramak yerine içeride aramalıyız. — Ruth Chang' },
        ],
      },
      {
        slug: 'uygulama',
        title: 'Nasıl Uygulanır',
        blocks: [
          { t: 'steps', items: [
            { title: 'Kararı sınıfla', text: 'İki soruyu sor: seçenekler gerçekten kıyaslanabilir mi? Sonuç gerçekten büyük mü? Kararını dört kadrandan birine koy.' },
            { title: 'Küçükleri hızlandır', text: 'No-brainer ve elma/armut kararlarında oyalanma: küçük sonuçlu kararı uzatmak, en yaygın enerji israfıdır. Yazı tura bile at.' },
            { title: 'Zor seçimde içeri bak', text: 'Gerçek zor seçimde artı–eksi listesi eşitliği bozamaz; çünkü seçenekler farklı türden iyidir. Soruyu değiştir: "Hangi kararın arkasında durmak istediğim insan olurum?"' },
            { title: 'Gerekçeni yaz ve sahiplen', text: 'Verdiğin kararın öznel gerekçesini bir cümleyle yaz. Chang\'in dersi budur: zor seçimlerde gerekçeyi bulmayız, yaratırız — ve bu bizi sürüklenen değil karar veren kişi yapar.' },
          ]},
          { t: 'callout', kind: 'warn', title: 'Sık yapılan hata', text: 'Zor seçimi daha çok veriyle çözmeye çalışmak. Veri kıyaslanabilir seçenekleri ayırır; kıyaslanamaz seçeneklerde eksik olan bilgi değil, senin taahhüdündür.' },
        ],
      },
      {
        slug: 'vaka',
        title: 'Gerçek Vaka & Fayda',
        blocks: [
          { t: 'callout', kind: 'case', title: 'Vaka: Ruth Chang ve "How to Make Hard Choices"', text: 'Modelin dayandığı düşünce, Oxford Üniversitesi hukuk felsefesi profesörü Ruth Chang\'in çalışmalarından gelir. Chang\'in 2014 tarihli "How to Make Hard Choices" başlıklı TED konuşması milyonlarca kez izlendi ve zor seçimler üzerine en çok başvurulan popüler felsefe kaynaklarından biri oldu. Chang\'in kendi hayatı da vakadır: kariyerinin başında avukatlık ile felsefe arasında tam böyle bir zor seçimle karşılaşmış, "güvenli" gerekçelerle önce hukuku seçmiş, sonra kararın kendi öznel taahhüdünü yansıtmadığını fark edip felsefeye dönmüştür. Bu deneyim, "seçenekler eşit değil, denk (on a par) olabilir" kuramının çıkış noktasıdır.' },
          { t: 'h2', text: 'Gerçek fayda' },
          { t: 'ul', items: [
            'Karar felcini çözer: kararın hangi kadranda olduğunu bilmek, ne kadar düşünmeye değeceğini söyler.',
            'Küçük kararlardaki israfı keser: elma/armut kararları hızla verilir, enerji büyük seçimlere saklanır.',
            'Zor seçim pişmanlığını azaltır: öznel gerekçeyle sahiplenilen karar, sonuç ne olursa olsun "sürüklendim" duygusu bırakmaz.',
          ]},
        ],
      },
    ],
  },
  {
    slug: 'bilissel-onyargi',
    section: 'kendini-anla',
    title: 'Bilişsel Önyargı',
    question: 'Düşünürken yaptığımız dört hata nedir?',
    summary: 'Çapa etkisi, doğrulama hatası, bulunabilirlik hatası ve hızlı/yavaş düşünme hatasını tanıtan model.',
    tags: ['psikoloji', 'karar hataları'],
    pages: [
      {
        slug: 'kavram',
        title: 'Kavram',
        blocks: [
          { t: 'p', text: 'Bilişsel önyargılar, hepimizin farkında olmadan yaptığı ve kararlarımızı etkileyen sistematik yargı hatalarıdır. Kitap dört tanesini öne çıkarır ve her birini aynı şablonla anlatır: varsayımımız ne, gerçek ne, çözüm ne?' },
          { t: 'h2', text: 'Dört hata' },
          { t: 'ul', items: [
            'Çapa etkisi: "Tüm faktörleri değerlendirdik" sanırız; gerçekte en çok ilk duyduğumuz bilgiye güveniriz. Biri hakkında ilk duyduğumuz şey yargımızı, ilk teklif edilen fiyat pazarlığı belirler. Çözüm: ilk izlenimine güvenme.',
            'Doğrulama hatası: "Durumu nesnel değerlendirdik" sanırız; gerçekte bilgiyi mevcut kanaatimizi doğrulayacak şekilde yorumlar, aykırı bilgiyi görmeyiz. Kimse karşı argüman aramaz. Çözüm: yanıldığını varsay.',
            'Bulunabilirlik hatası: "İyi gerekçelerimiz var" sanırız; gerçekte argümanlarımızı basit, elde hazır ve çoğunlukla kişisel anılara dayandırırız. Çözüm: anekdot kanıta güvenme.',
            'Hızlı/yavaş hatası: "Sezgiyle doğru karar verdik" sanırız. Daniel Kahneman iki düşünme biçimi tanımlar: Sistem 1 (hızlı, sezgisel) ve Sistem 2 (yavaş, dikkatli). Kahve ile kurabiye birlikte 1,10 dolar; kahve kurabiyeden 1 dolar pahalı — kurabiye kaç para? Sistem 1 hemen "10 sent" der; Sistem 2 ile düşünen doğru cevabı bulur: 5 sent. Çözüm: e-postaları göndermeden önce bir kez daha oku.',
          ]},
          { t: 'p', text: 'Bu önyargıları yok edemezsin; ama düşünme biçimini keskinleştirebilirsin.' },
        ],
      },
      {
        slug: 'uygulama',
        title: 'Nasıl Uygulanır',
        blocks: [
          { t: 'steps', items: [
            { title: 'Çapayı sorgula', text: 'Her pazarlık ve değerlendirmede sor: bu yargımın referans noktası ne ve o noktayı kim koydu? İlk sayıyı sen koymadıysan, çapa sana atılmıştır.' },
            { title: 'Aleyhte kanıt ara', text: 'Karar öncesi bilinçli görev: görüşünü çürütecek en güçlü üç argümanı yaz. Bulamıyorsan araştırman bitmemiştir.' },
            { title: 'Anekdotu veriden ayır', text: '"Bir tanıdığım..." diye başlayan her gerekçeyi işaretle ve yerine ölçülmüş veri koymaya çalış.' },
            { title: 'Sistem 2\'yi devreye sok', text: 'Önemli mesaj ve kararlarda araya zaman koy: göndermeden önce bir kez daha oku, imzalamadan önce bir gece bekle.' },
          ]},
          { t: 'callout', kind: 'warn', title: 'Önyargı kör noktası', text: 'En tehlikeli önyargı, önyargıların başkalarında olduğuna inanmaktır. Bu listeyi ekip için değil, önce kendi son üç kararın için uygula.' },
        ],
      },
      {
        slug: 'vaka',
        title: 'Gerçek Vaka & Fayda',
        blocks: [
          { t: 'callout', kind: 'case', title: 'Vaka: Kahneman–Tversky çarkıfelek deneyi', text: 'Daniel Kahneman ve Amos Tversky\'nin klasik deneyinde katılımcılara önce hileli bir çarkıfelek çevirtildi (çark yalnızca 10 ya da 65\'te duruyordu), sonra Birleşmiş Milletler üyesi Afrika ülkelerinin oranı gibi çarkla tamamen ilgisiz bir soru soruldu. Çarkta 65 görenler, 10 görenlerden sistematik olarak daha yüksek tahminler verdi: alakasız bir sayı bile yargıyı çapalamıştı. Bu araştırma programı Kahneman\'a 2002 Nobel Ekonomi Ödülü\'nü getirdi ve Thinking, Fast and Slow kitabıyla davranışsal ekonominin temel taşı oldu.' },
          { t: 'h2', text: 'Gerçek fayda' },
          { t: 'ul', items: [
            'Pazarlık gücünü artırır: çapanın nasıl çalıştığını bilen, ilk teklifi bilinçli verir ya da bilinçli reddeder.',
            'Toplantı kalitesini yükseltir: "yanıldığımızı varsayalım" kuralı, doğrulama hatasını kurumsal olarak frenler.',
            'Pahalı dürtüsel hataları azaltır: Sistem 2 molası, geri alınamayan mesaj ve imzaların önündeki en ucuz sigortadır.',
          ]},
        ],
      },
    ],
  },
  {
    slug: 'yol-ayrimi-modeli',
    section: 'kendini-anla',
    title: 'Yol Ayrımı Modeli',
    question: 'Peki şimdi ne olacak?',
    summary: 'Hayatta bir yol ayrımına gelindiğinde geçmişi, değerleri ve önündeki altı yolu haritalayan model.',
    tags: ['yön bulma', 'kariyer'],
    pages: [
      {
        slug: 'kavram',
        title: 'Kavram',
        blocks: [
          { t: 'p', text: 'Hepimizin hayatında kendimizi bir yol ayrımında bulduğumuz ve "şimdi nereye?" diye sorduğumuz anlar olur. Yol ayrımı modeli, hayatta yönünü bulmana yardım eder. Önce arkana bakarsın: beş soru, seni buraya getiren yolları haritalar.' },
          { t: 'h2', text: 'Beş soru' },
          { t: 'ul', items: [
            'Nereden geliyorsun? Seni sen yapan ana kararlar, olaylar, engeller ve etkiler neler?',
            'Senin için gerçekten önemli olan ne? Aklına gelen ilk üç şeyi yaz; her şey boşa çıktığında geriye ne kalır?',
            'Hangi insanlar senin için önemli? Fikrine değer verdiklerin, kararlarını etkileyenler ve kararlarından etkilenenler.',
            'Seni ne engelliyor? Önemli şeyleri düşünmekten seni alıkoyan yükümlülükler ve kafandaki son tarihler.',
            'Neden korkuyorsun? Seni endişelendiren ve gücünü tüketen şeyler, koşullar, insanlar.',
          ]},
          { t: 'h2', text: 'Önündeki altı yol' },
          { t: 'ul', items: [
            'Daha önce gittiğim yol.',
            'Beni çağıran yol: hep denemek istediğim şey.',
            'En çılgın hayallerimdeki yol: ulaşılabilir olup olmadığından bağımsız.',
            'En makul görünen yol: fikrine değer verdiğim insanların önereceği.',
            'Hiç gidilmemiş yol: daha önce hiç düşünmediğim.',
            'Geriye giden yol: bir zamanlar kendimi güvende hissettiğim yere.',
          ]},
          { t: 'quote', text: 'Karar senin. En son ne zaman bir şeyi ilk kez yaptın?' },
        ],
      },
      {
        slug: 'uygulama',
        title: 'Nasıl Uygulanır',
        blocks: [
          { t: 'steps', items: [
            { title: 'Beş soruyu yaz', text: 'Tek başına ya da iyi bir arkadaşla, beş soruyu anahtar kelimelerle cevapla: nereden geldin, ne önemli, kimler önemli, ne engelliyor, neden korkuyorsun?' },
            { title: 'Notlarına dışarıdan bak', text: 'Yazdıklarına bak: ne eksik? Anahtar kelimeler bugünkü sen olma hikâyeni anlatıyor mu? Gerekirse ekle.' },
            { title: 'Altı yolu tek tek hayal et', text: 'Her yolu ciddiye alarak zihninde yürü: geriye giden yol da, çılgın hayal de meşru birer seçenektir. Hangisinde nefesin açılıyor?' },
            { title: 'Yolu sen seç', text: 'Model cevabı vermez; seçenekleri eksiksiz gösterir. Kararı, en makul yol ile seni çağıran yol arasındaki farkın bilincinde olarak ver.' },
          ]},
          { t: 'callout', kind: 'tip', title: 'Arkadaşla çalış', text: 'Kitabın önerisi: soruları iyi bir arkadaşla birlikte cevapla. Kendi hikâyeni yüksek sesle anlatmak, yazarken görünmeyen desenleri ortaya çıkarır.' },
        ],
      },
      {
        slug: 'vaka',
        title: 'Gerçek Vaka & Fayda',
        blocks: [
          { t: 'callout', kind: 'case', title: 'Vaka: LEGO\'nun yol ayrımı', text: 'LEGO, 2003–2004\'te tarihinin en ağır krizindeydi: tema parklarına, yazılıma, giyime ve televizyona dağılan şirket ciddi zarar açıklıyordu. Yeni CEO Jørgen Vig Knudstorp yönetiminde şirket tam bir yol ayrımı analizi yaptı: nereden geldik (tuğlayla kuruldu), gerçekten önemli olan ne (yapı taşıyla yaratıcı oyun), bizi ne engelliyor (odaksız çeşitlenme)? Seçilen yol, modeldeki "geriye giden yol"un stratejik hâliydi: "back to the brick" — tema parkları satıldı, ürün gamı budandı, çekirdek tuğla işine dönüldü. LEGO izleyen on yılda dünyanın en kârlı oyuncak şirketlerinden biri hâline geldi; vaka, geriye giden yolun da ileri götürebileceğinin belgelenmiş örneğidir.' },
          { t: 'h2', text: 'Gerçek fayda' },
          { t: 'ul', items: [
            'Karar anını panikten çıkarır: "ne yapacağım?" sorusu, önce geçmişi sonra altı somut yolu haritalayan bir sürece dönüşür.',
            'Görünmeyen seçenekleri masaya koyar: hiç gidilmemiş yol ve geriye giden yol, çoğu insanın kendine yasakladığı iki meşru seçeneği görünür kılar.',
            'Korkuyu veri hâline getirir: adlandırılmış korku, kararı sessizce yöneten bir güç olmaktan çıkıp tartılabilir bir faktör olur.',
          ]},
        ],
      },
    ],
  },
]
