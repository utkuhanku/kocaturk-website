export type NewsCategory = "uluslararasi" | "akademik" | "proje" | "duyuru";

export interface NewsData {
  slug: string;
  title: string;
  excerpt: string;
  body: string;
  category: NewsCategory;
  categoryLabel: string;
  date: string;
}

export const NEWS: NewsData[] = [
  {
    slug: "roma-fibonacci-2024",
    title: "Öğrencilerimiz Roma Fibonacci'de 4 Kategoride Dünya Derecesi Kazandı",
    excerpt:
      "Arda Gürbüz ve Alp Gürbüz, Kasım 2024'te Roma'da düzenlenen Fibonacci International Robot Olympiad'da dört ayrı kategoride dünya çapında dereceler kazandı.",
    body: "Kasım 2024'te Roma'da gerçekleştirilen Fibonacci International Robot Olympiad'da öğrencilerimiz Arda Gürbüz ve Alp Gürbüz tarihi bir başarıya imza attı. Lego Sumo 1 kg kategorisinde dünya birincisi, Yapay Zekâ Şarkı kategorisinde dünya birincisi, Otonom Araba kategorisinde dünya ikincisi ve Çizgi İzleyen kategorisinde dünya dördüncüsü olan ikili, Kocatürk Okulları'nın uluslararası arenada ne denli güçlü bir eğitim sunduğunu bir kez daha kanıtladı.",
    category: "uluslararasi",
    categoryLabel: "Uluslararası",
    date: "2024-11-18",
  },
  {
    slug: "etwinning-kalite-etiketi-2023",
    title: "eTwinning Projemiz Avrupa Kalite Etiketini Aldı",
    excerpt:
      "İspanya, Yunanistan ve İtalya ile yürütülen eTwinning projemiz, Avrupa Kalite Etiketi'ni alarak Kocatürk'ün uluslararası eğitim kalitesini tescilledi.",
    body: "Kocatürk Okulları koordinasyonunda İspanya, Yunanistan ve İtalya'daki ortakları ile hayata geçirilen eTwinning projesi, Avrupa Kalite Etiketi'ni almaya hak kazandı. Aynı zamanda Code Week 4 All koordinatörlüğümüz de Avrupa sertifikasıyla ödüllendirildi. Bu başarı, okulumuzun Avrupa eğitim ağındaki etkin rolünü pekiştirmektedir.",
    category: "proje",
    categoryLabel: "Proje",
    date: "2023-10-15",
  },
  {
    slug: "ingiltere-yaz-okulu-2024",
    title: "İngiltere Yaz Okulu Kayıtları Başladı",
    excerpt:
      "2024 yaz dönemi İngiltere Yaz Okulu programına katılmak isteyen öğrenciler için kayıtlar başlamıştır. Kontenjanlar sınırlıdır.",
    body: "Kocatürk Okulları'nın köklü İngiltere Yaz Okulu programı 2024 yılında da devam ediyor. İngiltere'nin önde gelen eğitim kurumları ile ortaklaşa düzenlenen program kapsamında öğrencilerimiz yoğun İngilizce eğitiminin yanı sıra kültürel geziler ve uluslararası arkadaşlıklar edinme fırsatı buluyor. Kontenjanlar sınırlıdır, başvurular için danışmanınızla iletişime geçin.",
    category: "duyuru",
    categoryLabel: "Duyuru",
    date: "2024-03-01",
  },
  {
    slug: "lgs-turkiye-ilk-1000-2024",
    title: "LGS'de Türkiye İlk 1.000'e Girdik",
    excerpt:
      "2024 LGS sonuçlarına göre öğrencilerimizden birden fazlası Türkiye geneli ilk 1.000 listesine girdi. Toplam 21 Türkiye birincimiz var.",
    body: "2024 yılı LGS (Liselere Geçiş Sistemi) sınavı sonuçlarında Kocatürk Okulları öğrencileri bir kez daha parlak bir başarı sergiledi. Birden fazla öğrencimiz Türkiye geneli ilk 1.000 listesine girmeyi başardı. 1998'den bu yana TEOG, OKS, SBS ve LGS'de toplam 21 Türkiye birincisi yetiştiren okulumuz, akademik başarı sicilini güçlendirmeye devam ediyor.",
    category: "akademik",
    categoryLabel: "Akademik",
    date: "2024-06-25",
  },
  {
    slug: "kct-flight-center-robotik-kulup-2024",
    title: "KCT Flight Center'da Yeni Dönem: Robotik Kulübü Entegrasyonu",
    excerpt:
      "Gaziemir kampüsündeki KCT Flight Center, Robotik & Kodlama kulübü müfredatıyla entegre edilerek öğrencilere kapsamlı bir STEM deneyimi sunuluyor.",
    body: "Gaziemir kampüsünde bulunan KCT Flight Center — İzmir'in ilk ve tek uçuş simülatör merkezi — bu yıl Robotik & Kodlama kulübü müfredatıyla entegre edildi. Boeing 737 tam kokpit simülatörü ve F-16 savaş uçağı simülatörüyle eğitim gören Havacılık Lisesi öğrencileri, artık aynı zamanda otonom sistem yazılımları ve yapay zekâ destekli navigasyon projeleri üzerine de çalışıyor.",
    category: "proje",
    categoryLabel: "Proje",
    date: "2024-09-10",
  },
  {
    slug: "2025-2026-kayit-duyurusu",
    title: "2025-2026 Eğitim-Öğretim Yılı Kayıt Dönemi Başladı",
    excerpt:
      "2025-2026 eğitim-öğretim yılı için ön kayıt başvuruları açıldı. Tüm kademeler ve kampüsler için erken kayıt avantajlarından yararlanın.",
    body: "2025-2026 eğitim-öğretim yılı ön kayıt başvuruları tüm kampüslerimizde başladı. Anaokulu, ilkokul, ortaokul, Anadolu Lisesi, Fen Lisesi ve Havacılık Lisesi kademelerinde kontenjanlar dolmadan başvurunuzu tamamlayın. Erken kayıt avantajları ve bursluluk sınavı tarihleri için danışmanınızla iletişime geçin.",
    category: "duyuru",
    categoryLabel: "Duyuru",
    date: "2025-01-15",
  },
  {
    slug: "stem-olympiad-izmir-2024",
    title: "İzmir Bölge STEM Olimpiyatı'nda Birinci Olduk",
    excerpt:
      "Kocatürk Okulları öğrencileri 2024 İzmir Bölge STEM Olimpiyatı'nda takım birinciliği kazandı. Öğrencilerimiz Ulusal Finale taşındı.",
    body: "2024 yılında düzenlenen İzmir Bölge STEM Olimpiyatı'nda Kocatürk Okulları öğrencileri takım birinciliği elde etti. Robotik, kodlama ve mühendislik tasarım kategorilerinde üstün performans sergileyen ekibimiz, Ulusal Final'e katılmaya hak kazandı. Bu başarı, okulumuzun Robotik & Kodlama müfredatının ne denli sağlam temeller üzerine kurulduğunu bir kez daha göstermektedir.",
    category: "akademik",
    categoryLabel: "Akademik",
    date: "2024-04-20",
  },
  {
    slug: "kemalpaşa-kampus-acilisi-2022",
    title: "Kemalpaşa Kampüsümüz Hizmete Açıldı",
    excerpt:
      "İzmir Kemalpaşa'daki yeni kampüsümüz 2022-2023 eğitim-öğretim yılında kapılarını açtı. Bölgenin eğitim ihtiyacına güçlü bir yanıt.",
    body: "2022-2023 eğitim-öğretim yılında İzmir Kemalpaşa kampüsümüz hizmete girdi. İlkokul, ortaokul ve lise kademelerini bünyesinde barındıran yeni kampüs, bölge ailelerine Kocatürk kalitesini yakın bir mesafede sunuyor. Açılışla birlikte Kocatürk Okulları 5 kampüse ulaştı.",
    category: "duyuru",
    categoryLabel: "Duyuru",
    date: "2022-09-05",
  },
];

export const NEWS_CATEGORIES: Record<NewsCategory, string> = {
  uluslararasi: "Uluslararası",
  akademik: "Akademik",
  proje: "Proje",
  duyuru: "Duyuru",
};
