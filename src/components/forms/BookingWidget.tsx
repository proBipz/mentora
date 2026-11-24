"use client";

import { FormEvent, useState } from "react";
import { Calendar, CheckCircle2, Clock, ExternalLink } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { integrationConfig } from "@/lib/integrations";

const consultationTypes = [
  {
    id: "education",
    title: "Education Consultation",
    description:
      "University research, program comparison, application preparation, and Serbia study orientation.",
  },
  {
    id: "technology",
    title: "Technology Consultation",
    description:
      "IT & software advisory, website/app planning, MVP scope, automation, and product/project management.",
  },
  {
    id: "information",
    title: "Serbia Information Consultation",
    description:
      "Living in Serbia, cost planning, housing, banking, telecom, and everyday orientation.",
  },
  {
    id: "business",
    title: "Business Consultation",
    description:
      "Serbian business environment research, digital operations, and market exploration.",
  },
] as const;

const durations = ["30 Minutes", "60 Minutes"] as const;

export function BookingWidget() {
  const [selectedType, setSelectedType] = useState<string>(
    consultationTypes[0].title
  );
  const [selectedDuration, setSelectedDuration] = useState<string>(
    durations[0]
  );
  const [preferredDate, setPreferredDate] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [notes, setNotes] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");

    if (name.trim().length < 2 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Please enter your name and a valid email address.");
      return;
    }

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName: name,
          email,
          service:
            selectedType === "Technology Consultation"
              ? "IT & Software Consultancy"
              : selectedType === "Serbia Information Consultation"
              ? "Information Services"
              : selectedType === "Business Consultation"
              ? "Business Inquiry"
              : "Education Consultation",
          message: `Consultation Booking Request\nType: ${selectedType}\nDuration: ${selectedDuration}\nPreferred Date/Window: ${
            preferredDate || "Flexible"
          }\nNotes: ${notes || "None provided"}`,
          agreedToPrivacy: true,
        }),
      });

      if (!response.ok) {
        setError("Could not submit booking request. Please try again.");
        return;
      }
      setSubmitted(true);
    } catch {
      setError("Network error while submitting request. Please try again.");
    }
  }

  return (
    <div className="space-y-10">
      {/* Step 1: Select Consultation Type */}
      <div>
        <h2 className="text-xl font-bold text-primary">
          1. Choose Consultation Type
        </h2>
        <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2">
          {consultationTypes.map((type) => {
            const isSelected = selectedType === type.title;
            return (
              <button
                key={type.id}
                type="button"
                onClick={() => {
                  setSelectedType(type.title);
                  setSubmitted(false);
                }}
                aria-pressed={isSelected}
                className={`rounded-card border p-5 text-left transition-all ${
                  isSelected
                    ? "border-secondary bg-surface-subtle ring-2 ring-secondary/20"
                    : "border-border bg-surface hover:border-border-strong"
                }`}
              >
                <div className="flex items-center justify-between gap-2">
                  <span className="text-base font-semibold text-primary">
                    {type.title}
                  </span>
                  {isSelected && (
                    <CheckCircle2
                      className="h-5 w-5 shrink-0 text-secondary"
                      aria-hidden="true"
                    />
                  )}
                </div>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                  {type.description}
                </p>
              </button>
            );
          })}
        </div>
      </div>

      {/* Step 2: Select Duration */}
      <div>
        <h2 className="text-xl font-bold text-primary">2. Select Duration</h2>
        <div className="mt-4 flex flex-wrap gap-3">
          {durations.map((duration) => {
            const isSelected = selectedDuration === duration;
            return (
              <button
                key={duration}
                type="button"
                onClick={() => {
                  setSelectedDuration(duration);
                  setSubmitted(false);
                }}
                aria-pressed={isSelected}
                className={`inline-flex items-center gap-2 rounded-btn border px-5 py-3 text-sm font-medium transition-colors ${
                  isSelected
                    ? "border-secondary bg-secondary text-white"
                    : "border-border-strong bg-surface text-primary hover:bg-surface-subtle"
                }`}
              >
                <Clock className="h-4 w-4" aria-hidden="true" />
                {duration}
              </button>
            );
          })}
        </div>
      </div>

      {/* Step 3: Schedule or Request Slot */}
      <Card className="p-6 sm:p-8">
        <div className="flex flex-col justify-between gap-4 border-b border-border pb-5 sm:flex-row sm:items-center">
          <div>
            <h2 className="text-xl font-bold text-primary">
              3. Request Your Session
            </h2>
            <p className="mt-1 text-sm text-ink-muted">
              Selected: <strong className="text-primary">{selectedType}</strong>{" "}
              ({selectedDuration})
            </p>
          </div>
          {integrationConfig.booking.isConfigured && (
            <a
              href={integrationConfig.booking.providerUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-btn bg-secondary px-4 py-2.5 text-sm font-medium text-white hover:bg-secondary-hover"
            >
              <Calendar className="h-4 w-4" aria-hidden="true" />
              Open Live Calendar
              <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
            </a>
          )}
        </div>

        {submitted ? (
          <div
            role="status"
            className="mt-6 flex items-start gap-3 rounded-btn border border-teal-200 bg-teal-50 p-4 text-sm text-teal-900"
          >
            <CheckCircle2
              className="mt-0.5 h-5 w-5 shrink-0 text-teal-700"
              aria-hidden="true"
            />
            <div>
              <p className="font-semibold">Consultation Request Received</p>
              <p className="mt-1">
                We&apos;ve logged your request for a{" "}
                <strong>{selectedDuration}</strong>{" "}
                <strong>{selectedType}</strong> and will confirm available
                times by email.
              </p>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-6 space-y-5">
            {error && (
              <p role="alert" className="text-sm font-medium text-red-700">
                {error}
              </p>
            )}
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="booking-name"
                  className="block text-sm font-medium text-primary"
                >
                  Full Name <span className="text-red-600">*</span>
                </label>
                <input
                  id="booking-name"
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="mt-1.5 block w-full rounded-btn border border-border-strong bg-surface px-3.5 py-2.5 text-sm text-ink focus:border-secondary focus:outline-none"
                  placeholder="Your full name"
                />
              </div>
              <div>
                <label
                  htmlFor="booking-email"
                  className="block text-sm font-medium text-primary"
                >
                  Email <span className="text-red-600">*</span>
                </label>
                <input
                  id="booking-email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="mt-1.5 block w-full rounded-btn border border-border-strong bg-surface px-3.5 py-2.5 text-sm text-ink focus:border-secondary focus:outline-none"
                  placeholder="you@example.com"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="booking-date"
                className="block text-sm font-medium text-primary"
              >
                Preferred Date &amp; Timezone
              </label>
              <input
                id="booking-date"
                type="text"
                value={preferredDate}
                onChange={(e) => setPreferredDate(e.target.value)}
                className="mt-1.5 block w-full rounded-btn border border-border-strong bg-surface px-3.5 py-2.5 text-sm text-ink focus:border-secondary focus:outline-none"
                placeholder="e.g., Next Tuesday afternoon (CET / BST)"
              />
            </div>

            <div>
              <label
                htmlFor="booking-notes"
                className="block text-sm font-medium text-primary"
              >
                Topics You Would Like to Cover
              </label>
              <textarea
                id="booking-notes"
                rows={3}
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                className="mt-1.5 block w-full rounded-btn border border-border-strong bg-surface px-3.5 py-2.5 text-sm text-ink focus:border-secondary focus:outline-none"
                placeholder="Briefly describe your goals or questions..."
              />
            </div>

            <Button type="submit" variant="primary" size="lg">
              Request Consultation Slot
            </Button>
          </form>
        )}
      </Card>
    </div>
  );
}
