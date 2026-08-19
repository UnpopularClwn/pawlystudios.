import Reveal from '../shared/Reveal.jsx'

export default function ServiceRow({ service }) {
  const { number, title, description } = service

  return (
    <Reveal
      as="li"
      className="service-row"
      y={16}
      selector=".service-number, .service-title, .service-description"
    >
      <span className="service-number" aria-hidden="true">
        {number}
      </span>
      <h3 className="service-title">{title}</h3>
      <p className="service-description">{description}</p>
    </Reveal>
  )
}
