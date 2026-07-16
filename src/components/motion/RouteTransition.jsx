import { useLayoutEffect, useRef } from 'react'
import { gsap, prefersReducedMotion } from '../../lib/motion.js'

// A restrained entrance on route change: brief fade + small upward move. Content is
// already in the DOM and visible immediately, so this never delays navigation or
// blocks the browser back button — it is purely cosmetic polish on top.
export default function RouteTransition({ routeKey, children }) {
  const ref = useRef(null)

  useLayoutEffect(() => {
    const el = ref.current
    if (!el || prefersReducedMotion()) return

    gsap.fromTo(el, { opacity: 0, y: 10 }, { opacity: 1, y: 0, duration: 0.32, ease: 'power2.out' })
  }, [routeKey])

  return (
    <div ref={ref} key={routeKey}>
      {children}
    </div>
  )
}
