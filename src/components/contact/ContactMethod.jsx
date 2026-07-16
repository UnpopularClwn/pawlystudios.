import { Link } from 'react-router-dom'
import './ContactMethod.css'

export default function ContactMethod({ label, href, to, unavailableNote }) {
  if (to) {
    return (
      <Link className="contact-method" to={to}>
        <span className="mono">{label}</span>
      </Link>
    )
  }

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
