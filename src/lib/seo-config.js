// Central place for site-identity constants the Metadata API and future
// JSON-LD (see lib/schema.js) both read from.
//
// SITE_IS_LAUNCHED gates indexing: flip to true once the full one-page site
// (not just the hero) is ready for search engines. Do not flip this based on
// NODE_ENV alone — `next build` sets NODE_ENV=production for local builds too.
export const SITE_IS_LAUNCHED = false

export const SITE_NAME = 'Paul Cabiles'
export const SITE_DESCRIPTION =
  'Website design and development for businesses that need a fast, functional site and ongoing support after launch.'

// Intentionally unset until a production domain is assigned — do not fabricate one.
// Once known, set NEXT_PUBLIC_SITE_URL and read it here for `metadataBase`.
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || undefined
