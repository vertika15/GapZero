import { useState } from 'react'
import { Navbar } from '../components/layout/Navbar'
import { GlassCard } from '../components/ui/GlassCard'
import { motion } from 'framer-motion'

export default function DailyPlan() {
  const [tasks] = useState([
    { title: 'Review fractions basics', duration: '20 min' },
    { title: 'Watch video: Linear Equations', duration: '15 min' },
    { title: 'Practice: 10 MCQs', duration: '25 min' }
  ])

  return (
    <div className="min-h-screen bg-neon-animated pb-20">
      <Navbar />
      <div className="container mx-auto px-6 pt-28">
      <motion.h2 initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="text-3xl font-semibold">Daily Plan</motion.h2>
      <div className="mt-6 grid gap-4">
        {tasks.map((t, i) => (
          <GlassCard key={i} className="glass-hover flex items-center justify-between">
            <div>{t.title}</div>
            <div className="text-white/70">{t.duration}</div>
          </GlassCard>
        ))}
      </div>
      </div>
    </div>
  )
}
