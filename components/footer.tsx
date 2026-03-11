import Link from "next/link"
import { Instagram } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-10 md:gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link href="/" className="font-serif text-3xl font-semibold tracking-wide">
              MAISON
            </Link>
            <p className="mt-4 text-primary-foreground/70 max-w-sm leading-relaxed">
              Bolsos de diseño que combinan elegancia atemporal con calidad excepcional. Cada pieza cuenta una historia.
            </p>
            <div className="mt-6 flex gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-primary-foreground/10 hover:bg-primary-foreground/20 rounded-full transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-sm uppercase tracking-widest mb-4">Navegación</h4>
            <ul className="space-y-3">
              <li>
                <Link href="#productos" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  Productos
                </Link>
              </li>
              <li>
                <Link href="#nosotros" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  Nosotros
                </Link>
              </li>
              <li>
                <Link href="#instagram" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  Instagram
                </Link>
              </li>
              <li>
                <Link href="#contacto" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm uppercase tracking-widest mb-4">Contacto</h4>
            <ul className="space-y-3 text-primary-foreground/70">
              <li>
                <a href="mailto:hola@maison.com" className="hover:text-primary-foreground transition-colors">
                  hola@maison.com
                </a>
              </li>
              <li>
                <a href="https://wa.me/5491123456789" target="_blank" rel="noopener noreferrer" className="hover:text-primary-foreground transition-colors">
                  +54 9 11 2345-6789
                </a>
              </li>
              <li>Buenos Aires, Argentina</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-primary-foreground/20 text-center text-primary-foreground/50 text-sm">
          <p>&copy; {new Date().getFullYear()} MAISON. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
