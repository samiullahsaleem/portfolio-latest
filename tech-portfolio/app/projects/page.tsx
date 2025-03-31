"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, ExternalLink, Github, Search, Filter } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuCheckboxItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Badge } from "@/components/ui/badge"
import { ThemeSwitcher } from "@/components/theme-switcher"

// Project type definition
type Project = {
  id: number
  title: string
  description: string
  image: string
  category: string
  languages: string[]
  year: number
  demoUrl?: string
  githubUrl?: string
}

// Sample projects data
const projectsData: Project[] = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description:
      "A full-featured online shopping platform with user authentication, product management, shopping cart, quick search, proper logs, and secure checkout using Stripe integration.",
    image: "/placeholder.svg?height=500&width=800",
    category: "Web Development",
    languages: ["React", "Node.js", "MongoDB", "Stripe"],
    year: 2023,
    demoUrl: "#",
    githubUrl: "https://github.com",
  },
  {
    id: 2,
    title: "Task Management App",
    description:
      "Developed a task management app with real-time updates, team collaboration features, and detailed analytics for productivity tracking.",
    image: "/placeholder.svg?height=500&width=800",
    category: "Web Development",
    languages: ["Next.js", "TypeScript", "PostgreSQL", "Prisma"],
    year: 2022,
    demoUrl: "#",
    githubUrl: "https://github.com",
  },
  {
    id: 3,
    title: "AI Content Generator",
    description:
      "Created an AI tool that helps users generate blog posts, social media content, and marketing copy using advanced language models.",
    image: "/placeholder.svg?height=500&width=800",
    category: "AI/ML",
    languages: ["React", "Node.js", "OpenAI API", "Firebase"],
    year: 2023,
    demoUrl: "#",
    githubUrl: "https://github.com",
  },
  {
    id: 4,
    title: "Portfolio Website",
    description:
      "A creative portfolio website showcasing my projects and skills with interactive elements and animations.",
    image: "/placeholder.svg?height=500&width=800",
    category: "Web Development",
    languages: ["Next.js", "TypeScript", "Tailwind CSS"],
    year: 2023,
    demoUrl: "#",
    githubUrl: "https://github.com",
  },
  {
    id: 5,
    title: "Weather App",
    description: "A weather application that provides real-time weather data and forecasts for locations worldwide.",
    image: "/placeholder.svg?height=500&width=800",
    category: "Mobile Development",
    languages: ["React Native", "JavaScript", "Weather API"],
    year: 2022,
    demoUrl: "#",
    githubUrl: "https://github.com",
  },
  {
    id: 6,
    title: "Fitness Tracker",
    description:
      "A mobile app that helps users track their workouts, set fitness goals, and monitor their progress over time.",
    image: "/placeholder.svg?height=500&width=800",
    category: "Mobile Development",
    languages: ["Flutter", "Dart", "Firebase"],
    year: 2021,
    demoUrl: "#",
    githubUrl: "https://github.com",
  },
  {
    id: 7,
    title: "Blog Platform",
    description: "A full-featured blog platform with user authentication, content management, and commenting system.",
    image: "/placeholder.svg?height=500&width=800",
    category: "Web Development",
    languages: ["Vue.js", "Express", "MongoDB"],
    year: 2021,
    demoUrl: "#",
    githubUrl: "https://github.com",
  },
  {
    id: 8,
    title: "Data Visualization Dashboard",
    description: "An interactive dashboard for visualizing complex data sets with customizable charts and filters.",
    image: "/placeholder.svg?height=500&width=800",
    category: "Data Science",
    languages: ["D3.js", "React", "Python", "Flask"],
    year: 2022,
    demoUrl: "#",
    githubUrl: "https://github.com",
  },
]

