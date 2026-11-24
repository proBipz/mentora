import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";

interface PageMetadataInput {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
  type?: "website" | "article";
}

export function buildPageMetadata({
  title,
  description,
  path,
  keywords,
  type = "website",
}: PageMetadataInput): Metadata {
  const canonicalUrl = new URL(path, siteConfig.url).toString();

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: path,
    },
    openGraph: {
      type,
      url: canonicalUrl,
      siteName: siteConfig.displayName,
      title: `${title} | ${siteConfig.displayName}`,
      description,
      locale: "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${siteConfig.displayName}`,
      description,
    },
  };
}

export function getOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["Organization", "ProfessionalService"],
    name: siteConfig.displayName,
    url: siteConfig.url,
    description: siteConfig.description,
    areaServed: ["RS", "BD", "Worldwide"],
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.contact.address,
      addressCountry: "RS",
    },
    email: siteConfig.contact.email,
    telephone: siteConfig.contact.phone,
    taxID: siteConfig.contact.pib,
    identifier: siteConfig.contact.registrationNumber,
    knowsAbout: [
      "Education consultancy Serbia",
      "Study in Serbia",
      "IT consultancy Serbia",
      "Software consultancy Serbia",
      "Serbia information services",
    ],
  };
}

export function getWebsiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.displayName,
    url: siteConfig.url,
    inLanguage: "en",
  };
}

export function getBreadcrumbSchema(
  items: { name: string; path?: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: siteConfig.url,
      },
      ...items.map((item, idx) => ({
        "@type": "ListItem",
        position: idx + 2,
        name: item.name,
        ...(item.path
          ? { item: new URL(item.path, siteConfig.url).toString() }
          : {}),
      })),
    ],
  };
}

export function getFaqSchema(
  faqs: { question: string; answer: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function getArticleSchema(article: {
  title: string;
  description: string;
  path: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.description,
    url: new URL(article.path, siteConfig.url).toString(),
    author: {
      "@type": "Organization",
      name: siteConfig.displayName,
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.displayName,
    },
  };
}
