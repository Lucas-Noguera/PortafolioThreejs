import React, { useEffect, useRef, useState } from 'react'
import Globe from 'react-globe.gl'
import { useMediaQuery } from 'react-responsive'

export const About = () => {
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

  useEffect(() => {
    if (!globeRef.current) return

    setTimeout(() => {
      globeRef.current.pointOfView({
        lat: -25.2637,
        lng: -57.5759,
        altitude: 2,
      }, 1000)
    }, 500)
  }, [])

  const handleCopy = () => {
    navigator.clipboard.writeText('lucasnoguera260105@gmail.com')
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

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
]

  const globeSize = isMobile ? 300 : 360

  return (
    <section id="about" className="py-20 px-6 lg:px-24 bg-black text-white">
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold">About <span className="text-indigo-400">Me</span></h1>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-8 items-stretch">
        <div className="flex flex-col justify-between h-full space-y-6">
          <div className="bg-[#111] p-6 rounded-2xl border border-gray-800 shadow-md h-full">
            <h2 className="text-3xl font-semibold">
              Hola, soy <span className="text-indigo-400">Lucas Noguera</span>{' '}
              <span className="inline-block waving-hand">👋</span>
            </h2>
            <p className="mt-2 text-gray-300 leading-relaxed">
              Con más de 2 años de experiencia desarrollando aplicaciones robustas con JavaScript, React,
              Node.js, Express y MongoDB. Con residencia en Asuncion, Paraguay. Trabajo remotamente en la mayoría de zonas horarias.
            </p>
          </div>
          <div className="bg-[#111] p-4 rounded-2xl border border-gray-800 shadow-md">
            <h2 className="text-3xl font-semibold mb-2">
              Contact <span className="text-indigo-400">Me</span>{' '}
            </h2>
            <button
              onClick={handleCopy}
              className="w-full flex items-center justify-center gap-3 bg-gray-800 hover:bg-gray-700 p-3 rounded-lg transition-colors"
            >
              <img
                src={copied ? '/assets/tick.svg' : '/assets/copy.svg'}
                alt={copied ? 'Copiado' : 'Email'}
                className="w-5 h-5"
              />
              <span className="text-gray-200 text-sm">
                {copied ? '¡Email copiado!' : 'lucasnoguera260105@gmail.com'}
              </span>
            </button>
          </div>
        </div>

        <div className="flex justify-center items-center">
          <div
            className="rounded-full overflow-hidden shadow-xl"
            style={{ width: globeSize, height: globeSize }}
          >
            <Globe
              ref={globeRef}
              width={globeSize}
              height={globeSize}
              backgroundColor='rgba(0,0,0,0)'
              backgroundImageOpacity={0.5}
              showAtmosphere
              showGraticules
              globeImageUrl="//unpkg.com/three-globe/example/img/earth-day.jpg"
              bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
              labelDotRadius={0.6}
              labelsData={[{ lat: -25.2637, lng: -57.5759, text: "I'm Here!", color: '#fff', size: 0.4 }]}
              labelLat={d => d.lat}
              labelLng={d => d.lng}
              labelText={d => d.text}
              labelColor={d => d.color}
              labelSize={d => d.size * 10}
              labelResolution={512}
              labelAltitude={0.02}
            />
          </div>
        </div>

        <div className="bg-[#111] p-6 rounded-2xl border border-gray-800 shadow-md h-full flex flex-col justify-between">
          <div>
            <h3 className="text-2xl font-semibold text-indigo-400 mb-4">Tech <span className='text-white font-bold'>Stack</span></h3>
            <div className="grid grid-cols-3 gap-4">
              {techStack.map((tech) => (
                <a href={tech.link} target="_blank" rel="noreferrer">
                <div
                  key={tech.name}
                  className="flex flex-col items-center p-3 bg-gray-900 rounded-lg transform transition hover:scale-105"
                >
                  <img src={tech.path} alt={tech.name} className="w-8 h-8 mb-2" />
                  <span className="text-gray-300 text-xs text-center">{tech.name}</span>
                </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 text-center text-gray-500">
      </div>
    </section>
  )
}
