import SectionHeading from '../components/SectionHeading.jsx'

function ResumeBlock({ title, items }) {
  return (
    <div className="surface p-6 sm:p-7 h-full">
      <h3 className="text-subheading mb-4">{title}</h3>
      <ul className="space-y-2.5">
        {items.map((item) => (
          <li key={item} className="text-body max-w-none">
            {item}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default function Resume() {
  return (
    <div className="container section relative-z">
      <SectionHeading
        label="Resume"
        title="Skills & experience"
        description="Education, technical expertise, and tools I work with."
      />

      <div className="surface p-6 sm:p-7 mb-10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <p className="text-body max-w-md">Download the full PDF for complete details.</p>
        <a href="/Omkar-Sonawane-Resume.pdf" download className="btn btn-primary shrink-0">
          Download PDF
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
        <ResumeBlock
          title="Education"
          items={[
            'BSc IT, University of Mumbai (Final Year)',
            'Full-stack development focus',
            'Cloud-ready systems & architecture',
          ]}
        />
        <ResumeBlock
          title="Languages & frameworks"
          items={[
            'JavaScript (ES6+), React.js, Node.js',
            'Express.js, MongoDB, Firebase',
            'Python, SQL, Tailwind CSS',
            'Kotlin (Android Development)',
          ]}
        />
        <ResumeBlock
          title="Tools & platforms"
          items={[
            'Git & GitHub (version control)',
            'VS Code, Postman, Firebase Console',
            'Android Studio, MongoDB Atlas',
            'Vite, npm, REST APIs',
          ]}
        />
      </div>

      <div className="mt-10 surface p-6 sm:p-7">
        <h3 className="text-subheading mb-6">Key competencies</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-3">
          {[
            'Full-stack web development',
            'Responsive UI/UX design',
            'Database design & optimization',
            'RESTful API development',
            'Performance optimization',
            'Clean code practices',
            'Git & collaboration',
            'Agile problem solving',
          ].map((item) => (
            <p key={item} className="text-body max-w-none">
              {item}
            </p>
          ))}
        </div>
      </div>
    </div>
  )
}
