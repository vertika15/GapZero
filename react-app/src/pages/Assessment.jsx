import { useState } from 'react'
import { Navbar } from '../components/layout/Navbar'
import { GlassCard } from '../components/ui/GlassCard'
import { motion } from 'framer-motion'

const sampleQuestions = [
  { id: 1, q: '2 + 2 = ?', options: ['3', '4', '5'], answer: 1 },
  { id: 2, q: 'Capital of India?', options: ['Mumbai', 'Delhi', 'Kolkata'], answer: 1 },
  { id: 3, q: 'Water formula?', options: ['H2O', 'CO2', 'NaCl'], answer: 0 },
]

export default function Assessment() {
  const [responses, setResponses] = useState({})
  const [score, setScore] = useState(null)

  const submit = () => {
    let s = 0
    sampleQuestions.forEach((q) => {
      if (responses[q.id] === q.answer) s += 1
    })
    const pct = Math.round((s / sampleQuestions.length) * 100)
    setScore(pct)
  }

  return (
    <div className="min-h-screen bg-neon-animated pb-20">
      <Navbar />
      <div className="container mx-auto px-6 pt-28">
        <motion.h2 initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="text-3xl font-semibold">Assessment</motion.h2>
        <div className="mt-6 grid gap-6">
        {sampleQuestions.map((q) => (
          <GlassCard key={q.id} className="glass-hover">
            <div>{q.q}</div>
            <div className="mt-3 flex gap-3">
              {q.options.map((opt, idx) => (
                <button
                  key={idx}
                  className={`px-3 py-2 rounded-xl ${responses[q.id] === idx ? 'bg-electric-blue' : 'bg-white/10'}`}
                  onClick={() => setResponses({ ...responses, [q.id]: idx })}
                >
                  {opt}
                </button>
              ))}
            </div>
          </GlassCard>
        ))}
        <button className="px-4 py-3 rounded-xl bg-electric-cyan shadow-neon w-fit" onClick={submit}>
          Submit
        </button>
        {score !== null && (
          <GlassCard className="glass-hover">
            <div>Score: {score}%</div>
            <div>
              Level:{' '}
              {score < 40 ? 'Beginner' : score < 70 ? 'Intermediate' : 'Advanced'}
            </div>
          </GlassCard>
        )}
      </div>
    </div>
  )
}
