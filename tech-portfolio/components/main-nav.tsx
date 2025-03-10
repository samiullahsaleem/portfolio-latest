"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Hexagon, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { MagneticButton } from "@/components/magnetic-button"

interface MainNavProps {
  activeSection?: string
}

export function MainNav({ activeSection }: MainNavProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
    document.body.style.overflow = !mobileMenuOpen ? "hidden" : ""
  }

  useEffect(() => {
    return () => {
      document.body.style.overflow = ""
    }
  }, [])

  return (
    <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border/40">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2 font-bold">
          <Hexagon className="h-8 w-8 text-primary animate-pulse" strokeWidth={1.5}>
            <text
              x="50%"
              y="54%"
              fontSize="10"
              fontWeight="bold"
              textAnchor="middle"
              dominantBaseline="middle"
              fill="currentColor"
            >
              J
            </text>
          </Hexagon>
        </Link>

        <nav className="hidden md:flex gap-8">
          <Link
            href="/#about"
            className={`text-sm font-medium hover:text-primary transition-colors duration-300 animated-border ${activeSection === "about" ? "text-primary" : "text-muted-foreground"}`}
          >
            <span className="text-primary mr-1">01.</span> About
          </Link>
          <Link
            href="/#skills"
            className={`text-sm font-medium hover:text-primary transition-colors duration-300 animated-border ${activeSection === "skills" ? "text-primary" : "text-muted-foreground"}`}
          >
            <span className="text-primary mr-1">02.</span> Skills
          </Link>
          <Link
            href="/#projects"
            className={`text-sm font-medium hover:text-primary transition-colors duration-300 animated-border ${activeSection === "projects" ? "text-primary" : "text-muted-foreground"}`}
          >
            <span className="text-primary mr-1">03.</span> Projects
          </Link>
          <Link
            href="/#experience"
            className={`text-sm font-medium hover:text-primary transition-colors duration-300 animated-border ${activeSection === "experience" ? "text-primary" : "text-muted-foreground"}`}
          >
            <span className="text-primary mr-1">04.</span> Experience
          </Link>
          <Link
            href="/#contact"
            className={`text-sm font-medium hover:text-primary transition-colors duration-300 animated-border ${activeSection === "contact" ? "text-primary" : "text-muted-foreground"}`}
          >
            <span className="text-primary mr-1">05.</span> Contact
          </Link>
          <Link
            href="/blog"
            className="text-sm font-medium hover:text-primary transition-colors duration-300 animated-border text-muted-foreground"
          >
            <span className="text-primary mr-1">06.</span> Blog
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          <MagneticButton variant="outline" className="hidden md:flex">
            Resume
          </MagneticButton>

          <Button variant="ghost" size="icon" className="md:hidden" onClick={toggleMobileMenu}>
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>
    </header>
  )
}

