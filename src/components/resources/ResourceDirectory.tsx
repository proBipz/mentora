"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, FileText } from "lucide-react";
import { Card } from "@/components/ui/Card";
import {
  ResourceArticle,
  ResourceCategory,
  resourceCategories,
} from "@/lib/resources";

interface ResourceDirectoryProps {
  articles: ResourceArticle[];
}

export function ResourceDirectory({ articles }: ResourceDirectoryProps) {
  const [activeCategory, setActiveCategory] = useState<ResourceCategory>("All");

  const filteredArticles =
    activeCategory === "All"
      ? articles
      : articles.filter((article) => article.category === activeCategory);

  return (
    <div className="space-y-8">
      {/* Category Filter Buttons */}
      <div
        className="flex flex-wrap gap-2"
        role="tablist"
        aria-label="Resource categories"
      >
        {resourceCategories.map((category) => {
          const isSelected = activeCategory === category;
          return (
            <button
              key={category}
              type="button"
              role="tab"
              aria-selected={isSelected}
              onClick={() => setActiveCategory(category)}
              className={`rounded-full border px-4 py-1.5 text-sm font-medium transition-colors ${
                isSelected
                  ? "border-primary bg-primary text-white"
                  : "border-border bg-surface text-ink-muted hover:border-border-strong hover:text-primary"
              }`}
            >
              {category}
            </button>
          );
        })}
      </div>

      {/* Article Cards */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredArticles.map((article) => (
          <Card
            key={article.slug}
            hoverable
            className="flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between gap-2">
                <span className="text-xs font-semibold uppercase tracking-wider text-secondary">
                  {article.category}
                </span>
                <span className="rounded-full border border-border bg-surface-subtle px-2.5 py-0.5 text-[11px] font-medium text-ink-muted">
                  {article.status}
                </span>
              </div>
              <h2 className="mt-3 text-lg font-semibold text-primary">
                {article.title}
              </h2>
              <p className="mt-2.5 text-sm leading-relaxed text-ink-muted">
                {article.summary}
              </p>
            </div>

            <div className="mt-6 flex items-center justify-between border-t border-border pt-4">
              <span className="inline-flex items-center gap-1.5 text-xs text-ink-muted">
                <FileText className="h-3.5 w-3.5" aria-hidden="true" />
                {article.readingTime}
              </span>
              <Link
                href={`/resources/${article.slug}`}
                className="inline-flex items-center gap-1 text-sm font-medium text-secondary hover:text-secondary-hover"
              >
                Read template
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
