"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

export default function LoadingScreen() {
  const [show, setShow] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  if (!show) return null

  return (
    <motion.div
      initial={{
        opacity: 1,
      }}

      animate={{
        opacity: 1,
      }}

      exit={{
        opacity: 0,
      }}

      className="inset-0 bg-black fixed z-[100] flex items-center justify-center"
    >
      <div className="text-center">
        <motion.h1
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.5, 1, 0.5],
          }}

          transition={{
            duration: 2,
            repeat: Infinity,
          }}

          className="text-5xl text-yellow-400 font-serif"
        >
          ᠴᠢᠩᠭᠢᠰ
        </motion.h1>

        <p className="mt-5 text-orange-200 tracking-widest">
          ТҮҮХ АЧААЛЖ БАЙНА
        </p>
      </div>
    </motion.div>
  )
}
