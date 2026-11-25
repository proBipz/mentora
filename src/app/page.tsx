import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  CheckCircle2,
  Compass,
  Cpu,
  Globe2,
  Lightbulb,
  Search,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

const services = [
  {
    icon: BookOpen,
    label: "Education Consultation",
    description: "Clear guidance for international students researching universities, programs, applications and student life in Serbia.",
    href: "/education-consultation",
    accent: "bg-blue-50 text-secondary",
  },
  {
    icon: Cpu,
    label: "IT & Software Consultancy",
    description: "Practical technology consulting that helps startups and businesses plan, build and improve useful digital solutions.",
    href: "/it-software-consultancy",
    accent: "bg-amber-50 text-amber-700",
  },
  {
    icon: Compass,
    label: "Information Services",
    description: "Researched, structured information about living, studying, doing business and navigating everyday life in Serbia.",
    href: "/information-services",
    accent: "bg-emerald-50 text-emerald-700",
  },
];

const principles = [
  { icon: Lightbulb, title: "Practical guidance", text: "Clear, actionable information without unnecessary complexity." },
  { icon: Globe2, title: "Local perspective", text: "Serbia-based insight shaped for international clients and cross-border decisions." },
  { icon: ShieldCheck, title: "Transparent support", text: "A clear explanation of what we can do and when qualified specialists are required." },
];

const process = [
  { icon: Sparkles, step: "Understand", text: "Tell us what you are trying to achieve." },
  { icon: Search, step: "Research", text: "We review the relevant information and options." },
  { icon: Lightbulb, step: "Plan", text: "Receive clear recommendations or a structured plan." },
  { icon: CheckCircle2, step: "Support", text: "Move forward with practical support where applicable." },
];

