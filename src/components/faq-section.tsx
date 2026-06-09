import { faqs } from "@/lib/site";

type FaqSectionProps = {
  title?: string;
  intro?: string;
};

export function FaqSection({
  title = "Questions about Whitebeard Wisdom",
  intro = "Answers about life coaching with Rodney Penn, signature programs, workshops, and how to get started.",
}: FaqSectionProps) {
  return (
    <section className="border-t border-brand-navy/8">
      <div className="section-shell">
        <p className="section-badge-dark">FAQ</p>
        <h2 className="headline-banner mt-4 text-3xl md:text-4xl">{title}</h2>
        <p className="mt-4 max-w-3xl text-body">{intro}</p>

        <dl className="mt-10 space-y-4">
          {faqs.map((faq) => (
            <div key={faq.question} className="card">
              <dt className="font-semibold text-brand-navy">{faq.question}</dt>
              <dd className="mt-3 text-sm leading-7 text-body">{faq.answer}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
