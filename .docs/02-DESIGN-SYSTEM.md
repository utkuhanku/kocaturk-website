# 02 · DESIGN SYSTEM

> **Bu dosya bu projenin görsel anayasasıdır.** Burada tanımlanmış olmayan hiçbir renk, font, boyut, ease, gölge, animasyon kullanılamaz. Yeni bir token gerekiyorsa **önce bu dosyayı güncelle**, sonra uygula. İstisna yok.

---

## 1. RENK PALETİ

### Mevcut sitenin DNA'sı korundu, premium tona çıkarıldı

Mevcut Kocatürk sitesinin iki ana karakteri vardı: **turuncu** (logo + CTA) ve **koyu mavi/lacivert** (footer). Yeni sistemde bunları koruyoruz ama:
- Lacivert → daha sıcak, gerçek **antrasit** (mavi tonu yerine nötr koyu gri)
- Turuncu → mevcut sitenin parlak turuncusunu **iki tona** ayrıştırdık (parlak + açık şeftali)

### CSS Variables (kullanılacak isimler)

```css
:root {
  /* — Light surfaces — */
  --color-bg: #FAFAF8;           /* sayfa zemini, sıcak off-white */
  --color-surface: #FFFFFF;      /* kart, panel zeminleri */
  --color-surface-2: #F4F4F1;    /* alt seviye yüzeyler */
  
  /* — Ink (text colors) — */
  --color-ink: #16181D;          /* ana metin, başlıklar */
  --color-ink-2: #2A2D35;        /* alt metin */
  --color-ink-mute: #6B7280;     /* yardımcı metin */
  --color-ink-soft: #9CA3AF;     /* placeholder, footer text */
  --color-line: #E5E5E0;         /* ince ayraç çizgiler */
  --color-line-strong: #D1D1CC;  /* belirgin ayraç çizgiler */
  
  /* — Antrasit (dark sections) — */
  --color-anthracite: #1F2228;        /* ana koyu zemin */
  --color-anthracite-deep: #16181D;   /* derinlik */
  --color-anthracite-soft: #2A2D35;   /* alt katman */
  --color-anthracite-line: #34373F;   /* dark zemindeki çizgiler */
  --color-anthracite-line-soft: #3D4049;
  
  /* — Brand orange (mevcut siteden alınmış 2 ton) — */
  --color-orange: #F2581C;       /* ana parlak turuncu — birincil aksiyon */
  --color-orange-bright: #FF6B1F;/* hover, highlight */
  --color-orange-deep: #D14816;  /* pressed, active state */
  --color-peach: #F8A878;        /* açık şeftali (görsel 1 referans) */
  --color-peach-soft: #FFD9B8;   /* en açık tint, badge background */
  
  /* — Semantic — */
  --color-success: #10B981;
  --color-warning: #F59E0B;
  --color-error: #DC2626;
}
```

### Renk Kullanım Kuralları

| Kullanım | Renk | Kural |
|---|---|---|
| Sayfa zemini (light) | `--color-bg` | Beyaz değil, sıcak off-white |
| Sayfa zemini (dark) | `--color-anthracite` | Mavi değil, sıcak antrasit |
| Ana başlıklar | `--color-ink` (light) / `#FFFFFF` (dark) | Asla saf siyah |
| Birincil CTA | `--color-orange` | Hover'da `--color-orange-bright` |
| Vurgu (turuncu metin, italic yerine) | `--color-orange` | Sadece anlamlı kelimeler — sayfa başına 3-5 vurgu max |
| Açık ton vurgu | `--color-peach` | Dark sectionlarda secondary text vurgu |
| Tint background | `--color-peach-soft` | Pillar number circle, badge bg |
| Çizgi/ayraç | `--color-line` / `--color-line-strong` | Border-bottom için tercih |
| Dark zemindeki çizgi | `--color-anthracite-line` | Asla rgba(255,255,255,X) kullanma — semantic değil |

