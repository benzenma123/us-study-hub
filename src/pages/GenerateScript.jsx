import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  FileText, Facebook, Instagram, Linkedin, Copy, Check,
  Sparkles, ArrowRight, RefreshCcw, Globe
} from 'lucide-react'
import { fadeUp, C } from '../components/ui'

const platforms = [
  { id: 'facebook', label: 'Facebook', icon: Facebook },
  { id: 'tiktok', label: 'TikTok', icon: Globe },
  { id: 'instagram', label: 'Instagram', icon: Instagram },
  { id: 'linkedin', label: 'LinkedIn', icon: Linkedin },
]

const topics = [
  'Tại sao nên du học Mỹ',
  'Cơ hội ngành STEM',
  'Kinh nghiệm phỏng vấn Visa',
  'Chi phí du học Mỹ',
  'Lộ trình học tập & OPT',
  'Câu chuyện cá nhân',
]

const templates = {
  'Tại sao nên du học Mỹ': {
    facebook: '📚 {title}\n\nBạn có biết? Lương khởi điểm ngành STEM tại Mỹ lên tới $80,000 - $120,000/năm! 🇺🇸\n\nSinh viên quốc tế được làm việc tới 36 tháng sau tốt nghiệp nhờ chương trình OPT STEM Extension.\n\n🔹 {school} - {major}\n🔹 Học phí cạnh tranh từ $5,000/năm\n🔹 Cơ hội việc làm toàn cầu\n\n👉 Tìm hiểu thêm tại US Study Hub!\n\n#DuHocMy #STEM #USStudyHub #HocBongMy',
    tiktok: '🇺🇸 BẠN CÓ BIẾT?\n\nLương STEM tại Mỹ: $80K-$120K/năm 🔥\nOPT lên tới 36 tháng cho sinh viên quốc tế!\n\nMình là {name}, học {major} tại {school} 🎓\n\n💡 Tip: Chuẩn bị kỹ phỏng vấn visa\n💡 Chọn trường phù hợp với ngân sách\n💡 Tận dụng cơ hội STEM Extension\n\nTheo dõi để biết thêm nhé! #DuHocMy #STEM #F1Visa',
    instagram: '🎓 CHINH PHỤC GIẤC MƠ MỸ 2026 🇺🇸\n\n⚡ Lương STEM: $80K - $120K/năm\n⚡ OPT: Lên tới 36 tháng\n⚡ Học phí từ $5,000/năm\n\n📍 {school} — {major}\n\n✨ Lời khuyên từ mình:\n"Trả lời phỏng vấn visa ngắn gọn nhưng chi tiết trong 30s-1 phút, tập trung vào môn học cụ thể!"\n\nLưu bài này để dùng sau nhé! 💾\n\n#DuHocMy #DuHoc #STEM #VisaMy #USStudyHub',
    linkedin: '🎓 Hành trình du học Mỹ của tôi\n\nXin chào mọi người, tôi là {name}, hiện đang theo học {major} tại {school}.\n\nSau đây là những điều tôi muốn chia sẻ với các bạn đang ấp ủ giấc mơ du học Mỹ:\n\n📌 Lương ngành STEM tại Mỹ khởi điểm từ $80,000 - $120,000/năm\n📌 Sinh viên được làm việc tới 36 tháng sau tốt nghiệp (OPT)\n📌 Chi phí linh hoạt từ community college đến đại học tư thục\n\n💡 Bí quyết: Hãy chuẩn bị câu chuyện của riêng bạn cho buổi phỏng vấn visa - sự chân thành và cụ thể sẽ tạo khác biệt!\n\n#DuHocMy #STEM #CareerGrowth #GlobalEducation {hashtags}',
  },
  default: {
    facebook: '📚 {title}\n\n{content}\n\n🔹 {school} - {major}\n🔹 {detail}\n\n👉 Tìm hiểu thêm tại US Study Hub!\n\n#DuHocMy #USStudyHub',
    tiktok: '🇺🇸 {title}\n\n{content}\n\nMình là {name}, học {major} tại {school} 🎓\n\n{detail}\n\nTheo dõi để biết thêm nhé! #DuHocMy',
    instagram: '🎓 {title} 🇺🇸\n\n📍 {school} — {major}\n\n{content}\n\n✨ {detail}\n\nLưu bài này để dùng sau nhé! 💾\n\n#DuHocMy #DuHoc #USStudyHub',
    linkedin: '🎓 {title}\n\nXin chào mọi người, tôi là {name}, hiện đang theo học {major} tại {school}.\n\n{content}\n\n📌 {detail}\n\n#DuHocMy #CareerGrowth {hashtags}',
  },
}

