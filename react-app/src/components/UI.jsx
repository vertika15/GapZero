import { motion } from 'framer-motion';

export const NeonButton = ({ children, onClick, className = '' }) => (
  <motion.button
    whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(0, 243, 255, 0.7)" }}
    whileTap={{ scale: 0.95 }}
    onClick={onClick}
    className={`px-6 py-3 rounded-xl font-bold text-white bg-gradient-to-r from-cyan-500 to-blue-600 
    shadow-[0_0_15px_rgba(0,243,255,0.5)] border border-cyan-400/30 backdrop-blur-sm ${className}`}
  >
    {children}
  </motion.button>
);

export const GlassCard = ({ children, className = '' }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    className={`bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-xl ${className}`}
  >
    {children}
  </motion.div>
);
