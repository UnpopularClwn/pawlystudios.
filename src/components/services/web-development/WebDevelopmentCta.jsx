import Section from '../../shared/Section.jsx'
import Reveal from '../../shared/Reveal.jsx'
import Button from '../../shared/Button.jsx'
import './WebDevelopmentCta.css'

export default function WebDevelopmentCta() {
  return (
    <Section background="pine" className="web-development-cta" aria-labelledby="web-development-cta-heading">
      <Reveal as="div" className="web-development-cta-panel" preset="content" y={16}>
        <h2 id="web-development-cta-heading" className="web-development-cta-heading">
          Ready to start your project?
        </h2>
        <p className="web-development-cta-lead">
          Tell me about your business and what you&rsquo;re looking to build, and I&rsquo;ll help you plan the next
          step.
        </p>
        <Button href="/contact" variant="primary" arrow className="web-development-cta-button">
          Start a Project
        </Button>
      </Reveal>
    </Section>
  )
}
