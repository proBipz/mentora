# Mentora Serbia

Mentora is a Serbia-based consulting and information services website focused on three service pillars: education consultation, IT and software consultancy, and reliable Serbia-related information.

This repository is being delivered in five controlled development steps. Step 1 establishes the architecture, design system, shared layout, responsive navigation, homepage foundation and all required routes.

## Technology stack

- Next.js 16 App Router
- React 19
- TypeScript
- Tailwind CSS 4
- Lucide React icons
- ESLint with the Next.js configuration

## Local development

Requirements:

- Node.js 20.9 or newer
- npm 10 or newer

Install dependencies and start the development server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Commands

```bash
npm run dev      # Start the local development server
npm run lint     # Run ESLint
npm run build    # Create a production build
npm run start    # Serve the production build
```

## Environment variables

Copy `.env.example` to `.env.local` when configuring a deployment.

| Variable | Purpose |
| --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Canonical public website URL used by metadata |

No API keys or credentials should be committed to the repository.

## Project structure

```text
src/
├── app/                 # App Router pages, root layout and global styles
├── components/          # Shared brand, header, footer and page components
└── lib/                 # Site configuration and navigation data
```

## Routes created in Step 1

- `/`
- `/education-consultation`
- `/it-software-consultancy`
- `/information-services`
- `/about`
- `/serbia-guide`
- `/resources`
- `/contact`
- `/book-consultation`
- `/privacy-policy`
- `/terms-and-conditions`
- `/disclaimer`
- `/cookie-policy`
- Custom 404 page

## Design system

Brand colors, shadows, typography and spacing tokens are defined as CSS variables in `src/app/globals.css`. The initial text-based brand is isolated in `src/components/brand.tsx` so it can be replaced with a final SVG or image logo later.

## Deployment

The application can be deployed to Vercel or Render after the production environment variable is configured. Detailed platform instructions will be added in Step 5 in `DEPLOYMENT.md`.

## Development roadmap

1. Foundation, brand system and architecture
2. Core website and complete content
3. Conversion, resources and business features
4. SEO, performance, accessibility and security
5. Final QA, production preparation and deployment
