import Link from "next/link"
import Image from "next/image"

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  // This is a template - in production, you'd fetch post data based on slug
  const post = {
    title: "The Future of At-Home Skincare: A Breakthrough in Device Technology",
    category: "Technology",
    date: "March 15, 2024",
    readTime: "8 min read",
    author: {
      name: "Dr. Sarah Chen",
      role: "Chief Scientific Officer",
      image: "/author-dr-sarah-chen.jpg",
    },
    image: "/blog-featured-skincare-technology.jpg",
    content: `
      <p>The landscape of at-home skincare has undergone a remarkable transformation in recent years. What was once the exclusive domain of professional dermatology clinics is now accessible in the comfort of your own home, thanks to groundbreaking advances in beauty device technology.</p>

      <h2>The Evolution of Beauty Devices</h2>
      <p>Traditional skincare routines relied solely on topical products—serums, creams, and masks that work on the skin's surface. While these products remain essential, they have inherent limitations in penetrating deeper skin layers where significant aging and damage occur.</p>

      <p>Modern beauty devices bridge this gap by utilizing technologies previously available only in clinical settings: microneedling, LED light therapy, radiofrequency, and ultrasonic waves. These modalities work at the dermal level, stimulating collagen production, improving cellular turnover, and delivering active ingredients more effectively.</p>

      <h2>The Science Behind Microneedling</h2>
      <p>Microneedling, also known as collagen induction therapy, creates controlled micro-injuries in the skin. This triggers the body's natural wound healing process, resulting in increased collagen and elastin production. The GemDerma Pro takes this technology further by incorporating:</p>

      <ul>
        <li><strong>Precision-engineered needles</strong> that maintain consistent depth and spacing</li>
        <li><strong>Integrated camera technology</strong> for real-time skin analysis</li>
        <li><strong>Adjustable intensity levels</strong> for personalized treatment</li>
        <li><strong>Safety mechanisms</strong> that prevent over-treatment</li>
      </ul>

      <h2>Clinical Results You Can See</h2>
      <p>In clinical studies, participants using advanced microneedling devices showed significant improvements across multiple skin concerns:</p>

      <ul>
        <li>67% reduction in fine lines and wrinkles after 12 weeks</li>
        <li>54% improvement in skin texture and smoothness</li>
        <li>43% increase in skin firmness and elasticity</li>
        <li>38% reduction in hyperpigmentation and dark spots</li>
      </ul>

      <h2>The Importance of Device Hygiene</h2>
      <p>With great technology comes great responsibility. Proper device maintenance is crucial for both efficacy and safety. The GemSan sterilizer uses medical-grade UV-C light to eliminate 99.9% of bacteria, ensuring your devices remain hygienic between treatments.</p>

      <h2>Integrating Devices into Your Routine</h2>
      <p>The key to success with beauty devices is consistency and proper technique. Here's a recommended approach:</p>

      <ol>
        <li><strong>Cleanse thoroughly</strong> with a gentle, pH-balanced cleanser</li>
        <li><strong>Apply treatment serum</strong> appropriate for your device</li>
        <li><strong>Use device</strong> following manufacturer guidelines</li>
        <li><strong>Apply post-treatment care</strong> products to support healing</li>
        <li><strong>Sterilize device</strong> immediately after use</li>
      </ol>

      <h2>The Future is Here</h2>
      <p>As technology continues to advance, we're seeing the convergence of artificial intelligence, personalized skincare, and device innovation. The future promises even more sophisticated at-home treatments that rival professional procedures in both safety and efficacy.</p>

      <p>The democratization of advanced skincare technology means that professional-grade results are no longer limited to those who can afford regular clinic visits. With the right devices, knowledge, and commitment, transformative skincare is accessible to everyone.</p>
    `,
  }

  const relatedPosts = [
    {
      slug: "dermatologist-guide-microneedling",
      title: "Derm Dr. Sharon B x GemDerma: Professional Insights",
      image: "/dermatologist-consultation-skincare-clinic.jpg",
    },
    {
      slug: "device-hygiene-best-practices",
      title: "Device Hygiene: Best Practices for Safety",
      image: "/blog-device-hygiene-sterilization.jpg",
    },
    {
      slug: "science-of-led-therapy",
      title: "The Science Behind LED Light Therapy",
      image: "/blog-led-light-therapy-science.jpg",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Image */}
      <div className="relative h-[60vh] lg:h-[70vh]">
        <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
      </div>

      {/* Article Content */}
      <article className="relative -mt-32 lg:-mt-40">
        <div className="container mx-auto px-6 lg:px-12 max-w-4xl">
          <div className="bg-background rounded-lg p-8 lg:p-12 shadow-lg">
            {/* Meta */}
            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-6">
              <span className="text-accent font-medium">{post.category}</span>
              <span>•</span>
              <span>{post.date}</span>
              <span>•</span>
              <span>{post.readTime}</span>
            </div>

            {/* Title */}
            <h1 className="font-serif text-4xl lg:text-5xl font-bold mb-8 text-balance">{post.title}</h1>

            {/* Author */}
            <div className="flex items-center gap-4 pb-8 mb-8 border-b border-border">
              <div className="relative w-12 h-12 rounded-full overflow-hidden">
                <Image
                  src={post.author.image || "/placeholder.svg"}
                  alt={post.author.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <div className="font-medium">{post.author.name}</div>
                <div className="text-sm text-muted-foreground">{post.author.role}</div>
              </div>
            </div>

            {/* Content */}
            <div className="prose prose-lg max-w-none" dangerouslySetInnerHTML={{ __html: post.content }} />

            {/* Share */}
            <div className="mt-12 pt-8 border-t border-border">
              <p className="text-sm text-muted-foreground mb-4">Share this article</p>
              <div className="flex gap-4">
                <button className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-muted transition-colors duration-300">
                  <span className="sr-only">Share on Twitter</span>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </button>
                <button className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-muted transition-colors duration-300">
                  <span className="sr-only">Share on Facebook</span>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </button>
                <button className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-muted transition-colors duration-300">
                  <span className="sr-only">Share on LinkedIn</span>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* Related Posts */}
      <section className="py-20 lg:py-32 bg-muted">
        <div className="container mx-auto px-6 lg:px-12">
          <h2 className="font-serif text-3xl font-bold mb-12 text-center">Related Articles</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {relatedPosts.map((relatedPost) => (
              <Link key={relatedPost.slug} href={`/blog/${relatedPost.slug}`} className="group">
                <article className="bg-background rounded-lg overflow-hidden transition-transform duration-300 hover:-translate-y-2">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={relatedPost.image || "/placeholder.svg"}
                      alt={relatedPost.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="font-serif text-lg font-bold group-hover:text-accent transition-colors duration-300 text-balance">
                      {relatedPost.title}
                    </h3>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="font-serif text-4xl font-bold">Ready to Transform Your Skin?</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Discover which GemDerma device is right for your unique skin concerns.
            </p>
            <Link
              href="/skin-quiz"
              className="inline-flex items-center gap-2 px-8 py-4 bg-foreground text-background rounded-full font-medium hover:bg-foreground/90 transition-all duration-300"
            >
              Take Skin Quiz
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
