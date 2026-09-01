import Section from '../../shared/Section.jsx'
import SectionEyebrow from '../../shared/SectionEyebrow.jsx'
import Reveal from '../../shared/Reveal.jsx'
import SetSailFolder from './SetSailFolder.jsx'
import { setsail } from '../../../data/setsail.js'
import './SetSail.css'

export default function SetSailSection() {
  return (
    <Section background="sand" className="setsail-section" aria-labelledby="setsail-heading" id="work">
      <Reveal
        as="div"
        className="setsail-layout"
        selector=".setsail-intro, .setsail-build, .setsail-folder-block"
        preset="content"
        y={20}
      >
        <div className="setsail-copy">
          <div className="setsail-intro">
            <SectionEyebrow>{setsail.eyebrow}</SectionEyebrow>
            <h2 className="setsail-heading" id="setsail-heading">
              {setsail.name}
            </h2>
            <p className="setsail-description">{setsail.description}</p>
          </div>

          <div className="setsail-build">
            <p className="setsail-build-label">{setsail.build.label}</p>
            <p className="setsail-build-copy">{setsail.build.copy}</p>
            <ul className="setsail-stack">
              {setsail.build.stack.map((item) => (
                <li className="setsail-stack-item" key={item}>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="setsail-folder-block">
          <SetSailFolder />
        </div>
      </Reveal>
    </Section>
  )
}
