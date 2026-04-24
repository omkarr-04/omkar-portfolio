import { motion } from 'framer-motion'

const MotionArticle = motion.article

export default function ProjectCard({ project }) {
  const {
    title,
    description,
    technologies = [],
    githubUrl,
    liveUrl,
    screenshot,
  } = project

  return (
    <MotionArticle
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -6 }}
      className="glass-panel rounded-3xl overflow-hidden border border-white/10"
    >
      <div className="relative">
        <img
          src={screenshot}
          alt={`${title} screenshot`}
          className="h-48 w-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
        <div className="absolute left-4 bottom-4 right-4">
          <h3 className="text-white text-xl font-semibold">{title}</h3>
          <p className="text-zinc-200/90 text-sm mt-1 line-clamp-2">
            {description}
          </p>
        </div>
      </div>

      <div className="p-5">
        <div className="flex flex-wrap gap-2">
          {technologies.slice(0, 6).map((t) => (
            <span
              key={t}
              className="text-xs px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-zinc-200"
            >
              {t}
            </span>
          ))}
          {technologies.length > 6 ? (
            <span className="text-xs px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-zinc-400">
              +{technologies.length - 6}
            </span>
          ) : null}
        </div>

        <div className="flex flex-col sm:flex-row gap-2 mt-5">
          <a
            href={githubUrl}
            target="_blank"
            rel="noreferrer"
            className="flex-1 text-center rounded-2xl px-4 py-2.5 bg-white/10 hover:bg-white/15 border border-white/15 text-zinc-100 transition-colors"
          >
            GitHub
          </a>
          {liveUrl ? (
            <a
              href={liveUrl}
              target="_blank"
              rel="noreferrer"
              className="flex-1 text-center rounded-2xl px-4 py-2.5 bg-gradient-to-r from-fuchsia-500/20 to-cyan-400/20 hover:from-fuchsia-500/25 hover:to-cyan-400/25 border border-white/10 text-zinc-100 transition-colors"
            >
              Live demo
            </a>
          ) : (
            <button
              type="button"
              disabled
              className="flex-1 text-center rounded-2xl px-4 py-2.5 bg-white/5 border border-white/10 text-zinc-500 cursor-not-allowed"
            >
              Live demo
            </button>
          )}
        </div>
      </div>
    </MotionArticle>
  )
}

