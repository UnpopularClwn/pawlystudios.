import ContactSection from '../../components/contact/ContactSection.jsx'
import Footer from '../../components/footer/Footer.jsx'

export const metadata = {
  title: 'Contact',
  description: 'Start a web development or AI ad creative project with pawlystudios.',
}

export default function ContactPage() {
  return (
    <>
      <ContactSection standalone />
      <Footer />
    </>
  )
}
