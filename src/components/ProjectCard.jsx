import { FaGithub, FaArrowUpRightFromSquare } from 'react-icons/fa6'

export default function ProjectCard({ project, featured = false }) {
  const {
    title,
    tagline,
    category,
    year,
    description,
    technologies = [],
    githubUrl,
    liveUrl,
    screenshot,
  } = project

  const meta = [category, year].filter(Boolean).join(' · ')

  return (
    <article
      className={`project-card flex flex-col h-full group ${
        featured ? 'lg:flex-row' : ''
      }`}
    >
      <div
        className={`project-card__media shrink-0 ${
          featured
            ? 'lg:w-[56%] aspect-[16/10] lg:aspect-auto lg:min-h-[340px]'
            : 'aspect-[16/10]'
        }`}
      >
        <img src={screenshot} alt={`${title} product preview`} loading="lazy" />
      </div>

      <div
        className={`project-card__body flex flex-col flex-1 p-6 sm:p-8 ${
          featured ? 'lg:justify-center lg:py-10' : ''
        }`}
      >
        {meta ? <p className="text-meta mb-3">{meta}</p> : null}

        <h3
          className={`font-medium tracking-tight leading-snug mb-2 text-[var(--text-primary)] ${
            featured ? 'text-2xl sm:text-[1.625rem]' : 'text-xl sm:text-[1.375rem]'
          }`}
        >
          {title}
        </h3>

        <p className="text-meta mb-4 leading-relaxed">{tagline}</p>

        <p className="text-body flex-1 max-w-none text-[0.9375rem] leading-[1.7] text-[var(--text-secondary)]">
          {description}
        </p>

        <p className="text-meta mt-7 max-w-none">
          {technologies.slice(0, 5).join(' · ')}
          {technologies.length > 5 ? ` · +${technologies.length - 5}` : ''}
        </p>

        <div className="flex flex-wrap items-center gap-2.5 mt-7 pt-6 border-t border-[var(--border-subtle)]">
          <a
            href={githubUrl}
            target="_blank"
            rel="noreferrer"
            className="btn btn-secondary h-9 px-3.5 text-[0.8125rem]"
          >
            <FaGithub className="text-sm opacity-70" />
            Source
          </a>
          {liveUrl ? (
            <a
              href={liveUrl}
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary h-9 px-3.5 text-[0.8125rem]"
            >
              Live demo
              <FaArrowUpRightFromSquare className="text-[0.65rem] opacity-60" />
            </a>
          ) : (
            <span className="text-meta">In development</span>
          )}
        </div>
      </div>
    </article>
  )
}
