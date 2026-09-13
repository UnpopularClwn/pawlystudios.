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
  {
    name: 'AI Ad Creative',
    description:
      'AI-generated advertising creative built through research, experimentation, creative direction, and production.',
    href: '/services/ai-ad-creative',
    linkLabel: 'See AI Creative',
  },
]

export default function PrimaryServices() {
  return (
    <Section background="white" className="primary-services-section" aria-labelledby="primary-services-heading" id="capabilities">
      <Reveal as="div" className="primary-services-intro" preset="content">
        <SectionEyebrow>What I Do</SectionEyebrow>
        <h2 id="primary-services-heading">Two connected areas of practice.</h2>
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
