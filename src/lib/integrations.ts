/**
 * Integration configuration & adapter interfaces.
 * All external providers remain inactive until configured via environment variables.
 */

export const integrationConfig = {
  booking: {
    providerUrl: process.env.NEXT_PUBLIC_BOOKING_PROVIDER_URL || "",
    isConfigured: Boolean(process.env.NEXT_PUBLIC_BOOKING_PROVIDER_URL),
  },
  analytics: {
    ga4MeasurementId: process.env.NEXT_PUBLIC_GA4_MEASUREMENT_ID || "",
    gscVerification: process.env.NEXT_PUBLIC_GSC_VERIFICATION || "",
    metaPixelId: process.env.NEXT_PUBLIC_META_PIXEL_ID || "",
  },
  whatsapp: {
    number: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "",
    isConfigured:
      Boolean(process.env.NEXT_PUBLIC_WHATSAPP_NUMBER) &&
      !process.env.NEXT_PUBLIC_WHATSAPP_NUMBER?.includes("PLACEHOLDER"),
  },
} as const;

export interface ContactSubmissionPayload {
  fullName: string;
  email: string;
  phone?: string;
  country?: string;
  service: string;
  message: string;
  agreedToPrivacy: boolean;
  submittedAt: string;
}

/**
 * Placeholder CRM / Email dispatch adapter.
 * Connect Resend, Postmark, Nodemailer, or a CRM webhook here using server-side env vars.
 */
export async function dispatchContactInquiry(
  payload: ContactSubmissionPayload
): Promise<{ delivered: boolean; mode: "configured" | "placeholder" }> {
  const provider = process.env.EMAIL_PROVIDER;
  const apiKey = process.env.EMAIL_API_KEY;

  if (!provider || !apiKey) {
    // Development / unconfigured mode: log minimal non-PII metadata only
    console.info("[Mentora Contact Adapter] Inquiry validated in placeholder mode.", {
      service: payload.service,
      submittedAt: payload.submittedAt,
    });
    return { delivered: true, mode: "placeholder" };
  }

  // Future provider integration hook (e.g., Resend / SendGrid / CRM API)
  return { delivered: true, mode: "configured" };
}
