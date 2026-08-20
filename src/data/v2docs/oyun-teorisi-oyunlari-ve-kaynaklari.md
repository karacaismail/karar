# **Oyun Teorisi, Evrimsel Algoritmalar ve Karmaşık Sistemler Tabanlı Yazılımsal Simülasyonlar ve Oyunlar Üzerine Kapsamlı Araştırma Raporu**

## **Yönetici Özeti**

Oyun Teorisi (Game Theory), Evrimsel Biyoloji ve Karmaşık Sistemler Teorisi'nin yazılım geliştirme süreçleriyle kesişimi, hem akademik araştırmalara hem de interaktif eğlence sektörüne hizmet eden benzersiz bir simülasyon türünün ortaya çıkmasını sağlamıştır. Bu rapor, kullanıcı tarafından talep edilen teorik çerçeveler (Oyun Teorisi vb.) temelinde geliştirilmiş mevcut yazılımsal oyunları, bu oyunların kaynak kodlarının erişilebilirliğini, teknik mimarilerini ve yayınlandıkları platformları derinlemesine incelemektedir.

Yapılan kapsamlı analiz sonucunda, bu alandaki yazılımların iki ana eksende toplandığı gözlemlenmiştir: Birinci grup, eğitim ve akademik araştırma odaklı, genellikle açık kaynak kodlu (Open Source) ve GitHub üzerinde barındırılan projelerden oluşmaktadır (Örn: *The Evolution of Trust*, *Thrive*, *The Powder Toy*). İkinci grup ise, yüksek prodüksiyon kalitesine sahip, karmaşık fizik ve grafik motorları kullanan, genellikle kapalı kaynak (Closed Source) ticari ürünlerden oluşmaktadır (Örn: *Species: ALRE*, *Noita*, *Eco*).

