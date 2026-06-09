import type { Metadata } from "next";
import Link from "next/link";
import { BrandLogo } from "@/components/brand-logo";
import { CtaSection } from "@/components/cta-section";
import { PageHero } from "@/components/page-hero";
import { PageShell } from "@/components/page-shell";
import { createMetadata } from "@/lib/metadata";
import { breadcrumbSchema, jsonLd } from "@/lib/schema";
import { aboutValues, siteConfig } from "@/lib/site";

export const metadata: Metadata = createMetadata({
  title: "About James Whitfield | Whitebeard Wisdom — Executive Life Coach",
  description:
    "Meet James Whitfield, ICF PCC and founder of Whitebeard Wisdom. 25+ years of leadership experience, now coaching executives and professionals for clarity, purpose, and legacy.",
  path: "/about",
});

export default function AboutPage() {
  const breadcrumbs = breadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
  ]);

  return (
    <PageShell>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(breadcrumbs) }} />
      <PageHero
        badge="About"
        title={`Meet ${siteConfig.coach.name}`}
        description={siteConfig.coach.bio}
        image={siteConfig.images.aboutPortrait}
        imageAlt={`${siteConfig.coach.name}, ${siteConfig.coach.title}`}
        actions={
          <Link href="/contact#schedule" className="btn-primary">
            {siteConfig.booking.discoveryLabel}
          </Link>
        }
      />

      <section className="section-shell grid gap-12 lg:grid-cols-2">
        <div>
          <h2 className="headline-banner text-3xl">The story behind Whitebeard Wisdom</h2>
          <p className="mt-6 text-body">
            After 25 years climbing the corporate ladder — VP roles, board meetings, the corner office
            — James realized the success he built on the outside didn&apos;t match the clarity he craved
            on the inside. A health scare and a hard conversation with his daughter changed everything.
          </p>
          <p className="mt-4 text-body">
            He left the C-suite, earned his ICF certification, and built Whitebeard Wisdom for
            professionals who are accomplished on paper but hungry for meaning. The white beard is
            real. The wisdom is earned. The coaching is direct, warm, and rooted in lived experience.
          </p>
        </div>
        <div className="card">
          <h3 className="text-lg font-semibold text-brand-navy">Credentials</h3>
          <ul className="mt-4 space-y-3">
            {siteConfig.coach.credentials.map((cred) => (
              <li key={cred} className="flex gap-3 text-sm text-body">
                <span className="text-brand-gold">✓</span>
                {cred}
              </li>
            ))}
          </ul>
          <p className="mt-6 text-sm text-muted">{siteConfig.mission}</p>
        </div>
      </section>

      <section className="border-t border-brand-navy/8 bg-brand-surface">
        <div className="section-shell">
          <h2 className="headline-banner text-3xl">What we stand for</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {aboutValues.map((value) => (
              <div key={value.title} className="card">
                <h3 className="text-xl font-semibold text-brand-navy">{value.title}</h3>
                <p className="mt-3 text-sm leading-7 text-body">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell">
        <div className="relative mx-auto max-w-sm overflow-hidden rounded-3xl border border-brand-gold/20 bg-white p-6">
          <BrandLogo variant="full" href="/" />
        </div>
      </section>

      <CtaSection />
    </PageShell>
  );
}
