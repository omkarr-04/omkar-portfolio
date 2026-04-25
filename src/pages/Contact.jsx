import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'

import SectionHeading from '../components/SectionHeading.jsx'
import Reveal from '../components/Reveal.jsx'
import ContactForm from '../components/ContactForm.jsx'

const contactCards = [
  {
    title: 'Email',
    value: 'omkarsonawane2914@outlook.com',
    href: 'mailto:omkarsonawane2914@outlook.com',
    icon: FaEnvelope,
  },
  {
    title: 'LinkedIn',
    value: 'Omkar Sonawane',
    href: 'https://www.linkedin.com/in/omkarsonawane04',
    icon: FaLinkedin,
  },
  {
    title: 'GitHub',
    value: '@omkar2914',
    href: 'https://github.com/omkar2914',
    icon: FaGithub,
  },
]

export default function Contact() {
  return (
    <div className="mx-auto max-w-6xl px-3 sm:px-4 py-8 sm:py-12">
      <SectionHeading
        eyebrow="Contact"
        title="Let’s build something impactful"
        subtitle="Send a message and I’ll get back to you. For faster replies, use your real email address."
      />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-5 items-start">
        <div className="lg:col-span-1">
          <Reveal>
            <div className="glass-panel rounded-2xl sm:rounded-3xl p-5 sm:p-6 border border-white/10">
              <h3 className="text-zinc-100 font-semibold text-base sm:text-lg">
                Location
              </h3>
              <p className="text-zinc-300 mt-3 leading-relaxed text-sm sm:text-base">
                Mumbai, India
              </p>
            </div>
          </Reveal>

          <div className="mt-4 space-y-3 sm:space-y-4">
            {contactCards.map((c) => (
              <Reveal key={c.title} delay={0.05}>
                <a
                  href={c.href}
                  target={c.title === 'Email' ? undefined : '_blank'}
                  rel={c.title === 'Email' ? undefined : 'noreferrer'}
                  className="glass-panel rounded-2xl sm:rounded-3xl p-5 sm:p-6 border border-white/10 block hover:shadow-[0_0_0_1px_rgba(192,132,252,0.18)] transition-shadow"
                >
                  <div className="flex items-center justify-between gap-3 sm:gap-4">
                    <div className="min-w-0 flex-1">
                      <p className="text-zinc-400 text-sm">{c.title}</p>
                      <p className="text-zinc-100 font-semibold mt-1 text-sm sm:text-base truncate">
                        {c.value}
                      </p>
                    </div>
                    <c.icon className="text-zinc-100 text-xl sm:text-2xl flex-shrink-0" />
                  </div>
                </a>
              </Reveal>
            ))}
          </div>
        </div>

        <div className="lg:col-span-2">
          <Reveal>
            <div className="glass-panel rounded-2xl sm:rounded-3xl p-5 sm:p-6 border border-white/10">
              <h3 className="text-zinc-100 font-semibold text-base sm:text-lg">
                Contact Form
              </h3>
              <p className="text-zinc-400 text-sm mt-2 leading-relaxed">
                No third-party setup needed. Submitting opens your email app with a drafted message.
              </p>

              <div className="mt-4 sm:mt-5">
                <ContactForm />
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </div>
  )
}

