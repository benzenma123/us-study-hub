import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import {
  TrendingUp, Clock, Award, Calculator, ScrollText, Rocket,
  MessageCircle, FileText, ChevronDown, Sparkle, Sparkles,
  ArrowRight, GraduationCap, BookOpen, CheckCircle, Users,
  Star, Target, Globe, Search, FileSearch, Plane, Building2,
  Landmark, Quote
} from 'lucide-react'
import { StatCard, fadeUp, C } from '../components/ui'

const steps = [
  { icon: Search, title: 'Đánh giá hồ sơ', desc: 'Phân tích học lực, tài chính và mục tiêu để tư vấn lộ trình phù hợp nhất với từng sinh viên.', color: '#38bdf8', step: '01' },
  { icon: FileSearch, title: 'Chọn trường & ngành', desc: 'Đề xuất danh sách trường dựa trên ngành học, ngân sách, và tỷ lệ chấp nhận visa.', color: '#d4a843', step: '02' },
  { icon: Plane, title: 'Xử lý Visa & SEVIS', desc: 'Hỗ trợ hoàn thiện hồ sơ I-20, SEVIS, DS-160 và luyện phỏng vấn visa F-1.', color: '#34d399', step: '03' },
  { icon: GraduationCap, title: 'Hành trang lên đường', desc: 'Định hướng nhà ở, bảo hiểm, tài khoản ngân hàng và các thủ tục cần thiết khi đến Mỹ.', color: '#fb7185', step: '04' },
]

const testimonials = [
  { name: 'Nguyễn Minh Anh', school: 'University of California, Berkeley', major: 'Computer Science', quote: 'Nhờ lộ trình chi tiết từ US Study Hub, mình đã tự tin hoàn thành phỏng vấn visa ngay lần đầu tiên. Các anh chị tư vấn rất tận tâm về cách chọn trường và viết bài luận.', avatar: 'MA', color: '#38bdf8' },
  { name: 'Trần Hoàng Long', school: 'Massachusetts Institute of Technology', major: 'AI & Machine Learning', quote: 'Hành trang đến MIT của mình được xây dựng từ những buổi tư vấn chi tiết về ngành STEM và cơ hội OPT. Giờ mình đang làm research assistant với mức lương $45/h.', avatar: 'HL', color: '#34d399' },
  { name: 'Lê Thị Phương', school: 'Harvard University', major: 'Data Science', quote: 'US Study Hub giúp mình hiểu rõ về holistic admission và cách xây dựng hồ sơ ngoại khóa. Kết quả là mình nhận được học bổng 60% học phí từ Harvard!', avatar: 'LP', color: '#d4a843' },
]

const universities = [
  { name: 'Harvard University', rank: '#1', color: '#d4a843' },
  { name: 'Massachusetts Institute of Technology', rank: '#2', color: '#38bdf8' },
  { name: 'Stanford University', rank: '#3', color: '#34d399' },
  { name: 'University of California, Berkeley', rank: '#5', color: '#fb7185' },
  { name: 'California Institute of Technology', rank: '#7', color: '#a78bfa' },
  { name: 'Georgia Institute of Technology', rank: '#33', color: '#f59e0b' },
]

