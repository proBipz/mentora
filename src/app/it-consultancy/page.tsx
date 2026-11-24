import type { Metadata } from "next";
import { Button } from "@/components/ui/Button";
import { PageHero } from "@/components/sections/PageHero";
import { ServiceGrid, ServiceGridItem } from "@/components/sections/ServiceGrid";
import { CTASection } from "@/components/sections/CTASection";
import { FAQSection, FAQItem } from "@/components/sections/FAQSection";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "IT & Software Consultancy",
  description:
    "IT consultancy Serbia, software consultancy Serbia, and technology consultant Serbia. Practical technology solutions for startups, SMEs, and growing businesses.",
  path: "/it-consultancy",
  keywords: [
    "IT consultancy Serbia",
    "Software consultancy Serbia",
    "Technology consultant Serbia",
  ],
});

const itServices: ServiceGridItem[] = [
  {
    title: "IT Consulting",
    items: [
      "Technology strategy",
      "System evaluation",
      "Software selection",
      "Digital transformation",
      "Technical planning",
    ],
  },
  {
    title: "Website Development",
    items: [
      "Corporate websites",
      "Consultancy websites",
      "Landing pages",
      "Portfolio websites",
      "Business platforms",
    ],
  },
  {
    title: "Software & Web Applications",
    items: [
      "Custom web applications",
      "Internal tools",
      "Dashboards",
      "Business systems",
      "MVP development",
    ],
  },
  {
    title: "Product Management",
    items: [
      "Product strategy",
      "Roadmaps",
      "Feature prioritization",
      "Requirements",
      "User stories",
      "Product documentation",
    ],
  },
  {
    title: "Project Management",
    items: [
      "Planning",
      "Scheduling",
      "Risk management",
      "Vendor management",
      "Team coordination",
      "Delivery tracking",
    ],
  },
  {
    title: "AI & Automation",
    items: [
      "AI-assisted workflows",
      "Business automation",
      "Internal productivity solutions",
      "Process optimization",
      "AI implementation advisory",
    ],
  },
  {
    title: "Startup & MVP Consulting",
    items: [
      "Idea validation",
      "Product scope",
      "MVP roadmap",
      "Technology planning",
      "Go-to-market product support",
    ],
  },
];

const itFaqs: FAQItem[] = [
  {
    question: "Who are Mentora's IT & software consultancy services built for?",
    answer:
      "We work with startups, Serbian SMEs, entrepreneurs, and international organizations looking for practical technology consulting, product planning, or web and software execution.",
  },
  {
    question: "Can Mentora help before we hire a full engineering team?",
    answer:
      "Yes. We help founders and businesses define requirements, scope an MVP, evaluate software vendors, and establish a realistic technical roadmap before committing major capital.",
  },
  {
    question: "Do you handle both advisory and hands-on web development?",
    answer:
      "Yes. Depending on your needs, Mentora supports technology advisory, product and project management, and delivery of modern corporate websites, web applications, and automation workflows.",
  },
];

export default function ITConsultancyPage() {
  return (
    <>
      <PageHero
        eyebrow="IT & Software Consultancy"
        title="Practical Technology Solutions for Growing Businesses"
        subtitle="From product planning to software implementation, Mentora helps organizations use technology effectively."
        breadcrumbs={[{ label: "IT & Software Consultancy" }]}
        actions={
          <Button href="/contact" variant="primary" size="lg">
            Discuss Your Technology Project
          </Button>
        }
      />

      <ServiceGrid
        title="Technology & Digital Advisory Capabilities"
        subtitle="Practical technology consulting focused on solving real business problems—from product strategy to delivery."
        items={itServices}
      />

      <FAQSection items={itFaqs} tone="subtle" />

      <CTASection
        title="Ready to Plan or Build Your Digital Solution?"
        description="Share your goals with Mentora to explore product planning, software consulting, or implementation support."
        buttonLabel="Discuss Your Technology Project"
        buttonHref="/contact"
        secondaryLabel="Book a Consultation"
        secondaryHref="/book-consultation"
      />
    </>
  );
}
