/**
 * PhotoSlot Replacement Types — Faz 5'te kullanılacak
 *
 * Runtime logic yok — sadece tip tanımı ve kullanım kılavuzu.
 * PhotoSlot'u gerçek Next.js Image ile değiştirirken bu type kullanılır.
 *
 * @see src/components/photo-slot.tsx — placeholder component
 * @see .docs/06-COMPONENT-LIBRARY.md#31-photoslot
 *
 * @example
 * // Faz 5'te her <PhotoSlot> şöyle değiştirilecek:
 * //
 * // Eski:
 * // <PhotoSlot
 * //   slotId="hero-turgutlu"
 * //   aspectRatio="16:9"
 * //   category="HERO"
 * //   type="photo"
 * //   title="Manisa Turgutlu kampüsü drone çekimi"
 * //   description="Hero görseli — 1920×1080px min."
 * // />
 * //
 * // Yeni (Faz 5 sonrası):
 * // const r = replacements["hero-turgutlu"];
 * // <Image src={r.src} alt={r.alt} width={r.width} height={r.height} priority={r.priority} />
 * //
 * // Tüm replacement'lar bir map'te tutulur:
 * // const replacements: Record<string, PhotoSlotReplacement> = {
 * //   "hero-turgutlu": {
 * //     slotId: "hero-turgutlu",
 * //     src: "/images/campus/turgutlu-drone.jpg",
 * //     alt: "Manisa Turgutlu kampüsü drone çekimi",
 * //     width: 1920,
 * //     height: 1080,
 * //     priority: true,
 * //   },
 * // };
 */

export type PhotoSlotReplacement = {
  /** PhotoSlot bileşenindeki data-slot-id ile eşleşmeli */
  slotId: string;
  /** /public/images/ altındaki yol — absolut veya CDN URL */
  src: string;
  /** Erişilebilir alt metin — fotoğrafçı bilgisi dahil edilebilir */
  alt: string;
  /** Orijinal görsel genişliği (px) — Next.js Image için zorunlu */
  width: number;
  /** Orijinal görsel yüksekliği (px) — Next.js Image için zorunlu */
  height: number;
  /** LCP görseli için true — hero/featured slot'larında kullan */
  priority?: boolean;
};
