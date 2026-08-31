import Section from '../shared/Section.jsx'
import SectionEyebrow from '../shared/SectionEyebrow.jsx'
import Button from '../shared/Button.jsx'
import ProfileCardExperience from './ProfileCardExperience.jsx'
import { BRAND_NAME } from '../../data/brand.js'
import './About.css'

export default function AboutSection({ standalone = false }) {
  return (
    <Section
      background="pine"
      className="about-section"
      containerClassName="about-layout"
      aria-labelledby="about-heading"
      id="about"
    >
      <div className="about-copy">
        <SectionEyebrow>
          Behind <span className="about-brand-name">{BRAND_NAME}</span>
        </SectionEyebrow>
        {standalone ? <h1 id="about-heading">Hi, I&apos;m Paul.</h1> : <h2 id="about-heading">Hi, I&apos;m Paul.</h2>}
        <p className="about-supporting">
          {standalone
            ? 'I plan, build, test, and launch the websites you see here. I work directly with clients from the first questionnaire through handoff and ongoing support.'
            : 'I plan, build, test, and launch the websites you see here.'}
        </p>
        {!standalone && (
          <Button href="/about" arrow className="about-route-cta">
            More About Me
          </Button>
        )}
      </div>

      <ProfileCardExperience />
    </Section>
  )
}
