import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";

export interface ServiceGridItem {
  title: string;
  description?: string;
  items?: string[];
}

interface ServiceGridProps {
  title: string;
  subtitle?: string;
  items: ServiceGridItem[];
  columns?: 2 | 3;
  tone?: "default" | "subtle";
}

export function ServiceGrid({
  title,
  subtitle,
  items,
  columns = 3,
  tone = "default",
}: ServiceGridProps) {
  const gridCols =
    columns === 2
      ? "grid-cols-1 md:grid-cols-2"
      : "grid-cols-1 md:grid-cols-2 lg:grid-cols-3";

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
        <div className={`mt-10 grid gap-6 ${gridCols}`}>
          {items.map((item) => (
            <Card key={item.title} hoverable>
              <h3 className="text-lg font-semibold text-primary">
                {item.title}
              </h3>
              {item.description && (
                <p className="mt-2.5 text-sm leading-relaxed text-ink-muted">
                  {item.description}
                </p>
              )}
              {item.items && item.items.length > 0 && (
                <ul className="mt-4 space-y-2 border-t border-border pt-4 text-sm text-ink-muted">
                  {item.items.map((subItem) => (
                    <li key={subItem} className="flex items-center gap-2">
                      <span
                        className="h-1.5 w-1.5 shrink-0 rounded-full bg-secondary"
                        aria-hidden="true"
                      />
                      <span>{subItem}</span>
                    </li>
                  ))}
                </ul>
              )}
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
}
