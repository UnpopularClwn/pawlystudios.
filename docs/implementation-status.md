# Implementation Status

Last updated: 2026-09-01 (multi-page architecture housekeeping checkpoint)

Approved baseline commit: `beb1c883a39dd06647ce1509a9d7fb488dbdfd77`

## Current Page Architecture

The homepage is rendered in this order:

1. Brand Hero
2. Primary Services
3. Featured Work
4. About Preview
5. Final CTA
6. Footer

The project uses the Next.js App Router, server components by default, and isolated client components only for
browser behavior such as GSAP motion, the SetSail Folder/dialog, ProfileCard tilt, Header navigation, and the inquiry
form.

## Current Approved Routes

- `/`, `/work`, `/services/web-development`, `/services/ai-ad-creative`, `/about`, and `/contact` are the approved
  route architecture.
- `/services/web-development` is the approved Web Development destination.
- `/services/ai-ad-creative` presents the approved advertising-only offer for e-commerce brands and service
  businesses, covering UGC-style ads, VSLs, animated ads, and static image ads.
- The homepage now presents `pawlystudios.` at studio level and links equally to both approved service destinations.
- The shared Header includes an accessible Services disclosure on desktop and inside the existing mobile navigation.
- Footer navigation uses predictable route links for Work, both services, About, and Contact. Its umbrella tagline is
  `Digital Experiences & Creative`.
- Contact project types are now Web Development, AI Ad Creative, Website Maintenance, and Other / Not Sure Yet. The
  client form and server action read the same allowlist, while delivery remains intentionally unconfigured.
- The AI Ad Creative route uses the approved Concept, Creative Direction, Generation, Editing, and Post-Production
  pipeline without publishing unapproved deliverable details or commercial terms.
- Its portfolio area is an honest reserved state sized for a future video embed. No client relationship, result,
  thumbnail, title, metric, or case study is fabricated.
- The service routes reuse the existing design system, Footer, GSAP Reveal behavior, and reduced-motion handling. No
  dependencies were added.
- Production build and browser QA passed at 1440, 768, and 375 pixels across `/`, `/services/web-development`,
  `/services/ai-ad-creative`, `/work`, `/about`, and `/contact`, with no overflow, failed assets, console errors, or
  hydration errors.

## Complete

- Next.js App Router migration.
- Reusable design-system foundation with shared tokens, containers, sections, buttons, typography, and surfaces.
- GSAP motion system with restrained reveal presets, animation cleanup, and reduced-motion handling.
- Studio-level homepage Hero, two primary service gateways, Featured Work preview, About preview, and final Contact
  CTA.
- Dedicated Web Development Hero with approved copy, `pawlystudios.` logo plate, wide contained Pine panel, Contact
  CTA, restrained motif, and no unnecessary right-side preview.
- Crawlable SetSail Featured Build with approved project copy and an accessible Folder interaction containing three
  real sanitized screenshots.
- Reusable SetSail project dialog using GSAP, native dialog semantics, focus containment and restoration,
  Escape/close-button behavior, body scroll locking, responsive layouts, and reduced-motion behavior.
- SetSail natural image ratios and responsive `next/image` sizing.
- What I Build editorial services presentation without false click affordances.
- Six-step Process Roadmap.
- Optional post-launch support positioning within the Web Development Process content.
- Removal of the rejected diffuse Lime support-card glow.
- Data-driven Starter, Pro, and Max Pricing cards with neutral pending-pricing labels that cannot be mistaken for
  published dollar prices and remain explicitly marked as placeholders in code.
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
- Current pre-launch global title, description, and gated schema remain Web Development-oriented. Broadening them for
  the studio architecture is deliberately deferred to the future SEO/launch phase.
- Branded 1200 × 630 social preview generated at `/social-preview` from the approved logo and Pine/Lime palette. The
  route is prepared but intentionally omitted from metadata until the custom domain supplies truthful absolute URLs.
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
- Launch-readiness SEO/GEO/AEO audit found the title, description, single H1, section hierarchy, service coverage,
  SetSail explanation, process, ownership, post-launch support, and project-start path clear without copy changes.
- Production-style browser QA passed at 1440, 768, and 375 pixels plus `prefers-reduced-motion`: no horizontal
  overflow, console errors, hydration errors, broken rendered images, or missing anchor targets; Folder/dialog,
  ProfileCard, Pricing, Maintenance, form validation, safe unconfigured response, Footer, and focus restoration passed.

## Current Contact Details

- Email: `ninopaul.cabiles@gmail.com`
- WhatsApp: `https://wa.me/qr/ON77VWUSLF3MF1`
- LinkedIn: `https://www.linkedin.com/in/nino-paul-cabiles`

These values are centralized in `src/data/contact.js` and rendered as accessible icon-only links in Footer. Contact
remains form-only.

## Intentionally Pending

### Launch and domain

- Custom domain; the PM does not currently have one.
- `metadataBase`, absolute canonical, sitemap, absolute JSON-LD IDs, and final schema publication.
- Attaching `/social-preview` to Open Graph/Twitter metadata after the custom domain exists.
- SoftwareApplication schema decision for SetSail. It is semantically defensible for the actual client portal, but
  publication should wait for a canonical project URL plus confirmed application category and browser/platform data.

### Form delivery

- Inquiry provider and server-only credentials.
- Sender, recipient, and reply-to configuration.
- Provider delivery call and rate limiting.
- Retention/spam policy.
- Success, failure, rejection, and throttling tests.

### Commercial content

- Approved Starter, Pro, Max, and Website Maintenance prices. Neutral non-price labels are live in the code meanwhile.

### Final security and QA

- HSTS verification after final HTTPS/custom-domain behavior is known. Vercel currently supplies HSTS on its own
  domain; the application has not added a separate HSTS policy.
- CSP review, preferably report-only first, while preserving the current verified headers.
- Lighthouse on the final domain/configuration plus domain-dependent metadata, robots, sitemap, schema, social-card
  crawler, and delivered-inquiry QA.

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
- SetSail remains represented in the crawlable homepage Featured Work preview; the full project and expandable dialog
  live at `/work`.
- The client owns the finished website.
- Ongoing support is optional.
- Do not enable indexing without final launch approval.

## Not Launch Ready

The visible portfolio and pre-launch Vercel deployment are complete, but launch configuration is intentionally
unfinished. The inquiry form still returns `NOT_CONFIGURED`; no custom domain exists; domain-dependent metadata,
sitemap, and schema publication remain unset; and indexing must stay disabled until final launch approval and QA.
