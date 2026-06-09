import Link from "next/link";
import { BrandLogo } from "@/components/brand-logo";
import { LuminaForgeCredit } from "@/components/luminaforge-credit";
import { MobileNav } from "@/components/mobile-nav";
import { footerLinks, navLinks, siteConfig } from "@/lib/site";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-brand-navy/8 bg-white/95 backdrop-blur">
      <div className="relative mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-4">
        <BrandLogo variant="header" priority />

        <nav aria-label="Primary" className="hidden items-center gap-5 xl:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-brand-navy/85 transition hover:text-brand-gold-deep"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link href="/contact#schedule" className="btn-primary hidden text-xs sm:inline-flex">
            {siteConfig.booking.label}
          </Link>
          <MobileNav />
        </div>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-brand-navy/8 bg-brand-surface">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 md:grid-cols-2 lg:grid-cols-4">
        <div className="lg:col-span-2">
          <BrandLogo variant="footer" href="/" />
          <p className="mt-4 max-w-md font-[family-name:var(--font-playfair)] text-2xl text-brand-navy">
            {siteConfig.slogan}
          </p>
          <p className="mt-3 max-w-md text-sm leading-7 text-body">{siteConfig.description}</p>
          <p className="mt-4 text-sm text-muted">
            <a href={siteConfig.emailHref} className="font-semibold hover:text-brand-gold-deep">
              {siteConfig.email}
            </a>
            {" · "}
            <a href={siteConfig.phoneHref} className="font-semibold hover:text-brand-gold-deep">
              {siteConfig.phone}
            </a>
          </p>
        </div>

        <div>
          <p className="section-badge-dark">Services</p>
          <ul className="mt-4 space-y-2 text-sm text-gray-700">
            {footerLinks.services.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="font-medium hover:text-brand-gold-deep">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="section-badge">Company</p>
          <ul className="mt-4 space-y-2 text-sm text-gray-700">
            {[...footerLinks.company, ...footerLinks.resources].map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="font-medium hover:text-brand-gold-deep">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-6 flex flex-wrap gap-3 text-sm">
            <a
              href={siteConfig.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium hover:text-brand-gold-deep"
            >
              Instagram
            </a>
            <a
              href={siteConfig.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium hover:text-brand-gold-deep"
            >
              LinkedIn
            </a>
            <a
              href={siteConfig.social.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium hover:text-brand-gold-deep"
            >
              YouTube
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-brand-navy/8 px-6 py-6 text-center text-sm text-muted">
        © {new Date().getFullYear()} {siteConfig.legalName}
      </div>

      <LuminaForgeCredit />
    </footer>
  );
}
