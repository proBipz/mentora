import { PageShell } from "@/components/page-shell";
import { pageMetadata } from "@/lib/site";

export const metadata = pageMetadata("About Mentora", "Learn how Mentora combines research, consulting and technology expertise to make complex decisions easier.");

export default function AboutPage() {
  return <PageShell eyebrow="About Mentora" title="Complex decisions, made clearer." description="Mentora combines research, consulting and technology expertise to provide practical support and structured information." />;
}
