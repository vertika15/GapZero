import { Navbar } from '../components/layout/Navbar'
import { GlassCard } from '../components/ui/GlassCard'
import { motion } from 'framer-motion'
import { useState } from 'react'

export default function Course() {
  const [selected, setSelected] = useState(null)

  const subjects = ['English','Hindi','Mathematics','Science','Computer Basics','Digital Literacy']

  const mathModules = [
    {
      title: 'Unit 1: Numbers',
      lessons: [
        {
          title: 'Lesson 1: Natural Numbers',
          points: [
            'Numbers used for counting (1,2,3…)',
            'No negative or decimal',
            'Example: 5 apples',
          ],
        },
        {
          title: 'Lesson 2: Addition',
          points: [
            'Combining two numbers',
            'Symbol: +',
            'Example: 2 + 3 = 5',
          ],
        },
      ],
    },
    {
      title: 'Unit 2: Algebra Basics',
      lessons: [
        {
          title: 'Lesson 1: Variables',
          points: [
            'Letters representing unknown numbers',
            'Example: x + 2 = 5',
          ],
        },
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-neon-animated pb-20">
      <Navbar />
      <div className="container mx-auto px-6 pt-28">
        <motion.h2 initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="text-3xl font-semibold">Courses & Syllabus</motion.h2>
        
        <div className="mt-6 grid gap-6 md:grid-cols-3">
          {subjects.map((c)=>(
            <GlassCard key={c} className="glass-hover cursor-pointer" onClick={()=>setSelected(c)}>
              <div className="text-xl font-semibold">{c}</div>
              <div className="text-white/60 text-sm">Explore modules and lessons</div>
            </GlassCard>
          ))}
        </div>

        {selected === 'Mathematics' && (
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="mt-10 space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="text-2xl font-semibold">Mathematics Modules</h3>
              <button className="text-sm px-3 py-2 rounded-lg bg-white/10 border border-white/10" onClick={()=>setSelected(null)}>Back to subjects</button>
            </div>
            {mathModules.map((unit, idx) => (
              <GlassCard key={idx} className="space-y-4">
                <div className="text-xl font-semibold">{unit.title}</div>
                <div className="grid gap-4 md:grid-cols-2">
                  {unit.lessons.map((lesson, i) => (
                    <div key={i} className="p-4 rounded-xl bg-white/5 border border-white/10">
                      <div className="font-medium text-white mb-2">{lesson.title}</div>
                      <ul className="list-disc list-inside text-white/80 text-sm space-y-1">
                        {lesson.points.map((p, k) => <li key={k}>{p}</li>)}
                      </ul>
                    </div>
                  ))}
                </div>
              </GlassCard>
            ))}
          </motion.div>
        )}
      </div>
    </div>
  )
}
