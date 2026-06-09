import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/lib/site";

type BrandLogoProps = {
  variant?: "header" | "footer" | "full";
  href?: string;
  priority?: boolean;
};

export function BrandLogo({ variant = "header", href = "/", priority = false }: BrandLogoProps) {
  const src = variant === "header" ? siteConfig.images.logoMark : siteConfig.images.logo;
  const width = variant === "footer" ? 220 : variant === "full" ? 320 : 72;
  const height = variant === "footer" ? 340 : variant === "full" ? 490 : 72;

  return (
    <Link href={href} className="inline-flex items-center" aria-label={siteConfig.name}>
      <Image
        src={src}
        alt={siteConfig.name}
        width={width}
        height={height}
        priority={priority}
        className={
          variant === "header"
            ? "h-14 w-auto object-contain sm:h-16"
            : variant === "full"
              ? "h-auto w-full max-w-xs object-contain"
              : "h-auto w-[min(180px,42vw)] object-contain"
        }
      />
    </Link>
  );
}
