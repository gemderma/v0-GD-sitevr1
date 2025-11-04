import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export default function GemDermaEyePage() {
  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-background py-20 md:py-32">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div>
              <h1 className="font-serif text-5xl md:text-6xl font-bold text-foreground mb-4">GemDerma Eye</h1>
              <p className="text-xl text-accent font-semibold mb-6">Precision Eye Care Device</p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Specialized treatment for the delicate eye area. Reduce puffiness, dark circles, and fine lines with our
                advanced RF and LED eye mask technology.
              </p>
              <div className="flex gap-4 mb-8">
                <button className="bg-accent text-foreground px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity">
                  Add to Cart - $399
                </button>
                <button className="border-2 border-accent px-8 py-3 rounded-lg font-semibold hover:bg-secondary transition-colors">
                  Learn More
                </button>
              </div>
            </div>
            <div className="bg-secondary rounded-lg p-12 flex items-center justify-center min-h-96">
              <div className="w-full h-full bg-muted rounded-lg flex items-center justify-center">
                <span className="text-muted-foreground">Product Image</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="bg-secondary py-20 md:py-32">
        <div className="container mx-auto px-6 lg:px-12">
          <h2 className="font-serif text-4xl font-bold text-foreground mb-16 text-center">Specialized Eye Care</h2>

          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {[
              {
                title: "Targeted RF Therapy",
                desc: "Gentle yet effective radio frequency technology designed specifically for delicate eye skin.",
              },
              {
                title: "Clinical Results",
                desc: "88% reduction in under-eye puffiness, 91% decreased dark circles visibility in clinical trials.",
              },
              {
                title: "Ergonomic Design",
                desc: "Comfortable mask design that contours perfectly around your eyes for optimal treatment.",
              },
              {
                title: "Multiple Modes",
                desc: "Customize treatment intensity for puffiness reduction, brightening, or firming.",
              },
              {
                title: "LED Light Therapy",
                desc: "Red and amber light wavelengths to stimulate collagen and improve circulation.",
              },
              {
                title: "Quick Treatment",
                desc: "Just 5-10 minutes daily for visible results in two weeks.",
              },
            ].map((feature) => (
              <div key={feature.title} className="bg-background p-8 rounded-lg border border-border">
                <h3 className="font-serif text-xl font-bold text-foreground mb-3">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specifications */}
      <section className="bg-background py-20 md:py-32">
        <div className="container mx-auto px-6 lg:px-12">
          <h2 className="font-serif text-4xl font-bold text-foreground mb-12 text-center">Specifications</h2>

          <div className="max-w-3xl mx-auto">
            <div className="bg-secondary rounded-lg overflow-hidden">
              {[
                { label: "RF Frequency", value: "1MHz, 40°C temperature" },
                { label: "LED Wavelengths", value: "Red (630nm) and Amber (590nm)" },
                { label: "Treatment Time", value: "5-10 minutes" },
                { label: "Battery Life", value: "30 minutes per charge" },
                { label: "Charging Time", value: "1.5 hours" },
                { label: "Design", value: "Lightweight contoured mask" },
                { label: "Hypoallergenic", value: "Yes, safe for sensitive skin" },
                { label: "Warranty", value: "3-year comprehensive" },
              ].map((spec, idx) => (
                <div
                  key={spec.label}
                  className={`flex justify-between p-4 ${idx !== 7 ? "border-b border-border" : ""}`}
                >
                  <span className="font-semibold text-foreground">{spec.label}</span>
                  <span className="text-muted-foreground">{spec.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
