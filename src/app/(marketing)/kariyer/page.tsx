import type { Metadata } from "next";
import { KariyerForm } from "@/components/forms/kariyer-form";
import { Eyebrow } from "@/components/ui/eyebrow";
import styles from "./kariyer.module.css";

export const metadata: Metadata = {
  title: "Kariyer | Kocatürk Okulları",
  description:
    "Kocatürk Okulları ailesine katılın. Öğretmen, idareci ve destek personeli pozisyonları için başvurun.",
};

export default function KariyerPage() {
  return (
    <div className={styles.page}>
      <div className="wrap">
        <div className={styles.inner}>
          <aside className={styles.sidebar}>
            <Eyebrow>Kariyer</Eyebrow>
            <h1 className={styles.sidebarTitle}>
              Geleceği şekillendiren
              <br />
              <em>ekibe katılın.</em>
            </h1>
            <p className={styles.sidebarDesc}>
              1998'den bu yana büyüyen Kocatürk ailesinin bir parçası olun. Öğretmenler, idareciler
              ve destek personeli için açık pozisyonlar.
            </p>
            <ul className={styles.sidebarList}>
              <li>
                <i className="bx bx-check" aria-hidden="true" />5 kampüs · 4 ilçe
              </li>
              <li>
                <i className="bx bx-check" aria-hidden="true" />
                Kariyer gelişim programları
              </li>
              <li>
                <i className="bx bx-check" aria-hidden="true" />
                Uluslararası proje ortaklıkları (eTwinning, WWAP)
              </li>
              <li>
                <i className="bx bx-check" aria-hidden="true" />
                Yenilikçi pedagoji yaklaşımı
              </li>
            </ul>
          </aside>

          <div className={styles.formCard}>
            <KariyerForm />
          </div>
        </div>
      </div>
    </div>
  );
}
