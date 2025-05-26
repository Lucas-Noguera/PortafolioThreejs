import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { easing } from 'maath'

export const HeroCamera = ({ isMobile, isTablet, children }) => {
  const group = useRef()

  const shouldRotate = !(isMobile || isTablet)

  useFrame((state, delta) => {
    easing.damp3(state.camera.position, [0, 0, 20], 0.25, delta)

    if (shouldRotate) {
      // Calcula el ángulo objetivo
      const targetX = Math.max(-0.5, Math.min(0.5, -state.pointer.y / 3)) // Limita entre -0.5 y 0.5 radianes (~28 grados)
      const targetY = state.pointer.x / 5

      easing.dampE(group.current.rotation, [targetX, targetY, 0], 0.25, delta)
    }
  })

  return <group ref={group} scale={isMobile ? 1 : 1.2}>{children}</group>
}
