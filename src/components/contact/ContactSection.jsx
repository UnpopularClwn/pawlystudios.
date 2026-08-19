import Section from '../shared/Section.jsx'
import SectionEyebrow from '../shared/SectionEyebrow.jsx'
import Reveal from '../shared/Reveal.jsx'
import InquiryForm from './InquiryForm.jsx'
import { contact } from '../../data/contact.js'
import './Contact.css'

export default function ContactSection() {
  return (
    <Section background="sand" className="contact-section" aria-label="Contact" id="contact">
      <div className="contact-grid">
        <Reveal as="div" className="contact-intro" preset="content">
          <SectionEyebrow>Ready to talk?</SectionEyebrow>
          <h2 className="contact-heading">Have a website in mind? Tell me about it.</h2>
          <p className="contact-lead">
            Send me a few details about what you&rsquo;re looking to build. I&rsquo;ll take a look and we can
            figure out the right next step.
          </p>
          {(contact.email || contact.whatsapp || contact.linkedin) && (
            <ul className="contact-direct-links">
              {contact.email && (
                <li>
                  <a href={`mailto:${contact.email}`}>{contact.email}</a>
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
        </Reveal>

        <Reveal
          as="div"
          className="contact-form-surface"
          preset="feature"
          y={20}
          fromScale={0.99}
          selector=".field-group, .form-actions"
        >
          <InquiryForm />
        </Reveal>
      </div>
    </Section>
  )
}
