import SectionHeading from '../shared/SectionHeading.jsx'
import useGsapReveal from '../../hooks/useGsapReveal.js'

export default function ProblemSection() {
  const copyRef = useGsapReveal({ preset: 'flight', y: 18 })

  return (
    <section aria-label="Sound familiar" data-theme="problem">
      <div className="wrap">
        <SectionHeading title="Sound familiar?" />
        <div ref={copyRef} style={{ maxWidth: '70ch', color: 'var(--steel)', display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <p>You are booked. Referrals keep the phone ringing. Good.</p>
          <p>
            But pull up your website on your phone right now. Does it look like a business someone
            would trust with a $15,000 roof? Check your Instagram. When was the last post? Three
            months ago? Six?
          </p>
          <p>
            The guy two miles away does the same work you do. Maybe worse. But his website is clean,
            he posts every week, and he responds to every Google review. He is getting calls that
            should be yours.
          </p>
          <p>
            You have known this is a problem for a while. But you are on a roof by 7am and by the
            time you get home, marketing is the last thing you want to think about.
          </p>
        </div>
      </div>
    </section>
  )
}
