"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Award, X, ExternalLink } from "lucide-react"
import Image from "next/image"

const certificates = [
  {
    id: "CERT-01",
    title: "Computer Vision Specialization",
    issuer: "TechTalk Webinar Series",
    date: "January 22, 2021",
    description: "Intensive training on object detection powered by ImageAI and OpenCV. Mastered the implementation of deep learning models for real-world visual data processing within the Python environment.",
    status: "VERIFIED",
    certImg: "/certificates/python.png",
    link: "/certificates/python.pdf",
    color: "text-brand-blue",
    borderColor: "border-brand-blue/30"
  },
  {
    id: "CERT-02",
    title: "AI & Cloud Architecture",
    issuer: "TechTalk Webinar Series",
    date: "December 11, 2020",
    description: "Comprehensive exploration of Huawei AI Ascend and Cloud ecosystems. Focused on pervasive intelligence, enterprise digital transformation, and accelerating innovation through cloud-native AI frameworks.",
    status: "VERIFIED",
    certImg: "/certificates/cloud.png",
    link: "/certificates/cloud.pdf",
    color: "text-brand-blue",
    borderColor: "border-brand-blue/30"
  }
]

import { Section } from "@/components/layout/Section"

export function Certificates() {
  const [selectedCert, setSelectedCert] = useState<typeof certificates[0] | null>(null)

  return (
    <Section 
      id="certificates" 
      label="ACADEMIC_RECORDS // VERIFICATION_CHECKS" 
      title="Verified" 
      highlight="Credentials." 
      color="blue"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
        {certificates.map((cert, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="group"
          >
            <button 
              onClick={() => setSelectedCert(cert)}
              className={`w-full text-left block bg-bg-dark border border-white/5 p-6 sm:p-8 flex flex-col min-h-[320px] hover:border-white/20 transition-colors relative overflow-hidden h-full cursor-pointer`}
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
                <h3 className="text-lg sm:text-xl font-space-grotesk font-black text-white uppercase tracking-widest text-center">{cert.title}</h3>
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
            </button>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedCert && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedCert(null)}
              className="absolute inset-0 bg-bg-dark/95 backdrop-blur-xl"
            />
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-4xl bg-white/[0.03] border border-white/10 rounded-2xl overflow-hidden shadow-2xl"
            >
              <button 
                onClick={() => setSelectedCert(null)}
                className="absolute top-6 right-6 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-white/5 hover:bg-white/10 text-white/50 hover:text-white transition-all border border-white/10"
              >
                <X size={20} />
              </button>

              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="hidden lg:flex bg-white/5 p-8 items-center justify-center border-b lg:border-b-0 lg:border-r border-white/10">
                  <div className="relative w-full aspect-[4/3] drop-shadow-2xl">
                    <Image 
                      src={selectedCert.certImg} 
                      alt={selectedCert.title} 
                      fill 
                      className="object-contain"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      priority
                    />
                  </div>
                </div>

                <div className="p-8 md:p-12 flex flex-col">
                  <div className="mb-8">
                    <div className="flex flex-col border-l border-brand-blue/30 pl-4 mb-6">
                      <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-brand-blue mb-2">Record Verification</span>
                      <h3 className="text-2xl sm:text-3xl font-space-grotesk font-black text-white uppercase tracking-tight leading-none">
                        {selectedCert.title}
                      </h3>
                    </div>

                    <div className="space-y-4 mb-8">
                      <div>
                        <span className="block font-mono text-[10px] text-white/30 uppercase tracking-widest mb-1">Issuer</span>
                        <p className="text-white text-sm font-medium">{selectedCert.issuer}</p>
                      </div>
                      <div>
                        <span className="block font-mono text-[10px] text-white/30 uppercase tracking-widest mb-1">Issued Date</span>
                        <p className="text-white text-sm font-medium">{selectedCert.date}</p>
                      </div>
                      <div>
                        <span className="block font-mono text-[10px] text-white/30 uppercase tracking-widest mb-1">Description</span>
                        <p className="text-white/60 text-sm leading-relaxed max-w-sm font-geist">
                          {selectedCert.description}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-auto flex flex-row gap-4">
                    <a 
                      href={selectedCert.link}
                      target="_blank"
                      rel="noreferrer"
                      className="flex-1 h-12 flex items-center justify-center gap-2 bg-brand-blue text-white hover:bg-brand-blue/80 transition-all font-bold tracking-tighter text-sm rounded-lg shadow-lg shadow-brand-blue/20"
                    >
                      VIEW FULL PDF
                      <ExternalLink size={16} />
                    </a>
                    <button 
                      onClick={() => setSelectedCert(null)}
                      className="flex-1 h-12 flex items-center justify-center text-white/50 hover:text-white transition-all text-sm font-mono tracking-widest border border-white/10 hover:border-white/20 rounded-lg uppercase"
                    >
                      Close Report
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </Section>
  )
}
