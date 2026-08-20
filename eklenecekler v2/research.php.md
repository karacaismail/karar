## PHP Temiz Kod Pre-Prompt

Tüm PHP kodlama görevlerinde aşağıdaki prensiplere sıkı sıkıya uyun. Amaç: minimum bağımlılık, doğrudan çalıştırılabilir, kısa, öz, okunabilir PHP kodu üretmek.

## Temel Kodlama Prensipleri

**Tek Sorumluluk**: Her fonksiyon yalnızca tek bir işi yapmalıdır.

**Anlamlı İsimlendirme**: Değişken, fonksiyon isimleri açıklayıcı ve İngilizce olacak. Kısaltmalardan kaçınılacak.

**Erken Dönüş**: İç içe bloklardan kaçınılacak, mümkün olan her yerde erken return kullanılacak.

**Tip Güvenliği**: PHP 8+ tip sistemi aktif kullanılacak. Fonksiyon giriş ve çıkış tipleri belirtilecek. `mixed` ve belirsiz tiplerden kaçınılacak.

**Hata Yönetimi**: Hatalar açık ve kontrollü biçimde yönetilecek. Gerekirse `{ success: true|false, data|error }` yapısıyla.

## Kod Organizasyonu

**Minimum Bağımlılık**: Harici kütüphane veya composer kullanımı yapılmayacak. Gerekirse kendi içinde fonksiyonlar tanımlanacak.

**Tek Dosya Yapısı**: Kod doğrudan çalıştırılabilir tek bir dosyada yazılmalı, zorunlu olmadıkça require veya autoload kullanılmamalı.

**Giriş Noktası**: `main()` gibi net bir giriş noktası tercih edilmeli.

**Test Edilebilirlik**: Saf (pure) fonksiyonlar yazılacak, bağımlılıkları minimize edilecek.

## Modern PHP Kullanımı

**Strict Types**: Dosya başına `declare(strict_types=1);` eklenecek.

**Modern Operatörler**: `??`, `?->`, `?:`, `...` (spread), `match` aktif kullanılacak.

**Union Types**: `int|float|string` gibi birleşim tipleri tercih edilecek.

**Arrow Functions**: Basit işlemler için `fn($x) => $x * 2` kullanılacak.

**Modern Fonksiyonlar**: `str_contains`, `str_starts_with`, `str_ends_with`, `array_filter`, `array_map`, `array_reduce` tercih edilecek.

**Yerleşik Fonksiyon Önceliği**: Kendi döngü yazmak yerine PHP'nin hazır fonksiyonları kullanılacak:
```php
$even = array_filter($numbers, fn($n) => $n % 2 === 0);
$doubled = array_map(fn($x) => $x * 2, $numbers);
```

**Compact Response Helpers**: JSON ve HTTP yanıtları için yardımcı fonksiyonlar:
```php
function jsonResponse(mixed $data): void { header('Content-Type: application/json'); echo json_encode($data, JSON_THROW_ON_ERROR); }
function redirect(string $url): never { header("Location: $url"); exit; }
```

## Kısaltma Teknikleri

**Ternary ve Null Coalescing**:
```php
$title = $input['title'] ?? 'Default';
$status = $isActive ? 'active' : 'inactive';
$data ??= getDefaultData();
```

**Array Spread ve Destructuring**:
```php
$result = [...$defaults, ...$input];
[$first, $second] = explode(',', $csvLine);
```

**Direct Return**: Gereksiz değişken tanımlamaktan kaçınılacak:
```php
return calculate($a, $b); // değil: $result = calculate($a, $b); return $result;
```

**Tek Satırlık Fonksiyonlar**:
```php
function isEven($n): bool { return $n % 2 === 0; }
```

**Match Expression**: Switch yerine match kullanılacak:
```php
$status = match($code) { 200 => 'OK', 404 => 'Not Found', default => 'Unknown' };
```

**İsimlendirilmiş Argümanlar**: Fonksiyon çağrılarında netlik için:
```php
createUser(name: 'Alice', email: 'alice@example.com');
```

**Readonly Properties**: PHP 8.2+ ile immutable yapılar:
```php
readonly class User { public function __construct(public int $id, public string $name) {} }
```

**Attribute Metadata**: Yorum yerine attribute kullanılacak:
```php
#[Route('/api/users')] function getUsers(): array {}
```

## Güvenlik ve Konfigürasyon

**Süper Global Sarmalama**: `$_GET`, `$_POST`, `$_SESSION` doğrudan değil, sarmalanarak kullanılmalı:
```php
function getInput(): array { return $_POST + $_GET; }
function getEnv(string $key): ?string { return $_ENV[$key] ?? getenv($key) ?: null; }
```

**Ortam Değişkenleri**: `getenv()` veya `$_ENV` üzerinden yapılandırma alınacak.

**JSON Güvenliği**: `json_encode(..., JSON_THROW_ON_ERROR)` kullanılacak.

**Modern ID/Random**: `bin2hex(random_bytes(...))` tercih edilecek.

**Zaman Yönetimi**: `DateTimeImmutable` kullanılacak.

**Input Validation Helpers**: Tek satırda doğrulama:
```php
function validateEmail(string $email): bool { return filter_var($email, FILTER_VALIDATE_EMAIL) !== false; }
function sanitizeString(string $str): string { return htmlspecialchars(trim($str), ENT_QUOTES); }
```

## Çıktı Kuralları

**Yorum Yok**: Açıklayıcı yorumlar yerine net isimler ve sade yapı kullanılacak.

**Sadece Kod**: Sadece istenen kod bloğu verilecek, açıklama eklenmeyecek.

**PSR-12 Uyumlu**: Kod formatı PSR-12 standartlarına uygun olacak.

**Kısa Etiket Yok**: Her zaman `<?php` kullanılacak, `<?` kullanılmayacak.

**Gereksiz Parantez/Boşluk Yok**: Minimum karakter kullanımı hedeflenir:
```php
if(!$user)return null; // uzun if bloğu yerine
$items=array_filter($data,fn($x)=>$x>0); // gereksiz boşluklar olmadan
```

**Chain Methods**: Mümkün olduğunda method chaining kullanılacak.

**Short Array Syntax**: `[]` her zaman `array()` yerine tercih edilecek.

## Örnek Dosya Yapısı

```
project/
  src/
    utils.php
    handlers.php
  config/
    env.php
  public/
    index.php
```

Bu kurallara uyarak, verimli ve kaliteli PHP kodları üretilecektir.
