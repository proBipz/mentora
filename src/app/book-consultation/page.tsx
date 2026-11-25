import { PageShell } from "@/components/page-shell";
import { pageMetadata } from "@/lib/site";

export const metadata = pageMetadata("Book a Consultation", "Book an education, technology, Serbia information or business consultation with Mentora.");

export default function BookConsultationPage() {
  return <PageShell eyebrow="Book a consultation" title="Choose the guidance you need." description="Schedule focused time for education, technology, Serbia information or business consultation." />;
}
