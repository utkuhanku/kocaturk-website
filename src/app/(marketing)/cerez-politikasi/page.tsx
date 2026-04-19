import type { Metadata } from "next";
import { ContentNote } from "@/components/ui/content-note";
import styles from "./cerez.module.css";

export const metadata: Metadata = {
  title: "Çerez Politikası | Kocatürk Okulları",
  description: "Kocatürk Okulları web sitesinde kullanılan çerezler ve çerez politikası.",
};

export default function CerezPolitikasiPage() {
  return (
    <div className={styles.page}>
      <div className="wrap narrow">
        <h1 className={styles.title}>Çerez Politikası</h1>
        <p className={styles.updated}>Son güncellenme: Ocak 2025</p>

        <ContentNote
          type="data"
          variant="block"
          description="Bu metin hukuki inceleme sürecindedir. Onaylanmış nihai versiyon yakında yayımlanacaktır."
        />

        <div className={styles.body}>
          <h2>Çerez Nedir?</h2>
          <p>
            Çerezler, web sitemizi ziyaret ettiğinizde cihazınıza kaydedilen küçük metin
            dosyalarıdır. Siteyi daha verimli çalıştırmak ve ziyaret deneyiminizi iyileştirmek
            amacıyla kullanılmaktadır.
          </p>

          <h2>Hangi Çerezleri Kullanıyoruz?</h2>
          <p>
            Sitemizde yalnızca zorunlu teknik çerezler kullanılmaktadır. Bu çerezler, sitenin düzgün
            çalışması için gereklidir ve kişisel veri toplamaz.
          </p>

          <h2>Çerezleri Nasıl Kontrol Edebilirsiniz?</h2>
          <p>
            Tarayıcı ayarlarınızdan çerezleri reddedebilir veya silebilirsiniz. Ancak bu durumda
            sitenin bazı özellikleri düzgün çalışmayabilir.
          </p>

          <h2>İletişim</h2>
          <p>
            Çerez politikamız hakkında sorularınız için info@kocaturk.k12.tr adresine
            ulaşabilirsiniz.
          </p>
        </div>
      </div>
    </div>
  );
}
