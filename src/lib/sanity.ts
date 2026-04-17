/**
 * Sanity Client — Kocatürk Okulları
 *
 * next-sanity createClient ile yapılandırılmış istemci.
 * CDN: production'da açık, development'ta kapalı.
 * Env vars eksikse client null döner — safeFetch fallback data kullanır.
 *
 * @see .docs/05-TECH-STACK.md
 */

import { createClient } from "next-sanity";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;

export const sanityClient =
  projectId && dataset
    ? createClient({
        projectId,
        dataset,
        apiVersion: "2024-12-01",
        useCdn: process.env.NODE_ENV === "production",
        perspective: "published",
        stega: false,
      })
    : null;

/**
 * safeFetch — Sanity client yoksa (env eksikse) veya hata olursa null döner.
 * Sayfalar bu helper üzerinden veri çeker; null ise fallback data kullanır.
 */
export async function safeFetch<T>(
  query: string,
  params?: Record<string, unknown>,
): Promise<T | null> {
  if (!sanityClient) return null;
  try {
    return await sanityClient.fetch<T>(query, params ?? {});
  } catch {
    return null;
  }
}
