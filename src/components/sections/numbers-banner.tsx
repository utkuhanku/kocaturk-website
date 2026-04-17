/**
 * NumbersBanner — Sayılar bandı (dark veya light zemin)
 *
 * @see .docs/07-PAGE-SPECIFICATIONS.md#bölüm-3--numbers-banner
 * @see .docs/06-COMPONENT-LIBRARY.md#34-numbersbanner
 * @see src/components/sections/numbers-banner.module.css
 *
 * Server component — NumberCell (client NumberCounter içerir).
 * Dark variant: .dark-section utility class + Eyebrow variant="light" + title peach em.
 *
 * @example
 * <NumbersBanner
 *   eyebrow="Sayılarla Kocatürk"
 *   title={<>Çeyrek asırda<br/><em>Ege'nin omurgası.</em></>}
 *   numbers={[{ number: 4015, label: "ÖĞRENCİ", sublabel: "Aktif kayıt" }]}
 * />
 */

import type { ReactNode } from "react";
import { NumberCell } from "@/components/patterns/number-cell";
import { Eyebrow } from "@/components/ui/eyebrow";
import { cn } from "@/lib/cn";
import styles from "./numbers-banner.module.css";

interface NumberItem {
  number: number;
  suffix?: string;
  label: string;
  sublabel?: string;
}

interface NumbersBannerProps {
  eyebrow?: string;
  title?: ReactNode;
  numbers: NumberItem[];
  variant?: "dark" | "light";
  className?: string;
}

export function NumbersBanner({
  eyebrow,
  title,
  numbers,
  variant = "dark",
  className,
}: NumbersBannerProps) {
  const isDark = variant === "dark";

  return (
    <section className={cn(isDark && "dark-section", styles.section, className)}>
      <div className="wrap">
        {(eyebrow || title) && (
          <div className={styles.header}>
            {eyebrow && <Eyebrow variant={isDark ? "light" : "default"}>{eyebrow}</Eyebrow>}
            {title && <h2 className={styles.title}>{title}</h2>}
          </div>
        )}
        <div className={styles.grid}>
          {numbers.map((n) => (
            <NumberCell
              key={n.label}
              number={n.number}
              suffix={n.suffix}
              label={n.label}
              sublabel={n.sublabel}
              variant={isDark ? "dark" : "light"}
              size="md"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
