import type { ReactNode } from "react"
import Link from "next/link"
import { Home, Package, Tag, BarChart3, Settings, Users } from "lucide-react"

interface AdminLayoutProps {
  children: ReactNode
}

export default function AdminLayout({ children }: AdminLayoutProps) {
  const navItems = [
    { name: "Dashboard", href: "/admin", icon: Home },
    { name: "Productos", href: "/admin/productos", icon: Package },
    { name: "Categorías", href: "/admin/categorias", icon: Tag },
    { name: "Ventas", href: "/admin/ventas", icon: BarChart3 },
    { name: "Usuarios", href: "/admin/usuarios", icon: Users },
    { name: "Configuración", href: "/admin/configuracion", icon: Settings },
  ]

  return (
    <div className="flex min-h-screen bg-gray-100">
      <aside className="w-64 bg-white border-r hidden md:block">
        <div className="p-6 border-b">
          <Link href="/admin" className="flex items-center">
            <span className="font-bold text-xl">TechStore</span>
            <span className="ml-2 text-xs bg-blue-100 text-blue-800 px-2 py-0.5 rounded">Admin</span>
          </Link>
        </div>
        <nav className="p-4">
          <ul className="space-y-2">
            {navItems.map((item) => {
              const Icon = item.icon
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="flex items-center p-2 rounded-md hover:bg-gray-100 text-gray-700 hover:text-gray-900"
                  >
                    <Icon className="h-5 w-5 mr-3 text-gray-500" />
                    {item.name}
                  </Link>
                </li>
              )
            })}
          </ul>
        </nav>
      </aside>
      <div className="flex-1">
        <header className="bg-white border-b p-4 flex justify-between items-center">
          <h1 className="text-xl font-semibold">Panel de Administración</h1>
          <div className="flex items-center space-x-4">
            <Link href="/" className="text-sm text-blue-600 hover:text-blue-800">
              Ver tienda
            </Link>
            <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
              <span className="text-xs font-medium">A</span>
            </div>
          </div>
        </header>
        <main className="p-6">{children}</main>
      </div>
    </div>
  )
}
