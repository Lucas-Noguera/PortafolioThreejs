import emailjs from '@emailjs/browser'
import { useCallback, useState } from 'react'

import useAlert from '../hooks/useAlert.js'
import { Alert } from '../../components/Alert.jsx'
import { ContactForm } from '../../components/ContactForm.jsx'

export const Contact = () => {
  const { alert, showAlert, hideAlert } = useAlert()
  const [loading, setLoading] = useState(false)

  const [form, setForm] = useState({ name: '', email: '', message: '' })

  const handleChange = useCallback(({ target: { name, value } }) => {
    setForm(f => ({ ...f, [name]: value }))
  }, [])

const handleSubmit = (e) => {
  e.preventDefault()
  setLoading(true)

  emailjs
    .send(
      import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
      {
        from_name: form.name,
        to_name: 'Lucas',
        from_email: form.email,
        to_email: 'lucasnoguera260105@gmail.com',
        message: form.message,
      },
      import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY,
    )
    .then(() => {
      setLoading(false)
      showAlert({
        show: true,
        text: 'Thank you for your message 😃',
        type: 'success',
      })

      setTimeout(() => {
        hideAlert()
        setForm({
          name: '',
          email: '',
          message: '',
        })
      }, 3000)
    })
    .catch((error) => {
      setLoading(false)
      console.error(error)
      showAlert({
        show: true,
        text: "I didn't receive your message 😢",
        type: 'danger',
      })
    })
}

  return (
    <section className="c-space my-20" id="contact">
      {alert.show && <Alert {...alert} />}

        <div className="relative w-full min-h-screen px-4 py-12 flex justify-center"
        style={{ backgroundImage: "url('/assets/terminal.webp')",
          backgroundSize: '100% 100%',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          borderRadius: '10px',
        }}>

            <div className="contact-container">
            <h3 className="head-text text-white mt-10">Let's talk</h3>
            <p className="text-lg text-white mt-3">
              Whether you’re looking to build a new website, improve your existing platform, or bring a unique project to
              life, I’m here to help.
            </p>
            <ContactForm
              form={form}
              handleChange={handleChange}
              handleSubmit={handleSubmit}
              loading={loading}
            />
          </div>
        </div>

    </section>
  )
}
