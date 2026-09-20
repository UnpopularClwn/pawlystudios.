# Implementation Status

Last updated: 2026-09-20 (housekeeping pause: no code changes since the 2026-09-14 pre-launch checkpoint; branch
paused at 8 commits ahead of `main`, resume with **Remaining Launch Order** below)

Production baseline commit: `29219b3907a275afdbc221fe85540856a6cf6e6a` (this is also current `main` and `origin/main` —
verified identical; production has not moved since this baseline).

## Repository State

The current branch (`portfolio-first-restructure`) is **8 commits ahead of `main`, 0 behind**, and all eight are
committed but unmerged. Working tree is clean aside from two unrelated untracked logo files at the repo root
(`portfolio logo transparent.svg`, `portfolio logo.png` — not referenced by any code, not staged, not part of this
checkpoint). Nothing has been pushed or deployed. Do not describe any of them as shipped, approved, or on
production — none are merged.

1. **LIVE / PRODUCTION** (`main` / `origin/main` @ `29219b3`) — service-first homepage structure, Services nav
   dropdown, About page portrait/story. Everything in "Complete" below that isn't explicitly flagged otherwise
   describes this state.
2. **COMMITTED BUT UNMERGED — portfolio-first content pass** — `8a4345e` (feat: shift site copy toward portfolio
   positioning). Homepage Hero copy, Hero `line-height: 1.12`, homepage capability descriptions, About Preview copy,
   AI Ad Creative hero lead.
3. **COMMITTED BUT UNMERGED — site restructure** — `09fcb44` (feat: restructure site around portfolio work) and
   `10ef7d2` (fix: align hero identity with portfolio positioning). Navigation simplification, homepage section
   reorder, Featured Work → "Selected Work" rebuild, "What I Do" structural changes, Web Development/AI Ad Creative
   section reorders, and Home CTA copy changes. See **Current Branch Architecture** below.
4. **COMMITTED BUT UNMERGED — SetSail redesign** — `5d67e0a` (feat: redesign SetSail case study). `SetSailDialog.jsx`/
   `.css`, `src/data/setsail.js`, and three new committed screenshots (`(2).png`, `(3).png`, `(11).png`). See
   **Asset State** below.
5. **COMMITTED BUT UNMERGED — docs checkpoint** — `3906e07` (docs: update repository state after portfolio
   restructure). Documentation-only.
6. **COMMITTED BUT UNMERGED — web-only public scope** — `baa2a19` (refactor: narrow public portfolio to web
   development). Removes AI Ad Creative from public navigation, the homepage Selected Work and What I Do sections,
   Contact project types, public SEO/social-preview copy, and the launch-gated JSON-LD schema. Does not delete the AI
   Ad Creative implementation. See **Public Launch Scope** below.
7. **COMMITTED BUT UNMERGED — Next.js security patch** — `a96da75` (chore: patch Next.js security vulnerability).
   See **Next.js Security State** below.
8. **COMMITTED BUT UNMERGED — pre-launch checkpoint** — `a274a76` (docs: save pre-launch project checkpoint),
   followed by this 2026-09-20 housekeeping documentation pass. Documentation-only.

`qa/` holds local QA screenshots only, is not part of any approved deliverable, and is now gitignored.

## Current Branch Architecture (committed, unmerged — `portfolio-first-restructure`)

This describes the current state on the branch's first 7 commits (layer 8 is documentation-only), not production.
Do not document it as live until merged into `main`.

- **Navigation**: Web, About, Contact, Start a Project (flat links, no Services dropdown, no AI Creative link).
- **Homepage**: Hero → Selected Work (SetSail only) → What I Do (Web Development only) → About Preview → Final CTA →
  Footer.
- **Web Development** (`/services/web-development`): Hero → SetSail case study → What I Build / Services → Process →
  Maintenance → Tools → CTA.
- **AI Ad Creative** (`/services/ai-ad-creative`): Hero → Selected Creative → remaining strategy/methodology content →
  CTA. Implementation intact; parked with no public navigation path. See **Public Launch Scope** below.
- **About** (`/about`): unchanged from the production About implementation, aside from the metadata description no
  longer mentioning AI ad creative work.
- **Contact** (`/contact`): unchanged aside from the project-type options (AI Ad Creative removed).
- **`/work`**: absent / intentionally 404.
- **SetSail**: the redesigned case study (cover/experience/build sections) is committed in `5d67e0a`, not on
  production.

