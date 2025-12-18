import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "privacy",
  description: "Plataforma de conteúdo exclusivo",
  applicationName: "privacy",
  authors: [{ name: "privacy" }],
  generator: "privacy",
  keywords: ["privacy", "conteúdo exclusivo"],
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "privacy",
    description: "Plataforma de conteúdo exclusivo",
    siteName: "privacy",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "privacy",
    description: "Plataforma de conteúdo exclusivo",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <title>privacy</title>
      </head>
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
