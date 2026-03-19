"use client"

import { ReactNode } from "react"

interface SectionProps {
  id?: string
  label?: string
  title: string
  highlight?: string
  color: "pear" | "blue"
  children: ReactNode
}

export function Section({ id, label, title, highlight, color, children }: SectionProps) {
  const colorText = color === "pear" ? "text-brand-pear" : "text-brand-blue"
  const colorBg = color === "pear" ? "bg-brand-pear" : "bg-brand-blue"

  return (
    <section id={id} className={`pb-24 relative overflow-hidden w-full`}>
      <div className="container mx-auto px-4 md:px-8">
        {/* Unified Header Scaffolding */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
          <div className="space-y-6">
            <div className={`flex items-center space-x-3 opacity-60 font-mono text-[10px] tracking-widest uppercase ${colorText}`}>
              <div className="flex space-x-1">
                <div className={`w-1 h-3 ${colorBg}/30`}></div>
                <div className={`w-1 h-3 ${colorBg}/10`}></div>
              </div>
              <span>{label}</span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-space-grotesk font-black text-white tracking-widest uppercase leading-none">
              {title} <span className={colorText}>{highlight}</span>
            </h2>
          </div>
        </div>

        {/* Inner Content */}
        {children}
      </div>
    </section>
  )
}
