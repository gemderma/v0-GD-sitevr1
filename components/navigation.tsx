"use client"

import Link from "next/link"
import { useState } from "react"
import { X } from "lucide-react"

export function Navigation() {
  const [isShopOpen, setIsShopOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between h-20 gap-8">
            <div className="flex md:hidden items-center gap-4">
              <button
                onClick={() => setIsMobileMenuOpen(true)}
                className="transition-colors duration-500 hover:text-accent"
                aria-label="Open menu"
              >
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
              <button className="transition-colors duration-500 hover:text-accent">
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
                <span className="sr-only">Search</span>
              </button>
            </div>

            <div className="hidden md:flex items-center gap-8 flex-1">
              <div className="relative">
                <button
                  onMouseEnter={() => setIsShopOpen(true)}
                  onMouseLeave={() => setIsShopOpen(false)}
                  className="text-sm font-medium tracking-wide hover:text-accent transition-colors duration-500"
                >
                  SHOP
                </button>
                {isShopOpen && (
                  <div
                    onMouseEnter={() => setIsShopOpen(true)}
                    onMouseLeave={() => setIsShopOpen(false)}
                    className="absolute top-full left-0 mt-2 w-56 bg-background border border-border rounded-lg shadow-lg py-2"
                  >
                    <Link
                      href="/products/gemderma-pro"
                      className="block px-4 py-3 text-sm hover:bg-muted transition-colors duration-300"
                    >
                      GemDerma Pro
                    </Link>
                    <Link
                      href="/products/gemsan"
                      className="block px-4 py-3 text-sm hover:bg-muted transition-colors duration-300"
                    >
                      GemSan
                    </Link>
                    <Link
                      href="/products/gemderma-eye"
                      className="block px-4 py-3 text-sm hover:bg-muted transition-colors duration-300"
                    >
                      GemDerma Eye
                    </Link>
                  </div>
                )}
              </div>
              <Link
                href="/about"
                className="text-sm font-medium tracking-wide hover:text-accent transition-colors duration-500"
              >
                ABOUT
              </Link>
              <Link
                href="/science"
                className="text-sm font-medium tracking-wide hover:text-accent transition-colors duration-500"
              >
                SCIENCE
              </Link>
            </div>

            <Link href="/" className="font-serif text-3xl md:text-4xl font-semibold tracking-tight flex-shrink-0">
              GemDerma
            </Link>

            <div className="flex md:hidden">
              <button className="transition-colors duration-500 hover:text-accent">
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                  />
                </svg>
                <span className="sr-only">Shopping bag</span>
              </button>
            </div>

            <div className="hidden md:flex items-center gap-8 flex-1 justify-end">
              <Link
                href="/skin-quiz"
                className="text-sm font-medium tracking-wide hover:text-accent transition-colors duration-500"
              >
                SKIN QUIZ
              </Link>
              <button className="transition-colors duration-500 hover:text-accent">
                <svg
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
                <span className="sr-only">Search</span>
              </button>
              <button className="transition-colors duration-500 hover:text-accent">
                <svg
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                  />
                </svg>
                <span className="sr-only">Shopping bag</span>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {isMobileMenuOpen && (
        <>
          <div className="fixed inset-0 bg-black/60 z-50 md:hidden" onClick={() => setIsMobileMenuOpen(false)} />

          <div className="fixed top-0 left-0 bottom-0 w-4/5 max-w-sm bg-background z-50 md:hidden overflow-y-auto">
            <div className="flex flex-col h-full">
              <div className="flex items-center justify-between px-6 py-6 border-b border-border">
                <span className="font-serif text-2xl font-semibold">Menu</span>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="transition-colors duration-500 hover:text-accent"
                  aria-label="Close menu"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>

              <div className="flex flex-col py-8">
                <Link
                  href="/products/gemderma-pro"
                  className="px-6 py-4 text-lg font-medium hover:bg-muted transition-colors duration-300"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  GemDerma Pro
                </Link>
                <Link
                  href="/products/gemsan"
                  className="px-6 py-4 text-lg font-medium hover:bg-muted transition-colors duration-300"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  GemSan
                </Link>
                <Link
                  href="/products/gemderma-eye"
                  className="px-6 py-4 text-lg font-medium hover:bg-muted transition-colors duration-300"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  GemDerma Eye
                </Link>

                <div className="border-t border-border my-4" />

                <Link
                  href="/about"
                  className="px-6 py-4 text-lg font-medium hover:bg-muted transition-colors duration-300"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  About
                </Link>
                <Link
                  href="/science"
                  className="px-6 py-4 text-lg font-medium hover:bg-muted transition-colors duration-300"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Science
                </Link>
                <Link
                  href="/skin-quiz"
                  className="px-6 py-4 text-lg font-medium hover:bg-muted transition-colors duration-300"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Skin Quiz
                </Link>
                <Link
                  href="/faq"
                  className="px-6 py-4 text-lg font-medium hover:bg-muted transition-colors duration-300"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  FAQ
                </Link>
                <Link
                  href="/blog"
                  className="px-6 py-4 text-lg font-medium hover:bg-muted transition-colors duration-300"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Blog
                </Link>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  )
}
