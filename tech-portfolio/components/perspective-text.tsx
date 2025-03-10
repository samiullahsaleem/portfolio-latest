"use client"

interface PerspectiveTextProps {
  text: string
  className?: string
}

export function PerspectiveText({ text, className = "" }: PerspectiveTextProps) {
  return (
    <span className={`perspective-text inline-block ${className}`}>
      {text.split("").map((char, index) => (
        <span key={index} className="inline-block transition-transform duration-300">
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </span>
  )
}

