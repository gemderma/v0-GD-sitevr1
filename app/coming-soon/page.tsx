"use client"

import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

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
        <header className="w-full py-4 md:py-6 px-4 md:px-8">
          {/* Mobile: Centered logo on top, nav below */}
          <div className="flex flex-col items-center gap-3 md:hidden">
            <Image
              src="/gemderma-logo.png"
              alt="GemDerma Beauty"
              width={160}
              height={48}
              className="h-10 w-auto"
              priority
            />
            <div className="flex items-center justify-between w-full text-xs">
              <nav className="flex gap-4 tracking-wider text-foreground/70">
                <Link href="/about" className="hover:text-foreground transition-colors">
                  ABOUT
                </Link>
                <Link href="/contact" className="hover:text-foreground transition-colors">
                  CONTACT
                </Link>
              </nav>
              <div className="text-foreground/70">
                <span className="font-light tracking-wider">LAUNCHING SOON</span>
              </div>
            </div>
          </div>

          {/* Desktop: Original three-column layout */}
          <div className="hidden md:flex items-center justify-between">
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
          </div>
        </header>

        <div className="flex-1 flex items-center justify-center p-4 mt-20 md:mt-48">
          <div className="max-w-4xl w-full text-center space-y-10">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extralight tracking-[0.05em] text-foreground uppercase">
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
              aria-label="Facebook"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </Link>
            <Link
              href="https://www.instagram.com/gemdermabeauty/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/50 hover:text-foreground/80 transition-colors"
              aria-label="Instagram"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
              </svg>
            </Link>
            <Link
              href="https://www.tiktok.com/@gemderma"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/50 hover:text-foreground/80 transition-colors"
              aria-label="TikTok"
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
