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

const SERVICE_LINKS = [
  { label: 'Web Development', href: '/services/web-development' },
  { label: 'AI Ad Creative', href: '/services/ai-ad-creative' },
]

function NavigationState({ pathname }) {
  const [isOpen, setIsOpen] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const menuButtonRef = useRef(null)
  const servicesButtonRef = useRef(null)
  const servicesItemRef = useRef(null)
  const isServicesActive = SERVICE_LINKS.some((link) => pathname === link.href)

  useEffect(() => {
    if (!isOpen && !isServicesOpen) return undefined

    function handleEscape(event) {
      if (event.key !== 'Escape') return

      if (isServicesOpen) {
        setIsServicesOpen(false)
        servicesButtonRef.current?.focus()
        return
      }

      setIsOpen(false)
      menuButtonRef.current?.focus()
    }

    document.addEventListener('keydown', handleEscape)
    return () => document.removeEventListener('keydown', handleEscape)
  }, [isOpen, isServicesOpen])

  useEffect(() => {
    if (!isServicesOpen) return undefined

    function handleOutsidePointer(event) {
      if (!servicesItemRef.current?.contains(event.target)) setIsServicesOpen(false)
    }

    document.addEventListener('pointerdown', handleOutsidePointer)
    return () => document.removeEventListener('pointerdown', handleOutsidePointer)
  }, [isServicesOpen])

  function closeMenu() {
    setIsOpen(false)
    setIsServicesOpen(false)
  }

  function toggleMenu() {
    if (isOpen) closeMenu()
    else setIsOpen(true)
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
        onClick={toggleMenu}
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
          <li>
            <Link
              href={NAV_LINKS[0].href}
              className="site-navigation-link"
              aria-current={pathname === NAV_LINKS[0].href ? 'page' : undefined}
              onClick={closeMenu}
            >
              {NAV_LINKS[0].label}
            </Link>
          </li>

          <li className="site-navigation-services" ref={servicesItemRef}>
            <button
              ref={servicesButtonRef}
              type="button"
              className={`site-navigation-link site-navigation-services-trigger ${
                isServicesActive ? 'site-navigation-services-trigger--active' : ''
              }`.trim()}
              aria-expanded={isServicesOpen}
              aria-controls="services-navigation-links"
              onClick={() => setIsServicesOpen((open) => !open)}
            >
              <span>Services</span>
              <span className="site-navigation-services-chevron" aria-hidden="true" />
            </button>

            <ul
              className={`site-navigation-services-links ${
                isServicesOpen ? 'site-navigation-services-links--open' : ''
              }`.trim()}
              id="services-navigation-links"
            >
              {SERVICE_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    aria-current={pathname === link.href ? 'page' : undefined}
                    onClick={closeMenu}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </li>

          {NAV_LINKS.slice(1).map((link) => (
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

export default function SiteNavigation() {
  const pathname = usePathname()
  return <NavigationState key={pathname} pathname={pathname} />
}