### Yasak Renk Kullanımları

- ❌ Saf siyah (`#000000`) — sıkıcı, kontrast aşırı
- ❌ Saf beyaz (`#FFFFFF`) zemin — soğuk, off-white kullan
- ❌ Mor / pembe / mavi — palet dışı
- ❌ Gradient — `radial-gradient` sadece dark section glow için, başka yerde yok
- ❌ Renk koduyla doğrudan yazım — sadece CSS variable
- ❌ `rgba(0,0,0,0.5)` gibi opaque kullanım yerine palette renk + opacity

---

## 2. TİPOGRAFİ

### Font Stack

```css
:root {
  --font-display: 'Bricolage Grotesque', system-ui, sans-serif;
  --font-body: 'Manrope', system-ui, sans-serif;
}
```

### Neden Bu İki Font?

#### Bricolage Grotesque (Display)
- Modern karakter sahibi grotesk
- **`opsz` axis** (12-96): büyük başlıklarda farklı, küçük metinde farklı çizim
- Türkçe karakterleri tam destekli (ç, ğ, ı, İ, ö, ş, ü)
- AI-generic değil (Inter/Roboto/Space Grotesk gibi yaygın değil)
- Bold ağırlıkları çok güçlü, modern bold editorial için ideal

#### Manrope (Body)
- Geometrik ama warm
- Türkçe destekli
- 300-800 ağırlık aralığı
- Inter'a alternatif olarak yaygın değil ama olgun

### Google Fonts Import

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,300;12..96,400;12..96,500;12..96,600;12..96,700;12..96,800&family=Manrope:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">
```

### Type Scale

```css
:root {
  /* — Display sizes (Bricolage Grotesque) — */
  --text-display-2xl: clamp(72px, 10vw, 168px);  /* hero başlık */
  --text-display-xl:  clamp(56px, 8vw, 124px);   /* manifesto quote */
  --text-display-lg:  clamp(48px, 6vw, 96px);    /* feature title */
  --text-display-md:  clamp(36px, 4.5vw, 64px);  /* section başlık */
  --text-display-sm:  clamp(28px, 3vw, 44px);    /* card başlık */
  
  /* — Body sizes (Manrope) — */
  --text-2xl: 20px;    /* lead paragraph */
  --text-xl:  18px;    /* large body */
  --text-lg:  16px;    /* default body */
  --text-md:  14px;    /* secondary body */
  --text-sm:  13px;    /* meta, caption */
  --text-xs:  12px;    /* eyebrow, label */
  --text-2xs: 11px;    /* tiny labels */
  --text-3xs: 10px;    /* micro tags */
}
```

### Kullanım Kuralları

| Element | Font | Size | Weight | Line Height | Letter Spacing |
|---|---|---|---|---|---|
| Hero title | display | `--text-display-2xl` | 500 | 0.92 | -0.035em |
| Section title | display | `--text-display-md` | 600 | 1.0 | -0.025em |
| Card title | display | `--text-display-sm` | 600 | 1.1 | -0.015em |
| Lead paragraph | body | `--text-xl` | 400 | 1.6 | normal |
| Body paragraph | body | `--text-lg` | 400 | 1.65 | normal |
| Small body | body | `--text-md` | 400 | 1.7 | normal |
| Eyebrow / label | body | `--text-xs` | 600 | 1.3 | 0.14em |
| Button | body | `--text-sm` | 700 | 1 | 0.08em |
| Tiny meta | body | `--text-2xs` | 600 | 1.4 | 0.1em |

### Vurgu Kuralı (KRİTİK)

> **İtalik kullanılmaz.** Önceki versiyonda Instrument Serif italik kullandık, "düünyada" gibi font bug'ları çıktı + okul kurumsalı için fazla "şair" hissi verdi.

**Vurgu nasıl yapılır:**
- Display başlıklarda: `<em>` etiketi ile sarılır, CSS'de `font-style: normal; color: var(--color-orange); font-weight: 600;`
- Body'de: `<strong>` etiketi ile sarılır, `color: var(--color-ink); font-weight: 600;` (dark mode'da peach)
- Hero title gibi büyük yerlerde: vurgu kelimesi altına ince çizgi animasyonu (load reveal sırasında)

### Türkçe Karakter Kontrolü

Her tipografi seçimi şu karakterler için **görsel test edilmek zorundadır**:
```
ç Ç ğ Ğ ı I İ ö Ö ş Ş ü Ü
```

Test cümlesi:
> "Çağdaş öğretmenlerimiz, üstün başarılı öğrencilerimizle Ege'nin ışığında geleceği inşa ediyor."

---

## 3. SPACING SCALE

```css
:root {
  --space-1:  4px;
  --space-2:  8px;
  --space-3:  12px;
  --space-4:  16px;
  --space-5:  20px;
  --space-6:  24px;
  --space-8:  32px;
  --space-10: 40px;
  --space-12: 48px;
  --space-14: 56px;
  --space-16: 64px;
  --space-20: 80px;
  --space-24: 96px;
  --space-32: 128px;
  --space-40: 160px;
  --space-48: 192px;
}
```

### Section Padding Kuralı
- **Standart section:** `padding: 160px 0;` (desktop) → `100px 0` (mobil)
- **Hero:** `padding: 80px 0 0;` (alt boşluk içerideki bileşene bırakılır)
- **Compact section:** `padding: 96px 0;`
- **Spacious section:** `padding: 200px 0;`

### Container Genişlikleri
```css
:root {
  --container-narrow: 1080px;  /* dar içerik */
  --container: 1480px;          /* standart */
  --container-wide: 1640px;     /* geniş layout */
}

