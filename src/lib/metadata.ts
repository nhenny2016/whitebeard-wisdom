import type { Metadata } from "next";
import { siteConfig } from "./site";

type PageMeta = {
  title: string;
  description: string;
  path?: string;
};

export function createMetadata({ title, description, path = "" }: PageMeta): Metadata {
  const url = `${siteConfig.url}${path}`;

  return {
    title,
    description,
    metadataBase: new URL(siteConfig.url),
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      locale: siteConfig.locale,
      url,
      siteName: siteConfig.name,
      title,
      description,
      images: [
        {
          url: siteConfig.images.ogImage,
          width: 1200,
          height: 630,
          alt: `${siteConfig.name} — executive and life coaching`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}

export const homeMetadata = createMetadata({
  title: `${siteConfig.name} | ${siteConfig.slogan}`,
  description: siteConfig.description,
  path: "/",
});
