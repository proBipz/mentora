import { PageShell } from "@/components/page-shell";
import { pageMetadata } from "@/lib/site";

export const metadata = pageMetadata("Resources & Insights", "Practical guides about studying and living in Serbia, technology and digital transformation.");

export default function ResourcesPage() {
  return <PageShell eyebrow="Resources & insights" title="Useful knowledge for your next decision." description="Explore practical guides about studying and living in Serbia, technology, business and digital transformation." />;
}
