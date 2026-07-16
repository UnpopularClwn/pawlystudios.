import SectionHeading from '../shared/SectionHeading.jsx'

export default function HowItWorks() {
  return (
    <section aria-label="How it works">
      <div className="wrap">
        <SectionHeading title="Here is how this works." />
        <div style={{ maxWidth: '70ch', color: 'var(--steel)', display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <p>I do not show up with a package. I ask questions first.</p>
          <p>
            What is falling through the cracks. What takes up your time after hours. What you have
            tried before and why it did not stick.
          </p>
          <p>
            Then I figure out what would actually move the needle and I do it. Could be social
            media. Could be a new website. Could be the systems behind the scenes that keep your
            estimates and follow-ups from slipping. Depends on your business.
          </p>
          <p>You keep running jobs. The rest gets handled.</p>
        </div>
      </div>
    </section>
  )
}
