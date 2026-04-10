# 03 · INFORMATION ARCHITECTURE

> Sitenin mimarisi. Hangi sayfalar var, nasıl bağlanıyor, navigasyonda nasıl gözüküyor, URL'leri nasıl. Yeni bir sayfa eklenmeden önce bu dosya güncellenir.

---

## 1. SİTEMAP

```
ANA SAYFA (/)
│
├── KURUMSAL (/kurumsal)
│   ├── Hakkımızda (/kurumsal/hakkimizda)
│   ├── Tarihçemiz (/kurumsal/tarihce)
│   ├── Vizyon & Misyon (/kurumsal/vizyon)
│   ├── Eğitim Felsefemiz (/kurumsal/egitim-felsefemiz)
│   ├── Yönetim Kadrosu (/kurumsal/yonetim)
│   ├── Sayılarla Kocatürk (/kurumsal/sayilar)
│   ├── Akreditasyonlar & Üyelikler (/kurumsal/akreditasyonlar)
│   └── Sosyal Sorumluluk (/kurumsal/sosyal-sorumluluk)
│
├── KAMPÜSLERİMİZ (/kampusler)
│   ├── İnteraktif Harita (/kampusler — anasayfa)
│   ├── Manisa Turgutlu (/kampusler/turgutlu)        ★ Ana Kampüs
│   │   ├── Anaokulu
│   │   ├── İlkokul
│   │   ├── Ortaokul
│   │   ├── Anadolu Lisesi
│   │   └── Fen Lisesi
│   ├── İzmir Gaziemir (/kampusler/gaziemir)         ★ 2. Ana Kampüs
│   │   ├── Anaokulu
│   │   ├── İlkokul
│   │   ├── Ortaokul
│   │   ├── Anadolu Lisesi
│   │   ├── Fen Lisesi
│   │   └── ✈ Havacılık Lisesi
│   ├── İzmir Karabağlar / Üçkuyular (/kampusler/uckuyular)
│   ├── İzmir Kemalpaşa (/kampusler/kemalpasa)
│   └── İzmir Tire (/kampusler/tire)
│
├── EĞİTİM (/egitim)
│   │
│   ├── Kademeler:
│   │   ├── Anaokulu (/egitim/anaokulu)
│   │   ├── İlkokul (/egitim/ilkokul)
│   │   ├── Ortaokul (/egitim/ortaokul)
│   │   ├── Anadolu Lisesi (/egitim/anadolu-lisesi)
│   │   ├── Fen Lisesi (/egitim/fen-lisesi)
│   │   └── ✈ Havacılık Lisesi (/egitim/havacilik-lisesi)   ★ ÖZEL SAYFA
│   │
│   ├── Programlar (markalanmış pedagoji):
│   │   ├── Tam Öğrenme Modeli (/egitim/programlar/tam-ogrenme)
│   │   ├── Bireyselleştirilmiş Eğitim (/egitim/programlar/bireysellestirilmis)
│   │   ├── Mind Kids — Akıl ve Zekâ Oyunları (/egitim/programlar/mind-kids)
│   │   ├── Eğlenceli Bilim STEM (/egitim/programlar/stem)
│   │   ├── Kocatürk WWAP (/egitim/programlar/wwap)
│   │   ├── Design Thinking (/egitim/programlar/design-thinking)
│   │   ├── Kocatürk Online (/egitim/programlar/online)
│   │   └── 🤖 Robotik & Kodlama (/egitim/programlar/robotik-kodlama) ★ ÖZEL SAYFA
│   │
│   ├── Yabancı Dil Eğitimi (/egitim/yabanci-dil)
│   ├── PDR — Psikolojik Danışmanlık (/egitim/pdr)
│   └── 🌍 Yurtdışı Eğitim (/egitim/yurtdisi)         ★ ÖZEL SAYFA
│       ├── İngiltere Yaz Okulu
│       ├── eTwinning Avrupa Ortaklıkları
│       └── Uluslararası Yarışmalar
│
├── BAŞARILARIMIZ (/basarilarimiz)
│   ├── Tüm Başarılar (filtreli arşiv)
│   ├── Akademik Başarılar (LGS/YKS, üniversite yerleştirme)
│   ├── Uluslararası (Robotik, eTwinning)
│   ├── Sportif (jimnastik, voleybol, basketbol)
│   ├── Sanatsal & Kültürel
│   └── Mezun Hikâyeleri
│
├── KAMPÜS YAŞAMI (/kampus-yasami)
│   ├── Kulüpler (Robotik, Maker, Piyano, Basketbol, vs.)
│   ├── Spor Faaliyetleri
│   ├── Sanat & Müzik
│   ├── Geziler
│   ├── Yaz Okulları
│   └── Etkinlik Takvimi
│
├── HABERLER (/haberler)
│   ├── Tüm Haberler (filtreli)
│   ├── Tek Haber (/haberler/[slug])
│   ├── Basında Biz (/haberler/basinda-biz)
│   └── Duyurular (/haberler/duyurular)
│
├── KAYIT & BAŞVURU (/kayit)
│   ├── Ön Kayıt Formu (/kayit/on-kayit)
│   ├── Bursluluk Sınavı (/kayit/bursluluk)
│   ├── Ücretler & Ödeme (/kayit/ucretler)
│   ├── Servis Güzergâhları (/kayit/servisler)
│   └── Sıkça Sorulan Sorular (/kayit/sss)
│
├── KARİYER (/kariyer)
│   ├── Açık Pozisyonlar
│   ├── Çalışan Deneyimi
│   └── Başvuru Formu
│
├── İLETİŞİM (/iletisim)
│   ├── Genel Müdürlük
│   ├── Kampüs İletişim Listesi
│   └── İletişim Formu
│
├── e-Kocatürk Giriş (external — mevcut e-sukul sistemi)
│
└── EN (/en) — İngilizce versiyon (Faz 7)
```

