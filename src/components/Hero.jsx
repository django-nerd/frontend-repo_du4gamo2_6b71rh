import SoundWave from './SoundWave'
import MagneticButton from './MagneticButton'

export default function Hero() {
  return (
    <section className="relative w-full min-h-[72vh] flex items-center justify-center overflow-hidden">
      {/* Gradient depth overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-teal-900/20 to-blue-900/40" />

      {/* Soft edge lighting */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute -top-24 left-1/3 w-[36rem] h-[36rem] rounded-full bg-cyan-400/10 blur-3xl" />
        <div className="absolute -bottom-20 right-1/3 w-[28rem] h-[28rem] rounded-full bg-blue-500/15 blur-3xl" />
      </div>

      {/* Title, tagline, actions */}
      <div className="relative z-10 text-center px-6">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white neon-text">
          AURCA SOUND
        </h1>
        <p className="mt-4 text-base md:text-xl text-white/85">
          Ultra‑luxury, glassmorphic music ecosystem — Artists, Listeners, Venues, Executives.
        </p>

        {/* Sound wave animation behind CTA */}
        <div className="mt-6 opacity-95">
          <SoundWave playing={true} bars={28} height={38} />
        </div>

        <div className="mt-7 flex items-center justify-center gap-3">
          <MagneticButton className="glass neon-edge hover-neon px-5 py-2.5">
            Explore
          </MagneticButton>
          <MagneticButton className="px-5 py-2.5 rounded-xl bg-cyan-500/20 border border-cyan-200/40 hover-neon">
            Join Platinum
          </MagneticButton>
        </div>
      </div>
    </section>
  )
}
