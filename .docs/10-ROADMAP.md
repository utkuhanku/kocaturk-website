# 10 · ROADMAP

> 9-10 haftalık plan. Her faz net bir çıktıya bağlıdır. Faz tamamlanmadan bir sonraki faza geçilmez. Disiplin üretkenliğin önündedir.

---

## TOPLAM ÖZET

| Faz | Adı | Süre | Çıktı |
|---|---|---|---|
| 0 | Setup & Foundation | 3 gün | Çalışan repo, design tokens, CI/CD |
| 1 | Design System & Atomics | 1 hafta | Tüm primitive + pattern componentleri |
| 2 | Ana Sayfa | 1.5 hafta | Production-ready ana sayfa |
| 3 | Kampüs Sistemi | 1.5 hafta | Liste + 5 ana kampüs sayfası |
| 4 | Eğitim Programları | 1 hafta | Kademeler + Havacılık + Robotik + Yurtdışı |
| 5 | İçerik Sayfaları | 1.5 hafta | Başarılar + Hakkımızda + Haberler + İletişim |
| 6 | Form & Kayıt | 1 hafta | Ön kayıt + Bursluluk + Kariyer + Email |
| 7 | İngilizce Versiyon | 0.5 hafta | EN routing + critical pages translated |
| 8 | Test & Lansman | 0.5 hafta | QA, performance, SEO, go-live |

**Toplam:** ~9-10 hafta · **Hedef lansman:** 2026 kayıt sezonu öncesi (Mart 2026)

---

## FAZ 0 · SETUP & FOUNDATION (3 gün)

> Amaç: Geliştirme ortamını sıfırdan kurmak, design tokens'ı yerleştirmek, CI/CD'yi ayarlamak. Bu faz tamamlanmadan tek satır component yazılmaz.

### Görevler

#### Gün 1 — Repo & Stack
- [ ] GitHub repo oluştur (`kocaturk-website`)
- [ ] Next.js 15 App Router projesi (`create-next-app` + TypeScript)
- [ ] Tailwind CSS 4 kurulumu, `@theme` config
- [ ] Biome linter setup (ESLint yerine)
- [ ] Lefthook pre-commit hooks
- [ ] `.docs/` klasörünü repo'ya kopyala (bu doküman seti)
- [ ] `README.md` (geliştirici onboarding) — `.docs/`a yönlendirir
- [ ] `.env.example` ve env vars
- [ ] `tsconfig.json` strict mode
- [ ] Klasör yapısını oluştur (`05-TECH-STACK.md` Bölüm 3)

#### Gün 2 — Design Tokens & Fonts
- [ ] `src/styles/tokens.css` — tüm CSS variables
- [ ] `src/styles/globals.css` — reset + base
- [ ] Bricolage Grotesque + Manrope Google Fonts kurulumu
- [ ] Türkçe karakter test sayfası (`/dev/font-test`)
- [ ] Tailwind tema config tüm DS variables ile
- [ ] `<MotionProvider>` setup (reduced motion için)
- [ ] Layout root (`src/app/layout.tsx`) — fonts, metadata defaults

#### Gün 3 — CI/CD & Sanity
- [ ] Vercel projesi bağla
- [ ] Preview deploy çalışır mı?
- [ ] GitHub Actions: `ci.yml` (lint + type-check + build)
- [ ] Lighthouse CI workflow
- [ ] Sanity Studio kurulumu (`sanity/` folder)
- [ ] İlk schema'lar: `campus`, `program`, `achievement`, `news`
- [ ] Sanity dataset ile Next.js bağlantı testi
- [ ] Vercel env vars

### Faz 0 Kabul Kriterleri
- ✅ `npm run dev` lokal'de hatasız çalışıyor
- ✅ Vercel'de preview deploy başarılı
- ✅ `tsc --noEmit` 0 hata
- ✅ `biome check` 0 hata
- ✅ Lighthouse boş homepage skoru: Performance 100, A11y 100
- ✅ Bricolage + Manrope yükleniyor, Türkçe karakterler doğru
- ✅ Sanity Studio çalışıyor, ilk schema'lar görünüyor

---

## FAZ 1 · DESIGN SYSTEM & ATOMICS (1 hafta)

