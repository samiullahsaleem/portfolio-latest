"use client"

import { useEffect, useState } from "react"

export function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })

      if (!isVisible) {
        setIsVisible(true)
      }
    }

    const updateHoverState = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const isHoverable =
        target.tagName.toLowerCase() === "a" ||
        target.tagName.toLowerCase() === "button" ||
        target.closest("a") !== null ||
        target.closest("button") !== null ||
        target.classList.contains("hoverable")

      setIsHovering(isHoverable)
    }

    const handleMouseLeave = () => {
      setIsVisible(false)
    }

    window.addEventListener("mousemove", updatePosition)
    window.addEventListener("mousemove", updateHoverState)
    document.addEventListener("mouseleave", handleMouseLeave)

    return () => {
      window.removeEventListener("mousemove", updatePosition)
      window.removeEventListener("mousemove", updateHoverState)
      document.removeEventListener("mouseleave", handleMouseLeave)
    }
  }, [isVisible])

  if (typeof window === "undefined") return null

  // Check if device is touch-based
  const isTouchDevice = () => {
    return "ontouchstart" in window || navigator.maxTouchPoints > 0
  }

  if (isTouchDevice()) return null

  return (
    <div
      className={`custom-cursor bg-primary ${isHovering ? "hover" : ""} ${isVisible ? "opacity-100" : "opacity-0"}`}
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
      }}
    />
  )
}

