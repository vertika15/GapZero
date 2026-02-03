import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { api } from '../lib/api'

export default function Onboarding() {
  const navigate = useNavigate()
  const [categories, setCategories] = useState([])
  const [selected, setSelected] = useState([])
  const [language, setLanguage] = useState('en')
  const [classNumber, setClassNumber] = useState(6)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const { data } = await api.get('/goals/categories')
        setCategories(data)
      } catch (e) {
        setError('Unable to load categories')
      }
    }
    fetchCategories()
  }, [])

  const toggleCategory = (key) => {
    if (selected.includes(key)) {
      setSelected(selected.filter(k => k !== key))
    } else {
      setSelected([...selected, key])
    }
  }

  const submit = async () => {
    setLoading(true)
    setError('')
    try {
      const payload = selected.map(k => ({
        categoryKey: k,
        targetLevel: 'Advanced',
        language
      }))
      await api.post('/goals/setup', payload)
      navigate('/assessment')
    } catch (e) {
      setError(e?.response?.data?.message || 'Failed to save onboarding')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen grid place-items-center px-6">
      <div className="glass rounded-2xl p-8 w-full max-w-2xl">
        <h2 className="text-3xl font-semibold">Onboarding</h2>
        <div className="mt-6 grid gap-6">
          <div>
            <div className="mb-2">Preferred Language</div>
            <div className="flex gap-3">
              <button className={`px-4 py-2 rounded-xl ${language === 'en' ? 'bg-electric-cyan' : 'bg-white/10'}`} onClick={() => setLanguage('en')}>English</button>
              <button className={`px-4 py-2 rounded-xl ${language === 'hi' ? 'bg-electric-cyan' : 'bg-white/10'}`} onClick={() => setLanguage('hi')}>हिंदी</button>
            </div>
          </div>
          <div>
            <div className="mb-2">Education Level (Class)</div>
            <select className="w-full rounded-xl bg-white/10 border border-white/10 p-3" value={classNumber} onChange={(e) => setClassNumber(Number(e.target.value))}>
              {[...Array(10)].map((_, i) => (
                <option key={i+1} value={i+1}>Class {i+1}</option>
              ))}
            </select>
          </div>
          <div>
            <div className="mb-2">Goals (Subjects)</div>
            <div className="flex flex-wrap gap-3">
              {categories.map(c => (
                <button key={c.key} className={`px-3 py-2 rounded-xl ${selected.includes(c.key) ? 'bg-electric-blue' : 'bg-white/10'}`} onClick={() => toggleCategory(c.key)}>
                  {language === 'hi' ? c.nameHi : c.nameEn}
                </button>
              ))}
            </div>
          </div>
          {error && <div className="text-red-400 text-sm">{error}</div>}
          <button disabled={loading || selected.length === 0} className="px-4 py-3 rounded-xl bg-electric-cyan disabled:opacity-50" onClick={submit}>
            {loading ? 'Saving...' : 'Continue'}
          </button>
        </div>
      </div>
    </div>
  )
}
