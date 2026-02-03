import { motion } from 'framer-motion'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { api, setToken } from '../lib/api'
import { Navbar } from '../components/layout/Navbar'

export default function Login() {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const onSubmit = async (e) => {
    e.preventDefault()
    setError('')
    setLoading(true)
    try {
      const { data } = await api.post('/auth/login', { email, password })
      setToken(data.token)
      navigate(`/dashboard/${data.role}`)
    } catch (err) {
      setError(err?.response?.data?.message || 'Login failed')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-neon-animated">
      <Navbar />
      <div className="grid place-items-center px-6 pt-24">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="glass rounded-2xl p-8 w-full max-w-md">
        <h2 className="text-3xl font-semibold">Login</h2>
        <form className="mt-6 space-y-4" onSubmit={onSubmit}>
          <input className="w-full rounded-xl bg-white/10 border border-white/10 p-3" placeholder="Email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          <input className="w-full rounded-xl bg-white/10 border border-white/10 p-3" placeholder="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
          {error && <div className="text-red-400 text-sm">{error}</div>}
          <button disabled={loading} className="w-full px-4 py-3 rounded-xl bg-electric-cyan shadow-neon disabled:opacity-50">{loading ? 'Signing In...' : 'Sign In'}</button>
        </form>
        <p className="mt-4 text-sm text-white/70">
          No account? <Link to="/signup" className="text-electric-blue">Create one</Link>
        </p>
      </motion.div>
      </div>
    </div>
  )
}
