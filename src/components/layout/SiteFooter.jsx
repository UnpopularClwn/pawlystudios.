import { Link } from 'react-router-dom'
import { CONTACT } from '../../data/contact.js'
import './SiteFooter.css'

export default function SiteFooter() {
  const year = new Date().getFullYear()

  return (
    <footer className="site-footer">
      <div className="wrap footer-inner">
        <div className="footer-brand">
          <span className="display footer-mark">
            PAUL<span className="dot">.</span>
          </span>
          <p>Marketing, websites, operations, and systems for home service businesses.</p>
        </div>

        <nav className="footer-links" aria-label="Footer">
          <Link to="/services">Services</Link>
          <Link to="/portfolio">Portfolio</Link>
          <Link to="/resume">Resume</Link>
          <Link to="/contact">Contact</Link>
          <a href={CONTACT.linkedin} target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
        </nav>

        <p className="footer-meta mono">© {year} Paul Cabiles · Based in the Philippines, working with US businesses</p>
      </div>
    </footer>
  )
}
