import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="pb-8 sm:pb-10 pt-6 sm:pt-8">
      <div className="mx-auto max-w-6xl px-3 sm:px-4">
        <div className="glass-panel rounded-2xl px-4 sm:px-6 py-5 sm:py-6 text-center">
          <div className="flex items-center justify-center gap-2 sm:gap-3 mb-3 sm:mb-4">
            <a
              className="glass-card rounded-lg sm:rounded-xl p-2 sm:p-2.5 hover:shadow-[0_0_0_1px_rgba(192,132,252,0.25)] transition-shadow"
              href="https://github.com/omkarr-04"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <FaGithub className="text-base sm:text-lg" />
            </a>
            <a
              className="glass-card rounded-lg sm:rounded-xl p-2 sm:p-2.5 hover:shadow-[0_0_0_1px_rgba(192,132,252,0.25)] transition-shadow"
              href="https://www.linkedin.com/in/omkarr04"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="text-base sm:text-lg" />
            </a>
            <a
              className="glass-card rounded-lg sm:rounded-xl p-2 sm:p-2.5 hover:shadow-[0_0_0_1px_rgba(192,132,252,0.25)] transition-shadow"
              href="mailto:omkarsonawane2914@outlook.com"
              aria-label="Email"
            >
              <FaEnvelope className="text-base sm:text-lg" />
            </a>
          </div>

          <p className="text-zinc-400 text-xs sm:text-sm">
            Copyright © {year} Omkar Sonawane. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

