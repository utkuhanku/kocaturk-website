# 05 · TECH STACK

> Bu projenin teknik altyapısı. Stack kararları **kesin**; seçeneklerin tartışıldığı yer değil. Sapma için Direktör (Utkus) onayı gerekir.

---

## 1. STACK ÖZETİ

| Katman | Karar | Versiyon |
|---|---|---|
| **Framework** | Next.js (App Router) | 16.x latest |
| **Dil** | TypeScript | 5.x strict mode |
| **Styling** | Tailwind CSS + CSS Variables | 4.x |
| **CMS** | Sanity (headless) | latest |
| **Hosting** | Vercel | — |
| **Animation** | Motion (framer-motion successor) | latest |
| **Form** | React Hook Form + Zod | latest |
| **Icons** | Boxicons (CDN) + custom SVG | 2.1.4 |
| **Fonts** | Google Fonts (Bricolage Grotesque + Manrope) | — |
| **Image Optimization** | Next.js Image + Sanity CDN | — |
| **Analytics** | Vercel Analytics + Plausible | — |
| **SEO** | Next.js metadata API + structured data (JSON-LD) | — |
| **Email** | Resend | latest |
| **Map** | Mapbox GL JS | latest |

---

## 2. NEDEN BU STACK?

### Next.js (App Router)
- SSR/ISR/SSG hibrit — SEO için kritik
- Image optimization built-in
- i18n routing built-in (TR/EN)
- Server components → daha az JS bundle
- Route handlers → form submission
- Middleware → auth, redirect
- Vercel ile sıfır config deploy

**Alternatif değerlendirildi:** Astro (statik için iyi, dinamik içerik için yetersiz)

### TypeScript Strict Mode
- Production kalitesi için zorunlu
- Sanity şemaları otomatik tip üretiyor
- Refactor güvenliği

### Tailwind CSS 4
- v4 ile artık CSS-first config (`@theme` ile)
- Design tokens doğrudan CSS variable
- JIT, çok hızlı
- Atomic CSS → tutarlılık

**Önemli kural:** Magic number yasak. `p-4` yerine `p-[16px]` yasak. Tüm spacing'ler tokens üzerinden.

### Sanity (CMS)
- Headless, modern
- Real-time collaboration
- Studio customization güçlü
- Image asset pipeline çok iyi
- TypeScript şema desteği
- Free tier yeterli (3 user, 100k API requests)

**Alternatif değerlendirildi:** 
- WordPress + ACF — bakım yükü, performans, güvenlik kötü
- Strapi — self-hosted yorucu
- Payload CMS — Sanity'ye göre genç
- Contentful — pahalı

### Motion (eski Framer Motion)
- Spring physics
- Layout animations
- Scroll-driven animations
- Reduced motion otomatik destek

### Mapbox vs Google Maps
- Mapbox seçildi: özelleştirilebilir tema (dark mode kampüs haritası), free tier yeterli, kontrol gücü daha fazla.

---

## 3. KLASÖR YAPISI

