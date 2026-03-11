"use client"

import { ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left">
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light leading-tight text-foreground text-balance">
              Elegancia que define tu estilo
            </h1>
            <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Descubre nuestra colección exclusiva de bolsos artesanales, diseñados para acompañarte en cada momento especial.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link
                href="#productos"
                className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 text-sm uppercase tracking-widest hover:bg-primary/90 transition-colors"
              >
                Ver Colección
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="#nosotros"
                className="inline-flex items-center justify-center gap-2 border border-primary text-primary px-8 py-4 text-sm uppercase tracking-widest hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                Nuestra Historia
              </Link>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="aspect-[4/5] relative overflow-hidden bg-muted">
              <Image
                src="/hero-bag.jpg"
                alt="Bolso de diseño elegante"
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-card p-6 shadow-lg hidden md:block">
              <p className="text-sm uppercase tracking-widest text-muted-foreground mb-1">Nueva Temporada</p>
              <p className="font-serif text-2xl text-foreground">Colección 2026</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
