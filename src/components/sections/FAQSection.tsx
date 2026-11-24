"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { JsonLd } from "@/components/seo/JsonLd";
import { getFaqSchema } from "@/lib/seo";

export interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  title?: string;
  subtitle?: string;
  items: FAQItem[];
  tone?: "default" | "subtle";
  emitSchema?: boolean;
}

export function FAQSection({
  title = "Frequently Asked Questions",
  subtitle,
  items,
  tone = "subtle",
  emitSchema = true,
}: FAQSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <Section tone={tone}>
      {emitSchema && items.length > 0 && <JsonLd data={getFaqSchema(items)} />}
      <Container>
        <div className="max-w-3xl">
          <h2 className="text-2xl font-bold tracking-tight text-primary sm:text-3xl">
            {title}
          </h2>
          {subtitle && (
            <p className="mt-3 text-base text-ink-muted">{subtitle}</p>
          )}

          <div className="mt-8 divide-y divide-border rounded-card border border-border bg-surface">
            {items.map((item, idx) => {
              const isOpen = openIndex === idx;
              const panelId = `faq-panel-${idx}`;
              const buttonId = `faq-button-${idx}`;

              return (
                <div key={item.question}>
                  <h3>
                    <button
                      id={buttonId}
                      type="button"
                      aria-expanded={isOpen}
                      aria-controls={panelId}
                      onClick={() => setOpenIndex(isOpen ? null : idx)}
                      className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left text-base font-semibold text-primary transition-colors hover:bg-surface-subtle"
                    >
                      <span>{item.question}</span>
                      <ChevronDown
                        className={`h-5 w-5 shrink-0 text-ink-muted transition-transform duration-150 ${
                          isOpen ? "rotate-180 text-secondary" : ""
                        }`}
                        aria-hidden="true"
                      />
                    </button>
                  </h3>
                  {isOpen && (
                    <div
                      id={panelId}
                      role="region"
                      aria-labelledby={buttonId}
                      className="px-6 pb-5 text-sm leading-relaxed text-ink-muted sm:text-base"
                    >
                      {item.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </Section>
  );
}