```
kocaturk-website/
├── .docs/                           # bu doküman seti
│   ├── README.md
│   ├── 01-VISION-AND-POSITIONING.md
│   ├── 02-DESIGN-SYSTEM.md
│   ├── 03-INFORMATION-ARCHITECTURE.md
│   ├── 04-CONTENT-STRATEGY.md
│   ├── 05-TECH-STACK.md
│   ├── 06-COMPONENT-LIBRARY.md
│   ├── 07-PAGE-SPECIFICATIONS.md
│   ├── 08-CONTENT-INVENTORY.md
│   ├── 09-RULES-AND-GUARDRAILS.md
│   ├── 10-ROADMAP.md
│   └── 11-DEFINITION-OF-DONE.md
│
├── src/
│   ├── app/                         # Next.js App Router
│   │   ├── (marketing)/             # Public marketing pages
│   │   │   ├── layout.tsx           # Marketing layout (header + footer)
│   │   │   ├── page.tsx             # Ana sayfa (/)
│   │   │   ├── kurumsal/
│   │   │   │   ├── page.tsx         # /kurumsal index (redirect to hakkimizda)
│   │   │   │   ├── hakkimizda/page.tsx
│   │   │   │   ├── tarihce/page.tsx
│   │   │   │   ├── vizyon/page.tsx
│   │   │   │   ├── egitim-felsefemiz/page.tsx
│   │   │   │   ├── yonetim/page.tsx
│   │   │   │   ├── sayilar/page.tsx
│   │   │   │   ├── akreditasyonlar/page.tsx
│   │   │   │   └── sosyal-sorumluluk/page.tsx
│   │   │   ├── kampusler/
│   │   │   │   ├── page.tsx         # Liste + harita
│   │   │   │   └── [slug]/page.tsx  # Tek kampüs (dinamik)
│   │   │   ├── egitim/
│   │   │   │   ├── page.tsx
│   │   │   │   ├── anaokulu/page.tsx
│   │   │   │   ├── ilkokul/page.tsx
│   │   │   │   ├── ortaokul/page.tsx
│   │   │   │   ├── anadolu-lisesi/page.tsx
│   │   │   │   ├── fen-lisesi/page.tsx
│   │   │   │   ├── havacilik-lisesi/page.tsx       # ★ özel sayfa
│   │   │   │   ├── yabanci-dil/page.tsx
│   │   │   │   ├── pdr/page.tsx
│   │   │   │   ├── yurtdisi/page.tsx               # ★ özel sayfa
│   │   │   │   └── programlar/
│   │   │   │       ├── page.tsx
│   │   │   │       └── [slug]/page.tsx             # ★ robotik-kodlama özel sayfa burada
│   │   │   ├── basarilarimiz/
│   │   │   │   ├── page.tsx
│   │   │   │   └── [slug]/page.tsx
│   │   │   ├── kampus-yasami/
│   │   │   │   └── page.tsx
│   │   │   ├── haberler/
│   │   │   │   ├── page.tsx
│   │   │   │   ├── [slug]/page.tsx
│   │   │   │   └── kategori/[kategori]/page.tsx
│   │   │   ├── kayit/
│   │   │   │   ├── page.tsx
│   │   │   │   ├── on-kayit/page.tsx
│   │   │   │   ├── bursluluk/page.tsx
│   │   │   │   ├── ucretler/page.tsx
│   │   │   │   ├── servisler/page.tsx
│   │   │   │   └── sss/page.tsx
│   │   │   ├── kariyer/page.tsx
│   │   │   └── iletisim/page.tsx
│   │   │
│   │   ├── en/                      # İngilizce versiyon (Faz 7)
│   │   │   └── ...
│   │   │
│   │   ├── api/
│   │   │   ├── on-kayit/route.ts    # Form submission
│   │   │   ├── iletisim/route.ts
│   │   │   ├── kariyer/route.ts
│   │   │   └── revalidate/route.ts  # Sanity webhook
│   │   │
│   │   ├── sitemap.ts
│   │   ├── robots.ts
│   │   ├── not-found.tsx            # 404
│   │   ├── error.tsx                # 500
│   │   └── layout.tsx               # Root layout (fonts, providers)
│   │
│   ├── components/
│   │   ├── ui/                      # Atomic primitives
│   │   │   ├── button.tsx
│   │   │   ├── input.tsx
│   │   │   ├── label.tsx
│   │   │   ├── eyebrow.tsx
│   │   │   ├── content-note.tsx     # TBA placeholder badge
│   │   │   └── ...
│   │   ├── layout/
│   │   │   ├── header.tsx
│   │   │   ├── header-mega-menu.tsx
│   │   │   ├── footer.tsx
│   │   │   ├── breadcrumbs.tsx
│   │   │   └── mobile-nav.tsx
│   │   ├── sections/                # Page sections
│   │   │   ├── hero.tsx
│   │   │   ├── manifesto.tsx
│   │   │   ├── pillars.tsx
│   │   │   ├── numbers-banner.tsx
│   │   │   ├── campus-map.tsx
│   │   │   ├── stage-selector.tsx
│   │   │   ├── achievement-grid.tsx
│   │   │   ├── featured-story.tsx
│   │   │   ├── programs-grid.tsx
│   │   │   ├── testimonials.tsx
│   │   │   ├── news-grid.tsx
│   │   │   ├── international-strip.tsx
│   │   │   ├── cta-band.tsx
│   │   │   └── ...
│   │   ├── photo-slot.tsx           # Placeholder system
│   │   ├── reveal.tsx               # Scroll reveal wrapper
│   │   ├── number-counter.tsx       # Animated counter
│   │   ├── motion-provider.tsx      # Reduced motion respect
│   │   └── ...
│   │
│   ├── lib/
│   │   ├── sanity.ts                # Sanity client
│   │   ├── queries.ts               # GROQ queries
│   │   ├── seo.ts                   # SEO helpers
│   │   ├── schema.ts                # JSON-LD schema generators
│   │   ├── analytics.ts
│   │   ├── email.ts                 # Resend wrapper
│   │   ├── validators.ts            # Zod schemas
│   │   └── utils.ts
│   │
│   ├── data/
│   │   ├── campuses.ts              # Static fallback data
│   │   ├── programs.ts
│   │   ├── achievements.ts
│   │   └── ...
│   │
│   ├── styles/
│   │   ├── globals.css              # Reset + base
│   │   ├── tokens.css               # CSS variables (DS tokens)
│   │   └── utilities.css            # Helper classes
│   │
│   └── types/
│       ├── sanity.ts                # Generated Sanity types
│       └── ...
│
├── sanity/                          # Sanity Studio
│   ├── schemas/
│   │   ├── campus.ts
│   │   ├── program.ts
│   │   ├── achievement.ts
│   │   ├── news.ts
│   │   ├── testimonial.ts
│   │   ├── teacher.ts
│   │   └── ...
│   ├── sanity.config.ts
│   └── ...
│
├── public/
│   ├── images/                      # Static assets
│   ├── fonts/                       # (eğer self-host gerekirse)
│   ├── favicons/
│   └── ...
│
├── .env.local                       # Sanity tokens, Resend key, vs.
├── .env.example
├── next.config.ts
├── tailwind.config.ts
├── tsconfig.json
├── package.json
├── README.md                        # Geliştirici onboarding (.docs'a yönlendirir)
└── biome.json                       # Linter (ESLint yerine)
```

