import Section from '../shared/Section.jsx'
import SectionEyebrow from '../shared/SectionEyebrow.jsx'
import ProfileCardExperience from './ProfileCardExperience.jsx'
import './About.css'

export default function AboutSection() {
  return (
    <Section background="pine" className="about-section" containerClassName="about-layout" aria-labelledby="about-heading">
      <div className="about-copy">
        <SectionEyebrow>BEHIND PAWLYSTUDIOS.</SectionEyebrow>
        <h2 id="about-heading">Hi, I&apos;m Paul.</h2>
        <p className="about-supporting">
          I plan, build, test, and launch the websites you see here. I work directly with clients from the first
          questionnaire through handoff and ongoing support.
        </p>
      </div>

      <ProfileCardExperience />
    </Section>
  )
}