.wrap {
  max-width: var(--container);
  margin: 0 auto;
  padding: 0 40px;
}
```

Mobile padding: `0 20px`

---

## 4. BORDER RADIUS

```css
:root {
  --radius-none: 0;
  --radius-sm: 4px;     /* çoğu durumda kullanılacak */
  --radius-md: 6px;     /* kart ve panel */
  --radius-lg: 8px;     /* logo bloğu, prominent kartlar */
  --radius-xl: 12px;    /* büyük kartlar */
  --radius-pill: 100px; /* button ve tag */
  --radius-full: 50%;   /* avatar, icon circle */
}
```

**Kural:** Çoğunlukla `--radius-sm` (4px) ya da `--radius-pill` kullan. Yarım yamalak `--radius-md` (6px) "AI-generic" kokar. Ya net ya hiç.

---

## 5. SHADOWS

```css
:root {
  --shadow-xs: 0 1px 2px rgba(22, 24, 29, 0.04);
  --shadow-sm: 0 2px 4px rgba(22, 24, 29, 0.06);
  --shadow-md: 0 8px 16px -4px rgba(22, 24, 29, 0.08);
  --shadow-lg: 0 16px 32px -8px rgba(22, 24, 29, 0.12);
  --shadow-xl: 0 24px 48px -16px rgba(22, 24, 29, 0.18);
  --shadow-2xl: 0 32px 64px -24px rgba(22, 24, 29, 0.25);
  
  /* Renkli shadow — sadece hover state için */
  --shadow-orange: 0 12px 32px -8px rgba(242, 88, 28, 0.45);
  --shadow-orange-soft: 0 16px 40px -12px rgba(242, 88, 28, 0.25);
}
```

**Kural:** 
- Default state'te shadow yok ya da `--shadow-xs`
- Hover'da bir kademe artar
- Pressed/active'de azalır
- Saf `box-shadow: 0 4px 8px rgba(0,0,0,0.1)` gibi inline değer **yasak** — sadece variable

---

## 6. MOTION VE ANIMATION

### Easing Curves

```css
:root {
  --ease-out: cubic-bezier(0.16, 1, 0.3, 1);        /* default — yumuşak son */
  --ease-in-out: cubic-bezier(0.65, 0, 0.35, 1);    /* balanced */
  --ease-spring: cubic-bezier(0.34, 1.56, 0.64, 1); /* hafif bounce — sadece micro */
  --ease-in: cubic-bezier(0.7, 0, 0.84, 0);         /* exit animations */
}
```

### Duration Scale

```css
:root {
  --dur-instant: 100ms;   /* color, opacity */
  --dur-fast: 200ms;      /* hover state */
  --dur-base: 300ms;      /* default transition */
  --dur-slow: 500ms;      /* layout shift */
  --dur-slower: 800ms;    /* reveal animations */
  --dur-slowest: 1200ms;  /* hero reveals */
}
```

### Animation Prensipleri

Disney'in 12 prensibinden bizim için kritik olanlar:

1. **Slow in / Slow out** — Lineer asla. `--ease-out` default.
2. **Anticipation** — CTA hover'larında 2-3px yukarı kalkma
3. **Follow through** — Hover sonrası geri dönüşte de easing kullan
4. **Staggering** — Birden fazla element aynı anda gelmez, 80-160ms aralıklarla

### Reveal Animation Pattern (Standart)

```css
.reveal {
  opacity: 0;
  transform: translateY(28px);
  transition: opacity var(--dur-slowest) var(--ease-out), 
              transform var(--dur-slowest) var(--ease-out);
}
.reveal.is-in { 
  opacity: 1; 
  transform: none; 
}
.reveal-d1 { transition-delay: 80ms; }
.reveal-d2 { transition-delay: 160ms; }
.reveal-d3 { transition-delay: 240ms; }
.reveal-d4 { transition-delay: 320ms; }
.reveal-d5 { transition-delay: 400ms; }
```

**IntersectionObserver ile tetiklenir** (`threshold: 0.12, rootMargin: '0px 0px -8% 0px'`).

### Hero Title Reveal Pattern

Display başlıklarda kelime kelime stagger:
```html
<h1 class="hero-title">
  <div class="line"><span>Köklerimiz</span></div>
  <div class="line"><span><em>burada</em>,</span></div>
  <div class="line"><span>ufkumuz <em>dünyada</em>.</span></div>
