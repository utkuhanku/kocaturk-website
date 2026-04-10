# 09 · RULES AND GUARDRAILS

> **BU DOSYA BU PROJENİN EN KRİTİK BELGESİDİR.**
>
> Tüm diğer dokümanlar "ne yapılacağını" tarif eder. Bu dosya **"asla ne yapılmayacağını"** tarif eder. Premium sonuç bu yasakların sıkı uygulanmasıyla mümkündür.
>
> Plan modunda çalışan Claude Code agent'ı, plan yaparken bu dosyayı **mutlaka ilk üç dosyadan biri olarak** okumak zorundadır. Buradaki bir kuralı çiğneyen bir öneri otomatik reddedilir.

---

## 0. GENEL FELSEFE

### "Yeterince İyi" Yoktur

Bu projede üç kalite seviyesi vardır:

| Seviye | Açıklama | Kabul |
|---|---|---|
| 🟢 **Premium** | Bahçeşehir/TED'ten anlamlı şekilde daha iyi | ✅ |
| 🟡 **İyi** | Onlardan biraz daha iyi ya da eşit | ❌ Refactor |
| 🔴 **Jenerik** | AI çıktısı / kurumsal şablon hisli | ❌ Sil ve yeniden yap |

**"İyi" seviyesindeki çıktı, daha kötüdür çünkü kandırıcıdır.** Net şekilde "jenerik" olan bir şey reddedilir; "iyi" olan ise kabul edildiği için premium hedef hiç tutulmaz. Bu yüzden **iyi yetmez**.

### "Bu Kararı Niye Aldım?" Testi

Her komponent / her cümle / her renk için kendine sor:

> **"Bunu Bahçeşehir/TED Koleji'nin sitesinde de görür müydüm?"**

Cevap **evet** ise → bu bizden değil → sil ve yeniden yap.

---

## 1. TİPOGRAFİ HARD NO

### ❌ Asla Kullanma

| Font | Sebep |
|---|---|
| **Inter** | Aşırı yaygın — "AI default" kabul edilir |
| **Roboto** | Material Design bagajı, jenerik |
| **Space Grotesk** | AI agent'ların go-to fontu, Vercel/startup klişesi |
| **Poppins** | Fazla yumuşak, "amatör tasarım" hisli |
| **Montserrat** | Aşırı yaygın, karakter yok |
| **Lato** | Eskimiş |
| **Open Sans** | Eskimiş |
| **DM Sans** | Türkçe karakterler kötü |
| **Nunito** | Fazla yuvarlak, "anaokul" havası |
| **Comic Sans** | Açıklama gerek mi? |
| **Times New Roman / serif default** | Lazy default |
| **Instrument Serif** | Daha önce denedik — düünyada bug + fazla şair havası |

### ✅ İzin Verilen

- **Bricolage Grotesque** (display) — `02-DESIGN-SYSTEM.md` Bölüm 2
- **Manrope** (body) — aynı dosya

### Kural
- Display + body **dışında 3. font yoktur**
- Yeni bir tipografi gereği doğarsa → 02-DESIGN-SYSTEM güncellenir → Direktör onayı alınır → sonra kullanılır
- Self-host opsiyonu var, Google Fonts subset'i tercih edilir

### Türkçe Karakter Test Cümlesi

Her tipografi seçimi şu cümleyle test edilmek zorundadır:

> **"Çağdaş öğretmenlerimiz, üstün başarılı öğrencilerimizle Ege'nin ışığında geleceği inşa ediyor."**

Eğer bu cümlede "ı" / "İ" / "ğ" / "ş" / "ç" / "ö" / "ü" karakterleri **kötü görünüyorsa**, font reddedilir.

### Italic Yasağı

❌ **İtalik tipografi kullanılmaz.** Önceki versiyonda italic vurgu denedik, hem bug çıktı (Instrument Serif "düünyada"), hem de okul kurumsalı için fazla "şair tavrı" oluşturdu.

✅ **Vurgu nasıl yapılır:** `<em>` etiketi ile sarılır, CSS'de `font-style: normal; color: var(--color-orange); font-weight: 600;`. Yani anlam taşıyıcısı `<em>` korunur ama görsel italic değil renk + ağırlık olur.

---

## 2. RENK HARD NO

