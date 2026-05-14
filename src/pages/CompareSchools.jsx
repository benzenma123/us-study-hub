import { useState } from 'react'
import { motion } from 'framer-motion'
import { Scale, Plus, X, MapPin, Users, DollarSign, GraduationCap, TrendingUp, ExternalLink, ArrowRight, Award, Globe } from 'lucide-react'
import { Link } from 'react-router-dom'
import { SectionHeader, fadeUp } from '../components/ui'
import schools from '../data/schools.json'

export default function CompareSchools() {
  const [selected, setSelected] = useState([])

  const addSchool = (name) => {
    if (selected.length < 3 && !selected.find((s) => s.name === name)) {
      const school = schools.find((s) => s.name === name)
      setSelected([...selected, school])
    }
  }

  const removeSchool = (name) => {
    setSelected(selected.filter((s) => s.name !== name))
  }

  const available = schools.filter((s) => !selected.find((sel) => sel.name === s.name))

  return (
    <div className="relative py-24">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a1628] via-[#0d1b30] to-[#0a1628]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(52,211,153,0.05),transparent_50%)]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeader icon={Scale} title="So sánh" highlight="Trường Đại học" desc="Chọn 2-3 trường để so sánh học phí, điểm đầu vào, tỷ lệ chấp nhận và xếp hạng" iconBg="#34d399" />

        {/* School Selector */}
        <motion.div {...fadeUp} className="mb-8">
          <div className="flex flex-wrap items-center gap-3">
            <span className="text-sm text-white/40">Chọn trường (tối đa 3):</span>
            <div className="flex flex-wrap gap-2">
              {available.map((s) => (
                <button key={s.name} onClick={() => addSchool(s.name)} disabled={selected.length >= 3} className="inline-flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-white/60 transition-all hover:border-white/20 hover:text-white disabled:opacity-30 disabled:cursor-not-allowed">
                  <Plus size={12} />{s.name}
                </button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Selected Schools */}
        {selected.length > 0 && (
          <motion.div {...fadeUp} className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-white/5">
                  <th className="py-4 pr-6 text-xs font-semibold uppercase tracking-wider text-white/30 w-40">Tiêu chí</th>
                  {selected.map((s) => (
                    <th key={s.name} className="py-4 pr-6 last:pr-0">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-bold text-white">{s.name}</span>
                        <button onClick={() => removeSchool(s.name)} className="rounded-lg p-1 text-white/20 transition-all hover:bg-white/5 hover:text-[#fb7185]"><X size={14} /></button>
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  { label: 'Xếp hạng', icon: TrendingUp, key: 'ranking' },
                  { label: 'Loại trường', icon: GraduationCap, key: 'type' },
                  { label: 'Vị trí', icon: MapPin, key: 'location' },
                  { label: 'Học phí', icon: DollarSign, key: 'tuition' },
                  { label: 'Tổng chi phí/năm', icon: DollarSign, key: 'fee' },
                  { label: 'SAT', icon: TrendingUp, key: 'sat' },
                  { label: 'ACT', icon: TrendingUp, key: 'act' },
                  { label: 'Tỷ lệ chấp nhận', icon: TrendingUp, key: 'acceptance' },
                  { label: 'Số sinh viên', icon: Users, key: 'students' },
                  { label: 'Sinh viên quốc tế', icon: Globe, key: 'international' },
                ].map((row, i) => (
                  <motion.tr key={row.key} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: i * 0.03 }} className="border-b border-white/5 last:border-0 hover:bg-white/[0.01]">
                    <td className="py-3.5 pr-6">
                      <div className="flex items-center gap-2">
                        <row.icon size={14} className="text-white/30" />
                        <span className="text-xs font-medium text-white/50">{row.label}</span>
                      </div>
                    </td>
                    {selected.map((s) => {
                      const val = s[row.key]
                      let cls = 'text-white/70'
                      if (row.key === 'ranking' || row.key === 'acceptance') {
                        const num = parseFloat(val)
                        if (num < 5) cls = 'text-[#34d399] font-semibold'
                        else if (num < 15) cls = 'text-[#d4a843]'
                      }
                      return (
                        <td key={s.name} className={`py-3.5 pr-6 last:pr-0 text-xs ${cls}`}>{val}</td>
                      )
                    })}
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </motion.div>
        )}

        {selected.length === 0 && (
          <div className="rounded-2xl border border-white/10 bg-white/5 p-16 text-center">
            <Scale size={48} className="mx-auto mb-4 text-white/10" />
            <p className="text-white/30">Chọn ít nhất 2 trường để bắt đầu so sánh</p>
          </div>
        )}

        {/* Highlights */}
        {selected.length >= 2 && (
          <motion.div {...fadeUp} className="mt-8 rounded-xl border border-[#d4a843]/20 bg-[#d4a843]/5 p-4">
            <h4 className="mb-2 text-sm font-semibold text-white">So sánh nhanh</h4>
            <div className="space-y-1 text-xs text-white/50">
              {(() => {
                const cheapest = [...selected].sort((a, b) => parseInt(a.fee) - parseInt(b.fee))[0]
                const highestRanked = [...selected].sort((a, b) => parseInt(a.ranking.replace('#', '')) - parseInt(b.ranking.replace('#', '')))[0]
                return (
                  <>
                    <p>• Trường có chi phí thấp nhất: <span className="text-[#34d399] font-medium">{cheapest.name}</span></p>
                    <p>• Trường xếp hạng cao nhất: <span className="text-[#d4a843] font-medium">{highestRanked.name}</span></p>
                  </>
                )
              })()}
            </div>
          </motion.div>
        )}

        {/* CTA */}
        <motion.div {...fadeUp} className="mt-12 text-center">
          <Link to="/scholarships" className="inline-flex items-center gap-2 rounded-xl bg-[#d4a843] px-6 py-3 font-semibold text-[#0a1628] transition-all hover:bg-[#e0b84f]">
            <Award size={18} />Xem học bổng<ArrowRight size={16} />
          </Link>
        </motion.div>
      </div>
    </div>
  )
}
