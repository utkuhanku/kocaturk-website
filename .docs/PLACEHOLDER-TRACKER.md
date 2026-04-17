# Placeholder Tracker — Kocatürk Okulları Website

> Bu dosya tüm placeholder/geçici değerleri takip eder.
> Her faz tamamlandığında bu liste güncellenir.
> ✅ = tamamlandı, ⏳ = bekliyor, 🔴 = acil

## Faz 2 Placeholder'ları

| # | Placeholder | Mevcut değer | Tamamlanacağı faz | Durum |
|---|---|---|---|---|
| 1 | İdari kadro sayısı | 52 (tahmini) | Utkus doğrulayacak | ⏳ |
| 2 | CampusFinder form submit | Client-side state only (başarı mesajı) | Faz 4 (Resend email) | ⏳ |
| 3 | CampusFinder sağ panel | CampusMapbox entegre edildi | Faz 3 ✅ | ✅ |
| 4 | CampusMap sol panel | CampusMapbox entegre edildi | Faz 3 ✅ | ✅ |
| 5 | Tüm PhotoSlot'lar | Placeholder kutular | Faz 5 (gerçek fotoğraflar) | ⏳ |
| 6 | Sanity veri çekimi | safeFetch + fallback data | Faz 3 ✅ | ✅ |
| 7 | TestimonialCard avatar | Initials only (KVKK) | Faz 5 (KVKK onayı sonrası) | ⏳ |
| 8 | Sosyal medya linkleri | instagram.com / facebook.com generic | Utkus gerçek URL verecek | ⏳ |
| 9 | Telefon numarası | +90 236 313 00 00 (tahmini) | Utkus doğrulayacak | ⏳ |
| 10 | e-Kocatürk URL | https://ekocaturk.k12.tr | Utkus doğrulayacak | ⏳ |
| 11 | Hero fotoğrafı | PhotoSlot placeholder (mobile'da gizli) | Faz 5 (drone shot) | ⏳ |
| 12 | Logo dosya boyutu | 4.9MB (unoptimized) | Faz 8 (image optimization) | ⏳ |

## Faz 3 Yeni Placeholder'ları

| # | Placeholder | Mevcut değer | Tamamlanacağı faz | Durum |
|---|---|---|---|---|
| 13 | NEXT_PUBLIC_MAPBOX_TOKEN | Env var eksik — ContentNote fallback gösteriliyor | Utkus Mapbox token ekleyecek | ⏳ |
| 14 | NEXT_PUBLIC_SANITY_PROJECT_ID | Env var eksik — fallback data kullanılıyor | Utkus Sanity project ID ekleyecek | ⏳ |
| 15 | Kampüs müdür isimleri | "—" (tüm kampüsler) | Utkus gerçek isimler verecek | ⏳ |
| 16 | Kampüs fotoğrafları (detay) | PhotoSlot placeholder | Faz 5 (gerçek fotoğraflar) | ⏳ |
| 17 | Kampüs adres/telefon/email | Tahmini değerler | Utkus doğrulayacak | ⏳ |

## Faz 4 Yeni Placeholder'ları

| # | Placeholder | Mevcut değer | Tamamlanacağı faz | Durum |
|---|---|---|---|---|
| 18 | Robotik öğretmen isimleri | "—" (robotik-kodlama sayfası) | Utkus gerçek isimler verecek | ⏳ |
| 19 | Havacılık Lisesi fotoğrafları | PhotoSlot placeholder (4 slot) | Faz 5 (gerçek fotoğraflar) | ⏳ |
| 20 | Kademe sayfaları hero fotoğrafları | PhotoSlot placeholder (6 kademe) | Faz 5 (gerçek fotoğraflar) | ⏳ |
| 21 | Robotik sayfası fotoğrafları | PhotoSlot placeholder (atölye, Roma) | Faz 5 (gerçek fotoğraflar) | ⏳ |
| 22 | Yurtdışı sayfası fotoğrafı | PhotoSlot placeholder (hero, yaz okulu) | Faz 5 (gerçek fotoğraflar) | ⏳ |
| 23 | eTwinning proje detayları | Tahmini içerik | Utkus gerçek proje adları + yılları verecek | ⏳ |
| 24 | İngiltere Yaz Okulu kampüsü | Tahmini bilgiler (süre, içerik) | Utkus gerçek program detaylarını verecek | ⏳ |
| 25 | Havacılık Lisesi başvuru kriterleri | Tahmini kriterler | Utkus SHGM/resmi gereksinimlerle güncelleyecek | ⏳ |

## Faz 8 Checklist (10-ROADMAP.md'den)

- [ ] src/app/dev/ klasörünü tamamen sil
- [ ] lighthouserc.yml assertions geri aç
- [ ] .github/workflows/ci.yml node-version: '20' → '22'
- [ ] logo-kocaturk.png optimize et (tinypng veya sharp)
