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
    ogrenciSayisi: 1200,
    ogretmenSayisi: 85,
    koordinatlar: { lat: 38.4955, lng: 27.7125 },
    adres: "Turgutlu Merkez, Manisa",
    telefon: "+90 236 313 00 00",
    email: "turgutlu@kocaturk.k12.tr",
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
      "1998'de doksan öğrenciyle kurulan ilk kampüsümüz. Kocatürk Okulları'nın doğduğu yer. Çeyrek asırda dört ilçeye yayılan bir eğitim omurgasının başlangıç noktası.",
  },
  {
    slug: "gaziemir",
    name: "İzmir Gaziemir Kampüsü",
    il: "İzmir",
    ilce: "Gaziemir",
    badge: "ikinci-ana",
    kademeler: ["Anaokulu", "İlkokul", "Ortaokul", "Anadolu Lisesi", "✈ Havacılık Lisesi"],
    ogrenciSayisi: 950,
    ogretmenSayisi: 68,
    koordinatlar: { lat: 38.318, lng: 27.129 },
    adres: "Gaziemir Merkez, İzmir",
    telefon: "+90 232 251 00 00",
    email: "gaziemir@kocaturk.k12.tr",
    mudur: { isim: "—", pozisyon: "Kampüs Müdürü" },
    tesisler: [
      "Havacılık Simülatörü",
      "Bilim Laboratuvarı",
      "Spor Salonu",
      "Kütüphane",
      "Yemekhane",
      "Robotik Atölyesi",
    ],
    hikaye:
      "Bölgenin tek Havacılık Lisesi'ne ev sahipliği yapan kampüsümüz. TÜRKKUŞU ve THY iş birliğiyle şekillenen müfredat, geleceğin pilotlarını ve havacılık mühendislerini yetiştiriyor.",
  },
  {
    slug: "uckuyular",
    name: "İzmir Karabağlar Kampüsü",
    il: "İzmir",
    ilce: "Üçkuyular / Karabağlar",
    kademeler: ["İlkokul", "Ortaokul"],
    ogrenciSayisi: 620,
    ogretmenSayisi: 42,
    koordinatlar: { lat: 38.386, lng: 27.119 },
    adres: "Üçkuyular, Karabağlar, İzmir",
    telefon: "+90 232 261 00 00",
    email: "karabaglar@kocaturk.k12.tr",
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
    ogrenciSayisi: 710,
    ogretmenSayisi: 48,
    koordinatlar: { lat: 38.428, lng: 27.417 },
    adres: "Kemalpaşa Merkez, İzmir",
    telefon: "+90 232 878 00 00",
    email: "kemalpasa@kocaturk.k12.tr",
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
    ogrenciSayisi: 535,
    ogretmenSayisi: 38,
    koordinatlar: { lat: 38.088, lng: 27.733 },
    adres: "Tire Merkez, İzmir",
    telefon: "+90 232 512 00 00",
    email: "tire@kocaturk.k12.tr",
    mudur: { isim: "—", pozisyon: "Kampüs Müdürü" },
    tesisler: ["Bilim Laboratuvarı", "Spor Salonu", "Kütüphane", "Yemekhane"],
    hikaye:
      "Ege'nin tarihi ilçesi Tire'de, Fen Lisesi dahil dört kademeyle hizmet veren kampüsümüz. Bölgede bilim odaklı eğitimin merkezi.",
  },
];
