"use client"

import { useState, useEffect } from "react"
import { ArrowUp, Terminal } from "lucide-react"

export function Footer() {
  const [time, setTime] = useState<string>("")

  useEffect(() => {
    const updateTime = () => {
      const now = new Date()
      // Always forces Philippine Time (Asia/Manila, UTC+8) regardless of visitor location
      setTime(
        now.toLocaleTimeString("en-US", {
          timeZone: "Asia/Manila",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: true,
        })
      )
    }
    updateTime()
    const timer = setInterval(updateTime, 1000)
    return () => clearInterval(timer)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="w-full border-t border-white/5 py-10 mt-4 relative">
      <div className="container mx-auto px-4 md:px-8 max-w-6xl flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-white/40">
        
        {/* Code Brand Note */}
        <div className="flex items-center gap-2">
          <span>💻</span>
          <a 
            href="https://github.com/phase-sys"
            target="_blank"
            rel="noreferrer"
            className="text-white/60 hover:text-brand-pear tracking-wider transition-colors"
          >
            phase-sys
          </a>
        </div>

        {/* Live Local Time (Always PHT) & Back to Top */}
        <div className="flex items-center gap-5">
          {time && (
            <div className="text-white/40">
              PHT: <span className="text-white/70">{time}</span>
            </div>
          )}

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white/5 hover:bg-white/10 text-white/60 hover:text-white border border-white/5 transition-all cursor-pointer group"
          >
            <span>Top</span>
            <ArrowUp className="w-3 h-3 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>

      </div>
    </footer>
  )
}
