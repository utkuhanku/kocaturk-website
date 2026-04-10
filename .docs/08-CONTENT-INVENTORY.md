# 08 · CONTENT INVENTORY

> Sitedeki **gerçek içerik** bu listeden gelir. Hiçbir bilgi uydurulmaz, hiçbir görsel stok foto olmaz, hiçbir rakam tahmin edilmez. Bu liste **Utkus'un veya iletişim ekibinin** hazırlaması gereken malzeme listesidir.

---

## 1. NASIL ÇALIŞIR?

### Sembol Sistemi

| Sembol | Anlam |
|---|---|
| ✅ | Onaylandı, eklendi |
| ⏳ | Bekleniyor |
| ❓ | Kaynağı belirsiz, Utkus'a soru |
| 🔴 | Kritik — bu olmadan canlıya çıkamayız |
| 🟡 | Önemli ama lansman engeli değil |
| 🟢 | Nice to have |

### Yerleşim Süreci

1. Bu listeden bir madde geldiğinde → Sanity'ye girilir
2. Sanity'ye girilince → ilgili sayfada `<ContentNote>` yerini alır
3. Tüm 🔴 bitince → lansman go-decision verilir

---

## 2. KURUMSAL TEMELLER 🔴

### 2.1 Logo & Marka Varlıkları
- ⏳ 🔴 **Yüksek çözünürlüklü logo** — vektör (`.svg` veya `.ai`)
  - Light bg versiyon (renkli)
  - Dark bg versiyon (beyaz)
  - Tek monogram "K" varyasyonu
- ⏳ 🔴 **Marka kılavuzu** (varsa) — renk değerleri, font kullanımı
- ⏳ 🟡 **Kampüs özel logoları** (her kampüsün ayrı logosu varsa)
- ⏳ 🟢 **Sosyal medya avatar/banner** boyutları

### 2.2 Renk & Tipografi Onayı
- ⏳ 🔴 **Resmi kurumsal renk** — Pantone/HEX değerleri
  - *Şu an varsayım:* `#F2581C` (parlak turuncu) + `#1F2228` (antrasit)
  - *Doğrulama gerek:* Bu değerler resmi mi?
- ⏳ 🟡 **Resmi font** (varsa) — kullanılıyorsa marka kılavuzunda

### 2.3 Resmi Bilgiler
- ⏳ 🔴 **Resmi kurum adı** (Kocatürk Okulları mı, Kocatürk Eğitim Kurumları mı, Kocatürk Koleji mi?)
- ⏳ 🔴 **Vergi numarası, ticaret sicil no, MERSIS** (footer için)
- ⏳ 🔴 **MEB onayları**, kuruluş izin tarihleri
- ⏳ 🟡 **Akreditasyon belgeleri** (varsa: COBIS, CIS, ECIS, MEB özel belgeler)
- ⏳ 🟡 **Üyelikler** (özel okullar derneği, vs.)

---

## 3. SAYILAR & DOĞRULAMA 🔴

Sayfada kullanacağımız her rakam **doğrulanmak zorunda**. Aşağıdaki rakamlar Utkus'un onayını bekliyor:

### 3.1 Genel İstatistikler
- ⏳ 🔴 **Toplam öğrenci sayısı** — varsayım: 4.015 (2024-2025 verisi)
  - Kademe dağılımı: anaokulu / ilkokul / ortaokul / lise
- ⏳ 🔴 **Toplam öğretmen sayısı** — varsayım: 246
- ⏳ 🔴 **Toplam kampüs sayısı** — varsayım: 23
- ⏳ 🔴 **İlçe dağılımı** — varsayım: 4 ilçe (Gaziemir, Karabağlar, Kemalpaşa, Tire) + Manisa Turgutlu
- ⏳ 🔴 **Kuruluş yılı** — onaylandı: 1998
- ⏳ 🔴 **Kuruluş yeri** — onaylandı: Manisa Turgutlu
- ⏳ 🔴 **Başlangıç öğrenci sayısı** — onaylandı: 90

