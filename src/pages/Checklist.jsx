import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { CheckSquare, Square, Calendar, Clock, FileCheck, Plane, Zap, RotateCcw, MessageCircle, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { SectionHeader, fadeUp, C } from '../components/ui'
import stages from '../data/checklist.json'

const iconMap = { Calendar, Clock, FileCheck, Plane, Zap }

export default function Checklist() {
  const [checks, setChecks] = useState(() => {
    try {
      const saved = localStorage.getItem('checklist')
      return saved ? JSON.parse(saved) : stages.map((s) => s.items.map(() => false))
    } catch {
      return stages.map((s) => s.items.map(() => false))
    }
  })

  useEffect(() => {
    localStorage.setItem('checklist', JSON.stringify(checks))
  }, [checks])

  const toggle = (stageIdx, itemIdx) => {
    setChecks((prev) => {
      const next = prev.map((s) => [...s])
      next[stageIdx][itemIdx] = !next[stageIdx][itemIdx]
      return next
    })
  }

  const total = checks.reduce((sum, s) => sum + s.length, 0)
  const done = checks.reduce((sum, s) => sum + s.filter(Boolean).length, 0)
  const pct = total > 0 ? Math.round((done / total) * 100) : 0

  const reset = () => {
    setChecks(stages.map((s) => s.items.map(() => false)))
  }

  return (
    <div className="relative py-24">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a1628] via-[#0d1b30] to-[#0a1628]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(212,168,67,0.05),transparent_50%)]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeader icon={CheckSquare} title="Checklist" highlight="Du học Mỹ" desc="Theo dõi tiến độ chuẩn bị hồ sơ du học từ A đến Z" iconBg="#d4a843" />

        {/* Progress */}
        <motion.div {...fadeUp} className="mb-8 rounded-2xl border border-white/10 bg-gradient-to-r from-[#112240] to-[#0d1b30] p-6 backdrop-blur-sm">
          <div className="mb-4 flex items-center justify-between">
            <div>
              <span className="text-2xl font-bold text-white">{done}/{total}</span>
              <span className="ml-2 text-sm text-white/40">mục đã hoàn thành</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-lg font-bold text-[#d4a843]">{pct}%</span>
              <button onClick={reset} className="rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-white/40 transition-all hover:border-white/20 hover:text-white">
                <RotateCcw size={14} />
              </button>
            </div>
          </div>
          <div className="h-2 overflow-hidden rounded-full bg-white/10">
            <motion.div className="h-full rounded-full bg-gradient-to-r from-[#d4a843] to-[#34d399]" initial={{ width: 0 }} animate={{ width: `${pct}%` }} transition={{ duration: 0.5 }} />
          </div>
        </motion.div>

        {/* Stages */}
        <div className="space-y-6">
          {stages.map((stage, si) => {
            const Icon = iconMap[stage.icon] || Calendar
            const stageDone = checks[si]?.filter(Boolean).length || 0
            const stageTotal = stage.items.length
            return (
              <motion.div key={stage.stage} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: si * 0.08 }} className="overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-[#112240] to-[#0a1628]">
                <div className="flex items-center justify-between border-b border-white/5 px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className="rounded-xl p-2.5" style={{ background: `${stage.color}20` }}><Icon size={20} style={{ color: stage.color }} /></div>
                    <div>
                      <h3 className="text-sm font-bold text-white">{stage.stage}</h3>
                      <span className="text-xs text-white/30">{stageDone}/{stageTotal} mục</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="h-1.5 w-20 overflow-hidden rounded-full bg-white/10">
                      <div className="h-full rounded-full transition-all" style={{ width: `${(stageDone / stageTotal) * 100}%`, background: stage.color }} />
                    </div>
                  </div>
                </div>
                <div className="px-6 py-3">
                  {stage.items.map((item, ii) => (
                    <button key={ii} onClick={() => toggle(si, ii)} className="flex w-full items-center gap-3 rounded-lg px-2 py-2.5 text-left transition-all hover:bg-white/[0.02]">
                      {checks[si]?.[ii] ? (
                        <CheckSquare size={18} className="shrink-0 text-[#34d399]" />
                      ) : (
                        <Square size={18} className="shrink-0 text-white/20" />
                      )}
                      <span className={`text-sm transition-all ${checks[si]?.[ii] ? 'text-white/30 line-through' : 'text-white/70'}`}>{item.label}</span>
                    </button>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* CTA */}
        <motion.div {...fadeUp} className="mt-12 text-center">
          <p className="mb-4 text-sm text-white/40">Dữ liệu được lưu tự động trên trình duyệt của bạn</p>
          <Link to="/visa-interview" className="inline-flex items-center gap-2 rounded-xl bg-[#d4a843] px-6 py-3 font-semibold text-[#0a1628] transition-all hover:bg-[#e0b84f]">
            <MessageCircle size={18} />Luyện phỏng vấn visa<ArrowRight size={16} />
          </Link>
        </motion.div>
      </div>
    </div>
  )
}
