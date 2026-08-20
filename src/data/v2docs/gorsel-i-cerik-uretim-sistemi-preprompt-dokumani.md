# Görsel İçerik Üretim Sistemi - Preprompt Dökümanı

**Proje Adı:** Frontend Tabanlı Görsel İçerik Üretim Sistemi  
**Döküman Türü:** AI Destekli İçerik Oluşturma Preprompt Kılavuzu  
**Versiyon:** 1.0  
**Tarih:** 27 Ocak 2025  
**Hazırlayan:** Manus AI  

## İçindekiler

1. [Preprompt Sistemi Genel Bakış](#1-preprompt-sistemi-genel-bakış)
2. [İçerik Oluşturma Preprompt'ları](#2-içerik-oluşturma-prepromptları)
3. [Tasarım Düzenleme Preprompt'ları](#3-tasarım-düzenleme-prepromptları)
4. [Bileşen Özelleştirme Preprompt'ları](#4-bileşen-özelleştirme-prepromptları)
5. [Template Oluşturma Preprompt'ları](#5-template-oluşturma-prepromptları)
6. [Optimizasyon ve İyileştirme Preprompt'ları](#6-optimizasyon-ve-iyileştirme-prepromptları)
7. [Platform Spesifik Preprompt'lar](#7-platform-spesifik-prepromptlar)
8. [Kullanım Senaryoları ve Örnekler](#8-kullanım-senaryoları-ve-örnekler)

---

## 1. Preprompt Sistemi Genel Bakış

### 1.1 Preprompt Felsefesi

Bu preprompt sistemi, kullanıcıların görsel içerik üretim sürecinde AI destekli guidance alabilmeleri için tasarlanmıştır. Sistem, ultra kısa ve etkili prompt yapıları kullanarak maksimum verimlilik sağlar. Her preprompt, specific bir görevi optimize etmek üzere crafted edilmiştir ve kullanıcının creative workflow'unu accelerate eder.

Preprompt'ların temel amacı, kullanıcıların tasarım sürecinde karşılaştıkları decision point'lerde intelligent suggestion'lar sunmaktır. Bu yaklaşım, creative block'ları minimize ederken, professional quality output'lar elde etmeyi kolaylaştırır. Sistem, user intent'i accurately capture ederek, contextually relevant ve actionable guidance sağlar.

### 1.2 Preprompt Kategorileri

**İçerik Oluşturma Preprompt'ları:** Text content, headline'lar, description'lar ve call-to-action message'ları için optimize edilmiş prompt'lar. Bu kategori, copywriting ve content strategy aspect'lerini cover eder.

**Tasarım Düzenleme Preprompt'ları:** Layout, composition, color harmony ve visual hierarchy konularında guidance sağlayan prompt'lar. Design principle'ları practical application'lara translate eder.

**Bileşen Özelleştirme Preprompt'ları:** Individual component'lerin styling, behavior ve interaction'larını optimize etmek için specialized prompt'lar. Component-level customization'ı streamline eder.

**Template Oluşturma Preprompt'ları:** Reusable template'ler oluşturmak ve existing template'leri customize etmek için designed prompt'lar. Template efficiency'sini maximize eder.

**Optimizasyon Preprompt'ları:** Performance, accessibility ve user experience optimization'ları için technical guidance sağlayan prompt'lar. Quality assurance aspect'lerini address eder.

### 1.3 Prompt Yapısı ve Syntax

**Ultra Kısa Format:** Her prompt, maximum 15 kelime ile limited tutulur. Gereksiz word'lar eliminate edilir. Action-oriented verb'ler prioritize edilir.

**Context-Aware Design:** Prompt'lar, current design state'ini consider eder. Previous action'lar ve user preference'ları factor edilir. Dynamic adaptation capability built-in'dir.

**Outcome-Focused Structure:** Her prompt, specific ve measurable outcome target eder. Ambiguous instruction'lar avoid edilir. Clear expectation'lar set edilir.

**Modular Composition:** Prompt'lar, combine edilebilir şekilde design edilir. Complex task'lar için chain edilebilir. Flexible usage pattern'leri support edilir.


## 2. İçerik Oluşturma Preprompt'ları

### 2.1 Headline ve Başlık Oluşturma

#### 2.1.1 Sosyal Medya Başlıkları

**Instagram Post Başlıkları:**
```
PROMPT: "Instagram post başlığı yaz: [ürün/hizmet] + [hedef kitle] + [ana fayda]"
ÖRNEK: "Instagram post başlığı yaz: organik kahve + genç profesyoneller + enerji artışı"
ÇIKTI: "Sabah enerjin için organik kahve keşfet! ☕ #GenÇProfesyonel"

PROMPT: "Viral Instagram başlığı: [trend] + [marka] + [emoji]"
ÖRNEK: "Viral Instagram başlığı: sürdürülebilirlik + moda markası + 🌱"
ÇIKTI: "Doğa dostu moda devrimi başlıyor! 🌱✨ #SürdürülebilirModa"

PROMPT: "Engagement artıran başlık: [soru] + [ürün] + [CTA]"
ÖRNEK: "Engagement artıran başlık: hangi renk + ayakkabı + yorumla"
ÇIKTI: "Hangi renk ayakkabı favorin? Yorumda söyle! 👟💭"
```

**Facebook Post Başlıkları:**
```
PROMPT: "Facebook başlığı: [hikaye] + [değer] + [topluluk]"
ÖRNEK: "Facebook başlığı: müşteri başarısı + zaman tasarrufu + anne topluluğu"
ÇIKTI: "Melek Anne'nin hikayesi: 3 saatlik işini 30 dakikaya düşürdü!"

PROMPT: "Paylaşım teşvik eden başlık: [istatistik] + [şaşırtıcı gerçek]"
ÖRNEK: "Paylaşım teşvik eden başlık: %80 + geri dönüşüm bilgisi"
ÇIKTI: "İnsanların %80'i bu geri dönüşüm gerçeğini bilmiyor! 😱"
```

**Twitter/X Başlıkları:**
```
PROMPT: "Twitter başlığı: [gündem] + [görüş] + [hashtag]"
ÖRNEK: "Twitter başlığı: yapay zeka + iş dünyası + #AIRevolution"
ÇIKTI: "AI iş dünyasını değiştiriyor, hazır mısınız? #AIRevolution"

PROMPT: "Thread başlığı: [sayı] + [ipucu] + [alan]"
ÖRNEK: "Thread başlığı: 5 + ipucu + dijital pazarlama"
ÇIKTI: "Dijital pazarlamada 5 game-changer ipucu 🧵👇"
```

#### 2.1.2 E-ticaret Başlıkları

**Ürün Başlıkları:**
```
PROMPT: "Ürün başlığı: [özellik] + [fayda] + [aciliyet]"
ÖRNEK: "Ürün başlığı: su geçirmez + telefon koruması + sınırlı stok"
ÇIKTI: "Su Geçirmez Telefon Kılıfı - Son 10 Adet! 📱💧"

PROMPT: "Satış artıran başlık: [indirim] + [kalite] + [garanti]"
ÖRNEK: "Satış artıran başlık: %50 + premium + 2 yıl"
ÇIKTI: "%50 İndirim! Premium Kalite, 2 Yıl Garanti ✨"

PROMPT: "Kategori başlığı: [sezon] + [ürün grubu] + [stil]"
ÖRNEK: "Kategori başlığı: kış + mont + minimalist"
ÇIKTI: "Kış Koleksiyonu: Minimalist Mont Seçenekleri ❄️"
```

### 2.2 Açıklama ve Description Metinleri

#### 2.2.1 Ürün Açıklamaları

**Kısa Ürün Açıklamaları:**
```
PROMPT: "Ürün açıklaması: [malzeme] + [kullanım] + [avantaj] (max 50 kelime)"
ÖRNEK: "Ürün açıklaması: organik pamuk + günlük kullanım + nefes alabilir (max 50 kelime)"
ÇIKTI: "100% organik pamuktan üretilen günlük t-shirt. Nefes alabilir kumaşı ile tüm gün konfor sağlar. Hassas ciltler için ideal, çevre dostu üretim."

PROMPT: "Teknik açıklama: [özellik listesi] + [performans] + [uyumluluk]"
ÖRNEK: "Teknik açıklama: 128GB + hızlı işlemci + tüm cihazlar"
ÇIKTI: "128GB depolama, 8-core işlemci. Tüm iOS/Android cihazlarla uyumlu. 10x hızlı veri transferi."

PROMPT: "Duygusal açıklama: [his] + [deneyim] + [sonuç]"
ÖRNEK: "Duygusal açıklama: güven + ilk kullanım + memnuniyet"
ÇIKTI: "İlk dokunuşta hissedeceğiniz kalite. Güvenle kullanın, memnuniyeti yaşayın."
```

#### 2.2.2 Hizmet Açıklamaları

**Profesyonel Hizmet Açıklamaları:**
```
PROMPT: "Hizmet açıklaması: [süreç] + [sonuç] + [garanti]"
ÖRNEK: "Hizmet açıklaması: 3 aşama + web sitesi + 30 gün"
ÇIKTI: "3 aşamalı süreçle profesyonel web siteniz hazır. 30 gün ücretsiz destek garantisi."

PROMPT: "Danışmanlık açıklaması: [uzmanlık] + [yöntem] + [başarı]"
ÖRNEK: "Danışmanlık açıklaması: dijital pazarlama + veri analizi + %200 artış"
ÇIKTI: "Veri odaklı dijital pazarlama stratejileri. Müşterilerimiz ortalama %200 büyüme yaşadı."
```

### 2.3 Call-to-Action (CTA) Metinleri

#### 2.3.1 Satış Odaklı CTA'lar

**Aciliyet Yaratan CTA'lar:**
```
PROMPT: "Acil CTA: [eylem] + [süre] + [fayda]"
ÖRNEK: "Acil CTA: satın al + 24 saat + ücretsiz kargo"
ÇIKTI: "24 Saat İçinde Sipariş Ver, Ücretsiz Kargo Kazan!"

PROMPT: "Sınırlı teklif CTA: [miktar] + [indirim] + [son tarih]"
ÖRNEK: "Sınırlı teklif CTA: 100 adet + %40 + bugün"
ÇIKTI: "Son 100 Adet! %40 İndirim Bugün Bitiyor!"

PROMPT: "Risk-free CTA: [deneme] + [garanti] + [kolay iptal]"
ÖRNEK: "Risk-free CTA: 7 gün + para iade + tek tık"
ÇIKTI: "7 Gün Ücretsiz Dene, Beğenmezsen Para İade!"
```

#### 2.3.2 Engagement Odaklı CTA'lar

**Sosyal Medya CTA'ları:**
```
PROMPT: "Etkileşim CTA: [eylem] + [ödül] + [topluluk]"
ÖRNEK: "Etkileşim CTA: yorum yap + hediye + takipçiler"
ÇIKTI: "Yorumda fikrini paylaş, hediye kazan! 🎁"

PROMPT: "Paylaşım CTA: [sebep] + [etki] + [hashtag]"
ÖRNEK: "Paylaşım CTA: farkındalık + değişim + #SürdürülebilirGelecek"
ÇIKTI: "Paylaş, farkındalık yarat! #SürdürülebilirGelecek 🌍"

PROMPT: "Takip CTA: [içerik vaadi] + [sıklık] + [değer]"
ÖRNEK: "Takip CTA: ipuçları + günlük + ücretsiz"
ÇIKTI: "Takip et, günlük ücretsiz ipuçları al! 💡"
```

### 2.4 Hikaye Anlatımı (Storytelling) Preprompt'ları

#### 2.4.1 Marka Hikayeleri

**Kuruluş Hikayesi:**
```
PROMPT: "Kuruluş hikayesi: [problem] + [çözüm] + [misyon]"
ÖRNEK: "Kuruluş hikayesi: plastik atık + geri dönüşüm + temiz dünya"
ÇIKTI: "Plastik atık dağlarını görünce harekete geçtik. Geri dönüşümle temiz dünya hayalimizi gerçekleştiriyoruz."

PROMPT: "Kurucunun hikayesi: [kişisel deneyim] + [dönüm noktası] + [vizyon]"
ÖRNEK: "Kurucunun hikayesi: anne olma + sağlıklı beslenme + gelecek nesiller"
ÇIKTI: "Anne olduktan sonra sağlıklı beslenmenin önemini kavradım. Gelecek nesillere temiz gıda bırakmak istiyorum."
```

#### 2.4.2 Müşteri Hikayeleri

**Başarı Hikayeleri:**
```
PROMPT: "Müşteri başarısı: [başlangıç durumu] + [çözüm] + [sonuç]"
ÖRNEK: "Müşteri başarısı: düşük satış + dijital pazarlama + 5x artış"
ÇIKTI: "Ayşe Hanım'ın dükkânı kapanma noktasındaydı. Dijital pazarlama ile satışları 5 kat arttı!"

PROMPT: "Dönüşüm hikayesi: [zorluk] + [süreç] + [değişim]"
ÖRNEK: "Dönüşüm hikayesi: özgüven eksikliği + 3 aylık program + yeni ben"
ÇIKTI: "3 ay önce aynaya bakmaktan çekiniyordum. Bugün hayatımın en güzel dönemindeyim!"
```

### 2.5 Eğitici İçerik Preprompt'ları

#### 2.5.1 Nasıl Yapılır (How-to) İçerikleri

**Adım Adım Kılavuzlar:**
```
PROMPT: "Nasıl yapılır: [hedef] + [adım sayısı] + [süre]"
ÖRNEK: "Nasıl yapılır: sosyal medya stratejisi + 5 adım + 1 saat"
ÇIKTI: "5 Adımda Sosyal Medya Stratejisi (1 Saatte Tamamla!)"

PROMPT: "Hızlı çözüm: [problem] + [basit yöntem] + [sonuç]"
ÖRNEK: "Hızlı çözüm: düşük engagement + hashtag stratejisi + 2x artış"
ÇIKTI: "Düşük Engagement? Bu Hashtag Stratejisi ile 2x Artış Sağla!"

PROMPT: "Uzman ipucu: [alan] + [gizli bilgi] + [avantaj]"
ÖRNEK: "Uzman ipucu: SEO + meta açıklama + tıklama artışı"
ÇIKTI: "SEO Uzmanlarının Gizli Silahı: Meta Açıklama Optimizasyonu"
```

#### 2.5.2 İpucu ve Tavsiye İçerikleri

**Hızlı İpuçları:**
```
PROMPT: "Günlük ipucu: [alan] + [pratik uygulama] + [fayda]"
ÖRNEK: "Günlük ipucu: verimlilik + 25 dakika odaklanma + %40 artış"
ÇIKTI: "Günün İpucu: 25 dakika odaklan, verimliliğini %40 artır! ⏰"

PROMPT: "Pro tip: [teknik] + [az bilinen] + [büyük etki]"
ÖRNEK: "Pro tip: fotoğraf + doğal ışık + profesyonel görünüm"
ÇIKTI: "Pro Tip: Doğal ışık kullan, fotoğrafların profesyonel görünsün! 📸"
```

### 2.6 Duygusal Bağlantı Preprompt'ları

#### 2.6.1 Empati Kurma

**Duygusal Bağlantı:**
```
PROMPT: "Empati metni: [ortak deneyim] + [anlayış] + [çözüm]"
ÖRNEK: "Empati metni: yorgunluk + anlıyoruz + dinlenme çözümü"
ÇIKTI: "Yorgun hissettiğin anları biliyoruz. Sen dinlen, biz halledelim."

PROMPT: "Destekleyici mesaj: [zorluk] + [birliktelik] + [umut]"
ÖRNEK: "Destekleyici mesaj: başarısızlık + yalnız değilsin + yeni başlangıç"
ÇIKTI: "Başarısızlık hissi normal. Yalnız değilsin, birlikte yeni başlangıçlar yapabiliriz."
```

#### 2.6.2 Motivasyon ve İlham

**Motivasyonel İçerik:**
```
PROMPT: "Motivasyon: [hedef] + [engel] + [güçlendirme]"
ÖRNEK: "Motivasyon: hayaller + korku + cesaret"
ÇIKTI: "Hayallerin korkularından büyük. Cesaretle adım at!"

PROMPT: "İlham verici: [başarı örneği] + [benzerlik] + [mümkünlük]"
ÖRNEK: "İlham verici: sıfırdan milyoner + sıradan insan + sen de yapabilirsin"
ÇIKTI: "O da sıradan biriydi, bugün milyoner. Sen de yapabilirsin!"
```

### 2.7 Teknik İçerik Preprompt'ları

#### 2.7.1 Özellik Açıklamaları

**Teknik Özellikler:**
```
PROMPT: "Teknik özellik: [teknoloji] + [fayda] + [kullanıcı dili]"
ÖRNEK: "Teknik özellik: AI algoritması + hızlı sonuç + basit açıklama"
ÇIKTI: "Yapay zeka teknolojisi sayesinde saniyeler içinde sonuç alırsın!"

PROMPT: "Karşılaştırma: [eski yöntem] vs [yeni teknoloji] + [iyileştirme]"
ÖRNEK: "Karşılaştırma: manuel süreç vs otomasyon + 10x hızlı"
ÇIKTI: "Manuel süreç: 2 saat. Otomasyonumuz: 12 dakika. 10x daha hızlı!"
```

#### 2.7.2 Güvenlik ve Gizlilik

**Güven Mesajları:**
```
PROMPT: "Güvenlik mesajı: [koruma] + [standart] + [garanti]"
ÖRNEK: "Güvenlik mesajı: veri şifreleme + SSL + %100 güvenli"
ÇIKTI: "Verileriniz SSL ile şifrelenir. %100 güvenli, %100 gizli."

PROMPT: "Gizlilik taahhüdü: [veri kullanımı] + [paylaşmama] + [kontrol]"
ÖRNEK: "Gizlilik taahhüdü: sadece hizmet + üçüncü taraf yok + sen kontrol et"
ÇIKTI: "Verileriniz sadece hizmet için kullanılır. Üçüncü taraflarla paylaşılmaz. Kontrolü sende!"
```


## 3. Tasarım Düzenleme Preprompt'ları

### 3.1 Layout ve Kompozisyon

#### 3.1.1 Temel Layout Düzenlemeleri

**Grid Sistemi Optimizasyonu:**
```
PROMPT: "Grid düzenle: [element sayısı] + [hiyerarşi] + [platform]"
ÖRNEK: "Grid düzenle: 4 ürün + fiyat vurgusu + Instagram"
ÇIKTI: "2x2 grid, fiyat etiketleri üst köşede, Instagram kare formatında optimize et"

PROMPT: "Asymmetric layout: [ana element] + [destekleyici] + [boşluk]"
ÖRNEK: "Asymmetric layout: ürün fotoğrafı + metin bloku + minimal boşluk"
ÇIKTI: "Ürün fotoğrafı sol 2/3, metin sağ 1/3, aralarında 24px boşluk"

PROMPT: "Responsive düzen: [mobil öncelik] + [tablet adaptasyon] + [desktop genişletme]"
ÖRNEK: "Responsive düzen: tek sütun + iki sütun + üç sütun"
ÇIKTI: "Mobil: tek sütun stack, Tablet: 2 sütun grid, Desktop: 3 sütun layout"
```

**Visual Hierarchy Optimizasyonu:**
```
PROMPT: "Hiyerarşi düzenle: [birincil mesaj] + [ikincil bilgi] + [CTA]"
ÖRNEK: "Hiyerarşi düzenle: ürün adı + özellikler + satın al butonu"
ÇIKTI: "Ürün adı: 32px bold üst, Özellikler: 16px orta, CTA: büyük buton alt"

PROMPT: "Z-pattern layout: [başlık] + [görsel] + [açıklama] + [aksiyon]"
ÖRNEK: "Z-pattern layout: kampanya başlığı + ürün görseli + indirim detayı + şimdi al"
ÇIKTI: "Başlık sol üst, görsel sağ üst, açıklama sol alt, CTA sağ alt konumlandır"

PROMPT: "F-pattern okuma: [ana başlık] + [alt başlıklar] + [bullet point'ler]"
ÖRNEK: "F-pattern okuma: hizmet başlığı + özellik başlıkları + fayda listesi"
ÇIKTI: "Ana başlık tam genişlik, alt başlıklar sol hizalı, bullet'lar altında liste"
```

#### 3.1.2 Spacing ve Alignment

**Whitespace Optimizasyonu:**
```
PROMPT: "Boşluk optimize et: [element yoğunluğu] + [nefes alma alanı] + [odak]"
ÖRNEK: "Boşluk optimize et: yoğun içerik + rahat okuma + CTA vurgusu"
ÇIKTI: "Element arası 32px, paragraf arası 16px, CTA etrafı 48px boşluk"

PROMPT: "Minimal spacing: [sıkı düzen] + [modern görünüm] + [maksimum içerik]"
ÖRNEK: "Minimal spacing: çok ürün + temiz tasarım + grid maksimizasyonu"
ÇIKTI: "8px grid spacing, 4px element padding, 16px section margin"

PROMPT: "Generous spacing: [lüks hissi] + [premium görünüm] + [odaklanma]"
ÖRNEK: "Generous spacing: tek ürün + premium marka + dikkat çekme"
ÇIKTI: "64px section spacing, 32px element margin, 24px internal padding"
```

**Alignment Sistemleri:**
```
PROMPT: "Hizalama düzenle: [metin hizası] + [görsel pozisyon] + [genel denge]"
ÖRNEK: "Hizalama düzenle: merkez metin + sol görsel + simetrik denge"
ÇIKTI: "Metin center-aligned, görsel left-aligned, container'da symmetric balance"

PROMPT: "Baseline grid: [tipografi] + [vertical rhythm] + [tutarlılık]"
ÖRNEK: "Baseline grid: 16px base + 24px line height + tüm elementler"
ÇIKTI: "24px baseline grid, tüm elementler bu grid'e snap, vertical rhythm koru"
```

### 3.2 Renk Harmonisi ve Paleti

#### 3.2.1 Renk Şeması Oluşturma

**Monochromatic Şema:**
```
PROMPT: "Monochromatic palet: [ana renk] + [ton varyasyonları] + [kontrast]"
ÖRNEK: "Monochromatic palet: mavi + 5 ton + yüksek kontrast"
ÇIKTI: "Ana mavi #2563EB, açık tonlar #EFF6FF, #DBEAFE, koyu tonlar #1E40AF, #1E3A8A"

PROMPT: "Gradient harmony: [başlangıç] + [bitiş] + [geçiş kalitesi]"
ÖRNEK: "Gradient harmony: turuncu + pembe + smooth geçiş"
ÇIKTI: "Turuncu #F97316'dan pembe #EC4899'a, 45° açı, smooth transition"
```

**Complementary Şema:**
```
PROMPT: "Tamamlayıcı renkler: [ana renk] + [karşıt renk] + [denge oranı]"
ÖRNEK: "Tamamlayıcı renkler: yeşil + kırmızı + 70-30 oranı"
ÇIKTI: "Ana yeşil #10B981 (%70), vurgu kırmızısı #EF4444 (%30), neutral gri"

PROMPT: "Split complementary: [ana renk] + [iki karşıt] + [harmony]"
ÖRNEK: "Split complementary: mavi + turuncu-sarı + balanced"
ÇIKTI: "Ana mavi #3B82F6, turuncu #F97316, sarı #EAB308, dengeli dağılım"
```

#### 3.2.2 Renk Psikolojisi Uygulaması

**Duygusal Renk Seçimi:**
```
PROMPT: "Duygu rengi: [hedef his] + [marka kişiliği] + [kültürel uyum]"
ÖRNEK: "Duygu rengi: güven + profesyonel + evrensel"
ÇIKTI: "Koyu mavi #1E40AF güven, gri #6B7280 profesyonellik, beyaz #FFFFFF temizlik"

PROMPT: "Aksiyon rengi: [CTA amacı] + [aciliyet seviyesi] + [dikkat çekme]"
ÖRNEK: "Aksiyon rengi: satın alma + yüksek aciliyet + maksimum dikkat"
ÇIKTI: "Kırmızı-turuncu #FF4500 CTA, sarı #FCD34D vurgu, kontrast beyaz metin"

PROMPT: "Sezonsal renk: [mevsim] + [ürün kategorisi] + [trend uyumu]"
ÖRNEK: "Sezonsal renk: kış + moda + 2024 trendleri"
ÇIKTI: "Koyu yeşil #064E3B, krem #FEF3C7, bordo #991B1B, metalik gümüş vurgular"
```

### 3.3 Typography ve Metin Düzenleme

#### 3.3.1 Font Pairing ve Hierarchy

**Font Kombinasyonları:**
```
PROMPT: "Font pair: [başlık karakteri] + [metin okunabilirliği] + [marka uyumu]"
ÖRNEK: "Font pair: modern bold + temiz sans-serif + tech marka"
ÇIKTI: "Başlık: Montserrat Bold, Metin: Inter Regular, Kod: JetBrains Mono"

PROMPT: "Typography scale: [başlık boyutları] + [hiyerarşi] + [responsive]"
ÖRNEK: "Typography scale: 6 seviye + net ayrım + mobil uyumlu"
ÇIKTI: "H1:48px, H2:36px, H3:24px, H4:20px, Body:16px, Small:14px, mobilde %80"

PROMPT: "Contrast typography: [kalın-ince] + [büyük-küçük] + [renkli-nötr]"
ÖRNEK: "Contrast typography: bold başlık + light metin + colorful accent"
ÇIKTI: "Başlık: 700 weight, Metin: 300 weight, Vurgu: brand color, gri metin"
```

#### 3.3.2 Readability Optimizasyonu

**Okunabilirlik İyileştirme:**
```
PROMPT: "Readability optimize: [line height] + [character spacing] + [paragraph spacing]"
ÖRNEK: "Readability optimize: rahat okuma + uzun metin + web optimizasyonu"
ÇIKTI: "Line height 1.6, letter spacing 0.02em, paragraph margin 1.5em"

PROMPT: "Accessibility text: [kontrast oranı] + [font boyutu] + [dyslexia friendly]"
ÖRNEK: "Accessibility text: WCAG AA + minimum boyut + okuma zorluğu"
ÇIKTI: "4.5:1 kontrast, minimum 16px, OpenDyslexic font alternatifi"
```

### 3.4 Görsel Element Düzenleme

#### 3.4.1 Image Layout ve Composition

**Fotoğraf Düzenleme:**
```
PROMPT: "Image composition: [rule of thirds] + [focal point] + [negative space]"
ÖRNEK: "Image composition: ürün fotoğrafı + merkez odak + minimal background"
ÇIKTI: "Ürün intersection point'te, 1/3 boş alan, soft shadow, white background"

PROMPT: "Gallery layout: [grid pattern] + [aspect ratio] + [spacing]"
ÖRNEK: "Gallery layout: masonry + mixed ratios + tight spacing"
ÇIKTI: "Masonry grid, 1:1 ve 4:3 karışık, 8px gap, lazy loading"

PROMPT: "Hero image: [impact] + [text overlay] + [CTA placement]"
ÖRNEK: "Hero image: güçlü etki + okunabilir metin + belirgin CTA"
ÇIKTI: "Full-width hero, dark overlay %40, beyaz metin, turuncu CTA button"
```

#### 3.4.2 Icon ve Grafik Düzenleme

**Icon Sistemi:**
```
PROMPT: "Icon system: [stil tutarlılığı] + [boyut standardı] + [anlamsal kullanım]"
ÖRNEK: "Icon system: outline style + 24px standard + intuitive meaning"
ÇIKTI: "2px stroke outline, 24px base size, universal semboller, consistent style"

PROMPT: "Infographic layout: [veri hiyerarşisi] + [visual flow] + [color coding]"
ÖRNEK: "Infographic layout: istatistik + soldan sağa + kategori renkleri"
ÇIKTI: "Büyük sayılar vurgu, left-to-right flow, kategori başına renk, legend"
```

### 3.5 Interactive Element Düzenleme

#### 3.5.1 Button ve CTA Tasarımı

**Button Hierarchy:**
```
PROMPT: "Button hierarchy: [primary action] + [secondary options] + [visual weight]"
ÖRNEK: "Button hierarchy: satın al + sepete ekle + görsel ağırlık"
ÇIKTI: "Primary: solid blue, Secondary: outline blue, Tertiary: text link"

PROMPT: "CTA optimization: [size] + [color] + [placement] + [urgency]"
ÖRNEK: "CTA optimization: büyük + dikkat çekici + görünür + acil"
ÇIKTI: "48px height, kırmızı background, above fold, 'Şimdi Al' metni"

PROMPT: "Hover states: [feedback] + [animation] + [accessibility]"
ÖRNEK: "Hover states: net geri bildirim + smooth geçiş + keyboard uyumlu"
ÇIKTI: "Color shift, 0.2s transition, scale 1.05, focus ring, keyboard accessible"
```

#### 3.5.2 Form ve Input Düzenleme

**Form Layout:**
```
PROMPT: "Form design: [field grouping] + [label placement] + [error handling]"
ÖRNEK: "Form design: logical groups + clear labels + inline validation"
ÇIKTI: "Related fields grouped, labels above inputs, real-time validation"

PROMPT: "Input styling: [visual consistency] + [state indication] + [mobile friendly]"
ÖRNEK: "Input styling: uniform appearance + clear states + touch optimized"
ÇIKTI: "Consistent border radius, focus states, 44px touch targets, clear icons"
```

### 3.6 Animation ve Transition Düzenleme

#### 3.6.1 Micro-interactions

**Subtle Animations:**
```
PROMPT: "Micro-animation: [trigger] + [feedback] + [duration] + [easing]"
ÖRNEK: "Micro-animation: button click + visual feedback + quick + natural"
ÇIKTI: "Click: scale 0.95, 0.1s ease-out, color shift, ripple effect"

PROMPT: "Loading states: [progress indication] + [user engagement] + [perceived speed]"
ÖRNEK: "Loading states: progress bar + skeleton + hızlı hissi"
ÇIKTI: "Skeleton loading, progress bar, 'Hazırlanıyor...' metni, smooth animation"

PROMPT: "Scroll animations: [reveal timing] + [performance] + [accessibility]"
ÖRNEK: "Scroll animations: element reveal + smooth + reduced motion"
ÇIKTI: "Intersection observer, fade-in up, respect prefers-reduced-motion"
```

#### 3.6.2 Page Transitions

**Navigation Animations:**
```
PROMPT: "Page transition: [continuity] + [direction] + [speed]"
ÖRNEK: "Page transition: smooth flow + logical direction + fast"
ÇIKTI: "Slide left/right, 0.3s duration, ease-out, maintain context"

PROMPT: "Modal animations: [entrance] + [backdrop] + [exit]"
ÖRNEK: "Modal animations: smooth entrance + subtle backdrop + easy exit"
ÇIKTI: "Scale from center, backdrop fade, ESC key, click outside to close"
```

### 3.7 Responsive Design Düzenleme

#### 3.7.1 Breakpoint Optimizasyonu

**Mobile-First Approach:**
```
PROMPT: "Mobile layout: [content priority] + [touch targets] + [performance]"
ÖRNEK: "Mobile layout: essential content + finger-friendly + fast loading"
ÇIKTI: "Critical content first, 44px buttons, optimized images, minimal JS"

PROMPT: "Tablet adaptation: [layout flexibility] + [orientation] + [interaction]"
ÖRNEK: "Tablet adaptation: hybrid layout + portrait/landscape + touch/mouse"
ÇIKTI: "Flexible grid, orientation-aware, hover states optional, gesture support"

PROMPT: "Desktop enhancement: [screen real estate] + [advanced features] + [productivity]"
ÖRNEK: "Desktop enhancement: wide screen + full features + efficient workflow"
ÇIKTI: "Multi-column layout, keyboard shortcuts, hover effects, advanced tools"
```

#### 3.7.2 Content Adaptation

**Responsive Content:**
```
PROMPT: "Content scaling: [text size] + [image adaptation] + [navigation]"
ÖRNEK: "Content scaling: readable text + appropriate images + accessible nav"
ÇIKTI: "Fluid typography, responsive images, collapsible navigation, readable hierarchy"

PROMPT: "Progressive disclosure: [information hierarchy] + [screen size] + [user context]"
ÖRNEK: "Progressive disclosure: essential first + limited space + mobile context"
ÇIKTI: "Core info visible, expandable sections, contextual menus, priority-based"
```


## 4. Bileşen Özelleştirme Preprompt'ları

### 4.1 Metin Bileşeni Özelleştirme

#### 4.1.1 Dinamik Başlık Özelleştirme

**Başlık Stili Optimizasyonu:**
```
PROMPT: "Başlık optimize et: [font weight] + [size scale] + [color impact]"
ÖRNEK: "Başlık optimize et: bold vurgu + büyük boyut + brand color"
ÇIKTI: "Font-weight: 700, font-size: 2.5rem, color: brand-primary, line-height: 1.2"

PROMPT: "Responsive başlık: [mobile size] + [tablet scale] + [desktop impact]"
ÖRNEK: "Responsive başlık: okunabilir + orta boyut + maksimum etki"
ÇIKTI: "Mobile: 1.5rem, Tablet: 2rem, Desktop: 2.5rem, fluid scaling"

PROMPT: "Animated başlık: [entrance effect] + [timing] + [attention]"
ÖRNEK: "Animated başlık: fade-in + smooth + dikkat çekici"
ÇIKTI: "Fade-in from bottom, 0.6s ease-out, stagger 0.1s per word"
```

**Metin Efektleri:**
```
PROMPT: "Text shadow: [depth] + [color] + [readability]"
ÖRNEK: "Text shadow: subtle depth + dark shadow + white text"
ÇIKTI: "Text-shadow: 0 2px 4px rgba(0,0,0,0.3), white text, good contrast"

PROMPT: "Gradient text: [color start] + [color end] + [direction]"
ÖRNEK: "Gradient text: blue + purple + diagonal"
ÇIKTI: "Background: linear-gradient(45deg, #3B82F6, #8B5CF6), -webkit-background-clip: text"

PROMPT: "Outline text: [stroke width] + [stroke color] + [fill]"
ÖRNEK: "Outline text: thin stroke + white outline + transparent fill"
ÇIKTI: "-webkit-text-stroke: 1px white, color: transparent, bold font"
```

#### 4.1.2 Paragraf ve Metin Bloku Düzenleme

**Metin Akışı Optimizasyonu:**
```
PROMPT: "Paragraph flow: [line spacing] + [paragraph spacing] + [text alignment]"
ÖRNEK: "Paragraph flow: rahat okuma + clear separation + left align"
ÇIKTI: "Line-height: 1.6, margin-bottom: 1.5em, text-align: left, max-width: 65ch"

PROMPT: "Text hierarchy: [heading levels] + [body text] + [emphasis]"
ÖRNEK: "Text hierarchy: 3 level + readable body + bold emphasis"
ÇIKTI: "H1: 2rem, H2: 1.5rem, H3: 1.25rem, Body: 1rem, Strong: font-weight 600"

PROMPT: "Justified text: [alignment] + [hyphenation] + [river prevention]"
ÖRNEK: "Justified text: even edges + auto hyphen + smooth flow"
ÇIKTI: "Text-align: justify, hyphens: auto, text-justify: inter-word"
```

### 4.2 Görsel Bileşeni Özelleştirme

#### 4.2.1 Image Component Styling

**Görsel Efektleri:**
```
PROMPT: "Image filter: [effect type] + [intensity] + [mood]"
ÖRNEK: "Image filter: vintage + subtle + warm mood"
ÇIKTI: "Filter: sepia(0.3) contrast(1.1) brightness(1.05) saturate(0.9)"

PROMPT: "Image overlay: [color] + [opacity] + [blend mode]"
ÖRNEK: "Image overlay: blue + semi-transparent + multiply"
ÇIKTI: "Overlay: rgba(59, 130, 246, 0.4), mix-blend-mode: multiply"

PROMPT: "Image border: [style] + [radius] + [shadow]"
ÖRNEK: "Image border: clean + rounded + soft shadow"
ÇIKTI: "Border-radius: 12px, box-shadow: 0 4px 6px rgba(0,0,0,0.1)"
```

**Responsive Image Behavior:**
```
PROMPT: "Image scaling: [object-fit] + [aspect ratio] + [crop behavior]"
ÖRNEK: "Image scaling: cover + 16:9 + smart crop"
ÇIKTI: "Object-fit: cover, aspect-ratio: 16/9, object-position: center"

PROMPT: "Image lazy loading: [threshold] + [placeholder] + [transition]"
ÖRNEK: "Image lazy loading: early load + blur placeholder + smooth reveal"
ÇIKTI: "Intersection threshold: 0.1, blur placeholder, fade-in transition"
```

#### 4.2.2 Icon Customization

**Icon Styling:**
```
PROMPT: "Icon style: [stroke width] + [fill] + [size consistency]"
ÖRNEK: "Icon style: thin stroke + no fill + uniform size"
ÇIKTI: "Stroke-width: 1.5px, fill: none, width: 24px, height: 24px"

PROMPT: "Icon animation: [hover effect] + [transition] + [accessibility]"
ÖRNEK: "Icon animation: scale up + smooth + reduced motion"
ÇIKTI: "Transform: scale(1.1) on hover, transition: 0.2s ease, respect prefers-reduced-motion"

PROMPT: "Icon color: [default state] + [active state] + [disabled state]"
ÖRNEK: "Icon color: neutral + brand + muted"
ÇIKTI: "Default: #6B7280, Active: #3B82F6, Disabled: #D1D5DB"
```

### 4.3 Button ve Interactive Element Özelleştirme

#### 4.3.1 Button Variants

**Primary Button Styling:**
```
PROMPT: "Primary button: [background] + [text color] + [hover state]"
ÖRNEK: "Primary button: brand blue + white text + darker hover"
ÇIKTI: "Background: #3B82F6, color: white, hover: #2563EB, transition: 0.2s"

PROMPT: "Button size: [padding] + [font size] + [border radius]"
ÖRNEK: "Button size: comfortable + readable + modern radius"
ÇIKTI: "Padding: 12px 24px, font-size: 16px, border-radius: 8px"

PROMPT: "Button states: [default] + [hover] + [active] + [disabled]"
ÖRNEK: "Button states: solid + lift + press + muted"
ÇIKTI: "Default: solid, Hover: translateY(-1px), Active: translateY(0), Disabled: opacity 0.5"
```

**Secondary Button Styling:**
```
PROMPT: "Secondary button: [border style] + [background] + [contrast]"
ÖRNEK: "Secondary button: solid border + transparent + good contrast"
ÇIKTI: "Border: 2px solid #3B82F6, background: transparent, color: #3B82F6"

PROMPT: "Ghost button: [minimal style] + [hover fill] + [text emphasis]"
ÖRNEK: "Ghost button: text only + background fill + bold text"
ÇIKTI: "Background: transparent, hover: #3B82F6, color transition, font-weight: 500"
```

#### 4.3.2 Form Element Styling

**Input Field Customization:**
```
PROMPT: "Input styling: [border] + [focus state] + [validation]"
ÖRNEK: "Input styling: subtle border + blue focus + error indication"
ÇIKTI: "Border: 1px solid #D1D5DB, focus: 2px solid #3B82F6, error: #EF4444"

PROMPT: "Input placeholder: [color] + [font style] + [accessibility]"
ÖRNEK: "Input placeholder: muted + italic + sufficient contrast"
ÇIKTI: "Color: #9CA3AF, font-style: italic, contrast ratio: 4.5:1"

PROMPT: "Input validation: [success state] + [error state] + [feedback]"
ÖRNEK: "Input validation: green check + red error + clear message"
ÇIKTI: "Success: green border + checkmark, Error: red border + message"
```

### 4.4 Layout Container Özelleştirme

#### 4.4.1 Card Component Styling

**Card Design:**
```
PROMPT: "Card styling: [elevation] + [border] + [spacing]"
ÖRNEK: "Card styling: subtle shadow + no border + generous padding"
ÇIKTI: "Box-shadow: 0 1px 3px rgba(0,0,0,0.1), border: none, padding: 24px"

PROMPT: "Card hover: [elevation change] + [transform] + [transition]"
ÖRNEK: "Card hover: lift effect + slight scale + smooth transition"
ÇIKTI: "Hover: translateY(-2px) scale(1.02), box-shadow increase, 0.3s ease"

PROMPT: "Card content: [image placement] + [text hierarchy] + [action area]"
ÖRNEK: "Card content: top image + title/description + bottom CTA"
ÇIKTI: "Image: full-width top, Title: 1.25rem bold, Description: 0.875rem, CTA: bottom-right"
```

#### 4.4.2 Section Container Styling

**Section Layout:**
```
PROMPT: "Section spacing: [vertical rhythm] + [container width] + [responsive]"
ÖRNEK: "Section spacing: consistent rhythm + max width + mobile adapt"
ÇIKTI: "Margin: 4rem 0, max-width: 1200px, padding: 0 1rem mobile"

PROMPT: "Section background: [color] + [pattern] + [contrast]"
ÖRNEK: "Section background: light gray + subtle pattern + text contrast"
ÇIKTI: "Background: #F9FAFB, pattern: subtle dots, text: #111827"
```

### 4.5 Animation ve Transition Özelleştirme

#### 4.5.1 Entrance Animations

**Fade Animations:**
```
PROMPT: "Fade entrance: [direction] + [duration] + [easing]"
ÖRNEK: "Fade entrance: from bottom + medium speed + natural easing"
ÇIKTI: "Transform: translateY(20px) to 0, opacity: 0 to 1, 0.6s ease-out"

PROMPT: "Stagger animation: [delay pattern] + [element sequence] + [timing]"
ÖRNEK: "Stagger animation: incremental delay + list items + smooth timing"
ÇIKTI: "Delay: 0.1s per item, max 0.5s, ease-out, transform + opacity"
```

**Scale Animations:**
```
PROMPT: "Scale entrance: [initial scale] + [final scale] + [bounce]"
ÖRNEK: "Scale entrance: small start + normal end + subtle bounce"
ÇIKTI: "Transform: scale(0.8) to scale(1), 0.4s ease-out, slight overshoot"

PROMPT: "Zoom animation: [focal point] + [scale factor] + [blur effect]"
ÖRNEK: "Zoom animation: center focus + 1.1x scale + no blur"
ÇIKTI: "Transform-origin: center, scale(1.1), no filter, 0.3s ease"
```

#### 4.5.2 Interactive Animations

**Hover Animations:**
```
PROMPT: "Hover effect: [property change] + [timing] + [reversibility]"
ÖRNEK: "Hover effect: color shift + quick + smooth reverse"
ÇIKTI: "Color transition: 0.2s ease, background: 0.2s ease, reversible"

PROMPT: "Button hover: [visual feedback] + [tactile feel] + [accessibility]"
ÖRNEK: "Button hover: lift + press feel + focus visible"
ÇIKTI: "Transform: translateY(-1px), box-shadow increase, focus ring"
```

## 5. Template Oluşturma Preprompt'ları

### 5.1 Sosyal Medya Template'leri

#### 5.1.1 Instagram Post Template'leri

**Product Showcase Template:**
```
PROMPT: "Instagram ürün template: [layout] + [brand elements] + [CTA placement]"
ÖRNEK: "Instagram ürün template: minimal layout + logo + alt köşe CTA"
ÇIKTI: "1080x1080, ürün center, logo top-left, CTA bottom-right, brand colors"

PROMPT: "Story template: [vertical format] + [swipe elements] + [engagement]"
ÖRNEK: "Story template: 9:16 format + swipe up + poll/question"
ÇIKTI: "1080x1920, vertical layout, interactive elements, brand consistent"

PROMPT: "Carousel template: [multi-slide] + [consistent design] + [narrative flow]"
ÖRNEK: "Carousel template: 5 slide + uniform style + story progression"
ÇIKTI: "Consistent header/footer, slide indicators, progressive content reveal"
```

**Quote/Motivational Template:**
```
PROMPT: "Quote template: [typography focus] + [background] + [attribution]"
ÖRNEK: "Quote template: large text + minimal background + author credit"
ÇIKTI: "Large serif font, simple background, quote marks, author bottom-right"

PROMPT: "Motivational template: [inspiring imagery] + [overlay text] + [call to action]"
ÖRNEK: "Motivational template: nature photo + inspiring quote + follow CTA"
ÇIKTI: "Hero image, text overlay with good contrast, subtle CTA integration"
```

#### 5.1.2 Facebook Cover Template'leri

**Business Cover Template:**
```
PROMPT: "Business cover: [brand identity] + [contact info] + [value proposition]"
ÖRNEK: "Business cover: professional look + phone/email + service highlight"
ÇIKTI: "820x312, logo prominent, contact info visible, service benefits listed"

PROMPT: "Event cover: [event details] + [visual appeal] + [registration CTA]"
ÖRNEK: "Event cover: date/time/location + attractive design + sign up button"
ÇIKTI: "Event info hierarchy, compelling visuals, clear registration call-to-action"
```

### 5.2 E-ticaret Template'leri

#### 5.2.1 Product Display Template'leri

**Product Grid Template:**
```
PROMPT: "Product grid: [layout structure] + [product info] + [pricing display]"
ÖRNEK: "Product grid: 2x2 layout + name/price + prominent pricing"
ÇIKTI: "Equal spacing, product image top, name/price bottom, consistent styling"

PROMPT: "Single product: [hero image] + [details section] + [purchase flow]"
ÖRNEK: "Single product: large image + specs/description + buy now"
ÇIKTI: "Image left 60%, details right 40%, prominent CTA button"

PROMPT: "Comparison template: [side-by-side] + [feature comparison] + [recommendation]"
ÖRNEK: "Comparison template: 3 products + feature table + best choice highlight"
ÇIKTI: "Product columns, feature checkmarks, recommended badge, price comparison"
```

#### 5.2.2 Promotional Template'leri

**Sale Banner Template:**
```
PROMPT: "Sale banner: [discount highlight] + [urgency elements] + [product showcase]"
ÖRNEK: "Sale banner: 50% off + limited time + featured products"
ÇIKTI: "Large discount text, countdown timer, product grid, urgent colors"

PROMPT: "Newsletter template: [header branding] + [content sections] + [footer links]"
ÖRNEK: "Newsletter template: logo header + product highlights + social links"
ÇIKTI: "Branded header, product sections, social media footer, mobile responsive"
```

### 5.3 Business ve Corporate Template'leri

#### 5.3.1 Presentation Template'leri

**Slide Deck Template:**
```
PROMPT: "Presentation slide: [title layout] + [content structure] + [brand consistency]"
ÖRNEK: "Presentation slide: clean title + bullet points + company branding"
ÇIKTI: "Title top, content area, logo bottom-right, consistent color scheme"

PROMPT: "Infographic template: [data visualization] + [flow design] + [key insights]"
ÖRNEK: "Infographic template: charts/graphs + logical flow + highlighted takeaways"
ÇIKTI: "Visual hierarchy, data charts, connecting elements, key point callouts"
```

#### 5.3.2 Marketing Material Template'leri

**Flyer Template:**
```
PROMPT: "Flyer design: [attention grabbing] + [information hierarchy] + [contact details]"
ÖRNEK: "Flyer design: bold headline + service details + contact info"
ÇIKTI: "Eye-catching header, organized content sections, prominent contact area"

PROMPT: "Brochure template: [tri-fold layout] + [service sections] + [visual appeal]"
ÖRNEK: "Brochure template: 3 panel + service breakdown + professional images"
ÇIKTI: "Panel organization, service descriptions, professional photography, contact panel"
```

### 5.4 Event ve Announcement Template'leri

#### 5.4.1 Event Promotion Template'leri

**Event Poster Template:**
```
PROMPT: "Event poster: [event details] + [visual impact] + [registration info]"
ÖRNEK: "Event poster: conference details + professional design + ticket link"
ÇIKTI: "Event title prominent, date/time/location clear, speaker info, registration CTA"

PROMPT: "Invitation template: [formal/casual tone] + [event specifics] + [RSVP method]"
ÖRNEK: "Invitation template: wedding style + ceremony details + RSVP card"
ÇIKTI: "Elegant typography, event information hierarchy, RSVP instructions"
```

#### 5.4.2 Announcement Template'leri

**News Announcement:**
```
PROMPT: "News template: [headline impact] + [story structure] + [credibility elements]"
ÖRNEK: "News template: breaking news + who/what/when + source attribution"
ÇIKTI: "Bold headline, news structure, timestamp, source credibility indicators"

PROMPT: "Update announcement: [change notification] + [impact explanation] + [next steps]"
ÖRNEK: "Update announcement: policy change + user impact + action required"
ÇIKTI: "Clear change description, impact assessment, user action guidance"
```

## 6. Optimizasyon ve İyileştirme Preprompt'ları

### 6.1 Performance Optimization

#### 6.1.1 Loading Speed Optimization

**Image Optimization:**
```
PROMPT: "Image optimize: [format selection] + [compression] + [responsive sizing]"
ÖRNEK: "Image optimize: WebP format + 80% quality + multiple sizes"
ÇIKTI: "WebP with JPEG fallback, 80% compression, srcset for responsive"

PROMPT: "Lazy loading: [threshold distance] + [placeholder strategy] + [loading animation]"
ÖRNEK: "Lazy loading: 200px threshold + blur placeholder + fade-in"
ÇIKTI: "Intersection observer, 200px margin, blur-to-sharp transition"

PROMPT: "Critical path: [above-fold priority] + [defer non-critical] + [preload key assets]"
ÖRNEK: "Critical path: hero content + defer footer + preload fonts"
ÇIKTI: "Inline critical CSS, defer non-essential JS, preload web fonts"
```

**Code Optimization:**
```
PROMPT: "CSS optimize: [unused removal] + [minification] + [critical inline]"
ÖRNEK: "CSS optimize: purge unused + minify + inline critical"
ÇIKTI: "PurgeCSS, minification, critical CSS inline, non-critical deferred"

PROMPT: "JS optimization: [code splitting] + [tree shaking] + [compression]"
ÖRNEK: "JS optimization: dynamic imports + remove unused + gzip"
ÇIKTI: "Dynamic imports, tree shaking, minification, gzip compression"
```

#### 6.1.2 Rendering Performance

**Layout Optimization:**
```
PROMPT: "Layout performance: [reflow prevention] + [GPU acceleration] + [paint optimization]"
ÖRNEK: "Layout performance: avoid reflow + transform animations + layer promotion"
ÇIKTI: "Transform/opacity animations, will-change property, composite layers"

PROMPT: "Scroll performance: [smooth scrolling] + [virtual scrolling] + [debouncing]"
ÖRNEK: "Scroll performance: 60fps smooth + virtual lists + throttled events"
ÇIKTI: "CSS scroll-behavior, virtual scrolling for long lists, throttled handlers"
```

### 6.2 Accessibility Optimization

#### 6.2.1 Visual Accessibility

**Color Contrast:**
```
PROMPT: "Contrast optimize: [WCAG compliance] + [color blind friendly] + [high contrast mode]"
ÖRNEK: "Contrast optimize: AA standard + deuteranopia + dark mode"
ÇIKTI: "4.5:1 contrast ratio, colorblind-safe palette, high contrast alternative"

PROMPT: "Typography accessibility: [readable fonts] + [size scaling] + [line spacing]"
ÖRNEK: "Typography accessibility: dyslexia friendly + scalable + comfortable spacing"
ÇIKTI: "OpenDyslexic option, rem units, 1.5+ line height, adequate spacing"
```

#### 6.2.2 Interactive Accessibility

**Keyboard Navigation:**
```
PROMPT: "Keyboard access: [tab order] + [focus indicators] + [skip links]"
ÖRNEK: "Keyboard access: logical order + visible focus + content skip"
ÇIKTI: "Logical tab sequence, visible focus rings, skip-to-content links"

PROMPT: "Screen reader: [semantic markup] + [ARIA labels] + [content structure]"
ÖRNEK: "Screen reader: proper headings + descriptive labels + logical structure"
ÇIKTI: "Semantic HTML, ARIA labels, heading hierarchy, landmark roles"
```

### 6.3 SEO Optimization

#### 6.3.1 Content SEO

**Meta Optimization:**
```
PROMPT: "Meta tags: [title optimization] + [description] + [keywords]"
ÖRNEK: "Meta tags: compelling title + search description + relevant keywords"
ÇIKTI: "60-char title, 160-char description, natural keyword integration"

PROMPT: "Structured data: [schema markup] + [rich snippets] + [search enhancement]"
ÖRNEK: "Structured data: product schema + review stars + price display"
ÇIKTI: "JSON-LD schema, product/review markup, enhanced search results"
```

#### 6.3.2 Technical SEO

**URL Structure:**
```
PROMPT: "URL optimization: [clean structure] + [keyword inclusion] + [hierarchy]"
ÖRNEK: "URL optimization: readable URLs + target keywords + logical structure"
ÇIKTI: "Clean URLs, keyword inclusion, logical hierarchy, no parameters"

PROMPT: "Site structure: [navigation clarity] + [internal linking] + [sitemap]"
ÖRNEK: "Site structure: clear navigation + related links + XML sitemap"
ÇIKTI: "Logical navigation, contextual internal links, comprehensive sitemap"
```

### 6.4 User Experience Optimization

#### 6.4.1 Interaction Optimization

**Form UX:**
```
PROMPT: "Form optimize: [field reduction] + [inline validation] + [error prevention]"
ÖRNEK: "Form optimize: essential fields + real-time feedback + clear errors"
ÇIKTI: "Minimal fields, instant validation, helpful error messages"

PROMPT: "Navigation UX: [intuitive structure] + [breadcrumbs] + [search functionality]"
ÖRNEK: "Navigation UX: clear hierarchy + location indicators + smart search"
ÇIKTI: "Logical menu structure, breadcrumb trail, predictive search"
```

#### 6.4.2 Content Optimization

**Readability:**
```
PROMPT: "Content readability: [scan-friendly] + [chunk information] + [visual breaks]"
ÖRNEK: "Content readability: bullet points + short paragraphs + white space"
ÇIKTI: "Scannable format, short paragraphs, bullet points, adequate spacing"

PROMPT: "Information architecture: [logical grouping] + [progressive disclosure] + [user flow]"
ÖRNEK: "Information architecture: related content + expandable sections + clear path"
ÇIKTI: "Content grouping, collapsible sections, clear user journey"
```


## 7. Platform Spesifik Preprompt'lar

### 7.1 Instagram Optimizasyonu

#### 7.1.1 Instagram Post Optimizasyonu

**Feed Post Optimization:**
```
PROMPT: "Instagram feed optimize: [1080x1080] + [brand consistency] + [engagement hooks]"
ÖRNEK: "Instagram feed optimize: kare format + marka renkleri + ilk 3 saniye"
ÇIKTI: "1080x1080 px, brand color palette, hook in first 3 seconds, clear CTA"

PROMPT: "Instagram carousel: [swipe encouragement] + [story flow] + [final CTA]"
ÖRNEK: "Instagram carousel: swipe teaser + step-by-step + action slide"
ÇIKTI: "Swipe indicator, numbered steps, compelling final slide with CTA"

PROMPT: "Instagram Reels: [vertical format] + [quick hook] + [trending audio]"
ÖRNEK: "Instagram Reels: 9:16 format + 3 saniye hook + popüler müzik"
ÇIKTI: "1080x1920, immediate value hook, trending audio, captions for accessibility"
```

**Instagram Story Optimization:**
```
PROMPT: "Story template: [24h urgency] + [interactive elements] + [brand integration]"
ÖRNEK: "Story template: limited time + polls/questions + subtle branding"
ÇIKTI: "Urgency messaging, interactive stickers, brand colors, swipe-up CTA"

PROMPT: "Story highlights: [category organization] + [cover design] + [evergreen content]"
ÖRNEK: "Story highlights: service categories + consistent covers + timeless info"
ÇIKTI: "Organized categories, branded cover icons, valuable evergreen content"
```

#### 7.1.2 Instagram Shopping Integration

**Product Tagging:**
```
PROMPT: "Shopping post: [product tags] + [lifestyle context] + [purchase journey]"
ÖRNEK: "Shopping post: subtle tags + real-life use + easy purchase"
ÇIKTI: "Natural product placement, lifestyle photography, clear shopping tags"

PROMPT: "Shop showcase: [product grid] + [price visibility] + [collection theme]"
ÖRNEK: "Shop showcase: 4 ürün grid + fiyat etiketleri + sezon koleksiyonu"
ÇIKTI: "Clean product grid, visible pricing, cohesive collection presentation"
```

### 7.2 Facebook Optimizasyonu

#### 7.2.1 Facebook Feed Optimization

**Organic Reach Optimization:**
```
PROMPT: "Facebook organic: [engagement bait] + [community building] + [share worthy]"
ÖRNEK: "Facebook organic: meaningful questions + group discussion + valuable content"
ÇIKTI: "Conversation starters, community-focused content, shareable value"

PROMPT: "Facebook video: [auto-play optimization] + [captions] + [mobile viewing]"
ÖRNEK: "Facebook video: silent start + full captions + vertical/square"
ÇIKTI: "Engaging first 3 seconds, complete captions, mobile-optimized format"
```

**Facebook Ads Optimization:**
```
PROMPT: "Facebook ad: [audience targeting] + [ad copy] + [visual hierarchy]"
ÖRNEK: "Facebook ad: lookalike audience + benefit-focused + clear CTA"
ÇIKTI: "Targeted messaging, benefit-driven copy, prominent call-to-action"

PROMPT: "Facebook carousel ad: [product showcase] + [unique selling points] + [conversion focus]"
ÖRNEK: "Facebook carousel ad: multiple products + key benefits + shop now"
ÇIKTI: "Product variety, benefit highlights, consistent CTA across cards"
```

#### 7.2.2 Facebook Business Features

**Event Promotion:**
```
PROMPT: "Facebook event: [event details] + [visual appeal] + [RSVP encouragement]"
ÖRNEK: "Facebook event: complete info + attractive cover + easy RSVP"
ÇIKTI: "Comprehensive event details, compelling cover image, clear RSVP process"

PROMPT: "Facebook group: [community guidelines] + [engagement rules] + [value proposition]"
ÖRNEK: "Facebook group: clear rules + discussion prompts + member benefits"
ÇIKTI: "Community standards, engagement strategies, member value delivery"
```

### 7.3 Twitter/X Optimizasyonu

#### 7.3.1 Tweet Optimization

**Text Tweet Optimization:**
```
PROMPT: "Twitter text: [character limit] + [hashtag strategy] + [engagement hooks]"
ÖRNEK: "Twitter text: 280 karakter + 2-3 hashtag + soru/görüş"
ÇIKTI: "Concise messaging, strategic hashtags, conversation starters"

PROMPT: "Twitter thread: [hook tweet] + [value delivery] + [thread conclusion]"
ÖRNEK: "Twitter thread: attention grabber + step-by-step value + summary CTA"
ÇIKTI: "Compelling first tweet, numbered value points, strong conclusion"
```

**Visual Tweet Optimization:**
```
PROMPT: "Twitter image: [16:9 ratio] + [text overlay] + [brand visibility]"
ÖRNEK: "Twitter image: landscape format + key message + logo placement"
ÇIKTI: "1200x675 px, readable text overlay, subtle brand integration"

PROMPT: "Twitter video: [short duration] + [captions] + [mobile optimization]"
ÖRNEK: "Twitter video: under 2 minutes + full captions + vertical option"
ÇIKTI: "Concise video content, accessibility captions, mobile-friendly format"
```

#### 7.3.2 Twitter Engagement Strategy

**Community Building:**
```
PROMPT: "Twitter engagement: [reply strategy] + [retweet value] + [mention etiquette]"
ÖRNEK: "Twitter engagement: thoughtful replies + value-add retweets + respectful mentions"
ÇIKTI: "Meaningful interactions, valuable content sharing, professional networking"

PROMPT: "Twitter spaces: [topic selection] + [audience engagement] + [follow-up content]"
ÖRNEK: "Twitter spaces: trending topics + interactive discussion + recap content"
ÇIKTI: "Relevant topics, audience participation, post-space content strategy"
```

### 7.4 LinkedIn Optimizasyonu

#### 7.4.1 LinkedIn Professional Content

**Professional Post Optimization:**
```
PROMPT: "LinkedIn post: [professional tone] + [industry insights] + [network engagement]"
ÖRNEK: "LinkedIn post: thought leadership + industry trends + professional discussion"
ÇIKTI: "Professional voice, valuable insights, network-building content"

PROMPT: "LinkedIn article: [long-form value] + [professional expertise] + [thought leadership]"
ÖRNEK: "LinkedIn article: detailed analysis + expert opinion + industry leadership"
ÇIKTI: "In-depth content, professional credibility, thought leadership positioning"
```

**LinkedIn Company Page:**
```
PROMPT: "Company page: [brand positioning] + [employee advocacy] + [industry authority]"
ÖRNEK: "Company page: market leader + team highlights + industry expertise"
ÇIKTI: "Strong brand presence, employee spotlights, industry thought leadership"

PROMPT: "LinkedIn ads: [B2B targeting] + [professional messaging] + [lead generation]"
ÖRNEK: "LinkedIn ads: decision makers + value proposition + lead capture"
ÇIKTI: "Precise B2B targeting, professional ad copy, effective lead generation"
```

### 7.5 TikTok Optimizasyonu

#### 7.5.1 TikTok Content Strategy

**Viral Content Creation:**
```
PROMPT: "TikTok viral: [trend participation] + [unique angle] + [quick hook]"
ÖRNEK: "TikTok viral: current trend + brand twist + first 3 seconds"
ÇIKTI: "Trending audio/hashtag, brand-specific angle, immediate engagement hook"

PROMPT: "TikTok educational: [quick tips] + [visual demonstration] + [actionable content]"
ÖRNEK: "TikTok educational: 60 second tips + step-by-step + immediate value"
ÇIKTI: "Bite-sized learning, visual instruction, practical application"
```

**TikTok Brand Content:**
```
PROMPT: "TikTok brand: [authentic voice] + [entertainment value] + [subtle promotion]"
ÖRNEK: "TikTok brand: genuine personality + fun content + natural product integration"
ÇIKTI: "Authentic brand voice, entertaining content, organic product placement"

PROMPT: "TikTok challenge: [participation ease] + [brand integration] + [shareability]"
ÖRNEK: "TikTok challenge: simple steps + brand element + viral potential"
ÇIKTI: "Easy participation, brand visibility, high shareability factor"
```

### 7.6 YouTube Optimizasyonu

#### 7.6.1 YouTube Video Optimization

**Thumbnail Optimization:**
```
PROMPT: "YouTube thumbnail: [click appeal] + [text overlay] + [brand consistency]"
ÖRNEK: "YouTube thumbnail: eye-catching + key benefit + brand colors"
ÇIKTI: "High contrast, readable text, consistent branding, emotion/curiosity"

PROMPT: "YouTube title: [keyword optimization] + [click appeal] + [search ranking]"
ÖRNEK: "YouTube title: target keywords + compelling hook + SEO friendly"
ÇIKTI: "Strategic keywords, engaging title, search optimization"
```

**Video Content Structure:**
```
PROMPT: "YouTube structure: [hook opening] + [value delivery] + [engagement retention]"
ÖRNEK: "YouTube structure: 15 second hook + structured content + audience retention"
ÇIKTI: "Strong opening hook, organized content delivery, retention strategies"

PROMPT: "YouTube description: [keyword rich] + [timestamp navigation] + [call to action]"
ÖRNEK: "YouTube description: SEO keywords + chapter timestamps + subscribe CTA"
ÇIKTI: "SEO-optimized description, video chapters, clear call-to-action"
```

### 7.7 Pinterest Optimizasyonu

#### 7.7.1 Pinterest Pin Optimization

**Pin Design:**
```
PROMPT: "Pinterest pin: [vertical format] + [text overlay] + [brand watermark]"
ÖRNEK: "Pinterest pin: 2:3 ratio + benefit text + subtle logo"
ÇIKTI: "1000x1500 px, readable text overlay, brand watermark, high quality"

PROMPT: "Pinterest SEO: [keyword rich] + [board organization] + [seasonal content]"
ÖRNEK: "Pinterest SEO: target keywords + themed boards + trending topics"
ÇIKTI: "Keyword optimization, organized boards, seasonal content strategy"
```

**Pinterest Business Strategy:**
```
PROMPT: "Pinterest business: [product showcase] + [lifestyle integration] + [shopping features]"
ÖRNEK: "Pinterest business: product pins + lifestyle context + shopping tags"
ÇIKTI: "Product-focused pins, lifestyle photography, shopping integration"

PROMPT: "Pinterest analytics: [performance tracking] + [audience insights] + [content optimization]"
ÖRNEK: "Pinterest analytics: pin performance + audience behavior + content strategy"
ÇIKTI: "Performance monitoring, audience analysis, data-driven optimization"
```

## 8. Kullanım Senaryoları ve Örnekler

### 8.1 E-ticaret İşletmesi Senaryosu

#### 8.1.1 Ürün Lansmanı Kampanyası

**Senaryo:** Yeni ürün lansmanı için çoklu platform kampanyası

**Instagram Post Serisi:**
```
PROMPT SEQUENCE:
1. "Teaser post: [coming soon] + [product silhouette] + [launch date]"
2. "Feature highlight: [key benefit] + [lifestyle usage] + [pre-order CTA]"
3. "Behind scenes: [creation process] + [team story] + [brand values]"
4. "Launch announcement: [product reveal] + [availability] + [purchase link]"
5. "Customer testimonial: [early user] + [authentic review] + [social proof]"

EXECUTION:
Post 1: "Yeni ürün geliyor! 15 Şubat'ta büyük sürpriz 🎉 #ComingSoon"
Post 2: "Hayatınızı kolaylaştıracak özellik: 10 saniyede kurulum ⚡"
Post 3: "6 aylık geliştirme sürecinin hikayesi 👥 #BehindTheScenes"
Post 4: "Artık mevcut! İlk 100 alıcıya %20 indirim 🛒 Link bio'da"
Post 5: "Müşterimiz Ayşe: 'Hayat kurtarıcı!' ⭐⭐⭐⭐⭐"
```

**Facebook Ads Kampanyası:**
```
PROMPT SEQUENCE:
1. "Awareness ad: [problem identification] + [solution preview] + [interest targeting]"
2. "Consideration ad: [product benefits] + [feature demonstration] + [retargeting]"
3. "Conversion ad: [limited offer] + [urgency] + [purchase optimization]"

EXECUTION:
Ad 1: "Bu sorunu yaşıyor musunuz? Çözümümüz yakında..."
Ad 2: "3 adımda hayatınızı değiştirin: [video demonstration]"
Ad 3: "Son 24 saat! %20 indirim kaçırma 🔥"
```

#### 8.1.2 Sezonsal Kampanya Yönetimi

**Kış Koleksiyonu Kampanyası:**
```
PROMPT STRATEGY:
"Seasonal campaign: [winter theme] + [product categories] + [gift positioning]"

CONTENT CALENDAR:
Week 1: "Winter collection preview: [style showcase] + [trend alignment]"
Week 2: "Gift guide creation: [recipient categories] + [price ranges]"
Week 3: "Holiday promotion: [bundle offers] + [gift wrapping]"
Week 4: "Last chance messaging: [urgency] + [inventory scarcity]"

VISUAL THEME:
"Winter aesthetic: [cool colors] + [cozy atmosphere] + [seasonal elements]"
Color palette: #1E3A8A (winter blue), #F3F4F6 (snow white), #DC2626 (accent red)
```

### 8.2 Hizmet Sektörü Senaryosu

#### 8.2.1 Danışmanlık Firması Pazarlaması

**Thought Leadership Kampanyası:**
```
PROMPT STRATEGY:
"Expertise positioning: [industry insights] + [case studies] + [thought leadership]"

LINKEDIN CONTENT:
1. "Industry analysis: [market trends] + [expert opinion] + [future predictions]"
2. "Case study: [client challenge] + [solution approach] + [measurable results]"
3. "Best practices: [actionable tips] + [implementation guide] + [common mistakes]"
4. "Industry news: [trend commentary] + [business impact] + [strategic advice]"

EXECUTION EXAMPLE:
"2024'te dijital dönüşüm trendleri: AI entegrasyonu %300 arttı 📈
Müşterilerimizin %85'i verimlilikte artış yaşadı.
Sizin stratejiniz hazır mı? 🤔 #DigitalTransformation"
```

**Webinar Serisi Promosyonu:**
```
PROMPT SEQUENCE:
1. "Webinar announcement: [topic value] + [expert credentials] + [registration CTA]"
2. "Content teaser: [key insights preview] + [audience benefit] + [FOMO creation]"
3. "Live reminder: [starting soon] + [last chance] + [direct link]"
4. "Follow-up content: [key takeaways] + [recording access] + [next steps]"

SOCIAL MEDIA EXECUTION:
"Ücretsiz Webinar: 'E-ticaret SEO Stratejileri' 🎯
📅 25 Şubat, 14:00
🎤 Uzman: Mehmet Yılmaz (10+ yıl deneyim)
💡 Öğrenecekleriniz: Organik trafik %200 artırma
🎁 Bonus: SEO checklist hediye
👆 Kayıt linki bio'da"
```

### 8.3 Kişisel Marka Senaryosu

#### 8.3.1 Influencer İçerik Stratejisi

**Günlük İçerik Planlaması:**
```
PROMPT FRAMEWORK:
"Daily content mix: [educational 40%] + [personal 30%] + [promotional 20%] + [entertainment 10%]"

MONDAY - MOTIVATION:
"Motivational Monday: [weekly goal] + [personal challenge] + [audience encouragement]"
Example: "Yeni haftaya başlarken hedefim: 5 yeni beceri öğrenmek 💪
Sizin bu haftaki hedefiniz nedir? Yorumda paylaşın! 👇"

WEDNESDAY - WISDOM:
"Wisdom Wednesday: [industry tip] + [personal experience] + [actionable advice]"
Example: "3 yılda öğrendiğim en değerli ders: Hayır demeyi öğrenmek 🎯
Zaman yönetiminde game-changer! Sizin deneyiminiz? 🤔"

FRIDAY - FEATURE:
"Feature Friday: [product/service spotlight] + [honest review] + [audience value]"
Example: "Bu hafta test ettiğim araç: [Product Name] 🔧
Artıları: ✅ Kolay kullanım ✅ Zaman tasarrufu
Eksileri: ❌ Fiyat biraz yüksek
Genel değerlendirme: 8/10 ⭐"
```

#### 8.3.2 Uzman Konumlandırma

**Expertise Building Content:**
```
PROMPT STRATEGY:
"Authority building: [knowledge sharing] + [case studies] + [industry commentary]"

CONTENT PILLARS:
1. "Educational content: [how-to guides] + [industry insights] + [trend analysis]"
2. "Behind-the-scenes: [work process] + [tool recommendations] + [learning journey]"
3. "Community building: [audience questions] + [collaborative content] + [networking]"

EXECUTION EXAMPLES:
Educational: "5 adımda etkili sunum hazırlama 📊
1️⃣ Hedef kitle analizi
2️⃣ Ana mesaj belirleme
3️⃣ Görsel hikaye oluşturma
4️⃣ Etkileşim noktaları
5️⃣ Güçlü kapanış
Hangi adımda zorlanıyorsunuz? 🤔"

Behind-the-scenes: "Bugünkü çalışma alanım: kahve ☕ + laptop 💻 + sınırsız motivasyon 🚀
Yeni proje: 50 sayfalık e-kitap yazıyorum 📚
Konu: Dijital pazarlama stratejileri
İlerleme: %60 ✅ Heyecanlıyım! 🎉"
```

### 8.4 Startup Senaryosu

#### 8.4.1 Ürün Lansmanı Öncesi Buzz Yaratma

**Pre-Launch Campaign:**
```
PROMPT TIMELINE:
"8-week pre-launch: [awareness building] + [community creation] + [anticipation building]"

WEEK 1-2: PROBLEM IDENTIFICATION
"Problem awareness: [pain point highlighting] + [market research sharing] + [solution teasing]"
Example: "Araştırmamıza göre %78'iniz bu sorunla karşılaşıyor 📊
Peki ya çözüm 1 dakika uzakta olsaydı? 🤔
#ProblemSolved #ComingSoon"

WEEK 3-4: SOLUTION PREVIEW
"Solution teasing: [feature hints] + [benefit previews] + [beta tester recruitment]"
Example: "Beta testerimiz Sarah: 'İlk kullanımda hayatım değişti!' 🌟
Sen de beta tester olmak ister misin?
Link bio'da 👆 #BetaTest #Innovation"

WEEK 5-6: COMMUNITY BUILDING
"Community engagement: [user-generated content] + [feedback collection] + [anticipation building]"
Example: "Beta tester topluluğumuz büyüyor! 🚀
Şu ana kadar 500+ geri bildirim aldık
En çok istenen özellik: Mobil uygulama 📱
Yakında geliyor! #Community #Feedback"

WEEK 7-8: LAUNCH COUNTDOWN
"Launch preparation: [final teasers] + [launch date announcement] + [early bird offers]"
Example: "GERİ SAYIM BAŞLADI! ⏰
🗓️ 15 Mart 2024
🎁 İlk 100 kullanıcıya özel fiyat
🚀 Hayatınızı değiştirecek çözüm
Hazır mısınız? #LaunchCountdown"
```

#### 8.4.2 Investor Pitch Deck Hazırlama

**Pitch Deck Content Strategy:**
```
PROMPT STRUCTURE:
"Investor pitch: [problem-solution fit] + [market opportunity] + [traction proof] + [funding ask]"

SLIDE SEQUENCE:
1. "Hook slide: [compelling statistic] + [market pain] + [solution preview]"
2. "Problem slide: [market research] + [customer pain points] + [current solutions inadequacy]"
3. "Solution slide: [unique value proposition] + [key features] + [differentiation]"
4. "Market slide: [TAM/SAM/SOM] + [growth trends] + [opportunity size]"
5. "Traction slide: [user growth] + [revenue metrics] + [key partnerships]"
6. "Business model: [revenue streams] + [pricing strategy] + [unit economics]"
7. "Competition: [competitive landscape] + [competitive advantages] + [market positioning]"
8. "Team slide: [founder credentials] + [key team members] + [advisory board]"
9. "Financial projections: [3-year forecast] + [key assumptions] + [milestones]"
10. "Funding ask: [amount needed] + [use of funds] + [expected outcomes]"

VISUAL GUIDELINES:
"Pitch design: [clean layout] + [data visualization] + [consistent branding]"
- Minimal text per slide
- Strong visual hierarchy
- Consistent color scheme
- Professional typography
- Compelling data charts
```

### 8.5 Nonprofit Organizasyon Senaryosu

#### 8.5.1 Farkındalık Kampanyası

**Social Cause Campaign:**
```
PROMPT STRATEGY:
"Awareness campaign: [emotional connection] + [factual information] + [action encouragement]"

CAMPAIGN PHASES:
Phase 1: "Problem awareness: [shocking statistics] + [personal stories] + [emotional impact]"
Example: "Her 30 saniyede bir çocuk temiz suya erişemediği için hastalanıyor 💧😢
Bu sadece bir istatistik değil, gerçek hayatlar...
Değişim mümkün! #TemizSu #DeğişimMümkün"

Phase 2: "Solution presentation: [organization work] + [success stories] + [impact measurement]"
Example: "Geçen yıl 10,000 çocuğa temiz su ulaştırdık! 🎉
Ahmet'in hikayesi: Artık okula gidebiliyor 📚
Sen de bu değişimin parçası ol! #EtkiYarat"

Phase 3: "Call to action: [donation appeal] + [volunteer opportunities] + [sharing encouragement]"
Example: "50 TL = 1 çocuğa 1 ay temiz su 💧
100 TL = 1 aileye su filtresi 🏠
Bağış yap: [link]
Gönüllü ol: [link]
Paylaş ve farkındalık yarat! #BağışYap"
```

#### 8.5.2 Gönüllü Toplama Kampanyası

**Volunteer Recruitment:**
```
PROMPT FRAMEWORK:
"Volunteer appeal: [meaningful impact] + [time commitment] + [personal growth] + [community building]"

RECRUITMENT MESSAGES:
"Impact-focused: [change you can make] + [beneficiary stories] + [volunteer testimonials]"
Example: "2 saatin 20 çocuğun geleceğini değiştirebilir 🌟
Gönüllümüz Zeynep: 'En anlamlı 2 saatim!' 💝
Sen de aramıza katıl! #GönüllüOl #AnlamlıZaman"

"Skill-based volunteering: [professional skills] + [career development] + [networking]"
Example: "Pazarlama becerilerin sosyal fayda için kullan! 📈
✅ Portfolio geliştir
✅ Yeni insanlarla tanış
✅ Anlamlı projeler yap
Başvur: [link] #SkillBasedVolunteering"

"Community building: [belonging] + [friendship] + [shared values]"
Example: "Sadece gönüllülük değil, yeni arkadaşlıklar! 👥
Ortak değerler, güzel anılar, kalıcı dostluklar...
Topluluğumuzun parçası ol! #Topluluk #Dostluk"
```

Bu kapsamlı preprompt dökümanı, kullanıcıların her türlü görsel içerik üretim ihtiyacını karşılayacak şekilde tasarlanmıştır. Her preprompt, specific use case'ler için optimize edilmiş ve gerçek dünya senaryolarında test edilmiş format'larda sunulmuştur. Sistem, kullanıcıların creative workflow'unu accelerate ederken, professional quality output'lar elde etmelerini sağlar.

