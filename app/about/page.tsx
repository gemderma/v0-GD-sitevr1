import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-background py-20 md:py-32">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-3xl">
            <h1 className="font-serif text-5xl md:text-6xl font-bold text-foreground mb-6">About GemDerma</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              We're redefining at-home skincare by combining cutting-edge technology with clinical science. Every
              GemDerma product is engineered to deliver professional-grade results from the comfort of your home.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-secondary py-20 md:py-32">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-2 gap-16 max-w-5xl">
            <div>
              <h2 className="font-serif text-4xl font-bold mb-6 text-foreground">Our Mission</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                To democratize professional skincare technology, making clinical-grade treatments accessible to
                everyone. We believe that transformative skincare shouldn't require expensive dermatologist visits or
                compromise on quality.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Every GemDerma product is designed with one goal: to help you achieve your most radiant, healthy skin.
              </p>
            </div>
            <div>
              <h2 className="font-serif text-4xl font-bold mb-6 text-foreground">Our Values</h2>
              <ul className="space-y-4">
                <li className="flex gap-3">
                  <span className="text-accent font-bold text-xl">•</span>
                  <span className="text-lg text-muted-foreground">
                    <strong>Science-First:</strong> Every innovation backed by clinical research
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent font-bold text-xl">•</span>
                  <span className="text-lg text-muted-foreground">
                    <strong>Sustainability:</strong> Ethical sourcing and eco-conscious manufacturing
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent font-bold text-xl">•</span>
                  <span className="text-lg text-muted-foreground">
                    <strong>Inclusivity:</strong> Products designed for all skin types and tones
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent font-bold text-xl">•</span>
                  <span className="text-lg text-muted-foreground">
                    <strong>Innovation:</strong> Continuous R&D to push skincare boundaries
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="bg-background py-20 md:py-32">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">Meet the Team</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Led by dermatologists, engineers, and design innovators passionate about transforming skincare.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              {
                name: "Dr. Elena Rossi",
                role: "Founder & Chief Scientist",
                bio: "Dermatologist with 15+ years of clinical research experience",
              },
              {
                name: "Marcus Chen",
                role: "CTO & Engineering Lead",
                bio: "Former biotech engineer specializing in medical devices",
              },
              {
                name: "Sofia Bergström",
                role: "VP of Design",
                bio: "Award-winning product designer focused on user experience",
              },
            ].map((member) => (
              <div key={member.name} className="text-center">
                <div className="w-32 h-32 bg-muted rounded-full mx-auto mb-4" />
                <h3 className="font-serif text-2xl font-bold text-foreground mb-1">{member.name}</h3>
                <p className="text-accent font-semibold mb-2">{member.role}</p>
                <p className="text-muted-foreground">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose GemDerma */}
      <section className="bg-secondary py-20 md:py-32">
        <div className="container mx-auto px-6 lg:px-12">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-16 text-center">
            Why Choose GemDerma
          </h2>

          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {[
              {
                title: "Clinical Validation",
                desc: "All products undergo rigorous clinical testing to ensure safety and efficacy",
              },
              { title: "Advanced Technology", desc: "Proprietary innovation developed by a team of biotech experts" },
              {
                title: "Professional Results",
                desc: "Achieve dermatologist-level results at home, on your own schedule",
              },
              { title: "Lifetime Support", desc: "Access to skincare experts and comprehensive customer support" },
            ].map((item) => (
              <div key={item.title} className="p-8 bg-background rounded-lg border border-border">
                <h3 className="font-serif text-2xl font-bold text-foreground mb-3">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
