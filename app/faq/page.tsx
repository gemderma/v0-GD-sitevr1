import Link from "next/link"

export default function FAQPage() {
  const faqs = [
    {
      category: "Product Information",
      questions: [
        {
          q: "What makes GemDerma devices different from other beauty devices?",
          a: "GemDerma devices combine clinical-grade technology with intuitive design. Each device undergoes rigorous testing and is developed with dermatologist input to ensure safety, efficacy, and transformative results.",
        },
        {
          q: "Are GemDerma devices safe for all skin types?",
          a: "Yes, our devices are designed to be safe and effective for all skin types and tones. However, we recommend consulting with a dermatologist if you have specific skin concerns or conditions.",
        },
        {
          q: "How long does it take to see results?",
          a: "Results vary by individual and device. Most users report visible improvements within 4-6 weeks of consistent use. For optimal results, follow the recommended treatment schedule in your device manual.",
        },
        {
          q: "Can I use multiple GemDerma devices together?",
          a: "Yes, our devices are designed to complement each other. You can incorporate multiple devices into your routine. We recommend spacing treatments appropriately and following individual device guidelines.",
        },
      ],
    },
    {
      category: "Usage & Care",
      questions: [
        {
          q: "How often should I use my GemDerma device?",
          a: "Usage frequency depends on the specific device. GemDerma Pro: 2-3 times per week. GemSan: After each device use. GemDerma Eye: Daily or as needed. Always refer to your device manual for detailed instructions.",
        },
        {
          q: "How do I clean and maintain my device?",
          a: "Clean your device after each use with a soft, damp cloth. For deep cleaning, use the GemSan sterilizer. Store in a cool, dry place away from direct sunlight. Never submerge devices in water unless specified as waterproof.",
        },
        {
          q: "What products should I use with my device?",
          a: "We recommend using water-based serums and gels that are free from oils, silicones, and heavy moisturizers. These allow for optimal device contact and treatment efficacy.",
        },
        {
          q: "Can I travel with my GemDerma devices?",
          a: "Yes, all GemDerma devices are travel-friendly. They come with protective cases and are TSA-compliant. Ensure devices are fully charged or bring appropriate charging cables.",
        },
      ],
    },
    {
      category: "Ordering & Shipping",
      questions: [
        {
          q: "Do you ship internationally?",
          a: "Yes, we ship to most countries worldwide. Shipping costs and delivery times vary by location. International orders may be subject to customs duties and taxes.",
        },
        {
          q: "What is your return policy?",
          a: "We offer a 60-day satisfaction guarantee. If you're not completely satisfied with your device, you can return it within 60 days of purchase for a full refund. Device must be in original condition with all accessories.",
        },
        {
          q: "How long does shipping take?",
          a: "Standard shipping within the US takes 3-5 business days. Express shipping is available for 1-2 day delivery. International shipping typically takes 7-14 business days depending on location.",
        },
        {
          q: "Do you offer warranty on devices?",
          a: "Yes, all GemDerma devices come with a 2-year limited warranty covering manufacturing defects. Extended warranty options are available at checkout.",
        },
      ],
    },
    {
      category: "Technical Support",
      questions: [
        {
          q: "My device won't turn on. What should I do?",
          a: "First, ensure the device is fully charged. Try resetting the device by holding the power button for 10 seconds. If the issue persists, contact our support team at support@gemderma.com.",
        },
        {
          q: "How do I know if my device is charging?",
          a: "When charging, you'll see an LED indicator light. Red/orange indicates charging in progress, green indicates fully charged. Charging typically takes 2-3 hours for a full charge.",
        },
        {
          q: "Can I replace the treatment heads?",
          a: "Yes, replacement heads are available for purchase on our website. We recommend replacing treatment heads every 3-6 months depending on usage frequency for optimal performance.",
        },
        {
          q: "How do I update my device firmware?",
          a: "Some GemDerma devices support firmware updates via our mobile app. Download the GemDerma app, connect your device via Bluetooth, and follow the on-screen instructions for updates.",
        },
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative bg-muted py-24 lg:py-32">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-serif text-5xl lg:text-6xl font-bold mb-6 text-balance">Frequently Asked Questions</h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Find answers to common questions about GemDerma devices, usage, and support. Can't find what you're
              looking for? Contact our team.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Categories */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-6 lg:px-12 max-w-4xl">
          <div className="space-y-16">
            {faqs.map((category, idx) => (
              <div key={idx}>
                <h2 className="font-serif text-3xl font-bold mb-8 text-accent">{category.category}</h2>
                <div className="space-y-8">
                  {category.questions.map((faq, qIdx) => (
                    <div key={qIdx} className="border-b border-border pb-8 last:border-0">
                      <h3 className="font-serif text-xl font-bold mb-3">{faq.q}</h3>
                      <p className="text-muted-foreground leading-relaxed">{faq.a}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-4xl font-bold mb-6">Still Have Questions?</h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Our customer support team is here to help you get the most out of your GemDerma devices.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="mailto:support@gemderma.com"
                className="inline-flex items-center justify-center px-8 py-4 bg-foreground text-background rounded-full font-medium hover:bg-foreground/90 transition-all duration-300"
              >
                Email Support
              </Link>
              <Link
                href="/skin-quiz"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-foreground text-foreground rounded-full font-medium hover:bg-foreground hover:text-background transition-all duration-300"
              >
                Take Skin Quiz
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
