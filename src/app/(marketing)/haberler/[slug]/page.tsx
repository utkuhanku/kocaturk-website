import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PhotoSlot } from "@/components/photo-slot";
import { Button } from "@/components/ui/button";
import { Eyebrow } from "@/components/ui/eyebrow";
import { NEWS } from "@/data/news";
import { articleSchema } from "@/lib/schema";
import styles from "../haberler.module.css";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return NEWS.map((n) => ({ slug: n.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const haber = NEWS.find((n) => n.slug === slug);
  if (!haber) return {};
  return {
    title: `${haber.title} | Kocatürk Okulları`,
    description: haber.excerpt,
  };
}

export default async function HaberDetayPage({ params }: Props) {
  const { slug } = await params;
  const haber = NEWS.find((n) => n.slug === slug);
  if (!haber) notFound();

  const formattedDate = new Date(haber.date).toLocaleDateString("tr-TR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <>
      <script
        type="application/ld+json"
        // biome-ignore lint/security/noDangerouslySetInnerHtml: structured data
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            articleSchema({
              title: haber.title,
              excerpt: haber.excerpt,
              date: haber.date,
              slug: haber.slug,
            }),
          ),
        }}
      />
      <section className={styles.detailPage}>
        <div className="wrap">
          <div className={styles.detailInner}>
            <article className={styles.detailContent}>
              <Link href="/haberler" className={styles.detailBack}>
                <i className="bx bx-arrow-back" aria-hidden="true" />
                Tüm Haberler
              </Link>

              <div className={styles.detailMeta} style={{ marginTop: "var(--space-6)" }}>
                <Eyebrow>{haber.categoryLabel}</Eyebrow>
                <span className={styles.detailDate}>{formattedDate}</span>
              </div>

              <h1 className={styles.detailTitle}>{haber.title}</h1>
              <p className={styles.detailExcerpt}>{haber.excerpt}</p>
              <p className={styles.detailBody}>{haber.body}</p>

              <Button
                href="/haberler"
                variant="outline"
                iconLeft={<i className="bx bx-arrow-back" />}
              >
                Tüm Haberler
              </Button>
            </article>

            <aside className={styles.detailSide}>
              <PhotoSlot
                slotId={`news-detail-${haber.slug}`}
                aspectRatio="4:3"
                category="FEATURED"
                type="photo"
                title={haber.title}
                description={haber.excerpt}
              />
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
