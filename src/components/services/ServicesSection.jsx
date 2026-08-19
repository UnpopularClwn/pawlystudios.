import Section from '../shared/Section.jsx'
import SectionEyebrow from '../shared/SectionEyebrow.jsx'
import Reveal from '../shared/Reveal.jsx'
import ServiceRow from './ServiceRow.jsx'
import { services } from '../../data/services.js'
import './Services.css'

export default function ServicesSection() {
  return (
    <Section background="white" className="services-section" aria-label="What I build">
      <Reveal as="div" className="services-intro" preset="content">
        <SectionEyebrow>What I Build</SectionEyebrow>
        <h2 className="services-heading">From simple websites to more custom builds.</h2>
        <p className="services-lead">
          Whether you need a new site, a focused landing page, or something more tailored to how your business
          works, I can help plan and build it from start to launch.
        </p>
      </Reveal>

      <ul className="services-list">
        {services.map((service) => (
          <ServiceRow key={service.number} service={service} />
        ))}
      </ul>
    </Section>
  )
}
