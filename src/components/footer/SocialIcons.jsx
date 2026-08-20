// Small local inline SVGs — no icon library needed for three marks.
// Decorative inside their link (the link itself carries the aria-label).

export function MailIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false" {...props}>
      <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.6" />
      <path d="M4 6.5L12 13L20 6.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function WhatsAppIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false" {...props}>
      <path
        d="M12 3a9 9 0 0 0-7.75 13.55L3 21l4.6-1.21A9 9 0 1 0 12 3Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path
        d="M8.6 8.3c.18-.4.37-.41.54-.41.14 0 .3 0 .43.01.15 0 .34-.05.53.4.2.48.68 1.65.74 1.77.06.13.1.28.02.44-.08.16-.12.26-.24.4-.12.14-.25.31-.36.42-.12.12-.24.25-.1.5.13.24.6 1 1.28 1.62.88.79 1.62 1.04 1.87 1.16.25.12.4.1.54-.06.15-.16.62-.72.79-.97.16-.24.32-.2.54-.12.22.08 1.4.66 1.64.78.24.12.4.18.46.28.06.12.06.65-.16 1.28-.22.62-1.28 1.18-1.78 1.25-.46.07-1.03.1-1.66-.1-.38-.13-.87-.29-1.5-.57-2.64-1.14-4.36-3.82-4.5-4-.14-.18-1.13-1.5-1.13-2.86 0-1.36.71-2.02.97-2.3Z"
        fill="currentColor"
      />
    </svg>
  )
}

export function LinkedInIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false" {...props}>
      <rect x="3.5" y="3.5" width="17" height="17" rx="2.5" stroke="currentColor" strokeWidth="1.6" />
      <path
        d="M8 10.5V16.5M8 7.75V7.76M11.75 16.5V13.2C11.75 11.9 12.4 11 13.6 11C14.75 11 15.25 11.85 15.25 13.2V16.5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
