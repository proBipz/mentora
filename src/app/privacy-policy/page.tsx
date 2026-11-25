import { PageShell } from "@/components/page-shell";
import { pageMetadata } from "@/lib/site";

export const metadata = pageMetadata("Privacy Policy", "Mentora website privacy policy starter page.");

export default function PrivacyPolicyPage() {
  return <PageShell eyebrow="Legal" title="Privacy Policy" description="A professionally formatted starter privacy policy will be completed in Step 3 and reviewed before commercial launch." />;
}
