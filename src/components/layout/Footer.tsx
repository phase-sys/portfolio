import Link from "next/link"
import { FaGithub, FaLinkedin, FaStackOverflow } from "react-icons/fa"
import { ArrowRight } from "lucide-react"

export function Footer({ onContactOpen }: { onContactOpen?: () => void }) {
  return (
    <footer className="py-20 relative overflow-hidden bg-bg-dark/40 border-t border-white/5 backdrop-blur-sm">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col items-center text-center space-y-12">
          
          {/* Brand Identity */}
          <div className="space-y-4">
            <Link href="/" className="inline-flex items-center space-x-3 group">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-pear opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-brand-pear shadow-[0_0_8px_rgba(182,216,13,0.5)]"></span>
              </span>
              <span className="font-space-grotesk text-2xl font-black text-white tracking-widest uppercase transition-all group-hover:tracking-[0.2em]">
                phase-sys
              </span>
            </Link>
            <p className="text-foreground/50 max-w-lg mx-auto text-sm leading-relaxed font-inter px-4">
              Versatile software engineer specializing in building high-performance, 
              type-safe web applications with <span className="text-white">Next.js</span>, 
              <span className="text-white">TypeScript</span>, and <span className="text-white">Python</span>.
            </p>
          </div>

          {/* Core Controls */}
          <div className="flex flex-col items-center gap-8">
            <button 
              onClick={onContactOpen}
              className="group flex items-center space-x-2 bg-white/5 border border-white/10 hover:border-brand-pear/50 px-8 py-3 rounded-full transition-all duration-500 hover:shadow-[0_0_20px_rgba(182,216,13,0.15)] cursor-pointer"
            >
              <span className="font-mono text-[10px] font-black tracking-[0.3em] uppercase text-brand-pear">REACH_OUT</span>
              <ArrowRight className="w-4 h-4 text-white/20 group-hover:text-brand-pear group-hover:translate-x-1 transition-all duration-300" />
            </button>

            <div className="flex items-center gap-6">
              <a href="https://www.linkedin.com/in/jose-alfred-magat-188705239" target="_blank" rel="noopener noreferrer" 
                 className="text-foreground/30 hover:text-brand-pear transition-all duration-300 hover:scale-110">
                <FaLinkedin size={20} />
              </a>
              <a href="https://github.com/phase-sys" target="_blank" rel="noopener noreferrer" 
                 className="text-foreground/30 hover:text-brand-pear transition-all duration-300 hover:scale-110">
                <FaGithub size={20} />
              </a>
              <a href="https://stackoverflow.com/users/18588468/isphaseshape" target="_blank" rel="noopener noreferrer" 
                 className="text-foreground/30 hover:text-brand-pear transition-all duration-300 hover:scale-110">
                <FaStackOverflow size={20} />
              </a>
            </div>
          </div>

          {/* System Status / Copyright */}
          <div className="w-full pt-12 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center space-x-3 text-[9px] font-mono text-white/20 tracking-[0.2em] uppercase">
              <div className="flex space-x-1">
                <div className="w-1 h-3 bg-white/20"></div>
                <div className="w-1 h-3 bg-white/5"></div>
              </div>
              <span>2026</span>
            </div>
            
            <div className="flex items-center gap-6">
              <span className="text-[10px] font-mono text-white/20 tracking-widest uppercase">
                &copy; PHASE-SYS
              </span>
              <div className="h-3 w-px bg-white/10 hidden md:block"></div>
              <span className="text-[10px] font-mono text-white/10 tracking-widest uppercase hidden md:block">
                All Rights Reserved
              </span>
            </div>
          </div>

        </div>
      </div>
    </footer>
  )
}
