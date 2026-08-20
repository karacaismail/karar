## 🧾 Yazılımcı Yönergesi: **Drupal + Tome ile Statik Site Üretimi ve Otomatik Yayınlama**

---

### 1. 📌 Proje Amacı (Özet)

Drupal CMS ile içeriklerin düzenlendiği, bu içeriklerden **statik bir web sitesi** (sadece HTML/CSS/JS) üreten bir sistem kurulacak.
Bu sistemde, Drupal güvenli bir ortamda çalışacak (örneğin sadece senin bilgisayarında ya da özel bir sunucuda), dış dünyaya **sadece statik** (değiştirilemez) dosyalar yayınlanacak.
Her içerik güncellemesi sonrası, sistem otomatik olarak HTML dosyaları üretip, bunları hedef statik site sunucusuna aktaracak.

---

### 2. 🛠️ Adımlar (Detaylı)

#### **Adım 1: Drupal Kurulumu**

* Bir dizine Drupal kur. (Örn: `/var/www/drupal`)
* PHP, Composer, MySQL çalışıyor olmalı.
* Örnek kurulum komutu:

  ```bash
  composer create-project drupal/recommended-project mysite
  cd mysite
  composer install
  ```

---

#### **Adım 2: ThemeForest Temasını Yükle**

* Satın aldığın temayı indir.
* İçindeki `theme-name.zip` dosyasını Drupal dizinine çıkart.

  * `themes/custom/theme-name/` altında olmalı.
* Tema `info.yml` dosyası varsa `drush theme:enable theme-name` komutu ile aktif et.

---

#### **Adım 3: Demo İçeriği İçe Aktar**

* Temanın `.sql` dosyasını `phpMyAdmin` veya `mysql` ile veritabanına yükle.
* Tema ile gelen içerik ve ayarlar aktif hale gelir.

---

#### **Adım 4: Tome Modülünü Kur**

* Proje dizininde çalış:

  ```bash
  composer require drupal/tome:^1.13
  ```
* İki alt modülü etkinleştir:

  ```bash
  drush en tome_sync tome_static -y
  ```

---

#### **Adım 5: Statik Siteyi Üret**

* Aşağıdaki komutu çalıştır:

  ```bash
  drush tome:static
  ```
* `static/` adlı klasörde HTML çıktılar oluşur.

---

#### **Adım 6: Statik Dosyaları Test Et**

* Tarayıcıda şu komutu dene:

  ```bash
  cd static
  php -S localhost:8000
  ```
* Tarayıcıda `http://localhost:8000` aç ve sitenin düzgün çalıştığını gör.

---

#### **Adım 7: Yayınlama Ortamı Hazırla (GitHub Pages / FTP / rsync)**

* GitHub Pages için:

  ```bash
  git init
  git remote add origin git@github.com:kullaniciadi/projeadi.git
  git checkout -b main
  cp -r ../static/* .
  git add .
  git commit -m "İlk statik site"
  git push origin main
  ```
* FTP/cPanel için `FileZilla` ile `static/` içeriğini yükleyebilirsin.
* `rsync` kullanacaksan:

  ```bash
  rsync -avz ./static/ user@hedef-sunucu:/var/www/html/
  ```

---

#### **Adım 8: Otomatik Tetikleyici Oluştur (tetik.php)**

* Drupal dizinine `tetik.php` dosyası oluştur:

  ```php
  <?php
  shell_exec('cd /var/www/drupal && ./vendor/bin/drush tome:static');
  shell_exec('rsync -avz /var/www/drupal/static/ user@static-host:/var/www/html/');
  echo "Deploy tamamlandı.";
  ?>
  ```
* Tarayıcıda `http://cms.domain.com/tetik.php` açarsan otomasyon çalışır.

---

#### **Adım 9: Güvenlik Önlemlerini Al**

* `tetik.php` dosyasını sadece belirli IP’den erişilebilir yap.
* Gerekirse Basic Auth (şifre koruması) ekle.
* Drupal admin paneline VPN veya IP sınırlaması uygula.

---

#### **Adım 10: Güncelleme Sürecini Test Et**

* Drupal'da bir içerik güncelle.
* Tarayıcıda `tetik.php` aç.
* `static/` klasöründe değişiklik oluştu mu kontrol et.
* Statik siteye eriş, değişiklik görünüyorsa sistem çalışıyor.

---

### 🎯 Sonuç: Artık Drupal üzerinde içerik düzenledikten sonra, sadece bir linke tıklayarak tüm statik siteyi otomatik üretip yayına alabilirsin. Drupal tarafı dış dünyaya kapalı kalır, sadece HTML/CSS yayına alınır. Bu da maksimum güvenlik + yüksek performans sağlar.

---

İstersen bu yönergeyi `.md` formatında belge haline getirebilirim. Devam etmek ister misin?
