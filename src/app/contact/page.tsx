import type { Metadata } from "next";
import { Mail, MapPin, MessageCircle, Phone, Building2 } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { PageHero } from "@/components/sections/PageHero";
import { ContactForm } from "@/components/forms/ContactForm";
import { siteConfig } from "@/lib/site";
import { integrationConfig } from "@/lib/integrations";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Mentora for education consultation, IT & software consultancy, or Serbia information services.",
};

export default function ContactPage() {
  const whatsappHref = integrationConfig.whatsapp.isConfigured
    ? `https://wa.me/${integrationConfig.whatsapp.number.replace(/[^0-9]/g, "")}`
    : undefined;

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's Talk"
        subtitle="Share your questions or project requirements with Mentora. We respond to inquiries across education consultation, IT & software advisory, and Serbia information services."
        breadcrumbs={[{ label: "Contact" }]}
      />

      <Section>
        <Container>
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
            {/* Contact Form */}
            <div className="lg:col-span-7">
              <ContactForm />
            </div>

            {/* Contact Details & Business Placeholders */}
            <div className="space-y-6 lg:col-span-5">
              <Card className="space-y-5 p-6">
                <h2 className="text-lg font-bold text-primary">
                  Direct Contact Details
                </h2>

                <div className="space-y-4 text-sm">
                  <div className="flex items-start gap-3">
                    <Mail
                      className="mt-0.5 h-5 w-5 shrink-0 text-secondary"
                      aria-hidden="true"
                    />
                    <div>
                      <p className="font-medium text-primary">Email</p>
                      <p className="text-ink-muted">
                        {siteConfig.contact.email}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Phone
                      className="mt-0.5 h-5 w-5 shrink-0 text-secondary"
                      aria-hidden="true"
                    />
                    <div>
                      <p className="font-medium text-primary">Phone</p>
                      <p className="text-ink-muted">
                        {siteConfig.contact.phone}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <MessageCircle
                      className="mt-0.5 h-5 w-5 shrink-0 text-accent"
                      aria-hidden="true"
                    />
                    <div>
                      <p className="font-medium text-primary">WhatsApp</p>
                      {whatsappHref ? (
                        <a
                          href={whatsappHref}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-medium text-secondary underline hover:text-secondary-hover"
                        >
                          Message on WhatsApp
                        </a>
                      ) : (
                        <p className="text-ink-muted">
                          {siteConfig.contact.whatsapp} (WhatsApp CTA ready once
                          number is configured)
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="space-y-4 p-6">
                <h2 className="text-lg font-bold text-primary">
                  Business Information (Serbia)
                </h2>

                <div className="space-y-3 text-sm">
                  <div className="flex items-start gap-3">
                    <MapPin
                      className="mt-0.5 h-5 w-5 shrink-0 text-secondary"
                      aria-hidden="true"
                    />
                    <div>
                      <p className="font-medium text-primary">
                        Registered Address
                      </p>
                      <p className="text-ink-muted">
                        {siteConfig.contact.address}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Building2
                      className="mt-0.5 h-5 w-5 shrink-0 text-secondary"
                      aria-hidden="true"
                    />
                    <div>
                      <p className="font-medium text-primary">
                        Serbia Registration Details
                      </p>
                      <p className="text-ink-muted">
                        Business Type: Sole Proprietorship (Preduzetnik)
                      </p>
                      <p className="text-ink-muted">
                        Registration No.: {siteConfig.contact.registrationNumber}
                      </p>
                      <p className="text-ink-muted">
                        PIB / Tax ID: {siteConfig.contact.pib}
                      </p>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
