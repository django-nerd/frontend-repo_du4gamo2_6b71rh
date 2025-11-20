import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative w-full min-h-[70vh] flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-teal-900 via-slate-900 to-cobalt-900" />

      {/* Floating particles */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-10 left-10 w-72 h-72 rounded-full blur-3xl opacity-30 bg-teal-500/30 animate-pulse" />
        <div className="absolute bottom-0 right-10 w-96 h-96 rounded-full blur-3xl opacity-30 bg-blue-500/30 animate-[pulse_6s_ease-in-out_infinite]" />
      </div>

      {/* 3D Spline scene */}
      <div className="relative z-10 w-full max-w-6xl h-[420px] md:h-[520px] rounded-3xl overflow-hidden border border-white/10 backdrop-blur-xl bg-white/5 shadow-[0_0_60px_rgba(0,255,255,0.15)]">
        <Spline scene="https://prod.spline.design/41MGRk-UDPKO-l6W/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        {/* Soft gradient overlay to enhance glass effect */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-slate-950/40" />
      </div>

      {/* Copy overlay */}
      <div className="absolute bottom-8 md:bottom-14 z-20 text-center px-6">
        <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white drop-shadow-[0_0_25px_rgba(56,189,248,0.35)]">
          AURCA SOUND
        </h1>
        <p className="mt-3 md:mt-4 text-sm md:text-lg text-teal-100/90">
          Ultra‑luxury, glassmorphic music ecosystem — Artists, Listeners, Venues, and Executives.
        </p>
        {/* Sound wave bars */}
        <div className="mt-5 flex items-end justify-center gap-1 h-8">
          {Array.from({ length: 24 }).map((_, i) => (
            <span
              key={i}
              className="w-1 rounded-full bg-cyan-400/70 shadow-[0_0_12px_rgba(34,211,238,0.7)]"
              style={{
                height: `${6 + ((i * 17) % 28)}px`,
                animation: `bar 1.6s ease-in-out ${i * 0.05}s infinite`
              }}
            />
          ))}
        </div>
        <style>{`
          @keyframes bar { 0%, 100% { transform: scaleY(0.6); opacity: .7 } 50% { transform: scaleY(1.6); opacity: 1 } }
        `}</style>
      </div>
    </section>
  )
}
