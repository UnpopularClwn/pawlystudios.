import BrandHero from '../components/home/BrandHero.jsx'
import PrimaryServices from '../components/home/PrimaryServices.jsx'
import FeaturedWorkPreview from '../components/home/FeaturedWorkPreview.jsx'
import AboutPreview from '../components/home/AboutPreview.jsx'
import HomeCta from '../components/home/HomeCta.jsx'
import Footer from '../components/footer/Footer.jsx'

export default function HomePage() {
  return (
    <>
      <BrandHero />
      <PrimaryServices />
      <FeaturedWorkPreview />
      <AboutPreview />
      <HomeCta />
      <Footer />
    </>
  )
}
