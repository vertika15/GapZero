import { useEffect, useState } from 'react'
import { api } from '../lib/api'
import { Navbar } from '../components/layout/Navbar'
import { GlassCard } from '../components/ui/GlassCard'
import { motion } from 'framer-motion'

export default function LessonViewer() {
  const [subjectKey, setSubjectKey] = useState('mathematics')
  const [courses, setCourses] = useState([])
  const [error, setError] = useState('')

  useEffect(() => {
    const load = async () => {
      try {
        const { data } = await api.get(`/course?subjectKey=${subjectKey}`)
        setCourses(data)
      } catch (e) {
        setError('Unable to load lessons')
      }
    }
    load()
  }, [subjectKey])

  return (
    <div className="min-h-screen bg-neon-animated pb-20">
      <Navbar />
      <div className="container mx-auto px-6 pt-28">
      <motion.h2 initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="text-3xl font-semibold">Lesson Viewer</motion.h2>
      <div className="mt-4 flex gap-3">
        {['english','hindi','mathematics','science','computer'].map(k => (
          <button key={k} className={`px-3 py-2 rounded-xl ${subjectKey === k ? 'bg-electric-blue' : 'bg-white/10'}`} onClick={() => setSubjectKey(k)}>
            {k}
          </button>
        ))}
      </div>
      {error && <div className="text-red-400 mt-4">{error}</div>}
      <div className="mt-6 grid gap-6">
        {courses.map(course => (
          <GlassCard key={course._id} className="glass-hover">
            <div className="text-xl font-semibold">{course.title}</div>
            <div className="mt-4 grid gap-4">
              {course.modules.map((m, mi) => (
                <div key={mi} className="bg-white/5 rounded-xl p-4">
                  <div className="font-medium">{m.title} · {m.level}</div>
                  <div className="mt-2 grid gap-2">
                    {m.lessons.map((l, li) => (
                      <a key={li} href={l.videoUrl} target="_blank" rel="noreferrer" className="block px-3 py-2 rounded-xl bg-white/10 hover:bg-electric-cyan">
                        {l.title}
                      </a>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </GlassCard>
        ))}
      </div>
      </div>
    </div>
  )
}
