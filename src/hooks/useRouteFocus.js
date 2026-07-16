import { useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'

// Moves focus to the main content region on route change, skipping the very first
// render (the browser already owns focus on initial page load).
export default function useRouteFocus(mainRef) {
  const { pathname } = useLocation()
  const isFirstRender = useRef(true)

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false
      return
    }
    mainRef.current?.focus({ preventScroll: true })
  }, [pathname, mainRef])
}
