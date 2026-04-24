import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

const MotionDiv = motion.div

export default function Loader() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 900)
    return () => clearTimeout(t)
  }, [])

  if (!loading) return null

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <MotionDiv
        aria-label="Loading"
        className="glass-card rounded-2xl p-6 flex items-center gap-4"
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0 }}
      >
        <div
          className="h-10 w-10 rounded-full border-2 border-fuchsia-400/40 border-t-fuchsia-300 animate-spin"
        />
        <div className="text-left">
          <p className="text-zinc-100 font-medium">Omkar Portfolio</p>
          <p className="text-zinc-400 text-sm">Loading experience…</p>
        </div>
      </MotionDiv>
    </div>
  )
}