### 3.2 Akademik Performans
- ⏳ 🔴 **LGS sonuçları** (son 3 yıl) — başarı oranı, yüksek puan dilimi
- ⏳ 🔴 **YKS sonuçları** (son 3 yıl) — yerleştirme oranı, üniversiteye giriş oranı
- ⏳ 🔴 **Üniversite yerleştirme listesi** (top üniversiteler — Boğaziçi, ODTÜ, İTÜ, Hacettepe, vs. ve uluslararası)
- ⏳ 🟡 **Bursluluk yerleştirme oranı**

### 3.3 Devamlılık & Bağlılık
- ⏳ 🟡 **Yıllık devam oranı** (kayıt yenileme yüzdesi)
- ⏳ 🟢 **Kardeş kayıt oranı** (aileden ikinci/üçüncü çocuk)

---

## 4. KAMPÜS BİLGİLERİ 🔴

Her kampüs için aşağıdaki bilgi paketi gerekli:

### 4.1 Kampüs Listesi (23 Kampüs)

> Aşağıdaki yapı her kampüs için tekrarlanır. Sanity'de `campus` schema olarak modellenir.

#### Manisa Turgutlu — Ana Kampüs ★
- ⏳ 🔴 **Resmi adı:** ?
- ⏳ 🔴 **Açılış yılı:** 1998
- ⏳ 🔴 **Adres + posta kodu:**
- ⏳ 🔴 **Telefon (sabit + GSM):**
- ⏳ 🔴 **E-posta:**
- ⏳ 🔴 **Müdür adı + pozisyon:**
- ⏳ 🔴 **Müdür yardımcıları:**
- ⏳ 🔴 **Kademeler:** Anaokulu, İlkokul, Ortaokul, Anadolu Lisesi, Fen Lisesi
- ⏳ 🔴 **Kampüs öğrenci sayısı:**
- ⏳ 🔴 **Kampüs öğretmen sayısı:**
- ⏳ 🔴 **Kampüs alanı (m²):**
- ⏳ 🔴 **Bina sayısı:**
- ⏳ 🟡 **Kampüs özel hikâyesi** (2-3 paragraf — bu kampüsü diğerlerinden ne ayırıyor)
- ⏳ 🟡 **Tesisler listesi** (spor salonu, kütüphane, laboratuvarlar, atölyeler, vs.)
- ⏳ 🟡 **Servis güzergâhları** (haritada gösterilebilir)

#### İzmir Gaziemir — 2. Ana Kampüs ★
*[aynı yapı]*
- + ⏳ 🔴 **Havacılık Lisesi spesifik bilgileri**

#### İzmir Karabağlar / Üçkuyular
*[aynı yapı]*

#### İzmir Kemalpaşa
*[aynı yapı]*

#### İzmir Tire
*[aynı yapı]*

> **NOT:** "23 kampüs" rakamı doğruysa, yukarıdaki 5 ana lokasyon altında **her kademe için ayrı kampüs** sayılıyor olabilir. Doğrulama: Utkus, lütfen "23 kampüs"ün anlamını netleştir — bunlar fiziksel ayrı binalar mı, yoksa kademeler mi?

---

## 5. YÖNETİM KADROSU 🔴

### 5.1 Üst Yönetim
- ⏳ 🔴 **Yönetim Kurulu Başkanı** — isim, fotoğraf, kısa bio (50-100 kelime), 1 alıntı
- ⏳ 🔴 **Genel Müdür** — aynı format
- ⏳ 🔴 **Eğitim Genel Koordinatörü** — aynı format
- ⏳ 🔴 **Diğer üst yönetim** (CFO, İK, Kurumsal İletişim, vs.)

### 5.2 Akademik Liderlik
- ⏳ 🟡 **Kademe koordinatörleri** (Anaokulu, İlkokul, Ortaokul, Lise koordinatörleri)
- ⏳ 🟡 **PDR Koordinatörü**
- ⏳ 🟡 **Yabancı Dil Koordinatörü**

