import { PageShell } from "@/components/page-shell";
import { pageMetadata } from "@/lib/site";

export const metadata = pageMetadata("Terms & Conditions", "Mentora website terms and conditions starter page.");

export default function TermsPage() {
  return <PageShell eyebrow="Legal" title="Terms & Conditions" description="A professionally formatted starter terms template will be completed in Step 3 and reviewed before commercial launch." />;
}
