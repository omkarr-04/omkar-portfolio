import { motion } from 'framer-motion'
import { FaBullseye, FaGraduationCap, FaUser } from 'react-icons/fa'

import Reveal from '../components/Reveal.jsx'
import SectionHeading from '../components/SectionHeading.jsx'

const MotionDiv = motion.div

export default function About() {

  return (
    <div className="mx-auto max-w-6xl px-3 sm:px-4 py-16 sm:py-20">
      <SectionHeading
        eyebrow="About"
        title="Passionate Developer"
        subtitle="I’m Omkar Sonawane, a final year BSc IT student at the University of Mumbai. I have a strong passion for building secure, scalable applications."
      />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        <Reveal>
          <div className="glass-panel rounded-2xl sm:rounded-3xl p-6 border border-white/10 h-full flex flex-col gap-5">
            <div className="inline-flex items-center justify-center h-12 w-12 rounded-2xl bg-fuchsia-500/15 text-fuchsia-300">
              <FaGraduationCap className="text-lg" />
            </div>
            <div className="flex-1">
              <h3 className="text-zinc-100 font-semibold text-lg">Education</h3>
              <p className="text-zinc-400 mt-4 leading-relaxed text-sm sm:text-base space-y-3">
                <span className="block">Final Year BSc IT, University of Mumbai.</span>
                <span className="block">Focused on full stack development, cloud-ready systems, and fast user experiences.</span>
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="glass-panel rounded-2xl sm:rounded-3xl p-6 border border-white/10 h-full flex flex-col gap-5">
            <div className="inline-flex items-center justify-center h-12 w-12 rounded-2xl bg-cyan-400/15 text-cyan-300">
              <FaBullseye className="text-lg" />
            </div>
            <div className="flex-1">
              <h3 className="text-zinc-100 font-semibold text-lg">Career Goals</h3>
              <ul className="text-zinc-300 mt-4 space-y-3 text-sm sm:text-base leading-relaxed">
                <li>Build reliable, maintainable applications for real users.</li>
                <li>Ship polished interfaces with strong backend workflows.</li>
                <li>Explore AI-driven tooling and data-informed UX.</li>
              </ul>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.16}>
          <div className="glass-panel rounded-2xl sm:rounded-3xl p-6 border border-white/10 h-full flex flex-col gap-5">
            <div className="inline-flex items-center justify-center h-12 w-12 rounded-2xl bg-indigo-500/15 text-indigo-300">
              <FaUser className="text-lg" />
            </div>
            <div className="flex-1">
              <h3 className="text-zinc-100 font-semibold text-lg">Bio</h3>
              <p className="text-zinc-300 mt-4 leading-relaxed text-sm sm:text-base">
                I build responsive interfaces with a focus on clarity, performance, and production readiness. I enjoy turning ideas into polished web products that feel confident and easy to use.
              </p>
            </div>
          </div>
        </Reveal>
      </div>

      <Reveal className="mt-6 sm:mt-8">
        <MotionDiv
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.4 }}
        >
          <div className="glass-panel rounded-2xl sm:rounded-3xl p-5 sm:p-6 border border-white/10">
            <h3 className="text-zinc-100 font-semibold text-base sm:text-lg">
              Skills Summary
            </h3>
            <p className="text-zinc-300 mt-3 leading-relaxed text-sm sm:text-base">
              Proficient in web development fundamentals. Experienced in Web Development, MERN stack development, and Git version control. Strong foundation in building secure, scalable applications and exploring modern development concepts.
            </p>
          </div>
        </MotionDiv>
      </Reveal>

    </div>
  )
}

