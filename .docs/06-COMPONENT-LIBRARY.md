# 06 · COMPONENT LIBRARY

> Sitedeki tüm yeniden kullanılabilir komponentler bu dosyada tanımlıdır. Yeni bir component ihtiyacı doğarsa **önce burada speclendirilir**, sonra inşa edilir. Tek seferlik komponent yok — her şey sistemin parçası.

---

## KOMPONENT KATMANLARI

```
1. PRIMITIVES   — Atomic UI elements (button, input, eyebrow, vs.)
2. PATTERNS     — Tekrarlayan UI parçaları (PhotoSlot, NumberCell, Pillar, vs.)
3. SECTIONS     — Sayfa bölümleri (Hero, Manifesto, FeatureStory, vs.)
4. LAYOUTS      — Şablon yapıları (Header, Footer, MarketingLayout, vs.)
```

---

## 1. PRIMITIVES

### 1.1 Button

**Konum:** `src/components/ui/button.tsx`

#### Variants
- `primary` — Turuncu dolgu, beyaz metin (default CTA)
- `outline` — Siyah border, transparan, light bg üzerinde
- `outline-light` — Beyaz border, transparan, dark bg üzerinde
- `ghost` — Sadece metin + alt çizgi animasyonu

#### Sizes
- `sm` — 10px 18px padding, 12px font
- `md` (default) — 16px 28px padding, 13px font
- `lg` — 20px 36px padding, 14px font

#### Props

```typescript
interface ButtonProps {
  variant?: 'primary' | 'outline' | 'outline-light' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  href?: string         // varsa <a>, yoksa <button>
  children: ReactNode
  icon?: ReactNode      // sağda gösterilir
  iconLeft?: ReactNode  // solda gösterilir
  loading?: boolean
  disabled?: boolean
  onClick?: () => void
  className?: string
}
```

#### Davranışlar
- Hover: `translateY(-2px)` + colored shadow (primary), bg fill (outline)
- Hover'da sağdaki icon `translateX(4px)`
- Disabled: opacity 0.5, cursor not-allowed
- Loading: spinner ikon, "Gönderiliyor..." metni

#### Kullanım
```tsx
<Button variant="primary" size="lg" icon={<i className='bx bx-right-arrow-alt' />}>
  Ön Kayıt Başvurusu
</Button>
```

---

### 1.2 Input

**Konum:** `src/components/ui/input.tsx`

#### Özellikler
- Floating label opsiyonel
- Error state (alt metin + border kırmızı)
- Disabled state
- Icon desteği (sol veya sağ)
- React Hook Form ile uyumlu (forwardRef)

#### Props

```typescript
interface InputProps {
  label?: string
  placeholder?: string
  type?: 'text' | 'email' | 'tel' | 'number'
  error?: string
  icon?: ReactNode
  iconPosition?: 'left' | 'right'
  required?: boolean
  // ...HTML input props
}
```

#### Davranışlar
- Focus: border `--color-orange`, box-shadow `--color-peach-soft`
- Error: border `--color-error`, error message altında
- Required: label sonunda küçük turuncu nokta

---

### 1.3 Eyebrow

**Konum:** `src/components/ui/eyebrow.tsx`

Section başlangıcındaki küçük turuncu etiket.

#### Variants
- `default` — Turuncu, light bg üzerinde
- `light` — Peach, dark bg üzerinde

#### Props

```typescript
interface EyebrowProps {
  variant?: 'default' | 'light'
  children: ReactNode
}
```

#### Kullanım
```tsx
<Eyebrow>Ege'nin Eğitim Omurgası</Eyebrow>
<Eyebrow variant="light">Uluslararası Başarılar</Eyebrow>
```

---

### 1.4 ContentNote (TBA Badge)

**Konum:** `src/components/ui/content-note.tsx`

Henüz gelmemiş içerik için inline placeholder.

#### Props

```typescript
interface ContentNoteProps {
  type: 'text' | 'photo' | 'video' | 'data' | 'testimonial'
  description?: string  // ne tür içerik bekleniyor
  status?: 'tba' | 'pending' | 'review'
  variant?: 'inline' | 'block' | 'photo-slot'
  dark?: boolean        // dark bg üzerinde
}
```

#### Variants

**Inline (kelime/sayı için):**
```tsx
<ContentNote type="text" status="tba" variant="inline">refine</ContentNote>
```
Render: `[• refine]` küçük turuncu pill

