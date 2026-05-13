import { GraduationCap } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="relative border-t border-white/5 py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#d4a843] text-[#0a1628]">
                <GraduationCap size={18} />
              </div>
              <span className="text-lg font-bold">
                US<span className="text-[#d4a843]">Study</span>Hub
              </span>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-white/40">
              Nền tảng tư vấn du học Mỹ toàn diện với thông tin cập nhật về visa, tuyển sinh và cơ hội nghề nghiệp STEM.
            </p>
          </div>
          <div>
            <h4 className="mb-4 text-sm font-semibold text-white/60">Liên kết chính thống</h4>
            <div className="space-y-2 text-sm">
              {['studyinthestates.dhs.gov', 'travel.state.gov', 'ice.gov/sevis'].map((l) => (
                <a
                  key={l}
                  href={`https://${l}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-white/40 transition-colors hover:text-[#d4a843]"
                >
                  {l}
                </a>
              ))}
            </div>
          </div>
          <div>
            <h4 className="mb-4 text-sm font-semibold text-white/60">Nguồn tham khảo</h4>
            <div className="space-y-2 text-sm text-white/40">
              <p>Bộ Giáo dục Hoa Kỳ • DHS</p>
              <p>Bộ Ngoại giao Hoa Kỳ • DOS</p>
              <p>Cập nhật tháng 05/2026</p>
            </div>
          </div>
        </div>
        <div className="mt-10 border-t border-white/5 pt-6 text-center text-xs text-white/30">
          &copy; 2025 US Study Hub. Dữ liệu được tổng hợp từ các nguồn chính thống. Thông tin chỉ mang tính tham khảo.
        </div>
      </div>
    </footer>
  )
}