---

## 4. DEPENDENCIES

### Core
```json
{
  "dependencies": {
    "next": "^15.0.0",
    "react": "^19.0.0",
    "react-dom": "^19.0.0",
    "typescript": "^5.6.0"
  }
}
```

### Styling
```json
{
  "tailwindcss": "^4.0.0",
  "@tailwindcss/postcss": "^4.0.0",
  "clsx": "^2.1.1",
  "tailwind-merge": "^2.5.4"
}
```

### CMS / Data
```json
{
  "@sanity/client": "^7.0.0",
  "@sanity/image-url": "^1.1.0",
  "next-sanity": "^9.0.0",
  "groq": "^3.50.0"
}
```

### Animation
```json
{
  "motion": "^11.0.0"
}
```

### Forms
```json
{
  "react-hook-form": "^7.53.0",
  "@hookform/resolvers": "^3.9.0",
  "zod": "^3.23.8"
}
```

### Email
```json
{
  "resend": "^4.0.0",
  "@react-email/components": "^0.0.25"
}
```

### Map
```json
{
  "mapbox-gl": "^3.7.0"
}
```

### Analytics
```json
{
  "@vercel/analytics": "^1.4.0",
  "@vercel/speed-insights": "^1.0.14"
}
```

### Dev Tools
```json
{
  "devDependencies": {
    "@biomejs/biome": "^1.9.0",
    "lefthook": "^1.7.0"
  }
}
```

---

## 5. PERFORMANS BÜTÇESİ

Her sayfa **mutlaka** bu rakamların altında olmak zorunda:

