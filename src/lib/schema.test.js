import test from 'node:test'
import assert from 'node:assert/strict'
import { buildLaunchSchema, serializeJsonLd } from './schema.js'

test('launch schema stays unpublished until launch and uses approved entities afterward', () => {
  assert.equal(buildLaunchSchema({ siteUrl: undefined, isLaunched: false }), null)
  assert.equal(buildLaunchSchema({ siteUrl: 'https://example.com', isLaunched: false }), null)

  const schema = buildLaunchSchema({ siteUrl: 'https://example.com', isLaunched: true })
  assert.deepEqual(
    schema['@graph'].map((entity) => entity['@type']),
    ['Person', 'WebSite', 'Service'],
  )
  assert.equal(schema['@graph'][0].name, 'Paul Cabiles')
  assert.equal(schema['@graph'][1].name, 'pawlystudios.')
  assert.equal(serializeJsonLd({ value: '</script>' }).includes('</script>'), false)
})
