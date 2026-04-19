import type { MetadataRoute } from "next";
import { ACHIEVEMENTS } from "@/data/achievements";
import { NEWS, NEWS_CATEGORIES } from "@/data/news";

const BASE_URL = "https://kocaturk.k12.tr";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: BASE_URL, lastModified: new Date(), changeFrequency: "weekly", priority: 1.0 },

    // Kurumsal
    { url: `${BASE_URL}/kurumsal`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/kurumsal/hakkimizda`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/kurumsal/tarihce`, changeFrequency: "yearly", priority: 0.6 },
    { url: `${BASE_URL}/kurumsal/vizyon`, changeFrequency: "yearly", priority: 0.6 },
    { url: `${BASE_URL}/kurumsal/egitim-felsefemiz`, changeFrequency: "yearly", priority: 0.6 },
    { url: `${BASE_URL}/kurumsal/yonetim`, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE_URL}/kurumsal/sayilar`, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE_URL}/kurumsal/akreditasyonlar`, changeFrequency: "yearly", priority: 0.5 },
    { url: `${BASE_URL}/kurumsal/sosyal-sorumluluk`, changeFrequency: "monthly", priority: 0.5 },

    // Kampüsler
    { url: `${BASE_URL}/kampusler`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE_URL}/kampusler/turgutlu`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/kampusler/gaziemir`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/kampusler/uckuyular`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/kampusler/kemalpasa`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/kampusler/tire`, changeFrequency: "monthly", priority: 0.7 },

    // Eğitim
    { url: `${BASE_URL}/egitim`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/egitim/anaokulu`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/egitim/ilkokul`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/egitim/ortaokul`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/egitim/anadolu-lisesi`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/egitim/fen-lisesi`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/egitim/havacilik-lisesi`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/egitim/yurtdisi`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/egitim/programlar/mind-kids`, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE_URL}/egitim/programlar/stem`, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE_URL}/egitim/programlar/tam-ogrenme`, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE_URL}/egitim/programlar/wwap`, changeFrequency: "monthly", priority: 0.6 },
    {
      url: `${BASE_URL}/egitim/programlar/robotik-kodlama`,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/egitim/programlar/design-thinking`,
      changeFrequency: "monthly",
      priority: 0.6,
    },

    // Başarılarımız
    { url: `${BASE_URL}/basarilarimiz`, changeFrequency: "monthly", priority: 0.8 },

    // Haberler
    { url: `${BASE_URL}/haberler`, changeFrequency: "weekly", priority: 0.8 },
    ...Object.keys(NEWS_CATEGORIES).map((k) => ({
      url: `${BASE_URL}/haberler/kategori/${k}`,
      changeFrequency: "weekly" as const,
      priority: 0.6,
    })),

    // Kayıt
    { url: `${BASE_URL}/kayit`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/kayit/on-kayit`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE_URL}/kayit/bursluluk`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/kayit/ucretler`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/kayit/sss`, changeFrequency: "monthly", priority: 0.6 },

    // İletişim & Kariyer
    { url: `${BASE_URL}/iletisim`, changeFrequency: "yearly", priority: 0.7 },
    { url: `${BASE_URL}/kariyer`, changeFrequency: "monthly", priority: 0.6 },

    // Yasal
    { url: `${BASE_URL}/kvkk`, changeFrequency: "yearly", priority: 0.3 },
    { url: `${BASE_URL}/cerez-politikasi`, changeFrequency: "yearly", priority: 0.3 },
    { url: `${BASE_URL}/gizlilik-politikasi`, changeFrequency: "yearly", priority: 0.3 },
  ];

  const newsRoutes: MetadataRoute.Sitemap = NEWS.map((n) => ({
    url: `${BASE_URL}/haberler/${n.slug}`,
    lastModified: new Date(n.date),
    changeFrequency: "yearly",
    priority: 0.7,
  }));

  const achievementRoutes: MetadataRoute.Sitemap = ACHIEVEMENTS.map((a) => ({
    url: `${BASE_URL}/basarilarimiz/${a.slug}`,
    changeFrequency: "yearly" as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...newsRoutes, ...achievementRoutes];
}
