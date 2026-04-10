# 07 · PAGE SPECIFICATIONS

> Her sayfanın **bölüm bölüm** ne içereceği. Bu dosya Claude Code'un her sayfa için referans noktasıdır. Yeni sayfa eklenmeden önce bu dosya güncellenir.

---

## TIER 1 · KRİTİK SAYFALAR

---

## 1. ANA SAYFA (`/`)

> Ana sayfa = sitenin yüzü. Aday velinin ilk 30 saniyede karar vermesini sağlamak. **Bahçeşehir Koleji'ne kıyasla daha iyi olmak zorunda.** Premium hissi en yoğun bu sayfada hissedilmeli.

### Bölüm 1 · Hero (`<Hero variant="default">`)

```
[ANTRASIT ZEMIN, dark glow]

  Eyebrow: "EGE'NIN EĞITIM OMURGASI"
  Folio:   "K · 1998 — 2026"

  H1 (display 2xl, 4 satır):
  Köklerimiz
  burada,
  ufkumuz
  dünyada.
  
  ↑ "burada" ve "dünyada" turuncu vurgu

  Lead (xl body):
  1998'de Manisa Turgutlu'da, doksan öğrenciyle başlayan
  bu yolculuk, bugün dört ilçede yirmi üç kampüse ve
  dört bini aşkın öğrenciye ulaştı.

  [Ön Kayıt Başvurusu →]  [Kampüs Ziyareti Planla]

  ── HERO STATS ROW ─────────────────────
  4.015 ÖĞRENCİ │ 23 KAMPÜS │ 246 ÖĞRETMEN │ 28 YIL
  90 öğrenciden 4.000+'a · Çeyrek asırlık büyüme
```

**Sağ taraf:** PhotoSlot (`16:10`, ph_001, HERO category)
- Açıklama: "Manisa Turgutlu Ana Kampüs drone shot — sabah ışığı, geniş açı, bina cephesi + bahçe"

**Davranışlar:**
- Hero title kelime kelime stagger reveal (load sırasında)
- Stats counter viewport'a girince animasyon
- CTA hover'da arrow translateX

**Mobil:**
- Photo hero altına geçer
- Stats 2×2 grid
- Title 3xl size'a düşer (8vw clamp)

---

### Bölüm 2 · Manifesto (`<Manifesto>`)

```
[LIGHT BG]

  Eyebrow: "Kim Olduğumuz"

  Asimetrik tipografik quote (display lg):

      Doksan öğrenciyle bir aile
            bir okul açtı.
                 1998'de.
              Manisa Turgutlu'da.
                                
      Bugün dört ilçede
        yirmi üç kampüsüz.
            Ama hâlâ
              aynı aileyiz.

  ↑ "doksan", "aynı aileyiz" turuncu vurgu

  ── PILLARS ─────────────────────
  
  [01]              [02]              [03]
  KÖK               ÖLÇEK             UFUK
  Yarım asırlık     Anaokulundan      Roma'dan
  buralılık         Havacılık         İngiltere'ye
                    Lisesi'ne         uzanan ufuk
  
  [body]            [body]            [body]
  
  Tarihçemiz →      Kampüsler →       Yurtdışı →
```

**Yapı:**
- Manifesto quote indent variations ile (asimetri)
- 3 pillar 1.05fr 1fr 1fr grid (sol biraz daha geniş)
- Her pillar reveal stagger (delay 1, 2, 3)

---

### Bölüm 3 · Numbers Banner (`<NumbersBanner variant="dark">`)

```
[ANTRASIT BG]

  Eyebrow: "Sayılarla Kocatürk"

  Title (display md):
  Çeyrek asırda
  Ege'nin omurgası.

  ── NUMBER GRID 4×2 ─────────────
  
  4.015          23             246            28
  ÖĞRENCİ        KAMPÜS          ÖĞRETMEN       YIL
  Aktif kayıt    4 ilçede        Çeyrek asır    1998-2026
  
  6              %85            7              4
  KADEME         BAĞLILIK        PROGRAM        İLÇE
  Anaokulu→Lise  Yıllık devam    Pedagoji       Ege bölgesi
```

