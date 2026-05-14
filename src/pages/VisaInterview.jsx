import { useState } from 'react'
import { motion } from 'framer-motion'
import { MessageCircle, ChevronDown, CheckCircle, FileCheck, AlertTriangle, Lightbulb, Globe, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { SectionHeader, fadeUp } from '../components/ui'

const steps = [
  { step: 1, title: 'Chào hỏi & nộp hồ sơ', desc: 'Chào nhân viên lãnh sự bằng tiếng Anh. Đưa hộ chiếu, I-20, xác nhận DS-160 và ảnh thẻ.', tips: ['Nói "Good morning/afternoon, sir/ma\'am"', 'Giữ thái độ tự tin, lịch sự', 'Đặt hồ sơ lên quầy ngay khi đến lượt'] },
  { step: 2, title: 'Mục đích du học', desc: 'Giải thích lý do chọn trường và ngành học. Thể hiện kiến thức về chương trình đào tạo.', tips: ['Tìm hiểu kỹ về trường trước khi đi', 'Nói rõ môn học và giáo sư bạn ấn tượng', 'Liên hệ ngành học với mục tiêu nghề nghiệp'] },
  { step: 3, title: 'Khả năng tài chính', desc: 'Chứng minh đủ khả năng chi trả học phí và sinh hoạt phí. Xuất trình sao kê tài khoản.', tips: ['Chuẩn bị sổ tiết kiệm ít nhất 3 tháng', 'Mang giấy tờ thu nhập của bố mẹ', 'Số tiền phải đủ học phí + sinh hoạt phí 1 năm'] },
  { step: 4, title: 'Dự định sau tốt nghiệp', desc: 'Thể hiện ý định trở về Việt Nam sau khi học xong. Đây là yếu tố quan trọng nhất.', tips: ['Nói rõ kế hoạch nghề nghiệp tại VN', 'Đề cập gia đình, công việc, tài sản tại VN', 'Không nói ý định ở lại Mỹ làm việc dài hạn'] },
]

const questions = [
  { q: 'Tại sao bạn chọn trường này?', a: 'Nghiên cứu kỹ chương trình học, giáo sư, cơ sở vật chất. Đưa ra lý do cụ thể: "Trường có chương trình AI mạnh với giáo sư X, phòng lab Y...", "Cơ hội thực tập tại các công ty trong khu vực..."' },
  { q: 'Tại sao bạn chọn ngành này?', a: 'Kể câu chuyện cá nhân: "Tôi từng tham gia cuộc thi robocon năm lớp 11 và nhận ra đam mê của mình là AI..." hoặc "Việt Nam đang thiếu hụt nhân lực cybersecurity, tôi muốn học để về phát triển lĩnh vực này..."' },
  { q: 'Ai sẽ tài trợ cho việc học của bạn?', a: '"Bố mẹ tôi sẽ tài trợ. Họ làm việc tại... với thu nhập... Gia đình đã tiết kiệm cho việc học của tôi từ nhiều năm nay." Đưa ra giấy tờ chứng minh.' },
  { q: 'Kế hoạch sau khi tốt nghiệp?', a: '"Tôi sẽ trở về Việt Nam làm việc. Công ty X đã ngỏ ý muốn tuyển dụng tôi sau khi tốt nghiệp. Ngành này đang phát triển mạnh tại Việt Nam..."' },
  { q: 'Bạn từng đến Mỹ chưa?', a: 'Nếu có: "Tôi từng du lịch Mỹ năm X, ấn tượng với văn hóa và con người nơi đây." Nếu chưa: "Đây là lần đầu tiên, tôi rất hào hứng được trải nghiệm môi trường học thuật tại Mỹ."' },
  { q: 'Bạn có người thân ở Mỹ không?', a: 'Trả lời trung thực. Nếu có, nói rõ mối quan hệ và khẳng định họ không liên quan đến kế hoạch của bạn. Nếu không, nói đơn giản "No, all my family is in Vietnam."' },
]

export default function VisaInterview() {
  const [openQ, setOpenQ] = useState(null)

  return (
    <div className="relative py-24">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a1628] via-[#0d1b30] to-[#0a1628]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(56,189,248,0.05),transparent_50%)]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeader icon={MessageCircle} title="Mô phỏng" highlight="Phỏng vấn Visa" desc="Luyện tập phỏng vấn visa F-1 với các câu hỏi thực tế và tips chi tiết" iconBg="#38bdf8" />

        {/* Steps */}
        <div className="mb-16 grid gap-4 md:grid-cols-4">
          {steps.map((s, i) => (
            <motion.div key={s.step} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="rounded-xl border border-white/10 bg-gradient-to-b from-[#112240] to-[#0a1628] p-5">
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-[#38bdf8]/20 text-sm font-bold text-[#38bdf8]">{s.step}</div>
              <h3 className="mb-2 text-sm font-bold text-white">{s.title}</h3>
              <p className="mb-4 text-xs leading-relaxed text-white/50">{s.desc}</p>
              <div className="space-y-1.5">
                {s.tips.map((t, j) => (
                  <div key={j} className="flex items-start gap-2">
                    <CheckCircle size={12} className="mt-0.5 shrink-0 text-[#34d399]" />
                    <span className="text-xs text-white/40">{t}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tips */}
        <motion.div {...fadeUp} className="mb-16 grid gap-4 md:grid-cols-3">
          <div className="rounded-xl border border-[#34d399]/20 bg-[#34d399]/5 p-4">
            <Lightbulb size={20} className="mb-2 text-[#34d399]" />
            <h4 className="mb-1 text-sm font-semibold text-white">Nên làm</h4>
            <ul className="space-y-1 text-xs text-white/50">
              <li>• Trả lời ngắn gọn, đúng trọng tâm</li>
              <li>• Mặc trang phục lịch sự (business casual)</li>
              <li>• Mang đầy đủ hồ sơ gốc</li>
              <li>• Nói tiếng Anh rõ ràng, tự tin</li>
              <li>• Giữ giao tiếp bằng mắt</li>
            </ul>
          </div>
          <div className="rounded-xl border border-[#fb7185]/20 bg-[#fb7185]/5 p-4">
            <AlertTriangle size={20} className="mb-2 text-[#fb7185]" />
            <h4 className="mb-1 text-sm font-semibold text-white">Không nên</h4>
            <ul className="space-y-1 text-xs text-white/50">
              <li>• Nói dối hoặc che giấu thông tin</li>
              <li>• Trả lời dài dòng, lan man</li>
              <li>• Nói ý định định cư/ở lại Mỹ</li>
              <li>• Mang điện thoại vào phòng phỏng vấn</li>
              <li>• Tỏ ra căng thẳng, lo lắng</li>
            </ul>
          </div>
          <div className="rounded-xl border border-[#d4a843]/20 bg-[#d4a843]/5 p-4">
            <FileCheck size={20} className="mb-2 text-[#d4a843]" />
            <h4 className="mb-1 text-sm font-semibold text-white">Hồ sơ cần mang</h4>
            <ul className="space-y-1 text-xs text-white/50">
              <li>• Hộ chiếu (còn hạn 6 tháng)</li>
              <li>• I-20 (có chữ ký)</li>
              <li>• Xác nhận DS-160 (có mã vạch)</li>
              <li>• Biên lai SEVIS I-901</li>
              <li>• Sao kê tài chính & sổ tiết kiệm</li>
            </ul>
          </div>
        </motion.div>

        {/* Common Questions */}
        <motion.div {...fadeUp}>
          <h3 className="mb-6 text-xl font-bold text-white">Câu hỏi thường gặp & Cách trả lời</h3>
          <div className="space-y-3">
            {questions.map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="overflow-hidden rounded-xl border border-white/10 bg-white/[0.02]">
                <button onClick={() => setOpenQ(openQ === i ? null : i)} className="flex w-full items-center justify-between p-4 text-left transition-all hover:bg-white/[0.02]">
                  <span className="text-sm font-medium text-white">Q: {item.q}</span>
                  <ChevronDown size={16} className={`shrink-0 text-white/30 transition-transform ${openQ === i ? 'rotate-180' : ''}`} />
                </button>
                {openQ === i && (
                  <div className="border-t border-white/5 px-4 py-3">
                    <div className="flex items-start gap-2">
                      <ArrowRight size={14} className="mt-0.5 shrink-0 text-[#34d399]" />
                      <p className="text-sm leading-relaxed text-white/60">{item.a}</p>
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div {...fadeUp} className="mt-12 text-center">
          <Link to="/visa" className="inline-flex items-center gap-2 rounded-xl bg-[#d4a843] px-6 py-3 font-semibold text-[#0a1628] transition-all hover:bg-[#e0b84f]">
            <Globe size={18} />Xem chi tiết Visa & Tuyển sinh<ArrowRight size={16} />
          </Link>
        </motion.div>
      </div>
    </div>
  )
}
