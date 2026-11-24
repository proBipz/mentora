"use client";

import { useEffect, useState } from "react";
import Script from "next/script";
import { integrationConfig } from "@/lib/integrations";

/**
 * Loads GA4 or Meta Pixel only when:
 * 1. An ID is configured via environment variables, AND
 * 2. The user has explicitly accepted all cookies via CookieConsent.
 */
export function AnalyticsScripts() {
  const [consented, setConsented] = useState(false);

  useEffect(() => {
    try {
      const choice = window.localStorage.getItem("mentora_cookie_consent");
      if (choice === "all") {
        setConsented(true);
      }
    } catch {
      // Ignore storage access errors
    }
  }, []);

  if (!consented) return null;

  const { ga4MeasurementId } = integrationConfig.analytics;

  return (
    <>
      {ga4MeasurementId && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${ga4MeasurementId}`}
            strategy="afterInteractive"
          />
          <Script id="mentora-ga4" strategy="afterInteractive">
            {`window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', '${ga4MeasurementId}');`}
          </Script>
        </>
      )}
    </>
  );
}
