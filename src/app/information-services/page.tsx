import type { Metadata } from "next";
import { Info } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { PageHero } from "@/components/sections/PageHero";
import { ServiceGrid, ServiceGridItem } from "@/components/sections/ServiceGrid";
import { CTASection } from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "Information Services",
  description:
    "Serbia information services. Reliable, structured research on living, housing, banking, business environment, and relocation in Serbia.",
};

const informationAreas: ServiceGridItem[] = [
  {
    title: "Living in Serbia",
    description:
      "Everyday orientation covering practical routines, city life, and local norms.",
  },
  {
    title: "Housing",
    description:
      "General information on rental markets, typical neighborhoods, and accommodation search considerations.",
  },
  {
    title: "Transportation",
    description:
      "Public transit systems, intercity connections, and everyday mobility across Serbian cities.",
  },
  {
    title: "Banking",
    description:
      "Overview of local banking services, account considerations, and everyday financial logistics.",
  },
  {
    title: "Mobile & Internet",
    description:
      "Information on local mobile carriers, prepaid/postpaid options, and home internet connectivity.",
  },
  {
    title: "Cost of Living",
    description:
      "Structured budgeting frameworks covering housing, utilities, food, and daily expenses.",
  },
  {
    title: "Education Environment",
    description:
      "General landscape of higher-education institutions and academic calendars in Serbia.",
  },
  {
    title: "Business Environment",
    description:
      "Overview of operating considerations, local commercial context, and starting a business in Serbia.",
  },
  {
    title: "General Employment Market Information",
    description:
      "Publicly available job-market research and general sector overviews. Mentora does not act as a recruitment or placement agency.",
  },
  {
    title: "Professional Services",
    description:
      "Connecting individuals and businesses to independent licensed legal, accounting, or tax specialists where needed.",
  },
  {
    title: "Local Service Directories",
    description:
      "Curated overviews of essential local services to help newcomers orient themselves faster.",
  },
  {
    title: "Market Research",
    description:
      "Structured desk research for entrepreneurs and organizations evaluating opportunities in Serbia.",
  },
  {
    title: "Relocation Information",
    description:
      "General pre-arrival and arrival checklists to help individuals plan systematically.",
  },
];

export default function InformationServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Information Services"
        title="Reliable Information for Life and Business in Serbia"
        subtitle="Mentora provides researched, structured, easy-to-understand information for individuals, students, professionals, and businesses interested in Serbia."
        breadcrumbs={[{ label: "Information Services" }]}
        actions={
          <Button href="/book-consultation" variant="primary" size="lg">
            Schedule an Information Consultation
          </Button>
        }
      />

      <ServiceGrid
        title="Information & Research Areas"
        subtitle="Practical, non-legal information organized to help you evaluate options and plan with confidence."
        items={informationAreas}
      />

      {/* Disclaimer */}
      <Section tone="subtle">
        <Container>
          <Card className="border-slate-300 bg-surface">
            <div className="flex items-start gap-4">
              <Info
                className="mt-0.5 h-6 w-6 shrink-0 text-secondary"
                aria-hidden="true"
              />
              <div className="space-y-2">
                <h2 className="text-lg font-bold text-primary">
                  Informational Scope &amp; Disclaimer
                </h2>
                <p className="text-sm leading-relaxed text-ink-muted">
                  Mentora provides general informational services. Information
                  may change and should be independently verified where
                  decisions involve legal, immigration, financial or regulatory
                  matters.
                </p>
                <p className="text-sm leading-relaxed text-ink-muted">
                  Mentora does not operate as a manpower agency, recruitment
                  agency, employment placement agency, or immigration law firm.
                  Where regulated services are required, Mentora may connect
                  clients with independent licensed providers.
                </p>
              </div>
            </div>
          </Card>
        </Container>
      </Section>

      <CTASection
        title="Need Structured Research on Serbia?"
        description="Book a consultation or send us your questions for practical, researched guidance."
        buttonLabel="Book a Consultation"
        buttonHref="/book-consultation"
        secondaryLabel="Explore Serbia Guide"
        secondaryHref="/serbia-guide"
      />
    </>
  );
}