</h1>
```

```css
.hero-title .line { display: block; overflow: hidden; }
.hero-title .line span {
  display: block;
  transform: translateY(110%);
  transition: transform 1.4s var(--ease-out);
}
.hero-title.is-in .line span { transform: none; }
.hero-title .line:nth-child(2) span { transition-delay: 100ms; }
.hero-title .line:nth-child(3) span { transition-delay: 200ms; }
```

### Hover Patterns

| Element | Hover Davranışı |
|---|---|
| Button (filled) | `translateY(-2px)` + colored shadow |
| Button (outline) | Background dolgu (filled state'e dönüş) |
| Card | `translateY(-4px)` + border color shift + shadow up |
| Link | Underline scaleX 0→1 (left origin, 350ms ease-out) |
| Image | `scale(1.04)` (overflow: hidden parent) |
| Arrow icon | `translateX(4px)` |

### Number Counter Animation

```js
const target = parseInt(el.dataset.count);
const duration = 1800;
// easeOutCubic: 1 - Math.pow(1 - progress, 3)
// Türkçe formatla: el.textContent = value.toLocaleString('tr-TR');
```

### Yasak Animasyonlar

- ❌ **Bounce / wobble / shake** — okul kurumsalı için ucuz hisli
- ❌ **Auto-playing carousel** — kontrolsüz, erişilebilirlik düşmanı
- ❌ **Parallax** scroll — fazla "tech demo", konsantrasyon dağıtır
- ❌ **Cursor follower particles** — "I learned this in CodePen" hissi
- ❌ **Text typing effect** — fazla
- ❌ **Aşırı micro-interaction** — her yerde değil, anlamlı yerlerde
- ❌ **`prefers-reduced-motion` desteklenmeyen animasyonlar** — kural: tüm reveal'lar reduced motion'da kısalır veya devre dışı

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

## 7. PHOTO PLACEHOLDER PATTERN

> Müşteriden gerçek fotoğraflar gelene kadar tüm görsel slotlar bu pattern'i kullanır. Lorem ipsum görseli, stok foto, AI üretimi görsel **yasak**.

### Yapı

```html
<div class="photo-slot">
  <div class="photo-slot-meta">
    <span class="photo-slot-aspect">16:10 · ph_001</span>
    <span>HERO</span>
  </div>
  <div class="photo-slot-content">
    <div class="photo-slot-icon">
      <i class='bx bx-camera'></i>
    </div>
    <div class="photo-slot-title">Kampüs portresi veya<br>drone hava çekimi</div>
    <div class="photo-slot-desc">
      Profesyonel fotoğraf çekimi ile yerleştirilecek · 
      Önerilen: tek bir karakteristik kampüs binasının önünden, geniş açı drone shot
    </div>
  </div>
