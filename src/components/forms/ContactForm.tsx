"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import { AlertCircle, CheckCircle2, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";

const serviceOptions = [
  "Education Consultation",
  "IT & Software Consultancy",
  "Information Services",
  "Business Inquiry",
  "Other",
] as const;

interface FormState {
  fullName: string;
  email: string;
  phone: string;
  country: string;
  service: string;
  message: string;
  agreedToPrivacy: boolean;
  website: string; // honeypot
}

const initialFormState: FormState = {
  fullName: "",
  email: "",
  phone: "",
  country: "",
  service: "Education Consultation",
  message: "",
  agreedToPrivacy: false,
  website: "",
};

export function ContactForm() {
  const [form, setForm] = useState<FormState>(initialFormState);
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle"
  );
  const [serverMessage, setServerMessage] = useState("");

  function validateClient(): Record<string, string> {
    const errors: Record<string, string> = {};
    if (form.fullName.trim().length < 2) {
      errors.fullName = "Please enter your full name.";
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
      errors.email = "Please enter a valid email address.";
    }
    if (!form.service) {
      errors.service = "Please select a service.";
    }
    if (form.message.trim().length < 10) {
      errors.message =
        "Please share a brief message (at least 10 characters).";
    }
    if (!form.agreedToPrivacy) {
      errors.agreedToPrivacy =
        "You must agree to the Privacy Policy before sending.";
    }
    return errors;
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setServerMessage("");

    const clientErrors = validateClient();
    if (Object.keys(clientErrors).length > 0) {
      setFieldErrors(clientErrors);
      setStatus("error");
      setServerMessage("Please correct the highlighted fields.");
      return;
    }

    setFieldErrors({});
    setStatus("loading");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = (await response.json()) as {
        ok?: boolean;
        message?: string;
        error?: string;
        fieldErrors?: Record<string, string>;
      };

      if (!response.ok || !data.ok) {
        setFieldErrors(data.fieldErrors || {});
        setStatus("error");
        setServerMessage(
          data.error || "Unable to submit your inquiry. Please try again."
        );
        return;
      }

      setStatus("success");
      setServerMessage(
        data.message ||
          "Thank you. Your inquiry has been received and we will respond shortly."
      );
      setForm(initialFormState);
    } catch {
      setStatus("error");
      setServerMessage(
        "A network error occurred while sending your inquiry. Please try again."
      );
    }
  }

  return (
    <Card className="p-6 sm:p-8">
      <form onSubmit={handleSubmit} noValidate className="space-y-5">
        {/* Honeypot field hidden from real users */}
        <div className="hidden" aria-hidden="true">
          <label htmlFor="contact-website">Website</label>
          <input
            id="contact-website"
            name="website"
            type="text"
            tabIndex={-1}
            autoComplete="off"
            value={form.website}
            onChange={(e) => setForm({ ...form, website: e.target.value })}
          />
        </div>

        {status === "success" && (
          <div
            role="status"
            className="flex items-start gap-3 rounded-btn border border-teal-200 bg-teal-50 p-4 text-sm text-teal-900"
          >
            <CheckCircle2
              className="mt-0.5 h-5 w-5 shrink-0 text-teal-700"
              aria-hidden="true"
            />
            <p>{serverMessage}</p>
          </div>
        )}

        {status === "error" && serverMessage && (
          <div
            role="alert"
            className="flex items-start gap-3 rounded-btn border border-red-200 bg-red-50 p-4 text-sm text-red-900"
          >
            <AlertCircle
              className="mt-0.5 h-5 w-5 shrink-0 text-red-700"
              aria-hidden="true"
            />
            <p>{serverMessage}</p>
          </div>
        )}

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          <div>
            <label
              htmlFor="fullName"
              className="block text-sm font-medium text-primary"
            >
              Full Name <span className="text-red-600">*</span>
            </label>
            <input
              id="fullName"
              name="fullName"
              type="text"
              required
              autoComplete="name"
              value={form.fullName}
              onChange={(e) => setForm({ ...form, fullName: e.target.value })}
              aria-invalid={Boolean(fieldErrors.fullName)}
              aria-describedby={
                fieldErrors.fullName ? "fullName-error" : undefined
              }
              className="mt-1.5 block w-full rounded-btn border border-border-strong bg-surface px-3.5 py-2.5 text-sm text-ink placeholder:text-slate-400 focus:border-secondary focus:outline-none"
              placeholder="Your full name"
            />
            {fieldErrors.fullName && (
              <p id="fullName-error" className="mt-1.5 text-xs text-red-700">
                {fieldErrors.fullName}
              </p>
            )}
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-primary"
            >
              Email <span className="text-red-600">*</span>
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              autoComplete="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              aria-invalid={Boolean(fieldErrors.email)}
              aria-describedby={fieldErrors.email ? "email-error" : undefined}
              className="mt-1.5 block w-full rounded-btn border border-border-strong bg-surface px-3.5 py-2.5 text-sm text-ink placeholder:text-slate-400 focus:border-secondary focus:outline-none"
              placeholder="you@example.com"
            />
            {fieldErrors.email && (
              <p id="email-error" className="mt-1.5 text-xs text-red-700">
                {fieldErrors.email}
              </p>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          <div>
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-primary"
            >
              Phone / WhatsApp
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              autoComplete="tel"
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
              className="mt-1.5 block w-full rounded-btn border border-border-strong bg-surface px-3.5 py-2.5 text-sm text-ink placeholder:text-slate-400 focus:border-secondary focus:outline-none"
              placeholder="+381 / +880 ..."
            />
          </div>

          <div>
            <label
              htmlFor="country"
              className="block text-sm font-medium text-primary"
            >
              Country
            </label>
            <input
              id="country"
              name="country"
              type="text"
              autoComplete="country-name"
              value={form.country}
              onChange={(e) => setForm({ ...form, country: e.target.value })}
              className="mt-1.5 block w-full rounded-btn border border-border-strong bg-surface px-3.5 py-2.5 text-sm text-ink placeholder:text-slate-400 focus:border-secondary focus:outline-none"
              placeholder="e.g., Bangladesh, Serbia"
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="service"
            className="block text-sm font-medium text-primary"
          >
            Service Required <span className="text-red-600">*</span>
          </label>
          <select
            id="service"
            name="service"
            required
            value={form.service}
            onChange={(e) => setForm({ ...form, service: e.target.value })}
            aria-invalid={Boolean(fieldErrors.service)}
            className="mt-1.5 block w-full rounded-btn border border-border-strong bg-surface px-3.5 py-2.5 text-sm text-ink focus:border-secondary focus:outline-none"
          >
            {serviceOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          {fieldErrors.service && (
            <p className="mt-1.5 text-xs text-red-700">
              {fieldErrors.service}
            </p>
          )}
        </div>

        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium text-primary"
          >
            Message <span className="text-red-600">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            required
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            aria-invalid={Boolean(fieldErrors.message)}
            aria-describedby={fieldErrors.message ? "message-error" : undefined}
            className="mt-1.5 block w-full rounded-btn border border-border-strong bg-surface px-3.5 py-2.5 text-sm text-ink placeholder:text-slate-400 focus:border-secondary focus:outline-none"
            placeholder="Tell us about your goals, timeline, or questions..."
          />
          {fieldErrors.message && (
            <p id="message-error" className="mt-1.5 text-xs text-red-700">
              {fieldErrors.message}
            </p>
          )}
        </div>

        <div>
          <label className="flex items-start gap-2.5 text-sm text-ink-muted">
            <input
              id="agreedToPrivacy"
              name="agreedToPrivacy"
              type="checkbox"
              checked={form.agreedToPrivacy}
              onChange={(e) =>
                setForm({ ...form, agreedToPrivacy: e.target.checked })
              }
              aria-invalid={Boolean(fieldErrors.agreedToPrivacy)}
              className="mt-0.5 h-4 w-4 rounded border-border-strong text-secondary focus:ring-secondary"
            />
            <span>
              I agree to the{" "}
              <Link
                href="/privacy-policy"
                className="font-medium text-secondary underline hover:text-secondary-hover"
              >
                Privacy Policy
              </Link>
              . <span className="text-red-600">*</span>
            </span>
          </label>
          {fieldErrors.agreedToPrivacy && (
            <p className="mt-1.5 text-xs text-red-700">
              {fieldErrors.agreedToPrivacy}
            </p>
          )}
        </div>

        <Button
          type="submit"
          variant="primary"
          size="lg"
          disabled={status === "loading"}
          className="w-full sm:w-auto"
        >
          {status === "loading" ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
              Sending Inquiry...
            </>
          ) : (
            "Send Inquiry"
          )}
        </Button>
      </form>
    </Card>
  );
}
