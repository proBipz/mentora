import { PageShell } from "@/components/page-shell";
import { pageMetadata } from "@/lib/site";

export const metadata = pageMetadata("Serbia Guide", "A practical knowledge hub for living, studying and doing business in Serbia.");

export default function SerbiaGuidePage() {
  return <PageShell eyebrow="Serbia guide" title="Understand Serbia before making important decisions." description="A growing knowledge hub for students, professionals, entrepreneurs and businesses exploring Serbia." />;
}
