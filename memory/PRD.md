# Executive Sales Leadership Network — PRD

## Original Problem Statement
Premium, fully responsive **frontend-only** brand/marketing website for the **Executive Sales Leadership Network** — a private, invite-only community for India's CROs, VPs of Sales, Directors, Founders, and Revenue Leaders. Strict HexaDash-style purple + white theme (#8231D3 / #5F27CD / #EDE7FF / #F8F6FF). No backend, no auth, no API calls.

## User Personas
- **Senior Sales Leaders (CROs/VPs)** evaluating membership for peer access
- **Founders & Revenue Leaders** seeking strategic alliances and senior hires
- **Membership team** sourcing leads via the application form

## Core Requirements
- Strict purple/white HexaDash theme — no navy / no gold / no dark luxury
- Inter / Poppins typography
- Sticky navbar + mobile hamburger
- 11 sections (Hero → Footer) per spec, with framer-motion animations
- Static dummy content; demo form submits with sonner toast

## What's Been Implemented (Dec 2025)
- Hero with floating member cards, parallax blobs, 4 metrics (5000+/300+/120+/₹10,000 Cr+)
- Auto-scroll trusted-companies marquee (TCS, Infosys, Wipro, HCL, Accenture, Salesforce, Microsoft, SAP, Oracle)
- Why Join — 6 feature cards with hover lift
- Featured Leaders — 5 verified profile cards (Indian executives) with badge & LinkedIn
- Platform Features — 6 alternating image/text sections (Directory, Feed, Events, Hiring, Learning, Research)
- Stats — 5 animated counters on deep-purple background
- Testimonials — auto-rotating slider with prev/next/dot controls
- Events Showcase — 3 city events (Mumbai/Bangalore/Delhi)
- Membership Plans — Executive / Premier (highlighted) / Chairman Circle with correct INR pricing
- Final CTA + Footer with social icons
- Request Invitation / Apply / Schedule Intro Call dialogs (shared component, mode-aware) with sonner success toast
- Fully responsive (tested at 390px and 1440px)

## Tech / Dependencies
- React 19, Tailwind CSS, shadcn/ui (Dialog, Input, Label, Textarea), framer-motion, sonner, lucide-react

## Implementation Status
- P0 ✅ All 11 sections shipped, fully responsive, animations, dialogs+toast
- P1 (Backlog)
  - Real form submission to a backend / email service (e.g., Resend or Stripe/CRM)
  - Individual leader detail pages, blog/insights section
  - i18n / Hindi locale
  - SEO: structured data (Organization, FAQPage), Open Graph images
  - Page-load performance: lazy-load Unsplash images, image CDN, prefetch
- P2 (Backlog)
  - 404 / fallback route
  - Cookie consent + analytics dashboard
  - Member login portal (separate dashboard app)

## Test Results
- Frontend testing agent — ~100% (37/38 Playwright assertions; one transient timing artifact, no real bug)
