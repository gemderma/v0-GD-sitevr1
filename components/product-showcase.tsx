import Image from "next/image"
import Link from "next/link"

const products = [
  {
    id: 1,
    name: "GemDerma Pro",
    slug: "gemderma-pro",
    description: "Advanced 4-in-1 skincare device",
    status: "Coming Soon",
    badge: " ",
    image: "/microneedling-device-with-camera.png",
  },
  {
    id: 2,
    name: "GemSan",
    slug: "gemsan",
    description: "UVC Sterilization for Beauty Tools",
    status: "Coming Soon",
    badge: " ",
    image: "/microcurrent-facial-device--sleek-design.jpg",
  },
  {
    id: 3,
    name: "GemDerma Eye",
    slug: "gemderma-eye",
    description: "Targeted Treatment for Under-Eye Glow",
    status: "Coming Soon",
    badge: " ",
    image: "/gemderma-eye-mask-device.png",
  },
]

export function ProductShowcase() {
  return (
    <section className="bg-background py-[120px]">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center space-y-4 mb-20">
          <p className="tracking-[0.3em] text-muted-foreground uppercase font-bold text-xl text-left">
            OUR COMMUNITY'S FAVORITES
          </p>
        </div>

        <div className="flex justify-center">
          <div className="grid grid-cols-3 gap-8">
            {products.map((product) => (
              <div key={product.id} className="group">
                <Link href={`/products/${product.slug}`}>
                  <div className="relative bg-gradient-to-br from-white to-gray-50 aspect-square overflow-hidden">
                    <Image
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </Link>

                {/* Product Info */}
                <div className="p-6 space-y-3">
                  <div>
                    <Link href={`/products/${product.slug}`}>
                      <h3 className="font-serif text-lg font-bold hover:text-accent transition-colors duration-300">
                        {product.name}
                      </h3>
                    </Link>
                    <p className="text-sm text-muted-foreground mt-1">{product.description}</p>
                  </div>

                  {/* Status/Price Row */}
                  <div className="flex justify-between items-center pt-2">
                    <div>
                      <p className="text-sm text-muted-foreground">{product.status}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
