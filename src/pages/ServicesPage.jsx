import Seo from '../components/shared/Seo.jsx'
import PageHero from '../components/shared/PageHero.jsx'
import SolutionCard from '../components/services/SolutionCard.jsx'
import QualificationSection from '../components/services/QualificationSection.jsx'
import CTASection from '../components/shared/CTASection.jsx'
import usePageTheme from '../hooks/usePageTheme.js'
import { SERVICES } from '../data/services.js'

export default function ServicesPage() {
  usePageTheme('systems')

  return (
    <>
      <Seo
        title="Services — The Stuff That Never Gets Done"
        description="Social media, websites, operations, and custom tools for contractors and small businesses who do not have time to handle it themselves."
        path="/services"
      />
      <PageHero
        title="The stuff that never gets done."
        lede="You did not start this business to manage an Instagram account or redesign your website. But it needs to happen. Here is what I take off your plate."
      />
      <section aria-label="Solutions">
        <div className="wrap" style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          {SERVICES.map((service, index) => (
            <SolutionCard key={service.slug} service={service} index={index} />
          ))}
        </div>
      </section>
      <QualificationSection />
      <CTASection
        title="I do not quote prices without understanding what you actually need."
        subtitle="Tell me what is not getting done and we will go from there."
        ctaLabel="Let's Talk About It"
      />
    </>
  )
}
