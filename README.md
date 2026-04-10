# Kocatürk Okulları — Website

Next.js 15 ile inşa edilmiş kurumsal website.

## Proje Spesifikasyonu

Tüm tasarım, içerik, mimari ve kural belgeleri `.docs/` klasöründedir. Kod yazmadan önce **mutlaka** bu sırayla oku:

```
.docs/README.md                          ← Proje girişi
.docs/01-VISION-AND-POSITIONING.md       ← Marka vizyonu
.docs/02-DESIGN-SYSTEM.md                ← Renk, tipografi, motion
.docs/03-INFORMATION-ARCHITECTURE.md     ← Sitemap, URL yapısı
.docs/04-CONTENT-STRATEGY.md             ← Ses tonu, copy kuralları
.docs/05-TECH-STACK.md                   ← Stack kararları, klasör yapısı
.docs/06-COMPONENT-LIBRARY.md            ← Tüm componentler
.docs/07-PAGE-SPECIFICATIONS.md          ← Sayfa detayları
.docs/08-CONTENT-INVENTORY.md            ← İçerik listesi
.docs/09-RULES-AND-GUARDRAILS.md         ← ⚠ EN KRİTİK — kalite kuralları
.docs/10-ROADMAP.md                      ← Uygulama planı
.docs/11-DEFINITION-OF-DONE.md           ← "Bitti" tanımı
```

## Stack

- **Framework:** Next.js 15 (App Router)
- **Dil:** TypeScript (strict mode)
- **Styling:** Tailwind CSS 4 + CSS Variables
- **CMS:** Sanity (headless)
- **Hosting:** Vercel
- **Animation:** Motion
- **Linter:** Biome

## Kurulum

```bash
npm install
cp .env.example .env.local
# .env.local içindeki değerleri doldur
npm run dev
```

## Geliştirme

```bash
npm run dev          # localhost:3000
npm run sanity       # Sanity Studio localhost:3333
npm run build        # Production build
npm run check        # Biome lint + format check
npm run type-check   # TypeScript kontrol
```

## Kurallar

`.docs/09-RULES-AND-GUARDRAILS.md` dosyasını oku. Bu projedeki her karar o dosyadaki kurallara bağlıdır. Kural ihlali olan PR merge edilmez.
