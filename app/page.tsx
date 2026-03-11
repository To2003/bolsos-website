// app/page.tsx
import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { ProductListClient } from "@/components/product-list-client"
import { About } from "@/components/about"
import { InstagramSection } from "@/components/instagram"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
import { CartDrawer } from "@/components/cart-drawer"
import { client } from "@/sanity/lib/client"

// Función para traer los datos estéticos (Hero, About, Instagram)
async function getWebData() {
  const query = `*[_type == "perfil"][0]{
    "heroImg": fotoHero.asset->url,
    "aboutImg": fotoSobreMi.asset->url,
    "instaImgs": imagenesInstagram[].asset->url
  }`
  return await client.fetch(query, {}, { next: { revalidate: 10 } })
}

// Función para traer los productos
async function getProducts() {
  // Ajustamos la query para que pruebe ambos casos: si es array (images) o si es objeto único (image)
  const query = `*[_type == "product"]{
    "id": _id,
    name,
    price,
    "image": coalesce(images[0].asset->url, image.asset->url),
    "category": category->name
  }`
  return await client.fetch(query, {}, { next: { revalidate: 10 } })
}

export default async function Home() {
  // Ejecutamos ambas peticiones en paralelo
  const [products, webData] = await Promise.all([
    getProducts(),
    getWebData()
  ])

  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Imagen del Hero dinámica */}
      <Hero image={webData?.heroImg} />
      
      <section id="productos" className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm uppercase tracking-widest text-accent mb-3">Colección</p>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-foreground">
              Nuestros Productos
            </h2>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              Cada pieza es cuidadosamente seleccionada para ofrecerte calidad y diseño excepcional.
            </p>
          </div>

          {/* Grilla de productos con las URLs ya resueltas */}
          <ProductListClient products={products} />
        </div>
      </section>

      {/* Imagen Sobre Nosotros dinámica */}
      <About image={webData?.aboutImg} />
      
      {/* Imágenes de Instagram dinámicas */}
      <InstagramSection images={webData?.instaImgs} />
      
      <Contact />
      <Footer />
      <CartDrawer />
    </main>
  )
}