---

## 2. NAVIGASYON HİYERARŞİSİ

### Üst Navigasyon (Desktop)

```
[LOGO]                           [NAV LİNKS]                          [SAĞ ARAÇLAR]
                                                                     
KOCATÜRK    Kurumsal · Kampüsler · Eğitim · Başarılarımız ·    [Tel] [TR/EN] [e-Kocatürk]
1998        Kampüs Yaşamı · ✦ Havacılık Lisesi · İletişim
```

### Nav Link Sırası ve Mantığı

| # | Link | Neden Bu Sırada |
|---|---|---|
| 1 | **Kurumsal** | Yeni veliye "kim olduğumuzu öğren" diyor |
| 2 | **Kampüsler** | İkinci en kritik soru: "Bana yakın mı?" |
| 3 | **Eğitim** | Üçüncü kritik soru: "Çocuğum ne öğrenecek?" |
| 4 | **Başarılarımız** | Sosyal kanıt — neden bizi tercih etsin |
| 5 | **Kampüs Yaşamı** | Yumuşak konu — sınıf dışı yaşam |
| 6 | **✦ Havacılık Lisesi** | Stratejik vurgu — bölgenin tek havacılık lisesi, özel işaretli |
| 7 | **İletişim** | Standart son link |

**Not:** "Haberler" üst nav'da değil. Footer'da ve "Kampüs Yaşamı" altında. Üst nav 7 link ile sınırlandı (genelde 5-7 ideal).

### Mega Menu Pattern

`Kurumsal`, `Kampüsler`, `Eğitim` üzerine hover olduğunda aşağıdan açılan tam genişlik mega menü.

#### Kurumsal Mega Menu
```
┌─────────────────────────────────────────────────────────────┐
│ HAKKIMIZDA                  │  YÖNETİM                       │
│ · Tarihçemiz                │  · Yönetim Kadrosu             │
│ · Vizyon & Misyon           │  · Akreditasyonlar             │
│ · Eğitim Felsefemiz         │  · Sosyal Sorumluluk           │
│ · Sayılarla Kocatürk        │                                │
│                             │                                │
│  [Foto: kampüs hero]                                         │
└─────────────────────────────────────────────────────────────┘
```

#### Kampüsler Mega Menu
```
┌─────────────────────────────────────────────────────────────┐
│ MANİSA                      │  İZMİR                         │
│ ★ Turgutlu (Ana Kampüs)     │  ★ Gaziemir (2. Ana Kampüs)    │
│   — Anaokulu                │    — Anaokulu                  │
│   — İlkokul                 │    — İlkokul                   │
│   — Ortaokul                │    — Ortaokul                  │
│   — Anadolu Lisesi          │    — Anadolu Lisesi            │
│   — Fen Lisesi              │    — Fen Lisesi                │
│                             │    — ✈ Havacılık Lisesi         │
│                             │                                │
│                             │  · Karabağlar / Üçkuyular      │
│                             │  · Kemalpaşa                   │
│                             │  · Tire                        │
│                                                              │
│  [Tüm Kampüsler Haritası →]                                 │
└─────────────────────────────────────────────────────────────┘
```

