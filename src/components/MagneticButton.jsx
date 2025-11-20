import { useRef } from 'react'

export default function MagneticButton({ children, className = '', onClick }) {
  const ref = useRef(null)

  const onMouseMove = (e) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const x = e.clientX - rect.left - rect.width / 2
    const y = e.clientY - rect.top - rect.height / 2
    el.style.setProperty('--mx', `${x * 0.15}px`)
    el.style.setProperty('--my', `${y * 0.15}px`)
  }

  const onMouseLeave = () => {
    const el = ref.current
    if (!el) return
    el.style.setProperty('--mx', '0px')
    el.style.setProperty('--my', '0px')
  }

  return (
    <button
      ref={ref}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      onClick={onClick}
      className={`relative inline-flex items-center justify-center gap-2 rounded-xl px-4 py-2 transition-transform duration-200 will-change-transform select-none ${className}`}
      style={{ transform: 'translate(var(--mx, 0), var(--my, 0))' }}
    >
      <span className="absolute inset-0 rounded-xl bg-cyan-400/10 blur-md" />
      <span className="absolute inset-0 rounded-xl border border-cyan-200/30" />
      <span className="relative z-10">{children}</span>
    </button>
  )
}
