import { useEffect } from 'react'
import { ScrollTrigger, registerGsap, prefersReducedMotion } from '../lib/motion.js'

/**
 * Scans the given container for elements carrying `data-theme`, and updates
 * `data-active-theme` on <html> as each one scrolls into view. CSS custom
 * properties keyed off `[data-active-theme]` do the actual color transition,
 * so this hook only ever toggles an attribute — no per-frame style writes.
 */
export default function useScrollTheme(containerRef) {
  useEffect(() => {
    const container = containerRef.current
    if (!container) return undefined

    const sections = Array.from(container.querySelectorAll('[data-theme]'))
    if (!sections.length) return undefined

    if (prefersReducedMotion()) {
      const initialTheme = sections[0].dataset.theme
      document.documentElement.setAttribute('data-active-theme', initialTheme)
      return undefined
    }

    registerGsap()

    const triggers = sections.map((section) =>
      ScrollTrigger.create({
        trigger: section,
        start: 'top 55%',
        end: 'bottom 55%',
        onEnter: () => document.documentElement.setAttribute('data-active-theme', section.dataset.theme),
        onEnterBack: () => document.documentElement.setAttribute('data-active-theme', section.dataset.theme),
      }),
    )

    document.documentElement.setAttribute('data-active-theme', sections[0].dataset.theme)

    return () => {
      triggers.forEach((trigger) => trigger.kill())
    }
  }, [containerRef])
}
