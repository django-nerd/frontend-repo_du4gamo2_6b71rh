import InvestorsDeck from './InvestorsDeck'

export default function InvestorsTab() {
  return (
    <section className="relative py-10 md:py-14">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(34,211,238,0.15),transparent_40%),radial-gradient(ellipse_at_bottom_right,rgba(59,130,246,0.15),transparent_40%)] pointer-events-none" />
      <div className="relative mx-auto max-w-6xl px-4 md:px-6">
        <div className="mb-6">
          <h2 className="text-2xl md:text-3xl font-bold text-white drop-shadow">Investors</h2>
          <p className="mt-2 text-teal-100/80 max-w-3xl">Explore the full vision, model, and competitive edge. This deck outlines the platform, use cases, Perimeter Ticketing escrow protocol, and revenue engines across roles.</p>
        </div>

        <InvestorsDeck />

        <div className="mt-8 grid md:grid-cols-3 gap-4">
          {[{
            title: 'Use Cases',
            items: ['Fan-funded perimeter shows', 'Equity in masters', 'Resale royalties', 'Livestream commerce']
          },{
            title: 'Moats',
            items: ['Escrow protocol', 'Multi-role network effects', 'Glassmorphic premium UX', 'Integrated analytics']
          },{
            title: 'KPIs',
            items: ['GMV (tickets, equity, gifts)', 'Active creators & venues', 'Retention across roles', 'Take-rate blended margin']
          }].map((card, i) => (
            <div key={i} className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-5 text-white/90">
              <h3 className="font-semibold mb-2">{card.title}</h3>
              <ul className="list-disc pl-5 marker:text-cyan-300 text-teal-100/90 space-y-1">
                {card.items.map((x, j) => <li key={j}>{x}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
