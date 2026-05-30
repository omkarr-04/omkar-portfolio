import { useState } from 'react'

export default function ContactForm() {
  const contactEmail = 'omkarsonawane2914@gmail.com'
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
        `Name: ${name}\nEmail: ${email}\n\nMessage:\n${userMessage}`,
      )

      window.location.href = `mailto:${contactEmail}?subject=${mailSubject}&body=${mailBody}`
      setStatus('sent')
      setMessage('Your email app opened. Send the drafted message to contact me.')
      e.currentTarget.reset()
    } catch {
      setStatus('error')
      setMessage('Could not open your email app. Use the email link instead.')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <label className="block">
          <span className="text-label block mb-2">Name</span>
          <input name="name" type="text" required className="input" placeholder="Your name" />
        </label>
        <label className="block">
          <span className="text-label block mb-2">Email</span>
          <input name="email" type="email" required className="input" placeholder="you@example.com" />
        </label>
      </div>

      <label className="block">
        <span className="text-label block mb-2">Subject</span>
        <input name="subject" type="text" required className="input" placeholder="What's this about?" />
      </label>

      <label className="block">
        <span className="text-label block mb-2">Message</span>
        <textarea
          name="message"
          required
          rows={5}
          className="input textarea"
          placeholder="Tell me about your project…"
        />
      </label>

      <div className="flex flex-col sm:flex-row sm:items-center gap-4 pt-2">
        <button type="submit" disabled={status === 'sending'} className="btn btn-primary">
          {status === 'sending' ? 'Opening…' : 'Send message'}
        </button>
        {status === 'sent' ? (
          <p className="text-meta text-[var(--accent)] max-w-none">{message}</p>
        ) : status === 'error' ? (
          <p className="text-meta text-[var(--text-secondary)] max-w-none">{message}</p>
        ) : (
          <p className="text-meta max-w-none">Opens your email client with a draft.</p>
        )}
      </div>
    </form>
  )
}
