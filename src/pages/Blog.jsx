import { useState } from 'react'
import { motion } from 'framer-motion'
import { Newspaper, ArrowLeft, Calendar, User, GraduationCap, ScrollText, BookOpen, Users, Briefcase, ExternalLink, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { SectionHeader, fadeUp } from '../components/ui'
import posts from '../data/blog.json'

const iconMap = { GraduationCap, ScrollText, BookOpen, Users, Briefcase }

export default function Blog() {
  const [reading, setReading] = useState(null)

  if (reading) {
    const post = posts.find((p) => p.id === reading)
    const Icon = iconMap[post.image] || Newspaper
    return (
      <div className="relative py-24">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a1628] via-[#0d1b30] to-[#0a1628]" />
        <div className="relative mx-auto max-w-4xl px-4 sm:px-6">
          <button onClick={() => setReading(null)} className="mb-6 inline-flex items-center gap-2 text-sm text-white/40 transition-all hover:text-white">
            <ArrowLeft size={16} /> Quay lại danh sách
          </button>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <div className="mb-6 inline-flex rounded-xl p-3" style={{ background: `${post.color}20` }}><Icon size={28} style={{ color: post.color }} /></div>
            <h1 className="mb-4 text-3xl font-bold text-white sm:text-4xl">{post.title}</h1>
            <div className="mb-8 flex items-center gap-4 text-sm text-white/40">
              <span className="flex items-center gap-1.5"><User size={14} />{post.author}</span>
              <span className="flex items-center gap-1.5"><Calendar size={14} />{new Date(post.date).toLocaleDateString('vi-VN', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
            </div>
            <div className="prose prose-invert max-w-none space-y-5">
              {post.content.map((block, i) => {
                if (block.type === 'heading') return <h2 key={i} className="text-xl font-bold text-white" style={{ color: post.color }}>{block.text}</h2>
                return <p key={i} className="text-sm leading-relaxed text-white/60">{block.text}</p>
              })}
            </div>
            <div className="mt-10 rounded-xl border border-white/10 bg-white/5 p-6 text-center">
              <p className="mb-3 text-sm text-white/40">Bài viết được tổng hợp từ các nguồn chính thống. Thông tin chỉ mang tính tham khảo.</p>
              <Link to="/contact" className="text-sm text-[#d4a843] transition-all hover:text-[#e0b84f]">Liên hệ với chúng tôi →</Link>
            </div>
          </motion.div>
        </div>
      </div>
    )
  }

  return (
    <div className="relative py-24">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a1628] via-[#0d1b30] to-[#0a1628]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(212,168,67,0.05),transparent_50%)]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeader icon={Newspaper} title="Blog" highlight="Du học Mỹ" desc="Tin tức, kinh nghiệm và hướng dẫn chi tiết về du học Hoa Kỳ" iconBg="#d4a843" />

        <div className="grid gap-6 md:grid-cols-2">
          {posts.map((post, i) => {
            const Icon = iconMap[post.image] || Newspaper
            return (
              <motion.button key={post.id} onClick={() => setReading(post.id)} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-[#112240] to-[#0a1628] p-6 text-left transition-all hover:border-white/20">
                <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full opacity-10 blur-2xl transition-all duration-500 group-hover:opacity-20 group-hover:scale-150" style={{ background: post.color }} />
                <div className="relative">
                  <div className="mb-4 inline-flex rounded-xl p-3" style={{ background: `${post.color}20` }}><Icon size={24} style={{ color: post.color }} /></div>
                  <div className="mb-2 flex items-center gap-3 text-xs text-white/30">
                    <span className="flex items-center gap-1"><Calendar size={12} />{new Date(post.date).toLocaleDateString('vi-VN', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                  </div>
                  <h3 className="mb-2 text-base font-bold text-white">{post.title}</h3>
                  <p className="text-sm leading-relaxed text-white/50">{post.summary}</p>
                  <div className="mt-4 flex items-center gap-1 text-xs font-medium text-[#d4a843] transition-all group-hover:gap-2">
                    Đọc tiếp <ArrowRight size={12} />
                  </div>
                </div>
              </motion.button>
            )
          })}
        </div>
      </div>
    </div>
  )
}
