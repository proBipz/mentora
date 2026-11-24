import type { Metadata } from "next";
import { AlertTriangle } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { PageHero } from "@/components/sections/PageHero";
import { ServiceGrid, ServiceGridItem } from "@/components/sections/ServiceGrid";
import { CTASection } from "@/components/sections/CTASection";
import { FAQSection, FAQItem } from "@/components/sections/FAQSection";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Education Consultation | Study in Serbia",
  description:
    "Education consultancy Serbia. Mentora helps international students research Serbian universities, compare programs, organize documentation, and prepare for life in Serbia.",
  path: "/education-consultation",
  keywords: [
    "Education consultancy Serbia",
    "Study in Serbia",
    "Serbia university consultancy",
    "International student consultancy Serbia",
  ],
});

const whySerbiaPoints = [
  {
    title: "European Location",
    description:
      "Serbia is located in Southeast Europe at the crossroads of Central Europe and the Balkans, offering international connectivity while remaining outside the European Union and Schengen Area.",
  },
  {
    title: "University Options",
    description:
      "Serbia offers both public and private higher-education institutions across cities such as Belgrade, Novi Sad, Niš, and Kragujevac.",
  },
  {
    title: "International Programs",
    description:
      "Selected undergraduate, master's, and doctoral programs are offered in English across fields such as engineering, medicine, IT, business, and social sciences.",
  },
  {
    title: "Relatively Competitive Living Costs",
    description:
      "Compared with many Western European study destinations, tuition fees and everyday living costs in Serbia can be more accessible depending on city, university, and lifestyle.",
  },
  {
    title: "Cultural Experience",
    description:
      "Students experience a rich historical heritage, welcoming hospitality, and vibrant city life across Serbia's university centers.",
  },
  {
    title: "Growing International Student Community",
    description:
      "Universities in Serbia host students from Asia, the Middle East, Africa, and Europe, creating an increasingly diverse academic environment.",
  },
];

const educationServices: ServiceGridItem[] = [
  {
    title: "University Research",
    description:
      "We help students identify Serbian institutions and programs aligned with their educational goals.",
  },
  {
    title: "Program Comparison",
    description:
      "Compare tuition, curriculum, location, language of instruction and admission requirements.",
  },
  {
    title: "Admission Guidance",
    description: "Understand the steps involved in submitting an application.",
  },
  {
    title: "Documentation Guidance",
    description: "Help students organize application documentation.",
  },
  {
    title: "University Communication Support",
    description:
      "Assist students in communicating clearly with universities regarding admissions and documentation.",
  },
  {
    title: "Financial Planning",
    description: "Estimate tuition fees, accommodation and living expenses.",
  },
  {
    title: "Accommodation Information",
    description: "Understand common student housing options and areas.",
  },
  {
    title: "Pre-arrival Orientation",
    description: "Practical information before travelling to Serbia.",
  },
  {
    title: "Serbia Orientation",
    description:
      "Transportation, banking, mobile connectivity, daily expenses and basic local information.",
  },
];

const studentJourney = [
  "Initial Consultation",
  "Academic Profile Review",
  "University & Program Research",
  "Application Planning",
  "Documentation Support",
  "University Communication",
  "Admission Decision",
  "Pre-arrival Preparation",
  "Serbia Orientation",
];

const educationFaqs: FAQItem[] = [
  {
    question: "Does Mentora guarantee university admission or a visa?",
    answer:
      "No. Mentora provides education consultancy and administrative information. Admission decisions are made exclusively by educational institutions, and visa and residence decisions are made exclusively by Serbian authorities.",
  },
  {
    question: "Is Serbia part of the EU or Schengen Area?",
    answer:
      "No. Serbia is a European country in Southeast Europe, and it is currently not a member of the European Union or the Schengen Area.",
  },
  {
    question: "Can Mentora help with legal or immigration representation?",
    answer:
      "Mentora is not a law firm or immigration authority. Where regulated legal or immigration services are required, we can connect clients with independent qualified professionals.",
  },
];

export default function EducationConsultationPage() {
  return (
    <>
      <PageHero
        eyebrow="Education Consultation"
        title="Study in Serbia with Better Information"
        subtitle="Mentora helps international students research universities, understand programs and prepare for their education journey in Serbia."
        breadcrumbs={[{ label: "Education Consultation" }]}
        actions={
          <Button href="/book-consultation" variant="primary" size="lg">
            Book an Education Consultation
          </Button>
        }
      />

      <Section>
        <Container>
          <div className="max-w-2xl">
            <h2 className="text-2xl font-bold tracking-tight text-primary sm:text-3xl">
              Why Study in Serbia?
            </h2>
            <p className="mt-3 text-base text-ink-muted">
              Key considerations for international students evaluating higher
              education in Serbia.
            </p>
          </div>
          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {whySerbiaPoints.map((point) => (
              <Card key={point.title}>
                <h3 className="text-lg font-semibold text-primary">
                  {point.title}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-ink-muted">
                  {point.description}
                </p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <ServiceGrid
        title="Our Education Consultation Services"
        subtitle="Systematic, transparent support from initial university research to arrival orientation."
        items={educationServices}
        tone="subtle"
      />

      <Section>
        <Container>
          <div className="max-w-2xl">
            <h2 className="text-2xl font-bold tracking-tight text-primary sm:text-3xl">
              Student Journey
            </h2>
            <p className="mt-3 text-base text-ink-muted">
              A clear, step-by-step roadmap from your initial inquiry through
              orientation in Serbia.
            </p>
          </div>
          <ol className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {studentJourney.map((stage, idx) => (
              <li key={stage}>
                <Card className="flex items-center gap-4">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-surface-subtle text-sm font-bold text-secondary">
                    {idx + 1}
                  </span>
                  <span className="text-base font-semibold text-primary">
                    {stage}
                  </span>
                </Card>
              </li>
            ))}
          </ol>
        </Container>
      </Section>

      <Section tone="subtle">
        <Container>
          <Card className="border-amber-300/70 bg-amber-50/40">
            <div className="flex items-start gap-4">
              <AlertTriangle
                className="mt-0.5 h-6 w-6 shrink-0 text-amber-700"
                aria-hidden="true"
              />
              <div className="space-y-2.5">
                <h2 className="text-lg font-bold text-primary">
                  Important Disclaimer
                </h2>
                <p className="text-sm leading-relaxed text-ink-muted">
                  Mentora provides education consultancy and administrative
                  information.
                </p>
                <p className="text-sm leading-relaxed text-ink-muted">
                  Admission decisions are made exclusively by educational
                  institutions. Visa and residence decisions are made
                  exclusively by Serbian authorities.
                </p>
                <p className="text-sm leading-relaxed text-ink-muted">
                  Mentora cannot guarantee admission, visa approval,
                  scholarships or residence permits. Legal or immigration
                  representation, where required, must be provided by
                  appropriately qualified professionals.
                </p>
              </div>
            </div>
          </Card>
        </Container>
      </Section>

      <FAQSection items={educationFaqs} tone="default" />

      <CTASection
        title="Need help exploring Serbian universities?"
        description="Schedule an education consultation to discuss your academic goals and options in Serbia."
        buttonLabel="Book an Education Consultation"
        buttonHref="/book-consultation"
      />
    </>
  );
}
