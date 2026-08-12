"use client"

import { ChartAreaIcon, MessageCircleIcon } from "lucide-react"
import { Fragment, useEffect, useRef, useState } from "react"
import { createPortal } from "react-dom"
import dayjs from "dayjs"

export default function MiniAI() {
  const [open, setOpen] = useState(false)
  const [message, setMessage] = useState("")
  const [answer, setAnswer] = useState("")
  const [loading, setLoading] = useState(false)

  const chatbotRef = useRef(null)

  useEffect(() => {
    const now = dayjs()
    const minDate = dayjs("2026-08-15 10:00")
    const maxDate = dayjs("2026-08-15 18:00")

    if (now.isBefore(minDate) || now.isAfter(maxDate)) {
      (chatbotRef.current as { remove(): () => void } | null)?.remove();
    }

    if(now.isAfter(maxDate)) {
      alert("AI чатботны компонентыг устгаарай.")
    }
  }, [])

  const askAI = async () => {
    if (!message.trim()) return

    setLoading(true)
    setAnswer("")

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message }),
      })

      const data = await res.json()

      setAnswer(data.answer || "Хариу авахад алдаа гарлаа.")
    } catch {
      setAnswer("AI-тэй холбогдоход алдаа гарлаа.")
    } finally {
      setLoading(false)
    }
  }

  return (
    // <div className="fixed top-26.25 right-6 z-40">

    //   <button
    //     type="button"
    //     onClick={() => setOpen(!open)}
    //     className="flex items-center gap-2 rounded-full border border-amber-400/30 bg-black/80 px-5 py-3 font-bold text-amber-300 shadow-xl backdrop-blur-xl transition hover:scale-105 hover:border-amber-400 hover:bg-black"
    //   >
    //     <span>Түүхийн AI</span>
    //   </button>

    //   {open && (
    //     <div className="absolute top-16 right-0 w-90 rounded-2xl border border-amber-500/20 bg-black/95 p-4 shadow-2xl backdrop-blur-xl">
    //       <div className="mb-3 flex items-center justify-between">
    //         <h2 className="text-lg font-bold text-amber-300">Нэмэлт мэдээлэлийн AI</h2>

    //         <button
    //           type="button"
    //           onClick={() => setOpen(false)}
    //           className="text-lg text-white/50 transition hover:text-white"
    //         >
    //           ✕
    //         </button>
    //       </div>

    //       <div className="mb-3 max-h-64 min-h-24 overflow-y-auto rounded-xl bg-white/5 p-3 text-sm leading-relaxed text-orange-100">
    //         {loading ? (
    //           <span className="text-amber-300">AI бодож байна...</span>
    //         ) : (
    //           answer || "Монголын түүхийн талаар асуугаарай."
    //         )}
    //       </div>

    //       <div className="flex gap-2">
    //         <input
    //           value={message}
    //           onChange={(e) => setMessage(e.target.value)}
    //           onKeyDown={(e) => {
    //             if (e.key === "Enter") {
    //               askAI()
    //             }
    //           }}
    //           placeholder="Асуултаа бич..."
    //           className="min-w-0 flex-1 rounded-xl border border-white/10 bg-white/10 px-3 py-2 text-sm text-white outline-none placeholder:text-white/40 focus:border-amber-500 focus:ring-1 focus:ring-amber-500"
    //         />

    //         <button
    //           type="button"
    //           onClick={askAI}
    //           disabled={loading}
    //           className="rounded-xl bg-amber-500 px-4 py-2 font-bold text-black transition hover:bg-amber-400 disabled:cursor-not-allowed disabled:opacity-50"
    //         >
    //           {loading ? "..." : "Ask"}
    //         </button>
    //       </div>
    //     </div>
    //   )}
    // </div>
    <div ref={chatbotRef} className="fixed top-26.25 right-6 z-100">
      <button
        type="button"
        className="aspect-square rounded-full bg-amber-500 p-2 text-white hover:bg-amber-400"
        onClick={() => setOpen(!open)}
      >
        <MessageCircleIcon />
      </button>
      <div
        className={`absolute top-0 right-[calc(100%+1rem)] w-90 rounded-2xl border border-amber-500/20 bg-amber-500/50 shadow-2xl backdrop-blur-xl transition-transform duration-300 ${open ? "translate-y-0 opacity-100" : "pointer-events-none -translate-y-4 opacity-0"}`}
      >
        <iframe
          src="http://202.131.248.107:18502/embed/c15c2752-b9e1-4289-bd5b-f0eee3deb7ad?api_key=st_c905fb118f0d45a3b9175eb7deed0b92"
          width="350"
          height="500"
          frameBorder="0"
          style={{
            borderRadius: "12px",
            boxShadow: "0 4px 24px rgba(0,0,0,0.1)",
          }}
          allow="microphone"
        ></iframe>
      </div>
    </div>
  )
}
