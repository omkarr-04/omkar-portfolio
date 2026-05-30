import SectionHeading from '../components/SectionHeading.jsx'

const skills = [
  'React.js',
  'Node.js',
  'MongoDB',
  'Tailwind CSS',
  'Firebase',
  'AI APIs',
  'System Design',
  'Performance',
]

export default function About() {
  return (
    <div className="container section relative-z">
      <SectionHeading
        label="About"
        title="Who I am"
        description="A developer focused on thoughtful products and clean engineering."
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
        <div className="space-y-10 max-w-xl">
          <div>
            <h3 className="text-subheading mb-3">Background</h3>
            <p className="text-body max-w-none">
              I&apos;m Omkar Sonawane, a final-year BSc IT student at the University of Mumbai.
              My journey into development started with curiosity about how things work, and evolved
              into a passion for building production-ready applications that solve real problems.
            </p>
          </div>

          <div>
            <h3 className="text-subheading mb-3">What I do</h3>
            <p className="text-body max-w-none">
              I specialize in full-stack development with React, Node.js, and MongoDB. I build
              secure, scalable applications with a focus on clean code, responsive design, and
              thoughtful user experiences.
            </p>
          </div>

          {/* <div>
            <h3 className="text-subheading mb-3">Philosophy</h3>
            <p className="text-body max-w-none">
              I believe in building with intention — clarity over cleverness, performance over
              bells and whistles. Every design decision should serve the user.
            </p>
          </div> */}
        </div>

        <div className="surface p-6 sm:p-8 h-fit">
          <div className="space-y-8">
            <div>
              <p className="text-label mb-2">Current focus</p>
              <p className="text-body text-[var(--text-secondary)] max-w-none">
                Web development - responsive, performant applications with modern tooling.
              </p>
            </div>
            <div>
              <p className="text-label mb-2">Stack</p>
              <p className="text-body text-[var(--text-secondary)] max-w-none">
                React, Node.js, MongoDB, Firebase, and AI APIs for production features.
              </p>
            </div>
            <div>
              <p className="text-label mb-2">Learning</p>
              <p className="text-body text-[var(--text-secondary)] max-w-none">
                Cloud architecture, AI integration, and system design.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-14 pt-12 border-t border-[var(--border-subtle)]">
        <h3 className="text-subheading mb-4">Skills & expertise</h3>
        <p className="text-body max-w-2xl mb-6">
          Strong expertise in MERN stack development, responsive design, and Git workflow - with
          ongoing work in AI integration and cloud-native architecture.
        </p>
        <p className="text-meta max-w-3xl">{skills.join(' · ')}</p>
      </div>
    </div>
  )
}
