"use client"

import { motion, AnimatePresence } from "framer-motion"
import { X, ExternalLink, Mail, Linkedin, Github, ArrowUpRight } from "lucide-react"

interface ContactModalProps {
  isOpen: boolean
  onClose: () => void
}

export function ContactModal({ isOpen, onClose }: ContactModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-50 bg-black/75 backdrop-blur-md"
          />

          {/* Modal Container */}
          <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.25 }}
              className="w-full max-w-lg bg-[#0e0e12] border border-white/15 rounded-3xl p-6 sm:p-8 shadow-2xl pointer-events-auto relative"
            >
              {/* Close Button */}
              <button 
                onClick={onClose}
                className="absolute top-6 right-6 w-9 h-9 flex items-center justify-center rounded-full bg-white/5 hover:bg-white/10 text-white/70 hover:text-white transition-all border border-white/10 cursor-pointer"
                aria-label="Close"
              >
                <X size={18} />
              </button>

              {/* Modal Header */}
              <div className="mb-8">
                <h2 className="text-2xl sm:text-3xl font-space-grotesk font-bold text-white mb-2">
                  Get in Touch
                </h2>
                <p className="text-sm text-foreground/60 leading-relaxed font-sans">
                  Feel free to reach out for collaborations, inquiries, or just to say hello.
                </p>
              </div>

              {/* Contact Links */}
              <div className="space-y-3">
                {/* Email */}
                <a 
                  href="mailto:magatalfred4@gmail.com" 
                  className="flex items-center justify-between p-4 bg-white/[0.02] border border-white/10 hover:border-brand-pear/40 hover:bg-white/[0.04] rounded-2xl transition-all duration-300 group"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-white/5 border border-white/10 text-brand-pear group-hover:scale-105 transition-transform duration-300">
                      <Mail size={18} />
                    </div>
                    <div>
                      <span className="block text-[11px] font-mono text-white/40 uppercase tracking-wider mb-0.5">Email</span>
                      <span className="text-sm font-medium text-white group-hover:text-brand-pear transition-colors break-all">
                        magatalfred4@gmail.com
                      </span>
                    </div>
                  </div>
                  <ArrowUpRight size={18} className="text-white/30 group-hover:text-brand-pear transition-colors shrink-0" />
                </a>

                {/* LinkedIn */}
                <a 
                  href="https://www.linkedin.com/in/jose-alfred-magat-188705239" 
                  target="_blank" 
                  rel="noreferrer"
                  className="flex items-center justify-between p-4 bg-white/[0.02] border border-white/10 hover:border-brand-pear/40 hover:bg-white/[0.04] rounded-2xl transition-all duration-300 group"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-white/5 border border-white/10 text-brand-pear group-hover:scale-105 transition-transform duration-300">
                      <Linkedin size={18} />
                    </div>
                    <div>
                      <span className="block text-[11px] font-mono text-white/40 uppercase tracking-wider mb-0.5">LinkedIn</span>
                      <span className="text-sm font-medium text-white group-hover:text-brand-pear transition-colors">
                        Jose Alfred Magat
                      </span>
                    </div>
                  </div>
                  <ExternalLink size={16} className="text-white/30 group-hover:text-brand-pear transition-colors shrink-0" />
                </a>

                {/* GitHub */}
                <a 
                  href="https://github.com/phase-sys" 
                  target="_blank" 
                  rel="noreferrer"
                  className="flex items-center justify-between p-4 bg-white/[0.02] border border-white/10 hover:border-white/30 hover:bg-white/[0.04] rounded-2xl transition-all duration-300 group"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-white/5 border border-white/10 text-white group-hover:scale-105 transition-transform duration-300">
                      <Github size={18} />
                    </div>
                    <div>
                      <span className="block text-[11px] font-mono text-white/40 uppercase tracking-wider mb-0.5">GitHub</span>
                      <span className="text-sm font-medium text-white group-hover:text-white transition-colors">
                        phase-sys
                      </span>
                    </div>
                  </div>
                  <ExternalLink size={16} className="text-white/30 group-hover:text-white transition-colors shrink-0" />
                </a>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  )
}
