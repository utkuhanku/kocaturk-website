# Faz 1 — Design System & Atomics

## Özet

Faz 0'da kurulan tokens + utilities + Sanity zemini üzerine, **8 primitive + 8 pattern = 16 component** premium kalitede inşa edildi. Tüm component'ler 06-COMPONENT-LIBRARY.md API'sine uygun, 09-RULES-AND-GUARDRAILS.md hard NO listesine sıkı bağlı, KVKK kuralı (TestimonialCard avatar = initials) kod seviyesinde garanti altında.

5 demo sayfası `/dev/components/*` Vercel preview'da telefondan görüldü ve onaylandı. Production'da `VERCEL_ENV` guard ile gizli, Faz 8'de `src/app/dev/` tamamen silinecek.

## Commit Geçmişi (6 commit)

| Hash | Aşama | Açıklama |
|------|-------|----------|
| `c2e225a` | Ön Hazırlık | boxicons + cn utility + button/input tokens |
| `cfd64fd` | Aşama 1 | Primitives — Button, Input, Label, Eyebrow, ContentNote |
| `7eab148` | Aşama 2 | Motion — Reveal, NumberCounter (use client + IntersectionObserver) |
| `29deef7` | Aşama 3 | PhotoSlot sistemi (6 ratio × 5 kategori) + ContentNote delegate |
| `5b0f32e` | Aşama 4 | Patterns 1 — Pillar, NumberCell, StatCard, ProgramCard |
| `2faf315` | Aşama 5 | Patterns 2 — CampusCard, AchievementCard, NewsCard, TestimonialCard |
| `59b5339` | Aşama 6 | Polish + A11y — content-note CSS module + --card-hover-lift token + Faz 8 checklist |

## Component Envanteri

**Primitives (5):**
- Button — 4 variant (primary/outline/outline-light/ghost) × 3 size, loading + disabled state, href→Link/button auto-switch
- Input — 'use client' + forwardRef + useId() SSR-safe, aria-invalid/describedby, focus ring 3px peach
- Label — required asterisk turuncu, htmlFor binding
- Eyebrow — utility wrapper, default + light variant
- ContentNote — inline/block/photo-slot variants, data-content-note attribute (CI sayım)

**Motion (2):**
- Reveal — IntersectionObserver + useReducedMotion, threshold 0.12, observer.disconnect after intersection
- NumberCounter — RAF + easeOutCubic, tr-TR locale, role=status + aria-live polite

**PhotoSlot (1):**
- 6 aspect ratio (16:9, 4:3, 1:1, 3:4, 4:5, 21:9) × 5 kategori (HERO, FEATURED, GALLERY, PORTRAIT, CAMPUS)
- src/types/photo-slot.ts — Faz 5 değişim kılavuzu (PhotoSlotReplacement type)

**Patterns 1 (4):**
- Pillar — light/dark, em color override (font-style: normal — italic YASAK), arrow translateX hover
- NumberCell — sm/md/lg sizes, border-left 3px orange, NumberCounter child
- StatCard — 40px icon circle, NumberCounter, hover translateY + shadow + orange border
- ProgramCard — Link wrapper, featured (orange border + peach bg), -webkit-line-clamp 2

**Patterns 2 (4):**
- CampusCard — Link, image (next/image fill) veya PhotoSlot fallback, badge ana/ikinci-ana, hover image scale 1.04
- AchievementCard — href opsiyonel (Link/article), 4 kategori renk (orange/success/peach-soft/warning), tr-TR tarih server toLocaleDateString, position string emoji YOK
- NewsCard — Link /haberler/[slug], 3 size (featured/standard/compact 4:3 yatay min-width 96px)
- TestimonialCard — KVKK kuralı (avatar prop alınır AMA RENDER EDİLMEZ — daima initials), getInitials inline, videoUrl div role=img overlay, quote font-style: normal

## Demo Sayfaları (5)

