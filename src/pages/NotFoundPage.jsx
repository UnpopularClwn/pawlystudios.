import { Link } from 'react-router-dom'
import Seo from '../components/shared/Seo.jsx'
import PageHero from '../components/shared/PageHero.jsx'
import usePageTheme from '../hooks/usePageTheme.js'

export default function NotFoundPage() {
  usePageTheme('precision')

  return (
    <>
      <Seo
        title="Page Not Found — Paul Cabiles"
        description="This page does not exist."
        path="/404"
      />
      <PageHero eyebrow="404" title="That page does not exist.">
        <Link className="btn" to="/" style={{ marginTop: '24px', display: 'inline-flex' }}>
          Back to Home
        </Link>
      </PageHero>
    </>
  )
}
