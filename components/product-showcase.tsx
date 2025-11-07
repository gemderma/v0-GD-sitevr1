import Image from "next/image"
import Link from "next/link"
import { ShoppingBag } from "lucide-react"

const products = [
  {
    id: 1,
    name: "GemDerma Pro",
    slug: "gemderma-pro",
    description: "Advanced Microneedling with Smart Camera Technology",
    status: "Coming Soon",
    badge: " ",
    image: "/microneedling-device-with-camera.png",
  },
  {
    id: 2,
    name: "GemSan",
    slug: "gemsan",
    description: "Professional UVC Sterilization for Beauty Devices",
    status: "Coming Soon",
    badge: " ",
    image: "/microcurrent-facial-device--sleek-design.jpg",
  },
  {
    id: 3,
    name: "GemDerma Eye",
    slug: "gemderma-eye",
    description: "Targeted Eye Treatment with LED Technology",
    status: "Coming Soon",
    badge: " ",
    image: "/gemderma-eye-mask-device.png",
  },
]

export function ProductShowcase() {
  return (
    <section className="bg-background py-12">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="mb-6">
          <p className="tracking-[0.3em] text-muted-foreground uppercase font-bold text-xl text-left">
            OUR COMMUNITY'S FAVORITES
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8">
          {products.map((product) => (
            <div key={product.id} className="group">
              <Link href={`/products/${product.slug}`}>
                <div className="relative bg-white aspect-square overflow-hidden mb-4 shadow-sm">
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500 blur-sm"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                    <div className="bg-white/95 backdrop-blur-sm px-4 py-1.5 rounded-full">
                      <p className="text-xs font-light tracking-wider text-foreground/80">COMING SOON</p>
                    </div>
                  </div>
                  <div className="absolute bottom-3 right-3 bg-white rounded-full p-2.5 shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <ShoppingBag className="w-5 h-5 text-foreground" />
                  </div>
                </div>
              </Link>

              <div className="space-y-2 text-center px-1">
                <Link href={`/products/${product.slug}`}>
                  <h3 className="font-serif text-base lg:text-lg font-semibold hover:text-accent transition-colors duration-300 leading-snug">
                    {product.name}
                  </h3>
                </Link>
                <p className="text-xs lg:text-sm text-muted-foreground leading-relaxed">{product.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
