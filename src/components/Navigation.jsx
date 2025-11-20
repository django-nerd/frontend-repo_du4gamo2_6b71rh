import { useState } from 'react'
import { Menu, X, Sparkles, User, Music, Ticket, Building2, LineChart, ShieldCheck, Wallet } from 'lucide-react'

export default function Navigation({ activeTab, onChange }) {
  const [open, setOpen] = useState(false)

  const tabs = [
    { id: 'home', label: 'Home', icon: Sparkles },
    { id: 'artists', label: 'Artists', icon: Music },
    { id: 'venues', label: 'Venues', icon: Building2 },
    { id: 'executives', label: 'Executives', icon: ShieldCheck },
    { id: 'investors', label: 'Investors', icon: LineChart },
    { id: 'account', label: 'Account', icon: User },
  ]

  return (
    <header className="sticky top-0 z-40">
      <div className="relative mx-auto max-w-6xl mt-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_20px_60px_rgba(0,0,0,0.35)]">
        <div className="flex items-center justify-between px-4 md:px-6 py-3">
          <div className="flex items-center gap-2 text-white/90">
            <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-teal-500 to-cyan-500 shadow-[0_0_18px_rgba(34,211,238,0.65)]" />
            <span className="font-semibold tracking-wide">AURCA SOUND</span>
          </div>

          <nav className="hidden md:flex items-center gap-2">
            {tabs.map(({ id, label, icon: Icon }) => (
              <button
                key={id}
                onClick={() => onChange(id)}
                className={`inline-flex items-center gap-2 px-3 py-2 rounded-xl text-sm transition backdrop-blur-md border ${activeTab === id ? 'bg-cyan-500/20 border-cyan-400/30 text-white shadow-[0_0_20px_rgba(34,211,238,0.35)]' : 'bg-white/5 border-white/10 text-white/80 hover:bg-white/10'}`}
              >
                <Icon size={16} />
                {label}
              </button>
            ))}
          </nav>

          <button className="md:hidden text-white/90" onClick={() => setOpen((v) => !v)}>
            {open ? <X /> : <Menu />}
          </button>
        </div>

        {open && (
          <div className="md:hidden px-4 pb-4 grid gap-2">
            {tabs.map(({ id, label }) => (
              <button key={id} onClick={() => { onChange(id); setOpen(false) }} className={`px-3 py-2 rounded-xl text-left ${activeTab === id ? 'bg-cyan-500/20 text-white' : 'bg-white/5 text-white/80'}`}>
                {label}
              </button>
            ))}
          </div>
        )}
      </div>
    </header>
  )
}
