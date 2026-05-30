export default function SectionHeading({ label, title, description }) {
  return (
    <header className="mb-12 md:mb-14 max-w-2xl">
      {label ? <p className="section-label mb-4">{label}</p> : null}
      <h2 className="text-heading">{title}</h2>
      {description ? (
        <p className="text-lead mt-4 max-w-xl">{description}</p>
      ) : null}
    </header>
  )
}
