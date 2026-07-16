import './ContactMethod.css'

export default function ContactMethod({ label, href, unavailableNote }) {
  if (!href) {
    return (
      <div className="contact-method unavailable">
        <span className="mono">{label}</span>
        <p>{unavailableNote}</p>
      </div>
    )
  }

  return (
    <a className="contact-method" href={href} target="_blank" rel="noopener noreferrer">
      <span className="mono">{label}</span>
    </a>
  )
}
