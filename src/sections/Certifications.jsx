import { certifications, CertificationsTexts } from '../constants/index.js'

export const Certifications = () => {
  return (
    <section className="c-space my-20" id='certifications'>
      <h3 className="head-text">{CertificationsTexts[0].title} <span className='text-indigo-400'>{CertificationsTexts[0].titleHighlight}</span></h3>

      <div className="grid md:grid-cols gap-6 mt-10">
        {certifications.map((cert) => (
          <a
            key={`cert-${cert.id}`}
            href={cert.link}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white/10 hover:bg-white/20 p-5 rounded-xl border border-gray-800 transition-colors duration-200 flex items-center gap-4"
          >
            <img
              src="/assets/fcc-logo.webp"
              alt={CertificationsTexts[2].logoAlt}
              className="w-12 h-12 object-contain rounded"
            />
            <div className="flex-1">
              <div className="text-white-800 font-semibold text-lg">
                {cert.title}
              </div>
              <p className="text-white-500 mt-1 text-sm">
                {CertificationsTexts[1].viewText}
              </p>
            </div>
            <img
              src="/assets/external-link.svg"
              alt={CertificationsTexts[2].linkIconAlt}
              className="w-10 h-10 opacity-60"
            />
          </a>
        ))}
      </div>
    </section>
  )
}
