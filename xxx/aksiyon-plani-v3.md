# Girişimci Aksiyon Planı v3
## Strateji Belirleme Öncesi Uygulama Rehberi

**Profil:** Tek kurucu veya küçük ekip (1–5 kişi), yeni girişimci.
**Temel amaç:** İşletme stratejisini kurmadan önce yapılması gereken her şey.
**Format:** Her adım → nasıl yapılır, beklenen çıktı, hipotez şablonu, zaman kutusu.
**Yapısal kurallar:**
- [MVP] = Minimum Viable Path — atlanamaz adım.
- [K] = Koşullu — duruma göre atlanabilir.
- ↩ = Geri dönüş tetikleyicisi (hangi sinyal bu adıma geri döndürür).
- Her fazın sonunda GATE (geçiş kapısı) kararı var.

---

## PLANIN DÖNGÜ HARİTASI

```
FAZ 0 ──→ FAZ 1 ──→ GATE 1 ──→ FAZ 2 ──→ GATE 2 ──→ FAZ 3 ──→ GATE 3 ──→ FAZ 4
  ↑            ↑         │          ↑         │                      │
  │            │         │          │         │                      │
  │            └─────────┘          └─────────┘                      │
  │         problem yanlışsa     çözüme talep yoksa                  │
  │                                                                  │
  └──────────────────────────────────────────────────────────────────┘
                    iş modeli temelden çöktüyse
```

**Geri dönüş kuralı:** Her GATE'te dört karar vardır: İlerle, Öğren (aynı fazda kal), Pivot (bir önceki faza dön), Öldür (projeyi durdur).

---

## FAZ 0 — TEMEL VE NİYET
**Zaman kutusu:** 1–2 hafta
**Amaç:** "Kim olarak, neden, hangi yönde?" sorularını netleştirmek.

---

### 01 → Kurucu Temeli [MVP]
**(Niyet + Çıkış Yönü + Kurucu–Pazar Uyumu)**

Bu adım orijinal planın 02 (Niyet), 30 (Exit Strategy) ve yeni eklenen Kurucu–Pazar Uyumu'nu tek çatı altında birleştirir. Gerekçe: kurucu niyeti, çıkış yönü ve kurucu–pazar uyumu birbirini belirler; bunları ayrı fazlarda ele almak tutarsız kararlara yol açar.

**Nasıl yapılır:**

1. **5 Neden (5 Whys):** "Neden bu işi yapıyorum?" sorusunu 5 kez tekrarla. Çekirdek motivasyonu bul.
2. **Çıkış yönü taslağı:** Üç opsiyonu değerlendir: (a) kârlı küçük şirket, (b) yatırım alıp büyüme/satılma, (c) büyük ölçekli (IPO yolu). Hangisi niyetinle uyumlu? Kesin karar vermek zorunda değilsin; yön belirle.
3. **Kurucu–Pazar Uyumu öz değerlendirmesi:** Dört boyutta kendini puanla (1–5):
   - Saplantı: Bu alandaki rakipleri, başarısızlıkları, dinamikleri ne kadar iyi biliyorsun?
   - Hikâye: Bu problemi çözmeye seni yönlendiren kişisel deneyim var mı?
   - Ağ: Hedef müşterilere, sektör insanlarına, mentörlere erişimin var mı?
   - Yetkinlik: Çözüm için gereken teknik/ticari becerilerin var mı (veya 3 ay içinde edinebilir misin)?
4. **Ortak kurucu değerlendirmesi (varsa):** Başarı tanımı, değerler, rol dağılımı, risk toleransı, zaman taahhüdü, çatışma çözümü konularında hizalanma kontrolü yap. Hak ediş (vesting) yapısını tartış: standart 4 yıl, 1 yıl cliff.

**Beklenen çıktı:**
- 1 sayfalık Niyet + Yön Özeti
- Kurucu–Pazar Uyumu skorkartı (4 boyut × 1–5 puan)
- Ortak kurucu varsa: hizalanma özeti + vesting taslağı

**Hipotez şablonu:**
- Keşif hipotezi: "Niyetim N ise, hedef kitledeki motivasyon M ile uyum olmalı; bunu ilk 10 müşteri görüşmesinde tema örtüşmesiyle test ederim."

**↩ Geri dönüş tetikleyicisi:** Faz 1'de müşteri görüşmeleri niyetle çelişen örüntüler ortaya koyarsa → bu adıma dön, niyeti veya hedef kitleyi revize et.

---

### 02 → Vizyon / Misyon / Değerler [K]
**(Golden Circle — Why / How / What)**

Erken aşamada 1 sayfalık taslak yeterlidir. Mükemmelleştirmek için erken.

**Nasıl yapılır:**

1. Why–How–What tek sayfa formatında yaz.
2. Test edilebilir vizyon: Vizyonun 2 davranışsal göstergesi olsun (kullanıcı sayısı değil, kullanıcı davranışı).
3. Vizyonu 1 cümlede özetle: "X grubunun Y yapabildiği bir dünya."

**Beklenen çıktı:**
- Vizyon/Misyon/Değerler taslağı (1 sayfa) + 2 test edilebilir gösterge.

**Hipotez şablonu:**
- Keşif hipotezi: "Vizyon V doğruysa, 3 ay içinde kullanıcı görüşlerinde V'ye işaret eden en az 10 alıntı olacaktır."

---

### 03 → Hafif Makro Tarama [K]
**(Basitleştirilmiş PESTEL — 2–3 faktör)**

Orijinal plandaki tam PESTEL + DESTEP + Senaryo Planlaması + Trend Radar tek kurucu için aşırıdır. Bu adım, o hacmi 1–2 saatlik odaklanmış bir taramaya indirger.

