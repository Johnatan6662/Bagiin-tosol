"use client"

import { useEffect, useState } from "react"

export default function Cursor() {
  const [pos, setPos] = useState({
    x: 0,

    y: 0,
  })

  useEffect(() => {
    const move = (e: MouseEvent) => {
      setPos({
        x: e.clientX,

        y: e.clientY,
      })
    }

    window.addEventListener("mousemove", move)

    return () => {
      window.removeEventListener("mousemove", move)
    }
  }, [])

  return (
    <div
      style={{
        left: pos.x,

        top: pos.y,
      }}

      className="w-6 h-6 bg-yellow-400 pointer-events-none fixed z-[999] rounded-full mix-blend-difference transition-transform duration-100"
    />
  )
}