export default function Home() {
  return (
    <>
      <section className="relative isolate overflow-hidden bg-white">
        <div className="hero-grid absolute inset-0 -z-10" aria-hidden="true" />
        <div className="decorative-orb decorative-orb-one" aria-hidden="true" />
        <div className="decorative-orb decorative-orb-two" aria-hidden="true" />
        <div className="container-wide grid min-h-[calc(100svh-72px)] items-center gap-12 py-20 lg:grid-cols-[1.08fr_0.92fr] lg:py-24">
          <div>
            <p className="eyebrow">Serbia-based international consultancy</p>
            <h1 className="display-title mt-6 max-w-4xl">
              Better decisions through <span className="text-secondary">clarity</span> and expertise.
            </h1>
            <p className="lead mt-7 max-w-2xl">
              Mentora provides education consultation, IT and software advisory, and reliable information services for students, professionals, entrepreneurs and businesses.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link href="/book-consultation" className="button button-primary">
                Book a Consultation <ArrowRight size={17} aria-hidden="true" />
              </Link>
              <Link href="#services" className="button button-secondary">Explore Our Services</Link>
            </div>
            <div className="mt-10 flex flex-wrap gap-x-7 gap-y-3 text-sm font-semibold text-muted">
              {["Serbia-based insight", "International mindset", "Transparent guidance"].map((item) => (
                <span key={item} className="inline-flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-secondary" aria-hidden="true" /> {item}
                </span>
              ))}
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-xl lg:ml-auto">
            <div className="absolute -inset-5 rounded-[2rem] bg-gradient-to-br from-secondary/10 via-transparent to-accent/15 blur-2xl" aria-hidden="true" />
            <div className="relative overflow-hidden rounded-[1.75rem] border border-white/80 bg-primary p-5 shadow-[0_30px_80px_rgba(7,27,51,0.25)] sm:p-7">
              <div className="flex items-center justify-between border-b border-white/10 pb-5">
                <span className="text-xs font-bold uppercase tracking-[0.18em] text-accent-light">Mentora framework</span>
                <span className="rounded-full border border-white/15 px-3 py-1 text-xs font-semibold text-white/65">Serbia</span>
              </div>
              <div className="grid gap-3 pt-5">
                {services.map((service, index) => {
                  const Icon = service.icon;
                  return (
                    <div key={service.label} className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.065] p-4 transition-colors hover:bg-white/[0.1]">
                      <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-white/10 text-accent-light">
                        <Icon size={20} aria-hidden="true" />
                      </span>
                      <div>
                        <p className="text-[0.68rem] font-bold uppercase tracking-[0.15em] text-white/45">0{index + 1}</p>
                        <p className="mt-1 font-bold text-white">{service.label}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="mt-5 grid grid-cols-3 gap-3 border-t border-white/10 pt-5 text-center">
                <div><p className="text-xl font-bold text-white">Clear</p><p className="mt-1 text-xs text-white/45">information</p></div>
                <div><p className="text-xl font-bold text-white">Useful</p><p className="mt-1 text-xs text-white/45">technology</p></div>
                <div><p className="text-xl font-bold text-white">Honest</p><p className="mt-1 text-xs text-white/45">support</p></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="section bg-surface">
        <div className="container-wide">
          <div className="max-w-3xl">
            <p className="eyebrow">One partner. Three areas of expertise.</p>
            <h2 className="section-title mt-4">Guidance built around the decision in front of you.</h2>
            <p className="lead mt-5">Each Mentora service turns complexity into a practical next step.</p>
          </div>
          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <article key={service.label} className="service-card flex min-h-[22rem] flex-col">
                  <span className={`grid size-12 place-items-center rounded-xl ${service.accent}`}><Icon size={22} aria-hidden="true" /></span>
                  <h3 className="mt-8 text-xl font-bold text-primary">{service.label}</h3>
                  <p className="mt-4 leading-7 text-muted">{service.description}</p>
                  <Link href={service.href} className="mt-auto inline-flex items-center gap-2 pt-7 text-sm font-bold text-secondary hover:text-secondary-dark">
                    Explore this service <ArrowRight size={16} aria-hidden="true" />
                  </Link>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-wide grid gap-12 lg:grid-cols-[0.78fr_1.22fr] lg:items-start">
          <div className="lg:sticky lg:top-28">
            <p className="eyebrow">Why Mentora</p>
            <h2 className="section-title mt-4">Professional advice that stays human.</h2>
            <p className="lead mt-5">International decisions deserve clarity, care and an honest view of what comes next.</p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            {principles.map((item, index) => {
              const Icon = item.icon;
              return (
                <article key={item.title} className={`rounded-2xl border border-line p-7 ${index === 2 ? "sm:col-span-2 bg-primary text-white" : "bg-white shadow-card"}`}>
                  <Icon size={24} className={index === 2 ? "text-accent-light" : "text-secondary"} aria-hidden="true" />
                  <h3 className={`mt-8 text-xl font-bold ${index === 2 ? "text-white" : "text-primary"}`}>{item.title}</h3>
                  <p className={`mt-3 leading-7 ${index === 2 ? "max-w-2xl text-white/68" : "text-muted"}`}>{item.text}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section bg-surface-blue">
        <div className="container-wide">
          <div className="text-center">
            <p className="eyebrow">How we work</p>
            <h2 className="section-title mx-auto mt-4 max-w-3xl">A clear path from question to action.</h2>
          </div>
          <ol className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {process.map((item, index) => {
              const Icon = item.icon;
              return (
                <li key={item.step} className="relative rounded-2xl border border-blue-100 bg-white p-6 shadow-card">
                  <div className="flex items-center justify-between">
                    <span className="grid size-11 place-items-center rounded-xl bg-primary text-white"><Icon size={19} aria-hidden="true" /></span>
                    <span className="text-sm font-extrabold text-secondary">0{index + 1}</span>
                  </div>
                  <h3 className="mt-7 text-lg font-bold text-primary">{item.step}</h3>
                  <p className="mt-3 text-sm leading-6 text-muted">{item.text}</p>
                </li>
              );
            })}
          </ol>
        </div>
      </section>

      <section className="section-compact bg-white">
        <div className="container-wide overflow-hidden rounded-[1.75rem] bg-primary px-6 py-12 text-center shadow-soft sm:px-12 sm:py-16">
          <p className="text-sm font-bold uppercase tracking-[0.16em] text-accent-light">Your next step</p>
          <h2 className="mx-auto mt-5 max-w-3xl font-display text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl">Have questions about Serbia, education or technology?</h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-white/68 sm:text-lg">Talk to Mentora and get practical guidance based on your goals.</p>
          <Link href="/book-consultation" className="button mt-8 bg-white text-primary hover:bg-surface">Schedule a Consultation</Link>
        </div>
      </section>
    </>
  );
}