**Nasıl yapılır:**

1. Girişim alanına göre PESTEL'in en kritik 2–3 faktörünü seç:
   - Fintech → Legal, Economic, Technological
   - Tüketici uygulaması → Social, Technological, Economic
   - Sağlık → Legal, Technological, Social
2. Her faktör için 1 soru sor: "Bu faktörde önümüzdeki 12–24 ayda beni doğrudan etkileyen ne değişiyor?"
3. Her bulgu için "Peki ne olmuş?" testi uygula: bulgu → girişimim için anlamı → yapılacak eylem.

**Beklenen çıktı:**
- 2–3 faktör × 1 sayfa özet (toplam maks 3 sayfa)
- Her faktör için 1 eylem maddesi

**Hipotez şablonu:**
- Keşif hipotezi: "Eğer [regülasyon/trend X] 12 ay içinde yürürlüğe girerse, [iş modelimizin Y bileşeni] etkilenir; bunu [gösterge Z] ile izlerim."

**Ne zaman atlanır:** Problem alanı iyi biliniyor, düzenleme riski düşük ve pazar dinamikleri stabil ise.

**↩ Geri dönüş tetikleyicisi:** Faz 2–3'te beklenmedik bir regülasyon/pazar değişikliği olursa → bu adıma dön.

---

## ✦ FAZ 0 ÇIKIŞ KRİTERİ

"Kim olarak, neden, hangi genel yönde ilerliyorum?" sorusuna net cevap verebiliyorsan Faz 1'e geç. Mükemmel olmak zorunda değil — yeterince net olması yeterli.

---

## FAZ 1 — PROBLEM KEŞFİ VE DOĞRULAMA
**Zaman kutusu:** 3–6 hafta
**Amaç:** "Gerçek bir problem var mı, kimin problemi, ne kadar acıtıyor?"
**Kritik yol:** 04 → 05 → 07 → 06 (bu sıra zorunlu; 07 paralel yürütülebilir)

---

### 04 → Problem Tanımı ve Değer Önerisi [MVP]
**(JTBD + Value Proposition Canvas — birleşik)**

Orijinal planda ayrı olan Problem (04) ve VPC (06) birleştirildi. Gerekçe: JTBD zaten müşteri acılarını ve kazançlarını içerir; VPC onun görsel uzantısıdır.

**Nasıl yapılır:**

1. **İlk problem hipotezi yaz:** "X kişisi, Y durumunda, Z işini tamamlamak istiyor ama [engel] yüzünden yapamıyor." (JTBD formatı)
2. **Value Proposition Canvas doldur:** Müşteri tarafı (işler, acılar, kazançlar) ve ürün tarafı (acı gidericiler, kazanç yaratıcılar) eşleştir.
3. Alternatif davranışları listele: Müşteri şu anda bu problemi nasıl çözüyor? (Excel, rakip ürün, hiç çözmüyor, vb.)

**Beklenen çıktı:**
- Problem statement (1 cümle, JTBD formatı)
- VPC kartı (1 sayfa)
- Alternatif davranış listesi (ikame analizi)

**Hipotez şablonu:**
- Keşif hipotezi: "Hedef kitle A, [durum D]'de [iş J]'i tamamlamak için şu anda [mevcut çözüm C]'yı kullanıyor." — Test: 15 görüşme ile doğrula.

**↩ Geri dönüş tetikleyicisi:** Faz 3'te MVP'ye düşük etkileşim → problem tanımı yanlış olabilir, bu adıma dön.

---

### 05 → Müşteri Keşfi [MVP]
**(Mom Test + JTBD Değişim Röportajları)**

Bu adım orijinal planın 04 (gözlem/görüşme kısmı) ve 10 (problem validation) adımlarının problem doğrulama bileşenlerini birleştirir.

**Nasıl yapılır:**

1. **Görüşme hedefi belirle:** Minimum 10, ideal 15–20 görüşme. 5'erli gruplar halinde yap; 5 kişiden 3'ü aynı problemi aynı şekilde tanımlıyorsa erken benimseyici segmenti bulunmuş sayılır.
2. **Mom Test kurallarını uygula:**
   - Fikrin hakkında değil, hayatları hakkında konuş.
   - Gelecek görüşleri yerine geçmiş deneyimleri sor.
   - Az konuş, çok dinle.
   - İltifatları, varsayımsal söylemleri ve dilek listelerini veri sayma.
3. **JTBD Değişim Röportajları (Bob Moesta):** Yakın zamanda çözüm değiştirmiş kişilerle görüş. Dört gücü analiz et:
   - İtme: Mevcut çözümdeki hayal kırıklığı neydi?
   - Çekme: Yeni çözümün neyi çekici geldi?
   - Endişe: Değişimden korktuğun ne vardı?
   - Alışkanlık: Eski yöntemde seni tutan ne vardı?
4. **Gözlem (opsiyonel ama değerli):** Hedef kitlenin günlük rutininde davranış gözlemi yap.
5. **Doygunluk kontrolü:** Görüşmeler tekrar etmeye başladığında, görüşmecinin ne söyleyeceğini tahmin edebildiğinde → yeterli.

**Beklenen çıktı:**
- Görüşme özet tablosu (kişi, problem tanımı, şiddet, sıklık, mevcut çözüm)
- Problem doğrulama raporu: "15 kişiden X'i problemi tanıdı, Y'si haftalık yaşıyor, Z'si için çözüm arıyor."
- Taahhüt sinyalleri listesi: net sonraki toplantı, tanıştırma, ön sipariş talebi.

