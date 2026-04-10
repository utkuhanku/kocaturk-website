# KOCATÜRK OKULLARI · Yeni Website

> **Proje:** Ege bölgesinin en köklü çok kampüslü özel okul ailesi olan Kocatürk Okulları için, mevcut amatör seviyedeki website'nin yerine premium kalitede, marka değerine yakışır yeni bir kurumsal site inşa etmek.

---

## 🎯 Proje Tek Cümle Özeti

> **23 kampüs, 4.000+ öğrenci, 246 öğretmen ile 1998'den bu yana Ege'nin eğitim omurgası olan Kocatürk Okulları için, Bahçeşehir/TED/Bilfen gibi ulusal devlerden ve İzmir'in köklü kurumlarından (Çakabey, MEV, Saint Joseph) görsel ve içerik kalitesi olarak ayrışan, modern bold editorial yönde, antrasit + çift turuncu paletinde, premium hisli bir K-12 okul websitesi.**

---

## 📂 Doküman Okuma Sırası — ZORUNLU

Bu dosyaları **bu sırayla** oku. Atlama yapma. Her dosyanın bir önceki üzerine bina ettiği bilgi var.

```
README.md                          ← BURASI (proje girişi)
01-VISION-AND-POSITIONING.md       ← Marka vizyonu, pozisyonlama, hikâye
02-DESIGN-SYSTEM.md                ← Renk, tipografi, motion, tüm görsel kurallar
03-INFORMATION-ARCHITECTURE.md     ← Sitemap, navigasyon, URL yapısı
04-CONTENT-STRATEGY.md             ← Üç sütun, ses tonu, copy kuralları
05-TECH-STACK.md                   ← Next.js, klasör yapısı, dependencies
06-COMPONENT-LIBRARY.md            ← Tüm yeniden kullanılabilir komponentler
07-PAGE-SPECIFICATIONS.md          ← Her sayfanın detaylı specleri
08-CONTENT-INVENTORY.md            ← Müşteriden alınacak gerçek içerik listesi
09-RULES-AND-GUARDRAILS.md         ← ⚠ EN KRİTİK — kalite garantisi kuralları
10-ROADMAP.md                      ← Aşama aşama uygulama planı
11-DEFINITION-OF-DONE.md           ← "Bitti" tanımı, kalite kriterleri
```

**Plan modunda çalışırken:** Önce 01, 02, 09 ve 10 dosyalarını oku. Plan oluşturduğunda bu üç dosyadaki kurallara aykırı hiçbir şey önerme.

---

## 🏛 Proje Anayasası

Bu projede **dört değişmez kural** vardır:

### 1. Premium hedefi her zaman, her seferinde
"Yeterince iyi" yoktur. Bir komponent çıkarıyorsan, Bahçeşehir Koleji'nin sitesinden anlamlı şekilde daha iyi olmalı. Sıradan, jenerik, "AI çıktısı" hisli sonuçlar **kabul edilmez** — refactor edilir.

### 2. Tanımlı sistemden sapma yok
Renk, tipografi, spacing, motion, component, copy kuralları **02-DESIGN-SYSTEM.md** ve **09-RULES-AND-GUARDRAILS.md** dosyalarında tanımlıdır. Bu tanımların dışında bir karar veremezsin. Yeni bir karar gerekiyorsa, önce sistemi güncelle, sonra uygula.

### 3. İçerik gerçekçi, placeholder dürüst
Müşteriden henüz gelmemiş içerik için **lorem ipsum yok**. Bunun yerine `08-CONTENT-INVENTORY.md`'de tanımlanan format ile placeholder bırak — `<ContentNote type="photo" desc="Hero kampüs drone shot" status="tba" />` gibi. Sahte içerik yok, sahte rakam yok, sahte testimonial yok.

### 4. Türkçe önce, İngilizce sonra
Bu bir Türk okulu. Tüm metin önce Türkçe yazılır. İngilizce versiyon Faz 7'de eklenir. Tüm tipografi seçimleri Türkçe karakterlerle (ç, ğ, ı, İ, ö, ş, ü) test edilmek zorunda.

---

## 🎨 Yön (Visual Direction)

**Kabul edilen yön:** Modern Bold Editorial × Architectural Restraint

