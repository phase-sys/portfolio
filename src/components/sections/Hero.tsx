import { useRef } from "react"
import { HeroVisuals3D } from "./HeroVisuals3D"

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null)

  return (
    <section 
      ref={containerRef}
      className="relative h-[100dvh] w-full overflow-hidden"
    >
      <HeroVisuals3D />

      {/* 5. SEAMLESS BOTTOM DISSOLVE */}
      <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-bg-dark to-transparent z-10 pointer-events-none" />
    </section>
  )
}
