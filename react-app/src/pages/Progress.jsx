import { Navbar } from '../components/layout/Navbar'
import { GlassCard } from '../components/ui/GlassCard'
import { motion } from 'framer-motion'

export default function Progress() {
  const weeks = Array.from({ length: 6 }, () => Array.from({ length: 7 }, () => Math.random()))
  return (
    <div className="min-h-screen bg-neon-animated pb-20">
      <Navbar />
      <div className="container mx-auto px-6 pt-28">
        <motion.h2 initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="text-3xl font-semibold">Progress</motion.h2>
        <GlassCard className="mt-6 glass-hover">
          <div className="grid gap-2">
            {weeks.map((row, i) => (
              <div key={i} className="flex gap-2">
                {row.map((v, j) => (
                  <div key={j} className="w-8 h-8 rounded-md" style={{ backgroundColor: `rgba(59,130,246, ${0.2 + v * 0.6})` }} />
                ))}
              </div>
            ))}
          </div>
        </GlassCard>
      </div>
    </div>
  )
}
