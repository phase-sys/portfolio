"use client"

import { ReactNode } from "react"

interface SectionProps {
  id?: string
  label?: string
  title: string
  highlight?: string
  description?: string
  color?: "pear" | "blue"
  children: ReactNode
}

export function Section({ id, label, title, highlight, description, color = "pear", children }: SectionProps) {
  const colorText = color === "pear" ? "text-brand-pear" : "text-brand-blue"

  return (
    <section id={id} className="py-20 md:py-28 relative w-full">
      <div className="container mx-auto px-4 md:px-8 max-w-6xl">
        {/* Clean Header */}
        <div className="flex flex-col mb-12 md:mb-16">
          {label && (
            <span className="text-xs font-mono font-medium tracking-widest uppercase text-white/40 mb-2">
              {label}
            </span>
          )}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-space-grotesk font-bold text-white tracking-tight leading-tight">
            {title} {highlight && <span className={colorText}>{highlight}</span>}
          </h2>
          {description && (
            <p className="mt-3 text-sm sm:text-base text-foreground/60 max-w-2xl font-sans leading-relaxed">
              {description}
            </p>
          )}
        </div>

        {/* Content */}
        {children}
      </div>
    </section>
  )
}
