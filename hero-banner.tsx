import Link from "next/link"
import { Button } from "@/components/ui/button"

export function HeroBanner() {
  return (
    <div className="relative bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
      <div className="container py-12 md:py-24 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">La mejor tecnología a tu alcance</h1>
          <p className="text-lg md:text-xl mb-6 text-blue-100">
            Descubre nuestra selección de smartphones, tablets y accesorios con las mejores ofertas del mercado.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button asChild size="lg" className="bg-white text-blue-700 hover:bg-blue-50">
              <Link href="/categoria/smartphones">Ver smartphones</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              <Link href="/ofertas">Ver ofertas</Link>
            </Button>
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <div className="relative w-full max-w-md">
            <div className="absolute -top-6 -left-6 w-64 h-64 bg-blue-400 rounded-full mix-blend-multiply filter blur-2xl opacity-50 animate-blob"></div>
            <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-indigo-400 rounded-full mix-blend-multiply filter blur-2xl opacity-50 animate-blob animation-delay-2000"></div>
            <div className="absolute -bottom-8 left-20 w-64 h-64 bg-purple-400 rounded-full mix-blend-multiply filter blur-2xl opacity-50 animate-blob animation-delay-4000"></div>
            <div className="relative">
              <img
                src="/placeholder.svg?height=400&width=400"
                alt="Smartphones y accesorios"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
