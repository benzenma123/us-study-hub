import { motion } from 'framer-motion'
import { Rocket, Brain, Shield, BarChart3, HeartPulse, Clock, TrendingUp, DollarSign, GraduationCap, ArrowRight, CheckCircle, BookOpen, Briefcase, Globe } from 'lucide-react'
import { Link } from 'react-router-dom'
import { SectionHeader, fadeUp } from '../components/ui'

const stemFields = [
  { icon: Brain, title: 'AI & Machine Learning', desc: 'Ngành hot nhất 2025 với nhu cầu nhân lực toàn cầu tăng vọt. Lương khởi điểm từ $100,000+. Cơ hội việc làm tại các Big Tech: Google, Meta, OpenAI, Anthropic.', color: '#38bdf8', growth: '+35%', salary: '$100K-$200K' },
  { icon: Shield, title: 'Cybersecurity', desc: 'Tăng trưởng >30% mỗi năm. Bảo vệ hạ tầng số trước các mối đe dọa an ninh mạng. Nhu cầu tuyển dụng vượt cung gấp 3 lần.', color: '#34d399', growth: '+32%', salary: '$90K-$160K' },
  { icon: BarChart3, title: 'Data Science', desc: 'Xương sống của nền kinh tế dữ liệu. Kỹ năng phân tích big data được săn đón mọi ngành từ tài chính đến y tế.', color: '#d4a843', growth: '+28%', salary: '$85K-$150K' },
  { icon: HeartPulse, title: 'Healthcare & Biotech', desc: 'Ngành y tế kết hợp công nghệ sinh học. Đầu tư khổng lồ vào nghiên cứu thuốc mới, gene therapy và medical devices.', color: '#fb7185', growth: '+25%', salary: '$80K-$180K' },
]

const salaryData = [
  { role: 'AI/ML Engineer', entry: '$110K', mid: '$150K', senior: '$200K+', color: '#38bdf8' },
  { role: 'Cybersecurity Analyst', entry: '$85K', mid: '$120K', senior: '$165K', color: '#34d399' },
  { role: 'Data Scientist', entry: '$90K', mid: '$130K', senior: '$175K', color: '#d4a843' },
  { role: 'Biotech Researcher', entry: '$75K', mid: '$110K', senior: '$155K', color: '#fb7185' },
  { role: 'Software Engineer', entry: '$95K', mid: '$140K', senior: '$190K', color: '#a78bfa' },
  { role: 'Cloud Architect', entry: '$100K', mid: '$145K', senior: '$195K', color: '#f59e0b' },
]

const topSchools = [
  { name: 'Massachusetts Institute of Technology', program: 'Computer Science & AI', rank: '#1 STEM', color: '#38bdf8' },
  { name: 'Stanford University', program: 'Computer Science & Engineering', rank: '#2 STEM', color: '#34d399' },
  { name: 'California Institute of Technology', program: 'Engineering & Applied Science', rank: '#3 STEM', color: '#d4a843' },
  { name: 'Carnegie Mellon University', program: 'Robotics & AI', rank: '#4 STEM', color: '#fb7185' },
  { name: 'Georgia Institute of Technology', program: 'Cybersecurity & Data Science', rank: '#5 STEM', color: '#a78bfa' },
  { name: 'University of Illinois Urbana-Champaign', program: 'Computer Engineering', rank: '#6 STEM', color: '#f59e0b' },
]

const optSteps = [
  { step: '1', title: 'Tốt nghiệp', desc: 'Hoàn thành chương trình học. Nộp đơn OPT lên DHS trong vòng 60 ngày sau ngày tốt nghiệp.', color: '#38bdf8' },
  { step: '2', title: 'Nhận EAD', desc: 'Chờ USCIS xử lý và cấp Giấy phép Lao động (EAD). Thời gian xử lý 3-5 tháng.', color: '#d4a843' },
  { step: '3', title: '12 tháng OPT', desc: 'Làm việc toàn thời gian trong 12 tháng. Báo cáo định kỳ cho DHS qua SEVIS portal.', color: '#34d399' },
  { step: '4', title: 'Gia hạn STEM', desc: 'Nếu thuộc khối STEM, gia hạn thêm 24 tháng. Tổng thời gian làm việc lên tới 36 tháng.', color: '#fb7185' },
  { step: '5', title: 'Chuyển đổi visa', desc: 'Nếu được bảo lãnh, chuyển từ F-1 sang H-1B hoặc Green Card thông qua công ty tuyển dụng.', color: '#a78bfa' },
]

