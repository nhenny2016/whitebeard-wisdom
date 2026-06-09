import type { Metadata } from "next";
import { CtaSection, TestimonialsSection } from "@/components/cta-section";
import { PageHero } from "@/components/page-hero";
import { PageShell } from "@/components/page-shell";
import { createMetadata } from "@/lib/metadata";
import { breadcrumbSchema, jsonLd } from "@/lib/schema";

export const metadata: Metadata = createMetadata({
  title: "Client Testimonials | Whitebeard Wisdom — Executive Coaching Reviews",
  description:
    "Read what clients say about executive coaching with James Whitfield and Whitebeard Wisdom — clarity, confidence, and transformation for leaders.",
  path: "/testimonials",
});

export default function TestimonialsPage() {
  const breadcrumbs = breadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Testimonials", path: "/testimonials" },
  ]);

  return (
    <PageShell>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(breadcrumbs) }} />
      <PageHero
        badge="Testimonials"
        title="Leaders who chose wisdom over drift."
        description="Real stories from executives, founders, and professionals who worked with James to find clarity, make hard decisions, and build lives aligned with what matters."
      />
      <TestimonialsSection />
      <CtaSection />
    </PageShell>
  );
}
