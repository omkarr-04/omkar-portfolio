import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'

function scrollToSection(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}

export default function Home() {
  return (
    <div className="container section pt-32 sm:pt-36 lg:pt-40 pb-8 relative-z">
      <div className="max-w-3xl">
        <p className="text-label mb-5">Developer · Mumbai, India</p>

        <h1 className="text-display mb-7">Omkar Sonawane</h1>

        <p className="text-lead max-w-2xl mb-10">
          I build secure, scalable applications with React, Node.js, and MongoDB - focused on
          clean code, responsive design, and shipping products people want to use.
        </p>

        <div className="flex flex-wrap items-center gap-3 mb-12">
          <button type="button" onClick={() => scrollToSection('projects')} className="btn btn-primary">
            View projects
          </button>
          <a href="/Omkar-Sonawane-Resume.pdf" download className="btn btn-secondary">
            Download resume
          </a>
        </div>

        <div className="flex flex-wrap items-center gap-6">
          <a
            href="https://github.com/omkarr-04"
            target="_blank"
            rel="noreferrer"
            className="link inline-flex items-center gap-2 text-sm"
          >
            <FaGithub />
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/omkarr04"
            target="_blank"
            rel="noreferrer"
            className="link inline-flex items-center gap-2 text-sm"
          >
            <FaLinkedin />
            LinkedIn
          </a>
          <a href="mailto:omkarsonawane2914@gmail.com" className="link inline-flex items-center gap-2 text-sm">
            <FaEnvelope />
            Email
          </a>
        </div>
      </div>
    </div>
  )
}
