import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { PageHero } from "@/components/sections/PageHero";
import { CTASection } from "@/components/sections/CTASection";
import { JsonLd } from "@/components/seo/JsonLd";
import { buildPageMetadata, getArticleSchema } from "@/lib/seo";
import { resourceArticles } from "@/lib/resources";

interface ArticlePageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return resourceArticles.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({
  params,
}: ArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = resourceArticles.find((item) => item.slug === slug);

  if (!article) {
    return { title: "Article Not Found" };
  }

  return buildPageMetadata({
    title: article.title,
    description: article.summary,
    path: `/resources/${article.slug}`,
    type: "article",
  });
}

export default async function ResourceArticlePage({
  params,
}: ArticlePageProps) {
  const { slug } = await params;
  const article = resourceArticles.find((item) => item.slug === slug);

  if (!article) {
    notFound();
  }

  return (
    <>
      <JsonLd
        data={getArticleSchema({
          title: article.title,
          description: article.summary,
          path: `/resources/${article.slug}`,
        })}
      />
      <PageHero
        eyebrow={article.category}
        title={article.title}
        subtitle={article.summary}
        breadcrumbs={[
          { label: "Resources", href: "/resources" },
          { label: article.title },
        ]}
      />

      <Section>
        <Container>
          <article className="mx-auto max-w-3xl space-y-8">
            <Card className="border-amber-200 bg-amber-50/40 p-4 text-sm text-ink-muted">
              <strong className="text-primary">Article Template Notice:</strong>{" "}
              This page is a structured article template ready for verified
              editorial content. No statistics or unverified claims are
              published here.
            </Card>

            {article.sections.map((section) => (
              <section key={section.heading} className="space-y-3">
                <h2 className="text-xl font-bold text-primary sm:text-2xl">
                  {section.heading}
                </h2>
                <p className="text-base leading-relaxed text-ink-muted">
                  {section.body}
                </p>
              </section>
            ))}

            <div className="border-t border-border pt-6">
              <Button href="/resources" variant="outline">
                <ArrowLeft className="h-4 w-4" aria-hidden="true" />
                Back to Resources
              </Button>
            </div>
          </article>
        </Container>
      </Section>

      <CTASection
        title="Need Personalized Guidance?"
        description="Speak with Mentora directly about your education, Serbia orientation, or technology goals."
        buttonLabel="Book a Consultation"
        buttonHref="/book-consultation"
      />
    </>
  );
}
