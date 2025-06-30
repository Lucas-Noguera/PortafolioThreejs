// src/i18n.js
import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

// importa tus archivos de traducción
import en from '../public/locales/en/translation.json'
import es from '../public/locales/es/translation.json'
import pt from '../public/locales/pt/translation.json'

i18n
  .use(initReactI18next) // ⬅️ esto inyecta el “provider” en React
  .init({
    resources: {
      en: { translation: en },
      es: { translation: es },
      pt: { translation: pt },
    },
    lng: localStorage.getItem('appLanguage') || 'en', // idioma por defecto
    fallbackLng: 'en',
    interpolation: { escapeValue: false },
  })

export default i18n
