import { FaGithub, FaLinkedin, FaStackOverflow } from "react-icons/fa"

export function Footer({ onContactOpen }: { onContactOpen?: () => void }) {
  return (
    <footer className="w-full border-t border-white/10 py-8 bg-bg-dark/40 backdrop-blur-sm">
      <div className="container mx-auto px-4 md:px-8 max-w-6xl flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-white/50">
        <div className="flex items-center gap-2">
          <span>&copy; {new Date().getFullYear()} JOSE ALFRED MAGAT</span>
        </div>

        <div className="flex items-center gap-6">
          <button 
            onClick={onContactOpen}
            className="hover:text-brand-pear transition-colors cursor-pointer"
          >
            Contact
          </button>
          <a 
            href="https://github.com/phase-sys" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-brand-pear transition-colors"
            aria-label="GitHub"
          >
            <FaGithub size={16} />
          </a>
          <a 
            href="https://www.linkedin.com/in/jose-alfred-magat-188705239" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-brand-pear transition-colors"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={16} />
          </a>
          <a 
            href="https://stackoverflow.com/users/18588468/isphaseshape" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-brand-pear transition-colors"
            aria-label="Stack Overflow"
          >
            <FaStackOverflow size={16} />
          </a>
        </div>
      </div>
    </footer>
  )
}
