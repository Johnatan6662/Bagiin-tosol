interface LegacyCardProps {
  title: string
  description: string
}

export default function LegacyCard({ title, description }: LegacyCardProps) {
  return (
    <div className="relative overflow-hidden rounded-lg border border-amber-700/30 p-8 transition hover:-translate-y-2 hover:bg-amber-900/10">
      <h3 className="font-serif text-2xl font-semibold text-white transition-colors hover:text-yellow-400">
        {title}
      </h3>
      <p className="mt-4 text-orange-200 leading-7">{description}</p>
    </div>
  )
}
