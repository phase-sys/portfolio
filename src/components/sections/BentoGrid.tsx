"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/Card"
import { Badge } from "@/components/ui/Badge"
import { Globe, Layers, Monitor, Terminal, Award, Cpu, Code2, Zap } from "lucide-react"
import Image from "next/image"

const bentoItems = [
  {
    title: "Next.js Mastery",
    subtitle: "High-Performance Web",
    description: "Architecting lightning-fast platforms with App Router, SSR, and optimized Core Web Vitals.",
    icon: <Globe className="w-8 h-8 text-brand-pear" />,
    className: "md:col-span-2 md:row-span-2 bg-gradient-to-br from-brand-pear/10 to-transparent border-brand-pear/20",
    tech: ["Next.js", "React", "TypeScript"]
  },
  {
    title: "Python Automation",
    subtitle: "Backend & Workflows",
    description: "Automating complex business logic and data processing with FastAPI and robust Python scripts.",
    icon: <Terminal className="w-8 h-8 text-brand-blue" />,
    className: "md:col-span-2 md:row-span-1 border-brand-blue/20 bg-brand-blue/5",
    tech: ["Python", "FastAPI", "PostgreSQL"]
  },
  {
    title: "Verified: Python 3",
    subtitle: "U. of Michigan",
    icon: <Award className="w-6 h-6 text-brand-emerald" />,
    className: "md:col-span-1 md:row-span-1 border-brand-emerald/20 bg-brand-emerald/5 flex flex-col items-center justify-center text-center p-4",
    isCert: true,
    certImg: "/certificates/python.png",
    link: "/certificates/python.pdf"
  },
  {
    title: "Cloud Infrastructure",
    subtitle: "Google Cloud",
    icon: <Cpu className="w-6 h-6 text-brand-blue" />,
    className: "md:col-span-1 md:row-span-1 border-brand-blue/20 bg-brand-blue/5 flex flex-col items-center justify-center text-center p-4",
    isCert: true,
    certImg: "/certificates/cloud.png",
    link: "/certificates/cloud.pdf"
  },
  {
    title: "Full-Stack Ops",
    subtitle: "Docker & CI/CD",
    description: "Ensuring seamless deployment and scalability through modern DevOps practices.",
    icon: <Zap className="w-6 h-6 text-brand-pear" />,
    className: "md:col-span-1 md:row-span-2 border-white/10 bg-white/5",
    tech: ["Docker", "Redis", "Actions"]
  },
  {
    title: "Personal Stack",
    description: "Current favorite tools: Tailwind CSS, Framer Motion, and Prisma.",
    icon: <Code2 className="w-8 h-8 text-white/50" />,
    className: "md:col-span-2 md:row-span-1 border-white/10 bg-black/20",
  }
]

export function BentoGrid() {
  return (
    <section id="expertise" className="py-24 relative overflow-hidden bg-bg-dark">
      <div className="container mx-auto px-4 md:px-8">
        <div className="mb-16 text-left">
          <Badge variant="outline" className="mb-4 border-brand-pear/30 text-brand-pear px-4 py-1">
            Personal Portal
          </Badge>
          <h2 className="text-4xl md:text-6xl font-space-grotesk font-extrabold text-white tracking-tight">
            The Expertise <span className="text-brand-pear">Matrix.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-3 gap-4 auto-rows-[180px]">
          {bentoItems.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className={`group relative rounded-3xl border p-8 transition-all duration-500 hover:shadow-[0_0_40px_rgba(200,255,0,0.05)] overflow-hidden ${item.className}`}
            >
              {/* Glossy Overlay */}
              <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              
              {item.isCert ? (
                <a href={item.link} target="_blank" rel="noreferrer" className="flex flex-col items-center justify-center h-full space-y-4">
                  <div className="relative w-16 h-16 rounded-xl overflow-hidden bg-black/40 border border-white/10 p-2 group-hover:scale-110 transition-transform duration-500">
                    <Image src={item.certImg} alt={item.title} fill className="object-contain" sizes="64px" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold font-space-grotesk text-white">{item.title}</h3>
                    <p className="text-[10px] text-foreground/50 uppercase tracking-widest">{item.subtitle}</p>
                  </div>
                </a>
              ) : (
                <div className="flex flex-col h-full">
                  <div className="mb-auto">
                    <div className="mb-4 inline-block p-3 rounded-2xl bg-white/5 group-hover:bg-brand-pear/10 transition-colors">
                      {item.icon}
                    </div>
                    <h3 className="text-xl font-bold font-space-grotesk text-white mb-2">{item.title}</h3>
                    {item.subtitle && <p className="text-brand-pear/60 text-xs font-semibold uppercase tracking-wider mb-4">{item.subtitle}</p>}
                    <p className="text-sm text-foreground/70 leading-relaxed max-w-[280px] line-clamp-3">
                      {item.description}
                    </p>
                  </div>
                  
                  {item.tech && (
                    <div className="mt-4 flex flex-wrap gap-2">
                      {item.tech.map(t => (
                        <span key={t} className="text-[10px] bg-white/5 px-2 py-0.5 rounded-full border border-white/10 text-white/50">{t}</span>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
