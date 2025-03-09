"use client"

import { useState, useEffect } from "react"
import { Moon, Sun, Palette } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

type Theme = "light" | "dark" | "system"
type ColorScheme = "default" | "purple" | "green"

export function ThemeSwitcher() {
  const [theme, setTheme] = useState<Theme>("system")
  const [colorScheme, setColorScheme] = useState<ColorScheme>("default")

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as Theme | null
    const savedColorScheme = localStorage.getItem("colorScheme") as ColorScheme | null

    if (savedTheme) {
      setTheme(savedTheme)
    }

    if (savedColorScheme) {
      setColorScheme(savedColorScheme)
      document.documentElement.classList.remove("purple", "green")
      if (savedColorScheme !== "default") {
        document.documentElement.classList.add(savedColorScheme)
      }
    }

    if (
      savedTheme === "dark" ||
      (savedTheme === "system" && window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("theme", theme)

    if (theme === "dark" || (theme === "system" && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [theme])

  useEffect(() => {
    localStorage.setItem("colorScheme", colorScheme)

    document.documentElement.classList.remove("purple", "green")
    if (colorScheme !== "default") {
      document.documentElement.classList.add(colorScheme)
    }
  }, [colorScheme])

  return (
    <div className="flex gap-2">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" size="icon">
            <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem onClick={() => setTheme("light")}>Light</DropdownMenuItem>
          <DropdownMenuItem onClick={() => setTheme("dark")}>Dark</DropdownMenuItem>
          <DropdownMenuItem onClick={() => setTheme("system")}>System</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" size="icon">
            <Palette className="h-[1.2rem] w-[1.2rem]" />
            <span className="sr-only">Change color scheme</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem onClick={() => setColorScheme("default")}>Default</DropdownMenuItem>
          <DropdownMenuItem onClick={() => setColorScheme("purple")}>Purple</DropdownMenuItem>
          <DropdownMenuItem onClick={() => setColorScheme("green")}>Green</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}

