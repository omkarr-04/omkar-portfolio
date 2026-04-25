export default function SectionHeading({ eyebrow, title, subtitle }) {
  return (
    <div className="text-center mx-auto max-w-3xl px-2">
      {eyebrow ? (
        <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 rounded-full bg-white/5 border border-white/10 mb-3 sm:mb-4">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
          <p className="text-xs sm:text-sm tracking-widest text-zinc-400 uppercase font-medium">
            {eyebrow}
          </p>
        </div>
      ) : null}
      <h2 className="mt-2 text-3xl sm:text-4xl md:text-5xl font-bold text-zinc-100 tracking-tight">
        {title}
        <span className="text-gradient">.</span>
      </h2>
      {subtitle ? (
        <p className="mt-3 sm:mt-4 text-sm sm:text-lg text-zinc-400 leading-relaxed max-w-2xl mx-auto">
          {subtitle}
        </p>
      ) : null}
    </div>
  )
}

