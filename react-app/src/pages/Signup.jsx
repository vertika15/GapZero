import { motion } from 'framer-motion'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { api, setToken } from '../lib/api'
import { Navbar } from '../components/layout/Navbar'

export default function Signup() {
  const navigate = useNavigate()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [role, setRole] = useState('student')

  const onSubmit = async (e) => {
    e.preventDefault()
    setError('')
    setLoading(true)
    try {
      const { data } = await api.post('/auth/register', { name, email, password, role })
      setToken(data.token)
      navigate('/onboarding')
    } catch (err) {
      setError(err?.response?.data?.message || 'Signup failed')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen grid place-items-center px-6">
      <Navbar />
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="glass rounded-2xl p-8 w-full max-w-md mt-24">
        <h2 className="text-3xl font-semibold">Sign Up</h2>
        <form className="mt-6 space-y-4" onSubmit={onSubmit}>
          <input className="w-full rounded-xl bg-white/10 border border-white/10 p-3" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required />
          <input className="w-full rounded-xl bg-white/10 border border-white/10 p-3" placeholder="Email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          <input className="w-full rounded-xl bg-white/10 border border-white/10 p-3" placeholder="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
          <div className="flex gap-2">
            {['student','teacher','admin'].map(r => (
              <button
                type="button"
                key={r}
                onClick={() => setRole(r)}
                className={`flex-1 px-3 py-2 rounded-xl border ${role===r ? 'bg-electric-blue text-black border-electric-blue' : 'bg-white/10 border-white/10 text-white/80'}`}
              >
                {r[0].toUpperCase()+r.slice(1)}
              </button>
            ))}
          </div>
          {error && <div className="text-red-400 text-sm">{error}</div>}
          <button disabled={loading} className="w-full px-4 py-3 rounded-xl bg-electric-violet shadow-neon disabled:opacity-50">{loading ? 'Creating...' : 'Create Account'}</button>
        </form>
        <p className="mt-4 text-sm text-white/70">
          Already have an account? <Link to="/login" className="text-electric-blue">Login</Link>
        </p>
      </motion.div>
    </div>
  )
}