- **Tipografi:** Bricolage Grotesque (display) + Manrope (body)
- **Ana renk:** Antrasit `#1F2228`
- **Vurgu renk:** Turuncu (parlak) `#F2581C` + Şeftali (açık) `#F8A878`
- **Zemin:** Sıcak off-white `#FAFAF8`
- **Karakter:** Köklü ama enerjik. Kurumsal ama sıcak. Premium ama erişilebilir. Sıradan ama asla.

**Kabul edilmeyen yönler** (red flag — bu hisse kayıyorsa dur):
- ❌ Cliché magazine fantazisi (Vol/Cilt/Sayı/Roma rakamları)
- ❌ Soğuk Apple klonu (sıcaklık ve aile mirası kaybolur)
- ❌ AI-generic kurumsal şablon (Bahçeşehir Koleji havası)
- ❌ Çocuksu pastel okul sitesi (Toca Boca tarzı — ortaokul/lise için yanlış)
- ❌ Brutalist agresif tipografi (okul için fazla)

Detaylı kurallar için: **09-RULES-AND-GUARDRAILS.md**

---

## 👤 Proje Rolleri

- **Ürün Sahibi / Karar Verici:** Utkus (aile şirketi, tek karar verici)
- **Direktör (Strateji + Tasarım Sistemi + Briefler):** Claude (bu doküman setinin yazarı)
- **Geliştirici (Plan + Implementation):** Claude Code (Antigravity üzerinden, plan modunda)
- **İçerik Sağlayıcı:** Utkus + Aile + Kocatürk Okulları İletişim Ekibi

---

## 🏗 Teknik Çatı (Özet)

Detay için: **05-TECH-STACK.md**

- **Framework:** Next.js 15 (App Router)
- **Styling:** Tailwind CSS + CSS Variables
- **CMS:** Sanity (headless)
- **Hosting:** Vercel
- **Animation:** Motion (framer-motion successor)
- **Forms:** React Hook Form + Zod
- **Icons:** Boxicons + Custom SVG
- **Fonts:** Bricolage Grotesque + Manrope (Google Fonts üzerinden)
- **Performance hedefi:** Lighthouse 95+ (her kategoride)

---

## 📅 Faz Özeti

Detay için: **10-ROADMAP.md**

| Faz | Konu | Süre |
|-----|------|------|
| 0 | Setup, design tokens, CI/CD | 3 gün |
| 1 | Design system + atomic components | 1 hafta |
| 2 | Ana sayfa (4 bölümlük vertical slice → tam sayfa) | 1.5 hafta |
| 3 | Kampüs sistemi (liste + tek kampüs şablonu) | 1.5 hafta |
| 4 | Eğitim programları (havacılık + robotik özel sayfalar) | 1 hafta |
| 5 | Başarılar + Hakkımızda + Haberler + İletişim | 1.5 hafta |
| 6 | Form, ön kayıt, kariyer, e-Kocatürk geçişi | 1 hafta |
| 7 | İngilizce versiyon | 0.5 hafta |
| 8 | Test, audit, lansman | 0.5 hafta |

**Toplam:** ~9-10 hafta · **Hedef lansman:** 2026 kayıt sezonu öncesi (Mart 2026)

---

## ✅ Başarı Kriterleri

Bu proje başarılı sayılır eğer:

1. **Görsel:** Bahçeşehir, TED, Çakabey, MEV, Saint Joseph sitelerinden anlamlı şekilde daha iyi/farklı görünüyor
2. **Performans:** Lighthouse 95+ her kategoride, mobil dahil
3. **SEO:** "izmir özel okul", "turgutlu özel okul", "havacılık lisesi izmir" gibi anahtar kelimelerde Google ilk sayfasında
4. **Erişilebilirlik:** WCAG AA seviyesinde
5. **Veli kararı:** Aday velinin sitede 30 saniye içinde "burayı ziyaret etmek istiyorum" hissi oluşması
6. **Marka:** "Bahçeşehir gibi her yerde aynı" yerine "Ege'nin omurgası, buralı, köklü" algısı

---

**Doküman seti versiyonu:** 1.0  
**Hazırlayan:** Claude (Direktörlük) — 10 Nisan 2026  
**Onaylayan:** Utkus — [bekliyor]

Sıradaki dosya: **01-VISION-AND-POSITIONING.md**
