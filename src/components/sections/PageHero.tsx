import { ReactNode } from "react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Breadcrumbs, BreadcrumbItem } from "@/components/ui/Breadcrumbs";
import { JsonLd } from "@/components/seo/JsonLd";
import { getBreadcrumbSchema } from "@/lib/seo";

interface PageHeroProps {
  eyebrow?: string;
  title: string;
  subtitle: string;
  breadcrumbs?: BreadcrumbItem[];
  actions?: ReactNode;
}

export function PageHero({
  eyebrow,
  title,
  subtitle,
  breadcrumbs,
  actions,
}: PageHeroProps) {
  return (
    <Section className="border-b border-border bg-gradient-to-b from-surface-subtle to-surface py-14 sm:py-20">
      {breadcrumbs && breadcrumbs.length > 0 && (
        <JsonLd
          data={getBreadcrumbSchema(
            breadcrumbs.map((b) => ({ name: b.label, path: b.href }))
          )}
        />
      )}
      <Container>
        {breadcrumbs && breadcrumbs.length > 0 && (
          <Breadcrumbs items={breadcrumbs} className="mb-6" />
        )}
        <div className="max-w-3xl">
          {eyebrow && (
            <p className="text-xs font-semibold uppercase tracking-wider text-secondary">
              {eyebrow}
            </p>
          )}
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-primary sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">
            {title}
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-ink-muted sm:text-xl">
            {subtitle}
          </p>
          {actions && <div className="mt-8 flex flex-wrap gap-3.5">{actions}</div>}
        </div>
      </Container>
    </Section>
  );
}
