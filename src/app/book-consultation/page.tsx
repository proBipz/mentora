import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { PageHero } from "@/components/sections/PageHero";
import { BookingWidget } from "@/components/forms/BookingWidget";

export const metadata: Metadata = {
  title: "Book a Consultation",
  description:
    "Schedule an Education, Technology, Serbia Information, or Business Consultation with Mentora.",
};

export default function BookConsultationPage() {
  return (
    <>
      <PageHero
        eyebrow="Consultation"
        title="Book a Consultation"
        subtitle="Choose a consultation area and duration to request a session with Mentora."
        breadcrumbs={[{ label: "Book a Consultation" }]}
      />

      <Section>
        <Container>
          <div className="mx-auto max-w-4xl">
            <BookingWidget />
          </div>
        </Container>
      </Section>
    </>
  );
}
