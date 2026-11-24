import {
  ArrowRight,
  BookOpen,
  Compass,
  Cpu,
  Globe2,
  ShieldCheck,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { FeatureSection } from "@/components/sections/FeatureSection";
import { ProcessSection, ProcessStep } from "@/components/sections/ProcessSection";
import { CTASection } from "@/components/sections/CTASection";

const pillars = [
  {
    title: "Education Consultation",
    description:
      "Helping international students understand Serbian universities, programs, applications and student life.",
    href: "/education-consultation",
    icon: BookOpen,
  },
  {
    title: "IT & Software Consultancy",
    description:
      "Helping organizations plan, build and improve digital products, websites, software and technology operations.",
    href: "/it-consultancy",
    icon: Cpu,
  },
  {
    title: "Information Services",
    description:
      "Providing practical, researched information about living, studying, doing business and navigating everyday life in Serbia.",
    href: "/information-services",
    icon: Compass,
  },
];

const whyMentora = [
  {
    title: "Practical Guidance",
    description:
      "We focus on clear, actionable information instead of unnecessary complexity.",
  },
  {
    title: "Local Perspective",
    description:
      "Operating from Serbia allows us to understand the environment our international clients want to navigate.",
  },
  {
    title: "Technology Expertise",
    description:
      "Our technology consulting combines business thinking with practical digital execution.",
  },
  {
    title: "Transparent Support",
    description:
      "We clearly explain what we can and cannot do. Where regulated professional services are required, we recommend appropriate qualified specialists.",
  },
  {
    title: "International Mindset",
    description:
      "We understand the challenges faced by individuals and businesses operating across borders.",
  },
];

const processSteps: ProcessStep[] = [
  {
    step: "01",
    title: "Understand",
    description: "Tell us what you are trying to achieve.",
  },
  {
    step: "02",
    title: "Research",
    description: "We review the relevant information, options and requirements.",
  },
  {
    step: "03",
    title: "Plan",
    description: "We present clear recommendations or a structured action plan.",
  },
  {
    step: "04",
    title: "Support",
    description:
      "Where applicable, we assist with implementation or connect you with the appropriate service provider.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <Section className="relative overflow-hidden border-b border-border bg-gradient-to-b from-surface-subtle to-surface py-16 sm:py-24 lg:py-28">
        <Container>
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <p className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-secondary">
                Serbia-Based Consultancy
              </p>
              <h1 className="mt-5 text-3xl font-bold tracking-tight text-primary sm:text-5xl lg:text-[3.25rem] lg:leading-[1.12]">
                Your Trusted Partner for Education, Technology &amp; Information
                in Serbia
              </h1>
              <p className="mt-4 text-lg font-medium text-ink sm:text-xl">
                Practical guidance. Digital expertise. Reliable information.
              </p>
              <p className="mt-4 max-w-2xl text-base leading-relaxed text-ink-muted sm:text-lg">
                Mentora is a Serbia-based consultancy providing education
                consultation, IT and software advisory, and reliable information
                services for students, professionals, entrepreneurs and
                businesses.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-3.5">
                <Button href="/book-consultation" variant="primary" size="lg">
                  Book a Consultation
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Button>
                <Button href="#services" variant="outline" size="lg">
                  Explore Our Services
                </Button>
                <Button href="/education-consultation" variant="ghost" size="lg">
                  Study in Serbia
                </Button>
              </div>
            </div>

            {/* Abstract Consultancy Composition */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl border border-border bg-surface-dark p-8 text-white shadow-card-hover">
                <div className="space-y-6">
                  <div className="flex items-center justify-between border-b border-slate-700/80 pb-4">
                    <span className="text-xs font-semibold uppercase tracking-widest text-teal-300">
                      Core Pillars
                    </span>
                    <Globe2
                      className="h-5 w-5 text-slate-300"
                      aria-hidden="true"
                    />
                  </div>
                  <div className="space-y-4">
                    <div className="rounded-lg bg-slate-800/70 p-4">
                      <p className="text-sm font-semibold text-white">
                        Education Consultation
                      </p>
                      <p className="mt-1 text-xs text-slate-300">
                        University research, program comparison &amp; preparation
                      </p>
                    </div>
                    <div className="rounded-lg bg-slate-800/70 p-4">
                      <p className="text-sm font-semibold text-white">
                        IT &amp; Software Consultancy
                      </p>
                      <p className="mt-1 text-xs text-slate-300">
                        Digital products, web applications &amp; technical advisory
                      </p>
                    </div>
                    <div className="rounded-lg bg-slate-800/70 p-4">
                      <p className="text-sm font-semibold text-white">
                        Serbia Information Services
                      </p>
                      <p className="mt-1 text-xs text-slate-300">
                        Structured local research for individuals &amp; businesses
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 pt-2 text-xs text-slate-300">
                    <ShieldCheck
                      className="h-4 w-4 text-teal-400"
                      aria-hidden="true"
                    />
                    <span>Transparent, research-driven advisory</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Trust Section */}
      <Section id="services">
        <Container>
          <div className="max-w-2xl">
            <h2 className="text-2xl font-bold tracking-tight text-primary sm:text-3xl">
              One Partner. Three Areas of Expertise.
            </h2>
          </div>
          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
            {pillars.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <Card
                  key={pillar.title}
                  hoverable
                  className="flex flex-col justify-between"
                >
                  <div>
                    <div className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-surface-subtle text-secondary">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </div>
                    <h3 className="mt-5 text-xl font-semibold text-primary">
                      {pillar.title}
                    </h3>
                    <p className="mt-2.5 text-sm leading-relaxed text-ink-muted">
                      {pillar.description}
                    </p>
                  </div>
                  <div className="mt-6 pt-2">
                    <Button
                      href={pillar.href}
                      variant="ghost"
                      size="sm"
                      className="-ml-3"
                    >
                      Learn more
                      <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    </Button>
                  </div>
                </Card>
              );
            })}
          </div>
        </Container>
      </Section>

      {/* Why Mentora */}
      <Section tone="subtle">
        <Container>
          <div className="max-w-2xl">
            <h2 className="text-2xl font-bold tracking-tight text-primary sm:text-3xl">
              Why Choose Mentora?
            </h2>
          </div>
          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {whyMentora.map((item) => (
              <Card key={item.title}>
                <h3 className="text-lg font-semibold text-primary">
                  {item.title}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-ink-muted">
                  {item.description}
                </p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* Education Feature */}
      <FeatureSection
        eyebrow="Education Consultation"
        title="Planning to Study in Serbia?"
        description="Choosing the right university and preparing for an international education journey can be confusing. Mentora helps students understand their options and prepare systematically."
        items={[
          "University research",
          "Program comparison",
          "Application guidance",
          "Documentation preparation",
          "Cost planning",
          "Accommodation information",
          "Pre-arrival orientation",
          "Local information",
        ]}
        ctaLabel="Explore Education Consultation"
        ctaHref="/education-consultation"
      />

      {/* IT Feature */}
      <FeatureSection
        eyebrow="IT & Software Consultancy"
        title="Technology Should Solve Business Problems"
        description="Mentora works with entrepreneurs, startups and businesses to plan and execute practical digital solutions."
        items={[
          "Websites",
          "Web applications",
          "Software consulting",
          "Digital product strategy",
          "MVP planning",
          "Automation",
          "AI solutions",
          "Project management",
          "Product management",
          "Technical advisory",
        ]}
        ctaLabel="Explore IT Services"
        ctaHref="/it-consultancy"
        tone="subtle"
        reverse
      />

      {/* Information Services Feature */}
      <FeatureSection
        eyebrow="Information Services"
        title="Understand Serbia Before Making Important Decisions"
        description="From living expenses and accommodation to business information and everyday services, Mentora transforms scattered information into practical guidance."
        items={[
          "Living in Serbia & Cost of Living",
          "Housing & Accommodation Information",
          "Banking, Telecom & Transportation",
          "Serbian Business Environment",
          "General Market & Employment Information",
          "Local & Professional Service Directories",
        ]}
        ctaLabel="Explore Serbia Information Services"
        ctaHref="/information-services"
      />

      {/* Process */}
      <ProcessSection title="How We Work" steps={processSteps} />

      {/* Final CTA */}
      <CTASection
        title="Have Questions About Serbia, Education or Technology?"
        description="Talk to Mentora and get practical guidance based on your goals."
        buttonLabel="Schedule a Consultation"
        buttonHref="/book-consultation"
      />
    </>
  );
}
