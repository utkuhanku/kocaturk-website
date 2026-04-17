/**
 * ProgramCard — Program tanıtım kartı (icon + isim + yaş + kısa açıklama)
 *
 * @see .docs/06-COMPONENT-LIBRARY.md#44-programcard
 * @see src/components/patterns/program-card.module.css
 *
 * Server component — <Link> içerir, 'use client' gerekmez.
 * featured: turuncu border + peach-soft bg, icon bg turuncu olur.
 * shortDesc: -webkit-line-clamp 2 (CSS Module).
 * Arrow icon hover'da translateX(4px) + turuncu olur.
 *
 * @example
 * <ProgramCard
 *   icon="bx bx-rocket"
 *   name="Havacılık ve Uzay"
 *   shortDesc="İHA tasarımı, uçuş simülatörü, model roket atölyesi."
 *   ageRange="9-17 yaş"
 *   href="/programlar/havacilik"
 *   featured
 * />
 */

import Link from "next/link";
import { cn } from "@/lib/cn";
import styles from "./program-card.module.css";

export interface ProgramCardProps {
  icon: string;
  name: string;
  shortDesc: string;
  ageRange?: string;
  href: string;
  featured?: boolean;
  className?: string;
}

export function ProgramCard({
  icon,
  name,
  shortDesc,
  ageRange,
  href,
  featured = false,
  className,
}: ProgramCardProps) {
  return (
    <Link href={href} className={cn(styles.card, featured && styles.featured, className)}>
      <div className={styles.iconWrap}>
        <i className={icon} aria-hidden="true" />
      </div>
      <div className={styles.body}>
        {ageRange && <span className={styles.ageRange}>{ageRange}</span>}
        <h3 className={styles.name}>{name}</h3>
        <p className={styles.shortDesc}>{shortDesc}</p>
      </div>
      <i className={cn("bx bx-right-arrow-alt", styles.arrowIcon)} aria-hidden="true" />
    </Link>
  );
}
