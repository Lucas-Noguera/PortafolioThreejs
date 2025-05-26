// Contact.jsx
import { useState } from 'react'
import emailjs from '@emailjs/browser'

import useAlert from '../hooks/useAlert.js'
import { Alert } from '../../components/Alert.jsx'
import { ContactForm } from '../../components/ContactForm.jsx'

export const Contact = () => {
  const { alert, showAlert, hideAlert } = useAlert()
  const [loading, setLoading] = useState(false)

  const handleSubmit = (e, formRef) => {
    e.preventDefault()
    setLoading(true)

    // Leemos directamente del form DOM:
    const formData = new FormData(formRef.current)
    const data = Object.fromEntries(formData.entries())

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        data,
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY,
      )
      .then(() => {
        setLoading(false)
        showAlert({ text: 'Thank you for your message 😃', type: 'success' })
        setTimeout(() => {
          hideAlert()
          // Resetea el form HTML (sin re-render React):
          formRef.current.reset()
        }, 3000)
      })
      .catch((error) => {
        setLoading(false)
        console.error(error)
        showAlert({ text: "I didn't receive your message 😢", type: 'danger' })
      })
  }

  return (
    <section className="c-space my-20" id="contact">
      {alert.show && <Alert {...alert} />}
      <div className="relative min-h-screen flex items-center justify-center flex-col">
        <div
          className="absolute inset-0 bg-cover bg-no-repeat"
          style={{ backgroundImage: "url('/assets/terminal.png')" }}
          aria-hidden="true"
        />
        <div className="contact-container">
          <h3 className="head-text">Let's talk</h3>
          <p className="text-lg text-white-600 mt-3">
            Whether you’re looking to build a new website, improve your existing
            platform, or bring a unique project to life, I’m here to help.
          </p>

          <ContactForm
            handleSubmit={handleSubmit}
            loading={loading}
          />
        </div>
      </div>
    </section>
  )
}
