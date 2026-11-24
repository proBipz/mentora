import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { PageHero } from "@/components/sections/PageHero";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "Starter Terms & Conditions template for Mentora.",
};

export default function TermsAndConditionsPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Terms & Conditions"
        subtitle="General terms governing use of the Mentora website and consultancy inquiries."
        breadcrumbs={[{ label: "Terms & Conditions" }]}
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
                1. Scope of Services
              </h2>
              <p className="text-sm leading-relaxed text-ink-muted sm:text-base">
                {siteConfig.displayName} provides education consultation, IT and
                software consultancy, and general information services. Specific
                engagements are governed by separate written service agreements
                where applicable.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-primary">
                2. No Guarantees &amp; Non-Regulated Role
              </h2>
              <p className="text-sm leading-relaxed text-ink-muted sm:text-base">
                {siteConfig.legalDisclaimer}
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-primary">
                3. Intellectual Property
              </h2>
              <p className="text-sm leading-relaxed text-ink-muted sm:text-base">
                Original website text, layout, and brand materials belong to{" "}
                {siteConfig.displayName} unless otherwise noted and may not be
                republished without permission.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-primary">
                4. Governing Law Placeholder
              </h2>
              <p className="text-sm leading-relaxed text-ink-muted sm:text-base">
                These terms are intended to be governed by the laws of the
                Republic of Serbia. Final jurisdiction and dispute-resolution
                wording must be reviewed by qualified legal counsel before
                commercial launch.
              </p>
            </section>
          </div>
        </Container>
      </Section>
    </>
  );
}
