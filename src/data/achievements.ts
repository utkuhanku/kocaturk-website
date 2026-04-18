/**
 * Başarı Fallback Data — Sanity bağlantısı olmadığında kullanılır.
 *
 * Doğrulanmış kaynaklar:
 * - Roma 2024: Kasım 2024, Arda/Alp Gürbüz, 4 kategori
 * - KCT Robotics Ege Bölge: 9 takım, 5 kupa, 4 jüri özel ödülü
 * - Beren Baykal: Ritmika Cup Top Aleti Türkiye 1.
 * - Sinem Satıcı: Code Week 4 All koordinatör
 */

export interface AchievementData {
  slug: string;
  category: "uluslararasi" | "akademik" | "sportif" | "sanatsal";
  title: string;
  ogrenciler: string[];
  tarih: string;
  yer: string;
  derece: string;
  featured: boolean;
  kisaAciklama: string;
  uzunAciklama: string;
}

export const ACHIEVEMENTS: AchievementData[] = [
  {
    slug: "roma-fibonacci-2024",
    category: "uluslararasi",
    title: "Fibonacci International Robot Olympiad 2024",
    ogrenciler: ["Arda Gürbüz", "Alp Gürbüz"],
    tarih: "2024-11-22",
    yer: "Roma, İtalya",
    derece: "4 kategoride dünya derecesi (1., 1., 2., 4.)",
    featured: true,
    kisaAciklama:
      "Arda ve Alp Gürbüz, Roma'da düzenlenen Fibonacci International Robot Olympiad'da dört kategoride dünya derecesi kazandı.",
    uzunAciklama:
      "Kasım 2024'te Roma'da düzenlenen Fibonacci International Robot Olympiad'da öğrencilerimiz Arda Gürbüz ve Alp Gürbüz, Lego Sumo 1 kg kategorisinde Dünya 1.si, Yapay Zekâ Şarkı kategorisinde Dünya 1.si, Otonom Araba kategorisinde Dünya 2.si ve Çizgi İzleyen Robot kategorisinde Dünya 4.sü olarak dört ayrı kategoride derece elde etti. Bu sonuç, KCT Robotik & Kodlama programının uluslararası standartlarını doğrulayan somut bir göstergedir.",
  },
  {
    slug: "kct-robotics-ege-bolge",
    category: "uluslararasi",
    title: "Fibonacci Ege Bölge Robot Şampiyonası",
    ogrenciler: [],
    tarih: "2024-01-01",
    yer: "İzmir",
    derece: "5 kupa, 4 jüri özel ödülü",
    featured: true,
    kisaAciklama:
      "KCT Robotics takımları Fibonacci Ege Bölge Şampiyonası'nda 9 takımla sahaya çıkarak 5 kupa ve 4 jüri özel ödülü kazandı.",
    uzunAciklama:
      "Fibonacci Ege Bölge Robot Şampiyonası'nda 9 farklı kategoride sahaya çıkan KCT Robotics takımları, 5 kupa ve 4 jüri özel ödülü ile döndü. Bu başarı, KCT Robotik & Kodlama programının bölgesel rekabetteki konumunu ortaya koymaktadır.",
  },
  {
    slug: "kct-robotics-drone-ege",
    category: "uluslararasi",
    title: "Drone Ege Bölge 2. Ligi",
    ogrenciler: [],
    tarih: "2024-01-01",
    yer: "İzmir",
    derece: "2. Lig + Jüri Özel Ödülü",
    featured: false,
    kisaAciklama:
      "KCT Robotics Drone takımı, Ege Bölge Drone Ligi'nde 2. Lig sıralamasına ulaşarak Jüri Özel Ödülü'ne layık görüldü.",
    uzunAciklama:
      "Drone kategorisinde düzenlenen Ege Bölge Ligi'nde KCT Robotics takımı 2. Lig'de yer alarak Jüri Özel Ödülü kazandı. Drone programı, KCT Robotik & Kodlama müfredatının lise kademesindeki ileri seviye uygulamalarından biridir.",
  },
  {
    slug: "voleybol-gaziemir-sampiyon",
    category: "sportif",
    title: "Genç Kızlar Voleybol Gaziemir Şampiyonluğu",
    ogrenciler: [],
    tarih: "2024-01-01",
    yer: "Gaziemir, İzmir",
    derece: "Gaziemir İlçe Şampiyonu",
    featured: false,
    kisaAciklama:
      "Genç Kızlar Voleybol takımımız Gaziemir İlçe Şampiyonası'nda birinci olarak ilçe şampiyonluğunu kazandı.",
    uzunAciklama:
      "Gaziemir kampüsümüzün Genç Kızlar Voleybol takımı, ilçe şampiyonasında sergilediği performansla Gaziemir İlçe Şampiyonu unvanını elde etti. Spor alanındaki bu başarı, Kocatürk'ün akademik müfredat dışındaki bütünsel gelişim anlayışının somut bir yansımasıdır.",
  },
  {
    slug: "beren-baykal-ritmika",
    category: "sanatsal",
    title: "Ritmika Cup Top Aleti — Türkiye 1.si",
    ogrenciler: ["Beren Baykal"],
    tarih: "2014-01-01",
    yer: "Türkiye",
    derece: "Türkiye 1.si",
    featured: false,
    kisaAciklama:
      "Öğrencimiz Beren Baykal, Ritmika Cup Ritim Cimnastik Yarışması Top Aleti kategorisinde Türkiye birincisi oldu.",
    uzunAciklama:
      "Ritmika Cup Ritim Cimnastik Yarışması Top Aleti kategorisinde öğrencimiz Beren Baykal Türkiye birinciliğini kazandı. Kocatürk Okulları, sporcu öğrencilerinin antrenman programlarını destekleyerek bu başarının altyapısını oluşturdu.",
  },
  {
    slug: "teog-oks-turkiye-birincileri",
    category: "akademik",
    title: "TEOG / OKS / SBS Türkiye Birincilikleri",
    ogrenciler: [],
    tarih: "2010-01-01",
    yer: "Türkiye",
    derece: "21 Türkiye Birincisi",
    featured: false,
    kisaAciklama:
      "Kocatürk Okulları, yıllar içinde TEOG, OKS ve SBS sınavlarında 21 Türkiye birincisi yetiştirdi.",
    uzunAciklama:
      "1998'den bu yana Kocatürk Okulları mezunları, Türkiye genelinde yapılan TEOG, OKS ve SBS (ilköğretim Orta Öğretim sınavları) sınavlarında 21 kez Türkiye birincisi unvanını kazandı. Bu başarılar, Tam Öğrenme Modeli ve bireysel ilerleme takip sisteminin akademik çıktılarını doğrulamaktadır.",
  },
  {
    slug: "codeweek-4-all-sertifikasi",
    category: "akademik",
    title: "Code Week 4 All Avrupa Koordinatörlüğü",
    ogrenciler: ["Sinem Satıcı"],
    tarih: "2023-10-14",
    yer: "Avrupa (çevrimiçi)",
    derece: "Code Week 4 All Sertifikası",
    featured: false,
    kisaAciklama:
      "Öğretmenimiz Sinem Satıcı koordinatörlüğünde gerçekleştirilen Code Week 4 All etkinliği Avrupa Code Week sertifikasına layık görüldü.",
    uzunAciklama:
      "Avrupa Komisyonu'nun her yıl Ekim ayında düzenlediği Code Week kapsamında öğretmenimiz Sinem Satıcı koordinatörlüğünde yürütülen Code Week 4 All etkinliği, Avrupa çapında tanınan Code Week sertifikası ile ödüllendirildi. Etkinlik, öğrencilerin kodlama becerilerini Avrupa'daki akranlarıyla paylaştığı çevrimiçi bir platform üzerinde gerçekleşti.",
  },
  {
    slug: "etwinning-avrupa-projeleri",
    category: "akademik",
    title: "eTwinning Avrupa Proje Ortaklıkları",
    ogrenciler: [],
    tarih: "2023-01-01",
    yer: "Avrupa (İspanya, Yunanistan, İtalya)",
    derece: "Avrupa Kalite Etiketi",
    featured: false,
    kisaAciklama:
      "İspanya, Yunanistan ve İtalya ile yürütülen eTwinning projeleri Avrupa Kalite Etiketi ile ödüllendirildi.",
    uzunAciklama:
      "Avrupa Komisyonu'nun eTwinning platformu aracılığıyla İspanya, Yunanistan ve İtalya'daki partner okullarla birlikte yürütülen ortak proje çalışmaları, Avrupa Kalite Etiketi'ne layık görüldü. Projeler; dijital medya, sürdürülebilirlik ve kodlama temaları etrafında şekillendi ve Kocatürk öğrencilerinin küresel bakış açısı geliştirmesine katkı sağladı.",
  },
];
