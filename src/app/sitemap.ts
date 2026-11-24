import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";
import { resourceArticles } from "@/lib/resources";

const staticRoutes = [
  "",
  "/education-consultation",
  "/it-consultancy",
  "/information-services",
  "/about",
  "/serbia-guide",
  "/resources",
  "/contact",
  "/book-consultation",
  "/privacy-policy",
  "/terms-and-conditions",
  "/disclaimer",
  "/cookie-policy",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const mainEntries: MetadataRoute.Sitemap = staticRoutes.map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified,
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1.0 : 0.8,
  }));

  const articleEntries: MetadataRoute.Sitemap = resourceArticles.map(
    (article) => ({
      url: `${siteConfig.url}/resources/${article.slug}`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.6,
    })
  );

  return [...mainEntries, ...articleEntries];
}
