import Image from 'next/image'
import { contact } from '../../data/contact.js'
import { logo, BRAND_NAME } from '../../data/brand.js'
import Reveal from '../shared/Reveal.jsx'
import Container from '../shared/Container.jsx'
import FooterNav from './FooterNav.jsx'
import { MailIcon, WhatsAppIcon, LinkedInIcon } from './SocialIcons.jsx'
import './Footer.css'

export default function Footer() {
  const year = new Date().getFullYear()
  const hasContactLinks = contact.email || contact.whatsapp || contact.linkedin

  return (
    <footer className="site-footer">
      <Container>
        <Reveal
          as="div"
          className="footer-panel"
          selector=".footer-identity, .footer-nav, .footer-bottom"
          preset="content"
          y={16}
        >
          <div className="footer-top-divider" aria-hidden="true" />

          <div className="footer-identity">
            <div className="footer-brand-lockup">
              <span className="footer-logo-plate">
                <Image
                  src={logo.src}
                  alt=""
                  width={logo.width}
                  height={logo.height}
                  sizes="24px"
                  className="footer-logo"
                />
              </span>
              <p className="footer-name">{BRAND_NAME}</p>
            </div>
            <p className="footer-tagline">Website Development</p>
          </div>

          <FooterNav />

          <div className="footer-divider" aria-hidden="true" />

          <div className="footer-bottom">
            <p className="footer-copyright">&copy; {year} Paul Cabiles</p>

            {hasContactLinks && (
              <ul className="footer-contact-links">
                {contact.email && (
                  <li>
                    <a href={`mailto:${contact.email}`} aria-label="Email Paul Cabiles">
                      <MailIcon className="footer-contact-icon" />
                    </a>
                  </li>
                )}
                {contact.whatsapp && (
                  <li>
                    <a
                      href={contact.whatsapp}
                      target="_blank"
                      rel="noreferrer noopener"
                      aria-label="Contact Paul Cabiles on WhatsApp"
                    >
                      <WhatsAppIcon className="footer-contact-icon" />
                    </a>
                  </li>
                )}
                {contact.linkedin && (
                  <li>
                    <a
                      href={contact.linkedin}
                      target="_blank"
                      rel="noreferrer noopener"
                      aria-label="Paul Cabiles on LinkedIn"
                    >
                      <LinkedInIcon className="footer-contact-icon" />
                    </a>
                  </li>
                )}
              </ul>
            )}
          </div>
        </Reveal>
      </Container>
    </footer>
  )
}
