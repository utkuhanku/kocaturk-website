import type { NextConfig } from "next";

/**
 * Next.js Konfigürasyonu — Kocatürk Okulları
 *
 * Security headers: .docs/09-RULES-AND-GUARDRAILS.md Bölüm 10
 * CSP bu aşamada yok — Faz 8'de eklenecek.
 * Sebep: Sanity CDN, Mapbox, Resend ve analytics domainleri
 * netleşmeden CSP yazılırsa siteyi kırar.
 */

const nextConfig: NextConfig = {
  /* ─── Turbopack ──────────────────────────────────────────────── */
  turbopack: {
    root: __dirname,
  },

  /* ─── Image Domains ─────────────────────────────────────────── */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
      },
    ],
  },

  /* ─── Security Headers ──────────────────────────────────────── */
  async headers() {
    return [
      {
        /* Tüm sayfalara uygula */
        source: "/(.*)",
        headers: [
          {
            key: "X-Frame-Options",
            value: "DENY",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
          {
            /* HSTS: 1 yıl, tüm subdomainler dahil */
            key: "Strict-Transport-Security",
            value: "max-age=31536000; includeSubDomains",
          },
          /* CSP: Faz 8'de gelecek.
             Şu an Sanity CDN, Mapbox GL JS ve analytics domainleri
             bilinmediği için yazmak siteyi kırar.
             @see .docs/09-RULES-AND-GUARDRAILS.md Bölüm 10 */
        ],
      },
    ];
  },
};

export default nextConfig;
