"use client"

import { useState } from "react"

export default function SoundButton() {
  const [play, setPlay] = useState(false)

  function toggle() {
    const audio = new Audio("/music/mongol.mp3")

    if (!play) {
      audio.play()
    }

    setPlay(!play)
  }

  return (
    <button
      onClick={toggle}

      className="bottom-8 right-8 bg-yellow-500 text-black px-5 py-3 fixed z-50 rounded-full"
    >
      🎵
    </button>
  )
}
