/**
 * ProgramsGrid — Pedagoji programları 3×2 grid
 *
 * @see .docs/07-PAGE-SPECIFICATIONS.md#bölüm-6--programs-grid
 * @see .docs/06-COMPONENT-LIBRARY.md#38-programsgrid
 * @see src/components/sections/programs-grid.module.css
 *
 * Server component. 6 ProgramCard, repeat(3, 1fr) grid.
 *
 * @example
 * <ProgramsGrid
 *   eyebrow="Pedagoji Programlarımız"
 *   title="Markalanmış öğrenme modeli."
 *   programs={[
 *     { icon: "bx bx-brain", name: "Mind Kids", shortDesc: "...", href: "/..." },
 *   ]}
 * />
 */

import type { ReactNode } from "react";
import { ProgramCard, type ProgramCardProps } from "@/components/patterns/program-card";
import { Eyebrow } from "@/components/ui/eyebrow";
import { cn } from "@/lib/cn";
import styles from "./programs-grid.module.css";

interface ProgramsGridProps {
  eyebrow?: string;
  title?: ReactNode;
  programs: ProgramCardProps[];
  className?: string;
}

export function ProgramsGrid({ eyebrow, title, programs, className }: ProgramsGridProps) {
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
          {programs.map((p) => (
            <ProgramCard key={p.href} {...p} />
          ))}
        </div>
      </div>
    </section>
  );
}
