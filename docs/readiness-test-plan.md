# Readiness Test Plan

Manual checklist to run locally before sharing the site with anyone. Run `npm run dev` and open the
printed local URL.

## Desktop

- [ ] Home, Services, Portfolio, and Contact all load without console errors.
- [ ] Nav links and the primary CTA go to the right pages.
- [ ] Layout does not shift or overflow horizontally at common widths (1280px, 1440px, 1920px).

## Tablet (~768–1024px)

- [ ] Homepage sections stack cleanly, no overlapping text or images.
- [ ] Services and Portfolio case studies remain readable at this width.

## Mobile (~375–430px)

- [ ] Hero, credibility strip, and featured work stack in one column.
- [ ] Mobile nav toggle opens/closes and all links work.
- [ ] All buttons and links are easily tappable (44px minimum target height).
- [ ] No horizontal scrolling on any page.

## Navigation

- [ ] Every nav link (desktop and mobile) routes correctly.
- [ ] The 404 page appears for an unknown path and its "Back to Home" link works.

## Contact Form

- [ ] Submitting with empty required fields shows inline validation errors.
- [ ] Submitting a valid form currently shows the "not connected yet" message (expected — no
      backend is wired up). Confirm this message reads clearly rather than as a broken form.
- [ ] Once a real backend is configured, re-test that a valid submission shows the success message.

## External Links

- [ ] LinkedIn link opens the correct profile in a new tab.
- [ ] Resume and WhatsApp show "coming soon" placeholders until real values are added (expected).

## Resume Download

- [ ] Once a real resume file is added, confirm the download link opens/downloads a real PDF.

## WhatsApp

- [ ] Once a real number is added, confirm the link opens WhatsApp with the correct number.

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

## Reduced Motion

- [ ] Enable "Reduce Motion" in OS settings, reload the site, confirm no jarring transitions remain.

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
