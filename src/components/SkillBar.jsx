export default function SkillBar({ label, value = 70 }) {
  return (
    <div className="glass-panel rounded-2xl p-4">
      <div className="flex items-center justify-between mb-3">
        <p className="text-zinc-100 font-medium">{label}</p>
        <p className="text-zinc-400 text-sm">{value}%</p>
      </div>
      <div className="h-2 rounded-full bg-white/5 overflow-hidden">
        <div
          className="h-full rounded-full bg-gradient-to-r from-fuchsia-400 via-cyan-300 to-indigo-400"
          style={{ width: `${value}%` }}
        />
      </div>
    </div>
  )
}

