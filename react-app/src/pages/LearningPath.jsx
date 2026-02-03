import { Navbar } from '../components/layout/Navbar'
import { GlassCard } from '../components/ui/GlassCard'
import { motion } from 'framer-motion'

export default function LearningPath() {
  const steps = [
    'Algebra Basics',
    'Geometry Foundations',
    'Reading Comprehension',
    'Programming Basics'
  ]
  return (
    <div className="min-h-screen bg-neon-animated pb-20">
      <Navbar />
      <div className="container mx-auto px-6 pt-28">
        <motion.h2 initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="text-3xl font-semibold">Personalized Learning Path</motion.h2>
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {steps.map((s, i) => (
            <GlassCard key={i} className="glass-hover">
              <div className="text-sm text-white/60">Step {i + 1}</div>
              <div className="text-xl font-semibold">{s}</div>
            </GlassCard>
          ))}
        </div>
      </div>
    </div>
  )
}
