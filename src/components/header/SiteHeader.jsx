import Container from '../shared/Container.jsx'
import SiteNavigation from './SiteNavigation.jsx'
import './SiteHeader.css'

export default function SiteHeader() {
  return (
    <header className="site-header">
      <Container>
        <SiteNavigation />
      </Container>
    </header>
  )
}
