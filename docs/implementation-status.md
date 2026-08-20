# Implementation Status

Last updated: 2026-08-21 (approved final-QA pause checkpoint)

## Current Page Architecture

The one-page portfolio is rendered in this order:

1. Hero
2. Featured Build / SetSail Folder
3. Services
4. Process Roadmap
5. Ongoing Support
6. Pricing
7. Website Maintenance
8. Tools I Use
9. About / ProfileCard
10. Contact
11. Footer

The project uses the Next.js App Router, server components by default, and isolated client components only for
browser behavior such as GSAP motion, anchor scrolling, the SetSail Folder/dialog, ProfileCard tilt, Footer navigation,
and the inquiry form.

## Complete

- Next.js App Router migration.
- Reusable design-system foundation with shared tokens, containers, sections, buttons, typography, and surfaces.
- GSAP motion system with restrained reveal presets, animation cleanup, and reduced-motion handling.
- Hero redesign with approved copy, `pawlystudios.` logo plate, wide contained Pine panel, Contact CTA, restrained
  motif, and no unnecessary right-side preview.
- Crawlable SetSail Featured Build with approved project copy and an accessible Folder interaction containing three
  real sanitized screenshots.
- Reusable SetSail project dialog using GSAP, native dialog semantics, focus containment and restoration,
  Escape/close-button behavior, body scroll locking, responsive layouts, and reduced-motion behavior.
- SetSail natural image ratios and responsive `next/image` sizing.
- What I Build editorial services presentation without false click affordances.
- Six-step Process Roadmap.
- Ongoing Support section and optional post-launch support positioning.
- Removal of the rejected diffuse Lime support-card glow.
- Data-driven Starter, Pro, and Max Pricing cards with clearly marked development-placeholder prices.
- Separate Website Maintenance offer with ownership messaging and a Contact CTA.
- Tools I Use section with local logo assets, continuous marquee, and static reduced-motion fallback.
- Contact section and inquiry form UI.
- Client and server validation, shared field limits, project-type allowlist, malformed-payload handling, and honeypot.
- About/ProfileCard section with server-rendered approved copy, Paul's approved portrait, visible transparent-logo plate,
  restrained desktop tilt, mobile/reduced-motion fallback, and Contact anchor.
- Footer with the `pawlystudios.` identity and accessible icon-only Email, WhatsApp, and LinkedIn links.
- Contact form as the only primary Contact-section interaction; alternate destinations remain in Footer.
- Accessibility fixes for muted-text contrast, dark-surface focus visibility, dialog interaction, keyboard operation,
  semantic structure, and responsive behavior.
- Security-header baseline: `X-Content-Type-Options`, `Referrer-Policy`, and `X-Frame-Options`.
- Dependency lockfile cleanup for the indirect `nanoid` advisory.
- Development indexing gate remains disabled through `SITE_IS_LAUNCHED = false`.
- Final visual, responsive, accessibility, motion, performance, content, and implementation QA passed at 1920, 1440,
  1024, 768, and 375 pixels with no console, hydration, or horizontal-overflow errors.

## Current Contact Details

- Email: `ninopaul.cabiles@gmail.com`
- WhatsApp: `https://wa.me/qr/ON77VWUSLF3MF1`
- LinkedIn: `https://www.linkedin.com/in/nino-paul-cabiles`

These values are centralized in `src/data/contact.js` and rendered as accessible icon-only links in Footer. Contact
remains form-only.

## Intentionally Pending

- Real inquiry delivery provider.
- Provider credentials.
- Rate limiting tied to the real submission endpoint.
- Production domain.
- `metadataBase`.
- Final production SEO title.
- Final meta description.
- Open Graph image.
- Final JSON-LD/schema.
- Sitemap finalization.
- CSP review.
- Lighthouse/performance launch pass.
- Final SEO/GEO/AEO audit.
- Production deployment QA.
- Switching `SITE_IS_LAUNCHED` to `true`.
- Enabling indexing.

## Important Project Rules

- Do not fabricate contact details, business claims, metrics, testimonials, client identities, or production domains.
- Do not fake successful inquiry submission. Legitimate submissions must continue to return `NOT_CONFIGURED` until a
  real delivery provider is connected.
- Keep server components as the default.
- Keep GSAP as the main motion system.
- Do not add Motion, Tailwind, shadcn/ui, or Motion Primitives as dependencies without a new approved requirement.
- SetSail core proof and project copy stay crawlable on the homepage; the expandable dialog is secondary.
- The client owns the finished website.
- Ongoing support is optional.
- Do not enable indexing without final launch approval.

## Not Launch Ready

The visible portfolio experience and its validation/security foundation are complete, but production delivery and
launch configuration are intentionally unfinished. The inquiry form still returns `NOT_CONFIGURED`; the production
domain and launch metadata are unset; and indexing must remain disabled until final launch approval and QA.
