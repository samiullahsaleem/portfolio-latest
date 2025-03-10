"use client"

import { useEffect, useState } from "react"

export function ProgressBar() {
  const [width, setWidth] = useState(0)

  useEffect(() => {
    const updateProgress = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight
      const winHeight = window.innerHeight
      const scrollPercent = scrollTop / (docHeight - winHeight)
      const scrollPercentRounded = Math.round(scrollPercent * 100)
      setWidth(scrollPercentRounded)
    }

    window.addEventListener("scroll", updateProgress)

    return () => {
      window.removeEventListener("scroll", updateProgress)
    }
  }, [])

  return <div className="progress-bar" style={{ width: `${width}%` }} />
}

