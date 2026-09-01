import SetSailSection from '../../components/projects/setsail/SetSailSection.jsx'
import Footer from '../../components/footer/Footer.jsx'

export const metadata = {
  title: 'Selected Work',
  description: 'Selected web development work from pawlystudios., including the SetSail client portal.',
}

export default function WorkPage() {
  return (
    <>
      <SetSailSection standalone />
      <Footer />
    </>
  )
}
