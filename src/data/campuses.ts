/**
 * Kampüs Fallback Data — Sanity bağlantısı olmadığında kullanılır.
 * Sanity verisi gelince bu data override edilir.
 *
 * @see src/lib/sanity.ts — safeFetch helper
 */

export interface CampusData {
  slug: string;
  name: string;
  il: string;
  ilce: string;
  badge?: "ana" | "ikinci-ana";
  kademeler: string[];
  ogrenciSayisi: number;
  ogretmenSayisi: number;
  koordinatlar: { lat: number; lng: number };
  adres: string;
  telefon: string;
  email: string;
  mudur: { isim: string; pozisyon: string };
  tesisler: string[];
  hikaye: string;
}

export const CAMPUSES: CampusData[] = [
  {
    slug: "turgutlu",
    name: "Manisa Turgutlu Kampüsü",
    il: "Manisa",
    ilce: "Turgutlu",
    badge: "ana",
    kademeler: ["Anaokulu", "İlkokul", "Ortaokul", "Anadolu Lisesi", "Fen Lisesi"],
    ogrenciSayisi: 0,
    ogretmenSayisi: 0,
    koordinatlar: { lat: 38.4955, lng: 27.7125 },
    adres: "Avşar Mahallesi, Ankara Asfaltı Üzeri No:1093, 45400 Turgutlu / Manisa",
    telefon: "0532 111 11 09",
    email: "info@kocaturk.k12.tr",
    mudur: { isim: "—", pozisyon: "Kampüs Müdürü" },
    tesisler: [
      "Bilim Laboratuvarı",
      "Spor Salonu",
      "Kütüphane",
      "Yemekhane",
      "Konferans Salonu",
      "Robotik Atölyesi",
    ],
    hikaye:
      "1998'de 52 kişiyle kurulan ilk kampüsümüz. Kocatürk Okulları'nın doğduğu yer. Çeyrek asırda dört ilçeye yayılan bir eğitim omurgasının başlangıç noktası.",
  },
  {
    slug: "gaziemir",
    name: "İzmir Gaziemir Kampüsü",
    il: "İzmir",
    ilce: "Gaziemir",
    badge: "ikinci-ana",
    kademeler: ["Anaokulu", "İlkokul", "Ortaokul", "Anadolu Lisesi", "✈ Havacılık Lisesi"],
    ogrenciSayisi: 0,
    ogretmenSayisi: 0,
    koordinatlar: { lat: 38.318, lng: 27.129 },
    adres: "Dokuz Eylül Mahallesi, Akçay Caddesi No:223, Gaziemir / İzmir",
    telefon: "0532 111 11 09",
    email: "info@kocaturk.k12.tr",
    mudur: { isim: "—", pozisyon: "Kampüs Müdürü" },
    tesisler: [
      "KCT Flight Center (Boeing 737 + F-16 simülatörleri)",
      "Bilim Laboratuvarı",
      "Spor Salonu",
      "Kütüphane",
      "Yemekhane",
      "Robotik Atölyesi",
    ],
    hikaye:
      "Bölgenin tek Havacılık Lisesi'ne ve KCT Flight Center'a ev sahipliği yapan kampüsümüz. Boeing 737 ile F-16 simülatörlerini bünyesinde barındıran İzmir'in ilk uçuş simülatör merkezi.",
  },
  {
    slug: "uckuyular",
    name: "İzmir Karabağlar Kampüsü",
    il: "İzmir",
    ilce: "Üçkuyular / Karabağlar",
    kademeler: ["İlkokul", "Ortaokul"],
    ogrenciSayisi: 0,
    ogretmenSayisi: 0,
    koordinatlar: { lat: 38.386, lng: 27.119 },
    adres: "Üçkuyular, Karabağlar, İzmir",
    telefon: "0532 111 11 09",
    email: "info@kocaturk.k12.tr",
    mudur: { isim: "—", pozisyon: "Kampüs Müdürü" },
    tesisler: ["Bilim Laboratuvarı", "Spor Salonu", "Kütüphane", "Yemekhane"],
    hikaye:
      "İzmir'in kalbinde, Karabağlar ilçesinde yer alan kampüsümüz. İlkokul ve ortaokul kademeleriyle bölge çocuklarına kaliteli eğitim sunuyor.",
  },
  {
    slug: "kemalpasa",
    name: "İzmir Kemalpaşa Kampüsü",
    il: "İzmir",
    ilce: "Kemalpaşa",
    kademeler: ["İlkokul", "Ortaokul", "Anadolu Lisesi"],
    ogrenciSayisi: 0,
    ogretmenSayisi: 0,
    koordinatlar: { lat: 38.428, lng: 27.417 },
    adres: "Kemalpaşa Merkez, İzmir",
    telefon: "0532 111 11 09",
    email: "info@kocaturk.k12.tr",
    mudur: { isim: "—", pozisyon: "Kampüs Müdürü" },
    tesisler: ["Bilim Laboratuvarı", "Spor Salonu", "Kütüphane", "Yemekhane", "Konferans Salonu"],
    hikaye:
      "İzmir'in verimli Kemalpaşa ovasında, ilkokul ve ortaokul yanı sıra Anadolu Lisesi kademesiyle YKS'ye güçlü hazırlık sunan kampüsümüz.",
  },
  {
    slug: "tire",
    name: "İzmir Tire Kampüsü",
    il: "İzmir",
    ilce: "Tire",
    kademeler: ["İlkokul", "Ortaokul", "Anadolu Lisesi", "Fen Lisesi"],
    ogrenciSayisi: 0,
    ogretmenSayisi: 0,
    koordinatlar: { lat: 38.088, lng: 27.733 },
    adres: "Tire Merkez, İzmir",
    telefon: "0532 111 11 09",
    email: "info@kocaturk.k12.tr",
    mudur: { isim: "—", pozisyon: "Kampüs Müdürü" },
    tesisler: ["Bilim Laboratuvarı", "Spor Salonu", "Kütüphane", "Yemekhane"],
    hikaye:
      "Ege'nin tarihi ilçesi Tire'de, Fen Lisesi dahil dört kademeyle hizmet veren kampüsümüz. Bölgede bilim odaklı eğitimin merkezi.",
  },
];
