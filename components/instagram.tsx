import Image from "next/image"
import { Instagram } from "lucide-react"
import Link from "next/link"

interface InstagramSectionProps {
  images?: string[] // Prop opcional para el array de imágenes de Sanity
}

export function InstagramSection({ images }: InstagramSectionProps) {
  // 6 posts locales por defecto por si Sanity está vacío
  const defaultPosts = [
    "/instagram/post-1.jpg", "/instagram/post-2.jpg", "/instagram/post-3.jpg",
    "/instagram/post-4.jpg", "/instagram/post-5.jpg", "/instagram/post-6.jpg"
  ]

  // Usamos el array de Sanity si tiene fotos, sino el por defecto
  const displayPosts = images?.length ? images : defaultPosts

  // HARDCODED: El usuario de Instagram
  const instagramUsername = "maison.bolsos"
  const instagramUrl = `https://instagram.com/${instagramUsername.replace('@', '')}`

  return (
    <section id="instagram" className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header - HARDCODED textos */}
        <div className="text-center mb-12">
          <p className="text-sm uppercase tracking-widest text-accent mb-3">Síguenos</p>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-foreground">
            @{instagramUsername}
          </h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
            Inspírate con nuestros looks y sé parte de nuestra comunidad
          </p>
        </div>

        {/* Instagram Grid - DINÁMICO */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 md:gap-4">
          {displayPosts.map((postSrc, index) => (
            <Link
              key={index} // Usamos el índice porque son solo URLs
              href={instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative aspect-square overflow-hidden bg-muted"
            >
              <Image
                src={postSrc} // URL de Sanity o local
                alt={`Maison Bolsos - Instagram Post ${index + 1}`}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/40 transition-colors flex items-center justify-center">
                <Instagram className="h-8 w-8 text-background opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </Link>
          ))}
        </div>

        {/* CTA - HARDCODED link */}
        <div className="mt-10 text-center">
          <Link
            href={instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm uppercase tracking-widest text-foreground hover:text-accent transition-colors"
          >
            <Instagram className="h-5 w-5" />
            Seguir en Instagram
          </Link>
        </div>
      </div>
    </section>
  )
}