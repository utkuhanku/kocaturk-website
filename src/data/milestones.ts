/**
 * Milestones Fallback Data — Sanity bağlantısı olmadığında kullanılır.
 *
 * Doğrulanmış kaynaklar:
 * - 1998: Turgutlu kuruluş, 52 kişi (Mustafa Kocatürk 2017)
 * - 2024: Roma Fibonacci 4 kategori dünya derecesi
 * - Gaziemir Havacılık Lisesi: KCT Flight Center, Boeing 737 + F-16
 */

export interface MilestoneData {
  yil: number;
  baslik: string;
  aciklama: string;
  onemli?: boolean;
}

export const MILESTONES: MilestoneData[] = [
  {
    yil: 1998,
    baslik: "Kuruluş — Manisa Turgutlu",
    aciklama:
      "Mustafa Kocatürk öncülüğünde 52 kişiyle ilk okul kapılarını açtı. Avşar Mahallesi'ndeki ilk bina, bugün çok kampüslü eğitim ekosisteminin başlangıç noktasıdır.",
    onemli: true,
  },
  {
    yil: 2000,
    baslik: "İlkokul kademesi açıldı",
    aciklama:
      "Anaokulu ile başlayan eğitim yolculuğuna ilkokul kademesi eklenerek tam döngülü ilköğretim yapısına geçildi.",
  },
  {
    yil: 2003,
    baslik: "Ortaokul kademesi",
    aciklama:
      "Büyüyen öğrenci ailesiyle birlikte ortaokul kademesi faaliyete girdi; Tam Öğrenme Modeli'nin temelleri atıldı.",
  },
  {
    yil: 2005,
    baslik: "Anadolu Lisesi açılışı",
    aciklama:
      "Turgutlu kampüsünde Anadolu Lisesi kademesi devreye girdi. YKS odaklı bireysel koçluk programı ilk kez uygulandı.",
  },
  {
    yil: 2008,
    baslik: "Fen Lisesi kuruldu",
    aciklama:
      "Fen bilimleri ve matematik odaklı yoğunlaştırılmış müfredat ile Fen Lisesi kademesi Turgutlu'da açıldı.",
    onemli: true,
  },
  {
    yil: 2010,
    baslik: "TEOG / OKS Türkiye birincilikleri",
    aciklama:
      "Kocatürk Okulları öğrencileri TEOG, OKS ve SBS sınavlarında ardı ardına Türkiye birincilikleri kazanmaya başladı. Toplam 21 Türkiye birincisi.",
  },
  {
    yil: 2013,
    baslik: "İzmir kampüsleri genişlemesi",
    aciklama:
      "Gaziemir ve Üçkuyular kampüsleriyle Kocatürk, İzmir'e taşındı. Ege bölgesindeki çok kampüslü büyüme başladı.",
    onemli: true,
  },
  {
    yil: 2015,
    baslik: "Robotik & Kodlama programı",
    aciklama:
      "Müfredata entegre Robotik & Kodlama programı tüm kademelerde başlatıldı. Algoritma düşüncesinden yapay zekâ uygulamalarına uzanan içerik hazırlandı.",
  },
  {
    yil: 2017,
    baslik: "WWAP — Dünya Genişliğinde Akademik Program",
    aciklama:
      "Kocatürk'e özgü World Wide Academic Program (WWAP) devreye girdi. eTwinning Avrupa proje ortaklıkları ve İngiltere Yaz Okulu bu çerçevede yapılandırıldı.",
  },
  {
    yil: 2019,
    baslik: "KCT Flight Center açıldı",
    aciklama:
      "Gaziemir kampüsünde İzmir'in ilk ve tek uçuş simülatör merkezi KCT Flight Center hizmete girdi. Boeing 737 ve F-16 simülatörleri ile Havacılık Lisesi altyapısı tamamlandı.",
    onemli: true,
  },
  {
    yil: 2020,
    baslik: "Havacılık Lisesi — bölgenin ilki",
    aciklama:
      "Gaziemir kampüsünde bölgenin tek Havacılık Lisesi açıldı. KCT Flight Center simülatörleriyle teorik ve pratik eğitim bir arada sunulmaya başlandı.",
    onemli: true,
  },
  {
    yil: 2022,
    baslik: "Kemalpaşa ve Tire kampüsleri",
    aciklama:
      "Kemalpaşa ve Tire'de yeni kampüsler devreye girerek Kocatürk'ün 4 ilçeye yayılan ağı tamamlandı.",
  },
  {
    yil: 2023,
    baslik: "eTwinning Avrupa Kalite Etiketi",
    aciklama:
      "İspanya, Yunanistan ve İtalya ile yürütülen eTwinning projeleri Avrupa Kalite Etiketi'ni aldı. Code Week 4 All koordinatörlüğü Avrupa sertifikasıyla ödüllendirildi.",
  },
  {
    yil: 2024,
    baslik: "Roma — 4 kategoride dünya derecesi",
    aciklama:
      "Öğrencilerimiz Arda Gürbüz ve Alp Gürbüz, Fibonacci International Robot Olympiad'da Lego Sumo 1 kg, Yapay Zekâ Şarkı, Otonom Araba ve Çizgi İzleyen kategorilerinde dünya derecesi kazandı.",
    onemli: true,
  },
  {
    yil: 2026,
    baslik: "4.000+ öğrenci · 5 kampüs",
    aciklama:
      "Manisa ve İzmir'deki 5 kampüste 4.000'den fazla öğrenciye ulaşan Kocatürk Okulları, Ege'nin eğitim omurgası olma yolunda ilerliyor.",
    onemli: true,
  },
];
