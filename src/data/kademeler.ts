/**
 * Kademe Fallback Data — Sanity bağlantısı olmadığında kullanılır.
 * Sanity verisi gelince bu data override edilir.
 *
 * @see src/lib/sanity.ts — safeFetch helper
 */

export interface KademeData {
  slug: string;
  name: string;
  yasAraligi: string;
  icon: string;
  description: string;
  highlights: string[];
  programs: string[];
  kampusler: string[];
  ctaLabel: string;
  ctaHref: string;
}

export const KADEMELER: KademeData[] = [
  {
    slug: "anaokulu",
    name: "Anaokulu",
    yasAraligi: "3-6 yaş",
    icon: "bx bx-smile",
    description:
      "Oyun temelli öğrenme anlayışıyla çocukların duygusal, sosyal ve bilişsel gelişimini destekliyoruz. Zengin uyaranlı sınıf ortamları ve bireysel ilgi, her çocuğun kendi hızında büyümesini sağlar.",
    highlights: [
      "Oyun temelli öğrenme ortamı",
      "Sosyal ve duygusal gelişim atölyeleri",
      "Mind Kids: erken çocukluk zekâ oyunları",
      "Dil gelişimi ve hikâye anlatıcılığı",
      "Ritim, müzik ve hareket etkinlikleri",
      "Okuma-yazma ve matematiğe hazırlık",
    ],
    programs: ["mind-kids"],
    kampusler: ["turgutlu", "gaziemir"],
    ctaLabel: "Anaokulu Ön Kayıt",
    ctaHref: "/kayit/on-kayit",
  },
  {
    slug: "ilkokul",
    name: "İlkokul",
    yasAraligi: "6-10 yaş",
    icon: "bx bx-pencil",
    description:
      "Temel becerilerin kazandırıldığı bu kademede, merak odaklı öğretim yaklaşımı ve Mind Kids programı öğrencilerin eleştirel düşünme alışkanlığını erken yaşta şekillendirir. Türkçe, matematik ve fen bilgisinde güçlü bir temel atılır.",
    highlights: [
      "Tam Öğrenme Modeli ile bireysel kavrama takibi",
      "Mind Kids: satranç ve zekâ oyunları",
      "STEM temelleri ve deney atölyeleri",
      "Robotik & Kodlama — Scratch ile blok kodlama",
      "Okuma kültürü ve yazarlık atölyesi",
      "Spor ve sanat etkinlikleri",
    ],
    programs: ["mind-kids", "stem", "tam-ogrenme", "robotik-kodlama"],
    kampusler: ["turgutlu", "gaziemir", "uckuyular", "kemalpasa", "tire"],
    ctaLabel: "İlkokul Ön Kayıt",
    ctaHref: "/kayit/on-kayit",
  },
  {
    slug: "ortaokul",
    name: "Ortaokul",
    yasAraligi: "10-14 yaş",
    icon: "bx bx-book",
    description:
      "LGS'ye hazırlığın yanı sıra STEM, Robotik ve Design Thinking programları ile öğrencilerin analitik düşünce ve problem çözme becerileri geliştirilir. Tam Öğrenme Modeli, hiçbir öğrencinin geride kalmamasını güvence altına alır.",
    highlights: [
      "LGS hazırlık — deneme sınavı ve analiz sistemi",
      "STEM Laboratuvarı ve TÜBİTAK proje hazırlığı",
      "Robotik & Kodlama — Arduino ve ileri seviye",
      "Design Thinking atölyeleri",
      "WWAP: eTwinning Avrupa proje ortaklıkları",
      "PDR (Psikolojik Danışmanlık ve Rehberlik)",
    ],
    programs: ["stem", "tam-ogrenme", "robotik-kodlama", "design-thinking", "wwap"],
    kampusler: ["turgutlu", "gaziemir", "uckuyular", "kemalpasa", "tire"],
    ctaLabel: "Ortaokul Ön Kayıt",
    ctaHref: "/kayit/on-kayit",
  },
  {
    slug: "anadolu-lisesi",
    name: "Anadolu Lisesi",
    yasAraligi: "14-18 yaş",
    icon: "bx bx-graduation",
    description:
      "Devlet müfredatına ek olarak WWAP, STEM ve Robotik programlarıyla YKS'ye kapsamlı hazırlık sunan lise kademesi. İngiltere Yaz Okulu ve eTwinning projeleriyle küresel bakış açısı kazandırılır.",
    highlights: [
      "YKS hazırlık — bireysel koçluk ve deneme sistemi",
      "WWAP: İngiltere Yaz Okulu ve Avrupa projeleri",
      "STEM ve Robotik kulübü — uluslararası yarışmalar",
      "Design Thinking ve girişimcilik atölyeleri",
      "Üniversite yerleştirme danışmanlığı",
      "PDR ve kariyer planlama",
    ],
    programs: ["stem", "tam-ogrenme", "robotik-kodlama", "design-thinking", "wwap"],
    kampusler: ["turgutlu", "kemalpasa", "tire"],
    ctaLabel: "Lise Ön Kayıt",
    ctaHref: "/kayit/on-kayit",
  },
  {
    slug: "fen-lisesi",
    name: "Fen Lisesi",
    yasAraligi: "14-18 yaş",
    icon: "bx bx-flask",
    description:
      "Fen bilimleri ve matematik odaklı yoğunlaştırılmış müfredat, TÜBİTAK projeleri ve uluslararası olimpiyat hazırlığı ile YKS'de Türkiye'nin en seçkin üniversitelerine hazırlık sağlar.",
    highlights: [
      "Yoğunlaştırılmış fen ve matematik müfredatı",
      "TÜBİTAK 2204-A proje yarışması hazırlığı",
      "Ulusal ve uluslararası olimpiyat takımı",
      "Üniversite araştırma stajı olanakları",
      "Robotik & Kodlama — yapay zekâ ve veri bilimi",
      "YKS-MF/TM özel hazırlık modülü",
    ],
    programs: ["stem", "tam-ogrenme", "robotik-kodlama"],
    kampusler: ["turgutlu", "tire"],
    ctaLabel: "Fen Lisesi Ön Kayıt",
    ctaHref: "/kayit/on-kayit",
  },
  {
    slug: "havacilik-lisesi",
    name: "Havacılık Lisesi",
    yasAraligi: "14-18 yaş",
    icon: "bx bx-plane",
    description:
      "Gaziemir kampüsünde hizmet veren, bölgenin tek Havacılık Lisesi. TÜRKKUŞU ve THY iş birliğiyle şekillenen müfredat; teorik ders, simülatör eğitimi ve staj olanaklarıyla pilot, havacılık mühendisi ve kabin amiri yetiştirmeyi hedefler.",
    highlights: [
      "TÜRKKUŞU Türk Hava Kurumu iş birliği",
      "Havacılık simülatörü uygulamalı eğitim",
      "Meteoroloji, navigasyon ve uçuş teorisi",
      "THY bağlantılı staj olanakları",
      "SHGM onaylı ders içerikleri",
      "YKS'ye paralel akademik hazırlık",
    ],
    programs: ["robotik-kodlama", "havacilik"],
    kampusler: ["gaziemir"],
    ctaLabel: "Havacılık Lisesi Başvuru",
    ctaHref: "/kayit/on-kayit",
  },
];
