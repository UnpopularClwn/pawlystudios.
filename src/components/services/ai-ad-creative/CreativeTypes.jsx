import Section from '../../shared/Section.jsx'
import SectionEyebrow from '../../shared/SectionEyebrow.jsx'
import Reveal from '../../shared/Reveal.jsx'
import { creativeTypes } from '../../../data/ai-ad-creative.js'
import './CreativeTypes.css'

export default function CreativeTypes() {
  return (
    <Section background="white" className="creative-types-section" aria-label="Creative types" id="creative-types">
      <Reveal as="div" className="creative-types-intro" preset="content">
        <SectionEyebrow>Creative Types</SectionEyebrow>
        <h2 className="creative-types-heading">Four types of ad creative.</h2>
        <p className="creative-types-lead">
          Focused on advertising, across video, animation, and static formats.
        </p>
      </Reveal>

      <Reveal as="ul" className="creative-types-grid" selector=":scope > .creative-type-card" preset="feature" y={18}>
        {creativeTypes.map((type) => (
          <li className="creative-type-card" key={type.title}>
            <h3 className="creative-type-title">{type.title}</h3>
            <p className="creative-type-description">{type.description}</p>
          </li>
        ))}
      </Reveal>
    </Section>
  )
}
