'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { BRAND_NAME, logo } from '../../data/brand.js'
import Button from '../shared/Button.jsx'

const NAV_LINKS = [
  { label: 'Work', href: '/work' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
]

export default function SiteNavigation() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)
  const menuButtonRef = useRef(null)

  useEffect(() => {
    if (!isOpen) return

    function handleEscape(event) {
      if (event.key !== 'Escape') return
      setIsOpen(false)
      menuButtonRef.current?.focus()
    }

    document.addEventListener('keydown', handleEscape)
    return () => document.removeEventListener('keydown', handleEscape)
  }, [isOpen])

  function closeMenu() {
    setIsOpen(false)
  }

  return (
    <nav className="site-navigation" aria-label="Primary navigation">
      <Link
        href="/"
        className="site-header-brand"
        aria-current={pathname === '/' ? 'page' : undefined}
        onClick={closeMenu}
      >
        <span className="site-header-logo-plate" aria-hidden="true">
          <Image className="site-header-logo" src={logo.src} alt="" width={logo.width} height={logo.height} sizes="28px" />
        </span>
        <span>{BRAND_NAME}</span>
      </Link>

      <button
        ref={menuButtonRef}
        type="button"
        className="site-navigation-toggle"
        aria-expanded={isOpen}
        aria-controls="primary-navigation-menu"
        onClick={() => setIsOpen((open) => !open)}
      >
        <span className="visually-hidden">{isOpen ? 'Close navigation' : 'Open navigation'}</span>
        <span className="site-navigation-toggle-icon" aria-hidden="true">
          <span />
          <span />
        </span>
      </button>

      <div
        className={`site-navigation-menu ${isOpen ? 'site-navigation-menu--open' : ''}`}
        id="primary-navigation-menu"
      >
        <ul className="site-navigation-links">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="site-navigation-link"
                aria-current={pathname === link.href ? 'page' : undefined}
                onClick={closeMenu}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <Button href="/contact" className="site-navigation-cta" onClick={closeMenu}>
          Start a Project
        </Button>
      </div>
    </nav>
  )
}
