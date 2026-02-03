import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { useState, useEffect } from 'react'

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()

  const links = [
    { name: 'Home', path: '/' },
    { name: 'Dashboard', path: '/dashboard/student' },
    { name: 'Courses', path: '/course' },
    { name: 'About', path: '/about' },
  ]

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false)
  }, [location])

  return (
    <nav className="fixed top-0 w-full z-50 px-4 md:px-6 py-4">
      <div className="glass rounded-full px-6 py-3 flex items-center justify-between max-w-7xl mx-auto backdrop-blur-md bg-black/20 border border-white/10">
        <Link to="/" className="text-2xl font-bold bg-gradient-to-r from-electric-cyan to-electric-violet bg-clip-text text-transparent">
          Gap Zero
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 items-center">
          {links.map((link) => (
            <Link 
              key={link.name} 
              to={link.path}
              className={`relative text-sm font-medium transition-colors hover:text-electric-cyan ${
                location.pathname === link.path ? 'text-electric-cyan' : 'text-white/70'
              }`}
            >
              {link.name}
              {location.pathname === link.path && (
                <motion.div 
                  layoutId="underline" 
                  className="absolute left-0 top-full mt-1 w-full h-0.5 bg-electric-cyan" 
                />
              )}
            </Link>
          ))}
        </div>

        <div className="hidden md:flex gap-4 items-center">
           <Link to="/login" className="px-5 py-2 rounded-full text-sm font-semibold bg-white/10 hover:bg-white/20 transition border border-white/5">
             Login
           </Link>
           <Link to="/signup" className="px-5 py-2 rounded-full text-sm font-semibold bg-electric-blue hover:bg-blue-600 transition shadow-neon text-black">
             Get Started
           </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden text-white p-1" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            className="absolute top-20 left-4 right-4 glass rounded-2xl p-6 flex flex-col gap-4 md:hidden z-40 bg-black/80 backdrop-blur-xl border border-white/10"
          >
            {links.map((link) => (
              <Link 
                key={link.name} 
                to={link.path}
                className={`text-lg font-medium ${
                  location.pathname === link.path ? 'text-electric-cyan' : 'text-white/80'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <div className="h-px bg-white/10 my-2" />
            <Link to="/login" className="text-center py-3 rounded-xl bg-white/10 font-semibold">Login</Link>
            <Link to="/signup" className="text-center py-3 rounded-xl bg-electric-blue text-black font-semibold shadow-neon">Get Started</Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
