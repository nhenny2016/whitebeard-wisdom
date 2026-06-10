import type { Metadata } from "next";
import Link from "next/link";
import { CtaSection } from "@/components/cta-section";
import { FaqSection } from "@/components/faq-section";
import { PageHero } from "@/components/page-hero";
import { PageShell } from "@/components/page-shell";
import { createMetadata } from "@/lib/metadata";
import { breadcrumbSchema, jsonLd } from "@/lib/schema";
import { contactPaths, siteConfig } from "@/lib/site";

export const metadata: Metadata = createMetadata({
  title: "Contact Whitebeard Wisdom — Book a Wisdom Call",
  description:
    "Contact Whitebeard Wisdom for neuroscience-informed transformation coaching with Rodney Penn, signature programs, workshops, or speaking. Email hello@whitebeardwisdom.com or book a free Wisdom Call.",
  path: "/contact",
});

export default function ContactPage() {
  const breadcrumbs = breadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Contact", path: "/contact" },
  ]);

  return (
    <PageShell>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(breadcrumbs) }} />
      <PageHero
        badge="Contact"
        title="Let's find the right path forward."
        description="Whether you know exactly what you need or you're still exploring — start here. Choose the path that fits, or book a Wisdom Call and we'll figure it out together."
      />

      <section className="section-shell">
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {contactPaths.map((path) => (
            <Link key={path.id} id={path.id} href={path.href} className="card scroll-mt-24 transition hover:-translate-y-1">
              <h2 className="text-lg font-semibold text-brand-navy">{path.title}</h2>
              <p className="mt-3 text-sm leading-7 text-body">{path.description}</p>
            </Link>
          ))}
        </div>
      </section>

      <section id="schedule" className="border-t border-brand-navy/8 bg-brand-surface scroll-mt-24">
        <div className="section-shell grid gap-10 lg:grid-cols-2">
          <div>
            <p className="section-badge-dark">Wisdom Call</p>
            <h2 className="headline-banner mt-4 text-3xl">{siteConfig.booking.discoveryLabel}</h2>
            <p className="mt-4 text-body">{siteConfig.booking.cta}</p>
            <ul className="mt-8 space-y-3 text-sm text-body">
              <li>
                <strong>Email:</strong>{" "}
                <a href={siteConfig.emailHref} className="font-semibold hover:text-brand-gold-deep">
                  {siteConfig.email}
                </a>
              </li>
              <li>
                <strong>Phone:</strong>{" "}
                <a href={siteConfig.phoneHref} className="font-semibold hover:text-brand-gold-deep">
                  {siteConfig.phone}
                </a>
              </li>
            </ul>
          </div>

          <div className="card">
            <h3 className="text-lg font-semibold text-brand-navy">Scheduling calendar</h3>
            <p className="mt-3 text-sm leading-7 text-body">
              Book your complimentary 30-minute Wisdom Call directly. Connect your Cal.com or
              Calendly embed here during deployment.
            </p>
            <div className="mt-6 rounded-xl border border-dashed border-brand-gold/40 bg-brand-gold-soft/30 p-8 text-center">
              <p className="text-sm font-semibold text-brand-navy">Wisdom Call booking</p>
              <p className="mt-2 text-xs text-muted">30 minutes · No obligation · Virtual or phone</p>
              <a
                href={siteConfig.booking.url}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary mt-6 inline-flex"
              >
                Book Now
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="guide" className="section-shell scroll-mt-24">
        <div className="card mx-auto max-w-xl">
          <h2 className="headline-banner text-2xl">Send a message</h2>
          <form className="mt-6 space-y-4">
            <div>
              <label htmlFor="contact-name" className="block text-sm font-semibold text-brand-navy">
                Name
              </label>
              <input id="contact-name" name="name" required className="mt-2 w-full rounded-lg border border-brand-navy/10 px-4 py-3" />
            </div>
            <div>
              <label htmlFor="contact-email" className="block text-sm font-semibold text-brand-navy">
                Email
              </label>
              <input id="contact-email" name="email" type="email" required className="mt-2 w-full rounded-lg border border-brand-navy/10 px-4 py-3" />
            </div>
            <div>
              <label htmlFor="contact-message" className="block text-sm font-semibold text-brand-navy">
                How can we help?
              </label>
              <textarea id="contact-message" name="message" rows={4} required className="mt-2 w-full rounded-lg border border-brand-navy/10 px-4 py-3" />
            </div>
            <button type="submit" className="btn-primary w-full">
              Send Message
            </button>
          </form>
        </div>
      </section>

      <FaqSection />
      <CtaSection />
    </PageShell>
  );
}
