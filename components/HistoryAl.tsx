"use client"

import { useState } from "react"

export default function HistoryAI() {
  const [question, setQuestion] = useState("")

  const [answer, setAnswer] = useState("")

  async function ask() {
    const res = await fetch("/api/history", {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        question,
      }),
    })

    const data = await res.json()

    setAnswer(data.answer)
  }

  return (
    <section className="py-32 px-6">
      <div className="max-w-3xl border-yellow-700 rounded-3xl p-10 bg-white/5 mx-auto border">
        <h2 className="text-4xl text-yellow-400 font-serif">🤖 AI Түүхч</h2>

        <input
          value={question}

          onChange={(e) => setQuestion(e.target.value)}

          placeholder="Чингис хаан юу бүтээсэн бэ?"

          className="mt-8 bg-black border-yellow-700 rounded p-4 w-full border"
        />

        <button
          onClick={ask}

          className="mt-5 bg-yellow-500 text-black px-8 py-3 rounded"
        >
          Асуух
        </button>

        <p className="mt-8 text-orange-200 leading-relaxed">{answer}</p>
      </div>
    </section>
  )
}
