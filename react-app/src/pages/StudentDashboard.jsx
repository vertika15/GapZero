
import { motion } from 'framer-motion'
import { Navbar } from '../components/layout/Navbar'
import { GlassCard } from '../components/ui/GlassCard'
import { BookOpen, Trophy, Target, TrendingUp, Clock, Zap } from 'lucide-react'

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
}

export default function StudentDashboard() {
  return (
    <div className="min-h-screen bg-neon-animated pb-20">
      <Navbar />
      
      <div className="container mx-auto px-4 pt-28">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8 flex flex-col md:flex-row justify-between items-end gap-4"
        >
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
              Welcome back, <span className="text-electric-cyan">Student</span>
            </h1>
            <p className="text-white/60">Ready to close some gaps today?</p>
          </div>
          <div className="flex gap-3">
             <div className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 flex items-center gap-2">
               <Zap className="text-yellow-400" size={18} />
               <span className="font-bold text-white">5 Day Streak</span>
             </div>
          </div>
        </motion.div>

        <motion.div 
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {/* Progress Overview */}
          <motion.div variants={item} className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <GlassCard className="bg-gradient-to-br from-electric-blue/10 to-transparent">
              <div className="flex justify-between items-start mb-4">
                <div className="p-2 rounded-lg bg-electric-blue/20 text-electric-blue">
                  <Target size={24} />
                </div>
                <span className="text-xs font-mono text-white/50 bg-white/5 px-2 py-1 rounded">ON TRACK</span>
              </div>
              <h3 className="text-white/70 text-sm font-medium">Overall Progress</h3>
              <div className="text-3xl font-bold text-white mt-1">42%</div>
              <div className="w-full bg-white/10 h-1.5 rounded-full mt-4 overflow-hidden">
                <div className="h-full bg-electric-blue w-[42%]" />
              </div>
            </GlassCard>

            <GlassCard className="bg-gradient-to-br from-electric-violet/10 to-transparent">
              <div className="flex justify-between items-start mb-4">
                <div className="p-2 rounded-lg bg-electric-violet/20 text-electric-violet">
                  <Trophy size={24} />
                </div>
                <span className="text-xs font-mono text-white/50 bg-white/5 px-2 py-1 rounded">LEVEL 3</span>
              </div>
              <h3 className="text-white/70 text-sm font-medium">Current Gap Score</h3>
              <div className="text-3xl font-bold text-white mt-1">680</div>
              <p className="text-xs text-white/40 mt-2">+24 points since last quiz</p>
            </GlassCard>

            {/* Recent Activity Graph Placeholder */}
            <GlassCard className="col-span-1 sm:col-span-2 min-h-[200px] flex flex-col">
               <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
                 <TrendingUp size={18} className="text-electric-cyan" />
                 Learning Activity
               </h3>
               <div className="flex-1 flex items-end justify-between gap-2 px-2 pb-2">
                 {[40, 65, 30, 85, 50, 95, 60].map((h, i) => (
                   <div key={i} className="w-full bg-white/5 hover:bg-electric-cyan/50 transition-colors rounded-t-sm relative group">
                     <div 
                       className="absolute bottom-0 w-full bg-electric-cyan/20 group-hover:bg-electric-cyan transition-all duration-500 rounded-t-sm"
                       style={{ height: `${h}%` }}
                     />
                   </div>
                 ))}
               </div>
               <div className="flex justify-between text-xs text-white/30 mt-2 px-1">
                 <span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span><span>Sun</span>
               </div>
            </GlassCard>
          </motion.div>

          {/* Recommended Path */}
          <motion.div variants={item} className="flex flex-col gap-6">
            <GlassCard className="flex-1 border-electric-cyan/30">
              <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
                <BookOpen size={18} className="text-electric-cyan" />
                Next Up
              </h3>
              
              <div className="space-y-4">
                <div className="p-3 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 transition cursor-pointer group">
                  <div className="flex justify-between mb-2">
                    <span className="text-xs text-electric-cyan font-bold uppercase">Algebra</span>
                    <span className="text-xs text-white/50">15 min</span>
                  </div>
                  <h4 className="text-white font-medium group-hover:text-electric-cyan transition-colors">Linear Equations Basics</h4>
                  <div className="mt-3 flex items-center gap-2 text-xs text-white/40">
                    <Clock size={12} />
                    <span>Not started</span>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 transition cursor-pointer group">
                  <div className="flex justify-between mb-2">
                    <span className="text-xs text-electric-violet font-bold uppercase">Physics</span>
                    <span className="text-xs text-white/50">20 min</span>
                  </div>
                  <h4 className="text-white font-medium group-hover:text-electric-violet transition-colors">Newton's Laws Intro</h4>
                  <div className="mt-3 flex items-center gap-2 text-xs text-white/40">
                    <div className="w-16 h-1 bg-white/10 rounded-full overflow-hidden">
                      <div className="w-1/3 h-full bg-electric-violet" />
                    </div>
                    <span>30% complete</span>
                  </div>
                </div>
              </div>

              <button className="w-full mt-6 py-3 rounded-xl bg-white/5 hover:bg-electric-cyan/20 hover:text-electric-cyan text-white/60 text-sm font-medium transition-all border border-white/5 hover:border-electric-cyan/30">
                View Learning Path
              </button>
            </GlassCard>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}
