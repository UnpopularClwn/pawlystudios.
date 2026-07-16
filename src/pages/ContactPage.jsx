import Seo from '../components/shared/Seo.jsx'
import PageHero from '../components/shared/PageHero.jsx'
import ContactForm from '../components/contact/ContactForm.jsx'
import ContactMethod from '../components/contact/ContactMethod.jsx'
import usePageTheme from '../hooks/usePageTheme.js'
import { CONTACT } from '../data/contact.js'

export default function ContactPage() {
  usePageTheme('personal')

  return (
    <>
      <Seo
        title="Contact — What Keeps Getting Pushed to Tomorrow?"
        description="No pitch. No pressure. Tell me what is not getting done and I will tell you if I can help."
        path="/contact"
      />
      <PageHero
        title="What keeps getting pushed to tomorrow?"
        lede="Tell me what is not getting done. I will tell you if I can help. No pitch."
      />
      <section aria-label="Contact form">
        <div className="wrap">
          <ContactForm />
        </div>
      </section>
      <section aria-label="Other ways to reach me">
        <div className="wrap">
          <p style={{ color: 'var(--steel)', marginBottom: '24px', maxWidth: '60ch' }}>
            I will get back to you within 24 hours.
          </p>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '16px',
              maxWidth: '620px',
            }}
          >
            <ContactMethod label="LINKEDIN" href={CONTACT.linkedin} />
            <ContactMethod label="RESUME" to="/resume" />
            <ContactMethod
              label="WHATSAPP"
              href={CONTACT.whatsapp}
              unavailableNote="WhatsApp number coming soon."
            />
          </div>
        </div>
      </section>
    </>
  )
}
