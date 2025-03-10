"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Calendar, Clock, Search, User } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { ThemeSwitcher } from "@/components/theme-switcher"

// Blog post type definition
type BlogPost = {
  id: number
  title: string
  excerpt: string
  content: string
  image: string
  author: string
  date: string
  readTime: string
  tags: string[]
  slug: string
}

// Sample blog posts data
const blogPostsData: BlogPost[] = [
  {
    id: 1,
    title: "How to Build a Responsive Website with Tailwind CSS",
    excerpt:
      "Learn how to create a fully responsive website using Tailwind CSS, a utility-first CSS framework that makes styling your projects a breeze.",
    content: "Full content here...",
    image: "/placeholder.svg?height=400&width=800",
    author: "Sami Ullah Saleem",
    date: "March 15, 2024",
    readTime: "5 min read",
    tags: ["Web Development", "CSS", "Tailwind", "Responsive Design"],
    slug: "how-to-build-responsive-website-tailwind",
  },
  {
    id: 2,
    title: "Getting Started with Next.js 14",
    excerpt:
      "Explore the latest features in Next.js 14 and learn how to leverage them to build faster, more efficient web applications.",
    content: "Full content here...",
    image: "/placeholder.svg?height=400&width=800",
    author: "Sami Ullah Saleem",
    date: "February 28, 2024",
    readTime: "8 min read",
    tags: ["Next.js", "React", "Web Development", "JavaScript"],
    slug: "getting-started-nextjs-14",
  },
  {
    id: 3,
    title: "The Power of TypeScript in Modern Web Development",
    excerpt:
      "Discover how TypeScript can improve your development workflow, catch errors early, and make your code more maintainable.",
    content: "Full content here...",
    image: "/placeholder.svg?height=400&width=800",
    author: "Sami Ullah Saleem",
    date: "January 20, 2024",
    readTime: "6 min read",
    tags: ["TypeScript", "JavaScript", "Web Development"],
    slug: "power-of-typescript-modern-web-development",
  },
  {
    id: 4,
    title: "Creating Animations with Framer Motion",
    excerpt:
      "Learn how to add beautiful animations to your React applications using Framer Motion, a production-ready motion library.",
    content: "Full content here...",
    image: "/placeholder.svg?height=400&width=800",
    author: "Sami Ullah Saleem",
    date: "December 10, 2023",
    readTime: "7 min read",
    tags: ["React", "Animation", "Framer Motion", "UI/UX"],
    slug: "creating-animations-framer-motion",
  },
  {
    id: 5,
    title: "Building a RESTful API with Node.js and Express",
    excerpt:
      "A step-by-step guide to creating a robust RESTful API using Node.js, Express, and MongoDB for your web applications.",
    content: "Full content here...",
    image: "/placeholder.svg?height=400&width=800",
    author: "Sami Ullah Saleem",
    date: "November 5, 2023",
    readTime: "10 min read",
    tags: ["Node.js", "Express", "API", "Backend", "MongoDB"],
    slug: "building-restful-api-nodejs-express",
  },
  {
    id: 6,
    title: "Optimizing Website Performance: A Comprehensive Guide",
    excerpt:
      "Learn essential techniques to improve your website's loading speed, responsiveness, and overall performance.",
    content: "Full content here...",
    image: "/placeholder.svg?height=400&width=800",
    author: "Sami Ullah Saleem",
    date: "October 18, 2023",
    readTime: "9 min read",
    tags: ["Performance", "Web Development", "Optimization", "UX"],
    slug: "optimizing-website-performance-comprehensive-guide",
  },
]

export default function BlogPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedTag, setSelectedTag] = useState<string | null>(null)

  // Get all unique tags
  const allTags = Array.from(new Set(blogPostsData.flatMap((post) => post.tags)))

  // Filter blog posts based on search query and selected tag
  const filteredPosts = blogPostsData.filter((post) => {
    const matchesSearch =
      searchQuery === "" ||
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()))

    const matchesTag = selectedTag === null || post.tags.includes(selectedTag)

    return matchesSearch && matchesTag
  })

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

            <h1 className="text-4xl font-bold mb-4">Blog</h1>
            <p className="text-muted-foreground max-w-2xl mb-8">
              Thoughts, stories, and ideas about web development, design, and technology.
            </p>

            <div className="w-full flex flex-col md:flex-row gap-4 mb-8">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search articles..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>

              {selectedTag && (
                <Button variant="outline" onClick={() => setSelectedTag(null)}>
                  Clear Filter
                </Button>
              )}
            </div>

            <div className="flex flex-wrap gap-2 mb-8">
              {allTags.map((tag) => (
                <Badge
                  key={tag}
                  variant="outline"
                  className={`cursor-pointer hover:bg-primary/20 ${
                    selectedTag === tag
                      ? "bg-primary/20 text-primary border-primary/20"
                      : "bg-muted/50 text-muted-foreground"
                  }`}
                  onClick={() => setSelectedTag(tag === selectedTag ? null : tag)}
                >
                  {tag}
                </Badge>
              ))}
            </div>

            {filteredPosts.length === 0 ? (
              <div className="w-full text-center py-16">
                <p className="text-muted-foreground">No articles found matching your search criteria.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredPosts.map((post) => (
                  <Card key={post.id} className="border border-primary/20 overflow-hidden flex flex-col h-full">
                    <div className="relative aspect-video">
                      <Image
                        src={post.image || "/placeholder.svg"}
                        alt={post.title}
                        width={800}
                        height={400}
                        className="object-cover transition-transform duration-300 hover:scale-105"
                      />
                    </div>
                    <CardContent className="p-6 flex-1 flex flex-col">
                      <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3">
                        <div className="flex items-center">
                          <Calendar className="h-3 w-3 mr-1" />
                          {post.date}
                        </div>
                        <div className="flex items-center">
                          <Clock className="h-3 w-3 mr-1" />
                          {post.readTime}
                        </div>
                      </div>

                      <h3 className="text-xl font-bold mb-2 hover:text-primary transition-colors duration-300">
                        <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                      </h3>

                      <p className="text-muted-foreground mb-4 flex-1">{post.excerpt}</p>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {post.tags.slice(0, 3).map((tag) => (
                          <Badge
                            key={tag}
                            variant="outline"
                            className="bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 cursor-pointer"
                            onClick={() => setSelectedTag(tag)}
                          >
                            {tag}
                          </Badge>
                        ))}
                        {post.tags.length > 3 && (
                          <Badge variant="outline" className="bg-muted/50 text-muted-foreground">
                            +{post.tags.length - 3}
                          </Badge>
                        )}
                      </div>

                      <div className="flex items-center mt-auto">
                        <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center mr-2">
                          <User className="h-4 w-4 text-primary" />
                        </div>
                        <span className="text-sm">{post.author}</span>
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

