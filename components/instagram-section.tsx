export function InstagramSection() {
  const instagramPosts = [
    {
      id: 1,
      image: "/luxury-skincare-product-pump-dispenser.jpg",
    },
    {
      id: 2,
      image: "/golden-exfoliant-bars-skincare-beauty.jpg",
    },
    {
      id: 3,
      image: "/black-cosmetic-bags-product-lifestyle.jpg",
    },
    {
      id: 4,
      image: "/skin-texture-beauty-close-up-shot.jpg",
    },
    {
      id: 5,
      image: "/white-branded-beauty-linens-towels.jpg",
    },
    {
      id: 6,
      image: "/woman-holding-premium-beauty-skincare.jpg",
    },
  ]

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6 lg:px-12">
        <h2 className="text-center text-4xl font-bold mb-12 text-foreground font-serif">Follow Us on Instagram</h2>

        <div className="grid grid-cols-6 gap-4">
          {instagramPosts.map((post) => (
            <div key={post.id} className="aspect-square overflow-hidden bg-muted">
              <img
                src={post.image || "/placeholder.svg"}
                alt="Instagram post"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
