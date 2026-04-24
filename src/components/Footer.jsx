import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="pb-10 pt-8">
      <div className="mx-auto max-w-6xl px-4">
        <div className="glass-panel rounded-2xl px-4 py-6 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <a
              className="glass-card rounded-xl p-2 hover:shadow-[0_0_0_1px_rgba(192,132,252,0.25)] transition-shadow"
              href="https://github.com/omkar2914"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
            <a
              className="glass-card rounded-xl p-2 hover:shadow-[0_0_0_1px_rgba(192,132,252,0.25)] transition-shadow"
              href="https://www.linkedin.com/in/omkarsonawane04"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
            <a
              className="glass-card rounded-xl p-2 hover:shadow-[0_0_0_1px_rgba(192,132,252,0.25)] transition-shadow"
              href="mailto:omkarsonawane2914@outlook.com"
              aria-label="Email"
            >
              <FaEnvelope />
            </a>
          </div>

          <p className="text-zinc-400 text-sm">
            Copyright © {year} Omkar Sonawane. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

