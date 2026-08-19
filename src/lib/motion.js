import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

let registered = false

export function registerGsap() {
  if (registered) return
  gsap.registerPlugin(ScrollTrigger)
  registered = true
}

export function prefersReducedMotion() {
  return typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

export const MOTION = {
  default: { duration: 0.5, ease: 'power2.out', stagger: 0.08 },
  slow: { duration: 0.7, ease: 'power1.out', stagger: 0.12 },
}

export { gsap, ScrollTrigger }
