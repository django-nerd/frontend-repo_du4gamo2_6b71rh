import { motion, useScroll } from 'framer-motion'

export default function ScrollMotion() {
  const { scrollYProgress } = useScroll()

  return (
    <>
      {/* Top scroll progress bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1.5 z-50 origin-left"
        style={{
          scaleX: scrollYProgress,
          background:
            'linear-gradient(90deg, rgba(45,212,191,0.9), rgba(34,211,238,0.95), rgba(59,130,246,0.95))',
          boxShadow: '0 0 24px rgba(34,211,238,0.55)'
        }}
      />

      {/* Subtle moving edge glow at the top for premium feel */}
      <div className="fixed top-0 left-0 right-0 h-10 z-40 pointer-events-none">
        <div className="absolute inset-x-0 top-0 h-full bg-gradient-to-b from-cyan-300/15 to-transparent" />
      </div>
    </>
  )
}
