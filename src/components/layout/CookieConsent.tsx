"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

const CONSENT_KEY = "mentora_cookie_consent";

export function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      const saved = window.localStorage.getItem(CONSENT_KEY);
      if (!saved) {
        setVisible(true);
      }
    } catch {
      // Ignore storage access errors
    }
  }, []);

  function saveChoice(choice: "essential" | "all") {
    try {
      window.localStorage.setItem(CONSENT_KEY, choice);
    } catch {
      // Ignore storage access errors
    }
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <aside
      aria-label="Cookie consent"
      className="fixed inset-x-0 bottom-0 z-50 border-t border-border bg-surface p-4 shadow-card-hover sm:p-5"
    >
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
        <p className="text-xs leading-relaxed text-ink-muted sm:text-sm">
          Mentora uses essential cookies for site functionality. Optional
          analytics cookies remain inactive unless configured and accepted. See
          our{" "}
          <Link
            href="/cookie-policy"
            className="font-medium text-secondary underline hover:text-secondary-hover"
          >
            Cookie Policy
          </Link>
          .
        </p>
        <div className="flex shrink-0 items-center gap-2.5">
          <Button
            type="button"
            variant="outline"
            size="sm"
            onClick={() => saveChoice("essential")}
          >
            Essential Only
          </Button>
          <Button
            type="button"
            variant="primary"
            size="sm"
            onClick={() => saveChoice("all")}
          >
            Accept All
          </Button>
        </div>
      </div>
    </aside>
  );
}