**Hipotez şablonu:**
- Keşif hipotezi: "Problem P, hedef kitlenin en az %60'ında (5/5 kuralı) tanınır ve haftalık tekrarlanır."
- Test: görüşme sonuçları sayımı + şiddet/sıklık kodlaması.

**↩ Geri dönüş tetikleyicisi:** Kimse problemi tanımıyorsa veya "olsa iyi olur ama para vermem" diyorsa → 04'e dön, problem hipotezini revize et.

---

### 06 → Fikir ve Varsayım Haritası [MVP]
**(Elevator Pitch + Assumption Mapping + İlk Pretotyping)**

Orijinal planın 05 (İş Fikri) adımına pretotyping eklendi.

**Nasıl yapılır:**

1. **Elevator Pitch:** "Problem – Çözüm – Hedef Müşteri – Farklılık" formatında 1 cümle yaz. Alternatif: Foundation Sprint formatı → "[MÜŞTERİ]'ye [PROBLEM]'i [REKABET]'ten daha iyi çözeceğiz çünkü [FARKLILAŞMA]."
2. **Assumption Mapping Canvas:** Varsayımları kategorize et:
   - Arzu varsayımları: İnsanlar bunu istiyor mu?
   - Fizibilite varsayımları: Bunu yapabilir miyiz?
   - Sürdürülebilirlik varsayımları: Bundan para kazanabilir miyiz?
   Her varsayımı kritik / orta / düşük risk olarak etiketle. Her kritik varsayım için yanlışlanma ölçütü yaz.
3. **İlk Pretotyping testi:** En kritik "arzu" varsayımını saat/gün bazında test et. Yöntemler:
   - Sahte Kapı: Gerçekmiş gibi görünen buton/sayfa + ilgi ölçümü.
   - Cephe testi: Çözümü varmış gibi sun, talebi ölç.
   - Bir Gecelik Test: Minimum eforla hazırlanmış deneme (ör: manuel hizmet sunumu).

**Beklenen çıktı:**
- Elevator pitch (1 cümle)
- Varsayım haritası tablosu (kategori × risk seviyesi × test yöntemi)
- Pretotyping test sonucu (ilgi oranı)

**Hipotez şablonu:**
- Mekanizma hipotezi: "Eğer [ürün özelliği F] sunulursa, hedef kullanıcıların %X'i [davranış B] gösterecek." — Test: pretotyping sonucu.

**↩ Geri dönüş tetikleyicisi:** Pretotyping'de sıfır ilgi → 04'e dön (yanlış problem mi?) veya çözüm yaklaşımını değiştir.

---

### 07 → Pazar ve Rakip Taraması [MVP]
**(TAM–SAM–SOM + Rakip Analizi — birleşik)**

Orijinal planda ayrı olan 07 (Pazar) ve 08 (Rakip) birleştirildi. Gerekçe: ikisi de masabaşı araştırması, birlikte yapılması daha verimli. Fragmentation Index kaldırıldı (erken aşama için gereksiz detay).

**Nasıl yapılır:**

1. **TAM–SAM–SOM** (aşağıdan yukarıya hesapla — daha inandırıcı):
   - SOM = Satış kapasitesi × Dönüşüm oranları × 12–24 aylık erişim kısıtı
   - SAM = Ürünün sunabileceği toplam segment
   - TAM = En geniş pazar (vizyon ölçeği — "bu 1 milyar dolarlık pazar olabilir mi?")
2. **Rakip matrisi:** 3–5 ana rakip + 2–3 ikame davranış. Karşılaştırma boyutları: fiyat, hedef kitle, temel özellik, dağıtım kanalı, zayıf nokta.
3. **Boşluk analizi (white space):** Rakiplerin zayıf noktalarından 2–3 stratejik boşluk çıkar.
4. **Rakip kullanıcı yorumları:** G2, Capterra, App Store, Reddit'te rakip ürünlerin olumsuz yorumlarını tara — bunlar karşılanmamış ihtiyaçlar.

**Beklenen çıktı:**
- TAM–SAM–SOM tablosu (aşağıdan yukarıya hesaplamayla)
- Rakip matrisi + 2–3 boşluk önerisi

**Hipotez şablonu:**
- Keşif hipotezi: "SAM içindeki segment S, aylık X arama hacmine ve Y% dönüşüm potansiyeline sahip."
- Test: Google Trends + SEMrush + rakip yorum analizi.

**Paralel çalışma notu:** Bu adım, 05 (Müşteri Keşfi) ile paralel yürütülebilir. Görüşmeler devam ederken masabaşı araştırması yapılabilir.

---

## ✦ GATE 1 — PROBLEM DOĞRULANDI MI?

**3 kriter:**
1. Problem, görüşülen kişilerin en az %60'ında tanınıyor ve tekrarlanıyor.
2. En az 3–5 kişi aktif olarak çözüm arıyor veya mevcut çözümlerinden mutsuz.
3. Pretotyping testinde sıfırdan yüksek ilgi sinyali var.

