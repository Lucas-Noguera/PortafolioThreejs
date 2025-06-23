import { Suspense, useRef, useState } from 'react'
import { myProjects } from '../constants'
import { Canvas } from '@react-three/fiber'
import { Center, OrbitControls } from '@react-three/drei'
import { CanvasLoader } from '../../components/CanvasLoader'
import { DemoComputer } from '../../components/DemoComputer'
import { useMediaQuery } from 'react-responsive'
// eslint-disable-next-line no-unused-vars
import { AnimatePresence, motion } from 'framer-motion'

export const Projects = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 })
  const orbitRef = useRef()
  const [selectedProjectIndex, setSelectedProjectIndex] = useState(0)
  const currentProject = myProjects[selectedProjectIndex]
  const projectCount = myProjects.length

  const handleNavigation = (dir) =>
    setSelectedProjectIndex((prev) =>
      dir === 'previous'
        ? prev === 0
          ? projectCount - 1
          : prev - 1
        : prev === projectCount - 1
        ? 0
        : prev + 1,
    )

  const variants = {
    hidden: { opacity: 0, y: 20 },
    enter:  { opacity: 1, y: 0 },
    exit:   { opacity: 0, y: -20 },
  }

  return (
    <section className="c-space my-20">
      <p className="head-text">My Work</p>
      <div className="grid lg:grid-cols-2 grid-cols-1 mt-12 gap-5 w-full">
        {/* === CARD ESTÁTICO === */}
        <div className="relative sm:p-10 py-10 px-5 shadow-2xl shadow-block-200 h-full">
          <div className="absolute top-0 right-0 z-0">
            <img
              src={currentProject.spotlight}
              alt="spotlight"
              className="w-full h-96 object-cover rounded-xl"
            />
          </div>

          {/* Animación completa del bloque */}
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedProjectIndex}
              className="relative flex flex-col justify-between h-full z-10 text-white-600"
              variants={variants}
              initial="hidden"
              animate="enter"
              exit="exit"
              transition={{ duration: 0.4 }}
            >
              {/* Contenido principal */}
              <div className="space-y-5">
                <div
                  className="p-3 backdrop-filter backdrop-blur-3xl w-fit rounded-lg"
                  style={currentProject.logoStyle}
                >
                  <img
                    src={currentProject.logo}
                    alt="logo"
                    className="w-10 h-10 shadow-sm"
                  />
                </div>
                <p className="text-white text-2xl font-semibold">
                  {currentProject.title}
                </p>
                <p>{currentProject.desc}</p>
                <p>{currentProject.subdesc}</p>
                <div className="flex items-center justify-between flex-wrap gap-5">
                  <div className="flex items-center gap-3 flex-wrap">
                    {currentProject.tags.map((tag, i) => (
                      <a
                        key={i}
                        href={tag.link}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <div className="tech-logo">
                          <img src={tag.path} alt={tag.name} />
                        </div>
                      </a>
                    ))}
                  </div>
                  <a
                    className="flex items-center gap-2 cursor-pointer"
                    href={currentProject.href}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <p>Check Live Site</p>
                    <img
                      src="/assets/arrow-up.webp"
                      alt="arrow"
                      className="w-3 h-3"
                    />
                  </a>
                </div>
              </div>

              {/* Flechas siempre abajo con la misma posición */}
              <div className="flex justify-between items-center mt-7">
                <button
                  className="arrow-btn"
                  onClick={() => handleNavigation('previous')}
                >
                  <img
                    src="/assets/left-arrow.webp"
                    alt="left"
                    className="w-4 h-4"
                  />
                </button>
                <button
                  className="arrow-btn"
                  onClick={() => handleNavigation('next')}
                >
                  <img
                    src="/assets/right-arrow.webp"
                    alt="right"
                    className="w-4 h-4"
                  />
                </button>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* === CANVAS 3D === */}
        <div className="border border-black-300 bg-black-200 rounded-lg h-96 md:h-full">
          <Canvas
            style={{ touchAction: 'auto', pointerEvents: isMobile ? 'none' : 'auto' }}
          >
            <ambientLight intensity={Math.PI} />
            <directionalLight position={[10, 10, 5]} />
            <Center>
              <Suspense fallback={<CanvasLoader />}>
                <group scale={2} position={[0, -3, 0]} rotation={[0, -0.1, 0]}>
                  <DemoComputer texture={currentProject.texture} />
                </group>
              </Suspense>
            </Center>
            <OrbitControls
              ref={orbitRef}
              maxPolarAngle={Math.PI / 2}
              enableZoom={false}
              enableRotate={!isMobile}
              enablePan={!isMobile}
            />
          </Canvas>
        </div>
      </div>
    </section>
  )
}
