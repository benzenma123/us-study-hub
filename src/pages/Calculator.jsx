import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Calculator, Building2, ShieldCheck, GraduationCap, Landmark,
  Rocket, ArrowRight, Lightbulb, TrendingUp, DollarSign,
  AlertCircle, CheckCircle, BookOpen, Wallet, Plane, Home as HomeIcon,
  PiggyBank, BarChart3
} from 'lucide-react'
import { Link } from 'react-router-dom'
import { fadeUp, fmt, ProgressBar, CostRow } from '../components/ui'

const schoolTypes = [
  { id: 'community', label: 'Cao đẳng Cộng đồng', tuition: 5000, range: [5000, 5000], icon: Building2, detail: 'Tiết kiệm nhất, chuyển tiếp lên ĐH 4 năm' },
  { id: 'public', label: 'Đại học Công lập', tuition: 27500, range: [20000, 35000], icon: Landmark, detail: 'Cân bằng giữa chất lượng và chi phí' },
  { id: 'private', label: 'Đại học Tư thục', tuition: 45000, range: [30000, 60000], icon: GraduationCap, detail: 'Học bổng nhiều, cơ sở vật chất hiện đại' },
]

const tips = [
  'Nộp hồ sơ sớm để tăng cơ hội nhận học bổng từ 20-60% học phí.',
  'Cao đẳng cộng đồng 2 năm + chuyển tiếp ĐH 4 năm giúp tiết kiệm $30,000+.',
  'Bảo hiểm y tế sinh viên thường rẻ hơn mua ngoài tới 40%.',
  'Sinh hoạt phí ở các bang miền Trung và Nam thấp hơn 30-40% so với California hay New York.',
  'Săn vé máy bay mùa thấp điểm (tháng 1-3, 9-11) để tiết kiệm $300-$500.',
]

