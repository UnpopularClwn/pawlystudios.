import { useEffect, useRef } from 'react'
import { gsap, registerGsap, prefersReducedMotion, MOTION } from '../lib/motion.js'

/**
 * Reveals the container's direct children (or a child selector) on scroll.
 * Respects prefers-reduced-motion by rendering content in its final state instantly.
 */
export default function useReveal({ preset = 'default', selector = ':scope > *', y = 20, fromScale = 1 } = {}) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return undefined

    const targets = el.querySelectorAll(selector)
    if (!targets.length) return undefined

    if (prefersReducedMotion()) {
      gsap.set(targets, { opacity: 1, y: 0, scale: 1 })
      return undefined
    }

    registerGsap()
    const { duration, ease, stagger } = MOTION[preset] ?? MOTION.default

    // Mobile gets the same motion language at a smaller, faster scale rather
    // than desktop distances shrunk uniformly — see global motion pass notes.
    const isCompact = window.matchMedia('(max-width: 640px)').matches
    const effectiveY = isCompact ? Math.round(y * 0.6) : y
    const effectiveDuration = isCompact ? +(duration * 0.85).toFixed(2) : duration
    const effectiveStagger = isCompact ? +(stagger * 0.7).toFixed(2) : stagger

    const ctx = gsap.context(() => {
      gsap.fromTo(
        targets,
        { opacity: 0, y: effectiveY, scale: fromScale },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: effectiveDuration,
          ease,
          stagger: effectiveStagger,
          scrollTrigger: {
            trigger: el,
            start: 'top 78%',
            once: true,
          },
        },
      )
    }, el)

    return () => ctx.revert()
  }, [preset, selector, y, fromScale])

  return ref
}
