"use server"

import { put } from "@vercel/blob"
import { revalidatePath } from "next/cache"
import { supabaseAdmin } from "./supabase"

export async function uploadProductImage(formData: FormData) {
  const file = formData.get("image") as File
  const productId = formData.get("productId") as string

  if (!file || !productId) {
    throw new Error("Falta la imagen o el ID del producto")
  }

  // Generar un nombre único para la imagen
  const filename = `product-${productId}-${Date.now()}.${file.name.split(".").pop()}`

  try {
    // Subir la imagen a Vercel Blob
    const blob = await put(filename, file, {
      access: "public",
    })

    // Actualizar la URL de la imagen en la base de datos
    const { error } = await supabaseAdmin.from("products").update({ image_url: blob.url }).eq("id", productId)

    if (error) throw error

    revalidatePath("/admin/productos")
    revalidatePath("/")
    revalidatePath(`/producto/${productId}`)

    return { success: true, url: blob.url }
  } catch (error) {
    console.error("Error al subir la imagen:", error)
    return { success: false, error: "Error al subir la imagen" }
  }
}
