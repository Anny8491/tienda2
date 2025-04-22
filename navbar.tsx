"use client"

import Link from "next/link"
import { useState } from "react"
import { usePathname } from "next/navigation"
import { Search, ShoppingCart, Menu, X, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { cn } from "@/lib/utils"

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  const isAdminPage = pathname.startsWith("/admin")

  const navLinks = [
    { name: "Inicio", href: "/" },
    { name: "Smartphones", href: "/categoria/smartphones" },
    { name: "Tablets", href: "/categoria/tablets" },
    { name: "Accesorios", href: "/categoria/accesorios" },
    { name: "Ofertas", href: "/ofertas" },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <div className="mr-4 hidden md:flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <span className="font-bold text-xl">TechStore</span>
          </Link>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "transition-colors hover:text-foreground/80",
                  pathname === link.href ? "text-foreground font-bold" : "text-foreground/60",
                )}
              >
                {link.name}
              </Link>
            ))}
            {!isAdminPage && (
              <Link href="/admin" className="text-foreground/60 transition-colors hover:text-foreground/80">
                Admin
              </Link>
            )}
          </nav>
        </div>

        <button
          className="inline-flex items-center justify-center rounded-md p-2 text-foreground md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          <span className="sr-only">Toggle Menu</span>
        </button>

        <Link href="/" className="mr-auto md:hidden">
          <span className="font-bold text-xl">TechStore</span>
        </Link>

        {!isAdminPage && (
          <div className="flex flex-1 items-center justify-end space-x-4">
            <div className="w-full max-w-sm hidden md:flex items-center">
              <Input type="search" placeholder="Buscar productos..." className="rounded-r-none focus-visible:ring-0" />
              <Button variant="default" size="icon" className="rounded-l-none">
                <Search className="h-4 w-4" />
                <span className="sr-only">Buscar</span>
              </Button>
            </div>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="icon">
                  <User className="h-4 w-4" />
                  <span className="sr-only">Mi cuenta</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>
                  <Link href="/mi-cuenta" className="w-full">
                    Mi cuenta
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/mis-pedidos" className="w-full">
                    Mis pedidos
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <Button variant="outline" size="icon">
              <ShoppingCart className="h-4 w-4" />
              <span className="sr-only">Carrito</span>
            </Button>
          </div>
        )}
      </div>

      {isMenuOpen && (
        <div className="container pb-3 md:hidden">
          <nav className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "transition-colors hover:text-foreground/80",
                  pathname === link.href ? "text-foreground font-bold" : "text-foreground/60",
                )}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            {!isAdminPage && (
              <Link
                href="/admin"
                className="text-foreground/60 transition-colors hover:text-foreground/80"
                onClick={() => setIsMenuOpen(false)}
              >
                Admin
              </Link>
            )}
            <div className="pt-2 flex items-center">
              <Input type="search" placeholder="Buscar productos..." className="rounded-r-none focus-visible:ring-0" />
              <Button variant="default" size="icon" className="rounded-l-none">
                <Search className="h-4 w-4" />
                <span className="sr-only">Buscar</span>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
