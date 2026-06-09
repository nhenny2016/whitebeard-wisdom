import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { DM_Sans, Playfair_Display } from "next/font/google";
import { assets } from "@/lib/assets";
import { homeMetadata } from "@/lib/metadata";
import { faqSchema, jsonLd, organizationSchema, websiteSchema } from "@/lib/schema";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  ...homeMetadata,
  icons: {
    icon: [
      { url: assets.favicon, sizes: "32x32", type: "image/png" },
      { url: assets.icon192, sizes: "192x192", type: "image/png" },
    ],
    apple: [{ url: assets.appleTouchIcon, sizes: "180x180", type: "image/png" }],
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = [organizationSchema(), websiteSchema(), faqSchema()];

  return (
    <html lang="en" className={`${playfair.variable} ${dmSans.variable} h-full`}>
      <head>
        <link rel="alternate" type="text/plain" href="/llms.txt" title="LLM site brief" />
        <link rel="alternate" type="text/plain" href="/llms-full.txt" title="LLM full brief" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: jsonLd(structuredData) }}
        />
      </head>
      <body className="min-h-full antialiased">
        <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded focus:bg-brand-navy focus:px-4 focus:py-2 focus:text-white">
          Skip to main content
        </a>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
