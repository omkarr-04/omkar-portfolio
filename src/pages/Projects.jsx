import Reveal from '../components/Reveal.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import ProjectCard from '../components/ProjectCard.jsx'
import { projects } from '../projects/projects.js'

export default function Projects() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-8 sm:py-12 text-center">
      <SectionHeading
        eyebrow="Projects"
        title="Featured Builds"
        subtitle="Full-stack applications - built to solve real problems."
      />

      {/* <Reveal className="grid grid-cols-1 md:grid-cols-2 gap-5 justify-items-center">
        {projects.map((p) => (
          <ProjectCard key={p.title} project={p} />
        ))}
      </Reveal> */}
    <Reveal className="flex justify-center">
  <div className="grid grid-cols-1 gap-5">
    {projects.map((p) => (
      <ProjectCard key={p.title} project={p} />
    ))}
  </div>
</Reveal>
    </div>
  )
}