> Amaç: Sayfaları inşa etmeden önce tüm yapı taşlarını premium kalitede üretmek. Burada acelecilik ileride çürür.

### Hafta Görevleri

#### Pazartesi — Primitives
- [ ] `<Button>` (4 variant × 3 size)
- [ ] `<Input>`
- [ ] `<Label>`
- [ ] `<Eyebrow>` (default + light)
- [ ] `<ContentNote>` (3 variant)
- [ ] Demo sayfa: `/dev/components/primitives`

#### Salı — Motion & Helpers
- [ ] `<Reveal>` (IntersectionObserver, delay variants)
- [ ] `<NumberCounter>`
- [ ] `<MotionProvider>` reduced motion respect
- [ ] Smooth scroll behavior
- [ ] Demo sayfa: `/dev/components/motion`

#### Çarşamba — PhotoSlot Sistemi
- [ ] `<PhotoSlot>` (light + dark variants)
- [ ] Aspect ratio variants
- [ ] Helper: `replacePhotoSlot(id, image)` utility
- [ ] CI lint: `<ContentNote>` ve `<PhotoSlot>` sayacı (production warning)
- [ ] Demo sayfa: `/dev/components/photo-slots`

#### Perşembe — Pattern Componentleri (1)
- [ ] `<Pillar>`
- [ ] `<NumberCell>`
- [ ] `<StatCard>`
- [ ] `<ProgramCard>`
- [ ] Demo sayfa: `/dev/components/patterns-1`

#### Cuma — Pattern Componentleri (2)
- [ ] `<CampusCard>`
- [ ] `<AchievementCard>`
- [ ] `<NewsCard>` (3 size)
- [ ] `<TestimonialCard>`
- [ ] Demo sayfa: `/dev/components/patterns-2`

#### Cumartesi (opsiyonel buffer)
- [ ] Detay polish, hover states, mobile davranışlar
- [ ] Tüm component'ler için `aria-label`, keyboard nav

### Faz 1 Kabul Kriterleri
- ✅ Tüm component'ler `06-COMPONENT-LIBRARY.md`'de tanımlanan API'ye uygun
- ✅ TypeScript strict 0 hata
- ✅ Her component'in `/dev/components/[name]` demo sayfası var
- ✅ Hover, focus, disabled, loading state'leri çalışıyor
- ✅ Reduced motion preference saygılı
- ✅ Mobile davranışları doğru
- ✅ Turuncu vurgu sistemi tutarlı
- ✅ Türkçe karakter test cümlesi tüm component'lerde sorunsuz

---

## FAZ 2 · ANA SAYFA (1.5 hafta)

> Amaç: Site'nin yüzünü production-ready inşa etmek. 11 bölüm, vertical slice yaklaşımı.

### Görev Sırası

#### Gün 1-2 — Layout Kabuğu
- [ ] `<MarketingLayout>`
- [ ] `<SiteHeader>` desktop (mega menu dahil — 3 menü)
- [ ] `<SiteHeader>` mobile (full screen overlay)
- [ ] `<SiteFooter>` (5 sütun + bottom bar)
- [ ] `<Breadcrumbs>` (ana sayfa hariç)
- [ ] Sticky header scroll behavior

#### Gün 3 — Hero
- [ ] `<Hero>` section komponenti
- [ ] Hero title kelime kelime stagger reveal
- [ ] Stats counter row
- [ ] Asimetrik 1.05/1 split
- [ ] Mobile hierarchy

#### Gün 4 — Manifesto
- [ ] `<Manifesto>` quote layout
- [ ] Asimetrik indent typografi
- [ ] 3 pillar grid

#### Gün 5 — Numbers Banner & Featured Story
- [ ] `<NumbersBanner>` (4×2 grid, NumberCounter ile)
- [ ] `<FeaturedStory>` Roma showcase
- [ ] Medal grid

#### Gün 6 — Stage Selector & Programs Grid
- [ ] `<StageSelector>` 4-card
- [ ] `<ProgramsGrid>` 6-card
- [ ] Featured (Havacılık, Robotik) styling

