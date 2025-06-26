import { FooterTexts } from '../constants'

export const Footer = () => {
  return (
    <footer className="c-space pt-7 pb-3 border-t border-black-300 flex justify-between items-center flex-wrap gap-5">
      <div className="text-white-500 flex gap-2">
        <p>{FooterTexts[0].terms}</p>
        <p>{FooterTexts[0].separator}</p>
        <p>{FooterTexts[0].privacy}</p>
      </div>

      <div className="flex gap-3">

        <a href="https://github.com/Lucas-Noguera" target="_blank" rel="noreferrer">
        <div className="social-icon">
          <img src="/assets/github.svg" alt={FooterTexts[1].githubAlt} className="w-1/2 h-1/2" />
        </div>
        </a>

        <a href="https://www.linkedin.com/in/lucas-gabriel-noguera" target="_blank" rel="noreferrer">
        <div className="social-icon">
          <img src="/assets/linkedinIcon.svg" alt={FooterTexts[1].linkedinAlt} className="w-1/2 h-1/2" />
        </div>
        </a>

        <a href="https://www.instagram.com/lubawalker26" target="_blank" rel="noreferrer">
        <div className="social-icon">
          <img src="/assets/instagram.svg"  alt={FooterTexts[1].instagramAlt} className="w-1/2 h-1/2" />
        </div>
        </a>

      </div>

      <p className="text-white-500">{FooterTexts[2].copyright}</p>
    </footer>
  )
}