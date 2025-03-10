interface MarqueeProps {
  items: string[]
  className?: string
}

export function Marquee({ items, className = "" }: MarqueeProps) {
  const content = items.join(" • ")

  return (
    <div className={`marquee-container ${className}`}>
      <div className="marquee-content">{content}</div>
      <div className="marquee-content">{content}</div>
    </div>
  )
}

