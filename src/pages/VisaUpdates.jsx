import { motion } from 'framer-motion'
import { ScrollText, AlertTriangle, Laptop, Eye, FileCheck, Calendar, ArrowRight, ExternalLink, BookCheck, Shield, Globe } from 'lucide-react'
import { Link } from 'react-router-dom'
import { SectionHeader, Bentocard, stagger, fadeUp, C } from '../components/ui'

const timeline = [
  { date: 'Tháng 3-5/2025', title: 'Chuẩn bị hồ sơ', desc: 'Hoàn thiện bài luận, thư giới thiệu, bảng điểm. Đăng ký SAT/ACT nếu cần.', color: '#38bdf8' },
  { date: 'Tháng 6-8/2025', title: 'Nộp đơn sớm (Early Action)', desc: 'Nhiều trường Ivy League có hạn nộp EA vào tháng 11. Chuẩn bị sớm giúp tăng tỷ lệ trúng tuyển.', color: '#d4a843' },
  { date: 'Tháng 9-12/2025', title: 'Hạn nộp Regular Decision', desc: 'Hầu hết trường đóng hồ sơ vào tháng 12-1. Đảm bảo bài luận cá nhân hóa và kiểm tra kỹ.', color: '#34d399' },
  { date: 'Tháng 1-3/2026', title: 'Kết quả & Visa', desc: 'Nhận thư mời nhập học, xin I-20, đóng SEVIS và đặt lịch phỏng vấn visa F-1.', color: '#fb7185' },
]

const resources = [
  { title: 'Study in the States — DHS', desc: 'Cổng thông tin chính thống về quy định F-1, OPT, CPT từ Bộ An ninh Nội địa Hoa Kỳ.', url: 'https://studyinthestates.dhs.gov', color: '#38bdf8' },
  { title: 'Travel.State.Gov — DOS', desc: 'Thông tin visa du học từ Bộ Ngoại giao Hoa Kỳ. Cập nhật phí, lịch hẹn và yêu cầu mới nhất.', url: 'https://travel.state.gov', color: '#34d399' },
  { title: 'ICE SEVIS — I-20 & OPT', desc: 'Hệ thống SEVIS của Sở Di trú và Hải quan. Quản lý hồ sơ I-20, gia hạn OPT, chuyển trường.', url: 'https://www.ice.gov/sevis', color: '#d4a843' },
  { title: 'College Board — SAT/ACT', desc: 'Đăng ký thi, gửi điểm và tra cứu lịch thi SAT/ACT. Thông tin về yêu cầu điểm chuẩn hóa.', url: 'https://www.collegeboard.org', color: '#fb7185' },
]

