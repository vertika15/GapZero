import { motion } from 'framer-motion'
import { twMerge } from 'tailwind-merge'

export function GlassCard({ children, className, hoverEffect = true, ...props }) {
  return (
    <motion.div
      className={twMerge(
        "glass rounded-2xl p-6 border border-white/10 relative overflow-hidden",
        hoverEffect && "hover:border-electric-blue/50 transition-colors duration-300",
        className
      )}
      {...props}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />
      {children}
    </motion.div>
  )
}
