import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { ContentNote } from "@/components/ui/content-note";
import { Eyebrow } from "@/components/ui/eyebrow";
import styles from "../kayit.module.css";

export const metadata: Metadata = {
  title: "Ücret Tarifeleri | Kocatürk Okulları",
  description:
    "Kocatürk Okulları 2025-2026 eğitim-öğretim yılı ücret tarifeleri. Kademe ve kampüse göre yıllık ücret bilgisi.",
};

export default function UcretlerPage() {
  return (
    <section className={styles.ucretlerSection}>
      <div className="wrap">
        <Eyebrow>Kayıt</Eyebrow>
        <h1 className={styles.sectionTitle}>Ücret Tarifeleri</h1>

        <div className={styles.ucretlerNote}>
          <ContentNote
            type="data"
            variant="block"
            description="2025-2026 eğitim-öğretim yılı ücret tarifeleri — bilgiler güncelleniyor. Güncel fiyat bilgisi için lütfen ön kayıt formunu doldurun veya kampüsünüzü arayın."
          />
        </div>

        <div
          style={{
            marginTop: "var(--space-12)",
            display: "flex",
            gap: "var(--space-4)",
            flexWrap: "wrap",
          }}
        >
          <Button href="/kayit/on-kayit" variant="primary">
            Ön Kayıt &amp; Fiyat Bilgisi Al
          </Button>
          <Button href="/kayit/bursluluk" variant="outline">
            Bursluluk İmkânları
          </Button>
        </div>
      </div>
    </section>
  );
}