**Tüm sayılar `<NumberCounter>` ile animasyonlu.**

---

### Bölüm 4 · Featured Story · Roma Robotik (`<FeaturedStory variant="light">`)

```
[LIGHT BG, sıcak off-white]

  Sol kolon:
  
  Tag:     ULUSLARARASI ŞAMPİYONLUK
  Counter: 01 / 12 BAŞARI
  
  Title (display lg):
  Roma'da
  dünya zirvesi.
  
  ↑ "dünya zirvesi" turuncu vurgu
  
  Body (xl body):
  Kasım 2024'te Roma'da düzenlenen Fibonacci
  International Robot Olympiad'da öğrencilerimiz
  Arda ve Alp Gürbüz, dört ayrı kategoride dünya
  çapında dereceler kazandı.
  
  ── MEDAL GRID 2×2 ──────
  🥇 Lego Sumo 1 kg          DÜNYA 1.
  🥇 Yapay Zekâ Şarkı        DÜNYA 1.
  🥈 Otonom Araba            DÜNYA 2.
  🥉 Çizgi İzleyen           DÜNYA 4.
  
  [Tüm Başarıları Gör →]
  
  Meta: ROMA, İTALYA · KASIM 2024


  Sağ kolon:
  
  PhotoSlot (4:5 portrait, ph_002, FEATURED)
  "Arda ve Alp robot çalışırken — atölye veya yarışma anı"
```

**Layout:** Asimetrik 1.05fr / 1fr split (sol içerik biraz daha geniş)

---

### Bölüm 5 · Stage Selector (`<StageSelector>`)

```
[LIGHT BG]

  Eyebrow: "Çocuğunuza Uygun Yol"
  
  Title (display md):
  Hangi yaş, hangi okul?
  
  ── 4-CARD GRID ────────────────────────
  
  ┌─────────┐ ┌─────────┐ ┌─────────┐ ┌──────────┐
  │ [foto]  │ │ [foto]  │ │ [foto]  │ │ [foto]   │
  │ 3-6 YAŞ │ │ 6-10    │ │ 10-14   │ │ 14-18    │
  │ Anaokul │ │ İlkokul │ │ Ortaokl │ │ ✈ Lise   │
  │         │ │         │ │         │ │ Havacılık│
  │ desc    │ │ desc    │ │ desc    │ │ desc     │
  └─────────┘ └─────────┘ └─────────┘ └──────────┘
```

**Son kart (Lise) "featured" — Havacılık vurgusuyla, hafif turuncu border.**

---

### Bölüm 6 · Programs Grid (`<ProgramsGrid>`)

```
[LIGHT BG]

  Eyebrow: "Pedagoji Programlarımız"
  
  Title (display md):
  Markalanmış öğrenme modeli.
  
  ── 6-CARD GRID 3×2 ─────────────────
  
  ┌────────┐ ┌────────┐ ┌────────┐
  │ icon   │ │ icon   │ │ icon   │
  │ Mind   │ │ STEM   │ │ Tam    │
  │ Kids   │ │        │ │ Öğrenme│
  └────────┘ └────────┘ └────────┘
  
  ┌────────┐ ┌────────┐ ┌────────┐
  │ icon   │ │ 🤖     │ │ icon   │
  │ WWAP   │ │ Robotik│ │ Design │
  │        │ │ ★ ÖZEL │ │ Think. │
  └────────┘ └────────┘ └────────┘
```

**Robotik & Kodlama kartı featured (turuncu border + ★).**

---

### Bölüm 7 · International Strip (`<InternationalStrip variant="dark">`)

