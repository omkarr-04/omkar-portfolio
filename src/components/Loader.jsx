import { useEffect, useState } from 'react'

export default function Loader() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 400)
    return () => clearTimeout(t)
  }, [])

  if (!loading) return null

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center bg-[var(--canvas)]" role="status">
      <div className="h-5 w-5 rounded-full border-2 border-[var(--border)] border-t-[var(--accent)] animate-spin" />
    </div>
  )
}
