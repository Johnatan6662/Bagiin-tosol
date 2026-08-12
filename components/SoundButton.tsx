"use client"

import Image from "next/image"
import { useRef, useState } from "react"
import { Volume2, VolumeX } from "lucide-react"

export default function SoundButton() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [volume, setVolume] = useState(0.5)

  const audioRef = useRef<HTMLAudioElement | null>(null)

  const toggleMusic = async () => {
    if (!audioRef.current) {
      audioRef.current = new Audio("/music/Mongol.mp3")
      audioRef.current.loop = true
      audioRef.current.volume = volume
    }

    const audio = audioRef.current

    if (audio.paused) {
      try {
        await audio.play()
        setIsPlaying(true)
      } catch (error) {
        console.error("Music play error:", error)
        setIsPlaying(false)
      }
    } else {
      audio.pause()
      setIsPlaying(false)
    }
  }

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = Number(e.target.value)

    setVolume(newVolume)

    if (audioRef.current) {
      audioRef.current.volume = newVolume
    }
  }

  return (
    <div className="fixed right-8 bottom-8 z-50 flex items-center gap-2">
      <div className="flex items-center gap-2 rounded-full bg-black/80 px-3 py-2 shadow-lg backdrop-blur-sm">
        {volume === 0 ? (
          <VolumeX className="h-5 w-5 text-white" />
        ) : (
          <Volume2 className="h-5 w-5 text-white" />
        )}

        <input
          type="range"
          min="0"
          max="1"
          step="0.01"
          value={volume}
          onChange={handleVolumeChange}
          aria-label="Music volume"
          className="w-24 cursor-pointer accent-yellow-500"
        />

        <span className="w-8 text-xs text-white">
          {Math.round(volume * 100)}%
        </span>
      </div>

      <button
        type="button"
        onClick={toggleMusic}
        aria-label={isPlaying ? "Pause music" : "Play music"}
        className="group relative flex h-16 w-16 items-center justify-center rounded-full bg-yellow-500 p-1 shadow-lg transition-all duration-300 hover:scale-110 hover:bg-yellow-400"
      >
        <div
          className={`relative h-full w-full overflow-hidden rounded-full ${
            isPlaying ? "animate-spin" : ""
          }`}
          style={{
            animationDuration: "3s",
          }}
        >
          <Image
            src="/images/record.png"
            alt="Music"
            fill
            priority
            className="rounded-full object-cover"
          />
        </div>
      </button>
    </div>
  )
}
