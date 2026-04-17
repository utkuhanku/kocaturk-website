import { CampusFinder } from "@/components/sections/campus-finder";
import { CampusMap } from "@/components/sections/campus-map";
import { CtaBand } from "@/components/sections/cta-band";
import { FeaturedStory } from "@/components/sections/featured-story";
import { Hero } from "@/components/sections/hero";
import { InternationalStrip } from "@/components/sections/international-strip";
import { Manifesto } from "@/components/sections/manifesto";
import { NewsGrid } from "@/components/sections/news-grid";
import { NumbersBanner } from "@/components/sections/numbers-banner";
import { ProgramsGrid } from "@/components/sections/programs-grid";
import { StageSelector } from "@/components/sections/stage-selector";
import { Testimonials } from "@/components/sections/testimonials";

export default function HomePage() {
  return (
    <>
      <Hero
        eyebrow="EGE'NİN EĞİTİM OMURGASI"
        folio="K · 1998 — 2026"
        title={
          <>
            Köklerimiz
            <br />
            burada,
            <br />
            ufkumuz
            <br />
            <em>dünyada.</em>
          </>
        }
        lede="1998'de Manisa Turgutlu'da, doksan öğrenciyle başlayan bu yolculuk, bugün dört ilçede yirmi üç kampüse ve dört bini aşkın öğrenciye ulaştı."
        primaryCta={{ href: "/kayit/on-kayit", label: "Ön Kayıt Başvurusu" }}
        secondaryCta={{ href: "/kampusler", label: "Kampüs Ziyareti Planla" }}
        photo={{
          slotId: "ph_001",
          title: "Ana Kampüs",
          description: "Manisa Turgutlu Ana Kampüs drone shot — sabah ışığı",
        }}
        stats={[
          { number: 4015, label: "ÖĞRENCİ" },
          { number: 23, label: "KAMPÜS" },
          { number: 246, label: "ÖĞRETMEN" },
          { number: 28, suffix: " YIL", label: "1998–2026" },
        ]}
        statsSubline="90 öğrenciden 4.000+'a · Çeyrek asırlık büyüme"
      />

      <Manifesto
        eyebrow="Kim Olduğumuz"
        lines={[
          { text: "Doksan öğrenciyle bir aile", indent: 0 },
          { text: "bir okul açtı.", indent: 2 },
          { text: "1998'de.", indent: 3 },
          { text: "Manisa Turgutlu'da.", indent: 2 },
          { text: "Bugün dört ilçede", indent: 0 },
          { text: "yirmi üç kampüsümüz.", indent: 1 },
          { text: "Ama hâlâ", indent: 2 },
          { text: "aynı aileyiz.", indent: 3, em: true },
        ]}
        pillars={[
          {
            number: "01",
            title: (
              <>
                Çeyrek asırlık <em>buralılık</em>
              </>
            ),
            body: "1998'den bu yana Ege'nin kalbinde eğitim veriyoruz. Turgutlu'da başlayan bu yolculuk dört ilçeye, yirmi üç kampüse ulaştı.",
            link: { href: "/kurumsal/tarihce", label: "Tarihçemiz" },
            variant: "light",
          },
          {
            number: "02",
            title: (
              <>
                Anaokulundan <em>Havacılık</em> Lisesi'ne
              </>
            ),
            body: "Anaokulu, ilkokul, ortaokul, lise ve bölgenin tek havacılık lisesi — tam bir eğitim yolculuğu tek çatı altında.",
            link: { href: "/kampusler", label: "Kampüsler" },
            variant: "light",
          },
          {
            number: "03",
            title: (
              <>
                Roma'dan <em>İngiltere'ye</em> uzanan ufuk
              </>
            ),
            body: "eTwinning projeleri, uluslararası robot olimpiyatları ve İngiltere Yaz Okulu ile öğrencilerimiz dünyada tanınıyor.",
            link: { href: "/egitim/yurtdisi", label: "Yurtdışı Eğitim" },
            variant: "light",
          },
        ]}
      />

      <NumbersBanner
        eyebrow="Sayılarla Kocatürk"
        title={
          <>
            Çeyrek asırda
            <br />
            <em>Ege&apos;nin omurgası.</em>
          </>
        }
        numbers={[
          { number: 4015, label: "ÖĞRENCİ", sublabel: "Aktif kayıt" },
          { number: 23, label: "KAMPÜS", sublabel: "4 ilçede" },
          { number: 246, label: "ÖĞRETMEN", sublabel: "Akademik kadro" },
          { number: 52, label: "İDARİ KADRO", sublabel: "Yönetim + destek" },
          { number: 28, label: "YIL", sublabel: "1998–2026" },
          { number: 6, label: "KADEME", sublabel: "Anaokulu→Lise" },
          { number: 85, suffix: "%", label: "BAĞLILIK", sublabel: "Yıllık devam" },
          { number: 7, label: "PROGRAM", sublabel: "Pedagoji" },
          { number: 4, label: "İLÇE", sublabel: "Ege bölgesi" },
        ]}
      />

      <FeaturedStory
        tag="ULUSLARARASI ŞAMPİYONLUK"
        counter="01 / 12 BAŞARI"
        title={
          <>
            Roma&apos;da
            <br />
            <em>dünya zirvesi.</em>
          </>
        }
        body="Kasım 2024'te Roma'da düzenlenen Fibonacci International Robot Olympiad'da öğrencilerimiz Arda ve Alp Gürbüz, dört ayrı kategoride dünya çapında dereceler kazandı."
        photo={{
          slotId: "ph_002",
          aspectRatio: "4:5",
          title: "Arda ve Alp",
          description: "Arda ve Alp robot çalışırken",
        }}
        medals={[
          { rank: "1. Derece", category: "Lego Sumo 1 kg", result: "DÜNYA 1." },
          { rank: "1. Derece", category: "Yapay Zekâ Şarkı", result: "DÜNYA 1." },
          { rank: "2. Derece", category: "Otonom Araba", result: "DÜNYA 2." },
          { rank: "4. Derece", category: "Çizgi İzleyen", result: "DÜNYA 4." },
        ]}
        cta={{ href: "/basarilarimiz", label: "Tüm Başarıları Gör" }}
        meta={{ location: "ROMA, İTALYA", date: "KASIM 2024" }}
      />

      <StageSelector
        eyebrow="Çocuğunuza Uygun Yol"
        title="Hangi yaş, hangi okul?"
        stages={[
          {
            ageRange: "3-6 yaş",
            name: "Anaokulu",
            description: "Oyun temelli öğrenme, sosyal gelişim ve erken çocukluk eğitimi.",
            href: "/egitim/anaokulu",
            slotId: "stage_001",
          },
          {
            ageRange: "6-10 yaş",
            name: "İlkokul",
            description: "Temel beceriler, merak odaklı öğretim ve Mind Kids programı.",
            href: "/egitim/ilkokul",
            slotId: "stage_002",
          },
          {
            ageRange: "10-14 yaş",
            name: "Ortaokul",
            description: "STEM, robotik ve LGS'ye hazırlık — tam öğrenme modeli.",
            href: "/egitim/ortaokul",
            slotId: "stage_003",
          },
          {
            ageRange: "14-18 yaş",
            name: "Lise",
            description: "Anadolu ve Fen Lisesi — YKS'ye kapsamlı hazırlık.",
            href: "/egitim/anadolu-lisesi",
            slotId: "stage_004",
          },
          {
            ageRange: "14-18 yaş",
            name: "✈ Havacılık Lisesi",
            description:
              "Bölgenin tek havacılık lisesi. TÜRKKUŞU ve THY ile bağlantılı müfredat. Pilot, mühendis ve kabin amiri olmak isteyenler için üniversiteye en doğrudan yol.",
            href: "/egitim/havacilik-lisesi",
            slotId: "stage_005",
            featured: true,
            fullWidth: true,
          },
        ]}
      />

      <ProgramsGrid
        eyebrow="Pedagoji Programlarımız"
        title="Markalanmış öğrenme modeli."
        programs={[
          {
            icon: "bx bx-brain",
            name: "Mind Kids",
            shortDesc: "Akıl ve zekâ oyunları",
            href: "/egitim/programlar/mind-kids",
          },
          {
            icon: "bx bx-atom",
            name: "STEM",
            shortDesc: "Eğlenceli bilim programı",
            href: "/egitim/programlar/stem",
          },
          {
            icon: "bx bx-book-open",
            name: "Tam Öğrenme",
            shortDesc: "Bireysel hız, tam kavrama",
            href: "/egitim/programlar/tam-ogrenme",
          },
          {
            icon: "bx bx-world",
            name: "WWAP",
            shortDesc: "Kocatürk küresel program",
            href: "/egitim/programlar/wwap",
          },
          {
            icon: "bx bx-chip",
            name: "Robotik & Kodlama",
            shortDesc: "Roma dünya şampiyonu",
            href: "/egitim/programlar/robotik-kodlama",
            featured: true,
          },
          {
            icon: "bx bx-bulb",
            name: "Design Thinking",
            shortDesc: "Yaratıcı problem çözme",
            href: "/egitim/programlar/design-thinking",
          },
        ]}
      />

      <InternationalStrip
        eyebrow="Yurtdışı Eğitim"
        title={
          <>
            Ege&apos;de okuyup
            <br />
            <em>dünyada</em> düşünen
            <br />
            bir nesil.
          </>
        }
        body="İngiltere Yaz Okulu, eTwinning Avrupa proje ortaklıkları, uluslararası robot olimpiyatları — Kocatürk öğrencisi sınıfını dünyada geziyor."
        cta={{ href: "/egitim/yurtdisi", label: "Yurtdışı Eğitim" }}
        countryCards={[
          { flag: "🇬🇧", code: "İNG", name: "İngiltere", program: "Yaz Okulu" },
          { flag: "🇮🇹", code: "İTA", name: "İtalya", program: "eTwinning" },
          { flag: "🇪🇸", code: "İSP", name: "İspanya", program: "eTwinning" },
          { flag: "🇬🇷", code: "YUN", name: "Yunanistan", program: "eTwinning" },
          { flag: "🇮🇹", code: "ROMA", name: "İtalya", program: "Robot Olimpiyat" },
          { flag: "🇪🇺", code: "AB", name: "Avrupa", program: "Code Week" },
        ]}
      />

      <CampusFinder
        eyebrow="Size En Yakın Kampüs"
        title={
          <>
            Hangi kampüs
            <br />
            size daha <em>uygun?</em>
          </>
        }
        description="Bilgilerinizi bırakın, en yakın kampüsümüzden sizi arayalım."
      />

      <CampusMap
        eyebrow="23 Kampüs · 4 İlçe"
        title={
          <>
            Ege&apos;nin neresindesiniz,
            <br />
            oradayız.
          </>
        }
        campuses={[
          {
            slug: "turgutlu",
            name: "Manisa Turgutlu Kampüsü",
            ilce: "Turgutlu",
            il: "Manisa",
            badge: "ana",
            kademeler: ["Anaokulu", "İlkokul", "Ortaokul", "Anadolu Lisesi", "Fen Lisesi"],
            href: "/kampusler/turgutlu",
          },
          {
            slug: "gaziemir",
            name: "İzmir Gaziemir Kampüsü",
            ilce: "Gaziemir",
            il: "İzmir",
            badge: "ikinci-ana",
            kademeler: ["Anaokulu", "İlkokul", "Ortaokul", "Lise", "✈ Havacılık Lisesi"],
            href: "/kampusler/gaziemir",
          },
          {
            slug: "uckuyular",
            name: "İzmir Karabağlar Kampüsü",
            ilce: "Üçkuyular",
            il: "İzmir",
            kademeler: ["İlkokul", "Ortaokul"],
            href: "/kampusler/uckuyular",
          },
          {
            slug: "kemalpasa",
            name: "İzmir Kemalpaşa Kampüsü",
            ilce: "Kemalpaşa",
            il: "İzmir",
            kademeler: ["İlkokul", "Ortaokul", "Lise"],
            href: "/kampusler/kemalpasa",
          },
          {
            slug: "tire",
            name: "İzmir Tire Kampüsü",
            ilce: "Tire",
            il: "İzmir",
            kademeler: ["İlkokul", "Ortaokul", "Lise", "Fen Lisesi"],
            href: "/kampusler/tire",
          },
        ]}
      />

      <Testimonials
        eyebrow="Velilerimiz Anlatıyor"
        title="Kocatürk ailesinden sesler."
        testimonials={[
          {
            quote: "Çocuğumun bu okulda geçirdiği dört yıl, onu gerçek anlamda dönüştürdü.",
            authorName: "Ayşe Çelik",
            authorRole: "Veli · Ortaokul 7. sınıf · Turgutlu",
          },
          {
            quote:
              "Robotik kulübünde geliştirdiğim projeler sayesinde mühendislik hayalimi keşfettim.",
            authorName: "Mert Doğan",
            authorRole: "Mezun · Lise · 2023 · İzmir",
          },
          {
            quote:
              "İngilizce yaz okulu programı sayesinde kızım hem dil kazandı hem de uluslararası arkadaşlıklar kurdu.",
            authorName: "Fatma Şahin",
            authorRole: "Veli · İlkokul 5. sınıf · Gaziemir",
          },
        ]}
      />

      <NewsGrid
        eyebrow="Son Haberler"
        title="Kocatürk'te bu hafta."
        news={[
          {
            slug: "roma-fibonacci-2024",
            title: "Öğrencimiz Roma Fibonacci'de Türkiye'yi Temsil Etti",
            excerpt:
              "Kasım 2024'te Roma'da düzenlenen Fibonacci International Robot Olympiad'da öğrencilerimiz dört kategoride dünya derecesi kazandı.",
            category: "Uluslararası",
            date: "2024-11-18",
          },
          {
            slug: "etwinning-kalite-etiketi",
            title: "eTwinning Projemiz Avrupa Kalite Etiketini Aldı",
            category: "Proje",
            date: "2024-10-03",
          },
          {
            slug: "ingiltere-yaz-okulu-2024",
            title: "İngiltere Yaz Okulu Kayıtları Açıldı",
            category: "Duyuru",
            date: "2024-08-01",
          },
          {
            slug: "lgs-turkiye-ilk-1000",
            title: "LGS'de Türkiye İlk 1000'e Girdik",
            category: "Akademik",
            date: "2024-06-10",
          },
        ]}
        cta={{ href: "/haberler", label: "Tüm Haberler" }}
      />

      <CtaBand
        eyebrow="Sıradaki Adım"
        title={
          <>
            Çocuğunuzun
            <br />
            yarınını birlikte
            <br />
            <em>tasarlayalım.</em>
          </>
        }
        description="Ön kayıt formunu doldurun, size en yakın kampüsten bir günlük ziyaret randevusu ayarlayalım."
        ctas={[
          { href: "/kayit/on-kayit", label: "Ön Kayıt Başvurusu", variant: "primary" },
          { href: "/kampusler", label: "Kampüs Ziyareti Planla", variant: "outline-light" },
        ]}
      />
    </>
  );
}
