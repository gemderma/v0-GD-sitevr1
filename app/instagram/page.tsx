import Image from "next/image"
import Script from "next/script"

export const metadata = {
  title: "Join GemDerma Beauty | Exclusive Updates",
  description: "Sign up for exclusive access to GemDerma Beauty products, early bird offers, and skincare tips.",
}

export default function InstagramSignupPage() {
  return (
    <>
      <div className="min-h-screen bg-gradient-to-b from-[#FDF8F3] to-[#F5EDE3] flex flex-col">
        {/* Header with Logo */}
        <header className="w-full py-6 px-4">
          <div className="max-w-4xl mx-auto flex justify-center">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/GemDerma%20Logo_vr3-6KiGpLjfaLX9S6lYvGhR8VcnoLQdGf.png"
              alt="GemDerma Beauty"
              width={280}
              height={80}
              className="h-12 md:h-16 w-auto"
              priority
            />
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-1 flex items-center justify-center px-4 py-8">
          <div className="w-full max-w-2xl">
            {/* Hero Text */}
            <div className="text-center mb-8">
              <h1 className="text-4xl md:text-5xl font-serif font-light text-[#2D2D2D] mb-4 tracking-tight">
                Welcome to <span className="font-display italic text-[#C9A270]">Clinical Luxury</span>
              </h1>
              <p className="text-base md:text-lg text-[#5D5D5D] leading-relaxed max-w-xl mx-auto">
                Join our exclusive community for early access to GemDerma products, special offers, and expert skincare
                insights.
              </p>
            </div>

            {/* Tally Form Embed Container */}
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl shadow-lg p-6 md:p-8 border border-[#C9A270]/20">
              <iframe
                data-tally-src="https://tally.so/embed/9qGgO4?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
                loading="lazy"
                width="100%"
                height="350"
                frameBorder="0"
                marginHeight={0}
                marginWidth={0}
                title="Join GemDerma Beauty"
                className="w-full"
              />
            </div>

            {/* Social Proof */}
            <div className="mt-8 text-center">
              <p className="text-sm text-[#5D5D5D]/80 mb-4">Follow us for daily skincare tips</p>
              <div className="flex justify-center gap-6">
                <a
                  href="https://www.instagram.com/gemdermabeauty/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#2D2D2D] hover:text-[#C9A270] transition-colors"
                  aria-label="Instagram"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
                <a
                  href="https://www.facebook.com/people/Gemderma"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#2D2D2D] hover:text-[#C9A270] transition-colors"
                  aria-label="Facebook"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
                <a
                  href="https://www.tiktok.com/@gemderma"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#2D2D2D] hover:text-[#C9A270] transition-colors"
                  aria-label="TikTok"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </main>

        {/* Footer */}
        <footer className="py-6 text-center">
          <p className="text-xs text-[#5D5D5D]/60">
            © {new Date().getFullYear()} GemDerma Beauty. All rights reserved.
          </p>
        </footer>
      </div>

      {/* Tally Embed Script */}
      <Script src="https://tally.so/widgets/embed.js" strategy="lazyOnload" />
    </>
  )
}
