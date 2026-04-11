/**
 * GROQ Queries — Kocatürk Okulları
 *
 * Tüm Sanity veri sorguları buradadır.
 * groq template literal kullanılır (syntax highlighting + type inference için).
 *
 * @see .docs/05-TECH-STACK.md
 */

import { groq } from "next-sanity";

/* =========================================================
   KAMPÜS SORGULARILARI
   ========================================================= */

/** Tüm kampüslerin özet listesi */
export const allCampusesQuery = groq`
  *[_type == "campus"] | order(badge asc, name asc) {
    _id,
    name,
    slug,
    il,
    ilce,
    badge,
    kademeler,
    ogrenciSayisi,
    ogretmenSayisi,
    "heroImageUrl": heroImage.asset->url,
    "heroImageAlt": heroImage.alt,
    "mudurIsim": mudur.isim,
    "mudurPozisyon": mudur.pozisyon
  }
`;

/** Tek kampüsün tam detayı (slug ile) */
export const singleCampusQuery = groq`
  *[_type == "campus" && slug.current == $slug][0] {
    _id,
    name,
    slug,
    il,
    ilce,
    badge,
    kademeler,
    ogrenciSayisi,
    ogretmenSayisi,
    adres,
    telefon,
    email,
    mudur {
      isim,
      pozisyon,
      "fotoUrl": foto.asset->url,
      "fotoAlt": foto.alt
    },
    hikaye,
    tesisler,
    koordinatlar,
    "heroImageUrl": heroImage.asset->url,
    "heroImageAlt": heroImage.alt
  }
`;

/* =========================================================
   HABER SORGULARI
   ========================================================= */

/** Tüm haberler (en yeni önce, özet alanlarıyla) */
export const allNewsQuery = groq`
  *[_type == "news"] | order(tarih desc) {
    _id,
    baslik,
    slug,
    ozet,
    kategori,
    tarih,
    etiketler,
    yazar,
    "heroGorselUrl": heroGorsel.asset->url,
    "heroGorselAlt": heroGorsel.alt
  }
`;

/** Tek haber tam detayı (slug ile) */
export const singleNewsQuery = groq`
  *[_type == "news" && slug.current == $slug][0] {
    _id,
    baslik,
    slug,
    ozet,
    kategori,
    tarih,
    etiketler,
    yazar,
    body,
    galeri[] {
      "url": asset->url,
      alt
    },
    "heroGorselUrl": heroGorsel.asset->url,
    "heroGorselAlt": heroGorsel.alt
  }
`;

/* =========================================================
   BAŞARI SORGULARI
   ========================================================= */

/** Tüm başarılar (en yeni önce) */
export const allAchievementsQuery = groq`
  *[_type == "achievement"] | order(tarih desc) {
    _id,
    baslik,
    slug,
    kategori,
    tarih,
    ogrenciAdi,
    yarismaAdi,
    derece,
    yer,
    featured,
    aciklama,
    "fotoUrl": foto.asset->url,
    "fotoAlt": foto.alt
  }
`;

/** Öne çıkan başarılar (ana sayfa için) */
export const featuredAchievementsQuery = groq`
  *[_type == "achievement" && featured == true] | order(tarih desc)[0...6] {
    _id,
    baslik,
    slug,
    kategori,
    tarih,
    ogrenciAdi,
    yarismaAdi,
    derece,
    "fotoUrl": foto.asset->url,
    "fotoAlt": foto.alt
  }
`;
