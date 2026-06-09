import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/lib/site";

type BrandLogoProps = {
  variant?: "header" | "footer";
  href?: string;
  priority?: boolean;
};

export function BrandLogo({ variant = "header", href = "/", priority = false }: BrandLogoProps) {
  const size = variant === "footer" ? 200 : 160;

  return (
    <Link href={href} className="inline-flex items-center gap-3" aria-label={siteConfig.name}>
      <Image
        src={siteConfig.images.logo}
        alt=""
        width={size}
        height={size}
        priority={priority}
        className="h-auto w-[min(56px,12vw)] object-contain"
      />
      <span className="hidden flex-col sm:flex">
        <span className="font-[family-name:var(--font-playfair)] text-lg font-bold tracking-wide text-brand-navy">
          <span className="text-brand-gold">W</span>HITEBEARD{" "}
          <span className="text-brand-gold">W</span>ISDOM
        </span>
        {variant === "footer" && (
          <span className="text-xs text-muted">whitebeardwisdom.com</span>
        )}
      </span>
    </Link>
  );
}
