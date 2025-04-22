import Link from "next/link"
import { Facebook, Instagram, Twitter } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gray-100 border-t">
      <div className="container py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">TechStore</h3>
            <p className="text-sm text-gray-600">
              Tu tienda de confianza para celulares y accesorios de tecnología con los mejores precios del mercado.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Enlaces rápidos</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-gray-600 hover:text-gray-900">
                  Inicio
                </Link>
              </li>
              <li>
                <Link href="/ofertas" className="text-gray-600 hover:text-gray-900">
                  Ofertas
                </Link>
              </li>
              <li>
                <Link href="/categoria/smartphones" className="text-gray-600 hover:text-gray-900">
                  Smartphones
                </Link>
              </li>
              <li>
                <Link href="/categoria/accesorios" className="text-gray-600 hover:text-gray-900">
                  Accesorios
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Ayuda</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/contacto" className="text-gray-600 hover:text-gray-900">
                  Contacto
                </Link>
              </li>
              <li>
                <Link href="/envios" className="text-gray-600 hover:text-gray-900">
                  Envíos
                </Link>
              </li>
              <li>
                <Link href="/devoluciones" className="text-gray-600 hover:text-gray-900">
                  Devoluciones
                </Link>
              </li>
              <li>
                <Link href="/preguntas-frecuentes" className="text-gray-600 hover:text-gray-900">
                  Preguntas frecuentes
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Síguenos</h3>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-900"
              >
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-900"
              >
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-900"
              >
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </a>
            </div>
            <div className="mt-4">
              <h4 className="text-sm font-semibold mb-2">Suscríbete a nuestro boletín</h4>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Tu correo electrónico"
                  className="px-3 py-2 border border-gray-300 rounded-l-md w-full text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button className="bg-blue-600 text-white px-4 py-2 rounded-r-md text-sm hover:bg-blue-700">
                  Enviar
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-600">
            &copy; {new Date().getFullYear()} TechStore. Todos los derechos reservados.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link href="/terminos" className="text-sm text-gray-600 hover:text-gray-900">
              Términos y condiciones
            </Link>
            <Link href="/privacidad" className="text-sm text-gray-600 hover:text-gray-900">
              Política de privacidad
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
