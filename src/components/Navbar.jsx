import { useState, useEffect, useRef } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { FaBars, FaXmark } from 'react-icons/fa6'

const MotionDiv = motion.div

const navItems = [
  { label: 'About', id: 'about' },
  { label: 'Work', id: 'projects' },
  { label: 'Resume', id: 'resume' },
  { label: 'Contact', id: 'contact' },
]

function scrollToSection(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const [scrolled, setScrolled] = useState(false)
  const menuRef = useRef(null)

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) setOpen(false)
    }
    if (open) document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [open])

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
      const y = window.scrollY + 120
      const sections = ['home', ...navItems.map((n) => n.id)]
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i])
        if (el && el.offsetTop <= y) {
          setActiveSection(sections[i])
          break
        }
      }
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 transition-smooth ${
        scrolled
          ? 'bg-[var(--canvas)]/80 border-b border-[var(--border-subtle)] backdrop-blur-md'
          : 'bg-transparent'
      }`}
    >
      <div className="container h-14 sm:h-16 flex items-center justify-between gap-4">
        <button type="button" onClick={() => scrollToSection('home')} className="nav-brand shrink-0">
          Omkar
        </button>

        <nav className="hidden md:flex items-center gap-8" aria-label="Main">
          {navItems.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => scrollToSection(item.id)}
              className={`nav-link transition-smooth ${
                activeSection === item.id ? 'nav-link--active' : ''
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        <div className="hidden md:block shrink-0">
          <button type="button" onClick={() => scrollToSection('contact')} className="btn btn-secondary h-9">
            Contact
          </button>
        </div>

        <div ref={menuRef} className="relative md:hidden shrink-0 ml-auto">
          <button
            type="button"
            className="nav-menu-toggle"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            aria-controls="mobile-nav-menu"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <FaXmark className="text-lg" aria-hidden /> : <FaBars className="text-lg" aria-hidden />}
          </button>

          <AnimatePresence>
            {open ? (
              <MotionDiv
                id="mobile-nav-menu"
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.2 }}
                className="absolute right-0 top-[calc(100%+0.5rem)] z-50 min-w-[12rem] rounded-lg border border-[var(--border)] bg-[var(--bg-elevated)] py-2 shadow-[var(--shadow-md)]"
              >
                <nav className="flex flex-col" aria-label="Mobile">
                  {[{ label: 'Home', id: 'home' }, ...navItems].map((item) => (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => {
                        scrollToSection(item.id)
                        setOpen(false)
                      }}
                      className={`nav-menu-item ${
                        activeSection === item.id ? 'nav-menu-item--active' : ''
                      }`}
                    >
                      {item.label}
                    </button>
                  ))}
                </nav>
              </MotionDiv>
            ) : null}
          </AnimatePresence>
        </div>
      </div>
    </header>
  )
}
