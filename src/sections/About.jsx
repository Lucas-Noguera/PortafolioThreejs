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
    controls.enableZoom = false // Deshabilita zoom con rueda
    controls.enablePointerInteraction = !isMobile
    if (controls.zoomSpeed !== undefined) controls.zoomSpeed = 0
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
    { name: 'Tailwind CSS', path: '/assets/tailwindcss.webp' },
    { name: 'Vite.js', path: '/assets/Vite.js.svg' },
  ]

  // Ajuste de tamaño del globo
  const globeSize = isMobile ? 300 : 360

  return (
    <section id="about" className="py-20 px-6 lg:px-24 bg-black text-white">
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold">About Me</h1>
        <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
          Soy Frontend & Backend Developer apasionado por crear experiencias únicas.
        </p>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-8 items-start">
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
            <h2 className="text-3xl font-semibold mb-5">
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

        <div className="flex w-full justify-center">
          <div
            className="rounded-full overflow-hidden shadow-xl mx-auto"
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

        <div className="bg-[#111] p-6 rounded-2xl border border-gray-800 shadow-md">
          <h3 className="text-2xl font-semibold text-indigo-400 mb-4">Tech Stack</h3>
          <div className="grid grid-cols-3 gap-4">
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

      <div className="mt-6 text-center text-gray-500">
        Trabajo remotamente en la mayoría de zonas horarias.
      </div>

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
