import Section from '../shared/Section.jsx'
import Button from '../shared/Button.jsx'
import './HomeCta.css'

export default function HomeCta() {
  return (
    <Section background="pine" className="home-cta-section" aria-labelledby="home-cta-heading">
      <div className="home-cta">
        <h2 id="home-cta-heading">Have something in mind?</h2>
        <Button href="/contact" arrow>
          Start a Project
        </Button>
      </div>
    </Section>
  )
}
