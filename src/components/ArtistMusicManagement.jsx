import { useEffect, useMemo, useState } from 'react'
import { Disc3, Upload, Music2, FilePlus2, Database, Sparkles, Settings2 } from 'lucide-react'
import MagneticButton from './MagneticButton'
import SoundWave from './SoundWave'

const API_BASE = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
const ARTIST_ID = 'demo-artist-1'

function Section({ title, icon: Icon, action, children }) {
  return (
    <div className="glass neon-edge rounded-2xl p-6">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-xl bg-cyan-400/15 border border-cyan-200/30 flex items-center justify-center text-cyan-200">
            <Icon size={16} />
          </div>
          <h3 className="font-semibold drop-shadow-sm">{title}</h3>
        </div>
        {action}
      </div>
      {children}
    </div>
  )
}

export default function ArtistMusicManagement() {
  const [tracks, setTracks] = useState([])
  const [releases, setReleases] = useState([])
  const [loading, setLoading] = useState(false)
  const [formTrack, setFormTrack] = useState({ title: '', primary_artist: 'AURCA', explicit: false, genre: '', cover_url: '', audio_url: '', ai_mastering: true })
  const [formRelease, setFormRelease] = useState({ title: '', type: 'single', upc: '', cover_url: '', notes: '' })

  const fetchAll = async () => {
    try {
      setLoading(true)
      const [t, r] = await Promise.all([
        fetch(`${API_BASE}/api/artists/${ARTIST_ID}/tracks`).then((res) => res.json()),
        fetch(`${API_BASE}/api/artists/${ARTIST_ID}/releases`).then((res) => res.json()),
      ])
      setTracks(Array.isArray(t) ? t : [])
      setReleases(Array.isArray(r) ? r : [])
    } catch (e) {
      console.error(e)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchAll()
  }, [])

  const createTrack = async (e) => {
    e.preventDefault()
    try {
      setLoading(true)
      await fetch(`${API_BASE}/api/artists/${ARTIST_ID}/tracks`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formTrack, status: 'draft' })
      })
      setFormTrack({ title: '', primary_artist: 'AURCA', explicit: false, genre: '', cover_url: '', audio_url: '', ai_mastering: true })
      await fetchAll()
    } catch (e) {
      console.error(e)
    } finally {
      setLoading(false)
    }
  }

  const createRelease = async (e) => {
    e.preventDefault()
    try {
      setLoading(true)
      await fetch(`${API_BASE}/api/artists/${ARTIST_ID}/releases`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formRelease, status: 'draft', tracks: [] })
      })
      setFormRelease({ title: '', type: 'single', upc: '', cover_url: '', notes: '' })
      await fetchAll()
    } catch (e) {
      console.error(e)
    } finally {
      setLoading(false)
    }
  }

  return (
    <main className="relative z-10 mx-auto max-w-7xl px-4 md:px-6 py-8 md:py-10 pb-28">
      <header className="glass neon-edge rounded-2xl p-6 mb-6 flex items-center justify-between">
        <div>
          <h2 className="text-2xl md:text-3xl font-extrabold neon-text">Music Management</h2>
          <p className="text-white/80">Release Manager • Catalog Manager • AI Tools</p>
        </div>
        <div className="w-24"><SoundWave playing bars={12} height={26} /></div>
      </header>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Left: Release Manager */}
        <div className="space-y-6 lg:col-span-2">
          <Section title="Release Manager" icon={Disc3} action={null}>
            <form onSubmit={createRelease} className="grid md:grid-cols-3 gap-3">
              <div className="md:col-span-2">
                <label className="text-xs text-white/70">Title</label>
                <input value={formRelease.title} onChange={(e)=>setFormRelease(v=>({...v,title:e.target.value}))} required className="w-full mt-1 bg-white/10 border border-white/20 rounded-xl px-3 py-2 outline-none focus:border-cyan-300/50" />
              </div>
              <div>
                <label className="text-xs text-white/70">Type</label>
                <select value={formRelease.type} onChange={(e)=>setFormRelease(v=>({...v,type:e.target.value}))} className="w-full mt-1 bg-white/10 border border-white/20 rounded-xl px-3 py-2">
                  <option value="single">Single</option>
                  <option value="ep">EP</option>
                  <option value="album">Album</option>
                </select>
              </div>
              <div>
                <label className="text-xs text-white/70">UPC (optional)</label>
                <input value={formRelease.upc} onChange={(e)=>setFormRelease(v=>({...v,upc:e.target.value}))} className="w-full mt-1 bg-white/10 border border-white/20 rounded-xl px-3 py-2" />
              </div>
              <div className="md:col-span-2">
                <label className="text-xs text-white/70">Cover URL (optional)</label>
                <input value={formRelease.cover_url} onChange={(e)=>setFormRelease(v=>({...v,cover_url:e.target.value}))} className="w-full mt-1 bg-white/10 border border-white/20 rounded-xl px-3 py-2" />
              </div>
              <div className="md:col-span-3">
                <label className="text-xs text-white/70">Notes</label>
                <textarea value={formRelease.notes} onChange={(e)=>setFormRelease(v=>({...v,notes:e.target.value}))} rows={3} className="w-full mt-1 bg-white/10 border border-white/20 rounded-xl px-3 py-2" />
              </div>
              <div className="md:col-span-3 flex justify-end">
                <MagneticButton type="submit" className="px-4 py-2 bg-cyan-500/20 border border-cyan-200/40 hover-neon inline-flex items-center gap-2">
                  <FilePlus2 size={16} /> Create Release
                </MagneticButton>
              </div>
            </form>

            <div className="mt-6">
              <h4 className="text-white/80 font-medium mb-3">Draft Releases</h4>
              <div className="grid md:grid-cols-2 gap-3">
                {releases.length === 0 && (
                  <div className="bg-white/5 rounded-xl p-4 text-white/70">No releases yet.</div>
                )}
                {releases.map(r => (
                  <div key={r.id} className="bg-white/5 rounded-xl p-4 flex items-center justify-between">
                    <div>
                      <p className="font-semibold">{r.title}</p>
                      <p className="text-xs text-white/70 capitalize">{r.type} • {r.status}</p>
                    </div>
                    <MagneticButton className="px-3 py-1.5 text-sm bg-white/10 border border-white/20">Manage</MagneticButton>
                  </div>
                ))}
              </div>
            </div>
          </Section>

          <Section title="Catalog Manager" icon={Database} action={null}>
            <form onSubmit={createTrack} className="grid md:grid-cols-3 gap-3">
              <div className="md:col-span-2">
                <label className="text-xs text-white/70">Track Title</label>
                <input value={formTrack.title} onChange={(e)=>setFormTrack(v=>({...v,title:e.target.value}))} required className="w-full mt-1 bg-white/10 border border-white/20 rounded-xl px-3 py-2" />
              </div>
              <div>
                <label className="text-xs text-white/70">Genre</label>
                <input value={formTrack.genre} onChange={(e)=>setFormTrack(v=>({...v,genre:e.target.value}))} className="w-full mt-1 bg-white/10 border border-white/20 rounded-xl px-3 py-2" />
              </div>
              <div>
                <label className="text-xs text-white/70">Cover URL</label>
                <input value={formTrack.cover_url} onChange={(e)=>setFormTrack(v=>({...v,cover_url:e.target.value}))} className="w-full mt-1 bg-white/10 border border-white/20 rounded-xl px-3 py-2" />
              </div>
              <div className="md:col-span-2">
                <label className="text-xs text-white/70">Audio URL</label>
                <input value={formTrack.audio_url} onChange={(e)=>setFormTrack(v=>({...v,audio_url:e.target.value}))} className="w-full mt-1 bg-white/10 border border-white/20 rounded-xl px-3 py-2" />
              </div>
              <div className="md:col-span-3 flex items-center justify-between">
                <label className="flex items-center gap-2 text-sm text-white/80"><input type="checkbox" checked={formTrack.ai_mastering} onChange={(e)=>setFormTrack(v=>({...v,ai_mastering:e.target.checked}))} className="accent-cyan-400" /> AI Mastering</label>
                <MagneticButton type="submit" className="px-4 py-2 bg-cyan-500/20 border border-cyan-200/40 hover-neon inline-flex items-center gap-2">
                  <Upload size={16} /> Add Track
                </MagneticButton>
              </div>
            </form>

            <div className="mt-6">
              <h4 className="text-white/80 font-medium mb-3">Tracks</h4>
              <div className="grid md:grid-cols-2 gap-3">
                {tracks.length === 0 && (
                  <div className="bg-white/5 rounded-xl p-4 text-white/70">No tracks yet.</div>
                )}
                {tracks.map(t => (
                  <div key={t.id} className="bg-white/5 rounded-xl p-4 flex items-center justify-between">
                    <div>
                      <p className="font-semibold">{t.title}</p>
                      <p className="text-xs text-white/70">{t.genre || '—'} • {t.status}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <MagneticButton className="px-3 py-1.5 text-sm bg-white/10 border border-white/20">Waveform</MagneticButton>
                      <MagneticButton className="px-3 py-1.5 text-sm bg-white/10 border border-white/20">Edit</MagneticButton>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Section>
        </div>

        {/* Right: AI Tools */}
        <div className="space-y-6">
          <Section title="AI Tools" icon={Sparkles} action={<MagneticButton className="px-3 py-1.5 text-sm bg-white/10 border border-white/20 inline-flex items-center gap-2"><Settings2 size={16}/> Configure</MagneticButton>}>
            <div className="grid gap-3">
              {[{t:'Cover Generator',d:'Prompt‑to‑art with brand palette'}, {t:'Stem Cleanup',d:'Denoise, de‑hum, tighten timing'}, {t:'Loudness Optimize',d:'EBU R128/ITU BS.1770 targets'}, {t:'Release Cadence',d:'Predictive timing for momentum'}].map((tool)=> (
                <div key={tool.t} className="bg-white/5 rounded-xl p-4 flex items-center justify-between">
                  <div>
                    <p className="font-semibold">{tool.t}</p>
                    <p className="text-xs text-white/70">{tool.d}</p>
                  </div>
                  <MagneticButton className="px-3 py-1.5 text-sm bg-cyan-500/20 border border-cyan-200/40 hover-neon">Open</MagneticButton>
                </div>
              ))}
            </div>
          </Section>

          <div className="glass neon-edge rounded-2xl p-4 text-sm text-white/80">
            <p className="mb-1">Status: {loading ? 'Syncing…' : 'Up to date'}</p>
            <p className="text-white/60">Artist ID: {ARTIST_ID}</p>
          </div>
        </div>
      </div>
    </main>
  )
}
