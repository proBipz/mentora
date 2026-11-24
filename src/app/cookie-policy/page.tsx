import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { PageHero } from "@/components/sections/PageHero";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description: "Starter Cookie Policy template for Mentora.",
};

export default function CookiePolicyPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Cookie Policy"
        subtitle="Information about essential and optional cookies on the Mentora website."
        breadcrumbs={[{ label: "Cookie Policy" }]}
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
                1. Essential Storage &amp; Cookies
              </h2>
              <p className="text-sm leading-relaxed text-ink-muted sm:text-base">
                Mentora uses strictly necessary browser storage to remember your
                cookie consent preference and ensure reliable site navigation.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-primary">
                2. Optional Analytics Cookies
              </h2>
              <p className="text-sm leading-relaxed text-ink-muted sm:text-base">
                Analytics tools (such as Google Analytics 4 or Meta Pixel)
                remain inactive unless configured via environment variables and
                explicitly accepted through the cookie consent banner.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-primary">
                3. Managing Preferences
              </h2>
              <p className="text-sm leading-relaxed text-ink-muted sm:text-base">
                You can clear your browser storage or adjust cookie settings in
                your browser at any time.
              </p>
            </section>
          </div>
        </Container>
      </Section>
    </>
  );
}
