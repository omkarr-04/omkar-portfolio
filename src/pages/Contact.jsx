import SectionHeading from '../components/SectionHeading.jsx'
import ContactForm from '../components/ContactForm.jsx'

const links = [
  { label: 'Email', value: 'omkarsonawane2914@gmail.com', href: 'mailto:omkarsonawane2914@gmail.com' },
  { label: 'LinkedIn', value: 'Omkar Sonawane', href: 'https://www.linkedin.com/in/omkarr04', external: true },
  { label: 'GitHub', value: '@omkarr-04', href: 'https://github.com/omkarr-04', external: true },
]

export default function Contact() {
  return (
    <div className="container section relative-z">
      <SectionHeading
        label="Contact"
        title="Get in touch"
        description="Interested in working together or just want to chat? I'd love to hear from you."
      />

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-14">
        <div className="lg:col-span-2 space-y-8">
          <div>
            <p className="text-label mb-2">Location</p>
            <p className="text-body text-[var(--text-secondary)] max-w-none">Mumbai, India</p>
          </div>

          <ul className="space-y-6">
            {links.map((link) => (
              <li key={link.label}>
                <p className="text-label mb-1">{link.label}</p>
                <a
                  href={link.href}
                  target={link.external ? '_blank' : undefined}
                  rel={link.external ? 'noreferrer' : undefined}
                  className="link text-[var(--text-secondary)] text-[0.9375rem] break-all"
                >
                  {link.value}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-3 surface p-6 sm:p-8">
          <h3 className="text-subheading mb-2">Send a message</h3>
          <p className="text-body mb-8 max-w-md">
            Fill out the form below and I&apos;ll get back to you as soon as I can.
          </p>
          <ContactForm />
        </div>
      </div>
    </div>
  )
}
