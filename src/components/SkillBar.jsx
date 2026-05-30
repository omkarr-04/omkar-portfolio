export default function SkillBar({ label, value = 70 }) {
  return (
    <div className="surface p-4">
      <div className="flex items-center justify-between mb-3">
        <p className="text-label text-zinc-200">{label}</p>
        <p className="text-meta">{value}%</p>
      </div>
      <div className="h-1.5 rounded-full bg-zinc-800 overflow-hidden">
        <div
          className="h-full rounded-full bg-zinc-500 transition-all duration-500"
          style={{ width: `${value}%` }}
        />
      </div>
    </div>
  )
}