## Public Launch Scope

The upcoming public launch is narrowed to **Web Development only**. AI Ad Creative is intentionally parked, not
deleted:

- Public navigation (header `SiteNavigation.jsx`, footer `FooterNav.jsx`), the homepage Selected Work and What I Do
  sections, and the Contact project-type options no longer reference or link to AI Ad Creative.
- The `/services/ai-ad-creative` route, its page, all of its section components (`AiAdCreativeHero`,
  `SelectedCreative`, `CreativeTypes`, `CreativePipeline`, `AudienceSection`, `WorkingTogether`, `AiAdCreativeCta`),
  and its data (`src/data/ai-ad-creative.js`, including the YouTube spec-creative embed and thumbnail fields) remain
  fully intact and unchanged. The route is not redirected and has no "Coming Soon" placeholder — it is a parked draft
  reachable only by direct URL.
- `next.config.js`'s `images.remotePatterns` entry for `i.ytimg.com` was removed: it existed only to let `next/image`
  optimize the AI Ad Creative thumbnail on the (now removed) homepage card. The AI page's own `SelectedCreative`
  component embeds the YouTube player directly via `embedUrl` (an iframe), not `next/image`, so nothing in the
  current runtime needs that remote pattern. Re-add it if AI Ad Creative content is ever restored to a page that
  renders `thumbnailUrl` through `next/image`.
- Restoring AI Ad Creative to the public site later should not require rebuilding the feature — it means re-adding
  the nav links, the homepage cards, and the Contact project-type option, and (if needed) the `next.config.js` remote
  pattern.
- `src/lib/schema.js` still models `AI Ad Creative` as a `Service` inside the JSON-LD `@graph`, but the whole graph is
  gated off by `SITE_IS_LAUNCHED` (currently `false`) and was intentionally left unchanged here — it isn't live and
  its launch-time scope is a separate decision from this parking change.

## Current Page Architecture (production, `main`)

The homepage is rendered in this order:

1. Brand Hero
2. Primary Services (Web Development / AI Ad Creative gateways)
3. Featured Work (SetSail only)
4. About Preview
5. Final CTA
6. Footer

The branch work in its current state (see **Current Branch Architecture** above) changes this to Hero → Selected Work
(SetSail only) → What I Do (Web Development only) → About Preview → Final CTA → Footer, with no AI Ad Creative
exposure. That order is not live and should not be documented as current until it is merged into `main` and
approved.

The project uses the Next.js App Router, server components by default, and isolated client components only for
browser behavior such as GSAP motion, the SetSail Folder/dialog, ProfileCard tilt, Header navigation, and the inquiry
form.

## Current Approved Routes (production, `main`)

- `/`, `/services/web-development`, `/services/ai-ad-creative`, `/about`, and `/contact` are the approved route
  architecture.
- `/services/web-development` is the approved Web Development destination and contains the full SetSail showcase.
- `/services/ai-ad-creative` presents the approved advertising-only offer for e-commerce brands and service
  businesses, covering UGC-style ads, VSLs, animated ads, and static image ads.
- The homepage leads with a Brand Hero, then Primary Services, then Featured Work (SetSail only).
- The shared Header uses a Services disclosure (Web Development, AI Ad Creative) alongside About and Contact, with
  the existing accessible mobile navigation. (The branch's current working-tree state changes this to a direct Web
  link only, with no AI Creative link — not live; see Repository State.)
- Footer navigation uses predictable route links for both services, About, and Contact. Its umbrella tagline is
  `Digital Experiences & Creative`.
- Contact project types are now Web Development, AI Ad Creative, Website Maintenance, and Other / Not Sure Yet. The
  client form and server action read the same allowlist, while delivery remains intentionally unconfigured. (The
  branch's current working-tree state removes the AI Ad Creative option — not live; see Repository State and Public
  Launch Scope.)
- The AI Ad Creative route uses the approved Concept, Creative Direction, Generation, Editing, and Post-Production
  pipeline without publishing unapproved deliverable details or commercial terms.
- Its portfolio area contains the approved privacy-enhanced YouTube embed, labeled as Spec Creative without client or
  performance claims. (This was briefly surfaced as a homepage thumbnail card by the uncommitted "Selected Work"
  rebuild on the branch, then removed again by the uncommitted AI-parking layer on top of it — never live on
  production; see Repository State and Public Launch Scope.)
