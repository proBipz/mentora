import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/lib/site";
import { integrationConfig } from "@/lib/integrations";
import { getOrganizationSchema, getWebsiteSchema } from "@/lib/seo";
import { JsonLd } from "@/components/seo/JsonLd";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CookieConsent } from "@/components/layout/CookieConsent";
import { AnalyticsScripts } from "@/components/analytics/AnalyticsScripts";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.displayName} | Education, Technology & Information in Serbia`,
    template: `%s | ${siteConfig.displayName}`,
  },
  description: siteConfig.description,
  alternates: {
    canonical: "/",
  },
  verification: integrationConfig.analytics.gscVerification
    ? { google: integrationConfig.analytics.gscVerification }
    : undefined,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    siteName: siteConfig.displayName,
    title: `${siteConfig.displayName} | Education, Technology & Information in Serbia`,
    description: siteConfig.description,
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.displayName} | Education, Technology & Information in Serbia`,
    description: siteConfig.description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${plusJakarta.variable}`}>
      <body className="flex min-h-screen flex-col font-sans text-ink antialiased">
        <JsonLd data={getOrganizationSchema()} />
        <JsonLd data={getWebsiteSchema()} />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-btn focus:bg-primary focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-white"
        >
          Skip to main content
        </a>
        <Header />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
        <CookieConsent />
        <AnalyticsScripts />
      </body>
    </html>
  );
}
