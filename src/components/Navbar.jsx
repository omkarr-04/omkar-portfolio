import { useState, useEffect, useRef } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'
import { FiMenu, FiX } from 'react-icons/fi'

const navItems = [
  { label: 'Home', id: 'home' },
  { label: 'About', id: 'about' },
  { label: 'Skills', id: 'skills' },
  { label: 'Projects', id: 'projects' },
  { label: 'Resume', id: 'resume' },
  { label: 'Contact', id: 'contact' },
]

const MotionDiv = motion.div

function scrollToSection(id) {
  const element = document.getElementById(id)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const menuRef = useRef(null)

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        const hamburgerBtn = document.querySelector('[aria-label="Open menu"]')
        const closeBtn = document.querySelector('[aria-label="Close menu"]')
        if (hamburgerBtn && !hamburgerBtn.contains(event.target) && 
            closeBtn && !closeBtn.contains(event.target)) {
          setOpen(false)
        }
      }
    }

    if (open) {
      document.addEventListener('mousedown', handleClickOutside)
    }
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [open])

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => item.id)
      const scrollPosition = window.scrollY + 100

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i])
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i])
          break
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll()

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className="sticky top-0 z-50">
      <div className="mx-auto max-w-6xl px-3 sm:px-4 pt-3 sm:pt-4">
        <div className="glass-card rounded-2xl px-3 sm:px-4 py-2.5 sm:py-3 flex items-center justify-between">
          <div className="flex items-center gap-2 sm:gap-3">
            <button
              onClick={() => scrollToSection('home')}
              className="text-zinc-100 font-semibold tracking-tight hover:text-white transition-colors text-sm sm:text-base"
            >
              Omkar Sonawane
            </button>
          </div>

          <nav className="hidden lg:flex items-center gap-0.5">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.id)}
                className={`px-2.5 sm:px-3 py-1.5 text-xs sm:text-sm rounded-xl transition-colors ${
                  activeSection === item.id
                    ? 'bg-white/5 text-white'
                    : 'text-zinc-300 hover:text-white hover:bg-white/5'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-2">
            <a
              className="glass-card rounded-xl p-2 hover:shadow-[0_0_0_1px_rgba(192,132,252,0.25)] transition-shadow"
              href="https://github.com/omkar2914"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <FaGithub className="text-zinc-100 text-sm" />
            </a>
            <a
              className="glass-card rounded-xl p-2 hover:shadow-[0_0_0_1px_rgba(192,132,252,0.25)] transition-shadow"
              href="https://www.linkedin.com/in/omkarsonawane04"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="text-zinc-100 text-sm" />
            </a>
            <a
              className="glass-card rounded-xl p-2 hover:shadow-[0_0_0_1px_rgba(192,132,252,0.25)] transition-shadow"
              href="mailto:omkarsonawane2914@outlook.com"
              aria-label="Email"
            >
              <FaEnvelope className="text-zinc-100 text-sm" />
            </a>
          </div>

          <button
            type="button"
            className="lg:hidden glass-card rounded-xl p-2"
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <FiX className="w-5 h-5 text-zinc-100" /> : <FiMenu className="w-5 h-5 text-zinc-100" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open ? (
          <MotionDiv
            ref={menuRef}
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="lg:hidden px-3 sm:px-4 pb-4"
          >
            <div className="glass-panel rounded-2xl px-3 py-3 mt-2">
              <div className="flex flex-col gap-1">
                {navItems.map((item, index) => (
                  <motion.button
                    key={item.label}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    onClick={() => {
                      scrollToSection(item.id)
                      setOpen(false)
                    }}
                    className={`px-3 py-2.5 text-sm rounded-xl transition-colors text-left ${
                      activeSection === item.id
                        ? 'bg-white/5 text-white'
                        : 'text-zinc-300 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    {item.label}
                  </motion.button>
                ))}
              </div>

              <div className="mt-4 pt-3 border-t border-white/10 grid grid-cols-3 gap-2">
                <a
                  className="glass-card rounded-xl p-3 text-center hover:shadow-[0_0_0_1px_rgba(192,132,252,0.25)] transition-shadow flex items-center justify-center"
                  href="https://github.com/omkar2914"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub"
                >
                  <FaGithub className="text-zinc-100 text-lg" />
                </a>
                <a
                  className="glass-card rounded-xl p-3 text-center hover:shadow-[0_0_0_1px_rgba(192,132,252,0.25)] transition-shadow flex items-center justify-center"
                  href="https://www.linkedin.com/in/omkarsonawane04"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin className="text-zinc-100 text-lg" />
                </a>
                <a
                  className="glass-card rounded-xl p-3 text-center hover:shadow-[0_0_0_1px_rgba(192,132,252,0.25)] transition-shadow flex items-center justify-center"
                  href="mailto:omkarsonawane2914@outlook.com"
                  aria-label="Email"
                >
                  <FaEnvelope className="text-zinc-100 text-lg" />
                </a>
              </div>
            </div>
          </MotionDiv>
        ) : null}
      </AnimatePresence>
    </header>
  )
}

