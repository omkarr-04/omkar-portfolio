import { useEffect, useMemo, useState } from 'react'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'
import { motion } from 'framer-motion'

import Reveal from '../components/Reveal.jsx'

const MotionDiv = motion.div

function TypingText({ text, speed = 26, pauseMs = 900 }) {
  const [index, setIndex] = useState(0)
  const [phase, setPhase] = useState('typing') // typing | pause | reset

  useEffect(() => {
    if (!text) return

    const full = text

    if (phase === 'typing') {
      if (index >= full.length) {
        const t = setTimeout(() => setPhase('pause'), pauseMs)
        return () => clearTimeout(t)
      }
      const t = setTimeout(() => setIndex((i) => i + 1), speed)
      return () => clearTimeout(t)
    }

    if (phase === 'pause') {
      const t = setTimeout(() => {
        setIndex(0)
        setPhase('typing')
      }, 500)
      return () => clearTimeout(t)
    }
  }, [index, phase, pauseMs, speed, text])

  return (
    <span className="inline-flex items-center gap-2">
      <span className="text-gradient text-white">
        {text.slice(0, index)}
        <span className="text-zinc-400">|</span>
      </span>
    </span>
  )
}

function scrollToSection(id) {
  const element = document.getElementById(id)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}

export default function Home() {
  const fullTyping = useMemo(
    () => 'Developer',
    []
  )

  return (
    <div className="mx-auto max-w-6xl px-4">
      <section className="pt-10 pb-14">
        <div className="relative">
          <div
            aria-hidden="true"
            className="absolute -top-20 -left-20 h-72 w-72 rounded-full bg-fuchsia-500/15 blur-3xl"
          />
          <div
            aria-hidden="true"
            className="absolute -bottom-16 -right-16 h-72 w-72 rounded-full bg-cyan-400/15 blur-3xl"
          />

          <Reveal>
            <div className="glass-panel rounded-3xl p-7 sm:p-10 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-white/5" />
              <div className="relative">
                <p className="text-zinc-400 text-sm tracking-widest uppercase">
                  Omkar Sonawane • Mumbai, India
                </p>

                <h1 className="mt-4 text-4xl sm:text-5xl font-semibold text-zinc-100 leading-tight">
                  Omkar Sonawane
                </h1>

                <p className="mt-3 text-zinc-300 text-lg">
                  MERN Stack Developer
                </p>

                <div className="mt-6 text-xl sm:text-2xl font-medium text-white">
                  <TypingText text={fullTyping} />
                </div>

                <p className="mt-5 max-w-3xl text-zinc-300 leading-relaxed">
                  I build secure, scalable applications, and MERN stack
                  web apps.
                </p>

                <div className="mt-8 flex flex-col sm:flex-row gap-3 sm:items-center">
                  <button
                    onClick={() => scrollToSection('projects')}
                    className="rounded-2xl px-6 py-3 bg-white/10 hover:bg-white/15 border border-white/15 text-zinc-100 transition-colors text-center"
                  >
                    View Projects
                  </button>
                  <a
                    href="/Omkar-Sonawane-Resume.pdf"
                    download
                    className="rounded-2xl px-6 py-3 bg-gradient-to-r from-fuchsia-500/30 to-cyan-400/30 hover:from-fuchsia-500/40 hover:to-cyan-400/40 border border-white/10 text-zinc-100 transition-colors text-center"
                  >
                    Download Resume
                  </a>
                  <button
                    onClick={() => scrollToSection('contact')}
                    className="rounded-2xl px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/10 text-zinc-100 transition-colors text-center"
                  >
                    Contact Me
                  </button>
                </div>

                <div className="mt-7 flex items-center gap-3">
                  <a
                    href="https://github.com/omkar2914"
                    target="_blank"
                    rel="noreferrer"
                    className="glass-card rounded-2xl p-3 hover:shadow-[0_0_0_1px_rgba(192,132,252,0.25)] transition-shadow"
                    aria-label="GitHub"
                  >
                    <FaGithub className="text-zinc-100 text-xl" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/omkarsonawane04"
                    target="_blank"
                    rel="noreferrer"
                    className="glass-card rounded-2xl p-3 hover:shadow-[0_0_0_1px_rgba(192,132,252,0.25)] transition-shadow"
                    aria-label="LinkedIn"
                  >
                    <FaLinkedin className="text-zinc-100 text-xl" />
                  </a>
                  <a
                    href="omkarsonawane2914@outlook.com"
                    className="glass-card rounded-2xl p-3 hover:shadow-[0_0_0_1px_rgba(192,132,252,0.25)] transition-shadow"
                    aria-label="Email"
                  >
                    <FaEnvelope className="text-zinc-100 text-xl" />
                  </a>
                </div>

                <MotionDiv
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-3"
                >
                  <div className="glass-panel rounded-3xl p-4">
                    <p className="text-zinc-400 text-sm">Focus</p>
                    <p className="text-zinc-100 font-semibold mt-1">
                      Web Development
                    </p>
                  </div>
                  <div className="glass-panel rounded-3xl p-4">
                    <p className="text-zinc-400 text-sm">Stack</p>
                    <p className="text-zinc-100 font-semibold mt-1">
                      MERN Stack
                    </p>
                  </div>
                  <div className="glass-panel rounded-3xl p-4">
                    <p className="text-zinc-400 text-sm">Projects</p>
                    <p className="text-zinc-100 font-semibold mt-1">
                      Build Bazaar
                    </p>
                  </div>
                </MotionDiv>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  )
}

