/**
 * StatCard — İstatistik kartı (icon circle + sayaç + etiket + açıklama)
 *
 * @see .docs/06-COMPONENT-LIBRARY.md#43-statcard
 * @see src/components/patterns/stat-card.module.css
 *
 * Server component — NumberCounter ('use client') child olarak içerilir.
 * NumberCell'in kart versiyonu: border, bg, hover lift (-4px), icon circle.
 * İcon: boxicons class string (ör. "bx bx-group") — opsiyonel.
 *
 * @example
 * <StatCard number={4015} label="ÖĞRENCİ" suffix="+" icon="bx bx-group" description="4 ilçede" />
 * <StatCard number={98} label="BAŞARI" suffix="%" description="LGS yerleşim oranı" />
 */

import { NumberCounter } from "@/components/number-counter";
import { cn } from "@/lib/cn";
import styles from "./stat-card.module.css";

interface StatCardProps {
  number: number;
  label: string;
  description?: string;
  icon?: string;
  suffix?: string;
  className?: string;
}

export function StatCard({ number, label, description, icon, suffix, className }: StatCardProps) {
  return (
    <div className={cn(styles.card, className)}>
      {icon && (
        <div className={styles.iconWrap}>
          <i className={icon} aria-hidden="true" />
        </div>
      )}
      <p className={styles.number}>
        <NumberCounter target={number} suffix={suffix} />
      </p>
      <p className={styles.label}>{label}</p>
      {description && <p className={styles.description}>{description}</p>}
    </div>
  );
}
