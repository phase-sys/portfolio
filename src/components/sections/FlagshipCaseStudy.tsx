import Image from "next/image"
import Link from "next/link"
import { Badge } from "@/components/ui/Badge"
import { Button } from "@/components/ui/Button"

export function FlagshipCaseStudy() {
  return (
    <section id="work" className="py-24 bg-white/5 border-y border-white/10 relative overflow-hidden">
      {/* Background glow behind image */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-brand-pear/10 blur-[100px] rounded-full pointer-events-none opacity-50"></div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="flex flex-col items-center text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            Featured Project
          </Badge>
          <h2 className="text-3xl md:text-5xl font-space-grotesk font-bold max-w-2xl mb-4">
            Automated Management System
          </h2>
          <p className="text-foreground/70 text-lg max-w-3xl">
            Unifying fragmented data silos into a real-time core management dashboard for seamless enterprise coordination.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content Block */}
          <div className="order-2 lg:order-1 space-y-8">
            <div className="space-y-6">
              <section>
                <h3 className="text-lg font-bold text-white mb-2 font-space-grotesk border-l-2 border-brand-pear pl-4">
                  The Challenge
                </h3>
                <p className="text-foreground/80 leading-relaxed text-sm md:text-base">
                  Fragmented data silos across multiple departments made cross-functional coordination error-prone and reporting highly unreliable.
                </p>
              </section>

              <section>
                <h3 className="text-lg font-bold text-white mb-2 font-space-grotesk border-l-2 border-brand-emerald pl-4">
                  The Strategy
                </h3>
                <p className="text-foreground/80 leading-relaxed text-sm md:text-base">
                  Engineered a full-stack web application with React and Node.js that automated reporting workflows and provided real-time analytics.
                </p>
              </section>

              <section>
                <h3 className="text-lg font-bold text-white mb-2 font-space-grotesk border-l-2 border-brand-blue pl-4">
                  The Outcome
                </h3>
                <ul className="space-y-2 text-foreground/80 text-sm md:text-base list-disc pl-5">
                  <li><span className="text-brand-pear font-semibold">Unified dashboard</span> with real-time analytics.</li>
                  <li><span className="text-brand-pear font-semibold">Automated PDF</span> report generation.</li>
                </ul>
              </section>
            </div>

            <div className="pt-4 flex flex-wrap gap-2">
              <Badge variant="outline">React</Badge>
              <Badge variant="outline">Node.js</Badge>
              <Badge variant="outline">PostgreSQL</Badge>
            </div>
          </div>

          {/* Image Block */}
          <div className="order-1 lg:order-2 relative group w-full max-w-2xl mx-auto lg:mx-0">
            <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-black/40 aspect-[4/3] max-h-[60vh] lg:max-h-[70vh]">
              <Image 
                src="/capstone/6.png" 
                alt="Automated Management System Dashboard" 
                fill
                priority
                className="object-contain p-4 group-hover:scale-[1.02] transition-transform duration-500"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 800px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-bg-dark/40 to-transparent pointer-events-none"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
