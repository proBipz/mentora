# Mentora Website

Official web platform for **Mentora** — a Serbia-based consultancy and information services business (*Preduzetnik*) operating across three core pillars:

1. **Education Consultation**
2. **IT & Software Consultancy**
3. **Other Information Services**

## Technology Stack

- **Framework:** Next.js (App Router)
- **Language:** TypeScript (`strict: true`)
- **Styling:** Tailwind CSS with CSS custom properties (`src/app/globals.css`)
- **Icons:** `lucide-react`
- **Linting:** ESLint (`eslint-config-next`)

## Installation

```bash
npm install
```

## Development Commands

```bash
# Run development server
npm run dev

# Run ESLint
npm run lint

# Run TypeScript type check
npm run typecheck
```

## Build Commands

```bash
# Create production build
npm run build

# Start production server
npm run start
```

## Environment Variables

Copy `.env.example` to `.env.local` and configure values as needed. Never commit `.env` or `.env.local`.

| Variable | Purpose |
| --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Canonical base URL of the deployed site |
| `NEXT_PUBLIC_SITE_NAME` | Site brand name (`Mentora`) |
| `NEXT_PUBLIC_CONTACT_EMAIL` | Public contact email address |
| `NEXT_PUBLIC_CONTACT_PHONE` | Public contact phone number |
| `NEXT_PUBLIC_WHATSAPP_NUMBER` | WhatsApp contact number |
| `EMAIL_PROVIDER` / `EMAIL_API_KEY` | Server-only email delivery configuration |
| `NEXT_PUBLIC_BOOKING_PROVIDER_URL` | External scheduling URL (e.g., Calendly) |
| `NEXT_PUBLIC_GA4_MEASUREMENT_ID` | Google Analytics 4 ID (inactive until set) |
| `NEXT_PUBLIC_GSC_VERIFICATION` | Google Search Console verification token |
| `NEXT_PUBLIC_META_PIXEL_ID` | Meta Pixel ID (inactive until set) |

## Project Structure

```text
src/
├── app/
│   ├── about/
│   ├── book-consultation/
│   ├── contact/
│   ├── cookie-policy/
│   ├── disclaimer/
│   ├── education-consultation/
│   ├── information-services/
│   ├── it-consultancy/
│   ├── privacy-policy/
│   ├── resources/
│   ├── serbia-guide/
│   ├── terms-and-conditions/
│   ├── globals.css
│   ├── layout.tsx
│   ├── not-found.tsx
│   └── page.tsx
├── components/
│   ├── layout/
│   │   ├── Footer.tsx
│   │   └── Header.tsx
│   └── ui/
│       ├── Button.tsx
│       ├── Card.tsx
│       ├── Container.tsx
│       ├── Logo.tsx
│       └── Section.tsx
└── lib/
    └── site.ts
```

## Deployment Instructions

Deployment configuration (`DEPLOYMENT.md`) for Render and Vercel will be finalized in Step 5.
