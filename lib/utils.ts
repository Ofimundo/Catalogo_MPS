const DEFAULT_AWS_BASE_URL =
  process.env.NEXT_PUBLIC_AWS_S3_URL ||
  process.env.NEXT_PUBLIC_IMAGE_BASE_URL ||
  "https://d3d57fbyf4vdnc.cloudfront.net"

/**
 * Convierte cualquier ruta de imagen (relativa o absoluta) a una URL válida de AWS S3 / CloudFront.
 * 
 * @param imagePath Ruta de la imagen (ej: "https://...", "/images/...", "multifuncional/M3170.png")
 * @returns URL completa a AWS S3 / CloudFront
 */
export function getImageUrl(imagePath: string | null | undefined): string {
  if (!imagePath || imagePath.trim() === "") {
    const baseUrl = DEFAULT_AWS_BASE_URL.replace(/\/$/, "")
    return `${baseUrl}/images/equipos/placeholder.png`
  }

  // Si ya es una URL completa (http:// o https://), retornar tal cual
  if (imagePath.startsWith("http://") || imagePath.startsWith("https://")) {
    return imagePath
  }

  // Asegurar que la ruta empiece con /
  const cleanPath = imagePath.startsWith("/") ? imagePath : `/${imagePath}`
  const baseUrl = DEFAULT_AWS_BASE_URL.replace(/\/$/, "")

  return `${baseUrl}${cleanPath}`
}
