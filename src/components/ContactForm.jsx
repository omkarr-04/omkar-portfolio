import { useState } from 'react'
import { motion } from 'framer-motion'

const MotionForm = motion.form

export default function ContactForm() {
  const contactEmail = 'omkarsonawane2914@outlook.com'
  const [status, setStatus] = useState('idle')
  const [message, setMessage] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()

    setStatus('sending')
    setMessage('')

    try {
      const formData = new FormData(e.currentTarget)
      const name = String(formData.get('name') || '').trim()
      const email = String(formData.get('email') || '').trim()
      const subject = String(formData.get('subject') || '').trim()
      const userMessage = String(formData.get('message') || '').trim()

      const mailSubject = encodeURIComponent(subject || 'Portfolio Contact')
      const mailBody = encodeURIComponent(
        `Name: ${name}\nEmail: ${email}\n\nMessage:\n${userMessage}`
      )

      window.location.href = `mailto:${contactEmail}?subject=${mailSubject}&body=${mailBody}`
      setStatus('sent')
      setMessage('Your email app opened. Send the drafted message to contact me.')
      e.currentTarget.reset()
    } catch {
      setStatus('error')
      setMessage('Could not open your email app. Use the email card to contact me directly.')
    }
  }

  return (
    <MotionForm
      onSubmit={handleSubmit}
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.5 }}
      className="grid grid-cols-1 gap-4"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
        <label className="block">
          <span className="text-zinc-300 text-sm">Your name</span>
          <input
            name="name"
            type="text"
            required
            className="mt-1.5 sm:mt-2 w-full rounded-2xl bg-white/5 border border-white/10 px-3 sm:px-4 py-2.5 sm:py-3 text-zinc-100 placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-fuchsia-300/40 text-sm sm:text-base"
            placeholder="Omkar"
          />
        </label>

        <label className="block">
          <span className="text-zinc-300 text-sm">Email</span>
          <input
            name="email"
            type="email"
            required
            className="mt-1.5 sm:mt-2 w-full rounded-2xl bg-white/5 border border-white/10 px-3 sm:px-4 py-2.5 sm:py-3 text-zinc-100 placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-fuchsia-300/40 text-sm sm:text-base"
            placeholder="you@example.com"
          />
        </label>
      </div>

      <label className="block">
        <span className="text-zinc-300 text-sm">Subject</span>
        <input
          name="subject"
          type="text"
          required
          className="mt-1.5 sm:mt-2 w-full rounded-2xl bg-white/5 border border-white/10 px-3 sm:px-4 py-2.5 sm:py-3 text-zinc-100 placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-fuchsia-300/40 text-sm sm:text-base"
          placeholder="Let's talk about a project"
        />
      </label>

      <label className="block">
        <span className="text-zinc-300 text-sm">Message</span>
        <textarea
          name="message"
          required
          rows={4}
          className="mt-1.5 sm:mt-2 w-full rounded-2xl bg-white/5 border border-white/10 px-3 sm:px-4 py-2.5 sm:py-3 text-zinc-100 placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-fuchsia-300/40 text-sm sm:text-base"
          placeholder="Write your message…"
        />
      </label>

      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
        <button
          type="submit"
          disabled={status === 'sending'}
          className="rounded-2xl px-5 py-2.5 sm:py-3 bg-gradient-to-r from-fuchsia-500/30 to-cyan-400/30 border border-white/10 hover:from-fuchsia-500/40 hover:to-cyan-400/40 transition-colors text-zinc-100 disabled:opacity-60 text-sm sm:text-base"
        >
          {status === 'sending' ? 'Sending…' : 'Send message'}
        </button>

        {status === 'sent' ? (
          <p className="text-sm text-emerald-300">{message}</p>
        ) : status === 'error' ? (
          <p className="text-sm text-rose-300">{message}</p>
        ) : (
          <p className="text-sm text-zinc-500">
            Tip: Fill the form and your email app will open with a prefilled draft.
          </p>
        )}
      </div>
    </MotionForm>
  )
}

