# Vercel Kurulum Rehberi — Kocatürk Okulları

> **Bu dosya geliştirici tarafından yapılacak tek seferlik manuel adımları içerir.**
> `npx vercel link` gibi komutlar CI/CD ortamını konfigüre eder — bu adımları yerel makinede Utkus yapacak.

---

## Ön Koşul

- Vercel hesabı: [vercel.com](https://vercel.com) (GitHub ile login önerilir)
- GitHub reposu mevcut: `github.com/utkuhanku/kocaturk-website`

---

## Adımlar

### 1. Vercel Hesabına Giriş ve Proje Import

1. [vercel.com/new](https://vercel.com/new) adresine git
2. **"Import Git Repository"** seç
3. GitHub hesabını bağla (ilk kez ise OAuth ile yetkilendir)
4. `kocaturk-website` reposunu seç → **"Import"**
5. Framework: **Next.js** otomatik algılanmalı
6. Root Directory: `.` (kök)
7. **"Deploy"** butonuna bas — ilk deploy otomatik başlar

---

### 2. Environment Variables (Ortam Değişkenleri)

Proje ayarları → **Settings → Environment Variables** bölümünde şunları ekle:

| Değişken | Açıklama | Ortam |
|---|---|---|
| `NEXT_PUBLIC_SANITY_PROJECT_ID` | Sanity proje ID (sanity.io/manage'den) | Production + Preview + Development |
| `NEXT_PUBLIC_SANITY_DATASET` | `production` | Production + Preview + Development |
| `SANITY_API_TOKEN` | Sanity API token (read-only yeterli, write gerekirse editor) | Production + Preview |
| `SANITY_REVALIDATE_SECRET` | Rastgele güçlü string (revalidation webhook için) | Production + Preview |
| `RESEND_API_KEY` | Resend.com API anahtarı (iletişim formu için) | Production |
| `CONTACT_EMAIL_TO` | Formun gideceği e-posta: `info@kocaturk.k12.tr` | Production |
| `NEXT_PUBLIC_MAPBOX_TOKEN` | Mapbox public token (kampüs haritası için) | Production + Preview + Development |
| `NEXT_PUBLIC_PLAUSIBLE_DOMAIN` | `kocaturk.k12.tr` | Production |
| `NEXT_PUBLIC_SITE_URL` | `https://kocaturk.k12.tr` | Production |

> **Not:** `NEXT_PUBLIC_` ile başlayan değişkenler tarayıcıda da görünür, gizli tutulmamalı.

---

### 3. Preview Deploy Testi

1. Yeni bir branch oluştur: `git checkout -b test/vercel-preview`
2. Küçük bir değişiklik yap (örn. README'ye bir boşluk ekle)
3. `git push origin test/vercel-preview`
4. GitHub PR aç → Vercel bot otomatik preview URL yorumu yapacak
5. Preview URL'yi aç, sitenin çalıştığını doğrula
6. Branch'i sil: `git branch -D test/vercel-preview`

---

### 4. Custom Domain Notu

Domain bağlantısı Faz 2 sonrasına bırakılmıştır (içerik tamamlanmadan canlıya çıkmayacak).

Hazır olduğunda:
1. Vercel → Settings → Domains → `kocaturk.k12.tr` ekle
2. DNS sağlayıcında A kaydı veya CNAME ekle (Vercel talimatlarına göre)
3. SSL otomatik sağlanır (Let's Encrypt)

---

### 5. Vercel Bölüm Ayarları (Opsiyonel ama Önerilen)

- **Region:** `iad1` (Washington D.C.) varsayılan, Türkiye için `fra1` (Frankfurt) dene
- **Node.js Version:** `20.x` (package.json ile uyumlu)
- **Build & Output Settings:** Otomatik algılanır, değiştirme

---

## Sonraki Adım

Vercel bağlantısı kurulduktan sonra her `main` merge'ünde production deploy otomatik tetiklenir.
GitHub Actions CI (`.github/workflows/ci.yml`) ve Lighthouse CI (`.github/workflows/lighthouse.yml`) da paralel çalışır.
