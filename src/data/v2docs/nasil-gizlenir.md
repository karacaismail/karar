## CMS Tespiti Engelleme: WordPress Dışındaki Sistemler

### Girdi

Amaç: Drupal, Shopify, OpenCart, Typo3, Joomla gibi CMS’lerin tespit edilmesini zorlaştırmak.
Yöntem tercihi: **Eklenti/modül kullanımı**, **headless mimari istenmiyor.**

---

## STRATEJİK ÇERÇEVE

**Logic Model:**
**Input**: Açık kaynak CMS sistemleri
**Activities**: Tespit edilen imzaların eklenti/modüllerle gizlenmesi
**Output**: Dış tarayıcılardan CMS izi kalmaması
**Outcome**: Güvenlik değil ama gizlilik ve marka bağımsızlığı sağlanması
**Impact**: Rakiplerin tersine mühendislik, pazar analizi, bot saldırılarına karşı görünmezlik

---

## 1. **Drupal (özellikle 8/9/10 sürümleri)**

### Tespit İzleri:

* `/core/`, `/modules/`, `/sites/`, `/misc/`
* `X-Generator: Drupal` header
* `<meta name="Generator" content="Drupal 9 (https://www.drupal.org)" />`

### Modül ve Manuel Yöntem:

#### 🔹 **Hide Drupal**

* Meta etiketleri ve başlık bilgilerini temizler
* `X-Generator` HTTP header'ını kaldırır

#### 🔹 **Security Kit** + `.htaccess`

* Referrer, user-agent, headers gibi davranışsal maskeleme yapar

#### 🔹 Manuel ekleme:

```php
// theme.theme dosyası içinde:
function YOURTHEME_preprocess_html(&$variables) {
  // Remove generator meta tag
  unset($variables['head']['system_meta_generator']);
}
```

---

## 2. **Shopify**

### Tespit İzleri:

* CDN kaynakları: `cdn.shopify.com`, `shopify/assets/`
* JSON API endpoint'leri
* Liquid template izleri

### Yöntem:

#### 🔹 Shopify'da eklenti eklenemez, ama Liquid + CDN override mümkündür

* `theme.liquid` içinden:

  * Shopify referanslı meta tag’leri sil
  * `Powered by Shopify` yazısını temadan kaldır
* Proxy CDN (Cloudflare Workers) ile dosya yolları yeniden yazılabilir
  → Ancak karmaşık ve bakım yükü yüksek

> Not: Shopify tamamen SaaS’tır. Maskelenmesi sınırlı düzeyde mümkündür.

---

## 3. **OpenCart**

### Tespit İzleri:

* `/index.php?route=common/home`, `/catalog/`, `/admin/`
* `OCSession`, `OCSID`, veya benzeri session cookie’leri
* `/image/` klasörü

### Eklentiler:

#### 🔹 **Hide My Opencart (vQmod/OCmod)**

* Route parametrelerini temizler
* Admin panel yolu değiştirilir
* Default temaya ait izleri gizler

#### 🔹 **Security X** (Premium)

* admin panel URL'sini değiştirir
* versiyon bilgilerinin HTML çıkıştan temizlenmesi
* dil/tema klasörlerini yeniden adlandırır

#### Manuel:

* `catalog/controller/common/header.php` içinde generator meta tag’i kaldır
* `index.php`'de output buffer ile HTML output’u filtrele

---

## 4. **TYPO3**

### Tespit İzleri:

* `typo3/`, `typo3conf/`, `typo3temp/`
* Generator meta tag
* `X-Powered-By` ve `X-Generator` header’ları

### Eklentiler:

#### 🔹 **metaseo** → meta verileri özelleştirir

#### 🔹 **content\_replacer** → frontend'e çıkan HTML’i manipüle edebilir

#### Manuel:

* `config.disablePrefixComment = 1`
* `config.metaGenerator =` → boş bırak
* `config.absRefPrefix = /` → dinamik yollara maskeleme

---

## 5. **Joomla**

### Tespit İzleri:

* `/administrator/`, `/components/`, `/templates/`
* `index.php?option=com_content`
* meta generator etiketi: Joomla!

### Eklentiler:

#### 🔹 **JSecure** (admin panel maskeleme)

#### 🔹 **sh404SEF** (route yapısını değiştirir)

#### 🔹 **ByeByeGenerator** (meta ve header kaldırıcı)

#### Manuel:

```php
// index.php
$this->setGenerator('');
```

---

## 6. **TYPO3 / WordPress / Drupal Genel Eklenti Dışı Alternatif**

### Ortak:

* Cloudflare Workers ile custom URL rewrite
* WAF ile header response temizliği
* Output Buffer + Regex ile post-render temizleme

---

## Sonuç: Eklenti Bazlı Etki Matrisi

| CMS       | Eklenti Adı                 | Etki Alanı               | Not                        |
| --------- | --------------------------- | ------------------------ | -------------------------- |
| WordPress | WP Hide, Hide My WP Ghost   | URL, meta, headers       | En geniş kontrol           |
| Drupal    | Hide Drupal, Security Kit   | Meta, header             | Kod dokunuşu gerekebilir   |
| Shopify   | Yok (Liquid override)       | Meta, görünür yazılar    | CDN override hariç sınırlı |
| OpenCart  | Hide My Opencart, SecurityX | URL, admin panel, meta   | OCmod gerek                |
| TYPO3     | metaseo, content\_replacer  | Meta, HTML manipülasyonu | config ayarı da şart       |
| Joomla    | ByeByeGenerator, sh404SEF   | URL, meta, header        | Saldırı koruması da sağlar |

---

## Öneri

* **Gizleme amacı SEO, güvenlik veya white-label ise ayrı stratejiler gerekir.**
* Belirttiğin sistemlerin her birine özel test ortamı kurup tespit araçlarıyla kontrol edebilirim.
* İstersen Wappalyzer / BuiltWith gibi tespit araçlarına karşı canlı demo yapılandırmaları sunabilirim.

---

Hedef sistem(ler) ve cache/CDN altyapısı (Cloudflare, Litespeed, vs) nedir? Ona göre eklenti seçimini optimize ederim.
