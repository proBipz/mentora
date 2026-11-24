import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { PageHero } from "@/components/sections/PageHero";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Website Disclaimer",
  description: "Starter Website Disclaimer template for Mentora.",
};

export default function DisclaimerPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Website Disclaimer"
        subtitle="Clarification of Mentora's consultancy and informational role."
        breadcrumbs={[{ label: "Disclaimer" }]}
      />

      <Section>
        <Container>
          <div className="mx-auto max-w-3xl space-y-8">
            <Card className="border-amber-300/70 bg-amber-50/40 p-5 text-sm text-ink-muted">
              <strong className="text-primary">Template Notice:</strong> This
              document is a general website template requiring final legal
              review before commercial launch. It does not constitute Serbian
              legal advice.
            </Card>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-primary">
                1. Independent Consultancy Status
              </h2>
              <p className="text-sm leading-relaxed text-ink-muted sm:text-base">
                {siteConfig.legalDisclaimer}
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-primary">
                2. General Information Only
              </h2>
              <p className="text-sm leading-relaxed text-ink-muted sm:text-base">
                Information published on this website—including education,
                living, business, and Serbia orientation guides—is provided for
                general informational purposes only. Regulations, tuition fees,
                and institutional procedures may change over time and should be
                independently verified.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-primary">
                3. No Recruitment or Legal Representation
              </h2>
              <p className="text-sm leading-relaxed text-ink-muted sm:text-base">
                Mentora is not a manpower agency, recruitment agency, employment
                placement agency, or law firm. Where regulated legal,
                immigration, tax, or accounting services are required, Mentora
                may connect clients with independent qualified professionals.
              </p>
            </section>
          </div>
        </Container>
      </Section>
    </>
  );
}
