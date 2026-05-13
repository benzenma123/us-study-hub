import { motion } from 'framer-motion'
import { Mail, Phone, Github, MapPin, Send, MessageCircle } from 'lucide-react'
import { Link } from 'react-router-dom'
import { fadeUp, C } from '../components/ui'

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'haidangchauduc@gmail.com',
    href: 'mailto:haidangchauduc@gmail.com',
    color: '#38bdf8',
  },
  {
    icon: Phone,
    label: 'Điện thoại',
    value: '+1 (360) 878-0058',
    href: 'tel:+13608780058',
    color: '#34d399',
  },
  {
    icon: Github,
    label: 'GitHub',
    value: 'github.com/benzenma123',
    href: 'https://github.com/benzenma123',
    color: '#d4a843',
  },
  {
    icon: MapPin,
    label: 'Địa chỉ',
    value: 'Unknown',
    href: null,
    color: '#fb7185',
  },
]

export default function Contact() {
  return (
    <div className="relative py-24">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a1628] via-[#0d1b30] to-[#0a1628]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(212,168,67,0.04),transparent_60%)]" />

      <div className="relative mx-auto max-w-5xl px-4 sm:px-6">
        <motion.div {...fadeUp} className="mb-14 text-center">
          <div className="mb-4 inline-flex rounded-xl bg-[#d4a843]/10 p-3">
            <Send size={28} className="text-[#d4a843]" />
          </div>
          <h2 className="text-3xl font-bold sm:text-4xl">
            Liên <span className="text-[#d4a843]">hệ</span>
          </h2>
          <p className="mt-3 text-white/50">
            Kết nối với chúng tôi để được tư vấn du học Mỹ chi tiết
          </p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-5">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4 lg:col-span-2"
          >
            {contactInfo.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group flex items-center gap-4 rounded-xl border border-white/5 bg-white/[0.02] p-5 transition-all hover:border-white/10"
              >
                <div
                  className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl"
                  style={{ background: `${item.color}15` }}
                >
                  <item.icon size={22} style={{ color: item.color }} />
                </div>
                <div>
                  <div className="text-xs font-medium text-white/40">{item.label}</div>
                  {item.href ? (
                    <a
                      href={item.href}
                      target={item.href.startsWith('http') ? '_blank' : undefined}
                      rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="text-sm font-semibold text-white transition-colors hover:text-[#d4a843]"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <div className="text-sm font-semibold text-white">{item.value}</div>
                  )}
                </div>
              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="rounded-xl border border-[#d4a843]/20 bg-[#d4a843]/5 p-5"
            >
              <div className="flex items-center gap-3">
                <MessageCircle size={20} className="text-[#d4a843]" />
                <div>
                  <p className="text-sm font-medium text-white">Cần hỗ trợ ngay?</p>
                  <Link to="/ai-chat" className="text-xs text-[#d4a843] hover:underline">
                    Hỏi AI Assistant →
                  </Link>
                </div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="rounded-2xl border border-white/10 bg-[#112240]/60 p-6 backdrop-blur-sm lg:col-span-3"
          >
            <h3 className="mb-1 text-lg font-bold text-white">Gửi tin nhắn</h3>
            <p className="mb-6 text-sm text-white/40">
              Điền form bên dưới, chúng tôi sẽ phản hồi trong vòng 24h
            </p>

            <form
              onSubmit={(e) => e.preventDefault()}
              className="space-y-4"
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="mb-1.5 block text-xs text-white/50">Họ và tên</label>
                  <input
                    placeholder="Nguyễn Văn A"
                    className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white outline-none transition-all placeholder:text-white/20 focus:border-[#d4a843]/50"
                  />
                </div>
                <div>
                  <label className="mb-1.5 block text-xs text-white/50">Email</label>
                  <input
                    type="email"
                    placeholder="you@example.com"
                    className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white outline-none transition-all placeholder:text-white/20 focus:border-[#d4a843]/50"
                  />
                </div>
              </div>
              <div>
                <label className="mb-1.5 block text-xs text-white/50">Số điện thoại</label>
                <input
                  placeholder="+84 123 456 789"
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white outline-none transition-all placeholder:text-white/20 focus:border-[#d4a843]/50"
                />
              </div>
              <div>
                <label className="mb-1.5 block text-xs text-white/50">Nội dung</label>
                <textarea
                  rows={4}
                  placeholder="Tôi cần tư vấn về..."
                  className="w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white outline-none transition-all placeholder:text-white/20 focus:border-[#d4a843]/50"
                />
              </div>
              <button
                type="submit"
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#d4a843] px-4 py-3 font-semibold text-[#0a1628] transition-all hover:bg-[#e0b84f]"
              >
                <Send size={16} />
                Gửi tin nhắn
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
