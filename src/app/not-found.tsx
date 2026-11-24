import { ArrowLeft } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <Section className="py-24 sm:py-32">
      <Container>
        <div className="mx-auto max-w-xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-secondary">
            404 — Page Not Found
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-primary sm:text-4xl">
            We couldn&apos;t find that page.
          </h1>
          <p className="mt-4 text-base text-ink-muted">
            The page you are looking for may have been moved or does not exist.
            Return to the homepage or explore our services.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Button href="/" variant="primary">
              <ArrowLeft className="h-4 w-4" aria-hidden="true" />
              Back to Home
            </Button>
            <Button href="/contact" variant="outline">
              Contact Mentora
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  );
}
