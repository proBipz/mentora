# Deployment Guide — Mentora Website

This project is built with **Next.js (App Router)** and is ready for production deployment on either **Vercel** or **Render**.

## 1. Pre-Deployment Checklist

Before going live commercially, replace the following intentional placeholders in `.env` / environment variables and source files:

- **Business Registration & Tax ID (`src/lib/site.ts`)**:
  - Serbian Business Registration Number (`[SERBIAN_REGISTRATION_NUMBER_PLACEHOLDER]`)
  - PIB / Tax ID (`[PIB_TAX_ID_PLACEHOLDER]`)
  - Registered Serbian Address (`[SERBIA_REGISTERED_ADDRESS_PLACEHOLDER]`)
- **Contact Details (Environment Variables)**:
  - `NEXT_PUBLIC_CONTACT_EMAIL`
  - `NEXT_PUBLIC_CONTACT_PHONE`
  - `NEXT_PUBLIC_WHATSAPP_NUMBER`
  - `FOUNDER_EMAIL_PLACEHOLDER` and `LINKEDIN_URL_PLACEHOLDER` in `src/app/about/page.tsx`
- **Brand Assets**:
  - Optional replacement of text logo in `src/components/ui/Logo.tsx` with final SVG/PNG
  - Founder professional photo in `src/app/about/page.tsx`
- **Integrations (Environment Variables)**:
  - `EMAIL_PROVIDER`, `EMAIL_API_KEY`, `EMAIL_FROM`, `EMAIL_TO` (server-side contact form delivery)
  - `NEXT_PUBLIC_BOOKING_PROVIDER_URL` (e.g., Calendly / Google Calendar booking link)
  - `NEXT_PUBLIC_GA4_MEASUREMENT_ID`, `NEXT_PUBLIC_GSC_VERIFICATION`, `NEXT_PUBLIC_META_PIXEL_ID`
- **Legal Review**:
  - Have a qualified Serbian legal professional review `/privacy-policy`, `/terms-and-conditions`, `/disclaimer`, and `/cookie-policy`.

---

## 2. Local Verification & GitHub Push

```bash
# 1. Install dependencies
npm install

# 2. Run linter & typecheck
npm run lint
npm run typecheck

# 3. Run production build
npm run build

# 4. Push to GitHub (https://github.com/proBipz/mentora)
git branch -M main
git push -u origin main
```

---

## 3. Deploy to Vercel (Recommended)

1. Go to [vercel.com](https://vercel.com) and import the `proBipz/mentora` GitHub repository.
2. Framework Preset: **Next.js** (auto-detected).
3. Build Command: `npm run build`
4. Output Directory: `.next` (default)
5. Add all environment variables from `.env.example` in **Project Settings → Environment Variables**.
6. Click **Deploy**.
7. Connect your custom domain (e.g., `mentora.rs`) and set `NEXT_PUBLIC_SITE_URL=https://mentora.rs`.

---

## 4. Deploy to Render

1. Go to [render.com](https://render.com) and click **New + → Web Service**.
2. Connect the `proBipz/mentora` GitHub repository.
3. Configure:
   - **Runtime:** Node
   - **Build Command:** `npm install && npm run build`
   - **Start Command:** `npm run start`
4. Add all environment variables from `.env.example` under **Environment**.
5. Click **Create Web Service**.
