const testimonials = [
  {
    quote:
      "The GemDerma Pro has completely transformed my skincare routine. I've seen a noticeable reduction in fine lines in just 6 weeks.",
    author: "Sarah Mitchell",
    role: "Verified Customer",
    rating: 5,
  },
  {
    quote:
      "As a dermatologist, I'm impressed by the clinical efficacy of these devices. I recommend them to my patients regularly.",
    author: "Dr. Emily Chen",
    role: "Board-Certified Dermatologist",
    rating: 5,
  },
  {
    quote: "The build quality is exceptional. These devices feel like professional equipment, not consumer gadgets.",
    author: "James Rodriguez",
    role: "Beauty Editor, Vogue",
    rating: 5,
  },
]

export function TestimonialsSection() {
  return (
    <section className="bg-background py-[120px]">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center space-y-4 mb-20">
          <h2 className="font-serif text-5xl font-bold">Loved by Professionals & Customers</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Hear from dermatologists, beauty experts, and customers who've experienced the GemDerma difference.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white border border-black/5 rounded-lg p-8 hover:shadow-lg transition-shadow duration-500"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-amber-500">
                    ★
                  </span>
                ))}
              </div>
              <blockquote className="text-muted-foreground mb-6 italic">"{testimonial.quote}"</blockquote>
              <div>
                <p className="font-serif font-bold text-foreground">{testimonial.author}</p>
                <p className="text-sm text-muted-foreground">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