### 5.3 Kampüs Yöneticileri
- ⏳ 🔴 **Her kampüsün müdürü** — isim, fotoğraf, kısa bio, e-posta

### Format Notu
Her kişi için:
```
- İsim Soyisim
- Pozisyon
- Profesyonel fotoğraf (1:1 portrait, neutral bg, 1000×1000 px min)
- 50-100 kelime bio (Türkçe)
- 1 alıntı (opsiyonel ama güçlü)
- LinkedIn URL (opsiyonel)
- E-posta (opsiyonel — yayınlanacak mı?)
```

---

## 6. TARİHÇE & KURUCU AİLE 🟡

### 6.1 Milestone Listesi
- ⏳ 🔴 **1998:** Kuruluş, Manisa Turgutlu, 90 öğrenci, 1 bina
- ⏳ ❓ **1999-2005:** Önemli olaylar (ilk mezun, kademe genişlemesi, vs.)
- ⏳ ❓ **İzmir'e ilk geçiş yılı**
- ⏳ ❓ **Havacılık Lisesi açılış yılı**
- ⏳ ❓ **Diğer kritik tarihler** (akreditasyon, ilk uluslararası başarı, vs.)
- ⏳ 🔴 **2024:** Roma robotik şampiyonluğu
- ⏳ 🔴 **2026:** 23 kampüs, 4.000+ öğrenci, 246 öğretmen