export default function Home() {
  return (
    <div>
      {/* HERO */}
      <div className="relative min-h-screen overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a1628] via-[#0f1f3a] to-[#0a1628]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(212,168,67,0.08),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(56,189,248,0.05),transparent_50%)]" />
        <div className="absolute inset-0 opacity-30" style={{ background: 'linear-gradient(90deg, transparent, rgba(212,168,67,0.06), transparent)', backgroundSize: '200% 100%', animation: 'shimmer 3s ease-in-out infinite' }} />

        <div className="relative mx-auto flex min-h-[calc(100vh-64px)] max-w-7xl flex-col items-center justify-center px-4 py-20 text-center sm:px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#d4a843]/20 bg-[#d4a843]/10 px-4 py-1.5 text-sm text-[#d4a843]">
            <Sparkle size={14} />
            <span>Cập nhật chính sách Du học Mỹ 2025-2026</span>
          </motion.div>

          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.7 }} className="max-w-4xl text-4xl font-extrabold leading-tight sm:text-5xl md:text-6xl lg:text-7xl">
            Chinh phục{' '}
            <span className="bg-gradient-to-r from-[#d4a843] via-[#f0d080] to-[#d4a843] bg-clip-text text-transparent">Giấc mơ Mỹ 2025</span>
            <br />Lộ trình & Chiến lược mới
          </motion.h1>

          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 0.6 }} className="mt-6 max-w-2xl text-lg leading-relaxed text-white/50 sm:text-xl">
            Khám phá lộ trình du học Mỹ toàn diện với cập nhật mới nhất về visa, tuyển sinh và cơ hội nghề nghiệp STEM năm 2025.
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link to="/calculator" className="group inline-flex items-center gap-2 rounded-xl bg-[#d4a843] px-6 py-3 font-semibold text-[#0a1628] transition-all hover:bg-[#e0b84f] hover:shadow-xl hover:shadow-[#d4a843]/25">
              <Calculator size={18} />Tính chi phí ngay<ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </Link>
            <Link to="/visa" className="group inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-6 py-3 font-medium text-white/80 transition-all hover:border-white/20 hover:bg-white/10">
              <ScrollText size={18} />Cập nhật Visa 2025
            </Link>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7, duration: 0.6 }} className="mt-16 grid w-full max-w-4xl grid-cols-1 gap-4 sm:grid-cols-3">
            <StatCard value="$80K – $120K" label="Lương khởi điểm ngành STEM" icon={TrendingUp} sub="Trung bình năm 2025" />
            <StatCard value="36 tháng" label="Thời gian làm việc OPT tối đa" icon={Clock} sub="12 tháng gốc + 24 tháng STEM" />
            <StatCard value="56%" label="Trường ưu tiên đánh giá toàn diện" icon={Award} sub="Ngoại khóa & Bài luận > Điểm số" />
          </motion.div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 flex justify-center pb-8">
          <motion.button onClick={() => document.getElementById('process')?.scrollIntoView({ behavior: 'smooth' })} animate={{ y: [0, 8, 0] }} transition={{ duration: 2, repeat: Infinity }} className="flex h-10 w-6 items-start justify-center rounded-full border border-white/10">
            <ChevronDown size={14} className="mt-2 text-white/30" />
          </motion.button>
        </div>
      </div>

      {/* PROCESS */}
      <section id="process" className="relative py-24">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a1628] via-[#0d1b30] to-[#0a1628]" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
          <motion.div {...fadeUp} className="mb-14 text-center">
            <div className="mb-4 inline-flex rounded-xl bg-[#38bdf8]/10 p-3"><Target size={28} className="text-[#38bdf8]" /></div>
            <h2 className="text-3xl font-bold sm:text-4xl">Lộ trình <span className="text-[#38bdf8]">4 bước</span> chinh phục</h2>
            <p className="mt-3 text-white/50">Từ đánh giá hồ sơ đến ngày lên đường — chúng tôi đồng hành cùng bạn</p>
          </motion.div>

          <div className="relative grid gap-6 md:grid-cols-4">
            <div className="absolute left-0 right-0 top-1/2 hidden h-0.5 bg-gradient-to-r from-transparent via-[#d4a843]/30 to-transparent md:block" />
            {steps.map((s, i) => (
              <motion.div key={s.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.12, duration: 0.5 }} className="group relative">
                <div className="relative z-10 flex flex-col items-center rounded-2xl border border-white/5 bg-white/[0.02] p-6 text-center transition-all hover:border-white/10">
                  <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl text-lg font-bold" style={{ background: `${s.color}20`, color: s.color }}>{s.step}</div>
                  <div className="mb-3 rounded-lg p-2.5" style={{ background: `${s.color}15` }}><s.icon size={24} style={{ color: s.color }} /></div>
                  <h3 className="mb-2 text-base font-bold text-white">{s.title}</h3>
                  <p className="text-sm leading-relaxed text-white/50">{s.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* STATS BANNER */}
      <section className="relative border-y border-white/5 py-16">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(212,168,67,0.03),transparent_60%)]" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid gap-8 text-center sm:grid-cols-4">
            {[
              { value: '500+', label: 'Sinh viên đã hỗ trợ', icon: Users, color: '#38bdf8' },
              { value: '95%', label: 'Tỷ lệ đậu Visa F-1', icon: CheckCircle, color: '#34d399' },
              { value: '50+', label: 'Trường ĐH đối tác', icon: Building2, color: '#d4a843' },
              { value: '$45M+', label: 'Học bổng đạt được', icon: Star, color: '#fb7185' },
            ].map((s, i) => (
              <motion.div key={s.label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="group">
                <div className="mb-3 inline-flex rounded-xl p-3" style={{ background: `${s.color}15` }}><s.icon size={24} style={{ color: s.color }} /></div>
                <div className="text-3xl font-extrabold text-white">{s.value}</div>
                <div className="mt-1 text-sm text-white/50">{s.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* UNIVERSITIES */}
      <section className="relative py-20">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a1628] via-[#0d1b30] to-[#0a1628]" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
          <motion.div {...fadeUp} className="mb-12 text-center">
            <div className="mb-4 inline-flex rounded-xl bg-[#d4a843]/10 p-3"><Landmark size={28} className="text-[#d4a843]" /></div>
            <h2 className="text-3xl font-bold sm:text-4xl">Đối tác <span className="text-[#d4a843]">Đại học</span></h2>
            <p className="mt-3 text-white/50">Hợp tác với các trường đại học hàng đầu Hoa Kỳ</p>
          </motion.div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {universities.map((u, i) => (
              <motion.div key={u.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="flex items-center gap-4 rounded-xl border border-white/5 bg-white/[0.02] px-5 py-4 transition-all hover:border-white/10">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg text-lg font-bold" style={{ background: `${u.color}20`, color: u.color }}>{u.rank.replace('#', '')}</div>
                <div>
                  <div className="text-sm font-semibold text-white">{u.name}</div>
                  <div className="text-xs text-white/40">Xếp hạng: {u.rank}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="relative py-20">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a1628] via-[#0d1b30] to-[#0a1628]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(212,168,67,0.03),transparent_60%)]" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
          <motion.div {...fadeUp} className="mb-12 text-center">
            <div className="mb-4 inline-flex rounded-xl bg-[#fb7185]/10 p-3"><Quote size={28} className="text-[#fb7185]" /></div>
            <h2 className="text-3xl font-bold sm:text-4xl">Câu chuyện <span className="text-[#fb7185]">thành công</span></h2>
            <p className="mt-3 text-white/50">Sinh viên của chúng tôi đã đạt được những thành tựu đáng kinh ngạc</p>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-3">
            {testimonials.map((t, i) => (
              <motion.div key={t.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.12 }} className="group relative rounded-2xl border border-white/5 bg-gradient-to-b from-[#112240] to-[#0a1628] p-6 transition-all hover:border-white/10">
                <div className="absolute -right-4 -top-4 text-6xl text-white/5"><Quote size={48} /></div>
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full text-sm font-bold" style={{ background: `${t.color}20`, color: t.color }}>{t.avatar}</div>
                  <div>
                    <div className="text-sm font-semibold text-white">{t.name}</div>
                    <div className="text-xs text-white/40">{t.major}</div>
                  </div>
                </div>
                <p className="text-sm leading-relaxed text-white/60 italic">"{t.quote}"</p>
                <div className="mt-4 flex items-center gap-2 text-xs text-white/30"><GraduationCap size={12} />{t.school}</div>
              </motion.div>
            ))}
          </div>
          <div className="mt-6 text-center text-xs text-white/20 italic">
            * Nội dung mang tính minh họa, không phải lời chứng thực thực tế từ khách hàng
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-20">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a1628] to-[#0d1b30]" />
        <div className="relative mx-auto max-w-4xl px-4 text-center">
          <motion.div {...fadeUp}>
            <div className="mb-6 inline-flex rounded-xl bg-[#d4a843]/10 p-3"><Rocket size={28} className="text-[#d4a843]" /></div>
            <h2 className="text-3xl font-bold sm:text-4xl">Sẵn sàng <span className="text-[#d4a843]">chinh phục</span> giấc mơ Mỹ?</h2>
            <p className="mx-auto mt-3 max-w-xl text-white/50">Bắt đầu hành trình du học Mỹ của bạn ngay hôm nay với lộ trình cá nhân hóa và đội ngũ tư vấn giàu kinh nghiệm.</p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link to="/calculator" className="inline-flex items-center gap-2 rounded-xl bg-[#d4a843] px-6 py-3 font-semibold text-[#0a1628] transition-all hover:bg-[#e0b84f]">
                <Calculator size={18} />Tính chi phí ngay
              </Link>
              <Link to="/ai-chat" className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-6 py-3 font-medium text-white/80 transition-all hover:border-white/20 hover:bg-white/10">
                <MessageCircle size={18} />Hỏi AI Assistant
              </Link>
              <Link to="/contact" className="inline-flex items-center gap-2 rounded-xl border border-white/5 bg-white/[0.02] px-6 py-3 text-sm text-white/50 transition-all hover:border-white/10 hover:text-white/70">
                Liên hệ tư vấn
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