**Block (paragraf yerine):**
```tsx
<ContentNote type="text" variant="block" description="Yönetim kadrosu hakkında 3 paragraflık biyografi" />
```
Render: dashed border'lı blok, içinde açıklama

**Photo-slot (görsel yerine):**
```tsx
<ContentNote type="photo" variant="photo-slot" description="Hero kampüs drone shot" />
```
Render: PhotoSlot componenti (aşağıda detay)

#### Build-time Behavior
Production build sırasında `<ContentNote>` componentleri **CI tarafından sayılır**. Sayı 0'dan büyükse production deploy `--force` flag gerekir. Bu, "lansman öncesi sahte içerik kontrolü"dür.

---

### 1.5 Reveal

**Konum:** `src/components/reveal.tsx`

Scroll-triggered fade-up animation wrapper.

#### Props

```typescript
interface RevealProps {
  children: ReactNode
  delay?: 1 | 2 | 3 | 4 | 5  // 80ms × delay
  as?: 'div' | 'span' | 'section' | 'article'
  className?: string
}
```

#### Davranış
- IntersectionObserver ile `is-in` class eklenir
- Trigger: `threshold: 0.12, rootMargin: '0px 0px -8% 0px'`
- Reduced motion'da animasyon yok, direkt görünür

#### Kullanım
```tsx
<Reveal delay={2}>
  <h2>Başlık</h2>
</Reveal>
```

---

### 1.6 NumberCounter

**Konum:** `src/components/number-counter.tsx`

Animated number counter, viewport'a girince başlar.

#### Props

```typescript
interface NumberCounterProps {
  target: number
  duration?: number      // ms, default 1800
  format?: 'tr-TR' | 'en-US'
  decimals?: number      // default 0
  prefix?: string        // örn '%'
  suffix?: string        // örn '+'
  className?: string
}
```

#### Davranış
- IntersectionObserver `threshold: 0.5`
- easeOutCubic: `1 - Math.pow(1 - progress, 3)`
- Türkçe format: `value.toLocaleString('tr-TR')` (4015 → "4.015")

---

## 2. PATTERNS

### 2.1 PhotoSlot

**Konum:** `src/components/photo-slot.tsx`

Görsel yer tutucu (gerçek görsel gelene kadar). Detay: `02-DESIGN-SYSTEM.md` Bölüm 7.

#### Props

```typescript
interface PhotoSlotProps {
  aspectRatio: '16:9' | '4:3' | '1:1' | '3:4' | '4:5' | '21:9'
  slotId: string                          // ph_001, vid_002, vs.
  category: 'HERO' | 'FEATURED' | 'GALLERY' | 'PORTRAIT' | 'CAMPUS'
  type: 'photo' | 'video'
  title: string                           // ne tür görsel
  description: string                     // detay açıklama
  variant?: 'dark' | 'light'
  className?: string
}
```

#### Yapı

```tsx
<PhotoSlot
  aspectRatio="16:10"
  slotId="ph_001"
  category="HERO"
  type="photo"
  title="Kampüs portresi veya drone hava çekimi"
  description="Profesyonel fotoğraf çekimi ile yerleştirilecek · Önerilen: tek bir karakteristik kampüs binasının önünden, geniş açı drone shot"
  variant="dark"
/>
```

#### Production'a Geçiş
Gerçek görsel geldiğinde `<PhotoSlot>` `<Image>` ile değiştirilir:

```tsx
<Image
  src={campus.heroImage}
  alt="Manisa Turgutlu Kampüsü"
  width={1600}
  height={1000}
  priority
  className="..."
/>
```

`PhotoSlot.replace(slotId, image)` helper utility yazılır.

---

### 2.2 NumberCell

**Konum:** `src/components/patterns/number-cell.tsx`

Sayılar bandında tek bir hücre.

#### Props

```typescript
interface NumberCellProps {
  number: number
  label: string         // örn "Kampüs"
  sublabel?: string     // örn "Aktif kayıt"
  variant?: 'dark' | 'light'
  size?: 'sm' | 'md' | 'lg'
}
```

#### Render
```
4.015         ← Bricolage Grotesque, 56-64px
ÖĞRENCİ       ← 10px uppercase
Aktif kayıt   ← 11px mute
```

