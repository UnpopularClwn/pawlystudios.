import { useLayoutEffect } from 'react'

/**
 * Sets the page's default theme synchronously before paint, so navigating
 * to a route never flashes the previous page's theme. Pages that also use
 * useScrollTheme (the homepage) will have their theme overridden by scroll
 * position immediately after this runs.
 */
export default function usePageTheme(themeName) {
  useLayoutEffect(() => {
    document.documentElement.setAttribute('data-active-theme', themeName)
  }, [themeName])
}
