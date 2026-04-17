/**
 * Program Fallback Data — Sanity bağlantısı olmadığında kullanılır.
 * Sanity verisi gelince bu data override edilir.
 *
 * @see src/lib/sanity.ts — safeFetch helper
 */

export interface ProgramData {
  slug: string;
  name: string;
  icon: string;
  shortDesc: string;
  longDesc: string;
  kademeler: string[];
  yasAraligi: string;
  featured: boolean;
  highlights: string[];
  href: string;
}

export const PROGRAMS: ProgramData[] = [
  {
    slug: "mind-kids",
    name: "Mind Kids",
    icon: "bx bx-brain",
    shortDesc: "Akıl ve zekâ oyunları",
    longDesc:
      "Mind Kids programı, 3-10 yaş arasındaki çocuklara akıl yürütme, problem çözme ve eleştirel düşünme becerilerini oyun temelli aktiviteler aracılığıyla kazandırır. Satranç, zekâ oyunları ve strateji geliştirme çalışmaları müfredatın temelini oluşturur.",
    kademeler: ["Anaokulu", "İlkokul"],
    yasAraligi: "3-10 yaş",
    featured: false,
    highlights: [
      "Satranç eğitimi — başlangıç seviyesinden turnuva hazırlığına",
      "Zekâ oyunları ve tangram atölyeleri",
      "Eleştirel düşünme ve strateji geliştirme",
      "Dikkat, konsantrasyon ve hafıza egzersizleri",
      "Bireysel ilerleme takibi",
    ],
    href: "/egitim/programlar/mind-kids",
  },
  {
    slug: "stem",
    name: "STEM",
    icon: "bx bx-atom",
    shortDesc: "Eğlenceli bilim programı",
    longDesc:
      "STEM programı; fen, teknoloji, mühendislik ve matematik disiplinlerini bütünleşik bir yaklaşımla öğretir. Laboratuvar deneyleri, tasarım projeleri ve mühendislik yarışmaları öğrencilerin bilimsel düşünce yapısını pekiştirir.",
    kademeler: ["İlkokul", "Ortaokul", "Anadolu Lisesi", "Fen Lisesi"],
    yasAraligi: "6-18 yaş",
    featured: false,
    highlights: [
      "Laboratuvar deneyleri ve bilimsel gözlem",
      "Mühendislik tasarım süreci (EDP)",
      "TÜBİTAK proje yarışmalarına hazırlık",
      "3D modelleme ve prototipleme",
      "Disiplinlerarası proje çalışmaları",
    ],
    href: "/egitim/programlar/stem",
  },
  {
    slug: "tam-ogrenme",
    name: "Tam Öğrenme",
    icon: "bx bx-book-open",
    shortDesc: "Bireysel hız, tam kavrama",
    longDesc:
      "Bloom'un Tam Öğrenme Modeli'nden ilham alan bu yaklaşım, her öğrencinin kendi hızında kavramasını hedefler. Bireysel geri bildirim döngüleri, düzeltici etkinlikler ve zenginleştirme çalışmaları ile hiçbir öğrenci geride kalmaz.",
    kademeler: ["İlkokul", "Ortaokul", "Anadolu Lisesi", "Fen Lisesi"],
    yasAraligi: "6-18 yaş",
    featured: false,
    highlights: [
      "Bloom'un Tam Öğrenme Modeli'ne dayalı",
      "Bireysel hız ve ilerleme takibi",
      "Düzeltici etkinlikler ile kavramayı pekiştirme",
      "Zenginleştirme çalışmaları ile üst beceriler",
      "Haftalık bireysel geri bildirim",
    ],
    href: "/egitim/programlar/tam-ogrenme",
  },
  {
    slug: "wwap",
    name: "WWAP",
    icon: "bx bx-world",
    shortDesc: "Kocatürk küresel program",
    longDesc:
      "World Wide Academic Program (WWAP), öğrencilere uluslararası akademik standartları tanıtan, küresel bakış açısı geliştiren Kocatürk'e özgü bir eğitim programıdır. eTwinning Avrupa proje ortaklıkları ve İngiltere Yaz Okulu programı WWAP çerçevesinde yürütülür.",
    kademeler: ["Ortaokul", "Anadolu Lisesi", "Fen Lisesi"],
    yasAraligi: "10-18 yaş",
    featured: false,
    highlights: [
      "Uluslararası akademik standartlar ve içerik",
      "eTwinning Avrupa proje ortaklıkları",
      "İngiltere Yaz Okulu programı",
      "Küresel iletişim ve kültürel farkındalık",
      "Yabancı dil kullanımını destekleyen proje çalışmaları",
    ],
    href: "/egitim/programlar/wwap",
  },
  {
    slug: "robotik-kodlama",
    name: "Robotik & Kodlama",
    icon: "bx bx-chip",
    shortDesc: "Roma dünya şampiyonu",
    longDesc:
      "Kocatürk Robotik & Kodlama programı, algoritma düşüncesinden yapay zekâ uygulamalarına uzanan kapsamlı bir müfredatla öğrencilere 21. yüzyıl teknoloji becerileri kazandırır. 2024 yılında Roma Fibonacci International Robot Olympiad'da dört kategoride dünya derecesi elde edilmesi, bu programın uluslararası kalitesini doğrulamaktadır.",
    kademeler: ["İlkokul", "Ortaokul", "Anadolu Lisesi", "Fen Lisesi", "✈ Havacılık Lisesi"],
    yasAraligi: "6-18 yaş",
    featured: true,
    highlights: [
      "2024 Roma Fibonacci Robot Olimpiyatı — 4 kategoride dünya derecesi",
      "Lego Mindstorms ve scratch ile başlangıç seviyesi",
      "Arduino, Raspberry Pi ve ileri seviye programlama",
      "Yapay zekâ ve makine öğrenmesi temelleri",
      "Uluslararası yarışma hazırlığı (Fibonacci, WRO, Code Week)",
    ],
    href: "/egitim/programlar/robotik-kodlama",
  },
  {
    slug: "design-thinking",
    name: "Design Thinking",
    icon: "bx bx-bulb",
    shortDesc: "Yaratıcı problem çözme",
    longDesc:
      "Stanford d.school metodolojisini temel alan Design Thinking programı, öğrencilere empati kurma, problemi tanımlama, fikir üretme, prototipleme ve test etme adımlarını gerçek dünya problemleri üzerinde uygulama fırsatı sunar.",
    kademeler: ["Ortaokul", "Anadolu Lisesi", "Fen Lisesi"],
    yasAraligi: "10-18 yaş",
    featured: false,
    highlights: [
      "Stanford d.school Design Thinking metodolojisi",
      "Empati haritası ve kullanıcı araştırması",
      "Hızlı prototipleme atölyeleri",
      "Takım temelli problem çözme",
      "Gerçek dünya problemlerine uygulanan projeler",
    ],
    href: "/egitim/programlar/design-thinking",
  },
  {
    slug: "havacilik",
    name: "Havacılık Programı",
    icon: "bx bx-plane",
    shortDesc: "TÜRKKUŞU ve THY iş birliği",
    longDesc:
      "Gaziemir kampüsüne özgü Havacılık Lisesi programı, TÜRKKUŞU Türk Hava Kurumu ve Türk Hava Yolları iş birliğiyle geliştirilen müfredatıyla bölgenin tek havacılık eğitimi sunan lisesidir. Teorik bilgi, simülatör eğitimi ve sahada staj olanaklarıyla pilot, havacılık mühendisi ve kabin amiri olmayı hedefleyen öğrenciler için özel olarak tasarlanmıştır.",
    kademeler: ["✈ Havacılık Lisesi"],
    yasAraligi: "14-18 yaş",
    featured: true,
    highlights: [
      "TÜRKKUŞU Türk Hava Kurumu iş birlikli müfredat",
      "Havacılık simülatörü uygulamalı eğitim",
      "THY bağlantılı staj olanakları",
      "Meteoroloji, navigasyon ve uçuş teorisi dersleri",
      "SHGM onaylı ders içerikleri",
    ],
    href: "/egitim/havacilik-lisesi",
  },
];
