import {
  ApproachSection,
  HeroSection,
  LeadMagnetSection,
  NewsletterSection,
  OutcomesSection,
  PainPointsSection,
  ProgramsSection,
  WisdomPreviewSection,
} from "@/components/home-sections";
import {
  CtaSection,
  GettingStartedSection,
  TestimonialsSection,
  ValuesSection,
} from "@/components/cta-section";
import { FaqSection } from "@/components/faq-section";
import { PageShell } from "@/components/page-shell";

export default function HomePage() {
  return (
    <PageShell>
      <HeroSection />
      <LeadMagnetSection />
      <PainPointsSection />
      <ApproachSection />
      <OutcomesSection />
      <ProgramsSection />
      <WisdomPreviewSection />
      <ValuesSection />
      <TestimonialsSection compact />
      <GettingStartedSection />
      <NewsletterSection />
      <FaqSection />
      <CtaSection />
    </PageShell>
  );
}
