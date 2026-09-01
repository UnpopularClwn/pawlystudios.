import Section from '../../shared/Section.jsx'
import SectionEyebrow from '../../shared/SectionEyebrow.jsx'
import Reveal from '../../shared/Reveal.jsx'
import './OrganicToPaidSection.css'

export default function OrganicToPaidSection() {
  return (
    <Section background="sand" className="organic-to-paid-section" aria-labelledby="organic-to-paid-heading">
      <Reveal as="div" className="organic-to-paid-copy" preset="content">
        <SectionEyebrow>From Organic to Paid</SectionEyebrow>
        <h2 id="organic-to-paid-heading" className="organic-to-paid-heading">
          The strategy started with organic social.
        </h2>
        <p>
          Before I started applying this approach to AI-generated ad creative, I used the same core thinking in
          organic social media: study what breaks through the feed, understand why it works, and use those patterns
          to guide what gets created next.
        </p>
        <p>
          Paid advertising changes the signals, but not the principle. Instead of looking only at views, engagement,
          retention, and organic outliers, I study advertising patterns, hooks, creative structures, long-running
          concepts, offer framing, and campaign results when available to build a more informed direction before
          production begins.
        </p>
      </Reveal>
    </Section>
  )
}
