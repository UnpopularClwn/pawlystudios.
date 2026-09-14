import Link from 'next/link'
import Section from '../shared/Section.jsx'
import SectionEyebrow from '../shared/SectionEyebrow.jsx'
import Reveal from '../shared/Reveal.jsx'
import './PrimaryServices.css'

const primaryServices = [
  {
    name: 'Web Development',
    description:
      'Websites, web applications, and digital tools built around real problems and how people actually use them.',
    href: '/services/web-development',
    linkLabel: 'See Web Work',
  },
]

export default function PrimaryServices() {
  return (
    <Section background="white" className="primary-services-section" aria-labelledby="primary-services-heading" id="capabilities">
      <Reveal as="div" className="primary-services-intro" preset="content">
        <SectionEyebrow>What I Do</SectionEyebrow>
        <h2 id="primary-services-heading">Where I spend most of my time.</h2>
      </Reveal>

      <Reveal
        as="div"
        className="service-gateways"
        selector=":scope > .service-gateway"
        preset="content"
        y={16}
      >
        {primaryServices.map((service) => (
          <article className="service-gateway" key={service.href}>
            <h3>{service.name}</h3>
            <p>{service.description}</p>
            <Link href={service.href} className="service-gateway-link">
              {service.linkLabel}
              <span aria-hidden="true">→</span>
            </Link>
          </article>
        ))}
      </Reveal>
    </Section>
  )
}
