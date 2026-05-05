import { motion } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

const MotionArticle = motion.article

export default function ProjectCard({ project }) {
  const {
    title,
    tagline,
    description,
    technologies = [],
    githubUrl,
    liveUrl,
    screenshot,
    featured,
  } = project

  return (
    <MotionArticle
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      whileHover={{ y: -6 }}
      className="group relative h-full"
    >
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-fuchsia-500/20 via-cyan-400/20 to-indigo-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />

      <div className="relative glass-panel rounded-2xl overflow-hidden bg-zinc-900/85 h-full flex flex-col border border-white/10 shadow-[0_25px_50px_-30px_rgba(15,23,42,0.8)] transition-transform duration-300 group-hover:-translate-y-1">
        <div className="relative h-44 sm:h-48 md:h-52 overflow-hidden">
          <img
            src={screenshot}
            alt={`${title} screenshot`}
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent" />

          {featured && (
            <div className="absolute top-3 sm:top-4 right-3 sm:right-4">
              <span className="px-2.5 sm:px-3 py-1 text-xs font-medium rounded-full bg-gradient-to-r from-fuchsia-500/30 to-cyan-400/30 border border-fuchsia-500/40 text-cyan-200">
                Featured
              </span>
            </div>
          )}

          <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5">
            <p className="text-xs sm:text-sm font-medium text-cyan-300/90 tracking-wide">
              {tagline}
            </p>
          </div>
        </div>

        <div className="p-5 sm:p-6 flex-1 flex flex-col">
          <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-zinc-100 group-hover:text-white transition-colors">
            {title}
          </h3>

          <p className="mt-3 text-zinc-400 leading-relaxed text-sm sm:text-base line-clamp-3">
            {description}
          </p>

          <div className="mt-5">
            <p className="text-[11px] sm:text-xs uppercase tracking-[0.24em] text-zinc-500 mb-3">
              Tech Stack
            </p>
            <div className="flex flex-wrap gap-2">
              {technologies.slice(0, 6).map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 text-[11px] sm:text-xs font-medium rounded-2xl bg-white/5 border border-white/10 text-zinc-300"
                >
                  {tech}
                </span>
              ))}
              {technologies.length > 6 && (
                <span className="px-3 py-1 text-[11px] sm:text-xs font-medium rounded-2xl bg-white/5 border border-white/10 text-zinc-500">
                  +{technologies.length - 6} more
                </span>
              )}
            </div>
          </div>

          <div className="mt-auto grid grid-cols-1 sm:grid-cols-2 gap-3">
            <a
              href={githubUrl}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-2 rounded-2xl py-3 px-4 bg-white/5 border border-white/10 text-zinc-200 hover:bg-white/10 hover:border-white/20 transition-all duration-300 text-sm"
            >
              <FaGithub className="text-base" />
              <span className="font-medium">GitHub</span>
            </a>
            {liveUrl ? (
              <a
                href={liveUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2 rounded-2xl py-3 px-4 bg-gradient-to-r from-fuchsia-500/20 to-cyan-400/20 border border-fuchsia-500/30 text-zinc-100 hover:from-fuchsia-500/30 hover:to-cyan-400/30 transition-all duration-300 text-sm"
              >
                <FaExternalLinkAlt className="text-sm" />
                <span className="font-medium">Live Demo</span>
              </a>
            ) : (
              <button
                type="button"
                disabled
                className="flex items-center justify-center gap-2 rounded-2xl py-3 px-4 bg-white/5 border border-white/10 text-zinc-500 cursor-not-allowed text-sm"
              >
                <FaExternalLinkAlt className="text-sm" />
                <span className="font-medium">Coming Soon</span>
              </button>
            )}
          </div>
        </div>
      </div>
    </MotionArticle>
  )
}

