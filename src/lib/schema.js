import { BRAND_NAME } from '../data/brand.js'
import { contact } from '../data/contact.js'
import { SITE_DESCRIPTION } from './seo-config.js'

export function buildLaunchSchema({ siteUrl, isLaunched }) {
  if (!siteUrl || !isLaunched) return null

  const rootUrl = new URL('/', siteUrl).toString()
  const personId = new URL('#paul-cabiles', rootUrl).toString()
  const websiteId = new URL('#website', rootUrl).toString()
  const serviceId = new URL('#website-development', rootUrl).toString()

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Person',
        '@id': personId,
        name: 'Paul Cabiles',
        jobTitle: 'Web Developer',
        url: rootUrl,
        image: new URL('/images/paul-headshot-about.png', rootUrl).toString(),
        sameAs: [contact.linkedin],
      },
      {
        '@type': 'WebSite',
        '@id': websiteId,
        name: BRAND_NAME,
        url: rootUrl,
        description: SITE_DESCRIPTION,
        inLanguage: 'en',
        creator: { '@id': personId },
      },
      {
        '@type': 'Service',
        '@id': serviceId,
        name: 'Custom Website Development',
        serviceType: 'Website development and ongoing website support',
        url: new URL('#services', rootUrl).toString(),
        description: SITE_DESCRIPTION,
        provider: { '@id': personId },
      },
    ],
  }
}

export function serializeJsonLd(data) {
  return JSON.stringify(data).replaceAll('<', '\\u003c')
}
