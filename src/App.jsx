import { useState } from 'react'
import Hero from './components/Hero'
import Navigation from './components/Navigation'
import InvestorsTab from './components/InvestorsTab'
import ParallaxParticles from './components/ParallaxParticles'
import ScrollMotion from './components/ScrollMotion'
import ArtistDashboard from './components/ArtistDashboard'
import ArtistMusicManagement from './components/ArtistMusicManagement'

function App() {
  const [active, setActive] = useState('home')
  const [artistSection, setArtistSection] = useState('overview')

  const openInvestors = () => setActive('investors')

  return (
    <div className="relative min-h-screen overflow-x-hidden text-white">
      {/* Scroll-linked motion accents */}
      <ScrollMotion />

      {/* Lux gradient background (dark‑teal → cobalt/blue) */}
      <div className="fixed inset-0 -z-20 bg-gradient-to-br from-teal-900 via-cyan-900 to-blue-950" />

      {/* Subtle parallax particle field across the whole experience */}
      <ParallaxParticles layers={4} count={160} />

      {/* Soft glow layers */}
      <div className="fixed inset-0 -z-10 pointer-events-none" aria-hidden>
        <div className="absolute left-[10%] top-10 w-80 h-80 rounded-full bg-teal-400/20 blur-3xl animate-pulse" />
        <div className="absolute right-[12%] bottom-10 w-96 h-96 rounded-full bg-blue-500/15 blur-3xl animate-[pulse_6s_ease-in-out_infinite]" />
        <div className="absolute left-1/2 -translate-x-1/2 top-1/3 w-[42rem] h-[42rem] rounded-full bg-cyan-400/10 blur-[110px]" />
      </div>

      <Navigation activeTab={active} onChange={(id)=>{ setActive(id); if(id!== 'artists'){ setArtistSection('overview') } }} />

      {active === 'home' && (
        <>
          <Hero />
          <main className="relative z-10 mx-auto max-w-6xl px-4 md:px-6 py-10 md:py-14 pb-28">
            <section className="grid md:grid-cols-3 gap-5">
              {[
                {
                  title: 'Artists',
                  desc: 'Release manager, royalties hub, perimeter ticketing, equity marketplace, livestream tools.'
                },
                {
                  title: 'Listeners',
                  desc: 'Discovery feed, library, ticket explorer, equity investing, video feed, livestream viewer.'
                },
                {
                  title: 'Venues & Execs',
                  desc: 'Venue dashboards, escrow confirmations, curator tooling, investor analytics, ad management.'
                }
              ].map((c, i) => (
                <div
                  key={i}
                  className="glass neon-edge hover-neon p-6 text-center"
                >
                  <h3 className="text-lg font-semibold mb-2 drop-shadow-sm neon-text">{c.title}</h3>
                  <p className="text-white/85 leading-relaxed">{c.desc}</p>
                </div>
              ))}
            </section>
          </main>
        </>
      )}

      {active === 'artists' && (
        <div className="pb-28">
          <div className="relative z-10 mx-auto max-w-7xl px-4 md:px-6 pt-6">
            <div className="flex items-center gap-2">
              {[
                { id: 'overview', label: 'Overview' },
                { id: 'music', label: 'Music Management' },
                // Future: royalties, tickets, marketplace, merch, live, community
              ].map(t => (
                <button
                  key={t.id}
                  onClick={()=>setArtistSection(t.id)}
                  className={`px-3 py-2 rounded-xl text-sm border ${artistSection === t.id ? 'bg-cyan-400/25 border-cyan-200/40 text-white shadow-[0_0_20px_rgba(34,211,238,0.35)]' : 'bg-white/10 border-white/20 text-white/90 hover:bg-white/20'}`}
                >
                  {t.label}
                </button>
              ))}
            </div>
          </div>

          {artistSection === 'overview' && <ArtistDashboard />}
          {artistSection === 'music' && <ArtistMusicManagement />}
        </div>
      )}

      {active === 'investors' && (
        <div className="pb-28">
          <InvestorsTab />
        </div>
      )}

      {active !== 'home' && active !== 'investors' && active !== 'artists' && (
        <section className="relative mx-auto max-w-6xl px-4 md:px-6 py-16 pb-28">
          <div className="glass neon-edge p-8 text-center">
            <h2 className="text-2xl font-bold mb-2 capitalize drop-shadow neon-text">{active}</h2>
            <p className="text-white/85">This section is coming next in our build. Tell me what you want prioritized and I’ll wire it up.</p>
          </div>
        </section>
      )}

      <footer className="relative z-10 mx-auto max-w-6xl px-4 md:px-6 py-10 text-center text-white/70">
        <p>Glassmorphic luxury • Teal → Cobalt gradient • Parallax particle ambiance • Sound‑wave accents</p>
      </footer>

      {/* Bottom investor bar */}
      <div className="fixed inset-x-0 bottom-4 z-40 flex justify-center px-4">
        <div className="glass neon-edge w-full max-w-4xl rounded-2xl px-4 md:px-6 py-3 flex flex-col md:flex-row items-center md:items-center gap-3 md:gap-4">
          <p className="text-center md:text-left text-white/90 flex-1">
            For those looking to invest in AURCA SOUND — click here.
          </p>
          <button
            onClick={openInvestors}
            className="tap-pulse hover-neon px-5 py-2 rounded-xl bg-cyan-500/20 border border-cyan-200/40 text-white shadow-[0_0_20px_rgba(34,211,238,0.35)]"
          >
            Open Investors
          </button>
        </div>
      </div>

      <style>{`
        @keyframes pulse { 0%,100%{opacity:.7; transform: scale(1)} 50%{opacity:1; transform: scale(1.05)} }
      `}</style>
    </div>
  )
}

export default App
