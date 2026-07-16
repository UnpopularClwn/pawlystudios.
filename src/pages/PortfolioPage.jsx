import Seo from '../components/shared/Seo.jsx'
import PageHero from '../components/shared/PageHero.jsx'
import CaseStudySection from '../components/portfolio/CaseStudySection.jsx'
import MoreWorkNotice from '../components/portfolio/MoreWorkNotice.jsx'
import CTASection from '../components/shared/CTASection.jsx'
import { PROJECTS } from '../data/projects.js'

export default function PortfolioPage() {
  return (
    <>
      <Seo
        title="Portfolio — Proof"
        description="Real work. Live projects. Social media for 30+ clients and a client portal built from scratch."
        path="/portfolio"
      />
      <PageHero title="Proof." lede="Not mockups. Not concepts. Work that is live." />
      <section aria-label="Case studies">
        <div className="wrap" style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
          {PROJECTS.map((project) => (
            <CaseStudySection key={project.slug} project={project} />
          ))}
          <MoreWorkNotice />
        </div>
      </section>
      <CTASection ctaLabel="Let's Talk" />
    </>
  )
}
