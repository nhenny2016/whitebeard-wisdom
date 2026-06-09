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
  title: "Workshops & Speaking | Whitebeard Wisdom — Rodney Penn",
  description:
    "Book Rodney Penn for keynotes, workshops, and retreats on reinvention, faith and purpose, resilience, and building a meaningful second chapter.",
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
        description="Rodney delivers keynotes and workshops that combine skilled-trades grit, human services experience, and faith-informed perspective — practical, honest, and immediately useful."
        image={siteConfig.images.workshopHero}
        imageAlt={`${siteConfig.coach.name} speaking`}
        actions={
          <Link href="/contact#workshop" className="btn-primary">
            Book Rodney to Speak
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
          Every organization is different. Rodney works with event planners, churches, and community
          leaders to design sessions that fit the audience, culture, and goals.
        </p>
        <Link href="/contact#workshop" className="btn-primary mt-8 inline-flex">
          Request a Proposal
        </Link>
      </section>

      <FaqSection title="Workshop FAQ" intro="Questions about booking Rodney for speaking and workshops." />
      <CtaSection />
    </PageShell>
  );
}
