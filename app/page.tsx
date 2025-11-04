import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { ProductShowcase } from "@/components/product-showcase"
import { ScienceGraphSection } from "@/components/science-graph-section"
import { TechnologySection } from "@/components/technology-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { BlogSection } from "@/components/blog-section"
import { InstagramSection } from "@/components/instagram-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <ProductShowcase />
      <ScienceGraphSection />
      <TechnologySection />
      <TestimonialsSection />
      <BlogSection />
      <InstagramSection />
      <Footer />
    </main>
  )
}
