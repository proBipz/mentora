export const siteConfig = {
  name: "Mentora",
  tagline: "Education. Technology. Information.",
  description:
    "A Serbia-based consultancy providing education consultation, IT and software advisory, and reliable information services.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://example.com",
};

export const mainNavigation = [
  { label: "Home", href: "/" },
  { label: "Education", href: "/education-consultation" },
  { label: "IT Consultancy", href: "/it-software-consultancy" },
  { label: "Information", href: "/information-services" },
  { label: "Serbia Guide", href: "/serbia-guide" },
  { label: "Resources", href: "/resources" },
  { label: "About", href: "/about" },
];

export const legalNavigation = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms & Conditions", href: "/terms-and-conditions" },
  { label: "Disclaimer", href: "/disclaimer" },
  { label: "Cookie Policy", href: "/cookie-policy" },
];

export function pageMetadata(title: string, description: string) {
  return { title, description };
}
