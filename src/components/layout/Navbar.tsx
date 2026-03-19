"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { FaGithub, FaLinkedin, FaStackOverflow } from "react-icons/fa6"

export function Navbar({ onContactOpen }: { onContactOpen?: () => void }) {
  return (
    <motion.header 
      className="fixed top-6 inset-x-0 mx-auto w-fit z-50 bg-bg-dark/40 backdrop-blur-lg border border-white/10 rounded-full shadow-[0_0_30px_rgba(0,0,0,0.5)] px-2"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="flex items-center justify-between h-11 px-4 gap-6 max-w-[95vw]">
          <Link href="/" className="flex items-center group">
            <span className="font-space-grotesk text-sm font-black tracking-widest uppercase transition-all duration-500 bg-linear-to-r from-brand-pear from-50% to-white to-50% bg-[length:200%_100%] bg-[position:100%_0] group-hover:bg-[position:0%_0] bg-clip-text text-transparent">
              PHASE-SYS
            </span>
          </Link>
          
          <div className="h-4 w-[1px] bg-white/10"></div>
          
          <div className="flex items-center gap-4 text-white/30">
            <a href="https://github.com/phase-sys" target="_blank" rel="noreferrer" className="hover:text-brand-pear transition-colors">
              <FaGithub size={16} />
            </a>
            <a href="https://www.linkedin.com/in/jose-alfred-magat-188705239" target="_blank" rel="noreferrer" className="hover:text-brand-pear transition-colors">
              <FaLinkedin size={16} />
            </a>
            <a href="https://stackoverflow.com/users/18588468/isphaseshape" target="_blank" rel="noreferrer" className="hover:text-brand-pear transition-colors">
              <FaStackOverflow size={16} />
            </a>
          </div>

          <div className="h-4 w-[1px] bg-white/10"></div>

          <nav className="flex items-center space-x-8 h-full">
          <a href="#expertise" className="text-[10px] font-mono font-bold text-foreground/40 hover:text-brand-pear transition-colors tracking-widest uppercase h-full flex items-center border-b-2 border-transparent hover:border-brand-pear/50">
            Expertise
          </a>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="text-[10px] font-mono font-bold text-foreground/40 hover:text-brand-pear transition-colors tracking-widest uppercase h-full flex items-center border-b-2 border-transparent hover:border-brand-pear/50"
          >
            Resum&eacute;
          </a>
        </nav>
      </div>
    </motion.header>
  )
}
