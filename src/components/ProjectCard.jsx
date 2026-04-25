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
      whileHover={{ y: -8 }}
      className="group relative"
    >
      {/* Glow effect container */}
      <div className="absolute -inset-0.5 rounded-2xl sm:rounded-3xl bg-gradient-to-r from-fuchsia-500/20 via-cyan-400/20 to-indigo-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-lg" />
      
      {/* Main card */}
      <div className="relative glass-panel rounded-2xl sm:rounded-3xl overflow-hidden bg-zinc-900/80">
        {/* Image Banner */}
        <div className="relative h-44 sm:h-48 md:h-56 overflow-hidden">
          <img
            src={screenshot}
            alt={`${title} screenshot`}
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
            loading="lazy"
          />
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent" />
          
          {/* Featured badge */}
          {featured && (
            <div className="absolute top-3 sm:top-4 right-3 sm:right-4">
              <span className="px-2.5 sm:px-3 py-1 text-xs font-medium rounded-full bg-gradient-to-r from-fuchsia-500/30 to-cyan-400/30 border border-fuchsia-500/40 text-cyan-200">
                Featured
              </span>
            </div>
          )}
          
          {/* Tagline overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6">
            <p className="text-xs sm:text-sm font-medium text-cyan-300/90 tracking-wide">
              {tagline}
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="p-4 sm:p-5 md:p-6 pt-3 sm:pt-4">
          {/* Title */}
          <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-zinc-100 group-hover:text-white transition-colors">
            {title}
          </h3>
          
          {/* Description */}
          <p className="mt-2 sm:mt-3 text-zinc-400 leading-relaxed text-sm line-clamp-2 sm:line-clamp-3">
            {description}
          </p>

          {/* Tech Stack Tags */}
          <div className="mt-4 sm:mt-5">
            <p className="text-xs text-zinc-500 uppercase tracking-wider mb-2 sm:mb-3">
              Tech Stack
            </p>
            <div className="flex flex-wrap gap-1.5 sm:gap-2">
              {technologies.slice(0, 6).map((tech, index) => (
                <span
                  key={tech}
                  className="px-2.5 sm:px-3 py-1 text-xs font-medium rounded-lg bg-white/5 border border-white/10 text-zinc-300 hover:bg-white/10 hover:border-white/20 transition-all duration-300"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  {tech}
                </span>
              ))}
              {technologies.length > 6 && (
                <span className="px-2.5 sm:px-3 py-1 text-xs font-medium rounded-lg bg-white/5 border border-white/10 text-zinc-500">
                  +{technologies.length - 6} more
                </span>
              )}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 mt-4 sm:mt-6">
            <a
              href={githubUrl}
              target="_blank"
              rel="noreferrer"
              className="flex-1 flex items-center justify-center gap-2 py-2.5 sm:py-3 px-3 sm:px-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-zinc-200 hover:text-white transition-all duration-300 group/btn text-sm"
            >
              <FaGithub className="text-base sm:text-lg group-hover/btn:scale-110 transition-transform" />
              <span className="font-medium">View Code</span>
            </a>
            {liveUrl ? (
              <a
                href={liveUrl}
                target="_blank"
                rel="noreferrer"
                className="flex-1 flex items-center justify-center gap-2 py-2.5 sm:py-3 px-3 sm:px-4 rounded-xl bg-gradient-to-r from-fuchsia-500/20 to-cyan-400/20 hover:from-fuchsia-500/30 hover:to-cyan-400/30 border border-fuchsia-500/30 hover:border-fuchsia-500/50 text-zinc-100 transition-all duration-300 group/btn text-sm"
              >
                <FaExternalLinkAlt className="text-xs sm:text-sm group-hover/btn:scale-110 transition-transform" />
                <span className="font-medium">Live Demo</span>
              </a>
            ) : (
              <button
                type="button"
                disabled
                className="flex-1 flex items-center justify-center gap-2 py-2.5 sm:py-3 px-3 sm:px-4 rounded-xl bg-white/5 border border-white/5 text-zinc-500 cursor-not-allowed text-sm"
              >
                <FaExternalLinkAlt className="text-xs sm:text-sm" />
                <span className="font-medium">Coming Soon</span>
              </button>
            )}
          </div>
        </div>
      </div>
    </MotionArticle>
  )
}