export default function CalculatorPage() {
  const [schoolType, setSchoolType] = useState('public')
  const [tuition, setTuition] = useState(27500)
  const [insurance, setInsurance] = useState(2500)
  const [living, setLiving] = useState(1500)
  const [flight, setFlight] = useState(1200)
  const [activeTip, setActiveTip] = useState(0)

  const currentSchool = schoolTypes.find((s) => s.id === schoolType)
  const tuitionMin = currentSchool.range[0]
  const tuitionMax = currentSchool.range[1]
  const actualTuition = schoolType === 'community' ? 5000 : tuition
  const annualLiving = living * 12
  const total = 350 + 160 + actualTuition + insurance + annualLiving + flight
  const totalMonthly = Math.round(total / 12)

  const rot2yrs = 350 + 160 + (actualTuition * 2) + (insurance * 2) + (annualLiving * 2) + (flight * 2)
  const monthlyBreakdown = [
    { label: 'Học phí', value: Math.round(actualTuition / 12), color: '#d4a843', pct: Math.round((actualTuition / total) * 100) },
    { label: 'Sinh hoạt phí', value: living, color: '#34d399', pct: Math.round((annualLiving / total) * 100) },
    { label: 'Bảo hiểm', value: Math.round(insurance / 12), color: '#38bdf8', pct: Math.round((insurance / total) * 100) },
    { label: 'Visa & SEVIS', value: Math.round(510 / 12), color: '#fb7185', pct: Math.round((510 / total) * 100) },
    { label: 'Vé máy bay', value: Math.round(flight / 12), color: '#a78bfa', pct: Math.round((flight / total) * 100) },
  ]

  const comparisons = [
    { type: schoolType === 'community' ? '✅ Hiện tại' : 'Cao đẳng Cộng đồng', total: 350 + 160 + 5000 + insurance + annualLiving + flight, color: '#38bdf8' },
    { type: schoolType === 'public' ? '✅ Hiện tại' : 'Đại học Công lập', total: 350 + 160 + 27500 + insurance + annualLiving + flight, color: '#d4a843' },
    { type: schoolType === 'private' ? '✅ Hiện tại' : 'Đại học Tư thục', total: 350 + 160 + 45000 + insurance + annualLiving + flight, color: '#fb7185' },
  ]

  const handleSchoolChange = (id) => {
    setSchoolType(id)
    if (id === 'community') setTuition(5000)
    else if (id === 'public') setTuition(27500)
    else setTuition(45000)
  }

  return (
    <div className="relative py-24">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a1628] via-[#0d1b30] to-[#0a1628]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(212,168,67,0.04),transparent_60%)]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <motion.div {...fadeUp} className="mb-14 text-center">
          <div className="mb-4 inline-flex rounded-xl bg-[#d4a843]/10 p-3"><Calculator size={28} className="text-[#d4a843]" /></div>
          <h2 className="text-3xl font-bold sm:text-4xl">Smart <span className="text-[#d4a843]">Cost</span> Calculator</h2>
          <p className="mt-3 text-white/50">Ước tính tổng chi phí du học Mỹ năm đầu tiên dựa trên lựa chọn của bạn</p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-5">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="space-y-8 rounded-2xl border border-white/10 bg-[#112240]/60 p-6 backdrop-blur-sm lg:col-span-3">
            <div>
              <label className="mb-3 block text-sm font-medium text-white/70"><Building2 size={16} className="inline-block" /> Loại trường</label>
              <div className="grid grid-cols-3 gap-2">
                {schoolTypes.map((s) => {
                  const active = schoolType === s.id
                  return (
                    <button key={s.id} onClick={() => handleSchoolChange(s.id)} className="group relative overflow-hidden rounded-xl border p-3 text-left text-sm transition-all duration-300" style={{ borderColor: active ? '#d4a843' : 'rgba(255,255,255,0.1)', background: active ? 'rgba(212,168,67,0.1)' : 'rgba(255,255,255,0.03)' }}>
                      <s.icon size={18} className="mb-2" style={{ color: active ? '#d4a843' : 'rgba(255,255,255,0.4)' }} />
                      <div className="text-xs font-medium" style={{ color: active ? '#d4a843' : 'rgba(255,255,255,0.7)' }}>{s.label.split(' ')[0]}</div>
                      <div className="mt-1 text-[10px] text-white/40">{s.label.split(' ').slice(1).join(' ') || 'College'}</div>
                      <div className="mt-1 text-[9px] leading-tight text-white/30">{s.detail}</div>
                    </button>
                  )
                })}
              </div>
            </div>

            <AnimatePresence mode="wait">
              {schoolType !== 'community' && (
                <motion.div key={schoolType} initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} transition={{ duration: 0.3 }}>
                  <ProgressBar label="Học phí năm" value={tuition} min={tuitionMin} max={tuitionMax} prefix="" onChange={setTuition} color="#d4a843" />
                </motion.div>
              )}
            </AnimatePresence>

            {schoolType === 'community' && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-center justify-between rounded-xl bg-white/5 px-5 py-4">
                <div><span className="text-sm text-white/70">Học phí năm</span><div className="text-xs text-white/40">Cao đẳng Cộng đồng</div></div>
                <span className="text-lg font-bold text-[#d4a843]">{fmt(5000)}</span>
              </motion.div>
            )}

            <ProgressBar label="Bảo hiểm y tế" value={insurance} min={2000} max={3000} prefix="" onChange={setInsurance} color="#38bdf8" />
            <ProgressBar label="Sinh hoạt phí" value={living} min={1000} max={2000} prefix="" onChange={setLiving} color="#34d399" />
            <ProgressBar label="Vé máy bay" value={flight} min={800} max={1600} prefix="" onChange={setFlight} color="#fb7185" />

            <div className="rounded-xl border border-[#d4a843]/20 bg-[#d4a843]/5 p-4">
              <div className="flex items-center gap-2 text-sm font-medium text-[#d4a843]"><ShieldCheck size={16} />Phí bắt buộc (luôn bao gồm)</div>
              <div className="mt-3 grid grid-cols-2 gap-3 text-sm">
                <div className="flex items-center justify-between rounded-lg bg-white/5 px-3 py-2"><span className="text-white/60">SEVIS F-1</span><span className="font-semibold text-white">{fmt(350)}</span></div>
                <div className="flex items-center justify-between rounded-lg bg-white/5 px-3 py-2"><span className="text-white/60">Visa F-1</span><span className="font-semibold text-white">{fmt(160)}</span></div>
              </div>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }} className="lg:col-span-2">
            <div className="sticky top-24 rounded-2xl border border-[#d4a843]/20 bg-gradient-to-br from-[#1a2d4a] to-[#0a1628] p-6 shadow-xl shadow-black/20">
              <div className="mb-6 text-center">
                <div className="text-sm font-medium text-white/40">Tổng chi phí năm đầu</div>
                <motion.div key={total} initial={{ scale: 1.1, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="mt-2 text-4xl font-extrabold text-[#d4a843]">{fmt(total)}</motion.div>
                <div className="mt-1 text-xs text-white/40">~{fmt(totalMonthly)}/tháng</div>
              </div>

              <div className="space-y-1 rounded-xl bg-black/20 p-4">
                <CostRow label="SEVIS F-1" value={350} color="#38bdf8" />
                <CostRow label="Visa F-1" value={160} color="#38bdf8" />
                <CostRow label="Học phí" value={actualTuition} color="#d4a843" />
                <CostRow label="Bảo hiểm y tế" value={insurance} color="#38bdf8" />
                <CostRow label="Sinh hoạt phí (12 tháng)" value={annualLiving} color="#34d399" />
                <CostRow label="Vé máy bay" value={flight} color="#fb7185" />
              </div>

              <div className="mt-4 flex items-center justify-between border-t border-white/10 pt-4">
                <span className="text-sm font-semibold text-white">Tổng cộng</span>
                <span className="text-xl font-extrabold text-[#d4a843]">{fmt(total)}</span>
              </div>

              {/* Monthly breakdown bars */}
              <div className="mt-5 space-y-2">
                <div className="text-xs font-medium text-white/40">Phân bổ chi phí hàng tháng</div>
                {monthlyBreakdown.filter(b => b.value > 0).map((b) => (
                  <div key={b.label} className="flex items-center gap-3">
                    <span className="w-24 text-xs text-white/50">{b.label}</span>
                    <div className="flex h-4 flex-1 overflow-hidden rounded-full bg-white/5">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${b.pct}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="rounded-full"
                        style={{ width: `${b.pct}%`, background: b.color }}
                      />
                    </div>
                    <span className="w-16 text-right text-xs text-white/50">{fmt(b.value)}</span>
                  </div>
                ))}
              </div>

              {/* 2-Year Estimate */}
              <div className="mt-5 rounded-xl border border-white/5 bg-white/[0.02] p-3">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-white/50">Dự toán 2 năm</span>
                  <span className="font-semibold text-white">{fmt(rot2yrs)}</span>
                </div>
                <div className="mt-1 flex items-center justify-between text-xs">
                  <span className="text-white/50">Dự toán 4 năm</span>
                  <span className="font-semibold text-white">{fmt(rot2yrs * 2)}</span>
                </div>
              </div>

              <Link to="/visa" className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl bg-[#d4a843] px-4 py-3 text-sm font-semibold text-[#0a1628] transition-all hover:bg-[#e0b84f]">
                <Rocket size={16} />Khám phá cơ hội Visa 2026<ArrowRight size={14} />
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Comparison Table */}
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }} className="mt-10 rounded-2xl border border-white/10 bg-[#112240]/60 p-6 backdrop-blur-sm">
          <h3 className="mb-4 flex items-center gap-2 text-sm font-semibold text-white"><BarChart3 size={16} className="text-[#d4a843]" />So sánh chi phí theo loại trường</h3>
          <div className="grid gap-3 sm:grid-cols-3">
            {comparisons.map((c) => (
              <div key={c.type} className="rounded-xl border border-white/5 bg-black/20 p-4">
                <div className="text-xs text-white/40">{c.type.replace('✅ ', '')}</div>
                <div className="mt-1 text-lg font-bold text-white">{fmt(c.total)}</div>
                <div className="mt-1 text-[10px] text-white/30">/năm đầu</div>
                {c.type.includes('✅') && <div className="mt-2 text-xs text-[#34d399]">✓ Đang chọn</div>}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Tips */}
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.4 }} className="mt-10 rounded-2xl border border-[#34d399]/20 bg-gradient-to-r from-[#34d399]/5 to-transparent p-6 sm:p-8">
          <div className="flex items-start gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#34d399]/10"><Lightbulb size={22} className="text-[#34d399]" /></div>
            <div className="flex-1">
              <h3 className="mb-2 text-base font-bold text-white">Mẹo tiết kiệm chi phí</h3>
              <p className="text-sm leading-relaxed text-white/60">{tips[activeTip]}</p>
              <div className="mt-3 flex gap-2">
                {tips.map((_, i) => (
                  <button key={i} onClick={() => setActiveTip(i)} className={`h-2 rounded-full transition-all ${i === activeTip ? 'w-6 bg-[#34d399]' : 'w-2 bg-white/20'}`} />
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
