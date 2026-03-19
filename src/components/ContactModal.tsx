"use client"

import { motion, AnimatePresence } from "framer-motion"
import { Award, X, ExternalLink, Send, Mail, Linkedin, Github } from "lucide-react"

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
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 30 }}
            className="fixed inset-0 z-[60] flex items-center justify-center p-4 pointer-events-none"
          >
            <div className="w-full max-w-xl bg-[#030303] border border-white/10 shadow-[0_40px_100px_rgba(0,0,0,0.8)] pointer-events-auto relative group overflow-hidden transform-gpu will-change-transform">
              {/* Animated Border Tracer */}
              <div className="absolute inset-0 pointer-events-none z-0">
                {/* Moving Data Packet Dot */}
                <svg className="absolute inset-[1px] w-[calc(100%-2px)] h-[calc(100%-2px)]" shapeRendering="geometricPrecision">
                  <motion.rect
                    width="100%"
                    height="100%"
                    fill="none"
                    stroke="url(#gradient)"
                    strokeWidth="2"
                    strokeLinecap="square"
                    strokeDasharray="10 1000"
                    initial={{ strokeDashoffset: 1000 }}
                    animate={{ strokeDashoffset: 0 }}
                    transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                  />
                  <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#B6D80D" stopOpacity="0" />
                      <stop offset="50%" stopColor="#B6D80D" stopOpacity="1" />
                      <stop offset="100%" stopColor="#B6D80D" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>

              <div className="p-6 sm:p-10 relative z-10">
                <div className="flex justify-between items-start mb-6 sm:mb-8">
                  <div className="space-y-3 sm:space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="flex space-x-1">
                        <div className="w-1 h-3 bg-brand-pear"></div>
                        <div className="w-1 h-3 bg-brand-pear/20"></div>
                      </div>
                      <span className="font-mono text-[8px] sm:text-[9px] font-black tracking-[0.3em] uppercase text-brand-pear">Get in Touch</span>
                    </div>
                    <div className="space-y-1">
                      <h2 className="text-3xl sm:text-5xl font-space-grotesk font-black text-white uppercase tracking-tighter leading-none">
                        REACH <span className="text-brand-pear">OUT.</span>
                      </h2>
                      <p className="text-foreground/40 text-[8px] sm:text-[9px] font-mono tracking-[0.1em] sm:tracking-[0.15em] uppercase leading-relaxed max-w-[280px] sm:max-w-[360px]">
                        Open for technical consultations and web architecture.
                      </p>
                    </div>
                  </div>
                  <button 
                    onClick={onClose}
                    className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center bg-white/5 border border-white/10 hover:border-brand-pear/50 hover:bg-brand-pear/10 transition-all group/close cursor-pointer"
                  >
                    <X className="w-4 h-4 sm:w-5 sm:h-5 text-white/50 group-hover/close:text-white group-hover/close:rotate-90 transition-all" />
                  </button>
                </div>

                <div className="grid gap-3 sm:gap-4">
                  {/* Primary Contact: Email */}
                  <a 
                    href="mailto:magatalfred4@gmail.com" 
                    className="flex items-center justify-between p-4 sm:p-6 bg-white/[0.02] border border-white/5 hover:border-brand-pear/30 hover:bg-brand-pear/[0.03] transition-all group/email"
                  >
                    <div className="flex items-center space-x-4 sm:space-x-5">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center bg-white/5 border border-white/10 group-hover/email:border-brand-pear/30 transition-colors">
                        <Mail className="w-3 h-3 sm:w-4 sm:h-4 text-brand-pear" />
                      </div>
                      <div className="text-left">
                        <span className="block text-white/30 font-black text-[7px] sm:text-[8px] uppercase tracking-[0.3em] mb-1">EMAIL_SUBMISSION</span>
                        <span className="text-xs sm:text-base font-space-grotesk font-bold text-white group-hover/email:text-brand-pear transition-colors break-all">magatalfred4@gmail.com</span>
                      </div>
                    </div>
                    <Send className="w-3 h-3 sm:w-4 sm:h-4 text-white/10 group-hover/email:text-brand-pear transistion-all" />
                  </a>

                  <div className="grid gap-3 sm:gap-4">
                    {/* LinkedIn */}
                    <a 
                      href="https://www.linkedin.com/in/jose-alfred-magat-188705239" 
                      target="_blank" 
                      rel="noreferrer"
                      className="flex items-center justify-between p-4 sm:p-6 bg-white/[0.02] border border-white/5 hover:border-[#0077B5]/30 hover:bg-[#0077B5]/[0.03] transition-all group/link"
                    >
                      <div className="flex items-center space-x-4 sm:space-x-5">
                        <div className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center bg-white/5 border border-white/10 group-hover/link:border-[#0077B5]/30 transition-colors">
                          <Linkedin className="w-3 h-3 sm:w-4 sm:h-4 text-[#0077B5]" />
                        </div>
                        <div className="text-left">
                          <span className="block text-white/30 font-black text-[7px] sm:text-[8px] uppercase tracking-[0.3em] mb-1">NETWORK_CHANNEL</span>
                          <span className="text-sm sm:text-base font-space-grotesk font-black text-white tracking-widest leading-none">LINKEDIN</span>
                        </div>
                      </div>
                      <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4 text-white/10 group-hover/link:text-[#0077B5] transition-all" />
                    </a>

                    {/* GitHub */}
                    <a 
                      href="https://github.com/phase-sys" 
                      target="_blank" 
                      rel="noreferrer"
                      className="flex items-center justify-between p-4 sm:p-6 bg-white/[0.02] border border-white/5 hover:border-white/30 hover:bg-white/[0.03] transition-all group/git"
                    >
                      <div className="flex items-center space-x-4 sm:space-x-5">
                        <div className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center bg-white/5 border border-white/10 group-hover/git:border-white/30 transition-colors">
                          <Github className="w-3 h-3 sm:w-4 sm:h-4 text-white/50 group-hover/git:text-white" />
                        </div>
                        <div className="text-left">
                          <span className="block text-white/30 font-black text-[7px] sm:text-[8px] uppercase tracking-[0.3em] mb-1">CODE_BASE</span>
                          <span className="text-sm sm:text-base font-space-grotesk font-black text-white tracking-widest leading-none">GITHUB</span>
                        </div>
                      </div>
                      <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4 text-white/10 group-hover/git:text-white transition-all" />
                    </a>
                  </div>
                </div>

                <div className="mt-8 sm:mt-10 flex items-center justify-between font-mono text-[7px] sm:text-[8px] text-white/10 uppercase tracking-[0.2em] sm:tracking-[0.4em] border-t border-white/5 pt-6 sm:pt-8">
                  <div className="flex items-center space-x-2">
                    <div className="w-1 h-1 bg-brand-pear animate-pulse"></div>
                    <span>Online & Available</span>
                  </div>
                  <span>Remote</span>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