#### Davranış
- Viewport'a girince `<NumberCounter>` ile animasyon
- Sol kenarında 1px ayraç çizgisi (border-left)

---

### 2.3 Pillar (Card)

**Konum:** `src/components/patterns/pillar.tsx`

3'lü sütun bölümünde kullanılan kart.

#### Props

```typescript
interface PillarProps {
  number: string         // "01", "02", "03"
  title: string          // vurgu kelimesi <em> ile sarılı olabilir
  body: string
  link?: { href: string; label: string }
  variant?: 'light' | 'dark'
}
```

#### Yapı
```
[01]                  ← circle, peach-soft bg, orange text
                     
Yarım asırlık         ← display, 28px
buralılık             ← em ile turuncu vurgu
                     
1998'de Manisa        ← body, 14px, mute
Turgutlu'da...
                     
Tarihçemiz →          ← arrow link
```

#### Davranış
- Hover: `translateY(-4px)`, border `--color-orange`, shadow up
- Hover: number circle background turuncuya döner
- Hover: arrow link gap genişler

---

### 2.4 CampusCard

**Konum:** `src/components/patterns/campus-card.tsx`

Kampüs liste sayfasında kart.

#### Props

```typescript
interface CampusCardProps {
  slug: string
  name: string                  // "Manisa Turgutlu"
  ilce: string                  // "Turgutlu"
  il: string                    // "Manisa"
  badge?: 'ana' | 'ikinci-ana'  // "Ana Kampüs", "2. Ana Kampüs"
  kademeler: string[]           // ["Anaokulu", "İlkokul", "Ortaokul", ...]
  studentCount?: number
  image?: string                // PhotoSlot fallback
  href: string
}
```

#### Yapı
```
┌────────────────────────┐
│ [Photo / PhotoSlot]    │
│ ★ ANA KAMPÜS           │ ← badge sol üst
└────────────────────────┘
TURGUTLU
Manisa Turgutlu Kampüsü
1998 · 6 kademe · 950 öğrenci
                       →
```

#### Davranış
- Hover: image scale 1.04, badge ortaya geri çıkar
- Hover: arrow translateX

---

### 2.5 ProgramCard

**Konum:** `src/components/patterns/program-card.tsx`

Eğitim programı kartı (Mind Kids, STEM, vs.).

#### Props

```typescript
interface ProgramCardProps {
  icon: string             // boxicon class
  name: string
  shortDesc: string
  ageRange?: string        // "3-6 yaş"
  href: string
  featured?: boolean       // Havacılık, Robotik için
}
```

---

### 2.6 AchievementCard

**Konum:** `src/components/patterns/achievement-card.tsx`

Başarı kartı (haber/başarı arşivinde).

#### Props

```typescript
interface AchievementCardProps {
  category: 'akademik' | 'sportif' | 'uluslararasi' | 'sanatsal'
  title: string
  studentName?: string     // "Beren Baykal"
  date: string             // ISO format
  location?: string        // "Roma, İtalya"
  position?: '1st' | '2nd' | '3rd' | '4th' | string
  image?: string
  href?: string
  featured?: boolean
}
```

---

### 2.7 NewsCard

**Konum:** `src/components/patterns/news-card.tsx`

Haber/duyuru kartı.

#### Props

```typescript
interface NewsCardProps {
  slug: string
  title: string
  excerpt?: string
  category: string
  date: string
  image?: string
  size?: 'featured' | 'standard' | 'compact'
}
```

#### Sizes
- `featured`: Büyük, 16:10 image, full excerpt
- `standard`: Orta, 16:9 image, kısa excerpt
- `compact`: Küçük, 4:3 image, sadece başlık

---

### 2.8 TestimonialCard

**Konum:** `src/components/patterns/testimonial-card.tsx`

Veli yorumu kartı.

#### Props

```typescript
interface TestimonialCardProps {
  quote: string
  authorName: string
  authorRole: string       // "Veli · Ortaokul 7. sınıf · Gaziemir"
  avatar?: string
  videoUrl?: string        // varsa play overlay
}
```

---

### 2.9 StatCard

**Konum:** `src/components/patterns/stat-card.tsx`

NumberCell'in büyük versiyonu, başlık ve açıklama içerir.

#### Props

```typescript
interface StatCardProps {
  number: number
  label: string
  description?: string
  icon?: string
}
```

