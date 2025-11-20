import { useEffect, useRef } from 'react'

export default function SoundWave({ playing = false, bars = 24, height = 32 }) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const spans = Array.from(el.querySelectorAll('span'))
    let raf = 0

    const animate = () => {
      spans.forEach((s, i) => {
        const base = (Math.sin((Date.now() / 400) + i) + 1) / 2
        const amp = playing ? 1.3 : 0.5
        const h = Math.max(6, base * amp * height)
        s.style.height = `${h}px`
        s.style.opacity = String(0.6 + base * 0.4)
      })
      raf = requestAnimationFrame(animate)
    }
    raf = requestAnimationFrame(animate)

    return () => cancelAnimationFrame(raf)
  }, [playing, height])

  return (
    <div ref={ref} className="flex items-end justify-center gap-1 h-10">
      {Array.from({ length: bars }).map((_, i) => (
        <span key={i} className="w-1 rounded-full bg-cyan-300/90 shadow-[0_0_14px_rgba(34,211,238,0.6)]" style={{ height: 8 }} />
      ))}
    </div>
  )
}
