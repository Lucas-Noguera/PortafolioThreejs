import { PerspectiveCamera } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { HackerRoom } from '../../components/HackerRoom'
import { Suspense } from 'react'
import { CanvasLoader } from '../../components/CanvasLoader'
import { Leva } from 'leva'
import { useMediaQuery } from 'react-responsive'
import { getLayoutConfig } from '../constants'
import { Target } from '../../components/Target'
import { ReactLogo } from '../../components/ReactLogo'
import { Cube } from '../../components/Cube'
import { Rings } from '../../components/Rings'
import { HeroCamera } from '../../components/HeroCamera'
import { Button } from '../../components/Button'

export const Hero = () => {
    const isSmall = useMediaQuery({ maxWidth: 440 })
    const isMobile = useMediaQuery({
        minWidth: 441,
        maxWidth: 767  })
    const isTablet = useMediaQuery({
        minWidth: 768,
        maxWidth: 1279})
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

    return (
        <section className="relative h-screen w-full flex flex-col overflow-hidden">
            <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3">
                <p className="
                sm:text-3xl text-2xl
                font-medium text-white
                text-center
                font-generalsans
                ">Hi, I am Lucas
                <span className="waving-hand">👋</span>
                </p>
                <p className="hero_tag
                text-gray_gradient">Building Products & Brands</p>
            </div>

             <div className="w-full h-full absolute inset-0 z-0">
               {/*<Leva />*/}
                <Canvas className='w-full h-full'>
                    <Suspense
                    fallback={<CanvasLoader/>}>

                    <PerspectiveCamera
                    makeDefault
                    position={[0, 0, 20]} />

                    <HeroCamera isMobile={isMobile}>

                    <HackerRoom
                    position={layout.deskPosition}
                    rotation={[0, -Math.PI, 0]}
                    scale={layout.deskScale}
                    />

                    </HeroCamera>

                    <group>

                        <Target position={layout.targetPosition} />

                        <ReactLogo position={layout.reactLogoPosition} />

                        <Cube position={layout.cubePosition} />

                        <Rings position={layout.ringPosition} />

                    </group>

                    <ambientLight
                    intensity={2} />
                    <directionalLight position={[10, 10, 10]} intensity={0.5} />

                    </Suspense>
                </Canvas>
             </div>

             <div className='absolute bottom-7 left-0 right-0 w-full z-10 c-space  '>

                <a href="#contact" className='w-fit'>
                    <Button
                    name="Let's work together"
                    isBeam
                    containerClass='btn sm:w-fit w-full sm:min-w-96'
                    btnping='btn-ping'
                    btnpingdot='btn-ping_dot'
                    />

                </a>
             </div>

        </section>
    )
}