</div>
```

### Kurallar
1. **Aspect ratio** her zaman gösterilir (`16:9`, `4:5`, `1:1`)
2. **Slot ID** her zaman gösterilir (`ph_001`, `vid_002`)
3. **Kategori etiketi** sağ üstte (`HERO`, `FEATURED`, `GALLERY`)
4. **Ikon:** Photo için `bx-camera`, Video için `bx-play`
5. **Açıklama net:** Hangi tip fotoğrafın geleceğini söyle (drone, portrait, sınıf içi, etkinlik)
6. **Gerçek görseller geldiğinde:** `<PhotoSlot>` componenti `<Image>` ile değiştirilir, asset key tutulur

### Light vs Dark

- **Light bg:** `photo-slot light` class'ı eklenir → background `--color-surface-2`, border turuncu
- **Dark bg:** Default → background `--color-anthracite`, border peach soft

---

## 8. CONTENT NOTE / TBA BADGES

> Henüz yazılmamış metin, alınmamış sayı, doğrulanmamış bilgi için inline placeholder pattern.

```html
<span class="tba">içerik gelecek</span>
<span class="tba">refine</span>
<span class="tba">to be sourced</span>
```

```css
.tba {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  font-family: var(--font-body);
  font-size: 9px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: var(--color-orange);
  background: var(--color-peach-soft);
  border: 1px dashed var(--color-orange);
  padding: 3px 7px;
  vertical-align: middle;
  margin-left: 6px;
  border-radius: 3px;
}
.tba::before {
  content: '';
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background: var(--color-orange);
}
```

**Dark version:** `tba dark` class'ı, background `rgba(242, 88, 28, 0.12)`, color `--color-peach`

**Lansman öncesi:** Production build'inde tüm `.tba` etiketleri **CI tarafından flag edilir**, hiçbiri canlı sayfada kalmamalı. Eğer kalmışsa lansman bloklanır.

---

## 9. ICONS

### Boxicons (CDN)
```html
<link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'>
```

Kullanım:
```html
<i class='bx bx-right-arrow-alt'></i>
<i class='bx bx-camera'></i>
<i class='bx bx-trophy'></i>
```

**Tercih:** Outline ikonlar > solid ikonlar (incelik için). Sadece CTA içinde solid kabul edilebilir.

### Custom SVG
Marka özelliği taşıyan ikonlar (logo, monogram, özel sembol) için inline SVG. Boxicons'tan biraz "köşeli" kalan yerlerde özel ikon çiz.

### Yasak
- ❌ Emoji `🎓 🏆 ⭐` — kurumsal site için ucuz hisli (sadece haber/etkinlik içeriklerinde, anlamlı yerde)
- ❌ Material Icons — fazla yaygın
- ❌ FontAwesome free set — eskimiş
- ❌ Birbirinden farklı stilde ikon karışımı — tutarlılık şart

---

## 10. FORM ELEMENTS

### Input Field

```css
.input {
  padding: 14px 18px;
  background: var(--color-surface);
  border: 1px solid var(--color-line-strong);
  border-radius: var(--radius-sm);
  font-family: var(--font-body);
  font-size: var(--text-md);
  color: var(--color-ink);
  transition: border-color var(--dur-base) var(--ease-out),
              box-shadow var(--dur-base) var(--ease-out);
}
.input:focus {
  outline: none;
  border-color: var(--color-orange);
  box-shadow: 0 0 0 3px var(--color-peach-soft);
}
.input::placeholder {
  color: var(--color-ink-soft);
}
```

### Label

```css
.label {
  display: block;
  font-size: var(--text-xs);
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--color-ink-2);
  margin-bottom: 8px;
}
```

---

## 11. BUTTON SYSTEM

### Variants

```css
/* Primary — birincil aksiyon */
.btn-primary {
  background: var(--color-orange);
  color: #FFFFFF;
  border: 2px solid var(--color-orange);
}
.btn-primary:hover {
  background: var(--color-orange-bright);
  transform: translateY(-2px);
  box-shadow: var(--shadow-orange);
}

