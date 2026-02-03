import { motion } from 'framer-motion'
import { Navbar } from '../components/layout/Navbar'
import { GlassCard } from '../components/ui/GlassCard'
import { Users, ClipboardList, CalendarCheck, BarChart3 } from 'lucide-react'

export default function TeacherDashboard() {
  return (
    <div className="min-h-screen bg-neon-animated pb-20">
      <Navbar />
      <div className="container mx-auto px-6 pt-28">
        <motion.h2 initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="text-3xl font-semibold">
          Teacher Dashboard
        </motion.h2>
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <GlassCard className="glass-hover">
            <div className="flex items-center gap-3 mb-3">
              <Users className="text-electric-cyan" />
              <h3 className="font-semibold">Class Overview</h3>
            </div>
            <div className="grid grid-cols-3 gap-4">
              <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                <div className="text-xl font-bold text-white">28</div>
                <div className="text-xs text-white/50">Students</div>
              </div>
              <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                <div className="text-xl font-bold text-white">5</div>
                <div className="text-xs text-white/50">Classes</div>
              </div>
              <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                <div className="text-xl font-bold text-white">3</div>
                <div className="text-xs text-white/50">Active Quizzes</div>
              </div>
            </div>
          </GlassCard>

          <GlassCard className="glass-hover">
            <div className="flex items-center gap-3 mb-3">
              <ClipboardList className="text-electric-violet" />
              <h3 className="font-semibold">Assignments</h3>
            </div>
            <ul className="space-y-3">
              {['Algebra Basics', 'Reading Comprehension', 'Newton’s Laws'].map((t, i) => (
                <li key={i} className="flex justify-between items-center p-3 rounded-xl bg-white/5 border border-white/10">
                  <span>{t}</span>
                  <button className="px-3 py-1 rounded-lg bg-electric-blue text-black text-sm">View</button>
                </li>
              ))}
            </ul>
          </GlassCard>

          <GlassCard className="md:col-span-2 glass-hover">
            <div className="flex items-center gap-3 mb-3">
              <BarChart3 className="text-electric-cyan" />
              <h3 className="font-semibold">Class Progress</h3>
            </div>
            <div className="flex items-end gap-2 h-40">
              {[50,65,30,80,55,95,60].map((h,i)=>(
                <div key={i} className="w-full bg-white/10 rounded-t-sm overflow-hidden">
                  <div className="w-full bg-electric-cyan/30 h-full" style={{ height: `${h}%` }} />
                </div>
              ))}
            </div>
          </GlassCard>
        </div>
      </div>
    </div>
  )
}