### ❌ Asla Kullanma

- ❌ **Saf siyah (`#000000`)** — sıkıcı, kontrast aşırı
- ❌ **Saf beyaz (`#FFFFFF`) zemin** — soğuk, sıcak off-white kullan
- ❌ **Mor / pembe / mavi** — palet dışı renkler
- ❌ **Neon renkler** — kalitesizlik göstergesi
- ❌ **Pastel everything** — bebek anaokul hissi (Toca Boca tarzı, ortaokul/lise için yanlış)
- ❌ **Hard-coded HEX değerleri** — sadece CSS variable kullanılır
- ❌ **`rgba(0, 0, 0, 0.5)`** gibi opaque kullanım — palette renk + opacity kullan
- ❌ **Birbirine yakın 5 ton tasarım** — palet zaten tanımlı, türetme yok
- ❌ **Lacivert** — daha önce denedik, mavi tonlu sıkıcı oldu, antrasit kullan

### ✅ İzin Verilen

Sadece `02-DESIGN-SYSTEM.md` Bölüm 1'deki paletteki renkler. Yeni bir renk gereği → DS update → onay → uygula.

### Gradient Yasağı

❌ Lineer gradient yasak  
❌ Mesh gradient yasak  
✅ Sadece **dark section glow** için `radial-gradient` (turuncu yumuşak ışık)

---

## 3. LAYOUT HARD NO

### ❌ Yasaklı Pattern'lar

- ❌ **Centered everything** — Apple klonu, sıkıcı
- ❌ **%50 / %50 split** — asimetri kullan (1.05/1, 1.1/1, 1.15/1)
- ❌ **Grid'siz spaghetti markup** — her layout grid sistemi içinde
- ❌ **Magic number padding** (`padding: 23px 47px` gibi) — token kullan
- ❌ **Mobil "afterthought"** — mobile first değilse de responsive ciddi
- ❌ **Gizlenen kritik içerik mobile'da** — accordion ile "şu anda gör"e tıklatma
- ❌ **Aşırı kalabalık hero** — bir hero'da 5+ farklı içerik bloğu olamaz
- ❌ **Tüm sayfa beyaz / tüm sayfa koyu** — section alternasyonu zorunlu

### ✅ Ritim Kuralı

Her sayfa **section alternasyonu** ile akar:
```
Light → Dark → Light → Dark → Light → Dark → Footer (Dark)
```
Üç peş peşe light section yasak. Üç peş peşe dark section yasak.

---

## 4. TİPOGRAFİ + LAYOUT YAZIM HARD NO

- ❌ **Tüm büyük harf 5+ kelime** — okumayı yıkar (kısa eyebrow ve button OK)
- ❌ **Cluster eyebrow** — eyebrow + sub-eyebrow + folio + tag aynı bölümde
- ❌ **6+ sözcük buton metni** — kısalt
- ❌ **Heading'de soru işareti** — "Neden Biz?" gibi klişe
- ❌ **3 üst üste sıfat** — "yenilikçi, çağdaş, modern" yasak
- ❌ **Ünlem işareti CTA'da** — "Hemen Başla!" yasak
- ❌ **Lorem ipsum** — `<ContentNote>` kullan
- ❌ **Tarih formatı karışıklığı** — Türkçe için her zaman `Kasım 2024` veya `15 Kasım 2024`, asla `11/15/24`

---

## 5. CONTENT (METİN) HARD NO

### Yasak Kelimeler / Kalıplar

`04-CONTENT-STRATEGY.md` Bölüm 6'daki yasaklı liste tam burada da geçerlidir. Özet:

| Yasak | Kullanımı |
|---|---|
| "Türkiye'nin lideri" | Yasak |
| "Öncüsü", "Önderi" | Yasak |
| "Geleceğin liderlerini yetiştiriyoruz" | Yasak |
| "Çağdaş eğitim", "kaliteli eğitim" | Yasak |
| "Yenilikçi yaklaşım" | Yasak |
| "Mükemmel" | Yasak |
| "En iyisi", "en büyüğü" | Yasak |
| "Çocuğunuzun mutluluğu için" | Yasak |
| "Hayalindeki okul" | Yasak |
| "Saygıdeğer velilerimiz" | Yasak (devlet dili) |
| "Hayatınızın en önemli kararı" | Yasak |
| Pasif çatı | Yasak |

