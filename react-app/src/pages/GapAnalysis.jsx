import { Navbar } from '../components/layout/Navbar'
import { GlassCard } from '../components/ui/GlassCard'
import { motion } from 'framer-motion'
import { AlertTriangle } from 'lucide-react'

export default function GapAnalysis() {
  return (
    <div className="min-h-screen bg-neon-animated pb-20">
      <Navbar />
      <div className="container mx-auto px-6 pt-28">
        <motion.h2 initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="text-3xl font-semibold">Gap Analysis</motion.h2>
        <GlassCard className="mt-6 glass-hover">
          <div className="flex items-center gap-3 mb-3">
            <AlertTriangle className="text-yellow-400" />
            <h3 className="font-semibold">Detected Level: Intermediate</h3>
          </div>
          <div className="mt-2 text-white/80">Recommended Modules: Algebra Basics, Reading Comprehension</div>
        </GlassCard>
      </div>
    </div>
  )
}
