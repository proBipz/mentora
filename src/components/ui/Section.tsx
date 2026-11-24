import { ReactNode } from "react";

type SectionTone = "default" | "subtle" | "dark";

interface SectionProps {
  children: ReactNode;
  tone?: SectionTone;
  id?: string;
  className?: string;
}

const toneClasses: Record<SectionTone, string> = {
  default: "bg-surface text-ink",
  subtle: "bg-surface-subtle text-ink",
  dark: "bg-surface-dark text-ink-light",
};

export function Section({
  children,
  tone = "default",
  id,
  className = "",
}: SectionProps) {
  return (
    <section
      id={id}
      className={`py-16 sm:py-20 lg:py-24 ${toneClasses[tone]} ${className}`}
    >
      {children}
    </section>
  );
}