### 6.2 Aile Hikâyesi
- ⏳ 🟡 **Kurucu aile bilgileri** — kim, ne zaman, nasıl başladı
- ⏳ 🟡 **Aile fotoğrafı** (varsa profesyonel — bugün ya da arşivden)
- ⏳ 🟡 **Kurucu(lar)dan alıntı** (kısa, etkileyici)
- ⏳ 🟢 **Eski fotoğraf arşivi** (1998'lerden — siyah beyaz olabilir, çok değerli)

---

## 7. EĞİTİM PROGRAMLARI BİLGİSİ 🟡

Her program için:

### 7.1 Genel Program Bilgisi (her biri için)
- ⏳ 🟡 **Program adı + slogan** (1 cümle)
- ⏳ 🟡 **Detaylı açıklama** (200-400 kelime)
- ⏳ 🟡 **Hangi yaş grubuna uygulanır**
- ⏳ 🟡 **Hangi kademelerde mevcut**
- ⏳ 🟡 **Pedagoji felsefesi** — bilimsel/akademik dayanak
- ⏳ 🟡 **Örnek aktiviteler** (5-10 aktivite, fotoğraflarla)
- ⏳ 🟡 **Çıktı / sonuç** — bu program çocuğa ne kazandırıyor

### Programlar Listesi
- Tam Öğrenme Modeli
- Bireyselleştirilmiş Eğitim
- Kocatürk WWAP
- Mind Kids — Akıl & Zekâ Oyunları
- Eğlenceli Bilim STEM
- Design Thinking
- Robotik & Kodlama (özel sayfa)
- Yabancı Dil Eğitimi
- PDR Programı
- Online Eğitim

---

## 8. HAVACILIK LİSESİ ÖZEL İÇERİK 🔴

Bu sayfaya ekstra yatırım yapılıyor, ekstra içerik gerek:

- ⏳ 🔴 **Açılış yılı**
- ⏳ 🔴 **Mevcut öğrenci sayısı**
- ⏳ 🔴 **Mezun olan öğrenci sayısı (varsa)**
- ⏳ 🔴 **Müfredat yapısı** (akademik + havacılık dersleri)
- ⏳ 🔴 **Tesisler** (simulator? atölye? model uçaklar?)
- ⏳ 🔴 **THY/TUSAŞ/TÜRKKUŞU bağlantıları** (varsa)
- ⏳ 🔴 **Mezun gidiş yolları** (üniversite, meslek)
- ⏳ 🟡 **Mezun başarı hikâyesi** (varsa, isim onayı ile)
- ⏳ 🟡 **Profesyonel fotoğraf çekimi** — simulator, sınıf, öğrenci

---

## 9. ROBOTİK & KODLAMA İÇERİK 🔴

- ⏳ 🔴 **Roma şampiyonluğu detay:**
  - Tarihler (kesin gün)
  - Yarışma resmi adı
  - Kategori isimleri (resmi)
  - Türkiye temsilcisi mi, kişisel mi
  - Profesyonel fotoğraf (öğrenciler ödülle, robot ile)
  - Yarışma video (varsa)
  - Aile / öğrenci izni — fotoğraf ve isim yayını için
- ⏳ 🟡 **Diğer robotik başarılar** (Roma öncesi/sonrası)
- ⏳ 🟡 **Robotik atölye fotoğrafları**
- ⏳ 🟡 **Robotik öğretmen / koordinatör bilgisi**
- ⏳ 🟡 **Codeweek 4 All sertifika** (görsel)

---

## 10. YURTDIŞI EĞİTİM İÇERİK 🔴

### 10.1 İngiltere Yaz Okulu
- ⏳ 🔴 **Hangi şehir / okul**
- ⏳ 🔴 **Hangi yaş grubu**
- ⏳ 🔴 **Süre** (1 hafta, 2 hafta, 3 hafta?)
- ⏳ 🔴 **Müfredat / aktiviteler**
- ⏳ 🔴 **Maliyet** (yayınlanacak mı?)
- ⏳ 🟡 **Önceki yıllardan fotoğraflar** (öğrenci/aile izni şart)
- ⏳ 🟡 **Öğrenci/veli testimonial**

### 10.2 eTwinning Ortaklıkları
- ⏳ 🔴 **İtalya ortağı** — okul adı, şehir, proje konusu
- ⏳ 🔴 **İspanya ortağı** — aynı bilgiler
- ⏳ 🔴 **Yunanistan ortağı** — aynı bilgiler
- ⏳ 🟡 **Aktif proje konuları** (kültür, çevre, bilim?)
- ⏳ 🟡 **Video konferans / etkinlik fotoğrafları**

### 10.3 Diğer Uluslararası
- ⏳ 🟡 **Diğer yurtdışı bağlantılar** (varsa)

---

## 11. BAŞARI ARŞİVİ 🟡

### 11.1 Akademik
- ⏳ LGS yüksek puan listesi (öğrenci adı + puan + lise/üniversite, izinli)
- ⏳ YKS yüksek puan listesi
- ⏳ Üniversite yerleştirme listesi (öğrenci, üniversite, bölüm, izinli)
- ⏳ Bursluluk sınavı sonuçları
- ⏳ Olimpiyat dereceleri (matematik, fizik, kimya, vs.)

### 11.2 Sportif
- ⏳ 🔴 **Beren Baykal — Ritmik jimnastik Türkiye 1.liği** — tarih, kategori, fotoğraf, izin
- ⏳ 🔴 **Voleybol şampiyonlukları** — hangi yıl, hangi liga
- ⏳ 🟡 **Diğer sportif dereceler** (basketbol, yüzme, atletizm, vs.)

### 11.3 Sanat & Kültür
- ⏳ 🟡 **Resim / müzik / tiyatro yarışma dereceleri**
- ⏳ 🟡 **Şiir / kompozisyon dereceleri**

### 11.4 Bilim & Teknoloji
- ⏳ 🟡 **Roma Robotik dışındaki TÜBİTAK / bilim yarışmaları**
- ⏳ 🟡 **Maker / proje yarışmaları**

### Her başarı için zorunlu:
- Tarih (gün/ay/yıl)
- Yarışma adı (resmi)
- Öğrenci adı (izinli)
- Kategori
- Derece
- Yer
- 1+ profesyonel fotoğraf
- Veli izin formu (KVKK)

---

## 12. HABERLER & DUYURULAR 🟡

### 12.1 Mevcut Arşiv
- ⏳ 🟡 **Son 12 ayın kritik haberleri** — Sanity'ye giriş
- ⏳ 🟡 **Basında çıkan haberler** (link + ekran görüntüsü)

### 12.2 Yazım Standardı
Her haber için:
- Başlık (60-80 karakter)
- Excerpt (140-180 karakter)
- Kategori
- Tarih
- Body (300-800 kelime)
- Hero görsel (16:9 min 1600×900)
- 2-5 ek görsel (galeri için)
- İlgili etiketler

---

## 13. VELİ TESTIMONIALLERİ 🟢 (ama çok güçlü etki)

- ⏳ 🟡 **5-10 veli yorumu** — gerçek isim, gerçek alıntı
  - Veli adı
  - Çocuk(lar)ın hangi kademede
  - Hangi kampüs
  - 30-80 kelime alıntı
  - Profesyonel fotoğraf veya avatar
  - **KVKK izni şart**
- ⏳ 🟢 **2-3 video testimonial** (60-90 sn, profesyonel çekim)

### Soru Önerileri (testimonial alırken):
1. Çocuğunuzu Kocatürk'e neden seçtiniz?
2. En sevdiğiniz şey nedir?
3. Çocuğunuzdaki en büyük değişim ne oldu?
4. Bir aday veliye ne söylersiniz?

---

## 14. PROFESYONEL FOTOĞRAF ÇEKİM LİSTESİ 🔴

> Sitedeki tüm görseller bu listeye göre çekilir. Stok foto **kesinlikle yasak**. Mevcut kampüs amatör fotoğrafları yerine profesyonel ekiple yeni çekim yapılır.

### 14.1 Drone Çekimleri (her ana kampüs için)
- ⏳ 🔴 Manisa Turgutlu — sabah ışığı, geniş açı, kampüs cephesi
- ⏳ 🔴 İzmir Gaziemir — aynı format
- ⏳ 🟡 Üçkuyular, Kemalpaşa, Tire — daha küçük çaplı

### 14.2 Bina & Mekân Fotoğrafları (her kampüs)
- ⏳ Sınıflar (boş + öğrenci ile)
- ⏳ Kütüphane
- ⏳ Laboratuvarlar (fen, kimya, fizik)
- ⏳ Robotik atölye
- ⏳ Spor salonu
- ⏳ Yemekhane
- ⏳ Bahçe / oyun alanı
- ⏳ Kampüs giriş

### 14.3 Yaşam Anları (öğrenci izinli)
- ⏳ Sınıf içinde öğrenme anları (kademe başı)
- ⏳ Robotik atölye çalışması
- ⏳ Sanat aktivitesi
- ⏳ Spor faaliyeti
- ⏳ Yemek molası
- ⏳ Arkadaşlık anları (oyun, sohbet)
- ⏳ Mezuniyet anları
- ⏳ Tören / etkinlik

### 14.4 Portrait Fotoğrafları
- ⏳ Üst yönetim (1:1, neutral bg)
- ⏳ Müdürler (her kampüs)
- ⏳ Öne çıkan öğretmenler (5-10 kişi, "öğretmen profili" sayfası için)
- ⏳ Mezun başarı hikâyeleri

### 14.5 Etkinlik Belgeselleri
- ⏳ Kayıt günü
- ⏳ Veli toplantıları
- ⏳ Geziler (yurt içi/dışı)
- ⏳ Yarışma günü

### Çekim Standartları
- Format: RAW + JPEG, 24 MP min
- Aspect ratio: 16:9 (web hero), 4:5 (Instagram), 1:1 (avatar)
- Renk profili: sRGB
- Doğal ışık tercih edilir
- Photoshop sonrası, çocuk yüzleri net ve ifadeli
- **Tüm öğrenci/veli için KVKK izin formu** önceden alınır

---

## 15. VİDEO ÇEKİM LİSTESİ 🟡

### 15.1 Brand Video (1 adet, ana sayfa için)
- ⏳ 🟡 **2-3 dakika** — Kocatürk'ün hikâyesi, 1998'den bugüne, çoklu kampüs yaşamı
- Profesyonel cinematography
- Müzik + voice over (Türkçe + EN versiyon)
- 16:9 + dikey kısa versiyon (sosyal medya)

### 15.2 Kampüs Tanıtım Videoları (5 adet — ana lokasyonlar)
- ⏳ 🟢 **60-90 sn / kampüs**

### 15.3 Program Videoları
- ⏳ 🟢 Robotik & Kodlama
- ⏳ 🟢 Havacılık Lisesi
- ⏳ 🟢 Yurtdışı Eğitim

### 15.4 Veli Testimonial Videoları
- ⏳ 🟢 2-3 veli, kısa format

---

## 16. YASAL METİNLER 🔴

- ⏳ 🔴 **KVKK Aydınlatma Metni** (form öncesi)
- ⏳ 🔴 **Açık Rıza Metni** (form ile beraber)
- ⏳ 🔴 **Çerez Politikası**
- ⏳ 🔴 **Gizlilik Politikası**
- ⏳ 🔴 **Kullanım Şartları**
- ⏳ 🟡 **VERBİS kayıt bilgileri** (varsa)

> Yasal metinler bir hukuk danışmanı tarafından hazırlanmalı veya gözden geçirilmelidir. Site geliştiricisi yazmaz.

---

## 17. SOSYAL MEDYA & İLETİŞİM HESAPLARI 🟡

- ⏳ Instagram URL
- ⏳ Facebook URL
- ⏳ YouTube URL
- ⏳ LinkedIn URL
- ⏳ X (Twitter) URL — varsa
- ⏳ TikTok URL — varsa
- ⏳ WhatsApp Business hattı
- ⏳ Genel iletişim e-posta
- ⏳ Basın iletişim e-posta
- ⏳ İK iletişim e-posta

---

## 18. ÖNCELİKLER ÖZET TABLOSU

Lansman için **mutlak gereken** içerikler:

| Kategori | Madde Sayısı | Risk |
|---|---|---|
| Logo + marka renk doğrulama | 3 | 🔴 |
| Resmi kurum bilgileri | 4 | 🔴 |
| Sayılar (4015, 23, 246, vs.) | 5 | 🔴 |
| 5 ana kampüs detayı | 5×8 = 40 | 🔴 |
| Üst yönetim (5 kişi) | 5 | 🔴 |
| Roma robotik detay | 1 | 🔴 |
| Havacılık lisesi içerik | 6 | 🔴 |
| Yurtdışı program detayları | 4 | 🔴 |
| Profesyonel fotoğraf paketi | 1 (ekip günü) | 🔴 |
| KVKK metinleri | 3 | 🔴 |

**Sonuç:** Lansman öncesi yaklaşık **70-80 içerik maddesi** tamamlanmalı.

---

## 19. İÇERİK TOPLAMA SÜRECİ ÖNERİSİ

1. **Hafta 1:** Bu listeyi Utkus + iletişim ekibi gözden geçirir, sahiplik atanır
2. **Hafta 1-2:** Logo, marka renk, sayılar, resmi bilgiler tamamlanır
3. **Hafta 2-3:** Profesyonel fotoğraf çekim günü(leri) — tek ekiple tüm 5 kampüs
4. **Hafta 3-4:** Yönetim portretleri + bio'lar
5. **Hafta 4-5:** Eğitim programları içerikleri + Roma + Havacılık + Yurtdışı
6. **Hafta 5-6:** Veli testimonialleri
7. **Hafta 6-7:** Yasal metinler hukuk onayı
8. **Hafta 7-8:** Son içerik gözden geçirme + Sanity giriş tamamlama

---

**Sıradaki dosya:** `09-RULES-AND-GUARDRAILS.md` — Bu en önemli dosya. Premium kaliteyi garanti eden hard NO listesi.
