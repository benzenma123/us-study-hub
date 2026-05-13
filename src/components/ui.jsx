import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export const C = {
  navy: '#0a1628',
  navyLight: '#112240',
  navyMid: '#1a2d4a',
  gold: '#d4a843',
  goldLight: '#f0d080',
  goldDark: '#b8922e',
  emerald: '#34d399',
  rose: '#fb7185',
  sky: '#38bdf8',
}

export const fmt = (n) =>
  new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(n)

export const fadeUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.6 },
}

export const stagger = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
}

export function SectionHeader({ icon: Icon, title, highlight, desc, iconBg }) {
  return (
    <div className="mb-14 text-center">
      <div
        className="mb-4 inline-flex rounded-xl p-3"
        style={{ background: `${iconBg || C.gold}15` }}
      >
        <Icon size={28} style={{ color: iconBg || C.gold }} />
      </div>
      <h2 className="text-3xl font-bold sm:text-4xl">
        {title}{' '}
        <span style={{ color: highlight || C.gold }}>{highlight}</span>
      </h2>
      <p className="mt-3 text-white/50">{desc}</p>
    </div>
  )
}

export function StatCard({ value, label, icon: Icon, sub }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm"
    >
      <div className="absolute -right-6 -top-6 text-white/5">
        <Icon size={80} />
      </div>
      <Icon className="mb-3 text-[#d4a843]" size={28} />
      <div className="text-3xl font-bold text-white">{value}</div>
      <div className="mt-1 text-sm font-medium text-white/80">{label}</div>
      {sub && <div className="mt-1 text-xs text-[#d4a843]">{sub}</div>}
    </motion.div>
  )
}

export function ProgressBar({ value, min, max, label, prefix, onChange, color }) {
  const pct = ((value - min) / (max - min)) * 100
  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between text-sm">
        <span className="font-medium text-white/80">{label}</span>
        <span className="font-bold text-[#d4a843]">
          {prefix}{fmt(value)}
          {label === 'Sinh hoạt phí' && (
            <span className="text-xs font-normal text-white/50"> /tháng</span>
          )}
        </span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="h-2 w-full cursor-pointer appearance-none rounded-full bg-white/10 outline-none"
        style={{
          background: `linear-gradient(to right, ${color || '#d4a843'} 0%, ${color || '#d4a843'} ${pct}%, rgba(255,255,255,0.1) ${pct}%, rgba(255,255,255,0.1) 100%)`,
        }}
      />
      <div className="flex justify-between text-xs text-white/40">
        <span>{prefix}{fmt(min)}</span>
        <span>{prefix}{fmt(max)}</span>
      </div>
    </div>
  )
}

export function CostRow({ label, value, color }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -10 }}
      animate={{ opacity: 1, x: 0 }}
      className="flex items-center justify-between border-b border-white/5 py-2.5 last:border-0"
    >
      <span className="text-sm text-white/70">{label}</span>
      <span className="font-semibold text-white" style={{ color: color || '#fff' }}>
        {fmt(value)}
      </span>
    </motion.div>
  )
}

export function Bentocard({ icon: Icon, title, desc, badge, color, accent, size }) {
  return (
    <motion.div
      variants={stagger}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br p-6 transition-all duration-300 hover:border-white/20 hover:shadow-xl hover:shadow-black/20 ${size || 'col-span-1'}`}
      style={{ background: `linear-gradient(135deg, ${C.navyLight} 0%, ${C.navy} 100%)` }}
    >
      <div
        className="absolute -right-8 -top-8 h-32 w-32 rounded-full opacity-10 blur-2xl transition-all duration-500 group-hover:opacity-20 group-hover:scale-150"
        style={{ background: color || C.gold }}
      />
      <div className="relative">
        <div
          className="mb-4 inline-flex rounded-xl p-3"
          style={{ background: `${color || C.gold}20` }}
        >
          <Icon size={24} style={{ color: color || C.gold }} />
        </div>
        {badge && (
          <span
            className="mb-3 inline-block rounded-full px-3 py-1 text-xs font-semibold"
            style={{ background: `${color || C.gold}20`, color: color || C.gold }}
          >
            {badge}
          </span>
        )}
        <h3 className="mb-2 text-lg font-bold text-white">{title}</h3>
        <p className="text-sm leading-relaxed text-white/60">{desc}</p>
        {accent && (
          <div className="mt-4 flex items-center gap-2 text-xs font-medium" style={{ color: color || C.gold }}>
            <ArrowRight size={14} />
            <span>{accent}</span>
          </div>
        )}
      </div>
    </motion.div>
  )
}
