const features = [
  {
    icon: "microscope",
    title: "Clinical Research",
    description: "Backed by peer-reviewed studies and dermatological testing",
  },
  {
    icon: "award",
    title: "Advanced Skin Analysis Technology",
    description: "Personalized skincare analysis at your fingertips",
  },
  {
    icon: "shield",
    title: "2-Year Warranty",
    description: "Comprehensive coverage for peace of mind",
  },
  {
    icon: "sparkles",
    title: "Visible Results",
    description: "See improvements in as little as 4 weeks",
  },
]

function IconComponent({ type }: { type: string }) {
  const icons = {
    microscope: (
      <svg fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
      </svg>
    ),
    award: (
      <svg fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    ),
    shield: (
      <svg fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z" />
      </svg>
    ),
    sparkles: (
      <svg fill="currentColor" viewBox="0 0 24 24">
        <path d="M7 11H1v2h6v6h2v-6h6v-2H9V5H7v6zm8-7l-3.72 3.72 3.72 3.72 1.41-1.41-2.31-2.31 2.31-2.31-1.41-1.41zM21 9l1.41 1.41L21 11.82 19.59 10.41 21 9m-5 8l-1.41 1.41 2.31 2.31-2.31 2.31 1.41 1.41 3.72-3.72-3.72-3.72z" />
      </svg>
    ),
  }
  return icons[type as keyof typeof icons] || null
}

export function TechnologySection() {
  return (
    <section className="py-32 bg-background">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="text-sm tracking-[0.3em] text-muted-foreground uppercase font-medium">
                Science-Backed Technology
              </p>
              <h2 className="text-4xl md:text-5xl font-bold leading-tight text-balance font-sans">
                Engineered for Excellence
              </h2>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed">
              Our devices combine cutting-edge technology with clinical precision. Each product undergoes rigorous
              testing to ensure safety, efficacy, and transformative results you can see and feel.
            </p>

            <div className="grid sm:grid-cols-2 gap-6 pt-4">
              {features.map((feature, index) => (
                <div key={index} className="space-y-3">
                  <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">
                    <div className="h-6 w-6 text-accent">
                      <IconComponent type={feature.icon} />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-serif font-semibold mb-1">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/5] relative rounded-lg overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-transparent" />
              <img
                src="/images/design-mode/Benefits%20on%20face.png"
                alt="Skin benefits demonstration - pore care, wrinkle reduction, elasticity, and volume"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 bg-card border border-border rounded-lg p-6 shadow-lg max-w-xs">
              <p className="text-4xl font-serif font-bold text-accent mb-2">94%</p>
              <p className="text-sm text-muted-foreground">
                of users report visible improvement in skin texture and tone
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
