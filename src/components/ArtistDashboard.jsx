import { useMemo } from 'react'
import { Music, BarChart3, DollarSign, Radio, CalendarClock, Store, Video, Bell, ListChecks, TrendingUp, Ticket, Disc3, ChartSpline, Building2, BadgePercent } from 'lucide-react'
import SoundWave from './SoundWave'
import MagneticButton from './MagneticButton'

function StatCard({ title, value, sub, icon: Icon, glow = 'cyan' }) {
  const glowColor = glow === 'cyan' ? 'shadow-[0_0_24px_rgba(34,211,238,0.35)]' : 'shadow-[0_0_24px_rgba(56,189,248,0.35)]'
  return (
    <div className={`relative glass neon-edge p-5 rounded-2xl ${glowColor}`}>
      <div className="flex items-center justify-between">
        <div>
          <p className="text-white/70 text-sm">{title}</p>
          <p className="text-2xl font-bold mt-1 text-white drop-shadow-sm">{value}</p>
          {sub && <p className="text-xs text-white/60 mt-1">{sub}</p>}
        </div>
        {Icon && (
          <div className="w-10 h-10 rounded-xl bg-cyan-400/15 border border-cyan-200/30 flex items-center justify-center text-cyan-200">
            <Icon size={18} />
          </div>
        )}
      </div>
      <div className="mt-4 opacity-90"><SoundWave playing bars={18} height={28} /></div>
      <div className="absolute inset-0 rounded-2xl pointer-events-none">{/* glow overlay */}
        <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-br from-white/6 to-transparent" />
      </div>
    </div>
  )
}

function GlassCard({ title, children, actionLabel, onAction, icon: Icon }) {
  return (
    <div className="glass neon-edge p-6 rounded-2xl">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          {Icon && (
            <div className="w-9 h-9 rounded-xl bg-cyan-400/15 border border-cyan-200/30 flex items-center justify-center text-cyan-200">
              <Icon size={16} />
            </div>
          )}
          <h3 className="text-white font-semibold drop-shadow-sm">{title}</h3>
        </div>
        {actionLabel && (
          <MagneticButton onClick={onAction} className="px-3 py-1.5 text-sm bg-cyan-500/20 border border-cyan-200/40 hover-neon">
            {actionLabel}
          </MagneticButton>
        )}
      </div>
      {children}
    </div>
  )
}

function ProgressBar({ value }) {
  return (
    <div className="w-full h-2 rounded-full bg-white/10 overflow-hidden">
      <div className="h-full bg-gradient-to-r from-teal-400/80 via-cyan-400 to-blue-400" style={{ width: `${Math.min(100, Math.max(0, value))}%` }} />
    </div>
  )
}

