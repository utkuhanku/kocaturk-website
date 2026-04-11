/**
 * Sanity Studio Konfigürasyonu — Kocatürk Okulları
 *
 * Kurulum tamamlamak için:
 *   1. sanity login (browser açılır, Sanity hesabına gir)
 *   2. sanity projects list (proje ID'sini kopyala)
 *   3. .env.local dosyasına NEXT_PUBLIC_SANITY_PROJECT_ID=<id> ekle
 *   4. Bu dosyadaki projectId alanını güncelle
 *
 * @see .docs/VERCEL-SETUP.md
 */

import { visionTool } from "@sanity/vision";
import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { schemaTypes } from "./schemas";

export default defineConfig({
  /* ─── Proje Kimliği ─────────────────────────────────────────
     Sanity CLI'dan "sanity projects list" ile alınır.
     Gerçek değer .env üzerinden sağlanabilir, buraya doğrudan
     yazılmamalıdır (repo public olabilir).
  ──────────────────────────────────────────────────────────── */
  projectId: process.env.SANITY_STUDIO_PROJECT_ID ?? "REPLACE_WITH_PROJECT_ID",
  dataset: process.env.SANITY_STUDIO_DATASET ?? "production",

  /* ─── Studio Ayarları ──────────────────────────────────────── */
  name: "kocaturk-studio",
  title: "Kocatürk Okulları — İçerik Yönetimi",

  /* Studio ayrı çalışır, Next.js'e embed edilmez */
  basePath: "/studio",

  /* ─── Eklentiler ────────────────────────────────────────────── */
  plugins: [structureTool(), visionTool({ defaultApiVersion: "2024-12-01" })],

  /* ─── Schema'lar ────────────────────────────────────────────── */
  schema: {
    types: schemaTypes,
  },
});
