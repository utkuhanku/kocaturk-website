/**
 * NumberCell — Animasyonlu istatistik satırı (border-left + sayaç + etiket)
 *
 * @see .docs/06-COMPONENT-LIBRARY.md#42-numbercell
 * @see src/components/patterns/number-cell.module.css
 *
 * Server component — NumberCounter ('use client') child olarak içerilir.
 * Size: sm / md (default) / lg → display-sm / display-md / display-lg font.
 * Dark variant: ana sayfa dark section'larında kullanılır.
 *
 * @example
 * <NumberCell number={4015} label="ÖĞRENCİ" sublabel="4 ilçe" suffix="+" />
 * <NumberCell number={98} label="BAŞARI" suffix="%" size="lg" variant="dark" />
 */

import { NumberCounter } from "@/components/number-counter";
import { cn } from "@/lib/cn";
import styles from "./number-cell.module.css";

interface NumberCellProps {
  number: number;
  label: string;
  sublabel?: string;
  variant?: "dark" | "light";
  size?: "sm" | "md" | "lg";
  suffix?: string;
  className?: string;
}

export function NumberCell({
  number,
  label,
  sublabel,
  variant = "light",
  size = "md",
  suffix,
  className,
}: NumberCellProps) {
  return (
    <div
      className={cn(
        styles.cell,
        size === "sm" && styles.sm,
        size === "md" && styles.md,
        size === "lg" && styles.lg,
        variant === "dark" && styles.dark,
        className,
      )}
    >
      <p className={styles.number}>
        <NumberCounter target={number} suffix={suffix} />
      </p>
      <span className={styles.label}>{label}</span>
      {sublabel && <span className={styles.sublabel}>{sublabel}</span>}
    </div>
  );
}
