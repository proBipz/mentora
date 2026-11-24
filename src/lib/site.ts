export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

export const siteConfig = {
  name: "MENTORA",
  displayName: "Mentora",
  tagline: "Education. Technology. Information.",
  description:
    "Mentora is a Serbia-based consultancy providing education consultation, IT and software advisory, and reliable information services for students, professionals, entrepreneurs, and businesses.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://mentora.rs",
  locale: "en",
  supportedLocales: ["en", "sr", "bn"] as const,
  contact: {
    email:
      process.env.NEXT_PUBLIC_CONTACT_EMAIL || "[CONTACT_EMAIL_PLACEHOLDER]",
    phone:
      process.env.NEXT_PUBLIC_CONTACT_PHONE || "[CONTACT_PHONE_PLACEHOLDER]",
    whatsapp:
      process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "[WHATSAPP_NUMBER_PLACEHOLDER]",
    address: "[SERBIA_REGISTERED_ADDRESS_PLACEHOLDER]",
    registrationNumber: "[SERBIAN_REGISTRATION_NUMBER_PLACEHOLDER]",
    pib: "[PIB_TAX_ID_PLACEHOLDER]",
  },
  legalDisclaimer:
    "Mentora is an independent consultancy and information services business. Mentora is not a university, government agency, embassy, immigration authority, or law firm. Admission, visa, and residence decisions are made solely by the relevant institutions and authorities.",
} as const;

export const mainNav: NavItem[] = [
  {
    label: "Services",
    href: "/education-consultation",
    children: [
      { label: "Education Consultation", href: "/education-consultation" },
      { label: "IT & Software Consultancy", href: "/it-consultancy" },
      { label: "Information Services", href: "/information-services" },
    ],
  },
  { label: "Serbia Guide", href: "/serbia-guide" },
  { label: "Resources", href: "/resources" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const footerNav = {
  services: [
    { label: "Education Consultation", href: "/education-consultation" },
    { label: "IT Consultancy", href: "/it-consultancy" },
    { label: "Information Services", href: "/information-services" },
  ],
  explore: [
    { label: "Serbia Guide", href: "/serbia-guide" },
    { label: "Resources", href: "/resources" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
    { label: "Book a Consultation", href: "/book-consultation" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms & Conditions", href: "/terms-and-conditions" },
    { label: "Disclaimer", href: "/disclaimer" },
    { label: "Cookie Policy", href: "/cookie-policy" },
  ],
} as const;
