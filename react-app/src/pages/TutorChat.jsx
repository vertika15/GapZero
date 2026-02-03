import { useState } from 'react'
import { Navbar } from '../components/layout/Navbar'
import { GlassCard } from '../components/ui/GlassCard'
import { motion } from 'framer-motion'

export default function TutorChat() {
  const [messages, setMessages] = useState([{ role: 'system', content: 'Ask a question about your lesson.' }])
  const [input, setInput] = useState('')

  const send = () => {
    if (!input.trim()) return
    setMessages([...messages, { role: 'user', content: input }, { role: 'assistant', content: 'This is a placeholder reply. Connect backend to enable AI tutor.' }])
    setInput('')
  }

  return (
    <div className="min-h-screen bg-neon-animated pb-20">
      <Navbar />
      <div className="container mx-auto px-6 pt-28">
      <motion.h2 initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="text-3xl font-semibold">AI Tutor Chat</motion.h2>
      <GlassCard className="mt-6 glass-hover">
        <div className="grid gap-3">
          {messages.map((m, i) => (
            <div key={i} className={`px-3 py-2 rounded-xl ${m.role === 'user' ? 'bg-electric-blue' : 'bg-white/10'}`}>
              {m.content}
            </div>
          ))}
        </div>
        <div className="mt-4 flex gap-3">
          <input className="flex-1 rounded-xl bg-white/10 border border-white/10 p-3" value={input} onChange={(e) => setInput(e.target.value)} placeholder="Type your question" />
          <button className="px-4 py-3 rounded-xl bg-electric-cyan" onClick={send}>Send</button>
        </div>
      </GlassCard>
      </div>
    </div>
  )
}
