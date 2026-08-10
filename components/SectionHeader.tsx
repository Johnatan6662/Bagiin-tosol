interface SectionHeaderProps {
  id?: string
  title: string
  subtitle?: string
  className?: string
}

export default function SectionHeader({
  id,
  title,
  subtitle,
  className = "",
}: SectionHeaderProps) {
  return (
    <div id={id} className={className}>
      <h2 className="font-serif text-5xl font-black text-yellow-400">
        {title}
      </h2>
      {subtitle ? (
        <p className="mt-4 text-orange-200">{subtitle}</p>
      ) : null}
    </div>
  )
}