| Metric | Bütçe | Test |
|---|---|---|
| **Lighthouse Performance** | ≥ 95 | Mobile + Desktop |
| **Lighthouse Accessibility** | 100 | — |
| **Lighthouse Best Practices** | ≥ 95 | — |
| **Lighthouse SEO** | 100 | — |
| **First Contentful Paint** | < 1.2s | Mobile 3G simulation |
| **Largest Contentful Paint** | < 2.0s | Mobile |
| **Cumulative Layout Shift** | < 0.05 | Strict |
| **Total Blocking Time** | < 150ms | — |
| **JS Bundle (initial)** | < 150KB gzipped | — |
| **CSS Bundle (initial)** | < 30KB gzipped | — |

### Bütçe aşılırsa
1. Kod şişmesini bul (`@next/bundle-analyzer`)
2. Server component'e dönüştürülebilir mi?
3. Lazy load edilebilir mi?
4. Image optimize mi?
5. Font subset mi?

**Bütçe aşan PR merge edilmez.**

---

## 6. SEO TEKNİK KURALLARI

### Metadata API kullanımı

Her sayfa için:

```typescript
export const metadata: Metadata = {
  title: 'Sayfa Başlığı | Kocatürk Okulları',
  description: 'Maks 160 karakter, anahtar kelime öncelikli, eylem-odaklı.',
  openGraph: {
    title: '...',
    description: '...',
    images: [{ url: '/og/sayfa.jpg', width: 1200, height: 630 }],
    locale: 'tr_TR',
    type: 'website',
  },
  alternates: {
    canonical: 'https://kocaturk.k12.tr/sayfa',
    languages: {
      'tr-TR': '/sayfa',
      'en-US': '/en/page',
    },
  },
}
```

### Structured Data (JSON-LD)

`@type` kullanımı:
- **Ana sayfa:** `EducationalOrganization` + `LocalBusiness`
- **Her kampüs:** `School` + `LocalBusiness` + adres
- **Tek başarı:** `Article` (haber) veya `Award`
- **Tek haber:** `NewsArticle`
- **Yönetim:** `Person`
- **Etkinlik:** `Event`

`<Schema>` componenti `lib/schema.ts`'te tanımlanır, her sayfada server component olarak inject edilir.

### URL slug'ları

Türkçe karakterler dönüştürülür:
```typescript
// lib/utils.ts
export function slugify(text: string): string {
  return text
    .toLocaleLowerCase('tr-TR')
    .replace(/ı/g, 'i').replace(/ğ/g, 'g').replace(/ü/g, 'u')
    .replace(/ş/g, 's').replace(/ö/g, 'o').replace(/ç/g, 'c')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '')
}
```

---

## 7. ENVIRONMENT VARIABLES

```bash
# .env.local

# Sanity
NEXT_PUBLIC_SANITY_PROJECT_ID=xxxxx
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_TOKEN=xxxxx
SANITY_REVALIDATE_SECRET=xxxxx

# Email
RESEND_API_KEY=re_xxxxx
CONTACT_EMAIL_TO=info@kocaturk.k12.tr

# Map
NEXT_PUBLIC_MAPBOX_TOKEN=pk.xxxxx

# Analytics
NEXT_PUBLIC_PLAUSIBLE_DOMAIN=kocaturk.k12.tr

# Site
NEXT_PUBLIC_SITE_URL=https://kocaturk.k12.tr
```

`.env.example` dosyası repo'da, gerçek değerler Vercel dashboard'da.

---

## 8. CI / CD

### GitHub Actions Workflows

`.github/workflows/`:
- `ci.yml` — Her PR'da: lint, type-check, build, test
- `lighthouse.yml` — Her main merge sonrası Lighthouse run
- `tba-check.yml` — Production build'inde `<ContentNote>` veya `class="tba"` aramazsa lansman engellenmez, ama production'a deploy edilirken bunlar **flagged** edilir

### Vercel Deployment

- **main branch** → production (kocaturk.k12.tr)
- **Her PR** → preview deploy (otomatik)
- **Sanity webhook** → revalidate (içerik update olunca)

---

## 9. KOD KALİTE STANDARTLARI

### Linter: Biome (ESLint yerine)
- Daha hızlı
- Tek tool (formatter + linter)
- Strict TypeScript rules

### Pre-commit Hooks (Lefthook)
```yaml
pre-commit:
  commands:
    biome:
      run: npx biome check --write {staged_files}
    type-check:
      run: npx tsc --noEmit
```

