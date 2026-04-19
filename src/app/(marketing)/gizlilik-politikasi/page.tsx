import type { Metadata } from "next";
import { ContentNote } from "@/components/ui/content-note";
import styles from "./gizlilik.module.css";

export const metadata: Metadata = {
  title: "Gizlilik Politikası | Kocatürk Okulları",
  description:
    "Kocatürk Okulları gizlilik politikası ve kişisel verilerin korunması hakkında bilgi.",
};

export default function GizlilikPolitikasiPage() {
  return (
    <div className={styles.page}>
      <div className="wrap narrow">
        <h1 className={styles.title}>Gizlilik Politikası</h1>
        <p className={styles.updated}>Son güncellenme: Ocak 2025</p>

        <ContentNote
          type="data"
          variant="block"
          description="Bu metin hukuki inceleme sürecindedir. Onaylanmış nihai versiyon yakında yayımlanacaktır."
        />

        <div className={styles.body}>
          <h2>Bilgi Toplama</h2>
          <p>
            Web sitemizi ziyaret ettiğinizde belirli bilgiler otomatik olarak toplanabilir. Bu
            bilgiler yalnızca site işlevselliğini iyileştirmek amacıyla kullanılır.
          </p>

          <h2>Üçüncü Taraf Hizmetleri</h2>
          <p>
            Sitemizde harita ve analitik gibi üçüncü taraf hizmetler kullanılabilmektedir. Bu
            hizmetlerin gizlilik politikaları kendi sağlayıcıları tarafından belirlenir.
          </p>

          <h2>Veri Güvenliği</h2>
          <p>
            Form aracılığıyla paylaştığınız veriler şifreli bağlantı (HTTPS) üzerinden iletilmekte
            ve yalnızca yetkili personel tarafından erişilebilmektedir.
          </p>

          <h2>Değişiklikler</h2>
          <p>Bu politika zaman zaman güncellenebilir. Değişiklikler bu sayfada yayımlanır.</p>

          <h2>İletişim</h2>
          <p>
            Gizlilik politikamız hakkında sorularınız için info@kocaturk.k12.tr adresine
            ulaşabilirsiniz.
          </p>
        </div>
      </div>
    </div>
  );
}
