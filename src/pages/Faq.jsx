import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageCircle, Lightbulb, ChevronDown, ChevronUp, Quote, GraduationCap, BookOpen, Shield, DollarSign, Users, Briefcase } from 'lucide-react'
import { SectionHeader } from '../components/ui'

const faqData = [
  {
    q: 'Ở với người thân có làm tăng nguy cơ rớt Visa không?',
    a: 'Hoàn toàn KHÔNG. Việc ở với người thân là hợp pháp và không phải lý do để từ chối visa. Điều quan trọng là bạn phải chứng minh được mối quan hệ gia đình, nơi ở hợp lý, và đặc biệt là khả năng tài chính đủ trang trải chi phí du học. Nhiều sinh viên thành công khi ở cùng người thân và tập trung vào học tập. Hãy chuẩn bị giấy tờ chứng minh nơi ở và mối quan hệ gia đình rõ ràng.',
    icon: Users,
    color: '#38bdf8',
  },
  {
    q: 'Nên trả lời phỏng vấn visa trong bao lâu?',
    a: 'Lý tưởng nhất là 30 giây - 1 phút cho mỗi câu hỏi. Hãy trả lời ngắn gọn nhưng chi tiết, tập trung vào môn học cụ thể và kế hoạch tương lai thay vì liệt kê chung chung. Ví dụ: thay vì nói "Tôi học Computer Science", hãy nói "Tôi theo đuổi chuyên ngành AI & Machine Learning tại Đại học XYZ vì chương trình này có phòng thí nghiệm Robotics hàng đầu." Viên chức lãnh sự muốn thấy bạn thực sự hiểu về chương trình và có kế hoạch rõ ràng.',
    icon: MessageCircle,
    color: '#d4a843',
  },
  {
    q: 'Cần chuẩn bị những giấy tờ tài chính nào?',
    a: 'Bạn cần chuẩn bị: (1) Sao kê ngân hàng 3-6 tháng gần nhất, (2) Thư bảo trợ tài chính từ người thân kèm giấy tờ chứng minh thu nhập, (3) Hợp đồng lao động và sao kê lương của người bảo trợ, (4) Giấy tờ sở hữu tài sản (sổ đỏ, giấy tờ nhà đất, xe hơi) nếu có. Tổng số dư tài khoản nên đủ trang trải ít nhất 1-2 năm học phí và sinh hoạt phí. Số tiền càng dư dả, hồ sơ càng vững.',
    icon: DollarSign,
    color: '#34d399',
  },
  {
    q: 'Làm thế nào để chứng minh ý định trở về Việt Nam?',
    a: 'Chuẩn bị các bằng chứng về ràng buộc tại Việt Nam: (1) Công việc kinh doanh của gia đình — giấy phép kinh doanh, báo cáo thuế, (2) Sở hữu bất động sản — sổ đỏ, hợp đồng mua bán, (3) Kế hoạch nghề nghiệp cụ thể sau khi tốt nghiệp — thư mời làm việc tiềm năng, dự định khởi nghiệp, (4) Mối quan hệ gia đình chặt chẽ — giấy tờ gia đình, ảnh chụp cùng nhau. Quan trọng nhất: kế hoạch học tập rõ ràng và lý do thuyết phục vì sao bạn sẽ quay về Việt Nam.',
    icon: Shield,
    color: '#fb7185',
  },
  {
    q: 'Tại sao cần tập trung vào môn học cụ thể khi phỏng vấn?',
    a: 'Viên chức lãnh sự muốn thấy bạn thực sự hiểu rõ về chương trình học. Thay vì nói "Tôi thích ngành Kỹ thuật phần mềm", hãy nói "Tôi sẽ theo học khóa Machine Learning với giáo sư ABC, người có 15 năm nghiên cứu về Computer Vision. Tôi đặc biệt quan tâm đến ứng dụng AI trong chẩn đoán y tế, và phòng thí nghiệm của trường có dự án hợp tác với Bệnh viện Đa khoa Massachusetts." Điều này thể hiện bạn đã nghiên cứu kỹ và có động lực học tập rõ ràng, không có ý định định cư bất hợp pháp.',
    icon: BookOpen,
    color: '#a78bfa',
  },
  {
    q: 'Học bổng du học Mỹ có dành cho sinh viên quốc tế không?',
    a: 'CÓ. Nhiều trường đại học Mỹ cấp học bổng cho sinh viên quốc tế dựa trên thành tích học tập (Merit-based) hoặc nhu cầu tài chính (Need-based). Một số học bổng tiêu biểu: Fulbright (toàn phần), Harvard Financial Aid (need-blind), MIT Scholarships, và các học bổng từ các tổ chức tư nhân. Học bổng có thể từ $5,000 đến toàn phần (full-ride). Cạnh tranh cao, yêu cầu GPA 3.5+, SAT 1400+, bài luận xuất sắc, và hoạt động ngoại khóa nổi bật.',
    icon: GraduationCap,
    color: '#f59e0b',
  },
  {
    q: 'I-20 là gì và làm thế nào để nhận được?',
    a: 'I-20 là chứng từ do trường đại học Mỹ cấp, xác nhận bạn đã được nhận vào chương trình học toàn thời gian. Để nhận I-20, bạn cần: (1) Nộp đơn xin nhập học và được chấp nhận, (2) Chứng minh tài chính đủ khả năng chi trả học phí và sinh hoạt phí năm đầu tiên, (3) Nộp bản sao hộ chiếu còn hạn. Sau khi trường xác nhận, họ sẽ gửi I-20 qua đường bưu điện hoặc email. Bạn dùng I-20 để đóng SEVIS fee ($350) và xin visa F-1.',
    icon: BookOpen,
    color: '#38bdf8',
  },
  {
    q: 'Có thể làm thêm khi du học Mỹ không?',
    a: 'Có, nhưng với điều kiện: (1) Trong năm học: được làm tối đa 20 giờ/tuần trong khuôn viên trường (on-campus), (2) Kỳ nghỉ: được làm toàn thời gian 40 giờ/tuần, (3) Ngoài khuôn viên (off-campus): chỉ được làm sau năm học đầu tiên và phải xin phép USCIS qua chương trình CPT (Curricular Practical Training) liên quan trực tiếp đến chương trình học. Vi phạm quy định làm việc có thể dẫn đến mất visa F-1.',
    icon: Briefcase,
    color: '#34d399',
  },
  {
    q: 'Sự khác biệt giữa OPT và CPT là gì?',
    a: 'CPT (Curricular Practical Training): Làm việc trong khi học, phải liên quan trực tiếp đến chương trình đào tạo, thường là thực tập (internship) bắt buộc. CPT được trường cấp phép, không cần USCIS xử lý. OPT (Optional Practical Training): Làm việc sau khi tốt nghiệp, kéo dài 12 tháng (thêm 24 tháng STEM). OPT cần USCIS phê duyệt (EAD card). Cả hai đều là cơ hội vàng để tích lũy kinh nghiệm làm việc tại Mỹ.',
    icon: GraduationCap,
    color: '#fb7185',
  },
]

