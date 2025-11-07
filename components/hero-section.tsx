"use client"

import { Button } from "@/components/ui/button"
import { useState } from "react"

export function HeroSection() {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false)

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
          onLoadedData={() => setIsVideoLoaded(true)}
        >
          <source
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Black%20and%20Cream%20Simple%20Minimalist%20Business%20Pitch%20Deck%20Presentation%20%283%29-Lo4TEnZ33vyPY46fAvrPyPjeokuclU.mp4"
            type="video/mp4"
          />
        </video>
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="absolute bottom-0 left-0 right-0 z-10 pb-20 px-6 lg:px-16">
        <div className="container mx-auto">
          {/* Headings stacked vertically with generous spacing */}
          <div className="space-y-4 mb-12">
            <h1 className="font-display text-4xl md:text-5xl lg:text-7xl xl:text-8xl font-normal text-white leading-tight tracking-wide">
              Your Clinic. Your Home. Your Glow.
            </h1>
            <h2 className="font-script text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-white/95 italic font-light">
              Korean Derm-Level Care
            </h2>
          </div>

          {/* CTA Button positioned below with clear separation */}
          <div>
            <Button
              size="lg"
              className="bg-white text-black hover:bg-white/90 transition-all duration-300 px-12 py-7 text-sm font-semibold tracking-wider flex items-center gap-3"
            >
              DISCOVER
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2 animate-bounce">
          <div className="w-1 h-2 bg-white/50 rounded-full" />
        </div>
      </div>
    </section>
  )
}
