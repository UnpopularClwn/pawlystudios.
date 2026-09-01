import { BRAND_NAME } from '../data/brand.js'
import { contact } from '../data/contact.js'
import { SITE_DESCRIPTION } from './seo-config.js'

export function buildLaunchSchema({ siteUrl, isLaunched }) {
  if (!siteUrl || !isLaunched) return null

  const rootUrl = new URL('/', siteUrl).toString()
  const personId = new URL('#paul-cabiles', rootUrl).toString()
  const businessId = new URL('#pawlystudios', rootUrl).toString()
  const websiteId = new URL('#website', rootUrl).toString()
  const webDevelopmentId = new URL('#web-development', rootUrl).toString()
  const aiAdCreativeId = new URL('#ai-ad-creative', rootUrl).toString()

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Person',
        '@id': personId,
        name: 'Paul Cabiles',
        url: rootUrl,
        image: new URL('/images/paul-headshot-about.png', rootUrl).toString(),
        sameAs: [contact.linkedin],
      },
      {
        '@type': 'ProfessionalService',
        '@id': businessId,
        name: BRAND_NAME,
        url: rootUrl,
        description: SITE_DESCRIPTION,
      },
      {
        '@type': 'WebSite',
        '@id': websiteId,
        name: BRAND_NAME,
        url: rootUrl,
        description: SITE_DESCRIPTION,
        inLanguage: 'en',
        creator: { '@id': personId },
        publisher: { '@id': businessId },
      },
      {
        '@type': 'Service',
        '@id': webDevelopmentId,
        name: 'Web Development',
        serviceType: 'Web Development',
        url: new URL('/services/web-development', rootUrl).toString(),
        description: 'Custom business websites, landing pages, web portals, and ongoing website support.',
        provider: { '@id': businessId },
      },
      {
        '@type': 'Service',
        '@id': aiAdCreativeId,
        name: 'AI Ad Creative',
        serviceType: 'AI-generated advertising creative',
        url: new URL('/services/ai-ad-creative', rootUrl).toString(),
        description:
          'Fully AI-generated advertising creative for e-commerce brands and service businesses, from concept through post-production.',
        provider: { '@id': businessId },
      },
    ],
  }
}

export function serializeJsonLd(data) {
  return JSON.stringify(data).replaceAll('<', '\\u003c')
}
