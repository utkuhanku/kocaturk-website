/**
 * Pillar — Temel değer sütunu (number circle + title + body + link)
 *
 * @see .docs/06-COMPONENT-LIBRARY.md#41-pillar
 * @see src/components/patterns/pillar.module.css
 *
 * title prop'u ReactNode alır — <em> ile turuncu renk vurgusu yapılabilir.
 * CSS Module'deki .title em { font-style: normal } zorunludur (09-RULES).
 * Hover: translateY(-4px), shadow-md, orange border, number circle bg değişir.
 *
 * @example
 * <Pillar
 *   number="01"
 *   title={<>Üstün <em>Akademi</em></>}
 *   body="Çağdaş öğretmenlerimiz..."
 *   link={{ href: "/akademi", label: "Akademi modeli" }}
 * />
 */

import Link from "next/link";
import type { ReactNode } from "react";
import { cn } from "@/lib/cn";
import styles from "./pillar.module.css";

export interface PillarProps {
  number: string;
  title: ReactNode;
  body: string;
  link?: { href: string; label: string };
  variant?: "light" | "dark";
  className?: string;
}

export function Pillar({ number, title, body, link, variant = "light", className }: PillarProps) {
  return (
    <article className={cn(styles.pillar, variant === "dark" && styles.dark, className)}>
      <div className={styles.numberCircle} aria-hidden="true">
        {number}
      </div>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.body}>{body}</p>
      {link && (
        <Link href={link.href} className={styles.link}>
          <span>{link.label}</span>
          <i className={cn("bx bx-right-arrow-alt", styles.linkIcon)} aria-hidden="true" />
        </Link>
      )}
    </article>
  );
}
