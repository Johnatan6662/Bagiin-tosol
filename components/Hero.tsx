"use client"

import Particles from "@/components/Particles"

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <video
          className="pointer-events-none absolute inset-0 h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
        >
          {/* <source src="/videos/TheChingis.mp4" type="video/mp4" /> */}
          <source src="https://20e70a0aff2ca8787638290d4ece7ba1.r2.cloudflarestorage.com/transfer-prod/EBPDWcTwiU/6a7ef97ff7837ad728f3468a?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=ba603a6ed1120422cd2e594a957b0c5a/20260814/auto/s3/aws4_request&X-Amz-Date=20260814T111936Z&X-Amz-Expires=3600&X-Amz-SignedHeaders=host&response-content-disposition=inline;filename=%22TheChingis.mp4%22&X-Amz-Signature=c18284da9685df473af980b9f4b5ad61ce1d6d435b276b6612c8ab1228d39d80" type="video/mp4" />
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
          <a
            href="https://fliphtml5.com/pfaka/xemt/Mongoliin_nuuts_tovchoo/1/"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded bg-amber-600 px-8 py-4 font-bold text-black transition hover:bg-amber-400"
          >
            Түүхийг суралцах
          </a>
        </div>
      </div>
    </section>
  )
}
