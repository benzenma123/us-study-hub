import { motion } from 'framer-motion'
import { Globe, Landmark, Users, Mountain, MapPin, Star, GraduationCap, Music, Salad, Building2, Dribbble, Cpu, PartyPopper, Banana, Trees, Car, DollarSign, Heart, Library, Plane } from 'lucide-react'
import { SectionHeader, fadeUp } from '../components/ui'

const quickStats = [
  { icon: Globe, value: '50', label: 'Tiểu bang', sub: 'Washington D.C. là thủ đô' },
  { icon: Users, value: '336M', label: 'Dân số', sub: 'Đông thứ 3 thế giới' },
  { icon: Mountain, value: '9.8M km²', label: 'Diện tích', sub: 'Lớn thứ 4 thế giới' },
  { icon: Landmark, value: '1776', label: 'Năm độc lập', sub: '4/7 – Independence Day' },
]

const funFacts = [
  { icon: Building2, title: 'New York từng là thủ đô', desc: 'Năm 1789, New York City là thủ đô đầu tiên của Hoa Kỳ trước khi chuyển về Washington D.C.', color: '#38bdf8' },
  { icon: Banana, title: 'Hawaii – tiểu bang xa nhất', desc: 'Hawaii cách lục địa Mỹ hơn 3.200 km. Là tiểu bang duy nhất trồng cà phê thương mại.', color: '#d4a843' },
  { icon: Cpu, title: 'Silicon Valley', desc: 'Tập trung hơn 1/3 số công ty Fortune 500. Nơi khai sinh ra iPhone, Google, và Internet hiện đại.', color: '#34d399' },
  { icon: Car, title: 'Xe hơi là vua', desc: 'Mỹ có hơn 290 triệu xe – gần 1 xe/người. Xa lộ liên bang dài nhất là I-90 (4.860 km).', color: '#fb7185' },
  { icon: Music, title: 'New Orleans – Jazz Capital', desc: 'Nơi khai sinh nhạc Jazz. Mỗi năm tổ chức hơn 130 lễ hội âm nhạc.', color: '#a78bfa' },
  { icon: Dribbble, title: '4 môn thể thao lớn', desc: 'American Football, Baseball, Basketball, Ice Hockey – mỗi môn có hàng trăm triệu fan.', color: '#f59e0b' },
  { icon: Trees, title: 'Yellowstone – Công viên đầu tiên', desc: 'Thành lập năm 1872, là vườn quốc gia đầu tiên trên thế giới. Rộng hơn 8.900 km².', color: '#34d399' },
  { icon: Salad, title: 'Thực phẩm đa dạng', desc: 'Mỹ không có món quốc gia chính thức. Hamburger, BBQ, Apple Pie là biểu tượng ẩm thực.', color: '#d4a843' },
]

const eduFacts = [
  { icon: GraduationCap, title: 'Top 1 thế giới', desc: 'Mỹ có hơn 4.000 trường đại học và cao đẳng. 8/10 trường đại học hàng đầu thế giới là ở Mỹ (THE 2026).' },
  { icon: Library, title: 'Library of Congress', desc: 'Thư viện lớn nhất thế giới với hơn 170 triệu đầu mục tài liệu, trải dài hơn 1.700 km kệ sách.' },
  { icon: DollarSign, title: 'Học bổng khổng lồ', desc: 'Chính phủ và các trường ĐH Mỹ chi hơn $40 tỷ học bổng mỗi năm cho sinh viên quốc tế.' },
  { icon: Heart, title: 'Hỗ trợ sinh viên quốc tế', desc: 'Hầu hết trường có International Student Office hỗ trợ visa, SEVIS, OPT/CPT và hòa nhập văn hóa.' },
]

const cultureFacts = [
  { icon: PartyPopper, title: 'Lễ Tạ ơn (Thanksgiving)', desc: 'Ngày lễ lớn nhất năm – người Mỹ đi lại nhiều hơn cả Giáng Sinh. Gà tây là món chính.' },
  { icon: Star, title: 'Hollywood', desc: 'Kinh đô điện ảnh thế giới – hơn 100 năm lịch sử. Sản xuất hàng ngàn phim và show truyền hình mỗi năm.' },
  { icon: Plane, title: '50 National Parks', desc: 'Mỹ sở hữu 63 vườn quốc gia hùng vĩ từ Alaska tới Florida. Grand Canyon hút 6 triệu khách/năm.' },
]

const studentFacts = [
  { icon: MapPin, title: 'Campus life', desc: 'Khuôn viên trường đại học Mỹ là một thành phố thu nhỏ – có ký túc xá, thư viện 24/7, trung tâm thể thao, nhà hàng.' },
  { icon: Users, title: 'Đa văn hóa', desc: 'Sinh viên quốc tế chiếm ~5% tổng số sinh viên đại học Mỹ. Đến từ hơn 200 quốc gia.' },
  { icon: Building2, title: 'Hệ thống credit linh hoạt', desc: 'Sinh viên được tự do chọn môn học theo sở thích. Có thể chuyển trường, chuyển tín chỉ giữa các trường.' },
  { icon: Dribbble, title: 'Thể thao đại học', desc: 'NCAA là giải thể thao đại học lớn nhất thế giới. Bóng bầu dục và bóng rổ đại học thu hút hàng triệu khán giả.' },
]

