import type { Metadata } from "next";
import { User, Linkedin, Mail } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { PageHero } from "@/components/sections/PageHero";
import { CTASection } from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "About Mentora",
  description:
    "About Mentora — Serbia-based consultancy built on clarity, transparency, and practicality across education, technology, and information services.",
};

const principles = [
  {
    title: "Clarity",
    description: "We explain complex information simply.",
  },
  {
    title: "Transparency",
    description:
      "We clearly distinguish consultancy from regulated professional services.",
  },
  {
    title: "Practicality",
    description:
      "Our recommendations focus on actions clients can realistically take.",
  },
];

const values = [
  "Integrity",
  "Transparency",
  "Practicality",
  "Research",
  "Innovation",
  "Client Focus",
];

const founderExpertise = [
  "Product Management",
  "Project Management",
  "Technology Consulting",
  "Business Analysis",
  "Startup Mentoring",
  "Digital Transformation",
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="About Mentora"
        subtitle="Mentora was created to make complex decisions easier."
        breadcrumbs={[{ label: "About Mentora" }]}
      />

      {/* Story & Principles */}
      <Section>
        <Container>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
            <div className="space-y-5 text-base leading-relaxed text-ink-muted lg:col-span-6 sm:text-lg">
              <p>
                Whether someone is researching education opportunities in
                Serbia, planning a digital product or simply trying to
                understand how life and business work in a new country, finding
                reliable information can be difficult.
              </p>
              <p>
                Mentora combines research, consulting and technology expertise
                to provide practical support and structured information.
              </p>
              <p className="font-medium text-primary">
                Our work is built around three principles:
              </p>
            </div>

            <div className="grid grid-cols-1 gap-4 lg:col-span-6">
              {principles.map((principle) => (
                <Card key={principle.title}>
                  <h2 className="text-lg font-semibold text-primary">
                    {principle.title}
                  </h2>
                  <p className="mt-1.5 text-sm leading-relaxed text-ink-muted">
                    {principle.description}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* Mission, Vision, Values */}
      <Section tone="subtle">
        <Container>
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            <Card>
              <p className="text-xs font-semibold uppercase tracking-wider text-secondary">
                Mission
              </p>
              <h2 className="mt-2 text-2xl font-bold text-primary">
                Our Mission
              </h2>
              <p className="mt-3 text-base leading-relaxed text-ink-muted">
                To help people and businesses make better decisions through
                reliable information, practical consultancy and technology.
              </p>
            </Card>

            <Card>
              <p className="text-xs font-semibold uppercase tracking-wider text-secondary">
                Vision
              </p>
              <h2 className="mt-2 text-2xl font-bold text-primary">
                Our Vision
              </h2>
              <p className="mt-3 text-base leading-relaxed text-ink-muted">
                To build Mentora into a trusted international consultancy
                connecting knowledge, technology and opportunity.
              </p>
            </Card>
          </div>

          <div className="mt-12">
            <h2 className="text-2xl font-bold tracking-tight text-primary">
              Our Values
            </h2>
            <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
              {values.map((value) => (
                <Card key={value} className="text-center">
                  <span className="text-sm font-semibold text-primary">
                    {value}
                  </span>
                </Card>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* Founder & Principal Consultant */}
      <Section>
        <Container>
          <div className="max-w-4xl">
            <p className="text-xs font-semibold uppercase tracking-wider text-secondary">
              Leadership
            </p>
            <h2 className="mt-2 text-2xl font-bold tracking-tight text-primary sm:text-3xl">
              Founder &amp; Principal Consultant
            </h2>

            <Card className="mt-8 p-6 sm:p-8">
              <div className="grid grid-cols-1 gap-8 md:grid-cols-12">
                {/* Photo Placeholder */}
                <div className="md:col-span-4">
                  <div className="flex aspect-square w-full flex-col items-center justify-center rounded-xl border border-dashed border-border-strong bg-surface-subtle p-6 text-center">
                    <User
                      className="h-12 w-12 text-slate-400"
                      aria-hidden="true"
                    />
                    <span className="mt-3 text-xs font-medium text-ink-muted">
                      Professional Photo Placeholder
                    </span>
                  </div>
                </div>

                {/* Founder Details */}
                <div className="space-y-5 md:col-span-8">
                  <div>
                    <h3 className="text-2xl font-bold text-primary">
                      Prosun Bepari
                    </h3>
                    <p className="mt-1 text-sm font-medium text-secondary">
                      Founder &amp; Principal Consultant
                    </p>
                  </div>

                  <p className="text-base leading-relaxed text-ink-muted">
                    Product and project management professional, entrepreneur
                    and business mentor with experience across technology,
                    startups, digital products, e-commerce and business
                    consulting.
                  </p>

                  <div>
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-ink-muted">
                      Areas of Expertise
                    </h4>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {founderExpertise.map((area) => (
                        <span
                          key={area}
                          className="rounded-full border border-border bg-surface-subtle px-3 py-1 text-xs font-medium text-primary"
                        >
                          {area}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-4 border-t border-border pt-4 text-sm text-ink-muted">
                    <span className="inline-flex items-center gap-2">
                      <Linkedin className="h-4 w-4 text-secondary" aria-hidden="true" />
                      <span>[LINKEDIN_URL_PLACEHOLDER]</span>
                    </span>
                    <span className="inline-flex items-center gap-2">
                      <Mail className="h-4 w-4 text-secondary" aria-hidden="true" />
                      <span>[FOUNDER_EMAIL_PLACEHOLDER]</span>
                    </span>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </Container>
      </Section>

      <CTASection
        title="Work with Mentora"
        description="Whether you are exploring education in Serbia or planning a digital product, we are ready to help."
        buttonLabel="Book a Consultation"
        buttonHref="/book-consultation"
        secondaryLabel="Contact Us"
        secondaryHref="/contact"
      />
    </>
  );
}
