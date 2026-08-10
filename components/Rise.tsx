import { cards } from "@/data/rise"
import SectionHeader from "@/components/SectionHeader"
import RiseCard from "@/components/RiseCard"

export default function RiseSection() {
  return (
    <section id="rise" className="mx-auto max-w-7xl px-6 py-32">
      <SectionHeader
        title="Их хаан болох зам"
        subtitle="1190-1206 жилүүдийн сургалтын үе"
      />

      <div className="mt-12 grid gap-8 md:grid-cols-2">
        {cards.map((card) => (
          <RiseCard key={card.title} title={card.title} text={card.text} />
        ))}
      </div>
    </section>
  )
}
