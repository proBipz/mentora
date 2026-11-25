import { PageShell } from "@/components/page-shell";
import { pageMetadata } from "@/lib/site";

export const metadata = pageMetadata("Information Services", "Reliable, researched information for individuals and businesses interested in Serbia.");

export default function InformationServicesPage() {
  return <PageShell eyebrow="Serbia information services" title="Reliable information for life and business in Serbia." description="Turn scattered information about living, studying, relocation and business into practical guidance." />;
}
