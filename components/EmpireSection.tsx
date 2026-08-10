import { stats, achievements } from "@/data/empire"
import SectionHeader from "@/components/SectionHeader"
import StatCard from "@/components/StatCard"

export default function EmpireSection() {
  return (
    <section
      id="empire"
      className="bg-linear -to-b from-black via-red-950/10 to-black px-6 py-32"
    >
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          title="Монголын Их Эзэнт Гүрэн"
          subtitle="Дэлхийн түүхэнд хамгийн том газар нутгийг эзэлсэн эзэнт гүрэн"
        />

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {stats.map((stat) => (
            <StatCard key={stat.number} number={stat.number} label={stat.label} />
          ))}
        </div>

        <div className="mt-20 grid gap-12 md:grid-cols-2">
          <div>
            <h3 className="font-serif text-3xl font-bold text-yellow-400">
              Байлдан дагуулалт
            </h3>

            <ul className="mt-6 space-y-4 text-orange-200">
              {achievements.map((item) => (
                <li key={item}>▪ {item}</li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-serif text-3xl font-bold text-yellow-400">
              Шинэчлэл
            </h3>

            <p className="mt-6 leading-8 text-orange-200">
              Чингис хааны байгуулсан төрийн тогтолцоо, элч харилцаа, худалдааны
              сүлжээ нь олон улсын харилцаанд томоохон нөлөө үзүүлсэн.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
