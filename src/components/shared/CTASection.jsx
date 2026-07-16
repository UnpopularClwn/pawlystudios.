import { Link } from 'react-router-dom'
import './CTASection.css'

export default function CTASection({
  title = 'Something keeps getting pushed to the bottom of your list. Let’s fix it.',
  subtitle,
  ctaLabel = 'Get In Touch',
  ctaTo = '/contact',
}) {
  return (
    <section className="cta-block">
      <div className="wrap">
        <h2 className="display">{title}</h2>
        {subtitle && <p>{subtitle}</p>}
        <Link className="btn" to={ctaTo}>
          {ctaLabel}
        </Link>
      </div>
    </section>
  )
}
