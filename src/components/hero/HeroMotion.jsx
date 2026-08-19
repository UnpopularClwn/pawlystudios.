'use client'

import useHeroEntrance from '../../hooks/useHeroEntrance.js'

export default function HeroMotion({ children }) {
  const ref = useHeroEntrance()
  return <div ref={ref}>{children}</div>
}