export default function ProjectsPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])
  const [selectedLanguages, setSelectedLanguages] = useState<string[]>([])
  const [selectedYears, setSelectedYears] = useState<number[]>([])
  const [filteredProjects, setFilteredProjects] = useState<Project[]>(projectsData)

  // Extract unique categories, languages, and years
  const categories = Array.from(new Set(projectsData.map((project) => project.category)))
  const languages = Array.from(new Set(projectsData.flatMap((project) => project.languages)))
  const years = Array.from(new Set(projectsData.map((project) => project.year))).sort((a, b) => b - a)

  // Filter projects based on search query and selected filters
  useEffect(() => {
    let filtered = projectsData

    // Filter by search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase()
      filtered = filtered.filter(
        (project) =>
          project.title.toLowerCase().includes(query) ||
          project.description.toLowerCase().includes(query) ||
          project.languages.some((lang) => lang.toLowerCase().includes(query)),
      )
    }

    // Filter by categories
    if (selectedCategories.length > 0) {
      filtered = filtered.filter((project) => selectedCategories.includes(project.category))
    }

    // Filter by languages
    if (selectedLanguages.length > 0) {
      filtered = filtered.filter((project) => project.languages.some((lang) => selectedLanguages.includes(lang)))
    }

    // Filter by years
    if (selectedYears.length > 0) {
      filtered = filtered.filter((project) => selectedYears.includes(project.year))
    }

    setFilteredProjects(filtered)
  }, [searchQuery, selectedCategories, selectedLanguages, selectedYears])

  // Toggle category selection
  const toggleCategory = (category: string) => {
    setSelectedCategories((prev) =>
      prev.includes(category) ? prev.filter((c) => c !== category) : [...prev, category],
    )
  }

  // Toggle language selection
  const toggleLanguage = (language: string) => {
    setSelectedLanguages((prev) => (prev.includes(language) ? prev.filter((l) => l !== language) : [...prev, language]))
  }

  // Toggle year selection
  const toggleYear = (year: number) => {
    setSelectedYears((prev) => (prev.includes(year) ? prev.filter((y) => y !== year) : [...prev, year]))
  }

  // Clear all filters
  const clearFilters = () => {
    setSearchQuery("")
    setSelectedCategories([])
    setSelectedLanguages([])
    setSelectedYears([])
  }

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2 font-bold">
            <span className="text-primary">JD</span>
          </Link>
          <div className="flex items-center gap-4">
            <ThemeSwitcher />
          </div>
        </div>
      </header>

      <main className="flex-1 py-12">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-start mb-12">
            <Link
              href="/"
              className="flex items-center text-muted-foreground hover:text-primary transition-colors duration-300 mb-6"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Link>

            <h1 className="text-4xl font-bold mb-4">All Projects</h1>
            <p className="text-muted-foreground max-w-2xl mb-8">
              Browse through all my projects. Use the filters to find specific projects by category, technology, or
              year.
            </p>

            <div className="w-full flex flex-col md:flex-row gap-4 mb-8">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search projects..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>

              <div className="flex gap-2">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline" className="gap-2">
                      <Filter className="h-4 w-4" />
                      Category
                      {selectedCategories.length > 0 && (
                        <Badge className="ml-1 bg-primary text-primary-foreground">{selectedCategories.length}</Badge>
                      )}
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="w-56">
                    {categories.map((category) => (
                      <DropdownMenuCheckboxItem
                        key={category}
                        checked={selectedCategories.includes(category)}
                        onCheckedChange={() => toggleCategory(category)}
                      >
                        {category}
                      </DropdownMenuCheckboxItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>

                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline" className="gap-2">
                      <Filter className="h-4 w-4" />
                      Technology
                      {selectedLanguages.length > 0 && (
                        <Badge className="ml-1 bg-primary text-primary-foreground">{selectedLanguages.length}</Badge>
                      )}
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="w-56">
                    {languages.map((language) => (
                      <DropdownMenuCheckboxItem
                        key={language}
                        checked={selectedLanguages.includes(language)}
                        onCheckedChange={() => toggleLanguage(language)}
                      >
                        {language}
                      </DropdownMenuCheckboxItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>

                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline" className="gap-2">
                      <Filter className="h-4 w-4" />
                      Year
                      {selectedYears.length > 0 && (
                        <Badge className="ml-1 bg-primary text-primary-foreground">{selectedYears.length}</Badge>
                      )}
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="w-56">
                    {years.map((year) => (
                      <DropdownMenuCheckboxItem
                        key={year}
                        checked={selectedYears.includes(year)}
                        onCheckedChange={() => toggleYear(year)}
                      >
                        {year}
                      </DropdownMenuCheckboxItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>

                {(selectedCategories.length > 0 ||
                  selectedLanguages.length > 0 ||
                  selectedYears.length > 0 ||
                  searchQuery) && (
                  <Button variant="ghost" onClick={clearFilters}>
                    Clear Filters
                  </Button>
                )}
              </div>
            </div>

            {filteredProjects.length === 0 ? (
              <div className="w-full text-center py-16">
                <p className="text-muted-foreground">
                  No projects found matching your filters. Try adjusting your search criteria.
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProjects.map((project) => (
                  <Card key={project.id} className="border border-primary/20 overflow-hidden flex flex-col h-full">
                    <div className="relative aspect-video">
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        width={800}
                        height={500}
                        className="object-cover transition-transform duration-300 hover:scale-105"
                      />
                      <div className="absolute top-2 right-2">
                        <Badge className="bg-background/80 text-foreground backdrop-blur-sm">{project.year}</Badge>
                      </div>
                    </div>
                    <CardContent className="p-6 flex-1 flex flex-col">
                      <div className="mb-2">
                        <Badge
                          variant="outline"
                          className="bg-primary/10 text-primary border-primary/20 hover:bg-primary/20"
                        >
                          {project.category}
                        </Badge>
                      </div>
                      <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                      <p className="text-muted-foreground mb-4 flex-1">{project.description}</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.languages.map((lang) => (
                          <Badge key={lang} variant="outline" className="bg-primary/10 text-primary border-primary/20">
                            {lang}
                          </Badge>
                        ))}
                      </div>
                      <div className="flex gap-3 mt-auto">
                        {project.githubUrl && (
                          <Button variant="outline" size="sm" asChild className="gap-2">
                            <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                              <Github className="h-4 w-4" />
                              Code
                            </Link>
                          </Button>
                        )}
                        {project.demoUrl && (
                          <Button size="sm" asChild className="gap-2">
                            <Link href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                              <ExternalLink className="h-4 w-4" />
                              Live Demo
                            </Link>
                          </Button>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </div>
        </div>
      </main>

      <footer className="w-full border-t py-6">
        <div className="container flex flex-col items-center justify-center gap-4">
          <p className="text-center text-sm leading-loose text-muted-foreground">
            © 2024 Sami Ullah Saleem. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}

