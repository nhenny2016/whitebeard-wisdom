import Image from "next/image";
import Link from "next/link";
import {
  approachPillars,
  freeGuide,
  outcomes,
  painPoints,
  signaturePrograms,
  siteConfig,
  stats,
  wisdomArticles,
} from "@/lib/site";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden border-b border-brand-navy/8 bg-brand-cream">
      <div className="absolute inset-0 opacity-[0.04]" aria-hidden="true">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,#b59a6d_0%,transparent_50%)]" />
      </div>

      <div className="relative section-shell grid items-center gap-12 py-10 lg:grid-cols-[1.05fr_0.95fr] lg:py-16">
        <div>
          <p className="section-badge">{siteConfig.positioning}</p>
          <h1 className="headline-hero mt-6 text-4xl text-brand-navy md:text-6xl">
            {siteConfig.slogan}
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-body">{siteConfig.tagline}</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/contact#schedule" className="btn-primary">
              {siteConfig.booking.label}
            </Link>
            <Link href="/about" className="btn-secondary">
              Meet Rodney
            </Link>
          </div>
          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label}>
                <p className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-brand-gold-deep">
                  {stat.value}
                </p>
                <p className="text-xs text-muted">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-md">
          <div className="absolute -inset-4 rounded-3xl bg-brand-gold/10" aria-hidden="true" />
          <div className="relative overflow-hidden rounded-3xl border-2 border-brand-gold/30 bg-white shadow-[0_20px_60px_rgba(27,43,72,0.12)]">
            <Image
              src={siteConfig.images.heroPortrait}
              alt={`${siteConfig.coach.name}, ${siteConfig.coach.title}`}
              width={400}
              height={500}
              priority
              className="h-auto w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export function LeadMagnetSection() {
  return (
    <section id="guide" className="border-b border-brand-navy/8 bg-brand-surface scroll-mt-24">
      <div className="section-shell grid gap-10 lg:grid-cols-2">
        <div>
          <p className="section-badge">Free guide</p>
          <h2 className="headline-banner mt-4 text-3xl">{freeGuide.title}</h2>
          <p className="mt-3 text-body">{freeGuide.subtitle}</p>
          <ul className="mt-6 space-y-2 text-body">
            {freeGuide.bullets.map((item) => (
              <li key={item} className="flex gap-3">
                <span aria-hidden="true" className="text-brand-gold">
                  ✓
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>
        <form className="card">
          <label className="block text-sm font-semibold text-brand-navy" htmlFor="guide-first-name">
            First name
          </label>
          <input
            id="guide-first-name"
            name="firstName"
            required
            className="mt-2 w-full rounded-lg border border-brand-navy/10 px-4 py-3"
          />
          <label className="mt-4 block text-sm font-semibold text-brand-navy" htmlFor="guide-email">
            Email address
          </label>
          <input
            id="guide-email"
            name="email"
            type="email"
            required
            className="mt-2 w-full rounded-lg border border-brand-navy/10 px-4 py-3"
          />
          <button type="submit" className="btn-primary mt-6 w-full">
            Send Me the Wisdom Audit →
          </button>
        </form>
      </div>
    </section>
  );
}

export function PainPointsSection() {
  return (
    <section className="border-b border-brand-navy/8">
      <div className="section-shell">
        <h2 className="headline-banner text-3xl md:text-4xl">
          Success doesn&apos;t always bring clarity.
        </h2>
        <p className="mt-5 max-w-3xl text-lg leading-8 text-body">
          You can be accomplished, respected, and still feel like something is missing. You can lead
          teams, close deals, and raise families while quietly wondering if this is really the life
          you meant to build.           At Whitebeard Wisdom, we work with professionals who are ready for
          transformation that sticks — not more hustle or empty motivation.
        </p>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {painPoints.map((item) => (
            <div key={item.label} className="card flex items-start gap-4">
              <span className="text-2xl text-brand-gold" aria-hidden="true">
                {item.icon}
              </span>
              <p className="font-semibold text-brand-navy">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ApproachSection() {
  return (
    <section className="border-b border-brand-navy/8 bg-brand-surface">
      <div className="section-shell">
        <p className="section-badge-dark">Our approach</p>
        <h2 className="headline-banner mt-4 text-3xl md:text-4xl">
          Science-informed. Life-proven. Not widgets.
        </h2>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {approachPillars.map((pillar) => (
            <div key={pillar.title} className="card">
              <h3 className="text-xl font-semibold text-brand-navy">{pillar.title}</h3>
              <p className="mt-3 text-sm leading-7 text-body">{pillar.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function OutcomesSection() {
  return (
    <section className="border-b border-brand-navy/8">
      <div className="section-shell grid gap-10 lg:grid-cols-2">
        <div>
          <h2 className="headline-banner text-3xl md:text-4xl">What changes when you do the work</h2>
          <p className="mt-4 text-body">
            Clients come to Whitebeard Wisdom for clarity. They stay because a transformation
            catalyst helps change actually stick. Here is what becomes possible.
          </p>
        </div>
        <ul className="grid gap-3 sm:grid-cols-2">
          {outcomes.map((outcome) => (
            <li key={outcome} className="flex gap-3 text-sm text-body">
              <span className="text-brand-gold" aria-hidden="true">
                ✓
              </span>
              {outcome}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function ProgramsSection() {
  return (
    <section className="border-b border-brand-navy/8 bg-brand-navy text-white">
      <div className="section-shell">
        <p className="section-badge">Signature programs</p>
        <h2 className="headline-banner mt-4 text-3xl text-white md:text-4xl">
          Choose your depth of work
        </h2>
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {signaturePrograms.map((program) => (
            <div
              key={program.id}
              id={program.id}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur scroll-mt-24"
            >
              <p className="text-sm font-semibold uppercase tracking-wider text-brand-gold">
                {program.duration}
              </p>
              <h3 className="mt-2 font-[family-name:var(--font-playfair)] text-2xl font-bold text-white">
                {program.name}
              </h3>
              <p className="mt-1 text-2xl font-semibold text-brand-gold">{program.price}</p>
              <p className="mt-4 text-sm leading-7 text-white/85">{program.summary}</p>
              <ul className="mt-4 space-y-2 text-sm text-white/75">
                {program.features.map((f) => (
                  <li key={f}>• {f}</li>
                ))}
              </ul>
              <Link href={program.href} className="btn-primary mt-6 inline-flex">
                Learn More
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function WisdomPreviewSection() {
  return (
    <section className="border-b border-brand-navy/8">
      <div className="section-shell">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="section-badge-navy">Weekly wisdom</p>
            <h2 className="headline-banner mt-4 text-3xl">Insights from the long road</h2>
          </div>
          <Link href="/wisdom" className="btn-secondary">
            View All Articles
          </Link>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {wisdomArticles.slice(0, 4).map((article) => (
            <Link key={article.slug} href={`/wisdom#${article.slug}`} className="card transition hover:-translate-y-1">
              <p className="text-xs font-semibold uppercase tracking-wider text-brand-gold-deep">
                {article.category}
              </p>
              <h3 className="mt-2 text-lg font-semibold text-brand-navy">{article.title}</h3>
              <p className="mt-2 text-sm leading-7 text-body">{article.excerpt}</p>
              <p className="mt-3 text-xs text-muted">
                {article.date} · {article.readTime} read
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export function NewsletterSection() {
  return (
    <section className="border-b border-brand-navy/8 bg-brand-gold-soft/30">
      <div className="section-shell text-center">
        <p className="section-badge-dark">Stay wise</p>
        <h2 className="headline-banner mt-4 text-3xl">Weekly Wisdom in your inbox</h2>
        <p className="mx-auto mt-4 max-w-xl text-body">
          One insight per week from Rodney — no fluff, no spam. Just wisdom for people ready to think
          deeper and live with more purpose.
        </p>
        <form className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row">
          <input
            type="email"
            name="email"
            required
            placeholder="your@email.com"
            className="flex-1 rounded-lg border border-brand-navy/10 px-4 py-3"
            aria-label="Email for newsletter"
          />
          <button type="submit" className="btn-primary whitespace-nowrap">
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
}
