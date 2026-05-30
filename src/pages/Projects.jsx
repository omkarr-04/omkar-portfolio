import SectionHeading from '../components/SectionHeading.jsx'
import ProjectCard from '../components/ProjectCard.jsx'
import { projects } from '../projects/projects.js'

export default function Projects() {
  const [featured, ...rest] = projects

  return (
    <div className="container section relative-z">
      <SectionHeading
        label="Work"
        title="Selected projects"
        description="Production-ready applications - full-stack apps, mobile tools, and AI-powered products."
      />

      <div className="mb-10">
        <ProjectCard project={featured} featured />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
        {rest.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

      <div className="mt-14 pt-10 border-t border-[var(--border-subtle)] flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <p className="text-body max-w-md">More experiments and smaller builds on GitHub.</p>
        <a
          href="https://github.com/omkarr-04?tab=repositories"
          target="_blank"
          rel="noreferrer"
          className="btn btn-secondary w-fit shrink-0"
        >
          View all repositories
        </a>
      </div>
    </div>
  )
}
