import { useState } from 'react'
import Hero from './components/Hero'
import Navigation from './components/Navigation'
import InvestorsTab from './components/InvestorsTab'

function App() {
  const [active, setActive] = useState('home')

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      {/* Global gradient theme and particles */}
      <div className="fixed inset-0 -z-0 bg-[radial-gradient(ellipse_at_top_left,rgba(13,148,136,0.35),transparent_40%),radial-gradient(ellipse_at_bottom_right,rgba(37,99,235,0.35),transparent_40%)]" />
      <div className="fixed inset-0 -z-0" aria-hidden>
        <div className="absolute left-1/4 top-10 w-64 h-64 rounded-full bg-teal-500/15 blur-3xl animate-pulse" />
        <div className="absolute right-1/5 bottom-20 w-80 h-80 rounded-full bg-cyan-400/15 blur-3xl animate-[pulse_6s_ease-in-out_infinite]" />
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
                <div key={i} className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 text-white/90 shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_20px_60px_rgba(0,0,0,0.35)]">
                  <h3 className="text-lg font-semibold mb-2">{c.title}</h3>
                  <p className="text-teal-100/85 leading-relaxed">{c.desc}</p>
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
          <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 text-white/90">
            <h2 className="text-2xl font-bold mb-2 capitalize">{active}</h2>
            <p className="text-teal-100/85">This section is coming next in our build. Tell me what you want prioritized and I’ll wire it up.</p>
          </div>
        </section>
      )}

      <footer className="relative z-10 mx-auto max-w-6xl px-4 md:px-6 py-10 text-center text-white/60">
        <p>Ultra‑luxury glassmorphic experience — Dark‑teal → Cobalt gradient • Particle shimmer • Sound‑wave micro‑interactions</p>
      </footer>

      <style>{`
        @keyframes pulse { 0%,100%{opacity:.7; transform: scale(1)} 50%{opacity:1; transform: scale(1.05)} }
      `}</style>
    </div>
  )
}

export default App