/* Outline (light bg) */
.btn-outline {
  background: transparent;
  color: var(--color-ink);
  border: 2px solid var(--color-ink);
}
.btn-outline:hover {
  background: var(--color-ink);
  color: #FFFFFF;
}

/* Outline (dark bg) */
.btn-outline-light {
  background: transparent;
  color: #FFFFFF;
  border: 2px solid rgba(255, 255, 255, 0.3);
}
.btn-outline-light:hover {
  background: #FFFFFF;
  color: var(--color-ink);
  border-color: #FFFFFF;
}

/* Ghost (link gibi) */
.btn-ghost {
  background: transparent;
  color: var(--color-orange);
  padding: 0;
  border: none;
}
.btn-ghost::after {
  content: '';
  display: block;
  height: 1.5px;
  background: var(--color-orange);
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 350ms var(--ease-out);
}
.btn-ghost:hover::after {
  transform: scaleX(1);
}
```

### Standart Padding

| Size | Padding | Font Size |
|---|---|---|
| sm | `10px 18px` | `12px` |
| md (default) | `16px 28px` | `13px` |
| lg | `20px 36px` | `14px` |

### Buton Yapısı

```html
<a href="#" class="btn btn-primary btn-md">
  Ön Kayıt Başvurusu
  <i class='bx bx-right-arrow-alt'></i>
