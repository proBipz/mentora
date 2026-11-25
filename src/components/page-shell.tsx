import Link from "next/link";
import { ArrowLeft } from "lucide-react";

type PageShellProps = { eyebrow: string; title: string; description: string };

export function PageShell({ eyebrow, title, description }: PageShellProps) {
  return (
    <section className="relative overflow-hidden bg-surface py-20 sm:py-28">
      <div className="decorative-orb decorative-orb-one" aria-hidden="true" />
      <div className="container-narrow relative">
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="display-title mt-5 max-w-3xl">{title}</h1>
        <p className="lead mt-6 max-w-2xl">{description}</p>
        <div className="mt-10 rounded-2xl border border-line bg-white p-6 shadow-soft sm:p-8">
          <p className="text-sm font-bold uppercase tracking-[0.14em] text-secondary">Step 1 foundation</p>
          <p className="mt-3 leading-7 text-muted">This route and its responsive page foundation are ready. Full page content and service-specific components will be completed in Step 2.</p>
          <Link href="/" className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-primary hover:text-secondary">
            <ArrowLeft size={16} aria-hidden="true" /> Return to the homepage
          </Link>
        </div>
      </div>
    </section>
  );
}
