import { Link } from 'react-router-dom'
import SectionHeading from '../shared/SectionHeading.jsx'
import useGsapReveal from '../../hooks/useGsapReveal.js'

export default function ProofSection() {
  const copyRef = useGsapReveal({ preset: 'f1', y: 14 })

  return (
    <section aria-label="Proof" data-theme="proof">
      <div className="wrap">
        <SectionHeading title="I build the fix." />
        <div ref={copyRef} style={{ maxWidth: '70ch', color: 'var(--steel)', display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <p>
            I have run social media for 30+ clients. Strategy, graphics, posting, reporting. The
            whole thing. I built a client portal from scratch that replaced a project management
            tool nobody wanted to use. I automated a process that ate 3 hours a day and got it down
            to 20 minutes.
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
