import Image from "next/image"
import { Instagram } from "lucide-react"
import Link from "next/link"

const instagramPosts = [
  { id: 1, image: "/instagram/post-1.jpg", alt: "Post de Instagram 1" },
  { id: 2, image: "/instagram/post-2.jpg", alt: "Post de Instagram 2" },
  { id: 3, image: "/instagram/post-3.jpg", alt: "Post de Instagram 3" },
  { id: 4, image: "/instagram/post-4.jpg", alt: "Post de Instagram 4" },
  { id: 5, image: "/instagram/post-5.jpg", alt: "Post de Instagram 5" },
  { id: 6, image: "/instagram/post-6.jpg", alt: "Post de Instagram 6" },
]

export function InstagramSection() {
  return (
    <section id="instagram" className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="text-sm uppercase tracking-widest text-accent mb-3">Síguenos</p>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-foreground">
            @maison.bolsos
          </h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
            Inspírate con nuestros looks y sé parte de nuestra comunidad
          </p>
        </div>

        {/* Instagram Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 md:gap-4">
          {instagramPosts.map((post) => (
            <Link
              key={post.id}
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative aspect-square overflow-hidden bg-muted"
            >
              <Image
                src={post.image}
                alt={post.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/40 transition-colors flex items-center justify-center">
                <Instagram className="h-8 w-8 text-background opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-10 text-center">
          <Link
            href="https://instagram.com"
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
