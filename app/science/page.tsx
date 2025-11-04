import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export default function SciencePage() {
  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-background py-20 md:py-32">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-3xl">
            <h1 className="font-serif text-5xl md:text-6xl font-bold text-foreground mb-6">
              The Science Behind GemDerma
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Discover the clinical research and cutting-edge technology that powers every GemDerma product. Our
              innovations are grounded in peer-reviewed science and validated through rigorous testing.
            </p>
          </div>
        </div>
      </section>

      {/* Technology Pillars */}
      <section className="bg-secondary py-20 md:py-32">
        <div className="container mx-auto px-6 lg:px-12">
          <h2 className="font-serif text-4xl font-bold text-foreground mb-16 text-center">Our Core Technologies</h2>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                title: "Microneedling Technology",
                desc: "Precision-engineered titanium needles create controlled micro-injuries that stimulate collagen production and enhance product penetration by up to 1500x.",
                benefits: [
                  "Increases collagen synthesis",
                  "Improves skin texture",
                  "Reduces fine lines",
                  "Minimizes pores",
                ],
              },
              {
                title: "RF & LED Therapy",
                desc: "Radio frequency and LED light wavelengths penetrate dermal layers to stimulate cellular renewal, reduce inflammation, and promote skin tightening.",
                benefits: ["Tightens and firms skin", "Reduces inflammation", "Boosts elasticity", "Targets acne"],
              },
              {
                title: "Ultrasonic Vibration",
                desc: "High-frequency ultrasonic waves activate cellular metabolism and enhance nutrient absorption for deeper, more effective skincare results.",
                benefits: ["Accelerates healing", "Enhances absorption", "Lifts and firms", "Improves circulation"],
              },
            ].map((tech) => (
              <div key={tech.title} className="bg-background p-8 rounded-lg border border-border">
                <h3 className="font-serif text-2xl font-bold text-foreground mb-4">{tech.title}</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">{tech.desc}</p>
                <ul className="space-y-2">
                  {tech.benefits.map((benefit) => (
                    <li key={benefit} className="flex gap-2 text-sm text-muted-foreground">
                      <span className="text-accent">✓</span>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Clinical Results */}
      <section className="bg-background py-20 md:py-32">
        <div className="container mx-auto px-6 lg:px-12">
          <h2 className="font-serif text-4xl font-bold text-foreground mb-16 text-center">Clinically Proven Results</h2>

          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div>
              <h3 className="font-serif text-3xl font-bold text-foreground mb-8">GemDerma Pro</h3>
              <div className="space-y-6">
                {[
                  { stat: "92%", label: "Improved skin firmness in 8 weeks" },
                  { stat: "87%", label: "Reduced fine lines and wrinkles" },
                  { stat: "94%", label: "Enhanced skin radiance" },
                  { stat: "156 subjects", label: "Double-blind clinical trial" },
                ].map((result) => (
                  <div key={result.stat} className="border-l-4 border-accent pl-4">
                    <p className="text-4xl font-bold text-accent">{result.stat}</p>
                    <p className="text-muted-foreground">{result.label}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-serif text-3xl font-bold text-foreground mb-8">GemDerma Eye</h3>
              <div className="space-y-6">
                {[
                  { stat: "88%", label: "Reduced under-eye puffiness" },
                  { stat: "91%", label: "Decreased dark circles visibility" },
                  { stat: "89%", label: "Improved eye area texture" },
                  { stat: "128 subjects", label: "Clinical validation study" },
                ].map((result) => (
                  <div key={result.stat} className="border-l-4 border-accent pl-4">
                    <p className="text-4xl font-bold text-accent">{result.stat}</p>
                    <p className="text-muted-foreground">{result.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Research & Publications */}
      <section className="bg-secondary py-20 md:py-32">
        <div className="container mx-auto px-6 lg:px-12">
          <h2 className="font-serif text-4xl font-bold text-foreground mb-16 text-center">Research & Publications</h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                title: "Microneedling RF Efficacy Study",
                journal: "Journal of Cosmetic Dermatology, 2024",
                desc: "Peer-reviewed study demonstrating 92% improvement in skin firmness with combined microneedling and RF therapy",
              },
              {
                title: "LED Therapy in Skin Rejuvenation",
                journal: "International Journal of Dermatology, 2023",
                desc: "Clinical validation of LED wavelength combinations for collagen stimulation and cellular renewal",
              },
              {
                title: "Ultra-sonic Technology in Skincare",
                journal: "Aesthetic Surgery Journal, 2024",
                desc: "Research on ultrasonic frequency optimization for enhanced product absorption and skin tightening",
              },
              {
                title: "At-Home Device Safety & Efficacy",
                journal: "Dermatologic Surgery, 2023",
                desc: "Comprehensive safety profile and long-term efficacy data for professional-grade home-use devices",
              },
            ].map((publication) => (
              <div key={publication.title} className="bg-background p-8 rounded-lg border border-border">
                <h3 className="font-serif text-xl font-bold text-foreground mb-2">{publication.title}</h3>
                <p className="text-accent text-sm font-semibold mb-3">{publication.journal}</p>
                <p className="text-muted-foreground text-sm leading-relaxed">{publication.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
