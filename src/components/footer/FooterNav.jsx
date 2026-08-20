'use client'

import { prefersReducedMotion } from '../../lib/motion.js'

// Real homepage anchors only — mirrors the smooth-scroll approach in HeroCta.jsx
// (Next.js App Router sets an inline scroll-behavior on <html> that overrides
// the CSS smooth-scroll rule, so scrollIntoView's behavior option is used instead).
const FOOTER_NAV_LINKS = [
  { label: 'Work', href: '#work' },
  { label: 'Services', href: '#services' },
  { label: 'Process', href: '#process' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Contact', href: '#contact' },
]

export default function FooterNav() {
  function handleClick(event, href) {
    if (event.defaultPrevented || event.metaKey || event.ctrlKey || event.shiftKey || event.button !== 0) {
      return
    }

    const target = document.querySelector(href)
    if (!target) return

    event.preventDefault()
    target.scrollIntoView({ behavior: prefersReducedMotion() ? 'auto' : 'smooth', block: 'start' })
  }

  return (
    <nav className="footer-nav" aria-label="Footer">
      <ul className="footer-nav-list">
        {FOOTER_NAV_LINKS.map((link) => (
          <li key={link.href}>
            <a href={link.href} onClick={(event) => handleClick(event, link.href)}>
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
