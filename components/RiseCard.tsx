interface RiseCardProps {
  title: string
  text: string
}

export default function RiseCard({ title, text }: RiseCardProps) {
  return (
    <div className="rounded-lg border border-amber-700/40 p-8 transition hover:-translate-y-2 hover:bg-amber-900/10">
      <h3 className="font-serif text-2xl font-bold">{title}</h3>
      <p className="mt-4 text-orange-200">{text}</p>
    </div>
  )
}
