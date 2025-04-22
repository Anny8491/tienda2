import Link from "next/link"
import Image from "next/image"
import { ShoppingCart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { formatPrice, calculateDiscountedPrice } from "@/lib/utils"
import type { Product } from "@/lib/supabase"

interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  const hasDiscount = product.discount_percentage > 0
  const finalPrice = hasDiscount ? calculateDiscountedPrice(product.price, product.discount_percentage) : product.price

  return (
    <Card className="overflow-hidden transition-all duration-200 hover:shadow-md">
      <Link href={`/producto/${product.slug}`}>
        <div className="aspect-square relative overflow-hidden bg-gray-100">
          {product.image_url ? (
            <Image
              src={product.image_url || "/placeholder.svg"}
              alt={product.name}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover transition-transform duration-300 hover:scale-105"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-gray-200">
              <span className="text-gray-400">Sin imagen</span>
            </div>
          )}
          {product.featured && (
            <Badge className="absolute top-2 left-2 bg-yellow-500 hover:bg-yellow-600">Destacado</Badge>
          )}
          {hasDiscount && (
            <Badge className="absolute top-2 right-2 bg-red-500 hover:bg-red-600">
              {product.discount_percentage}% OFF
            </Badge>
          )}
        </div>
      </Link>
      <CardContent className="p-4">
        <Link href={`/producto/${product.slug}`} className="hover:underline">
          <h3 className="font-semibold text-lg line-clamp-2 min-h-[3.5rem]">{product.name}</h3>
        </Link>
        <div className="mt-2">
          {hasDiscount ? (
            <div className="flex items-center gap-2">
              <span className="text-xl font-bold text-blue-600">{formatPrice(finalPrice)}</span>
              <span className="text-sm text-gray-500 line-through">{formatPrice(product.price)}</span>
            </div>
          ) : (
            <span className="text-xl font-bold text-blue-600">{formatPrice(product.price)}</span>
          )}
        </div>
        <div className="mt-1 text-sm text-gray-500">
          {product.stock > 0 ? (
            <span className="text-green-600">Disponible ({product.stock})</span>
          ) : (
            <span className="text-red-600">Agotado</span>
          )}
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button className="w-full" disabled={product.stock === 0}>
          <ShoppingCart className="mr-2 h-4 w-4" />
          Añadir al carrito
        </Button>
      </CardFooter>
    </Card>
  )
}