### Yasak Magazine Fantazisi

Önceki iterasyonda denedik, reddedildi:

- ❌ "Vol. I", "Cilt II", "Bölüm 03" — sahte editorial
- ❌ Roma rakamları (I, II, III, IV)
- ❌ "Folio" / "Edition" / "Issue" — magazine taklidi
- ❌ "Çapraz başlık" / "Subhead" / "Folio mark"

Bu sahte luxury, gerçek content kalitesini gizliyordu. Çıkarıldı, gelmeyecek.

### Yasak Apple Klonu Dili

- ❌ "Yeniden tanımlandı" / "Reimagined"
- ❌ "Gelmiş geçmiş en..." / "The most..."
- ❌ "İnce. Hafif. Güçlü." (üçleme staccato)
- ❌ "Süper" + her şey
- ❌ "Pro" / "Max" / "Plus" terim ekleri

---

## 6. KOMPONENT HARD NO

### ❌ Yasaklı Pattern'lar

- ❌ **Kart pattern abuse** — her şey karta sokulmaz, tipografi de bir layout
- ❌ **3 column features** — her sayfada üç sütun ikon-başlık-açıklama
- ❌ **Generic Bootstrap modal** — özel modal pattern var
- ❌ **AI gradient buton** — sadece düz turuncu
- ❌ **Glassmorphism abuse** — frosted glass kullanılırsa sadece header'da, anlamlı
- ❌ **Drop shadow her yerde** — shadow sadece interactive state'lerde
- ❌ **Border-radius karmaşası** — sadece DS'deki değerler (`sm`, `md`, `lg`, `pill`, `full`)
- ❌ **Default Bootstrap/Material/Tailwind UI komponentleri** — kendi sistemi kullan
- ❌ **Footer'da 50 link** — kategorize edilmiş, 4-5 sütun, max 6 link/sütun

### ✅ Komponentler `06-COMPONENT-LIBRARY.md`'de tanımlı

Yeni component → önce dokümana eklenir, sonra inşa edilir.

---

## 7. ANIMATION HARD NO

### ❌ Yasaklı Animasyonlar

- ❌ **Bounce / wobble / shake** — okul kurumsalı için ucuz
- ❌ **Auto-playing carousel** — kontrolsüz, accessibility düşmanı
- ❌ **Parallax scroll** — fazla "tech demo", konsantrasyon dağıtır
- ❌ **Cursor follower particles** — "I learned this in CodePen" hissi
- ❌ **Custom cursor** — daha önce denedik, gereksiz, çıkarıldı
- ❌ **Text typing effect** — fazla
- ❌ **Lottie everything** — 1 yer kabul, 5 yer yasak
- ❌ **3D rotating element** — sıkıcı veya fazla
- ❌ **Aşırı micro-interaction** — her hover'da yaylanma yok
- ❌ **`prefers-reduced-motion` desteklenmeyen animasyon** — kabul edilmez

### ✅ İzin Verilen

`02-DESIGN-SYSTEM.md` Bölüm 6'daki animation prensipleri:
- Reveal (fade-up + IntersectionObserver)
- Hover transform (translate, scale, color shift)
- Number counter
- Hero title word-by-word stagger
- Smooth scroll transitions

**Hepsi `--ease-out` ya da `--ease-in-out`. Spring bounce sadece micro-interaction'da, çok sınırlı.**

---

## 8. GÖRSEL HARD NO

### ❌ Yasaklı Görseller

- ❌ **Stok fotoğraflar** (Unsplash, Pexels, Shutterstock)
- ❌ **AI üretimi görseller** (Midjourney, DALL-E)
- ❌ **3D illustration kits** (unDraw, Storyset)
- ❌ **Memphis style illustration** — eskimiş trend
- ❌ **İnsanlar laptop'a gülerek bakıyor** stok klişesi
- ❌ **İçi boş "modern" ofis fotoları**
- ❌ **Logo grid'i** — her yerde "şu kurumlarla çalıştık" cliché
- ❌ **Gereksiz büyük SVG illustration** — fotoğrafı değiştirir mi?
- ❌ **Düşük çözünürlük görsel** — 1× minimum 1600px, 2× retina

### ✅ İzin Verilen

