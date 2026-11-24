import Link from "next/link";
import { siteConfig } from "@/lib/site";

interface LogoProps {
  showTagline?: boolean;
  inverted?: boolean;
  className?: string;
}

/**
 * Text-based brand logo for Mentora.
 * Structured as a standalone component so an SVG/PNG logo can replace it cleanly later.
 */
export function Logo({
  showTagline = false,
  inverted = false,
  className = "",
}: LogoProps) {
  return (
    <Link
      href="/"
      className={`inline-flex flex-col focus-visible:rounded-sm ${className}`}
      aria-label={`${siteConfig.displayName} — Home`}
    >
      <span
        className={`font-display text-xl font-bold tracking-wider sm:text-2xl ${
          inverted ? "text-white" : "text-primary"
        }`}
      >
        {siteConfig.name}
      </span>
      {showTagline && (
        <span
          className={`mt-0.5 text-[11px] font-medium tracking-wide ${
            inverted ? "text-slate-300" : "text-ink-muted"
          }`}
        >
          {siteConfig.tagline}
        </span>
      )}
    </Link>
  );
}