#### Gün 7 — International Strip & Campus Map
- [ ] `<InternationalStrip>` (sol içerik, sağ ülke kart grid)
- [ ] `<CampusMap>` (Mapbox + sağ liste)
- [ ] Campus marker hover sync

#### Gün 8 — Testimonials & News Grid
- [ ] `<Testimonials>` (3-card placeholder)
- [ ] `<NewsGrid>` (1 büyük + 4 küçük hibrit)

#### Gün 9 — CTA Band & Polish
- [ ] `<CtaBand>` (sayfa sonu)
- [ ] Section ritmi (light/dark alternasyonu kontrol)
- [ ] Tüm reveal animasyonları
- [ ] Mobile her bölüm test
- [ ] Lighthouse performance 95+ kontrol

### Faz 2 Kabul Kriterleri
- ✅ Ana sayfa 11 bölümlük hali production'a hazır
- ✅ Tüm `<ContentNote>` ve `<PhotoSlot>` placeholder'lar net
- ✅ Lighthouse 95+ (Performance, A11y, SEO, Best Practices)
- ✅ Mobile (320-768px) hatasız
- ✅ Tablet (768-1024px) hatasız
- ✅ Desktop (1024-1920px+) hatasız
- ✅ Reduced motion preference saygılı
- ✅ Türkçe karakter sorunsuz
- ✅ Footer linkler doğru sayfalara işaret ediyor (404 yok)
- ✅ Direktör onayı (Utkus): "Premium hissi var, devam"

**Bu fazın sonunda bir checkpoint var.** Direktör onaylamadan Faz 3'e geçilmez.

---

## FAZ 3 · KAMPÜS SİSTEMİ (1.5 hafta)

> Amaç: Kampüs liste sayfası + 5 ana kampüs için detay sayfası + dynamic routing.

### Görevler

#### Gün 1 — Sanity Schema
- [ ] `campus` schema detaylandırma
- [ ] Kademe sub-document
- [ ] Müdür referans (kişi schema)
- [ ] Tesisler array
- [ ] Servis güzergâhları

#### Gün 2-3 — Kampüsler Liste Sayfası (`/kampusler`)
- [ ] `<CampusMap>` full version
- [ ] Filtre (ilçe, kademe)
- [ ] CampusCard grid
- [ ] Öne çıkan ana kampüs vurgu

#### Gün 4-5 — Tek Kampüs Şablonu (`/kampusler/[slug]`)
- [ ] Dynamic route + Sanity fetch
- [ ] Hero section (kampüs spesifik)
- [ ] Ana Kampüs / 2. Ana Kampüs badge sistemi
- [ ] Hikâye bölümü
- [ ] Kademe sekmeleri / accordion
- [ ] Galerisi
- [ ] Servis & konum (Mapbox)
- [ ] CTA Band

