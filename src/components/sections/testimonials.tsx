/**
 * Testimonials — Veli ve mezun görüşleri 3-sütun grid
 *
 * @see .docs/07-PAGE-SPECIFICATIONS.md#bölüm-9--testimonials
 * @see .docs/06-COMPONENT-LIBRARY.md#311-testimonials
 * @see src/components/sections/testimonials.module.css
 *
 * Server component. 3 TestimonialCard, Reveal stagger ile.
 *
 * @example
 * <Testimonials
 *   eyebrow="Velilerimiz Anlatıyor"
 *   title="Kocatürk ailesinden sesler."
 *   testimonials={[{ quote: "...", authorName: "Ayşe Çelik", authorRole: "Veli · 7. sınıf" }]}
 * />
 */

import type { ReactNode } from "react";
import { TestimonialCard, type TestimonialCardProps } from "@/components/patterns/testimonial-card";
import { Reveal } from "@/components/reveal";
import { Eyebrow } from "@/components/ui/eyebrow";
import { cn } from "@/lib/cn";
import styles from "./testimonials.module.css";

interface TestimonialsProps {
  eyebrow?: string;
  title?: ReactNode;
  testimonials: TestimonialCardProps[];
  className?: string;
}

export function Testimonials({ eyebrow, title, testimonials, className }: TestimonialsProps) {
  return (
    <section className={cn(styles.section, className)}>
      <div className="wrap">
        {(eyebrow || title) && (
          <div className={styles.header}>
            {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
            {title && <h2 className={styles.title}>{title}</h2>}
          </div>
        )}

        <div className={styles.grid}>
          {testimonials.map((t, i) => (
            <Reveal key={t.authorName} delay={((i % 3) + 1) as 1 | 2 | 3}>
              <TestimonialCard {...t} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
