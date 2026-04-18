/**
 * Yönetim Fallback Data — Sanity bağlantısı olmadığında kullanılır.
 *
 * Doğrulanmış kaynaklar:
 * - Mustafa Kocatürk: Kurucu, 1998 Turgutlu, alıntı doğrulandı (2017 konuşması)
 * - Tüm diğer kadro: placeholder — isimler Sanity'den gelecek
 */

export interface YonetimData {
  slug: string;
  isim: string;
  pozisyon: string;
  kademe: "kurucu" | "ust-yonetim" | "kampus-muduru";
  kampus?: string;
  alinti?: string;
  kisaBio?: string;
  placeholder?: boolean;
}

export const YONETIM: YonetimData[] = [
  {
    slug: "mustafa-kocaturk",
    isim: "Mustafa Kocatürk",
    pozisyon: "Kurucu",
    kademe: "kurucu",
    alinti:
      "1998 yılında Turgutlu'da 52 kişiyle eğitim hayatına adım attık. Büyük bir eğitim ailesiyiz; gelecek nesillere iyi insanlar yetiştirme amacındayız.",
    kisaBio:
      "Kocatürk Okulları kurucusu. 1998'de Manisa Turgutlu'da tek bir okulla başlayan aile şirketini, bugün İzmir ve Manisa'da çok kampüslü bir eğitim ekosistemine dönüştürdü.",
    placeholder: false,
  },
  /* Üst Yönetim — isimler Sanity'den gelecek */
  {
    slug: "genel-mudur",
    isim: "—",
    pozisyon: "Genel Müdür",
    kademe: "ust-yonetim",
    placeholder: true,
  },
  {
    slug: "egitim-koordinatoru",
    isim: "—",
    pozisyon: "Eğitim Koordinatörü",
    kademe: "ust-yonetim",
    placeholder: true,
  },
  {
    slug: "idari-koordinator",
    isim: "—",
    pozisyon: "İdari Koordinatör",
    kademe: "ust-yonetim",
    placeholder: true,
  },
  /* Kampüs Müdürleri — isimler Sanity'den gelecek */
  {
    slug: "turgutlu-mudur",
    isim: "—",
    pozisyon: "Kampüs Müdürü",
    kademe: "kampus-muduru",
    kampus: "Manisa Turgutlu Kampüsü",
    placeholder: true,
  },
  {
    slug: "gaziemir-mudur",
    isim: "—",
    pozisyon: "Kampüs Müdürü",
    kademe: "kampus-muduru",
    kampus: "İzmir Gaziemir Kampüsü",
    placeholder: true,
  },
  {
    slug: "uckuyular-mudur",
    isim: "—",
    pozisyon: "Kampüs Müdürü",
    kademe: "kampus-muduru",
    kampus: "İzmir Karabağlar Kampüsü",
    placeholder: true,
  },
  {
    slug: "kemalpasa-mudur",
    isim: "—",
    pozisyon: "Kampüs Müdürü",
    kademe: "kampus-muduru",
    kampus: "İzmir Kemalpaşa Kampüsü",
    placeholder: true,
  },
  {
    slug: "tire-mudur",
    isim: "—",
    pozisyon: "Kampüs Müdürü",
    kademe: "kampus-muduru",
    kampus: "İzmir Tire Kampüsü",
    placeholder: true,
  },
  {
    slug: "havacilik-mudur",
    isim: "—",
    pozisyon: "Havacılık Lisesi Müdürü",
    kademe: "kampus-muduru",
    kampus: "Gaziemir — KCT Flight Center",
    placeholder: true,
  },
];
