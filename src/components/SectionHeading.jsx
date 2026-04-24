export default function SectionHeading({ eyebrow, title, subtitle }) {
  return (
    <div className="text-center mx-auto max-w-2xl mb-10">
      {eyebrow ? (
        <p className="text-sm tracking-widest text-zinc-400 uppercase">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="mt-2 text-3xl sm:text-4xl font-semibold text-zinc-100">
        {title}
      </h2>
      {subtitle ? (
        <p className="mt-3 text-zinc-400 leading-relaxed">{subtitle}</p>
      ) : null}
    </div>
  )
}

