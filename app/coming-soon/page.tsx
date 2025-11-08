"use client"

import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import { Facebook, Instagram } from "lucide-react"

export default function ComingSoonPage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-white">
      <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover opacity-60">
        <source
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Black%20and%20Cream%20Simple%20Minimalist%20Business%20Pitch%20Deck%20Presentation%20%283%29-Lo4TEnZ33vyPY46fAvrPyPjeokuclU.mp4"
          type="video/mp4"
        />
      </video>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex flex-col">
        <header className="w-full py-6 px-8 flex items-center justify-between">
          <nav className="flex gap-8 text-sm tracking-wider text-foreground/70">
            <Link href="/about" className="hover:text-foreground transition-colors px-2">
              ABOUT
            </Link>
            <Link href="/contact" className="hover:text-foreground transition-colors px-2">
              CONTACT
            </Link>
          </nav>

          <div className="absolute left-1/2 -translate-x-1/2">
            <Image
              src="/gemderma-logo.png"
              alt="GemDerma Beauty"
              width={200}
              height={60}
              className="h-12 w-auto"
              priority
            />
          </div>

          <div className="text-sm text-foreground/70 px-2">
            <span className="font-light tracking-wider">LAUNCHING SOON</span>
          </div>
        </header>

        <div className="flex-1 flex items-center justify-center p-4 mt-48">
          <div className="max-w-4xl w-full text-center space-y-10">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extralight tracking-[0.05em] text-foreground uppercase whitespace-nowrap">
              Coming Soon
            </h1>

            <div className="space-y-1">
              <p className="text-sm sm:text-base text-foreground/70 font-light leading-relaxed">
                We're currently working on creating something fantastic.
              </p>
              <p className="text-sm sm:text-base text-foreground/70 font-light leading-relaxed">
                We'll be here soon, subscribe to be notified.
              </p>
            </div>

            <div className="mt-12">
              <Link href="/coming-soon/waitlist">
                <Button className="h-12 px-12 text-sm tracking-widest bg-black hover:bg-black/80 text-white border-none uppercase">
                  Notify Me
                </Button>
              </Link>
            </div>

            <div className="pt-12">
              <Link
                href="/coming-soon/unlock"
                className="text-xs text-foreground/40 hover:text-foreground/70 transition-colors tracking-wider uppercase"
              >
                Have a password?
              </Link>
            </div>
          </div>
        </div>

        <footer className="w-full py-8 text-center space-y-4">
          <p className="text-xs text-foreground/50 font-light">© 2025 GemDerma Beauty. All Rights Reserved.</p>

          <div className="flex items-center justify-center gap-6">
            <Link
              href="https://www.facebook.com/people/Gemderma"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/50 hover:text-foreground/80 transition-colors"
            >
              <Facebook className="w-5 h-5" />
            </Link>
            <Link
              href="https://www.instagram.com/gemdermabeauty/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/50 hover:text-foreground/80 transition-colors"
            >
              <Instagram className="w-5 h-5" />
            </Link>
            <Link
              href="https://www.tiktok.com/@gemderma"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/50 hover:text-foreground/80 transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
              </svg>
            </Link>
          </div>
        </footer>
      </div>
    </div>
  )
}
