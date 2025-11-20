import { useState } from 'react'
import Hero from './components/Hero'
import Navigation from './components/Navigation'
import InvestorsTab from './components/InvestorsTab'

function App() {
  const [active, setActive] = useState('home')

  return (
    <div className="relative min-h-screen overflow-x-hidden text-white">
      {/* Lux gradient background (dark‑teal → cobalt/blue) */}
      <div className="fixed inset-0 -z-10 bg-gradient-to-br from-teal-800 via-cyan-800 to-blue-900" />

      {/* Soft glow layers */}
      <div className="fixed inset-0 -z-10 pointer-events-none" aria-hidden>
        <div className="absolute left-[10%] top-10 w-80 h-80 rounded-full bg-teal-400/25 blur-3xl animate-pulse" />
        <div className="absolute right-[12%] bottom-10 w-96 h-96 rounded-full bg-blue-500/20 blur-3xl animate-[pulse_6s_ease-in-out_infinite]" />
        <div className="absolute left-1/2 -translate-x-1/2 top-1/3 w-[42rem] h-[42rem] rounded-full bg-cyan-400/10 blur-[110px]" />
      </div>

      <Navigation activeTab={active} onChange={setActive} />

      {active === 'home' && (
        <>
          <Hero />
          <main className="relative z-10 mx-auto max-w-6xl px-4 md:px-6 py-10 md:py-14">
            <section className="grid md:grid-cols-3 gap-5">
              {[{
                title: 'Artists',
                desc: 'Release manager, royalties hub, perimeter ticketing, equity marketplace, livestream tools.'
              },{
                title: 'Listeners',
                desc: 'Discovery feed, library, ticket explorer, equity investing, video feed, livestream viewer.'
              },{
                title: 'Venues & Execs',
                desc: 'Venue dashboards, escrow confirmations, curator tooling, investor analytics, ad management.'
              }].map((c, i) => (
                <div key={i} className="rounded-2xl border border-white/20 bg-white/15 backdrop-blur-2xl p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.22),0_20px_60px_rgba(0,0,0,0.25)]">
                  <h3 className="text-lg font-semibold mb-2 drop-shadow-sm">{c.title}</h3>
                  <p className="text-white/85 leading-relaxed">{c.desc}</p>
                </div>
              ))}
            </section>
          </main>
        </>
      )}

      {active === 'investors' && (
        <InvestorsTab />
      )}

      {active !== 'home' && active !== 'investors' && (
        <section className="relative mx-auto max-w-6xl px-4 md:px-6 py-16">
          <div className="rounded-2xl border border-white/20 bg-white/15 backdrop-blur-2xl p-8">
            <h2 className="text-2xl font-bold mb-2 capitalize drop-shadow">{active}</h2>
            <p className="text-white/85">This section is coming next in our build. Tell me what you want prioritized and I’ll wire it up.</p>
          </div>
        </section>
      )}

      <footer className="relative z-10 mx-auto max-w-6xl px-4 md:px-6 py-10 text-center text-white/70">
        <p>Glassmorphic luxury • Teal → Cobalt gradient • Particle ambiance • Subtle sound‑wave accents</p>
      </footer>

      <style>{`
        @keyframes pulse { 0%,100%{opacity:.7; transform: scale(1)} 50%{opacity:1; transform: scale(1.05)} }
      `}</style>
    </div>
  )
}

export default App
