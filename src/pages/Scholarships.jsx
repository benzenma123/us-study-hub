import { useState } from 'react'
import { motion } from 'framer-motion'
import { Search, Filter, DollarSign, Calendar, ExternalLink, GraduationCap, Globe, Users, Award, ArrowRight } from 'lucide-react'
import { SectionHeader, fadeUp } from '../components/ui'
import scholarships from '../data/scholarships.json'

const fields = ['All', 'STEM', 'Business', 'Arts', 'Medicine']
const types = ['All', 'Full', 'Partial', 'Need-based', 'Merit']

export default function Scholarships() {
  const [search, setSearch] = useState('')
  const [field, setField] = useState('All')
  const [type, setType] = useState('All')

  const filtered = scholarships.filter((s) => {
    const matchSearch = s.name.toLowerCase().includes(search.toLowerCase()) || s.desc.toLowerCase().includes(search.toLowerCase())
    const matchField = field === 'All' || s.field === field
    const matchType = type === 'All' || s.type === type
    return matchSearch && matchField && matchType
  })

  return (
    <div className="relative py-24">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a1628] via-[#0d1b30] to-[#0a1628]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(212,168,67,0.05),transparent_50%)]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeader icon={Award} title="Học bổng" highlight="Du học Mỹ" desc="Tổng hợp học bổng cho sinh viên quốc tế 2026-2027" iconBg="#d4a843" />

        {/* Filters */}
        <motion.div {...fadeUp} className="mb-8 space-y-4">
          <div className="relative">
            <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30" />
            <input
              type="text"
              placeholder="Tìm kiếm học bổng..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full rounded-xl border border-white/10 bg-white/5 py-3 pl-12 pr-4 text-sm text-white outline-none transition-all placeholder:text-white/30 focus:border-[#d4a843]/50"
            />
          </div>
          <div className="flex flex-wrap gap-3">
            <div className="flex items-center gap-2 rounded-lg bg-white/5 px-3 py-2">
              <Filter size={14} className="text-white/40" />
              <span className="text-xs text-white/40">Ngành:</span>
              {fields.map((f) => (
                <button key={f} onClick={() => setField(f)} className={`rounded-md px-2.5 py-1 text-xs font-medium transition-all ${field === f ? 'bg-[#d4a843] text-[#0a1628]' : 'text-white/50 hover:bg-white/5 hover:text-white'}`}>{f}</button>
              ))}
            </div>
            <div className="flex items-center gap-2 rounded-lg bg-white/5 px-3 py-2">
              <Filter size={14} className="text-white/40" />
              <span className="text-xs text-white/40">Loại:</span>
              {types.map((t) => (
                <button key={t} onClick={() => setType(t)} className={`rounded-md px-2.5 py-1 text-xs font-medium transition-all ${type === t ? 'bg-[#d4a843] text-[#0a1628]' : 'text-white/50 hover:bg-white/5 hover:text-white'}`}>{t}</button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Results */}
        <div className="grid gap-4 md:grid-cols-2">
          {filtered.map((s, i) => (
            <motion.div key={s.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-[#112240] to-[#0a1628] p-6 transition-all hover:border-white/20">
              <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full opacity-10 blur-2xl transition-all duration-500 group-hover:opacity-20 group-hover:scale-150" style={{ background: s.color }} />
              <div className="relative">
                <div className="mb-3 flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="rounded-xl p-2.5" style={{ background: `${s.color}20` }}><Award size={22} style={{ color: s.color }} /></div>
                    <div>
                      <h3 className="text-sm font-bold text-white">{s.name}</h3>
                      <div className="mt-1 flex items-center gap-2">
                        <span className="inline-block rounded-full px-2 py-0.5 text-[10px] font-medium" style={{ background: `${s.color}20`, color: s.color }}>{s.type}</span>
                        <span className="text-[10px] text-white/30">{s.field}</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mb-1 text-lg font-bold text-[#d4a843]">{s.amount}</div>
                <p className="mb-4 text-xs leading-relaxed text-white/50">{s.desc}</p>
                <div className="mb-4 space-y-2">
                  <div className="flex items-center gap-2 text-xs text-white/40">
                    <Calendar size={12} />
                    <span>Hạn nộp: {new Date(s.deadline).toLocaleDateString('vi-VN', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-white/40">
                    <Users size={12} />
                    <span>Điều kiện: {s.eligibility}</span>
                  </div>
                </div>
                <a href={s.applyUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-lg bg-[#d4a843] px-4 py-2 text-xs font-semibold text-[#0a1628] transition-all hover:bg-[#e0b84f]">
                  Tìm hiểu thêm <ExternalLink size={12} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="rounded-2xl border border-white/10 bg-white/5 p-12 text-center">
            <Search size={40} className="mx-auto mb-4 text-white/20" />
            <p className="text-white/40">Không tìm thấy học bổng phù hợp</p>
          </div>
        )}

        <motion.div {...fadeUp} className="mt-12 rounded-xl border border-[#d4a843]/20 bg-[#d4a843]/5 p-4 text-center">
          <p className="text-sm text-white/60">Thông tin học bổng được tổng hợp từ các nguồn chính thống và cập nhật thường xuyên. Hạn nộp có thể thay đổi theo từng năm.</p>
        </motion.div>
      </div>
    </div>
  )
}
