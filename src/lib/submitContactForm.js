// No form backend is configured yet. This isolates submission logic so a real
// provider (Formspree, a serverless function, GoHighLevel webhook, etc.) can be
// dropped in here without touching the form UI or validation.
//
// NEEDS YOUR INPUT: pick a form submission provider and wire it in below.
export async function submitContactForm(_formData) {
  throw new Error('CONTACT_FORM_NOT_CONFIGURED')
}
