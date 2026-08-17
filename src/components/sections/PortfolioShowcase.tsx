"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { SiNextdotjs, SiPython } from "react-icons/si"
import { Cloud, X, ExternalLink, ArrowUpRight } from "lucide-react"
import Image from "next/image"

const certificates = [
  {
    title: "Computer Vision Specialization",
    organization: "TechTalk Webinar Series",
    date: "Jan 2021",
    tag: "Computer Vision",
    certImg: "/certificates/python.png",
    link: "/certificates/python.pdf"
  },
  {
    title: "AI & Cloud Architecture",
    organization: "TechTalk Webinar Series",
    date: "Dec 2020",
    tag: "Cloud & AI",
    certImg: "/certificates/cloud.png",
    link: "/certificates/cloud.pdf"
  }
]

interface PortfolioShowcaseProps {
  onContactOpen?: () => void
}

export function PortfolioShowcase({ onContactOpen }: PortfolioShowcaseProps) {
  const [selectedCert, setSelectedCert] = useState<typeof certificates[0] | null>(null)

  return (
    <section className="py-12 md:py-16 relative w-full">
      <div className="container mx-auto px-4 md:px-8 max-w-6xl">
        
        {/* Top Call to Action Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center text-center max-w-2xl mx-auto mb-12"
        >
          <h1 className="text-3xl sm:text-4xl font-space-grotesk font-bold text-white tracking-tight mb-2">
            Software Engineer
          </h1>

          <p className="text-sm sm:text-base text-foreground/60 leading-relaxed font-sans mb-6">
            Specialized in modern web & cloud architecture.
          </p>

          {/* Primary CTA Button */}
          <button
            onClick={onContactOpen}
            className="group relative inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-brand-pear text-bg-dark font-space-grotesk font-bold text-xs sm:text-sm transition-all duration-300 hover:bg-[#c9ee0f] hover:scale-105 shadow-[0_0_20px_rgba(182,216,13,0.3)] hover:shadow-[0_0_30px_rgba(182,216,13,0.45)] cursor-pointer"
          >
            <span>Get in Touch</span>
            <ArrowUpRight className="w-4 h-4 text-bg-dark stroke-[2.5] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
          </button>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-12 gap-5">
          
          {/* Tile 1: Frontend & Web Applications (Featured Wide Tile) */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="col-span-12 lg:col-span-7 bg-white/[0.02] border border-white/10 hover:border-brand-pear/30 rounded-3xl p-7 sm:p-8 flex flex-col justify-between group transition-all duration-300 hover:bg-white/[0.03] hover:-translate-y-1 shadow-lg shadow-black/20"
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-11 h-11 rounded-2xl flex items-center justify-center bg-white/5 border border-white/10 text-white group-hover:scale-105 transition-transform duration-300">
                  <SiNextdotjs className="w-5 h-5" />
                </div>
                <span className="text-[11px] font-mono uppercase tracking-widest px-3 py-1 rounded-full bg-brand-pear/10 text-brand-pear border border-brand-pear/20">
                  Frontend Focus
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-space-grotesk font-bold text-white mb-2.5">
                Frontend & Web Architecture
              </h3>
              
              <p className="text-sm text-foreground/65 leading-relaxed font-sans mb-6 max-w-lg">
                Architecting responsive, type-safe web applications with Next.js, React 19, and Tailwind CSS. Focused on clean state management, accessible UI patterns, and fluid micro-interactions.
              </p>
            </div>

            <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5">
              {["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion"].map((skill, sIdx) => (
                <span 
                  key={sIdx}
                  className="text-xs font-mono px-2.5 py-1 rounded-md bg-white/5 text-white/70 border border-white/5"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Tile 2: Backend Development (Medium Tile) */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.05 }}
            className="col-span-12 lg:col-span-5 bg-white/[0.02] border border-white/10 hover:border-brand-blue/30 rounded-3xl p-7 sm:p-8 flex flex-col justify-between group transition-all duration-300 hover:bg-white/[0.03] hover:-translate-y-1 shadow-lg shadow-black/20"
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-11 h-11 rounded-2xl flex items-center justify-center bg-white/5 border border-white/10 text-white group-hover:scale-105 transition-transform duration-300">
                  <SiPython className="w-5 h-5" />
                </div>
                <span className="text-[11px] font-mono uppercase tracking-widest px-3 py-1 rounded-full bg-brand-blue/10 text-brand-blue border border-brand-blue/20">
                  Backend
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-space-grotesk font-bold text-white mb-2.5">
                API & Backend Systems
              </h3>
              
              <p className="text-sm text-foreground/65 leading-relaxed font-sans mb-6">
                Building scalable RESTful APIs, asynchronous worker pipelines, and database integrations with Python, FastAPI, and PostgreSQL.
              </p>
            </div>

            <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5">
              {["Python", "FastAPI", "AsyncIO", "PostgreSQL", "REST APIs"].map((skill, sIdx) => (
                <span 
                  key={sIdx}
                  className="text-xs font-mono px-2.5 py-1 rounded-md bg-white/5 text-white/70 border border-white/5"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Tile 3: Cloud & DevOps */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="col-span-12 lg:col-span-4 bg-white/[0.02] border border-white/10 hover:border-white/20 rounded-3xl p-6 sm:p-7 flex flex-col justify-between group transition-all duration-300 hover:bg-white/[0.03] hover:-translate-y-1 shadow-lg shadow-black/20"
          >
            <div>
              <div className="flex items-center justify-between mb-5">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-white/5 border border-white/10 text-white">
                  <Cloud className="w-5 h-5" />
                </div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-white/40">
                  Infra
                </span>
              </div>

              <h3 className="text-lg font-space-grotesk font-bold text-white mb-2">
                Cloud & DevOps
              </h3>
              
              <p className="text-xs text-foreground/60 leading-relaxed font-sans mb-5">
                Containerized workflows with Docker, automated CI/CD pipelines, and reliable serverless cloud orchestration.
              </p>
            </div>

            <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/5">
              {["Docker", "CI/CD", "Serverless", "Linux"].map((skill, sIdx) => (
                <span 
                  key={sIdx}
                  className="text-[11px] font-mono px-2 py-0.5 rounded bg-white/5 text-white/60"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Tile 4: Certificate 1 */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.15 }}
            className="col-span-12 sm:col-span-6 lg:col-span-4 bg-white/[0.02] border border-white/10 hover:border-white/20 rounded-3xl p-6 flex flex-col justify-between group transition-all duration-300 hover:bg-white/[0.03] hover:-translate-y-1 shadow-lg shadow-black/20"
          >
            <div>
              <div className="flex items-center justify-between gap-2 mb-4">
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-brand-blue/10 text-brand-blue border border-brand-blue/20">
                  {certificates[0].tag}
                </span>
                <span className="text-xs text-white/40 font-mono">
                  {certificates[0].date}
                </span>
              </div>

              <div 
                onClick={() => setSelectedCert(certificates[0])}
                className="relative w-full min-h-[140px] aspect-[16/10] mb-4 rounded-xl overflow-hidden bg-black/30 border border-white/5 p-2 cursor-pointer group/img"
              >
                <Image 
                  src={certificates[0].certImg} 
                  alt={certificates[0].title} 
                  fill 
                  className="object-contain transition-transform duration-500 group-hover/img:scale-105" 
                  sizes="(max-width: 768px) 100vw, 33vw" 
                />
              </div>

              <h3 className="text-base font-space-grotesk font-bold text-white mb-1">
                {certificates[0].title}
              </h3>
              <p className="text-xs font-mono text-white/45 mb-4">
                {certificates[0].organization}
              </p>
            </div>

            <div className="flex items-center gap-2.5 pt-4 border-t border-white/5">
              <button
                onClick={() => setSelectedCert(certificates[0])}
                className="flex-1 h-8 flex items-center justify-center text-[11px] font-mono text-white/70 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg transition-all cursor-pointer"
              >
                Preview
              </button>
              <a 
                href={certificates[0].link}
                target="_blank"
                rel="noreferrer"
                className="h-8 px-3 flex items-center justify-center gap-1 text-[11px] font-mono text-brand-blue hover:text-white bg-brand-blue/10 hover:bg-brand-blue border border-brand-blue/20 rounded-lg transition-all"
              >
                PDF <ExternalLink className="w-2.5 h-2.5" />
              </a>
            </div>
          </motion.div>

          {/* Tile 5: Certificate 2 */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="col-span-12 sm:col-span-6 lg:col-span-4 bg-white/[0.02] border border-white/10 hover:border-white/20 rounded-3xl p-6 flex flex-col justify-between group transition-all duration-300 hover:bg-white/[0.03] hover:-translate-y-1 shadow-lg shadow-black/20"
          >
            <div>
              <div className="flex items-center justify-between gap-2 mb-4">
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-brand-blue/10 text-brand-blue border border-brand-blue/20">
                  {certificates[1].tag}
                </span>
                <span className="text-xs text-white/40 font-mono">
                  {certificates[1].date}
                </span>
              </div>

              <div 
                onClick={() => setSelectedCert(certificates[1])}
                className="relative w-full min-h-[140px] aspect-[16/10] mb-4 rounded-xl overflow-hidden bg-black/30 border border-white/5 p-2 cursor-pointer group/img"
              >
                <Image 
                  src={certificates[1].certImg} 
                  alt={certificates[1].title} 
                  fill 
                  className="object-contain transition-transform duration-500 group-hover/img:scale-105" 
                  sizes="(max-width: 768px) 100vw, 33vw" 
                />
              </div>

              <h3 className="text-base font-space-grotesk font-bold text-white mb-1">
                {certificates[1].title}
              </h3>
              <p className="text-xs font-mono text-white/45 mb-4">
                {certificates[1].organization}
              </p>
            </div>

            <div className="flex items-center gap-2.5 pt-4 border-t border-white/5">
              <button
                onClick={() => setSelectedCert(certificates[1])}
                className="flex-1 h-8 flex items-center justify-center text-[11px] font-mono text-white/70 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg transition-all cursor-pointer"
              >
                Preview
              </button>
              <a 
                href={certificates[1].link}
                target="_blank"
                rel="noreferrer"
                className="h-8 px-3 flex items-center justify-center gap-1 text-[11px] font-mono text-brand-blue hover:text-white bg-brand-blue/10 hover:bg-brand-blue border border-brand-blue/20 rounded-lg transition-all"
              >
                PDF <ExternalLink className="w-2.5 h-2.5" />
              </a>
            </div>
          </motion.div>

        </div>

        {/* Certificate Preview Modal */}
        <AnimatePresence>
          {selectedCert && (
            <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedCert(null)}
                className="absolute inset-0 bg-black/80 backdrop-blur-md"
              />
              
              <motion.div 
                initial={{ opacity: 0, scale: 0.95, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 15 }}
                className="relative w-full max-w-2xl bg-bg-dark border border-white/15 rounded-2xl overflow-hidden shadow-2xl z-10 p-6 sm:p-8"
              >
                <button 
                  onClick={() => setSelectedCert(null)}
                  className="absolute top-4 right-4 z-20 w-8 h-8 flex items-center justify-center rounded-full bg-white/5 hover:bg-white/10 text-white/70 hover:text-white transition-all border border-white/10 cursor-pointer"
                >
                  <X size={16} />
                </button>

                <div className="flex flex-col items-center text-center">
                  <div className="relative w-full aspect-[4/3] max-h-[50vh] mb-6">
                    <Image 
                      src={selectedCert.certImg} 
                      alt={selectedCert.title} 
                      fill 
                      className="object-contain"
                      sizes="(max-width: 768px) 100vw, 50vw"
                      priority
                    />
                  </div>

                  <h3 className="text-xl sm:text-2xl font-space-grotesk font-bold text-white mb-1">
                    {selectedCert.title}
                  </h3>
                  <p className="text-xs font-mono text-white/50 mb-6">
                    {selectedCert.organization} • {selectedCert.date}
                  </p>

                  <div className="flex gap-3 w-full max-w-xs">
                    <a 
                      href={selectedCert.link}
                      target="_blank"
                      rel="noreferrer"
                      className="flex-1 h-10 flex items-center justify-center gap-2 bg-brand-blue text-white hover:bg-brand-blue/80 transition-all font-medium text-xs rounded-xl"
                    >
                      Open PDF
                      <ExternalLink size={14} />
                    </a>
                    <button 
                      onClick={() => setSelectedCert(null)}
                      className="px-4 h-10 flex items-center justify-center text-white/70 hover:text-white transition-all text-xs border border-white/10 hover:border-white/20 rounded-xl cursor-pointer"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  )
}