export default function Faq() {
  const [openFaq, setOpenFaq] = useState(null)

  return (
    <div className="relative py-24">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a1628] via-[#0d1b30] to-[#0a1628]" />

      <div className="relative mx-auto max-w-4xl px-4 sm:px-6">
        <SectionHeader icon={MessageCircle} title="Interview" highlight="Master" desc="Bí quyết phỏng vấn visa và những lầm tưởng cần tránh" iconBg="#fb7185" />

        <div className="space-y-3">
          {faqData.map((item, i) => {
            const open = openFaq === i
            return (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06, duration: 0.4 }}
                className="group overflow-hidden rounded-xl border border-white/10 transition-all duration-300 hover:border-white/20"
                style={{ background: open ? 'linear-gradient(135deg, rgba(251,113,133,0.08), rgba(17,34,64,0.8))' : 'rgba(17,34,64,0.4)' }}
              >
                <button onClick={() => setOpenFaq(open ? null : i)} className="flex w-full items-center gap-3 px-5 py-4 text-left sm:px-6 sm:py-5">
                  <div className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg transition-all ${open ? 'bg-[#fb7185]/20' : 'bg-white/5'}`}>
                    <item.icon size={16} style={{ color: open ? item.color : 'rgba(255,255,255,0.3)' }} />
                  </div>
                  <span className="flex-1 text-sm font-medium text-white sm:text-base">{item.q}</span>
                  <div className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-lg transition-all ${open ? 'bg-[#fb7185]/20 text-[#fb7185]' : 'bg-white/5 text-white/30'}`}>
                    {open ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                  </div>
                </button>
                <AnimatePresence>
                  {open && (
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }} className="overflow-hidden">
                      <div className="border-t border-white/5 px-5 pb-5 pt-4 sm:px-6 sm:pb-6 sm:pt-5">
                        <div className="flex gap-3">
                          <Lightbulb size={18} className="mt-0.5 shrink-0 text-[#d4a843]" />
                          <p className="text-sm leading-relaxed text-white/60 sm:text-base">{item.a}</p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )
          })}
        </div>

        {/* Expert Tips */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.5, duration: 0.5 }} className="mt-8 rounded-2xl border border-[#d4a843]/20 bg-gradient-to-r from-[#d4a843]/5 to-transparent p-6 sm:p-8">
          <div className="flex items-start gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#d4a843]/10">
              <Quote size={22} className="text-[#d4a843]" />
            </div>
            <div>
              <h4 className="mb-2 text-base font-bold text-white">Bí quyết phỏng vấn visa từ chuyên gia</h4>
              <p className="text-sm leading-relaxed text-white/60">
                Trả lời ngắn gọn nhưng chi tiết trong{' '}
                <span className="font-semibold text-white">30 giây - 1 phút</span>.
                Tập trung vào môn học cụ thể và lý do tại sao bạn chọn trường đó,
                thay vì liệt kê tên môn học chung chung. Viên chức lãnh sự muốn
                thấy bạn <span className="font-semibold text-white">thực sự hiểu</span> về
                chương trình mình sẽ theo học. Hãy chuẩn bị trước 3-5 câu trả lời cho các câu hỏi
                phổ biến và tập luyện với bạn bè hoặc người thân.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Quick Stats */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.6 }} className="mt-8 grid gap-3 sm:grid-cols-3">
          {[
            { value: '~5 phút', label: 'Thời gian phỏng vấn trung bình', color: '#38bdf8' },
            { value: '95%+', label: 'Tỷ lệ đậu visa F-1 khi chuẩn bị kỹ', color: '#34d399' },
            { value: '3-5 ngày', label: 'Thời gian xử lý visa thường', color: '#d4a843' },
          ].map((s, i) => (
            <div key={i} className="rounded-xl border border-white/5 bg-white/[0.02] p-4 text-center">
              <div className="text-lg font-bold text-white" style={{ color: s.color }}>{s.value}</div>
              <div className="mt-1 text-xs text-white/40">{s.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}
