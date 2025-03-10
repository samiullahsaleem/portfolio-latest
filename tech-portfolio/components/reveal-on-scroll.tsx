"use client"

import { useEffect, useRef, type ReactNode } from "react"

interface RevealProps {
  children: ReactNode
  delay?: number
  threshold?: number
  className?: string
}

export function RevealOnScroll({ children, delay = 0, threshold = 0.1, className = "" }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add("active")
          }, delay)
          observer.unobserve(entry.target)
        }
      },
      {
        threshold,
        rootMargin: "0px 0px -100px 0px",
      },
    )

    const currentRef = ref.current

    if (currentRef) {
      observer.observe(currentRef)
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef)
      }
    }
  }, [delay, threshold])

  return (
    <div ref={ref} className={`reveal ${className}`}>
      {children}
    </div>
  )
}

