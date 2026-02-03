import { Navbar } from '../components/layout/Navbar'
import { motion } from 'framer-motion'
import { GlassCard } from '../components/ui/GlassCard'
import { Users, BookOpen, BarChart2 } from 'lucide-react'

export default function AdminPanel() {
  return (
    <div className="min-h-screen bg-neon-animated pb-20">
      <Navbar />
      <div className="container mx-auto px-6 pt-28">
        <motion.h2 initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="text-3xl font-semibold">
          Admin Panel
        </motion.h2>
        <div className="mt-6 grid gap-6 md:grid-cols-3">
          <GlassCard className="glass-hover">
            <div className="flex items-center gap-3 mb-3">
              <Users className="text-electric-cyan" />
              <h3 className="font-semibold">Users</h3>
            </div>
            <div className="text-white/70">Manage student and teacher accounts</div>
          </GlassCard>
          <GlassCard className="glass-hover">
            <div className="flex items-center gap-3 mb-3">
              <BookOpen className="text-electric-violet" />
              <h3 className="font-semibold">Courses</h3>
            </div>
            <div className="text-white/70">Create and organize course modules</div>
          </GlassCard>
          <GlassCard className="glass-hover">
            <div className="flex items-center gap-3 mb-3">
              <BarChart2 className="text-electric-cyan" />
              <h3 className="font-semibold">Analytics</h3>
            </div>
            <div className="text-white/70">Track platform performance and engagement</div>
          </GlassCard>
        </div>
      </div>
    </div>
  )
}
