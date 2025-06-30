import { useInView } from 'react-intersection-observer'
import { PerspectiveCamera } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { HackerRoom } from '../../components/HackerRoom'
import { Suspense } from 'react'
import { CanvasLoader } from '../../components/CanvasLoader'
import { useMediaQuery } from 'react-responsive'
import { getLayoutConfig } from '../constants'
import { HeroCamera } from '../../components/HeroCamera'
import { Button } from '../../components/Button'
import { useTranslation } from 'react-i18next'

export const Hero = () => {
  const { t } = useTranslation()
  // Obtenemos el array de textos completo
  const texts = t('HeroTexts', { returnObjects: true })

  const isSmall = useMediaQuery({ maxWidth: 440 })
  const isMobile = useMediaQuery({ minWidth: 441, maxWidth: 767 })
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1279 })
  const isIpadVertical = useMediaQuery({
    minWidth: 768,
    maxWidth: 850,
    minHeight: 1000,
    maxHeight: 1400,
  })
  const isWideLow = useMediaQuery({
    minWidth: 960,
    maxWidth: 1280,
    maxHeight: 800,
  })
  const isDesktopWideShort = useMediaQuery({
    minWidth: 1440,
    maxHeight: 1300,
  })

  const layout = getLayoutConfig({
    isSmall,
    isMobile,
    isTablet,
    isIpadVertical,
    isWideLow,
    isDesktopLow: isDesktopWideShort,
  })

  const { ref, inView } = useInView({ threshold: 0.1 })

  return (
    <section
      id="home"
      className="relative h-screen w-full flex flex-col overflow-hidden"
    >
      {/* Texto de bienvenida */}
      <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3">
        <p className="sm:text-3xl text-2xl font-medium text-white text-center font-generalsans">
          <span className="text-indigo-400">{texts[0].textspan}</span>
          {texts[0].text}
          <span className="waving-hand">👋</span>
        </p>
        <p className="hero_tag text-gray_gradient">
          <span className="text-indigo-400">{texts[1].textspan}</span>
          {texts[1].text}
        </p>
      </div>

      {/* Canvas 3D */}
      <div ref={ref} className="w-full h-full absolute inset-0 z-0">
        {inView && (
          <Canvas
            className="w-full h-full"
            frameloop={isSmall || isTablet ? 'demand' : 'always'}
            pixelratio={isSmall ? 1 : 1.5}
            gl={{ antialias: false, powerPreference: 'high-performance' }}
          >
            <Suspense fallback={<CanvasLoader />}>
              <PerspectiveCamera makeDefault position={[0, 0, 20]} />
              <HeroCamera
                isMobile={isMobile}
                isTablet={isTablet}
                isSmall={isSmall}
              >
                <HackerRoom
                  position={layout.deskPosition}
                  rotation={[0, -Math.PI, 0]}
                  scale={layout.deskScale}
                />
              </HeroCamera>
              <ambientLight intensity={2} />
              <directionalLight position={[10, 10, 10]} intensity={0.5} />
            </Suspense>
          </Canvas>
        )}
      </div>

      {/* Botón de llamada a la acción */}
      <div className="absolute bottom-7 left-0 right-0 w-full z-10 c-space">
        <a href="#about" className="w-fit">
          <Button
            name={texts[2].text}
            isBeam
            containerClass="btn rounded-2xl border border-gray-800 sm:w-fit w-full sm:min-w-96"
            btnping="btn-ping"
            btnpingdot="btn-ping_dot"
          />
        </a>
      </div>
    </section>
  )
}
