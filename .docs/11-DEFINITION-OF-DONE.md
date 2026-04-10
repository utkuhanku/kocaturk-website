# 11 · DEFINITION OF DONE

> Bir görev "bitti" demek için **tüm bu kontrol listelerinden** geçmelidir. "%80 bitti" yoktur; ya tam bitmiştir ya da bitmemiştir. Bu doküman, nesnel kalite standardını sağlar.

---

## 1. COMPONENT DEFINITION OF DONE

Bir component "bitti" demek için:

### 1.1 Kod
- [ ] TypeScript strict, `any` yok
- [ ] Props interface tanımlı (`06-COMPONENT-LIBRARY.md`'deki API'ye uygun)
- [ ] `forwardRef` (form/interactive elementlerde)
- [ ] `className` prop ile override edilebilir (`cn()` ile)
- [ ] Default export değil, named export (Tree-shaking için)
- [ ] Default props'lar interface içinde değil, destructuring'de

### 1.2 Görsel
- [ ] DS tokens kullanılmış (magic number yok)
- [ ] Light bg ve dark bg variant'ları çalışıyor (gerekiyorsa)
- [ ] Hover state çalışıyor (interactive ise)
- [ ] Focus state görünür (`:focus-visible` outline)
- [ ] Disabled state çalışıyor (form'sa)
- [ ] Loading state çalışıyor (async ise)
- [ ] Mobile responsive
- [ ] Türkçe karakterler doğru render

### 1.3 Animation
- [ ] DS easing/duration kullanılmış
- [ ] `prefers-reduced-motion` saygılı
- [ ] Hover transitions yumuşak (animation feels intentional)

### 1.4 Accessibility
- [ ] Keyboard navigable (Tab, Enter, Escape)
- [ ] ARIA labels (icon-only butonlar için)
- [ ] Semantic HTML (`<button>`, `<a>`, `<nav>`, etc.)
- [ ] Color contrast WCAG AA (en az 4.5:1 normal text, 3:1 large text)
- [ ] Focus trap (modal/dropdown ise)

### 1.5 Dokümantasyon
- [ ] Component dosya başında JSDoc header (06-COMPONENT-LIBRARY referans)
- [ ] `/dev/components/[name]` demo sayfası var (dev-only)
- [ ] Kullanım örnekleri en az 3 variant gösteriyor

### 1.6 Test
- [ ] Manuel browser test (Chrome, Safari, Firefox)
- [ ] Mobile gerçek cihaz test (iPhone + Android)
- [ ] Reduced motion test
- [ ] Keyboard test

---

## 2. SAYFA DEFINITION OF DONE

Bir sayfa "bitti" demek için:

### 2.1 İçerik
- [ ] Tüm copy `04-CONTENT-STRATEGY.md` kurallarına uygun
- [ ] Hiçbir lorem ipsum yok (ContentNote kullanılmış)
- [ ] Hiçbir stok foto yok (PhotoSlot kullanılmış)
- [ ] Yasaklı kelimeler (`09-RULES-AND-GUARDRAILS.md` Bölüm 5) yok
- [ ] Üç sütundan biri net şekilde işleniyor
- [ ] "Bahçeşehir Koleji testi" geçildi
- [ ] Türkçe yazım kuralları doğru (rakam, tarih, vurgu)

### 2.2 Layout
- [ ] Section ritmi (light/dark alternasyon) kontrol edildi
- [ ] Asimetrik layout (50/50 yok)
- [ ] Mobile hierarchy bozulmadan korunmuş
- [ ] Footer linkleri 404 değil
- [ ] Header sticky behavior çalışıyor
- [ ] Breadcrumb var (ana sayfa hariç)
- [ ] CTA Band var (sayfa sonu)

### 2.3 Görsel
- [ ] PhotoSlot'lar düzgün açıklama içeriyor
- [ ] ContentNote sayısı dürüst, doğru tür
- [ ] Hero görsel (gerçek veya placeholder) etkili
- [ ] Renk paleti dışına çıkılmamış

### 2.4 Animation
- [ ] Reveal animasyonları doğru tetikleniyor
- [ ] Hero title stagger çalışıyor (varsa)
- [ ] Number counter çalışıyor (varsa)
- [ ] Hover state'ler tüm interaktif elementlerde

### 2.5 Performance
- [ ] **Lighthouse Performance ≥ 95** (mobile + desktop)
- [ ] **LCP < 2.0s** (mobile)
- [ ] **CLS < 0.05**
- [ ] **TBT < 150ms**
- [ ] Image optimization (Next.js Image)
- [ ] Bundle size ölçüldü, hedef altında
- [ ] Above-the-fold content priority loaded

### 2.6 SEO
- [ ] **Lighthouse SEO = 100**
- [ ] `<title>` unique ve description (60-70 char)
- [ ] `<meta description>` (max 160 char)
- [ ] Open Graph tags (title, description, image)
- [ ] Twitter Card
- [ ] `canonical` URL
- [ ] `hreflang` (TR + EN varsa)
- [ ] Schema.org JSON-LD inject edilmiş
- [ ] H1 tek bir tane
- [ ] Heading hierarchy doğru
- [ ] Image `alt` her resimde anlamlı

### 2.7 Accessibility
- [ ] **Lighthouse Accessibility = 100**
- [ ] axe DevTools 0 issue
- [ ] Skip-to-content link
- [ ] Tab navigation tüm interaktif elementi geçer
- [ ] Screen reader test (en az ana akış)
- [ ] Color contrast
- [ ] Form label'ları
- [ ] Focus visible

### 2.8 Browser & Device Test
- [ ] Chrome desktop (son 2 versiyon)
- [ ] Safari desktop (son 2 versiyon)
- [ ] Firefox desktop (son 2 versiyon)
- [ ] Edge desktop (son 2 versiyon)
- [ ] iOS Safari (gerçek cihaz)
- [ ] Android Chrome (gerçek cihaz)
- [ ] Tablet (iPad Safari)

### 2.9 Cross-Linking
- [ ] Header navigasyonundan ulaşılıyor (gerekiyorsa)
- [ ] Footer'dan ulaşılıyor (gerekiyorsa)
- [ ] İlgili sayfalara cross-link var
- [ ] Breadcrumb doğru hierarchy
- [ ] CTA'lar doğru sayfaya yönlendiriyor

### 2.10 Direktör Onayı
- [ ] Utkus walkthrough yaptı
- [ ] "Premium hissi var mı?" sorusu olumlu cevaplandı

---

## 3. FORM DEFINITION OF DONE

### 3.1 Kullanıcı Deneyimi
- [ ] Tüm field'lar label'lı
- [ ] Required field'lar belirgin (turuncu nokta)
- [ ] Hata mesajları açık ve yardımcı
- [ ] Inline validation (blur sırasında)
- [ ] Submit buton loading state
- [ ] Success page veya inline confirmation
- [ ] Error handling (network hatası, server hatası)

### 3.2 Validation
- [ ] Client-side: React Hook Form + Zod
- [ ] Server-side: API route içinde Zod schema validation
- [ ] Email format kontrolü
- [ ] Türkçe telefon format (`05XX XXX XX XX`)
- [ ] Required fields enforced

### 3.3 Güvenlik
- [ ] Honeypot field
- [ ] Rate limiting (Vercel KV ile, IP başına 5/dakika)
- [ ] CSRF korumalı (Next.js built-in)
- [ ] Email injection guard

### 3.4 KVKK
- [ ] Açık rıza checkbox (zorunlu)
- [ ] KVKK aydınlatma metni link
- [ ] Veri kullanım amacı açık
- [ ] Onay olmadan submit blok

### 3.5 Email Delivery
- [ ] Resend API çalışıyor
- [ ] Email içeriği formatlı (React Email ile)
- [ ] Mailbox'a ulaşıyor (test edildi)
- [ ] Spam'a düşmüyor (SPF/DKIM doğrulama)

### 3.6 Erişilebilirlik
- [ ] Tüm field'lar keyboard navigable
- [ ] Focus state görünür
- [ ] Hata mesajları screen reader friendly (`aria-live`)

---

## 4. CMS / SANITY DEFINITION OF DONE

### 4.1 Schema
- [ ] TypeScript types generated
- [ ] Required fields enforce edilmiş
- [ ] Field validation (regex, min/max)
- [ ] Field açıklamaları (editör için yardım)
- [ ] Preview pane çalışıyor

### 4.2 Studio
- [ ] Türkçe arayüz
- [ ] Doc list ekran tasarımı düzgün
- [ ] Editor için anlamlı sıralama

### 4.3 Frontend Bağlantı
- [ ] GROQ query'leri optimize
- [ ] ISR / revalidate webhook çalışıyor
- [ ] Image CDN bağlı (`@sanity/image-url`)
- [ ] Type safety sağlanmış

---

## 5. SEO DEFINITION OF DONE (Site Çapı)

### 5.1 Teknik SEO
- [ ] `sitemap.xml` auto-generated, tüm public sayfalar
- [ ] `robots.txt` doğru
- [ ] Google Search Console submit
- [ ] Bing Webmaster submit
- [ ] hreflang doğru (TR + EN varsa)
- [ ] Canonical URL'ler doğru
- [ ] HTTPS zorla, HTTP redirect

### 5.2 İçerik SEO
- [ ] Anahtar kelimeler doğal (keyword stuffing yok)
- [ ] Title tags unique
- [ ] Meta descriptions unique ve eylem-odaklı
- [ ] H1 her sayfada unique
- [ ] Internal linking sağlıklı

### 5.3 Schema Markup
- [ ] `EducationalOrganization` (ana sayfa)
- [ ] `School` + `LocalBusiness` (her kampüs)
- [ ] `Person` (yönetim kadrosu)
- [ ] `Event` (etkinlikler)
- [ ] `Article` (haberler)
- [ ] `BreadcrumbList` (alt sayfalar)

---

## 6. ACCESSIBILITY DEFINITION OF DONE (Site Çapı)

### Standart: WCAG 2.1 Level AA

- [ ] Tüm sayfalar Lighthouse A11y = 100
- [ ] axe DevTools 0 issue
- [ ] Manual keyboard test (full site)
- [ ] Screen reader test (en az ana akış)
- [ ] Color contrast tüm metin (4.5:1 normal, 3:1 large)
- [ ] Focus indicator her interactive element'te
- [ ] Skip link header'da
- [ ] Form labels her field'da
- [ ] Image alt her resimde
- [ ] ARIA labels icon-only butonlarda
- [ ] Reduced motion respect
- [ ] Heading hierarchy doğru
- [ ] Tek h1 her sayfada
- [ ] Link metni anlamlı ("buraya tıkla" yok)

---

## 7. PERFORMANCE DEFINITION OF DONE

### Lighthouse Hedefleri (her sayfa)

- [ ] Performance ≥ 95 (mobile + desktop)
- [ ] Accessibility = 100
- [ ] Best Practices ≥ 95
- [ ] SEO = 100

### Web Vitals

- [ ] LCP < 2.0s
- [ ] FID / INP < 100ms
- [ ] CLS < 0.05
- [ ] FCP < 1.2s
- [ ] TBT < 150ms

### Bundle Size

- [ ] Initial JS < 150KB gzipped
- [ ] Initial CSS < 30KB gzipped
- [ ] Per-route JS < 50KB additional
- [ ] Image total per page < 2MB

### Image Optimization

- [ ] Next.js Image kullanılmış
- [ ] WebP format (fallback otomatik)
- [ ] Lazy loading (above-the-fold hariç)
- [ ] Priority loading (LCP image)
- [ ] Responsive `sizes` attribute
- [ ] No layout shift (width/height)

### Font Optimization

- [ ] `font-display: swap` veya `optional`
- [ ] Subset (latin + latin-ext)
- [ ] `preconnect` Google Fonts
- [ ] No FOUT / FOIT

---

## 8. SECURITY DEFINITION OF DONE

- [ ] HTTPS forced
- [ ] Security headers (`next.config.ts`)
  - X-Frame-Options: DENY
  - X-Content-Type-Options: nosniff
  - Referrer-Policy: strict-origin-when-cross-origin
  - HSTS
  - CSP (Content Security Policy)
- [ ] Form rate limiting
- [ ] Input sanitization (Zod)
- [ ] Honeypot anti-bot
- [ ] Environment variables (no hard-coded secrets)
- [ ] Vercel deployment protection (preview env)
- [ ] Sanity API token rotation policy

---

## 9. CONTENT QUALITY DEFINITION OF DONE

### Lansman Öncesi Kontrol

- [ ] **Tüm `<ContentNote>` envantarı çıkarıldı**, kalan placeholder sayısı `08-CONTENT-INVENTORY.md` checklisti ile karşılaştırıldı
- [ ] 🔴 işaretli içerikler %100 dolu
- [ ] 🟡 işaretli içerikler en az %80 dolu
- [ ] 🟢 işaretli içerikler için "lansman sonrası ekleme" planı net
- [ ] Tüm sayılar Utkus tarafından doğrulandı
- [ ] Tüm kişi isimleri, fotoğrafları onaylı
- [ ] Tüm öğrenci başarıları KVKK izinli
- [ ] KVKK metinleri hukuk onaylı
- [ ] Logo, marka renkleri Utkus tarafından onaylı
- [ ] Kampüs listesi, telefonlar, adresler doğrulanmış

---

## 10. LANSMAN ÖNCESİ SON KONTROL

### 24 Saat Önce
- [ ] Tüm Lighthouse skorları ✅
- [ ] Manual test (her sayfa, her form)
- [ ] Cross-browser test
- [ ] Mobile device test
- [ ] Eski site backup
- [ ] DNS hazırlık
- [ ] Production env vars
- [ ] Monitoring tools aktif (Vercel Analytics, Plausible)
- [ ] Direktör son onay

### Lansman Anında
- [ ] DNS switch
- [ ] Cache warm-up (ana sayfa, kritik sayfalar)
- [ ] HTTPS doğrulama
- [ ] Form test (canlıda)
- [ ] Email gönderim test
- [ ] Mobile test (canlıda)
- [ ] Search Console submit (yeni sitemap)

### Lansman Sonrası 24 Saat
- [ ] Real-time monitoring
- [ ] Hata loglarını kontrol et
- [ ] Performance metrik kontrol
- [ ] Form submission kontrol
- [ ] Sosyal medya duyuru
- [ ] Aile bilgilendirme

### Lansman Sonrası 1 Hafta
- [ ] Google Search Console indexleme kontrol
- [ ] İlk Web Vitals real user data
- [ ] İlk form submission'lar incelendi
- [ ] Kullanıcı feedback toplama
- [ ] Olası bug fix'ler
- [ ] Lansman raporu

---

## 11. CODE REVIEW CHECKLIST

PR merge öncesi her PR için:

- [ ] CI yeşil (lint + type-check + build + Lighthouse CI)
- [ ] Manuel preview deploy test
- [ ] Mobile test (Vercel preview)
- [ ] Yeni component varsa `06-COMPONENT-LIBRARY.md` güncellenmiş mi?
- [ ] Yeni sayfa varsa `03-INFORMATION-ARCHITECTURE.md` güncellenmiş mi?
- [ ] Yeni rule değişikliği varsa Direktör onayı var mı?
- [ ] Türkçe karakter test
- [ ] Magic number yok
- [ ] `<ContentNote>` veya `<PhotoSlot>` placeholder ile dürüst
- [ ] Console.log temizlenmiş
- [ ] Yorum gerekiyorsa Türkçe açıklama var

---

## 12. RED FLAG (ANINDA RED)

PR / commit'te görüldüğünde **anında reddedilir**:

- ❌ `any` type kullanımı
- ❌ `@ts-ignore`
- ❌ `console.log` (production code'da)
- ❌ Inline hex color (`color: #ABC123`)
- ❌ Magic number padding (`padding: 23px`)
- ❌ Lorem ipsum
- ❌ Stok foto URL
- ❌ AI üretilen görsel
- ❌ Inter / Roboto / Space Grotesk import
- ❌ Italic typography
- ❌ Bootstrap / Material UI import
- ❌ jQuery import (?!)
- ❌ Yasaklı kelime listesinden bir kelime ("Türkiye'nin lideri", vs.)
- ❌ Bahçeşehir/TED jenerik kurumsal cümle
- ❌ "Hızlı bir fix sonra düzeltilir" yorumu

---

## 13. ORTAK KARAR — "BİTTİ" Mİ?

Bir görev "bitti" demek için **ÜÇ AYAK**:

1. **TEKNİK:** Tüm bu DOD checklistleri ✅
2. **KALİTE:** "Bahçeşehir Koleji'nden anlamlı şekilde daha iyi mi?" sorusuna cevap ✅
3. **DİREKTÖR:** Utkus walkthrough yaptı ve onayladı ✅

Bu üç ayaktan **biri eksikse, görev bitmiş değildir.**

---

## SON SÖZ

> Bu doküman seti Kocatürk Okulları'na yakışan, premium kalitede bir website inşa etmek için hazırlandı.
>
> Burada yazılan kuralların tümü, **gereksiz değil, gerekli**. Çünkü "iyi" sonuç ile "premium" sonuç arasındaki fark, her detayda gizlidir. Tek tek kuralları gevşettiğin an, sonuç orta seviyeye düşer.
>
> 23 kampüste, 4.000+ öğrenciye, 246 öğretmene hizmet eden bir aile şirketi, kendine yakışır bir dijital yüze hak ediyor. Bu doküman seti bunu garanti etmek için var.
>
> İyi şanslar.
>
> — Direktör (Claude)
> 10 Nisan 2026

---

**SON DOKÜMAN.** Doküman seti 12 dosya ile tamamlanmıştır.

Okuma sırası hatırlatması:
1. README.md
2. 01-VISION-AND-POSITIONING.md
3. 02-DESIGN-SYSTEM.md
4. 03-INFORMATION-ARCHITECTURE.md
5. 04-CONTENT-STRATEGY.md
6. 05-TECH-STACK.md
7. 06-COMPONENT-LIBRARY.md
8. 07-PAGE-SPECIFICATIONS.md
9. 08-CONTENT-INVENTORY.md
10. **09-RULES-AND-GUARDRAILS.md** ← en kritik
11. 10-ROADMAP.md
12. 11-DEFINITION-OF-DONE.md
