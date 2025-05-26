// ContactForm.jsx
import { memo, useRef } from 'react'

export const ContactForm = memo(function ContactForm({
  handleSubmit,
  loading,
}) {
  // Un sólo ref para todo el form:
  const formRef = useRef()

  return (
    <form
      ref={formRef}
      onSubmit={(e) => handleSubmit(e, formRef)}
      className="mt-12 flex flex-col space-y-7"
    >
      <label className="space-y-3">
        <span className="field-label">Full Name</span>
        <input
          type="text"
          name="from_name"
          defaultValue=""
          required
          className="field-input"
          placeholder="ex., John Doe"
        />
      </label>

      <label className="space-y-3">
        <span className="field-label">Email address</span>
        <input
          type="email"
          name="from_email"
          defaultValue=""
          required
          className="field-input"
          placeholder="ex., johndoe@gmail.com"
        />
      </label>

      <label className="space-y-3">
        <span className="field-label">Your message</span>
        <textarea
          name="message"
          defaultValue=""
          required
          rows={5}
          className="field-input"
          placeholder="Share your thoughts or inquiries..."
        />
      </label>

      <button className="field-btn" type="submit" disabled={loading}>
        {loading ? 'Sending...' : 'Send Message'}
        <img
          src="/assets/arrow-up.png"
          alt="arrow-up"
          className="field-btn_arrow"
        />
      </button>
    </form>
  )
})
