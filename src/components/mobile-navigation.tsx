"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { mainNavigation } from "@/lib/site";

export function MobileNavigation() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, []);

  return (
    <div className="lg:hidden">
      <button
        type="button"
        className="grid size-11 place-items-center rounded-xl border border-line bg-white text-ink shadow-sm hover:bg-surface focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
        aria-label={open ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={open}
        aria-controls="mobile-navigation"
        onClick={() => setOpen((current) => !current)}
      >
        {open ? <X size={21} aria-hidden="true" /> : <Menu size={21} aria-hidden="true" />}
      </button>

      {open ? (
        <div className="fixed inset-0 top-[73px] z-40 bg-primary/25 backdrop-blur-sm" onClick={() => setOpen(false)}>
          <nav
            id="mobile-navigation"
            className="ml-auto flex h-full w-[min(88%,24rem)] flex-col overflow-y-auto border-l border-white/10 bg-white p-6 shadow-2xl"
            aria-label="Mobile navigation"
            onClick={(event) => event.stopPropagation()}
          >
            <p className="eyebrow mb-5">Navigate Mentora</p>
            <div className="flex flex-col gap-1">
              {mainNavigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="rounded-xl px-4 py-3 text-base font-semibold text-ink transition-colors hover:bg-surface hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                >
                  {item.label}
                </Link>
              ))}
            </div>
            <div className="mt-auto border-t border-line pt-6">
              <Link href="/contact" className="button button-secondary w-full" onClick={() => setOpen(false)}>
                Contact Mentora
              </Link>
              <Link href="/book-consultation" className="button button-primary mt-3 w-full" onClick={() => setOpen(false)}>
                Book a Consultation
              </Link>
            </div>
          </nav>
        </div>
      ) : null}
    </div>
  );
}
