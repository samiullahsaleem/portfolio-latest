"use client"

import { useState, useRef, type ReactNode, type MouseEvent } from "react"
import { Button, type ButtonProps } from "@/components/ui/button"

interface MagneticButtonProps extends ButtonProps {
  children: ReactNode
  strength?: number
}

export function MagneticButton({ children, strength = 30, ...props }: MagneticButtonProps) {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const buttonRef = useRef<HTMLButtonElement>(null)

  const handleMouseMove = (e: MouseEvent) => {
    if (!buttonRef.current) return

    const rect = buttonRef.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2

    const distanceX = e.clientX - centerX
    const distanceY = e.clientY - centerY

    setPosition({
      x: distanceX / strength,
      y: distanceY / strength,
    })
  }

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 })
  }

  return (
    <Button
      ref={buttonRef}
      className="magnetic-button transition-transform"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `translate(${position.x}px, ${position.y}px)`,
      }}
      {...props}
    >
      {children}
    </Button>
  )
}

