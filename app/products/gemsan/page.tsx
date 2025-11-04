import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export default function GemSanPage() {
  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-background py-20 md:py-32">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div>
              <h1 className="font-serif text-5xl md:text-6xl font-bold text-foreground mb-4">GemSan</h1>
              <p className="text-xl text-accent font-semibold mb-6">Precision UV Sterilizer</p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Eliminate up to 99.9% of bacteria and germs from your beauty tools and devices. Clinical-grade UV
                sterilization technology in a sleek, portable design.
              </p>
              <div className="flex gap-4 mb-8">
                <button className="bg-accent text-foreground px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity">
                  Add to Cart - $199
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

      {/* Key Benefits */}
      <section className="bg-secondary py-20 md:py-32">
        <div className="container mx-auto px-6 lg:px-12">
          <h2 className="font-serif text-4xl font-bold text-foreground mb-16 text-center">Benefits of GemSan</h2>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                title: "99.9% Sterilization",
                desc: "Clinical-grade UV technology eliminates bacteria, viruses, and fungi from all your beauty tools.",
              },
              {
                title: "Compact Design",
                desc: "Portable and elegant. Perfect for home, travel, or professional beauty studios.",
              },
              {
                title: "Fast Cycle",
                desc: "10-minute sterilization cycle for quick, convenient tool sanitization.",
              },
              {
                title: "Universal Compatibility",
                desc: "Works with all beauty tools including brushes, rollers, tweezers, and more.",
              },
              {
                title: "Auto Shutoff",
                desc: "Automatic timer with smart shutoff to conserve energy and ensure safety.",
              },
              {
                title: "Dermatologist Approved",
                desc: "Recommended by skincare professionals for salon and home use.",
              },
            ].map((benefit) => (
              <div key={benefit.title} className="bg-background p-8 rounded-lg border border-border text-center">
                <h3 className="font-serif text-xl font-bold text-foreground mb-3">{benefit.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Specs */}
      <section className="bg-background py-20 md:py-32">
        <div className="container mx-auto px-6 lg:px-12">
          <h2 className="font-serif text-4xl font-bold text-foreground mb-12 text-center">Technical Specifications</h2>

          <div className="max-w-3xl mx-auto">
            <div className="bg-secondary rounded-lg overflow-hidden">
              {[
                { label: "UV Wavelength", value: "254nm UVC" },
                { label: "Sterilization Rate", value: "99.9% in 10 minutes" },
                { label: "Chamber Capacity", value: "Multiple tools simultaneously" },
                { label: "Cycle Time", value: "10 minutes" },
                { label: "Auto Shutoff", value: "Yes, with audio notification" },
                { label: "Power", value: "AC powered with USB-C charging option" },
                { label: "Dimensions", value: '8" x 6" x 5"' },
                { label: "Warranty", value: "2-year comprehensive" },
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