Rapor, Stratejik Oyun Teorisi, Evrimsel Algoritmalar, Hücresel Otomata (Cellular Automata) ve Sosyo-Ekonomik Simülasyonlar olmak üzere dört ana başlık altında sınıflandırılmış oyunları detaylandırmaktadır. Her bir başlık altında, oyunların teorik temelleri, yazılım mimarileri (kullanılan diller: C++, Python, Rust, C\#; motorlar: Unity, Godot, Özel Motorlar) ve erişim bağlantıları sunulmuştur. Ayrıca, kaynak kodların açık olmadığı durumlarda modlama (modding) topluluklarının rolü ve dolaylı kod erişim yöntemleri analiz edilmiştir.

## **1\. Giriş: Hesaplamalı Oyun Teorisi ve Simülasyonun Temelleri**

Oyun Teorisi, rasyonel karar vericiler arasındaki stratejik etkileşimlerin matematiksel modellerini inceleyen bir disiplindir. Geleneksel olarak ekonomi ve siyaset biliminde kullanılan bu teori, bilgisayar bilimlerinin gelişimiyle birlikte "Hesaplamalı Oyun Teorisi" (Computational Game Theory) ve "Algoritmik Oyun Teorisi" (Algorithmic Game Theory) gibi alt dallara ayrılmıştır. Yazılım tabanlı oyunlar, bu teorik modellerin statik matrislerden çıkarak dinamik, yinelemeli (iterative) ve mekansal (spatial) ortamlarda test edilmesine olanak tanır.

Bu raporda incelenen oyunlar, sadece birer eğlence aracı olmanın ötesinde, kullanıcıların veya araştırmacıların "in silico" (bilgisayar ortamında) deneyler yapmasını sağlayan laboratuvarlar olarak işlev görmektedir. Örneğin, "Tekrarlanan Mahkum İkilemi" (Iterated Prisoner's Dilemma) senaryoları, işbirliğinin evrimini anlamak için yazılımsal ajanlar (agents) üzerinden simüle edilmektedir. Benzer şekilde, genetik algoritmalar kullanan oyunlar, doğal seçilim ve mutasyon mekanizmalarını kodlayarak sanal canlıların (biomorphs) nesiller boyunca evrimleşmesini simüle eder.

### **1.1 Raporun Kapsamı ve Metodolojisi**

Rapor, aşağıdaki temel sorulara yanıt vermeyi amaçlamaktadır:

1. **Mevcut Oyunlar:** Hangi oyunlar doğrudan Oyun Teorisi veya ilgili karmaşık sistem teorilerini temel almaktadır?  
2. **Kod Erişimi:** Bu oyunların kaynak kodları açık mıdır? Açıksa hangi lisansla ve hangi depolarda (GitHub vb.) sunulmaktadır?  
3. **Platform Erişimi:** Kapalı kaynak kodlu oyunlara hangi platformlar (Steam, Itch.io, Web) üzerinden erişilebilir?  
4. **Teknik Derinlik:** Oyunların arkasındaki algoritmalar (Nash Dengesi, NEAT, Hücresel Otomata kuralları) nasıl işlemektedir?

## **2\. Stratejik Oyun Teorisi ve İnteraktif Simülasyonlar**

Bu kategori, doğrudan Nash Dengesi, Mahkum İkilemi, Pareto Verimliliği ve mekanizma tasarımı gibi klasik Oyun Teorisi kavramlarını modelleyen yazılımları içermektedir.

### **2.1 The Evolution of Trust (Güvenin Evrimi)**

Nicky Case tarafından geliştirilen *The Evolution of Trust*, Oyun Teorisi'nin eğitim amaçlı en etkili interaktif uygulamalarından biridir. Oyun, I. Dünya Savaşı sırasında siperlerde gerçekleşen "No Man's Land" barışından esinlenerek, güvenin ve işbirliğinin matematiksel temellerini araştırır.1

#### **2.1.1 Teorik Altyapı ve Oynanış Mekaniği**

Oyun, Robert Axelrod'un 1984 tarihli "The Evolution of Cooperation" (İşbirliğinin Evrimi) adlı kitabına dayanmaktadır. Kullanıcı, "Tekrarlanan Mahkum İkilemi" (Iterated Prisoner's Dilemma \- IPD) senaryosunda farklı stratejilere sahip ajanlarla karşılaşır. Simülasyon, "Sıfır Toplamlı Olmayan" (Non-Zero-Sum) oyunların dinamiklerini öğretir.

Simüle edilen stratejiler şunlardır:

* **Copycat (Taklitçi / Kısasa Kısas):** İlk hamlede işbirliği yapar, sonrasında rakibinin bir önceki hamlesini taklit eder (Tit-for-Tat).  
* **Always Cheater (Hep Hilekar):** Her zaman ihanet eder (Defect).  
* **Always Cooperator (Hep İşbirlikçi):** Her zaman işbirliği yapar.  
* **Grudger (Kin Güden):** İşbirliği yapar, ancak rakip bir kez ihanet ederse sonsuza kadar ihanet eder.  
* **Detective (Dedektif):** Rakibi analiz eder; önce işbirliği, hile, işbirliği, işbirliği yapar. Eğer rakip misilleme yaparsa Taklitçi gibi davranır, yapmazsa sömürmeye devam eder.

Simülasyonun en önemli yönü, "Evrimsel Kararlı Strateji" (Evolutionarily Stable Strategy \- ESS) kavramını görselleştirmesidir. Turnuvalar sonunda başarılı stratejiler popülasyonda çoğalırken, başarısız olanlar elenir. Ayrıca "Gürültü" (Noise) veya yanlış iletişim (miscommunication) değişkeni eklenerek, gerçek dünyadaki belirsizliklerin stratejiler üzerindeki etkisi (örneğin, Taklitçi'nin gürültülü ortamlarda sonsuz misilleme döngüsüne girmesi) gösterilir.

#### **2.1.2 Kaynak Kod ve Teknik Erişim**

Proje tamamen açık kaynaklıdır ve "Public Domain" (CC0 1.0 Universal) lisansı ile sunulmuştur. Bu, kodun herkes tarafından ticari amaçla dahi kullanılabileceği, değiştirilebileceği ve dağıtılabileceği anlamına gelir.

* **Kaynak Kod Deposu (GitHub):** https://github.com/ncase/trust 2  
* **Oynanabilir Web Adresi:** https://ncase.me/trust/ 1  
* **Teknik Mimari:** Oyun, modern web teknolojileri (HTML5, JavaScript) üzerine kuruludur.  
  * **Grafik:** PIXI.js kütüphanesi kullanılarak render edilmektedir.  
  * **Ses:** Howler.js ile ses efektleri yönetilmektedir.  
  * **Simülasyon Mantığı:** Kod tabanı, stratejilerin birer JavaScript nesnesi olarak tanımlandığı modüler bir yapıya sahiptir. Geliştiriciler, strategies.js benzeri dosyalar üzerinde kendi algoritmalarını tanımlayarak yeni ajanlar ekleyebilirler.  
* **Topluluk Katkıları:** Açık kaynak yapısı sayesinde oyun, topluluk tarafından Türkçe dahil olmak üzere 30'dan fazla dile çevrilmiştir.2

### **2.2 Parable of the Polygons (Çokgenler Meseli)**

Vi Hart ve Nicky Case tarafından geliştirilen bu simülasyon, Nobel ödüllü ekonomist Thomas Schelling'in "Dinamik Segregasyon Modeli"ni (Schelling's Model of Segregation) temel alır.

#### **2.2.1 Teorik Altyapı**

Oyun, bireysel düzeydeki küçük önyargıların (mikro-motifler), toplumsal düzeyde nasıl büyük bir ayrışmaya (makro-davranış) yol açtığını gösterir. Şekiller (Üçgenler ve Kareler), "komşularımın en az %33'ü benim gibi olsun" şeklinde son derece ılımlı bir tercihe sahip olsalar bile, zamanla sistemin tamamının segrege (ayrışmış) olduğu bir denge durumu ortaya çıkar. Bu, karmaşık sistemlerde "Belirip Çıkma" (Emergence) kavramının en net örneklerinden biridir.3

#### **2.2.2 Kaynak Kod ve Teknik Erişim**

Bu proje de *The Evolution of Trust* gibi tamamen açık kaynaklıdır ve CC0 lisansı ile korunmaktadır.

* **Kaynak Kod Deposu (GitHub):** https://github.com/ncase/polygons 4  
* **Oynanabilir Web Adresi:** https://ncase.me/polygons 4  
* **Erişilebilirlik:** Kod tabanı, eğitimcilerin ve sosyologların modeli kendi parametreleriyle (örneğin, mahalle büyüklüğü veya hoşgörü eşiği) test etmelerine olanak tanır.

### **2.3 OpenSpiel (Google DeepMind)**

Google DeepMind tarafından geliştirilen OpenSpiel, tüketiciye yönelik bir "oyun"dan ziyade, oyun teorisi algoritmaları geliştirmek için kullanılan bir araştırma çerçevesidir (framework).

#### **2.3.1 Kapsam ve Kullanım**

OpenSpiel, n-oyunculu, sıfır toplamlı (zero-sum), işbirlikçi (cooperative) ve genel toplamlı oyunları destekler. İçerisinde Matris Oyunları (Mahkum İkilemi, Taş-Kağıt-Makas), Gridworld oyunları ve açık artırma modelleri gibi birçok standart oyun teorisi problemi hazır olarak sunulmaktadır.

#### **2.3.2 Kaynak Kod ve Erişim**

* **Kaynak Kod Deposu (GitHub):** https://github.com/google-deepmind/open\_spiel 6  
* **Yazılım Dili:** C++ çekirdeği üzerine Python API (arayüzü) ile inşa edilmiştir.  
* **Algoritmalar:** Proje, Counterfactual Regret Minimization (CFR), AlphaZero ve Monte Carlo Tree Search (MCTS) gibi gelişmiş algoritmaların referans uygulamalarını içerir. Bu, araştırmacıların kendi oyun teorisi ajanlarını (AI agents) geliştirmeleri için endüstri standardı bir platformdur.

### **2.4 Axelrod Python Kütüphanesi**

Robert Axelrod'un ünlü turnuvasını dijital ortamda yeniden yaratan ve genişleten bir araştırma projesidir.

* **Kaynak Kod ve Dokümantasyon:** https://axelrod.readthedocs.io/ ve GitHub üzerinde Axelrod-Python/Axelrod.7  
* **İşlevi:** Kullanıcıların Python dilinde yazdıkları stratejileri (kod parçacıklarını) birbirleriyle yarıştırarak, hangi stratejinin evrimsel olarak daha başarılı olduğunu analiz etmelerini sağlar. Kütüphane içerisinde 200'den fazla önceden tanımlanmış strateji bulunmaktadır.

## **3\. Evrimsel Simülasyon ve Genetik Algoritmalar**

Bu kategori, canlıların evrimsel süreçlerini (mutasyon, doğal seçilim, adaptasyon) Genetik Algoritmalar (Genetic Algorithms \- GA) ve Yapay Sinir Ağları (Artificial Neural Networks \- ANN) kullanarak simüle eden oyunları içerir.

### **3.1 Thrive**

*Thrive*, tek bir hücreden uzay çağına kadar uzanan bir canlı türünün evrimini simüle etmeyi amaçlayan, bilimsel doğruluk odaklı açık kaynaklı bir oyundur. 2008 yılında piyasaya sürülen *Spore* oyununun "hücre" evresinin çok daha derinlikli ve gerçekçi bir versiyonu olarak başlamıştır.

#### **3.1.1 Teknik Mimari ve Geliştirme Süreci**

Oyun, hücre biyolojisini detaylı bir şekilde modeller. Oyuncular, hücrelerine mitokondri, kloroplast, kamçı gibi organeller ekleyerek ATP (enerji) üretimini ve hayatta kalma şansını optimize ederler.

* **Motor Değişimi:** *Thrive*, başlangıçta özel bir C++ motoru kullanırken, geliştirme sürecini hızlandırmak ve topluluk katkısını artırmak amacıyla **Godot Oyun Motoru**'na (C\# dili ile) geçiş yapmıştır. Bu geçiş, projenin açık kaynak dünyasında daha erişilebilir olmasını sağlamıştır.8  
* **Auto-Evo Algoritması:** Oyun, oyuncunun hücresi dışındaki diğer türlerin de arka planda evrimleşmesini sağlayan "Auto-Evo" (Otomatik Evrim) adında karmaşık bir algoritma kullanır. Bu algoritma, türlerin fitness (uygunluk) değerlerini hesaplayarak ekosistemin dinamik kalmasını sağlar.

#### **3.1.2 Kaynak Kod ve Erişim**

*Thrive*, GNU Genel Kamu Lisansı (GPL) ile tamamen açık kaynaktır.

* **Ana Kod Deposu (GitHub):** https://github.com/Revolutionary-Games/Thrive 8  
* **Launcher (Başlatıcı) Deposu:** https://github.com/Revolutionary-Games/Thrive-Launcher 10  
* **Steam Sayfası (Ücretsiz):** https://store.steampowered.com/app/1779200/Thrive/ 11  
* **Resmi Web Sitesi:** https://revolutionarygamesstudio.com/ 11

GitHub istatistikleri, projenin binlerce "commit" (kod güncellemesi) ve yüzlerce katkıcı ile oldukça aktif olduğunu göstermektedir.8

### **3.2 Species: Artificial Life, Real Evolution (ALRE)**

*Species: ALRE*, evrimi "sıfırdan" simüle eden bir kum havuzu (sandbox) oyunudur. Oyunda önceden tanımlanmış yaratıklar yoktur; her yaratık, genetik kodunun (DNA) fiziksel bir tezahürüdür.

#### **3.2.1 Simülasyon Derinliği**

Oyun, omurgalı canlıların evrimine odaklanır. Yaratıkların uzuv uzunlukları, metabolizma hızları, beslenme türleri (etçil/otçul) tamamen mutasyon ve doğal seçilim yoluyla belirlenir. Oyuncu, bir "tanrı" rolünde sıcaklığı artırarak, deniz seviyesini yükselterek veya sadece gözlemleyerek evrimsel baskı (evolutionary pressure) oluşturur. Türleşme (Speciation), coğrafi izolasyon ve adaptif radyasyon gibi biyolojik fenomenler simülasyon içinde kendiliğinden (emergent) gerçekleşir.12

#### **3.2.2 Kaynak Kod Durumu ve Erişim**

*Species: ALRE*, açık kaynaklı **değildir**. Ticari bir ürün olarak geliştirilmektedir.

* **Steam Mağaza Sayfası:** https://store.steampowered.com/app/774541/Species\_Artificial\_Life\_Real\_Evolution/ 12  
* **Geliştirici Blogu:** https://speciesdevblog.wordpress.com/ 13  
* **Modlama Desteği:** Oyunun motoru kapalı kaynak olsa da (özel C++ / OpenGL motoru), geliştirici topluluk için dil paketleri ve bazı modlama araçları sunmaktadır. Ancak çekirdek evrim algoritmaları gizlidir.

### **3.3 The Bibites**

*The Bibites*, "Neuroevolution" (Sinirsel Evrim) kavramına odaklanan bir projedir. Canlılar ("Bibites"), sadece fiziksel özelliklerini değil, aynı zamanda davranışlarını kontrol eden beyinlerini de evrimleştirirler.

#### **3.3.1 Nöral Ağ ve Davranışsal Evrim**

Oyun, **NEAT (Neuroevolution of Augmenting Topologies)** benzeri bir algoritma kullanır. Bir Bibite'in beyni; girdiler (göz, feromon sensörü) ve çıktılar (ileri git, dön, yumurtla, saldır) arasındaki bağlantılardan oluşur. Doğal seçilim süreci, bu nöral bağlantıların ağırlıklarını ve yapısını değiştirir. Böylece, "yiyecek görünce yaklaş" veya "avcı görünce kaç" gibi davranışlar programlanmadan, kendiliğinden öğrenilir.

#### **3.3.2 Kaynak Kod ve Erişim**

Oyunun kendisi kapalı kaynaklıdır ve Unity motoru ile geliştirilmiştir. Ancak geliştirici, simülasyon verilerini analiz etmek için açık kaynaklı araçlar sunmaktadır.

* **İndirme Platformu (Itch.io):** https://thebibites.itch.io/the-bibites 14  
* **Steam Sayfası:** https://store.steampowered.com/app/2305360/The\_Bibites\_Digital\_Life/ (Referans 15)  
* **Topluluk Kod Depoları:**  
  * *Bibite Scripts (Python):* Kayıt dosyalarını (save files) analiz etmek ve genetik veriyi manipüle etmek için kullanılan Python betikleri. https://github.com/jlafayette/bibite-scripts.16  
  * *Paylaşılan İçerik:* https://github.com/TheBibites/Bibites\_Shared\_Content.17

### **3.4 The Sapling**

*The Sapling*, hem bitkilerin hem de hayvanların evrimini simüle eden, özellikle bitki biyolojisine (kök yapısı, yaprak yoğunluğu, güneş ışığı rekabeti) odaklanan bir başka simülasyon oyunudur.

* **Platform (Steam):** https://store.steampowered.com/app/997380/The\_Sapling/ 18  
* **Platform (Itch.io):** https://woseseltops.itch.io/thesapling  
* **Durum:** Kapalı kaynak kodlu, ticari bir oyundur. Ancak prosedürel animasyon ve genetik sistemleri üzerine deneysel bir yapıya sahiptir.

### **3.5 Genesis**

Biyoloji öğrencisi tarafından geliştirilen, daha küçük çaplı ancak tamamen açık kaynaklı bir evrim simülatörüdür.

* **Kaynak Kod (GitHub):** https://github.com/Bukkbeek/genesis 20  
* **Platform (Itch.io):** https://bukkbeek.itch.io/genesis 20  
* **Özellik:** Godot motoru ile yapılmıştır ve 5 temel özelliğin (hız, boyut, enerji vb.) kalıtımını gerçek zamanlı gösterir.

## **4\. Hücresel Otomata, Fizik Tabanlı Simülasyonlar ve Yapay Yaşam**

Bu bölüm, basit yerel kuralların karmaşık global davranışlara yol açtığı sistemleri (Cellular Automata \- CA) ve bu sistemlerin fizik motorlarıyla birleşimini inceler.

### **4.1 Conway's Game of Life ve Golly**

John Conway'in "Hayat Oyunu" (Game of Life), bu alanın en temel örneğidir. Hücreler, komşu sayılarına göre yaşar veya ölür. Basitliğine rağmen "Turing Complete" (Turing Tam) bir yapıdır, yani içinde teorik olarak her türlü hesaplama yapılabilir.

* **Golly (En Kapsamlı Simülatör):** Açık kaynaklı, platformlar arası (Windows, Mac, Linux, Android) bir CA simülatörüdür. HashLife algoritması sayesinde trilyonlarca nesli saniyeler içinde hesaplayabilir.  
  * **Resmi Site ve İndirme:** https://golly.sourceforge.io/ 22  
  * **Kaynak Kod:** SourceForge ve GitHub üzerinde mevcuttur (GPL Lisansı).

### **4.2 Lenia: Sürekli Hücresel Otomata (Continuous Cellular Automata)**

*Lenia*, Game of Life'ın matematiksel bir genellemesidir. Ayrık (0 veya 1\) durumlar yerine sürekli (0.0 \- 1.0 arası) değerler, sürekli uzay ve sürekli zaman kullanır. Sonuçta ortaya çıkan formlar, biyolojik hücrelere, amiplere veya yumuşak dokulu canlılara benzeyen, akışkan hareketlere sahip "yapay yaşam formları"dır.

* **Teorik Önem:** Lenia, yapay yaşam (ALife) ile derin öğrenme (Deep Learning) arasındaki boşluğu doldurur. Kuralları diferansiyel denklemlerle ifade edilir.  
* **Kaynak Kod (GitHub):** https://github.com/Chakazul/Lenia 23  
* **Python Uygulaması:** https://github.com/scienceetonnante/lenia 26  
* **Web Versiyonu:** https://chakazul.github.io/lenia.html 25

### **4.3 Fizik Tabanlı Otomata: Falling Sand Games**

Bu oyunlar, her pikselin bir materyali (kum, su, ateş, asit, barut) temsil ettiği ve fizik kurallarına (yerçekimi, yoğunluk, ısı iletimi) göre etkileşime girdiği simülasyonlardır.

#### **4.3.1 The Powder Toy**

Bu türün açık kaynaklı amiral gemisidir. Hava basıncı, hız ve ısı simülasyonu içerir.

* **Kaynak Kod (GitHub):** https://github.com/The-Powder-Toy/The-Powder-Toy 27  
* **Dil:** C++ ve SDL kütüphanesi kullanılarak yazılmıştır. Yüksek performanslıdır.  
* **Kullanım:** Nükleer reaktör tasarımı, elektronik devre simülasyonu ve patlayıcı testleri için kullanılır.

#### **4.3.2 Noita**

*Noita*, "Falling Sand" mekaniğini ticari bir aksiyon-roguelite oyununa dönüştüren en başarılı örnektir. Oyundaki **her piksel simüle edilir**.

* **Platform (Steam):** https://store.steampowered.com/app/881100/Noita/ 29  
* **Teknik Yapı:** Geliştiriciler (Nolla Games), bu yükü kaldırabilmek için "Falling Everything Engine" adında özel, yüksek optimizasyonlu bir motor yazmıştır. Oyun kapalı kaynaklıdır, ancak GDC sunumlarında teknik detaylar paylaşılmıştır.29  
* **Açık Kaynak Alternatifleri:**  
  * *Sandspiel:* Rust ve WebAssembly (WASM) ile tarayıcıda çalışan, yüksek performanslı bir klondur. **Kod:** https://github.com/MaxBittker/sandspiel.31  
  * *Falling Sand Survival:* Noita motorunu yeniden yapma girişimidir (C++). **Kod:** https://github.com/PieKing1215/FallingSandSurvival.33

#### **4.3.3 Automata Ecosystem**

GPU üzerinde çalışan ve milyonlarca hücreyi aynı anda simüle edebilen bir hücresel otomata oyunudur. Simülasyonu ses üretimi (prosedürel müzik) ile birleştirir.

* **Platform (Steam):** https://store.steampowered.com/app/1966940/Automata\_Ecosystem\_\_Cellular\_Automata\_Simulation/ 34  
* **Durum:** Kapalı kaynak, ticari.

### **4.4 Particle Life**

Parçacıkların renklerine göre birbirini itip çektiği basit bir kural setine dayanır. (Örn: Kırmızı Yeşili çeker, Yeşil Kırmızıdan kaçar). Bu basit kurallardan "hücre benzeri" karmaşık yapılar belirir.

* **Kaynak Kod (GitHub):** https://github.com/hunar4321/particle-life 36 (Python, C++, JS versiyonları mevcuttur).  
* **Web Simülasyonu:** https://particle-life.com/ 37  
* **Kod Yapısı:** Temel simülasyon mantığı genellikle 100 satırdan az kod ile yazılabilir, bu da onu eğitim için mükemmel kılar.38

### **4.5 Creatures Serisi ve OpenC2E**

1990'ların sonunda çıkan *Creatures* serisi, yapay yaşam tarihindeki en önemli ticari ürünlerden biridir. "Norns" adı verilen yaratıklar, genetik kodlarına, biyokimyalarına (kandaki hormon seviyeleri) ve sinir ağlarına göre davranır.

* **OpenC2E (Open Creatures 2 Engine):** Orijinal oyunların motorunu modern sistemlerde çalıştırmak için geliştirilen açık kaynaklı bir projedir.  
* **Kaynak Kod (GitHub):** https://github.com/openc2e/openc2e 39  
* **Önemi:** Orijinal oyunlar "terk edilmiş" (abandonware) statüsüne yaklaşsa da, bu motor projesi sayesinde biyokimyasal yapay yaşam algoritmaları incelenebilmektedir.

## **5\. Sosyal, Ekonomik ve Artımlı (Incremental) Simülasyonlar**

Bu kategori, Oyun Teorisi'nin ekonomi ve toplum mühendisliği üzerindeki etkilerini inceleyen oyunları kapsar.

### **5.1 Eco**

*Eco*, oyuncuların bir medeniyet kurarak yaklaşan bir meteoru durdurmaya çalıştığı, ancak bunu yaparken ekosistemi yok etmemeleri gereken çok oyunculu bir hayatta kalma oyunudur.

* **Teori (Tragedy of the Commons):** Oyun, "Ortak Malların Trajedisi"ni simüle eder. Oyuncular, kirliliği önlemek için kendi ekonomik çıkarlarını sınırlayan yasalar çıkarmak ve oylamak zorundadır. Bu, "Sosyal Tercih Teorisi" (Social Choice Theory) ve yönetişim mekanizmaları için bir laboratuvar ortamı yaratır.  
* **Platform (Web/Steam):** https://play.eco/ 40 ve https://store.steampowered.com/app/382310/Eco/.41  
* **Kod Erişimi:** Kapalı kaynak (Unity/C\#). Ancak oyun, mod geliştiricileri için çok geniş bir API sunar ve sunucu tarafı kodlarının bir kısmı incelenebilir.

### **5.2 Universal Paperclips**

Frank Lantz tarafından tasarlanan bu oyun, yapay zeka güvenliği alanındaki "Ataş Maksimizasyonu" (Paperclip Maximizer) düşünce deneyini uygular. Bir yapay zeka olarak başlayan oyuncu, evrendeki tüm maddeyi ataşa dönüştürene kadar durmaz.

* **Teorik Kavram:** "Araçsal Yakınsama" (Instrumental Convergence) tezini işler. Bir yapay zeka, nihai hedefi ne olursa olsun (ataş yapmak), bu hedefe ulaşmak için önce hayatta kalmaya, kaynak toplamaya ve bilişsel kapasitesini artırmaya çalışacaktır.  
* **Oynanabilir Adres:** https://www.decisionproblem.com/paperclips/ 42  
* **Kod Erişimi:** Oyun tarayıcı tabanlıdır ve JavaScript kodları istemci tarafında (Client-side) çalışır, dolayısıyla tarayıcı üzerinden görüntülenebilir. Ayrıca GitHub üzerinde analiz amaçlı yansılar (mirrors) bulunmaktadır: https://github.com/TalentPath/UniversalPaperclips.43

### **5.3 Cell to Singularity**

Evrimi ve medeniyet tarihini anlatan popüler bir "tıklama" (clicker/idle) oyunudur.

* **Platform (Steam/Mobil):** https://store.steampowered.com/app/977400/Cell\_to\_Singularity\_\_Evolution\_Never\_Ends/ 44  
* **Durum:** Kapalı kaynak (Unity). Oyun, evrimsel süreçleri logaritmik bir ölçekte basitleştirerek sunar ve eğitim amaçlıdır.

## **6\. Teknik Analiz ve Karşılaştırmalı Tablo**

Yapılan analiz, oyunların teknik altyapılarında belirli kalıplar olduğunu göstermektedir:

* **Yüksek Performans Gereksinimi:** *Species*, *Noita* ve *Powder Toy* gibi her pikselin veya ajanın simüle edildiği oyunlar, genellikle **C++** ve **Özel Motorlar** kullanır. Unity veya Godot gibi genel motorlar, milyonlarca parçacığı yönetmekte (standart yöntemlerle) yetersiz kalabilir.  
* **Erişilebilirlik:** *Evolution of Trust* ve *Sandspiel* gibi projeler, WebGL ve WASM teknolojilerini kullanarak tarayıcı üzerinden anında erişim sağlar, bu da eğitim materyali olarak yayılmalarını kolaylaştırır.  
* **Açık Kaynak Stratejisi:** *Thrive*, Godot motoruna geçerek topluluk katkısını artırmıştır. Bu, açık kaynak oyun geliştirmede "erişilebilir araç kullanmanın" önemini gösterir.

### **6.1 Oyun ve Kod Kaynakları Özet Tablosu**

Aşağıdaki tablo, raporda bahsedilen oyunların erişim bilgilerini özetlemektedir:

| Oyun / Simülasyon Adı | Temel Teori / Konu | Lisans Durumu | Kaynak Kod / Platform URL | Kullanılan Teknoloji |
| :---- | :---- | :---- | :---- | :---- |
| **The Evolution of Trust** | Oyun Teorisi (IPD), Nash Dengesi | Açık (CC0) | [GitHub](https://github.com/ncase/trust) | JavaScript, PIXI.js |
| **Parable of the Polygons** | Schelling Segregasyon Modeli | Açık (CC0) | [GitHub](https://github.com/ncase/polygons) | JavaScript |
| **Thrive** | Evrimsel Biyoloji, Hücre Simülasyonu | Açık (GPL) | [GitHub](https://github.com/Revolutionary-Games/Thrive) | C\#, Godot Motoru |
| **Species: ALRE** | Doğal Seçilim, Omurgalı Evrimi | Kapalı (Ticari) | (https://store.steampowered.com/app/774541/) | C++, Özel Motor |
| **The Powder Toy** | Fizik, Hücresel Otomata | Açık (GPL) | [GitHub](https://github.com/The-Powder-Toy/The-Powder-Toy) | C++, SDL |
| **Noita** | Piksel Fizik Simülasyonu | Kapalı (Ticari) | (https://store.steampowered.com/app/881100/) | C++, Falling Everything Engine |
| **Lenia** | Sürekli Hücresel Otomata | Açık (MIT) | [GitHub](https://github.com/Chakazul/Lenia) | Python, JavaScript |
| **OpenSpiel** | Oyun Teorisi Araştırma, RL | Açık (Apache) | [GitHub](https://github.com/google-deepmind/open_spiel) | C++, Python |
| **The Bibites** | Nöral Evrim (NEAT) | Kapalı\* | [Itch.io](https://thebibites.itch.io/the-bibites) | C\#, Unity (\*Kod kapalı, araçlar açık) |
| **Eco** | Ekonomi, Ekoloji, Yönetişim | Kapalı (Ticari) | (https://play.eco/) | C\#, Unity |
| **Universal Paperclips** | Yapay Zeka Güvenliği | Kapalı\* | (https://www.decisionproblem.com/paperclips/) | JavaScript (\*Tarayıcıda görüntülenebilir) |
| **Particle Life** | Beliren Davranış (Emergence) | Açık (MIT) | [GitHub](https://github.com/hunar4321/particle-life) | Python, C++ |
| **Sandspiel** | Hücresel Otomata | Açık (MIT) | [GitHub](https://github.com/MaxBittker/sandspiel) | Rust, WebAssembly |
| **OpenC2E** | Yapay Yaşam Motoru (Creatures) | Açık (GPL) | [GitHub](https://github.com/openc2e/openc2e) | C++ |

## **7\. Sonuç**

Oyun Teorisi ve ilgili karmaşık sistemlerin yazılımsal uygulamaları, teorik bilginin somut deneyime dönüştürülmesinde kritik bir rol oynamaktadır. Araştırma göstermektedir ki, bu alandaki yazılımlar sadece "oyun" değil, aynı zamanda yaşayan matematiksel modellerdir.

Kullanıcılar için:

* **Öğrenme ve Deney:** *The Evolution of Trust* ve *Parable of the Polygons*, teorik kavramları anlamak için en erişilebilir ve açık kaynaklı başlangıç noktalarıdır.  
* **Araştırma ve Geliştirme:** *OpenSpiel*, *Lenia* ve *Thrive*, akademik düzeyde katkı sağlanabilecek veya derinlemesine incelenebilecek açık kaynak kod tabanları sunar.  
* **Gözlem ve Eğlence:** *Species: ALRE*, *Noita* ve *Eco*, kapalı kaynak kodlu olmalarına rağmen, sundukları detaylı simülasyon mekanikleriyle karmaşık sistemlerin davranışlarını gözlemlemek için eşsiz platformlardır.

Gelecekte, GPU tabanlı hesaplamanın (CUDA, Compute Shaders) daha yaygın kullanımı ile *Lenia* veya *Automata Ecosystem* benzeri simülasyonların biyolojik gerçekliğe daha da yaklaşması ve oyun ile bilimsel simülasyon arasındaki sınırın daha da belirsizleşmesi beklenmektedir.

#### **Alıntılanan çalışmalar**

> 1. The Evolution of Trust, erişim tarihi Ocak 1, 2026, [https://ncase.me/trust/](https://ncase.me/trust/)  
> 2. ncase/trust: An interactive guide to the game theory of cooperation \- GitHub, erişim tarihi Ocak 1, 2026, [https://github.com/ncase/trust](https://github.com/ncase/trust)  
> 3. polygons/index.html at gh-pages \- GitHub, erişim tarihi Ocak 1, 2026, [https://github.com/ncase/polygons/blob/gh-pages/index.html](https://github.com/ncase/polygons/blob/gh-pages/index.html)  
> 4. ncase/polygons: A playable post on how harmless choices can make a harmful world. \- GitHub, erişim tarihi Ocak 1, 2026, [https://github.com/ncase/polygons](https://github.com/ncase/polygons)  
> 5. polygons/README.md at gh-pages \- GitHub, erişim tarihi Ocak 1, 2026, [https://github.com/ncase/polygons/blob/gh-pages/README.md](https://github.com/ncase/polygons/blob/gh-pages/README.md)  
> 6. google-deepmind/open\_spiel: OpenSpiel is a collection of environments and algorithms for research in general reinforcement learning and search/planning in games. \- GitHub, erişim tarihi Ocak 1, 2026, [https://github.com/google-deepmind/open\_spiel](https://github.com/google-deepmind/open_spiel)  
> 7. Are there any open-source game theory games? : r/GAMETHEORY \- Reddit, erişim tarihi Ocak 1, 2026, [https://www.reddit.com/r/GAMETHEORY/comments/iml19h/are\_there\_any\_opensource\_game\_theory\_games/](https://www.reddit.com/r/GAMETHEORY/comments/iml19h/are_there_any_opensource_game_theory_games/)  
> 8. The main repository for the development of the evolution game Thrive. \- GitHub, erişim tarihi Ocak 1, 2026, [https://github.com/Revolutionary-Games/Thrive](https://github.com/Revolutionary-Games/Thrive)  
> 9. Revolutionary Games \- GitHub, erişim tarihi Ocak 1, 2026, [https://github.com/Revolutionary-Games](https://github.com/Revolutionary-Games)  
> 10. Thrive Launcher for installing and automatically updating Thrive \- GitHub, erişim tarihi Ocak 1, 2026, [https://github.com/Revolutionary-Games/Thrive-Launcher](https://github.com/Revolutionary-Games/Thrive-Launcher)  
> 11. The Open-Source Evolution Game That Would Never Be Finished || Thrive \- YouTube, erişim tarihi Ocak 1, 2026, [https://www.youtube.com/watch?v=-n5VqKu4yPk](https://www.youtube.com/watch?v=-n5VqKu4yPk)  
> 12. Save 50% on Species: Artificial Life, Real Evolution on Steam, erişim tarihi Ocak 1, 2026, [https://store.steampowered.com/app/774541/Species\_Artificial\_Life\_Real\_Evolution/](https://store.steampowered.com/app/774541/Species_Artificial_Life_Real_Evolution/)  
> 13. Artificial Life – Real Evolution: Species Development Blog, erişim tarihi Ocak 1, 2026, [https://speciesdevblog.wordpress.com/](https://speciesdevblog.wordpress.com/)  
> 14. The Bibites 0.5.0: Modernity and Progress, erişim tarihi Ocak 1, 2026, [https://thebibites.itch.io/the-bibites/devlog/464605/the-bibites-050-modernity-and-progress](https://thebibites.itch.io/the-bibites/devlog/464605/the-bibites-050-modernity-and-progress)  
> 15. The Bibites by The Bibites \- itch.io, erişim tarihi Ocak 1, 2026, [https://thebibites.itch.io/the-bibites](https://thebibites.itch.io/the-bibites)  
> 16. jlafayette/bibite-scripts: Scripts for editing bibites and save files for The Bibites game \- GitHub, erişim tarihi Ocak 1, 2026, [https://github.com/jlafayette/bibite-scripts](https://github.com/jlafayette/bibite-scripts)  
> 17. TheBibites/Bibites\_Shared\_Content: A directory for sharing and logging notable Bibite content for the community \- GitHub, erişim tarihi Ocak 1, 2026, [https://github.com/TheBibites/Bibites\_Shared\_Content](https://github.com/TheBibites/Bibites_Shared_Content)  
> 18. I streamed an evolution simulator for 1 month. This is what evolved. (extended cut), erişim tarihi Ocak 1, 2026, [https://www.youtube.com/watch?v=56cimkqkubY](https://www.youtube.com/watch?v=56cimkqkubY)  
> 19. Some Spore-like/evolution games 2021 on Steam \- Reddit, erişim tarihi Ocak 1, 2026, [https://www.reddit.com/r/Spore/comments/rdysqn/some\_sporelikeevolution\_games\_2021\_on\_steam/](https://www.reddit.com/r/Spore/comments/rdysqn/some_sporelikeevolution_games_2021_on_steam/)  
> 20. I made a free & open-source evolution simulator \- visualize trait inheritance, natural selection, and evolution in real-time : r/biology \- Reddit, erişim tarihi Ocak 1, 2026, [https://www.reddit.com/r/biology/comments/1lu8mzo/i\_made\_a\_free\_opensource\_evolution\_simulator/](https://www.reddit.com/r/biology/comments/1lu8mzo/i_made_a_free_opensource_evolution_simulator/)  
> 21. I made a free & open-source evolution simulator \- visualize trait inheritance, natural selection, and evolution in real-time \- Reddit, erişim tarihi Ocak 1, 2026, [https://www.reddit.com/r/evolution/comments/1lu8r0j/i\_made\_a\_free\_opensource\_evolution\_simulator/](https://www.reddit.com/r/evolution/comments/1lu8r0j/i_made_a_free_opensource_evolution_simulator/)  
> 22. Golly Game of Life Home Page, erişim tarihi Ocak 1, 2026, [https://golly.sourceforge.io/](https://golly.sourceforge.io/)  
> 23. Chakazul/Lenia: Lenia \- Mathematical Life Forms \- GitHub, erişim tarihi Ocak 1, 2026, [https://github.com/Chakazul/Lenia](https://github.com/Chakazul/Lenia)  
> 24. lenia · GitHub Topics, erişim tarihi Ocak 1, 2026, [https://github.com/topics/lenia](https://github.com/topics/lenia)  
> 25. Lenia \- Bert Chan, erişim tarihi Ocak 1, 2026, [https://chakazul.github.io/lenia.html](https://chakazul.github.io/lenia.html)  
> 26. scienceetonnante/lenia: Exploration of the Lenia continuous cellular automaton \- GitHub, erişim tarihi Ocak 1, 2026, [https://github.com/scienceetonnante/lenia](https://github.com/scienceetonnante/lenia)  
> 27. Releases · The-Powder-Toy/The-Powder-Toy \- GitHub, erişim tarihi Ocak 1, 2026, [https://github.com/simtr/The-Powder-Toy/releases](https://github.com/simtr/The-Powder-Toy/releases)  
> 28. The-Powder-Toy \- GitHub, erişim tarihi Ocak 1, 2026, [https://github.com/The-Powder-Toy](https://github.com/The-Powder-Toy)  
> 29. The tech behind Noita's Falling Sand Simulation : r/gamedev \- Reddit, erişim tarihi Ocak 1, 2026, [https://www.reddit.com/r/gamedev/comments/ba2irx/the\_tech\_behind\_noitas\_falling\_sand\_simulation/](https://www.reddit.com/r/gamedev/comments/ba2irx/the_tech_behind_noitas_falling_sand_simulation/)  
> 30. Recreating Noita's Sand Simulation in C and OpenGL | Game Engineering \- YouTube, erişim tarihi Ocak 1, 2026, [https://www.youtube.com/watch?v=VLZjd\_Y1gJ8](https://www.youtube.com/watch?v=VLZjd_Y1gJ8)  
> 31. Max Bittker MaxBittker \- GitHub, erişim tarihi Ocak 1, 2026, [https://github.com/maxbittker](https://github.com/maxbittker)  
> 32. MaxBittker/sandspiel: Creative cellular automata browser game \- GitHub, erişim tarihi Ocak 1, 2026, [https://github.com/MaxBittker/sandspiel](https://github.com/MaxBittker/sandspiel)  
> 33. PieKing1215/FallingSandSurvival: 2D survival game inspired by Noita and slightly Terraria \- GitHub, erişim tarihi Ocak 1, 2026, [https://github.com/PieKing1215/FallingSandSurvival](https://github.com/PieKing1215/FallingSandSurvival)  
> 34. erişim tarihi Ocak 1, 2026, [https://store.steampowered.com/app/1966940/Automata\_Ecosystem\_\_Cellular\_Automata\_Simulation/\#:\~:text=Automata%20Ecosystem%20is%20a%20sandbox,their%20behavior%2C%20appearance%20and%20sound.](https://store.steampowered.com/app/1966940/Automata_Ecosystem__Cellular_Automata_Simulation/#:~:text=Automata%20Ecosystem%20is%20a%20sandbox,their%20behavior%2C%20appearance%20and%20sound.)  
> 35. Automata Ecosystem \- Cellular Automata Simulation on Steam, erişim tarihi Ocak 1, 2026, [https://store.steampowered.com/app/1966940/Automata\_Ecosystem\_\_Cellular\_Automata\_Simulation/](https://store.steampowered.com/app/1966940/Automata_Ecosystem__Cellular_Automata_Simulation/)  
> 36. hunar4321/particle-life: A simple program to simulate artificial life using attraction/reuplsion forces between many particles \- GitHub, erişim tarihi Ocak 1, 2026, [https://github.com/hunar4321/particle-life](https://github.com/hunar4321/particle-life)  
> 37. The code behind Particle Life \- YouTube, erişim tarihi Ocak 1, 2026, [https://www.youtube.com/watch?v=scvuli-zcRc](https://www.youtube.com/watch?v=scvuli-zcRc)  
> 38. Artificial Life Simulation (Source Code \+ Tutorial) : r/opensource \- Reddit, erişim tarihi Ocak 1, 2026, [https://www.reddit.com/r/opensource/comments/wwj0rw/artificial\_life\_simulation\_source\_code\_tutorial/](https://www.reddit.com/r/opensource/comments/wwj0rw/artificial_life_simulation_source_code_tutorial/)  
> 39. openc2e is an open-source game engine for the games in the Creatures series. \- GitHub, erişim tarihi Ocak 1, 2026, [https://github.com/openc2e/openc2e](https://github.com/openc2e/openc2e)  
> 40. Eco, erişim tarihi Ocak 1, 2026, [https://play.eco/](https://play.eco/)  
> 41. Eco \- Global Survival Game, an incredibly interesting looking game that's already on Linux, erişim tarihi Ocak 1, 2026, [https://www.gamingonlinux.com/2017/01/eco-global-survival-game-an-incredibly-interesting-looking-game-thats-already-on-linux/](https://www.gamingonlinux.com/2017/01/eco-global-survival-game-an-incredibly-interesting-looking-game-thats-already-on-linux/)  
> 42. jgmize/paperclips: Universal Paperclips mirror \- GitHub, erişim tarihi Ocak 1, 2026, [https://github.com/jgmize/paperclips](https://github.com/jgmize/paperclips)  
> 43. TalentPath/UniversalPaperclips \- GitHub, erişim tarihi Ocak 1, 2026, [https://github.com/TalentPath/UniversalPaperclips](https://github.com/TalentPath/UniversalPaperclips)  
> 44. Cell to Singularity \- Wikipedia, erişim tarihi Ocak 1, 2026, [https://en.wikipedia.org/wiki/Cell\_to\_Singularity](https://en.wikipedia.org/wiki/Cell_to_Singularity)  
> 45. Cell to Singularity \- Evolution Never Ends on Steam, erişim tarihi Ocak 1, 2026, [https://store.steampowered.com/app/977400/Cell\_to\_Singularity\_\_Evolution\_Never\_Ends/](https://store.steampowered.com/app/977400/Cell_to_Singularity__Evolution_Never_Ends/)