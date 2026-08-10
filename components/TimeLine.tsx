import { timeline } from "@/data/timeline"
import SectionHeader from "@/components/SectionHeader"
import TimelineItem from "@/components/TimelineItem"

export default function Timeline() {
  return (
    <section id="origin" className="mx-auto max-w-7xl px-6 py-32">
      <SectionHeader
        title="Үүсэл гарвал"
        subtitle="Тэмүжинээс дэлхийн их хаан хүртэлх замнал"
      />

      <div className="mt-16 space-y-10">
        {timeline.map((item) => (
          <TimelineItem
            key={item.year}
            year={item.year}
            title={item.title}
            description={item.text}
          />
        ))}
      </div>
    </section>
  )
}