#### Eğitim Mega Menu
```
┌─────────────────────────────────────────────────────────────┐
│ KADEMELER                   │  PROGRAMLARIMIZ                │
│ · Anaokulu (3-6 yaş)        │  · Tam Öğrenme Modeli          │
│ · İlkokul (6-10 yaş)        │  · Mind Kids                   │
│ · Ortaokul (10-14 yaş)      │  · STEM                        │
│ · Anadolu Lisesi            │  · Kocatürk WWAP               │
│ · Fen Lisesi                │  · Design Thinking             │
│ · ✈ Havacılık Lisesi        │  · 🤖 Robotik & Kodlama        │
│                             │                                │
│ ÖZEL ALANLAR                                                 │
│ · Yabancı Dil Eğitimi  · PDR  · 🌍 Yurtdışı Eğitim          │
└─────────────────────────────────────────────────────────────┘
```

### Mobil Navigasyon

- Hamburger menü → tam ekran overlay
- Üstte arama
- Accordion ile her ana kategori expand olur
- Alt sabit bar: [Telefon] [e-Kocatürk] [Ön Kayıt]
- Arka planda subtle blur

### Sticky Header Davranışı

- Default: Tam görünür
- Scroll down (200px+): Sticky kalır, alt border belirir, padding küçülür
- Scroll up: Görünür kalır
- Mobil scroll down: Gizlenir, scroll up: belirir

---

## 3. URL YAPISI KURALLARI

### Genel Kurallar
- Tüm URL'ler **küçük harf**
- Türkçe karakterler **dönüştürülür** (`ç→c, ğ→g, ı→i, ö→o, ş→s, ü→u`)
- Boşluklar `-` ile değiştirilir
- Anlamlı, insancıl URL'ler (slug-based)
- Gereksiz parametre yok (`?id=123&cat=2` yasak)

### URL Pattern Örnekleri

| Sayfa | URL |
|---|---|
| Ana sayfa | `/` |
| Hakkımızda | `/kurumsal/hakkimizda` |
| Manisa Turgutlu Kampüsü | `/kampusler/turgutlu` |
| Gaziemir Havacılık Lisesi | `/kampusler/gaziemir/havacilik-lisesi` |
| Eğitim - Ortaokul | `/egitim/ortaokul` |
| Robotik & Kodlama | `/egitim/programlar/robotik-kodlama` |
| Tek haber | `/haberler/roma-robotik-dunya-1ligi` |
| Kategoriye göre haber | `/haberler/kategori/uluslararasi` |
| Ön kayıt | `/kayit/on-kayit` |

### Çokdilli URL

```
TR (default): /kurumsal/hakkimizda
EN:           /en/about-us
```

EN subdirectory yapısı (subdomain değil), Next.js i18n routing.

---

## 4. BREADCRUMB STRATEJİSİ

**Tüm alt sayfalarda** breadcrumb gösterilir. Ana sayfada gösterilmez.

```
Ana Sayfa › Kampüsler › İzmir Gaziemir › Havacılık Lisesi
```

- Ayraç: `›` (chevron right)
- Font: Manrope, 12px, 600 weight, uppercase, 0.08em letter-spacing
- Color: `--color-ink-mute` (active link: `--color-ink`)
- Position: Section title'ın hemen üstünde, eyebrow ile karıştırılmaz

---

## 5. KAMPÜS HİYERARŞİSİ — ÖZEL DİKKAT

Kocatürk'te kampüs ilişkileri farklı. Düzgün modellenmesi gerek:

### Ana / Alt Kampüs Yapısı

```
Manisa Turgutlu — ANA KAMPÜS (1998 kuruluş)
├── Turgutlu İlkokulu
├── Turgutlu Ortaokulu
├── Turgutlu Anadolu Lisesi
└── Turgutlu Fen Lisesi

İzmir Gaziemir — 2. ANA KAMPÜS
├── Gaziemir Anaokulu (Merkez)
├── Gaziemir İlkokulu
├── Gaziemir Ortaokulu
├── Gaziemir Anadolu Lisesi
├── Gaziemir Fen Lisesi
└── ✈ Gaziemir Havacılık Lisesi

İzmir Karabağlar (Üçkuyular)
├── Üçkuyular İlkokulu
└── Üçkuyular Ortaokulu

İzmir Kemalpaşa
├── Kemalpaşa İlkokulu
├── Kemalpaşa Ortaokulu
├── Kemalpaşa Anadolu Lisesi
└── Kocatürk Sürücü Kursu

İzmir Tire
├── Tire İlkokulu
├── Tire Ortaokulu
├── Tire Anadolu Lisesi
└── Tire Fen Lisesi
```

### "Ana Kampüs" Rozeti

Manisa Turgutlu ve İzmir Gaziemir kampüs sayfalarında üstte özel rozet:

```html
<div class="campus-badge campus-badge-primary">
  ★ Ana Kampüs · 1998 Kuruluş
</div>
```

```html
<div class="campus-badge campus-badge-secondary">
  ★ 2. Ana Kampüs · Havacılık Lisesi
</div>
```

