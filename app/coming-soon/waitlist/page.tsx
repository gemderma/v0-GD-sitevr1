"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function WaitlistPage() {
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
      {/* Video background */}
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
        <header className="w-full py-8 px-8 flex justify-center">
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
          <div className="max-w-md w-full">
            <Link
              href="/coming-soon"
              className="inline-flex items-center gap-2 text-white/60 hover:text-white/90 transition-colors mb-8 text-sm"
            >
              <ArrowLeft className="w-4 h-4" />
              Back
            </Link>

            {!isSubmitted ? (
              <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-lg p-8">
                <h2 className="text-2xl font-light text-white text-center mb-2 tracking-wide">Join Our Waitlist</h2>
                <p className="text-sm text-white/70 text-center mb-8 font-light">Be the first to know when we launch</p>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-2 gap-3">
                    <Input
                      type="text"
                      placeholder="First Name"
                      value={formData.firstName}
                      onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                      required
                      className="h-11 bg-white/10 backdrop-blur border-white/30 text-white placeholder:text-white/50 focus:border-white/60"
                    />
                    <Input
                      type="text"
                      placeholder="Last Name"
                      value={formData.lastName}
                      onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                      required
                      className="h-11 bg-white/10 backdrop-blur border-white/30 text-white placeholder:text-white/50 focus:border-white/60"
                    />
                  </div>
                  <Input
                    type="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="h-11 bg-white/10 backdrop-blur border-white/30 text-white placeholder:text-white/50 focus:border-white/60"
                  />
                  {error && <p className="text-sm text-red-300">{error}</p>}
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full h-11 text-sm tracking-wider bg-white hover:bg-white/90 text-black font-light uppercase"
                  >
                    {isSubmitting ? "Submitting..." : "Notify Me"}
                  </Button>
                </form>
              </div>
            ) : (
              <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-lg p-8 text-center">
                <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-xl font-light text-white mb-2">Thank You!</h3>
                <p className="text-sm text-white/70 font-light mb-6">
                  You've been added to our waitlist. We'll notify you as soon as we launch.
                </p>
                <Link href="/coming-soon">
                  <Button variant="outline" className="border-white/30 text-white hover:bg-white/10 bg-transparent">
                    Back to Home
                  </Button>
                </Link>
              </div>
            )}
          </div>
        </div>

        <footer className="w-full py-6 text-center text-xs text-white/50 font-light">
          <p>© 2025 GemDerma Beauty. All Rights Reserved.</p>
        </footer>
      </div>
    </div>
  )
}
