import { useState, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import {
  MessageCircle, Send, Bot, User, Sparkles,
  AlertCircle, ArrowRight
} from 'lucide-react'
import { fadeUp } from '../components/ui'

const suggestions = [
  'Chi phí du học Mỹ bao nhiêu?',
  'Điều kiện xin visa F-1 là gì?',
  'Ngành STEM nào đang hot?',
  'OPT là gì và kéo dài bao lâu?',
  'Cần chuẩn bị gì cho phỏng vấn visa?',
]

const systemPrompt = `Bạn là chuyên gia tư vấn du học Mỹ tại US Study Hub. 
Trả lời bằng tiếng Việt, ngắn gọn, chính xác và thân thiện. 
Bạn có kiến thức sâu về: visa F-1, SEVIS, OPT/STEM Extension, học phí, tuyển sinh đại học Mỹ, học bổng, và ngành STEM.
Luôn cập nhật thông tin năm 2025-2026.
Nếu không chắc chắn, hãy đề nghị người dùng kiểm tra lại với trường hoặc cơ quan lãnh sự.`

export default function AiChat() {
  const [messages, setMessages] = useState([
    {
      role: 'assistant',
      content: 'Xin chào! Tôi là trợ lý AI của US Study Hub. Tôi có thể giúp bạn giải đáp các thắc mắc về du học Mỹ. Bạn muốn hỏi gì? 🤗',
    },
  ])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const bottomRef = useRef(null)

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  const send = async (text) => {
    const userMsg = text || input
    if (!userMsg.trim() || loading) return

    setInput('')
    setError(null)
    const newMessages = [...messages, { role: 'user', content: userMsg }]
    setMessages(newMessages)
    setLoading(true)

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: [{ role: 'system', content: systemPrompt }, ...newMessages],
        }),
      })

      if (!res.ok) throw new Error('Không thể kết nối đến AI')

      const data = await res.json()
      setMessages([...newMessages, { role: 'assistant', content: data.choices[0].message.content }])
    } catch (e) {
      setMessages([...newMessages, { role: 'assistant', content: `❌ Rất tiếc, đã xảy ra lỗi: ${e.message}. Vui lòng thử lại sau hoặc liên hệ với chúng tôi qua trang Liên hệ.` }])
      setError(e.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="relative py-24">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a1628] via-[#0d1b30] to-[#0a1628]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(212,168,67,0.04),transparent_60%)]" />

      <div className="relative mx-auto max-w-4xl px-4 sm:px-6">
        <motion.div {...fadeUp} className="mb-10 text-center">
          <div className="mb-4 inline-flex rounded-xl bg-[#d4a843]/10 p-3">
            <Bot size={28} className="text-[#d4a843]" />
          </div>
          <h2 className="text-3xl font-bold sm:text-4xl">
            AI <span className="text-[#d4a843]">Assistant</span>
          </h2>
          <p className="mt-3 text-white/50">
            Hỏi bất cứ điều gì về du học Mỹ — AI sẽ trả lời bạn ngay lập tức
          </p>
        </motion.div>

        <div className="mx-auto max-w-2xl">
          {/* Chat container */}
          <div className="mb-4 h-[480px] overflow-y-auto rounded-2xl border border-white/10 bg-[#112240]/40 p-4 backdrop-blur-sm">
            <div className="space-y-4">
              {messages.map((msg, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex gap-3 ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}
                >
                  <div
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg ${
                      msg.role === 'user' ? 'bg-[#d4a843]/20' : 'bg-[#38bdf8]/20'
                    }`}
                  >
                    {msg.role === 'user' ? (
                      <User size={16} className="text-[#d4a843]" />
                    ) : (
                      <Bot size={16} className="text-[#38bdf8]" />
                    )}
                  </div>
                  <div
                    className={`max-w-[80%] rounded-xl px-4 py-3 text-sm leading-relaxed ${
                      msg.role === 'user'
                        ? 'rounded-tr-sm bg-[#d4a843] text-[#0a1628]'
                        : 'rounded-tl-sm bg-white/5 text-white/80'
                    }`}
                  >
                    {msg.content}
                  </div>
                </motion.div>
              ))}

              {loading && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex gap-3">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#38bdf8]/20">
                    <Bot size={16} className="text-[#38bdf8]" />
                  </div>
                  <div className="rounded-xl rounded-tl-sm bg-white/5 px-4 py-3">
                    <div className="flex gap-1.5">
                      <span className="h-2 w-2 animate-bounce rounded-full bg-white/30" style={{ animationDelay: '0ms' }} />
                      <span className="h-2 w-2 animate-bounce rounded-full bg-white/30" style={{ animationDelay: '150ms' }} />
                      <span className="h-2 w-2 animate-bounce rounded-full bg-white/30" style={{ animationDelay: '300ms' }} />
                    </div>
                  </div>
                </motion.div>
              )}
              {error && (
                <div className="flex items-center gap-2 rounded-xl bg-[#fb7185]/10 px-4 py-3 text-xs text-[#fb7185]">
                  <AlertCircle size={14} />
                  {error} — Cần cấu hình AI_API_KEY trong Vercel environment variables
                </div>
              )}
              <div ref={bottomRef} />
            </div>
          </div>

          {/* Suggestions */}
          {messages.length <= 1 && !loading && (
            <div className="mb-4 flex flex-wrap gap-2">
              {suggestions.map((s) => (
                <button
                  key={s}
                  onClick={() => send(s)}
                  className="flex items-center gap-1 rounded-full border border-white/5 bg-white/[0.02] px-3.5 py-2 text-xs text-white/50 transition-all hover:border-white/10 hover:text-white/80"
                >
                  {s}
                  <ArrowRight size={12} />
                </button>
              ))}
            </div>
          )}

          {/* Input */}
          <div className="flex gap-2">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && send()}
              placeholder="Nhập câu hỏi của bạn..."
              className="flex-1 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition-all placeholder:text-white/20 focus:border-[#d4a843]/50"
            />
            <button
              onClick={() => send()}
              disabled={loading || !input.trim()}
              className="flex items-center gap-2 rounded-xl bg-[#d4a843] px-5 py-3 font-semibold text-[#0a1628] transition-all hover:bg-[#e0b84f] disabled:opacity-40"
            >
              <Send size={16} />
            </button>
          </div>

          <p className="mt-3 text-center text-xs text-white/20">
            AI có thể không chính xác 100%. Vui lòng kiểm tra thông tin với nguồn chính thống.
          </p>
        </div>
      </div>
    </div>
  )
}
