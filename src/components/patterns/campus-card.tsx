/**
 * CampusCard — Kampüs tanıtım kartı (image/PhotoSlot + badge + meta)
 *
 * @see .docs/06-COMPONENT-LIBRARY.md#51-campuscard
 * @see src/components/patterns/campus-card.module.css
 *
 * Server component — <Link> wrapper, hover CSS ile.
 * image prop varsa <img src> (Faz 5'te Next.js Image ile değişecek).
 * image prop yoksa PhotoSlot (slotId=slug, aspectRatio="16:9", category="CAMPUS").
 * badge: "ana" → "ANA KAMPÜS", "ikinci-ana" → "İKİNCİ ANA KAMPÜS".
 * meta = kademeler.join(" · ") + studentCount (toLocaleString tr-TR).
 * imageWrap aspect-ratio: 16/9 CSS'te — hem img hem PhotoSlot için container.
 *
 * @example
 * <CampusCard
 *   slug="turgutlu"
 *   name="Turgutlu Kampüsü"
 *   ilce="Turgutlu"
 *   il="Manisa"
 *   badge="ana"
 *   kademeler={["İlkokul", "Ortaokul", "Lise"]}
 *   studentCount={950}
 *   href="/kampusler/turgutlu"
 * />
 */

import Image from "next/image";
import Link from "next/link";
import { PhotoSlot } from "@/components/photo-slot";
import { cn } from "@/lib/cn";
import styles from "./campus-card.module.css";

interface CampusCardProps {
  slug: string;
  name: string;
  ilce: string;
  il: string;
  badge?: "ana" | "ikinci-ana";
  kademeler: string[];
  studentCount?: number;
  image?: string;
  href: string;
  className?: string;
}

export function CampusCard({
  slug,
  name,
  ilce,
  il: _il,
  badge,
  kademeler,
  studentCount,
  image,
  href,
  className,
}: CampusCardProps) {
  const metaParts = [kademeler.join(" · ")];
  if (studentCount !== undefined) {
    metaParts.push(`${studentCount.toLocaleString("tr-TR")} öğrenci`);
  }
  const metaString = metaParts.join(" · ");

  return (
    <Link href={href} className={cn(styles.card, className)}>
      <div className={styles.imageWrap}>
        {image ? (
          <Image
            src={image}
            alt={name}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className={styles.imageEl}
          />
        ) : (
          <PhotoSlot
            slotId={slug}
            aspectRatio="16:9"
            category="CAMPUS"
            type="photo"
            title={name}
            description={`${ilce} kampüsü`}
          />
        )}
        {badge && (
          <span className={styles.badge}>
            {badge === "ana" ? "ANA KAMPÜS" : "İKİNCİ ANA KAMPÜS"}
          </span>
        )}
      </div>
      <div className={styles.body}>
        <span className={styles.ilce}>{ilce}</span>
        <h3 className={styles.name}>{name}</h3>
        <p className={styles.meta}>{metaString}</p>
        <i className={cn("bx bx-right-arrow-alt", styles.arrow)} aria-hidden="true" />
      </div>
    </Link>
  );
}
