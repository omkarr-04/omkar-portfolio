import { motion } from 'framer-motion'

import Reveal from '../components/Reveal.jsx'
import SectionHeading from '../components/SectionHeading.jsx'

const MotionDiv = motion.div

export default function About() {

  return (
    <div className="mx-auto max-w-6xl px-4 py-8 sm:py-12">
      <SectionHeading
        eyebrow="About"
        title="Passionate Developer"
        subtitle="I’m Omkar Sonawane, a final year BSc IT student at the University of Mumbai. I have a strong passion for building secure, scalable applications."
      />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <Reveal className="lg:col-span-1">
          <div className="glass-panel rounded-3xl p-6 border border-white/10">
            <h3 className="text-zinc-100 font-semibold text-lg">
              Education
            </h3>
            <p className="text-zinc-400 mt-3 leading-relaxed">
              Final Year BSc IT, University of Mumbai
              <br />
              MERN Stack Development
            </p>
          </div>
        </Reveal>

        <Reveal className="lg:col-span-1" delay={0.1}>
          <div className="glass-panel rounded-3xl p-6 border border-white/10">
            <h3 className="text-zinc-100 font-semibold text-lg">
              Career Goals
            </h3>
            <ul className="text-zinc-300 mt-3 space-y-2 text-sm">
              {/* <li>Grow into a Cyber Security Specialist.</li> */}
              <li>Build secure, scalable applications.</li>
              <li>Ship production-quality MERN stack applications.</li>
            </ul>
          </div>
        </Reveal>

        <Reveal className="lg:col-span-1" delay={0.2}>
          <div className="glass-panel rounded-3xl p-6 border border-white/10">
            <h3 className="text-zinc-100 font-semibold text-lg">Bio</h3>
            <p className="text-zinc-300 mt-3 leading-relaxed">
              I’m a passionate developer with a strong foundation in development using the MERN stack. I enjoy building responsive web interfaces and reliable APIs, while also exploring AI and analytics to create impactful projects. My goal is to continue growing as a developer and build innovative web applications.
            </p>
          </div>
        </Reveal>
      </div>

      <Reveal className="mt-8">
        <MotionDiv
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.4 }}
        >
          <div className="glass-panel rounded-3xl p-6 border border-white/10">
            <h3 className="text-zinc-100 font-semibold text-lg">
              Skills Summary
            </h3>
            <p className="text-zinc-300 mt-3 leading-relaxed">
              Proficient in web development fundamentals. Experienced in Web Development, MERN stack development, and Git version control. Strong foundation in building secure, scalable applications and exploring modern development concepts.
            </p>
          </div>
        </MotionDiv>
      </Reveal>

    </div>
  )
}

