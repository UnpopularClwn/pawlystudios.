'use client'

import useReveal from '../../hooks/useReveal.js'

export default function Reveal({
  // eslint-disable-next-line no-unused-vars -- Tag is used as a JSX element below
  as: Tag = 'div',
  preset = 'default',
  selector,
  y,
  fromScale,
  className = '',
  children,
  ...rest
}) {
  const ref = useReveal({ preset, selector, y, fromScale })

  return (
    <Tag ref={ref} className={className} {...rest}>
      {children}
    </Tag>
  )
}
