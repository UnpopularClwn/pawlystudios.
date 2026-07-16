import { Link } from 'react-router-dom'
import SectionHeading from '../shared/SectionHeading.jsx'

export default function ProofSection() {
  return (
    <section aria-label="Proof">
      <div className="wrap">
        <SectionHeading title="I build the fix." />
        <div style={{ maxWidth: '70ch', color: 'var(--steel)', display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <p>
            I have run social media for 30+ clients. Strategy, graphics, posting, reporting. The
            whole thing. I built a client portal from scratch that replaced a project management
            tool nobody wanted to use. I have automated repetitive processes that used to eat hours
            out of the day.
          </p>
          <p>Not slides. Not proposals. Actual work that is live right now.</p>
        </div>
        <Link className="proof-link mono" to="/portfolio" style={{ display: 'inline-block', marginTop: '24px', color: 'var(--amber)' }}>
          See the work &rarr;
        </Link>
      </div>
    </section>
  )
}
