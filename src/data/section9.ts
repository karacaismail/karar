import type { DecisionModel } from '../types'

export const section9Models: DecisionModel[] = [
  {
    slug: 'bes-neden',
    section: 'surec-kalite',
    title: '5 Neden (Kök Neden Analizi)',
    question: 'Bu sorun neden oldu ve bir daha olmaması için asıl neyi düzeltmeliyim?',
    summary: 'Bir soruna arka arkaya beş kez "neden?" diye sorarak görünen belirtiden asıl kök nedene inen; yara bandı yerine kalıcı çözüm buldurtan sade sorgulama tekniği.',
    tags: ['kök neden', 'sorun çözme', 'kalite'],
    areas: ['Arıza ve hata analizi', 'Üretim ve atölye sorunları', 'Müşteri şikayetleri', 'Tekrarlayan aksaklıklar'],
    viz: {
      kind: 'process',
      steps: [
        { title: '1. Neden?', text: 'Makine durdu. Neden? Sigorta attı.' },
        { title: '2. Neden?', text: 'Sigorta neden attı? Motor aşırı yüklendi.' },
        { title: '3. Neden?', text: 'Neden yüklendi? Yatak yeterince yağlanmamış.' },
        { title: '4. Neden?', text: 'Neden yağlanmamış? Yağ pompası az yağ basıyor.' },
        { title: '5. Neden?', text: 'Neden az basıyor? Pompanın filtresi talaşla tıkanmış: kök neden bu.' },
      ],
      note: 'Sigortayı değiştirmek belirtiyi giderir; filtreye süzgeç takmak sorunu bir daha yaşatmaz.',
    },
    pages: [
      {
        slug: 'kavram',
        title: 'Kavram',
        blocks: [
          { t: 'callout', kind: 'simple', title: 'Bir cümlede', text: 'Bir sorunla karşılaşınca ilk cevapta durma; arka arkaya yaklaşık beş kez "peki o neden oldu?" diye sor, çünkü ilk cevap çoğu zaman belirtidir, asıl neden birkaç kat aşağıdadır.' },
          { t: 'callout', kind: 'ornek', title: 'Esnaftan örnek', text: 'Fırıncı Kadir Usta\'nın ekmekleri iki gündür yanık çıkıyor. İlk tepkisi çırağı azarlamak; ama duruyor ve soruyor. Ekmek neden yandı? Fırın çok sıcaktı. Neden çok sıcaktı? Termostat geç kapatıyor. Neden geç kapatıyor? Sensörün ucu isle kaplanmış. Neden isle kaplandı? Aylık temizlik yapılmamış. Neden yapılmamış? Temizlik kimsenin görevi olarak yazılmamış, "aklına gelen yapar" deniyormuş. Kök neden çırak değil, sahipsiz bırakılan bakım işiymiş. Kadir Usta duvara küçük bir bakım çizelgesi asıyor ve her işe bir isim yazıyor; yanık ekmek derdi bir daha yaşanmıyor.' },
          { t: 'p', text: '5 Neden tekniği, sorunun görünen yüzü ile asıl kaynağı arasındaki zinciri açığa çıkarır. Görünen yüz genelde bir belirtidir: atan sigorta, yanan ekmek, kızgın müşteri. Belirtiyi düzeltmek rahatlatır ama sorun kaynağında durduğu için geri gelir. "Neden?" sorusu her tekrarında zincirde bir halka aşağı iner ve çoğu zaman beşinci soru civarında, düzeltilince sorunun bir daha yaşanmayacağı noktaya ulaşılır.' },
          { t: 'h2', text: 'Belirti ile kök neden farkı' },
          { t: 'table', head: ['Bakış', 'Ne görür?', 'Çözümü', 'Sonucu'], rows: [
            ['Belirti bakışı', 'Sigorta attı', 'Sigortayı değiştir', 'Sorun kısa sürede geri gelir'],
            ['Ara neden bakışı', 'Motor zorlanıyor', 'Motoru dinlendir', 'Sorun seyrekleşir ama bitmez'],
            ['Kök neden bakışı', 'Filtre tıkanıyor, bakım sahipsiz', 'Süzgeç tak, bakımı görevlendir', 'Sorun bir daha yaşanmaz'],
          ]},
          { t: 'p', text: 'Beş sayısı kutsal değildir; kimi sorun üç soruda çözülür, kimi yedi soru ister. Ölçü şudur: vardığın nedeni düzelttiğinde sorun bir daha yaşanmayacaksa yeterince derine inmişsindir. Bir işaret daha vardır: zincir çoğu zaman bir insan hatasında değil, bir süreç veya düzen eksiğinde biter. "Çırak unutmuş" bir kök neden değildir; "unutulmasını önleyecek bir düzen yok" kök nedendir.' },
          { t: 'p', text: 'Tekniğin gücü sadeliğindedir: kağıt ve kalemden başka araç istemez. Zayıf noktası da aynı yerdedir: sorular özensiz sorulursa zincir tahmine ve suçlamaya kayar. Her "neden?" cevabının mümkünse yerinde gözlem ve kanıtla doğrulanması gerekir.' },
        ],
      },
      {
        slug: 'uygulama',
        title: 'Nasıl Uygulanır',
        blocks: [
          { t: 'steps', items: [
            { title: 'Sorunu net ve somut yaz', text: '"İşler kötü" ile başlanmaz; "Salı günü üç müşteri siparişini geç aldı" ile başlanır. Sorunu yer, zaman ve ölçüsüyle bir cümlede yaz. Bulanık soruna sorulan "neden?", bulanık cevap getirir.' },
            { title: 'İlgili kişilerle, mümkünse olay yerinde sor', text: 'Sorgulamayı masadan değil, işin yapıldığı yerden yürüt: tezgahın başında, deponun içinde. Sorunu yaşayan kişileri dahil et; amaç suçlu bulmak değil, zinciri birlikte görmektir. Suçlanacağını hisseden insan gerçeği anlatmaz.' },
            { title: 'Arka arkaya "neden?" diye sor ve her cevabı doğrula', text: 'Her cevabın ardından bir sonraki "neden?" sorusunu sor ve zinciri yaz. Her halkayı kanıtla sına: "Termostat geç kapatıyor" deniyorsa ölç, gerçekten öyle mi bak. Tahmin üzerine kurulan zincir, yanlış kök nedene götürür.' },
            { title: 'Kök nedeni düzelt ve sonucu izle', text: 'Zincirin sonundaki nedene kalıcı bir önlem al: düzen kur, görev yaz, ekipmanı değiştir. Sonra bir süre izle: sorun tekrar ediyorsa ya yeterince derine inilmemiş ya da birden fazla kök neden vardır; zinciri yeniden yürüt.' },
          ]},
          { t: 'callout', kind: 'tip', title: 'İpucu', text: 'Zincirin insan suçlamasında bitmesine izin verme; bir kişiye ulaştığında bir "neden?" daha sor: "Neden bu hata yapılabildi? Onu önleyecek düzen neden yoktu?" İnsanlar değişir ama düzen kalır; kalıcı çözüm hep düzende bulunur.' },
          { t: 'callout', kind: 'warn', title: 'Dikkat', text: 'İki tuzak vardır. Birincisi tek zincir yanılgısı: bazı sorunların birden fazla kök nedeni olur; bir dal çözülünce sorun azalır ama bitmezse öbür dalı da sorgula. İkincisi kanıtsız zincir: masa başında kurulan "bence şundandır" zinciri kulağa mantıklı gelir ama yanlış yere kazma vurdurur; her halkayı yerinde doğrula.' },
        ],
      },
      {
        slug: 'vaka',
        title: 'Gerçek Vaka & Fayda',
        blocks: [
          { t: 'callout', kind: 'case', title: 'Vaka: Toyota\'nın atölyesinden dünyaya', text: '5 Neden tekniği, Toyota\'nın üretim sistemini kuran mühendis Taiichi Ohno tarafından yaygınlaştırıldı; Ohno kaynağında bu fikrin Toyota\'nın kurucusu Sakichi Toyoda\'ya dayandığı anlatılır. Ohno, "Toyota Üretim Sistemi" kitabında yöntemi bizzat makine örneğiyle anlatır: duran bir makine için "neden?" sorusu beş kez tekrarlanır ve atan sigortadan, yağ pompasının tıkanmış filtresine ulaşılır; sigortayı değiştirmek sorunu birkaç ay sonra geri getirirken, filtreye süzgeç takmak sorunu kökünden bitirir. Ohno\'ya göre bir sorunla karşılaşınca beş kez neden diye sormak, Toyota\'nın bilimsel yaklaşımının temelidir; çünkü işçiyi suçlamak yerine süreci sorgulatır. Teknik bugün Toyota\'nın çok ötesine geçmiştir: yalın üretim ve Six Sigma (Altı Sigma) programlarında standart araçtır, hastanelerde tıbbi hataların, yazılım şirketlerinde sistem arızalarının incelenmesinde kullanılır. Yayılmasının sebebi sadeliğidir: hiçbir yazılım ve eğitim istemez, sadece ilk cevapta durmama disiplini ister.' },
          { t: 'h2', text: 'Gerçek fayda' },
          { t: 'ul', items: [
            'Tekrarlayan sorunları bitirir: belirtiye değil kaynağa yapılan müdahale, aynı derdin her ay geri gelmesini önler.',
            'Suçlama kültürünü çözüm kültürüne çevirir: soru kişiye değil sürece yöneldiği için insanlar hatayı saklamak yerine anlatır.',
            'Parasız ve hızlıdır: kağıt, kalem ve birkaç dürüst sorudan başka yatırım istemez; en küçük işletmede bile aynı gün uygulanır.',
          ]},
        ],
      },
    ],
  },
  {
    slug: 'ab-testi',
    section: 'veri-teknoloji',
    title: 'A/B Testi',
    question: 'İki seçenekten hangisinin daha iyi çalıştığını tartışmak yerine nasıl ölçerim?',
    summary: 'Bir şeyin iki sürümünü (A ve B) gerçek kullanıcılara eş zamanlı gösterip sonuçları sayılarla karşılaştıran; "bence" tartışmasını "ölçtük" cevabıyla bitiren deney yöntemi.',
    tags: ['deney', 'ölçme', 'dönüşüm', 'veri'],
    areas: ['İnternet sitesi ve uygulama', 'Reklam ve kampanya', 'Fiyat ve vitrin denemeleri', 'E-posta ve mesaj başlıkları'],
    viz: {
      kind: 'bars',
      categories: ['A sürümü (mevcut)', 'B sürümü (yeni)'],
      series: [{ name: 'Dönüşüm oranı (%)', values: [3.1, 4.2] }],
      yLabel: 'Satın alan ziyaretçi yüzdesi',
      note: 'İki sürüm aynı anda, benzer kitlelere gösterilir; fark yeterince büyükse kazanan B\'dir.',
    },
    pages: [
      {
        slug: 'kavram',
        title: 'Kavram',
        blocks: [
          { t: 'callout', kind: 'simple', title: 'Bir cümlede', text: 'Hangisi daha iyi diye toplantıda tartışacağına, iki sürümü aynı anda gerçek müşterilere göster; yarıya A\'yı, yarıya B\'yi ver ve hangisinin daha çok satış, tıklama veya kayıt getirdiğini say: kararı fikir değil, sayı versin.' },
          { t: 'callout', kind: 'ornek', title: 'Esnaftan örnek', text: 'Lokantacı Suna Hanım paket servis broşürü bastıracak; eşi "kırmızı zemin dikkat çeker" diyor, oğlu "fotoğraflı olsun" diyor, tartışma bitmiyor. Suna Hanım tartışmayı deneye çeviriyor: iki broşür bastırıyor, ikisine de farklı bir indirim kodu yazıyor. Bir hafta boyunca mahallenin bir yarısına kırmızı broşürü, öbür yarısına fotoğraflı broşürü dağıtıyorlar. Hafta sonunda kasadaki kodları sayıyorlar: kırmızı broşürün kodu 18 kez, fotoğraflı broşürün kodu 41 kez kullanılmış. Tartışma bitiyor; bir dahaki baskı fotoğraflı oluyor. Kimin haklı çıktığı önemli değil; önemli olan, kararın artık tahminle değil müşterinin kendi davranışıyla verilmiş olması.' },
          { t: 'p', text: 'A/B testi, bir kararın iki adayını gerçek hayatta yarıştırır. A genellikle mevcut durumdur, B denenen yeniliktir. Kitle rastgele ikiye bölünür, iki sürüm aynı dönemde gösterilir ve önceden seçilmiş tek bir ölçüye bakılır: satış, tıklama, kayıt, arama. Aynı anda gösterilmesi önemlidir; çünkü bu hafta ile geçen haftayı karşılaştırırsan araya hava durumu, maaş günü, tatil gibi yüzlerce etken girer ve farkın sürümden mi dönemden mi geldiği bilinemez.' },
          { t: 'h2', text: 'İyi bir A/B testinin şartları' },
          { t: 'table', head: ['Şart', 'Ne demek?', 'İhlal edilirse ne olur?'], rows: [
            ['Tek fark', 'A ile B arasında sadece test edilen şey değişir', 'Fark neyden kaynaklandı, bilinemez'],
            ['Rastgele bölme', 'Kime A kime B gösterileceği kurayla belirlenir', 'Gruplar baştan farklıysa sonuç yanıltır'],
            ['Aynı dönem', 'İki sürüm eş zamanlı yayında olur', 'Dönem etkisi sürüm etkisine karışır'],
            ['Yeterli sayı', 'Karar için yeterince kişi test görür', 'Küçük örneklem, şans eserini başarı sanar'],
            ['Önceden seçilmiş ölçü', 'Neyin sayılacağı test başlamadan yazılır', 'Sonuca göre ölçü seçmek, hile kapısı açar'],
          ]},
          { t: 'p', text: 'En kritik kural tek fark kuralıdır: B sürümünde hem başlığı hem rengi hem fiyatı değiştirirsen ve B kazanırsa, hangisi sayesinde kazandığını asla öğrenemezsin. Her test tek bir soruyu cevaplamalıdır. Büyük bir yenilik denenecekse ya parçalara bölünüp sırayla test edilir ya da "bu bütün paket, karşısında eski paket" diye tek soru haline getirilir.' },
          { t: 'p', text: 'İkinci kritik kavram şans payıdır. On kişiye gösterip 6\'ya 4 fark bulmak hiçbir şey kanıtlamaz; yazı tura da öyle sonuç verir. Fark ancak yeterince çok kişide ve yeterince büyükse karar farkıdır. Kaba kural: küçük farklar çok sayıda gözlem ister; az müşterisi olan işletme küçük farkları değil, büyük ve bariz farkları test etmelidir.' },
        ],
      },
      {
        slug: 'uygulama',
        title: 'Nasıl Uygulanır',
        blocks: [
          { t: 'steps', items: [
            { title: 'Soruyu ve ölçüyü yaz', text: 'Tek cümlelik bir tahminle başla: "Fotoğraflı broşür daha çok sipariş getirir." Neyi sayacağını da baştan yaz: kullanılan indirim kodu, tamamlanan satış, gelen telefon. Test başladıktan sonra ölçü değiştirilmez.' },
            { title: 'İki sürümü hazırla, tek fark bırak', text: 'A mevcut durum, B tek bir şeyi değiştirilmiş sürüm olsun: sadece başlık, sadece fiyat, sadece vitrin düzeni. İki sürümü ayırt edebileceğin bir iz koy: ayrı kod, ayrı telefon numarası, ayrı bağlantı adresi.' },
            { title: 'Kitleyi rastgele böl ve eş zamanlı yayınla', text: 'Kime hangi sürümün gideceğini kurayla veya sırayla (bir A bir B) belirle; internet araçları bunu kendiliğinden yapar. İki sürümü aynı dönemde çalıştır ve test bitene kadar dokunma: erken bakıp "B önde, kapatalım" demek en yaygın hatadır.' },
            { title: 'Sayıları karşılaştır, kazananı uygula, sıradaki testi kur', text: 'Süre dolunca iki grubun oranlarını karşılaştır. Fark büyük ve gözlem sayısı yeterliyse kazananı herkese aç. Fark küçükse "berabere" demekten korkma; bu da değerli bilgidir: o değişiklik önemli değilmiş, enerjini başka teste ver.' },
          ]},
          { t: 'callout', kind: 'tip', title: 'İpucu', text: 'Test edilecek şeyi seçerken karara en yakın noktadan başla: fiyat etiketi, başlık, teklif cümlesi, kapanış sorusu. Düğmenin gölge tonu gibi kılcal ayrıntılar deneyimli ekiplerin işidir; küçük işletmeye en çok kazandıran testler, müşterinin karar anına dokunan büyük ve cesur farklardır.' },
          { t: 'callout', kind: 'warn', title: 'Dikkat', text: 'Üç tuzağa dikkat: Birincisi, az sayıda gözlemle kesin hüküm vermek; 20 kişilik test şans oyunudur. İkincisi, sonuç beğenilmeyince "bir hafta daha uzatalım" diyerek istenen sonucu bekleme oyunu; süre baştan belirlenir. Üçüncüsü, ölçü kaydırmak: satış artmadıysa "ama beğeni arttı" demek testin amacını sonradan değiştirmektir; kazananı baştan yazılan ölçü belirler.' },
        ],
      },
      {
        slug: 'vaka',
        title: 'Gerçek Vaka & Fayda',
        blocks: [
          { t: 'callout', kind: 'case', title: 'Vaka: Google\'ın 41 mavi tonu ve Obama kampanyasının e-postaları', text: 'İki belgeli örnek, yöntemin gücünü iki farklı dünyada gösterir. Google, arama sonuçlarındaki bağlantı renginin tıklamayı etkilediğini fark edince tek bir maviye karar vermek yerine 41 farklı mavi tonunu gerçek kullanıcılar üzerinde test etti; her tona kullanıcıların küçük bir bölümü gösterildi ve en çok tıklanan ton seçildi. Dönemin yöneticilerinin anlattığına göre bu tek renk kararının yıllık gelir etkisi ciddi bir tutara ulaştı; vaka, "tasarımcı sezgisi mi, ölçüm mü" tartışmasının simgesi haline geldi. İkinci örnek siyasetten: Barack Obama\'nın kampanya ekipleri, internet sitesindeki kayıt sayfasını ve bağış e-postalarını sistemli A/B testlerinden geçirdi. 2008 kampanyasında ana sayfadaki görsel ve düğme yazısı seçenekleri yarıştırıldı; kazanan birleşim, kayıt oranını belirgin biçimde artırdı ve ekibin aktardığına göre milyonlarca ek e-posta kaydına ve önemli ölçüde ek bağışa dönüştü. Sonraki kampanyada e-posta konu başlıkları küçük gruplarda test edilip en iyi performans göstereni tüm listeye gönderildi; sıradan görünen başlıkların şaşırtıcı biçimde kazandığı görüldü. İki vakanın ortak dersi: hangi sürümün kazanacağını uzmanlar bile önceden bilemiyor; bilen tek taraf, davranışıyla oy veren kullanıcıdır.' },
          { t: 'h2', text: 'Gerçek fayda' },
          { t: 'ul', items: [
            'Fikir tartışmasını bitirir: "bence" ile "bence" çarpışacağına, müşterinin gerçek davranışı hakemlik yapar.',
            'Riski küçültür: yeniliği herkese birden açmak yerine küçük bir grupta denersin; hata büyümeden yakalanır.',
            'Birikerek büyür: tek tek küçük görünen kazanımlar (yüzde bir, yüzde iki) üst üste eklenince satışta ve maliyette büyük fark yaratır.',
          ]},
        ],
      },
    ],
  },
  {
    slug: 'kohort-analizi',
    section: 'veri-teknoloji',
    title: 'Kohort Analizi',
    question: 'Müşterilerim zamanla kalıyor mu, kaçıyor mu; ve yeni gelenler eskilerden daha mı sadık?',
    summary: 'Aynı dönemde başlayan müşterileri (kohort) grup halinde izleyip her grubun zaman içindeki davranışını karşılaştıran; ortalamanın sakladığı gerçeği gösteren analiz yöntemi.',
    tags: ['kohort', 'tutundurma', 'müşteri davranışı', 'veri'],
    areas: ['Abonelik ve üyelik işleri', 'Uygulama ve site analizi', 'Müşteri sadakati ölçümü', 'Kampanya etkisi izleme'],
    viz: {
      kind: 'curve',
      xLabel: 'Başlangıçtan sonra geçen ay',
      yLabel: 'Hala aktif olan müşteri (%)',
      series: [
        { name: 'Ocak kohortu', data: [[0, 100], [1, 62], [2, 48], [3, 40], [4, 36], [5, 34], [6, 33]] },
        { name: 'Mart kohortu', data: [[0, 100], [1, 70], [2, 58], [3, 52], [4, 49], [5, 47], [6, 46]] },
        { name: 'Mayıs kohortu', data: [[0, 100], [1, 78], [2, 68], [3, 63], [4, 61]] },
      ],
      note: 'Her çizgi bir başlangıç ayının müşterileri. Yeni kohortların eğrisi daha yukarıdaysa iş doğru yönde gelişiyor demektir.',
    },
    pages: [
      {
        slug: 'kavram',
        title: 'Kavram',
        blocks: [
          { t: 'callout', kind: 'simple', title: 'Bir cümlede', text: 'Bütün müşterileri tek bir yığın olarak ortalamak yerine, aynı ay başlayanları bir sınıf gibi grupla ve her sınıfın zamanla ne kadarının kaldığını ayrı ayrı izle; böylece işinin gerçekten iyileşip iyileşmediğini görürsün.' },
          { t: 'callout', kind: 'ornek', title: 'Esnaftan örnek', text: 'Spor salonu işleten Merve Hanım\'ın üye sayısı her ay artıyor; dışarıdan her şey yolunda görünüyor. Ama Merve Hanım bir gün defteri farklı okuyor: Ocak\'ta kayıt olan 40 kişiyi ayrı bir liste yapıyor ve her ay kaçının hala geldiğini işaretliyor. Şubat kayıtlarına ayrı liste, Mart kayıtlarına ayrı liste. Tablo can sıkıcı bir gerçeği gösteriyor: her grubun yarısı üç ay içinde salonu bırakıyor; toplam üye sayısı sadece yeni kayıtlar eskilerin kaybını örttüğü için artıyormuş. Delikli kovaya su taşıyormuş. Merve Hanım üçüncü ayında olan üyelere özel ilgi programı başlatıyor: hoca görüşmesi, ölçüm, yeni program. Sonraki grupların listesinde üç ay barajını geçenlerin oranı gözle görülür artıyor. Toplam sayı bunu asla gösteremezdi; grupları ayrı izlemek gösterdi.' },
          { t: 'p', text: 'Kohort, aynı dönemde aynı deneyimi yaşamaya başlayan insan grubudur: Ocak ayında üye olanlar, kampanya haftasında ilk alışverişini yapanlar, yeni fiyattan sonra gelenler. Kohort analizi, bu grupların her birini kendi takvimi içinde izler: başlangıçtan 1 ay sonra, 2 ay sonra, 3 ay sonra ne kadarı hala müşteri? Böylece iki soru birden cevaplanır: müşteriler zamanla nasıl davranıyor ve yeni gelen gruplar eskilerden daha mı iyi tutunuyor?' },
          { t: 'h2', text: 'Toplam sayı neyi saklar, kohort neyi gösterir?' },
          { t: 'table', head: ['Soru', 'Toplam sayıya bakınca', 'Kohortlara bakınca'], rows: [
            ['Müşteri sayım artıyor mu?', 'Evet, her ay artıyor', 'Evet ama her grubun yarısı 3 ayda kaçıyor'],
            ['İşim iyileşiyor mu?', 'Belli değil, her şey karışık', 'Mayıs grubu Ocak grubundan daha sadıksa evet'],
            ['Kampanya işe yaradı mı?', 'Satış arttı ama kalıcı mı bilinmez', 'Kampanya kohortunun kalıcılığı ayrıca görünür'],
            ['Sorun nerede başlıyor?', 'Görünmez', 'Kaybın en çok hangi ayda olduğu eğride görünür'],
          ]},
          { t: 'p', text: 'Kohort analizinin en değerli çıktısı tutunma eğrisidir: yatay eksende başlangıçtan bu yana geçen süre, dikey eksende hala aktif olanların yüzdesi. Sağlıklı bir işte bu eğri bir yerde düzleşir; yani bir çekirdek müşteri kitlesi kalıcı hale gelir. Hiç düzleşmeyen, sıfıra doğru akan eğri ise delikli kova işaretidir: büyüme sadece yeni müşteri pompalamakla ayakta duruyordur ve pompa yavaşladığı gün iş küçülür.' },
          { t: 'p', text: 'İkinci değerli çıktı kohortlar arası karşılaştırmadır. Üründe, hizmette veya fiyatta yaptığın bir değişikliğin gerçek etkisi, değişiklikten sonra başlayan kohortların eğrisinde görünür. Yeni kohortların eğrisi eskilerin üzerine çıkıyorsa yaptığın şey işe yaramıştır; aynıysa yaramamıştır. Bu, işletmenin kendi kendine uyguladığı sürekli bir dürüstlük testidir.' },
        ],
      },
      {
        slug: 'uygulama',
        title: 'Nasıl Uygulanır',
        blocks: [
          { t: 'steps', items: [
            { title: 'Kohortu ve "aktif" tanımını belirle', text: 'Grupları neye göre keseceğini seç: çoğu iş için başlangıç ayı yeterlidir. Sonra "aktif müşteri" ne demek, yaz: bu ay ödeme yapan, bu ay en az bir alışveriş yapan, bu hafta kapıdan giren. Tanım baştan netleşmezse tablo herkese başka şey söyler.' },
            { title: 'Tabloyu kur: satırlar kohort, sütunlar geçen süre', text: 'Her satıra bir başlangıç dönemi yaz (Ocak, Şubat, Mart...), her sütuna geçen süreyi (1. ay, 2. ay, 3. ay...). Her hücreye, o kohortun o kadar süre sonra hala aktif olan yüzdesini yaz. Basit bir hesap tablosu yeter; abonelik yazılımlarının çoğu bu tabloyu hazır verir.' },
            { title: 'Önce aşağı, sonra yana oku', text: 'Bir satırı soldan sağa okuyunca bir grubun hayat hikayesini görürsün: kayıp en çok hangi ayda? Bir sütunu yukarıdan aşağı okuyunca gelişimi görürsün: yeni kohortlar aynı yaşta eskilerden daha mı iyi? Asıl kararlar bu iki okumadan çıkar.' },
            { title: 'En dik düşüşe müdahale et ve sonraki kohortlarda sonucu izle', text: 'Eğrinin en dik düştüğü nokta, müşterinin vazgeçtiği andır: çoğu işte ilk aydır. Oraya bir iyileştirme koy: ilk hafta araması, alışma desteği, üçüncü ay ilgisi. Sonra hükmü acele verme: iyileştirmeden sonra başlayan kohortların eğrisi yukarı taşındıysa müdahale işe yaramıştır.' },
          ]},
          { t: 'callout', kind: 'tip', title: 'İpucu', text: 'Tek bir sihirli sayı arıyorsan şuna bak: eğrinin düzleştiği seviye. "Müşterilerimin yüzde kaçı kalıcı hale geliyor?" sorusunun cevabı budur ve işinin sağlığını toplam ciro rakamından çok daha dürüst anlatır. Bu seviyeyi yükselten her iyileştirme, reklamdan daha ucuz büyümedir.' },
          { t: 'callout', kind: 'warn', title: 'Dikkat', text: 'İki tuzak vardır. Birincisi, taze kohortlar hakkında erken hüküm vermek: iki aylık bir grubun altıncı ayını bilemezsin; boş hücre boş bırakılır. İkincisi, küçük kohortlardan büyük sonuç çıkarmak: 8 kişilik bir grupta bir kişinin gidip gelmesi yüzdeleri savurur. Küçük işletme aylık yerine üç aylık kohort kullanarak grupları büyütebilir.' },
        ],
      },
      {
        slug: 'vaka',
        title: 'Gerçek Vaka & Fayda',
        blocks: [
          { t: 'callout', kind: 'case', title: 'Vaka: Abonelik ekonomisinin temel aleti', text: 'Kohort analizi bugün abonelik ve üyelikle çalışan işlerin standart aracıdır ve bu belgeli bir pratiktir. Netflix, Spotify gibi abonelik şirketleri ve mobil uygulama geliştiricileri, her ayın yeni üyelerini ayrı kohort olarak izler; yatırımcı sunumlarında ve sektör raporlarında "tutunma" (retention) eğrileri kohort bazında verilir. Bunun sebebi acı bir tecrübedir: 2010\'lu yıllarda hızla büyüyen pek çok uygulama, toplam kullanıcı sayısı artarken kohort tabloları çözüldüğünde her yeni grubun birkaç hafta içinde eridiğinin görülmesiyle değer kaybetti; sektörde bu duruma "delikli kova" büyümesi denir. Aynı yöntem yatırımcı tarafında da standarttır: girişim sermayesi fonları, bir abonelik işine yatırım yapmadan önce kohort tablosunu ister; çünkü toplam gelir büyüse bile kohort eğrileri düzleşmiyorsa büyümenin satın alınmış ve geçici olduğu oradan anlaşılır. Yöntemin kökeni ise iş dünyasından da eskidir: kohort kavramı, tıp ve nüfus bilimlerinde aynı dönemde doğan veya aynı etkene maruz kalan grupların yıllarca izlenmesinden gelir; işletmeler bu bilimsel izleme fikrini müşteri davranışına uyarlamıştır.' },
          { t: 'h2', text: 'Gerçek fayda' },
          { t: 'ul', items: [
            'Ortalamanın makyajını siler: toplam sayılar büyürken müşterilerin aslında kaçıyor olduğunu, kimse fark etmeden önce gösterir.',
            'Müdahale noktasını işaret eder: kaybın en çok hangi ayda ve hangi adımda yaşandığı görülür; iyileştirme tahminle değil hedefle yapılır.',
            'Değişikliklerin gerçek karnesini verir: yeni fiyatın, yeni hizmetin işe yarayıp yaramadığı, sonrasında başlayan kohortların eğrisinden dürüstçe okunur.',
          ]},
        ],
      },
    ],
  },
  {
    slug: 'duyarlilik-analizi',
    section: 'risk-guvenlik',
    title: 'Duyarlılık Analizi',
    question: 'Hesabımdaki hangi varsayım yanılırsa sonuç en çok sarsılır?',
    summary: 'Bir plan veya hesaptaki varsayımları tek tek oynatıp sonucun ne kadar değiştiğine bakan; en kırılgan varsayımı bulup dikkati ve önlemi oraya yönlendiren analiz yöntemi.',
    tags: ['varsayım', 'risk', 'senaryo', 'hesap'],
    areas: ['Yatırım değerlendirme', 'Fiyat ve maliyet planı', 'İş planı ve bütçe', 'Kredi ve borç kararları'],
    viz: {
      kind: 'bars',
      categories: ['Satış adedi (±%20)', 'Birim fiyat (±%10)', 'Hammadde maliyeti (±%15)', 'Kira (±%10)', 'Elektrik (±%20)'],
      series: [{ name: 'Yıllık kara etkisi (bin TL)', values: [340, 260, 180, 60, 25] }],
      yLabel: 'Sonucu oynatma gücü',
      note: 'Tornado (kasırga) görünümü: her varsayım makul aralığında oynatılır; en uzun çubuk, en kırılgan varsayımdır.',
    },
    pages: [
      {
        slug: 'kavram',
        title: 'Kavram',
        blocks: [
          { t: 'callout', kind: 'simple', title: 'Bir cümlede', text: 'Her plan varsayımlar üzerine kuruludur; duyarlılık analizi bu varsayımları teker teker "ya biraz fazla, ya biraz az olursa?" diye oynatır ve sonucun hangisine en çok tepki verdiğini bulur: planın kaderi işte o varsayıma bağlıdır.' },
          { t: 'callout', kind: 'ornek', title: 'Esnaftan örnek', text: 'Mobilyacı Veli Usta ikinci bir atölye açmayı planlıyor; kağıt üzerinde hesap güzel: yılda 200 takım satarsa yatırım iki yılda kendini çıkarıyor. Ama Veli Usta hesabı bir kez de şüpheyle yapıyor. Satış 200 değil 160 olursa? Geri dönüş dört yıla uzuyor; hesap satış adedine çok hassas. Sunta fiyatı yüzde 15 artarsa? Geri dönüş birkaç ay uzuyor; can sıkıcı ama yıkıcı değil. Kira yüzde 10 artarsa? Neredeyse hiç fark etmiyor. Demek ki planın kaderi tek soruya bağlı: "200 takımı gerçekten satabilir miyim?" Veli Usta yatırımdan önce o soruyu sağlamlaştırmaya gidiyor: iki büyük mağazayla ön anlaşma yapıyor, komşu ile bayilik konuşuyor. Duyarlılık analizi ona neyi dert etmeyeceğini de söyledi: kira pazarlığına haftalar harcamanın alemi yokmuş.' },
          { t: 'p', text: 'Her hesap, geleceğe dair tahminlerle yapılır: kaç adet satılır, fiyat ne olur, maliyet ne olur. Bu tahminlerin hepsi az ya da çok yanılacaktır; soru şudur: hangisinin yanılması planı yıkar, hangisininki sadece rahatsız eder? Duyarlılık analizi bunu ölçmenin sistemli yoludur: varsayımlar birer birer, makul bir aralıkta (mesela yüzde 10-20) oynatılır ve her birinin sonuca etkisi kaydedilir.' },
          { t: 'h2', text: 'Varsayımların iki boyutu' },
          { t: 'table', head: ['Varsayım tipi', 'Özelliği', 'Ne yapmalı?'], rows: [
            ['Hassas ve belirsiz', 'Sonucu çok oynatır, değeri de belirsiz', 'Asıl tehlike burada: araştır, sağlama al, önlem kur'],
            ['Hassas ama sağlam', 'Sonucu çok oynatır ama değeri iyi biliniyor', 'İzlemede tut; değişirse hemen fark et'],
            ['Duyarsız ve belirsiz', 'Belirsiz ama sonucu az etkiler', 'Kafaya takma; kaba tahmin yeter'],
            ['Duyarsız ve sağlam', 'Ne oynatır ne belirsiz', 'Vakit harcama'],
          ]},
          { t: 'p', text: 'Sonuçlar çoğu zaman tornado (kasırga) grafiği denen bir görselle özetlenir: her varsayım bir yatay çubuktur, çubuğun uzunluğu o varsayımın sonucu oynatma gücüdür ve çubuklar uzundan kısaya dizilir. Ortaya çıkan huni biçimi, ilk bakışta şunu söyler: planın kaderi genellikle iki üç varsayıma bağlıdır, gerisi ayrıntıdır.' },
          { t: 'p', text: 'Yöntemin asıl armağanı, dikkatin ekonomisidir. İnsan, planındaki her kalem için eşit endişelenmeye eğilimlidir; duyarlılık analizi endişeyi hak eden yere yönlendirir. Ayrıca "kırılma noktası" sorusunu sordurur: satış kaça düşerse başa baş bile olamam? Bu eşiği bilmek, plana bir emniyet şeridi çizmektir.' },
        ],
      },
      {
        slug: 'uygulama',
        title: 'Nasıl Uygulanır',
        blocks: [
          { t: 'steps', items: [
            { title: 'Hesabı ve varsayımları açıkça yaz', text: 'Önce temel hesabını kur: gelir, gider, kar veya geri dönüş süresi. Sonra bu hesabın içindeki her tahmini listele: satış adedi, fiyat, hammadde, kira, işçilik, vade. Yazılmamış varsayım test edilemez.' },
            { title: 'Her varsayıma makul bir oynama aralığı ver', text: 'Her kalem için kötümser ve iyimser bir değer belirle: "satış 160 ile 240 arasında olabilir" gibi. Aralığı hayalden değil dayanaktan al: geçmiş yıllar, sektör bilgisi, tedarikçiyle konuşma. Uçuk aralıklar analizi korku filmine çevirir.' },
            { title: 'Varsayımları TEKER TEKER oynat ve etkiyi kaydet', text: 'Bir varsayımı kötümser ve iyimser ucuna çek, diğer her şeyi sabit tut, sonucun ne kadar değiştiğini yaz. Sonra sıradakine geç. Sonunda etkileri büyükten küçüğe sırala: işte tornado tablosu. En üstteki bir-iki kalem, planının gerçek efendileridir.' },
            { title: 'Kırılganlara önlem kur, kararı ona göre ver', text: 'En hassas varsayımlar için üç şey yap: bilgiyi sağlamlaştır (ön anlaşma, deneme satışı), önlem kur (sabit fiyatlı sözleşme, yedek tedarikçi) ve kırılma eşiğini yaz ("satış 140\'ın altına inerse planı durdur"). Karar, en iyimser tabloya değil, kırılgan varsayımlar sarsıldığında da ayakta kalıp kalmadığına bakarak verilir.' },
          ]},
          { t: 'callout', kind: 'tip', title: 'İpucu', text: 'Kendine hep şu soruyu sor: "Bu planın batması için ne olması gerekir?" Duyarlılık analizinin en yalın hali budur. Cevap "satışın yüzde 40 düşmesi gerekir" ise planın sağlamdır; "satışın yüzde 10 düşmesi yeter" ise henüz plan değil, temenni yazmışsındır.' },
          { t: 'callout', kind: 'warn', title: 'Dikkat', text: 'İki uyarı: Birincisi, varsayımlar gerçek hayatta el ele oynar; kriz gelince hem satış düşer hem vade uzar. Teker teker oynatma başlangıçtır; en kritik iki-üç varsayımı bir de birlikte kötüleştirip "fırtına senaryosu"na bak. İkincisi, analiz çıkan sayıya aşık etmesin: amaç kesin bir rakam bulmak değil, planın nereden kırılacağını bilmek ve oraya önlem koymaktır.' },
        ],
      },
      {
        slug: 'vaka',
        title: 'Gerçek Vaka & Fayda',
        blocks: [
          { t: 'callout', kind: 'case', title: 'Vaka: Yatırım değerlendirmenin standart adımı', text: 'Duyarlılık analizi, kurumsal finans ve yatırım değerlendirmesinin belgeli, ders kitaplarına girmiş standart adımıdır. Bir şirket fabrika, maden, enerji santrali gibi büyük bir yatırımı değerlendirirken önce net bugünkü değer veya geri dönüş süresi hesaplanır; ama hiçbir ciddi yatırım komitesi tek bir "temel senaryo" rakamıyla yetinmez. Finans ders kitaplarının sermaye bütçelemesi bölümlerinde duyarlılık analizi zorunlu adım olarak anlatılır: satış hacmi, fiyat, maliyet ve iskonto oranı tek tek oynatılır, sonuçlar tornado grafiğiyle sunulur ve projenin hangi varsayıma bağımlı olduğu raporlanır. Aynı disiplin kamu tarafında da geçerlidir: Dünya Bankası ve benzeri kalkınma kuruluşları, destekledikleri projelerin ekonomik analizlerinde duyarlılık ve kırılma noktası (switching value) hesaplarını raporlama şartı olarak ister; ilaç ve sağlık ekonomisi çalışmalarında ise bir tedavinin maliyet-etkinlik sonucunun hangi varsayımlara duyarlı olduğunu göstermek yayın standardıdır. Yöntemin bu kadar yerleşmesinin sebebi yalındır: gelecek bilinemez, ama bir planın geleceğin hangi bilinmezine rehin olduğu bilinebilir; ve bu bilgi, çoğu zaman tahminin kendisinden daha değerlidir.' },
          { t: 'h2', text: 'Gerçek fayda' },
          { t: 'ul', items: [
            'Endişeyi doğru yere taşır: yüz kalemlik hesabın içinden gerçekten önemli iki-üç varsayımı ayıklar; enerji oraya harcanır.',
            'Planı temenni olmaktan çıkarır: kırılma eşikleri bilinen plan, sarsıntı geldiğinde ne zaman durulacağını da baştan söyler.',
            'Pazarlığa ve önleme yol gösterir: en hassas kalem hammaddeyse sabit fiyat sözleşmesi, satışsa ön anlaşma; önlem, en uzun çubuğa kurulur.',
          ]},
        ],
      },
    ],
  },
  {
    slug: 'hoshin-kanri',
    section: 'hedef-performans',
    title: 'Hoshin Kanri (Strateji Açılımı)',
    question: 'Yıllık büyük hedefim, her çalışanın günlük işine nasıl iner?',
    summary: 'Vizyonu yıllık hedeflere, yıllık hedefleri bölüm ve kişi hedeflerine katman katman indiren; her seviyede karşılıklı konuşma (catchball) ile hizalanan Japon strateji açılım sistemi.',
    tags: ['strateji açılımı', 'hizalama', 'hedef', 'yalın yönetim'],
    areas: ['Yıllık planlama', 'Ekip hedefleri', 'Strateji uygulama', 'Kurumsal hizalama'],
    viz: {
      kind: 'pyramid',
      levels: [
        { name: 'Vizyon (3-5 yıl): nereye varacağız?', value: 100 },
        { name: 'Yıllık atılım hedefleri (3-5 adet)', value: 75 },
        { name: 'Bölüm hedefleri ve projeleri', value: 50 },
        { name: 'Kişilerin günlük işleri ve ölçüleri', value: 25 },
      ],
      note: 'Her katman bir üsttekinden türetilir ve karşılıklı konuşarak (catchball) kararlaştırılır; yukarıdan aşağı emirle değil.',
    },
    pages: [
      {
        slug: 'kavram',
        title: 'Kavram',
        blocks: [
          { t: 'callout', kind: 'simple', title: 'Bir cümlede', text: 'Hoshin Kanri, büyük hedefi katman katman aşağı indiren bir merdivendir: birkaç yıllık vizyondan yıllık hedefler, yıllık hedeflerden bölüm hedefleri, onlardan da kişilerin günlük işleri türetilir; ve her katman yukarıdan dayatılmaz, karşılıklı konuşarak kararlaştırılır.' },
          { t: 'callout', kind: 'ornek', title: 'Esnaftan örnek', text: 'Üç şubeli pastane sahibi Rasim Bey her yıl Ocak ayında güzel hedefler koyuyor: "Bu yıl büyüyeceğiz, kaliteyi artıracağız." Ama Aralık gelince hiçbir şeyin değişmediğini görüyor; çünkü hedef vitrinde asılı kalıyor, tezgaha inmiyor. Bir yıl farklı yapıyor. Önce tek bir büyük hedef seçiyor: "İki yıl içinde şehrin en çok tavsiye edilen pastanesi olmak." Bunu yıllık hedefe çeviriyor: "Bu yıl şikayetleri yarıya indirmek ve teslimatta gecikmeyi bitirmek." Sonra her şube sorumlusuyla tek tek oturuyor: "Bu hedefin senin şubendeki karşılığı ne olur?" diye soruyor, dinliyor, birlikte karar veriyorlar. Merkez şube taze ürün saatlerini düzenliyor, sanayi şubesi teslimat aracına ikinci sefer koyuyor. Her ustanın panosunda artık kendi ölçüsü yazıyor: iade sayısı, teslim saati. Ay sonlarında kısa toplantıyla sayılara bakılıyor. Yıl sonunda hedef vitrinde değil, her tezgahın alışkanlığında yaşıyor.' },
          { t: 'p', text: 'Hoshin Kanri, Japonca "pusula yönetimi" anlamına gelir: hoshin pusula iğnesi, kanri yönetim demektir. Sorunu şudur: çoğu işletmede strateji ile günlük iş iki ayrı dünyada yaşar; yukarıda parlak hedefler, aşağıda her günkü koşturmaca. Hoshin, bu ikisini birbirine kilitler. Vizyondan günlük işe inen her katmanda aynı soru sorulur: "Üst hedefe ulaşmak için bu seviyede ne yapmalıyız ve bunu neyle ölçeriz?"' },
          { t: 'h2', text: 'Sistemin yapı taşları' },
          { t: 'table', head: ['Taş', 'Ne demek?', 'Püf noktası'], rows: [
            ['Atılım hedefleri', 'Yıl için seçilen 3-5 büyük hedef', 'Az olacak; yedi hedef, hedefsizliktir'],
            ['Catchball (top atma)', 'Hedeflerin katmanlar arası karşılıklı konuşulması', 'Aşağının fikri hedefi hem düzeltir hem sahiplendirir'],
            ['Ölçüler ve panolar', 'Her katmanın kendi göstergesi', 'Ölçüsü olmayan hedef, dilek olarak kalır'],
            ['Düzenli gözden geçirme', 'Aylık kısa hesap görme, yıllık büyük bakım', 'Sapma erken görülür, plan yolda düzeltilir'],
          ]},
          { t: 'p', text: 'Sistemin en özgün parçası catchball, yani top atma alışkanlığıdır: üst katman hedef önerisini aşağı atar, alt katman kendi gerçekleriyle yoğurup geri atar; birkaç gidiş gelişten sonra hedef hem iddialı hem yapılabilir hale gelir. Bu, sıradan hedef vermekten iki bakımdan farklıdır: hedef sahadan gelen bilgiyle akıllanır ve kararda payı olan insan, hedefi kendi hedefi sayar.' },
          { t: 'p', text: 'Hoshin, bir defalık planlama töreni değil yıllık bir döngüdür: hedefler konur, açılır, uygulanır, aylık gözden geçirilir ve yıl sonunda "ne öğrendik?" sorusuyla ertesi yılın planına ders taşınır. Bu yönüyle PUKÖ (Planla-Uygula-Kontrol et-Önlem al) döngüsünün, işletmenin bütününe uygulanmış halidir.' },
        ],
      },
      {
        slug: 'uygulama',
        title: 'Nasıl Uygulanır',
        blocks: [
          { t: 'steps', items: [
            { title: 'Vizyonu ve yıllık atılım hedeflerini seç', text: 'Önce birkaç yıllık yönü tek cümleyle yaz: nereye varmak istiyorsun? Sonra bu yıl için en fazla 3-5 atılım hedefi seç. Seçmek vazgeçmektir: her şeyi hedefleyen plan, hiçbir şeyi değiştirmez.' },
            { title: 'Hedefleri katmanlara aç, top atmayı ihmal etme', text: 'Her bölüm veya kişiyle oturup sor: "Bu hedefin senin işindeki karşılığı ne?" Öneriyi dinle, birlikte düzelt, karara bağla. Bu konuşma angarya değil, sistemin kalbidir: hem hedefi gerçekçileştirir hem sahiplenme yaratır.' },
            { title: 'Her katmana ölçü ve pano koy', text: 'Her hedefin bir sayısı ve o sayının görünür olduğu bir yeri olsun: duvarda pano, basit bir çizelge. Kişi kendi ölçüsünü kendisi işleyebilmeli. Ölçü, ceza aracı değil yol göstergesidir; bunu baştan söyle ve öyle kullan.' },
            { title: 'Aylık kısa gözden geçir, yıl sonunda ders çıkar', text: 'Her ay kısa bir toplantıyla sayılara bak: yolunda giden ne, sapan ne, sapmanın nedeni ne? Yıl sonunda büyük bakım yap: hangi hedefe ulaşıldı, hangisi neden tutmadı? Cevaplar ertesi yılın planına girer; döngü böyle kapanır.' },
          ]},
          { t: 'callout', kind: 'tip', title: 'İpucu', text: 'Hedef sayısını acımasızca az tut. Hoshin ustalarının kuralı şudur: her şey öncelikliyse hiçbir şey öncelikli değildir. Yıl için tek bir atılım hedefi bile, iyi açılmış ve her katmanda ölçülüyorsa, on maddelik süslü plandan daha çok şey değiştirir.' },
          { t: 'callout', kind: 'warn', title: 'Dikkat', text: 'En yaygın çöküş biçimi, Hoshin\'in kağıt törenine dönüşmesidir: formlar doldurulur, panolar asılır ama aylık gözden geçirme yapılmaz; plan Ocak\'ta doğar, Şubat\'ta unutulur. İkinci tehlike catchball\'u atlamaktır: yukarıdan dayatılan hedef, aşağıda "onların hedefi" olarak kalır ve sessizce sabote edilir. Konuşmaya vakit yoksa Hoshin\'e de vakit yok demektir.' },
        ],
      },
      {
        slug: 'vaka',
        title: 'Gerçek Vaka & Fayda',
        blocks: [
          { t: 'callout', kind: 'case', title: 'Vaka: Japon kalite hareketinden Toyota ve HP\'ye', text: 'Hoshin Kanri, 1960\'larda Japon kalite hareketinin içinde doğdu; Bridgestone ve benzeri şirketlerin kalite ödülü kazanan uygulamalarının incelenmesiyle biçimlendi ve Toyota başta olmak üzere Japon sanayisinde strateji uygulamanın standart yolu haline geldi. Toyota\'da yıllık hedefler bugün de hoshin süreciyle katmanlara açılır: şirket hedefi fabrika hedefine, o da bölüm ve ekip panolarındaki günlük ölçülere iner; yalın üretim literatürü bu zinciri ayrıntısıyla belgeler. Yöntemin Batı\'ya geçişinin en bilinen örneği Hewlett-Packard\'dır (HP): 1980\'lerde HP\'nin Japonya ortaklığı YHP, hoshin yönetimini uygulayarak Japonya\'nın en saygın kalite ödülü olan Deming Ödülü\'nü kazandı ve HP bu deneyimi şirket geneline taşıdı; oradan Procter & Gamble ve Xerox gibi şirketlere yayıldı. Bugün hoshin, yalın yönetim uygulayan kurumların standart aracıdır ve modern hedef sistemlerinin (OKR dahil) akrabası sayılır. Ortak ders şudur: stratejiyi yazmak kolaydır; fark, onu her insanın günlük işine ve ölçüsüne indirebilen sistemde ortaya çıkar.' },
          { t: 'h2', text: 'Gerçek fayda' },
          { t: 'ul', items: [
            'Stratejiyi vitrinden tezgaha indirir: yıllık hedef, her çalışanın günlük işinde bir karşılık ve bir ölçü bulur.',
            'Herkesi aynı yöne çevirir: bölümlerin birbirini bilmeden ters yönlere kürek çekmesi biter; kürekler aynı ritme girer.',
            'Sahiplenme yaratır: top atma konuşmalarıyla hedefe katkı veren insan, hedefi emir olarak değil kendi sözü olarak taşır.',
          ]},
        ],
      },
    ],
  },
  {
    slug: 'lean-canvas',
    section: 'proje-urun',
    title: 'Lean Canvas (Yalın Kanvas)',
    question: 'İş fikrimin en riskli varsayımlarını tek sayfada nasıl görürüm?',
    summary: 'Ash Maurya\'nın girişimler için uyarladığı tek sayfalık iş planı: dokuz kutuda sorun, çözüm, müşteri ve para dengesini kurar; dikkatini ortaklıklara değil en riskli varsayımlara çevirir.',
    tags: ['girişim', 'iş modeli', 'tek sayfa plan', 'yalın'],
    areas: ['Yeni iş fikri değerlendirme', 'Girişim kurma', 'Yeni ürün ve hizmet tasarımı', 'İş fikri sunumu'],
    viz: {
      kind: 'table',
      head: ['Kutu', 'Sorusu'],
      rows: [
        ['1. Sorun', 'Müşterinin canını sıkan en önemli 1-3 dert ne?'],
        ['2. Müşteri kesimleri', 'Bu derdi en yakıcı yaşayan kim? İlk müşterin (erken benimseyen) kim?'],
        ['3. Benzersiz değer önerisi', 'Tek cümlede: neden farklısın ve neden önemli?'],
        ['4. Çözüm', 'Her derde karşılık gelen en yalın çözüm ne?'],
        ['5. Kanallar', 'Müşteriye hangi yoldan ulaşacaksın?'],
        ['6. Gelir akışları', 'Para nereden ve nasıl gelecek?'],
        ['7. Maliyet yapısı', 'En büyük gider kalemleri ne?'],
        ['8. Anahtar ölçüler', 'İşin gittiğini hangi birkaç sayıdan anlayacaksın?'],
        ['9. Haksız avantaj', 'Kolayca kopyalanamayacak gücün ne?'],
      ],
      accentCol: 0,
      note: 'Doldurma sırası da anlamlıdır: önce sorun ve müşteri, en son haksız avantaj. Kanvas bir plan değil, test edilecek varsayımlar listesidir.',
    },
    pages: [
      {
        slug: 'kavram',
        title: 'Kavram',
        blocks: [
          { t: 'callout', kind: 'simple', title: 'Bir cümlede', text: 'Lean Canvas, iş fikrini kırk sayfalık plana gömmek yerine dokuz kutuluk tek sayfaya döker; ama asıl derdi özet değil dürüstlüktür: fikrinin hangi varsayımlara dayandığını ve en risklisinin hangisi olduğunu sana gösterir.' },
          { t: 'callout', kind: 'ornek', title: 'Esnaftan örnek', text: 'Aşçı Ferhat, işyerlerine sağlıklı öğle yemeği aboneliği kurmayı düşünüyor. Kafasında her şey parlak; ama kağıda dökünce tablo değişiyor. Sorun kutusuna yazıyor: "Ofis çalışanı her gün ne yiyeceğine karar vermekten yoruluyor, sağlıklı seçenek az ve pahalı." Müşteri kutusuna: "Sanayi bölgesindeki 10-50 kişilik firmalar; ilk müşterim, yemek derdini en çok çeken muhasebe büroları." Değer önerisine: "Aylık sabit fiyata, her gün kapıya gelen ev yemeği." Sonra zor kutular geliyor. Gelir: aylık abonelik. Maliyet: mutfak kirası, malzeme, dağıtım. Ve Ferhat en riskli varsayımını görüyor: "İnsanlar yemeğe AYLIK abone olur mu, yoksa günlük seçmek mi ister?" Bunu öğrenmek için mutfak kiralamaya gerek yok: iki haftalık deneme aboneliğini üç büroya satmayı deniyor. İki büro "aylık bağlanmayız ama haftalık oluruz" diyor. Kanvas güncelleniyor: abonelik haftalık olacak. Kırk sayfalık plan yazsaydı bu gerçeği belki de ilk yılın sonunda, parası bittiğinde öğrenecekti.' },
          { t: 'p', text: 'Lean Canvas, Ash Maurya\'nın, Alexander Osterwalder\'ın İş Modeli Kanvası\'nı (Business Model Canvas) erken aşama girişimlerin gerçeğine uyarlamasıyla doğdu. Maurya\'nın gözlemi şuydu: yeni bir girişimin en büyük riski ortak bulamamak ya da faaliyetleri yönetememek değil, kimsenin dert etmediği bir soruna çözüm üretmektir. Bu yüzden kurumsal kanvastaki dört kutuyu değiştirdi: kilit ortaklar yerine "Sorun", kilit faaliyetler yerine "Çözüm", kilit kaynaklar yerine "Anahtar ölçüler", müşteri ilişkileri yerine "Haksız avantaj" geldi. (İki kanvasın karşılaştırması için iş modeli kanvası sayfasına bakılabilir.)' },
          { t: 'h2', text: 'İki kanvasın farkı' },
          { t: 'table', head: ['Soru', 'İş Modeli Kanvası', 'Lean Canvas'], rows: [
            ['Kimin için?', 'Kurulu işletmenin modelini haritalamak', 'Yeni fikrin varsayımlarını test etmek'],
            ['Merkezinde ne var?', 'Modelin bütün parçalarının uyumu', 'Sorun-çözüm uyumu ve en riskli varsayım'],
            ['Ortaklar ve faaliyetler?', 'Ayrı kutuları var', 'Yerlerine sorun, çözüm, ölçü ve avantaj geldi'],
            ['Doldurunca ne olur?', 'Model anlaşılır', 'Test edilecek varsayım listesi çıkar'],
          ]},
          { t: 'p', text: 'Kanvasın ruhu şu cümlededir: doldurduğun her kutu bir gerçek değil, bir varsayımdır. "Müşterim şu, derdi bu, şu kadar öder" cümlelerinin hepsi, sahada doğrulanana kadar tahmindir. Lean Canvas bu tahminleri tek sayfada yan yana koyarak iki şey sağlar: fikrin bütününü bir bakışta görmek ve "önce hangisini test etmeliyim?" sorusuna cevap vermek. Kural: en riskli varsayım önce test edilir; çünkü fikir batacaksa en ucuz battığı yer orasıdır.' },
          { t: 'p', text: 'Tek sayfa olması tembellik değil, disiplindir: uzun iş planı yazarken insan kendini ikna eder; tek sayfaya sığdırırken ise seçmek, netleşmek ve zayıf noktayı görmek zorunda kalır. Kanvas yirmi dakikada doldurulur ve fikir öğrendikçe defalarca güncellenir; eskiyen sürümler, fikrin nereden nereye geldiğinin kaydıdır.' },
        ],
      },
      {
        slug: 'uygulama',
        title: 'Nasıl Uygulanır',
        blocks: [
          { t: 'steps', items: [
            { title: 'Sorun ve müşteriyle başla', text: 'İlk iki kutuyu birlikte doldur: müşterinin en yakıcı 1-3 derdi ne ve bu derdi en çok kim yaşıyor? "Herkes" bir müşteri kesimi değildir; ilk müşterin olacak dar ve ulaşılabilir grubu (erken benimseyenleri) ayrıca yaz. Bu iki kutu zayıfsa gerisini doldurmak boşunadır.' },
            { title: 'Değer önerisini ve çözümü yaz', text: 'Değer önerisi tek cümledir ve müşterinin diliyle yazılır: ne farkın var ve bu fark müşterinin hangi derdini bitiriyor? Çözüm kutusuna her soruna karşılık gelen en yalın çözümü yaz; özellik listesi değil, derdin ilacı.' },
            { title: 'Para ve ulaşım kutularını doldur: kanal, gelir, maliyet, ölçü, avantaj', text: 'Müşteriye hangi yoldan ulaşacaksın, para nereden gelecek, en büyük giderler ne, işin yürüdüğünü hangi birkaç sayıdan anlayacaksın? Haksız avantajı doldururken dürüst ol: çoğu fikrin başlangıçta haksız avantajı yoktur; boş kalması, yalan yazılmasından iyidir.' },
            { title: 'En riskli varsayımı seç ve en ucuz deneyle test et', text: 'Kanvasa bak ve sor: "Hangi kutu yanlışsa bu iş batar ve hangisinden en az eminim?" O varsayımı en ucuz yoldan test et: müşteri görüşmesi, ön satış, deneme teklifi. Öğrendiğini kanvasa işle, güncelle ve sıradaki riske geç. Kanvas yaşayan bir belgedir; ayda bir değil, her öğrenmede güncellenir.' },
          ]},
          { t: 'callout', kind: 'tip', title: 'İpucu', text: 'Kanvası doldurduktan sonra en güçlü test şudur: sorun kutusundaki dertleri, hedef müşterilerden beş kişiye fikrinden hiç bahsetmeden sor: "Şu konuda en son ne zaman zorlandın?" Dert onların ağzından kendiliğinden çıkmıyorsa, çözümünü anlatmaya hiç başlama; sorun kutun yanlış demektir.' },
          { t: 'callout', kind: 'warn', title: 'Dikkat', text: 'İki tuzak: Birincisi, kanvası bir kere doldurup duvara asmak; test edilmeyen kanvas, kırk sayfalık planın tek sayfalık versiyonudur, aynı hayal aynı kağıt. İkincisi, çözüm aşkı: insan kutulara çözümünü haklı çıkaracak cevaplar yazma eğilimindedir. Sırayı bozma: önce sorun ve müşteri doğrulanır, çözüm ondan sonra hak edilir.' },
        ],
      },
      {
        slug: 'vaka',
        title: 'Gerçek Vaka & Fayda',
        blocks: [
          { t: 'callout', kind: 'case', title: 'Vaka: Running Lean ve girişim dünyasındaki yeri', text: 'Lean Canvas\'ın hikayesi belgelidir: Ash Maurya, 2009-2010 yıllarında kendi girişimlerinde İş Modeli Kanvası\'nı kullanırken erken aşama girişimin asıl risklerini (yanlış sorun, yanlış müşteri) yeterince öne çıkarmadığını gördü ve kanvası blogunda adım adım uyarlayarak Lean Canvas\'ı yayınladı; yaklaşımını 2012\'de O\'Reilly\'den çıkan "Running Lean" kitabında sistemleştirdi. Kitap, Eric Ries\'in Yalın Girişim (Lean Startup) serisinin parçası olarak yayımlandı ve yalın girişim hareketinin temel el kitaplarından biri haline geldi; sonraki baskıları ve devam kitaplarıyla bugün de girişimcilik eğitiminin standart kaynakları arasındadır. Yöntemin kendisi de yaygın ve belgeli biçimde kullanılır: dünyadaki girişim hızlandırma programları, kuluçka merkezleri ve üniversitelerin girişimcilik dersleri, başvuran ekiplerden iş fikrini Lean Canvas formatında ister; Maurya\'nın kurduğu Leanstack platformu üzerinden milyonlarca kanvas oluşturulduğu şirket tarafından raporlanır. Yaygınlaşmasının sebebi pratik bir gerçektir: yatırımcı da mentor da kırk sayfalık planı okumaz; ama dokuz kutuya bakıp "en riskli varsayımın şu, onu test etmişsin ya da etmemişsin" demek dakikalar alır.' },
          { t: 'h2', text: 'Gerçek fayda' },
          { t: 'ul', items: [
            'Fikri kafadan kağıda indirir: dağınık hayal, yirmi dakikada bütün parçaları görünen tek sayfalık bir haritaya dönüşür.',
            'En riskli varsayımı işaret eder: para ve zaman, en ucuz öldürücü teste harcanır; batacak fikir küçükken ve ucuzken batar.',
            'Ortak dil kurar: ortakla, mentorla, yatırımcıyla tartışma "bence-sence" yerine kutu kutu, varsayım varsayım yürür.',
          ]},
        ],
      },
    ],
  },
  {
    slug: 'moscow-onceliklendirme',
    section: 'zaman-onceliklendirme',
    title: 'MoSCoW Önceliklendirme',
    question: 'Her şeye vakit yetmeyeceğine göre, neyi mutlaka yapmalı, neyi gözden çıkarmalıyım?',
    summary: 'İstekleri dört kesin sınıfa ayıran yöntem: Olmazsa olmaz (Must), Olmalı (Should), Olsa iyi olur (Could) ve Bu sefer olmayacak (Won\'t); en değerli kararı son sınıf verir.',
    tags: ['önceliklendirme', 'kapsam', 'proje', 'MoSCoW'],
    areas: ['Proje kapsamı belirleme', 'Ürün özellik listesi', 'Tadilat ve iş planlama', 'Sipariş ve talep yönetimi'],
    viz: {
      kind: 'funnel',
      levels: [
        { name: 'Must: olmazsa olmaz (yaklaşık %60 kaynak)', value: 100 },
        { name: 'Should: olmalı ama yolu var (%20)', value: 70 },
        { name: 'Could: olsa iyi olur (%20)', value: 40 },
        { name: 'Won\'t: bu sefer olmayacak (açıkça yazılır)', value: 15 },
      ],
      note: 'Sağlıklı dağılımda Must, işin tamamı olamaz; Won\'t listesi ise boş kalamaz. Won\'t, reddedilen değil ertelenen isteklerin dürüst listesidir.',
    },
    pages: [
      {
        slug: 'kavram',
        title: 'Kavram',
        blocks: [
          { t: 'callout', kind: 'simple', title: 'Bir cümlede', text: 'Elindeki bütün istekleri dört kutuya dağıt: bu iş onsuz teslim edilemez (Must), önemli ama geçici çözümü var (Should), olsa güzel olur (Could) ve bu sefer kesinlikle yapılmayacak (Won\'t); zaman daraldığında neyin feda edileceği baştan bellidir.' },
          { t: 'callout', kind: 'ornek', title: 'Şantiyeden örnek', text: 'Usta Cevdet bir dükkanın tadilatını üç haftada bitirmek zorunda; açılış günü değişmez çünkü davetiyeler basıldı. Mal sahibinin istek listesi ise uzun: elektrik, sıva, boya, zemin, vitrin, asma tavan, dekoratif duvar, bahçe düzenleme. Cevdet Usta listeyi mal sahibiyle birlikte dört kutuya ayırıyor. Must: elektrik, su, zemin, boya; bunlar olmadan dükkan açılamaz. Should: vitrin aydınlatması; önemli ama açılışta geçici spotlarla idare edilir. Could: asma tavan; vakit artarsa yapılır. Won\'t: dekoratif duvar ve bahçe; bu sefer yok, açılıştan sonraya. En kıymetli konuşma son kutuda yaşanıyor: mal sahibi "bahçe de olsun" diye tutturunca Cevdet Usta soruyor: "Olur; peki Must listesinden hangisini çıkaralım?" Soru, tartışmayı bitiriyor. Üç hafta sonra dükkan eksiksiz değil ama açılabilir halde, söz verilen günde teslim ediliyor; kimse sürprizle karşılaşmıyor çünkü neyin olmayacağı ilk gün yazılmıştı.' },
          { t: 'p', text: 'MoSCoW, adını dört sınıfın İngilizce baş harflerinden alır: Must have, Should have, Could have, Won\'t have (this time). Yöntemin çözdüğü dert evrenseldir: istekler her zaman kaynaklardan çoktur ve "hepsi önemli" denildiği sürece hiçbir şey gerçekten önemli değildir. MoSCoW, önceliği bulanık bir sıralama olmaktan çıkarıp kesin sınıflara ayırır; sınıflar arasındaki çizgiler tartışılarak çizilir ve yazılır.' },
          { t: 'h2', text: 'Dört sınıfın kesin tanımları' },
          { t: 'table', head: ['Sınıf', 'Turnusol sorusu', 'Örnek (dükkan tadilatı)'], rows: [
            ['Must (olmazsa olmaz)', 'Bu olmadan iş teslim edilebilir mi? Hayırsa Must', 'Elektrik, su, zemin'],
            ['Should (olmalı)', 'Önemli; ama acısa da geçici bir yolu var mı? Evetse Should', 'Vitrin aydınlatması (geçici spotla açılır)'],
            ['Could (olsa iyi)', 'Olmasa kimse işi eksik saymaz mı? Evetse Could', 'Asma tavan'],
            ['Won\'t (bu sefer değil)', 'Bu teslimde bilinçli olarak kapsam dışı mı? Evetse yaz', 'Bahçe düzenleme'],
          ]},
          { t: 'p', text: 'Yöntemin dehası son sınıftadır. Won\'t, isteği çöpe atmak değildir; "bu sefer olmayacak" diye açıkça yazmaktır. Bu yazı iki iş görür: beklentiyi baştan yönetir (teslim günü kimse "hani bahçe?" demez) ve Must listesini korur (her yeni istek, ancak başka bir şeyi Won\'t\'a iterek girebilir). Won\'t listesi boş olan bir planda aslında önceliklendirme yapılmamış demektir.' },
          { t: 'p', text: 'İkinci kritik nokta Must sınıfının disiplinidir. İnsanlar sevdikleri her isteği Must\'a doldurma eğilimindedir; oysa Must\'ın testi acımasızdır: "Bu olmazsa teslim iptal mi?" Cevap "iptal olmaz ama kötü olur" ise o istek Must değil Should\'dur. Yöntemin uygulandığı çevrelerde yaygın kural, Must işlerinin toplam kaynağın yüzde 60\'ını geçmemesidir; kalan pay, hem Should ve Could\'a hem de hayatın sürprizlerine nefes payıdır.' },
        ],
      },
      {
        slug: 'uygulama',
        title: 'Nasıl Uygulanır',
        blocks: [
          { t: 'steps', items: [
            { title: 'Bütün istekleri tek listeye dök', text: 'Kafalarda ve konuşmalarda dağınık duran her isteği yaz: özellikler, işler, talepler. Liste uzun olacak; korkma, amaç zaten uzunluğu görünür kılmak. Yazılmamış istek, teslim günü sürpriz olarak geri döner.' },
            { title: 'Her isteği turnusol sorularıyla sınıfla', text: 'İstek istek ilerle: "Bu olmadan teslim edilebilir mi?" Hayırsa Must. "Geçici yolu var mı?" Evetse Should. "Olmasa iş eksik sayılır mı?" Hayırsa Could. Sınıflamayı işi isteyenle birlikte yap; tek başına sınıflarsan teslim günü pazarlığı yeniden başlar.' },
            { title: 'Must yükünü ölç ve dengeyi kur', text: 'Must işlerinin toplam yükünü kabaca hesapla. Kaynağın yüzde 60\'ından fazlasını yiyorsa plan kırılgandır: ilk aksilikte Must\'lar bile tehlikeye girer. Bu durumda Must listesini turnusol sorusuyla yeniden ele; gerçek Must azdır.' },
            { title: 'Won\'t listesini yaz, ilan et ve değişiklikleri takasla yönet', text: 'Bu sefer yapılmayacakları açıkça yaz ve ilgili herkese duyur. Sonradan gelen her yeni istek için tek bir kural işlet: "Listeye girer; peki yerine ne çıkıyor?" Takassız ekleme, bütün sınıflandırmayı sessizce çürütür.' },
          ]},
          { t: 'callout', kind: 'tip', title: 'İpucu', text: 'Sınıflandırma toplantısında en güçlü cümle şudur: "Her şey Must olamaz; Must\'ları seçmek, Won\'t\'ları seçmeyi göze almaktır." Karşı taraf her isteğe Must diyorsa soruyu ters çevir: "Teslim gününde bunlardan sadece üçü hazır olabilseydi, hangilerini seçerdin?" Gerçek Must\'lar o cevapta ortaya çıkar.' },
          { t: 'callout', kind: 'warn', title: 'Dikkat', text: 'İki bozulma biçimi vardır. Birincisi Must enflasyonu: liste şişer, yüzde 60 kuralı aşılır ve plan daha ilk hafta çöker. İkincisi sessiz kapsam kayması: Won\'t listesindeki istekler "hazır elin değmişken" diye teker teker içeri sızar. İkisinin de ilacı aynıdır: sınıflar yazılıdır, değişiklik ancak açık takasla olur ve takası herkes görür.' },
        ],
      },
      {
        slug: 'vaka',
        title: 'Gerçek Vaka & Fayda',
        blocks: [
          { t: 'callout', kind: 'case', title: 'Vaka: DSDM ve sabit süreli projeler', text: 'MoSCoW tekniği belgeli bir kökene sahiptir: 1994\'te, yazılım projelerinin sürekli gecikmesine çare arayan bir grup kuruluşun oluşturduğu DSDM (Dynamic Systems Development Method) çerçevesinin içinde standartlaştı; tekniğin ilk halini Oracle bünyesinde çalışan danışman Dai Clegg geliştirmişti. DSDM\'in temel fikri, alışılmış proje mantığını tersine çevirmekti: kapsamı sabitleyip süreyi uzatmak yerine, süreyi ve bütçeyi sabitle, esneyecek olan kapsam olsun. Bu mantık ancak neyin feda edilebileceği baştan bilinirse çalışır; MoSCoW tam bu ihtiyacın aracıdır ve DSDM el kitaplarında Must işlerinin toplam eforun yaklaşık yüzde 60\'ını geçmemesi önerisiyle birlikte belgelenmiştir. Teknik bugün DSDM\'in çok ötesindedir: çevik (Agile) yazılım ekiplerinin ürün listelerinde, iş analizi standartlarında (BABOK) ve proje yönetimi eğitimlerinde standart önceliklendirme yöntemlerinden biri olarak yer alır. Kalıcılığının sırrı, en zor konuşmayı kurumsallaştırmasıdır: "Hayır, bu sefer olmayacak" cümlesi, kişisel bir ret olmaktan çıkıp yöntemin resmi bir kutusu haline gelir; ve o kutu sayesinde teslim günleri sürpriz mezarlığı olmaktan kurtulur.' },
          { t: 'h2', text: 'Gerçek fayda' },
          { t: 'ul', items: [
            'Teslim gününü korur: zaman daraldığında ne feda edilecek tartışması çıkmaz; cevap ilk gün yazılmıştır.',
            'Beklentiyi baştan yönetir: Won\'t listesi sayesinde müşteri ve ekip, neyin gelmeyeceğini bilerek yola çıkar; hayal kırıklığı sürprizden krize dönüşmez.',
            '"Hepsi önemli" kilidini kırar: turnusol soruları, duygusal öncelikleri yapısal önceliklere çevirir ve kaynak gerçekten kritik işe akar.',
          ]},
        ],
      },
    ],
  },
]
