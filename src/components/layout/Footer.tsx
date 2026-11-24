import Link from "next/link";
import { footerNav, siteConfig } from "@/lib/site";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-800 bg-surface-dark text-slate-300">
      <Container className="py-12 sm:py-16">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand Column */}
          <div className="space-y-4">
            <Logo showTagline inverted />
            <p className="text-sm leading-relaxed text-slate-400">
              Serbia-based consultancy providing education consultation, IT and
              software advisory, and reliable information services.
            </p>
          </div>

          {/* Services Links */}
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wider text-white">
              Services
            </h2>
            <ul className="mt-4 space-y-2.5 text-sm">
              {footerNav.services.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-slate-300 transition-colors hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Explore Links */}
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wider text-white">
              Explore
            </h2>
            <ul className="mt-4 space-y-2.5 text-sm">
              {footerNav.explore.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-slate-300 transition-colors hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wider text-white">
              Legal
            </h2>
            <ul className="mt-4 space-y-2.5 text-sm">
              {footerNav.legal.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-slate-300 transition-colors hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Legal Disclaimer & Copyright */}
        <div className="mt-12 border-t border-slate-800 pt-8">
          <p className="text-xs leading-relaxed text-slate-400">
            {siteConfig.legalDisclaimer}
          </p>
          <div className="mt-4 flex flex-col items-start justify-between gap-2 text-xs text-slate-400 sm:flex-row sm:items-center">
            <p>
              &copy; {currentYear} {siteConfig.displayName}. All rights reserved.
            </p>
            <p>Serbia &bull; International Consultancy &amp; Information Services</p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
