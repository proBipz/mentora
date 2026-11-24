import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
}

interface ProcessSectionProps {
  title: string;
  subtitle?: string;
  steps: ProcessStep[];
  tone?: "default" | "subtle";
}

export function ProcessSection({
  title,
  subtitle,
  steps,
  tone = "subtle",
}: ProcessSectionProps) {
  return (
    <Section tone={tone}>
      <Container>
        <div className="max-w-2xl">
          <h2 className="text-2xl font-bold tracking-tight text-primary sm:text-3xl">
            {title}
          </h2>
          {subtitle && (
            <p className="mt-3 text-base text-ink-muted">{subtitle}</p>
          )}
        </div>
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((item) => (
            <Card key={item.step}>
              <span className="text-xs font-bold uppercase tracking-widest text-secondary">
                Step {item.step}
              </span>
              <h3 className="mt-2 text-lg font-semibold text-primary">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                {item.description}
              </p>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
}
