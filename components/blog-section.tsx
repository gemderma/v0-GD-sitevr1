"use client"

export function BlogSection() {
  const blogPosts = [
    {
      id: 1,
      title: "Derm Dr. Sharon B x GemDerma",
      image: "/dermatologist-consultation-skincare-clinic.jpg",
      readMore: "Read more",
    },
    {
      id: 2,
      title: "Handcrafted vs Mass-produced",
      image: "/premium-skincare-device-craftsmanship.jpg",
      readMore: "Read more",
    },
    {
      id: 3,
      title: "GemDerma x PDRN Serum Infusion",
      image: "/luxury-skincare-gel-cleanser-serum.jpg",
      readMore: "Read more",
    },
  ]

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-sans uppercase tracking-widest text-gray-400 mb-4">OUR EXPERT BLOG</p>
          <h2 className="font-bold text-foreground text-balance font-serif text-5xl">
            The Beauty Tech Journal
          </h2>
        </div>

        {/* Blog Cards Carousel */}
        <div className="relative">
          {/* Left accent border */}
          <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-amber-200 to-transparent opacity-60 rounded-l-2xl" />

          {/* Cards container */}
          <div className="flex gap-6 overflow-x-auto px-12 py-8 scroll-smooth">
            {blogPosts.map((post) => (
              <div
                key={post.id}
                className="flex-shrink-0 w-96 bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-500 border-8 border-amber-50"
              >
                {/* Image container */}
                <div className="relative h-96 overflow-hidden">
                  <img src={post.image || "/placeholder.svg"} alt={post.title} className="w-full h-full object-cover" />

                  {/* Overlay with content */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex flex-col justify-end p-8">
                    <h3 className="text-white font-serif text-2xl font-bold mb-4">{post.title}</h3>
                    <button className="w-fit border-2 border-white text-white px-6 py-2 hover:bg-white hover:text-black transition-colors duration-500 font-sans text-sm font-medium">
                      {post.readMore}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right accent border */}
          <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-amber-200 to-transparent opacity-60 rounded-r-2xl" />
        </div>
      </div>
    </section>
  )
}
