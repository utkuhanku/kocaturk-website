/**
 * Sanity Client — Kocatürk Okulları
 *
 * next-sanity createClient ile yapılandırılmış istemci.
 * CDN: production'da açık, development'ta kapalı.
 *
 * @see .docs/05-TECH-STACK.md
 */

import { createClient } from "next-sanity";

if (!process.env.NEXT_PUBLIC_SANITY_PROJECT_ID) {
  throw new Error("NEXT_PUBLIC_SANITY_PROJECT_ID env var eksik. .env.local dosyasını kontrol et.");
}

if (!process.env.NEXT_PUBLIC_SANITY_DATASET) {
  throw new Error("NEXT_PUBLIC_SANITY_DATASET env var eksik. .env.local dosyasını kontrol et.");
}

export const sanityClient = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: "2024-12-01",
  useCdn: process.env.NODE_ENV === "production",
  /* perspective: 'published' — taslaklar gösterilmez */
  perspective: "published",
  /* stega: false — production'da, sadece studio preview'da true */
  stega: false,
});
