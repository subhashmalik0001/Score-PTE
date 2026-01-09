import { motion } from 'framer-motion'

export const ShimmerButton = ({ children, className = "", onClick, ...props }) => {
  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className={`relative overflow-hidden px-6 py-3 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25 ${className}`}
      {...props}
    >
      <span className="relative z-10">{children}</span>
      <div className="absolute inset-0 -top-[2px] bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 -translate-x-full animate-shimmer" />
    </motion.button>
  )
}

// Add this to your CSS file or Tailwind config
// @keyframes shimmer {
//   0% { transform: translateX(-100%) skewX(-12deg); }
//   100% { transform: translateX(200%) skewX(-12deg); }
// }
// .animate-shimmer {
//   animation: shimmer 2s infinite;
// }