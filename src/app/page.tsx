"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import { Hero } from "@/components/sections/Hero"
import { SystemArchitecture } from "@/components/sections/SystemArchitecture"
import { Certificates } from "@/components/sections/Certificates"
import { ParticleBackground } from "@/components/ParticleBackground"
import { ContactModal } from "@/components/ContactModal"



export default function Home() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false)

  return (
    <>
      <ParticleBackground />
      <Navbar onContactOpen={() => setIsContactModalOpen(true)} />
      <main className="flex min-h-screen flex-col items-center justify-center w-full overflow-x-hidden">
        <Hero />
        <SystemArchitecture />
        <Certificates />
      </main>
      <ContactModal 
        isOpen={isContactModalOpen} 
        onClose={() => setIsContactModalOpen(false)} 
      />
      <Footer onContactOpen={() => setIsContactModalOpen(true)} />
    </>
  )
}
