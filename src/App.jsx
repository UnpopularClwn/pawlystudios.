import { Routes, Route, useLocation } from 'react-router-dom'
import { useRef } from 'react'
import SiteHeader from './components/layout/SiteHeader.jsx'
import SiteFooter from './components/layout/SiteFooter.jsx'
import TextureLayer from './components/shared/TextureLayer.jsx'
import RouteTransition from './components/motion/RouteTransition.jsx'
import useScrollToTop from './hooks/useScrollToTop.js'
import useRouteFocus from './hooks/useRouteFocus.js'
import HomePage from './pages/HomePage.jsx'
import ServicesPage from './pages/ServicesPage.jsx'
import PortfolioPage from './pages/PortfolioPage.jsx'
import ContactPage from './pages/ContactPage.jsx'
import ResumePage from './pages/ResumePage.jsx'
import NotFoundPage from './pages/NotFoundPage.jsx'

export default function App() {
  useScrollToTop()
  const location = useLocation()
  const mainRef = useRef(null)
  useRouteFocus(mainRef)

  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <TextureLayer />
      <SiteHeader />
      <main id="main-content" ref={mainRef} tabIndex={-1}>
        <RouteTransition routeKey={location.pathname}>
          <Routes location={location}>
            <Route path="/" element={<HomePage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/portfolio" element={<PortfolioPage />} />
            <Route path="/resume" element={<ResumePage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </RouteTransition>
      </main>
      <SiteFooter />
    </>
  )
}
