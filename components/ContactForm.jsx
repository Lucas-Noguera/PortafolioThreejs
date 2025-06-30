import { memo } from 'react'
import { useTranslation } from 'react-i18next'

export const ContactForm = memo(function ContactForm({
  form,
  handleChange,
  handleSubmit,
  loading,
}) {
  const { t } = useTranslation()
  const texts = t('ContactForm', { returnObjects: true })

  return (
    <form onSubmit={handleSubmit} className="mt-12 flex flex-col space-y-7">
      <label className="space-y-3 text-white-600">
        <span className="field-label">{texts.fullNameLabel}</span>
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          required
          className="field-input"
          placeholder={texts.fullNamePlaceholder}
        />
      </label>

      <label className="space-y-3">
        <span className="field-label">{texts.emailLabel}</span>
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          required
          className="field-input"
          placeholder={texts.emailPlaceholder}
        />
      </label>

      <label className="space-y-3">
        <span className="field-label">{texts.messageLabel}</span>
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          required
          rows={5}
          className="field-input"
          placeholder={texts.messagePlaceholder}
        />
      </label>

      <button className="field-btn" type="submit" disabled={loading}>
        {loading ? texts.buttonSending : texts.buttonSend}
        <img src="/assets/arrow-up.webp" alt="arrow-up" className="field-btn_arrow" />
      </button>
    </form>
  )
})
