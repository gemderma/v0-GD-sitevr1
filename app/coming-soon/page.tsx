"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Image from "next/image"

export default function ComingSoonPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError("")

    try {
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        throw new Error("Failed to submit")
      }

      setIsSubmitted(true)
      setFormData({ firstName: "", lastName: "", email: "" })
    } catch (err) {
      setError("Something went wrong. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="relative min-h-screen overflow-hidden">
      <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover">
        <source
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Black%20and%20Cream%20Simple%20Minimalist%20Business%20Pitch%20Deck%20Presentation%20%283%29-Lo4TEnZ33vyPY46fAvrPyPjeokuclU.mp4"
          type="video/mp4"
        />
      </video>

      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative z-10 min-h-screen flex flex-col">
        <header className="w-full py-6 px-8 flex justify-center">
          <Image
            src="/gemderma-logo.png"
            alt="GemDerma Beauty"
            width={200}
            height={60}
            className="h-12 w-auto brightness-0 invert"
            priority
          />
        </header>

        <div className="flex-1 flex items-center justify-center p-4">
          <div className="max-w-2xl w-full text-center space-y-8">
            {/* Main heading */}
            <div className="space-y-6">
              <h1 className="text-6xl md:text-8xl font-light tracking-[0.2em] text-white">COMING SOON</h1>

              <p className="text-base md:text-lg text-white/90 max-w-xl mx-auto leading-relaxed font-light">
                We're currently working on creating something fantastic.
                <br />
                We'll be here soon, subscribe to be notified.
              </p>
            </div>

            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4 mt-12">
                <div className="grid grid-cols-2 gap-3">
                  <Input
                    type="text"
                    placeholder="First Name"
                    value={formData.firstName}
                    onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                    required
                    className="h-11 bg-white/10 backdrop-blur border-white/30 text-white placeholder:text-white/60 focus:border-white/60"
                  />
                  <Input
                    type="text"
                    placeholder="Last Name"
                    value={formData.lastName}
                    onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                    required
                    className="h-11 bg-white/10 backdrop-blur border-white/30 text-white placeholder:text-white/60 focus:border-white/60"
                  />
                </div>
                <Input
                  type="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="h-11 bg-white/10 backdrop-blur border-white/30 text-white placeholder:text-white/60 focus:border-white/60"
                />
                {error && <p className="text-sm text-red-300">{error}</p>}
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full h-11 text-sm tracking-wider bg-black hover:bg-black/80 text-white border-none"
                >
                  {isSubmitting ? "SUBMITTING..." : "NOTIFY ME"}
                </Button>
              </form>
            ) : (
              <div className="max-w-md mx-auto mt-12 p-6 bg-white/10 backdrop-blur rounded border border-white/20">
                <p className="text-lg font-light text-white">Thank you for subscribing!</p>
                <p className="text-sm text-white/80 mt-2">We'll notify you as soon as we launch.</p>
              </div>
            )}

            <div className="pt-8">
              <a
                href="/coming-soon/unlock"
                className="text-xs text-white/50 hover:text-white/80 transition-colors tracking-wider"
              >
                HAVE A PASSWORD?
              </a>
            </div>
          </div>
        </div>

        <footer className="w-full py-6 text-center text-xs text-white/60 font-light">
          <p>© 2025 GemDerma Beauty. All Rights Reserved.</p>
        </footer>
      </div>
    </div>
  )
}