**Karar:**
- 3/3 karşılandı → FAZ 2'ye geç.
- 1–2/3 karşılandı → ÖĞREN: Faz 1'de kal, eksik kriterleri güçlendir.
- 0/3 → PİVOT: Problem hipotezini değiştir (04'e dön) veya ÖLDÜR.

---

## FAZ 2 — ÇÖZÜM DOĞRULAMA VE STRATEJİK ÇERÇEVE
**Zaman kutusu:** 3–4 hafta
**Amaç:** "Çözümüm işe yarıyor mu, kime satacağım, nasıl para kazanacağım?"
**Kritik yol:** 08 → 09 → 10 → 11 (bu sıra zorunlu; 11 ve 12 paralel yürütülebilir)

---

### 08 → Çözüm Doğrulama [MVP]
**(Concierge / Wizard of Oz / Fake Door — ödeme isteği testi)**

Orijinal planın 10 (solution validation) kısmı buraya taşındı ve güçlendirildi. Pretotyping'den farklı olarak burada çözümün çalışıp çalışmadığı test edilir.

**Nasıl yapılır:**

1. **Doğrulama yöntemini seç** (hizmet ağırlıklı → Concierge; ürün ağırlıklı → Wizard of Oz; dijital → Fake Door):
   - **Concierge MVP:** Hizmeti küçük bir gruba bizzat ve elle sun. Kullanıcılar bunun elle yapıldığını bilir. (5–15 kullanıcı yeterli)
   - **Wizard of Oz:** Kullanıcılar otomatik bir sistemle etkileşim kurdukları izlenimindedir; arka planda sen çalışırsın.
   - **Fake Door + ödeme testi:** Landing page ile değer önerisini sun, fiyatı göster, ön sipariş/bekleme listesi topla.
2. **Ödeme isteği testi:** Doğrulama hiyerarşisi güçlüden zayıfa:
   - Ön ödeme (en güçlü sinyal)
   - Depozito
   - Somut koşullu LOI (niyet mektubu)
   - E-posta kaydı / bekleme listesi (en zayıf)
3. **Sonuçları belgele:** Kaç kişi denedi, kaçı ödeme/taahhüt sinyali verdi, geri bildirimler neydi.

**Beklenen çıktı:**
- Çözüm doğrulama raporu: test yöntemi + örneklem + dönüşüm oranı + kullanıcı geri bildirimleri
- Ödeme isteği kanıt listesi

**Hipotez şablonu:**
- Mekanizma hipotezi: "Çözüm S, problemi P yaşayan kullanıcıların en az %X'inde [ödeme/taahhüt sinyali] üretecek."
- Test: Concierge/WoZ/Fake Door sonuçları.

**Koşullu not — B2B:** Enterprise satışta landing page conversion anlamsızdır. Bunun yerine: 3–5 pilot müşteri taahhüdü (LOI veya pilot anlaşma) hedefle.

**↩ Geri dönüş tetikleyicisi:** Kimse ödeme/taahhüt sinyali vermiyorsa → İki olasılık: (a) çözüm yanlış, 06'ya dön; (b) problem yeterince acıtmıyor, 04'e dön.

---

### 09 → Müşteri Profillemesi [K]
**(Persona Kartı + Benimseme Aşaması)**

Orijinal planda 09'daydı ama doğrulamadan ÖNCE yapılıyordu. Şimdi doğrulama SONRASI. Gerekçe: doğrulama verisi olmadan persona kurgusal kalır.

**Nasıl yapılır:**

1. Görüşme ve çözüm doğrulama sonuçlarından 2–3 ana persona çıkar (isimlendirilmiş, davranışsal özellikli — demografik değil).
2. Her personaya benimseme aşaması ata: innovator / early adopter / early majority.
3. Hangi personanın "ilk müşteri" olacağına karar ver (beachhead segment).

**Beklenen çıktı:**
- 2–3 persona kartı (her biri 1 sayfa) + benimseme aşaması etiketi + "ilk müşteri" seçimi.

**Hipotez şablonu:**
- Keşif hipotezi: "Persona P, early adopter kategorisindedir; doğrulama verilerindeki davranışsal örüntülerle bu sınıflamayı kontrol ederim."

**Ne zaman atlanır:** Hedef kitle çok homojen ve tek segment ise; 2–3 persona yerine tek "ideal müşteri" profili yeterli.

---

### 10 → Lean Canvas v1 [MVP]
**(BMC yerine Lean Canvas — erken aşama için daha uygun)**

Orijinal planda BMC Faz 2 (Strateji) altındaydı. Erken aşamada Lean Canvas daha uygun çünkü probleme ve riske odaklanır. BMC, PMF sonrası ölçeklendirme aşamasında devreye girer.

**Nasıl yapılır:**

1. **Lean Canvas'ı doldur** (9 kutu, 20 dakikada doldurulabilir):
   - Problem (en önemli 3)
   - Müşteri segmentleri
   - Benzersiz değer önerisi
   - Çözüm
   - Kanallar
   - Gelir akışları
   - Maliyet yapısı
   - Temel metrikler
   - Haksız avantaj (başlangıçta boş olabilir — bu normal)
2. Discovery-Driven Planning ekle: İstediğin kârdan geriye doğru çalış → gereken gelir → izin verilebilir maliyet → birim hacim. Tüm sayılar varsayım — etiketle.
3. Varsayımları listele ve öncelikle: en riskli varsayım hangisi?

**Beklenen çıktı:**
- Lean Canvas v1 (1 sayfa)
- Ters gelir tablosu (kaba, varsayım etiketli)
- Önceliklendirilmiş varsayım listesi

**Hipotez şablonu:**
- Sürdürülebilirlik hipotezi: "Eğer [gelir modeli G] uygulanırsa, birim başına [maliyet M] ile [kâr marjı K]% elde edilebilir." — Test: ilk 10–50 müşterinin gerçek verileriyle doğrula.

---

### 11 → Risk ve Kaynak Taraması [K]
**(Basitleştirilmiş risk matrisi + runway hesabı)**

Orijinal planın 12 (Risk) ve 13 (Kaynak) adımları birleştirildi ve basitleştirildi.

**Nasıl yapılır:**

1. **Risk taraması:** En kritik 3–5 riski listele (ticari, teknik, regülasyon, finansal). Her birine olasılık (D/O/Y) ve etki (D/O/Y) ver. Resmi matris gereksiz; basit tablo yeterli.
2. **Her kritik risk için:** Tetikleyici sinyal + ilk yanıt planı yaz.
3. **Runway hesabı:** Aylık temel giderler × mevcut nakit = kaç ay? Hedefe ulaşmak için gereken minimum süre runway'den kısa mı?
4. **Teknik fizibilite kontrolü:** "Çözümü inşa edebilir miyiz?" sorusuna kısa cevap. Yapamıyorsan → proof of concept / tech spike planla.

**Beklenen çıktı:**
- Risk tablosu (3–5 risk × tetikleyici × yanıt)
- Runway hesabı (ay cinsinden)
- Teknik fizibilite notu (evet/hayır/PoC gerekli)

**Hipotez şablonu:**
- Sürdürülebilirlik hipotezi: "Mevcut kaynakla X ay runway var; bu sürede [milestone M]'e ulaşılabilir."

**Koşullu not — Deeptech/Hardware:** Bu profilde teknik fizibilite ayrı ve detaylı bir adım olmalıdır: prototipleme, patent, regülasyon onay süreçleri. Bu plan genel amaçlı olduğu için onu kapsamamaktadır.

---

### 12 → Hedefler ve Yol Haritası [K]
**(Outcome Hypothesis + OKR + Option Tree — birleşik)**

Orijinal planın 14 (Hedefler) ve 15 (Yol Haritası) birleştirildi.

**Nasıl yapılır:**

1. **Outcome Hypothesis yaz:** "Eğer [A] yapılırsa, [B] öğrenilecek/elde edilecek." 3–5 adet, öğrenme odaklı.
2. **OKR formatında yaz:** 1 Objective + 3 Key Results (çeyreklik). Metrikler öğrenme odaklı olmalı (vanity metric değil).
3. **Option Tree (basit):** Mevcut karar noktasında 2–3 seçenek ve her seçeneğin sonuçları. Her dal için hangi deneyin yapılacağı belirtilmeli.

**Beklenen çıktı:**
- 3–5 Outcome Hypothesis
- 1 set OKR
- Option Tree taslağı

**Hipotez şablonu:**
- Büyüme hipotezi: "Eğer dal D seçilirse, deney E yapılacak ve ölçüt M'e göre karar verilecek."

---

## ✦ GATE 2 — ÇÖZÜME TALEP VAR MI? STRATEJİ KARARINA HAZIR MIYIZ?

**3 kriter:**
1. Çözüm doğrulamasında ödeme/taahhüt sinyali var (B2C: %3–5+ conversion; B2B: 3+ LOI/pilot).
2. Lean Canvas doldurulmuş, en kritik varsayımlar listelenmiş.
3. Runway, MVP inşa süresini kapsıyor.

**Karar:**
- 3/3 → FAZ 3'e geç.
- 1–2/3 → ÖĞREN: eksik kriterleri güçlendir.
- 0/3 → PİVOT (Faz 1'e dön) veya ÖLDÜR.

---

## FAZ 3 — MVP VE TEST DÖNGÜSÜ
**Zaman kutusu:** 4–8 hafta
**Amaç:** "Çalışan bir ürün yapıp gerçek kullanıcıyla test etmek, devam/pivot kararı vermek."
**Kritik yol:** 13 → 14 → 15 → 16 → 17

---

### 13 → MVP Tanımı [MVP]
**(MoSCoW + MVBP kavramı)**

2025 itibarıyla "minimum" artık düşük kalite anlamına gelmiyor. MVP = pazara çıkabilecek minimum kalitede ürün (Minimum Viable Business Product / Minimum Lovable Product).

**Nasıl yapılır:**

1. **MoSCoW ile özellikleri önceliklendir:**
   - Must: Bu olmadan ürün anlamsız (maks 3–5 özellik).
   - Should: İlk sürümde olması güçlü ama zorunlu değil.
   - Could: Güzel olur ama v1'de yok.
   - Won't: Bu sürümde kesinlikle yok.
2. **Kalite çıtası:** Kullanıcı deneyiminin temel akışı pürüzsüz olmalı. "Utanmadığınız ürünle çıkın" tavsiyesi 2025'te dikkatli uygulanmalı — kullanıcı beklentileri yükseldi.
3. **MVP kapsamı kontrolü:** İnşa süresi 6 haftayı aşıyorsa → kapsam fazla, Must listesini kırp.

**Beklenen çıktı:**
- MVP feature listesi (MoSCoW tablosu)
- Tahmini inşa süresi
- "Must" özelliklerinin her birine bağlı hipotez

**Hipotez şablonu:**
- Mekanizma hipotezi: "Must özelliği F, kullanıcıların [temel görevi G] tamamlamasını sağlayacak; %X tamamlama oranı bekliyoruz."

---

### 14 → MVP İnşa ve Yayınlama [MVP]

**Nasıl yapılır:**

1. İnşa süreci boyunca haftalık kontrol: "Kapsam büyüdü mü?" → büyüdüyse kırp.
2. İlk kullanıcı grubu belirle (beachhead segment — 09'dan). 10–50 kişiyle başla, binlerle değil.
3. Lansman planı: büyük lansman değil, "yumuşak lansman" (soft launch). İlk 10 kullanıcıdan yoğun geri bildirim topla.

**Beklenen çıktı:**
- Çalışan MVP
- İlk kullanıcı listesi + erişim planı

---

### 15 → Ölçüm Altyapısı ve KPI'lar [MVP]
**(Analytics kurulumu + Öğrenme KPI'ları — birleşik)**

Orijinal planın 18 (GA/Hotjar) ve 19 (KPI) birleştirildi. Ölçemediğin şeyi iyileştiremezsin.

**Nasıl yapılır:**

1. **Analitik kurulumu:** GA4 + Hotjar (veya benzeri). UTM ile tüm kampanya linklerini etiketle.
2. **Satış hunisi tanımla:** Farkındalık → Kayıt → Aktivasyon → İlk değer anı → Tutundurma → Ödeme → Yönlendirme (AARRR).
3. **Tek Önemli Metrik (OMTM) seç:** Bu aşamada en çok neyi öğrenmen gerekiyor? O metriğe odaklan.
4. **Öğrenme KPI'ları belirle:** Validasyon sayısı, görüşme başına içgörü, niyet dönüşümü, ilk hafta tutundurma.
5. **Dashboard kur:** Excel/Notion/Google Sheets — basit tut.

**Beklenen çıktı:**
- Çalışan analitik altyapısı
- Satış hunisi tanımı + drop-off noktaları
- OMTM seçimi + KPI listesi + basit dashboard

**Hipotez şablonu:**
- Mekanizma hipotezi: "Funnel'daki ilk drop-off noktası [aşama A]'dadır; [değişiklik D] ile %Δ iyileştirme bekliyoruz."

---

### 16 → Kanal Testleri [MVP]
**(İlk trafik + A/B testleri)**

Orijinal planın 17 (MVP Testi) adımı.

**Nasıl yapılır:**

1. 2–3 kanal seç (ölçeklenebilirlik değil, öğrenme için): organik (Reddit, topluluk, SEO), ücretli (Meta/Google Ads küçük bütçe), doğrudan erişim (kişisel ağ, soğuk e-posta).
2. Her kanal için küçük bütçe/zaman ayır ve performans ölç (tıklama → kayıt → aktivasyon).
3. A/B testleri ile landing page / mesaj varyasyonlarını dene.

**Beklenen çıktı:**
- Kanal performans raporu (kanal × maliyet × lead × dönüşüm)
- En iyi performans gösteren mesaj/sayfa varyasyonu

**Hipotez şablonu:**
- Büyüme hipotezi: "Kanal K, hedef persona için en az X lead üretecek ve CAC ≤ Y olacak."

---

### 17 → MVP Gate [MVP]
**(Go/No-Go — Dört Seçenek)**

Orijinal planın 20 (MVP Gate) adımı. Kromatic'in dört sonuçlu çerçevesi kullanılır (orijinal üçlü yerine).

**Nasıl yapılır:**

1. Gate için 3 kritik metrik tanımla ve eşik değerlerini ÖNCEDEN yaz (ör: kayıt dönüşümü ≥ %5, ilk hafta tutundurma ≥ %30, NPS ≥ 20).
2. Sonuçları değerlendir ve dört karardan birini seç:
   - **Ölçekle:** PMF sinyalleri güçlü → Faz 4'e geç.
   - **Sebat et:** Henüz yeterli değil ama olumlu sinyaller var → iterasyona devam (Faz 3'te kal).
   - **Pivot:** İş modelinin bir veya birden fazla unsurunu değiştir → Faz 1 veya 2'ye dön.
   - **Öldür:** Hem fikirler tükendi hem runway bitiyor → projeyi durdur.
3. Umut formülü kontrol: Umut = Fikirler × Pist. İkisinden biri sıfırsa → Öldür.
4. Kararı Decision Log'a yaz (kim, ne, neden, kanıtlar, karar).

**Beklenen çıktı:**
- Gate checklist (metrikler × eşikler × gerçekleşen değerler)
- Decision Log kaydı
- Sonraki adım planı

**Hipotez şablonu:**
- Gate hipotezi: "Eğer metrik M ≥ eşik T → Sebat et veya Ölçekle; aksi halde Pivot veya Öldür."

**↩ Geri dönüş tetikleyicileri:**
- Kullanıcılar ürünü beklenmeyen amaçla kullanıyor → 04'e dön (problem/segment revize).
- İyi edinim ama yüksek kayıp → 10'a dön (değer önerisi revize).
- Tüm deneylerde negatif büyüme → 10'a dön (Lean Canvas'ı yeniden incele).

---

## ✦ GATE 3 — DEVAM / PİVOT / ÖĞREN / ÖLDÜR

Bu gate, Gate 1 ve 2'den farklı olarak **tekrarlı** olabilir. Her iterasyon döngüsünün sonunda bu gate'e dönülür.

---

## FAZ 4 — POST-MVP VE PMF ARAYIŞI
**Zaman kutusu:** Süresiz, 3 aylık döngülerle yönetilir.
**Amaç:** "Ürün-pazar uyumunu bulmak, sürdürülebilir iş modeli kurmak."

**ÖNEMLİ NOT:** Faz 4, "strateji belirleme öncesi" kapsamının sınırındadır. Buradaki adımlar, strateji kararı vermek için gereken son verilerdir. Strateji (Playing to Win, VRIO, stratejik opsiyon seçimi) bu fazın SONUNDA, yeterli veri toplandığında yapılır.

---

### 18 → İterasyon Döngüsü [MVP]
**(Öğren → Ölç → Yap — ters sıra)**

Orijinal planın 21 (Build-Measure-Learn) adımı, güncel eleştirilere göre ters sırayla güncellendi.

**Nasıl yapılır:**

1. **Öğren:** Bu iterasyonda neyi öğrenmemiz gerekiyor? 1–2 hipotez belirle.
2. **Ölç:** Bu hipotezi hangi metrikle ölçeceğiz? Başarı ve başarısızlık kriterlerini ÖNCEDEN yaz.
3. **Yap:** Hipotezi test edecek minimum değişikliği inşa et.
4. Sonuçları değerlendir, Decision Log'u güncelle, bir sonraki iterasyonu planla.
5. **Ritim:** 1–2 haftalık döngüler. Her döngü sonunda mini-gate kararı.

**Beklenen çıktı:**
- İterasyon planı (hipotez → metrik → deney → sonuç → karar)
- Güncellenmiş Decision Log

**Hipotez şablonu:**
- Mekanizma hipotezi: "Bu iterasyonda [değişiklik D] yapılırsa, [metrik M] %Δ iyileşecek."

---

### 19 → Problem–Çözüm Uyumu [MVP]

**Nasıl yapılır:**

1. Kullanıcı görüşlerinden doğrudan alıntılar topla: "Bu özellik olmasaydı kullanmazdım."
2. Sinyalleri izle: referral rate, 1. hafta tutundurma, organik paylaşım.
3. Kaç kullanıcı "ürünü başkasına önerdi" veya "ödeme yapmaya devam etti"?

**Beklenen çıktı:**
- Problem–Çözüm Uyumu raporu + kullanıcı alıntıları + kanıt metrikleri.

---

### 20 → Ürün–Pazar Uyumu (PMF) Ölçümü [MVP]

**Nasıl yapılır:**

1. **Sean Ellis Survey:** "Bu ürün yarın kaybolsa ne hissederdin?" → %40+ "çok üzülürüm" = PMF sinyali.
2. Ek sinyaller: organik büyüme, düşen kayıp oranı, artan kullanım sıklığı, ödeme isteği.
3. PMF sürekli bir spektrumdur, ikili (var/yok) değildir. "PMF hissine" yaklaşıyorsun veya uzaklaşıyorsun.

**Beklenen çıktı:**
- PMF anket sonucu + yorum
- PMF sinyal tablosu

**Hipotez şablonu:**
- Mekanizma hipotezi: "PMF survey sonucu ≥ %40 ise product-market fit sinyali var."

**Süre beklentisi:** Fikirden PMF'ye medyan süre yaklaşık 2 yıl. 2 yıl sonra sinyal yoksa ciddi pivot düşün.

---

### 21 → Birim Ekonomisi ve Fiyatlandırma [MVP]
**(Unit Economics + Fiyat Testleri — birleşik)**

Orijinal planın 26 (Unit Economics) ve 27 (Fiyatlandırma) birleştirildi.

**Nasıl yapılır:**

1. **LTV hesapla:** Müşteri başına ortalama gelir × ortalama ömür.
2. **CAC hesapla:** Toplam edinme maliyeti / edinilen müşteri sayısı.
3. **Hedef:** LTV/CAC > 3 (erken aşamada > 1 bile kabul edilebilir, trend önemli).
4. **Fiyat testleri:** Value-based pricing anketi (Van Westendorp / Gabor-Granger) + gerçek A/B fiyat testleri.
5. **Katkı marjı hesapla:** Gelir - Değişken maliyet = katkı marjı.

**Beklenen çıktı:**
- Unit economics tablosu (LTV, CAC, LTV/CAC, katkı marjı)
- Fiyat testi sonuçları + önerilen fiyat modeli

**Hipotez şablonu:**
- Sürdürülebilirlik hipotezi: "İlk 100 müşteri için LTV/CAC > 3; fiyat P ile conversion C elde edilir."

---

### 22 → Büyüme Kanalları Testi [K]
**(Bullseye Framework)**

**Nasıl yapılır:**

1. 19 potansiyel kanaldan 3 öncelik kanal seç, deneyler planla.
2. Her kanalın unit economics üzerindeki etkisini ölç: bu kanal CAC'ı düşürüyor mu, LTV'yi artırıyor mu?
3. Kazanan kanalı ölçeklendir.

**Beklenen çıktı:**
- 3 kanal performans raporu + kazanan kanal önerisi.

**Hipotez şablonu:**
- Büyüme hipotezi: "Kanal K, CAC ≤ hedef CAC ile ölçeklenebilir."

---

### 23 → Şirketleşme ve Hukuk [K]
**(Post-MVP kurucu hazırlığı)**

**Nasıl yapılır:**

1. Yerel mevzuat ve vergi danışmanıyla görüş; şirket türü opsiyonlarını değerlendir.
2. Muhasebe/hukuk kontaklarını listele.
3. KVKK/GDPR uyumluluk kontrolü (veri topluyorsan).

**Beklenen çıktı:**
- Şirketleşme checklist + danışman iletişim listesi.

**Ne zaman yapılır:** İlk ödeme almadan önce veya yatırım görüşmelerine başlamadan önce — hangisi önce gelirse.

---

### 24 → Ürün Geliştirme (UX/UI) [K]

**Nasıl yapılır:**

1. Heuristic Evaluation (Nielsen) uygula.
2. Kullanıcı testleri yap (5 kullanıcı, ana akış).
3. Sürüm tabanlı iyileştirme döngüsü kur.

**Beklenen çıktı:**
- UX değerlendirme raporu + test bulguları.

**Hipotez şablonu:**
- Mekanizma hipotezi: "Bu UX iyileştirmesiyle onboarding completion rate %Δ artacak."

---

## ✦ FAZ 4 DÖNGÜ YAPISI

Faz 4 doğrusal değildir. Şu döngü sürekli döner:

```
İterasyondan öğren (18) → PS Fit kontrol (19) → PMF ölç (20)
      ↓                                              ↓
  Unit economics güncelle (21)              PMF var mı?
      ↓                                      ↓         ↓
  Kanal optimize et (22)               Evet → STRATEJİ BELİRLE
                                         Hayır → Yeni iterasyon (18'e dön)
```

PMF sinyali yeterince güçlendiğinde → **STRATEJİ BELİRLEME** fazına geçilir. Bu, bu planın kapsamı dışındadır.

---

## BAĞIMLILIK HARİTASI (ÖZET)

| Adım | Bağımlı olduğu adım(lar) | Paralel yapılabilir |
|------|--------------------------|---------------------|
| 01 Kurucu Temeli | — | — |
| 02 Vizyon | 01 | — |
| 03 Makro Tarama | — | 01 ve 02 ile paralel |
| 04 Problem Tanımı | 01 | — |
| 05 Müşteri Keşfi | 04 | 07 ile paralel |
| 06 Fikir ve Varsayım | 04, 05 | — |
| 07 Pazar ve Rakip | — | 05 ile paralel |
| 08 Çözüm Doğrulama | 05, 06 | — |
| 09 Persona | 05, 08 | — |
| 10 Lean Canvas | 08 | 11 ile paralel |
| 11 Risk ve Kaynak | — | 10 ile paralel |
| 12 Hedefler | 10 | — |
| 13 MVP Tanımı | 08, 10 | — |
| 14 MVP İnşa | 13 | — |
| 15 Ölçüm Altyapısı | 14 | 14 ile paralel |
| 16 Kanal Testleri | 14, 15 | — |
| 17 MVP Gate | 15, 16 | — |

---

## HİPOTEZ TİPLERİ REHBERİ

Tüm hipotezler aynı formatta değildir. Adımın doğasına göre farklı tip kullanılır:

| Tip | Ne zaman | Format | Örnek |
|-----|----------|--------|-------|
| Keşif | Problem/müşteri henüz belirsiz | "X doğru mu?" | "Hedef kitlenin %60'ı bu problemi tanır." |
| Mekanizma | Çözümün neden işe yarayacağı test ediliyor | "X yapılırsa Y olur çünkü Z." | "Onboarding kısaltılırsa tamamlama artar çünkü sürtünme azalır." |
| Büyüme | Kanallar ve ölçek test ediliyor | "X kanal, Y maliyetle Z sonuç verir." | "Google Ads, CAC ≤ 50 TL ile 100 kayıt üretir." |
| Sürdürülebilirlik | İş modeli ve finans test ediliyor | "X modelle Y kârlılık sağlanır." | "Aylık abonelik modeli ile LTV/CAC > 3 olur." |

---

## MINIMUM VIABLE PATH (EN KISA YOL)

30 adımlık orijinal plandan 24 adıma indirildi, bunların 15'i [MVP] (atlanamaz). Eğer kaynakların çok kısıtlıysa, sadece [MVP] adımlarını takip et:

**01** (Kurucu Temeli) → **04** (Problem) → **05** (Müşteri Keşfi) → **06** (Fikir/Varsayım) → **07** (Pazar/Rakip) → **08** (Çözüm Doğrulama) → **10** (Lean Canvas) → **13** (MVP Tanımı) → **14** (MVP İnşa) → **15** (Ölçüm) → **16** (Kanal) → **17** (Gate) → **18** (İterasyon) → **20** (PMF) → **21** (Unit Economics)

Bu 15 adım, minimum 8–12 haftada tamamlanabilir.

---

## DECISION LOG ŞABLONU

Her kritik karar ve hipotez sonucu bu tabloya yazılır:

| Tarih | Adım # | Hipotez | Test yöntemi | Sonuç (veri) | Karar | Sorumlu |
|-------|--------|---------|-------------|--------------|-------|---------|

---

## GİRİŞİM TİPİNE GÖRE KOŞULLU NOTLAR

**B2B SaaS:** Adım 08'de landing page conversion yerine 3–5 pilot LOI hedefle. Adım 09'da satın alma karar vericisi ve kullanıcı ayrımı yap.

**Marketplace / Platform:** Tavuk-yumurta problemi için Adım 06'ya ek: "Hangi taraftan başlayacağım?" kararı. Her iki taraf için ayrı VPC kartı.

**Hardware / Deeptech:** Adım 11'de teknik fizibilite ayrı ve detaylı olmalı: prototipleme, patent, regülasyon onay. MVP süresi 6 ayı aşabilir — bu kabul edilebilir.

**Sosyal Girişim:** Adım 20'ye etki metrikleri (Theory of Change) ekle. PMF, finansal ve sosyal etki ikiliğinde ölçülür.

---

## ARAÇ SEÇİM KRİTERLERİ (ARAÇ LİSTESİ YERİNE)

Araçlar değişir, kriterler kalır. Her araç seçiminde sor:

1. **Maliyet:** Ücretsiz veya düşük maliyetli mi? (erken aşamada para harcama)
2. **Öğrenme eğrisi:** 1 saatten az sürede kullanılabilir mi?
3. **Ekip erişimi:** Tüm ekip aynı anda erişebilir mi?
4. **Veri taşınabilirliği:** Verimi dışarı aktarabilir miyim? (vendor lock-in riski)
5. **Entegrasyon:** Mevcut iş akışımla uyumlu mu?

Kategori önerileri: doküman (paylaşımlı), tablo (metrikler için), prototip (UX), analitik (web/uygulama), anket (müşteri keşfi), reklam yönetimi (kanal testleri).
