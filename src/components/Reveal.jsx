import { motion } from 'framer-motion'

const MotionDiv = motion.div

const ease = [0.22, 1, 0.36, 1]

export default function Reveal({ children, delay = 0, className }) {
  return (
    <MotionDiv
      className={className}
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.5, delay, ease }}
    >
      {children}
    </MotionDiv>
  )
}