export default function ArtistDashboard() {
  // Mocked data (to be wired to backend later)
  const data = useMemo(() => ({
    profileCompletion: 72,
    monthlyListeners: 184_320,
    monthlyStreams: 1_982_443,
    topSongs: [
      { title: 'GOLD DUST', streams: 482_901 },
      { title: 'NEON TIDE', streams: 392_114 },
      { title: 'COBALT SKY', streams: 318_552 },
    ],
    crossPlatform: [
      { name: 'Spotify', value: 62 },
      { name: 'Apple', value: 18 },
      { name: 'YouTube', value: 12 },
      { name: 'TikTok', value: 8 },
    ],
    revenue: '$24,730',
    royalties: '$12,480',
    luminate: { chart: '#87 on Emerging Artists', trend: '+12' },
    shows: [
      { date: 'Apr 18', city: 'Austin', status: 'Funding (62%)' },
      { date: 'May 02', city: 'Seattle', status: 'Confirmed' },
    ],
    marketplace: { status: 'Listing Draft', percent: 12, valuation: '$1.2M' },
    merch: { orders: 324, topItem: 'Aurca Hoodie', revenue: '$7,210' },
    livestream: { last30: '$3,840', peak: 1820 },
    notifications: [
      'New playlist add: Neon Pulse — “GOLD DUST”',
      'Venue requested tech rider update (Austin)',
      'AI mastering suggestions ready for 2 tracks',
    ],
    tasks: [
      { label: 'Upload canvas for NEON TIDE', done: false },
      { label: 'Confirm Seattle venue settlement rules', done: false },
      { label: 'Publish equity listing draft', done: false },
    ],
  }), [])

  return (
    <main className="relative z-10 mx-auto max-w-7xl px-4 md:px-6 py-10 md:py-12 pb-28">
      {/* Header */}
      <section className="mb-8">
        <div className="glass neon-edge p-6 rounded-2xl flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <h2 className="text-2xl md:text-3xl font-extrabold neon-text">Artist Dashboard</h2>
            <p className="text-white/80 mt-1">At‑a‑glance performance, revenue, shows, and operations.</p>
          </div>
          <div className="w-full md:w-80">
            <p className="text-white/70 text-sm mb-2">Profile completion</p>
            <ProgressBar value={data.profileCompletion} />
            <p className="text-white/60 text-xs mt-1">{data.profileCompletion}% complete • Add cover video, connect DSPs</p>
          </div>
        </div>
      </section>

      {/* Top stats */}
      <section className="grid md:grid-cols-3 gap-5 mb-8">
        <StatCard title="Monthly listeners" value={data.monthlyListeners.toLocaleString()} sub="Rolling 28 days" icon={Music} />
        <StatCard title="Monthly streams" value={data.monthlyStreams.toLocaleString()} sub="All platforms" icon={BarChart3} />
        <StatCard title="Revenue snapshot" value={data.revenue} sub="Last 30 days" icon={DollarSign} />
      </section>

      {/* Main grid */}
      <section className="grid lg:grid-cols-3 gap-6">
        {/* Left column */}
        <div className="space-y-6">
          <GlassCard title="Top performing songs" icon={Disc3}>
            <ul className="space-y-3">
              {data.topSongs.map((s, i) => (
                <li key={i} className="flex items-center justify-between bg-white/5 rounded-xl px-4 py-3">
                  <div className="flex items-center gap-3">
                    <span className="text-white/60 text-sm">#{i + 1}</span>
                    <span className="font-medium">{s.title}</span>
                  </div>
                  <span className="text-white/70 text-sm">{s.streams.toLocaleString()} plays</span>
                </li>
              ))}
            </ul>
          </GlassCard>

          <GlassCard title="Cross‑platform analytics" icon={ChartSpline}>
            <div className="mt-2 grid grid-cols-4 gap-3">
              {data.crossPlatform.map((p) => (
                <div key={p.name} className="bg-white/5 rounded-xl p-3 text-center">
                  <div className="text-2xl font-bold">{p.value}%</div>
                  <div className="text-xs text-white/70 mt-1">{p.name}</div>
                </div>
              ))}
            </div>
          </GlassCard>

          <GlassCard title="Luminate charting" icon={Radio}>
            <div className="flex items-center justify-between bg-white/5 rounded-xl p-4">
              <div>
                <p className="text-white/80 text-sm">Current trajectory</p>
                <p className="text-xl font-bold mt-1">{data.luminate.chart}</p>
              </div>
              <div className="text-emerald-300 flex items-center gap-1"><TrendingUp size={16} /> {data.luminate.trend}</div>
            </div>
          </GlassCard>
        </div>

        {/* Middle column */}
        <div className="space-y-6">
          <GlassCard title="Royalties snapshot" icon={BadgePercent} actionLabel="Open Hub" onAction={() => {}}>
            <div className="grid grid-cols-2 gap-3">
              {[
                { k: 'Publishing', v: '$4,210' },
                { k: 'Masters', v: '$6,190' },
                { k: 'Mechanical', v: '$980' },
                { k: 'Sync', v: '$1,100' },
              ].map((r) => (
                <div key={r.k} className="bg-white/5 rounded-xl p-3">
                  <p className="text-white/70 text-xs">{r.k}</p>
                  <p className="font-bold mt-1">{r.v}</p>
                </div>
              ))}
            </div>
          </GlassCard>

          <GlassCard title="Perimeter ticketing — events" icon={Ticket} actionLabel="Create Event" onAction={() => {}}>
            <ul className="space-y-3">
              {data.shows.map((e, i) => (
                <li key={i} className="bg-white/5 rounded-xl px-4 py-3 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="w-10 h-10 rounded-xl bg-cyan-400/15 border border-cyan-200/30 flex items-center justify-center">{e.date}</span>
                    <div>
                      <p className="font-medium">{e.city}</p>
                      <p className="text-xs text-white/70">{e.status}</p>
                    </div>
                  </div>
                  <MagneticButton className="px-3 py-1.5 text-sm bg-white/10 border border-white/20">Manage</MagneticButton>
                </li>
              ))}
            </ul>
          </GlassCard>

          <GlassCard title="Marketplace — equity status" icon={Building2} actionLabel="Open Listing" onAction={() => {}}>
            <div className="bg-white/5 rounded-xl p-4 flex items-center justify-between">
              <div>
                <p className="text-white/70 text-sm">{data.marketplace.status}</p>
                <p className="font-bold mt-1">{data.marketplace.percent}% @ {data.marketplace.valuation}</p>
              </div>
              <div className="w-28">
                <ProgressBar value={data.marketplace.percent} />
                <p className="text-xs text-white/60 mt-1 text-right">progress</p>
              </div>
            </div>
          </GlassCard>
        </div>

        {/* Right column */}
        <div className="space-y-6">
          <GlassCard title="Merch sales" icon={Store} actionLabel="Open Merch" onAction={() => {}}>
            <div className="bg-white/5 rounded-xl p-4 flex items-center justify-between">
              <div>
                <p className="text-white/70 text-sm">Top item</p>
                <p className="font-bold mt-1">{data.merch.topItem}</p>
              </div>
              <div className="text-right">
                <p className="text-white/70 text-sm">Orders</p>
                <p className="font-bold">{data.merch.orders.toLocaleString()}</p>
                <p className="text-white/70 text-xs mt-1">{data.merch.revenue}</p>
              </div>
            </div>
          </GlassCard>

          <GlassCard title="Livestream earnings (30d)" icon={Video} actionLabel="Creator Mode" onAction={() => {}}>
            <div className="bg-white/5 rounded-xl p-4 flex items-center justify-between">
              <div>
                <p className="text-xl font-bold">{data.livestream.last30}</p>
                <p className="text-white/70 text-sm">Peak viewers {data.livestream.peak.toLocaleString()}</p>
              </div>
              <div className="w-24"><SoundWave playing bars={14} height={26} /></div>
            </div>
          </GlassCard>

          <GlassCard title="Notifications" icon={Bell}>
            <ul className="space-y-2">
              {data.notifications.map((n, i) => (
                <li key={i} className="bg-white/5 rounded-xl px-3 py-2 text-sm">{n}</li>
              ))}
            </ul>
          </GlassCard>

          <GlassCard title="Tasks" icon={ListChecks} actionLabel="View All" onAction={() => {}}>
            <ul className="space-y-2">
              {data.tasks.map((t, i) => (
                <li key={i} className="flex items-center gap-3 bg-white/5 rounded-xl px-3 py-2">
                  <input type="checkbox" className="accent-cyan-400" defaultChecked={t.done} />
                  <span className="text-sm">{t.label}</span>
                </li>
              ))}
            </ul>
          </GlassCard>
        </div>
      </section>
    </main>
  )
}
