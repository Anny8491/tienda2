import { createClient } from "@supabase/supabase-js"

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY!

// Cliente para el lado del cliente
export const supabaseClient = createClient(supabaseUrl, supabaseAnonKey)

// Cliente para el lado del servidor con permisos elevados
export const supabaseAdmin = createClient(supabaseUrl, supabaseServiceKey)

export type Product = {
  id: number
  name: string
  slug: string
  description: string | null
  price: number
  stock: number
  image_url: string | null
  category_id: number | null
  featured: boolean
  discount_percentage: number
  created_at: string
  updated_at: string
  category?: Category
}

export type Category = {
  id: number
  name: string
  slug: string
  created_at: string
}
