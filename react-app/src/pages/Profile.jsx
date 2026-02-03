import { Navbar } from '../components/layout/Navbar'
import { GlassCard } from '../components/ui/GlassCard'
import { motion } from 'framer-motion'
import { User, Flame } from 'lucide-react'

export default function Profile() {
  return (
    <div className="min-h-screen bg-neon-animated pb-20">
      <Navbar />
      <div className="container mx-auto px-6 pt-28">
        <motion.h2 initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="text-3xl font-semibold">Profile & Progress</motion.h2>
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <GlassCard className="glass-hover">
            <div className="flex items-center gap-3 mb-3">
              <User className="text-electric-cyan" />
              <h3 className="font-semibold">Completion</h3>
            </div>
            <div className="text-3xl font-bold text-white">42%</div>
            <div className="mt-3 w-full bg-white/10 h-1.5 rounded-full overflow-hidden">
              <div className="h-full bg-electric-blue w-[42%]" />
            </div>
          </GlassCard>
          <GlassCard className="glass-hover">
            <div className="flex items-center gap-3 mb-3">
              <Flame className="text-orange-400" />
              <h3 className="font-semibold">Daily Streak</h3>
            </div>
            <div className="text-3xl font-bold text-white">5</div>
            <div className="text-white/60 text-sm">Keep going—consistency compounds learning!</div>
          </GlassCard>
        </div>
      </div>
    </div>
  )
}
