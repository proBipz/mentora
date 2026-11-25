import { PageShell } from "@/components/page-shell";
import { pageMetadata } from "@/lib/site";

export const metadata = pageMetadata("Contact", "Contact Mentora about education consultation, technology consulting or Serbia information services.");

export default function ContactPage() {
  return <PageShell eyebrow="Contact Mentora" title="Let’s talk about your goals." description="Tell us what you are trying to achieve and which Mentora service can help you move forward." />;
}
