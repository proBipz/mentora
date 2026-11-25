import Link from "next/link";
import { Suspense } from "react";
import { Brand } from "@/components/brand";
import { CopyrightYear } from "@/components/copyright-year";
import { legalNavigation, mainNavigation } from "@/lib/site";

export function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="container-wide grid gap-12 py-16 lg:grid-cols-[1.25fr_1fr_1fr]">
        <div className="max-w-md">
          <Brand inverse />
          <p className="mt-6 text-sm leading-7 text-white/68">
            Practical guidance, digital expertise and reliable information for people and businesses navigating opportunities in Serbia.
          </p>
        </div>
        <div>
          <h2 className="text-sm font-bold uppercase tracking-[0.16em] text-accent-light">Explore</h2>
          <ul className="mt-5 grid grid-cols-2 gap-x-5 gap-y-3 text-sm text-white/72">
            {mainNavigation.slice(1).map((item) => (
              <li key={item.href}><Link className="transition-colors hover:text-white" href={item.href}>{item.label}</Link></li>
            ))}
            <li><Link className="transition-colors hover:text-white" href="/contact">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h2 className="text-sm font-bold uppercase tracking-[0.16em] text-accent-light">Legal</h2>
          <ul className="mt-5 space-y-3 text-sm text-white/72">
            {legalNavigation.map((item) => (
              <li key={item.href}><Link className="transition-colors hover:text-white" href={item.href}>{item.label}</Link></li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-wide py-7 text-xs leading-6 text-white/55">
          <p>Mentora is an independent consultancy and information services business. Mentora is not a university, government agency, embassy, immigration authority or law firm. Admission, visa and residence decisions are made solely by the relevant institutions and authorities.</p>
          <p className="mt-3">© <Suspense fallback="2026"><CopyrightYear /></Suspense> Mentora. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
