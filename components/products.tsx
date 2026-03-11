"use client"

import Image from "next/image"
import { useCart, type Product } from "./cart-context"
import { Plus } from "lucide-react"

const products: Product[] = [
  {
    id: 1,
    name: "Bolso Tote Milano",
    price: 89000,
    image: "/products/bag-1.jpg",
    category: "Totes",
  },
  {
    id: 2,
    name: "Cartera Clutch Noir",
    price: 65000,
    image: "/products/bag-2.jpg",
    category: "Clutch",
  },
  {
    id: 3,
    name: "Bandolera Firenze",
    price: 78000,
    image: "/products/bag-3.jpg",
    category: "Bandoleras",
  },
  {
    id: 4,
    name: "Bolso Shopper Luna",
    price: 95000,
    image: "/products/bag-4.jpg",
    category: "Shopper",
  },
  {
    id: 5,
    name: "Mini Bag Stella",
    price: 55000,
    image: "/products/bag-5.jpg",
    category: "Mini Bags",
  },
  {
    id: 6,
    name: "Bolso Bucket Roma",
    price: 72000,
    image: "/products/bag-6.jpg",
    category: "Bucket",
  },
]

function formatPrice(price: number) {
  return new Intl.NumberFormat("es-AR", {
    style: "currency",
    currency: "ARS",
    minimumFractionDigits: 0,
  }).format(price)
}

export function Products() {
  const { addToCart, setIsCartOpen } = useCart()

  const handleAddToCart = (product: Product) => {
    addToCart(product)
    setIsCartOpen(true)
  }

  return (
    <section id="productos" className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-widest text-accent mb-3">Colección</p>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-foreground">
            Nuestros Productos
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Cada pieza es cuidadosamente seleccionada para ofrecerte calidad y diseño excepcional.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {products.map((product) => (
            <article key={product.id} className="group">
              <div className="relative aspect-[3/4] overflow-hidden bg-muted mb-4">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <button
                  onClick={() => handleAddToCart(product)}
                  className="absolute bottom-4 right-4 bg-card text-foreground p-3 shadow-lg opacity-0 group-hover:opacity-100 transition-opacity hover:bg-primary hover:text-primary-foreground"
                  aria-label={`Agregar ${product.name} al carrito`}
                >
                  <Plus className="h-5 w-5" />
                </button>
              </div>
              <p className="text-xs uppercase tracking-widest text-muted-foreground mb-1">
                {product.category}
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
      </div>
    </section>
  )
}
