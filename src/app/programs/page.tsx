import type { Metadata } from "next";
import Link from "next/link";
import { CtaSection } from "@/components/cta-section";
import { FaqSection } from "@/components/faq-section";
import { PageHero } from "@/components/page-hero";
import { PageShell } from "@/components/page-shell";
import { createMetadata } from "@/lib/metadata";
import { breadcrumbSchema, jsonLd, serviceSchema } from "@/lib/schema";
import { signaturePrograms, siteConfig } from "@/lib/site";

export const metadata: Metadata = createMetadata({
  title: "Signature Programs | Whitebeard Wisdom — CLARITY, DEPTH & LEGACY",
  description:
    "Structured transformation programs for professionals at every stage: CLARITY (6 weeks, $2,400), DEPTH (6 months, $9,600), and LEGACY (12 months, $18,000). Neuroscience-informed coaching with Rodney Penn.",
  path: "/programs",
});

export default function ProgramsPage() {
  const breadcrumbs = breadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Programs", path: "/programs" },
  ]);
  const services = signaturePrograms.map((p) =>
    serviceSchema(p.name, p.summary, p.price.replace(/[^0-9]/g, "")),
  );

  return (
    <PageShell>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd([breadcrumbs, ...services]) }} />
      <PageHero
        badge="Signature Programs"
        title="Choose your depth of transformation."
        description="Three pathways designed for where you are — from a focused clarity sprint to a year-long legacy partnership. Every program includes structured sessions, neuroscience-informed accountability, and change you can apply immediately."
        actions={
          <Link href="/contact#program" className="btn-primary">
            Discuss Your Fit
          </Link>
        }
      />

      <section className="section-shell space-y-16">
        {signaturePrograms.map((program, index) => (
          <div
            key={program.id}
            id={program.id}
            className={`grid scroll-mt-24 gap-10 lg:grid-cols-2 ${index % 2 === 1 ? "lg:flex-row-reverse" : ""}`}
          >
            <div className={index % 2 === 1 ? "lg:order-2" : ""}>
              <p className="text-sm font-semibold uppercase tracking-wider text-brand-gold-deep">
                {program.duration}
              </p>
              <h2 className="headline-banner mt-2 text-4xl">{program.name}</h2>
              <p className="mt-2 text-3xl font-semibold text-brand-gold-deep">{program.price}</p>
              <p className="mt-6 text-lg leading-8 text-body">{program.summary}</p>
              <ul className="mt-6 space-y-3">
                {program.features.map((feature) => (
                  <li key={feature} className="flex gap-3 text-body">
                    <span className="text-brand-gold">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
              <Link href="/contact#schedule" className="btn-primary mt-8 inline-flex">
                Book a Wisdom Call
              </Link>
            </div>
            <div className={`card flex flex-col justify-center bg-brand-navy text-white ${index % 2 === 1 ? "lg:order-1" : ""}`}>
              <p className="text-sm uppercase tracking-wider text-brand-gold">Ideal for</p>
              <p className="mt-4 text-lg leading-8 text-white/90">
                {program.id === "clarity" &&
                  "Professionals at a crossroads who need direction fast — a promotion decision, career pivot, or major life choice."}
                {program.id === "depth" &&
                  "Leaders ready for identity-level work — rebuilding self-trust, unpacking patterns, and leading from authenticity."}
                {program.id === "legacy" &&
                  "Executives designing a life and career that will matter in 20 years — not just this quarter."}
              </p>
            </div>
          </div>
        ))}
      </section>

      <section className="border-t border-brand-navy/8 bg-brand-surface">
        <div className="section-shell text-center">
          <h2 className="headline-banner text-3xl">Not sure which program fits?</h2>
          <p className="mx-auto mt-4 max-w-2xl text-body">{siteConfig.booking.cta}</p>
          <Link href="/contact#schedule" className="btn-primary mt-8 inline-flex">
            {siteConfig.booking.discoveryLabel}
          </Link>
        </div>
      </section>

      <FaqSection title="Program FAQ" intro="Questions about CLARITY, DEPTH, LEGACY, and how programs work." />
      <CtaSection />
    </PageShell>
  );
}