export default function Stem() {
  return (
    <div className="relative py-24">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a1628] via-[#0d1b30] to-[#0a1628]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(52,211,153,0.05),transparent_50%)]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeader icon={Rocket} title="Career &" highlight="STEM" desc="Nhóm ngành HOT và lộ trình OPT cho sinh viên quốc tế" iconBg="#34d399" />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {stemFields.map((f, i) => (
            <motion.div key={f.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1, duration: 0.5 }} whileHover={{ y: -6, transition: { duration: 0.2 } }} className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-[#112240] to-[#0a1628] p-6 transition-all duration-300 hover:border-white/20 hover:shadow-xl hover:shadow-black/20">
              <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full opacity-10 blur-2xl transition-all duration-500 group-hover:opacity-20 group-hover:scale-150" style={{ background: f.color }} />
              <div className="mb-4 inline-flex rounded-xl p-3" style={{ background: `${f.color}20` }}><f.icon size={24} style={{ color: f.color }} /></div>
              <div className="mb-1 inline-block rounded-full px-2.5 py-0.5 text-xs font-bold" style={{ background: `${f.color}20`, color: f.color }}>{f.growth}</div>
              <div className="mb-1 inline-block rounded-full px-2.5 py-0.5 text-xs font-medium text-white/40" style={{ background: 'rgba(255,255,255,0.05)' }}>{f.salary}</div>
              <h3 className="mb-2 mt-2 text-base font-bold text-white">{f.title}</h3>
              <p className="text-sm leading-relaxed text-white/50">{f.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Salary Table */}
        <motion.div {...fadeUp} className="mt-12 rounded-2xl border border-white/10 bg-[#112240]/60 p-6 backdrop-blur-sm sm:p-8">
          <div className="mb-6 flex items-center gap-3">
            <DollarSign size={22} className="text-[#d4a843]" />
            <h3 className="text-xl font-bold text-white">Thang lương ngành STEM 2025</h3>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-white/5">
                  <th className="py-3 pr-4 font-semibold text-white/60">Vị trí</th>
                  <th className="py-3 pr-4 font-semibold text-white/40">Khởi điểm</th>
                  <th className="py-3 pr-4 font-semibold text-white/40">Trung cấp</th>
                  <th className="py-3 font-semibold text-white/40">Cao cấp</th>
                </tr>
              </thead>
              <tbody>
                {salaryData.map((s, i) => (
                  <motion.tr key={s.role} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="border-b border-white/5 last:border-0 hover:bg-white/[0.02]">
                    <td className="py-3 pr-4">
                      <div className="flex items-center gap-2">
                        <div className="h-2 w-2 rounded-full" style={{ background: s.color }} />
                        <span className="font-medium text-white">{s.role}</span>
                      </div>
                    </td>
                    <td className="py-3 pr-4 text-white/60">{s.entry}</td>
                    <td className="py-3 pr-4 text-white/60">{s.mid}</td>
                    <td className="py-3 font-semibold text-[#d4a843]">{s.senior}</td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-4 rounded-xl border border-[#34d399]/20 bg-[#34d399]/5 p-3 text-center text-xs text-white/50">
            Dữ liệu tổng hợp từ Glassdoor, Levels.fyi và Bureau of Labor Statistics 2025
          </div>
        </motion.div>

        {/* OPT Timeline */}
        <motion.div {...fadeUp} className="mt-12 rounded-2xl border border-white/10 bg-gradient-to-r from-[#112240] to-[#0d1b30] p-6 sm:p-8">
          <div className="mb-6 flex items-center gap-3">
            <Clock size={22} className="text-[#d4a843]" />
            <h3 className="text-xl font-bold text-white">Lộ trình OPT – Optional Practical Training</h3>
          </div>

          <div className="relative">
            <div className="absolute bottom-0 left-6 top-0 w-0.5 bg-gradient-to-b from-[#d4a843]/40 to-transparent" />
            <div className="space-y-6">
              {optSteps.map((s, i) => (
                <motion.div key={s.step} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="relative flex items-start gap-4">
                  <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-xl text-sm font-bold" style={{ background: `${s.color}20`, color: s.color }}>{s.step}</div>
                  <div className="flex-1 pt-1">
                    <h4 className="text-sm font-semibold text-white">{s.title}</h4>
                    <p className="mt-1 text-sm leading-relaxed text-white/50">{s.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="mt-6 rounded-xl border border-[#34d399]/20 bg-[#34d399]/5 p-4 text-center">
            <p className="text-sm text-white/70">
              <span className="font-bold text-[#34d399]">Tổng thời gian OPT tối đa:</span> 12 tháng (gốc) + 24 tháng (STEM) ={' '}
              <span className="font-semibold text-white">36 tháng làm việc tại Mỹ</span>
            </p>
          </div>
        </motion.div>

        {/* Top Schools */}
        <motion.div {...fadeUp} className="mt-12">
          <div className="mb-6 text-center">
            <div className="mb-4 inline-flex rounded-xl bg-[#d4a843]/10 p-3"><GraduationCap size={28} className="text-[#d4a843]" /></div>
            <h2 className="text-3xl font-bold sm:text-4xl">Top <span className="text-[#d4a843]">STEM Schools</span></h2>
            <p className="mt-3 text-white/50">Các trường đại học hàng đầu thế giới về Khoa học, Công nghệ, Kỹ thuật và Toán học</p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {topSchools.map((s, i) => (
              <motion.div key={s.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="group flex items-center gap-4 rounded-xl border border-white/5 bg-white/[0.02] p-5 transition-all hover:border-white/10">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg text-lg font-bold" style={{ background: `${s.color}20`, color: s.color }}>{s.rank.replace('#', '')}</div>
                <div className="flex-1">
                  <div className="text-sm font-semibold text-white">{s.name}</div>
                  <div className="mt-1 text-xs text-white/40">{s.program}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div {...fadeUp} className="mt-12 text-center">
          <p className="mb-4 text-sm text-white/40">Bạn muốn khám phá thêm về cơ hội du học Mỹ?</p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link to="/calculator" className="inline-flex items-center gap-2 rounded-xl bg-[#d4a843] px-6 py-3 font-semibold text-[#0a1628] transition-all hover:bg-[#e0b84f]">
              <DollarSign size={18} />Tính chi phí
            </Link>
            <Link to="/generate" className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-6 py-3 font-medium text-white/80 transition-all hover:border-white/20 hover:bg-white/10">
              <Globe size={18} />Tạo bài viết chia sẻ
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
