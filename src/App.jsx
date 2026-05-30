import { useEffect } from 'react'

import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import Loader from './components/Loader.jsx'
import ScrollTopButton from './components/ScrollTopButton.jsx'

import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Projects from './pages/Projects.jsx'
import Resume from './pages/Resume.jsx'
import Contact from './pages/Contact.jsx'

export default function App() {
  useEffect(() => {
    const hash = window.location.hash.slice(1)
    if (hash) {
      setTimeout(() => {
        document.getElementById(hash)?.scrollIntoView({ behavior: 'smooth' })
      }, 100)
    }
  }, [])

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <Loader />

      <main className="flex-1">
        <section id="home" className="section-hero">
          <Home />
        </section>

        <section id="about" className="section-tone-a">
          <About />
        </section>

        <section id="projects" className="section-tone-b">
          <Projects />
        </section>

        <section id="resume" className="section-tone-c">
          <Resume />
        </section>

        <section id="contact" className="section-tone-warm">
          <Contact />
        </section>
      </main>

      <Footer />
      <ScrollTopButton />
    </div>
  )
}
