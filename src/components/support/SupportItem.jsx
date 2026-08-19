import Reveal from '../shared/Reveal.jsx'

export default function SupportItem({ item }) {
  const { number, title, description } = item

  return (
    <Reveal as="div" className="support-item" preset="content" y={16}>
      <span className="support-item-number">{number}</span>
      <h3 className="support-item-title">{title}</h3>
      <p className="support-item-copy">{description}</p>
      <span className="support-item-line" aria-hidden="true" />
    </Reveal>
  )
}
