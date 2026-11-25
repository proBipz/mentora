import { PageShell } from "@/components/page-shell";
import { pageMetadata } from "@/lib/site";

export const metadata = pageMetadata("Website Disclaimer", "Mentora independent consultancy and information services disclaimer.");

export default function DisclaimerPage() {
  return <PageShell eyebrow="Legal" title="Website Disclaimer" description="Mentora provides consultancy and general information, not legal advice or guaranteed admission, visa, residence or employment outcomes." />;
}