- ✅ **Profesyonel çekim fotoğrafları** (`08-CONTENT-INVENTORY.md` Bölüm 14)
- ✅ **`<PhotoSlot>` placeholder** — gerçek fotoğraf gelene kadar
- ✅ **Logo / icon / monogram custom SVG** (marka varlıkları)
- ✅ **Boxicons** outline icon set
- ✅ **Drone hava çekimi** (kampüs için)

### Fotoğraf Kalite Standartları

| Bağlam | Min Boyut | Format | Optimization |
|---|---|---|---|
| Hero | 1920×1200 | WebP | Next.js Image |
| Featured | 1600×1000 | WebP | Next.js Image |
| Card | 800×500 | WebP | Next.js Image |
| Avatar | 400×400 | WebP | Next.js Image |
| Gallery | 1200×800 | WebP | Next.js Image |

---

## 9. KOD HARD NO

### ❌ Yasaklı

- ❌ **`any` type** — TypeScript strict, her şey type'lı
- ❌ **`@ts-ignore`** — sebep ne olursa olsun
- ❌ **Inline style** (`<div style={{...}}>`) — sadece dynamic değer için kabul
- ❌ **Magic number** (`paddingTop: 23`) — token kullan
- ❌ **`!important`** — sebep yok
- ❌ **`document.querySelector` direkt** — ref kullan
- ❌ **`useEffect` overuse** — server component tercih edilir
- ❌ **State management lib** (Redux, Zustand) ihtiyaç yokken
- ❌ **`console.log` production'da** — Biome lint hatası
- ❌ **TODO yorumu** — issue oluştur
- ❌ **Türkçe değişken adı** (`const yenisayfa = ...`) — kod İngilizce, yorum Türkçe OK
- ❌ **3000 satırlık component** — 200 satıra böl

### ✅ İzin Verilen

`05-TECH-STACK.md` Bölüm 9'daki standartlar.

---

## 10. ACCESSIBILITY HARD NO (WCAG AA)

### ❌ Yasak