#### Gün 6-7 — 5 Ana Kampüs İçeriği
- [ ] Manisa Turgutlu (Sanity'de oluştur, sayfayı render et)
- [ ] İzmir Gaziemir
- [ ] İzmir Karabağlar (Üçkuyular)
- [ ] İzmir Kemalpaşa
- [ ] İzmir Tire

#### Gün 8 — Polish & Test
- [ ] Her kampüs sayfası için Lighthouse
- [ ] Mobile test
- [ ] Cross-link test (kampüs → kademe → kampüs)

### Faz 3 Kabul Kriterleri
- ✅ Kampüsler liste sayfası çalışıyor
- ✅ 5 ana kampüs sayfası rendered
- ✅ Sanity update → site update (revalidate)
- ✅ Mapbox marker'lar doğru koordinatta
- ✅ Lighthouse 95+ her kampüs sayfası
- ✅ Direktör onayı

---

## FAZ 4 · EĞİTİM PROGRAMLARI (1 hafta)

> Amaç: Eğitim hub + kademe sayfaları + 3 stratejik özel sayfa (Havacılık, Robotik, Yurtdışı).

### Görevler

#### Gün 1 — Eğitim Hub & Kademeler
- [ ] `/egitim` index sayfası (kademe + program özet)
- [ ] `/egitim/anaokulu`
- [ ] `/egitim/ilkokul`
- [ ] `/egitim/ortaokul`
- [ ] `/egitim/anadolu-lisesi`
- [ ] `/egitim/fen-lisesi`
- [ ] Şablon: hero + müfredat + günlük yaşam + kampüsler + CTA

#### Gün 2-3 — Havacılık Lisesi Özel Sayfa
- [ ] `/egitim/havacilik-lisesi`
- [ ] Hero (özel, premium)
- [ ] Müfredat sütunları
- [ ] Mezun yolları
- [ ] Tesisler
- [ ] Başvuru bilgileri
- [ ] Featured CTA

#### Gün 4-5 — Robotik & Kodlama Özel Sayfa
- [ ] `/egitim/programlar/robotik-kodlama`
- [ ] Hero
- [ ] Roma showcase (FeaturedStory tekrar, daha detaylı)
- [ ] Kademe yaklaşımı
- [ ] Atölye fotoğrafları
- [ ] Codeweek
- [ ] Diğer başarılar

#### Gün 6-7 — Yurtdışı Eğitim Özel Sayfa + Diğer Programlar
- [ ] `/egitim/yurtdisi`
- [ ] Hero
- [ ] İngiltere Yaz Okulu detayı
- [ ] eTwinning (4 ülke kart)
- [ ] Uluslararası yarışmalar
- [ ] Yabancı dil eğitimi
- [ ] Diğer programlar (Mind Kids, STEM, WWAP, vs.) — şablon sayfa

### Faz 4 Kabul Kriterleri
- ✅ 6 kademe sayfası
- ✅ 3 stratejik özel sayfa premium kalitede
- ✅ Diğer program sayfaları template ile
- ✅ Mobile + Lighthouse her sayfa
- ✅ Direktör onayı

---

## FAZ 5 · İÇERİK SAYFALARI (1.5 hafta)

### Görevler

#### Gün 1-2 — Başarılar Arşivi
- [ ] `/basarilarimiz` ana sayfa
- [ ] Hero + stat strip
- [ ] Filtre sistemi
- [ ] AchievementCard masonry grid
- [ ] Tek başarı sayfası `/basarilarimiz/[slug]`
- [ ] Sanity schema: `achievement`

#### Gün 3-4 — Hakkımızda & Tarihçe
- [ ] `/kurumsal/hakkimizda`
- [ ] `/kurumsal/tarihce` (timeline)
- [ ] `/kurumsal/vizyon`
- [ ] `/kurumsal/egitim-felsefemiz`
- [ ] `/kurumsal/yonetim` (kişi kartları)
- [ ] `/kurumsal/sayilar`

#### Gün 5-6 — Haberler Sistemi
- [ ] `/haberler` liste sayfası
- [ ] `/haberler/[slug]` tek haber
- [ ] `/haberler/kategori/[kategori]` kategori liste
- [ ] Sanity schema: `news` (başlık, body, kategori, tarih, hero, gallery)
- [ ] News Grid pattern
- [ ] Pagination

#### Gün 7-8 — Kampüs Yaşamı + İletişim
- [ ] `/kampus-yasami` (kulüpler, sanat, spor)
- [ ] `/iletisim` (genel müdürlük + kampüs liste + form)
- [ ] Footer link'lerinin son kontrolü

### Faz 5 Kabul Kriterleri
- ✅ Tüm Tier 2 sayfaları render
- ✅ Sanity'den içerik akışı çalışıyor
- ✅ Cross-link sistem doğru
- ✅ Mobile + Lighthouse
- ✅ Direktör onayı

---

## FAZ 6 · FORM & KAYIT (1 hafta)

### Görevler

#### Gün 1-2 — Ön Kayıt Formu
- [ ] `/kayit/on-kayit`
- [ ] React Hook Form + Zod schema
- [ ] Form fields: veli, çocuk, kademe, kampüs, mesaj
- [ ] KVKK onay checkbox
- [ ] Honeypot anti-bot
- [ ] Server action / API route
- [ ] Resend email gönderim
- [ ] Teşekkür sayfası

#### Gün 3 — Bursluluk + Ücretler + Servisler
- [ ] `/kayit/bursluluk`
- [ ] `/kayit/ucretler` (ContentNote ile placeholder, gerçek rakam gelince doldurulur)
- [ ] `/kayit/servisler`
- [ ] `/kayit/sss` (accordion)

#### Gün 4 — Kariyer
- [ ] `/kariyer` ana sayfa
- [ ] Açık pozisyonlar liste (Sanity)
- [ ] Başvuru formu

#### Gün 5 — İletişim Formu
- [ ] `/iletisim` formu (zaten Faz 5'te kabuk vardı, şimdi form aktif)

#### Gün 6-7 — KVKK & Yasal
- [ ] `/kvkk-aydinlatma`
- [ ] `/cerez-politikasi`
- [ ] `/gizlilik-politikasi`
- [ ] `/kullanim-sartlari`
- [ ] Cookie banner

### Faz 6 Kabul Kriterleri
- ✅ Tüm formlar çalışıyor (lokalde + Vercel preview'da test)
- ✅ Email gönderim çalışıyor (Resend)
- ✅ Spam koruma aktif
- ✅ KVKK onay sistemi düzgün
- ✅ Yasal sayfalar yüklü (hukuk onaylı metinler)

---

## FAZ 7 · İNGİLİZCE VERSİYON (0.5 hafta)

> Çeviri değil, **yeniden yazım**. İngilizce için aynı pozisyonlama, farklı ses.

### Görevler

#### Gün 1 — i18n Routing
- [ ] Next.js i18n config (`tr` default, `en` second)
- [ ] `/en/*` route'ları
- [ ] Language switcher header'da
- [ ] HTML lang attribute
- [ ] Hreflang meta

#### Gün 2 — Critical Pages Translation
- [ ] `/en` (homepage)
- [ ] `/en/about-us`
- [ ] `/en/campuses`
- [ ] `/en/aviation-high-school`
- [ ] `/en/contact`
- [ ] `/en/admissions`

#### Gün 3 — Sanity i18n
- [ ] Çok dilli string field'lar
- [ ] EN içeriği Sanity'ye giriş

### Faz 7 Kabul Kriterleri
- ✅ Language switch çalışıyor
- ✅ EN sayfalar premium kalite (Türkçe ile aynı seviye)
- ✅ Hreflang doğru
- ✅ EN sayfalar Lighthouse 95+

---

## FAZ 8 · TEST & LANSMAN (0.5 hafta)

> Amaç: Tüm Definition of Done kontrol listelerini geçmek. Lansman sonrası 7/24 incident response hazırlığı.

### Görevler

#### Gün 1 — QA Walkthrough
- [ ] Her sayfa manuel test (5 ana kampüs, 6 kademe, 3 özel sayfa, başarılar, hakkımızda, haberler, formlar)
- [ ] Tüm linkler 404 değil
- [ ] Tüm formlar submit ediyor
- [ ] Email gönderimleri ulaşıyor
- [ ] Browser test: Chrome, Safari, Firefox, Edge (desktop + mobile)
- [ ] iOS Safari (iPhone gerçek cihaz)
- [ ] Android Chrome (gerçek cihaz)

#### Gün 2 — Lighthouse & Performance
- [ ] Tüm sayfalar Lighthouse 95+ (mobile dahil)
- [ ] Web Vitals real-user (Vercel Analytics)
- [ ] Bundle analyzer kontrol
- [ ] Image optimization kontrol
- [ ] Font loading optimization
- [ ] CDN cache headers

#### Gün 3 — SEO & Accessibility
- [ ] Lighthouse SEO 100 (her sayfa)
- [ ] Lighthouse Accessibility 100
- [ ] Schema.org markup tüm sayfalarda
- [ ] Sitemap.xml doğru
- [ ] Robots.txt doğru
- [ ] Open Graph her sayfa
- [ ] Twitter Card her sayfa
- [ ] Google Search Console submit

#### Gün 4 — Final Check & DNS
- [ ] `<ContentNote>` sayım: kalan placeholder kabul edilebilir mi?
- [ ] Direktör son walkthrough
- [ ] DNS hazırlık (Vercel + domain)
- [ ] Production env vars
- [ ] Backup eski site

#### Gün 5 — GO LIVE
- [ ] DNS switch
- [ ] Cache warm-up
- [ ] Real-time monitoring (Vercel Analytics)
- [ ] Sosyal medya duyuru hazırlık
- [ ] Aile bilgilendirme

### Faz 8 Kabul Kriterleri
- ✅ Tüm Definition of Done checklistleri ✅
- ✅ Direktör (Utkus) "GO" kararı
- ✅ DNS başarılı switch
- ✅ Site canlıda, Lighthouse skorları korunuyor
- ✅ İlk 24 saat hata yok

---

## RİSK YÖNETİMİ

### Yüksek Risk

| Risk | Etki | Mitigation |
|---|---|---|
| **İçerik gecikmesi** (08-CONTENT-INVENTORY) | 🔴 Lansman gecikir | Faz 0'da başla, paralel ilerlet, fotoğraf çekim günü erken planla |
| **Profesyonel fotoğraf eksik** | 🔴 ContentNote ile lansman, premium hisse zarar | Faz 0-1'de fotoğrafçı kiralanır, çekim Faz 3-4 sırasında |
| **Sanity öğrenme eğrisi** | 🟡 Sanity yeniyse zaman alır | Faz 0'da kurulur, dokümantasyon paralel |
| **Mobile performans** | 🟡 Lighthouse skor düşer | Her PR Lighthouse, optimize sürekli |
| **KVKK yasal metinler hukuk gecikmesi** | 🟡 Form aktive edilemez | Faz 0'da hukuk danışmanı bilgilendirilir |

### Orta Risk

| Risk | Etki | Mitigation |
|---|---|---|
| **Eski e-Kocatürk migration karışıklığı** | 🟡 — | Bu projeye dahil değil, sadece bridge link |
| **Çoklu dil çeviri kalitesi** | 🟡 EN sayfa zayıf | Native speaker review |
| **Browser uyumsuzluğu** | 🟡 IE yok ama eski Safari sorunlar | Test matrix, polyfill gerekirse |

---

## CHECKPOINT'LER

Her faz sonunda **Direktör (Utkus) onayı** zorunlu:

| Faz | Checkpoint Görüşmesi |
|---|---|
| 0 → 1 | Stack ve foundation kabul |
| 1 → 2 | Component library walkthrough |
| 2 → 3 | **KRİTİK** — Ana sayfa "premium hissi var mı?" kararı |
| 3 → 4 | Kampüs sistem walkthrough |
| 4 → 5 | Stratejik sayfalar walkthrough |
| 5 → 6 | İçerik sayfaları walkthrough |
| 6 → 7 | Form test walkthrough |
| 7 → 8 | EN versiyon kabul |
| 8 → LANSMAN | **GO/NO-GO** kararı |

---

## KAPSAM DIŞI (Bu Projede YOK)

- ❌ **e-Kocatürk veli paneli yeniden yazımı** — ayrı proje
- ❌ **Mobile native app** — şu an web öncelikli
- ❌ **CRM integration** — Sanity yeterli
- ❌ **Online ödeme** — Faz 2'de değerlendirilebilir
- ❌ **Live chat** — manuel iletişim yeterli
- ❌ **Blog motoru ileri özellikleri** (yorum, like, paylaşım sayacı) — Sanity haberler yeter

Bu kapsam genişlerse → ayrı proje önerisi.

---

## TAHMİNİ MALİYET / KAYNAK

> Bu doküman setinin amacı Claude Code agent ile çalışılacak şekilde olduğundan, "developer maliyeti" hesaplanmıyor. Ama dış maliyet kalemleri:

- **Profesyonel fotoğraf çekimi:** ~3 gün ekip, 5 lokasyon — önerilen bütçe ayrıca tartışılır
- **Brand video:** 1 adet 2-3 dk video — ayrıca tartışılır
- **Sanity:** Free tier muhtemelen yeterli (büyürse $99/ay Growth plan)
- **Vercel:** Hobby plan başlangıçta yeterli (büyürse $20/ay Pro)
- **Mapbox:** Free tier (50k load/ay) yeterli
- **Resend:** Free tier (3000 email/ay) yeterli
- **Domain:** Mevcut `kocaturk.k12.tr` korunur
- **Hukuk danışmanı (KVKK):** Tek seferlik ücret

---

**Sıradaki dosya:** `11-DEFINITION-OF-DONE.md` — Her görev için "bitti" tanımı.
