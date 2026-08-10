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
    <div className="grid gap-6 border-b border-amber-700/30 py-8 md:grid-cols-[150px_40px_1fr]">
      <div className="text-3xl font-black text-amber-500">{year}</div>
      <div className="hidden h-5 w-5 rounded-full bg-amber-600 md:block" />
      <div>
        <h3 className="font-serif text-2xl font-bold">{title}</h3>
        <p className="mt-3 text-orange-200">{description}</p>
      </div>
    </div>
  )
}
