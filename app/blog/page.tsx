import Link from "next/link"
import Image from "next/image"

export default function BlogPage() {
  const featuredPost = {
    slug: "breakthrough-skincare-device-technology",
    title: "The Future of At-Home Skincare: A Breakthrough in Device Technology",
    excerpt:
      "Discover how advanced microneedling technology is revolutionizing professional-grade skincare treatments at home.",
    image: "/blog-featured-skincare-technology.jpg",
    category: "Technology",
    date: "March 15, 2024",
    readTime: "8 min read",
  }

  const posts = [
    {
      slug: "dermatologist-guide-microneedling",
      title: "Derm Dr. Sharon B x GemDerma: Professional Insights on Microneedling",
      excerpt:
        "Leading dermatologist shares expert advice on incorporating microneedling devices into your skincare routine.",
      image: "/dermatologist-consultation-skincare-clinic.jpg",
      category: "Expert Advice",
      date: "March 12, 2024",
      readTime: "6 min read",
    },
    {
      slug: "handcrafted-vs-mass-produced",
      title: "Handcrafted vs Mass-Produced: Why Quality Matters in Beauty Devices",
      excerpt:
        "Understanding the difference between artisanal craftsmanship and mass production in skincare technology.",
      image: "/premium-skincare-device-craftsmanship.jpg",
      category: "Product Deep Dive",
      date: "March 10, 2024",
      readTime: "5 min read",
    },
    {
      slug: "gel-cleanser-guide",
      title: "GemDerma x Leyglow Gel Cleanser: The Perfect Pre-Treatment Ritual",
      excerpt: "Learn how to prepare your skin for optimal device performance with the right cleansing routine.",
      image: "/luxury-skincare-gel-cleanser-serum.jpg",
      category: "Skincare Tips",
      date: "March 8, 2024",
      readTime: "4 min read",
    },
    {
      slug: "science-of-led-therapy",
      title: "The Science Behind LED Light Therapy: What Really Works",
      excerpt: "A deep dive into the clinical research supporting LED light therapy for skin rejuvenation.",
      image: "/blog-led-light-therapy-science.jpg",
      category: "Science",
      date: "March 5, 2024",
      readTime: "7 min read",
    },
    {
      slug: "eye-area-treatment-guide",
      title: "Treating Delicate Eye Area: A Comprehensive Guide",
      excerpt: "Expert techniques for safely and effectively treating fine lines, dark circles, and puffiness.",
      image: "/blog-eye-treatment-guide.jpg",
      category: "How-To",
      date: "March 1, 2024",
      readTime: "6 min read",
    },
    {
      slug: "device-hygiene-best-practices",
      title: "Device Hygiene: Best Practices for Skincare Safety",
      excerpt: "Essential cleaning and sterilization protocols to maintain device efficacy and skin health.",
      image: "/blog-device-hygiene-sterilization.jpg",
      category: "Safety",
      date: "February 28, 2024",
      readTime: "5 min read",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative bg-muted py-24 lg:py-32">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-3xl mx-auto text-center">
            <p className="tracking-[0.3em] text-muted-foreground uppercase font-bold text-sm mb-4">OUR EXPERT BLOG</p>
            <h1 className="font-serif text-5xl lg:text-6xl font-bold mb-6 text-balance">The Beauty Tech Journal</h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Expert insights, scientific breakthroughs, and skincare wisdom from dermatologists and beauty innovators.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-6 lg:px-12">
          <Link href={`/blog/${featuredPost.slug}`} className="group block">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
                <Image
                  src={featuredPost.image || "/placeholder.svg"}
                  alt={featuredPost.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="space-y-6">
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <span className="text-accent font-medium">{featuredPost.category}</span>
                  <span>•</span>
                  <span>{featuredPost.date}</span>
                  <span>•</span>
                  <span>{featuredPost.readTime}</span>
                </div>
                <h2 className="font-serif text-4xl lg:text-5xl font-bold group-hover:text-accent transition-colors duration-300 text-balance">
                  {featuredPost.title}
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">{featuredPost.excerpt}</p>
                <div className="inline-flex items-center gap-2 text-foreground font-medium group-hover:gap-4 transition-all duration-300">
                  Read Article
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-6 lg:px-12">
          <h2 className="font-serif text-3xl font-bold mb-12">Latest Articles</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="group">
                <article className="bg-background rounded-lg overflow-hidden transition-transform duration-300 hover:-translate-y-2">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6 space-y-4">
                    <div className="flex items-center gap-3 text-xs text-muted-foreground">
                      <span className="text-accent font-medium">{post.category}</span>
                      <span>•</span>
                      <span>{post.readTime}</span>
                    </div>
                    <h3 className="font-serif text-xl font-bold group-hover:text-accent transition-colors duration-300 text-balance">
                      {post.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{post.excerpt}</p>
                    <div className="text-sm text-muted-foreground">{post.date}</div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-2xl mx-auto text-center space-y-8">
            <h2 className="font-serif text-4xl font-bold">Stay Updated</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Subscribe to receive the latest skincare insights, product launches, and exclusive offers.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 rounded-full border border-border focus:outline-none focus:ring-2 focus:ring-accent"
              />
              <button
                type="submit"
                className="px-8 py-4 bg-foreground text-background rounded-full font-medium hover:bg-foreground/90 transition-all duration-300"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}