---

## 3. SECTIONS

### 3.1 SiteHeader

**Konum:** `src/components/layout/header.tsx`

Üst navigasyon. Detay: `03-INFORMATION-ARCHITECTURE.md` Bölüm 2.

#### Yapı
- Logo (sol)
- Mega menu nav (orta)
- Sağ araçlar: telefon, dil, e-Kocatürk, hamburger (mobil)

#### Davranışlar
- Sticky scroll
- Scroll down → kompakt mode
- Scroll up → expanded mode
- Mega menu hover (300ms delay)
- Mobile: full screen overlay

---

### 3.2 Hero

**Konum:** `src/components/sections/hero.tsx`

#### Variants
- `default` — Asimetrik split (sol içerik, sağ photo)
- `centered` — Ortalanmış (özel sayfalar için)
- `compact` — Daha küçük, alt sayfalar için

#### Props

```typescript
interface HeroProps {
  variant?: 'default' | 'centered' | 'compact'
  eyebrow: string
  folio?: string
  title: ReactNode         // <em> içerebilir
  lede: ReactNode
  primaryCta: { href: string; label: string }
  secondaryCta?: { href: string; label: string }
  photo?: PhotoSlotProps | { src: string; alt: string }
  stats?: StatItem[]
}
```

---

### 3.3 Manifesto

**Konum:** `src/components/sections/manifesto.tsx`

#### Yapı
- Eyebrow
- Asimetrik typographic quote (indent variations)
- Üç pillar grid altında

#### Props

```typescript
interface ManifestoProps {
  eyebrow: string
  quote: ReactNode         // multi-line içerik, <em> ile vurgu
  pillars: PillarProps[]
}
```

---

### 3.4 NumbersBanner

**Konum:** `src/components/sections/numbers-banner.tsx`

Hero altındaki ya da kendi başına sayılar bandı.

#### Props

```typescript
interface NumbersBannerProps {
  title?: string           // "90 öğrenciden 4.000+ öğrenciye"
  subtitle?: string        // "Çeyrek asırlık büyüme hikâyesi"
  numbers: NumberCellProps[]
  variant?: 'dark' | 'light'
}
```

---

### 3.5 CampusMap

**Konum:** `src/components/sections/campus-map.tsx`

İnteraktif kampüs haritası + liste.

#### Yapı
- Sol: Mapbox harita (Ege bölgesi, 23 kampüs marker)
- Sağ: Filtre + kampüs listesi

#### Props

```typescript
interface CampusMapProps {
  campuses: CampusType[]
  defaultFilter?: string
}
```

#### Davranışlar
- Marker'a hover → liste highlight
- Liste item hover → marker zoom
- Filter (ilçe, kademe) → harita refresh

---

### 3.6 StageSelector

**Konum:** `src/components/sections/stage-selector.tsx`

"Çocuğunuz hangi yaşta?" 4'lü kart.

#### Props

```typescript
interface StageSelectorProps {
  stages: {
    ageRange: string
    name: string
    description: string
    href: string
    photo: PhotoSlotProps | string
    featured?: boolean       // Havacılık için
  }[]
}
```

---

### 3.7 FeaturedStory

**Konum:** `src/components/sections/featured-story.tsx`

Roma Robotik gibi öne çıkarılmış başarı hikâyesi.

#### Props

```typescript
interface FeaturedStoryProps {
  tag: string                  // "Uluslararası Şampiyonluk"
  counter?: string             // "01 / 12 başarı"
  title: ReactNode             // <em> ile vurgu
  body: ReactNode
  photo: PhotoSlotProps | string
  medals?: MedalItem[]
  cta: { href: string; label: string }
  meta: { location: string; date: string }
  variant?: 'dark' | 'light'
}
```

---

### 3.8 ProgramsGrid

**Konum:** `src/components/sections/programs-grid.tsx`

Eğitim programları 6'lı grid.

---

### 3.9 Testimonials

**Konum:** `src/components/sections/testimonials.tsx`

Veli yorumları 3'lü grid veya carousel.

---

### 3.10 NewsGrid

**Konum:** `src/components/sections/news-grid.tsx`

Haberler 5'li hibrit grid (1 büyük + 4 küçük).

---

### 3.11 InternationalStrip

**Konum:** `src/components/sections/international-strip.tsx`

