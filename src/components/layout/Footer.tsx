import Link from "next/link"
import { FaGithub, FaLinkedin, FaStackOverflow } from "react-icons/fa"

export function Footer({ onContactOpen }: { onContactOpen?: () => void }) {
  return (
    <footer className="border-t border-white/10 pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 mb-16">
          <div className="md:col-span-2 space-y-4">
            <Link href="/" className="inline-flex items-center space-x-2">
              <span className="relative inline-flex h-2 w-2 rounded-full bg-brand-pear"></span>
              <span className="font-space-grotesk text-xl font-bold text-white tracking-tight">isPhaseShape Engineering</span>
            </Link>
            <p className="text-foreground/70 max-w-sm">
              Streamlining global operations through custom software. Specialized in transforming manual workflows into scalable digital infrastructure.
            </p>
          </div>
          <div>
            <h4 className="font-space-grotesk font-semibold text-white mb-4">Internal</h4>
            <ul className="space-y-3 text-sm text-foreground/70">
              <li><Link href="/projects" className="hover:text-brand-pear transition-colors">Case Studies</Link></li>
              <li><Link href="/certificates" className="hover:text-brand-pear transition-colors">Verified Expertise</Link></li>
              <li><Link href="/#services" className="hover:text-brand-pear transition-colors">Capabilities</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-space-grotesk font-semibold text-white mb-4">Connect</h4>
            <div className="flex space-x-4">
              <a href="https://www.linkedin.com/in/jose-alfred-magat-188705239" target="_blank" rel="noopener noreferrer" className="text-foreground/70 hover:text-brand-pear transition-colors">
                <FaLinkedin size={20} />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a href="https://github.com/phase-sys" target="_blank" rel="noopener noreferrer" className="text-foreground/70 hover:text-brand-pear transition-colors">
                <FaGithub size={20} />
                <span className="sr-only">GitHub</span>
              </a>
              <a href="https://stackoverflow.com/users/18588468/isphaseshape" target="_blank" rel="noopener noreferrer" className="text-foreground/70 hover:text-brand-pear transition-colors">
                <FaStackOverflow size={20} />
                <span className="sr-only">Stack Overflow</span>
              </a>
            </div>
            <div className="mt-6">
              <button 
                onClick={onContactOpen}
                className="font-semibold text-brand-pear hover:underline hover:underline-offset-4 flex items-center group cursor-pointer bg-transparent border-none p-0"
              >
                Reach Out
                <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-white/10 text-xs text-foreground/50">
          <p>Est. 2026 • isPhaseShape Engineering.</p>
          <p className="mt-2 md:mt-0">All rights reserved. Engineered for performance.</p>
        </div>
      </div>
    </footer>
  )
}
