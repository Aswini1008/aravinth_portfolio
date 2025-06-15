
import * as THREE from 'three'
import React, { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Points, PointMaterial } from '@react-three/drei'

const Stars = (props: any) => {
  const ref = useRef<THREE.Points>(null!)
  const [sphere] = useMemo(() => {
    // 5000 particles with random positions inside a sphere
    const positions = new Float32Array(5000 * 3)
    for (let i = 0; i < positions.length; i++) {
        positions[i] = (Math.random() - 0.5) * 10
    }
    return [positions]
  }, [])

  useFrame((state, delta) => {
    if (!ref.current) return;
    // Animate rotation
    ref.current.rotation.x -= delta / 10
    ref.current.rotation.y -= delta / 15
    
    // Make particles follow the mouse
    const { mouse } = state
    ref.current.position.x = THREE.MathUtils.lerp(ref.current.position.x, mouse.x * 2, 0.05)
    ref.current.position.y = THREE.MathUtils.lerp(ref.current.position.y, mouse.y * 2, 0.05)
  })

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false} {...props}>
        <PointMaterial transparent color="hsl(var(--foreground))" size={0.015} sizeAttenuation={true} depthWrite={false} />
      </Points>
    </group>
  )
}

const InteractiveParticles: React.FC = () => {
  return (
    <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0, backgroundColor: 'hsl(var(--background))' }}>
        <Canvas camera={{ position: [0, 0, 1] }}>
            <Stars />
        </Canvas>
    </div>
  )
}

export default InteractiveParticles;
