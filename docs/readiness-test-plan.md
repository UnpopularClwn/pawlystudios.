# Readiness Test Plan

Manual checklist to run locally before sharing the site with anyone. Run `npm run dev` and open the
printed local URL.

## Desktop (1440px, 1024px)

- [ ] Home, Services, Portfolio, Resume, and Contact all load without console errors.
- [ ] Nav links and the primary CTA go to the right pages.
- [ ] Layout does not shift or overflow horizontally at either width.
- [ ] Navbar background stays legible against every homepage theme as you scroll.

## Tablet (768px)

- [ ] Homepage sections stack cleanly, no overlapping text or images.
- [ ] Services and Portfolio case studies remain readable at this width.
- [ ] Resume viewer stays usable (toolbar buttons do not crowd, embed keeps a sensible height).
- [ ] Portfolio media gallery does not leave large empty gaps.

## Mobile (425px, 375px)

- [ ] Hero, credibility strip, and featured work stack in one column.
- [ ] Mobile nav toggle opens/closes and all links work, including Resume.
- [ ] All buttons and links are easily tappable (44px minimum target height).
- [ ] No horizontal scrolling on any page, including the Portfolio media gallery (it should scroll
      only inside its own strip, not move the page).
- [ ] Resume page shows Download/Open actions and the highlights summary before the embedded
      document, per the required mobile priority order.

## Navigation

- [ ] Every nav link (desktop and mobile) routes correctly, including the new Resume link.
- [ ] The 404 page appears for an unknown path and its "Back to Home" link works.
- [ ] Browser back/forward buttons work normally after a route transition (nothing blocks them).

## Contact Form

- [ ] Submitting with empty required fields shows inline validation errors.
- [ ] Submitting a valid form currently shows the "not connected yet" message (expected — no
      backend is wired up), and that message now points to a real email address, not just LinkedIn.
- [ ] Once a real backend is configured, re-test that a valid submission shows the success message.

## External Links

- [ ] LinkedIn link opens the correct profile in a new tab.
- [ ] WhatsApp link opens `https://wa.me/639060558493` — confirm this number is actually
      WhatsApp-enabled before relying on it publicly (see Needs Your Input).
- [ ] Resume links (nav, About, Contact, footer) all go to `/resume` and show the honest "pending
      upload" state, since no PDF exists yet.

## Resume Viewer

- [ ] `/resume` loads with the highlights panel and the "DOCUMENT STATUS: PENDING UPLOAD" message.
- [ ] Once a real PDF is added and `resumeUrl` is set, confirm: the embedded viewer renders it, the
      Download button downloads a real file, and Open in New Tab opens it in a new tab.
- [ ] Confirm the `<object>`/`<iframe>` has an accessible title/label and a working fallback link.

## Images

- [ ] Paul's hero and about photos load and are not stretched or cropped oddly.
- [ ] Portfolio social media graphics load in the Social Media case study.
- [ ] Set Sail case study shows the placeholder notice (expected until real screenshots are added).

## Case Study Content

- [ ] Social Media case study does not claim every client was a roofing company.
- [ ] Set Sail case study status (live/in testing) matches what Paul confirms is currently true.

## Keyboard Navigation

- [ ] Tab through the homepage — focus outline is visible on every interactive element.
- [ ] The "Skip to content" link appears on first Tab press and jumps past the nav.
- [ ] The contact form can be fully completed and submitted using only the keyboard.
- [ ] After clicking an internal link (nav or in-page), focus lands on the new page's main content
      region — not stuck on the old link or reset to the top of the document with no focus target.
- [ ] The Resume page's Download/Open buttons and the mobile menu remain fully keyboard operable.

## Scroll and Page Themes

- [ ] Scroll the homepage top to bottom — background/text colors shift gradually through
      `precision` → `problem` → `systems` → `proof` → `personal` as each section arrives.
- [ ] Refresh the page mid-scroll on the homepage — no flash of the wrong theme on load.
- [ ] Visit `/services`, `/portfolio`, `/contact`, `/resume` directly (not by navigating from
      another page) — each loads immediately in its correct fixed theme, no flash.
- [ ] Text stays readable (sufficient contrast) in every theme, on every section.

## Portfolio Renders

- [ ] Featured Work cards on the homepage show real social media graphics inside the browser-style
      frame.
- [ ] Portfolio page's media gallery scrolls horizontally, shows real graphics inside phone frames,
      and reveals with a quick stagger the first time it scrolls into view.
- [ ] Set Sail's case study still shows the honest "screenshots pending" placeholder, not a fake
      dashboard image.

## Reduced Motion

- [ ] Enable "Reduce Motion" in OS settings, reload the site, confirm no jarring transitions remain.
- [ ] With reduced motion on: all homepage sections show content immediately (no scroll-triggered
      fade-in), the theme still changes on scroll but instantly, and route changes show the new
      page without a fade animation.

## Performance

- [ ] Run a Lighthouse mobile audit against the local preview build (`npm run build && npm run
      preview`) and note the performance score.
- [ ] Confirm the homepage feels fast on a throttled "Slow 4G" network profile in DevTools.

## Metadata

- [ ] View page source (or DevTools Elements) on each route and confirm the `<title>` and meta
      description match the approved brief copy.

## Missing Assets

- [ ] Confirm the "Needs Your Input" list in `docs/implementation-status.md` still matches reality
      before sharing the site externally.

## Content Voice (Session 2.2)

- [ ] Read the homepage top to bottom out loud. It should sound like Paul talking, not a brochure.
- [ ] Confirm no em dashes, semicolons, or colons appear in body copy (meta titles are an approved
      exception — they match the brief's own em dash usage).
- [ ] Confirm the Contact page does not show a raw `[your number]` placeholder anywhere.
- [ ] Confirm the homepage section order matches: Hero, Credibility, Problem, How It Works, Proof,
      Featured Work, About, Trusted Partner, Final CTA.
- [ ] Confirm `docs/content-claims.md` still matches what is published — especially the softened
      automation claim and the Set Sail "live and in testing" wording.
