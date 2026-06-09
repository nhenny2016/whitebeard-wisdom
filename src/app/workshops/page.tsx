import type { Metadata } from "next";
import Link from "next/link";
import { CtaSection } from "@/components/cta-section";
import { FaqSection } from "@/components/faq-section";
import { PageHero } from "@/components/page-hero";
import { PageShell } from "@/components/page-shell";
import { createMetadata } from "@/lib/metadata";
import { breadcrumbSchema, jsonLd } from "@/lib/schema";
import { siteConfig, workshopFormats, workshopTopics } from "@/lib/site";

export const metadata: Metadata = createMetadata({
  title: "Workshops & Speaking | Whitebeard Wisdom — Keynotes & Executive Retreats",
  description:
    "Book James Whitfield for keynotes, workshops, and executive retreats on leadership wisdom, midlife reinvention, decision-making, and legacy leadership.",
  path: "/workshops",
});

export default function WorkshopsPage() {
  const breadcrumbs = breadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Workshops", path: "/workshops" },
  ]);

  return (
    <PageShell>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(breadcrumbs) }} />
      <PageHero
        badge="Workshops & Speaking"
        title="Bring wisdom to your team, conference, or retreat."
        description="James delivers keynotes and workshops that combine executive experience with coaching depth — practical, profound, and immediately applicable for leaders and teams."
        image={siteConfig.images.workshopHero}
        imageAlt="Workshop and speaking engagement"
        actions={
          <Link href="/contact#workshop" className="btn-primary">
            Book James to Speak
          </Link>
        }
      />

      <section className="section-shell">
        <h2 className="headline-banner text-3xl">Popular topics</h2>
        <ul className="mt-8 grid gap-4 md:grid-cols-2">
          {workshopTopics.map((topic) => (
            <li key={topic} className="card text-sm leading-7 text-body">
              {topic}
            </li>
          ))}
        </ul>
      </section>

      <section className="border-t border-brand-navy/8 bg-brand-surface">
        <div className="section-shell">
          <h2 className="headline-banner text-3xl">Formats</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {workshopFormats.map((format) => (
              <div key={format} className="card text-center">
                <p className="font-semibold text-brand-navy">{format}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell text-center">
        <h2 className="headline-banner text-3xl">Custom programs available</h2>
        <p className="mx-auto mt-4 max-w-2xl text-body">
          Every organization is different. James works with event planners and L&D teams to design
          sessions that fit your audience, culture, and goals.
        </p>
        <Link href="/contact#workshop" className="btn-primary mt-8 inline-flex">
          Request a Proposal
        </Link>
      </section>

      <FaqSection title="Workshop FAQ" intro="Questions about booking James for speaking and workshops." />
      <CtaSection />
    </PageShell>
  );
}
