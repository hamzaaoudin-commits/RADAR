import type { Metadata } from "next"
import { Playfair_Display, DM_Sans } from "next/font/google"
import "./globals.css"

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
})

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
})

export const metadata: Metadata = {
  title: "RADAR · L'intelligence de votre marché, chaque semaine",
  description:
    "Chaque semaine, RADAR balaye sept domaines sur votre marché et vous dit quoi faire. Détectez le changement avant qu'il ne devienne votre problème.",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`${playfair.variable} ${dmSans.variable}`}>
      <body className="bg-ink font-sans text-white antialiased">{children}</body>
    </html>
  )
}