</a>
```

**Kural:** Hover'da arrow icon `translateX(4px)`.

---

## 12. EYEBROW (Section Label)

Her section'ın başında küçük etiket. Editorial dilin imzası.

```html
<span class="eyebrow">Ege'nin Eğitim Omurgası</span>
```

```css
.eyebrow {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  font-family: var(--font-body);
  font-size: var(--text-xs);
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.14em;
  color: var(--color-orange);
}
.eyebrow::before {
  content: '';
  width: 28px;
  height: 2px;
  background: var(--color-orange);
}
```

**Dark version:** `eyebrow light` → `color: var(--color-peach)`

---

## 13. GRID SİSTEMİ

12-column grid, 24px gutter (desktop), 16px gutter (mobile).

```css
.grid {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 24px;
}
```

### Asimetrik Layout Kuralı

Editorial yön için **simetri kırılır**. Hero'da 1.1fr / 1fr split, Manifesto'da indent'lerle vurgu, Featured Story'de 1.05fr / 1fr.

**Default 50/50 split kullanma.** Her zaman bir taraf az daha geniş olmalı (1.1, 1.15, 1.2 gibi).

---

## 14. RESPONSIVE BREAKPOINTS

```css
:root {
  --bp-sm: 640px;
  --bp-md: 768px;
  --bp-lg: 1024px;
  --bp-xl: 1280px;
  --bp-2xl: 1536px;
}
```

### Critical Breakpoints

| Breakpoint | Davranış |
|---|---|
| `< 640px` | Mobil — tek sütun, hamburger menu |
| `640-1024px` | Tablet — 2 sütun grid |
| `1024-1200px` | Küçük desktop — nav başlar gizlenmeye |
| `1200-1480px` | Standart desktop |
| `> 1480px` | Geniş desktop — wide container |

### Container Behavior

- `< 700px`: padding 20px
- `700-1100px`: padding 32px
- `> 1100px`: padding 40px

---

## 15. ATMOSPHERE & DEPTH

### Dark Section Glow Pattern

Antrasit zeminli section'larda atmosfer için:

```css
.dark-section::before {
  content: '';
  position: absolute;
  top: 0;
  right: -200px;
  width: 800px;
  height: 800px;
  background: radial-gradient(circle, rgba(242, 88, 28, 0.18) 0%, transparent 60%);
  pointer-events: none;
}
.dark-section::after {
  content: '';
  position: absolute;
  bottom: -300px;
  left: -200px;
  width: 700px;
  height: 700px;
  background: radial-gradient(circle, rgba(248, 168, 120, 0.08) 0%, transparent 60%);
  pointer-events: none;
}
```

**Bu pattern sadece dark hero ve dark feature section'lar için. Light bg'lerde glow yok.**

### Section Alternasyonu

Sayfanın ritmi: `light → dark → light → dark → light` 

Örnek ana sayfa flow:
1. Header — light
2. Hero — **dark**
3. Manifesto — light  
4. Numbers / Achievements — **dark**
5. Programs — light
6. Featured Story — **dark**
7. Testimonials — light
8. International — **dark**
9. CTA Band — light
10. Footer — **dark**

---

## 16. KATILMASI YASAK PATTERN'LAR

Bu listeyi 09-RULES dosyasında genişletiyoruz, ama design system seviyesinde özet:

### Görsel Yasaklar
- ❌ Saf siyah / saf beyaz background
- ❌ Italik tipografi (vurgu için orange weight kullan)
- ❌ Cursive / script font
- ❌ Generic stock fotoğraflar
- ❌ 3D illustration / Memphis style
- ❌ Glassmorphism / frosted glass abuse
- ❌ Neon colors
- ❌ Soft pink / pastel everything
- ❌ Border-radius: 6px (yarım yamalak)
- ❌ `box-shadow: 0 4px 6px rgba(0,0,0,0.1)` — Tailwind default'u, jenerik

### Tipografi Yasaklar
- ❌ Inter (overused)
- ❌ Roboto (overused)
- ❌ Space Grotesk (AI go-to)
- ❌ Poppins (overused)
- ❌ DM Sans (yetersiz karakter)
- ❌ Görsel-test edilmemiş Türkçe karakter

### Layout Yasaklar
- ❌ Centered everything (Apple klonu)
- ❌ %50/%50 split (asimetri kullan)
- ❌ Grid'siz spaghetti markup
- ❌ Mobil üstüne masaüstü ekleyen "responsive afterthought"

---

## 17. DESIGN TOKENS DOSYALARI

Implementasyon sırasında bu sistem **tek bir kaynak dosyada** tutulur:

```
/styles/tokens.css   ← tüm CSS variables
/styles/globals.css  ← reset + base
/styles/utilities.css ← yardımcı sınıflar
```

Tailwind kullanılıyorsa: `tailwind.config.ts` içinde tüm tokenlar import edilir, magic number yasak.

---

**Sıradaki dosya:** `03-INFORMATION-ARCHITECTURE.md` — Bu görsel sistemin yaşayacağı sayfa yapısı.
