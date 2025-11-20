import { useState } from 'react'

const slides = [
  {
    title: 'AURCA SOUND — Luxury Music Ecosystem',
    points: [
      'All-in-one platform spanning Artists, Listeners, Venues, Executives',
      'Ultra-luxury glassmorphic UI with teal→cobalt gradient, particles, sound-waves',
      'Core pillars: Music, Perimeter Ticketing, Royalties, Equity Marketplace, Livestreams, Ads',
    ],
  },
  {
    title: 'Problem Space',
    points: [
      'Fragmented stack across distribution, royalties, touring, fan commerce',
      'Traditional ticketing lacks aligned incentives and transparency',
      'Monetization tools for artists are siloed and complex',
    ],
  },
  {
    title: 'Perimeter Ticketing — Escrow Protocol',
    points: [
      'Two pools in escrow: Venue Pool (fixed price) and Artist Pool (artist earnings)',
      'Phase 1 release: 75% to Venue, 20% to Artist upon invoice approval',
      'Phase 2 release: Remaining 25% to Venue, remaining balance to Artist after show confirmation',
    ],
  },
  {
    title: 'Competitive Landscape',
    points: [
      'Spotify: streaming-only, no native escrow ticketing or equity marketplace',
      'EVEN: merch and fan offers; AURCA adds escrow ticketing + multi-role ecosystem',
      'Ticketmaster: ticketing incumbent; AURCA introduces transparent escrow and resale royalties',
    ],
  },
  {
    title: 'Business Model',
    points: [
      'Membership tiers (Free, Intro, Platinum, Investor)',
      'Fees on ticket escrow releases and resale royalties',
      'Marketplace trading fees for equity offerings',
      'Livestream tips/gifts rev share; ad marketplace for brands',
    ],
  },
  {
    title: 'Go-To-Market',
    points: [
      'Partner with venues to bootstrap perimeter ticketing inventory',
      'Onboard curators and investors for early discovery + capital',
      'Creator-led launch events and livestream showcases',
    ],
  },
  {
    title: 'Roadmap Highlights',
    points: [
      'AI mastering, predictive release analytics, content cadence suggestions',
      'Cross-platform analytics hub for socials and DSPs',
      'Advanced investor dashboards with order books and auto-invest',
    ],
  },
  {
    title: 'Why Now',
    points: [
      'Fan-funded shows reduce upfront risk and align incentives',
      'Creators demand ownership, equity, and direct monetization',
      'Glassmorphic immersive UX elevates premium music experiences',
    ],
  },
]

export default function InvestorsDeck() {
  const [index, setIndex] = useState(0)

  const next = () => setIndex((i) => (i + 1) % slides.length)
  const prev = () => setIndex((i) => (i - 1 + slides.length) % slides.length)

  const slide = slides[index]

  return (
    <div className="relative w-full">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl md:text-2xl font-semibold text-white/90">Investor Pitch Deck</h2>
        <div className="flex gap-2">
          <button onClick={prev} className="px-3 py-1.5 rounded-full bg-white/10 text-white hover:bg-white/20 transition">Prev</button>
          <button onClick={next} className="px-3 py-1.5 rounded-full bg-cyan-500/80 text-white hover:bg-cyan-400/90 transition shadow-[0_0_20px_rgba(34,211,238,0.4)]">Next</button>
        </div>
      </div>

      <div className="relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 md:p-8 shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_20px_60px_rgba(0,0,0,0.35)]">
        <h3 className="text-2xl md:text-3xl font-bold text-white drop-shadow">{slide.title}</h3>
        <ul className="mt-5 grid gap-2 list-disc pl-6 marker:text-cyan-300">
          {slide.points.map((p, i) => (
            <li key={i} className="text-teal-100/90 leading-relaxed">{p}</li>
          ))}
        </ul>

        <div className="mt-6 flex items-center justify-between text-sm text-white/60">
          <span>Slide {index + 1} / {slides.length}</span>
          <span>AURCA SOUND — Confidential</span>
        </div>
      </div>
    </div>
  )
}
