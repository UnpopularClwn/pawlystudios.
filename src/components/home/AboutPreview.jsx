import Section from '../shared/Section.jsx'
import SectionEyebrow from '../shared/SectionEyebrow.jsx'
import Reveal from '../shared/Reveal.jsx'
import Button from '../shared/Button.jsx'
import './AboutPreview.css'

export default function AboutPreview() {
  return (
    <Section background="white" className="about-preview-section" aria-labelledby="about-preview-heading" id="about">
      <Reveal as="div" className="about-preview" preset="content" y={16}>
        <SectionEyebrow>A little about me</SectionEyebrow>
        <h2 id="about-preview-heading">Curiosity usually gets me into things.</h2>
        <p>
          I’m Paul. My career has taken me through executive support, operations, marketing, automation, and eventually
          into building things for the web. Most of that happened the same way: I got curious, started experimenting,
          and went further than I expected.
        </p>
        <p>pawlystudios. is where a lot of that curiosity ends up.</p>
        <Button href="/about" variant="secondary" arrow>
          More About Me
        </Button>
      </Reveal>
    </Section>
  )
}
