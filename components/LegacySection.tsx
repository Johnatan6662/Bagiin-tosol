import { legacyCards } from "@/data/legacy"
import LegacyCard from "@/components/LegacyCard"
import SectionHeader from "@/components/SectionHeader"

export default function LegacySection() {
  return (
    <section id="legacy" className="mx-auto max-w-7xl px-6 py-32">
      <SectionHeader
        title="Түүхэн өв"
        subtitle="Дэлхийн түүхэнд үлдээсэн үйл ажиллагаа"
      />

      <div className="mt-12 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
        {legacyCards.map((item) => (
          <LegacyCard
            key={item.title}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
    </section>
  )
}
