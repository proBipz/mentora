import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";

interface FeatureSectionProps {
  id?: string;
  eyebrow?: string;
  title: string;
  description: string;
  items?: string[];
  ctaLabel: string;
  ctaHref: string;
  tone?: "default" | "subtle";
  reverse?: boolean;
}

export function FeatureSection({
  id,
  eyebrow,
  title,
  description,
  items,
  ctaLabel,
  ctaHref,
  tone = "default",
  reverse = false,
}: FeatureSectionProps) {
  return (
    <Section id={id} tone={tone}>
      <Container>
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-12">
          <div className={`lg:col-span-6 ${reverse ? "lg:order-2" : ""}`}>
            {eyebrow && (
              <p className="text-xs font-semibold uppercase tracking-wider text-secondary">
                {eyebrow}
              </p>
            )}
            <h2 className="mt-2 text-2xl font-bold tracking-tight text-primary sm:text-3xl">
              {title}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-ink-muted sm:text-lg">
              {description}
            </p>
            <div className="mt-7">
              <Button href={ctaHref} variant="primary">
                {ctaLabel}
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Button>
            </div>
          </div>

          {items && items.length > 0 && (
            <div className={`lg:col-span-6 ${reverse ? "lg:order-1" : ""}`}>
              <Card className="bg-surface">
                <h3 className="text-sm font-semibold uppercase tracking-wider text-ink-muted">
                  Key Areas Covered
                </h3>
                <ul className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
                  {items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2.5 text-sm font-medium text-primary"
                    >
                      <CheckCircle2
                        className="mt-0.5 h-4 w-4 shrink-0 text-accent"
                        aria-hidden="true"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </div>
          )}
        </div>
      </Container>
    </Section>
  );
}
