import { useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { GraduationCap, Menu, X, MessageCircle } from 'lucide-react'

const links = [
  { to: '/', label: 'Trang chủ' },
  { to: '/calculator', label: 'Tính chi phí' },
  { to: '/scholarships', label: 'Học bổng' },
  { to: '/visa', label: 'Visa' },
  { to: '/visa-interview', label: 'Phỏng vấn' },
  { to: '/stem', label: 'STEM' },
  { to: '/compare', label: 'So sánh trường' },
  { to: '/checklist', label: 'Checklist' },
  { to: '/blog', label: 'Blog' },
  { to: '/usa-facts', label: 'Về Mỹ' },
  { to: '/faq', label: 'FAQ' },
  { to: '/generate', label: 'Bài viết' },
  { to: '/contact', label: 'Liên hệ' },
]

const linkClass = ({ isActive }) =>
  `rounded-lg px-3 py-2 text-sm transition-all ${
    isActive ? 'bg-white/10 text-white' : 'text-white/60 hover:bg-white/5 hover:text-white'
  }`

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()

  return (
    <nav className="fixed left-0 right-0 top-0 z-50 border-b border-white/5" style={{ background: 'rgba(10,22,40,0.85)', backdropFilter: 'blur(12px)' }}>
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6">
        <NavLink to="/" className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#d4a843] text-[#0a1628]">
            <GraduationCap size={20} />
          </div>
          <span className="hidden text-lg font-bold sm:block">
            US<span className="text-[#d4a843]">Study</span>Hub
          </span>
        </NavLink>

        <div className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <NavLink key={l.to} to={l.to} end={l.to === '/'} className={linkClass}>
              {l.label}
            </NavLink>
          ))}
          <div className="ml-2 h-6 w-px bg-white/10" />
          <NavLink
            to="/ai-chat"
            className="ml-2 inline-flex items-center gap-2 rounded-xl bg-[#d4a843] px-4 py-2 text-sm font-semibold text-[#0a1628] transition-all hover:bg-[#e0b84f] hover:shadow-lg hover:shadow-[#d4a843]/25"
          >
            <MessageCircle size={16} />
            AI Hỗ trợ
          </NavLink>
        </div>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="rounded-lg p-2 text-white/60 hover:bg-white/5 md:hidden"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="border-t border-white/5 px-4 py-4" style={{ background: 'rgba(10,22,40,0.95)' }}>
          <div className="space-y-1">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.to === '/'}
                onClick={() => setMobileOpen(false)}
                className="block w-full rounded-lg px-3 py-3 text-left text-sm text-white/60 transition-all hover:bg-white/5 hover:text-white"
              >
                {l.label}
              </NavLink>
            ))}
            <NavLink
              to="/ai-chat"
              onClick={() => setMobileOpen(false)}
              className="mt-3 flex items-center justify-center gap-2 rounded-xl bg-[#d4a843] px-4 py-3 text-sm font-semibold text-[#0a1628]"
            >
              <MessageCircle size={16} />
              AI Hỗ trợ
            </NavLink>
          </div>
        </div>
      )}
    </nav>
  )
}
