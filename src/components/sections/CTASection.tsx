import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";

interface CTASectionProps {
  title: string;
  description?: string;
  buttonLabel: string;
  buttonHref: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}

export function CTASection({
  title,
  description,
  buttonLabel,
  buttonHref,
  secondaryLabel,
  secondaryHref,
}: CTASectionProps) {
  return (
    <Section tone="dark">
      <Container>
        <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
          <div className="max-w-2xl">
            <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
              {title}
            </h2>
            {description && (
              <p className="mt-3 text-base leading-relaxed text-slate-300">
                {description}
              </p>
            )}
          </div>
          <div className="flex flex-wrap items-center gap-3.5">
            <Button href={buttonHref} variant="light" size="lg">
              {buttonLabel}
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Button>
            {secondaryLabel && secondaryHref && (
              <Button
                href={secondaryHref}
                variant="outline"
                size="lg"
                className="border-slate-600 bg-transparent text-white hover:bg-slate-800"
              >
                {secondaryLabel}
              </Button>
            )}
          </div>
        </div>
      </Container>
    </Section>
  );
}
