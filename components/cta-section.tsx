import { Button } from "@/components/ui/button"

export function CTASection() {
  return (
    <section className="py-32 bg-primary text-primary-foreground">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="font-serif text-4xl md:text-6xl font-bold text-balance">Begin Your Transformation</h2>

          <p className="text-lg opacity-90 leading-relaxed max-w-2xl mx-auto">
            Experience the intersection of clinical science and luxury beauty. Discover which device is right for your
            skincare goals.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button size="lg" variant="secondary" className="group transition-all duration-500">
              Shop Collection
              <svg
                className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary transition-all duration-500"
            >
              Book Consultation
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