const container = {
  initial: {},
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
}

export default function UsaFacts() {
  return (
    <div className="relative py-24">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a1628] via-[#0d1b30] to-[#0a1628]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(212,168,67,0.05),transparent_50%)]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">

        <SectionHeader icon={Globe} title="Khám phá" highlight="nước Mỹ" desc="Những sự thật thú vị về đất nước, con người và văn hóa Hoa Kỳ" iconBg="#d4a843" />

        {/* Quick Stats */}
        <div className="mb-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {quickStats.map((s, i) => (
            <motion.div key={s.label} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1, duration: 0.5 }} className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
              <div className="absolute -right-6 -top-6 text-white/5"><s.icon size={80} /></div>
              <s.icon className="mb-3 text-[#d4a843]" size={28} />
              <div className="text-3xl font-bold text-white">{s.value}</div>
              <div className="mt-1 text-sm font-medium text-white/80">{s.label}</div>
              <div className="mt-1 text-xs text-[#d4a843]">{s.sub}</div>
            </motion.div>
          ))}
        </div>

        {/* Fun Facts Grid */}
        <motion.div {...fadeUp} className="mb-16">
          <div className="mb-6 flex items-center gap-3">
            <Star size={22} className="text-[#d4a843]" />
            <h3 className="text-xl font-bold text-white">Sự thật thú vị</h3>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {funFacts.map((f, i) => (
              <motion.div key={f.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05, duration: 0.5 }} whileHover={{ y: -4 }} className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-[#112240] to-[#0a1628] p-5 transition-all hover:border-white/20 hover:shadow-xl hover:shadow-black/20">
                <div className="absolute -right-6 -top-6 h-20 w-20 rounded-full opacity-10 blur-2xl transition-all duration-500 group-hover:opacity-20 group-hover:scale-150" style={{ background: f.color }} />
                <div className="mb-3 inline-flex rounded-xl p-3" style={{ background: `${f.color}20` }}><f.icon size={20} style={{ color: f.color }} /></div>
                <h4 className="mb-1.5 text-sm font-bold text-white">{f.title}</h4>
                <p className="text-xs leading-relaxed text-white/50">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Education Facts */}
        <motion.div {...fadeUp} className="mb-16 rounded-2xl border border-white/10 bg-gradient-to-r from-[#112240] to-[#0d1b30] p-6 backdrop-blur-sm sm:p-8">
          <div className="mb-6 flex items-center gap-3">
            <GraduationCap size={22} className="text-[#d4a843]" />
            <h3 className="text-xl font-bold text-white">Giáo dục Hoa Kỳ – Điểm đến số 1 của du học sinh</h3>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            {eduFacts.map((e, i) => (
              <motion.div key={e.title} initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="flex items-start gap-4 rounded-xl border border-white/5 bg-white/[0.02] p-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#d4a843]/20"><e.icon size={20} className="text-[#d4a843]" /></div>
                <div>
                  <h4 className="text-sm font-semibold text-white">{e.title}</h4>
                  <p className="mt-1 text-xs leading-relaxed text-white/50">{e.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Culture Facts */}
        <motion.div {...fadeUp} className="mb-16">
          <div className="mb-6 flex items-center gap-3">
            <Music size={22} className="text-[#d4a843]" />
            <h3 className="text-xl font-bold text-white">Văn hóa & Địa danh</h3>
          </div>
          <div className="grid gap-5 sm:grid-cols-3">
            {cultureFacts.map((c, i) => (
              <motion.div key={c.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="group rounded-2xl border border-white/10 bg-gradient-to-b from-[#112240] to-[#0a1628] p-6 transition-all hover:border-white/20">
                <div className="mb-4 inline-flex rounded-xl bg-[#d4a843]/20 p-3"><c.icon size={24} className="text-[#d4a843]" /></div>
                <h4 className="mb-2 text-base font-bold text-white">{c.title}</h4>
                <p className="text-sm leading-relaxed text-white/50">{c.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Student Life */}
        <motion.div {...fadeUp} className="rounded-2xl border border-white/10 bg-gradient-to-r from-[#112240] to-[#0d1b30] p-6 backdrop-blur-sm sm:p-8">
          <div className="mb-6 flex items-center gap-3">
            <Users size={22} className="text-[#d4a843]" />
            <h3 className="text-xl font-bold text-white">Đời sống sinh viên tại Mỹ</h3>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            {studentFacts.map((s, i) => (
              <motion.div key={s.title} initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="flex items-start gap-4 rounded-xl border border-white/5 bg-white/[0.02] p-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#d4a843]/20"><s.icon size={20} className="text-[#d4a843]" /></div>
                <div>
                  <h4 className="text-sm font-semibold text-white">{s.title}</h4>
                  <p className="mt-1 text-xs leading-relaxed text-white/50">{s.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </div>
  )
}
