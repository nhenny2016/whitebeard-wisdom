import type { ReactNode } from "react";
import Image from "next/image";

type PageHeroProps = {
  badge: string;
  title: string;
  description: string;
  actions?: ReactNode;
  image?: string;
  imageAlt?: string;
};

export function PageHero({
  badge,
  title,
  description,
  actions,
  image,
  imageAlt = "",
}: PageHeroProps) {
  return (
    <section className="relative overflow-hidden border-b border-brand-navy/8 bg-brand-cream">
      <div className={`section-shell ${image ? "grid items-center gap-10 py-14 md:py-16 lg:grid-cols-2" : "py-14 md:py-16"}`}>
        <div>
          <p className="section-badge">{badge}</p>
          <h1 className="headline-banner mt-5 text-[clamp(2rem,5vw,3.75rem)]">{title}</h1>
          <p className="mt-5 max-w-3xl text-base leading-8 text-body md:text-lg">{description}</p>
          {actions ? <div className="mt-8 flex flex-wrap gap-4">{actions}</div> : null}
        </div>
        {image ? (
          <div className="relative mx-auto aspect-[4/5] w-full max-w-md overflow-hidden rounded-3xl border border-brand-gold/20 shadow-[0_20px_60px_rgba(27,43,72,0.12)]">
            <Image
              src={image}
              alt={imageAlt}
              fill
              className="object-cover object-top"
              sizes="(max-width: 1024px) 100vw, 420px"
            />
          </div>
        ) : null}
      </div>
    </section>
  );
}