### Kampüs Sayfa URL Yapısı

İki seçenek değerlendirildi:

**Seçenek A:** `/kampusler/[ilce]` — tek sayfa, içinde tüm kademeler accordion
**Seçenek B:** `/kampusler/[ilce]/[kademe]` — her kademe için ayrı sayfa

**KARAR: Seçenek A** kullanılır (tek sayfa). Çünkü:
- 23 ayrı sayfa SEO için aşırı dağınık
- Veli "Turgutlu Kampüsü" diye arar, "Turgutlu İlkokulu" diye değil
- Sayfa içinde anchor link ile kademe geçişi yapılabilir

**İstisna:** Havacılık Lisesi kendi sayfası `/egitim/havacilik-lisesi` olur, çünkü hem Gaziemir'de hem de eğitim programı olarak ayrıca tanıtılması gerekir.

---

## 6. STRATEJİK SAYFA ÖNCELİKLENDİRMESİ

Tüm sayfalar eşit önemli değil. Kalite ve içerik yatırımı şu sıralamayla yapılır:

### Tier 1 — En kritik sayfalar (en yüksek yatırım)
1. **Ana Sayfa** (`/`)
2. **Manisa Turgutlu Ana Kampüs** (`/kampusler/turgutlu`)
3. **İzmir Gaziemir 2. Ana Kampüs** (`/kampusler/gaziemir`)
4. **Havacılık Lisesi** (`/egitim/havacilik-lisesi`) — bölgede tek, stratejik
5. **Robotik & Kodlama** (`/egitim/programlar/robotik-kodlama`) — Roma başarısı vitrin
6. **Yurtdışı Eğitim** (`/egitim/yurtdisi`) — Utkus tarafından öncelik belirtildi
7. **Başarılarımız** (`/basarilarimiz`) — sosyal kanıt

### Tier 2 — Önemli ama daha az yatırım
8. Hakkımızda
9. Tarihçemiz
10. Diğer kampüsler (Üçkuyular, Kemalpaşa, Tire)
11. Eğitim kademe sayfaları (Anaokulu, İlkokul, vs.)
12. Eğitim programları (STEM, WWAP, vs.)
13. Ön Kayıt formu

### Tier 3 — Standart
14. Kampüs Yaşamı (kulüpler)
15. Haberler (template + içerik akışı)
16. Yönetim Kadrosu
17. Kariyer
18. SSS, KVKK, çerez

### Tier 4 — Geri planda
19. İngilizce versiyon (Faz 7)
20. Sosyal Sorumluluk
21. Akreditasyonlar

---

## 7. CROSS-LINKING STRATEJİSİ

Sayfalar birbirine **mantıklı şekilde** bağlanmalı:

- **Ana sayfa hero** → Ön Kayıt + Kampüs Ziyareti
- **Ana sayfa Sütun 1 (KÖK)** → Tarihçemiz
- **Ana sayfa Sütun 2 (ÖLÇEK)** → Kampüsler haritası
- **Ana sayfa Sütun 3 (UFUK)** → Yurtdışı Eğitim
- **Featured Story (Roma)** → Robotik & Kodlama sayfası
- **Kampüs sayfası** → İlgili eğitim kademeleri
- **Kademe sayfası** → İlgili kampüsler (hangi kampüslerde mevcut)
- **Havacılık Lisesi** → Gaziemir Kampüs sayfası
- **Başarılar** → Robotik & Kodlama (kategori filtre)

---

## 8. 404 VE HATA SAYFALARI

### 404 Sayfası (`/[...slug]`)

```
[Antrasit zemin]

  04
  Aradığınız sayfa...
  bulunamadı.

  Belki şunları arıyordunuz:
  · Kampüslerimiz
  · Eğitim Programları
  · Ön Kayıt

  [Ana Sayfaya Dön →]
```

Brand tonunda, korkutucu değil, yardımcı.

### 500 Hata Sayfası

Benzer template, "Bir şeyler ters gitti" başlığıyla.

---

## 9. SİTE HARİTASI XML

`/sitemap.xml` Next.js auto-generate edilir. Tüm publicly accessible sayfalar dahil edilir. Aşağıdakiler dahil edilmez:
- `/kayit/on-kayit/tesekkurler` (form sonrası)
- `/admin/*`
- `/api/*`

`robots.txt`:
```
User-agent: *
Allow: /
Disallow: /api/
Disallow: /admin/

Sitemap: https://kocaturk.k12.tr/sitemap.xml
```

---

**Sıradaki dosya:** `04-CONTENT-STRATEGY.md` — Bu sayfaların içine ne yazılacağı, hangi tonla, hangi kelimelerle.
