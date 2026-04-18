import type { Metadata } from "next";
import { ContentNote } from "@/components/ui/content-note";
import styles from "./kvkk.module.css";

export const metadata: Metadata = {
  title: "KVKK Aydınlatma Metni | Kocatürk Okulları",
  description:
    "Kocatürk Okulları kişisel verilerin korunması kanunu (KVKK) kapsamındaki aydınlatma metni.",
};

export default function KvkkPage() {
  return (
    <div className={styles.page}>
      <div className="wrap narrow">
        <h1 className={styles.title}>KVKK Aydınlatma Metni</h1>
        <p className={styles.updated}>Son güncellenme: Ocak 2025</p>

        <ContentNote
          type="data"
          variant="block"
          description="Bu metin hukuki inceleme sürecindedir. Onaylanmış nihai versiyon yakında yayımlanacaktır."
        />

        <div className={styles.body}>
          <h2>1. Veri Sorumlusu</h2>
          <p>
            Kocatürk Eğitim Kurumları ("Kocatürk Okulları"), 6698 sayılı Kişisel Verilerin Korunması
            Kanunu kapsamında veri sorumlusu sıfatıyla hareket etmektedir.
          </p>

          <h2>2. İşlenen Kişisel Veriler</h2>
          <p>
            Ön kayıt, iletişim ve kariyer formları aracılığıyla toplanan ad, soyad, telefon,
            e-posta, çocuğa ait isim ve yaş bilgileri ile form içeriğindeki diğer veriler
            işlenmektedir.
          </p>

          <h2>3. Kişisel Verilerin İşlenme Amacı</h2>
          <p>
            Toplanan veriler; kayıt ve ön kayıt süreçlerinin yürütülmesi, iletişim taleplerin
            yanıtlanması, kariyer başvurularının değerlendirilmesi ve yasal yükümlülüklerin yerine
            getirilmesi amacıyla işlenmektedir.
          </p>

          <h2>4. Kişisel Verilerin Aktarılması</h2>
          <p>
            Kişisel verileriniz, yasal zorunluluklar dışında üçüncü taraflara aktarılmamaktadır.
          </p>

          <h2>5. Haklarınız</h2>
          <p>
            KVKK'nın 11. maddesi kapsamında; kişisel verilerinizin işlenip işlenmediğini öğrenme,
            düzeltilmesini talep etme ve silinmesini isteme haklarına sahipsiniz. Talepleriniz için
            info@kocaturk.k12.tr adresine başvurabilirsiniz.
          </p>
        </div>
      </div>
    </div>
  );
}
