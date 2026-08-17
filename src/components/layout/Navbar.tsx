"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { FaGithub, FaLinkedin, FaStackOverflow } from "react-icons/fa6"

export function Navbar({ onContactOpen }: { onContactOpen?: () => void }) {
  return (
    <motion.header 
      className="fixed top-0 inset-x-0 w-full z-50 bg-bg-dark/70 backdrop-blur-xl border-b border-white/10"
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto px-4 md:px-8 max-w-6xl flex items-center justify-between h-16">
        <Link href="/" className="flex items-center group">
          <span className="font-space-grotesk text-sm sm:text-base font-black tracking-widest uppercase transition-all duration-300 group-hover:text-brand-pear text-white">
            JOSE ALFRED MAGAT
          </span>
        </Link>
        
        <div className="flex items-center gap-6 sm:gap-8">
          <div className="flex items-center gap-5 text-white/50">
            <a 
              href="https://github.com/phase-sys" 
              target="_blank" 
              rel="noreferrer" 
              className="hover:text-brand-pear transition-colors"
              aria-label="GitHub"
            >
              <FaGithub size={18} />
            </a>
            <a 
              href="https://www.linkedin.com/in/jose-alfred-magat-188705239" 
              target="_blank" 
              rel="noreferrer" 
              className="hover:text-brand-pear transition-colors"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={18} />
            </a>
            <a 
              href="https://stackoverflow.com/users/18588468/isphaseshape" 
              target="_blank" 
              rel="noreferrer" 
              className="hover:text-brand-pear transition-colors"
              aria-label="Stack Overflow"
            >
              <FaStackOverflow size={18} />
            </a>
          </div>

          <div className="h-4 w-px bg-white/10"></div>

          <nav className="flex items-center">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="text-xs font-mono font-bold text-white/70 hover:text-brand-pear transition-colors tracking-widest uppercase"
            >
              Resum&eacute;
            </a>
          </nav>
        </div>
      </div>
    </motion.header>
  )
}
