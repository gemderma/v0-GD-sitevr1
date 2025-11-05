"use client"

import { Button } from "@/components/ui/button"
import { useState } from "react"

export function HeroSection() {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false)

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
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
        {/* Dark overlay to make text readable */}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content overlay */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 py-32">
        <div className="flex flex-col items-center gap-8 max-w-2xl">
          <h1 className="font-serif text-3xl md:text-4xl font-bold text-white text-center uppercase tracking-wide">
            Your Clinic. Your Home. Your Glow.
          </h1>

          {/* Subtitle with attribution */}
          <p className="text-white text-center text-base md:text-lg leading-relaxed max-w-xl">
            Meet GemDerma, a New Skincare Brand From Stockholm With Inclusivity at Its Core{" "}
            <span className="font-serif italic">— VOGUE</span>
          </p>

          {/* CTA Button with arrow */}
          <div className="pt-8">
            <Button
              size="lg"
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-black transition-all duration-500 px-8 py-3 text-base font-medium flex items-center gap-3"
            >
              DISCOVER
              <svg
                className="w-6 h-4"
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
