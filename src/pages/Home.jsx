import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'
import { motion } from 'framer-motion'

import Reveal from '../components/Reveal.jsx'

const MotionDiv = motion.div

function scrollToSection(id) {
  const element = document.getElementById(id)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}

export default function Home() {
  return (
    <div className="mx-auto max-w-6xl px-3 sm:px-4">
      <section className="pt-12 sm:pt-14 lg:pt-16 pb-12 sm:pb-16 lg:pb-20">
        <div className="relative">
          <div
            aria-hidden="true"
            className="absolute -top-12 sm:-top-16 -left-12 sm:-left-16 h-40 sm:h-56 w-40 sm:w-56 rounded-full bg-fuchsia-500/15 blur-3xl"
          />
          <div
            aria-hidden="true"
            className="absolute -bottom-10 sm:-bottom-12 -right-10 sm:-right-12 h-40 sm:h-56 w-40 sm:w-56 rounded-full bg-cyan-400/15 blur-3xl"
          />

          <Reveal>
            <div className="glass-panel rounded-3xl p-6 sm:p-8 relative overflow-hidden border border-white/10 backdrop-blur-xl">
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-white/5" />
              <div className="relative space-y-4 sm:space-y-5">
                <div className="space-y-2">
                  <p className="text-cyan-400/80 text-sm uppercase tracking-[0.15em] font-semibold">
                    Omkar Sonawane
                  </p>
                  <p className="text-zinc-500 text-sm">Mumbai, India</p>
                </div>

                <div className="space-y-2">
                  <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight">
                    <span className="text-zinc-100">Mern Stack</span>
                    <br />
                    <span className="text-gradient">Developer</span>
                  </h1>
                </div>

                <p className="text-sm sm:text-base text-zinc-300 leading-relaxed max-w-2xl">
                  I build secure, scalable applications with React, Node.js, and MongoDB. Passionate about clean code, responsive design, and shipping products that people love.
                </p>

                <div className="flex flex-col sm:flex-row gap-2 pt-1">
                  <button
                    onClick={() => scrollToSection('projects')}
                    className="px-5 sm:px-6 py-3 rounded-2xl font-medium text-xs sm:text-sm bg-white/10 hover:bg-white/15 border border-white/20 hover:border-white/30 text-white transition-all duration-300"
                  >
                    View Projects
                  </button>
                  <a
                    href="/Omkar-Sonawane-Resume.pdf"
                    download
                    className="px-5 sm:px-6 py-3 rounded-2xl font-medium text-xs sm:text-sm bg-gradient-to-r from-fuchsia-500/25 to-cyan-400/25 hover:from-fuchsia-500/35 hover:to-cyan-400/35 border border-fuchsia-500/30 hover:border-fuchsia-500/50 text-white transition-all duration-300"
                  >
                    Download Resume
                  </a>
                  <button
                    onClick={() => scrollToSection('contact')}
                    className="px-5 sm:px-6 py-3 rounded-2xl font-medium text-xs sm:text-sm bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-zinc-300 hover:text-white transition-all duration-300"
                  >
                    Get in Touch
                  </button>
                </div>

                <div className="flex items-center gap-2 pt-1">
                  <a
                    href="https://github.com/omkarr-04"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center h-9 w-9 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-zinc-100 transition-all duration-300"
                    aria-label="GitHub"
                  >
                    <FaGithub className="text-base" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/omkarr04"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center h-9 w-9 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-zinc-100 transition-all duration-300"
                    aria-label="LinkedIn"
                  >
                    <FaLinkedin className="text-base" />
                  </a>
                  <a
                    href="mailto:omkarsonawane2914@gmail.com"
                    className="inline-flex items-center justify-center h-9 w-9 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-zinc-100 transition-all duration-300"
                    aria-label="Email"
                  >
                    <FaEnvelope className="text-base" />
                  </a>
                </div>

                <div className="grid grid-cols-3 gap-3 pt-2">
                  <MotionDiv
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="glass-panel rounded-2xl p-3 sm:p-4 border border-white/10 group hover:border-white/20 transition-all duration-300"
                  >
                    <p className="text-[10px] sm:text-xs uppercase tracking-[0.12em] text-zinc-500 font-semibold mb-1">Focus</p>
                    <p className="text-zinc-100 font-semibold text-xs sm:text-sm">Web Development</p>
                  </MotionDiv>
                  <MotionDiv
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.15 }}
                    className="glass-panel rounded-2xl p-3 sm:p-4 border border-white/10 group hover:border-white/20 transition-all duration-300"
                  >
                    <p className="text-[10px] sm:text-xs uppercase tracking-[0.12em] text-zinc-500 font-semibold mb-1">Stack</p>
                    <p className="text-zinc-100 font-semibold text-xs sm:text-sm">MERN</p>
                  </MotionDiv>
                  <MotionDiv
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="glass-panel rounded-2xl p-3 sm:p-4 border border-white/10 group hover:border-white/20 transition-all duration-300"
                  >
                    <p className="text-[10px] sm:text-xs uppercase tracking-[0.12em] text-zinc-500 font-semibold mb-1">Featured</p>
                    <p className="text-zinc-100 font-semibold text-xs sm:text-sm">3 Projects</p>
                  </MotionDiv>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  )
}
