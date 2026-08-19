'use client'

import Button from '../shared/Button.jsx'
import { prefersReducedMotion } from '../../lib/motion.js'

// Next.js App Router sets an inline `scroll-behavior: auto` on <html> for its
// own scroll-restoration handling, which silently overrides the global CSS
// `scroll-behavior: smooth`. scrollIntoView's `behavior` option bypasses that
// CSS property entirely, so this is the reliable way to smooth-scroll a
// same-page anchor regardless of what the framework has set on <html>.
export default function HeroCta() {
  function handleClick(event) {
    if (event.defaultPrevented || event.metaKey || event.ctrlKey || event.shiftKey || event.button !== 0) {
      return
    }

    const target = document.querySelector('#contact')
    if (!target) return

    event.preventDefault()
    target.scrollIntoView({ behavior: prefersReducedMotion() ? 'auto' : 'smooth', block: 'start' })
  }

  return (
    <Button href="#contact" arrow onClick={handleClick}>
      Start a Project
    </Button>
  )
}
