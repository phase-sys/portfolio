"use client"

import { useRef } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/Button"
import { SiNextdotjs, SiReact, SiTailwindcss, SiPython } from "react-icons/si"
import { ChevronRight } from "lucide-react"
import { HeroVisuals3D } from "./HeroVisuals3D"

export function Hero({ onContactOpen }: { onContactOpen?: () => void }) {
  const containerRef = useRef<HTMLDivElement>(null)

  return (
    <section 
      ref={containerRef}
      className="relative h-[100dvh] w-full overflow-hidden"
    >
      <HeroVisuals3D />

      {/* BOTTOM-RIGHT: HUD Elements */}
      <motion.div 
        className="absolute bottom-8 md:bottom-12 right-6 md:right-12 z-20 flex flex-col items-end gap-10"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        {/* Tech Logos */}
        <div className="flex items-center gap-6 text-white/20 mr-2 md:mr-0">
          {[SiNextdotjs, SiReact, SiTailwindcss, SiPython].map((Icon, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.2, color: "rgba(255,255,255,1)" }}
              className="transition-colors duration-300 cursor-help"
            >
              <Icon size={26} />
            </motion.div>
          ))}
        </div>

        <div className="flex flex-col items-end gap-6">
          <div className="flex-col border-r border-brand-pear/30 pr-4 max-w-sm hidden md:flex text-right">
            <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-brand-pear mb-2">Capabilities</span>
            <p className="font-geist text-xs text-white/50 leading-relaxed max-w-[250px]">
              Engineering robust Next.js platforms & asynchronous architectures with extreme precision.
            </p>
          </div>

          <Button 
            size="lg" 
            onClick={onContactOpen}
            className="group h-12 md:h-14 px-8 bg-white text-black hover:bg-brand-pear transition-all duration-500 font-bold tracking-tighter rounded-full shadow-[0_0_30px_rgba(255,255,255,0.1)] hover:shadow-[0_0_40px_rgba(163,230,53,0.3)] shadow-[0_0_30px_rgba(255,255,255,0.1)] hover:shadow-[0_0_40px_rgba(163,230,53,0.3)]"
          >
            REACH OUT
            <ChevronRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </motion.div>
      
      {/* 5. SEAMLESS BOTTOM DISSOLVE */}
      <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-bg-dark to-transparent z-10 pointer-events-none" />
    </section>
  )
}
