import { inter, generalSans } from './fonts.js'
import { SITE_NAME, SITE_DESCRIPTION, SITE_URL, SITE_IS_LAUNCHED } from '../lib/seo-config.js'
import '../styles/global.css'

export const metadata = {
  ...(SITE_URL ? { metadataBase: new URL(SITE_URL) } : {}),
  title: {
    default: SITE_NAME,
    template: `%s — ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  alternates: {
    canonical: '/',
  },
  robots: SITE_IS_LAUNCHED
    ? { index: true, follow: true }
    : { index: false, follow: false },
  openGraph: {
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    siteName: SITE_NAME,
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${generalSans.variable}`}>
      <body>
        <a className="skip-link" href="#main-content">
          Skip to content
        </a>
        <main id="main-content">{children}</main>
      </body>
    </html>
  )
}
