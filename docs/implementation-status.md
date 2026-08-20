# Implementation Status

Last updated: 2026-08-21 (pre-launch Vercel deployment checkpoint)

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
- Approved Metadata API title: `Custom Website Development for Businesses | pawlystudios.`
- Approved meta description: `pawlystudios. builds responsive business websites, custom web experiences, and
  practical ongoing support, from planning through launch and handoff.`
- Server-side Person, WebSite, and Service schema builder, gated until both production URL and launch approval exist.
- App Router robots metadata preserving the existing pre-launch crawl behavior without a sitemap URL.
- Security-header baseline: `X-Content-Type-Options`, `Referrer-Policy`, `X-Frame-Options`, and a conservative
  `Permissions-Policy`; the Next.js signature is disabled.
- Pixel-exact lossless runtime logo derivative and favicon generated from the unchanged approved transparent SVG.
- Dependency lockfile cleanup for the indirect `nanoid` advisory.
- Development indexing gate remains disabled through `SITE_IS_LAUNCHED = false`.
- Final visual, responsive, accessibility, motion, performance, content, and implementation QA passed at 1920, 1440,
  1024, 768, and 375 pixels with no console, hydration, or horizontal-overflow errors.
- GitHub repository `https://github.com/UnpopularClwn/pawlystudios..git` is synchronized on `main` and connected to
  the Vercel project `pawlystudios`; `main` is the production branch and preview deployments are enabled for non-main
  branches and pull requests.
- The first pre-launch production deployment is Ready at `https://pawlystudios.vercel.app`. The Next.js preset,
  install/build, hosted assets and fonts, SetSail Folder/dialog, ProfileCard, inquiry validation, Footer destinations,
  security headers, reduced motion, and desktop/tablet/mobile layouts were verified in production.
- Production Lighthouse baseline: Performance 96, Accessibility 100, Best Practices 96, SEO 66 (expected because
  `noindex` is active), LCP 2.7 seconds, CLS 0, and TBT 90 milliseconds.

## Current Contact Details

- Email: `ninopaul.cabiles@gmail.com`
- WhatsApp: `https://wa.me/qr/ON77VWUSLF3MF1`
- LinkedIn: `https://www.linkedin.com/in/nino-paul-cabiles`

These values are centralized in `src/data/contact.js` and rendered as accessible icon-only links in Footer. Contact
remains form-only.

## Intentionally Pending

### Launch and domain

- Custom domain; the PM does not currently have one.
- Decision on whether `https://pawlystudios.vercel.app` should temporarily back absolute production metadata.
- `metadataBase`, absolute canonical, sitemap, absolute JSON-LD IDs, final schema publication, and Open Graph image.
- SoftwareApplication schema decision for SetSail.

### Form delivery

- Inquiry provider and server-only credentials.
- Sender, recipient, and reply-to configuration.
- Provider delivery call and rate limiting.
- Retention/spam policy.
- Success, failure, rejection, and throttling tests.

### Commercial content

- Approved Starter, Pro, Max, and Website Maintenance prices or approved non-price labels.

### Final security and QA

- HSTS verification after final HTTPS/custom-domain behavior is known. Vercel currently supplies HSTS on its own
  domain; the application has not added a separate HSTS policy.
- CSP review, preferably report-only first, while preserving the current verified headers.
- Lighthouse on the final launch configuration plus SEO, GEO/AEO, accessibility, metadata, robots, sitemap, schema,
  social-preview, production-form, and desktop/tablet/mobile regression QA.

### Final launch

- Explicit launch approval.
- Switching `SITE_IS_LAUNCHED` to `true`.
- Removing `noindex, nofollow`, enabling indexing, publishing the sitemap and final schema, and verifying production
  search directives.

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

The visible portfolio and pre-launch Vercel deployment are complete, but launch configuration is intentionally
unfinished. The inquiry form still returns `NOT_CONFIGURED`; no custom domain exists; domain-dependent metadata,
sitemap, and schema publication remain unset; and indexing must stay disabled until final launch approval and QA.
