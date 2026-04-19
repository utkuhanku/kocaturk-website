# Vercel Deployment Rehberi

## 1. Environment Variables

Vercel dashboard → Settings → Environment Variables'a şunları ekle:

| Key | Değer | Ortam |
|-----|-------|-------|
| `RESEND_API_KEY` | `re_...` | Production, Preview |
| `EMAIL_TO` | `info@kocaturk.k12.tr` | Production, Preview |
| `NEXT_PUBLIC_MAPBOX_TOKEN` | `pk.ey...` | All |
| `NEXT_PUBLIC_SANITY_PROJECT_ID` | Sanity dashboard'dan al | All |
| `NEXT_PUBLIC_SANITY_DATASET` | `production` | All |
| `SANITY_API_TOKEN` | Sanity API token | Production, Preview |
| `SANITY_REVALIDATE_SECRET` | Rastgele güçlü string | Production, Preview |
| `NEXT_PUBLIC_SITE_URL` | `https://kocaturk.k12.tr` | Production |

## 2. Build Settings

- **Framework Preset:** Next.js (otomatik algılanır)
- **Build Command:** `npm run build`
- **Install Command:** `npm ci`
- **Node Version:** 22.x

## 3. Domain Bağlama

1. Vercel → Settings → Domains → Add Domain
2. `kocaturk.k12.tr` gir
3. Vercel'in verdiği DNS kayıtlarını domain registrar'a ekle:
   - **A record:** `@` → `76.76.21.21`
   - **CNAME:** `www` → `cname.vercel-dns.com`
4. SSL sertifikası otomatik olarak verilir (Let's Encrypt)
5. Propagasyon 24-48 saat sürebilir

## 4. Resend Email Domain Doğrulama

`info@kocaturk.k12.tr` üzerinden mail gönderebilmek için:

1. [resend.com](https://resend.com) → Domains → Add Domain → `kocaturk.k12.tr`
2. Verilen DNS kayıtlarını domain'e ekle:
   - **SPF (TXT):** `v=spf1 include:amazonses.com ~all`
   - **DKIM (CNAME × 3):** Resend'in verdiği 3 CNAME kaydı
3. Resend dashboard'dan "Verify" tıkla
4. Doğrulama tamamlandıktan sonra `RESEND_API_KEY` ile test mail gönder

## 5. Pre-Launch Checklist

- [ ] Tüm env variables Vercel'de set edildi
- [ ] Custom domain DNS propagated
- [ ] SSL sertifikası aktif (`https://` çalışıyor)
- [ ] Resend domain doğrulandı
- [ ] Test ön kayıt formu submit — mail `info@kocaturk.k12.tr`'ye düşüyor
- [ ] `/sitemap.xml` erişilebilir
- [ ] `/robots.txt` erişilebilir
- [ ] Google Search Console'a site eklendi + sitemap submit edildi
- [ ] Open Graph preview kontrol edildi ([opengraph.xyz](https://opengraph.xyz))
- [ ] Lighthouse prod testi yapıldı (performance ≥85, a11y ≥95, seo ≥95)
- [ ] 404 sayfası düzgün render ediyor
- [ ] Tüm formlar e2e test edildi (on-kayıt, iletişim, kariyer)
- [ ] Mapbox token üretim ortamı için kısıtlandı (allowed URLs)
- [ ] PLACEHOLDER-TRACKER.md'deki kritik öğeler dolduruldu