- The service routes reuse the existing design system, Footer, GSAP Reveal behavior, and reduced-motion handling. No
  dependencies were added.
- Production build and browser QA passed at 1440, 768, and 375 pixels across `/`, `/services/web-development`,
  `/services/ai-ad-creative`, `/about`, and `/contact`, with no overflow, failed assets, console errors, or
  hydration errors.

## Complete

- Next.js App Router migration.
- Reusable design-system foundation with shared tokens, containers, sections, buttons, typography, and surfaces.
- GSAP motion system with restrained reveal presets, animation cleanup, and reduced-motion handling.
- Homepage Brand Hero, Primary Services capability section, Featured Work (SetSail) preview, About preview, and final
  Contact CTA (production, `main`). The portfolio-first copy pass to this Hero and About Preview is committed on
  `portfolio-first-restructure` at `8a4345e` but not yet merged. A further "Selected Work" rebuild adding an AI Spec
  Creative preview to the homepage is committed on that same branch at `09fcb44`/`10ef7d2` but also not yet merged —
  see Repository State.
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
- Web Development pricing and Website Maintenance price placeholders are intentionally absent until the commercial
  offer is finalized.
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
  ProfileCard, Maintenance, form validation, safe unconfigured response, Footer, and focus restoration passed.

## Committed but Unmerged (not on production, not approved)

Committed on branch `portfolio-first-restructure`, on top of `8a4345e`. None of this has been reviewed/approved as
final and none of it should be described elsewhere in this document as complete or production-ready.

**Site restructure (`09fcb44`, `10ef7d2`):**
- Navigation simplification: Services dropdown → direct Web/AI Creative links.
- Homepage section reorder (Featured Work before Primary Services) and renames (Primary Services → "What I Do",
  `id="services"` → `id="capabilities"`, new `linkLabel` per service).
- Featured Work rebuilt into a two-project "Selected Work" section showing both SetSail and the AI Spec Creative
  (added `thumbnailUrl`/`thumbnailAlt` to `src/data/ai-ad-creative.js` and a `next.config.js` remote image pattern for
  `i.ytimg.com`). The AI Spec Creative card and the now-unused `i.ytimg.com` remote pattern were subsequently removed
  by the uncommitted AI-parking layer — see below.
- Web Development page: SetSail section moved before the Services section.
- AI Ad Creative page: Selected Creative section moved earlier, plus an added `id="selected-creative"` anchor.
- Home CTA heading/button copy changed ("Work Together") — not part of the originally approved content pass.

**SetSail redesign (`5d67e0a`):**
- `SetSailDialog.jsx`/`.css` substantially rebuilt with new cover/experience/build sections and layout.
- `src/data/setsail.js` adds `cover`, `experience`, and a `build[]` screenshot array.
- 3 new SetSail screenshots committed and referenced in code: `(2).png`, `(3).png`, `(11).png`. The other 11
  screenshots generated during the redesign were unused and have been deleted from the working tree.

**AI Ad Creative parked (`baa2a19`):**
- Public navigation, homepage Selected Work/What I Do exposure, Contact project-type option, public SEO/social-preview
  copy, and the launch-gated JSON-LD schema entry for AI Ad Creative removed. Implementation, data, and route left
  intact — see **Public Launch Scope** above. `next.config.js`'s now-unused `i.ytimg.com` remote-image pattern also
  removed (see **Public Launch Scope**).

**Next.js security patch (`a96da75`):**
- `next` `16.3.1` → `16.3.3`, resolving a critical unauthenticated-RCE advisory. `react`/`react-dom` unchanged. See
  **Next.js Security State** below.

**Local-only, non-deliverable:**
- `qa/` — QA screenshots from testing the above, not part of any approved deliverable; now gitignored.

## Next.js Security State

- Runtime versions: `next@16.3.3`, `react@19.2.8`, `react-dom@19.2.8` (patched in `a96da75`).
- Critical Next.js unauthenticated-RCE advisories (`GHSA-p293-qw3h-jr36`, `GHSA-2xp9-vwfh-vxw4`, affecting `next`
  `16.0.0–16.3.2`) are resolved.
- Remaining `npm audit --omit=dev` findings, both transitive through `next` (not direct dependencies): `sharp
  <0.35.4` (HIGH, libheif) and `baseline-browser-mapping >=2.0.0 <2.11.0` (MODERATE, DoS). Do not manually
  pin/override without a separate reviewed dependency task.

