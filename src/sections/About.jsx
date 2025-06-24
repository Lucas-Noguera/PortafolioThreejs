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
    controls.enableZoom = !isMobile
    controls.enablePointerInteraction = !isMobile
    globeRef.current.renderer().domElement.style.touchAction = isMobile ? 'auto' : 'none'
  }, [isMobile])

  const handleCopy = () => {
    navigator.clipboard.writeText('lucasnoguera260105@gmail.com')
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const techStack = [
    { name: 'JavaScript', path: '/assets/JavaScript.svg' },
    { name: 'TypeScript', path: '/assets/typescript.webp' },
    { name: 'React.js', path: '/assets/react.svg' },
    { name: 'Next.js', path: '/assets/Next.js.svg' },
    { name: 'Node.js', path: '/assets/node-icon.svg' },
    { name: 'Express', path: '/assets/express.svg' },
    { name: 'MongoDB', path: '/assets/mongodb.svg' },
    { name: 'Node.js', path: '/assets/node-icon.svg' },
    { name: 'Tailwind CSS', path: '/assets/tailwindcss.webp' },
  ]

  return (
    <section id="about" className="py-20 px-6 lg:px-24 bg-black text-white">
      {/* Título */}
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold">About Me</h1>
        <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
          Soy Frontend & Backend Developer apasionado por crear experiencias únicas.
        </p>
      </div>

      {/* Grid principal */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
        {/* Intro + Email (columna 1) */}
        <div className="space-y-6">
          <div className="bg-[#111] p-6 rounded-2xl border border-gray-800 shadow-md">
            <h2 className="text-3xl font-semibold">
              Hola, soy <span className="text-indigo-400">Lucas Noguera</span>{' '}
              <span className="inline-block waving-hand">👋</span>
            </h2>
            <p className="mt-2 text-gray-300 leading-relaxed">
              Con más de 2 años de experiencia desarrollando aplicaciones robustas con JavaScript, React,
              Node.js, Express y MongoDB.
            </p>
          </div>
          <div className="bg-[#111] p-4 rounded-2xl border border-gray-800 shadow-md">
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

        {/* Globe interactivo (columna 2) */}
        <div className="flex justify-center lg:justify-start">
          <div
            className="rounded-full overflow-hidden shadow-xl"
            style={{ width: isMobile ? 200 : 280, height: isMobile ? 200 : 280 }}
          >
            <Globe
               ref={globeRef}
               height={326}
               width={326}
               backgroundColor='rgba(0,0,0,0)'
               backgroundImageOpacity={0.5}
               showAtmosphere
               showGraticules
               globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
               bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
            />
          </div>
        </div>

        {/* Tech Stack (columna 3) */}
        <div className="bg-[#111] p-6 rounded-2xl border border-gray-800 shadow-md">
          <h3 className="text-2xl font-semibold text-indigo-400 mb-4">Tech Stack</h3>
          <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-3 gap-4">
            {techStack.map((tech) => (
              <div
                key={tech.name}
                className="flex flex-col items-center p-3 bg-gray-900 rounded-lg transform transition hover:scale-105"
              >
                <img src={tech.path} alt={tech.name} className="w-8 h-8 mb-2" />
                <span className="text-gray-300 text-xs text-center">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer Globe Text */}
      <div className="mt-6 text-center text-gray-500">
        Trabajo remotamente en la mayoría de zonas horarias.
      </div>

      {/* Pasión por el código */}
      <div className="mt-12 bg-[#111] p-6 rounded-2xl border border-gray-800 shadow-md">
        <h3 className="text-2xl font-semibold text-indigo-400 mb-2">Mi pasión por el código</h3>
        <p className="text-gray-300 leading-relaxed text-sm">
          Resolver problemas y crear soluciones elegantes es mi motor. Cada línea de código es una oportunidad para
          innovar y mejorar la experiencia del usuario.
        </p>
      </div>
    </section>
  )
}
