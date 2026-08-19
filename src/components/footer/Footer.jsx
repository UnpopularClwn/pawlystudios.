import { contact } from '../../data/contact.js'
import './Footer.css'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="site-footer">
      <div className="footer-container">
        <div className="footer-identity">
          <p className="footer-name">Paul Cabiles</p>
          <p className="footer-tagline">Website Development</p>
        </div>

        <div className="footer-meta">
          {(contact.email || contact.whatsapp || contact.linkedin) && (
            <ul className="footer-links">
              {contact.email && (
                <li>
                  <a href={`mailto:${contact.email}`}>Email</a>
                </li>
              )}
              {contact.whatsapp && (
                <li>
                  <a href={contact.whatsapp} target="_blank" rel="noreferrer noopener">
                    WhatsApp
                  </a>
                </li>
              )}
              {contact.linkedin && (
                <li>
                  <a href={contact.linkedin} target="_blank" rel="noreferrer noopener">
                    LinkedIn
                  </a>
                </li>
              )}
            </ul>
          )}
          <p className="footer-copyright">&copy; {year} Paul Cabiles</p>
        </div>
      </div>
    </footer>
  )
}
