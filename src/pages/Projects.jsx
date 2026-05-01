import Reveal from '../components/Reveal.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import ProjectCard from '../components/ProjectCard.jsx'
import { projects } from '../projects/projects.js'

export default function Projects() {
  return (
    <div className="mx-auto max-w-7xl px-3 sm:px-4 py-12 sm:py-16 lg:py-24">
      <SectionHeading
        eyebrow="Portfolio"
        title="Featured Builds"
        subtitle="Production-ready applications built with modern technologies. Each project demonstrates full-stack development skills and problem-solving abilities."
      />

      <Reveal>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 mt-8 sm:mt-12">
          {projects.map((project, index) => (
            <div 
              key={project.id} 
              className={index === 0 ? 'md:col-span-2' : ''}
            >
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </Reveal>

      {/* View More CTA */}
      <Reveal className="mt-10 sm:mt-16 text-center">
        <a
          href="https://github.com/omkarr-04?tab=repositories"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-zinc-300 hover:text-white transition-all duration-300 text-sm sm:text-base"
        >
          <span>View all projects on GitHub</span>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </a>
      </Reveal>
    </div>
  )
}

