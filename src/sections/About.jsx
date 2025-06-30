import React, { useEffect, useRef, useState } from 'react'
import Globe from 'react-globe.gl'
import { useMediaQuery } from 'react-responsive'
import { useTranslation } from 'react-i18next'
import { GlobeMap } from '../../components/GlobeMap'

export const About = () => {
  const { t } = useTranslation()
  // Obtenemos el array completo de textos
  const AboutTexts = t('AboutTexts', { returnObjects: true })

  const [copied, setCopied] = useState(false)
  const globeRef = useRef()
  const isMobile = useMediaQuery({ maxWidth: 767 })

  useEffect(() => {
    if (!globeRef.current) return
    const controls = globeRef.current.controls()
    controls.enableRotate = !isMobile
    controls.enableZoom = false
    controls.enablePointerInteraction = !isMobile
    if (controls.zoomSpeed !== undefined) controls.zoomSpeed = 0
    globeRef.current.renderer().domElement.style.touchAction = isMobile ? 'auto' : 'none'
  }, [isMobile])
  const handleCopy = () => {
    navigator.clipboard.writeText('lucasnoguera260105@gmail.com')
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

 const hereText = AboutTexts.find(o => o.id === 7).labelText

  const techStack = [
    { name: 'JavaScript', path: '/assets/JavaScript.svg', link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript' },
    { name: 'TypeScript', path: '/assets/typescript.webp', link: 'https://www.typescriptlang.org/' },
    { name: 'React.js', path: '/assets/react.svg', link: 'https://reactjs.org/' },
    { name: 'Next.js', path: '/assets/Next.js.svg', link: 'https://nextjs.org/' },
    { name: 'Node.js', path: '/assets/node-icon.svg', link: 'https://nodejs.org/' },
    { name: 'Express', path: '/assets/express.svg', link: 'https://expressjs.com/' },
    { name: 'MongoDB', path: '/assets/mongodb.svg', link: 'https://www.mongodb.com/' },
    { name: 'TailwindCSS', path: '/assets/tailwindcss.webp', link: 'https://tailwindcss.com/' },
    { name: 'Vite.js', path: '/assets/Vite.js.svg', link: 'https://vitejs.dev/' },
    { name: 'MySQL', path: '/assets/MySQL.svg', link: 'https://www.mysql.com/' },
    { name: 'AndroidStudio', path: '/assets/Android-Studio.svg', link: 'https://developer.android.com/studio' },
    { name: 'DBeaver', path: '/assets/DBeaver.svg', link: 'https://dbeaver.io/' },
    { name: 'Expo', path: '/assets/snack.svg', link: 'https://expo.dev/' },
    { name: 'css', path: '/assets/CSS3.svg', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS' },
    { name: 'HTML', path: '/assets/HTML5.svg', link: 'https://developer.mozilla.org/en-US/docs/Web/HTML' },
  ]

  const globeSize = isMobile ? 300 : 360

  return (
    <section id="about" className="py-20 px-6 lg:px-24 bg-black text-white">
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold">
          {AboutTexts[0].title}{' '}
          <span className="text-indigo-400">{AboutTexts[0].titleHighlight}</span>
        </h1>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-[1fr_auto_1fr] gap-8 items-stretch">
        <div className="flex flex-col justify-between h-full space-y-6">
          <div className="bg-[#111] p-6 rounded-2xl border border-gray-800 shadow-md h-full">
            <h2 className="text-3xl font-semibold">
              {AboutTexts[1].heading}
              <span className="text-indigo-400">{AboutTexts[1].headingHighlight}</span>{' '}
              <span className="inline-block waving-hand">{AboutTexts[1].emoji}</span>
            </h2>
            <p className="mt-2 text-gray-300 leading-relaxed">
              {AboutTexts[2].body}
            </p>
          </div>
          <div className="bg-[#111] p-4 rounded-2xl border border-gray-800 shadow-md">
            <h2 className="text-3xl font-semibold mb-2">
              {AboutTexts[3].contactTitle}
              <span className="text-indigo-400">{AboutTexts[3].contactHighlight}</span>{' '}
            </h2>
            <button
              onClick={handleCopy}
              className="w-full flex items-center justify-center gap-3 bg-gray-800 hover:bg-gray-700 p-3 rounded-lg transition-colors"
            >
                <span className="text-white">
                  {copied ? AboutTexts[3].copiedText : AboutTexts[3].email}
                </span>
            </button>
            <a
              href="/assets/Curriculum - Lucas Noguera.pdf"
              download
              className="mt-4 block w-full text-center bg-indigo-600 hover:bg-indigo-500 text-white font-medium py-2 rounded-lg transition-colors"
            >
              {AboutTexts[4].downloadCV}
            </a>
          </div>
        </div>

        <div className="flex justify-center items-center">
            <GlobeMap hereText={hereText} isMobile={isMobile} globeSize={globeSize} />
        </div>

        <div className="bg-[#111] p-6 rounded-2xl border border-gray-800 shadow-md h-full flex flex-col justify-between">
          <div>
            <h3 className="text-2xl font-semibold text-indigo-400 mb-4">
              {AboutTexts[5].techTitle}{' '}
              <span className="text-white font-bold">{AboutTexts[5].techHighlight}</span>
            </h3>
            <div className="grid grid-cols-3 gap-4">
              {techStack.map(tech => (
                <a key={tech.name} href={tech.link} target="_blank" rel="noreferrer">
                  <div className="flex flex-col items-center p-3 bg-gray-900 rounded-lg transform transition hover:scale-105">
                    <img src={tech.path} alt={tech.name} className="w-8 h-8 mb-2" />
                    <span className="text-gray-300 text-xs text-center">{tech.name}</span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 text-center text-gray-500"></div>
    </section>
  )
}