export default function GenerateScript() {
  const [platform, setPlatform] = useState('facebook')
  const [topic, setTopic] = useState(topics[0])
  const [name, setName] = useState('')
  const [school, setSchool] = useState('')
  const [major, setMajor] = useState('')
  const [detail, setDetail] = useState('')
  const [script, setScript] = useState('')
  const [copied, setCopied] = useState(false)

  const generate = () => {
    const tmpl = (templates[topic] || templates.default)[platform] || templates.default[platform]
    const title = topic
    const content = detail || 'Khám phá cơ hội du học Mỹ với lộ trình rõ ràng và chiến lược thông minh.'
    const hashtags = '#DuHocMy #STEM #USStudyHub'
    setScript(
      tmpl
        .replace(/{title}/g, title)
        .replace(/{name}/g, name || 'Tên của bạn')
        .replace(/{school}/g, school || 'Tên trường')
        .replace(/{major}/g, major || 'Chuyên ngành')
        .replace(/{detail}/g, detail || '')
        .replace(/{content}/g, content)
        .replace(/{hashtags}/g, hashtags)
        .replace(/\n{3,}/g, '\n\n')
        .trim()
    )
  }

  const copy = async () => {
    await navigator.clipboard.writeText(script)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="relative py-24">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a1628] via-[#0d1b30] to-[#0a1628]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(56,189,248,0.04),transparent_60%)]" />

      <div className="relative mx-auto max-w-5xl px-4 sm:px-6">
        <motion.div {...fadeUp} className="mb-14 text-center">
          <div className="mb-4 inline-flex rounded-xl bg-[#38bdf8]/10 p-3">
            <FileText size={28} className="text-[#38bdf8]" />
          </div>
          <h2 className="text-3xl font-bold sm:text-4xl">
            Tạo <span className="text-[#38bdf8]">bài viết</span> chia sẻ
          </h2>
          <p className="mt-3 text-white/50">
            Tạo nội dung chia sẻ về du học Mỹ lên mạng xã hội chỉ với vài bước
          </p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-5">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6 rounded-2xl border border-white/10 bg-[#112240]/60 p-6 backdrop-blur-sm lg:col-span-3"
          >
            <div>
              <label className="mb-3 block text-sm font-medium text-white/70">Chọn nền tảng</label>
              <div className="grid grid-cols-4 gap-2">
                {platforms.map((p) => {
                  const active = platform === p.id
                  return (
                    <button
                      key={p.id}
                      onClick={() => setPlatform(p.id)}
                      className="flex flex-col items-center gap-1.5 rounded-xl border p-3 transition-all"
                      style={{
                        borderColor: active ? '#38bdf8' : 'rgba(255,255,255,0.1)',
                        background: active ? 'rgba(56,189,248,0.1)' : 'rgba(255,255,255,0.03)',
                      }}
                    >
                      <p.icon size={20} style={{ color: active ? '#38bdf8' : 'rgba(255,255,255,0.4)' }} />
                      <span className="text-xs" style={{ color: active ? '#38bdf8' : 'rgba(255,255,255,0.6)' }}>
                        {p.label}
                      </span>
                    </button>
                  )
                })}
              </div>
            </div>

            <div>
              <label className="mb-3 block text-sm font-medium text-white/70">Chọn chủ đề</label>
              <div className="flex flex-wrap gap-2">
                {topics.map((t) => {
                  const active = topic === t
                  return (
                    <button
                      key={t}
                      onClick={() => setTopic(t)}
                      className="rounded-lg border px-3 py-1.5 text-xs transition-all"
                      style={{
                        borderColor: active ? '#d4a843' : 'rgba(255,255,255,0.1)',
                        color: active ? '#d4a843' : 'rgba(255,255,255,0.6)',
                        background: active ? 'rgba(212,168,67,0.1)' : 'transparent',
                      }}
                    >
                      {t}
                    </button>
                  )
                })}
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="mb-1.5 block text-xs text-white/50">Tên của bạn</label>
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="VD: Nguyễn Văn A"
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white outline-none transition-all placeholder:text-white/20 focus:border-[#d4a843]/50"
                />
              </div>
              <div>
                <label className="mb-1.5 block text-xs text-white/50">Trường đang học</label>
                <input
                  value={school}
                  onChange={(e) => setSchool(e.target.value)}
                  placeholder="VD: Đại học XYZ"
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white outline-none transition-all placeholder:text-white/20 focus:border-[#d4a843]/50"
                />
              </div>
              <div>
                <label className="mb-1.5 block text-xs text-white/50">Chuyên ngành</label>
                <input
                  value={major}
                  onChange={(e) => setMajor(e.target.value)}
                  placeholder="VD: Computer Science"
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white outline-none transition-all placeholder:text-white/20 focus:border-[#d4a843]/50"
                />
              </div>
              <div className="sm:col-span-2">
                <label className="mb-1.5 block text-xs text-white/50">Nội dung / Chi tiết bạn muốn chia sẻ</label>
                <textarea
                  value={detail}
                  onChange={(e) => setDetail(e.target.value)}
                  rows={3}
                  placeholder="VD: Kinh nghiệm phỏng vấn visa, lời khuyên cho tân sinh viên..."
                  className="w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white outline-none transition-all placeholder:text-white/20 focus:border-[#d4a843]/50"
                />
              </div>
            </div>

            <button
              onClick={generate}
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#38bdf8] px-4 py-3 font-semibold text-[#0a1628] transition-all hover:bg-[#4fc8ff]"
            >
              <Sparkles size={18} />
              Tạo bài viết
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2"
          >
            <div className="sticky top-24 rounded-2xl border border-[#38bdf8]/20 bg-gradient-to-br from-[#1a2d4a] to-[#0a1628] p-6 shadow-xl shadow-black/20">
              <div className="mb-4 flex items-center justify-between">
                <h3 className="text-sm font-semibold text-white/60">
                  {platform.charAt(0).toUpperCase() + platform.slice(1)} Post
                </h3>
                {script && (
                  <button
                    onClick={copy}
                    className="flex items-center gap-1.5 rounded-lg bg-white/5 px-3 py-1.5 text-xs text-white/50 transition-all hover:bg-white/10"
                  >
                    {copied ? <Check size={14} className="text-[#34d399]" /> : <Copy size={14} />}
                    {copied ? 'Đã copy' : 'Copy'}
                  </button>
                )}
              </div>

              {script ? (
                <motion.div
                  key={script}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="rounded-xl bg-white/5 p-4"
                >
                  <pre className="whitespace-pre-wrap text-sm leading-relaxed text-white/80 font-sans">
                    {script}
                  </pre>
                </motion.div>
              ) : (
                <div className="flex flex-col items-center justify-center rounded-xl bg-white/5 py-16 text-center">
                  <FileText size={40} className="mb-3 text-white/10" />
                  <p className="text-sm text-white/30">
                    Điền thông tin và nhấn "Tạo bài viết"
                  </p>
                  <p className="mt-1 text-xs text-white/20">
                    Nội dung sẽ hiển thị tại đây
                  </p>
                </div>
              )}

              {script && (
                <button
                  onClick={generate}
                  className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white/60 transition-all hover:bg-white/10"
                >
                  <RefreshCcw size={14} />
                  Tạo lại
                </button>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
