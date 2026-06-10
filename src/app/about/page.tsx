import type { Metadata } from "next";
import Link from "next/link";
import { BrandLogo } from "@/components/brand-logo";
import { CtaSection } from "@/components/cta-section";
import { PageHero } from "@/components/page-hero";
import { PageShell } from "@/components/page-shell";
import { createMetadata } from "@/lib/metadata";
import { breadcrumbSchema, jsonLd } from "@/lib/schema";
import { aboutValues, bioSpotlight, bioTimeline, siteConfig } from "@/lib/site";

export const metadata: Metadata = createMetadata({
  title: "About Rodney Penn | Whitebeard Wisdom — Owner, Operator & Life Coach",
  description:
    "Meet Rodney Penn — neuroscience-informed transformation catalyst, Marine Corps veteran, FHSU alumnus, and founder of Whitebeard Wisdom. A story of reinvention, faith, service, and change that sticks.",
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
        badge="About Rodney Penn"
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

      <section className="section-shell grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <h2 className="headline-banner text-3xl">A retread who became a transformation catalyst</h2>
          <p className="mt-6 text-body">
            Rodney Penn is what the Marine Corps calls a retread — someone who started over late in
            his career. Most of his life was spent fixing things: welders, wind turbines, and
            aviation radar. He knew how to diagnose problems, rebuild systems, and make broken things
            work again.
          </p>
          <p className="mt-4 text-body">
            A renewed faith prompted him to take on a role working with homeless men. During that
            time, he developed a passion and compassion for people who struggle with mental illness.
            That calling led him to Fort Hays State University — and eventually to human services,
            supported employment, and the coaching work he now offers through Whitebeard Wisdom.
          </p>
          <blockquote className="mt-8 border-l-4 border-brand-gold pl-6">
            <p className="font-[family-name:var(--font-playfair)] text-xl text-brand-navy">
              &ldquo;{siteConfig.coach.advice}&rdquo;
            </p>
            <footer className="mt-3 text-sm text-muted">— Rodney Penn, FHSU Alumni Spotlight</footer>
          </blockquote>
        </div>
        <div className="card">
          <h3 className="text-lg font-semibold text-brand-navy">Credentials & experience</h3>
          <ul className="mt-4 space-y-3">
            {siteConfig.coach.credentials.map((cred) => (
              <li key={cred} className="flex gap-3 text-sm text-body">
                <span className="text-brand-gold">✓</span>
                {cred}
              </li>
            ))}
          </ul>
          <p className="mt-6 text-sm text-body">{siteConfig.coach.shortBio}</p>
          <a
            href={siteConfig.coach.bioSource}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex text-sm font-semibold text-brand-gold-deep hover:underline"
          >
            Read Rodney&apos;s FHSU Alumni Spotlight →
          </a>
        </div>
      </section>

      <section className="border-t border-brand-navy/8 bg-brand-surface">
        <div className="section-shell">
          <p className="section-badge-dark">Life timeline</p>
          <h2 className="headline-banner mt-4 text-3xl">How the wisdom was earned</h2>
          <div className="mt-10 space-y-6">
            {bioTimeline.map((item) => (
              <div key={item.title} className="grid gap-4 border-l-2 border-brand-gold/40 pl-6 md:grid-cols-[160px_1fr]">
                <p className="text-sm font-semibold uppercase tracking-wider text-brand-gold-deep">
                  {item.era}
                </p>
                <div>
                  <h3 className="text-lg font-semibold text-brand-navy">{item.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-body">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell">
        <h2 className="headline-banner text-3xl">In his own words</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {bioSpotlight.map((item) => (
            <div key={item.question} className="card">
              <h3 className="text-lg font-semibold text-brand-navy">{item.question}</h3>
              <p className="mt-3 text-sm leading-7 text-body">{item.answer}</p>
            </div>
          ))}
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
