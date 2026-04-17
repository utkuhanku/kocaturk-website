/**
 * InternationalStrip — Yurtdışı eğitim tanıtım şeridi
 *
 * @see .docs/07-PAGE-SPECIFICATIONS.md#bölüm-7--international-strip
 * @see .docs/06-COMPONENT-LIBRARY.md#39-internationalstrip
 * @see src/components/sections/international-strip.module.css
 *
 * Server component. dark-section zemin.
 * Sol: eyebrow + başlık (em → peach) + açıklama + CTA.
 * Sağ: 3×2 ülke kartları grid.
 *
 * @example
 * <InternationalStrip
 *   eyebrow="Yurtdışı Eğitim"
 *   title={<>Ege'de okuyup<br/><em>dünyada</em> düşünen nesil.</>}
 *   body="..."
 *   cta={{ href: "/egitim/yurtdisi", label: "Yurtdışı Eğitim" }}
 *   countryCards={[{ flag: "🇬🇧", code: "İNG", name: "İngiltere", program: "Yaz Okulu" }]}
 * />
 */

import type { ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { Eyebrow } from "@/components/ui/eyebrow";
import { cn } from "@/lib/cn";
import styles from "./international-strip.module.css";

interface CountryCard {
  flag: string;
  code: string;
  name: string;
  program: string;
}

interface InternationalStripProps {
  eyebrow?: string;
  title: ReactNode;
  body: ReactNode;
  cta: { href: string; label: string };
  countryCards: CountryCard[];
  className?: string;
}

export function InternationalStrip({
  eyebrow,
  title,
  body,
  cta,
  countryCards,
  className,
}: InternationalStripProps) {
  return (
    <section className={cn("dark-section", styles.section, className)}>
      <div className="wrap">
        <div className={styles.inner}>
          <div className={styles.content}>
            {eyebrow && <Eyebrow variant="light">{eyebrow}</Eyebrow>}
            <h2 className={styles.title}>{title}</h2>
            <p className={styles.body}>{body}</p>
            <Button
              variant="outline-light"
              href={cta.href}
              icon={<i className="bx bx-right-arrow-alt" aria-hidden="true" />}
            >
              {cta.label}
            </Button>
          </div>

          <div className={styles.cardsGrid}>
            {countryCards.map((c) => (
              <div key={`${c.code}-${c.program}`} className={styles.countryCard}>
                <span className={styles.flag} role="img" aria-label={c.name}>
                  {c.flag}
                </span>
                <span className={styles.code}>{c.code}</span>
                <span className={styles.program}>{c.program}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
