import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { IoChevronUp } from 'react-icons/io5'

const MotionButton = motion.button

export default function ScrollTopButton() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 500)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  if (!show) return null

  return (
    <MotionButton
      type="button"
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 12 }}
      transition={{ duration: 0.2 }}
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className="fixed bottom-6 right-6 z-[55] glass-card rounded-full p-3 hover:shadow-[0_0_0_1px_rgba(192,132,252,0.25),0_0_40px_rgba(192,132,252,0.15)]"
      aria-label="Back to top"
    >
      <IoChevronUp className="text-zinc-100 text-xl" />
    </MotionButton>
  )
}

