import { useEffect, useRef } from 'react'
import PhoneFrame from './PhoneFrame.jsx'
import { gsap, registerGsap, prefersReducedMotion, MOTION } from '../../lib/motion.js'
import './MediaGallery.css'

// Horizontal scroll-snap strip of framed screenshots. Reveals with a fast,
// F1-timed horizontal stagger the first time it scrolls into view.
export default function MediaGallery({ items }) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return undefined

    const cards = el.querySelectorAll('.media-gallery-item')
    if (!cards.length) return undefined

    if (prefersReducedMotion()) {
      gsap.set(cards, { opacity: 1, x: 0 })
      return undefined
    }

    registerGsap()
    const ctx = gsap.context(() => {
      gsap.fromTo(
        cards,
        { opacity: 0, x: 28 },
        {
          opacity: 1,
          x: 0,
          duration: MOTION.f1.duration,
          ease: MOTION.f1.ease,
          stagger: MOTION.f1.stagger,
          scrollTrigger: { trigger: el, start: 'top 85%', once: true },
        },
      )
    }, el)

    return () => ctx.revert()
  }, [])

  return (
    <div className="media-gallery" ref={ref}>
      {items.map((item) => (
        <div className="media-gallery-item" key={item.src}>
          <PhoneFrame src={item.src} alt={item.alt} />
        </div>
      ))}
    </div>
  )
}