## Vercel / Environment State

- Vercel project: `pawlystudios`. Initial-launch production URL: `https://pawlystudios.vercel.app` (custom domain
  intentionally deferred, not required for this launch).
- `NEXT_PUBLIC_SITE_URL=https://pawlystudios.vercel.app` is configured in Vercel, scoped **Production only**;
  Preview and Development are intentionally unset (a preview deployment inheriting the production origin for
  `metadataBase`/canonical would be incorrect). Setting it has not triggered a deployment — it takes effect on the
  next Production build.
- No other environment variables exist yet in any environment: `RESEND_API_KEY`, `CONTACT_FROM_EMAIL`,
  `CONTACT_TO_EMAIL`, `UPSTASH_REDIS_REST_URL`, `UPSTASH_REDIS_REST_TOKEN` are all absent. See **Form delivery**
  under Intentionally Pending.
- `SITE_IS_LAUNCHED` remains `false`. Nothing on `portfolio-first-restructure` has been pushed or deployed.

## Remaining Launch Order

1. Configure Resend contact delivery (`RESEND_API_KEY`, `CONTACT_FROM_EMAIL`, `CONTACT_TO_EMAIL`, Production only).
2. Test a real contact submission end to end.
3. Add a sitemap.
4. Attach `/social-preview` to Open Graph/Twitter metadata.
5. Review final launch configuration.
6. Set `SITE_IS_LAUNCHED` to `true` (only after explicit approval).
7. Run final test/lint/build/security audit.
8. Final desktop/tablet/mobile smoke test.
9. Merge/push/deploy (only after explicit approval).
10. Verify the actual Vercel production deployment.
11. Verify canonical, robots, schema, social metadata, and contact delivery in production.

Deferred, not required for this launch: custom domain, Upstash rate limiting (safe to add later), final commercial
pricing, HSTS/CSP hardening beyond the current baseline, SetSail `SoftwareApplication` schema.

## Current Contact Details

- Email: `ninopaul.cabiles@gmail.com`
- WhatsApp: `https://wa.me/qr/ON77VWUSLF3MF1`
- LinkedIn: `https://www.linkedin.com/in/nino-paul-cabiles`

These values are centralized in `src/data/contact.js` and rendered as accessible icon-only links in Footer. Contact
remains form-only.

## Intentionally Pending

### Launch and domain

- Custom domain is intentionally deferred, not required for the initial launch — `https://pawlystudios.vercel.app`
  is the launch production URL. `NEXT_PUBLIC_SITE_URL` is already configured for Production (see **Vercel /
  Environment State**); `metadataBase`/canonical will activate on the next Production deployment.
- Sitemap, absolute JSON-LD IDs, and final schema publication remain unset until `SITE_IS_LAUNCHED` is flipped.
- Attaching `/social-preview` to Open Graph/Twitter metadata — still pending, no longer blocked on a custom domain
  since `NEXT_PUBLIC_SITE_URL` now provides a truthful absolute origin.
- SoftwareApplication schema decision for SetSail remains deferred (semantically defensible, but publication should
  wait for confirmed application category and browser/platform data).

### Form delivery

Architecture is complete and tested (see **Contact Form State**-equivalent detail above and `Complete`); only
credentials are missing. Required before launch: `RESEND_API_KEY`, `CONTACT_FROM_EMAIL`, `CONTACT_TO_EMAIL` (Resend
is already installed and wired — see the delivery flow described under **Repository State** item 6 and
`src/lib/submitContactForm.js`/`contactSubmission.js`). Optional, safe to defer: `UPSTASH_REDIS_REST_URL` +
`UPSTASH_REDIS_REST_TOKEN` (rate limiting fails open / skips cleanly when absent). After configuring, test success,
failure, rejection, and throttling against the real provider.

### Commercial content

- Approved Web Development and Website Maintenance prices. No pricing or placeholder labels are currently published.

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
  live at `/services/web-development#work`.
- The client owns the finished website.
- Ongoing support is optional.
- Do not enable indexing without final launch approval.

## Not Launch Ready

The visible portfolio and pre-launch Vercel deployment are complete, but launch configuration is intentionally
unfinished. The inquiry form still returns `NOT_CONFIGURED`; no custom domain exists; domain-dependent metadata,
sitemap, and schema publication remain unset; and indexing must stay disabled until final launch approval and QA.