- `/dev/components/primitives` — Button × variant/size grid, Input states, Label required, Eyebrow light/dark, ContentNote 3 variant
- `/dev/components/motion` — Reveal stagger delay 1-5, NumberCounter 4 sayaç (4015/23/246/%98), timing token tablosu
- `/dev/components/photo-slots` — 6 ratio × 5 kategori grid, dark/light, photo/video, ContentNote entegrasyonu, Faz 5 kılavuzu
- `/dev/components/patterns-1` — Pillar light + dark section, NumberCell sm/md/lg, StatCard Reveal koreografisi, ProgramCard featured/standard
- `/dev/components/patterns-2` — CampusCard 3 grid, AchievementCard 4 kategori, NewsCard 3 size, TestimonialCard 3 + KVKK ContentNote

## Hard NO Uyumu (09-RULES)

✅ 0 `any` type · ✅ 0 inline hex (themeColor metadata + font-test sayfası hariç, Faz 8'de silinir) · ✅ 0 console.log · ✅ 0 magic number padding · ✅ 0 italic (font-style: normal zorunlu) · ✅ 0 emoji (position string Türkçe metin) · ✅ 0 gradient (dark-section glow hariç) · ✅ 0 scale hover kart üzerinde (sadece imageEl) · ✅ 0 lorem ipsum (gerçek Türkçe — Roma Fibonacci, Beren Baykal, Kocatürk kampüsleri)

## Token Kullanımı

- `--card-hover-lift: -4px` (Aşama 6'da eklendi, Button --btn-hover-lift -2px'ten farklı, kasıtlı)
- 7 pattern module.css: hardcoded translateY(-4px) → translateY(var(--card-hover-lift))
- Yeni button/input token'ları (Aşama 1) tokens.css Bölüm 12b/12c
- 0 yeni renk/spacing/font token (Faz 0 zemini yeterli)

## CSS Module Toplam

- 8 pattern module + 1 ContentNote module = 9 dosya
- ~904 satır CSS
- Inline style: 0 (Aşama 6'da ContentNote refactor ile sıfırlandı)

## A11y

- :focus-visible global rule (globals.css:168) — 2px solid orange outline + 3px offset
- Button min-height: 44px tüm size'lar (Apple HIG tap target)
- Input font-size: 16px (iOS zoom önlemi)
- NewsCard compact min-width: 96px (mobile crash önlemi)
- aria-label, aria-busy, aria-invalid, aria-describedby, role=img doğru kullanım
- Reduced motion: Reveal + NumberCounter useReducedMotion() ile anında final state
- Lighthouse manuel audit Faz 2 sonu zorunlu (şu an opsiyonel, Mac dev server gerekli)

## KVKK Uyumu

TestimonialCard `avatar` prop alır AMA HİÇBİR ZAMAN RENDER ETMEZ. Daima `getInitials(authorName)` ile harf-circle gösterir. Faz 5'te KVKK belgesi alındıktan sonra gerçek fotoğraflar aktif edilecek. Demo sayfasında ContentNote KVKK notu ile kullanıcıya açıklandı.

## Faz 8 Pre-launch Checklist'e Eklendi (10-ROADMAP.md Gün 4)

- [ ] `src/app/dev/` klasörünü tamamen sil — kazara production erişimini engelle
- [ ] `lighthouserc.yml` assertions geri aç (Faz 0'da kapalıydı, Faz 2 sonu açılacaktı)
- [ ] `.github/workflows/ci.yml` node-version: '20' → '22' (Node 20 EOL Nisan 2026 — geçti)

## Doğrulama (Aşama 6 sonu)

- ✅ Biome: 0 hata
- ✅ TypeScript: 0 hata
- ✅ Build: 8 statik sayfa (/, /_not-found, /dev/font-test + 5 component demo)
- ✅ Lefthook pre-commit: biome + tsc otomatik
- ✅ Telefondan görüldü: 5 demo sayfa, ContentNote refactor regresyon yok

## Sıradaki: Faz 2 — Ana Sayfa

Component library tam olduğu için Faz 2 plan moduna geçilebilir:
MarketingLayout, SiteHeader, Hero, Manifesto, NumbersBanner, FeaturedStory, StageSelector, ProgramsGrid, InternationalStrip, CampusMap, Testimonials, NewsGrid, CtaBand, SiteFooter
