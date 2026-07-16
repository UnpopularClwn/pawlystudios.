# Implementation Plan

## Phase 1 — Foundation and Homepage (this session)

- Scaffold Vite + React + React Router from an empty project directory (no prior app existed).
- Global design tokens and base styles adapted from the HTML mockup's dark navy/amber system.
- Shared layout: `SiteHeader` (with mobile nav), `SiteFooter`, `PageHero`, `SectionHeading`,
  `CTASection`, `Seo` (per-page title/meta/OG via `document.head`, no extra package).
- Data-driven content: `src/data/services.js`, `src/data/projects.js`, `src/data/contact.js`,
  `src/data/credibility.js`.
- Full homepage per the approved section order.
- Working routes and complete first-pass content for `/services`, `/portfolio`, `/contact`.
- Contact form: accessible UI, client-side validation, submission logic isolated in
  `src/lib/submitContactForm.js` behind a clear "not configured" placeholder.
- Documentation set (this file, decision records, status, test plan) and a short root `CLAUDE.md`.

## Phase 2 — Real Contact Delivery and Missing Assets (next session)

- Wire `submitContactForm` to a real provider once Paul chooses one (Formspree, a Vercel serverless
  function + email service, or a GoHighLevel webhook).
- Add real Set Sail screenshots or a screen recording to the Set Sail case study.
- Add a real resume PDF and link it from the Contact page.
- Add real WhatsApp number and email address.
- Add real Trusted Partner details (name, photo, specialty copy, links).

## Phase 3 — Individual Case Study Pages and Growth

- Promote each portfolio project to its own route (e.g. `/portfolio/set-sail-client-portal`) using
  the existing `PROJECTS` data model — no redesign required, since the homepage and portfolio list
  already read from that data.
- Add a lightweight resources/articles section if Paul wants one.
- Add new case studies as cold-call clients turn into shippable work.
- Add the domain: move off the temporary `.vercel.app` URL once the site has its first paying
  client, per the content brief.

## Phase 4 — Performance and Asset Polish

- Convert PNG/JPEG assets to responsive, properly sized images (the current build ships the
  original photo/screenshot files as-is; there is no image pipeline yet).
- Add explicit `srcset`/`sizes` once final art direction and breakpoints are confirmed.
- Revisit Lighthouse mobile performance once real hosting (Vercel) is in place.
