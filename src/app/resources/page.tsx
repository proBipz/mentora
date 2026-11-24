import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { PageHero } from "@/components/sections/PageHero";
import { CTASection } from "@/components/sections/CTASection";
import { ResourceDirectory } from "@/components/resources/ResourceDirectory";
import { resourceArticles } from "@/lib/resources";

export const metadata: Metadata = {
  title: "Resources & Insights",
  description:
    "Guides and article templates covering studying in Serbia, student living guides, technology, AI automation, and MVP planning.",
};

export default function ResourcesPage() {
  return (
    <>
      <PageHero
        eyebrow="Resources & Insights"
        title="Resources & Insights"
        subtitle="Practical guides and structured article templates across education in Serbia, local orientation, technology, and digital transformation."
        breadcrumbs={[{ label: "Resources & Insights" }]}
      />

      <Section>
        <Container>
          <ResourceDirectory articles={resourceArticles} />
        </Container>
      </Section>

      <CTASection
        title="Have a Topic You Need Clarified?"
        description="Book a consultation or send us your question for tailored guidance."
        buttonLabel="Book a Consultation"
        buttonHref="/book-consultation"
        secondaryLabel="Contact Mentora"
        secondaryHref="/contact"
      />
    </>
  );
}