```
[ANTRASIT BG]

  Sol kolon (1fr):
  
  Eyebrow: "Yurtdışı Eğitim"
  
  Title (display md):
  Ege'de okuyup
  dünyada düşünen
  bir nesil.
  
  ↑ "dünyada" peach vurgu
  
  Body:
  İngiltere Yaz Okulu, eTwinning Avrupa proje
  ortaklıkları, uluslararası robot olimpiyatları —
  Kocatürk öğrencisi sınıfını dünyada geziyor.
  
  [Yurtdışı Eğitim →]


  Sağ kolon (1.2fr) — 6 ülke/program kart:
  
  ┌──────┐ ┌──────┐ ┌──────┐
  │ 🇬🇧   │ │ 🇮🇹   │ │ 🇪🇸   │
  │ İNG  │ │ İTA  │ │ İSP  │
  │ Yaz  │ │ eTwin│ │ eTwin│
  │ Okulu│ │      │ │      │
  └──────┘ └──────┘ └──────┘
  
  ┌──────┐ ┌──────┐ ┌──────┐
  │ 🇬🇷   │ │ 🇮🇹   │ │ 🇪🇺   │
  │ YUN  │ │ Roma │ │ Code │
  │ eTwin│ │ Robot│ │ Week │
  └──────┘ └──────┘ └──────┘
```

---

### Bölüm 8 · Campus Map (`<CampusMap>`)

```
[LIGHT BG]

  Eyebrow: "23 Kampüs · 4 İlçe"
  
  Title (display md):
  Ege'nin neresindesiniz,
  oradayız.
  
  ── SPLIT ──────────────────
  
  Sol (1.2fr):                Sağ (1fr):
  ┌─────────────────────┐    ┌─────────────────┐
  │                     │    │ ★ TURGUTLU      │
  │   [Mapbox harita]   │    │ Manisa · Ana    │
  │   23 marker         │    ├─────────────────┤
  │   Ege bölgesi       │    │ ★ GAZIEMIR      │
  │                     │    │ İzmir · 2.Ana   │
  │                     │    ├─────────────────┤
  │                     │    │ ÜÇKUYULAR       │
  │                     │    │ İzmir · 2 kade. │
  │                     │    ├─────────────────┤
  │                     │    │ KEMALPAŞA       │
  │                     │    │ İzmir · 4 kade. │
  │                     │    ├─────────────────┤
  │                     │    │ TİRE            │
  │                     │    │ İzmir · 4 kade. │
  └─────────────────────┘    └─────────────────┘
```

---

### Bölüm 9 · Testimonials (`<Testimonials>`)

3 veli yorumu (placeholder + ContentNote, gerçek içerik gelene kadar).

---

### Bölüm 10 · News Grid (`<NewsGrid>`)

```
  Eyebrow: "Son Haberler"
  Title:   Kocatürk'te bu hafta.
  
  ── HYBRID GRID ─────────────────
  
  ┌─────────────────┐  ┌─────────┐
  │                 │  │ news    │
  │  FEATURED       │  │ 2       │
  │  news 1         │  ├─────────┤
  │  (büyük)        │  │ news 3  │
  │                 │  ├─────────┤
  └─────────────────┘  │ news 4  │
                       └─────────┘
  
  [Tüm Haberler →]
```

---

### Bölüm 11 · CTA Band (`<CtaBand variant="dark">`)

```
[ANTRASIT BG, derin glow]

  Centered:
  
  Eyebrow: "Sıradaki Adım"
  
  Title (display lg):
  Çocuğunuzun
  yarınını birlikte
  tasarlayalım.
  
  Description:
  Ön kayıt formunu doldurun, size en yakın kampüsten
  bir günlük ziyaret randevusu ayarlayalım.
  
  [Ön Kayıt Başvurusu →] [Kampüs Ziyareti Planla]
```

---

### Footer (`<SiteFooter>`)

Tüm sayfalarda. Detay: Bölüm sonu.

---

## 2. KAMPÜS SAYFASI ŞABLONU (`/kampusler/[slug]`)

> Tek dosya, dynamic route. Sanity'den çekilen kampüs verisi ile render. Manisa Turgutlu ve Gaziemir için özel "ana kampüs" rozetleri.

### Bölüm 1 · Campus Hero

