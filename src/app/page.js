import Hero from '../components/hero/Hero.jsx'
import SetSailSection from '../components/projects/setsail/SetSailSection.jsx'
import ServicesSection from '../components/services/ServicesSection.jsx'
import ProcessSection from '../components/process/ProcessSection.jsx'
import SupportSection from '../components/support/SupportSection.jsx'
import PricingSection from '../components/pricing/PricingSection.jsx'
import MaintenanceSection from '../components/maintenance/MaintenanceSection.jsx'
import ToolsSection from '../components/tools/ToolsSection.jsx'
import AboutSection from '../components/about/AboutSection.jsx'
import ContactSection from '../components/contact/ContactSection.jsx'
import Footer from '../components/footer/Footer.jsx'

export default function HomePage() {
  return (
    <>
      <Hero />
      <SetSailSection />
      <ServicesSection />
      <ProcessSection />
      <SupportSection />
      <PricingSection />
      <MaintenanceSection />
      <ToolsSection />
      <AboutSection />
      <ContactSection />
      <Footer />
    </>
  )
}
