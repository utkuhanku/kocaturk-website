/**
 * /egitim/programlar — Program Hub Sayfası
 *
 * Server component. Tüm pedagoji programları grid.
 * Her kart → /egitim/programlar/[slug] veya özel sayfa.
 */

import type { Metadata } from "next";
import { ProgramCard } from "@/components/patterns/program-card";
import { CtaBand } from "@/components/sections/cta-band";
import { Eyebrow } from "@/components/ui/eyebrow";
import { PROGRAMS } from "@/data/programs";
import styles from "./programlar.module.css";

export const metadata: Metadata = {
  title: "Pedagoji Programlarımız | Kocatürk Okulları",
  description:
    "Mind Kids, STEM, Tam Öğrenme, WWAP, Robotik & Kodlama, Design Thinking ve Havacılık. 7 markalanmış pedagoji programı.",
};

export default function ProgramlarPage() {
  return (
    <>
      {/* Hero */}
      <section className={styles.hero}>
        <div className="wrap">
          <Eyebrow>7 Program · Anaokulu'ndan Lise'ye</Eyebrow>
          <h1 className={styles.heroTitle}>Pedagoji Programları</h1>
          <p className={styles.heroLede}>
            Her program, Kocatürk'ün pedagoji anlayışının bir parçasıdır. Oyun temelli öğrenmeden
            uluslararası yarışmalara, bireysel gelişimden takım projelerine uzanan kapsamlı bir
            öğrenme ekosistemi.
          </p>
        </div>
      </section>

      {/* Programlar Grid */}
      <section className={styles.programlarSection}>
        <div className="wrap">
          <div className={styles.grid}>
            {PROGRAMS.map((p) => (
              <ProgramCard
                key={p.slug}
                icon={p.icon}
                name={p.name}
                shortDesc={p.shortDesc}
                ageRange={p.yasAraligi}
                href={p.href}
                featured={p.featured}
              />
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        eyebrow="Program Hakkında Bilgi"
        title={
          <>
            Hangi program
            <br />
            çocuğunuza <em>uygun?</em>
          </>
        }
        description="Eğitim danışmanımız, çocuğunuzun yaşına ve ilgi alanlarına göre en uygun programı birlikte belirlesin."
        ctas={[
          { href: "/kayit/on-kayit", label: "Ön Kayıt Başvurusu", variant: "primary" },
          { href: "/iletisim", label: "Danışmanlık Al", variant: "outline-light" },
        ]}
      />
    </>
  );
}
