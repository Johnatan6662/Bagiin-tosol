interface StatCardProps {
  number: string
  label: string
}

export default function StatCard({ number, label }: StatCardProps) {
  return (
    <div className="rounded-lg border border-amber-700/40 p-8 text-center transition hover:scale-105">
      <h3 className="font-serif text-4xl font-black text-yellow-400">{number}</h3>
      <p className="mt-3 text-sm text-orange-200 uppercase">{label}</p>
    </div>
  )
}
