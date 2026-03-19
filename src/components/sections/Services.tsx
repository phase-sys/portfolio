"use client"

import { motion } from "framer-motion"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/Card"
import { Smartphone, Globe, Monitor, Layers } from "lucide-react"

const services = [
  {
    title: "Next.js Platforms",
    subtitle: "High-Performance Web",
    description: "Building SEO-optimized, lightning-fast web applications with Next.js. Focused on user experience, core web vitals, and scalable frontend architectures.",
    icon: <Globe className="w-6 h-6 text-brand-pear" />,
    stack: "Next.js • React • TypeScript • Tailwind",
    roi: "Superior UX & Search Engine Visibility"
  },
  {
    title: "Python Automation",
    subtitle: "Backend & Workflows",
    description: "Leveraging Python to automate complex business logic, data processing, and API integrations. Building robust backends that handle heavy-lifting with ease.",
    icon: <Layers className="w-6 h-6 text-brand-blue" />,
    stack: "Python • FastAPI • Pydantic • Celery",
    roi: "Eliminate manual tasks & ensure data integrity"
  },
  {
    title: "Full-Stack Ecosystems",
    subtitle: "End-to-End Solutions",
    description: "Designing unified digital products that combine modern frontends with powerful Python/Node backends. Seamlessly bridging the gap between data and interface.",
    icon: <Monitor className="w-6 h-6 text-brand-emerald" />,
    stack: "PostgreSQL • Redis • Docker • CI/CD",
    roi: "Unified, scalable, and secure operations"
  }
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
}

export function Services() {
  return (
    <section id="services" className="py-24 relative">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center md:text-left mb-16 max-w-3xl">
          <h2 className="text-3xl md:text-5xl font-space-grotesk font-bold mb-6">Expertise.</h2>
          <p className="text-foreground/70 text-lg">
            I specialize in building modern, automated web systems using Next.js and Python. Focusing on performance, reliability, and business impact.
          </p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {services.map((service, idx) => (
            <motion.div key={idx} variants={itemVariants} className="h-full">
              <Card className="h-full flex flex-col group hover:bg-white/10 hover:border-brand-pear/30 transition-all duration-300">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    {service.icon}
                  </div>
                  <div className="text-sm font-medium text-brand-pear/80 mb-1">{service.subtitle}</div>
                  <CardTitle>{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow flex flex-col">
                  <CardDescription className="text-base mb-6 flex-grow">
                    {service.description}
                  </CardDescription>
                  <div className="mt-auto space-y-3 pt-4 border-t border-white/5">
                    <div className="flex items-center text-sm">
                      <span className="font-semibold text-foreground/90 mr-2">Stack:</span>
                      <span className="text-foreground/60">{service.stack}</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-pear mr-2"></span>
                      <span className="text-brand-pear">{service.roi}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
