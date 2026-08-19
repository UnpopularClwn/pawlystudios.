import './Container.css'

// eslint-disable-next-line no-unused-vars -- Tag is used as a JSX element below
export default function Container({ as: Tag = 'div', className = '', children, ...rest }) {
  return (
    <Tag className={`container ${className}`.trim()} {...rest}>
      {children}
    </Tag>
  )
}
