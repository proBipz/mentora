import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpen } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { PageHero } from "@/components/sections/PageHero";
import { CTASection } from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "Serbia Guide",
  description:
    "A practical knowledge hub covering living in Serbia, studying, Serbian cities, cost of living, accommodation, banking, healthcare, and starting a business.",
};

const guideCategories = [
  {
    title: "Living in Serbia",
    description:
      "Essential orientation for newcomers settling into daily life in Serbia.",
    status: "Guide Article Placeholder",
    href: "/resources",
  },
  {
    title: "Studying in Serbia",
    description:
      "Academic structure, university pathways, and student preparation overview.",
    status: "Guide Article Placeholder",
    href: "/education-consultation",
  },
  {
    title: "Serbian Cities",
    description:
      "Overviews of Belgrade, Novi Sad, Niš, Kragujevac, and regional hubs.",
    status: "Guide Article Placeholder",
    href: "/resources",
  },
  {
    title: "Cost of Living",
    description:
      "Budgeting categories and expense planning templates (live figures to be populated).",
    status: "Dynamic Data Placeholder",
    href: "/resources",
  },
  {
    title: "Accommodation",
    description:
      "Student dormitories, private rentals, lease basics, and neighborhood orientation.",
    status: "Guide Article Placeholder",
    href: "/resources",
  },
  {
    title: "Transportation",
    description:
      "City public transport, intercity buses, rail routes, and airport transfers.",
    status: "Guide Article Placeholder",
    href: "/resources",
  },
  {
    title: "Banking",
    description:
      "Overview of opening accounts, currency exchange, and everyday payment methods.",
    status: "Guide Article Placeholder",
    href: "/resources",
  },
  {
    title: "Mobile & Internet",
    description:
      "SIM cards, mobile data plans, and home broadband providers in Serbia.",
    status: "Guide Article Placeholder",
    href: "/resources",
  },
  {
    title: "Healthcare Information",
    description:
      "General overview of public/private healthcare access and student insurance considerations.",
    status: "Guide Article Placeholder",
    href: "/resources",
  },
  {
    title: "Starting a Business",
    description:
      "High-level orientation on business forms such as Preduzetnik and DOO (non-legal overview).",
    status: "Guide Article Placeholder",
    href: "/resources",
  },
  {
    title: "Student Life",
    description:
      "Campus culture, student communities, part-time lifestyle, and practical tips.",
    status: "Guide Article Placeholder",
    href: "/resources",
  },
  {
    title: "Working Environment",
    description:
      "General overview of Serbia's technology, business, and professional landscape.",
    status: "Guide Article Placeholder",
    href: "/resources",
  },
  {
    title: "Culture & Everyday Life",
    description:
      "Language basics, local customs, public holidays, and social etiquette.",
    status: "Guide Article Placeholder",
    href: "/resources",
  },
  {
    title: "Useful Government Links",
    description:
      "Directory placeholder for official Serbian ministries, portals, and public registries.",
    status: "Directory Links Placeholder",
    href: "/resources",
  },
];

export default function SerbiaGuidePage() {
  return (
    <>
      <PageHero
        eyebrow="Knowledge Hub"
        title="Serbia Guide"
        subtitle="A structured knowledge hub covering practical aspects of studying, living, and doing business in Serbia."
        breadcrumbs={[{ label: "Serbia Guide" }]}
      />

      <Section>
        <Container>
          <div className="max-w-2xl">
            <h2 className="text-2xl font-bold tracking-tight text-primary sm:text-3xl">
              Explore Serbia by Topic
            </h2>
            <p className="mt-3 text-base text-ink-muted">
              Browse our core topic categories. Detailed guides and verified
              reference datasets are being published progressively—cards below
              link to our upcoming resource library.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {guideCategories.map((category) => (
              <Card
                key={category.title}
                hoverable
                className="flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2">
                    <BookOpen
                      className="h-5 w-5 text-secondary"
                      aria-hidden="true"
                    />
                    <span className="rounded-full border border-border bg-surface-subtle px-2.5 py-0.5 text-[11px] font-medium text-ink-muted">
                      {category.status}
                    </span>
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-primary">
                    {category.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                    {category.description}
                  </p>
                </div>

                <div className="mt-6 pt-2">
                  <Link
                    href={category.href}
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-secondary transition-colors hover:text-secondary-hover"
                  >
                    View related resources
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <CTASection
        title="Looking for Specific Information About Serbia?"
        description="If a guide topic you need is not published yet, reach out or book a consultation for tailored research."
        buttonLabel="Book a Consultation"
        buttonHref="/book-consultation"
        secondaryLabel="Contact Mentora"
        secondaryHref="/contact"
      />
    </>
  );
}
