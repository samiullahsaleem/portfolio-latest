import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "next-themes"
const inter = Inter({ subsets: ["latin"] })


export const metadata: Metadata = {
  title: "Sami Ullah Saleem - Full Stack Developer",
  description:
    "Portfolio of Sami Ullah Saleem, a Full Stack Developer specializing in React, Node.js, and modern web technologies.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <title>Sami Ullah Saleem - Full Stack Developer</title>
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}

