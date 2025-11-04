import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export default function GemDermaProPage() {
  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-background py-20 md:py-32">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div>
              <h1 className="font-serif text-5xl md:text-6xl font-bold text-foreground mb-4">GemDerma Pro</h1>
              <p className="text-xl text-accent font-semibold mb-6">Advanced 4-in-1 Skincare Device</p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                The ultimate all-in-one solution for complete skin transformation. Combining microneedling, RF therapy,
                LED light, and ultrasonic technology in one innovative device.
              </p>
              <div className="flex gap-4 mb-8">
                <button className="bg-accent text-foreground px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity">
                  Add to Cart - $599
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
          <h2 className="font-serif text-4xl font-bold text-foreground mb-16 text-center">Why Choose GemDerma Pro</h2>

          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {[
              {
                title: "4-in-1 Technology",
                desc: "Microneedling, RF therapy, LED light, and ultrasonic vibration all in one elegant device.",
              },
              {
                title: "Clinical Results",
                desc: "92% improvement in skin firmness in 8 weeks. Clinically validated with 156 subjects.",
              },
              {
                title: "Smart Settings",
                desc: "Customizable intensity levels and treatment modes tailored to your skin type and concerns.",
              },
              {
                title: "Professional Quality",
                desc: "Medical-grade components with dermatologist approval for safe, effective at-home use.",
              },
              {
                title: "Easy to Use",
                desc: "Just 10 minutes, 2-3 times per week. Quiet, cordless, and beautifully designed.",
              },
              {
                title: "Complete System",
                desc: "Includes treatment heads, charging dock, and full skincare protocol guide.",
              },
            ].map((feature) => (
              <div key={feature.title} className="bg-background p-8 rounded-lg border border-border">
                <h3 className="font-serif text-2xl font-bold text-foreground mb-3">{feature.title}</h3>
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
                { label: "Microneedle Depth", value: "0.5-2.5mm adjustable" },
                { label: "RF Frequency", value: "1MHz, 45°C controlled temperature" },
                { label: "LED Wavelengths", value: "Red (630nm) and Blue (450nm)" },
                { label: "Ultrasonic Frequency", value: "1MHz, 20,000 vibrations/sec" },
                { label: "Battery Life", value: "45 minutes per charge" },
                { label: "Charging Time", value: "2 hours" },
                { label: "Weight", value: "180g" },
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

      {/* How to Use */}
      <section className="bg-secondary py-20 md:py-32">
        <div className="container mx-auto px-6 lg:px-12">
          <h2 className="font-serif text-4xl font-bold text-foreground mb-16 text-center">How to Use</h2>

          <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {[
              { step: "1", title: "Cleanse", desc: "Start with clean, dry skin" },
              { step: "2", title: "Apply Serum", desc: "Use conductive treatment serum" },
              { step: "3", title: "Treat", desc: "10 minute treatment session" },
              { step: "4", title: "Moisturize", desc: "Apply your favorite moisturizer" },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-16 h-16 bg-accent text-foreground rounded-full flex items-center justify-center mx-auto mb-4 font-serif text-2xl font-bold">
                  {item.step}
                </div>
                <h3 className="font-serif text-xl font-bold text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
