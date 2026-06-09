import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/coaching",
    "/programs",
    "/wisdom",
    "/workshops",
    "/about",
    "/testimonials",
    "/contact",
    "/llms.txt",
    "/llms-full.txt",
  ];

  return routes.map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : route.startsWith("/llms") ? 0.6 : 0.8,
  }));
}
