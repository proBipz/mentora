import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { PageHero } from "@/components/sections/PageHero";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Starter Privacy Policy template for Mentora.",
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Privacy Policy"
        subtitle="How Mentora handles information submitted through this website."
        breadcrumbs={[{ label: "Privacy Policy" }]}
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
                1. Data Controller
              </h2>
              <p className="text-sm leading-relaxed text-ink-muted sm:text-base">
                This website is operated by {siteConfig.displayName} (Serbian
                Sole Proprietorship / Preduzetnik). Registered address:{" "}
                {siteConfig.contact.address}. Contact email:{" "}
                {siteConfig.contact.email}.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-primary">
                2. Information We Collect
              </h2>
              <p className="text-sm leading-relaxed text-ink-muted sm:text-base">
                When you submit a contact or consultation request form, we
                collect the details you provide, such as your full name, email
                address, phone or WhatsApp number, country, selected service,
                and inquiry message.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-primary">
                3. Purpose of Processing
              </h2>
              <p className="text-sm leading-relaxed text-ink-muted sm:text-base">
                Submitted information is used solely to respond to your inquiry,
                prepare for requested consultations, and maintain essential
                website security. We do not sell personal data to third parties.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-primary">
                4. Data Retention &amp; Your Rights
              </h2>
              <p className="text-sm leading-relaxed text-ink-muted sm:text-base">
                You may request access to, correction of, or deletion of your
                personal data by contacting {siteConfig.contact.email}. Final
                retention periods and statutory Serbian data-protection clauses
                should be confirmed by legal counsel prior to commercial launch.
              </p>
            </section>
          </div>
        </Container>
      </Section>
    </>
  );
}
