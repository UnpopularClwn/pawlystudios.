import Section from '../shared/Section.jsx'
import Reveal from '../shared/Reveal.jsx'
import Button from '../shared/Button.jsx'
import './AboutPreview.css'

export default function AboutPreview() {
  return (
    <Section background="white" className="about-preview-section" aria-labelledby="about-preview-heading" id="about">
      <Reveal as="div" className="about-preview" preset="content" y={16}>
        <h2 id="about-preview-heading">Paul is the person behind pawlystudios.</h2>
        <p>
          I work directly across web development and AI ad creative, taking a practical, hands-on role from the first
          idea through delivery.
        </p>
        <Button href="/about" variant="secondary" arrow>
          More About Me
        </Button>
      </Reveal>
    </Section>
  )
}