```
[ANTRASIT BG]

  Breadcrumb: Ana Sayfa › Kampüsler › Manisa Turgutlu
  
  Eyebrow: "MANİSA · TURGUTLU"
  
  Badge: ★ ANA KAMPÜS · 1998 KURULUŞ
  
  H1 (display xl):
  Manisa Turgutlu
  Kampüsü.
  
  Lead:
  1998'de doksan öğrenciyle açılan ilk kampüsümüz.
  Bugün anaokulundan Fen Lisesi'ne altı kademede
  [X] öğrenciye ev sahipliği yapıyor.
  
  Quick Info Grid:
  ┌─────────┬─────────┬─────────┬─────────┐
  │ 6       │ X       │ X       │ Turgutlu│
  │ KADEME  │ ÖĞRENCİ │ ÖĞRTM   │ KONUM   │
  └─────────┴─────────┴─────────┴─────────┘
```

**Sağda:** Hero PhotoSlot (kampüs hava çekimi)

---

### Bölüm 2 · Hikâye

Kampüse özel kuruluş hikâyesi (her kampüs için Sanity'de 2-3 paragraf).

---

### Bölüm 3 · Kademe Sekmeleri / Accordion

```
  Title: Bu Kampüsteki Kademeler
  
  ┌──────────────────────────────────┐
  │ ▼ Anaokulu (3-6 yaş)             │
  │   Müfredat özeti, sınıf sayısı,  │
  │   öğretmen sayısı, link →        │
  ├──────────────────────────────────┤
  │ ▼ İlkokul (6-10 yaş)             │
  ├──────────────────────────────────┤
  │ ▼ Ortaokul (10-14 yaş)           │
  ├──────────────────────────────────┤
  │ ▼ Anadolu Lisesi                 │
  ├──────────────────────────────────┤
  │ ▼ Fen Lisesi                     │
  └──────────────────────────────────┘
```

Gaziemir için: Bu listenin altında ek bir kart `✈ Havacılık Lisesi` (linkli, özel sayfaya).

---

### Bölüm 4 · Kampüs Galerisi

`PhotoSlot` grid (4-6 photo slot, gerçek görseller gelince değişir).

---

### Bölüm 5 · Servis Güzergâhı / Konum

- Sol: Mapbox harita, kampüs marker
- Sağ: Adres, telefon, e-posta, yönetici
- Alt: "Servis güzergâhları" link

---

### Bölüm 6 · İletişim Yönlendirme + CTA

`<CtaBand>` — "Bu kampüste eğitim almak ister misiniz?"

---

## 3. HAVACILIK LİSESİ (`/egitim/havacilik-lisesi`)

> Stratejik vurgu sayfası — bölgenin tek havacılık lisesi. Premium yatırım yapılır.

### Bölüm 1 · Hero

```
[ANTRASIT BG, derin glow]

  Eyebrow: "✈ EĞİTİM · HAVACILIK"
  
  H1:
  Bölgenin tek
  Havacılık Lisesi.
  
  ↑ "tek" turuncu vurgu
  
  Lead:
  Türkiye'nin ulusal havacılık hedefleriyle uyumlu,
  TÜRKKUŞU ve THY ile bağlantılı müfredat. Pilot,
  havacılık mühendisi, kabin amiri olmak isteyen
  öğrencilere üniversiteye en doğrudan yol.
  
  [Tanıtım Kataloğu] [Kampüs Ziyareti]
  
  Sağda: Photo (havacılık simulator veya öğrenci uçak modelinde)
```

### Bölüm 2 · Müfredat Sütunları

3-4 sütun:
- Akademik Müfredat (matematik, fizik ağırlıklı)
- Havacılık Dersleri (özel)
- Pratik Eğitim (simulator, atölye)
- İngilizce (havacılık İngilizcesi)

### Bölüm 3 · Mezun Yolları

Mezun olunca hangi üniversiteler / hangi meslekler?
- Pilot
- Hava Trafik Kontrol
- Havacılık Mühendisi
- Kabin Amiri
- THY MTP

### Bölüm 4 · Tesisler

Simulator, model uçaklar, atölye — fotoğraflar.

### Bölüm 5 · Başvuru

Bursluluk, kontenjan, başvuru adımları.

---

## 4. ROBOTİK & KODLAMA (`/egitim/programlar/robotik-kodlama`)

> Roma şampiyonluğu vitrin. Yurtdışı vurgu burada.

### Bölüm 1 · Hero

```
[ANTRASIT BG]

  Eyebrow: "🤖 PROGRAM · STEM"
  
  H1:
  Kodlamadan
  dünya zirvesine.
  
  ↑ "dünya zirvesine" turuncu
  
  Lead:
  Anaokulundan liseye uzanan robotik ve kodlama
  müfredatımız, öğrencilerimizi Roma'da Dünya 1.liği
  ile tanıştıran sistematik bir yaklaşımdır.
```

### Bölüm 2 · Roma Showcase (Featured Story tekrar)

Roma başarısı tam detayıyla.

### Bölüm 3 · Kademe Yaklaşımı

- Anaokulu: oyuncak robotlar (Bee-Bot, Cubetto)
- İlkokul: Lego WeDo, Scratch Jr
- Ortaokul: Arduino, Python, Lego EV3
- Lise: Yapay zekâ, Python ileri, robotik takım

### Bölüm 4 · Atölye & Tesisler

PhotoSlot grid — robotik atölye, 3D yazıcı, vs.

### Bölüm 5 · Codeweek 4 All Sertifikası

Codeweek için ayrı bölüm.

### Bölüm 6 · Diğer Başarılar Listesi

Roma dışında robotik başarılar varsa.

---

## 5. YURTDIŞI EĞİTİM (`/egitim/yurtdisi`)

### Bölüm 1 · Hero

```
[ANTRASIT BG]

  Eyebrow: "🌍 EĞİTİM · ULUSLARARASI"
  
  H1:
  Ege'de okuyup
  dünyada düşünen
  bir nesil.
  
  Lead:
  İngiltere yaz okulundan eTwinning Avrupa
  ortaklıklarına, Kocatürk öğrencisinin sınıfı
  yalnızca dört duvardan ibaret değildir.
```

### Bölüm 2 · İngiltere Yaz Okulu

Detaylı: hangi şehir, hangi yaş grubu, kaç hafta, müfredat, fotoğraflar.

### Bölüm 3 · eTwinning Avrupa Ortaklıkları

4 ülke kart:
- 🇮🇹 İtalya: ortak okul + projeler
- 🇪🇸 İspanya: ortak okul + projeler
- 🇬🇷 Yunanistan: ortak okul + projeler
- (gelecek ortaklıklar için TBA kart)

### Bölüm 4 · Uluslararası Yarışmalar

Roma robotik, diğer yarışmalar liste/kart.

### Bölüm 5 · Yabancı Dil Eğitimi

İngilizce müfredat, native speaker'lar, sertifikalar.

### Bölüm 6 · Gelecek Planlanan

`<ContentNote>` — gelecek programlar için placeholder.

---

## 6. BAŞARILAR ARŞİV (`/basarilarimiz`)

### Bölüm 1 · Hero

```
[ANTRASIT BG]

  Eyebrow: "BAŞARILARIMIZ"
  
  H1:
  Sayılarla
  konuşan başarı.
  
  Lead:
  Roma'dan İstanbul'a, sınıftan kürsüye —
  öğrencilerimizin son [X] yılda kazandığı
  uluslararası ve ulusal başarıların arşivi.
```

### Bölüm 2 · Stat Strip

```
12         8         3          47
ULUSLAR.   TÜRKİYE   ÖĞRENCİ   SPORTİF
ŞAMPIYON.  1.LİĞİ    KAR.PROJ.  DERECE
```

### Bölüm 3 · Filtreli Arşiv

Kategori filtre:
- [Tümü] [Akademik] [Uluslararası] [Sportif] [Sanatsal]

`<AchievementCard>` grid (4-6 sütun, masonry).

---

## 7. HAKKIMIZDA / TARİHÇE (`/kurumsal/hakkimizda`)

### Hero
"Bir aile hikâyesi"

### Tarihçe Timeline
Dikey timeline:
- 1998 — Manisa Turgutlu, 90 öğrenci
- 200X — İlk genişleme
- 200X — İzmir'e ilk adım
- ...
- 2024 — Roma şampiyonluğu
- 2026 — 23 kampüs, 4.000+ öğrenci

### Kurucu Aile Bölümü
Aile fotoğrafı + hikâye (Sanity'den).

### Vizyon & Misyon

### Yönetim Kadrosu Önizleme + Link

---

## TIER 2 · STANDART SAYFALAR

### 8. Eğitim Kademe Sayfaları (Anaokulu, İlkokul, Ortaokul, Anadolu Lisesi, Fen Lisesi)

**Şablon:**
- Hero (kademe adı + yaş aralığı)
- Müfredat özeti
- Bir günlük yaşam
- Hangi kampüslerde mevcut (CampusCard grid)
- Kazanılan değerler
- CTA: Ön Kayıt

### 9. Program Sayfaları (STEM, WWAP, Mind Kids, Tam Öğrenme, Design Thinking)

**Şablon:**
- Hero (program adı + 1-cümle özet)
- Pedagoji açıklaması
- Hangi kademede uygulanır
- Örnek aktiviteler / fotoğraflar
- Sonuçlar / çıktılar

### 10. Yönetim Kadrosu (`/kurumsal/yonetim`)

Kişi kartları grid, her birine tıklanınca modal/sayfa.

### 11. Kampüs Yaşamı (`/kampus-yasami`)

Kulüpler, sanat, spor — kart grid.

### 12. Haberler Liste (`/haberler`)

`<NewsGrid>` + filtre + pagination.

### 13. Tek Haber (`/haberler/[slug]`)

Article layout — başlık, meta, body, related.

### 14. İletişim (`/iletisim`)

Genel müdürlük + kampüs liste + form.

### 15. Ön Kayıt (`/kayit/on-kayit`)

Form (RHF + Zod):
- Veli adı, telefon, email
- Çocuk adı, yaş, cinsiyet
- İlgili kademe, kampüs
- Mesaj (opsiyonel)
- KVKK onayı
- → Resend ile email submit

### 16. Bursluluk (`/kayit/bursluluk`)

Bursluluk sınavı bilgileri, takvim, başvuru formu.

### 17. Ücretler (`/kayit/ucretler`)

`<ContentNote>` — gerçek rakamlar Utkus tarafından paylaşılmadan kalır.

### 18. Kariyer (`/kariyer`)

Açık pozisyonlar liste + başvuru formu.

### 19. SSS (`/kayit/sss`)

Accordion liste.

---

## TIER 4 · STANDART INFO SAYFALARI

### 20. KVKK / Çerez Politikası

Footer'dan erişim, standart legal sayfa.

### 21. 404 / 500

`02-DESIGN-SYSTEM.md` ve `03-INFORMATION-ARCHITECTURE.md` Bölüm 8'de belirtildi.

---

## SAYFA KALİTE KONTROL

Her sayfa için:
- [ ] Üç sütundan en az biri net şekilde işleniyor mu?
- [ ] Hero'da vurgulu başlık + lead + CTA var mı?
- [ ] Reveal animasyonları doğru çalışıyor mu?
- [ ] Mobile'da hierarchy korunuyor mu?
- [ ] Breadcrumb var mı (ana sayfa hariç)?
- [ ] CTA Band var mı (sayfa sonu)?
- [ ] Lighthouse 95+ mı?
- [ ] `<ContentNote>` ile placeholder kullanımı dürüst mü?

---

**Sıradaki dosya:** `08-CONTENT-INVENTORY.md` — Müşteriden gelmesi gereken gerçek içerik listesi.
