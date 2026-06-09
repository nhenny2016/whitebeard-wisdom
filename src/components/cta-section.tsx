import Link from "next/link";
import { aboutValues, gettingStartedSteps, siteConfig, testimonials } from "@/lib/site";

export function ValuesSection() {
  return (
    <section className="border-b border-brand-navy/8">
      <div className="section-shell">
        <h2 className="headline-banner text-3xl md:text-4xl">Not just insight. Integration.</h2>
        <p className="mt-4 max-w-3xl text-body">
          A lot of leaders know what needs to change. Fewer have the support to actually live that
          change. That is where this work is different.
        </p>
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {aboutValues.map((value) => (
            <div key={value.title} className="card">
              <h3 className="text-xl font-semibold text-brand-navy">{value.title}</h3>
              <p className="mt-3 text-sm leading-7 text-body">{value.description}</p>
            </div>
          ))}
        </div>
        <Link href="/coaching" className="btn-secondary mt-8 inline-flex">
          Learn how coaching works
        </Link>
      </div>
    </section>
  );
}

export function TestimonialsSection({ compact = false }: { compact?: boolean }) {
  const items = compact ? testimonials.slice(0, 3) : testimonials;

  return (
    <section className="border-b border-brand-navy/8">
      <div className="section-shell">
        <h2 className="headline-banner text-3xl md:text-4xl">What clients are saying</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {items.map((item) => (
            <blockquote key={`${item.author}-${item.quote.slice(0, 24)}`} className="card">
              <p className="text-brand-gold" aria-hidden="true">
                ★★★★★
              </p>
              <p className="mt-3 text-sm leading-7 text-body">&ldquo;{item.quote}&rdquo;</p>
              <footer className="mt-4">
                <p className="text-sm font-semibold text-brand-navy">— {item.author}</p>
                <p className="text-xs text-muted">{item.role}</p>
              </footer>
            </blockquote>
          ))}
        </div>
        {compact ? (
          <Link href="/testimonials" className="btn-secondary mt-8 inline-flex">
            Read More Reviews
          </Link>
        ) : null}
      </div>
    </section>
  );
}

export function GettingStartedSection() {
  return (
    <section className="border-b border-brand-navy/8 bg-brand-cream">
      <div className="section-shell">
        <h2 className="headline-banner text-3xl md:text-4xl">How to get started</h2>
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {gettingStartedSteps.map((step) => (
            <div key={step.step} className="card">
              <p className="text-xs font-semibold uppercase tracking-wider text-brand-gold-deep">
                {step.step}
              </p>
              <h3 className="mt-3 text-xl font-semibold text-brand-navy">{step.title}</h3>
              <p className="mt-3 text-sm leading-7 text-body">{step.description}</p>
            </div>
          ))}
        </div>
        <p className="mt-8 max-w-3xl text-body">
          The next step does not have to feel overwhelming. It just has to be honest. Whether you
          come for coaching, a signature program, or a workshop — the heart of the work stays the
          same: clarity, courage, and wisdom that lasts.
        </p>
      </div>
    </section>
  );
}

export function CtaSection() {
  return (
    <section className="cta-band text-white">
      <div className="mx-auto max-w-4xl px-6 py-16 text-center md:py-20">
        <h2 className="headline-banner text-3xl text-white md:text-4xl">
          Your next chapter deserves a wise guide.
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-white/90">
          Whether you are at a crossroads, rebuilding after burnout, or designing a legacy that
          matters — Whitebeard Wisdom is here to help you move forward with clarity and confidence.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link href="/contact#schedule" className="btn-primary">
            {siteConfig.booking.label}
          </Link>
          <Link href="/contact" className="btn-outline-light">
            Explore Ways to Work Together
          </Link>
        </div>
      </div>
    </section>
  );
}
