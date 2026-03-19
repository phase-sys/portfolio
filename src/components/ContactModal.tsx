"use client"

import { motion, AnimatePresence } from "framer-motion"
import { X, Send, Mail, Linkedin, Github } from "lucide-react"

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
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="fixed inset-0 z-[60] flex items-center justify-center p-4 pointer-events-none"
          >
            <div className="w-full max-w-xl bg-bg-dark border border-white/10 p-8 shadow-[0_32px_64px_rgba(0,0,0,0.5)] pointer-events-auto relative overflow-hidden group">
              {/* Tactical Detail */}
              <div className="absolute top-0 right-0 w-16 h-16 border-t border-r border-brand-pear/20 group-hover:border-brand-pear/50 transition-colors"></div>
              
              <div className="flex justify-between items-start mb-12">
                <div className="space-y-1">
                  <div className="flex items-center space-x-2 text-brand-pear font-mono text-[10px] tracking-widest uppercase mb-2">
                    <span className="w-2 h-2 rounded-full bg-brand-pear animate-pulse"></span>
                    <span>Direct Connection Protocol</span>
                  </div>
                  <h2 className="text-4xl font-space-grotesk font-black text-white uppercase tracking-tight">Reach Out.</h2>
                </div>
                <button 
                  onClick={onClose}
                  className="p-2 hover:bg-white/5 transition-colors group/btn rounded-none border border-transparent hover:border-white/10"
                >
                  <X className="w-6 h-6 text-white group-hover/btn:rotate-90 transition-transform duration-300" />
                </button>
              </div>

              <div className="space-y-8">
                <p className="text-foreground/60 font-inter leading-relaxed">
                  I'm currently specialized in **Next.js and Python** systems. If you have a professional inquiry or a technical challenge, start a project discussion here.
                </p>

                <div className="grid gap-4">
                  <a 
                    href="mailto:contact@example.com" 
                    className="flex items-center justify-between p-6 bg-white/5 border border-white/5 hover:border-brand-pear/30 hover:bg-brand-pear/5 transition-all group"
                  >
                    <div className="flex items-center space-x-4">
                      <Mail className="w-6 h-6 text-brand-pear" />
                      <div className="text-left">
                        <span className="block text-white font-bold text-sm uppercase tracking-widest">Email Submission</span>
                        <span className="text-[10px] font-mono text-white/30 group-hover:text-brand-pear/40">contact@example.com</span>
                      </div>
                    </div>
                    <Send className="w-4 h-4 text-white/20 group-hover:text-brand-pear group-hover:translate-x-1 transition-all" />
                  </a>

                  <div className="grid grid-cols-2 gap-4">
                    <a 
                      href="https://linkedin.com" 
                      target="_blank" 
                      rel="noreferrer"
                      className="flex flex-col items-center justify-center p-6 bg-white/5 border border-white/5 hover:border-brand-blue/30 hover:bg-brand-blue/5 transition-all group"
                    >
                      <Linkedin className="w-8 h-8 text-brand-blue mb-4" />
                      <span className="text-[10px] font-mono font-bold text-white uppercase tracking-widest">LinkedIn Profile</span>
                    </a>
                    <a 
                      href="https://github.com/phase-sys" 
                      target="_blank" 
                      rel="noreferrer"
                      className="flex flex-col items-center justify-center p-6 bg-white/5 border border-white/5 hover:border-brand-pear/30 hover:bg-brand-pear/5 transition-all group"
                    >
                      <Github className="w-8 h-8 text-white/50 group-hover:text-white transition-all mb-4" />
                      <span className="text-[10px] font-mono font-bold text-white uppercase tracking-widest">Source Code</span>
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-12 flex items-center justify-between font-mono text-[8px] text-white/20 uppercase tracking-[0.2em] border-t border-white/5 pt-6">
                <span>COORD: 0x41 // 0x54</span>
                <span>SECURE_SESSION: TRUE</span>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
