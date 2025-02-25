import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Vuelos Bautismo | Experiencia única de vuelo en Buenos Aires",
  description:
    "Vive la experiencia de ser piloto por un día con nuestros vuelos bautismo en Buenos Aires. Clases de vuelo, vuelos panorámicos y experiencias únicas.",
  keywords: [
    "vuelo bautismo",
    "experiencia de vuelo",
    "piloto por un día",
    "vuelos panorámicos",
    "Buenos Aires",
    "clases de vuelo",
  ],
  openGraph: {
    title: "Vuelos Bautismo | Experiencia única de vuelo",
    description: "Vive la experiencia de ser piloto por un día con nuestros vuelos bautismo",
    images: [
      {
        url: "/media/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Vuelos Bautismo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vuelos Bautismo | Experiencia única de vuelo",
    description: "Vive la experiencia de ser piloto por un día con nuestros vuelos bautismo",
    images: ["/media/og-image.jpg"],
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={inter.className}>{children}</body>
    </html>
  )
}

