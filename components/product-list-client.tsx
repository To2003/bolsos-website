"use client"

import Image from "next/image"
import { Plus } from "lucide-react"
import { useCart } from "./cart-context"

function formatPrice(price: number) {
  return new Intl.NumberFormat("es-AR", {
    style: "currency",
    currency: "ARS",
    minimumFractionDigits: 0,
  }).format(price)
}

export function ProductListClient({ products }: { products: any[] }) {
  const { addToCart, setIsCartOpen } = useCart()

  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
      {products.map((product) => (
        <article key={product.id} className="group">
          <div className="relative aspect-[3/4] overflow-hidden bg-muted mb-4">
            {product.image ? (
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            ) : (
              <div className="w-full h-full bg-secondary flex items-center justify-center">Sin imagen</div>
            )}
            <button
              onClick={() => {
                addToCart(product)
                setIsCartOpen(true)
              }}
              className="absolute bottom-4 right-4 bg-card text-foreground p-3 shadow-lg opacity-0 group-hover:opacity-100 transition-opacity hover:bg-primary hover:text-primary-foreground"
            >
              <Plus className="h-5 w-5" />
            </button>
          </div>
          <p className="text-xs uppercase tracking-widest text-muted-foreground mb-1">
            {product.category || "General"}
          </p>
          <h3 className="font-serif text-lg text-foreground mb-1">
            {product.name}
          </h3>
          <p className="text-foreground font-medium">
            {formatPrice(product.price)}
          </p>
        </article>
      ))}
    </div>
  )
}