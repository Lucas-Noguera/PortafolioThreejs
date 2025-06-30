import React from 'react'
import { useTranslation } from 'react-i18next'

export const Footer = () => {
  const { t } = useTranslation()
  const texts = t('FooterTexts', { returnObjects: true })

  return (
    <footer className="c-space pt-7 pb-3 border-t border-black-300 flex justify-between items-center flex-wrap gap-5">
      <div className="text-white-500 flex gap-2">
        <p>{texts[0].terms}</p>
        <p>{texts[0].separator}</p>
        <p>{texts[0].privacy}</p>
      </div>

      <div className="flex gap-3">
        <a href="https://github.com/Lucas-Noguera" target="_blank" rel="noreferrer">
          <div className="social-icon">
            <img
              src="/assets/github.svg"
              alt={texts[1].githubAlt}
              className="w-1/2 h-1/2"
            />
          </div>
        </a>

        <a href="https://www.linkedin.com/in/lucas-gabriel-noguera" target="_blank" rel="noreferrer">
          <div className="social-icon">
            <img
              src="/assets/linkedinIcon.svg"
              alt={texts[1].linkedinAlt}
              className="w-1/2 h-1/2"
            />
          </div>
        </a>

        <a href="https://www.instagram.com/lubawalker26" target="_blank" rel="noreferrer">
          <div className="social-icon">
            <img
              src="/assets/instagram.svg"
              alt={texts[1].instagramAlt}
              className="w-1/2 h-1/2"
            />
          </div>
        </a>
      </div>

      <p className="text-white-500">{texts[2].copyright}</p>
    </footer>
  )
}