- ❌ **`alt=""` her resimde** — anlamlı alt metin
- ❌ **Click handler `<div>` üzerinde** — `<button>` kullan
- ❌ **Renk ile bilgi taşıma** (sadece kırmızı = error) — icon + text de
- ❌ **Düşük kontrast** (orange #F2581C beyaz üzerinde 4.5 altında olabilir — kontrol et)
- ❌ **Skip link yok** — header'a `[Skip to content]` ekle
- ❌ **Form label yok** — placeholder label değildir
- ❌ **Focus state görünmez** — `outline: 0` yasak
- ❌ **Heading hierarchy bozuk** (h1 → h3, h2 atlanmış) — sıralı
- ❌ **Tek sayfada birden çok h1** — sadece 1 h1
- ❌ **iframe `title` yok**
- ❌ **Animation `prefers-reduced-motion` desteklenmiyor**

### ✅ Kontrol

Her sayfa için:
- Lighthouse Accessibility = 100
- axe DevTools 0 issue
- Tab navigation tüm interactive elements'i geçer
- Screen reader test (VoiceOver/NVDA)

---

## 11. PERFORMANCE HARD NO

### ❌ Yasak

- ❌ **Lighthouse Performance < 95** — mobile dahil
- ❌ **JS bundle > 150KB initial gzipped**
- ❌ **CSS bundle > 30KB initial gzipped**
- ❌ **Layout shift > 0.05** (CLS)
- ❌ **LCP > 2 saniye** mobile
- ❌ **Render-blocking resources** (font, JS) → preload + defer
- ❌ **Optimize edilmemiş image** — Next.js Image kullan, max boyut 1920px
- ❌ **Eager loading non-critical content** — lazy load
- ❌ **`<img src="image.png">` direkt** — `<Image>` kullan
- ❌ **300KB+ HD video autoplay** — yasak
- ❌ **Üçüncü taraf script lazy load değil** (analytics dahil)
- ❌ **Google Fonts non-subset** — Türkçe latin-ext subset yeterli
- ❌ **CSS-in-JS runtime** (styled-components, emotion) — Tailwind kullan

### ✅ Hedef

`05-TECH-STACK.md` Bölüm 5'teki bütçe.

---

## 12. SEO HARD NO

### ❌ Yasak

- ❌ **Sayfa başlığı yok** veya "Anasayfa" gibi vague
- ❌ **Meta description yok**
- ❌ **`og:image` yok**
- ❌ **Heading olmayan büyük metin** (`<div class="big">`)
- ❌ **Anchor link metni "Buraya Tıkla"**
- ❌ **Image `alt` yok**
- ❌ **Sayfa URL'inde Türkçe karakter** (`/kampüsler` yasak, `/kampusler` doğru)
- ❌ **Canonical yok** — duplicate content riski
- ❌ **Schema markup yok** — `EducationalOrganization`, `School`, `LocalBusiness` zorunlu
- ❌ **Sitemap.xml yok**
- ❌ **Robots.txt yok**
- ❌ **404 sayfası standart Vercel** — özel 404 var

### ✅ Her Sayfa İçin Zorunlu

```typescript
export const metadata: Metadata = {
  title: '...',
  description: '...',
  openGraph: { ... },
  alternates: { canonical: '...' },
}
```

JSON-LD inject edilir.

---

## 13. KENDİNİ X YAPARKEN BULURSAN DUR

> Bu liste **çalışma sırasında** kendini gözlemleme kuralıdır. Aşağıdaki cümleleri içinden geçirirken bul, dur, yeniden değerlendir.

### Tasarım Sırasında

- 🛑 "Şu bölüm boş kaldı, bir illustration ekleyeyim" → boş alan değerlidir, doldurma
- 🛑 "Burada gradient güzel olur" → yasak, palette renk yeterli
- 🛑 "Şu div'e biraz shadow eklesem fena olmaz" → DS shadow scale'i kullan, default state'te shadow yok
- 🛑 "Buton hover'da büyütsem mi?" → 2px translate yeter, scale yasak
- 🛑 "Photo slot yerine geçici bir Unsplash koyayım, sonra değişir" → ASLA. ContentNote kullan
- 🛑 "Lorem ipsum geçici" → ASLA. ContentNote kullan
- 🛑 "Mobile'da bu bölümü gizlesem mi" → öncelik düşür, gizleme

### Yazım Sırasında

- 🛑 "Burada 'çağdaş' kelimesi güzel olur" → yasak
- 🛑 "Üç sıfat ekleyim, daha güçlü olur" → tek somut isim daha güçlü
- 🛑 "'Türkiye'nin lideri' ifadesi marka için iyi olur" → yasak
- 🛑 "Italic kullansam vurgu güçlenir" → yasak, em + orange kullan
- 🛑 "Bu cümleyi Bahçeşehir de yazabilir" → kes, yeniden yaz

### Kod Yazarken

- 🛑 "any kullansam type kontrolünü es geçerim" → ASLA
- 🛑 "Şuraya bir useState ekleyeyim, server component zor" → server tercih, hala denenir
- 🛑 "Tek seferlik component, dökümante etmeyeyim" → her şey 06-COMPONENT-LIBRARY.md'de
- 🛑 "Padding 17px güzel görünüyor" → token kullan, yakın değerden seç
- 🛑 "Hızlı bir fix, sonra düzeltirim" → düzeltilmez, baştan doğru yap
- 🛑 "Mobile'ı sonra hallederim" → her PR mobile dahil
- 🛑 "Lighthouse'a sonra bakarım" → her PR Lighthouse skor

---

## 14. RED FLAG LİSTESİ

Plan modunda, eğer aşağıdaki cümleler bir öneride geçiyorsa **plan reddedilir**:

- "Bootstrap kullanalım"
- "Material UI hızlandırır"
- "shadcn-ui template'i ile başlayalım"
- "Tailwind UI marketplace'inden alalım"
- "WordPress + Elementor"
- "Bir hero template'i bulup adapte edelim"
- "Geçici Unsplash kullanalım"
- "AI ile fotoğraf üretelim"
- "Lorem ipsum doldur"
- "Inter font yeterli"
- "Default Tailwind shadow"
- "Quick fix"
- "MVP için yeterli, sonra gelişir"

**"Sonra gelişir" yaklaşımı bu projede yoktur.** Premium baştan inşa edilir.

---

## 15. KARAR PROTOKOLÜ

### Ne Zaman Direktör Onayı Gerekir?

Aşağıdaki durumlarda Claude Code agent **plan modunda durur ve onay ister**:

1. **Yeni renk** kullanımı (palette dışında)
2. **Yeni font** kullanımı (3. font)
3. **Yeni component pattern** ekleme (06-COMPONENT-LIBRARY'de yok)
4. **Yeni sayfa** ekleme (03-INFORMATION-ARCHITECTURE'da yok)
5. **Tech stack değişikliği** (05-TECH-STACK kararına aykırı)
6. **Yeni 3rd party library** ekleme
7. **Performance bütçesi aşımı** kabul etme
8. **Animation principle değişikliği**
9. **Bu doküman setindeki bir kuralı değiştirme** önerisi
10. **Müşteri bilgisinin uydurulması** (sayı, başarı, kişi bilgisi)

### Onay Süreci

1. Claude Code sorar: "Bu kural değişikliği için onay gerekiyor: [neden] · [risk] · [öneri]"
2. Direktör (Utkus) yanıtlar
3. Onaylanırsa → ilgili doküman güncellenir → uygulanır
4. Reddedilirse → orijinal plana dönülür

---

## 16. KALİTE SİNYALLERİ — Premium Hisse Yaklaştığını Gösterenler

Aşağıdakilerden ne kadar çok varsa, sonuç o kadar premium:

✨ Tipografide "wow" momenti var (display başlık ölçek + ağırlık)  
✨ Asimetrik layout doğal hissediyor  
✨ Renk paleti tutarlı, sıkışmamış  
✨ Animasyon "fark edilmiyor ama yokluğunda eksik" hissediyor  
✨ Mobile'da hierarchy net, bilgi kaybı yok  
✨ Boş alan korkusuz kullanılmış  
✨ Detaylar — eyebrow, breadcrumb, micro-spacing — tutarlı  
✨ Görseller bölümün hikâyesini destekliyor, dekoratif değil  
✨ CTA'lar net, yönlendirici, "ne yapmam lazım" sorusu yok  
✨ Sayfa scroll edildikçe ritim hissediliyor (light/dark alternasyon)  
✨ Türkçe karakterler doğal akıyor, font seçimi onları desteklemiş  
✨ Sayılar somut ve hikâyenin parçası ("90 → 4.000")  
✨ Marka adı her yerde tutarlı ("Kocatürk Okulları")  
✨ Footer kalabalık değil, kategorize edilmiş  

---

## 17. DOKÜMAN GÜNCELLEME KURALI

Bu doküman seti **sabit değildir**. Proje ilerledikçe yeni öğrenmeler, yeni kararlar olur. Ama:

1. **Hiçbir doküman dolaylı olarak güncellenmez** — açık bir commit mesajı + sebep
2. **Her güncelleme** ilgili dosyanın altındaki "Sürüm" bölümüne eklenir
3. **Büyük değişiklikler** Direktör onayı ile (Bölüm 15)
4. **Küçük düzeltmeler** (typo, format) onaysız yapılabilir

### Versiyon Notu Format

Her doküman dosyasının altına eklenir:

```
---
**Versiyon Geçmişi:**
- v1.0 — 10.04.2026 — İlk versiyon (Claude)
- v1.1 — DD.MM.YYYY — [değişiklik özeti] (kim)
```

---

## 18. ÖZET — TEK CÜMLELİK KURALLAR

Eğer bu dosyadan **tek bir şey** hatırlanacaksa, bu cümleler:

1. **Bahçeşehir Koleji de söyleyebiliyorsa, bizden değildir.**
2. **Italic kullanma. Bold + turuncu yeterli.**
3. **Lorem ipsum kullanma. ContentNote kullan.**
4. **Stok foto kullanma. PhotoSlot kullan.**
5. **Inter / Roboto / Space Grotesk kullanma. Bricolage + Manrope.**
6. **Saf siyah / saf beyaz kullanma. Antrasit + sıcak off-white.**
7. **Magic number padding kullanma. Spacing scale.**
8. **Mobile'ı "sonra" yapma. Her PR mobile.**
9. **Performance "sonra" optimize etme. Her PR Lighthouse 95+.**
10. **"İyi" ile yetinme. Premium veya refactor.**

---

**Sıradaki dosya:** `10-ROADMAP.md` — Bu kuralların altında, faz faz uygulama planı.
