# Implementation Status

Last updated: 2026-08-19 (paused development checkpoint)

## Current Page Architecture

The one-page portfolio is rendered in this order:

1. Hero
2. SetSail Featured Build
3. What I Build
4. Process Roadmap
5. Ongoing Support
6. Pricing
7. Tools I Use
8. Contact
9. Footer

The project uses the Next.js App Router, server components by default, and isolated client components only for
browser behavior such as GSAP motion, Hero anchor scrolling, the inquiry form, and the expandable SetSail dialog.

## Complete

- Next.js App Router migration.
- Reusable design-system foundation with shared tokens, containers, sections, buttons, typography, and surfaces.
- GSAP motion system with restrained reveal presets, animation cleanup, and reduced-motion handling.
- Hero redesign with the approved copy, wide contained Pine panel, real SetSail preview, Contact CTA, and responsive
  desktop/tablet/mobile composition.
- Accessible expandable SetSail project dialog using GSAP, native dialog semantics, focus containment and restoration,
  Escape/close-button behavior, body scroll locking, and reduced-motion behavior.
- Crawlable SetSail Featured Build section with approved project copy and three real sanitized screenshots.
- SetSail natural image ratios and responsive `next/image` sizing.
- What I Build editorial services presentation without false click affordances.
- Six-step Process Roadmap.
- Ongoing Support section and optional post-launch support positioning.
- Removal of the rejected diffuse Lime support-card glow.
- Pricing section with three equal Lime-wash cards and approved structural pricing copy.
- Tools I Use section with local logo assets, continuous marquee, and static reduced-motion fallback.
- Contact section and inquiry form UI.
- Client and server validation, shared field limits, project-type allowlist, malformed-payload handling, and honeypot.
- Footer.
- Approved Email, WhatsApp, and LinkedIn direct-contact destinations.
- Accessibility fixes for muted-text contrast, dark-surface focus visibility, dialog interaction, keyboard operation,
  semantic structure, and responsive behavior.
- Security-header baseline: `X-Content-Type-Options`, `Referrer-Policy`, and `X-Frame-Options`.
- Dependency lockfile cleanup for the indirect `nanoid` advisory.
- Development indexing gate remains disabled through `SITE_IS_LAUNCHED = false`.

## Current Contact Details

- Email: `ninopaul.cabiles@gmail.com`
- WhatsApp: `https://wa.me/qr/ON77VWUSLF3MF1`
- LinkedIn: `https://www.linkedin.com/in/nino-paul-cabiles`

These values are centralized in `src/data/contact.js` and shared by Contact and Footer.

## Intentionally Pending

- Real inquiry delivery provider.
- Rate limiting tied to the real submission endpoint.
- Production domain.
- `metadataBase`.
- Final production title and meta description.
- Open Graph image.
- Final JSON-LD/schema.
- Sitemap review and finalization.
- Strict CSP review.
- Lighthouse/performance final pass.
- Final SEO/GEO/AEO audit.
- Final launch QA.
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
