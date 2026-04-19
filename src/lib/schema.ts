const BASE_URL = "https://kocaturk.k12.tr";

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    name: "Kocatürk Okulları",
    alternateName: "Kocatürk Eğitim Kurumları",
    url: BASE_URL,
    logo: `${BASE_URL}/logo-kocaturk-orange.png`,
    foundingDate: "1998",
    description:
      "1998'den bu yana Manisa ve İzmir'de anaokulu, ilkokul, ortaokul, Anadolu Lisesi, Fen Lisesi ve Havacılık Lisesi eğitimi.",
    email: "info@kocaturk.k12.tr",
    telephone: "+905321111109",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Turgutlu",
      addressRegion: "Manisa",
      addressCountry: "TR",
    },
    sameAs: ["https://instagram.com/kocaturkokullar", "https://facebook.com/kocaturkokullar"],
  };
}

export function schoolSchema({
  name,
  url,
  description,
  address,
}: {
  name: string;
  url: string;
  description: string;
  address: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "School",
    name,
    url: `${BASE_URL}${url}`,
    description,
    address: {
      "@type": "PostalAddress",
      streetAddress: address,
      addressCountry: "TR",
    },
    parentOrganization: {
      "@type": "EducationalOrganization",
      name: "Kocatürk Okulları",
      url: BASE_URL,
    },
  };
}

export function articleSchema({
  title,
  excerpt,
  date,
  slug,
}: {
  title: string;
  excerpt: string;
  date: string;
  slug: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description: excerpt,
    datePublished: date,
    url: `${BASE_URL}/haberler/${slug}`,
    publisher: {
      "@type": "EducationalOrganization",
      name: "Kocatürk Okulları",
      logo: {
        "@type": "ImageObject",
        url: `${BASE_URL}/logo-kocaturk-orange.png`,
      },
    },
  };
}

export function breadcrumbSchema(items: { name: string; href: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${BASE_URL}${item.href}`,
    })),
  };
}
