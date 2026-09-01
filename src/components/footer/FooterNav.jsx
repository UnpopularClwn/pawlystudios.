import Link from 'next/link'

const FOOTER_NAV_LINKS = [
  { label: 'Work', href: '/work' },
  { label: 'Web Development', href: '/services/web-development' },
  { label: 'AI Ad Creative', href: '/services/ai-ad-creative' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
]

export default function FooterNav() {
  return (
    <nav className="footer-nav" aria-label="Footer">
      <ul className="footer-nav-list">
        {FOOTER_NAV_LINKS.map((link) => (
          <li key={link.href}>
            <Link href={link.href}>{link.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
