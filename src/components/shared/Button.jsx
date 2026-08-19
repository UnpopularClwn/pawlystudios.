import './Button.css'

export default function Button({
  variant = 'primary',
  href,
  arrow = false,
  className = '',
  children,
  ...rest
}) {
  const classes = `btn btn--${variant} ${className}`.trim()
  const content = (
    <>
      <span>{children}</span>
      {arrow && variant === 'primary' && (
        <span className="btn__arrow" aria-hidden="true">
          →
        </span>
      )}
    </>
  )

  if (href) {
    return (
      <a className={classes} href={href} {...rest}>
        {content}
      </a>
    )
  }

  return (
    <button type="button" className={classes} {...rest}>
      {content}
    </button>
  )
}
