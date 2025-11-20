export default function Hero() {
  return (
    <section className="relative w-full min-h-[70vh] flex items-center justify-center overflow-hidden">
      {/* Gradient canvas only (no dark theme, no card) */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-teal-900/20 to-blue-900/40" />

      {/* Particle field */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        {/* drifting dots */}
        {Array.from({ length: 60 }).map((_, i) => (
          <span
            key={i}
            className="absolute block rounded-full bg-cyan-300/40 shadow-[0_0_12px_rgba(34,211,238,0.6)]"
            style={{
              width: `${Math.random() * 3 + 1}px`,
              height: `${Math.random() * 3 + 1}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `floatY ${6 + Math.random() * 10}s ease-in-out ${Math.random() * 4}s infinite`
            }}
          />
        ))}
        {/* gentle waves using gradients */}
        <div className="absolute -bottom-24 left-0 right-0 h-64 bg-gradient-to-t from-blue-500/30 via-cyan-400/20 to-transparent blur-3xl" />
        <div className="absolute -bottom-10 left-0 right-0 h-40 bg-gradient-to-t from-teal-400/25 via-cyan-300/10 to-transparent blur-2xl" />
      </div>

      {/* Title and tagline */}
      <div className="relative z-10 text-center px-6">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white drop-shadow-[0_0_25px_rgba(34,211,238,0.35)]">
          AURCA SOUND
        </h1>
        <p className="mt-4 text-base md:text-xl text-white/85">
          Ultra‑luxury, glassmorphic music ecosystem — Artists, Listeners, Venues, Executives.
        </p>
        {/* sound‑wave accent using bars (subtle) */}
        <div className="mt-6 flex items-end justify-center gap-1 h-8 opacity-90">
          {Array.from({ length: 28 }).map((_, i) => (
            <span
              key={i}
              className="w-1 rounded-full bg-cyan-300/80 shadow-[0_0_12px_rgba(34,211,238,0.6)]"
              style={{
                height: `${6 + ((i * 17) % 28)}px`,
                animation: `bar 1.8s ease-in-out ${i * 0.05}s infinite`
              }}
            />
          ))}
        </div>
      </div>

      <style>{`
        @keyframes bar { 0%, 100% { transform: scaleY(0.6); opacity: .7 } 50% { transform: scaleY(1.5); opacity: 1 } }
        @keyframes floatY { 0%, 100% { transform: translateY(-10px); opacity: .9 } 50% { transform: translateY(10px); opacity: 1 } }
      `}</style>
    </section>
  )
}
