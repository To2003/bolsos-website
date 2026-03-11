import Image from "next/image"

interface AboutProps {
  image?: string // Prop opcional para la imagen de Sanity
}

export function About({ image }: AboutProps) {
  // Si no viene imagen de Sanity, usa la local por defecto
  const displayImage = image || "/about-image.jpg"

  return (
    <section id="nosotros" className="py-24 lg:py-32 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image - DINÁMICA */}
          <div className="relative">
            <div className="aspect-[4/5] relative overflow-hidden">
              <Image
                src={displayImage} // URL de Sanity o local
                alt="Nuestra historia y taller - MAISON"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-accent hidden md:block" />
          </div>

          {/* Content - HARDCODED */}
          <div>
            <p className="text-sm uppercase tracking-widest text-accent mb-3">Sobre Nosotros</p>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-foreground leading-tight">
              Pasión por el diseño y la calidad
            </h2>
            <div className="mt-8 space-y-6 text-muted-foreground leading-relaxed">
              <p>
                Nacimos con la visión de crear accesorios que no solo complementen tu estilo, sino que cuenten una historia. Cada bolso que diseñamos es el resultado de horas de dedicación y atención al detalle.
              </p>
              <p>
                Trabajamos con materiales de primera calidad, seleccionados cuidadosamente para garantizar durabilidad y elegancia. Creemos que un buen bolso es una inversión en tu imagen personal.
              </p>
              <p>
                Nuestro compromiso va más allá de la moda: buscamos crear piezas atemporales que te acompañen durante años, adaptándose a cada etapa de tu vida.
              </p>
            </div>
            {/* Stats */}
            <div className="mt-10 grid grid-cols-3 gap-8">
              <div>
                <p className="font-serif text-3xl md:text-4xl text-foreground">500+</p>
                <p className="text-sm text-muted-foreground mt-1">Clientes felices</p>
              </div>
              <div>
                <p className="font-serif text-3xl md:text-4xl text-foreground">50+</p>
                <p className="text-sm text-muted-foreground mt-1">Diseños únicos</p>
              </div>
              <div>
                <p className="font-serif text-3xl md:text-4xl text-foreground">3</p>
                <p className="text-sm text-muted-foreground mt-1">Años de pasión</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}