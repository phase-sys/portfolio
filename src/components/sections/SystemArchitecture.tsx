"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/Badge"
import { Globe, Terminal, Award, Cpu, Zap, Box, Compass, Activity, Cloud } from "lucide-react"
import { SiNextdotjs, SiPython } from "react-icons/si"
import Image from "next/image"

const modules = [
  {
    id: "WS-01",
    title: "Next.js Engine",
    status: "OPTIMIZED",
    description: "High-fidelity web architecture. Prerendered, scale-ready frontend systems.",
    icon: <SiNextdotjs className="w-5 h-5" />,
    color: "text-brand-pear",
    borderColor: "border-brand-pear/30"
  },
  {
    id: "BK-02",
    title: "Python Core",
    status: "OPERATIONAL",
    description: "Backend automation & data processing via FastAPI and robust asynchronous workflows.",
    icon: <SiPython className="w-5 h-5" />,
    color: "text-brand-blue",
    borderColor: "border-brand-blue/30"
  },
  {
    id: "DV-03",
    title: "Cloud Strategy",
    status: "DEPLOYED",
    description: "Serverless orchestration and automated deployment pipelines for high-availability systems.",
    icon: <Cloud className="w-5 h-5" />,
    color: "text-brand-pear",
    borderColor: "border-brand-pear/30"
  }
]

import { Section } from "@/components/layout/Section"

export function SystemArchitecture() {
  return (
    <Section 
      id="expertise" 
      label="CORE_INFRASTRUCTURE // DEPLOYMENT_TOPOLOGY" 
      title="Expertise" 
      highlight="Architecture." 
      color="pear"
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
        {modules.map((module, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="relative bg-bg-dark border border-white/5 p-6 sm:p-8 flex flex-col items-center text-center group min-h-[320px] hover:border-white/20 transition-all h-full"
          >
            {/* Geometric Detail */}
            <div className={`absolute top-0 right-0 w-8 h-8 border-t border-r border-white/10 group-hover:border-brand-pear/50 transition-colors`}></div>
            
            <div className="mb-auto w-full flex flex-col items-center">
              <div className="flex justify-between items-start w-full mb-8">
                <div className={`w-10 h-10 flex items-center justify-center bg-white/5 rounded-none border-l-2 ${module.borderColor} ${module.color}`}>
                  {module.icon || <Box className="w-5 h-5" />}
                </div>
                <span className="font-mono text-[8px] text-white/20 tracking-tighter">{module.id}</span>
              </div>
              
              <div className="mb-6 p-6 rounded-full bg-white/5 group-hover:bg-brand-pear/10 transition-all duration-500 scale-100 group-hover:scale-110">
                 <div className={`${module.color} opacity-40 group-hover:opacity-100 transition-opacity`}>
                    <div className="scale-[2.0]">
                      {module.icon || <Box className="w-5 h-5" />}
                    </div>
                 </div>
              </div>

              <h3 className="text-lg sm:text-xl font-space-grotesk font-black text-white uppercase tracking-widest mb-3">{module.title}</h3>
              <p className="text-xs text-foreground/50 leading-relaxed font-inter max-w-[200px]">{module.description}</p>
            </div>

            <div className="mt-8 pt-6 border-t border-white/5 w-full flex justify-between items-center">
              <div className="flex items-center space-x-2">
                <Activity className="w-3 h-3 text-brand-pear animate-pulse" />
                <span className="text-[10px] font-mono font-black tracking-widest text-brand-pear uppercase">{module.status}</span>
              </div>
              <div className="flex space-x-1 opacity-20 group-hover:opacity-40 transition-opacity">
                <div className="w-1 h-3 bg-white"></div>
                <div className="w-1 h-3 bg-white"></div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  )
}
