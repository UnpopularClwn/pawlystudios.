import test from 'node:test'
import assert from 'node:assert/strict'
import { buildLaunchSchema, serializeJsonLd } from './schema.js'

test('launch schema stays unpublished until launch and uses approved entities afterward', () => {
  assert.equal(buildLaunchSchema({ siteUrl: undefined, isLaunched: false }), null)
  assert.equal(buildLaunchSchema({ siteUrl: 'https://example.com', isLaunched: false }), null)

  const schema = buildLaunchSchema({ siteUrl: 'https://example.com', isLaunched: true })
  assert.deepEqual(
    schema['@graph'].map((entity) => entity['@type']),
    ['Person', 'ProfessionalService', 'WebSite', 'Service', 'Service'],
  )
  assert.equal(schema['@graph'][0].name, 'Paul Cabiles')
  assert.equal(schema['@graph'][1].name, 'pawlystudios.')
  assert.deepEqual(
    schema['@graph'].filter((entity) => entity['@type'] === 'Service').map((entity) => entity.name),
    ['Web Development', 'AI Ad Creative'],
  )
  assert.equal(schema['@graph'][3].provider['@id'], 'https://example.com/#pawlystudios')
  assert.equal(schema['@graph'][4].url, 'https://example.com/services/ai-ad-creative')
  assert.equal(serializeJsonLd({ value: '</script>' }).includes('</script>'), false)
})
