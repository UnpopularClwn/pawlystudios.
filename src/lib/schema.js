// Structured data (JSON-LD) scaffolding.
//
// Intended schema types for this site, to be authored once real content/copy exists:
//   - Person              (Paul Cabiles as the entity)
//   - WebSite             (site-level entity + search action if applicable)
//   - ProfessionalService (or Service) for the website design/dev offering
//   - CreativeWork or SoftwareApplication for the SetSail case study
//
// Do not populate these with placeholder or invented data. Call injectJsonLd only
// once a schema object is backed by real, approved content.

export function injectJsonLd(id, data) {
  if (!data) return

  let el = document.getElementById(id)
  if (!el) {
    el = document.createElement('script')
    el.type = 'application/ld+json'
    el.id = id
    document.head.appendChild(el)
  }
  el.textContent = JSON.stringify(data)
}

export function removeJsonLd(id) {
  document.getElementById(id)?.remove()
}
