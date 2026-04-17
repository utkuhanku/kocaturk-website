/**
 * CtaBand — Sayfa sonu çağrı bandı
 *
 * @see .docs/07-PAGE-SPECIFICATIONS.md#bölüm-11--cta-band
 * @see .docs/06-COMPONENT-LIBRARY.md#313-ctaband
 * @see src/components/sections/cta-band.module.css
 *
 * Server component. dark-section zemin.
 * Merkezi hizalı: eyebrow + başlık + açıklama + CTA butonları.
 * .wrap.narrow ile max-width daraltılır.
 *
 * @example
 * <CtaBand
 *   eyebrow="Sıradaki Adım"
 *   title={<>Çocuğunuzun yarınını<br/>birlikte <em>tasarlayalım.</em></>}
 *   description="Ön kayıt formunu doldurun..."
 *   ctas={[
 *     { href: "/kayit/on-kayit", label: "Ön Kayıt Başvurusu", variant: "primary" },
 *     { href: "/kampusler", label: "Kampüs Ziyareti Planla", variant: "outline-light" },
 *   ]}
 * />
 */

import type { ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { Eyebrow } from "@/components/ui/eyebrow";
import { cn } from "@/lib/cn";
import styles from "./cta-band.module.css";

interface CtaBandProps {
  eyebrow?: string;
  title: ReactNode;
  description?: string;
  ctas: Array<{
    href: string;
    label: string;
    variant: "primary" | "outline-light";
  }>;
  className?: string;
}

export function CtaBand({ eyebrow, title, description, ctas, className }: CtaBandProps) {
  return (
    <section className={cn("dark-section", styles.section, className)}>
      <div className="wrap narrow">
        <div className={styles.inner}>
          {eyebrow && <Eyebrow variant="light">{eyebrow}</Eyebrow>}
          <h2 className={styles.title}>{title}</h2>
          {description && <p className={styles.description}>{description}</p>}
          <div className={styles.ctas}>
            {ctas.map((cta) => (
              <Button key={cta.href} variant={cta.variant} size="lg" href={cta.href}>
                {cta.label}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
