import type { Metadata } from "next";
import Link from "next/link";
import { CtaSection } from "@/components/cta-section";
import { FaqSection } from "@/components/faq-section";
import { PageHero } from "@/components/page-hero";
import { PageShell } from "@/components/page-shell";
import { createMetadata } from "@/lib/metadata";
import { breadcrumbSchema, jsonLd, serviceSchema } from "@/lib/schema";
import { coachingFormats, coachingSupportAreas, signaturePrograms, siteConfig } from "@/lib/site";

export const metadata: Metadata = createMetadata({
  title: "Executive Coaching | Whitebeard Wisdom — 1:1 Life & Leadership Coaching",
  description:
    "Executive and life coaching for professionals ready for clarity, confidence, and purposeful leadership. 1:1 sessions, intensives, and group circles with James Whitfield, ICF PCC.",
  path: "/coaching",
});

export default function CoachingPage() {
  const breadcrumbs = breadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Coaching", path: "/coaching" },
  ]);
  const service = serviceSchema(
    "Executive Life Coaching",
    "1:1 coaching for executives and high achievers seeking clarity, decision-making support, and purposeful leadership.",
  );

  return (
    <PageShell>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd([breadcrumbs, service]) }} />
      <PageHero
        badge="Executive Coaching"
        title="Coaching for leaders who want wisdom, not just wins."
        description="Whether you are navigating a career transition, recovering from burnout, or designing the next chapter of your life — coaching at Whitebeard Wisdom meets you with directness, depth, and decades of lived experience."
        image={siteConfig.images.coachingHero}
        imageAlt="Executive coaching session"
        actions={
          <Link href="/contact#coaching" className="btn-primary">
            Apply for Coaching
          </Link>
        }
      />

      <section className="section-shell">
        <h2 className="headline-banner text-3xl">Who this is for</h2>
        <p className="mt-4 max-w-3xl text-body">
          This coaching is for executives, entrepreneurs, and accomplished professionals who carry
          responsibility, navigate complexity, and want a thinking partner who has been in the arena —
          not just read about it.
        </p>
      </section>

      <section className="border-t border-brand-navy/8 bg-brand-surface">
        <div className="section-shell">
          <h2 className="headline-banner text-3xl">What coaching can support</h2>
          <ul className="mt-8 grid gap-4 md:grid-cols-2">
            {coachingSupportAreas.map((item) => (
              <li key={item} className="card text-sm leading-7 text-body">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section-shell">
        <h2 className="headline-banner text-3xl">Coaching formats</h2>
        <div className="mt-10 overflow-x-auto">
          <table className="w-full min-w-[640px] text-left text-sm">
            <thead>
              <tr className="border-b border-brand-navy/10">
                <th className="py-3 pr-4 font-semibold text-brand-navy">Format</th>
                <th className="py-3 pr-4 font-semibold text-brand-navy">Duration</th>
                <th className="py-3 pr-4 font-semibold text-brand-navy">Best For</th>
                <th className="py-3 font-semibold text-brand-navy">Support</th>
              </tr>
            </thead>
            <tbody>
              {coachingFormats.map((format) => (
                <tr key={format.name} className="border-b border-brand-navy/5">
                  <td className="py-4 pr-4 font-medium text-brand-navy">{format.name}</td>
                  <td className="py-4 pr-4 text-body">{format.length}</td>
                  <td className="py-4 pr-4 text-body">{format.fit}</td>
                  <td className="py-4 text-body">{format.support}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="border-t border-brand-navy/8 bg-brand-navy text-white">
        <div className="section-shell">
          <h2 className="headline-banner text-3xl text-white">Signature programs</h2>
          <p className="mt-4 max-w-3xl text-white/85">
            Ready for structured, transformational work? Explore CLARITY, DEPTH, and LEGACY.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            {signaturePrograms.map((p) => (
              <Link key={p.id} href={p.href} className="btn-primary">
                {p.name} — {p.price}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <FaqSection title="Coaching FAQ" intro="Common questions about executive coaching with Whitebeard Wisdom." />
      <CtaSection />
    </PageShell>
  );
}
