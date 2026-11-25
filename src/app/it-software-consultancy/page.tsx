import { PageShell } from "@/components/page-shell";
import { pageMetadata } from "@/lib/site";

export const metadata = pageMetadata("IT & Software Consultancy", "Practical technology consulting, product planning and digital solutions for growing businesses.");

export default function ItConsultancyPage() {
  return <PageShell eyebrow="IT & software consultancy" title="Practical technology solutions for growing businesses." description="From product planning to implementation, Mentora helps organizations use technology to solve real business problems." />;
}
