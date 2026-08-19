import Container from './Container.jsx'
import './Section.css'

const BACKGROUNDS = {
  white: 'section--white',
  sand: 'section--sand',
  pine: 'section--pine',
}

export default function Section({ background = 'white', className = '', containerClassName = '', children, ...rest }) {
  const bgClass = BACKGROUNDS[background] ?? BACKGROUNDS.white

  return (
    <section className={`section ${bgClass} ${className}`.trim()} {...rest}>
      <Container className={containerClassName}>{children}</Container>
    </section>
  )
}
