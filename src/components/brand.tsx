import Link from "next/link";

export function Brand({ inverse = false }: { inverse?: boolean }) {
  return (
    <Link
      href="/"
      className="group inline-flex items-center gap-3 rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-4"
      aria-label="Mentora home"
    >
      <span
        className={`grid size-10 place-items-center rounded-xl text-sm font-bold shadow-sm transition-transform group-hover:-rotate-3 ${inverse ? "bg-white text-primary" : "bg-primary text-white"}`}
        aria-hidden="true"
      >
        M
      </span>
      <span className="flex flex-col">
        <span className={`text-lg font-bold leading-none tracking-[0.16em] ${inverse ? "text-white" : "text-ink"}`}>
          MENTORA
        </span>
        <span className={`mt-1 text-[0.64rem] font-medium tracking-[0.12em] ${inverse ? "text-white/65" : "text-muted"}`}>
          EDUCATION · TECHNOLOGY · INFORMATION
        </span>
      </span>
    </Link>
  );
}