Yurtdışı eğitim vurgusu (eTwinning ülke kartları + Yaz Okulu).

#### Yapı
- Sol: Başlık + açıklama
- Sağ: 6 ülke/program kart grid

---

### 3.12 CtaBand

**Konum:** `src/components/sections/cta-band.tsx`

Sayfa sonu çağrı bandı.

#### Props

```typescript
interface CtaBandProps {
  eyebrow: string
  title: ReactNode
  description: string
  ctas: { href: string; label: string; variant: 'primary' | 'outline' }[]
  variant?: 'dark' | 'light'
}
```

---

## 4. LAYOUTS

### 4.1 MarketingLayout

**Konum:** `src/app/(marketing)/layout.tsx`

```tsx
<>
  <SiteHeader />
  <main>{children}</main>
  <SiteFooter />
</>
```

### 4.2 SiteFooter

**Konum:** `src/components/layout/footer.tsx`

Antrasit zemin, 5 sütunlu grid:
1. Marka + tagline + sosyal medya
2. Kurumsal linkler
3. Eğitim linkler
4. Hızlı erişim (e-Kocatürk, kayıt, vs.)
5. Bağlantılar (MEB, EBA, e-Devlet)

Alt: Copyright + KVKK + Çerez Politikası + Sitemap + Tasarım kredisi

### 4.3 Breadcrumbs

**Konum:** `src/components/layout/breadcrumbs.tsx`

```tsx
<Breadcrumbs items={[
  { label: 'Ana Sayfa', href: '/' },
  { label: 'Kampüsler', href: '/kampusler' },
  { label: 'Manisa Turgutlu', current: true },
]} />
```

---

## 5. KOMPONENT KALİTE KURALLARI

### Her component için zorunlu

1. **TypeScript strict** — `any` yasak, tüm props typed
2. **`forwardRef`** — Form elementleri ve interaktif komponentler için
3. **`className` prop** — `cn()` ile birleştirilir, override edilebilir
4. **`asChild` pattern** — Polymorphic için (Radix UI tarzı)
5. **Reduced motion** — Motion içeren her component için
6. **Keyboard accessibility** — Tab, Enter, Escape doğru çalışır
7. **ARIA labels** — Icon-only butonlar için zorunlu
8. **Server-first** — Default server component, client component sadece gerekirse (`'use client'`)

### Component Document Header

Her component dosyasının başında:

```typescript
/**
 * Button — Primary CTA component
 * 
 * @see .docs/06-COMPONENT-LIBRARY.md#11-button
 * @see .docs/02-DESIGN-SYSTEM.md#11-button-system
 * 
 * @example
 * <Button variant="primary" size="lg">Ön Kayıt</Button>
 */
```

### Stories / Demo

Her component için Storybook-like demo sayfası `/dev/components/[name]` yolunda. Production'da bu route gizli (`process.env.NODE_ENV !== 'production'`).

---

## 6. KOMPONENT INVENTARI — Faz Faz

### Faz 1 — Foundation (atomic)
- [ ] `Button`
- [ ] `Input`
- [ ] `Label`
- [ ] `Eyebrow`
- [ ] `ContentNote`
- [ ] `Reveal`
- [ ] `NumberCounter`
- [ ] `PhotoSlot`

### Faz 2 — Patterns
- [ ] `NumberCell`
- [ ] `Pillar`
- [ ] `ProgramCard`
- [ ] `AchievementCard`
- [ ] `NewsCard`
- [ ] `TestimonialCard`
- [ ] `CampusCard`
- [ ] `StatCard`

### Faz 3 — Sections
- [ ] `Hero` (3 variant)
- [ ] `Manifesto`
- [ ] `NumbersBanner`
- [ ] `CampusMap`
- [ ] `StageSelector`
- [ ] `FeaturedStory`
- [ ] `ProgramsGrid`
- [ ] `Testimonials`
- [ ] `NewsGrid`
- [ ] `InternationalStrip`
- [ ] `CtaBand`

### Faz 4 — Layout
- [ ] `SiteHeader` (full + mobile)
- [ ] `SiteFooter`
- [ ] `Breadcrumbs`
- [ ] `MarketingLayout`

---

**Sıradaki dosya:** `07-PAGE-SPECIFICATIONS.md` — Bu komponentlerin sayfalarda nasıl kullanılacağı.
