"use client"

interface GlitchTextProps {
  text: string
  className?: string
}

export function GlitchText({ text, className = "" }: GlitchTextProps) {
  return (
    <span className={`text-glitch ${className}`} data-text={text}>
      {text}
    </span>
  )
}

