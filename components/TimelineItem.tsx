interface TimelineItemProps {
  year: string
  title: string
  description: string
}

export default function TimelineItem({
  year,
  title,
  description,
}: TimelineItemProps) {
  return (
    <div className="relative overflow-visible px-0">
      <div className="pointer-events-none absolute top-1/2 left-0 hidden h-[calc(100%+4rem)] w-24 -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-r-full opacity-60 sm:block sm:w-28 lg:w-32">
        <img
          src="/images/left-bg.jpg"
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/40 to-transparent" />
      </div>

      <div className="pointer-events-none absolute top-1/2 right-0 hidden h-[calc(100%+4rem)] w-24 translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-l-full opacity-60 sm:block sm:w-28 lg:w-32">
        <img
          src="/images/right-bg.jpg"
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-l from-black/90 via-black/40 to-transparent" />
      </div>
  
      <div className="relative z-10 rounded-3xl border border-white/10 bg-white/5 p-8 shadow-2xl shadow-black/20 backdrop-blur-xl transition hover:-translate-y-1 sm:p-10">
        <div className="text-sm font-semibold tracking-[0.24em] text-amber-300 uppercase">
          {year}
        </div>

        <h3 className="mt-4 text-2xl font-bold text-white">{title}</h3>

        <p className="mt-4 text-orange-100">{description}</p>
      </div>
    </div>
  )
}
