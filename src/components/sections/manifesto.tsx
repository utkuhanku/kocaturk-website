/**
 * Manifesto — Asimetrik tipografik quote + 3 Pillar
 *
 * @see .docs/07-PAGE-SPECIFICATIONS.md#bölüm-2--manifesto
 * @see .docs/06-COMPONENT-LIBRARY.md#33-manifesto
 * @see src/components/sections/manifesto.module.css
 *
 * Server component.
 * Quote satırları indent (0-4) prop'u ile asimetrik hizalanır.
 * Inline marginLeft: sadece dynamic indent değeri için (09-RULES kabul).
 * em → turuncu vurgu, font-style: normal zorunlu (09-RULES).
 *
 * @example
 * <Manifesto
 *   eyebrow="Kim Olduğumuz"
 *   lines={[{ text: "Doksan öğrenciyle", indent: 0 }, { text: "aynı aileyiz.", indent: 3, em: true }]}
 *   pillars={[...]}
 * />
 */

import { Pillar, type PillarProps } from "@/components/patterns/pillar";
import { Reveal } from "@/components/reveal";
import { Eyebrow } from "@/components/ui/eyebrow";
import { cn } from "@/lib/cn";
import styles from "./manifesto.module.css";

interface ManifestoLine {
  text: string;
  em?: boolean;
  indent: 0 | 1 | 2 | 3 | 4;
}

interface ManifestoProps {
  eyebrow: string;
  lines: ManifestoLine[];
  pillars: PillarProps[];
  className?: string;
}

export function Manifesto({ eyebrow, lines, pillars, className }: ManifestoProps) {
  return (
    <section className={cn(styles.section, className)}>
      <div className="wrap">
        <Eyebrow>{eyebrow}</Eyebrow>

        <div className={styles.quoteBlock}>
          {lines.map((line) => (
            <p
              key={line.text}
              className={cn(styles.quoteLine, line.em && styles.quoteLineEm)}
              style={
                line.indent > 0
                  ? { marginLeft: `calc(${line.indent} * var(--space-8))` }
                  : undefined
              }
            >
              {line.text}
            </p>
          ))}
        </div>

        <div className={styles.pillarsGrid}>
          {pillars.map((pillar, i) => (
            <Reveal key={pillar.number} delay={(i + 1) as 1 | 2 | 3}>
              <Pillar {...pillar} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
