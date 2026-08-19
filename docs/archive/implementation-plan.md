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

## Phase 2 — Content Brief Replacement (Session 2.2, complete)

- Replaced all public-facing copy with `docs/Content Brief v2` throughout Home, Services,
  Portfolio, Contact.
- Restructured the homepage to the brief's exact section order and voice.
- Built `docs/content-claims.md` and `docs/content-voice.md` as living verification/voice records.

## Phase 2.3 — Resume Page and Visual Identity (this session, complete)

- Added `/resume` with a native PDF viewer, verified-claims summary, and honest fallback state.
- Built a five-theme, scroll-aware visual identity system and a small reusable GSAP motion system.
- Added CSS-only media render frames for real project screenshots.
- Found the real resume document in project assets and resolved the email/phone Needs Your Input
  items from Sessions 1.1–2.2. See `docs/visual-identity.md` and `docs/content-claims.md`.

## Phase 2.4 — Remaining Contact and Asset Gaps (next session)

- Wire `submitContactForm` to a real provider once Paul chooses one (Formspree, a Vercel serverless
  function + email service, or a GoHighLevel webhook).
- Add real Set Sail screenshots or a screen recording to the Set Sail case study.
- Export a clean PDF from the existing `.docx` resume and wire `resumeUrl` in
  `src/data/contact.js` — every resume link on the site activates automatically once this is set.
- Confirm the WhatsApp number is correct and enabled.
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
