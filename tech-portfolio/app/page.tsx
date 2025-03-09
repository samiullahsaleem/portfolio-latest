import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { ExternalLink, Github, Linkedin, Mail, Hexagon } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ThemeSwitcher } from "@/components/theme-switcher"

export const metadata: Metadata = {
  title: "Sami Ullah Saleem - Full Stack Developer",
  description:
    "Portfolio of Sami Ullah Saleem, a Full Stack Developer specializing in React, Node.js, and modern web technologies.",
}

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2 font-bold">
            <Hexagon className="h-8 w-8 text-primary" strokeWidth={1.5}>
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
          <nav className="hidden md:flex gap-6">
            <Link href="#about" className="text-sm font-medium hover:text-primary transition-colors">
              <span className="text-primary mr-1">01.</span> About
            </Link>
            <Link href="#skills" className="text-sm font-medium hover:text-primary transition-colors">
              <span className="text-primary mr-1">02.</span> Skills
            </Link>
            <Link href="#projects" className="text-sm font-medium hover:text-primary transition-colors">
              <span className="text-primary mr-1">03.</span> Projects
            </Link>
            <Link href="#experience" className="text-sm font-medium hover:text-primary transition-colors">
              <span className="text-primary mr-1">04.</span> Experience
            </Link>
            <Link href="#contact" className="text-sm font-medium hover:text-primary transition-colors">
              <span className="text-primary mr-1">05.</span> Contact
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <ThemeSwitcher />
            <Button variant="outline" className="hidden md:flex">
              Resume
            </Button>
          </div>
        </div>
      </header>

      <div className="fixed left-10 bottom-0 hidden lg:flex flex-col gap-6 items-center">
        <Link href="https://github.com" target="_blank" rel="noopener noreferrer">
          <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-primary">
            <Github className="h-5 w-5" />
            <span className="sr-only">GitHub</span>
          </Button>
        </Link>
        <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
          <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-primary">
            <Linkedin className="h-5 w-5" />
            <span className="sr-only">LinkedIn</span>
          </Button>
        </Link>
        <Link href="mailto:john@example.com">
          <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-primary">
            <Mail className="h-5 w-5" />
            <span className="sr-only">Email</span>
          </Button>
        </Link>
        <div className="h-24 w-px bg-border"></div>
      </div>

      <div className="fixed right-10 bottom-0 hidden lg:block">
        <div className="vertical-text text-xs tracking-widest text-muted-foreground mb-24">
          <a href="mailto:john@example.com" className="hover:text-primary transition-colors">
            john@example.com
          </a>
        </div>
      </div>

      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="max-w-3xl">
              <p className="text-primary mb-5">Hi, I am</p>
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none mb-4">Sami Ullah Saleem</h1>
              <h2 className="text-2xl sm:text-3xl text-muted-foreground font-medium mb-6">
                A Software Engineer and Mentor
              </h2>
              <p className="text-muted-foreground max-w-xl mb-8">
                A Techy with keen interest in Frontend and Backend Development. Specializing in building exceptional
                digital experiences with React, Next.js, and Node.js. An aspiring Full Stack Engineer with a focus on
                scalable applications and modern web technologies.
              </p>
              <Button asChild className="mt-4">
                <Link href="#contact">Get In Touch</Link>
              </Button>
            </div>
          </div>
        </section>

        <section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-start justify-center space-y-4">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                  <span className="text-primary mr-2">01.</span>About Me
                </h2>
                <div className="h-px w-32 bg-primary"></div>
              </div>
              <div className="grid gap-8 py-8 md:grid-cols-2">
                <div className="flex flex-col justify-center space-y-4">
                  <p className="text-muted-foreground">
                    I`&apos;`m a passionate Full Stack Developer with 5+ years of experience building web applications. I
                    specialize in JavaScript, React, Node.js, and modern web technologies. I`&apos;`m dedicated to creating
                    efficient, scalable, and user-friendly solutions that solve real-world problems.
                  </p>
                  <p className="text-muted-foreground">
                    My journey in tech began when I was in college, tinkering with websites and learning how to code.
                    Since then, I`&apos;`ve worked with startups and established companies to build products that users love. I
                    enjoy the challenge of solving complex problems and turning ideas into reality.
                  </p>
                  <p className="text-muted-foreground">
                    When I`&apos;`m not coding, you can find me exploring new technologies, contributing to open-source
                    projects, or mentoring aspiring developers. I believe in continuous learning and sharing knowledge
                    with the community.
                  </p>
                </div>
                <div className="flex justify-center">
                  <div className="relative w-64 h-64 border-2 border-primary rounded-md">
                    <div className="absolute -top-4 -right-4 w-64 h-64 border-2 border-primary rounded-md overflow-hidden">
                      <Image
                        src="/placeholder.svg?height=400&width=400"
                        alt="About me image"
                        width={400}
                        height={400}
                        className="object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="skills" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-start justify-center space-y-4">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                  <span className="text-primary mr-2">02.</span>Skills
                </h2>
                <div className="h-px w-32 bg-primary"></div>
              </div>
              <div className="grid gap-8 py-8 md:grid-cols-2 lg:grid-cols-3 w-full">
                <Card>
                  <CardHeader>
                    <CardTitle>Frontend</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
                        React
                      </Badge>
                      <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
                        Next.js
                      </Badge>
                      <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
                        TypeScript
                      </Badge>
                      <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
                        JavaScript
                      </Badge>
                      <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
                        HTML5
                      </Badge>
                      <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
                        CSS3
                      </Badge>
                      <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
                        Tailwind CSS
                      </Badge>
                      <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
                        Redux
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Backend</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
                        Node.js
                      </Badge>
                      <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
                        Express
                      </Badge>
                      <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
                        MongoDB
                      </Badge>
                      <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
                        PostgreSQL
                      </Badge>
                      <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
                        REST API
                      </Badge>
                      <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
                        GraphQL
                      </Badge>
                      <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
                        Firebase
                      </Badge>
                      <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
                        AWS
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Tools & Others</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
                        Git
                      </Badge>
                      <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
                        GitHub
                      </Badge>
                      <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
                        Docker
                      </Badge>
                      <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
                        CI/CD
                      </Badge>
                      <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
                        Jest
                      </Badge>
                      <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
                        Cypress
                      </Badge>
                      <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
                        Figma
                      </Badge>
                      <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
                        Agile
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-start justify-center space-y-4">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                  <span className="text-primary mr-2">03.</span>Projects
                </h2>
                <div className="h-px w-32 bg-primary"></div>
              </div>

              <div className="grid gap-16 py-8 w-full">
                <div className="grid md:grid-cols-5 gap-4 md:gap-8 items-center">
                  <div className="md:col-span-3 order-2 md:order-1">
                    <h3 className="text-2xl font-bold mb-2">E-Commerce Platform</h3>
                    <div className="bg-card p-6 rounded-lg shadow-lg mb-4">
                      <p className="text-card-foreground mb-4">
                        A full-featured online shopping platform with user authentication, product management, shopping
                        cart, and secure checkout using Stripe integration.
                      </p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
                          React
                        </Badge>
                        <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
                          Node.js
                        </Badge>
                        <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
                          MongoDB
                        </Badge>
                        <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
                          Stripe
                        </Badge>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <Button variant="outline" size="sm" asChild className="gap-2">
                        <Link href="https://github.com" target="_blank" rel="noopener noreferrer">
                          <Github className="h-4 w-4" />
                          Code
                        </Link>
                      </Button>
                      <Button size="sm" asChild className="gap-2">
                        <Link href="#" target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4" />
                          Live Demo
                        </Link>
                      </Button>
                    </div>
                  </div>
                  <div className="md:col-span-2 order-1 md:order-2">
                    <div className="relative overflow-hidden rounded-lg border border-primary/20">
                      <Image
                        src="/placeholder.svg?height=300&width=500"
                        alt="Project 1"
                        width={500}
                        height={300}
                        className="object-cover transition-transform duration-300 hover:scale-105"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-5 gap-4 md:gap-8 items-center">
                  <div className="md:col-span-2 order-1">
                    <div className="relative overflow-hidden rounded-lg border border-primary/20">
                      <Image
                        src="/placeholder.svg?height=300&width=500"
                        alt="Project 2"
                        width={500}
                        height={300}
                        className="object-cover transition-transform duration-300 hover:scale-105"
                      />
                    </div>
                  </div>
                  <div className="md:col-span-3 order-2">
                    <h3 className="text-2xl font-bold mb-2">Task Management App</h3>
                    <div className="bg-card p-6 rounded-lg shadow-lg mb-4">
                      <p className="text-card-foreground mb-4">
                        Developed a task management app with real-time updates, team collaboration features, and
                        detailed analytics for productivity tracking.
                      </p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
                          Next.js
                        </Badge>
                        <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
                          TypeScript
                        </Badge>
                        <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
                          PostgreSQL
                        </Badge>
                        <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
                          Prisma
                        </Badge>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <Button variant="outline" size="sm" asChild className="gap-2">
                        <Link href="https://github.com" target="_blank" rel="noopener noreferrer">
                          <Github className="h-4 w-4" />
                          Code
                        </Link>
                      </Button>
                      <Button size="sm" asChild className="gap-2">
                        <Link href="#" target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4" />
                          Live Demo
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-5 gap-4 md:gap-8 items-center">
                  <div className="md:col-span-3 order-2 md:order-1">
                    <h3 className="text-2xl font-bold mb-2">AI Content Generator</h3>
                    <div className="bg-card p-6 rounded-lg shadow-lg mb-4">
                      <p className="text-card-foreground mb-4">
                        Created an AI tool that helps users generate blog posts, social media content, and marketing
                        copy using advanced language models.
                      </p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
                          React
                        </Badge>
                        <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
                          Node.js
                        </Badge>
                        <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
                          OpenAI API
                        </Badge>
                        <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
                          Firebase
                        </Badge>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <Button variant="outline" size="sm" asChild className="gap-2">
                        <Link href="https://github.com" target="_blank" rel="noopener noreferrer">
                          <Github className="h-4 w-4" />
                          Code
                        </Link>
                      </Button>
                      <Button size="sm" asChild className="gap-2">
                        <Link href="#" target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4" />
                          Live Demo
                        </Link>
                      </Button>
                    </div>
                  </div>
                  <div className="md:col-span-2 order-1 md:order-2">
                    <div className="relative overflow-hidden rounded-lg border border-primary/20">
                      <Image
                        src="/placeholder.svg?height=300&width=500"
                        alt="Project 3"
                        width={500}
                        height={300}
                        className="object-cover transition-transform duration-300 hover:scale-105"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="experience" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-start justify-center space-y-4">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                  <span className="text-primary mr-2">04.</span>Experience
                </h2>
                <div className="h-px w-32 bg-primary"></div>
              </div>
              <div className="grid gap-8 py-8 w-full">
                <Card className="border border-primary/20">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div>
                        <CardTitle className="text-xl">Senior Frontend Developer</CardTitle>
                        <CardDescription className="text-primary">TechCorp Inc.</CardDescription>
                      </div>
                      <Badge className="bg-primary/10 text-primary border-primary/20 hover:bg-primary/20">
                        2021 - Present
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc pl-5 space-y-2 text-sm text-muted-foreground">
                      <li>Led the frontend development of the company`&apos;`s flagship SaaS product</li>
                      <li>Implemented a new component library that improved development speed by 40%</li>
                      <li>Mentored junior developers and conducted code reviews</li>
                      <li>Collaborated with UX/UI designers to create intuitive user interfaces</li>
                    </ul>
                  </CardContent>
                </Card>
                <Card className="border border-primary/20">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div>
                        <CardTitle className="text-xl">Full Stack Developer</CardTitle>
                        <CardDescription className="text-primary">WebSolutions Ltd.</CardDescription>
                      </div>
                      <Badge className="bg-primary/10 text-primary border-primary/20 hover:bg-primary/20">
                        2018 - 2021
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc pl-5 space-y-2 text-sm text-muted-foreground">
                      <li>Developed and maintained multiple client websites and web applications</li>
                      <li>Built RESTful APIs and integrated third-party services</li>
                      <li>Implemented responsive designs and ensured cross-browser compatibility</li>
                      <li>Participated in agile development processes and sprint planning</li>
                    </ul>
                  </CardContent>
                </Card>
                <Card className="border border-primary/20">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div>
                        <CardTitle className="text-xl">Junior Web Developer</CardTitle>
                        <CardDescription className="text-primary">Digital Agency XYZ</CardDescription>
                      </div>
                      <Badge className="bg-primary/10 text-primary border-primary/20 hover:bg-primary/20">
                        2016 - 2018
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc pl-5 space-y-2 text-sm text-muted-foreground">
                      <li>Assisted in the development of client websites using HTML, CSS, and JavaScript</li>
                      <li>Worked with WordPress and custom PHP solutions</li>
                      <li>Collaborated with the design team to implement pixel-perfect designs</li>
                      <li>Participated in client meetings and requirement gathering</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-start justify-center space-y-4">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                  <span className="text-primary mr-2">05.</span>Contact
                </h2>
                <div className="h-px w-32 bg-primary"></div>
              </div>
              <div className="grid gap-8 py-8 md:grid-cols-2 w-full">
                <div>
                  <h3 className="text-2xl font-bold mb-4">Get In Touch</h3>
                  <p className="text-muted-foreground mb-6">
                    I`&apos;`m currently looking for new opportunities. Whether you have a question or just want to say hi,
                    I`&apos;`ll try my best to get back to you!
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Mail className="h-5 w-5 text-primary" />
                      <a href="mailto:john@example.com" className="text-sm hover:text-primary transition-colors">
                        john@example.com
                      </a>
                    </div>
                    <div className="flex items-center gap-3">
                      <Linkedin className="h-5 w-5 text-primary" />
                      <a
                        href="https://linkedin.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm hover:text-primary transition-colors"
                      >
                        linkedin.com/in/johndoe
                      </a>
                    </div>
                    <div className="flex items-center gap-3">
                      <Github className="h-5 w-5 text-primary" />
                      <a
                        href="https://github.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm hover:text-primary transition-colors"
                      >
                        github.com/johndoe
                      </a>
                    </div>
                  </div>
                </div>
                <Card className="border border-primary/20">
                  <CardHeader>
                    <CardTitle>Send a Message</CardTitle>
                    <CardDescription>I`&apos;`ll get back to you as soon as possible</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form className="grid gap-4">
                      <div className="grid gap-2">
                        <label htmlFor="name" className="text-sm font-medium leading-none">
                          Name
                        </label>
                        <input
                          id="name"
                          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                          placeholder="Your name"
                        />
                      </div>
                      <div className="grid gap-2">
                        <label htmlFor="email" className="text-sm font-medium leading-none">
                          Email
                        </label>
                        <input
                          id="email"
                          type="email"
                          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                          placeholder="Your email"
                        />
                      </div>
                      <div className="grid gap-2">
                        <label htmlFor="message" className="text-sm font-medium leading-none">
                          Message
                        </label>
                        <textarea
                          id="message"
                          className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                          placeholder="Your message"
                        />
                      </div>
                      <Button type="submit" className="w-full">
                        Send Message
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full border-t py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            © 2024 Sami Ullah Saleem. All rights reserved.
          </p>
          <div className="flex gap-4 md:hidden">
            <Link href="https://github.com" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-primary">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Button>
            </Link>
            <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-primary">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Button>
            </Link>
            <Link href="mailto:john@example.com">
              <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-primary">
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </Button>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

