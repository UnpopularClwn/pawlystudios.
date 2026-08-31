'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { prefersReducedMotion } from '../../lib/motion.js'

// Homepage section links keep their existing smooth-scroll behavior.
// (Next.js App Router sets an inline scroll-behavior on <html> that overrides
// the CSS smooth-scroll rule, so scrollIntoView's behavior option is used instead).
const FOOTER_NAV_LINKS = [
  { label: 'Work', href: '#work' },
  { label: 'Services', href: '#services' },
  { label: 'Process', href: '#process' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Contact', href: '/contact' },
]

export default function FooterNav() {
  const pathname = usePathname()

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
        {FOOTER_NAV_LINKS.map((link) => {
          const href = pathname === '/' || !link.href.startsWith('#') ? link.href : `/${link.href}`

          return (
            <li key={link.href}>
              {href.startsWith('#') ? (
                <a href={href} onClick={(event) => handleClick(event, href)}>
                  {link.label}
                </a>
              ) : (
                <Link href={href}>{link.label}</Link>
              )}
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
