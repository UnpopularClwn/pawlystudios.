import WebDevelopmentHero from '../../../components/services/web-development/WebDevelopmentHero.jsx'
import WebDevelopmentCta from '../../../components/services/web-development/WebDevelopmentCta.jsx'
import FeaturedWorkPreview from '../../../components/home/FeaturedWorkPreview.jsx'
import ServicesSection from '../../../components/services/ServicesSection.jsx'
import ProcessSection from '../../../components/process/ProcessSection.jsx'
import MaintenanceSection from '../../../components/maintenance/MaintenanceSection.jsx'
import PricingSection from '../../../components/pricing/PricingSection.jsx'
import ToolsSection from '../../../components/tools/ToolsSection.jsx'
import Footer from '../../../components/footer/Footer.jsx'

export const metadata = {
  title: 'Web Development',
  description:
    'Custom business websites, landing pages, web portals, and ongoing website support, planned and built by pawlystudios.',
}

export default function WebDevelopmentPage() {
  return (
    <>
      <WebDevelopmentHero />
      <FeaturedWorkPreview />
      <ServicesSection />
      <ProcessSection />
      <MaintenanceSection />
      <PricingSection />
      <ToolsSection />
      <WebDevelopmentCta />
      <Footer />
    </>
  )
}
