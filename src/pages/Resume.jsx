import SectionHeading from '../components/SectionHeading.jsx'
import Reveal from '../components/Reveal.jsx'

function ListCard({ title, items }) {
  return (
    <div className="glass-panel rounded-2xl sm:rounded-3xl p-5 sm:p-6 border border-white/10 h-full">
      <h3 className="text-zinc-100 font-semibold text-base sm:text-lg">{title}</h3>
      <ul className="mt-3 text-zinc-300 space-y-2 text-sm sm:text-base">
        {items.map((it) => (
          <li key={it}>{it}</li>
        ))}
      </ul>
    </div>
  )
}

export default function Resume() {
  return (
    <div className="mx-auto max-w-6xl px-3 sm:px-4 py-8 sm:py-12">
      <SectionHeading
        eyebrow="Resume"
        title="Download & Overview"
        subtitle="A quick snapshot of education, skills, tools, certifications, and projects."
      />

      <Reveal>
        <div className="glass-card rounded-2xl sm:rounded-3xl p-5 sm:p-6 border border-white/10 mb-5 sm:mb-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4">
            <div>
              <p className="text-zinc-400 text-sm">Resume PDF</p>
            </div>
            <a
              href="/resume.pdf"
              download
              className="rounded-2xl px-5 sm:px-6 py-2.5 sm:py-3 bg-gradient-to-r from-fuchsia-500/30 to-cyan-400/30 hover:from-fuchsia-500/40 hover:to-cyan-400/40 border border-white/10 text-zinc-100 transition-colors text-sm sm:text-base"
            >
              Download Resume
            </a>
          </div>
        </div>
      </Reveal>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
        <Reveal className="md:col-span-1 lg:col-span-1">
          <ListCard
            title="Education"
            items={[
              'BSc IT, University of Mumbai (Final Year)',
              'Relevant interests: Full Stack Development',
            ]}
          />
        </Reveal>

        <Reveal className="md:col-span-1 lg:col-span-1">
          <ListCard
            title="Technical Skills"
            items={[
              'Python (EDA, ML basics, data workflows)',
              'SQL (joins, aggregation, query optimization)',
              'MongoDB, Express.js, React.js, Node.js',
              'JavaScript, HTML, CSS',
              'Git & GitHub (collaboration workflows)',
            ]}
          />
        </Reveal>

        <Reveal className="md:col-span-2 lg:col-span-1">
          <ListCard
            title="Tools"
            items={[
              'VS Code + GitHub',
              'Postman (API testing)',
            ]}
          />
        </Reveal>

        <Reveal className="md:col-span-2 lg:col-span-2">
          <div className="glass-panel rounded-2xl sm:rounded-3xl p-5 sm:p-6 border border-white/10 h-full">
          </div>
        </Reveal>
      </div>
    </div>
  )
}

