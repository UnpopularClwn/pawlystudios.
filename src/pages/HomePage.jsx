import Seo from '../components/shared/Seo.jsx'
import Hero from '../components/home/Hero.jsx'
import CredibilityStrip from '../components/home/CredibilityStrip.jsx'
import ProblemSection from '../components/home/ProblemSection.jsx'
import HowItWorks from '../components/home/HowItWorks.jsx'
import ProofSection from '../components/home/ProofSection.jsx'
import FeaturedWork from '../components/home/FeaturedWork.jsx'
import AboutSection from '../components/home/AboutSection.jsx'
import TrustedPartnerCard from '../components/home/TrustedPartnerCard.jsx'
import CTASection from '../components/shared/CTASection.jsx'

export default function HomePage() {
  return (
    <>
      <Seo
        title="Paul Cabiles — You Run the Jobs. I Handle the Rest."
        description="Marketing, social media, websites, and operations for home service businesses. You are too busy running jobs to deal with the rest. I take it off your plate."
        path="/"
      />
      <Hero />
      <CredibilityStrip />
      <ProblemSection />
      <HowItWorks />
      <ProofSection />
      <FeaturedWork />
      <AboutSection />
      <TrustedPartnerCard />
      <CTASection />
    </>
  )
}
