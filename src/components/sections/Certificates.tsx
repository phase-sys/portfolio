"use client"

import { motion } from "framer-motion"
import { Award } from "lucide-react"
import Image from "next/image"

const certificates = [
  {
    id: "CERT-01",
    title: "Verified Credentials",
    status: "LOCKED",
    certImg: "/certificates/python.png",
    link: "/certificates/python.pdf",
    color: "text-brand-blue",
    borderColor: "border-brand-blue/30"
  },
  {
    id: "CERT-02",
    title: "Cloud Infrastructure",
    status: "LOCKED",
    certImg: "/certificates/cloud.png",
    link: "/certificates/cloud.pdf",
    color: "text-brand-blue",
    borderColor: "border-brand-blue/30"
  }
]

export function Certificates() {
  return (
    <section id="certificates" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
          <div className="space-y-6">
            <div className="flex items-center space-x-3 text-brand-blue/60 font-mono text-[10px] tracking-widest uppercase">
              <div className="flex space-x-1">
                <div className="w-1 h-3 bg-brand-blue/30"></div>
                <div className="w-1 h-3 bg-brand-blue/10"></div>
              </div>
              <span>ACADEMIC_RECORDS // VERIFICATION_CHECKS</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-space-grotesk font-black text-white tracking-widest uppercase leading-none">
              Verified <span className="text-brand-blue">Credentials.</span>
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {certificates.map((cert, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="md:col-span-1 group"
            >
              <a 
                href={cert.link} 
                target="_blank" 
                rel="noreferrer" 
                className={`block bg-bg-dark border border-white/5 p-8 flex flex-col min-h-[320px] hover:border-white/20 transition-colors relative overflow-hidden h-full`}
              >
                <div className={`absolute top-0 right-0 w-8 h-8 border-t border-r border-white/10 group-hover:border-brand-blue/50 transition-colors`}></div>
                
                <div className="mb-auto">
                  <div className="flex justify-between items-start mb-8">
                    <div className={`w-10 h-10 flex items-center justify-center bg-white/5 border-l-2 ${cert.borderColor} ${cert.color}`}>
                      <Award className="w-5 h-5" />
                    </div>
                    <span className="font-mono text-[8px] text-white/20 tracking-tighter">{cert.id}</span>
                  </div>
                  
                  <div className="relative w-full h-32 mb-6 grayscale group-hover:grayscale-0 transition-all duration-500">
                    <Image src={cert.certImg} alt={cert.title} fill className="object-contain" sizes="(max-width: 768px) 100vw, 33vw" />
                  </div>
                  <h3 className="text-xl font-space-grotesk font-black text-white uppercase tracking-widest text-center">{cert.title}</h3>
                </div>

                <div className="mt-8 flex justify-between items-center pt-6 border-t border-white/5">
                  <div className="flex items-center space-x-2">
                    <span className="w-2 h-2 rounded-full bg-brand-blue animate-pulse"></span>
                    <span className="text-[10px] font-mono font-black tracking-widest text-brand-blue uppercase">{cert.status}</span>
                  </div>
                  <div className="flex space-x-1 opacity-20 group-hover:opacity-40 transition-opacity">
                    <div className="w-1 h-3 bg-white"></div>
                    <div className="w-1 h-3 bg-white"></div>
                  </div>
                </div>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
