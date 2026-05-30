export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer-bar">
      <div className="container py-10 relative-z">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <p className="text-meta">© {year} Omkar Sonawane</p>
          <div className="flex flex-wrap gap-6">
            <a href="https://github.com/omkarr-04" target="_blank" rel="noreferrer" className="link text-sm">
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/omkarr04" target="_blank" rel="noreferrer" className="link text-sm">
              LinkedIn
            </a>
            <a href="mailto:omkarsonawane2914@gmail.com" className="link text-sm">
              Email
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
