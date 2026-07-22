import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import GoogleAnalytics from '@/components/seo/GoogleAnalytics';
import { GoogleTagManagerHead, GoogleTagManagerBody } from '@/components/seo/GoogleTagManager';
import LinkedInInsight from '@/components/seo/LinkedInInsight';

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    default: "OFILAB - Servicios de Impresión Gestionados (MPS)",
    template: '%s | OFILAB'
  },
  description: "Encuentra equipos multifuncionales e impresoras gestionadas para tu empresa con soporte técnico integral OFILAB.",
  verification: {
    google: 'Q56fSpUrhFF8wjDSsn_pklfrhAZ2sCT1o_SrZfuE5lU',
  },
  keywords: ["multifuncionales", "impresoras", "ofilab", "MPS", "equipos de oficina"],
  authors: [{ name: 'OFILAB' }],
  creator: 'OFILAB',
  publisher: 'OFILAB',
  openGraph: {
    type: 'website',
    locale: 'es_CL',
    title: "OFILAB - Servicios de Impresión Gestionados (MPS)",
    description: "Encuentra equipos multifuncionales e impresoras gestionadas para tu empresa con soporte técnico integral OFILAB.",
    siteName: 'OFILAB', 
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
}

export const viewport: Viewport = {
  themeColor: "#2e2096",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <head>
        {/* Google Tag Manager - lo más arriba posible */}
        <GoogleTagManagerHead />
        
        {/* Google Analytics */}
        <GoogleAnalytics />
        
        {/* LinkedIn Insight Tag */}
        <LinkedInInsight />
        <meta charSet="UTF-8" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"
        />
      </head>
      <body className={`${inter.className} antialiased`}>
        {/* Google Tag Manager (noscript) */}
        <GoogleTagManagerBody />
        {children}
      </body>
    </html>
  )
}
