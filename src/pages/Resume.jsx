import SectionHeading from '../components/SectionHeading.jsx'
import Reveal from '../components/Reveal.jsx'

function ListCard({ title, items }) {
  return (
    <div className="glass-panel rounded-3xl p-6 border border-white/10">
      <h3 className="text-zinc-100 font-semibold text-lg">{title}</h3>
      <ul className="mt-3 text-zinc-300 space-y-2 text-sm">
        {items.map((it) => (
          <li key={it}>{it}</li>
        ))}
      </ul>
    </div>
  )
}

export default function Resume() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-8 sm:py-12">
      <SectionHeading
        eyebrow="Resume"
        title="Download & Overview"
        subtitle="A quick snapshot of education, skills, tools, certifications, and projects."
      />

      <Reveal>
        <div className="glass-card rounded-3xl p-6 border border-white/10 mb-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <p className="text-zinc-400 text-sm">Resume PDF</p>
              {/* <p className="text-zinc-100 font-semibold mt-1">
                Replace `public/resume.pdf` with your final resume
              </p> */}
            </div>
            <a
              href="/resume.pdf"
              download
              className="rounded-2xl px-6 py-3 bg-gradient-to-r from-fuchsia-500/30 to-cyan-400/30 hover:from-fuchsia-500/40 hover:to-cyan-400/40 border border-white/10 text-zinc-100 transition-colors"
            >
              Download Resume
            </a>
          </div>
        </div>
      </Reveal>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        <Reveal className="lg:col-span-1">
          <ListCard
            title="Education"
            items={[
              'BSc IT, University of Mumbai (Final Year)',
              'Relevant interests: Full Stack Development',
            ]}
          />
        </Reveal>

        <Reveal className="lg:col-span-1">
          <ListCard
            title="Technical Skills"
            items={[
              'Python (EDA, ML basics, data workflows)',
              'SQL (joins, aggregation, query optimization)',
              // 'Power BI (dashboards & KPI design)',
              'MongoDB, Express.js, React.js, Node.js',
              'JavaScript, HTML, CSS',
              'Git & GitHub (collaboration workflows)',
            ]}
          />
        </Reveal>

        <Reveal className="lg:col-span-1">
          <ListCard
            title="Tools"
            items={[
              // 'Jupyter / Notebook workflows',
              'VS Code + GitHub',
              // 'Power Query basics (Power BI)',
              'Postman (API testing)',
            ]}
          />
        </Reveal>

        {/* <Reveal className="lg:col-span-1">
          <ListCard
            title="Certifications"
            items={[
              'Data Analytics / BI certification (placeholder)',
              'Machine Learning / NLP course (placeholder)',
              'Full Stack / MERN course (placeholder)',
            ]}
          />
        </Reveal> */}

        <Reveal className="lg:col-span-2">
          <div className="glass-panel rounded-3xl p-6 border border-white/10 h-full">
            {/* <h3 className="text-zinc-100 font-semibold text-lg">
              Projects Summary
            </h3> */}
            {/* <p className="text-zinc-400 text-sm mt-3 leading-relaxed">
              These projects demonstrate my ability to combine analytics and
              modern web engineering. Live demos are placeholders until you
              publish them.
            </p> */}
            {/* <div className="mt-4 flex flex-wrap gap-2">
              {[
                'Build Bazaar',
                // 'Semantic Book Recommender',
                // 'Hotel Revenue Dashboard (Power BI)',
                // 'Sales Data Analysis (Python)',
                // 'Resume Analyzer Tool',
                // 'MERN Authentication System',
              ].map((p) => (
                <span
                  key={p}
                  className="text-xs px-3 py-1 rounded-full bg-white/5 border border-white/10 text-zinc-200"
                >
                  {p}
                </span>
              ))}
            </div> */}
          </div>
        </Reveal>
      </div>
    </div>
  )
}

