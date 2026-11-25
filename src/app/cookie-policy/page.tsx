import { PageShell } from "@/components/page-shell";
import { pageMetadata } from "@/lib/site";

export const metadata = pageMetadata("Cookie Policy", "Mentora website cookie policy starter page.");

export default function CookiePolicyPage() {
  return <PageShell eyebrow="Legal" title="Cookie Policy" description="A tracking-ready starter cookie policy will be completed in Step 3 and reviewed before commercial launch." />;
}
