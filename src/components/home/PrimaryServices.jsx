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
  },
  {
    name: 'AI Ad Creative',
    description:
      'AI-generated advertising creative built through research, experimentation, creative direction, and production.',
    href: '/services/ai-ad-creative',
  },
]

export default function PrimaryServices() {
  return (
    <Section background="white" className="primary-services-section" aria-labelledby="primary-services-heading" id="services">
      <Reveal as="div" className="primary-services-intro" preset="content">
        <SectionEyebrow>Primary Services</SectionEyebrow>
        <h2 id="primary-services-heading">Two ways to work together.</h2>
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
              Explore {service.name}
              <span aria-hidden="true">→</span>
            </Link>
          </article>
        ))}
      </Reveal>
    </Section>
  )
}
