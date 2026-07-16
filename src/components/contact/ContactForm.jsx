import { useState } from 'react'
import { submitContactForm } from '../../lib/submitContactForm.js'
import { CONTACT } from '../../data/contact.js'
import './ContactForm.css'

const INITIAL_STATE = {
  name: '',
  business: '',
  email: '',
  phone: '',
  problem: '',
}

function validate(values) {
  const errors = {}
  if (!values.name.trim()) errors.name = 'Your name is required.'
  if (!values.business.trim()) errors.business = 'Business name is required.'
  if (!values.email.trim()) {
    errors.email = 'Email is required.'
  } else if (!/^\S+@\S+\.\S+$/.test(values.email)) {
    errors.email = 'Enter a valid email address.'
  }
  if (!values.problem.trim()) {
    errors.problem = 'Tell me what you are putting off so I know if I can help.'
  }
  return errors
}

export default function ContactForm() {
  const [values, setValues] = useState(INITIAL_STATE)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle')

  function handleChange(event) {
    const { name, value } = event.target
    setValues((prev) => ({ ...prev, [name]: value }))
  }

  async function handleSubmit(event) {
    event.preventDefault()
    const validationErrors = validate(values)
    setErrors(validationErrors)
    if (Object.keys(validationErrors).length > 0) return

    setStatus('submitting')
    try {
      await submitContactForm(values)
      setStatus('success')
    } catch (error) {
      console.error('Contact form submission failed:', error)
      setStatus('unavailable')
    }
  }

  if (status === 'success') {
    return (
      <div className="form-message success" role="status">
        <p>Thanks. I will get back to you within 24 hours.</p>
      </div>
    )
  }

  if (status === 'unavailable') {
    return (
      <div className="form-message unavailable" role="alert">
        <p>
          The form is not connected to email yet, so I could not send this. Email me directly at{' '}
          <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a> or reach me on{' '}
          <a href={CONTACT.linkedin} target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          .
        </p>
      </div>
    )
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit} noValidate>
      <div className="form-row">
        <label htmlFor="name">Your name</label>
        <input
          id="name"
          name="name"
          type="text"
          autoComplete="name"
          value={values.name}
          onChange={handleChange}
          aria-invalid={Boolean(errors.name)}
          aria-describedby={errors.name ? 'name-error' : undefined}
        />
        {errors.name && (
          <p className="field-error" id="name-error">
            {errors.name}
          </p>
        )}
      </div>

      <div className="form-row">
        <label htmlFor="business">Business name</label>
        <input
          id="business"
          name="business"
          type="text"
          autoComplete="organization"
          value={values.business}
          onChange={handleChange}
          aria-invalid={Boolean(errors.business)}
          aria-describedby={errors.business ? 'business-error' : undefined}
        />
        {errors.business && (
          <p className="field-error" id="business-error">
            {errors.business}
          </p>
        )}
      </div>

      <div className="form-row">
        <label htmlFor="email">Email</label>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          value={values.email}
          onChange={handleChange}
          aria-invalid={Boolean(errors.email)}
          aria-describedby={errors.email ? 'email-error' : undefined}
        />
        {errors.email && (
          <p className="field-error" id="email-error">
            {errors.email}
          </p>
        )}
      </div>

      <div className="form-row">
        <label htmlFor="phone">Phone (optional)</label>
        <input
          id="phone"
          name="phone"
          type="tel"
          autoComplete="tel"
          value={values.phone}
          onChange={handleChange}
        />
      </div>

      <div className="form-row">
        <label htmlFor="problem">What is the biggest thing you keep putting off?</label>
        <textarea
          id="problem"
          name="problem"
          rows="5"
          value={values.problem}
          onChange={handleChange}
          aria-invalid={Boolean(errors.problem)}
          aria-describedby={errors.problem ? 'problem-error' : undefined}
        />
        {errors.problem && (
          <p className="field-error" id="problem-error">
            {errors.problem}
          </p>
        )}
      </div>

      <button className="btn" type="submit" disabled={status === 'submitting'}>
        {status === 'submitting' ? 'Sending…' : "Tell Me What's Not Working"}
      </button>
    </form>
  )
}
