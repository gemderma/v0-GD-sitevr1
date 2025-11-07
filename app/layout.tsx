import type React from "react"
import type { Metadata } from "next"
import { Cormorant_Garamond, Inter, Playfair_Display, Cormorant } from "next/font/google"
import "./globals.css"

const cormorantGaramond = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-serif",
})

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
})

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-display",
})

const cormorantItalic = Cormorant({
  subsets: ["latin"],
  weight: ["300", "400"],
  style: ["italic"],
  variable: "--font-script",
})

export const metadata: Metadata = {
  title: "Lumière Beauty | Clinical Luxury Beauty Devices",
  description: "Professional-grade beauty devices with science-backed results. Experience clinical luxury at home.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${cormorantGaramond.variable} ${playfairDisplay.variable} ${cormorantItalic.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  )
}
