"use client"

import Particles from "@/components/Particles"

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
   
      <div className="absolute inset-0 overflow-hidden">
        <video
          className="absolute inset-0 h-full w-full object-cover pointer-events-none"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/videos/TheChingis.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="absolute inset-0 z-0 bg-black/60" />

      <Particles />

      <div className="relative z-10 max-w-4xl text-center">
        <h1 className="font-serif text-5xl leading-tight font-black md:text-8xl">
          <span className="text-yellow-400">Дэлхийг</span> өөрчилсөн
          <br />
          их хааны түүх
        </h1>

        <p className="mt-8 text-xl text-orange-200">
          1162–1227 • Боржигин овог • Монголын их хаан
        </p>

        <p className="mt-5 text-orange-100">
          Дэлхийн хамгийн том эзэнт гүрний үндэс суурийг тавьсан Чингис хааны
          түүхийг судалцгаая.
        </p>

        <div className="mt-10 flex justify-center gap-5">
          <button className="rounded bg-amber-600 px-8 py-4 font-bold text-black transition hover:bg-amber-400">
            Түүхийг суралцах
          </button>
        </div>
      </div>
    </section>
  )
}

