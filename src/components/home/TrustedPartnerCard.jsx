import { TRUSTED_PARTNER } from '../../data/contact.js'
import SectionHeading from '../shared/SectionHeading.jsx'
import './TrustedPartnerCard.css'

export default function TrustedPartnerCard() {
  const hasPartnerName = Boolean(TRUSTED_PARTNER.name)

  return (
    <section aria-label="Trusted partner" data-theme="personal">
      <div className="wrap">
        <SectionHeading title="Some problems need a specialist." />
        <div className="partner-card">
          <div className="partner-avatar" aria-hidden="true">
            {hasPartnerName ? TRUSTED_PARTNER.name.charAt(0) : '?'}
          </div>
          <div>
            <p className="partner-name">
              {hasPartnerName ? TRUSTED_PARTNER.name : 'Accounting & bookkeeping partner (name pending)'}
            </p>
            <p className="partner-specialty">{TRUSTED_PARTNER.specialty}</p>
            <p className="partner-body">
              When a project needs accounting or bookkeeping, that is not my lane. I bring in a
              trusted partner I already work with instead of guessing at it myself.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
