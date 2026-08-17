"use client"

import { useState } from "react"
import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import { PortfolioShowcase } from "@/components/sections/PortfolioShowcase"
import { ParticleBackground } from "@/components/ParticleBackground"
import { ContactModal } from "@/components/ContactModal"

export default function Home() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false)

  return (
    <>
      <ParticleBackground />
      <Navbar onContactOpen={() => setIsContactModalOpen(true)} />
      <main className="flex min-h-screen flex-col items-center justify-center w-full overflow-x-hidden pt-20">
        <PortfolioShowcase />
      </main>
      <ContactModal 
        isOpen={isContactModalOpen} 
        onClose={() => setIsContactModalOpen(false)} 
      />
      <Footer onContactOpen={() => setIsContactModalOpen(true)} />
    </>
  )
}
