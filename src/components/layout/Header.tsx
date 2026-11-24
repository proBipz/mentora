"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, X } from "lucide-react";
import { mainNav } from "@/lib/site";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";
import { Button } from "@/components/ui/Button";

export function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setServicesOpen(false);
  }, [pathname]);

  // Prevent background scroll when mobile menu is open & close on Escape
  useEffect(() => {
    if (!mobileMenuOpen) {
      document.body.style.overflow = "";
      return;
    }

    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [mobileMenuOpen]);

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-surface/95 backdrop-blur supports-[backdrop-filter]:bg-surface/85">
      <Container>
        <div className="flex h-16 items-center justify-between gap-4 sm:h-20">
          <Logo />

          {/* Desktop Navigation */}
          <nav
            aria-label="Primary Navigation"
            className="hidden items-center gap-1 lg:flex"
          >
            {mainNav.map((item) => {
              if (item.children) {
                const isChildActive = item.children.some(
                  (child) => pathname === child.href
                );

                return (
                  <div
                    key={item.label}
                    className="relative"
                    onMouseEnter={() => setServicesOpen(true)}
                    onMouseLeave={() => setServicesOpen(false)}
                  >
                    <button
                      type="button"
                      aria-expanded={servicesOpen}
                      aria-haspopup="true"
                      onClick={() => setServicesOpen((prev) => !prev)}
                      className={`inline-flex items-center gap-1 rounded-btn px-3.5 py-2 text-sm font-medium transition-colors hover:bg-surface-subtle hover:text-primary ${
                        isChildActive ? "text-secondary" : "text-ink-muted"
                      }`}
                    >
                      {item.label}
                      <ChevronDown
                        className={`h-4 w-4 transition-transform duration-150 ${
                          servicesOpen ? "rotate-180" : ""
                        }`}
                        aria-hidden="true"
                      />
                    </button>

                    {servicesOpen && (
                      <div className="absolute left-0 top-full w-64 pt-2">
                        <div className="rounded-card border border-border bg-surface p-2 shadow-card-hover">
                          {item.children.map((child) => (
                            <Link
                              key={child.href}
                              href={child.href}
                              className={`block rounded-btn px-3.5 py-2.5 text-sm font-medium transition-colors hover:bg-surface-subtle hover:text-primary ${
                                pathname === child.href
                                  ? "bg-surface-subtle text-secondary"
                                  : "text-ink-muted"
                              }`}
                            >
                              {child.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                );
              }

              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`rounded-btn px-3.5 py-2 text-sm font-medium transition-colors hover:bg-surface-subtle hover:text-primary ${
                    isActive ? "text-secondary" : "text-ink-muted"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden items-center gap-3 lg:flex">
            <Button href="/book-consultation" variant="primary" size="sm">
              Book a Consultation
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-btn p-2 text-primary hover:bg-surface-subtle lg:hidden"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Menu className="h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>
      </Container>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-navigation"
          className="fixed inset-x-0 top-16 bottom-0 z-50 overflow-y-auto border-t border-border bg-surface sm:top-20 lg:hidden"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation"
        >
          <Container className="py-6">
            <nav aria-label="Mobile Navigation" className="flex flex-col gap-2">
              {mainNav.map((item) => {
                if (item.children) {
                  return (
                    <div key={item.label} className="space-y-1 py-1">
                      <div className="px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-ink-muted">
                        {item.label}
                      </div>
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className={`block rounded-btn px-3 py-2.5 text-base font-medium transition-colors hover:bg-surface-subtle ${
                            pathname === child.href
                              ? "bg-surface-subtle text-secondary"
                              : "text-primary"
                          }`}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  );
                }

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`block rounded-btn px-3 py-2.5 text-base font-medium transition-colors hover:bg-surface-subtle ${
                      pathname === item.href
                        ? "bg-surface-subtle text-secondary"
                        : "text-primary"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}

              <div className="mt-4 border-t border-border pt-6">
                <Button
                  href="/book-consultation"
                  variant="primary"
                  size="lg"
                  className="w-full"
                >
                  Book a Consultation
                </Button>
              </div>
            </nav>
          </Container>
        </div>
      )}
    </header>
  );
}
