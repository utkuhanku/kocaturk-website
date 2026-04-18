import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque, Manrope } from "next/font/google";
import { MotionProvider } from "@/components/motion-provider";
import { organizationSchema } from "@/lib/schema";
import "boxicons/css/boxicons.min.css";
import "./globals.css";

/* =========================================================
   Fontlar — next/font/google (zero layout shift, latin-ext zorunlu)
   .docs/02-DESIGN-SYSTEM.md Bölüm 2
   ========================================================= */

const bricolage = Bricolage_Grotesque({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-display",
});

const manrope = Manrope({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-body",
});

/* =========================================================
   Viewport — ayrı export, Next.js 14+ zorunluluğu
   ========================================================= */

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#1f2228",
};

/* =========================================================
   Metadata
   ========================================================= */

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "https://kocaturk.k12.tr"),
  title: {
    template: "%s · Kocatürk Okulları",
    default: "Kocatürk Okulları — Köklerimiz burada, ufkumuz dünyada.",
  },
  description: `1998\u2019den bu yana Manisa Turgutlu\u2019dan dünyaya uzanan köklü eğitim geleneği. 23 kampüs, 4.000+ öğrenci, anaokulu\u2019ndan liseye tam eğitim.`,
  openGraph: {
    type: "website",
    locale: "tr_TR",
    siteName: "Kocatürk Okulları",
    title: "Kocatürk Okulları — Köklerimiz burada, ufkumuz dünyada.",
    description: `1998\u2019den bu yana Manisa Turgutlu\u2019dan dünyaya uzanan köklü eğitim geleneği.`,
  },
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
};

/* =========================================================
   Root Layout
   ========================================================= */

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className={`${bricolage.variable} ${manrope.variable}`}>
      <body>
        <script
          type="application/ld+json"
          // biome-ignore lint/security/noDangerouslySetInnerHtml: structured data injection
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema()) }}
        />
        <MotionProvider>{children}</MotionProvider>
      </body>
    </html>
  );
}