### Component Yapısı

Her component dosyası şu yapıda:

```typescript
'use client' // veya server (default)

import { type FC } from 'react'
import { cn } from '@/lib/utils'

interface ComponentNameProps {
  // tüm props zorunlu type
}

export const ComponentName: FC<ComponentNameProps> = ({
  // ...
}) => {
  return (
    <div className={cn('base-classes', 'state-classes')}>
      {/* ... */}
    </div>
  )
}
```

### Naming Conventions
- **Components:** PascalCase (`HeroSection.tsx`)
- **Utils:** camelCase (`formatDate.ts`)
- **Types:** PascalCase (`type CampusType = ...`)
- **CSS classes:** kebab-case (`.hero-title`)
- **CSS variables:** kebab-case (`--color-orange`)
- **Sanity schemas:** camelCase (`campusSchema`)

### Comment Stratejisi
- Kod kendini açıklasın — gereksiz yorum yok
- Karmaşık business logic için yorum **gerekli**
- TODO yasak (issue oluştur)
- Türkçe yorum ✅ (Türk projesi, Türk geliştirici dostu)

---

## 10. GÜVENLİK

### Form Submission Korumaları
- **Honeypot field** (basit bot koruma)
- **Rate limiting** (Vercel KV ile, 5 req/dakika per IP)
- **Server-side validation** (Zod ile her API route)
- **CSRF** (Next.js built-in)
- **Email injection** (Resend escapes)

### Headers (next.config.ts)

```typescript
headers: async () => [{
  source: '/(.*)',
  headers: [
    { key: 'X-Frame-Options', value: 'DENY' },
    { key: 'X-Content-Type-Options', value: 'nosniff' },
    { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
    { key: 'Strict-Transport-Security', value: 'max-age=31536000; includeSubDomains' },
    { key: 'Content-Security-Policy', value: '...' }, // tam policy ile
  ],
}]
```

### KVKK Uyumluluğu
- Cookie banner (functional cookies seçili, analytics opsiyonel)
- Açık rıza formu (ön kayıtta)
- Gizlilik politikası sayfası
- Veri saklama süresi belirtilmeli

---

## 11. BAĞLANTI: e-Kocatürk (Mevcut Sistem)

Mevcut e-sukul.com paneli **YENİ SİTE İÇİNE ALINMAZ**. Sebepleri:
1. Mevcut sistem kendi backend'inde çalışıyor (PHP)
2. Veli portalı çok büyük bir proje, ayrı tutulmalı
3. Lansman süresi etkilenir

**Yapılacak:** "e-Kocatürk Giriş" butonu → mevcut e-sukul URL'sine yönlendirir. Görsel olarak yeni sitenin diliyle hizalanmış bir login redirect sayfası.

**Gelecek (Faz 2 — bu projeden ayrı):** Yeni veli paneli yeniden yazılabilir, ama bu faz kapsamında değil.

---

## 12. ANALİTİK STRATEJİSİ

### Vercel Analytics (default)
- Web Vitals
- Page views
- Geographic distribution

### Plausible (privacy-friendly alternatif)
- KVKK uyumlu
- Cookie istemiyor
- Goal tracking (ön kayıt formu submit, kampüs ziyareti, vs.)

### Custom Events
- `on_kayit_submitted`
- `kampus_ziyareti_planlandi`
- `bursluluk_basvurusu`
- `havacilik_lisesi_pdf_indirildi`
- `kampus_filtre_kullanildi`

---

## 13. TARAYICI DESTEĞİ

| Tarayıcı | Versiyon |
|---|---|
| Chrome | son 2 versiyon |
| Safari | son 2 versiyon |
| Firefox | son 2 versiyon |
| Edge | son 2 versiyon |
| iOS Safari | son 2 versiyon |
| Chrome Android | son 2 versiyon |

**Desteklenmiyor:** IE11, eski Edge (Chromium öncesi)

---

**Sıradaki dosya:** `06-COMPONENT-LIBRARY.md` — Bu stack üzerinde inşa edilecek yeniden kullanılabilir komponentler.
