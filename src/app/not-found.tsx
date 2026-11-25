import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <section className="grid min-h-[65svh] place-items-center bg-surface px-4 py-20 text-center">
      <div>
        <p className="eyebrow">404 · Page not found</p>
        <h1 className="section-title mt-5">This page is not on the map.</h1>
        <p className="lead mx-auto mt-5 max-w-xl">The link may be outdated or the page may have moved. Return to Mentora’s homepage to continue.</p>
        <Link href="/" className="button button-primary mt-8"><ArrowLeft size={17} aria-hidden="true" /> Back to homepage</Link>
      </div>
    </section>
  );
}
