import { PageShell } from "@/components/page-shell";
import { pageMetadata } from "@/lib/site";

export const metadata = pageMetadata("Education Consultation", "Research Serbian universities and prepare for studying in Serbia with clear, transparent guidance.");

export default function EducationConsultationPage() {
  return <PageShell eyebrow="Education consultation" title="Study in Serbia with better information." description="Research universities, understand programs and prepare systematically for your education journey in Serbia." />;
}