export default function VisaUpdates() {
  return (
    <div className="relative py-24">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a1628] via-[#0d1b30] to-[#0a1628]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeader icon={ScrollText} title="Cập nhật" highlight="Visa & Tuyển sinh" desc="Những thay đổi quan trọng bạn cần biết cho mùa tuyển sinh 2025-2026" iconBg="#38bdf8" />

        <motion.div variants={{ hidden: {}, show: { transition: { staggerChildren: 0.12 } } }} initial="hidden" whileInView="show" viewport={{ once: true }} className="grid gap-5 md:grid-cols-3">
          <Bentocard icon={FileCheck} title="SAT/ACT trở lại mạnh mẽ" desc="Các trường Ivy League bao gồm Harvard, Yale, Brown, MIT và Dartmouth đã khôi phục yêu cầu điểm thi chuẩn hóa. Thí sinh cần chuẩn bị kỹ lưỡng cho kỳ thi SAT/ACT để tăng lợi thế cạnh tranh." badge="Yêu cầu bắt buộc" color="#38bdf8" accent="Kiểm tra yêu cầu từng trường" />
          <Bentocard icon={AlertTriangle} title="Quy định Visa mới" desc="Bắt buộc khai báo tài khoản Mạng xã hội công khai khi xin visa. Cảnh báo rủi ro nghiêm trọng khi tham gia biểu tình hoặc các hoạt động chính trị không được phép. Hồ sơ cần minh bạch và nhất quán." badge="Bắt buộc 2025" color="#fb7185" accent="Khai báo trung thực" />
          <Bentocard icon={Laptop} title="Chính sách AI trong tuyển sinh" desc="Caltech & Georgia Tech cho phép dùng AI hỗ trợ ý tưởng nhưng giọng văn bài luận phải là 'duy nhất' của thí sinh. Các trường sử dụng AI detection để phát hiện bài viết không nguyên bản." badge="Quy định mới" color="#34d399" accent="Viết bài luận bằng giọng văn riêng" />
          <div className="md:col-span-3">
            <Bentocard icon={Eye} title="Đánh giá toàn diện (Holistic Admission)" desc="56% trường đại học Mỹ ưu tiên hoạt động ngoại khóa và bài luận cá nhân hơn điểm số đơn thuần. Hồ sơ cần thể hiện câu chuyện độc đáo, khả năng lãnh đạo, và tác động đến cộng đồng. Đây là cơ hội để bạn tỏa sáng ngoài điểm GPA và SAT. Các yếu tố được xem xét: hoạt động tình nguyện, câu lạc bộ, thể thao, nghiên cứu khoa học, kỹ năng lãnh đạo, và bài luận cá nhân." badge="Xu hướng 2025" color="#d4a843" accent="Xây dựng hồ sơ ngoại khóa chất lượng" />
          </div>
        </motion.div>

        {/* Timeline */}
        <motion.div {...fadeUp} className="mt-16">
          <div className="mb-8 text-center">
            <div className="mb-4 inline-flex rounded-xl bg-[#d4a843]/10 p-3"><Calendar size={28} className="text-[#d4a843]" /></div>
            <h2 className="text-3xl font-bold sm:text-4xl">Timeline <span className="text-[#d4a843]">Tuyển sinh</span></h2>
            <p className="mt-3 text-white/50">Lộ trình chi tiết cho mùa tuyển sinh 2025-2026</p>
          </div>

          <div className="relative">
            <div className="absolute bottom-0 left-8 top-0 hidden w-0.5 bg-gradient-to-b from-[#d4a843]/50 to-transparent md:block" />
            <div className="space-y-6">
              {timeline.map((t, i) => (
                <motion.div key={t.title} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="relative md:flex md:gap-6">
                  <div className="hidden md:block md:w-32">
                    <div className="sticky top-24 text-sm font-semibold" style={{ color: t.color }}>{t.date}</div>
                  </div>
                  <div className="relative flex items-start gap-4 rounded-xl border border-white/5 bg-white/[0.02] p-4 transition-all hover:border-white/10 md:flex-1">
                    <div className="absolute -left-2 top-6 hidden h-4 w-4 rounded-full border-2 md:block" style={{ background: C.navy, borderColor: t.color }} />
                    <div className="mb-1 flex md:hidden">
                      <span className="text-xs font-semibold" style={{ color: t.color }}>{t.date}</span>
                    </div>
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg text-sm font-bold" style={{ background: `${t.color}20`, color: t.color }}>{i + 1}</div>
                    <div>
                      <h4 className="text-sm font-semibold text-white">{t.title}</h4>
                      <p className="mt-1 text-sm leading-relaxed text-white/50">{t.desc}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Resources */}
        <motion.div {...fadeUp} className="mt-16">
          <div className="mb-8 text-center">
            <div className="mb-4 inline-flex rounded-xl bg-[#38bdf8]/10 p-3"><BookCheck size={28} className="text-[#38bdf8]" /></div>
            <h2 className="text-3xl font-bold sm:text-4xl">Nguồn <span className="text-[#38bdf8]">chính thống</span></h2>
            <p className="mt-3 text-white/50">Tra cứu thông tin trực tiếp từ các cơ quan chính phủ Hoa Kỳ</p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {resources.map((r, i) => (
              <motion.a key={r.title} href={r.url} target="_blank" rel="noopener noreferrer" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="group flex items-start gap-4 rounded-xl border border-white/5 bg-white/[0.02] p-5 transition-all hover:border-white/10">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl" style={{ background: `${r.color}15` }}><Globe size={22} style={{ color: r.color }} /></div>
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-semibold text-white">{r.title}</span>
                    <ExternalLink size={12} className="text-white/20 transition-all group-hover:text-[#d4a843]" />
                  </div>
                  <p className="mt-1 text-xs leading-relaxed text-white/40">{r.desc}</p>
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div {...fadeUp} className="mt-12 text-center">
          <Link to="/faq" className="inline-flex items-center gap-2 rounded-xl bg-[#d4a843] px-6 py-3 font-semibold text-[#0a1628] transition-all hover:bg-[#e0b84f]">
            <Shield size={18} />Xem Interview FAQ<ArrowRight size={16} />
          </Link>
        </motion.div>
      </div>
    </div>
  )
}
