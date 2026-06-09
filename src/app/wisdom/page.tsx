import type { Metadata } from "next";
import Link from "next/link";
import { CtaSection } from "@/components/cta-section";
import { PageHero } from "@/components/page-hero";
import { PageShell } from "@/components/page-shell";
import { createMetadata } from "@/lib/metadata";
import { breadcrumbSchema, jsonLd } from "@/lib/schema";
import { wisdomArticles } from "@/lib/site";

export const metadata: Metadata = createMetadata({
  title: "Wisdom Blog | Whitebeard Wisdom — Insights for Leaders",
  description:
    "Weekly wisdom for executives and professionals — articles on decision-making, purpose, leadership, legacy, and living with intention from coach James Whitfield.",
  path: "/wisdom",
});

export default function WisdomPage() {
  const breadcrumbs = breadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Wisdom", path: "/wisdom" },
  ]);

  return (
    <PageShell>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(breadcrumbs) }} />
      <PageHero
        badge="Weekly Wisdom"
        title="Insights from the long road."
        description="Short, honest reflections on leadership, purpose, decisions, and the questions that matter when you have already achieved a lot — but want something deeper."
      />

      <section className="section-shell">
        <div className="grid gap-8">
          {wisdomArticles.map((article) => (
            <article
              key={article.slug}
              id={article.slug}
              className="card scroll-mt-24"
            >
              <div className="flex flex-wrap items-center gap-3">
                <span className="section-badge-navy">{article.category}</span>
                <span className="text-xs text-muted">
                  {article.date} · {article.readTime} read
                </span>
              </div>
              <h2 className="headline-banner mt-4 text-2xl">{article.title}</h2>
              <p className="mt-4 text-body">{article.excerpt}</p>
              <p className="mt-6 text-sm text-body">
                Full articles available to newsletter subscribers.{" "}
                <Link href="/contact#guide" className="font-semibold text-brand-gold-deep hover:underline">
                  Get the Wisdom Audit free →
                </Link>
              </p>
            </article>
          ))}
        </div>
      </section>

      <CtaSection />
    </PageShell>
  );
}
