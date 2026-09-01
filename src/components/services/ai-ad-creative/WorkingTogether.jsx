import Section from '../../shared/Section.jsx'
import Reveal from '../../shared/Reveal.jsx'
import { workingTogether } from '../../../data/ai-ad-creative.js'
import './WorkingTogether.css'

export default function WorkingTogether() {
  return (
    <Section background="pine" className="working-together-section" aria-labelledby="working-together-heading">
      <Reveal as="div" className="working-together-panel" preset="content" y={16}>
        <h2 id="working-together-heading" className="working-together-heading">
          {workingTogether.heading}
        </h2>
        <p className="working-together-lead">{workingTogether.lead}</p>
        <p className="working-together-note">{workingTogether.note}</p>
      </Reveal>
    </Section>
  )
}
