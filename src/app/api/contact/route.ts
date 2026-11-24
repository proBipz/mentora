import { NextRequest, NextResponse } from "next/server";
import { dispatchContactInquiry } from "@/lib/integrations";

const ALLOWED_SERVICES = new Set([
  "Education Consultation",
  "IT & Software Consultancy",
  "Information Services",
  "Business Inquiry",
  "Other",
]);

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function sanitizeText(value: unknown, maxLength: number): string {
  if (typeof value !== "string") return "";
  return value.trim().slice(0, maxLength);
}

export async function POST(request: NextRequest) {
  try {
    const body = (await request.json()) as Record<string, unknown>;

    // Honeypot spam protection
    const websiteField = sanitizeText(body.website, 100);
    if (websiteField.length > 0) {
      return NextResponse.json(
        { ok: true, message: "Thank you for your inquiry." },
        { status: 200 }
      );
    }

    const fullName = sanitizeText(body.fullName, 120);
    const email = sanitizeText(body.email, 160);
    const phone = sanitizeText(body.phone, 60);
    const country = sanitizeText(body.country, 80);
    const service = sanitizeText(body.service, 80);
    const message = sanitizeText(body.message, 3000);
    const agreedToPrivacy = body.agreedToPrivacy === true;

    const fieldErrors: Record<string, string> = {};

    if (fullName.length < 2) {
      fieldErrors.fullName = "Please enter your full name.";
    }
    if (!isValidEmail(email)) {
      fieldErrors.email = "Please enter a valid email address.";
    }
    if (!ALLOWED_SERVICES.has(service)) {
      fieldErrors.service = "Please select a service.";
    }
    if (message.length < 10) {
      fieldErrors.message =
        "Please provide a short message (at least 10 characters).";
    }
    if (!agreedToPrivacy) {
      fieldErrors.agreedToPrivacy =
        "Please confirm that you agree to the Privacy Policy.";
    }

    if (Object.keys(fieldErrors).length > 0) {
      return NextResponse.json(
        {
          ok: false,
          error: "Please check the highlighted fields and try again.",
          fieldErrors,
        },
        { status: 400 }
      );
    }

    const result = await dispatchContactInquiry({
      fullName,
      email,
      phone: phone || undefined,
      country: country || undefined,
      service,
      message,
      agreedToPrivacy,
      submittedAt: new Date().toISOString(),
    });

    if (!result.delivered) {
      return NextResponse.json(
        {
          ok: false,
          error: "Unable to send your inquiry right now. Please try again.",
        },
        { status: 502 }
      );
    }

    return NextResponse.json(
      {
        ok: true,
        message:
          "Your inquiry has been received. Mentora will review your message and respond shortly.",
      },
      { status: 200 }
    );
  } catch {
    return NextResponse.json(
      {
        ok: false,
        error: "Invalid request payload. Please try again.",
      },
      { status: 400 }
    );
  }
}
