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

    const ctx = gsap.context(() => {
      gsap.fromTo(
        targets,
        { opacity: 0, y, scale: fromScale },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration,
          ease,
          stagger,
          scrollTrigger: {
            trigger: el,
            start: 'top 82%',
            once: true,
          },
        },
      )
    }, el)

    return () => ctx.revert()
  }, [preset, selector, y, fromScale])

  return ref
}
