import Link from "next/link"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="bg-background border-t border-border py-16">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div className="space-y-4">
            <Image src="/gemderma-logo.png" alt="GemDerma" width={180} height={60} className="h-10 w-auto mb-2" />
            <p className="text-sm text-muted-foreground leading-relaxed">
              Clinical luxury beauty devices engineered for transformative results.
            </p>
          </div>

          <div>
            <h4 className="font-serif font-semibold mb-4 text-sm tracking-wider uppercase">SUPPORT</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/faq" className="text-muted-foreground hover:text-accent transition-colors duration-500">
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  href="/skin-quiz"
                  className="text-muted-foreground hover:text-accent transition-colors duration-500"
                >
                  Skin Quiz
                </Link>
              </li>
              <li>
                <Link
                  href="mailto:support@gemderma.com"
                  className="text-muted-foreground hover:text-accent transition-colors duration-500"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif font-semibold mb-4 text-sm tracking-wider uppercase">Learn</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  href="/science"
                  className="text-muted-foreground hover:text-accent transition-colors duration-500"
                >
                  Science
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-accent transition-colors duration-500">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-muted-foreground hover:text-accent transition-colors duration-500">
                  Blog
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>© 2025 GemDerma Beauty. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy-policy" className="hover:text-accent transition-colors duration-500">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="hover:text-accent transition-colors duration-500">
              Terms of Service
            </Link>
            <Link href="/accessibility" className="hover:text-accent transition-colors duration-500">
              Accessibility
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
