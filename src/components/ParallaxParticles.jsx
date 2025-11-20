import { useEffect, useMemo, useRef } from 'react'

export default function ParallaxParticles({ layers = 3, count = 120 }) {
  const containerRef = useRef(null)
  const particles = useMemo(() => {
    const arr = []
    for (let i = 0; i < count; i++) {
      const size = Math.random() * 2.5 + 0.5
      const x = Math.random() * 100
      const y = Math.random() * 100
      const speed = 0.05 + Math.random() * 0.25 // parallax factor
      const layer = Math.floor(Math.random() * layers)
      arr.push({ id: i, size, x, y, speed, layer })
    }
    return arr
  }, [count, layers])

  useEffect(() => {
    const el = containerRef.current
    if (!el) return

    let raf = 0
    const onScroll = () => {
      const y = window.scrollY || 0
      // apply transform to each layer wrapper for performance
      Array.from(el.children).forEach((child, i) => {
        const depth = (i + 1) / layers
        const translate = y * depth * 0.05 // slow, elegant
        child.style.transform = `translateY(${translate}px)`
      })
    }
    const onMove = (e) => {
      const { innerWidth, innerHeight } = window
      const mx = (e.clientX / innerWidth - 0.5) * 2
      const my = (e.clientY / innerHeight - 0.5) * 2
      Array.from(el.children).forEach((child, i) => {
        const depth = (i + 1) / layers
        child.style.transform += ` translate(${mx * depth * 6}px, ${my * depth * 6}px)`
      })
    }
    const loop = () => {
      onScroll()
      raf = requestAnimationFrame(loop)
    }
    loop()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('mousemove', onMove)
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('mousemove', onMove)
    }
  }, [layers])

  // group particles into layers for batched transforms
  const layerGroups = Array.from({ length: layers }, (_, layer) => particles.filter(p => p.layer === layer))

  return (
    <div ref={containerRef} className="absolute inset-0 -z-10 pointer-events-none" aria-hidden>
      {layerGroups.map((group, i) => (
        <div key={i} className="absolute inset-0 will-change-transform">
          {group.map(p => (
            <span
              key={p.id}
              className="absolute rounded-full bg-cyan-300/35 shadow-[0_0_10px_rgba(34,211,238,0.55)]"
              style={{
                width: `${p.size}px`,
                height: `${p.size}px`,
                left: `${p.x}%`,
                top: `${p.y}%`,
                animation: `pp-float ${8 + Math.random() * 12}s ease-in-out ${Math.random() * 6}s infinite`
              }}
            />
          ))}
        </div>
      ))}
      <style>{`
        @keyframes pp-float { 0%,100%{ transform: translateY(-8px); opacity: .8 } 50%{ transform: translateY(8px); opacity: 1 } }
      `}</style>
    </div>
  )
}
