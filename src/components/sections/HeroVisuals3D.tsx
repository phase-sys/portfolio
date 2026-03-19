"use client"

import { useRef, useState, useEffect, useMemo } from "react"
import { Canvas, useFrame, useThree } from "@react-three/fiber"
import { Float, Text, Center, ContactShadows } from "@react-three/drei"
import * as THREE from "three"

/**
 * Adapter to use THREE.Timer as a drop-in replacement for the deprecated THREE.Clock.
 * We implement the Clock interface manually to ensure full compatibility with R3F
 * while using the modern Timer API under the hood.
 */
class TimerAsClock {
  private _timer = new (THREE as any).Timer()
  public autoStart = true
  public running = true
  public startTime = performance.now()
  public oldTime = performance.now()

  get elapsedTime() {
    return this._timer.getElapsed()
  }

  getElapsedTime() {
    return this._timer.getElapsed()
  }

  getDelta() {
    return this._timer.getDelta()
  }

  update(timestamp?: number) {
    this._timer.update(timestamp)
  }

  start() {
    this.running = true
  }

  stop() {
    this.running = false
  }
}

function TimerUpdater({ timer }: { timer: TimerAsClock }) {
  const set = useThree((state) => state.set)
  
  // Set the custom timer as the clock in the R3F state
  useEffect(() => {
    set({ clock: timer as any })
  }, [set, timer])

  useFrame(() => {
    timer.update()
  })
  return null
}

function HeroNames() {
  const groupRef = useRef<THREE.Group>(null)
  const { viewport } = useThree()
  
  // Consolidated Responsive Config: [LG, MD, SM, XS, Base]
  const config = viewport.width >= 12 ? { j: 1.5,  m: 2.0,  g: 1.4 }
               : viewport.width >= 9  ? { j: 1.2,  m: 1.75, g: 1.2 }
               : viewport.width >= 6  ? { j: 1.0,  m: 1.4,  g: 1 }
               : viewport.width >= 3  ? { j: 0.6, m: 1.2, g: 0.8 }
               : { j: 0.35,  m: 0.7,  g: 0.5 }
  
  const { j: joseSize, m: magatSize, g: gapY } = config
  
  // Flattened Positions: Centered at x=0.5 with vertical gap
  const x = 0.5
  const josePos: [number, number, number] = [x, 0.5 + gapY / 2, 0]
  const magatPos: [number, number, number] = [x, 0.5 - gapY / 2, 0.2]
  
  useFrame((state) => {
    if (!groupRef.current) return
    const { x, y } = state.pointer
    groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, x * 0.1, 0.05)
    groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, -y * 0.1, 0.05)
  })

  return (
    <group ref={groupRef}>
      {/* JOSE ALFRED - Outlined */}
      <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.4}>
        <Center position={josePos}>
          <Text
            font="/SpaceGrotesk.ttf"
            fontSize={joseSize}
            letterSpacing={-0.05}
            color="white"
            fillOpacity={0}
            strokeWidth={0.012}
            strokeColor="#A3E635"
            strokeOpacity={0.15}
            maxWidth={10}
            textAlign="center"
          >
            JOSE ALFRED
          </Text>
        </Center>
      </Float>
      
      {/* MAGAT - Solid Pear */}
      <Float speed={2} rotationIntensity={0.3} floatIntensity={0.6}>
        <Center position={magatPos}>
          <Text
            font="/SpaceGrotesk.ttf"
            fontSize={magatSize}
            fontWeight="bold"
            letterSpacing={-0.08}
            color="#A3E635" // brand-pear
            maxWidth={10}
            textAlign="center"
          >
            MAGAT
          </Text>
        </Center>
      </Float>
    </group>
  )
}

export function HeroVisuals3D() {
  const timer = useMemo(() => new TimerAsClock(), [])

  return (
    <div className="absolute inset-0 z-10 pointer-events-none">
      <Canvas 
        camera={{ position: [0, 0, 8], fov: 40 }}
        gl={{ antialias: true, alpha: true }}
        style={{ pointerEvents: 'auto' }}
      >
        <TimerUpdater timer={timer} />
        <ambientLight intensity={0.8} />
        <spotLight position={[5, 5, 5]} angle={0.25} penumbra={1} intensity={1.5} />
        <pointLight position={[-5, -5, -5]} color="#A3E635" intensity={1} />
        <HeroNames />
        <ContactShadows opacity={0.4} scale={10} blur={2.4} far={4.5} />
      </Canvas>
    </div>
  )
}
