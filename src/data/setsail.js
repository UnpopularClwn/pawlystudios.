// SetSail MVP — Featured Build section content.
//
// Do not populate any field below with invented facts, metrics, technologies,
// or claims. Every value here must come from the PM/client. Fields left `null`
// or empty render an honest "pending" state in the UI instead of fabricated
// content — see components/projects/setsail/.
//
// See "Needs Your Input" in project docs once populated.
export const setsail = {
  name: 'SetSail MVP',

  // One or two sentence description of what SetSail is. Pending approved copy.
  description: null,

  // Data-driven category tags (e.g. "Web App", "MVP"). Pending PM input —
  // do not invent. Render nothing until this has real entries.
  tags: [],

  // Compact build-details blocks: { label, value }. `value: null` renders a
  // pending state for that specific line rather than the whole block.
  buildDetails: [
    { label: 'What it is', value: null },
    { label: 'What Paul built', value: null },
    { label: 'Build type', value: null },
    { label: 'Key functionality', value: null },
  ],

  // Screenshot slots. `src: null` renders an intentional empty development
  // state (never a fabricated mockup). `aspect` controls the frame's shape.
  screenshots: {
    primary: { id: 'primary', label: 'Primary interface', alt: null, aspect: 'wide', src: null },
    supporting: [
      { id: 'supporting-1', label: 'Interface detail', alt: null, aspect: 'wide', src: null },
      { id: 'supporting-2', label: 'Interface detail', alt: null, aspect: 'wide', src: null },
      { id: 'supporting-3', label: 'Mobile view', alt: null, aspect: 'mobile', src: null },
    ],
  },

  // Only rendered when set — no dead buttons.
  externalUrl: null,
  ctaLabel: 'View Project',
}
