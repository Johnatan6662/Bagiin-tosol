"use client"

import { useEffect, useState } from "react"
import type { CSSProperties } from "react"

interface Particle {
  id: number
  left: number
  size: number
  delay: number
}

export default function Particles() {
  const [items, setItems] = useState<Particle[]>([])

  useEffect(() => {
    const particles: Particle[] = Array.from({ length: 40 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      size: Math.random() * 5 + 2,
      delay: Math.random() * 5,
    }))

    setItems(particles)
  }, [])

  return (
    <div className="inset-0 pointer-events-none absolute overflow-hidden">
      {items.map((p) => (
        <div
          key={p.id}

          className="bg-yellow-400/40 animate-pulse absolute rounded-full"

          style={
            {
              left: `${p.left}%`,
              width: `${p.size}px`,
              height: `${p.size}px`,
              bottom: 0,
              animationDelay: `${p.delay}s`,
            } as CSSProperties
          }
        />
      ))}
    </div>
  )
}
