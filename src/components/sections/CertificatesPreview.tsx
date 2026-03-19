import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/Button"
import { Badge } from "@/components/ui/Badge"

export function CertificatesPreview() {
  return (
    <section id="certificates" className="py-24 relative overflow-hidden bg-bg-dark">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-12 gap-6">
          <div className="max-w-xl text-left">
            <Badge variant="destructive" className="mb-4">Verified Expertise</Badge>
            <h2 className="text-3xl md:text-5xl font-space-grotesk font-bold mb-4">
              Certification.
            </h2>
            <p className="text-foreground/70 text-base">
              Masters in software architecture and cloud infrastructure.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="group relative rounded-xl overflow-hidden border border-white/10 bg-white/5 p-6 transition-colors hover:bg-white/10 flex items-center h-full gap-6">
            <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-lg bg-black/40 border border-white/5">
              <Image 
                src="/certificates/python.png" 
                alt="Python 3 Programming Specialization" 
                fill
                className="object-contain p-2 group-hover:scale-110 transition-transform duration-500"
                sizes="96px"
              />
            </div>
            <div className="flex-grow">
              <h3 className="text-lg font-bold font-space-grotesk text-white">Python 3 Specialization</h3>
              <p className="text-xs text-brand-emerald mb-2">University of Michigan</p>
              <a href="/certificates/python.pdf" target="_blank" rel="noreferrer" className="text-xs text-foreground/50 hover:text-brand-pear underline flex items-center transition-colors">
                Verify PDF <span className="ml-1 flex h-3 w-3">↗</span>
              </a>
            </div>
          </div>

          <div className="group relative rounded-xl overflow-hidden border border-white/10 bg-white/5 p-6 transition-colors hover:bg-white/10 flex items-center h-full gap-6">
            <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-lg bg-black/40 border border-white/5">
              <Image 
                src="/certificates/cloud.png" 
                alt="Cloud Infrastructure Fundamental" 
                fill
                className="object-contain p-2 group-hover:scale-110 transition-transform duration-500"
                sizes="96px"
              />
            </div>
            <div className="flex-grow">
              <h3 className="text-lg font-bold font-space-grotesk text-white">Cloud Infrastructure</h3>
              <p className="text-xs text-brand-blue mb-2">Google Cloud</p>
              <a href="/certificates/cloud.pdf" target="_blank" rel="noreferrer" className="text-xs text-foreground/50 hover:text-brand-pear underline flex items-center transition-colors">
                Verify PDF <span className="ml-1 flex h-3 w-3">↗</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
