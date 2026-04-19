import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { NewsCard } from "@/components/patterns/news-card";
import { Eyebrow } from "@/components/ui/eyebrow";
import { NEWS, NEWS_CATEGORIES, type NewsCategory } from "@/data/news";
import styles from "../../haberler.module.css";

interface Props {
  params: Promise<{ kategori: string }>;
}

export async function generateStaticParams() {
  return (Object.keys(NEWS_CATEGORIES) as NewsCategory[]).map((k) => ({
    kategori: k,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { kategori } = await params;
  const label = NEWS_CATEGORIES[kategori as NewsCategory];
  if (!label) return {};
  return {
    title: `${label} Haberleri | Kocatürk Okulları`,
    description: `Kocatürk Okulları ${label.toLowerCase()} kategorisindeki haberler.`,
  };
}

export default async function KategoriPage({ params }: Props) {
  const { kategori } = await params;
  const label = NEWS_CATEGORIES[kategori as NewsCategory];
  if (!label) notFound();

  const haberler = NEWS.filter((n) => n.category === kategori);

  return (
    <section className={styles.kategoriPage}>
      <div className="wrap">
        <Eyebrow>Haberler</Eyebrow>
        <h1 className={styles.kategoriTitle}>{label}</h1>

        {haberler.length === 0 ? (
          <p style={{ fontFamily: "var(--font-body)", color: "var(--color-ink-mute)" }}>
            Bu kategoride henüz haber yok.
          </p>
        ) : (
          <div className={styles.standardGrid}>
            {haberler.map((n) => (
              <NewsCard key={n.slug} {...n} size="standard" />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
